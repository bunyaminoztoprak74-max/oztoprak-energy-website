import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { ServicesIndexContent } from "@/components/services-index-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "tr";
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/hizmetler",
    alternatePath: "/services",
    title: `${dict.nav.services} | ${dict.brand.legal}`,
    description: dict.seo.siteDescription
  });
}

export default async function HizmetlerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "tr";

  if (locale === "en") {
    permanentRedirect("/en/services");
  }

  return <ServicesIndexContent locale={locale} />;
}
