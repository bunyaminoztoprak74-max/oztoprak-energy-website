import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getLocations } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  return buildMetadata({
    locale,
    path: "/locations",
    title: locale === "en" ? "Renewable Energy Consultancy Locations" : "Yenilenebilir Enerji Danışmanlığı Lokasyonları",
    description: locale === "en" ? "Location-based renewable energy and EPC consultancy pages." : "Lokasyon odaklı yenilenebilir enerji ve EPC danışmanlığı sayfaları."
  });
}

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const locations = getLocations(locale);

  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Locations" : "Lokasyonlar" }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{locale === "en" ? "Location-Based Energy Consultancy" : "Lokasyon Odaklı Enerji Danışmanlığı"}</h1>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => <LinkCard key={location.slug} href={`/${locale}/locations/${location.slug}`} title={location.label} text={location.description} meta={location.keywords[0]} />)}
        </Container>
      </section>
    </>
  );
}
