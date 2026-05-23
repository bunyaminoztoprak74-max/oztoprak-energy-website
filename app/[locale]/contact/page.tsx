import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { ContactPageContent } from "@/components/contact-page-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/contact",
    alternatePath: locale === "en" ? "/iletisim" : "/contact",
    title: dict.contact.title,
    description: dict.contact.description
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";

  if (locale === "tr") {
    permanentRedirect("/tr/iletisim");
  }

  return <ContactPageContent locale={locale} />;
}
