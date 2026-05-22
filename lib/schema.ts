import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import type { BlogPost, Project, Service } from "@/content/types";
import { linkedinUrl } from "@/lib/social";

const baseUrl = "https://oztoprakenerji.com";

export function organizationSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oztoprak Energy Consultancy",
    url: baseUrl,
    email: dict.contact.email,
    telephone: dict.contact.phone,
    logo: `${baseUrl}/oztoprak-energy-logo.png`,
    sameAs: [linkedinUrl],
    description: dict.seo.siteDescription
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Oztoprak Energy Consultancy",
    url: `${baseUrl}/${locale}`,
    inLanguage: locale
  };
}

export function localBusinessSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Oztoprak Energy Consultancy",
    url: baseUrl,
    email: dict.contact.email,
    telephone: dict.contact.phone,
    sameAs: [linkedinUrl],
    areaServed: ["Turkey", "Europe", "Middle East", "International renewable energy markets"],
    priceRange: "$$$",
    description: dict.seo.siteDescription
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  };
}

export function serviceSchema(locale: Locale, service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Oztoprak Energy Consultancy"
    },
    areaServed: "International",
    inLanguage: locale,
    description: service.description
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(locale: Locale, post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Oztoprak Energy Consultancy"
    },
    publisher: {
      "@type": "Organization",
      name: "Oztoprak Energy Consultancy"
    },
    datePublished: post.date,
    inLanguage: locale
  };
}

export function projectSchema(locale: Locale, project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    about: project.type,
    locationCreated: project.location,
    inLanguage: locale
  };
}
