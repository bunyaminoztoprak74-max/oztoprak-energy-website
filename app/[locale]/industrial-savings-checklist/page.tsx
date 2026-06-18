import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { PrintButton } from "@/components/print-button";
import { isLocale, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Industrial Electricity Cost Savings Checklist",
    eyebrow: "Free Diagnostic Tool",
    description: "A practical checklist for factory and industrial facility managers to identify and prioritize electricity cost reduction opportunities — reactive penalties, contract demand, tariff, and solar.",
    breadcrumb: "Savings Checklist",
    printLabel: "Print this checklist",
    intro: "Use this checklist to identify which cost reduction opportunities apply to your facility. Each section corresponds to a distinct saving lever. Review them with your energy or maintenance manager. Sections marked with more than two items checked warrant immediate professional review.",
    sections: [
      {
        title: "Reactive Power and Compensation System",
        items: [
          "Last 12 invoices show reactive power penalty line items in more than 3 billing periods",
          "Reactive penalty exceeds 5% of active energy charge in any period",
          "Compensation panel was installed more than 5 years ago without a full capacitor test",
          "Facility has added significant inductive loads (motors, compressors, welding) since panel was sized",
          "Facility uses variable frequency drives (VFDs) or switching power supplies",
          "Panel controller displays reactive power that is not fully compensated during peak shifts"
        ]
      },
      {
        title: "Contract Demand and Capacity Charges",
        items: [
          "Monthly invoices show excess demand (aşım talep bedeli) charges in more than 2 periods per year",
          "Contracted demand was set more than 3 years ago without review",
          "Production capacity has changed significantly since the contract was set",
          "Demand peaks occur only during shift startup or specific production sequences",
          "Invoices show demand utilization below 60% of contracted level for more than 4 months"
        ]
      },
      {
        title: "Tariff Category and Market Eligibility",
        items: [
          "Annual electricity consumption exceeds 1,000,000 kWh (open market threshold)",
          "Facility is currently on regulated distribution tariff (dağıtım tarifesi)",
          "Last tariff review was more than 2 years ago",
          "Facility has not evaluated time-of-use tariff structures for load shifting"
        ]
      },
      {
        title: "Rooftop Solar Feasibility",
        items: [
          "Facility has more than 500 m² of suitable south- or east-facing roof area",
          "Annual consumption exceeds 200,000 kWh",
          "Facility operates during daylight hours with significant daytime load",
          "Roof structure is less than 20 years old and in sound condition",
          "No major shading from neighboring structures or rooftop equipment"
        ]
      },
      {
        title: "Energy Monitoring and Management",
        items: [
          "No sub-metering for production lines or high-consumption equipment",
          "Energy consumption is not tracked per unit of production (specific energy intensity)",
          "Compressed air system has not been audited for leaks in more than 2 years",
          "Lighting has not been upgraded to LED in production and warehouse areas",
          "Motor inventory has not been reviewed for oversizing or continuous operation at partial load"
        ]
      }
    ],
    resultTitle: "Interpreting Your Results",
    results: [
      { threshold: "3 or more items checked in Reactive Power section", action: "Request a reactive penalty analysis — likely recoverable cost." },
      { threshold: "2 or more items in Contract Demand section", action: "Contract renegotiation or load management review recommended." },
      { threshold: "All tariff items checked", action: "Open market eligibility assessment warranted immediately." },
      { threshold: "4+ solar items checked", action: "Rooftop solar feasibility study likely to show strong payback." },
      { threshold: "5+ total items across all sections", action: "Comprehensive industrial energy cost diagnostic recommended." }
    ],
    ctaTitle: "Want a Professional Review of Your Results?",
    ctaText: "Send us your last 12 months of electricity bills. We will apply this checklist systematically and prepare a written preliminary memo identifying your highest-value savings opportunities.",
    ctaLabel: "Request Free Bill Review",
    ctaHref: "/en/industrial-bill-review",
    serviceLabel: "Industrial Energy Service",
    serviceHref: "/en/services/industrial-energy-cost-optimization"
  },
  tr: {
    title: "Sanayi Elektrik Faturası Tasarruf Kontrol Listesi",
    eyebrow: "Ücretsiz Tanı Aracı",
    description: "Fabrika ve sanayi tesisi yöneticileri için reaktif cezalar, sözleşme gücü, tarife ve güneş enerjisi konularında elektrik maliyeti düşürme fırsatlarını belirleyip önceliklendirmeye yarayan pratik kontrol listesi.",
    breadcrumb: "Tasarruf Kontrol Listesi",
    printLabel: "Bu listeyi yazdır",
    intro: "Bu kontrol listesini kullanarak hangi maliyet düşürme fırsatlarının tesisine uygulandığını belirleyin. Her bölüm ayrı bir tasarruf kolunu kapsar. Enerji veya bakım yöneticinizle birlikte gözden geçirin. İki veya daha fazla madde işaretlenen bölümler acil profesyonel inceleme gerektirir.",
    sections: [
      {
        title: "Reaktif Güç ve Kompanzasyon Sistemi",
        items: [
          "Son 12 faturada 3'ten fazla fatura döneminde reaktif enerji ceza kalemi görünüyor",
          "Herhangi bir dönemde reaktif ceza, aktif enerji ücretinin %5'ini aşıyor",
          "Kompanzasyon paneli kurulduğundan bu yana tam kondansatör testi yapılmadan 5 yıldan fazla geçti",
          "Panel boyutlandırıldığından bu yana önemli endüktif yükler (motor, kompresör, kaynak) eklendi",
          "Tesis değişken frekanslı sürücüler (VFD) veya anahtarlamalı güç kaynakları kullanıyor",
          "Panel kontrolörü, tepe vardiyadaki reaktif gücün tam kompanze edilmediğini gösteriyor"
        ]
      },
      {
        title: "Sözleşme Gücü ve Kapasite Bedelleri",
        items: [
          "Aylık faturalarda yılda 2'den fazla dönemde aşım talep bedeli kalemi var",
          "Sözleşme gücü 3 yıldan uzun süredir inceleme yapılmadan belirlendi",
          "Üretim kapasitesi sözleşme kurulumundan bu yana önemli ölçüde değişti",
          "Talep zirveleri yalnızca vardiya başlangıcında veya belirli üretim sıralarında oluşuyor",
          "Faturalar 4'ten fazla ay için sözleşmeli düzeyin %60'ının altında talep kullanımı gösteriyor"
        ]
      },
      {
        title: "Tarife Kategorisi ve Piyasa Uygunluğu",
        items: [
          "Yıllık elektrik tüketimi 1.000.000 kWh'ı aşıyor (serbest piyasa eşiği)",
          "Tesis hâlâ düzenlemeye tabi dağıtım tarifesiyle çalışıyor",
          "Son tarife incelemesi 2 yıldan önce yapıldı",
          "Tesis, yük kaydırma için zamansal tarife yapılarını değerlendirmedi"
        ]
      },
      {
        title: "Çatı GES Fizibilite",
        items: [
          "Tesisin 500 m²'nin üzerinde uygun güney veya doğuya bakan çatı alanı var",
          "Yıllık tüketim 200.000 kWh'ı aşıyor",
          "Tesis, gündüz saatlerinde önemli gündüz yüküyle çalışıyor",
          "Çatı yapısı 20 yaşın altında ve sağlam durumda",
          "Komşu yapılardan veya çatı ekipmanlarından kayda değer gölgeleme yok"
        ]
      },
      {
        title: "Enerji İzleme ve Yönetimi",
        items: [
          "Üretim hatları veya yüksek tüketimli ekipman için alt sayaç yok",
          "Enerji tüketimi birim üretim başına takip edilmiyor (özgül enerji yoğunluğu)",
          "Basınçlı hava sistemi kaçak açısından 2 yıldan uzun süredir denetlenmedi",
          "Üretim ve depo alanlarında aydınlatma LED'e dönüştürülmedi",
          "Motor envanteri aşırı boyutlandırma veya kısmi yükte sürekli çalışma açısından gözden geçirilmedi"
        ]
      }
    ],
    resultTitle: "Sonuçlarınızı Yorumlamak",
    results: [
      { threshold: "Reaktif Güç bölümünde 3 veya daha fazla madde işaretlendi", action: "Reaktif ceza analizi talep edin — kurtarılabilir maliyet büyük olasılıkla mevcut." },
      { threshold: "Sözleşme Gücü bölümünde 2 veya daha fazla madde", action: "Sözleşme yeniden müzakeresi veya yük yönetimi incelemesi önerilir." },
      { threshold: "Tüm tarife maddeleri işaretlendi", action: "Serbest piyasa uygunluğu değerlendirmesi acilen yapılmalı." },
      { threshold: "4 veya daha fazla GES maddesi işaretlendi", action: "Çatı GES fizibilite çalışması güçlü geri ödeme gösterme olasılığı yüksek." },
      { threshold: "Tüm bölümlerde toplamda 5+ madde", action: "Kapsamlı sanayi enerji maliyet teşhisi önerilir." }
    ],
    ctaTitle: "Sonuçlarınız İçin Profesyonel İnceleme İster Misiniz?",
    ctaText: "Son 12 aylık elektrik faturalarınızı gönderin. Bu kontrol listesini sistematik olarak uygulayarak en yüksek değerli tasarruf fırsatlarınızı belirleyen yazılı bir ön not hazırlayacağız.",
    ctaLabel: "Ücretsiz Fatura İncelemesi Talep Et",
    ctaHref: "/tr/industrial-bill-review",
    serviceLabel: "Sanayi Enerji Hizmeti",
    serviceHref: "/tr/services/endustriyel-enerji-maliyet-optimizasyonu"
  }
} satisfies Record<Locale, {
  title: string; eyebrow: string; description: string; breadcrumb: string;
  printLabel: string; intro: string;
  sections: Array<{ title: string; items: string[] }>;
  resultTitle: string;
  results: Array<{ threshold: string; action: string }>;
  ctaTitle: string; ctaText: string; ctaLabel: string; ctaHref: string;
  serviceLabel: string; serviceHref: string;
}>;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];
  return buildMetadata({ locale, path: "/industrial-savings-checklist", title: page.title, description: page.description });
}

export default async function IndustrialSavingsChecklist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20 print:bg-white print:py-8">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: page.breadcrumb }]} />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-energy-500 print:text-black">{page.eyebrow}</p>
              <h1 className="max-w-3xl text-balance text-4xl font-bold text-white print:text-black sm:text-5xl">{page.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel print:text-gray-700">{page.description}</p>
            </div>
            <PrintButton label={page.printLabel} />
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-steel print:text-gray-600">{page.intro}</p>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 print:bg-white print:py-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {page.sections.map((section, si) => (
              <div key={section.title} className="premium-card rounded-lg p-6 print:border print:border-gray-300 print:shadow-none">
                <h2 className="mb-5 flex items-center gap-3 text-lg font-bold text-white print:text-black">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-energy-500/20 text-xs font-bold text-energy-500 print:bg-gray-200 print:text-black">
                    {si + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="grid gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-steel print:text-gray-700">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 rounded border border-white/20 print:border-gray-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Results interpretation */}
          <div className="mt-10 rounded-xl border border-energy-500/20 bg-energy-500/5 p-8 print:border-gray-300 print:bg-gray-50">
            <h2 className="mb-6 text-2xl font-bold text-white print:text-black">{page.resultTitle}</h2>
            <div className="grid gap-4">
              {page.results.map((result) => (
                <div key={result.threshold} className="flex gap-4 rounded-lg border border-white/10 bg-navy-950/50 p-4 print:border-gray-200 print:bg-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 rounded border border-white/20 print:border-gray-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-white print:text-black">{result.threshold}</p>
                    <p className="mt-1 text-sm text-steel print:text-gray-600">→ {result.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA — hidden on print */}
      <section className="bg-energy-500/10 border-y border-energy-500/20 py-14 print:hidden">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{page.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-steel">{page.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={page.ctaHref} className="rounded-md bg-energy-500 px-6 py-4 text-sm font-bold text-navy-950 shadow-glow hover:bg-white">
              {page.ctaLabel}
            </Link>
            <Link href={page.serviceHref} className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {page.serviceLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
