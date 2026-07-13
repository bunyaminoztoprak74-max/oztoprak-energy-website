import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, BatteryCharging, ShieldCheck, TrendingUp } from "lucide-react";
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
    path: "/battery-storage",
    title: en
      ? "Battery Energy Storage Engineering Consulting | Oztoprak Energy"
      : "Batarya Enerji Depolama Mühendislik Danışmanlığı | Öztoprak Enerji",
    description: en
      ? "Independent engineering consulting for BESS projects in Turkey — technical due diligence, EPC scope review, grid compliance, PCS and BMS integration, and owner's engineering for battery storage developers and investors."
      : "Türkiye'deki BESS projeleri için bağımsız mühendislik danışmanlığı — teknik durum tespiti, EPC kapsam incelemesi, şebeke uyumu, PCS ve BMS entegrasyonu ile batarya depolama geliştiricileri ve yatırımcıları için işveren mühendisliği."
  });
}

export default async function BatteryStoragePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: en ? "Battery Storage" : "Batarya Depolama", url: `/${locale}/battery-storage` }
    ]),
    organizationSchema(locale)
  ];

  const scopeItems = en
    ? [
        {
          icon: BatteryCharging,
          title: "BESS Technical Due Diligence",
          text: "Pre-investment review of battery storage projects — cell chemistry selection, degradation modelling, PCS efficiency, BMS capability, fire protection, and site integration risk."
        },
        {
          icon: ShieldCheck,
          title: "Grid Compliance Review",
          text: "Assessment of BESS grid connection requirements under TEİAŞ rules — FRT capability, protection coordination, reactive power mode, black start readiness, and frequency response."
        },
        {
          icon: TrendingUp,
          title: "EPC Scope and Performance Guarantee Review",
          text: "Independent review of BESS EPC contracts — RTE efficiency guarantees, degradation allowance, availability warranties, FAT/SAT procedures, and commissioning test criteria."
        }
      ]
    : [
        {
          icon: BatteryCharging,
          title: "BESS Teknik Durum Tespiti",
          text: "Batarya depolama projelerinin yatırım öncesi incelemesi — hücre kimyası seçimi, bozulma modellemesi, PCS verimi, BMS kapasitesi, yangın koruması ve saha entegrasyonu riski."
        },
        {
          icon: ShieldCheck,
          title: "Şebeke Uyum İncelemesi",
          text: "BESS şebeke bağlantısı gereksinimlerinin TEİAŞ kuralları kapsamında değerlendirilmesi — FRT kabiliyeti, koruma koordinasyonu, reaktif güç modu, siyah başlatma hazırlığı ve frekans yanıtı."
        },
        {
          icon: TrendingUp,
          title: "EPC Kapsam ve Performans Garantisi İncelemesi",
          text: "BESS EPC sözleşmelerinin bağımsız incelemesi — tur verimi garantileri, bozulma toleransı, emre amadelik garantileri, FAT/SAT prosedürleri ve devreye alma test kriterleri."
        }
      ];

  const keyTopics = en
    ? [
        "Lithium-ion chemistry selection: LFP vs NMC for utility-scale storage",
        "BESS degradation modelling and capacity warranty evaluation",
        "Power Conversion System (PCS) grid interface and harmonic compliance",
        "Battery Management System (BMS) protection and communication protocols",
        "TEİAŞ grid code compliance for large BESS facilities",
        "BESS co-location with solar — control strategy and grid connection impact",
        "Fire suppression system adequacy and IEC 62933 compliance",
        "Revenue stacking strategies: frequency regulation, arbitrage, capacity",
        "BESS lender's engineer scope for project finance",
        "Operational KPI framework and O&M contract adequacy"
      ]
    : [
        "Lityum-iyon kimyası seçimi: Enerji ölçekli depolama için LFP ve NMC karşılaştırması",
        "BESS bozulma modellemesi ve kapasite garantisi değerlendirmesi",
        "Güç Dönüştürme Sistemi (PCS) şebeke arayüzü ve harmonik uyumu",
        "Batarya Yönetim Sistemi (BMS) koruma ve iletişim protokolleri",
        "Büyük BESS tesisleri için TEİAŞ şebeke kodu uyumu",
        "GES ile birlikte konumlandırılmış BESS — kontrol stratejisi ve şebeke bağlantısı etkisi",
        "Yangın bastırma sistemi yeterliliği ve IEC 62933 uyumu",
        "Gelir biriktirme stratejileri: frekans düzenleme, arbitraj, kapasite",
        "Proje finansmanı için BESS kredi kuruluşu mühendisi kapsamı",
        "Operasyonel KPI çerçevesi ve O&M sözleşme yeterliliği"
      ];

  const relatedServices = en
    ? ["technical-due-diligence", "owners-engineering", "independent-engineer", "grid-compliance-audit", "power-quality-audit"]
    : ["teknik-durum-tespiti", "isveren-muhendisligi", "bagimsiz-muhendis", "sebeke-uyum-denetimi", "guc-kalitesi-denetimi"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "BESS · Grid-scale storage · Turkey" : "BESS · Şebeke ölçekli depolama · Türkiye"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en ? "Battery Energy Storage Engineering Consulting" : "Batarya Enerji Depolama Mühendislik Danışmanlığı"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Oztoprak Energy provides independent technical advisory for utility-scale BESS projects in Turkey — covering technical due diligence, EPC scope review, grid compliance, and owner's engineering for developers, investors, and lenders."
              : "Öztoprak Enerji, Türkiye'deki enerji ölçekli BESS projeleri için bağımsız teknik danışmanlık sunuyor — geliştiriciler, yatırımcılar ve kredi kuruluşları için teknik durum tespiti, EPC kapsam incelemesi, şebeke uyumu ve işveren mühendisliği kapsıyor."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Discuss Your BESS Project" : "BESS Projenizi Tartışın"}
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
              {en ? "Contact Us" : "İletişim"}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Technical Scope" : "Teknik Kapsam"}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {scopeItems.map((item) => {
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
              {en ? "Technical topics we cover" : "Ele aldığımız teknik konular"}
            </h2>
            <div className="mt-6 grid gap-3">
              {keyTopics.map((item) => (
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
                {en ? "Market context — Turkey BESS" : "Pazar bağlamı — Türkiye BESS"}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "Turkey's BESS market is being shaped by YEKA storage tenders, ancillary service market reforms, and co-location requirements for large renewable plants. TEİAŞ grid code requirements for battery storage are still developing — projects procured today will need to meet evolving compliance obligations through their operating life."
                  : "Türkiye'nin BESS pazarı YEKA depolama ihaleleri, yardımcı hizmet piyasası reformları ve büyük yenilenebilir santraller için birlikte konumlandırma gereksinimleri tarafından şekillendiriliyor. Batarya depolamaya yönelik TEİAŞ şebeke kodu gereksinimleri hâlâ gelişiyor — bugün tedarik edilen projeler, işletme ömürleri boyunca değişen uyumluluk yükümlülüklerini karşılaması gerekecek."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
