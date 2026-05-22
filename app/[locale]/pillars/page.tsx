import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getPillars } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  return buildMetadata({ locale, path: "/pillars", title: locale === "en" ? "SEO Pillar Pages" : "SEO Pillar Sayfaları", description: locale === "en" ? "Pillar page architecture for renewable energy consultancy." : "Yenilenebilir enerji danışmanlığı için pillar sayfa mimarisi." });
}

export default async function PillarsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Pillars" : "Pillar Sayfalar" }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{locale === "en" ? "Pillar Page Architecture" : "Pillar Sayfa Mimarisi"}</h1>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {getPillars(locale).map((pillar) => <LinkCard key={pillar.slug} href={`/${locale}/pillars/${pillar.slug}`} title={pillar.title} text={pillar.description} meta={locale === "en" ? "Pillar" : "Pillar"} />)}
        </Container>
      </section>
    </>
  );
}
