import Link from "next/link";
import { Linkedin } from "lucide-react";
import { alternateLocale, type Locale } from "@/lib/i18n";
import type { getDictionary } from "@/content/dictionaries";
import { ButtonLink } from "@/components/button-link";
import { linkedinUrl } from "@/lib/social";
import { BrandLogo } from "@/components/brand-logo";

type Dict = ReturnType<typeof getDictionary>;

export function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const nav = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: locale === "tr" ? "/tr/hizmetler" : "/en/services", label: dict.nav.services },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: locale === "tr" ? "/tr/iletisim" : "/en/contact", label: dict.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(7,17,31,0.94)] shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-2.5 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex min-w-0 items-center transition hover:opacity-90"
          aria-label={dict.brand.legal}
        >
          <BrandLogo locale={locale} />
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/78 transition hover:text-energy-500">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white transition hover:border-energy-500 hover:text-energy-500 lg:inline-flex"
            aria-label="Oztoprak Energy Consultancy LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Link
            href={`/${alternateLocale(locale)}`}
            className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-energy-500 hover:text-energy-500"
            aria-label="Switch language"
          >
            {locale === "en" ? "TR" : "EN"}
          </Link>
          <div className="hidden md:block">
            <ButtonLink href={locale === "tr" ? "/tr/iletisim" : "/en/contact"}>{dict.nav.consultation}</ButtonLink>
          </div>
        </div>
      </div>
      <nav className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 text-sm font-semibold text-white/82">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
