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
        {locale === "tr" && <section>
            <h2>Enerji yatırım talepleri</h2>
            <p>Alıcı ve satıcı formlarında ilettiğiniz iletişim, yatırım kriterleri ve santral bilgileri talebinizi değerlendirmek ve sizinle iletişim kurmak amacıyla alınır. Form gönderiminde ad, şirket, telefon, e-posta ve doldurduğunuz teknik-finansal alanlar Web3Forms form hizmetine iletilir; bu hizmet başvuruyu ekibin e-posta adresine yönlendirir. Başvurunuz halka açık ilan oluşturmaz ve CRM sistemine otomatik kaydedilmez.</p>
            <p>Web3Forms gönderim hizmeti hakkında ayrıntılara <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">sağlayıcının gizlilik açıklamasından</a> ulaşabilirsiniz. Formdaki onay, bu iletişim ve yatırım bilgilerinin talebiniz kapsamında iletilmesini de kapsar.</p>
            <p>Başvuruyla birlikte gizlilik onayı sürümü, zaman bilgisi ve başvuru kaynağı kaydedilir. Form analitiğine ad, telefon, e-posta, bütçe veya santral bilgisi gönderilmez. Gizli satış tercihinde hassas bilgiler, paylaşım kapsamı sizinle netleştirildikten ve gizlilik sözleşmesi süreci tamamlandıktan sonra nitelikli yatırımcılarla paylaşılabilir.</p>
            <p>Bilgilerinizle ilgili sorularınızı, düzeltme veya silme taleplerinizi <a href="mailto:info@oztoprakenerji.com">info@oztoprakenerji.com</a> adresine başvuru referansınızla iletebilirsiniz.</p>
          </section>}
        </article>
      </Container>
    </section>
  );
}
