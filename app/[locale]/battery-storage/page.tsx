import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, BatteryCharging, ShieldCheck, TrendingUp, Gauge } from "lucide-react";
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
      ? "BESS Advisory: Feasibility, Capacity Sizing and Storage Integration"
      : "BESS Danışmanlığı ve Enerji Depolama Fizibilitesi",
    description: en
      ? "Independent BESS feasibility studies, optimum MW/MWh capacity sizing, HEPP and solar plant battery integration, and revenue optimization advisory for investors and plant owners in Turkey."
      : "BESS fizibilite danışmanlığı, optimum MW/MWh kapasite belirleme, HES ve GES santrallerine batarya entegrasyonu ve gelir optimizasyonu. Yatırımcılar ve santral sahipleri için teknik ve yatırım danışmanlığı."
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
          icon: Gauge,
          title: "BESS Feasibility and Optimum Capacity Sizing",
          text: "Technical and economic feasibility assessment before a battery investment decision. Sizing considers MW (power) and MWh (energy capacity) together, aiming for the capacity range that best supports investment returns rather than the largest possible battery."
        },
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
          icon: Gauge,
          title: "BESS Fizibilite ve Optimum Kapasite Belirleme",
          text: "Bataryalı depolama yatırım kararından önce teknik ve ekonomik fizibilite değerlendirilir. Boyutlandırmada MW (güç) ve MWh (enerji kapasitesi) birlikte ele alınır; amaç en büyük bataryayı seçmek değil, yatırım getirisi açısından uygun kapasite aralığını belirlemektir."
        },
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

  const hesBessTopics = en
    ? [
        "HEPP production profile and hydrological variability",
        "Hourly production vs. market price alignment",
        "Charging in low-price hours, discharging in higher-value hours",
        "Plant operating constraints and connection capacity limits",
        "Turbine/generator operating characteristics alongside BESS response",
        "BESS power-to-energy (MW/MWh) ratio optimization",
        "Cycle optimization and degradation impact on long-term revenue"
      ]
    : [
        "HES üretim profili ve hidrolojik değişkenlik",
        "Saatlik üretim ile piyasa fiyatlarının örtüşmesi",
        "Düşük fiyat saatlerinde şarj, yüksek değerli saatlerde deşarj",
        "Santral operasyon kısıtları ve bağlantı kapasitesi sınırları",
        "Türbin/jeneratör işletme karakteristikleri ile BESS tepkisinin birlikte değerlendirilmesi",
        "BESS güç/enerji (MW/MWh) oranının optimizasyonu",
        "Çevrim optimizasyonu ve degradasyonun uzun vadeli gelire etkisi"
      ];

  const gesBessTopics = en
    ? [
        "Solar production curve and peak-shifting potential",
        "Curtailment assessment and energy-shifting opportunity",
        "Connection capacity and co-location constraints",
        "BESS sizing relative to installed solar capacity",
        "Charge/discharge strategy optimization",
        "Investment return analysis for the combined GES+BESS asset"
      ]
    : [
        "GES üretim eğrisi ve peak shifting (yük kaydırma) potansiyeli",
        "Curtailment (kısıntı) değerlendirmesi ve enerji kaydırma fırsatı",
        "Bağlantı kapasitesi ve birlikte konumlandırma kısıtları",
        "Kurulu GES kapasitesine göre BESS boyutlandırması",
        "Şarj/deşarj stratejisi optimizasyonu",
        "GES+BESS birleşik varlık için yatırım geri dönüş analizi"
      ];

  const revenueOptimizationSteps = en
    ? [
        "Production data + market price data",
        "Battery technical parameters (efficiency, DoD, cycle life)",
        "CAPEX / OPEX and degradation assumptions",
        "→ Optimization",
        "→ MW / MWh scenarios",
        "→ Annual revenue / cash flow estimate",
        "→ Investment return indicators"
      ]
    : [
        "Üretim verisi + piyasa fiyat verisi",
        "Batarya teknik parametreleri (verim, DoD, çevrim ömrü)",
        "CAPEX / OPEX ve degradasyon varsayımları",
        "→ Optimizasyon",
        "→ MW / MWh senaryoları",
        "→ Yıllık gelir / nakit akışı tahmini",
        "→ Yatırım geri dönüş göstergeleri"
      ];

  const optimizationInputs = en
    ? ["Production time series", "Electricity price time series", "MW and MWh candidates", "Round-trip efficiency", "SoC limits and DoD", "Cycle constraints and degradation", "CAPEX and OPEX"]
    : ["Üretim zaman serisi", "Elektrik fiyat zaman serisi", "MW ve MWh aday değerleri", "Round-trip efficiency (tur verimi)", "SoC sınırları ve DoD", "Çevrim kısıtları ve degradasyon", "CAPEX ve OPEX"];

  const optimizationOutputs = en
    ? ["Suitable capacity scenarios", "Estimated energy-shifting volume", "Indicative revenue impact", "Cycling behavior", "Battery utilization rate", "Investment return indicators"]
    : ["Uygun kapasite senaryoları", "Tahmini enerji kaydırma miktarı", "Gösterge niteliğinde gelir etkisi", "Çevrim davranışı", "Batarya kullanım oranı", "Yatırım geri dönüş göstergeleri"];

  const preFeasibilityScope = en
    ? [
        "Data collection",
        "Production profile analysis",
        "Market price analysis",
        "Identification of technical constraints",
        "MW / MWh scenarios",
        "Charge/discharge simulation",
        "Degradation impact",
        "Revenue analysis",
        "CAPEX / OPEX assessment",
        "Financial scenario analysis",
        "Recommended BESS capacity range",
        "Technical and economic summary report"
      ]
    : [
        "Veri toplama",
        "Üretim profili analizi",
        "Piyasa fiyat analizi",
        "Teknik kısıtların belirlenmesi",
        "MW / MWh senaryoları",
        "Şarj/deşarj simülasyonu",
        "Degradasyon etkisi",
        "Gelir analizi",
        "CAPEX / OPEX değerlendirmesi",
        "Finansal senaryo analizi",
        "Önerilen BESS kapasite aralığı",
        "Teknik ve ekonomik sonuç raporu"
      ];

  const feasibilityChecklist = en
    ? ["Plant type (HEPP / solar / wind / other)", "Installed capacity (MW)", "Indicative BESS power (MW) and capacity (MWh) under consideration", "Existing plant or new project", "Whether production data is available", "Project stage"]
    : ["Santral türü (HES / GES / RES / diğer)", "Kurulu güç (MW)", "Düşünülen BESS gücü (MW) ve kapasitesi (MWh)", "Mevcut santral mi, yeni proje mi", "Üretim verisi mevcut mu", "Proje aşaması"];

  const relatedServices = en
    ? ["technical-due-diligence", "owners-engineering", "independent-engineer", "grid-compliance-audit", "power-quality-audit"]
    : ["teknik-durum-tespiti", "isveren-muhendisligi", "bagimsiz-muhendis", "sebeke-uyum-denetimi", "guc-kalitesi-denetimi"];

  const investmentLinks = [
    { href: "/tr/hes-degerleme", label: "HES Değerleme Yaklaşımı" },
    { href: "/tr/ges-degerleme", label: "GES Değerleme Yaklaşımı" },
    { href: "/tr/enerji-santrali-due-diligence", label: "Enerji Santrali Teknik Due Diligence" },
    { href: "/tr/satilik-enerji-santralleri", label: "Enerji Yatırım Danışmanlığı" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "BESS · Feasibility & grid-scale storage · Turkey" : "BESS · Fizibilite ve şebeke ölçekli depolama · Türkiye"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en ? "Battery Energy Storage (BESS) Advisory" : "BESS ve Bataryalı Enerji Depolama Danışmanlığı"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Oztoprak Energy provides independent BESS advisory covering feasibility studies, optimum MW/MWh capacity sizing, battery integration with HEPP and solar plants, revenue optimization, and technical due diligence — for investors and plant owners evaluating storage additions to existing generation assets in Turkey."
              : "Öztoprak Enerji; BESS fizibilite çalışması, optimum MW/MWh kapasite belirleme, HES ve GES santrallerine batarya entegrasyonu, gelir optimizasyonu ve teknik durum tespiti konularında bağımsız danışmanlık sunar. Türkiye'deki mevcut üretim tesislerine BESS entegrasyonunu değerlendiren yatırımcılar ve santral sahipleri için proje özelinde teknik ve ekonomik analiz sağlıyoruz."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Request a BESS Feasibility Review" : "BESS Fizibilite Talep Et"}
            </Link>
            {en ? (
              <Link href={`/${locale}/contact`} className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
                Contact Us
              </Link>
            ) : (
              <Link href="/tr/satilik-enerji-santralleri" className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
                Enerji Yatırım Danışmanlığı Alın
              </Link>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Technical Scope" : "Teknik Kapsam"}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Optimum MWh Sizing Approach" : "Optimum MWh Boyutlandırma Yaklaşımı"}
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <p className="text-sm leading-7 text-steel">
              {en
                ? "A plant's historical production data and market price data can be analyzed to compare different BESS capacity scenarios — for example, illustrative candidates such as 5 MWh, 10 MWh, 15 MWh or 20 MWh. This is not a fixed methodology or a mandatory step size applied to every project; the optimization resolution can vary depending on the project's characteristics, data availability, and objectives. The goal is not to select the largest possible battery, but to identify the BESS size that best supports investment returns."
                : "Santralin geçmiş üretim verileri ve piyasa verileri analiz edilerek farklı BESS kapasite senaryoları karşılaştırılabilir — örneğin 5 MWh, 10 MWh, 15 MWh veya 20 MWh gibi gösterge niteliğinde adaylar. Bu, sabit bir metodoloji veya her projede zorunlu bir adım büyüklüğü değildir; optimizasyon çözünürlüğü projenin özelliklerine, veri erişilebilirliğine ve hedeflerine göre değişebilir. Amaç en büyük bataryayı seçmek değil, yatırım getirisi açısından en uygun BESS boyutunu belirlemektir."}
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">{en ? "MW ≠ MWh" : "MW ≠ MWh"}</p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "MW describes power — how fast the battery can charge or discharge. MWh describes energy capacity — how much energy it can store. A sound BESS sizing exercise treats these as two separate, jointly optimized parameters, alongside efficiency, degradation, SoC/DoD limits, and cycle life."
                  : "MW gücü tanımlar — bataryanın ne hızla şarj/deşarj olabildiğini gösterir. MWh enerji kapasitesini tanımlar — ne kadar enerji depolayabildiğini gösterir. Doğru bir BESS boyutlandırma çalışması bu ikisini; verim, degradasyon, SoC/DoD sınırları ve çevrim ömrü ile birlikte, ayrı ve birlikte optimize edilen iki parametre olarak ele alır."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-white">{en ? "HEPP + BESS Integration" : "HES + BESS Entegrasyonu"}</h2>
            <p className="mt-3 text-sm leading-7 text-steel">
              {en
                ? "For hydropower plants, BESS integration is evaluated against the plant's own production variability and the value of shifting output to higher-price hours, within the plant's operating and connection constraints."
                : "Hidroelektrik santraller için BESS entegrasyonu; santralin kendi üretim değişkenliği ve üretimi daha yüksek fiyatlı saatlere kaydırmanın değeri, santralin işletme ve bağlantı kısıtları dahilinde değerlendirilir."}
            </p>
            <div className="mt-5 grid gap-3">
              {hesBessTopics.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
            {!en && (
              <Link href="/tr/satilik-hes" className="mt-5 inline-flex text-sm font-semibold text-energy-500 hover:text-white">
                HES yatırım danışmanlığı →
              </Link>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{en ? "Solar + BESS Integration" : "GES + BESS Entegrasyonu"}</h2>
            <p className="mt-3 text-sm leading-7 text-steel">
              {en
                ? "For solar plants, BESS is typically evaluated in relation to the production curve, curtailment exposure, and the opportunity to shift solar output into higher-value hours."
                : "Güneş enerji santralleri için BESS genellikle üretim eğrisi, curtailment (kısıntı) riski ve GES üretimini daha yüksek değerli saatlere kaydırma fırsatı ile ilişkili olarak değerlendirilir."}
            </p>
            <div className="mt-5 grid gap-3">
              {gesBessTopics.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
            {!en && (
              <Link href="/tr/satilik-ges" className="mt-5 inline-flex text-sm font-semibold text-energy-500 hover:text-white">
                GES yatırım danışmanlığı →
              </Link>
            )}
            <p className="mt-5 text-sm leading-7 text-steel">
              {en
                ? "HEPP+BESS is one of our main commercial priorities, but BESS advisory is not limited to hydropower — solar and other generation assets are evaluated on the same basis."
                : "HES+BESS ana ticari önceliklerimizden biridir; ancak BESS danışmanlığı yalnızca HES ile sınırlı değildir — güneş ve diğer üretim varlıkları da aynı yaklaşımla değerlendirilir."}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">{en ? "BESS Revenue Optimization" : "BESS Gelir Optimizasyonu"}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "Equipment cost alone is not a sufficient basis for a BESS investment decision. Where suitable, the evaluation model can be described as follows:"
              : "BESS yatırım kararında yalnızca ekipman maliyeti yeterli bir dayanak değildir. Uygun olduğu ölçüde, değerlendirme modeli şu şekilde özetlenebilir:"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {revenueOptimizationSteps.map((step) => (
              <span key={step} className="rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-steel">{step}</span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "This process does not produce a guaranteed revenue figure or a guaranteed return rate. It compares scenarios so that a capacity decision can be made on an informed basis."
              : "Bu süreç garanti bir gelir rakamı veya garanti bir getiri oranı üretmez. Kapasite kararının bilinçli bir temelde alınabilmesi için senaryoları karşılaştırır."}
          </p>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Project-Specific Analysis and Optimization Approach" : "Proje Özelinde Analiz ve Optimizasyon Yaklaşımı"}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "Proje özelinde geliştirilen analiz ve optimizasyon modelleri ile farklı BESS güç ve enerji kapasitesi senaryoları karşılaştırılabilir. This is a project-specific advisory approach, not a ready-made commercial software product."
              : "Proje özelinde geliştirilen analiz ve optimizasyon modelleri ile farklı BESS güç ve enerji kapasitesi senaryoları karşılaştırılabilir. Bu yaklaşım proje özelinde geliştirilen bir danışmanlık çalışmasıdır; hazır bir ticari yazılım ürünü değildir."}
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-energy-500">{en ? "Model inputs" : "Model girdileri"}</h3>
              <div className="mt-4 grid gap-2">
                {optimizationInputs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-energy-500">{en ? "Outputs" : "Çıktılar"}</h3>
              <div className="mt-4 grid gap-2">
                {optimizationOutputs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">{en ? "BESS Pre-Feasibility Study" : "BESS Ön Fizibilite Çalışması"}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "Potential scope — the actual scope of an engagement is shaped by the project's specific needs, not applied identically to every project:"
              : "Potansiyel kapsam — bir çalışmanın gerçek kapsamı projenin ihtiyacına göre şekillenir; her projede aynı şekilde uygulanmaz:"}
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {preFeasibilityScope.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-energy-500/30 text-xs font-semibold text-energy-500">{index + 1}</span>
                <p className="text-sm leading-6 text-steel">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
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
            {!en && (
              <div className="mt-6 grid gap-2">
                <p className="text-sm font-semibold text-white">Yatırım danışmanlığı ile bağlantılı</p>
                {investmentLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="group flex items-center gap-2 text-sm text-steel hover:text-energy-500 transition">
                    <span className="h-px w-4 bg-energy-500/40 group-hover:w-6 group-hover:bg-energy-500 transition-all" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "Market context — Turkey BESS" : "Pazar bağlamı — Türkiye BESS"}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "Turkey's BESS market is being shaped by YEKA storage tenders, ancillary service market reforms, and co-location requirements for large renewable plants. TEİAŞ grid code requirements for battery storage are still developing — projects procured today will need to meet evolving compliance obligations through their operating life."
                  : "Türkiye'nin BESS pazarı YEKA depolama ihaleleri, yardımcı hizmet piyasası reformları ve büyük yenilenebilir santraller için birlikte konumlandırma gereksinimleri tarafından şekillendiriliyor. Batarya depolamaya yönelik TEİAŞ şebeke kodu gereksinimleri hâlâ gelişiyor — bugün tedarik edilen projeler, işletme ömürleri boyunca değişen uyumluluk yükümlülüklerini karşılaması gerekecek."}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "A BESS addition's potential effect on a plant's revenue profile and economic value can be assessed on a scenario basis, project by project — this is not a guaranteed increase in plant value."
                  : "Bir BESS yatırımının santralin gelir profili ve ekonomik değerine potansiyel etkisi, proje bazında senaryo bazlı olarak değerlendirilebilir — bu, santral değerinde kesin bir artış anlamına gelmez."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {!en && (
        <section className="bg-navy-950 py-14">
          <Container className="max-w-3xl">
            <h2 className="text-xl font-semibold text-white">BESS fizibilite talebinizde neler belirtebilirsiniz</h2>
            <p className="mt-3 text-sm leading-7 text-steel">İlk görüşmede tüm teknik bilgileri paylaşmanız gerekmez; aşağıdakilerden bildiğiniz kadarını mesajınıza eklemeniz süreci hızlandırır.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {feasibilityChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/tr/free-consultation" className="mt-6 inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              BESS Kapasite Analizi Talep Et
            </Link>
          </Container>
        </section>
      )}

      <CtaSection locale={locale} />
    </>
  );
}
