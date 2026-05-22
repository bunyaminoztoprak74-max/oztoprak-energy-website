import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getClusters } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  return buildMetadata({ locale, path: "/topics", title: locale === "en" ? "Semantic SEO Topic Clusters" : "Semantik SEO Konu Kümeleri", description: locale === "en" ? "Topic clusters for renewable energy consultancy SEO." : "Yenilenebilir enerji danışmanlığı SEO için konu kümeleri." });
}

export default async function TopicsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Topics" : "Konular" }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{locale === "en" ? "Semantic SEO Topic Clusters" : "Semantik SEO Konu Kümeleri"}</h1>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getClusters(locale).map((cluster) => <LinkCard key={cluster.slug} href={`/${locale}/topics/${cluster.slug}`} title={cluster.title} text={cluster.description} meta={cluster.pillar} />)}
        </Container>
      </section>
    </>
  );
}
