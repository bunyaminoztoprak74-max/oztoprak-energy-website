import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { getServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/services", title: `${dict.nav.services} | ${dict.brand.legal}`, description: dict.seo.siteDescription });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const services = getServices(locale);

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.services }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{dict.home.servicesTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{dict.seo.siteDescription}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {(locale === "en"
              ? ["Owner-side engineering judgment", "Commissioning and O&M field experience", "Bankable technical reporting"]
              : ["Isveren tarafi muhendislik bakisi", "Devreye alma ve isletme saha deneyimi", "Finansmana uygun teknik raporlama"]
            ).map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <LinkCard key={service.slug} href={`/${locale}/services/${service.slug}`} title={service.title} text={service.description} meta={service.eyebrow} />
          ))}
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
