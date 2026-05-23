import type { Locale } from "@/lib/i18n";

export function servicePath(locale: Locale, slug: string) {
  return `/${locale}/services/${slug}`;
}

export function servicesIndexPath(locale: Locale) {
  return locale === "tr" ? "/tr/hizmetler" : "/en/services";
}

export function contactPath(locale: Locale) {
  return locale === "tr" ? "/tr/iletisim" : "/en/contact";
}

export function projectPath(locale: Locale, slug: string) {
  return `/${locale}/projects/${slug}`;
}

export function blogPath(locale: Locale, slug: string) {
  return `/${locale}/blog/${slug}`;
}

export function categoryPath(locale: Locale, slug: string) {
  return `/${locale}/blog/category/${slug}`;
}
