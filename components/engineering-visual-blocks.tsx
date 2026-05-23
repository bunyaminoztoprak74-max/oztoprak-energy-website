import { ClipboardCheck, FileSearch, Gauge, RadioTower, Settings2, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const visualContent = {
  en: {
    processTitle: "Technical Advisory Process",
    lifecycleTitle: "Commissioning Lifecycle",
    auditTitle: "Technical Audit Logic",
    stages: [
      ["01", "Evidence intake", "Drawings, contracts, SCADA trends, commissioning files and O&M history are organized before conclusions are made."],
      ["02", "Field verification", "Site observations are checked against control logic, protection behavior, equipment condition and operator routines."],
      ["03", "Risk ranking", "Findings are ranked by safety, generation impact, grid compliance, CAPEX urgency and owner decision value."],
      ["04", "Action roadmap", "The output becomes a practical engineering plan with responsibilities, evidence gaps and next tests."]
    ],
    lifecycle: ["Mechanical completion", "Cold checks", "Energization", "Functional tests", "Performance run", "Handover"],
    audit: [
      "Asset condition",
      "Operating losses",
      "Protection and grid interface",
      "O&M maturity",
      "Corrective action priority"
    ]
  },
  tr: {
    processTitle: "Teknik Danismanlik Sureci",
    lifecycleTitle: "Devreye Alma Yasam Dongusu",
    auditTitle: "Teknik Denetim Mantigi",
    stages: [
      ["01", "Kanit toplama", "Cizimler, sozlesmeler, SCADA trendleri, devreye alma dosyalari ve O&M gecmisi sonuc uretilmeden once duzenlenir."],
      ["02", "Saha dogrulama", "Saha gozlemleri kontrol mantigi, koruma davranisi, ekipman durumu ve operator rutinleri ile karsilastirilir."],
      ["03", "Risk siralama", "Bulgular emniyet, uretim etkisi, sebeke uyumu, CAPEX aciliyeti ve isveren karar degeri ile siralanir."],
      ["04", "Aksiyon yol haritasi", "Cikti; sorumluluklari, kanit bosluklarini ve sonraki testleri iceren uygulanabilir muhendislik planina donusur."]
    ],
    lifecycle: ["Mekanik tamamlama", "Soguk kontroller", "Enerjilendirme", "Fonksiyonel testler", "Performans kosusu", "Teslim"],
    audit: [
      "Varlik durumu",
      "Isletme kayiplari",
      "Koruma ve sebeke arayuzu",
      "O&M olgunlugu",
      "Duzeltici aksiyon onceligi"
    ]
  }
} satisfies Record<Locale, {
  processTitle: string;
  lifecycleTitle: string;
  auditTitle: string;
  stages: Array<[string, string, string]>;
  lifecycle: string[];
  audit: string[];
}>;

const icons = [FileSearch, ShieldCheck, RadioTower, Gauge, Settings2, ClipboardCheck];

export function EngineeringVisualBlocks({ locale }: { locale: Locale }) {
  const copy = visualContent[locale];

  return (
    <section className="bg-navy-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_90px_rgba(0,0,0,0.22)]">
            <h2 className="text-2xl font-semibold text-white">{copy.processTitle}</h2>
            <div className="mt-7 grid gap-4">
              {copy.stages.map(([number, title, text]) => (
                <div key={number} className="grid gap-4 rounded-md border border-white/10 bg-navy-950/70 p-4 sm:grid-cols-[4rem_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-energy-500 text-lg font-black text-navy-950">{number}</div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-steel">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6 shadow-glow">
              <h2 className="text-2xl font-semibold text-white">{copy.lifecycleTitle}</h2>
              <div className="mt-7 grid gap-3">
                {copy.lifecycle.map((stage, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={stage} className="flex items-center gap-3 rounded-md border border-white/10 bg-navy-950/80 p-3">
                      <Icon className="h-4 w-4 shrink-0 text-energy-500" />
                      <span className="text-sm font-medium text-white/88">{stage}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">{copy.auditTitle}</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {copy.audit.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-navy-950/80 px-3 py-2 text-sm text-steel">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
