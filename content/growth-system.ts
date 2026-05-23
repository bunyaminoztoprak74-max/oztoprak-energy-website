import type { Locale } from "@/lib/i18n";

export type GrowthContentTemplate = {
  key: string;
  routePattern: string;
  purpose: string;
  requiredFields: string[];
  internalLinkTargets: string[];
  schemaTypes: string[];
};

export const topicalAuthorityClusters = {
  en: [
    {
      topic: "hydropower consulting",
      services: ["hydropower-consulting", "hydropower-plant-optimization", "power-plant-commissioning"],
      articleIdeas: ["Hydropower Plant Commissioning Procedures", "Common HPP Operational Problems", "Turbine Efficiency Loss Analysis"],
      landingIntents: ["Turkey", "Ankara", "hydropower operators", "HPP technical audits"]
    },
    {
      topic: "solar consulting",
      services: ["solar-energy-consulting", "solar-power-plant-consultancy", "energy-audit"],
      articleIdeas: ["Solar Plant Performance Optimization", "Solar PR Loss Diagnosis", "Solar Technical Audit Checklist"],
      landingIntents: ["Turkey", "Istanbul", "solar investors", "PV performance recovery"]
    },
    {
      topic: "EPC advisory and owner's engineering",
      services: ["epc-technical-advisory", "epc-technical-consultancy", "owners-engineering"],
      articleIdeas: ["EPC Technical Due Diligence", "Owner-Side EPC Control", "How EPC Delays Affect Revenue"],
      landingIntents: ["EPC contractors", "renewable energy investors", "owner's engineering services"]
    },
    {
      topic: "commissioning and operational readiness",
      services: ["power-plant-commissioning", "grid-protection-system-analysis", "om-performance-improvement"],
      articleIdeas: ["Power Plant Operational Readiness", "AGC and Grid Stability", "Commissioning Evidence Requirements"],
      landingIntents: ["commissioning services", "grid stability", "operational optimization"]
    }
  ],
  tr: [
    {
      topic: "HES danismanligi",
      services: ["hes-danismanligi", "hes-optimizasyonu", "enerji-santrali-devreye-alma"],
      articleIdeas: ["HES Devreye Alma Prosedurleri", "Yaygin HES Isletme Problemleri", "Turbin Verim Kaybi Analizi"],
      landingIntents: ["Turkiye", "Ankara", "HES isletmecileri", "HES teknik denetim"]
    },
    {
      topic: "GES danismanligi",
      services: ["gunes-enerjisi-danismanligi", "ges-danismanligi", "enerji-denetimi"],
      articleIdeas: ["GES Performans Optimizasyonu", "GES PR Kaybi Teshisi", "GES Teknik Denetim Kontrol Listesi"],
      landingIntents: ["Turkiye", "Istanbul", "GES yatirimcilari", "PV performans toparlama"]
    },
    {
      topic: "EPC danismanlik ve isveren muhendisligi",
      services: ["epc-teknik-danismanlik-hizmeti", "epc-teknik-danismanlik", "isveren-muhendisligi"],
      articleIdeas: ["EPC Teknik Due Diligence", "Isveren Tarafi EPC Kontrolu", "EPC Gecikmeleri Geliri Nasil Etkiler"],
      landingIntents: ["EPC yuklenicileri", "yenilenebilir enerji yatirimcilari", "isveren muhendisligi hizmetleri"]
    },
    {
      topic: "devreye alma ve operasyonel hazirlik",
      services: ["enerji-santrali-devreye-alma", "sebeke-koruma-sistemi-analizi", "isletme-bakim-performans-iyilestirme"],
      articleIdeas: ["Enerji Santrali Operasyonel Hazirlik", "AGC ve Sebeke Kararliligi", "Devreye Alma Kanit Gereklilikleri"],
      landingIntents: ["devreye alma hizmetleri", "sebeke kararliligi", "operasyonel optimizasyon"]
    }
  ]
} satisfies Record<Locale, Array<{
  topic: string;
  services: string[];
  articleIdeas: string[];
  landingIntents: string[];
}>>;

export const growthContentTemplates: GrowthContentTemplate[] = [
  {
    key: "service-page",
    routePattern: "/[locale]/services/[slug]",
    purpose: "Deep technical resource and conversion page for a single energy consultancy service.",
    requiredFields: ["title", "description", "scope", "outcomes", "faqs", "technical_sections", "field_problems", "recommended_actions"],
    internalLinkTargets: ["related services", "case studies", "technical articles", "problem pages", "contact page"],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"]
  },
  {
    key: "location-service-page",
    routePattern: "/[locale]/seo/[service]-[location]-[intent]",
    purpose: "Programmatic localized landing page for service, market and intent combinations.",
    requiredFields: ["serviceSlug", "locationSlug", "intent", "intro", "sections", "deliverables", "faqs", "cta"],
    internalLinkTargets: ["service page", "location page", "topic cluster", "blog articles", "contact page"],
    schemaTypes: ["ProfessionalService", "FAQPage", "BreadcrumbList"]
  },
  {
    key: "technical-article",
    routePattern: "/[locale]/blog/[slug]",
    purpose: "Expert long-form article for organic search, E-E-A-T and technical education.",
    requiredFields: ["title", "description", "category", "tags", "readingTime", "toc", "body", "faqs", "related", "serviceLinks"],
    internalLinkTargets: ["services", "topic clusters", "case studies", "category pages", "consultation CTA"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"]
  },
  {
    key: "industry-page",
    routePattern: "/[locale]/topics/[slug]",
    purpose: "Pillar/topic page grouping services, problems, articles and conversion paths by market need.",
    requiredFields: ["title", "description", "clusters", "primaryServices"],
    internalLinkTargets: ["services", "problem pages", "blog categories", "landing pages"],
    schemaTypes: ["WebPage", "BreadcrumbList"]
  },
  {
    key: "process-page",
    routePattern: "/[locale]/pillars/[slug]",
    purpose: "Evergreen process and methodology page for technical authority.",
    requiredFields: ["title", "description", "clusters", "primaryServices", "process_steps"],
    internalLinkTargets: ["service pages", "technical articles", "case studies", "contact page"],
    schemaTypes: ["CreativeWork", "BreadcrumbList"]
  }
];
