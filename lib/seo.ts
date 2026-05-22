import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

const baseUrl = "https://oztoprakenerji.com";

type SeoArgs = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternatePath?: string;
  type?: "website" | "article";
};

export function buildMetadata({ locale, title, description, path, alternatePath, type = "website" }: SeoArgs): Metadata {
  const localizedPath = `/${locale}${path === "/" ? "" : path}`;
  const translatedPath = alternatePath ?? path;
  const alternateLocalizedPath = locale === "en" ? `/tr${translatedPath === "/" ? "" : translatedPath}` : `/en${translatedPath === "/" ? "" : translatedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        [locale]: localizedPath,
        [locale === "en" ? "tr" : "en"]: alternateLocalizedPath
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${localizedPath}`,
      type,
      locale: locale === "tr" ? "tr_TR" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
