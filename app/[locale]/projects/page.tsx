import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LinkCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { getProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/projects", title: `${dict.nav.projects} | 274+ MW Experience`, description: dict.home.proof });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const projects = getProjects(locale);

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.projects }]} />
          <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{dict.home.projectsTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{dict.home.proof}</p>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <LinkCard
              key={project.slug}
              href={`/${locale}/projects/${project.slug}`}
              title={project.title}
              text={`${project.capacity} · ${project.role} · ${project.summary}`}
              meta={project.category}
            />
          ))}
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
