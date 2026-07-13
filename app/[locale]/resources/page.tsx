import type { Metadata } from "next";
import { Download, FileText, ClipboardCheck, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { contactPath } from "@/lib/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/resources",
    title: en ? "Free Technical Resources | Oztoprak Energy" : "Ücretsiz Teknik Kaynaklar | Öztoprak Enerji",
    description: en
      ? "Free engineering checklists, due diligence templates, and technical guides for renewable energy investors, developers, and EPC teams operating in Turkey."
      : "Türkiye'deki yenilenebilir enerji yatırımcıları, geliştiriciler ve EPC ekipleri için ücretsiz mühendislik kontrol listeleri, teknik durum tespiti şablonları ve teknik rehberler."
  });
}

const resources = {
  en: [
    {
      icon: ClipboardCheck,
      title: "Technical Due Diligence Checklist",
      description:
        "A 47-point checklist for solar and hydropower technical due diligence. Covers EPC documentation, commissioning evidence, performance records, grid compliance, O&M quality, and red flag indicators. Used by investment teams and lender engineers on Turkish renewable energy transactions.",
      format: "PDF · 3 pages",
      category: "Due Diligence",
      ctaLabel: "Request Free Download",
      href: "/en/contact?subject=TDD+Checklist+Request",
      highlight: true
    },
    {
      icon: Zap,
      title: "Reactive Power Penalty Analysis Template",
      description:
        "Excel template for calculating your current TEİAŞ reactive power penalty exposure. Input 12 months of invoice data. Outputs: monthly penalty breakdown, annual total, power factor trend, and estimated payback period on a compensation upgrade.",
      format: "Excel · 1 sheet",
      category: "Grid Compliance",
      ctaLabel: "Request Free Template",
      href: "/en/contact?subject=Reactive+Power+Template+Request",
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: "Owner's Engineering Scope Checklist",
      description:
        "What should an Owner's Engineer actually do on a renewable energy project? This checklist covers pre-construction review, construction-phase inspection hold points, commissioning witness tests, and handover document requirements. Use it to evaluate your current OE scope or benchmark a potential engagement.",
      format: "PDF · 2 pages",
      category: "Owner's Engineering",
      ctaLabel: "Request Free Download",
      href: "/en/contact?subject=OE+Scope+Checklist+Request",
      highlight: false
    },
    {
      icon: FileText,
      title: "Grid Compliance Audit Checklist",
      description:
        "A structured checklist covering the most common TEİAŞ grid compliance gaps in operating solar and hydropower plants: protection relay settings, reactive power capability, FRT performance, SCADA telemetry accuracy, and documentation completeness.",
      format: "PDF · 2 pages",
      category: "Grid Compliance",
      ctaLabel: "Request Free Download",
      href: "/en/contact?subject=Grid+Compliance+Checklist+Request",
      highlight: false
    },
    {
      icon: ClipboardCheck,
      title: "FAT & SAT Inspection Checklist",
      description:
        "Two-part acceptance test checklist aligned with IEC 62446-1 requirements. Part 1 covers Factory Acceptance Test items for inverters and transformers. Part 2 covers Site Acceptance Test scope for solar plant DC/AC commissioning including string testing, protection relay verification, and SCADA commissioning.",
      format: "PDF · 4 pages",
      category: "Commissioning",
      ctaLabel: "Request Free Download",
      href: "/en/contact?subject=FAT+SAT+Checklist+Request",
      highlight: false
    },
    {
      icon: FileText,
      title: "EPC Tender Technical Review Guide",
      description:
        "A practical guide to reviewing EPC tender submissions from a technical risk perspective. Covers scope gap identification, interface risk assessment, performance guarantee enforceability, liquidated damages adequacy, and contractor qualification review. Intended for developer and owner teams evaluating multiple EPC bids.",
      format: "PDF · 4 pages",
      category: "EPC Advisory",
      ctaLabel: "Request Free Download",
      href: "/en/contact?subject=EPC+Tender+Review+Guide+Request",
      highlight: false
    }
  ],
  tr: [
    {
      icon: ClipboardCheck,
      title: "Teknik Durum Tespiti Kontrol Listesi",
      description:
        "GES ve HES teknik durum tespiti için 47 maddelik kontrol listesi. EPC dokümantasyonu, devreye alma kanıtları, performans kayıtları, şebeke uyumu, O&M kalitesi ve kırmızı bayrak göstergelerini kapsar. Türk yenilenebilir enerji işlemlerinde yatırım ekipleri ve kredi kuruluşu mühendisleri tarafından kullanılmaktadır.",
      format: "PDF · 3 sayfa",
      category: "Teknik Durum Tespiti",
      ctaLabel: "Ücretsiz İndirme İste",
      href: "/tr/iletisim?subject=TDD+Kontrol+Listesi+Talebi",
      highlight: true
    },
    {
      icon: Zap,
      title: "Reaktif Güç Ceza Analizi Şablonu",
      description:
        "Mevcut TEİAŞ reaktif güç ceza maruziyetinizi hesaplamak için Excel şablonu. 12 aylık fatura verisini girin. Çıktılar: aylık ceza dökümü, yıllık toplam, güç faktörü trendi ve kompanzasyon güncellemesinin tahmini geri ödeme süresi.",
      format: "Excel · 1 sayfa",
      category: "Şebeke Uyumu",
      ctaLabel: "Ücretsiz Şablon İste",
      href: "/tr/iletisim?subject=Reaktif+Guc+Sablonu+Talebi",
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: "İşveren Mühendisliği Kapsam Kontrol Listesi",
      description:
        "İşveren Mühendisi gerçekte ne yapmalıdır? Bu kontrol listesi ön yapım incelemesi, inşaat aşaması denetim durdurma noktaları, devreye alma tanıklık testleri ve teslim belgesi gereksinimlerini kapsar. Mevcut İM kapsamınızı değerlendirmek veya olası bir çalışmayı kıyaslamak için kullanın.",
      format: "PDF · 2 sayfa",
      category: "İşveren Mühendisliği",
      ctaLabel: "Ücretsiz İndirme İste",
      href: "/tr/iletisim?subject=IM+Kapsam+Kontrol+Listesi+Talebi",
      highlight: false
    },
    {
      icon: FileText,
      title: "Şebeke Uyum Denetimi Kontrol Listesi",
      description:
        "İşletmedeki GES ve HES'lerdeki en yaygın TEİAŞ şebeke uyumu boşluklarını kapsayan yapılandırılmış kontrol listesi: koruma rölesi ayarları, reaktif güç kabiliyeti, FRT performansı, SCADA telemetri doğruluğu ve dokümantasyon tamlığı.",
      format: "PDF · 2 sayfa",
      category: "Şebeke Uyumu",
      ctaLabel: "Ücretsiz İndirme İste",
      href: "/tr/iletisim?subject=Sebeke+Uyum+Kontrol+Listesi+Talebi",
      highlight: false
    },
    {
      icon: ClipboardCheck,
      title: "FAT ve SAT Denetim Kontrol Listesi",
      description:
        "IEC 62446-1 gereksinimlerine uygun iki bölümlü kabul testi kontrol listesi. Bölüm 1 invertörler ve transformatörler için Fabrika Kabul Testi kalemlerini kapsar. Bölüm 2 string testi, koruma rölesi doğrulaması ve SCADA devreye alması dahil GES DC/AC devreye alma için Saha Kabul Testi kapsamını içerir.",
      format: "PDF · 4 sayfa",
      category: "Devreye Alma",
      ctaLabel: "Ücretsiz İndirme İste",
      href: "/tr/iletisim?subject=FAT+SAT+Kontrol+Listesi+Talebi",
      highlight: false
    },
    {
      icon: FileText,
      title: "EPC İhale Teknik İnceleme Rehberi",
      description:
        "EPC ihale tekliflerini teknik risk perspektifinden incelemek için pratik rehber. Kapsam boşluğu tespiti, arayüz riski değerlendirmesi, performans garantisi uygulanabilirliği, gecikme cezası yeterliliği ve yüklenici yeterlilik incelemesini kapsar. Birden fazla EPC teklifini değerlendiren geliştirici ve işveren ekipleri için tasarlanmıştır.",
      format: "PDF · 4 sayfa",
      category: "EPC Danışmanlığı",
      ctaLabel: "Ücretsiz İndirme İste",
      href: "/tr/iletisim?subject=EPC+Ihale+Inceleme+Rehberi+Talebi",
      highlight: false
    }
  ]
};

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  const items = resources[locale];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs
            locale={locale}
            items={[{ label: en ? "Resources" : "Kaynaklar" }]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Free Technical Resources" : "Ücretsiz Teknik Kaynaklar"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en
              ? "Engineering Checklists and Technical Guides"
              : "Mühendislik Kontrol Listeleri ve Teknik Rehberler"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Practical engineering tools developed from field inspections and technical due diligence work across Turkish renewable energy projects. Free to download — no subscription required."
              : "Türk yenilenebilir enerji projelerinde saha denetimleri ve teknik durum tespiti çalışmalarından geliştirilen pratik mühendislik araçları. Abonelik gerekmeksizin ücretsiz indirme imkânı."}
          </p>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((resource) => {
              const Icon = resource.icon;
              return (
                <article
                  key={resource.title}
                  className={`flex flex-col rounded-xl border p-7 transition duration-300 ${
                    resource.highlight
                      ? "border-energy-500/50 bg-energy-500/[0.07] shadow-[0_0_40px_rgba(47,183,255,0.12)]"
                      : "border-white/10 bg-white/[0.04] hover:border-energy-500/30 hover:bg-white/[0.06]"
                  }`}
                >
                  {resource.highlight && (
                    <span className="mb-4 inline-block rounded-full bg-energy-500 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-navy-950">
                      {en ? "Most Downloaded" : "En Çok İndirilen"}
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-steel">
                      {resource.category}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-white">{resource.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-steel">{resource.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs text-steel/70">{resource.format}</span>
                    <Link
                      href={resource.href}
                      className="flex items-center gap-2 rounded-md bg-energy-500 px-4 py-2 text-xs font-bold text-navy-950 shadow-glow hover:bg-white transition"
                    >
                      <Download className="h-3.5 w-3.5" />
                      {resource.ctaLabel}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
              {en ? "Custom Technical Assessment" : "Özel Teknik Değerlendirme"}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {en
                ? "Need a checklist tailored to your project?"
                : "Projenize özel bir kontrol listesine mi ihtiyacınız var?"}
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm leading-7 text-steel">
              {en
                ? "These checklists cover the most common scenarios. Complex transactions — multi-asset portfolios, HEPP relicensing, EPC disputes — often require a custom scope. Contact us to discuss what's right for your situation."
                : "Bu kontrol listeleri en yaygın senaryoları kapsar. Çok varlıklı portföyler, HES yeniden lisanslama, EPC uyuşmazlıkları gibi karmaşık işlemler genellikle özel kapsam gerektirir. Durumunuza uygun olanı tartışmak için bizimle iletişime geçin."}
            </p>
            <Link
              href={contactPath(locale)}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition"
            >
              {en ? "Request Custom Assessment" : "Özel Değerlendirme İste"}
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
