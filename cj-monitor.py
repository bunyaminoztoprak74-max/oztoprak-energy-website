#!/usr/bin/env python3
"""
CJ Affiliate pending-advertiser monitor.

Replaces the old members.cj.com browser-dashboard check (which requires a
live logged-in session Claude cannot establish, since entering CJ login
credentials is a prohibited action) with CJ's public Advertiser Lookup REST
API. Uses the same CJ_ACCESS_TOKEN / CJ_COMPANY_ID secrets already used by
the dealforge-ai CJ Product Feed import, so no new credentials are needed.

Docs: https://lab-developers.d.cjpowered.com/docs/rest-apis/advertiser-lookup

Caveat: the API only exposes relationship-status = "joined" / "notjoined".
It cannot distinguish "pending review" from "never applied" or "declined" --
CJ does not expose that distinction over the API. So this script's job is
narrower than the old browser flow: it detects the JOINED transition for a
tracked list of advertiser CIDs (i.e. "got approved since last run"). It
cannot report which of the still-notjoined ones are genuinely "pending" vs
never submitted -- that distinction still requires the members.cj.com UI.
"""
import os
import sys
import xml.etree.ElementTree as ET
import urllib.request
import urllib.error

# Advertiser CIDs being tracked for approval (from daily-seo-affiliate-management SKILL.md, BÖLÜM C).
# Update this list as new applications are submitted / resolved.
TRACKED_ADVERTISERS = {
    "1464653": "Priceline",
    "1675692": "IHG Hotels AMER",
    "4381309": "IHG Europe",
    "3014150": "Qatar Airways",
    "2271086": "Intuit QuickBooks",
    "5240294": "Quantum Fiber",
}


def main() -> int:
    token = os.environ.get("CJ_ACCESS_TOKEN", "").strip()
    company_id = os.environ.get("CJ_COMPANY_ID", "").strip()

    if not token or not company_id:
        print("HATA: CJ_ACCESS_TOKEN veya CJ_COMPANY_ID env değişkeni eksik.")
        print("Bu script CJ Advertiser Lookup API'sini kullanır, browser gerektirmez.")
        return 1

    ids = ",".join(TRACKED_ADVERTISERS.keys())
    url = (
        "https://advertiser-lookup.api.cj.com/v2/advertiser-lookup"
        f"?requestor-cid={company_id}&advertiser-ids={ids}"
    )
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read()
    except urllib.error.HTTPError as e:
        print(f"HATA: CJ Advertiser Lookup API {e.code} döndü: {e.read()[:500]}")
        return 1
    except urllib.error.URLError as e:
        print(f"HATA: CJ Advertiser Lookup API'sine ulaşılamadı: {e}")
        return 1

    try:
        root = ET.fromstring(body)
    except ET.ParseError as e:
        print(f"HATA: API yanıtı parse edilemedi: {e}\nYanıt: {body[:500]}")
        return 1

    joined = []
    still_pending = []
    seen_ids = set()

    for adv in root.findall(".//advertiser"):
        adv_id = (adv.findtext("advertiser-id") or "").strip()
        status = (adv.findtext("relationship-status") or "").strip().lower()
        name = TRACKED_ADVERTISERS.get(adv_id, adv.findtext("advertiser-name") or adv_id)
        seen_ids.add(adv_id)
        if status == "joined":
            joined.append((adv_id, name))
        else:
            still_pending.append((adv_id, name))

    # Any tracked ID CJ didn't return at all (e.g. bad CID) counts as still-unresolved.
    for adv_id, name in TRACKED_ADVERTISERS.items():
        if adv_id not in seen_ids:
            still_pending.append((adv_id, name))

    if joined:
        print("⚡ YENİ ONAYLANANLAR:")
        for adv_id, name in joined:
            print(f"  - {name} (CID {adv_id}): relationship-status=joined")
        print()

    if still_pending:
        print("⏳ ONAY BEKLEYEN (henüz joined değil):")
        for adv_id, name in still_pending:
            print(f"  - {name} (CID {adv_id})")
        print()
        print("Not: API sadece joined/notjoined ayrımı yapar; 'pending' ile 'hiç başvurulmadı'")
        print("ayrımı için members.cj.com panelinden manuel kontrol hâlâ gerekebilir,")
        print("ama bu artık GÜNLÜK zorunluluk değil (haftalık BÖLÜM D taramasında yeterli).")

    if not joined and not still_pending:
        print("Beklenmedik durum: API'den hiç sonuç dönmedi.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
