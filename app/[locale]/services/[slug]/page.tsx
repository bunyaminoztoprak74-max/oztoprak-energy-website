import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { getService, getServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getServices(locale).map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const service = getService(locale, slug);
  if (!service) return {};
  const index = getServices(locale).findIndex((item) => item.slug === slug);
  const translated = getServices(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    alternatePath: translated ? `/services/${translated.slug}` : undefined,
    title: service.title,
    description: service.description
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const service = getService(locale, slug);
  if (!service) notFound();
  const serviceFaqs = [
    ...service.faqs,
    {
      question: locale === "en" ? `What evidence is reviewed for ${service.title}?` : `${service.title} için hangi kanıtlar incelenir?`,
      answer: locale === "en"
        ? `The review typically uses ${service.scope.slice(0, 3).join(", ")} together with operating records, EPC documents, commissioning evidence and owner priorities.`
        : `İnceleme genellikle ${service.scope.slice(0, 3).join(", ")} kapsamlarını; işletme kayıtları, EPC dokümanları, devreye alma kanıtları ve işveren öncelikleriyle birlikte kullanır.`
    },
    {
      question: locale === "en" ? `What makes this ${service.title.toLowerCase()} engagement decision-ready?` : `Bu ${service.title} çalışmasını karara hazır yapan nedir?`,
      answer: locale === "en"
        ? `Findings are tied to ${service.outcomes.slice(0, 2).join(" and ")}, then ranked by technical risk, generation impact, implementation urgency and evidence quality.`
        : `Bulgular ${service.outcomes.slice(0, 2).join(" ve ")} ile ilişkilendirilir; ardından teknik risk, üretim etkisi, uygulama aciliyeti ve kanıt kalitesine göre sıralanır.`
    }
  ];

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.services, url: `/${locale}/services` },
      { name: service.title, url: `/${locale}/services/${service.slug}` }
    ]),
    serviceSchema(locale, service),
    faqSchema(serviceFaqs)
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.services, href: `/${locale}/services` }, { label: service.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{service.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="rounded-md bg-energy-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
            <Link href={`/${locale}/projects`} className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {dict.nav.projects}
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">{dict.labels.technicalScope}</h2>
            <div className="mt-6 grid gap-4">
              {service.scope.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-steel">{item}</div>
              ))}
            </div>
            <h2 className="mt-12 text-2xl font-semibold text-white">{dict.labels.results}</h2>
            <ul className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <li key={item} className="border-l-2 border-energy-500 pl-4 text-steel">{item}</li>
              ))}
            </ul>
            <div className="mt-12 rounded-lg border border-energy-500/30 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Consultant Recommendation" : "Danisman Tavsiyesi"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? `For ${service.title}, the strongest results come when site evidence, EPC documents, commissioning records and O&M logs are reviewed together. This prevents isolated findings and gives the owner a ranked engineering action plan.`
                  : `${service.title} calismasinda en guclu sonuc; saha kanitlari, EPC dokumanlari, devreye alma kayitlari ve isletme bakim loglari birlikte incelendiginde alinir. Bu yaklasim tekil bulgular yerine onceliklendirilmis muhendislik aksiyon plani uretir.`}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/${locale}/blog`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.blog}</Link>
                <Link href={`/${locale}/projects`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.projects}</Link>
                <Link href={`/${locale}/contact`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.contact}</Link>
              </div>
            </div>
          </div>
          <aside className="premium-card rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 grid gap-6">
              {serviceFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{faq.answer}</p>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
