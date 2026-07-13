"use client";
import { Mail, Phone, Linkedin, MessageSquareText, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { linkedinUrl } from "@/lib/social";

export function ContactPageContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const en = locale === "en";

  const nextSteps = en
    ? [
        {
          icon: MessageSquareText,
          title: "We read your message carefully",
          text: "Every inquiry is read by Bünyamin Öztoprak personally — not screened by an assistant or auto-responder. The context of your project matters."
        },
        {
          icon: FileText,
          title: "We identify the right scope",
          text: "Within 1 business day, we respond with a clear description of how we can help, what the engagement would involve, and an indicative fee range."
        },
        {
          icon: Clock,
          title: "You decide — no pressure",
          text: "There is no obligation from an initial inquiry. If the scope and fee range work for you, we agree next steps. If not, the response has still given you a clearer picture of the problem."
        }
      ]
    : [
        {
          icon: MessageSquareText,
          title: "Mesajınızı dikkatlice okuruz",
          text: "Her talep bir asistan veya otomatik yanıtlayıcı tarafından değil, bizzat Bünyamin Öztoprak tarafından okunur. Projenizin bağlamı önemlidir."
        },
        {
          icon: FileText,
          title: "Doğru kapsamı belirleriz",
          text: "1 iş günü içinde nasıl yardımcı olabileceğimizi, çalışmanın ne kapsayacağını ve gösterge niteliğindeki ücret aralığını içeren net bir yanıt göndeririz."
        },
        {
          icon: Clock,
          title: "Siz karar verin — baskı yok",
          text: "İlk talepten herhangi bir yükümlülük doğmaz. Kapsam ve ücret aralığı sizin için uygunsa sonraki adımları kararlaştırırız. Değilse, yanıt yine de problemi daha net görmenizi sağlamış olur."
        }
      ];

  const inquiryTypes = en
    ? [
        "Technical due diligence for a solar or hydropower acquisition",
        "Independent engineer appointment for project finance",
        "Lender's engineer scope for construction monitoring",
        "Commissioning readiness review before grid connection",
        "EPC contract scope and risk review",
        "Reactive power penalty analysis and compensation audit",
        "Grid compliance review (TEİAŞ FRT, protection, AGC)",
        "Performance investigation for an underperforming plant",
        "Owner's engineering scope for a new development",
        "Expert witness or technical arbitration input"
      ]
    : [
        "GES veya HES satın alımı için teknik durum tespiti",
        "Proje finansmanı için bağımsız mühendis ataması",
        "İnşaat izleme için kredi kuruluşu mühendisi kapsamı",
        "Şebeke bağlantısı öncesi devreye alma hazırlık incelemesi",
        "EPC sözleşme kapsamı ve risk incelemesi",
        "Reaktif güç cezası analizi ve kompanzasyon denetimi",
        "Şebeke uyum incelemesi (TEİAŞ FRT, koruma, AGC)",
        "Düşük performanslı santral için performans soruşturması",
        "Yeni bir proje geliştirme için işveren mühendisliği kapsamı",
        "Bilirkişi veya teknik tahkim girdisi"
      ];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.contact }]} />
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
                {en ? "1 business day response · No obligation" : "1 iş günü yanıt · Yükümlülük yok"}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-bold text-white sm:text-5xl">{dict.contact.title}</h1>
              <p className="mt-5 text-lg leading-8 text-steel">{dict.contact.description}</p>

              {/* Contact channels */}
              <div className="mt-8 grid gap-3">
                <a
                  href={`mailto:${dict.contact.email}`}
                  className="premium-card flex items-center gap-4 rounded-lg p-4 text-white hover:border-energy-500"
                  onClick={() => { if (typeof window !== "undefined" && (window as unknown as { oztoprakTrack?: (e: string) => void }).oztoprakTrack) (window as unknown as { oztoprakTrack: (e: string) => void }).oztoprakTrack("email_click"); }}
                >
                  <Mail className="h-5 w-5 shrink-0 text-energy-500" />
                  <div>
                    <p className="text-xs text-steel/60">{en ? "Email" : "E-posta"}</p>
                    <p className="text-sm font-semibold">{dict.contact.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${dict.contact.phone.replaceAll(" ", "")}`}
                  className="premium-card flex items-center gap-4 rounded-lg p-4 text-white hover:border-energy-500"
                  onClick={() => { if (typeof window !== "undefined" && (window as unknown as { oztoprakTrack?: (e: string) => void }).oztoprakTrack) (window as unknown as { oztoprakTrack: (e: string) => void }).oztoprakTrack("phone_click"); }}
                >
                  <Phone className="h-5 w-5 shrink-0 text-energy-500" />
                  <div>
                    <p className="text-xs text-steel/60">{en ? "Phone / WhatsApp" : "Telefon / WhatsApp"}</p>
                    <p className="text-sm font-semibold">{dict.contact.phone}</p>
                  </div>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card flex items-center gap-4 rounded-lg p-4 text-white hover:border-energy-500"
                  onClick={() => { if (typeof window !== "undefined" && (window as unknown as { oztoprakTrack?: (e: string) => void }).oztoprakTrack) (window as unknown as { oztoprakTrack: (e: string) => void }).oztoprakTrack("linkedin_click"); }}
                >
                  <Linkedin className="h-5 w-5 shrink-0 text-energy-500" />
                  <div>
                    <p className="text-xs text-steel/60">{en ? "Professional network" : "Profesyonel ağ"}</p>
                    <p className="text-sm font-semibold">LinkedIn</p>
                  </div>
                </a>
              </div>

              {/* What happens next */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-white">
                  {en ? "What happens next" : "Bundan sonra ne olur"}
                </p>
                <div className="mt-4 grid gap-4">
                  {nextSteps.map((step, i) => {
                    return (
                      <div key={step.title} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-energy-500/30 bg-energy-500/10 text-xs font-bold text-energy-500">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{step.title}</p>
                          <p className="mt-1 text-sm leading-6 text-steel">{step.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <ContactForm dict={dict} locale={locale} />
          </div>
        </Container>
      </section>

      {/* Types of inquiries */}
      <section className="border-t border-white/10 bg-navy-900 py-16">
        <Container>
          <h2 className="text-xl font-semibold text-white">
            {en ? "Types of inquiries we handle" : "Ele aldığımız talep türleri"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-steel">
            {en
              ? "If your question relates to any of the following, send us a message — we'll let you know whether and how we can help."
              : "Sorunuz aşağıdakilerden herhangi biriyle ilgiliyse mesaj gönderin — yardımcı olup olamayacağımızı ve nasıl yardımcı olacağımızı belirtelim."}
          </p>
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {inquiryTypes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                <p className="text-sm leading-6 text-steel">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
