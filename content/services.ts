import type { Locale } from "@/lib/i18n";
import type { Service } from "@/content/types";

const sharedFaq = {
  en: [
    {
      question: "When should we request this service?",
      answer: "The best time is before irreversible EPC, commissioning, acquisition or O&M decisions are made, but existing assets can also be reviewed at any stage."
    },
    {
      question: "Can the work be delivered for international teams?",
      answer: "Yes. Reporting can be structured for EPC contractors, owners, lenders and international energy companies."
    }
  ],
  tr: [
    {
      question: "Bu hizmet ne zaman talep edilmelidir?",
      answer: "En doğru zaman EPC, devreye alma, satın alma veya işletme bakım kararları kesinleşmeden öncedir; mevcut santraller de her aşamada incelenebilir."
    },
    {
      question: "Çalışma uluslararası ekipler için hazırlanabilir mi?",
      answer: "Evet. Raporlama EPC yüklenicileri, işverenler, finans kuruluşları ve uluslararası enerji şirketleri için yapılandırılabilir."
    }
  ]
};

export const services: Record<Locale, Service[]> = {
  en: [
    {
      slug: "epc-technical-consultancy",
      title: "EPC Technical Consultancy",
      eyebrow: "Risk, quality and constructability",
      description: "Independent EPC technical consultancy for renewable energy projects from design review to site execution and handover.",
      keywords: ["EPC technical consultancy", "renewable energy consultant", "owner's engineering"],
      outcomes: ["Clear EPC risk register", "Improved technical specifications", "Better handover readiness"],
      scope: ["Design and specification review", "EPC tender technical support", "Site quality observations", "Interface risk assessment"],
      faqs: sharedFaq.en
    },
    {
      slug: "hydropower-plant-optimization",
      title: "Hydropower Plant Optimization",
      eyebrow: "Efficiency and availability",
      description: "Hydropower consultancy focused on output, reliability, water-to-wire performance and practical O&M improvements.",
      keywords: ["hydropower consultancy", "hydropower plant optimization", "O&M optimization"],
      outcomes: ["Reduced avoidable losses", "Improved availability", "Prioritized corrective actions"],
      scope: ["Turbine and generator performance review", "Hydraulic loss assessment", "Operational data analysis", "Maintenance practice review"],
      faqs: sharedFaq.en
    },
    {
      slug: "solar-power-plant-consultancy",
      title: "Solar Power Plant Consultancy",
      eyebrow: "Yield and reliability",
      description: "Solar power plant consultancy for investors, EPC teams and owners seeking stronger generation, quality and lifecycle performance.",
      keywords: ["solar power plant consultancy", "solar plant performance improvement", "renewable energy consultant"],
      outcomes: ["Improved PR analysis", "Lower underperformance risk", "Actionable O&M roadmap"],
      scope: ["Yield and loss review", "EPC quality review", "O&M performance assessment", "Technical due diligence"],
      faqs: sharedFaq.en
    },
    {
      slug: "power-plant-commissioning",
      title: "Power Plant Commissioning",
      eyebrow: "Readiness and controlled startup",
      description: "Commissioning consultancy for power plants covering procedures, test planning, punch-list control and performance readiness.",
      keywords: ["power plant commissioning", "commissioning checklist", "EPC technical consultancy"],
      outcomes: ["Safer startup", "Cleaner punch-list closure", "Documented test evidence"],
      scope: ["Commissioning readiness review", "Test procedure review", "Performance test support", "Handover documentation review"],
      faqs: sharedFaq.en
    },
    {
      slug: "owners-engineering",
      title: "Owner's Engineering",
      eyebrow: "Owner-side technical control",
      description: "Owner's engineering services that protect project value through independent review, field observations and decision support.",
      keywords: ["owner's engineering", "EPC technical consultancy", "renewable energy project advisory"],
      outcomes: ["Better owner visibility", "Reduced technical ambiguity", "Stronger contractor alignment", "Cleaner FAT, SAT and commissioning readiness evidence", "More disciplined project handover controls"],
      scope: [
        "Technical governance",
        "EPC design review and constructability challenge",
        "Contractor deliverable review",
        "Factory acceptance test (FAT) and site acceptance test (SAT) evidence review",
        "Inspection and test plan (ITP) control",
        "Non-conformance report (NCR) management and closeout follow-up",
        "Commissioning readiness and energization gate review",
        "Project handover controls, punch-list discipline and as-built documentation review",
        "Site progress observations",
        "Decision memos"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "How does owner's engineering reduce EPC risk?",
          answer: "It gives the owner independent technical control over design submittals, ITP checkpoints, FAT/SAT evidence, NCR closeout, commissioning readiness and handover documentation before issues become delay claims or operational defects."
        },
        {
          question: "Do you review FAT, SAT, ITP and NCR documentation?",
          answer: "Yes. These records are reviewed as evidence of quality maturity, equipment readiness, interface control and contractor accountability."
        }
      ]
    },
    {
      slug: "om-performance-improvement",
      title: "O&M Performance Improvement",
      eyebrow: "Availability, reliability, losses",
      description: "O&M optimization services for existing renewable energy assets that need measurable operational performance improvement.",
      keywords: ["O&M optimization", "power plant performance analysis", "renewable energy consultant"],
      outcomes: ["Higher availability", "Focused maintenance planning", "Reduced recurring failures"],
      scope: ["Availability and downtime analysis", "Maintenance planning review", "Failure pattern assessment", "KPI structure improvement"],
      faqs: sharedFaq.en
    },
    {
      slug: "grid-protection-system-analysis",
      title: "Grid & Protection System Analysis",
      eyebrow: "Reliability and compliance",
      description: "Grid and protection analysis for power plants requiring stronger coordination, reliability and utility interface confidence.",
      keywords: ["grid protection analysis", "protection coordination", "power plant technical audit"],
      outcomes: ["Reduced trip risk", "Improved protection logic", "Clear grid interface actions"],
      scope: ["Protection setting review", "Single-line diagram assessment", "Trip event analysis", "Grid compliance observations"],
      faqs: sharedFaq.en
    },
    {
      slug: "technical-audits-existing-power-plants",
      title: "Technical Audits for Existing Power Plants",
      eyebrow: "Due diligence and asset health",
      description: "Technical audits for operating power plants covering asset condition, performance risks, O&M maturity and investment priorities.",
      keywords: ["power plant technical audit", "hydropower technical audit", "technical due diligence"],
      outcomes: ["Prioritized risk register", "Investment-grade findings", "Action plan for asset recovery"],
      scope: ["Site inspection", "Document review", "Performance data review", "Corrective action roadmap"],
      faqs: sharedFaq.en
    },
    {
      slug: "renewable-energy-investment-advisory",
      title: "Renewable Energy Investment Advisory",
      eyebrow: "Technical clarity for investment",
      description: "Renewable energy project advisory for investors evaluating feasibility, acquisition, development or performance recovery options.",
      keywords: ["renewable energy investment advisory", "renewable energy consultant", "power plant technical audit"],
      outcomes: ["Better investment decisions", "Clear technical risks", "Practical value creation options"],
      scope: ["Technical due diligence", "Feasibility challenge review", "CAPEX/OPEX technical assumptions", "Asset improvement strategy"],
      faqs: sharedFaq.en
    },
    {
      slug: "hydropower-consulting",
      title: "Hydropower Consulting",
      eyebrow: "HPP performance, commissioning and asset reliability",
      description: "Expert hydropower consulting for owners, EPC teams and investors who need practical engineering support for HPP commissioning, operations, technical audits and performance recovery.",
      keywords: ["hydropower consulting", "HPP commissioning", "hydropower technical audit", "power plant operations"],
      outcomes: ["Higher HPP availability", "Clear commissioning and O&M risk priorities", "Evidence-based hydropower improvement plan"],
      scope: ["Hydropower site inspection", "Turbine-generator operating review", "HPP commissioning evidence assessment", "Water-to-wire loss analysis", "O&M and outage history review"],
      faqs: sharedFaq.en
    },
    {
      slug: "energy-audit",
      title: "Energy Audit Services",
      eyebrow: "Plant performance, losses and technical due diligence",
      description: "Energy audit services for hydropower, solar and renewable power plants focused on technical risk, operating losses, asset condition and practical corrective actions.",
      keywords: ["energy audit services", "power plant technical audit", "renewable energy consultancy", "plant performance review"],
      outcomes: ["Prioritized technical audit report", "Actionable loss reduction roadmap", "Owner-ready investment and risk ranking"],
      scope: ["Power plant site audit", "Performance and loss review", "Asset condition observations", "Grid and protection evidence review", "Corrective action prioritization"],
      faqs: sharedFaq.en
    },
    {
      slug: "solar-energy-consulting",
      title: "Solar Power Plant Consulting",
      eyebrow: "Solar PV performance, EPC quality and O&M recovery",
      description: "Solar power plant consulting for PV investors, owners and EPC teams — performance ratio analysis, EPC quality review, technical audit and lifecycle asset optimization.",
      keywords: ["solar power plant consulting", "solar energy consulting", "solar plant technical audit", "solar performance ratio analysis", "renewable energy consultancy"],
      outcomes: ["Clear PR and loss diagnosis", "Improved EPC and O&M accountability", "Practical solar recovery action plan"],
      scope: ["Performance ratio analysis", "Inverter and string-level review", "EPC quality evidence assessment", "O&M response and cleaning routine review", "Solar technical due diligence"],
      faqs: sharedFaq.en
    },
    {
      slug: "epc-technical-advisory",
      title: "EPC Technical Advisory",
      eyebrow: "Owner-side EPC risk, quality and delivery control",
      description: "EPC technical advisory for renewable energy projects where owners and investors need independent technical control over design, interfaces, commissioning and handover.",
      keywords: ["EPC technical advisory", "EPC technical consultancy", "owner's engineering", "renewable energy consultancy"],
      outcomes: ["Reduced EPC delivery risk", "Better interface and contractor control", "Stronger commissioning and handover evidence"],
      scope: ["EPC scope and interface review", "Technical risk register", "Contractor deliverable review", "Commissioning readiness challenge", "Owner decision support"],
      faqs: sharedFaq.en
    },
    {
      slug: "technical-due-diligence",
      title: "Technical Due Diligence for Renewable Energy Assets",
      eyebrow: "Investor-grade technical risk review",
      description: "Technical due diligence for hydropower, solar and renewable energy assets covering performance evidence, EPC risk, O&M maturity, grid compliance, CAPEX exposure and acquisition decisions.",
      keywords: ["technical due diligence renewable energy", "power plant technical due diligence", "solar technical due diligence", "hydropower technical due diligence", "renewable energy investment consulting"],
      outcomes: ["Investment-ready technical risk register", "Clear CAPEX and O&M exposure priorities", "Evidence-based acquisition or refinancing decision support", "Improved lender and investor confidence"],
      scope: [
        "Asset data room and EPC documentation review",
        "Hydropower and solar performance evidence analysis",
        "Commissioning records and handover documentation review",
        "O&M maturity, outage history and availability assessment",
        "Grid compliance, protection and reactive power evidence review",
        "CAPEX risk, warranty exposure and corrective action prioritization"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What is included in renewable energy technical due diligence?",
          answer: "The review typically covers asset condition, generation history, EPC documentation, commissioning evidence, O&M records, grid compliance, technical risks, CAPEX exposure and practical recommendations for investors or owners."
        },
        {
          question: "Is this different from a normal technical audit?",
          answer: "Yes. A technical audit focuses on asset condition and performance. Technical due diligence connects those findings to an investment, acquisition, refinancing or portfolio decision."
        },
        {
          question: "Can the report support acquisition negotiations?",
          answer: "Yes. Findings can be structured as risk register items with evidence, severity, likely cost impact, priority and negotiation relevance."
        }
      ]
    },
    {
      slug: "hpp-performance-analysis",
      title: "HPP Performance Analysis",
      eyebrow: "Hydropower generation loss and efficiency review",
      description: "HPP performance analysis for hydropower owners who need to understand generation losses, turbine efficiency, governor behavior, AGC response, availability, alarms, trips and O&M improvement priorities.",
      keywords: ["HPP performance analysis", "hydropower performance analysis", "turbine efficiency loss analysis", "hydropower generation loss analysis", "AGC compliance hydropower"],
      outcomes: ["Clear hydropower loss diagnosis", "Prioritized turbine, governor and O&M actions", "Improved availability and generation recovery roadmap", "Better evidence for operational and CAPEX decisions"],
      scope: [
        "Generation, water availability and availability trend review",
        "Turbine-generator operating data and efficiency loss analysis",
        "Governor response, AGC behavior and dispatch performance review",
        "SCADA alarm, trip and outage history assessment",
        "Hydraulic constraints, sedimentation signals and auxiliary system observations",
        "O&M routine, corrective action and performance recovery roadmap"
      ],
      faqs: [
        ...sharedFaq.en,
        {
          question: "What data is needed for HPP performance analysis?",
          answer: "Useful inputs include monthly generation, water availability, unit availability, SCADA trends, alarm logs, trip history, outage records, turbine test data, governor settings and O&M reports."
        },
        {
          question: "Can the analysis identify turbine efficiency loss?",
          answer: "It can identify likely efficiency loss patterns and recommend the next engineering checks, including operating curve review, water-to-wire loss analysis, runner condition observations and targeted performance testing."
        },
        {
          question: "Does the review include AGC and grid behavior?",
          answer: "Yes. Setpoint tracking, ramp behavior, governor response, reactive power behavior and grid interface records are reviewed when data is available."
        }
      ]
    },
    {
      slug: "industrial-energy-cost-optimization",
      title: "Industrial Energy Cost Optimization",
      eyebrow: "Electricity cost analysis and savings advisory",
      description: "Energy cost optimization consultancy for factories and industrial facilities facing high electricity bills, reactive power penalties, demand charge exposure, tariff misalignment or rooftop solar feasibility questions.",
      keywords: ["industrial energy cost optimization", "electricity bill analysis", "reactive power penalty analysis", "industrial energy consultant", "rooftop solar feasibility"],
      outcomes: [
        "Identified electricity cost savings potential",
        "Elimination or significant reduction of reactive power penalties",
        "Contract demand and tariff optimization",
        "Realistic rooftop solar payback analysis",
        "Energy monitoring and cost tracking system recommendation"
      ],
      scope: [
        "Electricity bill and consumption profile analysis",
        "Reactive power penalty and compensation system review",
        "Contract demand and excess demand charge assessment",
        "Tariff structure and open market eligibility analysis",
        "Rooftop solar feasibility and self-consumption model",
        "Power quality and metering system observation",
        "Energy management system implementation prioritization"
      ],
      faqs: [
        {
          question: "What types of facilities benefit from this service?",
          answer: "Organized industrial zone factories, textile, food, plastics, metal, cold storage, hospitals, hotels and high-consumption commercial buildings are the primary target audience."
        },
        {
          question: "Can I get an analysis by only sending my electricity bill?",
          answer: "Yes. The last 12 months of electricity bills are sufficient for a preliminary analysis. Consumption profiles, reactive power measurements and contract details can be added for a deeper review."
        },
        {
          question: "Is it possible to completely eliminate reactive power penalties?",
          answer: "If the compensation panel is correctly sized and operating well, reactive penalties can be largely or completely eliminated. The review assesses the existing system and recommends upgrades where needed."
        },
        {
          question: "How long does a rooftop solar feasibility study take?",
          answer: "Based on basic consumption data, roof area and regional solar data, a preliminary feasibility can usually be prepared within 5-7 working days."
        },
        {
          question: "How is this service different from renewable energy consultancy?",
          answer: "This service targets industrial facilities with high electricity costs, not power plant owners. The goal is to optimize existing consumption and reduce energy costs rather than advise on plant construction or acquisition."
        }
      ]
    }
  ],
  tr: [
    {
      slug: "epc-teknik-danismanlik",
      title: "EPC Teknik Danışmanlık",
      eyebrow: "Risk, kalite ve uygulanabilirlik",
      description: "Yenilenebilir enerji projeleri için tasarım incelemesinden saha uygulaması ve teslim sürecine kadar bağımsız EPC teknik danışmanlık.",
      keywords: ["EPC teknik danışmanlık", "enerji santrali danışmanlığı", "işveren mühendisliği"],
      outcomes: ["Net EPC risk listesi", "Güçlü teknik şartnameler", "Daha hazırlıklı teslim süreci"],
      scope: ["Tasarım ve şartname inceleme", "EPC ihale teknik desteği", "Saha kalite gözlemleri", "Arayüz risk değerlendirmesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "hes-optimizasyonu",
      title: "HES Optimizasyonu",
      eyebrow: "Verimlilik ve emre amadelik",
      description: "Üretim, güvenilirlik, su-güç performansı ve pratik işletme bakım iyileştirmelerine odaklanan HES danışmanlığı.",
      keywords: ["HES danışmanlığı", "HES optimizasyonu", "işletme bakım optimizasyonu"],
      outcomes: ["Önlenebilir kayıpların azaltılması", "Emre amadeliğin iyileştirilmesi", "Öncelikli düzeltici aksiyonlar"],
      scope: ["Türbin ve jeneratör performans inceleme", "Hidrolik kayıp değerlendirmesi", "Operasyon verisi analizi", "Bakım pratiği inceleme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "ges-danismanligi",
      title: "GES Danışmanlığı",
      eyebrow: "Üretim ve güvenilirlik",
      description: "Yatırımcılar, EPC ekipleri ve santral sahipleri için üretim, kalite ve yaşam döngüsü performansını güçlendiren GES danışmanlığı.",
      keywords: ["GES danışmanlığı", "GES performans iyileştirme", "enerji yatırım danışmanlığı"],
      outcomes: ["Geliştirilmiş PR analizi", "Düşük performans riskinin azaltılması", "Uygulanabilir O&M yol haritası"],
      scope: ["Üretim ve kayıp incelemesi", "EPC kalite incelemesi", "İşletme bakım performans değerlendirmesi", "Teknik durum tespiti"],
      faqs: sharedFaq.tr
    },
    {
      slug: "enerji-santrali-devreye-alma",
      title: "Enerji Santrali Devreye Alma",
      eyebrow: "Hazırlık ve kontrollü başlangıç",
      description: "Prosedür, test planlama, eksik iş kontrolü ve performans hazırlığı dahil enerji santrali devreye alma danışmanlığı.",
      keywords: ["santral devreye alma", "devreye alma kontrol listesi", "EPC teknik danışmanlık"],
      outcomes: ["Daha güvenli ilk çalıştırma", "Daha temiz eksik iş kapanışı", "Belgelenmiş test kanıtları"],
      scope: ["Devreye alma hazırlık incelemesi", "Test prosedürü inceleme", "Performans testi desteği", "Teslim dokümantasyonu inceleme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "isveren-muhendisligi",
      title: "İşveren Mühendisliği | HES ve GES Projelerinde Bağımsız Teknik Kontrol",
      eyebrow: "İşveren tarafı teknik kontrol",
      description: "HES, GES ve yenilenebilir enerji projelerinde işveren mühendisliği: bağımsız EPC incelemesi, saha gözlemleri, yüklenici doküman kontrolü ve karar desteği. Proje değerini koruyun.",
      keywords: ["işveren mühendisliği", "EPC teknik danışmanlık", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek işveren görünürlüğü", "Azalan teknik belirsizlik", "Güçlü yüklenici uyumu"],
      scope: ["Teknik yönetişim", "Yüklenici doküman incelemesi", "Saha ilerleme gözlemleri", "Karar notları"],
      faqs: sharedFaq.tr
    },
    {
      slug: "isletme-bakim-performans-iyilestirme",
      title: "İşletme ve Bakım Performans İyileştirme",
      eyebrow: "Emre amadelik, güvenilirlik, kayıplar",
      description: "Ölçülebilir operasyonel performans iyileştirmesi isteyen mevcut yenilenebilir enerji varlıkları için işletme bakım optimizasyonu.",
      keywords: ["işletme bakım optimizasyonu", "santral performans analizi", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek emre amadelik", "Odaklı bakım planlama", "Tekrarlayan arızalarda azalma"],
      scope: ["Emre amadelik ve duruş analizi", "Bakım planlama incelemesi", "Arıza paterni değerlendirmesi", "KPI yapısı iyileştirme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "sebeke-koruma-sistemi-analizi",
      title: "Şebeke ve Koruma Sistemi Analizi",
      eyebrow: "Güvenilirlik ve uyum",
      description: "Daha güçlü koordinasyon, güvenilirlik ve şebeke arayüz güveni gerektiren santraller için şebeke ve koruma analizi.",
      keywords: ["şebeke koruma analizi", "koruma koordinasyonu", "santral performans analizi"],
      outcomes: ["Açma riskinin azaltılması", "Geliştirilmiş koruma mantığı", "Net şebeke arayüz aksiyonları"],
      scope: ["Koruma ayarı incelemesi", "Tek hat şeması değerlendirme", "Açma olayı analizi", "Şebeke uyum gözlemleri"],
      faqs: sharedFaq.tr
    },
    {
      slug: "mevcut-santraller-icin-teknik-denetim",
      title: "Mevcut Santraller İçin Teknik Denetim",
      eyebrow: "Durum tespiti ve varlık sağlığı",
      description: "Mevcut santraller için varlık durumu, performans riskleri, O&M olgunluğu ve yatırım önceliklerini kapsayan teknik denetim.",
      keywords: ["HES teknik denetim", "santral performans analizi", "teknik durum tespiti"],
      outcomes: ["Öncelikli risk listesi", "Yatırımcı düzeyinde bulgular", "Varlık iyileştirme aksiyon planı"],
      scope: ["Saha incelemesi", "Doküman incelemesi", "Performans verisi inceleme", "Düzeltici aksiyon yol haritası"],
      faqs: sharedFaq.tr
    },
    {
      slug: "yenilenebilir-enerji-yatirim-danismanligi",
      title: "Yenilenebilir Enerji Yatırım Danışmanlığı",
      eyebrow: "Yatırım için teknik netlik",
      description: "Fizibilite, satın alma, geliştirme veya performans toparlama seçeneklerini değerlendiren yatırımcılar için teknik yatırım danışmanlığı.",
      keywords: ["enerji yatırım danışmanlığı", "enerji santrali danışmanlığı", "HES teknik denetim"],
      outcomes: ["Daha doğru yatırım kararları", "Net teknik riskler", "Pratik değer yaratma seçenekleri"],
      scope: ["Teknik durum tespiti", "Fizibilite varsayım incelemesi", "CAPEX/OPEX teknik varsayımları", "Varlık iyileştirme stratejisi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "hes-danismanligi",
      title: "HES Danışmanlığı",
      eyebrow: "HES performansı, devreye alma ve varlık güvenilirliği",
      description: "HES sahipleri, EPC ekipleri ve yatırımcılar için HES devreye alma, işletme, teknik denetim ve performans toparlama odaklı uzman hidroelektrik danışmanlığı.",
      keywords: ["HES danışmanlığı", "HES devreye alma", "HES teknik denetim", "enerji santrali danışmanlığı"],
      outcomes: ["Daha yüksek HES emre amadeliği", "Net devreye alma ve O&M risk öncelikleri", "Kanıta dayalı HES iyileştirme planı"],
      scope: ["HES saha incelemesi", "Türbin-jeneratör işletme incelemesi", "HES devreye alma kanıt değerlendirmesi", "Su-güç kayıp analizi", "O&M ve duruş geçmişi incelemesi"],
      faqs: sharedFaq.tr
    },
    {
      slug: "enerji-denetimi",
      title: "Enerji Denetimi Hizmetleri",
      eyebrow: "Santral performansı, kayıplar ve teknik durum tespiti",
      description: "HES, GES ve yenilenebilir enerji santralleri için teknik risk, işletme kayıpları, varlık durumu ve uygulanabilir düzeltici aksiyon odaklı enerji denetimi hizmetleri.",
      keywords: ["enerji denetimi", "santral teknik denetim", "enerji santrali danışmanlığı", "santral performans analizi"],
      outcomes: ["Öncelikli teknik denetim raporu", "Uygulanabilir kayıp azaltma yol haritası", "İşveren için yatırım ve risk sıralaması"],
      scope: ["Santral saha denetimi", "Performans ve kayıp incelemesi", "Varlık durumu gözlemleri", "Şebeke ve koruma kanıt incelemesi", "Düzeltici aksiyon önceliklendirme"],
      faqs: sharedFaq.tr
    },
    {
      slug: "gunes-enerjisi-danismanligi",
      title: "Güneş Enerjisi Danışmanlığı",
      eyebrow: "GES performansı, EPC kalite ve O&M toparlama",
      description: "Performans oranı analizi, teknik denetim ve yaşam döngüsü varlık optimizasyonu ihtiyacı olan GES yatırımcıları, sahipleri ve EPC ekipleri için güneş enerjisi danışmanlığı.",
      keywords: ["güneş enerjisi danışmanlığı", "GES teknik denetim", "GES performans oranı analizi", "yenilenebilir enerji danışmanlığı"],
      outcomes: ["Net PR ve kayıp teşhisi", "Geliştirilmiş EPC ve O&M sorumluluk görünürlüğü", "Uygulanabilir GES toparlama aksiyon planı"],
      scope: ["Performans oranı analizi", "İnverter ve string düzeyi inceleme", "EPC kalite kanıt değerlendirmesi", "O&M müdahale ve temizlik rutini incelemesi", "GES teknik durum tespiti"],
      faqs: sharedFaq.tr
    },
    {
      slug: "epc-teknik-danismanlik-hizmeti",
      title: "EPC Teknik Danışmanlık Hizmeti",
      eyebrow: "İşveren tarafı EPC risk, kalite ve teslim kontrolü",
      description: "HES, GES ve yenilenebilir enerji projeleri için EPC teknik danışmanlık: tasarım inceleme, arayüz kontrolü, yüklenici denetimi, devreye alma hazırlığı ve teslim desteği.",
      keywords: ["EPC teknik danışmanlık", "işveren mühendisliği", "yenilenebilir enerji danışmanlığı", "santral devreye alma"],
      outcomes: ["Azaltılmış EPC teslim riski", "Daha güçlü arayüz ve yüklenici kontrolü", "Daha sağlam devreye alma ve teslim kanıtları"],
      scope: ["EPC kapsam ve arayüz incelemesi", "Teknik risk listesi", "Yüklenici doküman incelemesi", "Devreye alma hazırlık sorgulaması", "İşveren karar desteği"],
      faqs: sharedFaq.tr
    },
    {
      slug: "teknik-durum-tespiti",
      title: "Yenilenebilir Enerji Teknik Durum Tespiti",
      eyebrow: "Yatirimci duzeyinde teknik risk incelemesi",
      description: "HES, GES ve yenilenebilir enerji varliklari icin performans kaniti, EPC riski, O&M olgunlugu, sebeke uyumu, CAPEX etkisi ve satin alma kararlarini kapsayan teknik durum tespiti.",
      keywords: ["teknik durum tespiti", "yenilenebilir enerji due diligence", "HES teknik durum tespiti", "GES teknik durum tespiti", "enerji yatirim danismanligi"],
      outcomes: ["Yatirima hazir teknik risk listesi", "Net CAPEX ve O&M risk oncelikleri", "Satin alma veya refinansman karari icin kanita dayali destek", "Yatirimci ve finans kurumu guveninin artmasi"],
      scope: [
        "Varlik data room ve EPC dokumantasyon incelemesi",
        "HES ve GES performans kaniti analizi",
        "Devreye alma kayitlari ve teslim dokumantasyonu incelemesi",
        "O&M olgunlugu, durus gecmisi ve emre amadelik degerlendirmesi",
        "Sebeke uyumu, koruma ve reaktif guc kaniti incelemesi",
        "CAPEX riski, garanti etkisi ve duzeltici aksiyon onceliklendirme"
      ],
      faqs: [
        ...sharedFaq.tr,
        {
          question: "Yenilenebilir enerji teknik durum tespiti neleri kapsar?",
          answer: "Inceleme varlik durumu, uretim gecmisi, EPC dokumantasyonu, devreye alma kanitlari, O&M kayitlari, sebeke uyumu, teknik riskler, CAPEX etkisi ve yatirimci icin pratik onerileri kapsar."
        },
        {
          question: "Bu calisma normal teknik denetimden farkli midir?",
          answer: "Evet. Teknik denetim varlik durumu ve performansa odaklanir. Teknik durum tespiti bu bulgulari satin alma, yatirim, refinansman veya portfoy karariyla iliskilendirir."
        },
        {
          question: "Rapor satin alma gorusmelerini destekler mi?",
          answer: "Evet. Bulgular kanit, siddet, muhtemel maliyet etkisi, oncelik ve pazarlik etkisi ile risk listesi olarak yapilandirilabilir."
        }
      ]
    },
    {
      slug: "hes-performans-analizi",
      title: "HES Performans Analizi",
      eyebrow: "Hidroelektrik uretim kaybi ve verimlilik incelemesi",
      description: "Uretim kaybi, turbin verimi, governor davranisi, AGC tepkisi, emre amadelik, alarmlar, tripler ve O&M iyilestirme onceliklerini anlamak isteyen HES sahipleri icin performans analizi.",
      keywords: ["HES performans analizi", "hidroelektrik santral performans analizi", "turbin verim kaybi analizi", "HES uretim kaybi analizi", "AGC uyumu HES"],
      outcomes: ["Net HES kayip teshisi", "Oncelikli turbin, governor ve O&M aksiyonlari", "Emre amadelik ve uretim toparlama yol haritasi", "Operasyonel ve CAPEX kararlari icin daha guclu kanit"],
      scope: [
        "Uretim, su geliri ve emre amadelik trend incelemesi",
        "Turbin-jenerator isletme verisi ve verim kaybi analizi",
        "Governor tepkisi, AGC davranisi ve yuk tevzi performansi incelemesi",
        "SCADA alarm, trip ve durus gecmisi degerlendirmesi",
        "Hidrolik kisitlar, sedimentasyon sinyalleri ve yardimci sistem gozlemleri",
        "O&M rutini, duzeltici aksiyon ve performans toparlama yol haritasi"
      ],
      faqs: [
        ...sharedFaq.tr,
        {
          question: "HES performans analizi icin hangi veriler gerekir?",
          answer: "Aylik uretim, su geliri, unit emre amadeligi, SCADA trendleri, alarm kayitlari, trip gecmisi, durus kayitlari, turbin test verisi, governor ayarlari ve O&M raporlari faydalidir."
        },
        {
          question: "Analiz turbin verim kaybini belirleyebilir mi?",
          answer: "Muhtemel verim kaybi paternleri belirlenebilir ve isletme egrisi incelemesi, su-guc kayip analizi, runner durumu gozlemi ve hedefli performans testi gibi sonraki muhendislik kontrolleri onerilebilir."
        },
        {
          question: "AGC ve sebeke davranisi incelenir mi?",
          answer: "Evet. Veri mevcutsa set noktasi takibi, rampa davranisi, governor tepkisi, reaktif guc davranisi ve sebeke arayuz kayitlari incelenir."
        }
      ]
    },
    {
      slug: "endustriyel-enerji-maliyet-optimizasyonu",
      title: "Endüstriyel Enerji Maliyet Optimizasyonu",
      eyebrow: "Elektrik maliyeti analizi ve tasarruf danışmanlığı",
      description: "Yüksek elektrik faturası, reaktif güç cezası, talep fazlası, tarife uyumsuzluğu ve çatı GES fizibilite konularında fabrikalara ve endüstriyel tesislere yönelik enerji maliyet optimizasyonu danışmanlığı.",
      keywords: ["endüstriyel enerji maliyet optimizasyonu", "elektrik faturası analizi", "reaktif ceza analizi", "sanayi enerji danışmanlığı", "çatı GES fizibilite"],
      outcomes: [
        "Elektrik maliyetinde somut tasarruf potansiyelinin tespiti",
        "Reaktif güç cezalarının ortadan kaldırılması",
        "Tarife ve sözleşme gücü optimizasyonu",
        "Çatı GES yatırımı için gerçekçi geri ödeme analizi",
        "Enerji izleme ve maliyet takip sistemi önerisi"
      ],
      scope: [
        "Elektrik faturası ve tüketim profili analizi",
        "Reaktif güç cezası ve kompanzasyon sistemi incelemesi",
        "Sözleşme gücü ve talep fazlası değerlendirmesi",
        "Tarife yapısı ve serbest piyasa uygunluk analizi",
        "Çatı GES fizibilite ve öz tüketim modeli",
        "Güç kalitesi ve ölçüm sistemi gözlemi",
        "Enerji yönetim sistemi kurulum önceliklendirmesi"
      ],
      faqs: [
        {
          question: "Hangi tür tesisler bu hizmetten faydalanabilir?",
          answer: "Organize sanayi bölgesindeki fabrikalar, tekstil, gıda, plastik, metal, soğuk hava deposu, hastane, otel ve yüksek tüketimli ticari binalar bu hizmetin birincil hedef kitlesidir."
        },
        {
          question: "Sadece fatura göndererek analiz yaptırabilir miyim?",
          answer: "Evet. Ön analiz için son 12 aya ait elektrik faturası yeterlidir. Daha detaylı inceleme için tüketim profili, reaktif güç ölçümleri ve sözleşme bilgileri de kullanılabilir."
        },
        {
          question: "Reaktif güç cezasını tamamen ortadan kaldırmak mümkün müdür?",
          answer: "Kompanzasyon paneli uygun kapasitede ve doğru çalışıyorsa reaktif ceza büyük ölçüde veya tamamen ortadan kaldırılabilir. İnceleme mevcut sistemi değerlendirir ve gerekiyorsa güncelleme önerisi sunar."
        },
        {
          question: "Çatı GES için fizibilite ne kadar sürede hazırlanır?",
          answer: "Temel tüketim verisi, çatı alanı bilgisi ve bölge güneş verisine dayanarak genellikle 5-7 iş günü içinde ön fizibilite hazırlanabilir."
        },
        {
          question: "Bu hizmet yenilenebilir enerji danışmanlığından farklı mıdır?",
          answer: "Evet. Bu hizmet HES veya GES santrali sahibi değil, yüksek elektrik faturasıyla karşılaşan sanayi tesislerine yöneliktir. Amaç mevcut tüketimi optimize etmek ve enerji maliyetini düşürmektir."
        }
      ]
    }
  ]
};

export function getServices(locale: Locale) {
  return services[locale];
}

export function getService(locale: Locale, slug: string) {
  return services[locale].find((service) => service.slug === slug);
}
