import type { Metadata } from "next";
import {
  Activity,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Globe2,
  RadioTower,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Waves,
  Zap
} from "lucide-react";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { FeatureCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

const content = {
  en: {
    metaTitle: "Oztoprak Energy Consulting | International EPC & Renewable Energy Advisory",
    metaDescription:
      "Premium EPC, hydropower, solar, commissioning, grid compliance and renewable energy due diligence consultancy for investors, owners and international EPC teams.",
    heroKicker: "Independent EPC and renewable energy technical advisory",
    heroTitle: "28+ Years of Power Plant Operations & EPC Experience",
    heroText:
      "Oztoprak Energy Consulting supports owners, investors and EPC contractors with field-proven engineering judgement across hydropower, solar, commissioning, grid compliance and operational optimization.",
    proof: "275+ MW managed capacity experience across 8 successfully completed power plant projects.",
    heroSignals: ["Hydropower technical audits", "Owner-side EPC review", "Commissioning and grid readiness"],
    servicesEyebrow: "Core Advisory Services",
    servicesTitle: "Technical Consultancy for Renewable Energy Decisions",
    servicesText:
      "Each engagement is structured around evidence from site inspections, operating data, commissioning records and EPC documentation, so recommendations are practical for owners, lenders and project teams.",
    projectsEyebrow: "International Project Profile",
    projectsTitle: "Anonymized Technical Case Studies",
    projectsText:
      "Project references are presented as consulting profiles that reflect the technical scope, asset class and owner-side role typically required by international EPC and investment teams.",
    workflowEyebrow: "Technical Audit Workflow",
    workflowTitle: "From Field Evidence to Decision-Ready Engineering Actions",
    workflowText:
      "The audit process is designed to identify real operating constraints, separate EPC defects from O&M issues, and convert findings into clear priorities for investment, reliability and generation recovery.",
    whyEyebrow: "Why Choose Us",
    whyTitle: "Power Plant Expertise Built on Operational Reality",
    operationalEyebrow: "Operational Expertise",
    operationalTitle: "Consulting Grounded in Real Plant Behavior",
    operationalText:
      "Recommendations consider dispatch requirements, AGC-compatible operation, governor response, reactive power control, alarm discipline and the practical limits of site teams.",
    industriesTitle: "Built for EPC Teams, Owners and Investors",
    problemTitle: "Reduce Technical Risk Before It Becomes Lost Generation",
    ctaTitle: "Need independent engineering input before your next EPC, audit or investment decision?",
    ctaText:
      "Book a focused initial assessment and receive a clear view of the technical scope, risk priorities and next engineering actions.",
    consultation: "Request Technical Consultation",
    assessment: "Book Free Initial Assessment",
    advisory: "Contact EPC Advisory Team",
    services: [
      {
        title: "Hydropower Technical Audit",
        text: "Independent review of turbine-generator condition, hydraulic constraints, protection issues, historical alarms and O&M routines.",
        href: "/services/hydropower-plant-optimization",
        icon: Waves
      },
      {
        title: "Owner's Engineering",
        text: "Owner-side technical control for design review, EPC quality, construction readiness, commissioning evidence and handover discipline.",
        href: "/services/owners-engineering",
        icon: ShieldCheck
      },
      {
        title: "EPC Technical Advisory",
        text: "Practical EPC support for scope gaps, design interfaces, technical risk registers, procurement clarity and contractor coordination.",
        href: "/services/epc-technical-consultancy",
        icon: Building2
      },
      {
        title: "Commissioning Supervision",
        text: "Readiness checks for energization, functional tests, performance testing, punch-list closure and operations handover.",
        href: "/services/power-plant-commissioning",
        icon: ClipboardCheck
      },
      {
        title: "Grid Compliance Analysis",
        text: "Review of protection coordination, reactive power capability, AVR behavior, grid interface risks and compliance evidence.",
        href: "/services/grid-protection-system-analysis",
        icon: RadioTower
      },
      {
        title: "Renewable Energy Due Diligence",
        text: "Investor-grade technical review for acquisitions, refinancing, asset performance recovery and renewable energy project decisions.",
        href: "/services/renewable-energy-investment-advisory",
        icon: FileSearch
      },
      {
        title: "Technical Due Diligence",
        text: "Investor-ready assessment of asset condition, EPC evidence, O&M maturity, grid compliance and CAPEX risk before acquisition or refinancing.",
        href: "/services/technical-due-diligence",
        icon: SearchCheck
      },
      {
        title: "HPP Performance Analysis",
        text: "Hydropower generation loss review covering turbine efficiency, governor response, AGC behavior, SCADA alarms and O&M recovery actions.",
        href: "/services/hpp-performance-analysis",
        icon: Gauge
      },
      {
        title: "Industrial Energy Cost Optimization",
        text: "Electricity bill analysis, reactive power penalty elimination, contract demand review and rooftop solar feasibility for factories and industrial facilities.",
        href: "/services/industrial-energy-cost-optimization",
        icon: Zap
      }
    ],
    reasons: [
      ["28+ years experience", "Plant operation, EPC delivery and commissioning judgment from real renewable energy assets."],
      ["275+ MW managed capacity", "Technical exposure across hydropower, solar PV, grid interface and power plant performance recovery."],
      ["8 successfully completed power plant projects", "Hands-on understanding of what must work before an asset can operate reliably."],
      ["International EPC experience", "Communication and reporting suitable for global EPC contractors, investors and owner teams."],
      ["Operational optimization expertise", "Focus on availability, generation loss, maintenance discipline and corrective action priorities."]
    ],
    projects: [
      { name: "Hydropower Commissioning Case Study", country: "Anonymized international HPP", capacity: "64 MW", role: "Commissioning Advisor", technology: "Hydropower", slug: "hydropower-commissioning-case-study" },
      { name: "Plant Performance Improvement Case Study", country: "Anonymized portfolio", capacity: "92 MW", role: "Performance Consultant", technology: "Hydropower + Solar", slug: "plant-performance-improvement-case-study" },
      { name: "Solar Plant Technical Audit Case Study", country: "Anonymized PV asset", capacity: "48 MWp", role: "Independent Auditor", technology: "Solar PV", slug: "solar-plant-technical-audit-case-study" },
      { name: "EPC Owner-Side Technical Control Case Study", country: "Anonymized EPC project", capacity: "71 MW", role: "Owner-side Advisor", technology: "Renewable Power", slug: "epc-owner-side-technical-control-case-study" }
    ],
    workflow: [
      ["Site inspection", "Walk down civil, mechanical, electrical, control and protection interfaces with attention to operating evidence."],
      ["Technical analysis", "Review SCADA trends, outage history, commissioning files, protection settings and EPC design assumptions."],
      ["Risk reporting", "Prioritize risks by generation impact, safety, grid compliance, CAPEX urgency and owner decision relevance."],
      ["Optimization recommendations", "Define corrective actions for availability, O&M routines, testing gaps and performance recovery."]
    ],
    operations: [
      ["AGC-compatible operations", "Review setpoint tracking, ramp behavior, governor response and control room procedures under dispatch expectations.", Activity],
      ["Governor and AVR behavior", "Evaluate stability, load acceptance, voltage control and reactive power contribution under field conditions.", Settings2],
      ["Grid interface reliability", "Connect protection coordination, breaker events, transformer constraints and compliance records to practical action.", RadioTower],
      ["O&M performance recovery", "Convert alarms, outage history, auxiliary system issues and recurring losses into prioritized improvement work.", Gauge]
    ],
    problemCards: [
      ["Common field problem", "Incomplete commissioning evidence, weak punch-list closure, nuisance trips and unclear EPC responsibility often create avoidable generation losses."],
      ["Engineering response", "Oztoprak Energy reviews site evidence, operating records and technical documentation before recommending practical corrective actions."],
      ["Decision value", "Owners and investors receive a clear technical path for risk reduction, CAPEX prioritization and reliable asset performance."]
    ]
  },
  tr: {
    metaTitle: "Öztoprak Enerji Danışmanlık | Uluslararası EPC ve Yenilenebilir Enerji Danışmanı",
    metaDescription:
      "Yatırımcılar, santral sahipleri ve uluslararası EPC ekipleri için HES, GES, devreye alma, şebeke uyumu ve yenilenebilir enerji teknik danışmanlığı.",
    heroKicker: "Bağımsız EPC ve yenilenebilir enerji teknik danışmanlığı",
    heroTitle: "28+ Yıllık Enerji Santrali İşletme ve EPC Deneyimi",
    heroText:
      "Öztoprak Enerji Danışmanlık; santral sahipleri, yatırımcılar ve EPC yüklenicileri için HES, GES, devreye alma, şebeke uyumu ve operasyonel optimizasyon alanlarında sahaya dayalı mühendislik desteği sağlar.",
    proof: "8 başarıyla tamamlanmış enerji santrali projesinde 275+ MW yönetilen kapasite deneyimi.",
    heroSignals: ["HES teknik denetimleri", "İşveren tarafı EPC inceleme", "Devreye alma ve şebeke hazırlığı"],
    servicesEyebrow: "Temel Danışmanlık Hizmetleri",
    servicesTitle: "Yenilenebilir Enerji Kararları İçin Teknik Danışmanlık",
    servicesText:
      "Her çalışma saha incelemesi, işletme verisi, devreye alma kayıtları ve EPC dokümantasyonu üzerine kurulur; böylece öneriler işveren, finans kuruluşu ve proje ekipleri için uygulanabilir olur.",
    projectsEyebrow: "Uluslararası Proje Profili",
    projectsTitle: "Anonim Teknik Vaka Çalışmaları",
    projectsText:
      "Proje kartları; uluslararası EPC ve yatırım ekiplerinin ihtiyaç duyduğu teknik kapsamı, varlık sınıfını ve işveren tarafı danışmanlık rolünü gösteren profesyonel profiller olarak sunulur.",
    workflowEyebrow: "Teknik Denetim Süreci",
    workflowTitle: "Saha Bulgusundan Karara Hazır Mühendislik Aksiyonlarına",
    workflowText:
      "Denetim süreci gerçek işletme kısıtlarını belirlemek, EPC kusurlarını O&M problemlerinden ayırmak ve bulguları yatırım, güvenilirlik ve üretim toparlama önceliklerine dönüştürmek için tasarlanır.",
    whyEyebrow: "Neden Biz",
    whyTitle: "Operasyonel Gerçekliğe Dayanan Santral Uzmanlığı",
    operationalEyebrow: "Operasyonel Uzmanlık",
    operationalTitle: "Gerçek Santral Davranışına Dayalı Danışmanlık",
    operationalText:
      "Öneriler yük tevzi beklentileri, AGC uyumlu işletme, governor tepkisi, reaktif güç kontrolü, alarm disiplini ve saha ekiplerinin pratik sınırları dikkate alınarak hazırlanır.",
    industriesTitle: "EPC Ekipleri, İşverenler ve Yatırımcılar İçin",
    problemTitle: "Teknik Riski Üretim Kaybına Dönüşmeden Azaltın",
    ctaTitle: "Yeni EPC, denetim veya yatırım kararınız öncesinde bağımsız mühendislik görüşüne mi ihtiyacınız var?",
    ctaText:
      "Odaklı bir ilk değerlendirme planlayın; teknik kapsam, risk öncelikleri ve sonraki mühendislik aksiyonları netleşsin.",
    consultation: "Teknik Danışmanlık Talep Et",
    assessment: "Ücretsiz İlk Değerlendirme Planla",
    advisory: "EPC Danışmanlık Ekibiyle İletişime Geç",
    services: [
      {
        title: "HES Teknik Denetimi",
        text: "Türbin-jeneratör durumu, hidrolik kısıtlar, koruma problemleri, geçmiş alarmlar ve O&M rutinleri için bağımsız inceleme.",
        href: "/services/hes-optimizasyonu",
        icon: Waves
      },
      {
        title: "İşveren Mühendisliği",
        text: "Tasarım inceleme, EPC kalite kontrolü, inşaat hazırlığı, devreye alma kanıtları ve teslim disiplini için işveren tarafı teknik kontrol.",
        href: "/services/isveren-muhendisligi",
        icon: ShieldCheck
      },
      {
        title: "EPC Teknik Danışmanlık",
        text: "Kapsam boşlukları, tasarım arayüzleri, teknik risk listeleri, satın alma netliği ve yüklenici koordinasyonu için pratik EPC desteği.",
        href: "/services/epc-teknik-danismanlik",
        icon: Building2
      },
      {
        title: "Devreye Alma Gözetimi",
        text: "Enerjilendirme, fonksiyonel testler, performans testleri, eksik iş kapanışı ve işletmeye teslim için hazırlık kontrolleri.",
        href: "/services/enerji-santrali-devreye-alma",
        icon: ClipboardCheck
      },
      {
        title: "Şebeke Uyum Analizi",
        text: "Koruma koordinasyonu, reaktif güç kabiliyeti, AVR davranışı, şebeke arayüz riskleri ve uyum kanıtları incelemesi.",
        href: "/services/sebeke-koruma-sistemi-analizi",
        icon: RadioTower
      },
      {
        title: "Yenilenebilir Enerji Due Diligence",
        text: "Satın alma, refinansman, varlık performans toparlama ve yatırım kararları için yatırımcı düzeyinde teknik inceleme.",
        href: "/services/yenilenebilir-enerji-yatirim-danismanligi",
        icon: FileSearch
      },
      {
        title: "Teknik Durum Tespiti",
        text: "Satın alma veya refinansman öncesinde varlık durumu, EPC kanıtı, O&M olgunluğu, şebeke uyumu ve CAPEX risk incelemesi.",
        href: "/services/teknik-durum-tespiti",
        icon: SearchCheck
      },
      {
        title: "HES Performans Analizi",
        text: "Türbin verimi, governor tepkisi, AGC davranışı, SCADA alarmları, duruşlar ve O&M toparlama aksiyonları için HES üretim kaybı incelemesi.",
        href: "/services/hes-performans-analizi",
        icon: Gauge
      },
      {
        title: "Endüstriyel Enerji Maliyet Optimizasyonu",
        text: "Fabrikalar ve sanayi tesisleri için elektrik faturası analizi, reaktif ceza giderme, sözleşme gücü incelemesi ve çatı GES fizibilite.",
        href: "/services/endustriyel-enerji-maliyet-optimizasyonu",
        icon: Zap
      }
    ],
    reasons: [
      ["28+ yıl deneyim", "Gerçek yenilenebilir enerji varlıklarından gelen santral işletme, EPC teslim ve devreye alma bilgisi."],
      ["275+ MW yönetilen kapasite", "HES, GES, şebeke arayüzü ve santral performans toparlama alanlarında teknik deneyim."],
      ["8 başarıyla tamamlanmış enerji santrali projesi", "Bir varlığın güvenilir çalışması için sahada gerçekten neyin hazır olması gerektiğine hakimiyet."],
      ["Uluslararası EPC deneyimi", "Global EPC yüklenicileri, yatırımcılar ve işveren ekipleri için uygun raporlama ve iletişim."],
      ["Operasyonel optimizasyon uzmanlığı", "Emre amadelik, üretim kaybı, bakım disiplini ve düzeltici aksiyon önceliklerine odaklanma."]
    ],
    projects: [
      { name: "HES Devreye Alma Vaka Çalışması", country: "Anonim uluslararası HES", capacity: "64 MW", role: "Devreye Alma Danışmanı", technology: "Hidroelektrik", slug: "hes-devreye-alma-vaka-calismasi" },
      { name: "Santral Performans İyileştirme Vaka Çalışması", country: "Anonim portföy", capacity: "92 MW", role: "Performans Danışmanı", technology: "HES + GES", slug: "santral-performans-iyilestirme-vaka-calismasi" },
      { name: "GES Teknik Denetim Vaka Çalışması", country: "Anonim GES varlığı", capacity: "48 MWp", role: "Bağımsız Denetçi", technology: "Güneş PV", slug: "ges-teknik-denetim-vaka-calismasi" },
      { name: "EPC İşveren Tarafı Teknik Kontrol Vaka Çalışması", country: "Anonim EPC projesi", capacity: "71 MW", role: "İşveren Tarafı Danışman", technology: "Yenilenebilir Enerji", slug: "epc-isveren-tarafi-teknik-kontrol-vaka-calismasi" }
    ],
    workflow: [
      ["Saha incelemesi", "İnşaat, mekanik, elektrik, kontrol ve koruma arayüzleri işletme kanıtlarıyla birlikte sahada incelenir."],
      ["Teknik analiz", "SCADA trendleri, duruş geçmişi, devreye alma dosyaları, koruma ayarları ve EPC tasarım varsayımları değerlendirilir."],
      ["Risk raporlama", "Riskler üretim etkisi, güvenlik, şebeke uyumu, CAPEX aciliyeti ve işveren kararı açısından önceliklendirilir."],
      ["Optimizasyon önerileri", "Emre amadelik, O&M rutinleri, test boşlukları ve performans toparlama için düzeltici aksiyonlar tanımlanır."]
    ],
    operations: [
      ["AGC uyumlu işletme", "Yük tevzi beklentileri altında set noktası takibi, rampa davranışı, governor tepkisi ve kumanda prosedürleri incelenir.", Activity],
      ["Governor ve AVR davranışı", "Saha koşullarında kararlılık, yük alma, gerilim kontrolü ve reaktif güç katkısı değerlendirilir.", Settings2],
      ["Şebeke arayüz güvenilirliği", "Koruma koordinasyonu, kesici olayları, trafo kısıtları ve uyum kayıtları pratik aksiyonlara bağlanır.", RadioTower],
      ["O&M performans toparlama", "Alarmlar, duruş geçmişi, yardımcı sistem problemleri ve tekrar eden kayıplar öncelikli iyileştirme işlerine dönüştürülür.", Gauge]
    ],
    problemCards: [
      ["Sahada sık görülen problem", "Eksik devreye alma kanıtları, zayıf eksik iş kapanışı, gereksiz tripler ve belirsiz EPC sorumluluğu kaçınılabilir üretim kayıpları yaratır."],
      ["Mühendislik yanıtı", "Öztoprak Enerji pratik düzeltici aksiyon önermeden önce saha kanıtlarını, işletme kayıtlarını ve teknik dokümantasyonu inceler."],
      ["Karar değeri", "Santral sahipleri ve yatırımcılar; risk azaltma, CAPEX önceliklendirme ve güvenilir varlık performansı için net teknik yol haritası alır."]
    ]
  }
} satisfies Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  proof: string;
  heroSignals: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesText: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsText: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowText: string;
  whyEyebrow: string;
  whyTitle: string;
  operationalEyebrow: string;
  operationalTitle: string;
  operationalText: string;
  industriesTitle: string;
  problemTitle: string;
  ctaTitle: string;
  ctaText: string;
  consultation: string;
  assessment: string;
  advisory: string;
  services: Array<{ title: string; text: string; href: string; icon: typeof Waves }>;
  reasons: Array<[string, string]>;
  projects: Array<{ name: string; country: string; capacity: string; role: string; technology: string; slug: string }>;
  workflow: Array<[string, string]>;
  operations: Array<[string, string, typeof Activity]>;
  problemCards: Array<[string, string]>;
}>;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = content[locale];
  return buildMetadata({ locale, path: "/", title: page.metaTitle, description: page.metaDescription });
}

function localizedServiceHref(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const page = content[locale];
  const contactHref = locale === "tr" ? "/tr/iletisim" : "/en/contact";
  const servicesHref = locale === "tr" ? "/tr/hizmetler" : "/en/services";
  const metrics = [
    ["28+", locale === "en" ? "Years Experience" : "Yıl Deneyim"],
    ["275+", locale === "en" ? "MW Managed Capacity" : "MW Yönetilen Kapasite"],
    ["8", locale === "en" ? "Successfully Completed Power Plant Projects" : "Başarıyla Tamamlanan Santral Projesi"],
    [locale === "en" ? "Hydro + Solar" : "HES + GES", locale === "en" ? "Hydropower & Solar Expertise" : "HES ve GES Uzmanlığı"],
    ["EPC", locale === "en" ? "Commissioning, O&M and Due Diligence" : "Devreye Alma, O&M ve Teknik Durum Tespiti"]
  ];

  return (
    <>
      <section className="hero-industrial relative overflow-hidden bg-navy-950">
        <Container className="relative z-10 grid min-h-[70vh] items-center py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.72fr] lg:items-center">
            <div className="max-w-4xl">
              <MotionReveal>
                <p className="mb-5 inline-flex rounded-md border border-energy-500/30 bg-energy-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-energy-500">
                  {page.heroKicker}
                </p>
                <h1 className="max-w-5xl text-balance text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                  {page.heroTitle}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{page.heroText}</p>
                <p className="mt-4 text-base font-semibold text-white">{page.proof}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={contactHref}>{page.consultation}</ButtonLink>
                  <ButtonLink href={servicesHref} variant="secondary">
                    {locale === "en" ? "Explore Services" : "Hizmetleri İncele"}
                  </ButtonLink>
                </div>
              </MotionReveal>
              <div className="mt-9 grid max-w-4xl gap-3 text-sm text-white/84 sm:grid-cols-3">
                {page.heroSignals.map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-[rgba(7,17,31,0.52)] px-4 py-3 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <MotionReveal delay={0.08}>
              <aside className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035))] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-energy-500">
                  {locale === "en" ? "Consulting Readiness" : "Danışmanlık Hazırlığı"}
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    locale === "en" ? "EPC contract and scope risk review" : "EPC sözleşme ve kapsam riski incelemesi",
                    locale === "en" ? "Commissioning evidence and punch-list discipline" : "Devreye alma kanıtları ve eksik iş disiplini",
                    locale === "en" ? "Grid compliance, protection and reactive power checks" : "Şebeke uyumu, koruma ve reaktif güç kontrolleri",
                    locale === "en" ? "O&M performance recovery roadmap" : "O&M performans toparlama yol haritası"
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-navy-950/45 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />
                      <p className="text-sm leading-6 text-steel">{item}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </MotionReveal>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map(([value, label], index) => (
              <MotionReveal key={label} delay={index * 0.04}>
                <div className="group flex h-full min-h-[142px] flex-col justify-between rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.035))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.09] hover:shadow-[0_26px_86px_rgba(47,183,255,0.14)]">
                  <p className="text-3xl font-bold leading-none text-white drop-shadow-[0_0_18px_rgba(47,183,255,0.2)] sm:text-4xl">{value}</p>
                  <p className="mt-5 text-sm font-semibold leading-6 text-steel">{label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 section-pad">
        <Container>
          <SectionHeading eyebrow={page.servicesEyebrow} title={page.servicesTitle} description={page.servicesText} />
          <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title} delay={index * 0.03}>
                  <a
                    href={localizedServiceHref(locale, service.href)}
                    className="group flex h-full min-h-[288px] flex-col rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.07] hover:shadow-[0_26px_90px_rgba(47,183,255,0.14)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-energy-500" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-snug text-white">{service.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-steel">{service.text}</p>
                    <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-energy-500/35" />
                  </a>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={page.whyEyebrow} title={page.whyTitle} description={page.operationalText} />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contactHref}>{page.assessment}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.reasons.map(([title, text]) => (
              <div key={title} className="premium-card rounded-lg p-6">
                <CheckCircle2 className="mb-4 h-5 w-5 text-energy-500" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 section-pad">
        <Container>
          <SectionHeading eyebrow={page.projectsEyebrow} title={page.projectsTitle} description={page.projectsText} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.projects.map((project, index) => (
              <MotionReveal key={project.name} delay={index * 0.04}>
                <a href={`/${locale}/projects/${project.slug}`} className="group block h-full rounded-lg border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(47,183,255,0.16),transparent_18rem),rgba(255,255,255,0.035)] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-energy-500/55">
                  <div className="flex items-start justify-between gap-4">
                    <Globe2 className="h-6 w-6 text-energy-500" />
                    <span className="rounded-md border border-white/10 px-3 py-1 text-xs font-semibold text-steel">{project.country}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-snug text-white">{project.name}</h3>
                  <dl className="mt-6 grid gap-3 text-sm">
                    {[
                      [locale === "en" ? "Capacity" : "Kapasite", project.capacity],
                      [locale === "en" ? "Role" : "Rol", project.role],
                      [locale === "en" ? "Technology" : "Teknoloji", project.technology]
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-md border border-white/10 bg-navy-950/45 p-3">
                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-energy-500">{label}</dt>
                        <dd className="mt-1 text-white/88">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </a>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container>
          <SectionHeading eyebrow={page.workflowEyebrow} title={page.workflowTitle} description={page.workflowText} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.workflow.map(([title, text], index) => (
              <MotionReveal key={title} delay={index * 0.04}>
                <article className="relative h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.06]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-energy-500 text-sm font-black text-navy-950">
                      0{index + 1}
                    </span>
                    {index === 0 ? <SearchCheck className="h-6 w-6 text-energy-500" /> : null}
                    {index === 1 ? <Activity className="h-6 w-6 text-energy-500" /> : null}
                    {index === 2 ? <ShieldCheck className="h-6 w-6 text-energy-500" /> : null}
                    {index === 3 ? <Zap className="h-6 w-6 text-energy-500" /> : null}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-steel">{text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 section-pad">
        <Container>
          <SectionHeading eyebrow={page.operationalEyebrow} title={page.operationalTitle} description={page.operationalText} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.operations.map(([title, text, Icon]) => (
              <MotionReveal key={title}>
                <div className="premium-card h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-energy-500/50">
                  <Icon className="mb-5 h-6 w-6 text-energy-500" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading title={page.problemTitle} description={page.ctaText} />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contactHref}>{page.advisory}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {page.problemCards.map(([title, text]) => (
              <FeatureCard key={title} title={title} text={text} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#081426,#0b2136_52%,#07111f)] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(47,183,255,0.2),transparent_26rem)]" />
        <Container className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-energy-500">
              {locale === "en" ? "EPC Advisory Team" : "EPC Danışmanlık Ekibi"}
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{page.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-steel">{page.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={contactHref}>{page.consultation}</ButtonLink>
            <ButtonLink href={servicesHref} variant="secondary">
              {locale === "en" ? "Review Services" : "Hizmetleri İncele"}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
