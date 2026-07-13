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
    path: "/free-hepp-review",
    title: en
      ? "Free Hydropower Plant Technical Review | Oztoprak Energy"
      : "Ücretsiz HES Teknik İncelemesi | Öztoprak Enerji",
    description: en
      ? "Request a free initial technical review of your hydropower plant's performance, turbine-governor behavior, grid compliance, or O&M quality — from an independent HEPP engineering consultant."
      : "Bağımsız HES mühendislik danışmanından HES performansı, türbin-governor davranışı, şebeke uyumu veya O&M kalitesine yönelik ücretsiz ön teknik inceleme talep edin."
  });
}

export default async function FreeHeppReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const reviewItems = en
    ? [
        "Generation shortfall analysis — what's causing the gap between actual and budgeted generation?",
        "Turbine-governor performance — are stability, ramp rate, and setpoint tracking within acceptable limits?",
        "Forced outage analysis — what are the most frequent unplanned outage causes and how can they be reduced?",
        "Grid compliance review — do protection relay settings, FRT capability, and reactive power compensation meet TEİAŞ requirements?",
        "O&M contract performance — is the O&M contractor meeting their availability and response time KPIs?"
      ]
    : [
        "Üretim açığı analizi — gerçekleşen ile bütçelenen üretim arasındaki farkın nedeni ne?",
        "Türbin-governor performansı — kararlılık, rampa hızı ve set noktası takibi kabul edilebilir sınırlar dahilinde mi?",
        "Zorunlu durus analizi — en sık karşılaşılan planlanmamış durus nedenleri neler ve bunlar nasıl azaltılabilir?",
        "Şebeke uyum incelemesi — koruma rölesi ayarları, FRT kabiliyeti ve reaktif güç kompanzasyonu TEİAŞ gereksinimlerini karşılıyor mu?",
        "O&M sözleşme performansı — O&M yüklenicisi emre amadelik ve yanıt süresi KPI'larını karşılıyor mu?"
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
              ? "Free Hydropower Plant Technical Review"
              : "Ücretsiz HES Teknik İncelemesi"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Share your HEPP's performance data, O&M concern, or grid compliance question. We'll identify the key technical issues and the right scope — at no cost. Response within 1 business day."
              : "HES performans verilerini, O&M endişenizi veya şebeke uyum sorunuzu paylaşın. Temel teknik sorunları ve doğru kapsamı ücretsiz belirleyeceğiz. 1 iş günü içinde yanıt."}
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
                  ? ["hydropower-consulting", "hpp-performance-analysis", "technical-audits-existing-power-plants", "grid-compliance-audit", "asset-management"]
                  : ["hes-danismanligi", "hes-performans-analizi", "mevcut-santraller-icin-teknik-denetim", "sebeke-uyum-denetimi", "teknik-varlik-yonetimi"]
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
