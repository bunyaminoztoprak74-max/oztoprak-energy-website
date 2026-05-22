import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getCategories, getPosts } from "@/content/blog";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getCategories(locale).map((category) => ({ locale, category: category.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
  const { locale: localeParam, category } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const found = getCategories(locale).find((item) => item.slug === category);
  if (!found) return {};
  const index = getCategories(locale).findIndex((item) => item.slug === category);
  const translated = getCategories(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/blog/category/${category}`,
    alternatePath: translated ? `/blog/category/${translated.slug}` : undefined,
    title: `${found.title} | Blog`,
    description: `Articles about ${found.title} by Oztoprak Energy Consultancy.`
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale: localeParam, category } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const found = getCategories(locale).find((item) => item.slug === category);
  if (!found) notFound();
  const posts = getPosts(locale).filter((post) => post.categorySlug === category);

  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.blog, href: `/${locale}/blog` }, { label: found.title }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{found.title}</h1>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <LinkCard key={post.slug} href={`/${locale}/blog/${post.slug}`} title={post.title} text={post.description} meta={post.readingTime} />
          ))}
        </Container>
      </section>
    </>
  );
}
