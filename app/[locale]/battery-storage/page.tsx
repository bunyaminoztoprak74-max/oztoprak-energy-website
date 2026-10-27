import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, BatteryCharging, ShieldCheck, TrendingUp, Gauge } from "lucide-react";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { TrackedCtaLink } from "@/components/tracked-cta-link";
import { MobileStickyCtaBar } from "@/components/mobile-sticky-cta-bar";
import { conversionBarPages } from "@/lib/conversion-bar";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/schema";
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
      : "BESS Danışmanlığı: Enerji Depolama Fizibilite ve Teknik İnceleme",
    description: en
      ? "Independent BESS feasibility studies, optimum MW/MWh capacity sizing, HEPP and solar plant battery integration, and revenue optimization advisory for investors and plant owners in Turkey."
      : "Enerji depolama (BESS) fizibilitesi, MW/MWh kapasite belirleme, teknik due diligence ve proje danışmanlığı. HES, GES ve depolamalı GES yatırımcıları için teknik danışmanlık."
  });
}

// TR-only FAQ (rendered and emitted as FAQPage schema on /tr/battery-storage only).
const bessFaqs = [
  { question: "BESS ön fizibilite neleri kapsar?", answer: "Santral ve üretim verisinin analizi, kullanım senaryoları, alternatif MW/MWh konfigürasyonları, teknik entegrasyon değerlendirmesi, CAPEX/OPEX çerçevesi, gelir senaryoları ve geri ödeme/duyarlılık analizini kapsar. Çalışmanın kapsamı projenin ihtiyacına göre şekillenir." },
  { question: "BESS MW/MWh kapasitesi nasıl belirlenir?", answer: "MW (güç) ve MWh (enerji) birlikte ele alınır. Santral kurulu gücü, üretim profili, bağlantı kapasitesi, kısıntılar, fiyat profili, kullanım senaryosu, şarj/deşarj stratejisi, çevrim sayısı, verim, kapasite kaybı ve hedef gelir modeli girdileriyle farklı konfigürasyonlar senaryo bazlı karşılaştırılır. Sabit veya garanti edilmiş bir sonuç yoktur." },
  { question: "Mevcut HES’e BESS eklenebilir mi?", answer: "Teknik olarak değerlendirilebilir; ancak bunun anlamlı olup olmadığı santralin üretim profiline, su rejimine, bağlantı kapasitesine, işletme kısıtlarına ve güncel mevzuat ile piyasa kurallarına bağlıdır. BESS her HES için ekonomik olmayabilir; ön fizibilite bu soruyu santralin kendi verisiyle yanıtlar." },
  { question: "Mevcut GES’e BESS eklenebilir mi?", answer: "Üretim eğrisi, kısıntı durumu, bağlantı sınırı ve tesisin lisans/bağlantı yapısı birlikte değerlendirilir. Öğle saatlerinde yoğun üretimin zaman kaydırma değeri ve şarj/deşarj stratejisi proje özelinde incelenir; kesin gelir veya geri ödeme vaadi verilmez." },
  { question: "BESS yatırım maliyeti nasıl hesaplanır?", answer: "Maliyet tek bir birim fiyatla değil, kalem kalem değerlendirilir. CAPEX tarafında batarya modülleri, PCS/inverter, trafo ve bağlantı ekipmanları, EMS/SCADA, yangın ve güvenlik sistemleri, inşaat/montaj, entegrasyon ve devreye alma; OPEX tarafında bakım, izleme, sigorta, yardımcı tüketimler, degradasyon etkisi ve olası modül yenileme yer alır. Tutarlar proje kapsamına, teknolojiye, tedarik tarihine ve teklif sınırlarına bağlıdır." },
  { question: "BESS geri ödeme süresi nasıl değerlendirilir?", answer: "Geri ödeme tek bir sayı olarak değil; baz, iyimser ve ihtiyatlı senaryolar ile fiyat, çevrim, maliyet ve degradasyon varsayımlarına duyarlılık analizi olarak ele alınır. Gelir kalemlerinin uygulanabilirliği güncel mevzuat, piyasa kuralları ve tesisin lisans/bağlantı yapısı çerçevesinde proje özelinde doğrulanır." },
  { question: "Fizibilite için hangi veriler gerekir?", answer: "Santral türü ve kurulu güç, mümkünse saatlik veya daha sık üretim verisi, bağlantı kapasitesi ve kısıtlar, düşünülen MW/MWh aralığı, mevcut santral mi yeni proje mi olduğu ve proje aşaması başlangıç için yeterlidir. Tüm bilgilerin ilk görüşmede hazır olması gerekmez." }
];

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
    organizationSchema(locale),
    ...(en ? [] : [faqSchema(bessFaqs)])
  ];

  // ---- TR-only content (Dilim E). No prices, returns, payback figures or vendor guarantees are stated. ----
  const bessChain = ["Santral verileri", "BESS güç ihtiyacı (MW)", "Enerji kapasitesi (MWh)", "Çalışma süresi", "Teknik entegrasyon", "CAPEX / OPEX", "Gelir senaryoları", "Geri ödeme / ekonomik sonuç", "Yatırım kararı"];

  const sizingFactors = [
    "Santral kurulu gücü",
    "Üretim profili (saatlik ve mevsimsel)",
    "Bağlantı kapasitesi ve şebeke kısıtları",
    "Üretim kısıntıları",
    "Enerji fiyat profili",
    "Kullanım senaryosu",
    "Şarj/deşarj stratejisi",
    "Çevrim sayısı",
    "Round-trip verim",
    "Kapasite kaybı (degradasyon)",
    "Hedef gelir modeli"
  ];

  const capexItems = ["Batarya modülleri", "PCS / inverter", "Trafo ve bağlantı ekipmanları", "EMS / SCADA", "Yangın ve güvenlik sistemleri", "İnşaat ve montaj", "Entegrasyon", "Devreye alma"];
  const opexItems = ["Periyodik bakım", "İzleme", "Sigorta", "Yardımcı tüketimler (gerekiyorsa)", "Kapasite kaybı / degradasyon etkisi", "İleride modül yenileme / augmentation ihtiyacı"];

  const valueSources = [
    "Enerji zaman kaydırma / arbitraj",
    "Dengesizlik maliyetlerinin azaltılması",
    "Üretim kısıntılarının yönetimi",
    "Bağlantı kapasitesinin daha verimli kullanılması",
    "Uygulanabilir olması halinde yan hizmetler / dengeleme piyasası fırsatları",
    "YEKDEM sonrası gelir optimizasyonu"
  ];

  const whenItMakesSense = [
    "Üretim kısıntısı yaşayan tesis",
    "Bağlantı kapasitesi sınırlı tesis",
    "Değişken üretim profiline sahip tesis",
    "Dengesizlik maliyetleri ile karşılaşan tesis",
    "YEKDEM sonrası yeni gelir modeli arayan santral",
    "Üretim ve fiyat profilini daha etkin yönetmek isteyen yatırımcı"
  ];

  const deliverables = [
    "Santral ve üretim veri analizi",
    "Kullanım senaryoları",
    "Alternatif MW/MWh konfigürasyonları",
    "Teknik entegrasyon değerlendirmesi",
    "CAPEX/OPEX çerçevesi",
    "Gelir senaryoları",
    "Geri ödeme / ekonomik duyarlılık analizi",
    "Temel riskler",
    "Yatırım kararına yönelik teknik sonuç"
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
        "Gelir kalemlerinin (enerji kaydırma, dengeleme, yan hizmetler) güncel mevzuat ve piyasa kurallarına göre doğrulanması",
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
        "Çevrim optimizasyonu ve degradasyonun uzun vadeli gelire etkisi",
        "Rezerv / yan hizmet uygunluğu (varsa), güncel kurallar çerçevesinde değerlendirilir"
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
        "GES+BESS birleşik varlık için yatırım geri dönüş analizi",
        "Öğle saatlerinde yoğun üretim ve bağlantı sınırının birlikte değerlendirilmesi"
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

  const relatedServices: Array<{ slug: string; label: string }> = en
    ? [
        { slug: "technical-due-diligence", label: "Technical Due Diligence" },
        { slug: "owners-engineering", label: "Owner's Engineering" },
        { slug: "independent-engineer", label: "Independent Engineer" },
        { slug: "grid-compliance-audit", label: "Grid Compliance Audit" },
        { slug: "power-quality-audit", label: "Power Quality Audit" }
      ]
    : [
        { slug: "hes-danismanligi", label: "HES Danışmanlığı" },
        { slug: "ges-danismanligi", label: "GES Danışmanlığı" },
        { slug: "teknik-durum-tespiti", label: "Teknik Durum Tespiti" },
        { slug: "isveren-muhendisligi", label: "İşveren Mühendisliği" },
        { slug: "bagimsiz-muhendis", label: "Bağımsız Mühendis" },
        { slug: "sebeke-uyum-denetimi", label: "Şebeke Uyum Denetimi" },
        { slug: "guc-kalitesi-denetimi", label: "Güç Kalitesi Denetimi" }
      ];

  const investmentLinks = [
    { href: "/tr/hes-degerleme", label: "HES Değerleme Yaklaşımı" },
    { href: "/tr/ges-degerleme", label: "GES Değerleme Yaklaşımı" },
    { href: "/tr/enerji-santrali-due-diligence", label: "Enerji Santrali Teknik Due Diligence" },
    { href: "/tr/satilik-enerji-santralleri", label: "Enerji Yatırım Danışmanlığı" }
  ];

  // Qualitative engineering checklist only: no costs, efficiencies, returns or vendor guarantee values are stated.
  const engineeringFramework = en
    ? [
        ["Power-to-energy ratio and storage duration", "MW and MWh are sized together. Storage duration (hours at rated power) is a design variable derived from the plant's production profile, grid limits and the intended use of the battery, not a fixed value."],
        ["PCS selection", "Power rating, reactive power capability, grid-code compliance, efficiency across the operating range, thermal derating, and AC- versus DC-coupling for the specific plant."],
        ["Battery container configuration", "DC block sizing, cooling and thermal management, fire protection, layout and access, and conformity with the applicable standards and permitting requirements."],
        ["Transformer and grid connection", "Connection point and voltage level, transformer sizing, protection coordination and the effect of the battery on fault levels at the point of connection."],
        ["Short-circuit and grid constraints", "Short-circuit contribution, fault ride-through behaviour, export and import limits and the operator's technical requirements, checked before capacity is fixed."],
        ["Degradation and augmentation", "Capacity fade assumptions taken from supplier data and tested against the planned cycling regime, with an augmentation or replacement strategy reflected in the model."],
        ["Round-trip efficiency and availability", "Efficiency is only comparable when the measurement boundary is defined (for example at the point of connection, including auxiliaries). Availability definitions and exclusions are reviewed in the contract."],
        ["CAPEX and OPEX assessment", "Cost items (battery, PCS, balance of plant, EPC, grid connection, O&M, augmentation, insurance) are compared on a like-for-like basis using current quotations, never generic benchmarks."],
        ["Technical specification and bid evaluation", "Specification drafting and technical comparison of EPC and vendor offers: scope gaps, interfaces, performance guarantees, test procedures (FAT/SAT), warranty exclusions and liability terms."]
      ]
    : [
        ["Güç/enerji oranı ve depolama süresi", "MW ve MWh birlikte boyutlandırılır. Depolama süresi (nominal güçte saat), santralin üretim profili, şebeke limitleri ve bataryanın kullanım amacından türetilen bir tasarım değişkenidir; sabit bir değer değildir."],
        ["PCS seçimi", "Güç değeri, reaktif güç kabiliyeti, şebeke kodu uyumu, çalışma aralığı boyunca verim, sıcaklığa bağlı güç düşümü ve ilgili santral için AC veya DC bağlantı tercihi değerlendirilir."],
        ["Batarya konteyner konfigürasyonu", "DC blok boyutlandırma, soğutma ve termal yönetim, yangın koruma, yerleşim ve erişim ile ilgili standartlar ve izin gereksinimlerine uygunluk incelenir."],
        ["Trafo ve şebeke bağlantısı", "Bağlantı noktası ve gerilim seviyesi, trafo boyutlandırma, koruma koordinasyonu ve bataryanın bağlantı noktasındaki arıza seviyelerine etkisi ele alınır."],
        ["Kısa devre ve şebeke kısıtları", "Kısa devre katkısı, arıza anında şebekede kalma (FRT) davranışı, ihracat/ithalat limitleri ve işletmecinin teknik gereksinimleri kapasite belirlenmeden önce kontrol edilir."],
        ["Degradasyon ve augmentation", "Kapasite kaybı varsayımları tedarikçi verisinden alınır ve planlanan çevrim rejimiyle sınanır; augmentation veya yenileme stratejisi modele yansıtılır."],
        ["Round-trip verim ve availability", "Verim ancak ölçüm sınırı tanımlandığında (örneğin bağlantı noktasında, yardımcı tüketimler dahil) karşılaştırılabilir. Availability tanımları ve istisnaları sözleşmede incelenir."],
        ["CAPEX ve OPEX değerlendirmesi", "Maliyet kalemleri (batarya, PCS, tesis bütünleyicileri, EPC, şebeke bağlantısı, O&M, augmentation, sigorta) genel referans değerler yerine güncel tekliflerle aynı temelde karşılaştırılır."],
        ["Teknik şartname ve teklif değerlendirme", "Şartname hazırlığı ile EPC ve tedarikçi tekliflerinin teknik karşılaştırması: kapsam boşlukları, arayüzler, performans garantileri, test prosedürleri (FAT/SAT), garanti istisnaları ve sorumluluk şartları. Testler tedarikçi/EPC ve uygun yetkin üçüncü taraflarca gerçekleştirilir; Öztoprak Enerji prosedürleri ve kabul kriterlerini inceler, süreci yatırımcı adına gözlemler ve sonuçları teknik açıdan değerlendirir."]
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
            {en ? "Battery Energy Storage (BESS) Advisory" : "BESS Danışmanlığı: Santraliniz İçin Depolama Fizibilitesi ve MW/MWh Optimizasyonu"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Oztoprak Energy provides independent BESS advisory covering feasibility studies, optimum MW/MWh capacity sizing, battery integration with HEPP and solar plants, revenue optimization, and technical due diligence — for investors and plant owners evaluating storage additions to existing generation assets in Turkey."
              : "Öztoprak Enerji; BESS fizibilite çalışması, optimum MW/MWh kapasite belirleme, HES ve GES santrallerine batarya entegrasyonu, gelir optimizasyonu ve teknik durum tespiti konularında bağımsız danışmanlık sunar. Türkiye'deki mevcut üretim tesislerine BESS entegrasyonunu değerlendiren yatırımcılar ve santral sahipleri için proje özelinde teknik ve ekonomik analiz sağlıyoruz."}
          </p>
          {!en && (
            <div className="mt-8 max-w-4xl">
              <p className="max-w-2xl text-sm leading-7 text-steel">Çalışmamız yatırım kararı öncesi <strong className="font-semibold text-white">ön fizibilite</strong> aşamasına odaklanır. Analiz, santral verisinden yatırım kararına uzanan şu zincirle ilerler:</p>
              <ol aria-label="BESS ön fizibilite analiz zinciri" className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
                {bessChain.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-energy-500/30 bg-energy-500/10 px-3 py-2 text-xs font-semibold text-white sm:text-sm">{step}</span>
                    {index < bessChain.length - 1 && <span aria-hidden="true" className="text-energy-500">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedCtaLink href={`/${locale}/free-consultation`} serviceType="bess" ctaSource="bess_hero_feasibility" className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Request a BESS Feasibility Review" : "Santraliniz İçin BESS Ön Fizibilitesi Talep Edin"}
            </TrackedCtaLink>
            {en ? (
              <Link href={`/${locale}/contact`} className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
                Contact Us
              </Link>
            ) : (
              <TrackedCtaLink href="#santraliniz-icin-bess-analizi" serviceType="bess" ctaSource="bess_hero_plant_analysis" className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
                Santraliniz İçin BESS Analizi
              </TrackedCtaLink>
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
            {en ? "BESS from an Investment Perspective" : "Yatırım Açısından BESS"}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "A battery energy storage system (BESS) stores electricity and releases it later, which can change how a generation asset earns revenue and manages grid constraints. Whether that is worthwhile depends on the specific plant, its connection, its production profile and the market conditions it operates in. For an investor the useful question is therefore not whether to install a battery, but under which technical and economic assumptions a given size makes sense, and what must be verified before committing capital."
              : "Bataryalı enerji depolama sistemi (BESS), elektriği depolayıp daha sonra şebekeye verir; bu da bir üretim varlığının gelir elde etme ve şebeke kısıtlarını yönetme biçimini değiştirebilir. Bunun anlamlı olup olmadığı santrale, bağlantı yapısına, üretim profiline ve faaliyet gösterdiği piyasa koşullarına bağlıdır. Yatırımcı için asıl soru bu nedenle batarya kurulup kurulmayacağı değil, hangi teknik ve ekonomik varsayımlarda hangi büyüklüğün anlamlı olduğu ve sermaye taahhüdünden önce nelerin doğrulanması gerektiğidir."}
          </p>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Our Engineering Evaluation Framework" : "Mühendislik Değerlendirme Çerçevemiz"}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
            {en
              ? "Each BESS engagement is built around the topics below. They describe what is reviewed, not typical results: capacities, efficiencies, costs and returns are determined project by project from the plant's own data and current supplier documentation."
              : "Her BESS çalışması aşağıdaki başlıklar etrafında kurulur. Bunlar tipik sonuçları değil, nelerin incelendiğini tanımlar: kapasite, verim, maliyet ve getiri; santralin kendi verisi ve güncel tedarikçi dokümanlarından proje bazında belirlenir."}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringFramework.map(([title, text]) => (
              <div key={title} className="premium-card rounded-xl p-6">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {!en && (
        <section className="bg-navy-950 py-16">
          <Container>
            <h2 className="text-2xl font-bold text-white">BESS yatırım maliyeti nasıl değerlendirilir? (CAPEX / OPEX)</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">BESS maliyeti tek bir birim fiyatla açıklanamaz. Kalemler proje kapsamına, teknolojiye, tedarik tarihine ve teklif sınırlarına göre değişir; bu nedenle genel referans rakamlar yerine güncel teklifler aynı kapsam ve aynı temelde karşılaştırılır. Bu sayfada güncel fiyat, getiri veya üretici garantisi rakamı verilmez.</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-energy-500">CAPEX kalemleri</h3>
                <div className="mt-4 grid gap-2">
                  {capexItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                      <p className="text-sm leading-6 text-steel">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-energy-500">OPEX kalemleri</h3>
                <div className="mt-4 grid gap-2">
                  {opexItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                      <p className="text-sm leading-6 text-steel">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-steel">Teklif aşamasında şartname hazırlığı ve tedarikçi tekliflerinin teknik karşılaştırması için <Link href="/tr/services/isveren-muhendisligi" className="text-energy-500 hover:text-white">işveren mühendisliği</Link> desteği alınabilir.</p>
          </Container>
        </section>
      )}

      <section className="bg-navy-950 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Optimum MWh Sizing Approach" : "MW/MWh Optimizasyonu: Optimum Kapasite Nasıl Belirlenir?"}
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
          {!en && (
            <div className="mt-10 rounded-xl border border-energy-500/25 bg-energy-500/[0.06] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">BESS kapasitesi “kaç MWh batarya almalıyım?” sorusuyla belirlenmez</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-steel">MW (güç) ve MWh (enerji) birlikte, santralin kendi verisi ve yatırım hedefiyle optimize edilir. Amaç en büyük bataryayı seçmek değil, yatırım kararını en iyi destekleyen kapasite aralığını belirlemektir. Değerlendirme şu girdilerle yapılır:</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sizingFactors.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-steel">Sonuç sabit ya da garanti edilmiş bir değer değildir: farklı MW/MWh konfigürasyonları senaryo olarak karşılaştırılır ve tüm varsayımlar şeffaf biçimde raporlanır.</p>
            </div>
          )}
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
              <>
                <p className="mt-5 text-sm leading-7 text-steel">BESS her HES için ekonomik olmayabilir; değerlendirme santralin üretim rejimi, bağlantı kapasitesi ve güncel kurallar çerçevesinde kendi verisiyle yapılır. Santralin işletme ve yatırım süreçleri için <Link href="/tr/services/hes-danismanligi" className="text-energy-500 hover:text-white">HES danışmanlığı</Link> hizmetimize de göz atabilirsiniz.</p>
                <TrackedCtaLink href="/tr/free-consultation" serviceType="bess" ctaSource="bess_hes_feasibility" className="mt-5 inline-flex rounded-md bg-energy-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
                  HES’iniz İçin BESS Ön Fizibilitesi Talep Edin
                </TrackedCtaLink>
              </>
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
              <>
                <p className="mt-5 text-sm leading-7 text-steel">Değerlendirme kesin gelir veya geri ödeme vaadi içermez; kısıntı, zaman kaydırma ve bağlantı sınırı etkileri santralin kendi verisiyle senaryo olarak incelenir. Detaylı çalışma için <Link href="/tr/services/ges-danismanligi" className="text-energy-500 hover:text-white">GES danışmanlığı</Link> hizmetimize bakabilirsiniz.</p>
                <TrackedCtaLink href="/tr/free-consultation" serviceType="bess" ctaSource="bess_ges_feasibility" className="mt-5 inline-flex rounded-md bg-energy-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
                  GES’iniz İçin BESS Ön Fizibilitesi Talep Edin
                </TrackedCtaLink>
              </>
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

      {!en && (
        <>
          <section className="bg-navy-900 py-16">
            <Container>
              <h2 className="text-2xl font-bold text-white">Gelir modeli ve geri ödeme analizi</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">BESS’in ekonomik değeri farklı kaynaklardan oluşabilir. Hangilerinin bir projede geçerli olduğu; güncel mevzuat, piyasa kuralları ve tesisin lisans/bağlantı yapısı çerçevesinde proje özelinde doğrulanır. Hiçbir gelir kalemi kesin ya da garanti edilmiş kabul edilmez. Potansiyel ekonomik değer kaynakları şunlardır:</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {valueSources.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-steel">Geri ödeme tek bir sayı olarak değil; <strong className="font-semibold text-white">baz, iyimser ve ihtiyatlı senaryolar</strong> ile fiyat, çevrim, maliyet ve degradasyon varsayımlarına duyarlılık analizi olarak sunulur. Amaç bir getiri vaadi vermek değil, yatırım kararının hangi varsayımlara dayandığını göstermektir.</p>
            </Container>
          </section>

          <section className="bg-navy-950 py-16">
            <Container>
              <h2 className="text-2xl font-bold text-white">BESS ne zaman mantıklı olabilir?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">Aşağıdaki durumlar BESS’in incelenmeye değer olabileceğine işaret eder; bunlar bir ekonomik sonuç garantisi değildir.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whenItMakesSense.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 max-w-3xl rounded-xl border border-energy-500/30 bg-energy-500/10 p-6">
                <p className="text-sm font-semibold text-white">BESS her santral için ekonomik olmayabilir.</p>
                <p className="mt-2 text-sm leading-7 text-steel">Bağımsız danışmanlık yaklaşımımızda ön fizibilitenin sonucu yatırımın yapılmaması da olabilir. Amaç batarya satmak değil, kararı doğru verilerle almanızı sağlamaktır.</p>
              </div>
            </Container>
          </section>
        </>
      )}

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

      {!en && (
        <section className="bg-navy-900 py-16">
          <Container>
            <h2 className="text-2xl font-bold text-white">BESS Ön Fizibilitesinde Ne Teslim Ediyoruz?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">Çıktı, yatırım kararını destekleyen teknik-ekonomik bir değerlendirmedir. Kapsam projeye göre şekillenir:</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-energy-500/30 text-xs font-semibold text-energy-500">{index + 1}</span>
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-steel">Çalışma kesin bir yatırım tavsiyesi, gelir veya getiri garantisi içermez. Yatırım kararı sonrasında EPC ve tedarik sürecinde <Link href="/tr/services/bagimsiz-muhendis" className="text-energy-500 hover:text-white">bağımsız mühendis</Link> desteği ayrıca değerlendirilebilir.</p>
          </Container>
        </section>
      )}

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
              {relatedServices.map(({ slug, label }) => (
                <Link key={slug} href={servicePath(locale, slug)} className="group flex items-center gap-2 text-sm text-steel hover:text-energy-500 transition">
                  <span className="h-px w-4 bg-energy-500/40 group-hover:w-6 group-hover:bg-energy-500 transition-all" />
                  {label}
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
        <section className="bg-navy-900 py-16">
          <Container className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Sık sorulan sorular</h2>
            <div className="mt-6 grid gap-4">
              {bessFaqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-white/15 p-5">
                  <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                  <p className="mt-4 text-sm leading-7 text-steel">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {!en && (
        <section id="santraliniz-icin-bess-analizi" className="scroll-mt-28 bg-navy-950 py-14">
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
            <TrackedCtaLink href="/tr/free-consultation" serviceType="bess" ctaSource="bess_capacity_analysis_request" className="mt-6 inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              BESS Ön Fizibilite Görüşmesi Talep Edin
            </TrackedCtaLink>
            <p className="mt-4 text-sm leading-7 text-steel">
              BESS çalışması; yatırım kararı öncesinde <Link href="/tr/enerji-santrali-due-diligence" className="text-energy-500 hover:text-white">teknik due diligence</Link> ve <Link href="/tr/hes-degerleme" className="text-energy-500 hover:text-white">santral değerleme</Link> çalışmalarıyla birlikte ele alınabilir.
            </p>
          </Container>
        </section>
      )}

      <CtaSection locale={locale} />
      {!en && (
        <MobileStickyCtaBar
          locale={locale}
          variant="conversion"
          phoneRaw={dict.contact.phoneRaw}
          email={dict.contact.email}
          quoteHref={conversionBarPages["/tr/battery-storage"].quoteHref}
          serviceType={conversionBarPages["/tr/battery-storage"].serviceType}
          waText={conversionBarPages["/tr/battery-storage"].waText}
        />
      )}
    </>
  );
}
