// Single source of truth for the Öztoprak Enerji Danışmanlık email signature.
// Consumed by the on-screen preview (components/Signature.tsx) and by the
// email-safe HTML generator (lib/signature-html.ts) so both stay in sync.

export const SIGNATURE_BRAND = {
  navy: "#0A1628",
  navyDeep: "#00214C",
  green: "#1E7A34",
  greenAccent: "#28860C",
  white: "#FFFFFF",
  ink: "#0F1B2D",
  slate: "#5B6B7E",
  border: "#E4E9EF",
  paleBg: "#F3F6F9"
} as const;

export const SIGNATURE_BADGES: string[] = ["HES", "GES", "BESS", "EPC", "Owner's Engineering", "Technical Due Diligence"];

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
  linkedin: "https://www.linkedin.com/company/oztoprakenerji",
  linkedinLabel: "linkedin.com/company/oztoprakenerji",
  whatsapp: "https://wa.me/905456113320",
  addressLines: ["Balgat Mah. Ziyabey Cad. No:30 İç Kapı No:4", "Çankaya / Ankara, Türkiye"],
  tagline: "Enerji Projelerinde Güvenilir Çözüm Ortağınız",
  logoUrl: "https://www.oztoprakenerji.com/email/logo.png",
  logoNaturalWidth: 640,
  logoNaturalHeight: 253,
  logoDisplayWidth: 170,
  qrUrl: "https://www.oztoprakenerji.com/email/qr.png",
  qrDisplaySize: 90
} as const;

export const SIGNATURE_ACTION_LINKS: SignatureLink[] = [
  { label: "Web Sitesi", href: SIGNATURE_PERSON.website },
  { label: "LinkedIn", href: SIGNATURE_PERSON.linkedin },
  { label: "WhatsApp", href: SIGNATURE_PERSON.whatsapp }
];

export const signatureLogoDisplayHeight = Math.round(
  (SIGNATURE_PERSON.logoDisplayWidth / SIGNATURE_PERSON.logoNaturalWidth) * SIGNATURE_PERSON.logoNaturalHeight
);
