import type { Locale } from "@/lib/i18n";
import type { PillarPage, ProgrammaticSeoPage, SeoEntity, TopicCluster } from "@/content/types";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const baseUrl = "https://oztoprakenerji.com";

export function collectionPageSchema(locale: Locale, path: string, title: string, description: string, items: Array<{ name: string; url: string }>) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: `${baseUrl}/${locale}${path}`,
      inLanguage: locale,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${baseUrl}${item.url}`
        }))
      }
    }
  ];
}

export function problemPageSchema(locale: Locale, problem: SeoEntity) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: problem.label,
      description: problem.description,
      inLanguage: locale,
      about: problem.keywords
    }
  ];
}

export function locationPageSchema(locale: Locale, location: SeoEntity) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "AreaServed",
      name: location.label,
      description: location.description
    }
  ];
}

export function pillarPageSchema(locale: Locale, pillar: PillarPage) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pillar.title,
      description: pillar.description,
      inLanguage: locale,
      about: pillar.primaryServices
    }
  ];
}

export function topicClusterSchema(locale: Locale, cluster: TopicCluster) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: cluster.title,
      description: cluster.description,
      inLanguage: locale,
      about: [...cluster.services, ...cluster.problems, ...cluster.blogCategories]
    }
  ];
}

export function generatedSeoPageSchema(locale: Locale, page: ProgrammaticSeoPage, breadcrumbs: Array<{ name: string; url: string }>) {
  return [
    breadcrumbSchema(breadcrumbs),
    faqSchema(page.faqs),
    {
      "@context": "https://schema.org",
      "@type": ["WebPage", "ProfessionalService"],
      name: page.title,
      description: page.description,
      inLanguage: locale,
      keywords: page.keywords.join(", "),
      areaServed: page.locationSlug,
      serviceType: page.serviceSlug
    }
  ];
}
