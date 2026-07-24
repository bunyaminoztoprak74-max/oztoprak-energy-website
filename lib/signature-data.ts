// Single source of truth for the Öztoprak Enerji Danışmanlık email signature.
// Consumed by the on-screen preview (components/Signature.tsx) and by the
// email-safe HTML generator (lib/signature-html.ts) so both stay in sync.

export const SIGNATURE_BRAND = {
  navy: "#0A1628",
  navyDeep: "#00214C",
  green: "#28860C",
  greenDark: "#1F6B0A",
  white: "#FFFFFF",
  ink: "#0F172A",
  slate: "#4B5A6B",
  border: "#E2E8F0",
  paleBg: "#F4F7FA"
} as const;

export type SignatureBadge = {
  label: string;
};

export const SIGNATURE_BADGES: SignatureBadge[] = [
  { label: "HES" },
  { label: "GES" },
  { label: "BESS" },
  { label: "Owner's Engineering" },
  { label: "EPC" },
  { label: "Technical Due Diligence" },
  { label: "Commissioning" },
  { label: "Energy Efficiency" }
];

export type SignatureLink = {
  label: string;
  href: string;
};

export const SIGNATURE_PERSON = {
  name: "Bünyamin Öztoprak",
  title: "Founder | General Manager",
  company: "Öztoprak Enerji Danışmanlık",
  legalName:
    "Öztoprak Mühendislik Elektrik Enerji Müşavirlik İnşaat Taahhüt Danışmanlık Sanayi ve Ticaret Ltd. Şti.",
  phone: "+90 545 611 33 20",
  phoneHref: "+905456113320",
  email: "info@oztoprakenerji.com",
  website: "https://www.oztoprakenerji.com",
  websiteLabel: "www.oztoprakenerji.com",
  linkedin: "https://www.linkedin.com/company/oztoprak-enerji-danismanlik",
  linkedinLabel: "linkedin.com/company/oztoprak-enerji-danismanlik",
  whatsapp: "https://wa.me/905456113320",
  googleMaps: "https://www.google.com/maps/search/?api=1&query=Balgat+Mah.+Ziyabey+Cad.+No:30+%C4%B0%C3%A7+Kap%C4%B1+No:4+%C3%87ankaya+Ankara+T%C3%BCrkiye",
  addressLines: ["Balgat Mah. Ziyabey Cad. No:30 İç Kapı No:4", "Çankaya / Ankara, Türkiye"],
  tagline: "Enerji Projelerinde Güvenilir Çözüm Ortağınız",
  logoUrl: "https://www.oztoprakenerji.com/email/logo.png",
  logoWidth: 320,
  logoHeight: 126,
  qrUrl: "https://www.oztoprakenerji.com/email/qr.png",
  qrSize: 96
} as const;

export const SIGNATURE_ACTION_LINKS: SignatureLink[] = [
  { label: "Web Sitesi", href: SIGNATURE_PERSON.website },
  { label: "LinkedIn", href: SIGNATURE_PERSON.linkedin },
  { label: "WhatsApp", href: SIGNATURE_PERSON.whatsapp },
  { label: "Google Maps", href: SIGNATURE_PERSON.googleMaps }
];
