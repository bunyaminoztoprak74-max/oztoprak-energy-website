import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/programmatic-page";
import { getDictionary } from "@/content/dictionaries";
import { getService, getServices } from "@/content/services";
import { generateProgrammaticSeoPages, getLocation, getProgrammaticSeoPage } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { generatedSeoPageSchema } from "@/lib/programmatic-schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => generateProgrammaticSeoPages(locale).map((page) => ({ locale, slug: page.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = getProgrammaticSeoPage(locale, slug);
  if (!page) return {};
  const index = generateProgrammaticSeoPages(locale).findIndex((item) => item.slug === slug);
  const translated = generateProgrammaticSeoPages(alternateLocale(locale))[index];
  const metadata = buildMetadata({
    locale,
    path: `/seo/${slug}`,
    alternatePath: translated ? `/seo/${translated.slug}` : undefined,
    title: page.title,
    description: page.description
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

export default async function GeneratedSeoPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const page = getProgrammaticSeoPage(locale, slug);
  if (!page) notFound();
  const service = getService(locale, page.serviceSlug);
  const location = getLocation(locale, page.locationSlug);
  if (!service || !location) notFound();

  const relatedServices = getServices(locale)
    .filter((item) => item.slug !== service.slug)
    .filter((item) => item.keywords.some((keyword) => service.keywords.includes(keyword)) || item.scope.some((scope) => service.scope.includes(scope)))
    .slice(0, 3);

  return (
    <ProgrammaticPage
      locale={locale}
      title={page.h1}
      eyebrow={locale === "en" ? "Generated SEO Landing Page" : "Üretilmiş SEO Landing Page"}
      description={page.description}
      intro={page.intro}
      breadcrumbs={[{ label: locale === "en" ? "SEO Pages" : "SEO Sayfaları", href: `/${locale}/seo` }, { label: page.h1 }]}
      schema={generatedSeoPageSchema(locale, page, [
        { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
        { name: locale === "en" ? "SEO Pages" : "SEO Sayfaları", url: `/${locale}/seo` },
        { name: page.h1, url: `/${locale}/seo/${page.slug}` }
      ])}
      bullets={[
        service.description,
        location.description,
        locale === "en" ? "Designed for EPC contractors, power plant owners, investors and international project teams." : "EPC yüklenicileri, santral sahipleri, yatırımcılar ve uluslararası proje ekipleri için tasarlanmıştır.",
        locale === "en" ? "Includes localized metadata, canonical URL, hreflang alternate and ProfessionalService structured data." : "Yerelleştirilmiş metadata, canonical URL, hreflang alternatifi ve ProfessionalService yapılandırılmış verisi içerir."
      ]}
      sections={page.sections}
      expertCommentary={page.expertCommentary}
      fieldProblems={page.fieldProblems}
      recommendedActions={page.recommendedActions}
      deliverables={page.deliverables}
      faqs={page.faqs}
      cta={page.cta}
      conclusion={page.conclusion}
      primaryLinks={[
        { title: service.title, href: `/${locale}/services/${service.slug}`, description: service.description },
        { title: location.label, href: `/${locale}/locations/${location.slug}`, description: location.description },
        ...relatedServices.map((item) => ({ title: item.title, href: `/${locale}/services/${item.slug}`, description: item.description }))
      ]}
      contextualLinks={[
        { title: service.title, href: `/${locale}/services/${service.slug}`, description: locale === "en" ? "Detailed service scope, FAQ and owner-side deliverables." : "Detaylı hizmet kapsamı, SSS ve işveren tarafı teslimatlar." },
        { title: locale === "en" ? `Energy consultancy in ${location.label}` : `${location.label} enerji danışmanlığı`, href: `/${locale}/locations/${location.slug}`, description: locale === "en" ? "Location context for service-intent pages and regional technical constraints." : "Hizmet-niyet sayfaları ve yerel teknik kısıtlar için lokasyon bağlamı." },
        { title: locale === "en" ? "Problem diagnosis pages" : "Problem teşhis sayfaları", href: `/${locale}/problems`, description: locale === "en" ? "Field problem pages connected to commissioning, O&M, grid and audit concerns." : "Devreye alma, O&M, şebeke ve denetim konularına bağlı saha problemi sayfaları." }
      ]}
      relatedSeed={{ services: [service.slug], categories: service.keywords, exclude: page.slug }}
      stats={[
        ["28+", dict.labels.years],
        ["274+", dict.labels.mw],
        ["8", dict.labels.projects],
        [location.label, locale === "en" ? "Target market" : "Hedef pazar"]
      ]}
    />
  );
}
