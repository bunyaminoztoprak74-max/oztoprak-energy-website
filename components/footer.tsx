import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { getDictionary } from "@/content/dictionaries";
import { getServices } from "@/content/services";
import { linkedinUrl } from "@/lib/social";
import { BrandLogo } from "@/components/brand-logo";

type Dict = ReturnType<typeof getDictionary>;

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const priorityServiceSlugs =
    locale === "tr"
      ? [
          "hes-danismanligi",
          "ges-danismanligi",
          "teknik-durum-tespiti",
          "hes-performans-analizi",
          "epc-teknik-danismanlik-hizmeti",
          "mevcut-santraller-icin-teknik-denetim",
          "enerji-santrali-devreye-alma",
          "yenilenebilir-enerji-yatirim-danismanligi",
          "endustriyel-enerji-maliyet-optimizasyonu"
        ]
      : [
          "hydropower-consulting",
          "solar-energy-consulting",
          "technical-due-diligence",
          "hpp-performance-analysis",
          "epc-technical-advisory",
          "technical-audits-existing-power-plants",
          "power-plant-commissioning",
          "renewable-energy-investment-advisory",
          "industrial-energy-cost-optimization"
        ];
  const services = priorityServiceSlugs
    .map((slug) => getServices(locale).find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const servicesHref = locale === "tr" ? "/tr/hizmetler" : "/en/services";
  const contactHref = locale === "tr" ? "/tr/iletisim" : "/en/contact";

  return (
    <footer className="border-t border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(47,183,255,0.14),transparent_32rem),linear-gradient(180deg,#07111f,#040a12)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.75fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex" aria-label={dict.brand.legal}>
              <BrandLogo locale={locale} size="footer" />
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-steel">{dict.seo.siteDescription}</p>
            <div className="mt-6 grid gap-3 text-sm">
              <a href={`mailto:${dict.contact.email}`} className="inline-flex items-center gap-3 text-white/88 hover:text-energy-500">
                <Mail className="h-4 w-4 text-energy-500" />
                {dict.contact.email}
              </a>
              <a href={`tel:${dict.contact.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-3 text-white/88 hover:text-energy-500">
                <Phone className="h-4 w-4 text-energy-500" />
                {dict.contact.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{dict.nav.services}</p>
            <div className="mt-5 grid gap-2.5">
              <Link href={servicesHref} className="text-sm text-steel hover:text-energy-500">{dict.nav.services}</Link>
              {services.map((service) => (
                <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="text-sm text-steel hover:text-energy-500">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{locale === "en" ? "Company" : "Kurumsal"}</p>
            <div className="mt-5 grid gap-2.5">
              <Link href={`/${locale}/about`} className="text-sm text-steel hover:text-energy-500">{dict.nav.about}</Link>
              <Link href={`/${locale}/projects`} className="text-sm text-steel hover:text-energy-500">{dict.nav.projects}</Link>
              <Link href={`/${locale}/blog`} className="text-sm text-steel hover:text-energy-500">{dict.nav.blog}</Link>
              <Link href={`/${locale}/privacy-policy`} className="text-sm text-steel hover:text-energy-500">{dict.footer.privacy}</Link>
              <Link href={`/${locale}/terms`} className="text-sm text-steel hover:text-energy-500">{dict.footer.terms}</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{dict.nav.contact}</p>
            <div className="mt-5 grid gap-3">
              <Link href={contactHref} className="rounded-md bg-energy-500 px-4 py-3 text-center text-sm font-bold text-navy-950 shadow-glow hover:bg-white">
                {dict.nav.consultation}
              </Link>
              <Link
                href={locale === "en" ? "/en/industrial-bill-review" : "/tr/industrial-bill-review"}
                className="rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500"
              >
                {locale === "en" ? "Free Bill Review" : "Ücretsiz Fatura İncelemesi"}
              </Link>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="flex flex-wrap gap-2 pt-2 text-sm">
                <Link href="/en" className="rounded-md border border-white/10 px-3 py-2 text-steel hover:border-energy-500 hover:text-energy-500">
                  English
                </Link>
                <Link href="/tr" className="rounded-md border border-white/10 px-3 py-2 text-steel hover:border-energy-500 hover:text-energy-500">
                  Turkce
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-steel">
        © {new Date().getFullYear()} {dict.brand.legal}. {dict.footer.rights}
      </div>
    </footer>
  );
}
