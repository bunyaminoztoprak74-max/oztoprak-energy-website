import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import type { BlogPost, Project, Service } from "@/content/types";
import { linkedinUrl } from "@/lib/social";

const baseUrl = "https://www.oztoprakenerji.com";
const brandId = `${baseUrl}/#organization`;
const localBusinessId = `${baseUrl}/#localbusiness`;
const targetKeywords = [
  "hydropower consulting",
  "solar energy consulting",
  "power plant operations",
  "renewable energy consultancy",
  "HPP commissioning",
  "energy audit services",
  "EPC technical consultancy",
  "owner's engineering",
  "grid compliance analysis"
];

export function organizationSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": brandId,
    name: "Oztoprak Energy Consultancy",
    alternateName: ["Oztoprak Energy Consulting", "Öztoprak Enerji Danışmanlık"],
    url: baseUrl,
    email: dict.contact.email,
    telephone: dict.contact.phone,
    logo: `${baseUrl}/oztoprak-energy-logo.png`,
    image: `${baseUrl}/oztoprak-energy-logo.png`,
    sameAs: [linkedinUrl],
    description: dict.seo.siteDescription,
    foundingDate: "2023",
    knowsAbout: targetKeywords,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "technical consultation",
        email: dict.contact.email,
        telephone: dict.contact.phone,
        availableLanguage: ["English", "Turkish"],
        areaServed: ["TR", "Europe", "Middle East", "International"]
      }
    ]
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Oztoprak Energy Consultancy",
    url: `${baseUrl}/${locale}`,
    publisher: { "@id": brandId },
    inLanguage: locale,
    keywords: targetKeywords.join(", ")
  };
}

export function localBusinessSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": localBusinessId,
    name: "Oztoprak Energy Consultancy",
    url: baseUrl,
    email: dict.contact.email,
    telephone: dict.contact.phone,
    image: `${baseUrl}/oztoprak-energy-logo.png`,
    logo: `${baseUrl}/oztoprak-energy-logo.png`,
    parentOrganization: { "@id": brandId },
    sameAs: [linkedinUrl],
    areaServed: ["Turkey", "Europe", "Middle East", "International renewable energy markets"],
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR"
    },
    description: dict.seo.siteDescription,
    knowsAbout: targetKeywords,
    makesOffer: targetKeywords.map((keyword) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: keyword
      }
    }))
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
    "@id": `${baseUrl}/${locale}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      "@id": brandId,
      name: "Oztoprak Energy Consultancy"
    },
    areaServed: ["Turkey", "Europe", "Middle East", "International"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "EPC companies, renewable energy investors, power plant owners and industrial facilities"
    },
    inLanguage: locale,
    description: service.description,
    keywords: service.keywords.join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} consulting scope`,
      itemListElement: service.scope.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item
        }
      }))
    }
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

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person-bunyamin-oztoprak`,
    name: "Bünyamin Öztoprak",
    jobTitle: "Renewable Energy Engineering Consultant",
    url: `${baseUrl}/en/about`,
    sameAs: [linkedinUrl],
    worksFor: {
      "@type": "Organization",
      "@id": baseUrl + "/#organization",
      name: "Oztoprak Energy Consultancy"
    },
    knowsAbout: [
      "Hydropower plant operations",
      "Solar PV plant engineering",
      "EPC contract management",
      "Power plant commissioning",
      "Grid protection systems",
      "Renewable energy due diligence",
      "Owner's engineering",
      "TEİAŞ grid connection requirements",
      "IEC 61724 performance monitoring",
      "IEC 62446 PV system commissioning",
      "Reactive power compensation",
      "Power quality analysis"
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        recognizedBy: {
          "@type": "Organization",
          name: "Turkish Chamber of Electrical Engineers (EMO)"
        }
      }
    ],
    description:
      "Independent renewable energy engineering consultant with 28+ years of experience in hydropower, solar, EPC advisory, commissioning and technical due diligence in Turkey and internationally."
  };
}

export function articleSchema(locale: Locale, post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person-bunyamin-oztoprak`,
      name: "Bünyamin Öztoprak"
    },
    publisher: {
      "@type": "Organization",
      "@id": brandId,
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
