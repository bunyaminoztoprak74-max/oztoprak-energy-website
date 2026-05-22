import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/about", title: dict.about.title, description: dict.about.description });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.about }]} />
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{dict.about.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{dict.about.description}</p>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="prose prose-invert max-w-none prose-p:text-steel">
            <p>{dict.about.body}</p>
            <p>
              {locale === "en"
                ? "The consultancy is positioned for EPC companies, renewable investors, power plant owners, industrial energy users and international project teams that need practical, independent engineering judgment."
                : "Danışmanlık; EPC şirketleri, yenilenebilir enerji yatırımcıları, santral sahipleri, endüstriyel enerji kullanıcıları ve pratik, bağımsız mühendislik görüşüne ihtiyaç duyan uluslararası proje ekipleri için konumlanmıştır."}
            </p>
          </div>
          <div className="grid gap-4">
            {dict.about.values.map((value) => (
              <div key={value} className="premium-card rounded-lg p-6 text-lg font-semibold text-white">{value}</div>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
