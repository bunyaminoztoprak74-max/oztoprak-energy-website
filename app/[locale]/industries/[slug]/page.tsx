import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/content/dictionaries";
import { getIndustries, getIndustry } from "@/content/programmatic-seo";
import { getServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) =>
    getIndustries(locale).map((industry) => ({ locale, slug: industry.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const industry = getIndustry(locale, slug);
  if (!industry) return {};
  const index = getIndustries(locale).findIndex((item) => item.slug === slug);
  const translated = getIndustries(alternateLocale(locale))[index];
  const title = locale === "en" ? `${industry.label} — Energy Cost Optimization` : `${industry.label} — Enerji Maliyet Optimizasyonu`;
  return buildMetadata({ locale, path: `/industries/${slug}`, alternatePath: translated ? `/industries/${translated.slug}` : undefined, title, description: industry.description });
}

export default async function IndustryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const industry = getIndustry(locale, slug);
  if (!industry) notFound();
  const dict = getDictionary(locale);

  const industrialServices = locale === "en"
    ? ["industrial-energy-cost-optimization", "energy-audit", "solar-energy-consulting"]
    : ["endustriyel-enerji-maliyet-optimizasyonu", "enerji-denetimi", "ges-danismanligi"];

  const allServices = getServices(locale);
  const relatedServices = industrialServices
    .map((s) => allServices.find((svc) => svc.slug === s))
    .filter(Boolean) as (typeof allServices)[number][];

  const copy = {
    en: {
      eyebrow: "Industry Focus",
      servicesTitle: "Relevant Services",
      servicesText: "These services directly address electricity cost and energy performance for industrial and manufacturing facilities.",
      costLeversTitle: "The Three Controllable Cost Levers",
      costLevers: [
        { title: "Reactive Power Management", text: "Eliminate reactive power penalties by identifying, inspecting and correcting compensation system failures. Reactive penalties of 5-15% of monthly electricity cost are common in facilities with motors, drives and welding equipment." },
        { title: "Demand Charge Optimization", text: "Align contracted power levels with actual peak demand behavior. Overcontracted facilities pay avoidable monthly capacity charges. Undercontracted facilities pay excess demand penalties. Both are correctable through demand profile analysis and re-contracting." },
        { title: "Tariff and Solar Access", text: "Assess open market electricity supply eligibility and rooftop solar feasibility with realistic self-consumption modeling. Industrial facilities with high daytime consumption and suitable roof areas typically achieve 4-8 year payback on rooftop solar at 2026 Turkish electricity tariffs." }
      ],
      processTitle: "How the Assessment Works",
      process: [
        { step: "1", title: "Bill decomposition", text: "12 months of electricity bills analyzed to separate reactive penalties, demand charges, energy tariff and distribution costs." },
        { step: "2", title: "Compensation system review", text: "Existing compensation panel inspected for capacity, harmonic risk and failure modes. Specification prepared for correction if needed." },
        { step: "3", title: "Demand profile analysis", text: "15-minute interval demand data reviewed against contracted level. Re-contracting opportunity quantified." },
        { step: "4", title: "Solar feasibility", text: "Rooftop solar yield modeled against hourly consumption. Self-consumption ratio and payback calculated for 2-3 system size scenarios." }
      ],
      faqsTitle: "Frequently Asked Questions",
      faqs: [
        { question: `How much can ${industry.label.toLowerCase()} reduce their electricity costs?`, answer: "Reactive penalty elimination and demand charge optimization together typically reduce the total monthly electricity bill by 8-20% without any production process change. Rooftop solar adds further active energy cost reduction over a 4-8 year payback horizon." },
        { question: "Do we need a site visit for the initial assessment?", answer: "The bill decomposition and demand profile analysis can begin with 12 months of bill data and meter records — no site visit needed for the initial assessment. Site inspection is required only if compensation system correction or solar feasibility involves physical measurements." },
        { question: "How long does the analysis take?", answer: "The bill decomposition takes 1-2 weeks with bill and meter data. Compensation system review adds 1-2 weeks if on-site inspection is needed. The full assessment including solar feasibility typically completes in 4-6 weeks." },
        { question: "Is reactive power compensation only about penalties?", answer: "No. Correctly sized compensation also reduces transformer loading, improves voltage stability and reduces cable losses. In facilities with heavy motor loads, correct compensation can also reduce nuisance trip events caused by voltage dips." }
      ],
      ctaTitle: "Request an Electricity Cost Review",
      ctaText: "Send your electricity bills or contact us to discuss how reactive penalty, demand charge and tariff optimization can reduce your facility's electricity costs."
    },
    tr: {
      eyebrow: "Sektör Odağı",
      servicesTitle: "İlgili Hizmetler",
      servicesText: "Bu hizmetler sanayi ve üretim tesislerinin elektrik maliyeti ve enerji performansını doğrudan ele alır.",
      costLeversTitle: "Üç Kontrol Edilebilir Maliyet Kolu",
      costLevers: [
        { title: "Reaktif Güç Yönetimi", text: "Kompanzasyon sistemi arızalarını tespit ederek, inceleyerek ve düzelterek reaktif güç cezalarını ortadan kaldırın. Motorlar, sürücüler ve kaynak ekipmanı bulunan tesislerde aylık elektrik maliyetinin yüzde 5-15'i reaktif ceza olarak karşımıza çıkmaktadır." },
        { title: "Talep Yükü Optimizasyonu", text: "Sözleşme güç düzeylerini gerçek pik talep davranışıyla uyumlandırın. Fazla sözleşmeli tesisler önlenebilir aylık kapasite bedeli öder. Az sözleşmeli tesisler aşım cezası öder. İkisi de talep profili analizi ve yeniden sözleşmeyle düzeltilebilir." },
        { title: "Tarife ve Güneş Enerjisi Erişimi", text: "Serbest piyasa elektrik arzı uygunluğunu ve gerçekçi öz tüketim modellemesiyle çatı GES fizibilitesini değerlendirin. Yüksek gündüz tüketimine ve uygun çatı alanlarına sahip sanayi tesisleri 2026 Türkiye elektrik tarifelerinde genellikle 4-8 yıl geri ödeme elde eder." }
      ],
      processTitle: "Değerlendirme Nasıl İşler",
      process: [
        { step: "1", title: "Fatura ayrışması", text: "12 aylık elektrik faturaları reaktif ceza, talep ücreti, enerji tarifesi ve dağıtım maliyetlerini ayırmak üzere analiz edilir." },
        { step: "2", title: "Kompanzasyon sistemi incelemesi", text: "Mevcut kompanzasyon panosu kapasite, harmonik riski ve arıza modları açısından incelenir. Gerekiyorsa düzeltme için teknik özellik hazırlanır." },
        { step: "3", title: "Talep profili analizi", text: "15 dakikalık aralık talep verisi sözleşme düzeyiyle karşılaştırılır. Yeniden sözleşme fırsatı sayısallaştırılır." },
        { step: "4", title: "GES fizibilitesi", text: "Çatı GES verimi saatlik tüketime göre modellenir. 2-3 sistem boyutu senaryosu için öz tüketim oranı ve geri ödeme hesaplanır." }
      ],
      faqsTitle: "Sıkça Sorulan Sorular",
      faqs: [
        { question: `${industry.label} elektrik maliyetini ne kadar azaltabilir?`, answer: "Reaktif ceza giderme ve talep yükü optimizasyonu birlikte herhangi bir üretim süreci değişikliği yapılmadan toplam aylık elektrik faturasını genellikle yüzde 8-20 oranında azaltır. Çatı GES, 4-8 yıllık geri ödeme ufkunda ek aktif enerji maliyet azaltımı sağlar." },
        { question: "İlk değerlendirme için saha ziyareti gerekli mi?", answer: "Fatura ayrışması ve talep profili analizi 12 aylık fatura verisi ve sayaç kayıtlarıyla başlayabilir; ilk değerlendirme için saha ziyareti gerekmez. Saha incelemesi yalnızca kompanzasyon sistemi düzeltmesi veya GES fizibilitesi fiziksel ölçüm gerektiriyorsa şarttır." },
        { question: "Analiz ne kadar sürer?", answer: "Fatura ayrışması fatura ve sayaç verisiyle 1-2 haftada tamamlanır. Kompanzasyon sistemi incelemesi yerinde muayene gerekiyorsa 1-2 hafta daha ekler. GES fizibilitesi dahil tam değerlendirme genellikle 4-6 haftada tamamlanır." },
        { question: "Reaktif güç kompanzasyonu yalnızca cezalarla mı ilgilidir?", answer: "Hayır. Doğru boyutlandırılmış kompanzasyon aynı zamanda trafo yüklemesini azaltır, gerilim kararlılığını iyileştirir ve kablo kayıplarını düşürür. Ağır motor yüklü tesislerde doğru kompanzasyon, gerilim salınımlarından kaynaklanan istenmeyen açma olaylarını da azaltabilir." }
      ],
      ctaTitle: "Elektrik Maliyeti İncelemesi Talep Edin",
      ctaText: "Elektrik faturalarınızı gönderin veya reaktif ceza, talep yükü ve tarife optimizasyonunun tesisinizin elektrik maliyetini nasıl azaltabileceğini görüşmek için bize ulaşın."
    }
  };

  const c = copy[locale];
  const faqs = c.faqs;
  const schemaData = faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Industries" : "Sektörler" }, { label: industry.label }]} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-energy-500">{c.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold text-white sm:text-5xl">{industry.label}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{industry.description}</p>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <SectionHeading title={c.costLeversTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {c.costLevers.map((lever) => (
              <div key={lever.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <p className="text-lg font-bold text-white">{lever.title}</p>
                <p className="mt-3 text-sm leading-7 text-steel">{lever.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading title={c.processTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((step) => (
              <div key={step.step} className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6">
                <p className="text-3xl font-bold text-energy-500">{step.step}</p>
                <p className="mt-3 text-base font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-steel">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <SectionHeading title={c.servicesTitle} description={c.servicesText} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="group block rounded-lg border border-white/10 bg-white/[0.035] p-6 hover:border-energy-500/55">
                <p className="text-base font-semibold text-white group-hover:text-energy-500">{service.title}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{service.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading title={c.faqsTitle} />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <p className="text-base font-semibold text-white">{faq.question}</p>
                <p className="mt-3 text-sm leading-7 text-steel">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{c.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">{c.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
