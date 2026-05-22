import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { getRelatedContent } from "@/content/programmatic-seo";

type RelatedContentProps = {
  locale: Locale;
  seed: {
    services?: string[];
    problems?: string[];
    categories?: string[];
    exclude?: string;
  };
};

export function RelatedContent({ locale, seed }: RelatedContentProps) {
  const dict = getDictionary(locale);
  const related = getRelatedContent(locale, seed);
  const sections = [
    {
      title: dict.nav.services,
      items: related.services.map((item) => ({ title: item.title, href: `/${locale}/services/${item.slug}`, text: item.description }))
    },
    {
      title: locale === "en" ? "Related Problems" : "İlgili Problemler",
      items: related.problems.map((item) => ({ title: item.label, href: `/${locale}/problems/${item.slug}`, text: item.description }))
    },
    {
      title: locale === "en" ? "Topic Clusters" : "Konu Kümeleri",
      items: related.clusters.map((item) => ({ title: item.title, href: `/${locale}/topics/${item.slug}`, text: item.description }))
    },
    {
      title: dict.labels.relatedPosts,
      items: related.posts.map((item) => ({ title: item.title, href: `/${locale}/blog/${item.slug}`, text: item.description }))
    }
  ].filter((section) => section.items.length > 0);

  return (
    <section className="bg-navy-950 py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">{locale === "en" ? "Related Technical Content" : "İlgili Teknik İçerikler"}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <div className="mt-5 grid gap-4">
                {section.items.map((item) => (
                  <Link key={item.href} href={item.href} className="block border-l-2 border-energy-500 pl-4">
                    <span className="font-semibold text-white hover:text-energy-500">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-steel">{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
