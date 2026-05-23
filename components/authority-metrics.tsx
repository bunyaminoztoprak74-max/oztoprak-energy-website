import type { Locale } from "@/lib/i18n";

const metrics = {
  en: [
    ["28+", "Years of plant operations and EPC experience"],
    ["275+ MW", "Managed renewable energy capacity experience"],
    ["8", "Completed power plant projects"],
    ["HPP + Solar", "Hydropower, solar, commissioning and O&M expertise"]
  ],
  tr: [
    ["28+", "Yil santral isletme ve EPC deneyimi"],
    ["275+ MW", "Yonetilen yenilenebilir enerji kapasitesi deneyimi"],
    ["8", "Tamamlanan enerji santrali projesi"],
    ["HES + GES", "Hidroelektrik, gunes, devreye alma ve O&M uzmanligi"]
  ]
} satisfies Record<Locale, Array<[string, string]>>;

export function AuthorityMetrics({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics[locale].map(([value, label]) => (
        <div
          key={label}
          className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-energy-500/50 hover:bg-white/[0.07] hover:shadow-[0_26px_90px_rgba(47,183,255,0.14)]"
        >
          <p className="text-3xl font-black tracking-tight text-white group-hover:text-energy-500">{value}</p>
          <p className="mt-3 text-sm leading-6 text-steel">{label}</p>
        </div>
      ))}
    </div>
  );
}
