import Image from "next/image";
import { Badge } from "@/components/Badge";
import { ContactRow } from "@/components/ContactRow";
import { SIGNATURE_ACTION_LINKS, SIGNATURE_BADGES, SIGNATURE_PERSON } from "@/lib/signature-data";

export function Signature() {
  const p = SIGNATURE_PERSON;

  return (
    <div className="w-full max-w-[640px] rounded-md border border-[#E2E8F0] bg-white p-6 font-sans text-[#0F172A] shadow-sm dark:border-white/10 dark:bg-[#0A1628] dark:text-white">
      <div className="mb-4 h-[3px] w-full rounded-full bg-[#28860C]" />

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex shrink-0 flex-col gap-3 border-b border-[#E2E8F0] pb-4 sm:w-[150px] sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5 dark:border-white/10">
          <Image
            src="/email/logo.png"
            alt={p.company}
            width={320}
            height={126}
            className="h-auto w-full max-w-[150px] object-contain"
          />
          <div className="flex items-start gap-2.5">
            <Image
              src="/email/qr.png"
              alt={`QR: ${p.website}`}
              width={96}
              height={96}
              className="h-14 w-14 shrink-0 rounded border border-[#E2E8F0] dark:border-white/20"
            />
            <p className="text-[9px] leading-[13px] text-[#4B5A6B] dark:text-white/60">
              Web sitemizi ziyaret etmek için QR kodu okutun
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1 sm:pl-1">
          <p className="text-[17px] font-bold leading-tight text-[#0A1628] dark:text-white">{p.name}</p>
          <p className="mt-1 text-[12px] font-bold tracking-wide text-[#28860C]">
            {p.title} &middot; {p.company}
          </p>
          <p className="mt-2 text-[10px] leading-[14px] text-[#4B5A6B] dark:text-white/60">{p.legalName}</p>

          <div className="mt-3 flex flex-col gap-0.5">
            <ContactRow icon="phone" text={p.phone} href={`tel:${p.phoneHref}`} />
            <ContactRow icon="mail" text={p.email} href={`mailto:${p.email}`} />
            <ContactRow icon="globe" text={p.websiteLabel} href={p.website} />
            <ContactRow icon="linkedin" text={p.linkedinLabel} href={p.linkedin} />
            <ContactRow icon="pin" text={p.addressLines.join(", ")} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {SIGNATURE_BADGES.map((badge) => (
          <Badge key={badge.label} label={badge.label} />
        ))}
      </div>

      <div className="mt-4 border-t border-[#E2E8F0] pt-3 dark:border-white/10">
        <p className="mb-2.5 text-[12px] font-bold italic text-[#0A1628] dark:text-white">{p.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {SIGNATURE_ACTION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-[#E2E8F0] bg-white px-3 py-1.5 text-[11px] font-bold text-[#0A1628] no-underline transition-colors hover:border-[#28860C] hover:text-[#28860C] dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
