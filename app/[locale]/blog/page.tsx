import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
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
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <LinkCard key={post.slug} href={`/${locale}/blog/${post.slug}`} title={post.title} text={post.description} meta={`${post.category} · ${post.readingTime}`} />
          ))}
        </Container>
      </section>
    </>
  );
}
