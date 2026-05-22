import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/types";

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      slug: "hydropower-portfolio-optimization",
      title: "Hydropower Portfolio Optimization",
      category: "Hydropower projects",
      capacity: "118 MW",
      location: "Turkey",
      type: "Hydropower",
      role: "Technical consultant",
      summary: "Operational review and performance improvement roadmap for a multi-unit hydropower portfolio.",
      scope: ["Generation loss analysis", "Maintenance routine review", "Turbine-generator reliability observations", "Owner reporting"],
      commissioning: "Reviewed historical commissioning evidence and identified documentation gaps affecting long-term reliability tracking.",
      om: "Analyzed outage patterns, availability drivers and maintenance planning discipline.",
      results: ["Prioritized O&M actions", "Improved visibility on generation losses", "Clear investment ranking for corrective works"]
    },
    {
      slug: "solar-plant-performance-recovery",
      title: "Solar Plant Performance Recovery",
      category: "Solar power projects",
      capacity: "46 MW",
      location: "Central Anatolia",
      type: "Solar PV",
      role: "Performance advisor",
      summary: "Technical review of underperforming solar assets with EPC quality and O&M action planning.",
      scope: ["PR review", "Inverter and string-level observations", "O&M procedure review", "Corrective action roadmap"],
      commissioning: "Assessed test records and handover completeness to separate EPC defects from operational degradation.",
      om: "Reviewed cleaning, inspection and response routines against production losses.",
      results: ["Underperformance causes grouped by impact", "O&M improvement plan", "Owner-ready reporting package"]
    },
    {
      slug: "commissioning-readiness-program",
      title: "Power Plant Commissioning Readiness Program",
      category: "Commissioning experience",
      capacity: "72 MW",
      location: "Turkey",
      type: "Renewable power plant",
      role: "Commissioning consultant",
      summary: "Commissioning readiness support for a renewable energy asset approaching first energization and performance testing.",
      scope: ["Commissioning checklist", "Test procedure challenge review", "Punch-list structure", "Handover documentation"],
      commissioning: "Built a staged readiness view covering mechanical completion, electrical energization, functional tests and performance tests.",
      om: "Connected commissioning evidence to future operating procedures and maintenance baselines.",
      results: ["Reduced startup uncertainty", "Clear test ownership", "Improved handover quality"]
    },
    {
      slug: "existing-plant-technical-audit",
      title: "Existing Power Plant Technical Audit",
      category: "Technical audit experience",
      capacity: "38 MW",
      location: "Turkey",
      type: "Hydropower and balance of plant",
      role: "Independent technical auditor",
      summary: "Technical audit for an operating power plant supporting asset health, investment planning and risk prioritization.",
      scope: ["Site inspection", "Document and drawing review", "Protection observations", "O&M maturity review"],
      commissioning: "Compared commissioning records with present-day operating evidence and recurring events.",
      om: "Reviewed spare parts, maintenance planning, fault history and availability tracking.",
      results: ["Asset health risk register", "CAPEX prioritization input", "Board-level technical summary"]
    }
  ],
  tr: [
    {
      slug: "hes-portfoy-optimizasyonu",
      title: "HES Portföy Optimizasyonu",
      category: "HES projeleri",
      capacity: "118 MW",
      location: "Türkiye",
      type: "Hidroelektrik",
      role: "Teknik danışman",
      summary: "Çok üniteli HES portföyü için operasyonel inceleme ve performans iyileştirme yol haritası.",
      scope: ["Üretim kaybı analizi", "Bakım rutinleri incelemesi", "Türbin-jeneratör güvenilirlik gözlemleri", "İşveren raporlaması"],
      commissioning: "Geçmiş devreye alma kanıtları incelendi ve uzun vadeli güvenilirlik takibini etkileyen dokümantasyon boşlukları belirlendi.",
      om: "Duruş paternleri, emre amadelik sürücüleri ve bakım planlama disiplini analiz edildi.",
      results: ["Öncelikli O&M aksiyonları", "Üretim kayıplarında daha net görünürlük", "Düzeltici işler için yatırım sıralaması"]
    },
    {
      slug: "ges-performans-toparlama",
      title: "GES Performans Toparlama",
      category: "GES projeleri",
      capacity: "46 MW",
      location: "İç Anadolu",
      type: "Güneş PV",
      role: "Performans danışmanı",
      summary: "Düşük performans gösteren GES varlıkları için EPC kalite ve O&M aksiyon planlaması odaklı teknik inceleme.",
      scope: ["PR incelemesi", "İnverter ve string düzeyi gözlemler", "O&M prosedür incelemesi", "Düzeltici aksiyon yol haritası"],
      commissioning: "EPC kusurlarını operasyonel bozulmadan ayırmak için test kayıtları ve teslim eksiksizliği değerlendirildi.",
      om: "Temizlik, kontrol ve müdahale rutinleri üretim kayıpları ile karşılaştırıldı.",
      results: ["Düşük performans nedenleri etkiye göre gruplandı", "O&M iyileştirme planı", "İşveren için raporlama paketi"]
    },
    {
      slug: "devreye-alma-hazirlik-programi",
      title: "Enerji Santrali Devreye Alma Hazırlık Programı",
      category: "Devreye alma deneyimi",
      capacity: "72 MW",
      location: "Türkiye",
      type: "Yenilenebilir enerji santrali",
      role: "Devreye alma danışmanı",
      summary: "İlk enerjilendirme ve performans testlerine yaklaşan yenilenebilir enerji varlığı için devreye alma hazırlık desteği.",
      scope: ["Devreye alma kontrol listesi", "Test prosedürü teknik inceleme", "Eksik iş yapısı", "Teslim dokümantasyonu"],
      commissioning: "Mekanik tamamlama, elektrik enerjilendirme, fonksiyonel testler ve performans testlerini kapsayan aşamalı hazırlık görünümü oluşturuldu.",
      om: "Devreye alma kanıtları gelecekteki işletme prosedürleri ve bakım bazları ile ilişkilendirildi.",
      results: ["Başlangıç belirsizliği azaltıldı", "Test sorumlulukları netleşti", "Teslim kalitesi iyileştirildi"]
    },
    {
      slug: "mevcut-santral-teknik-denetim",
      title: "Mevcut Enerji Santrali Teknik Denetimi",
      category: "Teknik denetim deneyimi",
      capacity: "38 MW",
      location: "Türkiye",
      type: "HES ve yardımcı sistemler",
      role: "Bağımsız teknik denetçi",
      summary: "Varlık sağlığı, yatırım planlaması ve risk önceliklendirmesi için çalışan santralde teknik denetim.",
      scope: ["Saha incelemesi", "Doküman ve çizim incelemesi", "Koruma gözlemleri", "O&M olgunluk incelemesi"],
      commissioning: "Devreye alma kayıtları mevcut işletme kanıtları ve tekrarlayan olaylarla karşılaştırıldı.",
      om: "Yedek parça, bakım planlama, arıza geçmişi ve emre amadelik takibi incelendi.",
      results: ["Varlık sağlığı risk listesi", "CAPEX önceliklendirme girdisi", "Yönetim düzeyi teknik özet"]
    }
  ]
};

export function getProjects(locale: Locale) {
  return projects[locale];
}

export function getProject(locale: Locale, slug: string) {
  return projects[locale].find((project) => project.slug === slug);
}
