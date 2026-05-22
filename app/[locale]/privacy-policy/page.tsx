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
  return buildMetadata({ locale, path: "/privacy-policy", title: dict.footer.privacy, description: `${dict.footer.privacy} for ${dict.brand.legal}.` });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <Breadcrumbs locale={locale} items={[{ label: dict.footer.privacy }]} />
        <article className="prose prose-invert max-w-3xl prose-p:text-steel">
          <h1>{dict.footer.privacy}</h1>
          <p>{locale === "en" ? "Oztoprak Energy Consultancy uses contact information submitted through this website only to respond to technical consultation requests, provide requested materials and communicate about relevant engineering services." : "Öztoprak Enerji Danışmanlık, bu web sitesi üzerinden iletilen iletişim bilgilerini yalnızca teknik danışmanlık taleplerine dönüş yapmak, talep edilen materyalleri sağlamak ve ilgili mühendislik hizmetleri hakkında iletişim kurmak için kullanır."}</p>
          <p>{locale === "en" ? "We do not sell personal data. Website analytics and form integrations should be configured with privacy, security and data minimization principles before production launch." : "Kişisel veriler satılmaz. Web sitesi analiz ve form entegrasyonları canlıya alınmadan önce gizlilik, güvenlik ve veri minimizasyonu ilkeleriyle yapılandırılmalıdır."}</p>
        </article>
      </Container>
    </section>
  );
}
