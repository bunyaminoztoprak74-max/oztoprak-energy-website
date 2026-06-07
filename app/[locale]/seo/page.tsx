import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getDictionary } from "@/content/dictionaries";
import { generateProgrammaticSeoPages, getProgrammaticStats } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { collectionPageSchema } from "@/lib/programmatic-schema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const metadata = buildMetadata({
    locale,
    path: "/seo",
    title: locale === "en" ? "Programmatic SEO Pages" : "Programatik SEO Sayfaları",
    description: locale === "en" ? "Generated service, location and intent pages for Oztoprak Energy." : "Öztoprak Enerji için üretilen hizmet, lokasyon ve niyet sayfaları."
  });

  return {
    ...metadata,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true
      }
    }
  };
}

export default async function SeoIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const pages = generateProgrammaticSeoPages(locale);
  const stats = getProgrammaticStats(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema(locale, "/seo", locale === "en" ? "Programmatic SEO Pages" : "Programatik SEO Sayfaları", dict.seo.siteDescription, pages.slice(0, 50).map((page) => ({ name: page.title, url: `/${locale}/seo/${page.slug}` }))))
        }}
      />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "SEO Pages" : "SEO Sayfaları" }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{locale === "en" ? "Programmatic SEO Architecture" : "Programatik SEO Mimarisi"}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            {locale === "en"
              ? "A scalable content engine for service, problem, location, topic cluster and intent-based landing pages."
              : "Hizmet, problem, lokasyon, konu kümesi ve arama niyeti odaklı landing page üretimi için ölçeklenebilir içerik motoru."}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Object.entries(stats).map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-energy-500">{value}</p>
                <p className="mt-1 text-xs text-steel">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.slice(0, 60).map((page) => (
            <LinkCard key={page.slug} href={`/${locale}/seo/${page.slug}`} title={page.h1} text={page.description} meta={page.intent} />
          ))}
        </Container>
      </section>
    </>
  );
}
