import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { getProblems } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  return buildMetadata({
    locale,
    path: "/problems",
    title: locale === "en" ? "Power Plant Problems and Solutions" : "Enerji Santrali Problemleri ve Çözümleri",
    description: locale === "en" ? "Problem-based renewable energy consultancy pages." : "Problem odaklı yenilenebilir enerji danışmanlığı sayfaları."
  });
}

export default async function ProblemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const problems = getProblems(locale);

  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Problems" : "Problemler" }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{locale === "en" ? "Problem-Based Technical Consultancy" : "Problem Odaklı Teknik Danışmanlık"}</h1>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => <LinkCard key={problem.slug} href={`/${locale}/problems/${problem.slug}`} title={problem.label} text={problem.description} meta={problem.keywords[0]} />)}
        </Container>
      </section>
    </>
  );
}
