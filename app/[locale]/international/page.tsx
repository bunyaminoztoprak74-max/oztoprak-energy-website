import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Globe, ShieldCheck, TrendingUp, FileText, Users } from "lucide-react";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/international",
    title: en
      ? "Independent Engineer & TDD for Turkish Renewable Energy | Oztoprak Energy"
      : "Türk Yenilenebilir Enerji Projeleri için Bağımsız Mühendis ve TDD | Öztoprak Enerji",
    description: en
      ? "Independent engineer, lender's engineer, and technical due diligence services for international investors, development banks, and private equity evaluating Turkish solar, HEPP, and wind assets."
      : "Türk GES, HES ve rüzgar varlıklarını değerlendiren uluslararası yatırımcılar, kalkınma bankaları ve özel sermaye için bağımsız mühendis, kredi kuruluşu mühendisi ve teknik durum tespiti hizmetleri."
  });
}

export default async function InternationalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: en ? "International" : "Uluslararası", url: `/${locale}/international` }
    ]),
    personSchema(),
    organizationSchema(locale)
  ];

  const keyServices = [
    {
      slug: en ? "independent-engineer" : "bagimsiz-muhendis",
      icon: ShieldCheck,
      title: en ? "Independent Engineer" : "Bağımsız Mühendis",
      text: en
        ? "Appointed by lenders or investors to provide independent technical verification throughout construction and commissioning. Report directly to the financing party."
        : "İnşaat ve devreye alma sürecinde bağımsız teknik doğrulama sağlamak için kredi kuruluşları veya yatırımcılar tarafından atanır. Doğrudan finansman tarafına rapor verir."
    },
    {
      slug: en ? "lenders-engineer" : "finans-kurulusu-muhendisi",
      icon: TrendingUp,
      title: en ? "Lender's Engineer" : "Kredi Kuruluşu Mühendisi",
      text: en
        ? "Technical advisor to the financing bank or DFI — reviewing EPC contractor progress, confirming milestone completion, and assessing drawdown conditions."
        : "Finansman bankası veya KFİ'ye teknik danışman — EPC yüklenicisi ilerlemesini inceler, kilometre taşı tamamlanmasını onaylar ve çekim koşullarını değerlendirir."
    },
    {
      slug: en ? "bank-technical-advisor" : "banka-teknik-danismani",
      icon: Users,
      title: en ? "Bank Technical Advisor" : "Banka Teknik Danışmanı",
      text: en
        ? "Pre-credit technical assessment for development banks — evaluating project viability, technology risk, contractor quality, and grid connection feasibility before financial close."
        : "Kalkınma bankaları için kredi öncesi teknik değerlendirme — finansal kapanıştan önce proje fizibilitesini, teknoloji riskini, yüklenici kalitesini ve şebeke bağlantısı uygulanabilirliğini değerlendirir."
    },
    {
      slug: en ? "technical-due-diligence" : "teknik-durum-tespiti",
      icon: FileText,
      title: en ? "Technical Due Diligence" : "Teknik Durum Tespiti",
      text: en
        ? "Pre-acquisition TDD for PE funds and strategic investors — asset condition, energy yield review, contract analysis, regulatory compliance, and risk register."
        : "PE fonları ve stratejik yatırımcılar için satın alma öncesi TDD — varlık durumu, enerji verimi incelemesi, sözleşme analizi, mevzuat uyumu ve risk sicili."
    },
    {
      slug: en ? "portfolio-technical-review" : "portfoy-teknik-incelemesi",
      icon: Globe,
      title: en ? "Portfolio Technical Review" : "Portföy Teknik İncelemesi",
      text: en
        ? "Annual or semi-annual technical review across an operating portfolio — performance benchmarking, O&M contractor assessment, and prioritized capex planning."
        : "İşletim portföyü genelinde yıllık veya yarı yıllık teknik inceleme — performans kıyaslama, O&M yüklenici değerlendirmesi ve önceliklendirilmiş sermaye harcaması planlaması."
    }
  ];

  const whyTurkey = en
    ? [
        "Turkey has 105+ GW installed capacity — the largest renewable market in the eastern Mediterranean",
        "1,000+ licensed solar plants; HEPP sector active since 2000 with mature operating history",
        "YEKDEM / YEKA incentive schemes attract international capital from EBRD, IFC, and commercial banks",
        "Grid integration challenges and Turkish regulatory nuance require in-market expertise",
        "TEİAŞ reactive power penalties, FRT compliance, and AGC requirements are non-trivial for first-time market entrants",
        "Most international investors rely on local independent engineers who lack global standards experience — that gap is our differentiation"
      ]
    : [
        "Türkiye 105+ GW kurulu kapasitesiyle Doğu Akdeniz'in en büyük yenilenebilir enerji pazarı",
        "1.000+ lisanslı güneş santrali; HES sektörü 2000'den bu yana olgun işletim geçmişiyle faaliyette",
        "YEKDEM / YEKA teşvik planları EBRD, IFC ve ticari bankalardan uluslararası sermaye çekiyor",
        "Şebeke entegrasyonu zorlukları ve Türk mevzuatının incelikleri yerel pazar uzmanlığı gerektiriyor",
        "TEİAŞ reaktif güç cezaları, FRT uyumu ve AGC gereksinimleri piyasaya ilk kez girenler için önemsiz değil",
        "Uluslararası yatırımcıların çoğu küresel standartlar deneyiminden yoksun yerel bağımsız mühendislere güveniyor — bu boşluk bizim farklılaşmamız"
      ];

  const deliverables = en
    ? [
        "IFC Performance Standards-aligned technical reports",
        "Equator Principles compliance documentation",
        "EBRD / World Bank environmental and social screening input",
        "FIDIC contract risk matrix and red-line comment",
        "Energy yield P50/P90 review and shadow modelling",
        "Grid connection and protection relay compliance verification",
        "FAT/SAT witness and commissioning acceptance reports",
        "English-language reports — no translation risk"
      ]
    : [
        "IFC Performans Standartları uyumlu teknik raporlar",
        "Ekvator Prensipleri uyum dokümantasyonu",
        "EBRD / Dünya Bankası çevre ve sosyal tarama girdisi",
        "FIDIC sözleşme risk matrisi ve red-line yorumu",
        "Enerji verimi P50/P90 incelemesi ve gölge modelleme",
        "Şebeke bağlantısı ve koruma rölesi uyum doğrulaması",
        "FAT/SAT tanıklık ve devreye alma kabul raporları",
        "İngilizce raporlar — çeviri riski yok"
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "For international investors · DFIs · PE funds" : "Uluslararası yatırımcılar · KFİ'ler · PE fonları için"}
          </p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en
              ? "Independent Engineering for Turkish Renewable Energy Assets"
              : "Türk Yenilenebilir Enerji Varlıkları için Bağımsız Mühendislik"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Oztoprak Energy provides independent engineer, lender's engineer, bank technical advisor, and TDD services for international clients evaluating, financing, or acquiring Turkish solar, hydropower, and wind assets."
              : "Öztoprak Enerji, Türk güneş, hidroelektrik ve rüzgar varlıklarını değerlendiren, finanse eden veya satın alan uluslararası müşteriler için bağımsız mühendis, kredi kuruluşu mühendisi, banka teknik danışmanı ve TDD hizmetleri sunmaktadır."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex items-center rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Request Technical Consultation" : "Teknik Danışmanlık Talep Et"}
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
              {en ? "Contact Us" : "İletişim"}
            </Link>
          </div>
        </Container>
      </section>

      {/* Key Services */}
      <section className="bg-navy-900 py-20">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Independent Engineering Services" : "Bağımsız Mühendislik Hizmetleri"}
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            {en
              ? "All engagements are carried out directly by Bünyamin Öztoprak — 28+ years of Turkish renewable energy project experience."
              : "Tüm çalışmalar doğrudan Bünyamin Öztoprak tarafından yürütülür — 28+ yıllık Türk yenilenebilir enerji projesi deneyimi."}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={servicePath(locale, service.slug)} className="group premium-card rounded-xl p-6 transition hover:border-energy-500/50">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white group-hover:text-energy-500 transition">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{service.text}</p>
                  <p className="mt-4 text-xs font-semibold text-energy-500">{en ? "Learn more →" : "Daha fazla →"}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Turkey */}
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {en ? "Why Turkey Requires Local Technical Expertise" : "Türkiye Neden Yerel Teknik Uzmanlık Gerektiriyor"}
            </h2>
            <div className="mt-8 grid gap-4">
              {whyTurkey.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              {en ? "Report Standards & Deliverables" : "Rapor Standartları ve Teslim Edilebilirler"}
            </h2>
            <div className="mt-8 grid gap-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Client types strip */}
      <section className="border-y border-white/10 bg-navy-900 py-12">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/50">
            {en ? "Client types served" : "Hizmet verilen müşteri tipleri"}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {(en
              ? [
                  "Private Equity Funds",
                  "Development Banks (EBRD, IFC, AIIB)",
                  "Commercial Project Finance Banks",
                  "Infrastructure Funds",
                  "Strategic Energy Investors",
                  "Insurance & Surety Providers",
                  "EPC Contractors (owner's side verification)",
                  "Legal Advisors (technical input)"
                ]
              : [
                  "Özel Sermaye Fonları",
                  "Kalkınma Bankaları (EBRD, IFC, AIIB)",
                  "Ticari Proje Finansmanı Bankaları",
                  "Altyapı Fonları",
                  "Stratejik Enerji Yatırımcıları",
                  "Sigorta ve Kefalet Sağlayıcıları",
                  "EPC Yüklenicileri (işveren tarafı doğrulama)",
                  "Hukuk Danışmanları (teknik girdi)"
                ]
            ).map((label) => (
              <span key={label} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-steel">
                {label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Emerging technology links */}
      <section className="bg-navy-950 py-12">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50 text-center">
            {en ? "Emerging technology advisory" : "Gelişen teknoloji danışmanlığı"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: `/${locale}/hydrogen`, label: en ? "Green Hydrogen" : "Yeşil Hidrojen", text: en ? "Electrolyser integration, renewable coupling, H2 project engineering" : "Elektrolizör entegrasyonu, yenilenebilir eşleştirme, H2 proje mühendisliği" },
              { href: `/${locale}/battery-storage`, label: en ? "Battery Storage" : "Batarya Depolama", text: en ? "BESS TDD, grid compliance, EPC scope, lender's engineer" : "BESS TDD, şebeke uyumu, EPC kapsamı, kredi kuruluşu mühendisi" },
              { href: `/${locale}/ai-energy`, label: en ? "AI & Energy" : "YZ ve Enerji", text: en ? "Independent review of AI monitoring tools and yield forecasting" : "Yapay zeka izleme araçları ve verim tahminin bağımsız incelemesi" },
              { href: `/${locale}/microgrids`, label: en ? "Microgrids" : "Mikro Şebekeler", text: en ? "Islanding protection, DER integration, industrial microgrid advisory" : "Adalama koruması, DER entegrasyonu, endüstriyel mikro şebeke danışmanlığı" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group premium-card rounded-xl p-5 transition hover:border-energy-500/50">
                <p className="font-semibold text-white group-hover:text-energy-500 transition">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
