import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Brain, BarChart2, Cpu } from "lucide-react";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/ai-energy",
    title: en
      ? "AI in Renewable Energy — Engineering Perspective | Oztoprak Energy"
      : "Yenilenebilir Enerjide Yapay Zeka — Mühendislik Perspektifi | Öztoprak Enerji",
    description: en
      ? "How AI and machine learning are being applied to hydropower and solar plant performance, O&M optimization, fault detection, and yield forecasting — from an independent engineering consultant's perspective."
      : "Yapay zeka ve makine öğrenmesinin hidroelektrik ve güneş santrali performansı, O&M optimizasyonu, arıza tespiti ve verim tahminine nasıl uygulandığı — bağımsız bir mühendislik danışmanının perspektifinden."
  });
}

export default async function AiEnergyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: en ? "AI & Energy" : "YZ ve Enerji", url: `/${locale}/ai-energy` }
    ]),
    organizationSchema(locale)
  ];

  const useCases = en
    ? [
        {
          icon: BarChart2,
          title: "Performance Anomaly Detection",
          text: "ML-based monitoring can identify inverter degradation, soiling patterns, clipping losses, and string faults significantly earlier than threshold-based SCADA alerts. The value is not the algorithm — it is the correct interpretation of what the signal means for O&M scheduling and warranty claims."
        },
        {
          icon: Brain,
          title: "Yield Forecasting and Dispatch Optimization",
          text: "Short-term generation forecasting for solar and hydro using numerical weather prediction and historical correction factors improves dispatch scheduling and reduces imbalance costs in Turkey's electricity market. Independent review of forecast methodology is critical for lender reporting."
        },
        {
          icon: Cpu,
          title: "Predictive Maintenance for Hydro Assets",
          text: "Vibration signature analysis, temperature trend monitoring, and operational envelope tracking can reduce unplanned outages in turbine-generator sets. Effective implementation requires sensor quality validation and integration with the existing O&M workflow — not just software deployment."
        }
      ]
    : [
        {
          icon: BarChart2,
          title: "Performans Anomali Tespiti",
          text: "ML tabanlı izleme, invertör bozulmasını, kirlilik düzenlerini, kırpma kayıplarını ve string arızalarını eşik tabanlı SCADA uyarılarından çok daha erken tespit edebilir. Değer algoritmada değil — sinyalin O&M zamanlaması ve garanti talepleri açısından ne anlama geldiğinin doğru yorumlanmasındadır."
        },
        {
          icon: Brain,
          title: "Verim Tahmini ve Sevk Optimizasyonu",
          text: "Sayısal hava tahmini ve tarihsel düzeltme faktörlerini kullanan GES ve HES kısa vadeli üretim tahmini, Türkiye elektrik piyasasında sevk zamanlamasını iyileştirir ve dengesizlik maliyetlerini azaltır. Tahmin metodolojisinin bağımsız incelemesi, kredi kuruluşu raporlaması için kritiktir."
        },
        {
          icon: Cpu,
          title: "HES Varlıkları için Kestirimci Bakım",
          text: "Vibrasyon imza analizi, sıcaklık trend izleme ve operasyonel zarf takibi, türbin-jeneratör setlerinde plansız duruşları azaltabilir. Etkili uygulama yalnızca yazılım dağıtımı değil, sensör kalitesi doğrulama ve mevcut O&M iş akışıyla entegrasyon gerektirir."
        }
      ];

  const whatWeOffer = en
    ? [
        "Independent review of AI/ML-based monitoring tool vendor claims and methodology",
        "Assessment of data quality, sensor coverage, and SCADA integration adequacy",
        "Evaluation of yield forecasting models for lender and investor reporting purposes",
        "Owner's engineering oversight of digital twin or predictive maintenance deployments",
        "Technical due diligence on assets where AI-based O&M tools are in use",
        "Advisory on separating genuine performance improvement from vendor marketing claims"
      ]
    : [
        "Yapay zeka/ML tabanlı izleme aracı satıcı iddialarının ve metodolojisinin bağımsız incelemesi",
        "Veri kalitesi, sensör kapsamı ve SCADA entegrasyon yeterliliğinin değerlendirmesi",
        "Kredi kuruluşu ve yatırımcı raporlama amaçları için verim tahmin modellerinin değerlendirilmesi",
        "Dijital ikiz veya kestirimci bakım dağıtımlarının işveren mühendisliği denetimi",
        "Yapay zeka tabanlı O&M araçlarının kullanıldığı varlıklarda teknik durum tespiti",
        "Gerçek performans iyileştirmesini satıcı pazarlama iddialarından ayırt etme danışmanlığı"
      ];

  const relatedServices = en
    ? ["owners-engineering", "technical-due-diligence", "asset-management", "om-performance-improvement", "energy-audit"]
    : ["isveren-muhendisligi", "teknik-durum-tespiti", "teknik-varlik-yonetimi", "isletme-bakim-performans-iyilestirme", "enerji-denetimi"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Engineering perspective · Not vendor marketing" : "Mühendislik perspektifi · Satıcı pazarlaması değil"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en ? "AI in Renewable Energy — Engineering Perspective" : "Yenilenebilir Enerjide Yapay Zeka — Mühendislik Perspektifi"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "AI tools in renewable energy are proliferating fast. Some deliver measurable value; many do not. Oztoprak Energy provides independent technical assessment of AI and digital tools applied to plant performance, O&M, and yield forecasting — helping owners and investors distinguish genuine improvement from marketing."
              : "Yenilenebilir enerjideki yapay zeka araçları hızla çoğalıyor. Bazıları ölçülebilir değer sunuyor; çoğu sunmuyor. Öztoprak Enerji, santral performansı, O&M ve verim tahminine uygulanan yapay zeka ve dijital araçların bağımsız teknik değerlendirmesini sağlıyor — sahip ve yatırımcıların gerçek iyileştirmeyi pazarlamadan ayırt etmesine yardımcı oluyor."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Discuss Your Digital Tool Question" : "Dijital Araç Sorunuzu Tartışın"}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "High-value AI applications in renewable energy" : "Yenilenebilir enerjide yüksek değerli yapay zeka uygulamaları"}
          </h2>
          <p className="mt-3 max-w-2xl text-steel text-sm">
            {en
              ? "These are the applications where independent technical oversight adds the most value — not where the software claims to add value."
              : "Bunlar bağımsız teknik denetimin en fazla değer kattığı uygulamalar — yazılımın değer kattığını iddia ettiği yer değil."}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card rounded-xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {en ? "What we offer" : "Ne sunuyoruz"}
            </h2>
            <div className="mt-6 grid gap-3">
              {whatWeOffer.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {en ? "Related services" : "İlgili hizmetler"}
            </h2>
            <div className="mt-6 grid gap-2">
              {relatedServices.map((slug) => (
                <Link key={slug} href={servicePath(locale, slug)} className="group flex items-center gap-2 text-sm text-steel hover:text-energy-500 transition">
                  <span className="h-px w-4 bg-energy-500/40 group-hover:w-6 group-hover:bg-energy-500 transition-all" />
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "The honest position" : "Dürüst tutum"}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "AI in energy is real and growing. But the most common failure mode is deploying software onto plants where the fundamental data infrastructure — sensor coverage, SCADA quality, historian architecture — cannot support the claims being made. Independent technical review before any AI deployment is not cautious; it is necessary."
                  : "Enerjide yapay zeka gerçek ve büyüyor. Ancak en yaygın başarısızlık modu, temel veri altyapısının — sensör kapsamı, SCADA kalitesi, tarih yazıcı mimarisi — öne sürülen iddiaları destekleyemediği santrallere yazılım dağıtmaktır. Herhangi bir yapay zeka dağıtımından önce bağımsız teknik inceleme temkinli değil; zorunludur."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
