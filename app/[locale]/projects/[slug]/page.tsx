import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import { getProject, getProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const project = getProject(locale, slug);
  if (!project) return {};
  const index = getProjects(locale).findIndex((item) => item.slug === slug);
  const translated = getProjects(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    alternatePath: translated ? `/projects/${translated.slug}` : undefined,
    title: project.title,
    description: project.summary
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();
  const contactHref = locale === "tr" ? "/tr/iletisim" : "/en/contact";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.projects, url: `/${locale}/projects` },
      { name: project.title, url: `/${locale}/projects/${project.slug}` }
    ]),
    projectSchema(locale, project)
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.projects, href: `/${locale}/projects` }, { label: project.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{project.category}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contactHref} className="rounded-md bg-energy-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
            <Link href={locale === "tr" ? "/tr/hizmetler" : "/en/services"} className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {dict.nav.services}
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="premium-card rounded-lg p-6">
            {[
              [dict.labels.capacity, project.capacity],
              [dict.labels.location, project.location],
              [dict.labels.type, project.type],
              [dict.labels.role, project.role]
            ].map(([label, value]) => (
              <div key={label} className="border-b border-white/10 py-4 last:border-0">
                <p className="text-xs uppercase tracking-[0.18em] text-energy-500">{label}</p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </aside>
          <div>
            {project.challenge || project.approach ? (
              <div className="mb-10 grid gap-5 sm:grid-cols-2">
                {project.challenge ? (
                  <div className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-5">
                    <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Challenge" : "Zorluk"}</h2>
                    <p className="mt-4 text-sm leading-7 text-steel">{project.challenge}</p>
                  </div>
                ) : null}
                {project.approach ? (
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Approach" : "Yaklaşım"}</h2>
                    <p className="mt-4 text-sm leading-7 text-steel">{project.approach}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-semibold text-white">{dict.labels.commissioning}</h2>
                <p className="mt-4 text-sm leading-7 text-steel">{project.commissioning}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-semibold text-white">{dict.labels.om}</h2>
                <p className="mt-4 text-sm leading-7 text-steel">{project.om}</p>
              </div>
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-white">{dict.labels.technicalScope}</h2>
            <ul className="mt-6 grid gap-3">
              {project.scope.map((item) => <li key={item} className="border-l-2 border-energy-500 pl-4 leading-7 text-steel">{item}</li>)}
            </ul>
            {project.actions?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Technical Actions" : "Teknik Aksiyonlar"}</h2>
                <ul className="mt-6 grid gap-3">
                  {project.actions.map((item) => <li key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-steel">{item}</li>)}
                </ul>
              </>
            ) : null}
            <h2 className="mt-10 text-2xl font-semibold text-white">
              {locale === "en" ? "Technical Contribution" : "Teknik Katki"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "The case study is presented from an engineering delivery perspective: what was checked, which site risks mattered, how commissioning or O&M evidence was interpreted, and how results supported owner decisions."
                : "Bu vaka calismasi muhendislik teslim perspektifiyle sunulur: hangi kontrollerin yapildigi, hangi saha risklerinin kritik oldugu, devreye alma veya isletme kanitlarinin nasil yorumlandigi ve sonuclarin isveren kararlarini nasil destekledigi."}
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-white">{dict.labels.results}</h2>
            <ul className="mt-6 grid gap-3">
              {project.results.map((item) => <li key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-steel">{item}</li>)}
            </ul>
            {project.lessons?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Lessons Learned" : "Çıkarılan Dersler"}</h2>
                <ul className="mt-6 grid gap-3">
                  {project.lessons.map((item) => <li key={item} className="border-l-2 border-energy-500 pl-4 leading-7 text-steel">{item}</li>)}
                </ul>
              </>
            ) : null}
          </div>
        </Container>
      </section>
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {locale === "en" ? "Discuss a Similar Technical Challenge" : "Benzer Bir Teknik Konuyu Görüşün"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "Share your project type, current risk, capacity and decision timeline to request a technical consultation, operational assessment or EPC advisory review."
                : "Teknik danışmanlık, operasyonel değerlendirme veya EPC danışmanlık incelemesi için proje türünü, mevcut riski, kapasiteyi ve karar takvimini paylaşın."}
            </p>
          </div>
          <ContactForm dict={dict} locale={locale} />
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
