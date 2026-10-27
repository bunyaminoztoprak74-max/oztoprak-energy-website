import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ClipboardList, FileText, Scale, Sun } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { IndustrialLeadForm } from "@/components/industrial-lead-form";
import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

// Editorial rules for this page:
//  - No prices, tariffs, discounts or savings percentages. Offers depend on the consumption profile
//    and the supplier's terms at the time of the request.
//  - The page states clearly that Öztoprak Enerji acts as Uludağ Elektrik's authorised sales agency
//    (satış acentesi, confirmed by the owner) and that Uludağ Elektrik is the contracting party.
//  - Regulatory thresholds (e.g. the free-consumer limit) change; the page points to EPDK.

const faqs = [
  {
    question: "Elektrik tedariği teklifi kimlere sunuluyor?",
    answer:
      "Yüksek tüketimli sanayi tesisleri, OSB firmaları, soğuk hava depoları, otel, hastane ve benzeri ticari tesisler için teklif hazırlanır. Tedarikçiyi seçme hakkı serbest tüketici olma şartına bağlıdır; bu limit EPDK tarafından belirlenir ve değişebilir. Tesisinizin güncel durumunu EPDK duyurularından veya mevcut tedarikçinizden doğrulayabilirsiniz."
  },
  {
    question: "Öztoprak Enerji elektrik tedarikçisi midir?",
    answer:
      "Hayır. Öztoprak Enerji, Uludağ Elektrik'in yetkili satış acentesi olarak işletmelere teklif sunar. Elektriği tedarik eden ve sözleşmenin tarafı olan şirket Uludağ Elektrik'tir; Öztoprak Enerji bu sözleşmenin tarafı değil, yetkili satış acentesidir."
  },
  {
    question: "Teklif ne kadar sürede ve hangi bilgilerle hazırlanır?",
    answer:
      "Son 12 aya ait elektrik faturaları, tesisin abone bilgileri ve varsa saatlik veya aylık tüketim profili teklif için yeterlidir. Teklifin kapsamı ve süresi tesisin yapısına ve tedarikçinin değerlendirmesine göre değişir; kesin bir süre veya fiyat taahhüdü verilmez."
  },
  {
    question: "Teklif hangi fiyat yapısına göre hazırlanır?",
    answer:
      "Fiyat yapısı, sözleşme süresi ve ödeme koşulları tesisin tüketim profiline ve teklif tarihindeki piyasa koşullarına göre belirlenir. Bu sayfada fiyat veya indirim oranı yayınlamıyoruz; piyasa koşulları değiştiği için teklif yalnızca talep sonrası ve yazılı olarak sunulur."
  },
  {
    question: "Başka tedarikçilerle karşılaştırma yapıyor musunuz?",
    answer:
      "Teklifimiz yalnızca Uludağ Elektrik'in koşullarını içerir. Karar vermeden önce başka tedarikçilerin tekliflerini de almanızı ve sözleşme şartlarını birlikte değerlendirmenizi öneririz."
  },
  {
    question: "Talep göndermek sözleşme veya taahhüt oluşturur mu?",
    answer:
      "Hayır. Form bir ön görüşme ve teklif talebidir; tedarik sözleşmesi yalnızca teklifi kabul etmeniz ve tedarikçiyle imzalamanız halinde oluşur."
  }
];

const steps = [
  {
    icon: ClipboardList,
    title: "Tüketim bilgilerinizi paylaşın",
    text: "Formda şirket ve tesis bilgilerinizi, yaklaşık aylık fatura aralığınızı ve tesis türünüzü belirtin. İlk aşamada ayrıntılı belge gerekmez."
  },
  {
    icon: FileText,
    title: "Fatura ve abone bilgilerini iletin",
    text: "Sizinle iletişime geçildiğinde son 12 aya ait faturalar, abone bilgileri ve mevcut tedarikçi sözleşmenizin bitiş tarihi istenir."
  },
  {
    icon: Scale,
    title: "Yazılı teklifi değerlendirin",
    text: "Teklif fiyat yapısı, sözleşme süresi, ödeme ve çıkış koşullarıyla birlikte sunulur. Kararınızı vermeden önce koşulları kendi hesaplarınızla karşılaştırabilirsiniz."
  },
  {
    icon: Sun,
    title: "Gerekirse GES/HES ile birlikte düşünün",
    text: "Tüketiminizi destekleyecek GES veya HES seçeneklerini ayrı bir çalışma olarak değerlendirebiliriz; bu, tedarik teklifinden bağımsızdır."
  }
];

const checklist = [
  "Fiyat yapısı: sabit fiyat mı, piyasa fiyatına endeksli mi; hangi kalemlerin teklife dahil olduğu",
  "Sözleşme süresi, yenileme ve erken çıkış koşulları",
  "Ödeme vadesi, teminat ve gecikme koşulları",
  "Tüketim tahmininden sapma halinde uygulanacak şartlar",
  "Dağıtım, vergi ve diğer fatura kalemlerinin tedarik bedelinden ayrı gösterilip gösterilmediği",
  "Mevcut tedarikçi sözleşmenizin sona erme tarihi ve geçiş süreci"
];

export async function generateStaticParams() {
  return [{ locale: "tr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "tr") return {};

  return buildMetadata({
    locale: "tr",
    path: "/elektrik-tedarigi",
    hasTranslation: false,
    title: "Elektrik Tedariği Teklifi | Uludağ Elektrik Yetkili Satış Acentesi | Öztoprak Enerji",
    description:
      "Sanayi ve yüksek tüketimli işletmeler için Uludağ Elektrik yetkili satış acentesi olarak elektrik tedariği teklifi: fatura ve tüketim bilgilerinize göre yazılı teklif ve sözleşme koşulları."
  });
}

export default async function ElectricitySupplyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== "tr") notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs
            locale="tr"
            items={[{ label: "Sanayi Enerji Çözümleri", href: "/tr/sanayi-enerji-cozumleri" }, { label: "Elektrik Tedariği" }]}
          />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-energy-500">Elektrik tedarik danışmanlığı ve Uludağ Elektrik teklifi</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">
            Yüksek Tüketimli İşletmeler İçin Elektrik Tedariği Teklifi
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            Tüketim profilinize ve fatura bilgilerinize göre elektrik tedariği teklifi hazırlıyoruz. Teklifler yazılı olarak sunulur; sözleşme ve koşullar Uludağ Elektrik ile sizin aranızda kurulur.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#teklif-formu"
              className="inline-flex items-center gap-2 rounded-md bg-energy-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-glow transition hover:bg-white"
            >
              Teklif talep edin <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/tr/industrial-bill-review"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-energy-500 hover:text-energy-500"
            >
              Fatura ön incelemesi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Teklif süreci nasıl işler?</h2>
            <p className="mt-4 text-lg leading-8 text-steel">
              Elektrik maliyeti tek bir fiyattan ibaret değildir; tüketim profili, sözleşme koşulları ve fatura kalemleri birlikte değerlendirilmelidir. Bu sayfada fiyat veya indirim oranı yayınlamıyoruz; teklif, tesisinizin bilgilerine göre hazırlanır.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="premium-card rounded-lg p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-energy-500">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">Teklifi değerlendirirken</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Hangi koşullara bakmalısınız?</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-steel">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-energy-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-energy-500/25 bg-energy-500/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">Önemli açıklama</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Rolümüz ve sınırlarımız</h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              Öztoprak Enerji elektrik tedarikçisi değildir; Uludağ Elektrik&apos;in yetkili satış acentesi olarak teklif sunar. Tedarik sözleşmesinin tarafı Uludağ Elektrik&apos;tir. Teklifimiz yalnızca Uludağ Elektrik&apos;in koşullarını içerir; karar vermeden önce başka tedarikçilerin tekliflerini de almanızı öneririz.
            </p>
            <p className="mt-4 text-sm leading-7 text-steel">
              Tasarruf, fiyat veya indirim garantisi verilmez. Serbest tüketici olma şartı EPDK tarafından belirlenir ve değişebilir; tesisinizin uygunluğunu resmi kaynaklardan doğrulayın.
            </p>
            <Link
              href="/tr/sanayi-enerji-cozumleri"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-energy-500 hover:text-white"
            >
              Sanayi enerji çözümlerinin tamamı <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section id="teklif-formu" className="bg-navy-900 py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-2 text-3xl font-bold text-white">Elektrik tedariği teklifi talep edin</h2>
          <p className="mb-8 text-sm text-steel">
            Tesisinizin yaklaşık tüketim aralığını ve türünü paylaşın; sizinle iletişime geçip teklif için gerekli bilgileri netleştirelim. Form bir sözleşme veya taahhüt oluşturmaz.
          </p>
          <IndustrialLeadForm locale="tr" variant="supply" />
        </Container>
      </section>

      <section className="bg-navy-950 py-20">
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
