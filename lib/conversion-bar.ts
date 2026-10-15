/**
 * Pages that show the mobile conversion bar (Ara | WhatsApp | Teklif Talebi).
 * Single source of truth: used by the investment page template, the BESS page and
 * the floating WhatsApp button (which is hidden on mobile where the bar is active).
 * Phone/WhatsApp numbers are NOT stored here; they come from dict.contact.
 */
export type ConversionBarConfig = {
  /** Target of the "Teklif Talebi" button. */
  quoteHref: string;
  /** service_type sent to analytics. */
  serviceType: string;
  /** Pre-filled WhatsApp message (topic only, no personal data). */
  waText: string;
};

export const conversionBarPages: Record<string, ConversionBarConfig> = {
  "/tr/satilik-enerji-santralleri": {
    quoteHref: "/tr/santral-satin-al",
    serviceType: "buyer_hub",
    waText: "Merhaba, satılık enerji santrali arayışım hakkında bilgi almak istiyorum."
  },
  "/tr/satilik-hes": {
    quoteHref: "#yatirim-formu",
    serviceType: "hes",
    waText: "Merhaba, satılık HES arayışım ve yatırım kriterlerim hakkında görüşmek istiyorum."
  },
  "/tr/santralini-sat": {
    quoteHref: "#yatirim-formu",
    serviceType: "seller",
    waText: "Merhaba, santralimin satışı hakkında gizli bir görüşme talep etmek istiyorum."
  },
  "/tr/hes-degerleme": {
    // No in-page form on this page yet and valuation is requested by buyers, sellers, partners and
    // lenders alike, so it must not land on a seller- or buyer-only page: generic consultation form.
    quoteHref: "/tr/iletisim",
    serviceType: "valuation",
    waText: "Merhaba, HES değerleme hakkında bilgi almak istiyorum."
  },
  "/tr/enerji-santrali-due-diligence": {
    // No in-page form yet: generic consultation form until an approved in-page form exists.
    quoteHref: "/tr/iletisim",
    serviceType: "diligence",
    waText: "Merhaba, satın almayı düşündüğüm bir santral için teknik due diligence hakkında bilgi almak istiyorum."
  },
  "/tr/battery-storage": {
    quoteHref: "/tr/free-consultation",
    serviceType: "bess",
    waText: "Merhaba, santralimiz için BESS ön fizibilitesi ve MW/MWh optimizasyonu hakkında bilgi almak istiyorum."
  }
};

export function getConversionBar(pathname: string | null | undefined): ConversionBarConfig | null {
  if (!pathname) return null;
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return conversionBarPages[normalized] ?? null;
}
