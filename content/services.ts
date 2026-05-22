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
      outcomes: ["Better owner visibility", "Reduced technical ambiguity", "Stronger contractor alignment"],
      scope: ["Technical governance", "Contractor deliverable review", "Site progress observations", "Decision memos"],
      faqs: sharedFaq.en
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
      title: "İşveren Mühendisliği",
      eyebrow: "İşveren tarafı teknik kontrol",
      description: "Bağımsız inceleme, saha gözlemleri ve karar desteği ile proje değerini koruyan işveren mühendisliği hizmetleri.",
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
    }
  ]
};

export function getServices(locale: Locale) {
  return services[locale];
}

export function getService(locale: Locale, slug: string) {
  return services[locale].find((service) => service.slug === slug);
}
