import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Zap, AlertTriangle, Sun, BarChart3, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { IndustrialLeadForm } from "@/components/industrial-lead-form";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

const copy = {
  en: {
    title: "Free Industrial Electricity Bill Review",
    eyebrow: "Industrial Energy Cost Advisory",
    description: "Send us your last 12 months of electricity bills. We will identify reactive power penalty exposure, contract demand risks, tariff optimization opportunities and rooftop solar feasibility — at no cost.",
    breadcrumb: "Industrial Bill Review",
    heroStats: [
      { value: "28+", label: "years power sector experience" },
      { value: "16%", label: "average bill reduction — industrial case study" },
      { value: "5–7", label: "working days for preliminary review" }
    ],
    problemsTitle: "Common Industrial Electricity Cost Problems",
    problems: [
      {
        icon: "alert",
        title: "Reactive Power Penalties",
        text: "Many factories pay 10–25% extra on their electricity bill due to reactive power penalties caused by an undersized or poorly maintained compensation panel. These penalties are largely preventable."
      },
      {
        icon: "zap",
        title: "Contract Demand Misalignment",
        text: "Contract power (sözleşme gücü) set too high creates fixed capacity charges every month. Set too low, it triggers excess demand penalties. A 12-month bill analysis typically reveals 5–10% of recoverable capacity cost."
      },
      {
        icon: "bar",
        title: "Tariff Structure Risk",
        text: "Industrial facilities above TEDAŞ consumption thresholds may qualify for open market electricity contracts at lower rates. Remaining on regulated tariffs can mean paying 15–30% more than necessary."
      },
      {
        icon: "sun",
        title: "Rooftop Solar Potential",
        text: "A facility with >500 m² of suitable roof area and consumption above 200,000 kWh/year typically achieves 5–7 year payback on a rooftop solar installation with 60–80% self-consumption rate."
      }
    ],
    processTitle: "How the Free Review Works",
    processSteps: [
      {
        step: "01",
        title: "Submit Your Request",
        text: "Complete the form below. Providing your monthly bill range and primary concern helps us direct your request to the right specialist immediately."
      },
      {
        step: "02",
        title: "We Request Your Bills",
        text: "We will contact you within 1–2 business days. You send us your last 12 months of electricity bills (PDF or photograph is fine). No sensitive financial data required."
      },
      {
        step: "03",
        title: "Preliminary Bill Analysis",
        text: "We analyze reactive penalty patterns, contract demand utilization, consumption trends and tariff category. This takes 3–5 working days."
      },
      {
        step: "04",
        title: "Review Memo Delivered",
        text: "You receive a short written memo identifying the main cost drivers, estimated annual saving potential and recommended next steps — at no charge."
      }
    ],
    offerTitle: "What the Free Review Covers",
    offerItems: [
      "Reactive power penalty ratio and annual penalty cost estimate",
      "Contract demand utilization pattern (last 12 months)",
      "Excess demand charge incidents and avoidable cost",
      "Tariff category check and open market threshold assessment",
      "Rooftop solar eligibility indicator based on consumption profile",
      "Written preliminary memo with savings potential estimate"
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is the bill review genuinely free?",
        answer: "Yes. The preliminary review is provided at no charge. If you wish to proceed to a detailed paid audit, we will outline the scope and cost at that stage. There is no obligation."
      },
      {
        question: "What documents do I need to provide?",
        answer: "Your last 12 months of electricity invoices is the minimum required. If you have reactive power measurement data, compensation panel specifications or contract documents, those help but are not mandatory."
      },
      {
        question: "Can you work with facilities outside major cities?",
        answer: "Yes. The preliminary review is conducted remotely based on your billing documents. On-site visits can be arranged for facilities in any Turkish province for a detailed paid engagement."
      },
      {
        question: "How confidential is my facility's data?",
        answer: "All facility and billing information is treated as strictly confidential. It is used only to prepare your review and is not shared with any third party."
      },
      {
        question: "What if my facility already has a compensation panel?",
        answer: "Having a panel does not mean it is sized or operating correctly. Many facilities with existing compensation panels still pay significant reactive penalties due to inadequate sizing, harmonic issues or control system faults. The review checks the penalty pattern regardless."
      }
    ],
    caseStudyLabel: "View Industrial Case Study",
    caseStudyHref: "/en/projects/industrial-electricity-cost-optimization-case-study",
    serviceLabel: "Full Industrial Energy Service",
    serviceHref: "/en/services/industrial-energy-cost-optimization",
    formTitle: "Request Your Free Electricity Bill Review",
    formSubtitle: "We respond within 1–2 business days."
  },
  tr: {
    title: "Ücretsiz Sanayi Elektrik Faturası İncelemesi",
    eyebrow: "Sanayi Enerji Maliyet Danışmanlığı",
    description: "Son 12 aylık elektrik faturalarınızı gönderin. Reaktif enerji cezaları, sözleşme gücü riskleri, tarife optimizasyon fırsatları ve çatı GES fizibilitesini ücretsiz olarak belirleyelim.",
    breadcrumb: "Fatura İncelemesi",
    heroStats: [
      { value: "28+", label: "yıl enerji sektörü deneyimi" },
      { value: "%16", label: "ortalama fatura düşüşü — sanayi vaka çalışması" },
      { value: "5–7", label: "iş günü ön inceleme süresi" }
    ],
    problemsTitle: "Yaygın Sanayi Elektrik Maliyeti Sorunları",
    problems: [
      {
        icon: "alert",
        title: "Reaktif Enerji Cezaları",
        text: "Pek çok fabrika, yetersiz veya bakımsız kompanzasyon paneli nedeniyle elektrik faturasında %10–25 oranında fazladan reaktif ceza ödemektedir. Bu cezalar büyük ölçüde önlenebilir niteliktedir."
      },
      {
        icon: "zap",
        title: "Sözleşme Gücü Uyumsuzluğu",
        text: "Gereğinden yüksek tutulan sözleşme gücü her ay sabit kapasite bedeli oluşturur; düşük tutulması ise aşım cezası doğurur. 12 aylık fatura analizi tipik olarak %5–10 kurtarılabilir kapasite maliyeti ortaya çıkarır."
      },
      {
        icon: "bar",
        title: "Tarife Yapısı Riski",
        text: "TEDAŞ tüketim eşiklerini aşan sanayi tesisleri, serbest piyasada daha düşük tarife ile elektrik satın alabilir. Düzenlenmiş tarifeye devam etmek, gerekenden %15–30 fazla ödemeye yol açabilir."
      },
      {
        icon: "sun",
        title: "Çatı GES Potansiyeli",
        text: "500 m² üzeri uygun çatı alanına sahip ve yıllık 200.000 kWh üzeri tüketen bir tesis, %60–80 öz tüketim oranıyla çatı GES yatırımında genellikle 5–7 yıllık geri ödeme süresine ulaşmaktadır."
      }
    ],
    processTitle: "Ücretsiz İnceleme Nasıl İşler?",
    processSteps: [
      {
        step: "01",
        title: "Talebinizi Gönderin",
        text: "Aşağıdaki formu doldurun. Aylık fatura aralığınızı ve temel sorununuzu belirtmeniz, talebinizin hemen doğru uzmana yönlendirilmesini sağlar."
      },
      {
        step: "02",
        title: "Faturalarınızı İstiyoruz",
        text: "1–2 iş günü içinde sizinle iletişime geçeceğiz. Son 12 aylık elektrik faturalarınızı (PDF veya fotoğraf yeterli) bize göndermenizi isteyeceğiz. Hassas finansal veri gerekmez."
      },
      {
        step: "03",
        title: "Ön Fatura Analizi",
        text: "Reaktif ceza paternleri, sözleşme gücü kullanımı, tüketim trendleri ve tarife kategorisi analiz edilir. Bu aşama 3–5 iş günü sürer."
      },
      {
        step: "04",
        title: "İnceleme Notu Teslimi",
        text: "Başlıca maliyet etkenlerini, tahmini yıllık tasarruf potansiyelini ve önerilen sonraki adımları içeren kısa bir yazılı not — ücretsiz olarak — teslim edilir."
      }
    ],
    offerTitle: "Ücretsiz İnceleme Neleri Kapsar?",
    offerItems: [
      "Reaktif güç ceza oranı ve yıllık tahmini ceza maliyeti",
      "Sözleşme gücü kullanım paterni (son 12 ay)",
      "Aşım talep bedeli olayları ve önlenebilir maliyet",
      "Tarife kategorisi kontrolü ve serbest piyasa eşik değerlendirmesi",
      "Tüketim profiline göre çatı GES uygunluk göstergesi",
      "Tasarruf potansiyeli tahminini içeren yazılı ön not"
    ],
    faqsTitle: "Sık Sorulan Sorular",
    faqs: [
      {
        question: "Fatura incelemesi gerçekten ücretsiz mi?",
        answer: "Evet. Ön inceleme ücretsiz sunulmaktadır. Kapsamlı ücretli denetime geçmek isterseniz o aşamada kapsam ve maliyet detaylandırılır. Herhangi bir yükümlülük yoktur."
      },
      {
        question: "Hangi belgeleri sağlamam gerekiyor?",
        answer: "Son 12 aylık elektrik faturaları minimum gerekliliktir. Reaktif güç ölçüm verisi, kompanzasyon paneli teknik bilgileri veya sözleşme belgeleriniz varsa analizi derinleştirir; ancak zorunlu değildir."
      },
      {
        question: "Büyük şehirler dışındaki tesislerle çalışıyor musunuz?",
        answer: "Evet. Ön inceleme fatura belgeleriniz üzerinden uzaktan yürütülür. Ücretli detaylı angajman için Türkiye'nin herhangi bir ilindeki tesislere saha ziyareti düzenlenebilir."
      },
      {
        question: "Tesis verilerim ne kadar gizli tutulur?",
        answer: "Tüm tesis ve fatura bilgileri kesinlikle gizli tutulur. Yalnızca incelemenizi hazırlamak amacıyla kullanılır ve üçüncü taraflarla paylaşılmaz."
      },
      {
        question: "Tesisimde zaten bir kompanzasyon paneli varsa ne olur?",
        answer: "Panelin varlığı, doğru boyutlandırıldığı veya düzgün çalıştığı anlamına gelmez. Mevcut kompanzasyon paneli olan pek çok tesis, yetersiz boyutlandırma, harmonik sorunlar veya kontrol sistemi arızaları nedeniyle önemli reaktif ceza ödemeye devam etmektedir. İnceleme, ceza paternini panelin varlığından bağımsız olarak değerlendirir."
      }
    ],
    caseStudyLabel: "Sanayi Vaka Çalışmasını İncele",
    caseStudyHref: "/tr/projects/endustriyel-elektrik-maliyet-optimizasyonu-vaka-calismasi",
    serviceLabel: "Tam Sanayi Enerji Hizmeti",
    serviceHref: "/tr/services/endustriyel-enerji-maliyet-optimizasyonu",
    formTitle: "Ücretsiz Elektrik Faturası İncelemesi Talep Edin",
    formSubtitle: "1–2 iş günü içinde yanıt veriyoruz."
  }
} satisfies Record<Locale, {
  title: string; eyebrow: string; description: string; breadcrumb: string;
  heroStats: Array<{ value: string; label: string }>;
  problemsTitle: string;
  problems: Array<{ icon: string; title: string; text: string }>;
  processTitle: string;
  processSteps: Array<{ step: string; title: string; text: string }>;
  offerTitle: string; offerItems: string[];
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  caseStudyLabel: string; caseStudyHref: string;
  serviceLabel: string; serviceHref: string;
  formTitle: string; formSubtitle: string;
}>;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];
  return buildMetadata({
    locale,
    path: "/industrial-bill-review",
    title: page.title,
    description: page.description
  });
}

function ProblemIcon({ icon }: { icon: string }) {
  if (icon === "alert") return <AlertTriangle className="h-6 w-6 text-copper" />;
  if (icon === "zap") return <Zap className="h-6 w-6 text-energy-500" />;
  if (icon === "sun") return <Sun className="h-6 w-6 text-energy-500" />;
  return <BarChart3 className="h-6 w-6 text-energy-500" />;
}

export default async function IndustrialBillReviewPage({ params }: { params: Promise<{ locale: string }> }) {
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
              <div key={stat.label} className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="bg-navy-900 py-20">
        <Container>
          <h2 className="mb-10 max-w-2xl text-balance text-3xl font-bold text-white">{page.problemsTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {page.problems.map((problem) => (
              <div key={problem.title} className="premium-card rounded-lg p-6">
                <div className="mb-4 flex items-center gap-3">
                  <ProblemIcon icon={problem.icon} />
                  <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                </div>
                <p className="text-sm leading-7 text-steel">{problem.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process + Form side by side */}
      <section className="bg-navy-950 py-20" id="request-review">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="mb-8 text-balance text-3xl font-bold text-white">{page.processTitle}</h2>
            <div className="grid gap-6">
              {page.processSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-energy-500/20 text-sm font-bold text-energy-500">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-7 text-steel">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What's included */}
            <div className="mt-10 rounded-lg border border-energy-500/20 bg-energy-500/5 p-6">
              <p className="mb-4 font-semibold text-white">{page.offerTitle}</p>
              <ul className="grid gap-2">
                {page.offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-steel">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust links */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href={page.caseStudyHref}
                className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500"
              >
                {page.caseStudyLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={page.serviceHref}
                className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500"
              >
                {page.serviceLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">{page.formTitle}</h2>
            <p className="mb-6 text-sm text-steel">{page.formSubtitle}</p>
            <IndustrialLeadForm locale={locale} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-navy-900 py-20">
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
