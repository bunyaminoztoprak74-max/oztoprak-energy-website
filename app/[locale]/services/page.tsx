import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { ServicesIndexContent } from "@/components/services-index-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/services",
    alternatePath: locale === "en" ? "/hizmetler" : "/services",
    title: `${dict.nav.services} | ${dict.brand.legal}`,
    description: dict.seo.siteDescription
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";

  if (locale === "tr") {
    permanentRedirect("/tr/hizmetler");
  }

  return <ServicesIndexContent locale={locale} />;
}
