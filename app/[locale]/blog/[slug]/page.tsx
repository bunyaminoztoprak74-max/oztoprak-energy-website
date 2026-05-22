import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { getPost, getPosts } from "@/content/blog";
import { getDictionary } from "@/content/dictionaries";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getPosts(locale).map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const post = getPost(locale, slug);
  if (!post) return {};
  const index = getPosts(locale).findIndex((item) => item.slug === slug);
  const translated = getPosts(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    alternatePath: translated ? `/blog/${translated.slug}` : undefined,
    title: post.title,
    description: post.description,
    type: "article"
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const post = getPost(locale, slug);
  if (!post) notFound();
  const relatedPosts = post.related.map((relatedSlug) => getPost(locale, relatedSlug)).filter(Boolean);
  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.blog, url: `/${locale}/blog` },
      { name: post.title, url: `/${locale}/blog/${post.slug}` }
    ]),
    articleSchema(locale, post)
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.blog, href: `/${locale}/blog` }, { label: post.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{post.category} · {post.readingTime}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{post.description}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2">
              {locale === "en" ? "Author: Oztoprak Energy engineering desk" : "Yazar: Oztoprak Enerji muhendislik masasi"}
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2">
              {locale === "en" ? "Reviewed for EPC and plant operations context" : "EPC ve santral isletme baglami icin incelendi"}
            </span>
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="premium-card rounded-lg p-6">
              <h2 className="font-semibold text-white">{dict.labels.tableOfContents}</h2>
              <ol className="mt-4 grid gap-3 text-sm text-steel">
                {post.toc.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </div>
            <div className="mt-5 premium-card rounded-lg p-6">
              <h2 className="font-semibold text-white">{dict.nav.services}</h2>
              <div className="mt-4 grid gap-2">
                {post.serviceLinks.map((serviceSlug) => {
                  const service = getService(locale, serviceSlug);
                  return service ? (
                    <Link key={serviceSlug} href={`/${locale}/services/${serviceSlug}`} className="text-sm text-energy-500 hover:text-white">
                      {service.title}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          </aside>
          <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-steel prose-p:leading-8 prose-a:text-energy-500">
            {post.body.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </section>
            ))}
            <section className="not-prose my-10 rounded-lg border border-energy-500/30 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Consultant Field Note" : "Danisman Saha Notu"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? "In real plant reviews, the most useful conclusion is rarely a single KPI. It is the connection between test evidence, alarms, operator logs, grid events and the corrective action that can be executed without creating new reliability risk."
                  : "Gercek santral incelemelerinde en faydali sonuc genellikle tek bir KPI degildir. Asil deger; test kaniti, alarm kaydi, operator logu, sebeke olayi ve yeni guvenilirlik riski yaratmadan uygulanabilecek duzeltici aksiyon arasindaki baglantidadir."}
              </p>
            </section>
            <h2>{dict.labels.relatedPosts}</h2>
            <ul>
              {relatedPosts.map((related) => related ? (
                <li key={related.slug}>
                  <Link href={`/${locale}/blog/${related.slug}`}>{related.title}</Link>
                </li>
              ) : null)}
            </ul>
          </article>
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
