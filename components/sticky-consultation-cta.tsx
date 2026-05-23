import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { contactPath } from "@/lib/routes";

export function StickyConsultationCta({ locale }: { locale: Locale }) {
  return (
    <div className="fixed bottom-24 left-4 z-40 hidden lg:block">
      <Link
        href={contactPath(locale)}
        className="flex max-w-[220px] items-center gap-3 rounded-lg border border-energy-500/40 bg-navy-950/92 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur transition hover:-translate-y-1 hover:bg-energy-500 hover:text-navy-950"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        {locale === "en" ? "Request plant assessment" : "Santral degerlendirmesi al"}
      </Link>
    </div>
  );
}
