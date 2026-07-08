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
    title: `HES, GES ve EPC Teknik Danışmanlık Hizmetleri | Öztoprak Enerji`,
    description: "Santral sahipleri ve EPC yüklenicileri için HES teknik denetimi, GES danışmanlığı, devreye alma, işveren mühendisliği ve teknik denetim. 28 yıl saha deneyimi — ücretsiz ilk değerlendirme talep edin."
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
