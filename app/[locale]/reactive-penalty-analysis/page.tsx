import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { IndustrialLeadForm } from "@/components/industrial-lead-form";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

const copy = {
  en: {
    title: "Reactive Power Penalty Analysis and Compensation System Review",
    eyebrow: "Industrial Power Quality Advisory",
    description: "Identify why your factory is paying reactive power penalties and get a clear action plan to eliminate or significantly reduce them — starting with your electricity invoices.",
    breadcrumb: "Reactive Penalty Analysis",
    heroStats: [
      { value: "10–25%", label: "typical reactive penalty share of total electricity bill" },
      { value: "0.4%", label: "reactive penalty ratio after compensation system fix (case study)" },
      { value: "3–6", label: "months typical payback on compensation panel upgrade" }
    ],
    whatTitle: "What Reactive Power Penalties Are and Why They Persist",
    whatText: "Turkish electricity regulations (EPDK tariff rules) charge industrial consumers for reactive energy consumption above the cos φ = 0.98 threshold. Every billing period where your reactive energy exceeds this limit, a penalty is applied on top of your active energy charges. Most factories have a compensation panel (kompanzasyon paneli) — but many are undersized for current loads, have failed capacitors, or operate with control systems that cannot respond to rapidly varying inductive loads. The penalty continues silently, often for years, because it appears as a percentage surcharge rather than a clearly labelled line item.",
    causesTitle: "Most Common Causes of Reactive Penalties",
    causes: [
      { title: "Undersized compensation panel", text: "Panel installed at commissioning no longer matches expanded production capacity or new inductive loads (motors, compressors, welding equipment)." },
      { title: "Failed or degraded capacitor banks", text: "Individual capacitor stages fail without triggering alarms. A panel at 60% capacity can still appear operational but provides insufficient compensation." },
      { title: "Harmonic distortion interference", text: "Variable frequency drives (VFDs) and power electronics generate harmonics that interact with compensation capacitors — causing them to overheat, fail, or resonate dangerously." },
      { title: "Control system lag", text: "Reactive power controller (RPC) step time and sensitivity settings that worked for stable loads fail to track rapid load fluctuations in process industries." },
      { title: "Metering point mismatch", text: "Compensation panel reactive compensation may be offset from the metering transformer measurement point, reducing its apparent effectiveness on the invoice." }
    ],
    reviewTitle: "What the Review Covers",
    reviewItems: [
      "12-month reactive energy consumption and penalty ratio trend",
      "Billing period peak reactive demand vs. contracted active power",
      "Compensation panel nameplate capacity vs. measured load profile estimate",
      "Harmonic risk assessment based on installed drive and rectifier inventory",
      "Metering configuration and compensation topology observations",
      "Written preliminary memo with penalty cost estimate and priority actions"
    ],
    processTitle: "How to Get Started",
    processSteps: [
      { step: "01", title: "Submit your request below", text: "Select 'High reactive power penalties' as your primary issue. We respond within 1–2 business days." },
      { step: "02", title: "Share your last 12 electricity invoices", text: "PDF or photograph is sufficient. We extract reactive penalty line items, peak demand data and billing period patterns." },
      { step: "03", title: "Receive a preliminary penalty analysis memo", text: "Within 5–7 working days: penalty cost breakdown, likely cause category, estimated savings potential and recommended next step." },
      { step: "04", title: "Optional: detailed field measurement engagement", text: "If a compensation panel upgrade or harmonic filter design is warranted, a paid on-site measurement engagement follows the preliminary review." }
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      { question: "Can you tell me the cause of the penalties from invoices alone?", answer: "In most cases, yes. Invoice data reveals whether the penalty is structural (consistently high across all periods), load-driven (peaks at certain shifts or seasons), or compensation-related (high despite apparent panel capacity). This is sufficient to recommend the priority next step." },
      { question: "How much can reactive penalties realistically be reduced?", answer: "In our industrial case study, reactive penalty ratio dropped from 11% to 0.4% of total bill after a combined compensation review and panel upgrade. Complete elimination is possible for many facilities; partial reduction (50–80%) is achievable in most cases." },
      { question: "Does our existing compensation panel need to be replaced entirely?", answer: "Not necessarily. Many cases are resolved by replacing failed capacitor stages, recalibrating the reactive power controller, or adding a detuned filter for harmonic protection. A full replacement is only recommended when the panel is fundamentally undersized for current load conditions." },
      { question: "We already had an electrician check the panel — is a specialist review still needed?", answer: "General electrical contractors typically verify that the panel is powered and not in alarm. Reactive penalty analysis requires reviewing the controller settings, capacitor bank test results, harmonic current levels, and metering configuration — which requires specialist knowledge and instrumentation." }
    ],
    caseStudyLabel: "Industrial Case Study: 16% Bill Reduction",
    caseStudyHref: "/en/projects/industrial-electricity-cost-optimization-case-study",
    serviceLabel: "Full Industrial Energy Service",
    serviceHref: "/en/services/industrial-energy-cost-optimization",
    billReviewLabel: "Free Electricity Bill Review",
    billReviewHref: "/en/industrial-bill-review",
    formTitle: "Request Reactive Penalty Analysis",
    formSubtitle: "Select 'High reactive power penalties' as your primary issue. We respond within 1–2 business days."
  },
  tr: {
    title: "Reaktif Enerji Cezası Analizi ve Kompanzasyon Sistemi İncelemesi",
    eyebrow: "Sanayi Güç Kalitesi Danışmanlığı",
    description: "Fabrikanızın neden reaktif ceza ödediğini belirleyin ve bunları ortadan kaldırmak veya önemli ölçüde azaltmak için net bir aksiyon planı alın — elektrik faturalarınızla başlayın.",
    breadcrumb: "Reaktif Ceza Analizi",
    heroStats: [
      { value: "%10–25", label: "reaktif cezanın toplam elektrik faturasındaki tipik payı" },
      { value: "%0,4", label: "kompanzasyon sistemi düzeltmesi sonrası reaktif ceza oranı (vaka çalışması)" },
      { value: "3–6", label: "ay kompanzasyon paneli yükseltmesinde tipik geri ödeme süresi" }
    ],
    whatTitle: "Reaktif Enerji Cezaları Nedir ve Neden Devam Eder?",
    whatText: "Türkiye elektrik mevzuatı (EPDK tarife kuralları), cos φ = 0,98 eşiğinin üzerinde reaktif enerji tüketen sanayi tüketicilerinden ek ücret almaktadır. Her fatura döneminde reaktif enerji bu sınırı aştığında, aktif enerji ücretlerine ek olarak ceza uygulanır. Pek çok fabrikada kompanzasyon paneli bulunur; ancak bunların önemli bir kısmı mevcut yük için yetersiz boyutlandırılmış, kondansatör grupları arızalı ya da hızla değişen endüktif yüklere yanıt veremeyen kontrol sistemlerine sahiptir. Ceza sessizce, genellikle yıllarca devam eder; çünkü faturada ayrı bir kalem yerine yüzdelik bir ek bedel olarak görünür.",
    causesTitle: "Reaktif Cezaların En Yaygın Nedenleri",
    causes: [
      { title: "Yetersiz boyutlandırılmış kompanzasyon paneli", text: "Devreye alma sırasında kurulan panel, genişleyen üretim kapasitesi veya yeni endüktif yükler (motorlar, kompresörler, kaynak ekipmanları) için artık yeterli değil." },
      { title: "Arızalı veya bozulmuş kondansatör grupları", text: "Bireysel kondansatör kademeleri alarm tetiklemeden arızalanır. Kapasitesinin %60'ında çalışan bir panel hâlâ işlevsel görünebilir; ancak yeterli kompanzasyon sağlayamaz." },
      { title: "Harmonik bozulma etkisi", text: "Değişken frekanslı sürücüler (VFD) ve güç elektroniği, kompanzasyon kondansatörleriyle etkileşime giren harmonikler üretir; aşırı ısınma, arıza veya tehlikeli rezonansa yol açabilir." },
      { title: "Kontrol sistemi gecikmesi", text: "Kararlı yükler için kalibre edilmiş reaktif güç kontrolörü (RPC) kademeli süre ve hassasiyet ayarları, proses endüstrilerindeki hızlı yük dalgalanmalarını izleyemez." },
      { title: "Sayaç noktası uyumsuzluğu", text: "Kompanzasyon panelinin reaktif kompanzasyonu, sayaç trafosu ölçüm noktasından ötelenmiş olabilir; bu durum faturadaki görünür etkinliği azaltır." }
    ],
    reviewTitle: "İnceleme Neleri Kapsar?",
    reviewItems: [
      "12 aylık reaktif enerji tüketimi ve ceza oranı trendi",
      "Fatura dönemi tepe reaktif talep - sözleşme aktif gücü karşılaştırması",
      "Kompanzasyon paneli anma kapasitesi - tahmini yük profili karşılaştırması",
      "Kurulu sürücü ve doğrultucu envanterine dayalı harmonik risk değerlendirmesi",
      "Sayaç konfigürasyonu ve kompanzasyon topolojisi gözlemleri",
      "Ceza maliyet tahmini ve öncelikli aksiyonları içeren yazılı ön not"
    ],
    processTitle: "Nasıl Başlanır?",
    processSteps: [
      { step: "01", title: "Aşağıdaki formu doldurun", text: "Ana sorun olarak 'Yüksek reaktif enerji cezaları'nı seçin. 1–2 iş günü içinde yanıt veriyoruz." },
      { step: "02", title: "Son 12 elektrik faturanızı paylaşın", text: "PDF veya fotoğraf yeterlidir. Reaktif ceza kalemlerini, tepe talep verilerini ve fatura dönemi paternlerini çıkarıyoruz." },
      { step: "03", title: "Ön ceza analizi notu alın", text: "5–7 iş günü içinde: ceza maliyet dökümü, olası neden kategorisi, tahmini tasarruf potansiyeli ve önerilen sonraki adım." },
      { step: "04", title: "İsteğe bağlı: detaylı saha ölçüm angajmanı", text: "Kompanzasyon paneli yükseltmesi veya harmonik filtre tasarımı gerekiyorsa, ön incelemenin ardından ücretli bir saha ölçüm çalışması planlanır." }
    ],
    faqsTitle: "Sık Sorulan Sorular",
    faqs: [
      { question: "Cezaların nedenini yalnızca faturalardan belirleyebilir misiniz?", answer: "Çoğu durumda evet. Fatura verisi, cezanın yapısal (tüm dönemlerde tutarlı biçimde yüksek), yük kaynaklı (belirli vardiyalarda veya mevsimlerde zirve yapıyor) ya da kompanzasyonla ilgili (panel kapasitesine rağmen yüksek) olup olmadığını ortaya koyar. Bu bilgi, öncelikli sonraki adımı önermek için yeterlidir." },
      { question: "Reaktif cezalar gerçekçi olarak ne kadar azaltılabilir?", answer: "Sanayi vaka çalışmamızda, kombine bir kompanzasyon incelemesi ve panel yükseltmesinin ardından reaktif ceza oranı toplam faturanın %11'inden %0,4'üne indi. Pek çok tesis için tam ortadan kalkma mümkündür; büyük çoğunlukta ise %50–80 oranında azalma sağlanabilir." },
      { question: "Mevcut kompanzasyon panelimizin tamamen değiştirilmesi gerekiyor mu?", answer: "Zorunlu değil. Pek çok durum arızalı kondansatör kademelerinin değiştirilmesi, reaktif güç kontrolörünün yeniden kalibre edilmesi veya harmonik koruması için detüned filtre eklenmesiyle çözülür. Tam değişim, yalnızca panel mevcut yük koşulları için temelden yetersiz kaldığında önerilir." },
      { question: "Elektriker paneli kontrol etti — uzman incelemesi hâlâ gerekli mi?", answer: "Genel elektrik müteahhitleri tipik olarak panelin enerjili ve alarmsız olduğunu doğrular. Reaktif ceza analizi; kontrolör ayarlarının, kondansatör grubu test sonuçlarının, harmonik akım seviyelerinin ve sayaç konfigürasyonunun incelenmesini gerektirir; bu da uzman bilgisi ve ölçüm aleti gerektirir." }
    ],
    caseStudyLabel: "Sanayi Vaka Çalışması: %16 Fatura Düşüşü",
    caseStudyHref: "/tr/projects/endustriyel-elektrik-maliyet-optimizasyonu-vaka-calismasi",
    serviceLabel: "Tam Sanayi Enerji Hizmeti",
    serviceHref: "/tr/services/endustriyel-enerji-maliyet-optimizasyonu",
    billReviewLabel: "Ücretsiz Fatura İncelemesi",
    billReviewHref: "/tr/industrial-bill-review",
    formTitle: "Reaktif Ceza Analizi Talep Edin",
    formSubtitle: "Ana sorun olarak 'Yüksek reaktif enerji cezaları'nı seçin. 1–2 iş günü içinde yanıt veriyoruz."
  }
} satisfies Record<Locale, {
  title: string; eyebrow: string; description: string; breadcrumb: string;
  heroStats: Array<{ value: string; label: string }>;
  whatTitle: string; whatText: string;
  causesTitle: string;
  causes: Array<{ title: string; text: string }>;
  reviewTitle: string; reviewItems: string[];
  processTitle: string;
  processSteps: Array<{ step: string; title: string; text: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  caseStudyLabel: string; caseStudyHref: string;
  serviceLabel: string; serviceHref: string;
  billReviewLabel: string; billReviewHref: string;
  formTitle: string; formSubtitle: string;
}>;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];
  return buildMetadata({ locale, path: "/reactive-penalty-analysis", title: page.title, description: page.description });
}

export default async function ReactivePenaltyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];
  const schema = faqSchema(page.faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: page.breadcrumb }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-energy-500">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{page.description}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {page.heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-copper/25 bg-copper/10 p-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What are reactive penalties */}
      <section className="bg-navy-900 py-20">
        <Container className="max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-white">{page.whatTitle}</h2>
          <p className="leading-8 text-steel">{page.whatText}</p>
        </Container>
      </section>

      {/* Causes */}
      <section className="bg-navy-950 py-20">
        <Container>
          <h2 className="mb-10 text-3xl font-bold text-white">{page.causesTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.causes.map((cause) => (
              <div key={cause.title} className="premium-card rounded-lg p-6">
                <AlertTriangle className="mb-4 h-6 w-6 text-copper" />
                <h3 className="mb-3 font-semibold text-white">{cause.title}</h3>
                <p className="text-sm leading-7 text-steel">{cause.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Review scope + Form */}
      <section className="bg-navy-900 py-20" id="request-analysis">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">{page.reviewTitle}</h2>
            <ul className="mb-8 grid gap-3">
              {page.reviewItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-steel">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mb-6 text-2xl font-bold text-white">{page.processTitle}</h2>
            <div className="mb-8 grid gap-5">
              {page.processSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-energy-500/20 text-sm font-bold text-energy-500">{step.step}</span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-7 text-steel">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link href={page.caseStudyHref} className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
                {page.caseStudyLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={page.serviceHref} className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
                {page.serviceLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={page.billReviewHref} className="flex items-center justify-center gap-2 rounded-md border border-energy-500/30 bg-energy-500/10 px-4 py-3 text-sm font-semibold text-energy-500 hover:bg-energy-500 hover:text-navy-950">
                {page.billReviewLabel} <Zap className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">{page.formTitle}</h2>
            <p className="mb-6 text-sm text-steel">{page.formSubtitle}</p>
            <IndustrialLeadForm locale={locale} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-10 text-3xl font-bold text-white">{page.faqsTitle}</h2>
          <div className="grid gap-6">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                <p className="mb-2 font-semibold text-white">{faq.question}</p>
                <p className="text-sm leading-7 text-steel">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
