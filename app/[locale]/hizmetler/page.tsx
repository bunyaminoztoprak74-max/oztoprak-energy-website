import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { ServicesIndexContent } from "@/components/services-index-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "tr";
  return buildMetadata({
    locale,
    path: "/hizmetler",
    alternatePath: "/services",
    title: "Hizmetlerimiz | HES, GES, EPC ve İşveren Mühendisliği Danışmanlığı",
    description: "Öztoprak Enerji'nin hizmet portföyü: HES, GES, EPC, işveren mühendisliği, teknik durum tespiti, santral performansı ve enerji maliyeti optimizasyonu danışmanlığı."
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
