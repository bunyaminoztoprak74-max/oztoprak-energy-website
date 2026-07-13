import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { servicePath } from "@/lib/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/free-solar-review",
    title: en
      ? "Free Solar Plant Technical Review | Oztoprak Energy"
      : "Ücretsiz GES Teknik İncelemesi | Öztoprak Enerji",
    description: en
      ? "Request a free initial technical review of your solar plant's performance, commissioning documentation, reactive power compliance, or grid connection status."
      : "GES performansı, devreye alma dokümantasyonu, reaktif güç uyumu veya şebeke bağlantı durumuna yönelik ücretsiz ön teknik inceleme talep edin."
  });
}

export default async function FreeSolarReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const reviewItems = en
    ? [
        "Performance Ratio analysis — is your PR declining, and what's causing the loss?",
        "Reactive power compliance — are you receiving TEİAŞ reactive penalties, and can they be eliminated?",
        "Commissioning documentation — do you have the IEC 62446-compliant records needed for insurance, finance, and resale?",
        "Inverter availability analysis — are your forced outages within O&M contract targets?",
        "Grid connection compliance — do your protection relay settings and FRT capability still meet the connection agreement?"
      ]
    : [
        "Performans Oranı analizi — PR'ınız düşüyor mu ve kaybın nedeni ne?",
        "Reaktif güç uyumu — TEİAŞ reaktif cezaları alıyor musunuz ve bunlar ortadan kaldırılabilir mi?",
        "Devreye alma dokümantasyonu — sigorta, finans ve yeniden satış için gereken IEC 62446 uyumlu kayıtlarınız var mı?",
        "İnvertör emre amadelik analizi — zorla duruşlarınız O&M sözleşme hedefleri dahilinde mi?",
        "Şebeke bağlantısı uyumu — koruma rölesi ayarlarınız ve FRT kabiliyetiniz hâlâ bağlantı anlaşmasını karşılıyor mu?"
      ];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Free Initial Review" : "Ücretsiz Ön İnceleme"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en
              ? "Free Solar Plant Technical Review"
              : "Ücretsiz GES Teknik İncelemesi"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Share your solar plant's performance data, grid compliance concern, or commissioning documentation question. We'll identify the key technical issues and the right scope to address them — at no cost."
              : "GES performans verilerini, şebeke uyum endişenizi veya devreye alma dokümantasyon sorunuzu paylaşın. Temel teknik sorunları ve bunları gidermek için doğru kapsamı ücretsiz belirleyeceğiz."}
          </p>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {en ? "What the initial review covers" : "Ön incelemenin kapsamı"}
            </h2>
            <div className="mt-6 grid gap-4">
              {reviewItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "Related services" : "İlgili hizmetler"}
              </p>
              <div className="mt-4 grid gap-2">
                {(en
                  ? ["solar-energy-consulting", "reactive-power-audit", "grid-compliance-audit", "power-quality-audit", "site-acceptance-test", "asset-management"]
                  : ["gunes-enerjisi-danismanligi", "reaktif-guc-denetimi", "sebeke-uyum-denetimi", "guc-kalitesi-denetimi", "saha-kabul-testi", "teknik-varlik-yonetimi"]
                ).map((slug) => (
                  <Link key={slug} href={servicePath(locale, slug)} className="text-sm text-energy-500 hover:text-white transition">
                    → {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ContactForm dict={dict} locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
