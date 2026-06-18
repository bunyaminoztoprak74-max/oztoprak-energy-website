import type { Locale } from "@/lib/i18n";
import { getCategories, getPosts } from "@/content/blog";
import { getServices } from "@/content/services";
import type { PillarPage, ProgrammaticSeoPage, SeoEntity, TopicCluster } from "@/content/types";

type ProgrammaticData = {
  problems: SeoEntity[];
  locations: SeoEntity[];
  industries: SeoEntity[];
  pillars: PillarPage[];
  clusters: TopicCluster[];
};

const intents = {
  en: [
    { slug: "consultancy", label: "Consultancy" },
    { slug: "technical-audit", label: "Technical Audit" },
    { slug: "owner-engineering", label: "Owner Engineering" }
  ],
  tr: [
    { slug: "danismanlik", label: "Danışmanlık" },
    { slug: "teknik-denetim", label: "Teknik Denetim" },
    { slug: "isveren-muhendisligi", label: "İşveren Mühendisliği" }
  ]
} satisfies Record<Locale, Array<{ slug: string; label: string }>>;

const intentProfiles = {
  en: {
    consultancy: {
      angle: "front-end technical decision support",
      evidence: "site records, operating data, EPC deliverables and risk interviews",
      outcome: "a practical consultancy roadmap with owner-side priorities"
    },
    "technical-audit": {
      angle: "independent asset condition and performance verification",
      evidence: "drawings, test records, trip history, maintenance logs and site observations",
      outcome: "a ranked risk register, evidence gaps and corrective action plan"
    },
    "owner-engineering": {
      angle: "owner-side technical control during EPC, commissioning and handover",
      evidence: "contractor submissions, interface registers, commissioning plans and progress evidence",
      outcome: "clear technical decisions, documented objections and stronger handover control"
    }
  },
  tr: {
    danismanlik: {
      angle: "erken aşama teknik karar desteği",
      evidence: "saha kayıtları, işletme verileri, EPC dokümanları ve risk görüşmeleri",
      outcome: "işveren önceliklerini gösteren uygulanabilir danışmanlık yol haritası"
    },
    "teknik-denetim": {
      angle: "bağımsız varlık durumu ve performans doğrulaması",
      evidence: "çizimler, test kayıtları, açma geçmişi, bakım logları ve saha gözlemleri",
      outcome: "öncelikli risk listesi, kanıt boşlukları ve düzeltici aksiyon planı"
    },
    "isveren-muhendisligi": {
      angle: "EPC, devreye alma ve teslim süreçlerinde işveren tarafı teknik kontrol",
      evidence: "yüklenici sunumları, arayüz listeleri, devreye alma planları ve ilerleme kanıtları",
      outcome: "net teknik kararlar, belgelenmiş itirazlar ve daha güçlü teslim kontrolü"
    }
  }
} satisfies Record<Locale, Record<string, { angle: string; evidence: string; outcome: string }>>;

function getIntentProfile(locale: Locale, intent: string) {
  const profiles: Record<string, { angle: string; evidence: string; outcome: string }> = intentProfiles[locale];
  return profiles[intent] ?? Object.values(profiles)[0];
}

function buildGeneratedIntro(locale: Locale, service: { title: string; description: string }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return `${service.title} in ${location.label} should not be treated as a generic advisory package. Oztoprak Energy frames the work around ${profile.angle}, using ${profile.evidence} to separate commercial assumptions from technical facts. The result is ${profile.outcome}, written for EPC teams, owners, lenders and operating personnel who need decisions they can defend.`;
  }

  return `${location.label} için ${service.title} genel bir danışmanlık paketi gibi ele alınmamalıdır. Öztoprak Enerji çalışmayı ${profile.angle} etrafında kurgular; ${profile.evidence} kullanarak ticari varsayımları teknik gerçeklerden ayırır. Çıktı, EPC ekipleri, işverenler, finans tarafı ve işletme ekiplerinin savunabileceği ${profile.outcome} olur.`;
}

function buildGeneratedSections(locale: Locale, service: { title: string; scope: string[]; outcomes: string[] }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return [
      {
        heading: `How ${service.title} is assessed in ${location.label}`,
        content: `The review starts with the real operating or project context in ${location.label}: grid interface, available records, EPC boundaries, commissioning maturity and O&M routines. This prevents a checklist-only review and keeps the assessment tied to actual plant risk.`
      },
      {
        heading: "Engineering evidence reviewed",
        content: `Typical evidence includes ${profile.evidence}. The work focuses on whether the evidence is complete, technically consistent and strong enough to support investment, commissioning or operational decisions.`
      },
      {
        heading: "Decision-ready outputs",
        content: `Findings are translated into ${profile.outcome}. Recommendations are prioritized by safety, reliability, generation impact, outage requirement, CAPEX/OPEX sensitivity and owner urgency.`
      },
      {
        heading: "Consultant judgment",
        content: `The page is intentionally tied to ${service.scope.slice(0, 3).join(", ")} because those scopes are where hidden project risk usually becomes visible. The tone is advisory, not promotional: weak evidence is flagged, assumptions are separated from measurements, and next actions are made explicit.`
      }
    ];
  }

  return [
    {
      heading: `${location.label} için ${service.title} nasıl değerlendirilir`,
      content: `İnceleme ${location.label} özelindeki gerçek proje veya işletme bağlamıyla başlar: şebeke arayüzü, mevcut kayıtlar, EPC sınırları, devreye alma olgunluğu ve işletme bakım rutinleri. Böylece çalışma yalnızca kontrol listesi seviyesinde kalmaz; gerçek santral riskine bağlanır.`
    },
    {
      heading: "İncelenen mühendislik kanıtları",
      content: `Tipik kanıt seti ${profile.evidence} içerir. Çalışma bu kanıtların eksiksiz, teknik olarak tutarlı ve yatırım, devreye alma veya işletme kararı için yeterli olup olmadığını değerlendirir.`
    },
    {
      heading: "Karara hazır çıktılar",
      content: `Bulgular ${profile.outcome} haline getirilir. Öneriler emniyet, güvenilirlik, üretim etkisi, duruş ihtiyacı, CAPEX/OPEX hassasiyeti ve işveren önceliğine göre sıralanır.`
    },
    {
      heading: "Danışman mühendislik yorumu",
      content: `Sayfa özellikle ${service.scope.slice(0, 3).join(", ")} kapsamlarına bağlanır; çünkü gizli proje riskleri çoğu zaman bu alanlarda görünür olur. Dil tanıtım odaklı değil, danışmanlık odaklıdır: zayıf kanıt işaretlenir, varsayımlar ölçümlerden ayrılır ve sonraki aksiyon netleştirilir.`
    }
  ];
}

function buildGeneratedDeliverables(locale: Locale, service: { outcomes: string[] }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return [
      `Evidence-based assessment note for ${location.label}`,
      `Risk register linked to ${profile.angle}`,
      ...service.outcomes,
      "Internal decision memo for owner, EPC or investor review"
    ].slice(0, 6);
  }

  return [
    `${location.label} için kanıta dayalı teknik değerlendirme notu`,
    `${profile.angle} ile bağlantılı risk listesi`,
    ...service.outcomes,
    "İşveren, EPC veya yatırımcı incelemesi için karar notu"
  ].slice(0, 6);
}

function buildGeneratedFaqs(locale: Locale, service: { title: string }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return [
      {
        question: `What makes ${service.title} in ${location.label} different from a generic review?`,
        answer: `The scope is localized around ${location.label}, then checked against plant evidence, grid context, EPC responsibilities and the specific decision the owner or investor needs to make.`
      },
      {
        question: "What evidence should be prepared before the consultation?",
        answer: `Useful inputs include ${profile.evidence}. Missing records can also be documented as a risk because they affect commissioning, acquisition and O&M decisions.`
      },
      {
        question: "What is the expected output?",
        answer: `The expected output is ${profile.outcome}, supported by findings, priorities, evidence gaps and recommended next actions.`
      }
    ];
  }

  return [
    {
      question: `${location.label} için ${service.title} genel bir incelemeden nasıl ayrılır?`,
      answer: `Kapsam ${location.label} bağlamına göre yerelleştirilir; ardından santral kanıtları, şebeke koşulları, EPC sorumlulukları ve işverenin ya da yatırımcının vermesi gereken karar ile karşılaştırılır.`
    },
    {
      question: "Danışmanlık öncesinde hangi kanıtlar hazırlanmalıdır?",
      answer: `Faydalı girdiler ${profile.evidence} olabilir. Eksik kayıtlar da devreye alma, satın alma ve işletme bakım kararlarını etkilediği için risk olarak dokümante edilir.`
    },
    {
      question: "Beklenen çıktı nedir?",
      answer: `Beklenen çıktı; bulgular, öncelikler, kanıt boşlukları ve önerilen sonraki aksiyonlarla desteklenen ${profile.outcome} olur.`
    }
  ];
}

function classifyService(slug: string) {
  if (slug.includes("hydropower") || slug.includes("hes")) return "hydro";
  if (slug.includes("solar") || slug.includes("ges")) return "solar";
  if (slug.includes("commissioning") || slug.includes("devreye")) return "commissioning";
  if (slug.includes("grid") || slug.includes("sebeke") || slug.includes("koruma")) return "grid";
  if (slug.includes("om") || slug.includes("bakim")) return "om";
  if (slug.includes("audit") || slug.includes("denetim")) return "audit";
  if (slug.includes("epc")) return "epc";
  return "general";
}

function buildFieldProblems(locale: Locale, service: { slug: string; title: string }, location: SeoEntity) {
  const type = classifyService(service.slug);
  const enProblems: Record<string, string[]> = {
    hydro: [
      "Unit efficiency loss hidden inside normal seasonal hydrology changes",
      "Governor, excitation or cooling issues treated as isolated maintenance items instead of availability risks",
      "Incomplete turbine-generator test records after overhaul or commissioning"
    ],
    solar: [
      "Performance ratio loss caused by mixed soiling, inverter clipping, string faults and delayed alarm response",
      "Weak as-built documentation that makes EPC defects hard to separate from O&M degradation",
      "Cleaning and inspection routines that are not linked to measured production loss"
    ],
    commissioning: [
      "Mechanical completion declared before subsystem boundaries and punch-list ownership are clear",
      "Energization sequences started with incomplete protection settings, permits or interlock verification",
      "Performance tests run before stable operating conditions and acceptance criteria are agreed"
    ],
    grid: [
      "Repeated trips investigated as equipment faults while protection coordination remains unchecked",
      "Outdated single-line diagrams and setting files that do not match site modifications",
      "Grid disturbance records kept separately from plant SCADA and relay event files"
    ],
    om: [
      "Availability losses recorded but not converted into failure patterns or maintenance priorities",
      "Recurring alarms closed operationally without root-cause tracking",
      "Spare-part and outage planning decisions made without reliability ranking"
    ],
    audit: [
      "Missing commissioning evidence that weakens acquisition, refinancing or insurance decisions",
      "Asset condition observations not connected to CAPEX timing and outage planning",
      "O&M maturity judged by documents rather than actual site routines and event history"
    ],
    epc: [
      "Interface gaps between civil, electrical, mechanical, automation and grid scopes",
      "Technical submittals approved without checking constructability, operability and handover evidence",
      "Late commissioning planning that pushes unresolved EPC issues into owner operation"
    ],
    general: [
      "Commercial assumptions moving faster than verified technical evidence",
      "Owner decisions made without a clear risk register or acceptance basis",
      "Project records that do not support future commissioning, O&M or audit needs"
    ]
  };

  const trProblems: Record<string, string[]> = {
    hydro: [
      "Mevsimsel hidroloji değişimi içinde gizlenen ünite verim kaybı",
      "Governor, ikaz veya soğutma sorunlarının emre amadelik riski yerine tekil bakım işi gibi ele alınması",
      "Revizyon veya devreye alma sonrası eksik türbin-jeneratör test kayıtları"
    ],
    solar: [
      "Kirlenme, inverter clipping, string arızası ve geciken alarm müdahalesinin birlikte oluşturduğu PR kaybı",
      "EPC kusurlarını O&M bozulmasından ayırmayı zorlaştıran zayıf as-built dokümantasyonu",
      "Ölçülen üretim kaybına bağlanmayan temizlik ve kontrol rutinleri"
    ],
    commissioning: [
      "Alt sistem sınırları ve eksik iş sahipliği netleşmeden mekanik tamamlanmanın ilan edilmesi",
      "Koruma ayarları, izinler veya interlock doğrulaması eksikken enerjilendirme sırasına geçilmesi",
      "Kararlı işletme koşulları ve kabul kriterleri netleşmeden performans testine başlanması"
    ],
    grid: [
      "Koruma koordinasyonu kontrol edilmeden tekrarlayan açmaların yalnızca ekipman arızası gibi incelenmesi",
      "Saha değişiklikleriyle uyumsuz tek hat şemaları ve ayar dosyaları",
      "Şebeke olay kayıtlarının SCADA ve röle olay dosyalarından ayrı tutulması"
    ],
    om: [
      "Emre amadelik kayıplarının arıza paternine veya bakım önceliğine dönüştürülmemesi",
      "Tekrarlayan alarmların kök neden takibi yapılmadan operasyonel olarak kapatılması",
      "Yedek parça ve duruş planlama kararlarının güvenilirlik sıralaması olmadan alınması"
    ],
    audit: [
      "Satın alma, refinansman veya sigorta kararını zayıflatan eksik devreye alma kanıtları",
      "Varlık durumu gözlemlerinin CAPEX zamanlaması ve duruş planlamasına bağlanmaması",
      "O&M olgunluğunun gerçek saha rutini ve olay geçmişi yerine yalnızca dokümana göre yorumlanması"
    ],
    epc: [
      "İnşaat, elektrik, mekanik, otomasyon ve şebeke kapsamları arasındaki arayüz boşlukları",
      "Teknik sunumların uygulanabilirlik, işletilebilirlik ve teslim kanıtı kontrol edilmeden onaylanması",
      "Çözülmemiş EPC konularını işveren işletmesine taşıyan geç devreye alma planlaması"
    ],
    general: [
      "Ticari varsayımların doğrulanmış teknik kanıttan daha hızlı ilerlemesi",
      "Net risk listesi veya kabul esası olmadan işveren kararı alınması",
      "Gelecekteki devreye alma, O&M veya denetim ihtiyacını desteklemeyen proje kayıtları"
    ]
  };

  const base = locale === "en" ? enProblems[type] : trProblems[type];
  return [
    ...base,
    locale === "en"
      ? `Local constraints in ${location.label} not reflected in the technical acceptance basis`
      : `${location.label} özelindeki yerel kısıtların teknik kabul esasına yansıtılmaması`
  ];
}

function buildRecommendedActions(locale: Locale, service: { slug: string; scope: string[] }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return [
      `Build an evidence matrix for ${location.label} covering ${profile.evidence}`,
      `Run a technical gap review against ${service.scope.slice(0, 3).join(", ")}`,
      "Separate immediate safety/reliability issues from medium-term performance improvement items",
      "Assign owner, EPC and O&M responsibilities for each corrective action",
      "Convert findings into a dated action register with outage needs and decision owners"
    ];
  }

  return [
    `${location.label} için ${profile.evidence} kapsayan kanıt matrisi oluşturun`,
    `${service.scope.slice(0, 3).join(", ")} kapsamlarına göre teknik boşluk incelemesi yapın`,
    "Acil emniyet/güvenilirlik konularını orta vadeli performans iyileştirme maddelerinden ayırın",
    "Her düzeltici aksiyon için işveren, EPC ve O&M sorumluluğunu atayın",
    "Bulguları duruş ihtiyacı ve karar sahibi içeren tarihli aksiyon listesine dönüştürün"
  ];
}

function buildExpertCommentary(locale: Locale, service: { title: string; slug: string }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  const type = classifyService(service.slug);
  const enNotes: Record<string, string> = {
    hydro: "In hydropower work, I do not treat low generation as a single equipment question until water availability, unit loading, vibration history, cooling behavior, governor response and outage logs are read together.",
    solar: "In solar reviews, the fastest mistake is to argue about PR before the data boundary is clean: irradiance source, inverter availability, curtailment, soiling and alarm response must be separated first.",
    commissioning: "Commissioning quality is visible in the handover trail. If test sheets, energization permits, relay settings and punch-list closure do not tell one story, the owner is inheriting uncertainty.",
    grid: "For grid and protection issues, relay events and SCADA alarms should be read as one timeline. Otherwise a plant can keep treating a coordination problem as a random trip.",
    om: "O&M improvement starts when downtime records stop being monthly statistics and become failure families with owners, triggers, spare-part logic and measurable closure.",
    audit: "A technical audit should not only say what is wrong. It should show what evidence is missing, what that missing evidence prevents the owner from deciding, and what should be inspected first.",
    epc: "Most EPC problems become expensive at interfaces: who owns a signal, a cable route, a test boundary, a protection setting, or a late design change. That is where owner-side review earns its value.",
    general: "A useful consultant report should reduce ambiguity. It should tell the owner which assumptions are proven, which are weak, and which decisions should wait for better evidence."
  };
  const trNotes: Record<string, string> = {
    hydro: "HES çalışmalarında düşük üretimi; su durumu, ünite yüklenmesi, vibrasyon geçmişi, soğutma davranışı, governor cevabı ve duruş kayıtları birlikte okunmadan tek ekipman sorunu gibi ele almam.",
    solar: "GES incelemelerinde en hızlı hata PR tartışmasına veri sınırı temizlenmeden başlamaktır: ışınım kaynağı, inverter emre amadeliği, kısıt, kirlenme ve alarm müdahalesi önce ayrıştırılmalıdır.",
    commissioning: "Devreye alma kalitesi teslim izinde görünür. Test formları, enerjilendirme izinleri, röle ayarları ve eksik iş kapanışı tek hikaye anlatmıyorsa işveren belirsizlik devralır.",
    grid: "Şebeke ve koruma sorunlarında röle olayları ile SCADA alarmları tek zaman çizelgesi gibi okunmalıdır. Aksi halde koordinasyon problemi rastgele açma gibi ele alınmaya devam eder.",
    om: "O&M iyileştirme; duruş kayıtları aylık istatistik olmaktan çıkıp sahibi, tetikleyicisi, yedek parça mantığı ve ölçülebilir kapanışı olan arıza ailelerine dönüştüğünde başlar.",
    audit: "Teknik denetim yalnızca neyin yanlış olduğunu söylememelidir. Hangi kanıtın eksik olduğunu, bu eksikliğin hangi kararı engellediğini ve önce neyin incelenmesi gerektiğini göstermelidir.",
    epc: "EPC sorunlarının çoğu arayüzlerde pahalı hale gelir: bir sinyal, kablo güzergahı, test sınırı, koruma ayarı veya geç tasarım değişikliği kimin sorumluluğunda? İşveren tarafı inceleme değerini burada üretir.",
    general: "Faydalı danışman raporu belirsizliği azaltmalıdır. Hangi varsayımın kanıtlandığını, hangisinin zayıf olduğunu ve hangi kararın daha iyi kanıt beklemesi gerektiğini işverene söylemelidir."
  };

  const note = locale === "en" ? enNotes[type] : trNotes[type];
  if (locale === "en") {
    return `${note} For this ${service.title} page in ${location.label}, the ${profile.angle} angle is used to keep recommendations operational, not theoretical.`;
  }

  return `${note} ${location.label} için bu ${service.title} sayfasında ${profile.angle} bakışı kullanılır; böylece öneriler teorik değil operasyonel kalır.`;
}

function buildGeneratedConclusion(locale: Locale, service: { title: string }, location: SeoEntity, intent: string) {
  const profile = getIntentProfile(locale, intent);
  if (locale === "en") {
    return `${service.title} in ${location.label} is most valuable when it converts incomplete site evidence into a defensible engineering decision. The next step is to review the available records, identify the weak assumptions, and decide whether ${profile.outcome} is needed before capital, commissioning or O&M commitments are made.`;
  }

  return `${location.label} için ${service.title}, eksik saha kanıtını savunulabilir mühendislik kararına dönüştürdüğünde en yüksek değeri üretir. Sonraki adım mevcut kayıtları incelemek, zayıf varsayımları belirlemek ve sermaye, devreye alma veya O&M taahhütleri verilmeden önce ${profile.outcome} gerekip gerekmediğine karar vermektir.`;
}

export const programmaticSeoData: Record<Locale, ProgrammaticData> = {
  en: {
    problems: [
      {
        slug: "low-hydropower-generation",
        label: "Low Hydropower Generation",
        description: "Diagnose avoidable hydropower production losses through operating data, hydraulic review and equipment performance analysis.",
        keywords: ["low hydropower generation", "hydropower plant optimization", "hydropower consultancy"]
      },
      {
        slug: "solar-underperformance",
        label: "Solar Plant Underperformance",
        description: "Separate resource, EPC quality and O&M causes behind solar PV underperformance.",
        keywords: ["solar plant underperformance", "solar power plant consultancy", "solar performance improvement"]
      },
      {
        slug: "commissioning-delays",
        label: "Power Plant Commissioning Delays",
        description: "Reduce commissioning uncertainty with readiness reviews, test procedures and handover control.",
        keywords: ["power plant commissioning delay", "commissioning checklist", "EPC technical consultancy"]
      },
      {
        slug: "grid-trips-protection-issues",
        label: "Grid Trips and Protection Issues",
        description: "Review protection settings, grid interface evidence and trip history to reduce repeat outage risk.",
        keywords: ["grid protection analysis", "power plant trips", "protection coordination"]
      },
      {
        slug: "acquisition-technical-risk",
        label: "Acquisition Technical Risk",
        description: "Identify technical risks before renewable energy asset acquisition or refinancing decisions.",
        keywords: ["power plant technical audit", "technical due diligence", "renewable energy investment advisory"]
      },
      {
        slug: "om-availability-losses",
        label: "O&M Availability Losses",
        description: "Improve availability, maintenance discipline and recurring-failure response in operating power plants.",
        keywords: ["O&M optimization", "power plant availability", "O&M performance improvement"]
      }
    ],
    locations: [
      { slug: "turkey", label: "Turkey", description: "Renewable energy consultancy for hydropower and solar assets in Turkey.", keywords: ["renewable energy consultant Turkey", "EPC consultancy Turkey"] },
      { slug: "istanbul", label: "Istanbul", description: "Technical advisory for owners, investors and EPC teams managed from Istanbul.", keywords: ["energy consultancy Istanbul", "EPC consultant Istanbul"] },
      { slug: "ankara", label: "Ankara", description: "Power plant consultancy for investment, regulation and grid-facing teams in Ankara.", keywords: ["energy consultancy Ankara", "power plant consultant Ankara"] },
      { slug: "izmir", label: "Izmir", description: "Solar and industrial energy consultancy for assets and investors around Izmir.", keywords: ["solar consultancy Izmir", "renewable energy consultant Izmir"] },
      { slug: "konya", label: "Konya", description: "Solar PV performance and EPC advisory for high-resource regions around Konya.", keywords: ["solar power plant consultancy Konya", "GES consultant Konya"] },
      { slug: "antalya", label: "Antalya", description: "Renewable energy technical consultancy for solar and industrial facilities around Antalya.", keywords: ["solar consultant Antalya", "renewable energy consultancy Antalya"] },
      { slug: "europe", label: "Europe", description: "International EPC and renewable energy advisory for European project teams.", keywords: ["renewable energy consultant Europe", "EPC technical consultancy Europe"] },
      { slug: "middle-east", label: "Middle East", description: "Technical consultancy for renewable energy investors and EPC companies in Middle East markets.", keywords: ["renewable energy consultant Middle East", "EPC consultancy Middle East"] },
      { slug: "bursa", label: "Bursa", description: "Industrial electricity cost optimization and renewable energy consultancy for automotive and manufacturing facilities in Bursa.", keywords: ["energy consultancy Bursa", "industrial electricity optimization Bursa", "reactive penalty Bursa"] },
      { slug: "kocaeli", label: "Kocaeli", description: "Industrial electricity and renewable energy consultancy for the Kocaeli industrial belt including Gebze and Dilovasi organized industrial zones.", keywords: ["energy consultancy Kocaeli", "industrial energy Kocaeli", "OSB electricity optimization Kocaeli"] },
      { slug: "gaziantep", label: "Gaziantep", description: "Industrial electricity cost optimization and solar feasibility consultancy for manufacturing and industrial facilities in Gaziantep.", keywords: ["energy consultancy Gaziantep", "industrial electricity Gaziantep", "solar feasibility Gaziantep"] }
    ],
    industries: [
      { slug: "organized-industrial-zones", label: "Organized Industrial Zones", description: "Industrial electricity cost optimization, reactive penalty elimination and rooftop solar feasibility for facilities in organized industrial zones.", keywords: ["organized industrial zone electricity", "OSB reactive penalty", "industrial zone electricity cost", "OSB energy optimization"] },
      { slug: "manufacturing-facilities", label: "Manufacturing Facilities", description: "Electricity cost analysis, compensation system review and demand charge optimization for manufacturing and processing facilities.", keywords: ["manufacturing electricity cost", "factory reactive penalty", "manufacturing energy optimization", "factory electricity bill analysis"] },
      { slug: "food-processing-plants", label: "Food Processing Plants", description: "Industrial electricity cost reduction for food and beverage processing plants through reactive penalty elimination, demand management and rooftop solar feasibility.", keywords: ["food processing energy cost", "food plant electricity optimization", "food factory reactive penalty", "food processing solar"] }
    ],
    pillars: [
      {
        slug: "renewable-energy-consultancy",
        title: "Renewable Energy Consultancy",
        description: "A strategic pillar for EPC, owner engineering, technical audits and investment advisory across hydropower and solar assets.",
        clusters: ["hydropower-consultancy", "solar-consultancy", "epc-owner-engineering"],
        primaryServices: ["renewable-energy-investment-advisory", "epc-technical-consultancy", "owners-engineering"]
      },
      {
        slug: "power-plant-performance",
        title: "Power Plant Performance",
        description: "A performance-focused pillar for O&M optimization, commissioning quality, grid reliability and technical recovery.",
        clusters: ["om-optimization", "commissioning-readiness", "grid-protection"]
      , primaryServices: ["om-performance-improvement", "power-plant-commissioning", "grid-protection-system-analysis"]
      }
    ],
    clusters: [
      {
        slug: "hydropower-consultancy",
        title: "Hydropower Consultancy Topic Cluster",
        description: "Hydropower optimization, technical audits, operational performance and asset health content.",
        pillar: "renewable-energy-consultancy",
        services: ["hydropower-plant-optimization", "technical-audits-existing-power-plants"],
        problems: ["low-hydropower-generation", "om-availability-losses"],
        blogCategories: ["hydropower", "technical-audits"]
      },
      {
        slug: "solar-consultancy",
        title: "Solar Power Consultancy Topic Cluster",
        description: "Solar PV performance, EPC quality, O&M routines and investor due diligence content.",
        pillar: "renewable-energy-consultancy",
        services: ["solar-power-plant-consultancy", "om-performance-improvement"],
        problems: ["solar-underperformance", "acquisition-technical-risk"],
        blogCategories: ["solar", "epc"]
      },
      {
        slug: "epc-owner-engineering",
        title: "EPC and Owner's Engineering Topic Cluster",
        description: "EPC risk, owner-side technical control, tender support and project delivery assurance.",
        pillar: "renewable-energy-consultancy",
        services: ["epc-technical-consultancy", "owners-engineering"],
        problems: ["commissioning-delays", "acquisition-technical-risk"],
        blogCategories: ["epc", "commissioning"]
      },
      {
        slug: "om-optimization",
        title: "O&M Optimization Topic Cluster",
        description: "Availability, recurring failures, maintenance discipline and performance recovery for operating plants.",
        pillar: "power-plant-performance",
        services: ["om-performance-improvement", "technical-audits-existing-power-plants"],
        problems: ["om-availability-losses", "low-hydropower-generation"],
        blogCategories: ["hydropower", "solar"]
      },
      {
        slug: "commissioning-readiness",
        title: "Commissioning Readiness Topic Cluster",
        description: "Commissioning readiness, test procedures, energization sequencing and handover evidence.",
        pillar: "power-plant-performance",
        services: ["power-plant-commissioning", "epc-technical-consultancy"],
        problems: ["commissioning-delays", "grid-trips-protection-issues"],
        blogCategories: ["commissioning", "epc"]
      },
      {
        slug: "grid-protection",
        title: "Grid and Protection Topic Cluster",
        description: "Grid interface, protection coordination, trip analysis and reliability improvement content.",
        pillar: "power-plant-performance",
        services: ["grid-protection-system-analysis", "power-plant-commissioning"],
        problems: ["grid-trips-protection-issues", "om-availability-losses"],
        blogCategories: ["grid", "commissioning"]
      }
    ]
  },
  tr: {
    problems: [
      {
        slug: "dusuk-hes-uretimi",
        label: "Düşük HES Üretimi",
        description: "İşletme verisi, hidrolik inceleme ve ekipman performans analiziyle önlenebilir HES üretim kayıplarını teşhis edin.",
        keywords: ["düşük HES üretimi", "HES optimizasyonu", "HES danışmanlığı"]
      },
      {
        slug: "ges-dusuk-performans",
        label: "GES Düşük Performansı",
        description: "GES düşük performansında kaynak, EPC kalite ve işletme bakım nedenlerini ayrıştırın.",
        keywords: ["GES düşük performans", "GES danışmanlığı", "GES performans iyileştirme"]
      },
      {
        slug: "devreye-alma-gecikmeleri",
        label: "Santral Devreye Alma Gecikmeleri",
        description: "Hazırlık incelemeleri, test prosedürleri ve teslim kontrolüyle devreye alma belirsizliğini azaltın.",
        keywords: ["santral devreye alma gecikmesi", "devreye alma kontrol listesi", "EPC teknik danışmanlık"]
      },
      {
        slug: "sebeke-acmalari-koruma-sorunlari",
        label: "Şebeke Açmaları ve Koruma Sorunları",
        description: "Tekrarlayan duruş riskini azaltmak için koruma ayarları, şebeke arayüz kanıtları ve açma geçmişini inceleyin.",
        keywords: ["şebeke koruma analizi", "santral açmaları", "koruma koordinasyonu"]
      },
      {
        slug: "satin-alma-teknik-riski",
        label: "Satın Alma Teknik Riski",
        description: "Yenilenebilir enerji varlığı satın alma veya refinansman kararları öncesinde teknik riskleri belirleyin.",
        keywords: ["santral teknik denetim", "teknik durum tespiti", "enerji yatırım danışmanlığı"]
      },
      {
        slug: "isletme-bakim-emre-amadelik-kayiplari",
        label: "İşletme Bakım Emre Amadelik Kayıpları",
        description: "Çalışan santrallerde emre amadelik, bakım disiplini ve tekrarlayan arıza müdahalesini iyileştirin.",
        keywords: ["işletme bakım optimizasyonu", "santral emre amadelik", "O&M performans iyileştirme"]
      }
    ],
    locations: [
      { slug: "turkiye", label: "Türkiye", description: "Türkiye'deki HES ve GES varlıkları için yenilenebilir enerji danışmanlığı.", keywords: ["yenilenebilir enerji danışmanı Türkiye", "EPC danışmanlığı Türkiye"] },
      { slug: "istanbul", label: "İstanbul", description: "İstanbul merkezli yönetilen işveren, yatırımcı ve EPC ekipleri için teknik danışmanlık.", keywords: ["enerji danışmanlığı İstanbul", "EPC danışmanı İstanbul"] },
      { slug: "ankara", label: "Ankara", description: "Ankara'daki yatırım, regülasyon ve şebeke odaklı ekipler için santral danışmanlığı.", keywords: ["enerji danışmanlığı Ankara", "santral danışmanı Ankara"] },
      { slug: "izmir", label: "İzmir", description: "İzmir çevresindeki GES ve endüstriyel enerji yatırımları için teknik danışmanlık.", keywords: ["GES danışmanlığı İzmir", "yenilenebilir enerji danışmanı İzmir"] },
      { slug: "konya", label: "Konya", description: "Konya ve çevresindeki yüksek kaynaklı bölgeler için GES performans ve EPC danışmanlığı.", keywords: ["GES danışmanlığı Konya", "solar danışmanlık Konya"] },
      { slug: "antalya", label: "Antalya", description: "Antalya çevresindeki GES ve endüstriyel tesisler için yenilenebilir enerji teknik danışmanlığı.", keywords: ["GES danışmanı Antalya", "yenilenebilir enerji danışmanlığı Antalya"] },
      { slug: "avrupa", label: "Avrupa", description: "Avrupa proje ekipleri için uluslararası EPC ve yenilenebilir enerji danışmanlığı.", keywords: ["yenilenebilir enerji danışmanı Avrupa", "EPC teknik danışmanlık Avrupa"] },
      { slug: "orta-dogu", label: "Orta Doğu", description: "Orta Doğu pazarlarındaki yatırımcılar ve EPC şirketleri için teknik danışmanlık.", keywords: ["yenilenebilir enerji danışmanı Orta Doğu", "EPC danışmanlığı Orta Doğu"] },
      { slug: "bursa", label: "Bursa", description: "Bursa'daki otomotiv ve üretim tesisleri için endüstriyel elektrik maliyet optimizasyonu ve yenilenebilir enerji danışmanlığı.", keywords: ["enerji danışmanlığı Bursa", "endüstriyel elektrik optimizasyonu Bursa", "reaktif ceza analizi Bursa"] },
      { slug: "kocaeli", label: "Kocaeli", description: "Gebze ve Dilovası organize sanayi bölgeleri dahil Kocaeli sanayi kuşağındaki tesisler için endüstriyel elektrik ve yenilenebilir enerji danışmanlığı.", keywords: ["enerji danışmanlığı Kocaeli", "endüstriyel enerji Kocaeli", "OSB elektrik optimizasyonu Kocaeli"] },
      { slug: "gaziantep", label: "Gaziantep", description: "Gaziantep'teki imalat ve sanayi tesisleri için endüstriyel elektrik maliyet optimizasyonu ve çatı GES fizibilite danışmanlığı.", keywords: ["enerji danışmanlığı Gaziantep", "endüstriyel elektrik Gaziantep", "çatı GES fizibilite Gaziantep"] }
    ],
    industries: [
      { slug: "organize-sanayi-bolgeleri", label: "Organize Sanayi Bölgeleri", description: "Organize sanayi bölgelerindeki tesisler için endüstriyel elektrik maliyet optimizasyonu, reaktif ceza giderme ve çatı GES fizibilite.", keywords: ["OSB elektrik maliyeti", "organize sanayi bölgesi reaktif ceza", "OSB enerji optimizasyonu", "sanayi bölgesi elektrik faturası"] },
      { slug: "imalat-tesisleri", label: "İmalat Tesisleri", description: "İmalat ve proses tesisleri için elektrik faturası analizi, kompanzasyon sistemi incelemesi ve talep yükü optimizasyonu.", keywords: ["imalat tesisi elektrik maliyeti", "fabrika reaktif ceza", "imalat enerji optimizasyonu", "fabrika elektrik faturası analizi"] },
      { slug: "gida-uretim-tesisleri", label: "Gıda Üretim Tesisleri", description: "Reaktif ceza giderme, talep yönetimi ve çatı GES fizibilite aracılığıyla gıda ve içecek üretim tesisleri için elektrik maliyeti azaltma.", keywords: ["gıda tesisi enerji maliyeti", "gıda fabrikası elektrik optimizasyonu", "gıda üretim reaktif ceza", "gıda fabrikası çatı GES"] }
    ],
    pillars: [
      {
        slug: "yenilenebilir-enerji-danismanligi",
        title: "Yenilenebilir Enerji Danışmanlığı",
        description: "HES ve GES varlıklarında EPC, işveren mühendisliği, teknik denetim ve yatırım danışmanlığı için stratejik pillar sayfa.",
        clusters: ["hes-danismanligi", "ges-danismanligi", "epc-isveren-muhendisligi"],
        primaryServices: ["yenilenebilir-enerji-yatirim-danismanligi", "epc-teknik-danismanlik", "isveren-muhendisligi"]
      },
      {
        slug: "enerji-santrali-performansi",
        title: "Enerji Santrali Performansı",
        description: "İşletme bakım optimizasyonu, devreye alma kalitesi, şebeke güvenilirliği ve teknik toparlama için performans pillar sayfası.",
        clusters: ["isletme-bakim-optimizasyonu", "devreye-alma-hazirligi", "sebeke-koruma"],
        primaryServices: ["isletme-bakim-performans-iyilestirme", "enerji-santrali-devreye-alma", "sebeke-koruma-sistemi-analizi"]
      }
    ],
    clusters: [
      {
        slug: "hes-danismanligi",
        title: "HES Danışmanlığı Konu Kümesi",
        description: "HES optimizasyonu, teknik denetim, operasyonel performans ve varlık sağlığı içerikleri.",
        pillar: "yenilenebilir-enerji-danismanligi",
        services: ["hes-optimizasyonu", "mevcut-santraller-icin-teknik-denetim"],
        problems: ["dusuk-hes-uretimi", "isletme-bakim-emre-amadelik-kayiplari"],
        blogCategories: ["hes", "teknik-denetim"]
      },
      {
        slug: "ges-danismanligi",
        title: "GES Danışmanlığı Konu Kümesi",
        description: "GES performansı, EPC kalitesi, O&M rutinleri ve yatırımcı teknik durum tespiti içerikleri.",
        pillar: "yenilenebilir-enerji-danismanligi",
        services: ["ges-danismanligi", "isletme-bakim-performans-iyilestirme"],
        problems: ["ges-dusuk-performans", "satin-alma-teknik-riski"],
        blogCategories: ["ges", "epc"]
      },
      {
        slug: "epc-isveren-muhendisligi",
        title: "EPC ve İşveren Mühendisliği Konu Kümesi",
        description: "EPC riskleri, işveren tarafı teknik kontrol, ihale desteği ve proje teslim güvence içerikleri.",
        pillar: "yenilenebilir-enerji-danismanligi",
        services: ["epc-teknik-danismanlik", "isveren-muhendisligi"],
        problems: ["devreye-alma-gecikmeleri", "satin-alma-teknik-riski"],
        blogCategories: ["epc", "devreye-alma"]
      },
      {
        slug: "isletme-bakim-optimizasyonu",
        title: "İşletme Bakım Optimizasyonu Konu Kümesi",
        description: "Emre amadelik, tekrarlayan arızalar, bakım disiplini ve çalışan santrallerde performans toparlama.",
        pillar: "enerji-santrali-performansi",
        services: ["isletme-bakim-performans-iyilestirme", "mevcut-santraller-icin-teknik-denetim"],
        problems: ["isletme-bakim-emre-amadelik-kayiplari", "dusuk-hes-uretimi"],
        blogCategories: ["hes", "ges"]
      },
      {
        slug: "devreye-alma-hazirligi",
        title: "Devreye Alma Hazırlığı Konu Kümesi",
        description: "Devreye alma hazırlığı, test prosedürleri, enerjilendirme sırası ve teslim kanıtları.",
        pillar: "enerji-santrali-performansi",
        services: ["enerji-santrali-devreye-alma", "epc-teknik-danismanlik"],
        problems: ["devreye-alma-gecikmeleri", "sebeke-acmalari-koruma-sorunlari"],
        blogCategories: ["devreye-alma", "epc"]
      },
      {
        slug: "sebeke-koruma",
        title: "Şebeke ve Koruma Konu Kümesi",
        description: "Şebeke arayüzü, koruma koordinasyonu, açma analizi ve güvenilirlik iyileştirme içerikleri.",
        pillar: "enerji-santrali-performansi",
        services: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma"],
        problems: ["sebeke-acmalari-koruma-sorunlari", "isletme-bakim-emre-amadelik-kayiplari"],
        blogCategories: ["sebeke", "devreye-alma"]
      }
    ]
  }
};

export function getProblems(locale: Locale) {
  return programmaticSeoData[locale].problems;
}

export function getProblem(locale: Locale, slug: string) {
  return getProblems(locale).find((problem) => problem.slug === slug);
}

export function getLocations(locale: Locale) {
  return programmaticSeoData[locale].locations;
}

export function getLocation(locale: Locale, slug: string) {
  return getLocations(locale).find((location) => location.slug === slug);
}

export function getIndustries(locale: Locale) {
  return programmaticSeoData[locale].industries;
}

export function getIndustry(locale: Locale, slug: string) {
  return getIndustries(locale).find((industry) => industry.slug === slug);
}

export function getPillars(locale: Locale) {
  return programmaticSeoData[locale].pillars;
}

export function getPillar(locale: Locale, slug: string) {
  return getPillars(locale).find((pillar) => pillar.slug === slug);
}

export function getClusters(locale: Locale) {
  return programmaticSeoData[locale].clusters;
}

export function getCluster(locale: Locale, slug: string) {
  return getClusters(locale).find((cluster) => cluster.slug === slug);
}

export function generateProgrammaticSeoPages(locale: Locale): ProgrammaticSeoPage[] {
  const services = getServices(locale);
  const locations = getLocations(locale);

  return services.flatMap((service) =>
    locations.flatMap((location) =>
      intents[locale].map((intent) => {
        const title =
          locale === "en"
            ? `${service.title} in ${location.label} | ${intent.label}`
            : `${location.label} ${service.title} | ${intent.label}`;
        const h1 =
          locale === "en"
            ? `${service.title} in ${location.label}`
            : `${location.label} ${service.title}`;
        const description =
          locale === "en"
            ? `${service.description} Localized for ${location.label} with technical scope, risk review, owner-side reporting and consultation pathways.`
            : `${service.description} ${location.label} için teknik kapsam, risk incelemesi, işveren tarafı raporlama ve danışmanlık adımlarıyla yapılandırılır.`;

        return {
          slug: `${service.slug}-${location.slug}-${intent.slug}`,
          title,
          h1,
          description,
          intro: buildGeneratedIntro(locale, service, location, intent.slug),
          sections: buildGeneratedSections(locale, service, location, intent.slug),
          expertCommentary: buildExpertCommentary(locale, service, location, intent.slug),
          fieldProblems: buildFieldProblems(locale, service, location),
          recommendedActions: buildRecommendedActions(locale, service, location, intent.slug),
          deliverables: buildGeneratedDeliverables(locale, service, location, intent.slug),
          faqs: buildGeneratedFaqs(locale, service, location, intent.slug),
          cta:
            locale === "en"
              ? `Request a technical consultation for ${service.title.toLowerCase()} in ${location.label}. We will review the available evidence and define the most useful next engineering step.`
              : `${location.label} için ${service.title} konusunda teknik danışmanlık talep edin. Mevcut kanıtları inceleyip en faydalı sonraki mühendislik adımını netleştirelim.`,
          conclusion: buildGeneratedConclusion(locale, service, location, intent.slug),
          locale,
          serviceSlug: service.slug,
          locationSlug: location.slug,
          intent: intent.slug,
          keywords: [...service.keywords, ...location.keywords]
        };
      })
    )
  );
}

export function getProgrammaticSeoPage(locale: Locale, slug: string) {
  return generateProgrammaticSeoPages(locale).find((page) => page.slug === slug);
}

export function getRelatedContent(locale: Locale, seed: { services?: string[]; problems?: string[]; location?: string; categories?: string[]; exclude?: string }) {
  const serviceSeed = seed.services ?? [];
  const problemSeed = seed.problems ?? [];
  const categorySeed = (seed.categories ?? []).map((item) => item.toLowerCase());
  const serviceKeywords = getServices(locale)
    .filter((service) => serviceSeed.includes(service.slug))
    .flatMap((service) => service.keywords.map((keyword) => keyword.toLowerCase()));
  const problemKeywords = getProblems(locale)
    .filter((problem) => problemSeed.includes(problem.slug))
    .flatMap((problem) => problem.keywords.map((keyword) => keyword.toLowerCase()));
  const seedTerms = [...serviceSeed, ...problemSeed, ...categorySeed, ...serviceKeywords, ...problemKeywords].join(" ");

  const scoreText = (values: string[]) =>
    values.reduce((score, value) => {
      const normalized = value.toLowerCase();
      if (seedTerms.includes(normalized)) return score + 3;
      if (normalized.split(/\s+/).some((part) => part.length > 4 && seedTerms.includes(part))) return score + 1;
      return score;
    }, 0);

  const services = getServices(locale)
    .filter((service) => service.slug !== seed.exclude)
    .map((service) => ({ item: service, score: (serviceSeed.includes(service.slug) ? 4 : 0) + scoreText([...service.keywords, service.title, service.description]) }))
    .sort((a, b) => b.score - a.score)
    .filter(({ score }, index) => score > 0 || index < 4)
    .map(({ item }) => item)
    .slice(0, 4);

  const problems = getProblems(locale)
    .filter((problem) => problem.slug !== seed.exclude)
    .map((problem) => ({ item: problem, score: (problemSeed.includes(problem.slug) ? 4 : 0) + scoreText([...problem.keywords, problem.label, problem.description]) }))
    .sort((a, b) => b.score - a.score)
    .filter(({ score }, index) => score > 0 || index < 4)
    .map(({ item }) => item)
    .slice(0, 4);

  const posts = getPosts(locale)
    .filter((post) => post.slug !== seed.exclude)
    .map((post) => ({
      item: post,
      score:
        (post.serviceLinks.some((link) => serviceSeed.includes(link)) ? 4 : 0) +
        (categorySeed.includes(post.categorySlug.toLowerCase()) ? 3 : 0) +
        scoreText([post.title, post.description, post.category])
    }))
    .sort((a, b) => b.score - a.score)
    .filter(({ score }, index) => score > 0 || index < 4)
    .map(({ item }) => item)
    .slice(0, 4);

  const clusters = getClusters(locale)
    .filter((cluster) => cluster.slug !== seed.exclude)
    .map((cluster) => ({
      item: cluster,
      score:
        cluster.services.filter((service) => serviceSeed.includes(service)).length * 4 +
        cluster.problems.filter((problem) => problemSeed.includes(problem)).length * 4 +
        cluster.blogCategories.filter((category) => categorySeed.includes(category.toLowerCase())).length * 3 +
        scoreText([cluster.title, cluster.description])
    }))
    .sort((a, b) => b.score - a.score)
    .filter(({ score }, index) => score > 0 || index < 3)
    .map(({ item }) => item)
    .slice(0, 3);

  return { services, problems, posts, clusters };
}

export function getProgrammaticStats(locale: Locale) {
  return {
    services: getServices(locale).length,
    problems: getProblems(locale).length,
    locations: getLocations(locale).length,
    clusters: getClusters(locale).length,
    pillars: getPillars(locale).length,
    generatedSeoPages: generateProgrammaticSeoPages(locale).length,
    blogCategories: getCategories(locale).length
  };
}
