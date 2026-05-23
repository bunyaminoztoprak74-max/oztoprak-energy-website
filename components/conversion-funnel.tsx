import Link from "next/link";
import { CalendarDays, Download, MessageSquareText } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { contactPath } from "@/lib/routes";

const copy = {
  en: {
    title: "Start with a focused technical assessment",
    text: "Share the plant type, capacity, current decision point and the main technical concern. The first response can define whether the next step should be a desktop review, site audit, commissioning readiness check or EPC advisory session.",
    items: ["Request Technical Consultation", "Book Initial Assessment", "Download Consultation Brief"]
  },
  tr: {
    title: "Odakli teknik degerlendirme ile baslayin",
    text: "Santral turunu, kapasiteyi, mevcut karar noktasini ve ana teknik problemi paylasin. Ilk geri donus, sonraki adimin masa basi inceleme, saha denetimi, devreye alma hazirlik kontrolu veya EPC danismanlik oturumu olup olmadigini netlestirebilir.",
    items: ["Teknik Danismanlik Talep Et", "Ilk Degerlendirme Planla", "Danismanlik Bilgi Notu"]
  }
} satisfies Record<Locale, { title: string; text: string; items: string[] }>;

export function ConversionFunnel({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const href = contactPath(locale);
  const icons = [MessageSquareText, CalendarDays, Download];

  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-white">{c.title}</h2>
          <p className="mt-4 leading-8 text-steel">{c.text}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Link key={item} href={href} className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-energy-500/60 hover:bg-white/[0.07]">
                <Icon className="h-5 w-5 text-energy-500" />
                <span className="mt-5 block text-sm font-semibold leading-6 text-white">{item}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
