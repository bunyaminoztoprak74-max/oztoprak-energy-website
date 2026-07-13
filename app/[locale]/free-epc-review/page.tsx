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
    path: "/free-epc-review",
    title: en
      ? "Free EPC Technical Review | Oztoprak Energy"
      : "Ücretsiz EPC Teknik İncelemesi | Öztoprak Enerji",
    description: en
      ? "Request a free initial review of your EPC contract scope, technical risk exposure, or commissioning readiness — from an independent renewable energy engineering consultant."
      : "EPC sözleşme kapsamı, teknik risk maruziyeti veya devreye alma hazırlığı için bağımsız yenilenebilir enerji mühendislik danışmanından ücretsiz ön inceleme talep edin."
  });
}

export default async function FreeEpcReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const reviewItems = en
    ? [
        "EPC contract scope — is the scope complete, or are there interface gaps the owner will need to fill?",
        "Technical specification adequacy — do the specifications protect the owner's interests during procurement and construction?",
        "Performance guarantee enforceability — can the owner actually claim against the EPC guarantee if the plant underperforms?",
        "Commissioning readiness — what documentation and test evidence should the EPC contractor produce before handover?",
        "Grid connection plan — is the grid connection timeline realistic and the protection design consistent with TEİAŞ requirements?"
      ]
    : [
        "EPC sözleşme kapsamı — kapsam eksiksiz mi yoksa işverenin doldurmak zorunda kalacağı arayüz boşlukları var mı?",
        "Teknik şartname yeterliliği — şartnameler tedarik ve inşaat sürecinde işverenin çıkarlarını koruyor mu?",
        "Performans garantisi uygulanabilirliği — santral düşük performans gösterirse işveren gerçekten EPC garantisini talep edebilir mi?",
        "Devreye alma hazırlığı — EPC yüklenicisi teslimden önce hangi belge ve test kanıtlarını üretmelidir?",
        "Şebeke bağlantısı planı — şebeke bağlantısı takvimi gerçekçi mi ve koruma tasarımı TEİAŞ gereksinimleriyle tutarlı mı?"
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
              ? "Free EPC Technical Risk Review"
              : "Ücretsiz EPC Teknik Risk İncelemesi"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Share your EPC contract structure, scope documents, or commissioning readiness concern. We'll provide an initial written assessment of where the key technical risks lie — at no cost."
              : "EPC sözleşme yapısını, kapsam belgelerini veya devreye alma hazırlık endişenizi paylaşın. Temel teknik risklerin nerede olduğuna dair ücretsiz ön yazılı değerlendirme sağlayacağız."}
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
                  ? ["owners-engineering", "epc-technical-advisory", "power-plant-commissioning", "technical-due-diligence"]
                  : ["isveren-muhendisligi", "epc-teknik-danismanlik-hizmeti", "enerji-santrali-devreye-alma", "teknik-durum-tespiti"]
                ).map((slug) => (
                  <Link key={slug} href={servicePath(locale, slug)} className="text-sm text-energy-500 hover:text-white transition">
                    → {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
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
