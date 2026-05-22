import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

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

export { default } from "../contact/page";
