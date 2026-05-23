import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogSearch } from "@/components/blog-search";
import { AuthorityMetrics } from "@/components/authority-metrics";
import { ConversionFunnel } from "@/components/conversion-funnel";
import { getDictionary } from "@/content/dictionaries";
import { getCategories, getPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/blog",
    title: `${dict.nav.blog} | ${dict.brand.legal}`,
    description: "Technical articles on EPC, hydropower, solar, commissioning, O&M optimization and power plant audits."
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const posts = getPosts(locale);
  const categories = getCategories(locale);
  const featured = posts[0];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.blog }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{dict.nav.blog}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{dict.seo.siteDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/${locale}/blog/category/${category.slug}`} className="rounded-md border border-white/15 px-4 py-2 text-sm text-white hover:border-energy-500 hover:text-energy-500">
                {category.title}
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <AuthorityMetrics locale={locale} />
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container>
          {featured ? (
            <Link href={`/${locale}/blog/${featured.slug}`} className="mb-10 grid gap-6 rounded-lg border border-energy-500/30 bg-energy-500/10 p-6 shadow-glow lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-energy-500">
                  {locale === "en" ? "Featured technical insight" : "One cikan teknik yazi"}
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white">{featured.title}</h2>
              </div>
              <div>
                <p className="leading-8 text-steel">{featured.description}</p>
                <p className="mt-5 text-sm font-semibold text-white">{featured.category} - {featured.readingTime}</p>
              </div>
            </Link>
          ) : null}
          <BlogSearch locale={locale} posts={posts} />
        </Container>
      </section>
      <ConversionFunnel locale={locale} />
    </>
  );
}
