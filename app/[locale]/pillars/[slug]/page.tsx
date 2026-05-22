import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/programmatic-page";
import { getCluster, getPillar, getPillars } from "@/content/programmatic-seo";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { pillarPageSchema } from "@/lib/programmatic-schema";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getPillars(locale).map((pillar) => ({ locale, slug: pillar.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const pillar = getPillar(locale, slug);
  if (!pillar) return {};
  const index = getPillars(locale).findIndex((item) => item.slug === slug);
  const translated = getPillars(alternateLocale(locale))[index];
  return buildMetadata({ locale, path: `/pillars/${slug}`, alternatePath: translated ? `/pillars/${translated.slug}` : undefined, title: pillar.title, description: pillar.description });
}

export default async function PillarPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const pillar = getPillar(locale, slug);
  if (!pillar) notFound();
  const clusters = pillar.clusters.map((clusterSlug) => getCluster(locale, clusterSlug)).filter(Boolean);
  const faqs = locale === "en"
    ? [
        { question: "What is the purpose of this pillar page?", answer: "It organizes broad renewable energy consulting demand into specific clusters, services, problems and articles that match real technical buying journeys." },
        { question: "How does it support trust?", answer: "It ties every path back to technical evidence, power plant experience, decision-ready reporting and owner-side engineering judgment." },
        { question: "How should it scale?", answer: "Add new clusters, services, locations and problem entities in structured content, then let the dynamic routes generate pages and links." }
      ]
    : [
        { question: "Bu pillar sayfanın amacı nedir?", answer: "Geniş yenilenebilir enerji danışmanlığı talebini gerçek teknik satın alma yolculuklarına uygun kümelere, hizmetlere, problemlere ve yazılara ayırır." },
        { question: "Güveni nasıl destekler?", answer: "Her yolu teknik kanıta, santral deneyimine, karara hazır raporlamaya ve işveren tarafı mühendislik yorumuna bağlar." },
        { question: "Nasıl ölçeklenmelidir?", answer: "Yeni kümeler, hizmetler, lokasyonlar ve problem varlıkları yapılandırılmış içeriğe eklenir; dinamik rotalar sayfa ve linkleri üretir." }
      ];

  return (
    <ProgrammaticPage
      locale={locale}
      title={pillar.title}
      eyebrow={locale === "en" ? "SEO Pillar Page" : "SEO Pillar Sayfası"}
      description={pillar.description}
      intro={
        locale === "en"
          ? `${pillar.title} is the senior hub for a group of related consulting themes. It gives buyers a clear route from strategic renewable energy decisions into specific EPC, commissioning, O&M, audit and owner-engineering scopes.`
          : `${pillar.title} ilişkili danışmanlık temalarının üst seviye merkezidir. Teknik alıcılara stratejik yenilenebilir enerji kararlarından belirli EPC, devreye alma, O&M, denetim ve işveren mühendisliği kapsamlarına net bir geçiş sağlar.`
      }
      breadcrumbs={[{ label: locale === "en" ? "Pillars" : "Pillar Sayfalar", href: `/${locale}/pillars` }, { label: pillar.title }]}
      schema={[...pillarPageSchema(locale, pillar), faqSchema(faqs)]}
      bullets={[
        locale === "en" ? "Acts as the parent hub for topic clusters, service detail pages, problem pages and blog posts." : "Konu kümeleri, hizmet detay sayfaları, problem sayfaları ve blog yazıları için ana merkez olarak çalışır.",
        locale === "en" ? "Strengthens topical authority with consistent crawl paths and semantic relationships." : "Tutarlı tarama yolları ve semantik ilişkilerle konu otoritesini güçlendirir.",
        ...pillar.primaryServices
      ]}
      sections={[
        {
          heading: locale === "en" ? "Pillar page role" : "Pillar sayfanın rolü",
          content: locale === "en"
            ? "The pillar page is not a generic category archive. It explains how strategic technical decisions connect to detailed services, problem diagnosis, location pages and educational content."
            : "Pillar sayfa genel bir kategori arşivi değildir. Stratejik teknik kararların detay hizmetlere, problem teşhisine, lokasyon sayfalarına ve eğitici içeriklere nasıl bağlandığını açıklar."
        },
        {
          heading: locale === "en" ? "Authority and E-E-A-T logic" : "Otorite ve E-E-A-T mantığı",
          content: locale === "en"
            ? "The architecture foregrounds field experience, project metrics, evidence-based reporting and consultant judgment so pages feel useful to technical buyers rather than mass-generated."
            : "Mimari saha deneyimini, proje metriklerini, kanıta dayalı raporlamayı ve danışman mühendislik yorumunu öne çıkarır; böylece sayfalar kitlesel üretilmiş değil teknik alıcı için faydalı görünür."
        }
      ]}
      deliverables={locale === "en"
        ? ["Pillar-to-cluster architecture", "Priority service pathways", "Technical buyer navigation", "Crawlable internal link hub"]
        : ["Pillar-küme mimarisi", "Öncelikli hizmet yolları", "Teknik alıcı navigasyonu", "Taranabilir iç link merkezi"]}
      faqs={faqs}
      cta={locale === "en" ? `Start from ${pillar.title} and request a focused consultation when the technical path is clear.` : `${pillar.title} sayfasından başlayın ve teknik yol netleştiğinde odaklı danışmanlık talep edin.`}
      primaryLinks={[
        ...clusters.map((cluster) => cluster ? { title: cluster.title, href: `/${locale}/topics/${cluster.slug}`, description: cluster.description } : null).filter((item): item is { title: string; href: string; description: string } => Boolean(item)),
        ...pillar.primaryServices.map((slug) => {
          const service = getService(locale, slug);
          return service ? { title: service.title, href: `/${locale}/services/${service.slug}`, description: service.description } : null;
        }).filter((item): item is { title: string; href: string; description: string } => Boolean(item))
      ]}
      relatedSeed={{ services: pillar.primaryServices, exclude: pillar.slug }}
    />
  );
}
