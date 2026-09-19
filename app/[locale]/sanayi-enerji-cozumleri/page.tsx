import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, FileSearch, Sun, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";
import { notFound } from "next/navigation";

const faqs = [
  {
    question: "İlk inceleme hangi bilgilerle başlar?",
    answer:
      "Son 12 aya ait faturalar, mümkünse tüketim profili ve tesisin temel çalışma bilgileri ilk değerlendirme için yeterlidir. Uygun kaynak veya santral alternatifi gerektiğinde ihtiyaç profili ayrıca netleştirilir."
  },
  {
    question: "Elektrik tedariki ile GES veya HES seçeneği aynı çalışmada değerlendirilebilir mi?",
    answer:
      "Evet. Önce tesisin tüketim yapısı ve maliyet kalemleri değerlendirilir. Ardından kısa ve orta vadede uygun elektrik tedariki ile yenilenebilir üretim varlığı veya proje seçenekleri ayrı senaryolar olarak incelenebilir."
  },
  {
    question: "Mevcut satılık projeler kamuya açık olarak paylaşılır mı?",
    answer:
      "Hayır. Proje ve santral bilgileri yalnızca yetkili kişi veya kuruluşun paylaşım izni kapsamında değerlendirilir. Talep, ihtiyaç profiline göre gizli yürütülür."
  }
];

export async function generateStaticParams() {
  return [{ locale: "tr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "tr") return {};

  return buildMetadata({
    locale: "tr",
    path: "/sanayi-enerji-cozumleri",
    hasTranslation: false,
    title: "Yüksek Tüketimli İşletmeler İçin Enerji Çözümleri",
    description:
      "Yüksek tüketimli işletmeler için elektrik tüketim analizi, tedarik seçeneği değerlendirmesi, GES/HES kaynak araştırması ve teknik inceleme desteği."
  });
}

export default async function IndustrialEnergySolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();

  const steps = [
    {
      icon: BarChart3,
      title: "Tüketimi ve maliyeti anlayın",
      text: "Fatura, tüketim profili, sözleşme gücü ve reaktif enerji kalemlerini birlikte değerlendirerek hangi maliyetlerin kontrol edilebileceğini belirliyoruz."
    },
    {
      icon: Zap,
      title: "Tedarik seçeneğini değerlendirin",
      text: "Tesisin tüketim yapısına göre elektrik tedarik seçeneğini ve sözleşme koşullarını değerlendirmek için gerekli bilgileri netleştiriyoruz."
    },
    {
      icon: Sun,
      title: "Uygun yenilenebilir kaynağı araştırın",
      text: "İhtiyaca göre çatı GES, arazi GES, HES veya uygun yenilenebilir üretim varlığı ve proje alternatiflerini değerlendiriyoruz."
    },
    {
      icon: FileSearch,
      title: "Teknik inceleme ile karar verin",
      text: "Belirlenen proje veya santral alternatifinin üretim geçmişi, teknik durumu, işletme ihtiyacı ve başlıca riskleri için inceleme kapsamı oluşturuyoruz."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale="tr" items={[{ label: "Sanayi Enerji Çözümleri" }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-energy-500">Sanayi için bütüncül enerji yaklaşımı</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">Yüksek Tüketimli İşletmeler İçin Enerji Maliyeti ve Kaynak Çözümleri</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            Elektrik maliyetini yalnızca tek bir fatura kalemi olarak değil; tüketim profili, tedarik koşulları ve yenilenebilir üretim seçenekleriyle birlikte değerlendiriyoruz.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/tr/industrial-bill-review" className="inline-flex items-center gap-2 rounded-md bg-energy-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-glow transition hover:bg-white">
              Tüketim ve fatura incelemesi <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tr/satilik-enerji-santralleri" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-energy-500 hover:text-energy-500">
              Santral veya proje ihtiyacını paylaşın <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <p className="max-w-3xl text-lg leading-8 text-steel">
            Hedef, işletmeniz için hangi seçeneğin doğru olduğunu kanıtlarla belirlemektir: tüketim maliyetinin iyileştirilmesi, elektrik tedarikinin değerlendirilmesi veya tüketimi destekleyecek GES/HES üretim kaynağının bulunması.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="premium-card rounded-lg p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500"><Icon className="h-5 w-5" /></span>
                  <span className="text-sm font-bold text-energy-500">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-energy-500/25 bg-energy-500/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">Elektrik tedariki ve maliyet incelemesi</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Tüketim yapınıza göre başlayın</h2>
            <p className="mt-4 text-sm leading-7 text-steel">Fatura ve tüketim verileri üzerinden hangi bilgilerin gerektiğini belirleyelim. Elektrik tedariki talebi satış sürecinde, teknik inceleme ihtiyacı danışmanlık sürecinde ele alınır.</p>
            <Link href="/tr/industrial-bill-review" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-energy-500 hover:text-white">İnceleme talebi oluştur <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">GES/HES kaynak araştırması</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Uygun projeyi veya santrali gizli değerlendirin</h2>
            <p className="mt-4 text-sm leading-7 text-steel">Açık bir proje ilanına bağlı kalmadan, tüketim hedefinize uygun kaynak veya varlık ihtiyacını paylaşabilirsiniz. Uygun alternatif ortaya çıktığında teknik inceleme kapsamı ayrıca belirlenir.</p>
            <Link href="/tr/satilik-enerji-santralleri" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-energy-500 hover:text-white">Kaynak ihtiyacını paylaş <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white">Sık sorulan sorular</h2>
          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-white/10 pb-6 last:border-0">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-steel">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
