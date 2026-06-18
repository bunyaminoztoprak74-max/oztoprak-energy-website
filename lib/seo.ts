import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

const baseUrl = "https://www.oztoprakenerji.com";
const defaultOgImage = "/oztoprak-energy-logo-navbar.png";
const targetKeywords = [
  "hydropower consulting",
  "solar energy consulting",
  "power plant operations",
  "renewable energy consultancy",
  "HPP commissioning",
  "energy audit services",
  "EPC technical consultancy",
  "power plant technical audit",
  "owner's engineering",
  "grid compliance analysis"
];

type SeoArgs = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternatePath?: string;
  hasTranslation?: boolean;
  type?: "website" | "article";
  keywords?: string[];
};

export function buildMetadata({ locale, title, description, path, alternatePath, hasTranslation = true, type = "website", keywords = [] }: SeoArgs): Metadata {
  const localizedPath = `/${locale}${path === "/" ? "" : path}`;
  const translatedPath = alternatePath ?? path;
  const alternateLocalizedPath = locale === "en" ? `/tr${translatedPath === "/" ? "" : translatedPath}` : `/en${translatedPath === "/" ? "" : translatedPath}`;
  const absoluteUrl = `${baseUrl}${localizedPath}`;
  const combinedKeywords = [...new Set([...targetKeywords, ...keywords])];

  return {
    title,
    description,
    keywords: combinedKeywords,
    authors: [{ name: "Oztoprak Energy Consultancy" }],
    creator: "Oztoprak Energy Consultancy",
    publisher: "Oztoprak Energy Consultancy",
    category: "Renewable energy engineering consultancy",
    alternates: {
      canonical: localizedPath,
      ...(hasTranslation
        ? {
            languages: {
              en: locale === "en" ? localizedPath : alternateLocalizedPath,
              tr: locale === "tr" ? localizedPath : alternateLocalizedPath,
              "x-default": "/en"
            }
          }
        : {})
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: "Oztoprak Energy Consultancy",
      type,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Oztoprak Energy Consultancy Logo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage]
    }
  };
}
