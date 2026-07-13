import type { Metadata } from "next";
import { CheckCircle2, Clock, FileText, MessageSquareText } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/free-consultation",
    title: en ? "Book a Free Technical Consultation | Oztoprak Energy" : "Ücretsiz Teknik Danışmanlık Görüşmesi | Öztoprak Enerji",
    description: en
      ? "Book a free 30-minute technical consultation with a renewable energy engineering consultant. Discuss your EPC, commissioning, grid compliance, TDD, or O&M challenge — no obligation."
      : "Yenilenebilir enerji mühendislik danışmanıyla ücretsiz 30 dakikalık teknik danışmanlık görüşmesi planlayın. EPC, devreye alma, şebeke uyumu, TDD veya O&M sorununuzu tartışın — yükümlülük yoktur."
  });
}

export default async function FreeConsultationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const whatHappens = en
    ? [
        {
          icon: MessageSquareText,
          title: "You describe the project",
          text: "Plant type, capacity, current stage, and the main technical concern — commissioning readiness, EPC scope gap, grid compliance, performance shortfall, or TDD requirement."
        },
        {
          icon: FileText,
          title: "We identify the right scope",
          text: "We explain whether the issue needs a desktop review, site visit, standalone report, or ongoing advisory — and what that engagement would typically involve."
        },
        {
          icon: Clock,
          title: "You receive a clear path forward",
          text: "Within 1 business day, you receive a written response outlining the recommended next step, scope, and an indicative fee range for the engagement."
        }
      ]
    : [
        {
          icon: MessageSquareText,
          title: "Projeyi siz anlatırsınız",
          text: "Santral türü, kapasite, mevcut aşama ve temel teknik endişe — devreye alma hazırlığı, EPC kapsam boşluğu, şebeke uyumu, performans açığı veya TDD gereksinimi."
        },
        {
          icon: FileText,
          title: "Doğru kapsamı belirleriz",
          text: "Sorunun masabaşı inceleme, saha ziyareti, bağımsız rapor veya süregelen danışmanlık gerektirip gerektirmediğini ve bu çalışmanın genellikle neleri kapsayacağını açıklarız."
        },
        {
          icon: Clock,
          title: "Net bir yol haritası alırsınız",
          text: "1 iş günü içinde önerilen sonraki adımı, kapsamı ve çalışma için gösterge niteliğindeki ücret aralığını içeren yazılı bir yanıt alırsınız."
        }
      ];

  const suitableFor = en
    ? [
        "Renewable energy investors evaluating a Turkish solar or HEPP acquisition",
        "EPC contractors needing independent verification for lender reporting",
        "Plant owners with declining performance ratio or persistent grid penalties",
        "Developers approaching commissioning who need a readiness check",
        "Legal or financial advisors needing technical input for a transaction",
        "Development banks or IFIs requiring an independent engineer appointment"
      ]
    : [
        "Türk GES veya HES satın alımını değerlendiren yenilenebilir enerji yatırımcıları",
        "Kredi kuruluşu raporlaması için bağımsız doğrulama ihtiyacı olan EPC yüklenicileri",
        "Düşen performans oranı veya süregelen şebeke cezaları olan santral sahipleri",
        "Hazırlık kontrolü için devreye almaya yaklaşan geliştiriciler",
        "Bir işlem için teknik girdi ihtiyacı duyan hukuki veya finansal danışmanlar",
        "Bağımsız mühendis ataması gerektiren kalkınma bankaları veya uluslararası finansal kuruluşlar"
      ];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "No obligation · 1 business day response" : "Yükümlülük yok · 1 iş günü yanıt"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en
              ? "Free Technical Consultation"
              : "Ücretsiz Teknik Danışmanlık Görüşmesi"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Describe your technical challenge — EPC, commissioning, grid compliance, performance shortfall, or due diligence. We'll identify the right scope and respond within 1 business day."
              : "Teknik zorluğunuzu tanımlayın — EPC, devreye alma, şebeke uyumu, performans açığı veya durum tespiti. Doğru kapsamı belirler ve 1 iş günü içinde yanıt veririz."}
          </p>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          {whatHappens.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-semibold text-white">{step.title}</h2>
                <p className="text-sm leading-7 text-steel">{step.text}</p>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
              {en ? "This consultation is suitable for" : "Bu görüşme şunlar için uygundur"}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {en ? "Who we work with" : "Kimlerle çalışırız"}
            </h2>
            <div className="mt-8 grid gap-3">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "What to include in your message" : "Mesajınıza ne ekleyin"}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-steel">
                {(en
                  ? [
                      "Plant type (HEPP, solar, wind, cogeneration)",
                      "Installed capacity (MW)",
                      "Current project stage",
                      "Main technical concern or question",
                      "Decision timeline (if applicable)"
                    ]
                  : [
                      "Santral türü (HES, GES, rüzgar, kojenerasyon)",
                      "Kurulu kapasite (MW)",
                      "Mevcut proje aşaması",
                      "Temel teknik endişe veya soru",
                      "Karar zaman çizelgesi (varsa)"
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-energy-500" />
                    {item}
                  </li>
                ))}
              </ul>
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
