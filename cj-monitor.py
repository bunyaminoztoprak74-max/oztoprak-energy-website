#!/usr/bin/env python3
"""
CJ Affiliate pending-advertiser monitor.

Runs inside GitHub Actions (cj-advertiser-check.yml), NOT in the Cowork
scheduled-task sandbox -- the sandbox's outbound network allowlist blocks
CJ's API domains entirely (advertiser-lookup.api.cj.com, ads.api.cj.com),
confirmed 2026-08-26. GitHub Actions runners have no such restriction.

Writes cj-status.json to the repo root; the daily-seo-affiliate-management
scheduled task reads that committed file instead of calling the CJ API
directly, sidestepping the sandbox network block entirely.

Docs: https://lab-developers.d.cjpowered.com/docs/rest-apis/advertiser-lookup

Caveat: the API only exposes relationship-status = "joined" / "notjoined".
It cannot distinguish "pending review" from "never applied" or "declined".
"""
import json
import os
import sys
import xml.etree.ElementTree as ET
import urllib.request
import urllib.error
from datetime import datetime, timezone

TRACKED_ADVERTISERS = {
    "1464653": "Priceline",
    "1675692": "IHG Hotels AMER",
    "4381309": "IHG Europe",
    "3014150": "Qatar Airways",
    "2271086": "Intuit QuickBooks",
    "5240294": "Quantum Fiber",
}

OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cj-status.json")


def main() -> int:
    token = os.environ.get("CJ_ACCESS_TOKEN", "").strip()
    company_id = os.environ.get("CJ_COMPANY_ID", "").strip()

    result = {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "ok": False,
        "joined": [],
        "still_pending": [],
        "error": None,
    }

    if not token or not company_id:
        result["error"] = "CJ_ACCESS_TOKEN veya CJ_COMPANY_ID env değişkeni eksik."
        write_output(result)
        print(result["error"])
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
        result["error"] = f"CJ Advertiser Lookup API {e.code} döndü: {e.read()[:500]}"
        write_output(result)
        print(result["error"])
        return 1
    except urllib.error.URLError as e:
        result["error"] = f"CJ Advertiser Lookup API'sine ulaşılamadı: {e}"
        write_output(result)
        print(result["error"])
        return 1

    try:
        root = ET.fromstring(body)
    except ET.ParseError as e:
        result["error"] = f"API yanıtı parse edilemedi: {e}"
        write_output(result)
        print(result["error"])
        return 1

    seen_ids = set()
    for adv in root.findall(".//advertiser"):
        adv_id = (adv.findtext("advertiser-id") or "").strip()
        status = (adv.findtext("relationship-status") or "").strip().lower()
        name = TRACKED_ADVERTISERS.get(adv_id, adv.findtext("advertiser-name") or adv_id)
        seen_ids.add(adv_id)
        entry = {"id": adv_id, "name": name}
        if status == "joined":
            result["joined"].append(entry)
        else:
            result["still_pending"].append(entry)

    for adv_id, name in TRACKED_ADVERTISERS.items():
        if adv_id not in seen_ids:
            result["still_pending"].append({"id": adv_id, "name": name})

    result["ok"] = True
    write_output(result)

    if result["joined"]:
        print("⚡ YENİ ONAYLANANLAR:")
        for e in result["joined"]:
            print(f"  - {e['name']} (CID {e['id']})")
    if result["still_pending"]:
        print("⏳ ONAY BEKLEYEN:")
        for e in result["still_pending"]:
            print(f"  - {e['name']} (CID {e['id']})")

    return 0


def write_output(result: dict) -> None:
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    sys.exit(main())
