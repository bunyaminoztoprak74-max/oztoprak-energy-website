import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/components/contact-page-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "tr";
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/iletisim",
    alternatePath: "/contact",
    title: dict.contact.title,
    description: dict.contact.description
  });
}

export default async function IletisimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "tr";

  if (locale === "en") {
    permanentRedirect("/en/contact");
  }

  return <ContactPageContent locale={locale} />;
}
