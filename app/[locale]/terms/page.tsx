import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/terms", title: dict.footer.terms, description: `${dict.footer.terms} for ${dict.brand.legal}.` });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <Breadcrumbs locale={locale} items={[{ label: dict.footer.terms }]} />
        <article className="prose prose-invert max-w-3xl prose-p:text-steel">
          <h1>{dict.footer.terms}</h1>
          <p>{locale === "en" ? "The information on this website is provided for general engineering consultancy orientation and does not replace a project-specific technical assessment." : "Bu web sitesindeki bilgiler genel mühendislik danışmanlığı bilgilendirmesi içindir ve projeye özel teknik değerlendirme yerine geçmez."}</p>
          <p>{locale === "en" ? "Any engagement scope, deliverables, confidentiality terms and commercial conditions should be defined in a separate written agreement." : "Her danışmanlık kapsamı, teslimatlar, gizlilik koşulları ve ticari şartlar ayrı bir yazılı anlaşma ile tanımlanmalıdır."}</p>
        </article>
      </Container>
    </section>
  );
}
