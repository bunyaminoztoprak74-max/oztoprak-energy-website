import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/programmatic-page";
import { getCluster, getClusters, getPillar } from "@/content/programmatic-seo";
import { getService } from "@/content/services";
import { getPost } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { topicClusterSchema } from "@/lib/programmatic-schema";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getClusters(locale).map((cluster) => ({ locale, slug: cluster.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const cluster = getCluster(locale, slug);
  if (!cluster) return {};
  const index = getClusters(locale).findIndex((item) => item.slug === slug);
  const translated = getClusters(alternateLocale(locale))[index];
  return buildMetadata({ locale, path: `/topics/${slug}`, alternatePath: translated ? `/topics/${translated.slug}` : undefined, title: cluster.title, description: cluster.description });
}

export default async function TopicPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const cluster = getCluster(locale, slug);
  if (!cluster) notFound();
  const pillar = getPillar(locale, cluster.pillar);
  const faqs = locale === "en"
    ? [
        { question: "Is this cluster only for SEO?", answer: "No. The cluster is also a practical consulting map showing which technical scopes should be considered together before a project or asset decision." },
        { question: "How does it avoid keyword stuffing?", answer: "Pages are linked by service, problem and evidence relationships rather than repeating the same keyword phrase across every section." },
        { question: "How should buyers use this page?", answer: "Use it as a navigation hub to move from a broad technical concern to a specific service, problem diagnosis or article." }
      ]
    : [
        { question: "Bu küme yalnızca SEO için mi?", answer: "Hayır. Küme aynı zamanda proje veya varlık kararı öncesinde hangi teknik kapsamların birlikte düşünülmesi gerektiğini gösteren pratik danışmanlık haritasıdır." },
        { question: "Anahtar kelime doldurmadan nasıl kaçınır?", answer: "Sayfalar aynı ifadeyi tekrar ederek değil; hizmet, problem ve kanıt ilişkileriyle birbirine bağlanır." },
        { question: "Teknik alıcılar bu sayfayı nasıl kullanmalı?", answer: "Geniş bir teknik endişeden belirli bir hizmete, problem teşhisine veya makaleye geçmek için navigasyon merkezi olarak kullanın." }
      ];

  return (
    <ProgrammaticPage
      locale={locale}
      title={cluster.title}
      eyebrow={locale === "en" ? "Semantic Topic Cluster" : "Semantik Konu Kümesi"}
      description={cluster.description}
      intro={
        locale === "en"
          ? `${cluster.title} connects service pages, problem pages and technical articles into one coherent engineering theme. This helps search engines and human buyers understand how Oztoprak Energy evaluates risk, performance and project decisions across related power plant scopes.`
          : `${cluster.title}; hizmet sayfalarını, problem sayfalarını ve teknik yazıları tek bir tutarlı mühendislik teması altında bağlar. Bu yapı hem arama motorlarının hem de teknik alıcıların Öztoprak Enerji'nin ilgili santral kapsamlarında risk, performans ve proje kararlarını nasıl değerlendirdiğini anlamasına yardımcı olur.`
      }
      breadcrumbs={[{ label: locale === "en" ? "Topics" : "Konular", href: `/${locale}/topics` }, { label: cluster.title }]}
      schema={[...topicClusterSchema(locale, cluster), faqSchema(faqs)]}
      bullets={[
        locale === "en" ? "Groups services, problems and articles around one semantic energy-sector theme." : "Hizmetleri, problemleri ve yazıları tek bir semantik enerji sektörü teması etrafında toplar.",
        locale === "en" ? "Supports pillar pages with consistent internal links and topical depth." : "Tutarlı iç linkler ve konu derinliği ile pillar sayfaları destekler.",
        ...cluster.blogCategories
      ]}
      sections={[
        {
          heading: locale === "en" ? "Why this topic cluster exists" : "Bu konu kümesi neden var",
          content: locale === "en"
            ? "Power plant decisions rarely sit inside one isolated service. EPC risk, commissioning quality, O&M discipline and grid reliability influence each other, so the cluster groups pages that should be reviewed together."
            : "Santral kararları çoğu zaman tek bir hizmet içinde izole kalmaz. EPC riski, devreye alma kalitesi, işletme bakım disiplini ve şebeke güvenilirliği birbirini etkiler; bu nedenle konu kümesi birlikte incelenmesi gereken sayfaları gruplar."
        },
        {
          heading: locale === "en" ? "Internal linking logic" : "İç linkleme mantığı",
          content: locale === "en"
            ? "The cluster links downward to detailed services and problem pages, sideways to related blog categories, and upward to a pillar page. This creates crawl depth without forcing repetitive keyword blocks."
            : "Küme detay hizmet ve problem sayfalarına aşağı yönlü, ilgili blog kategorilerine yatay, pillar sayfaya yukarı yönlü link verir. Böylece tekrarlı anahtar kelime blokları oluşturmadan tarama derinliği sağlar."
        }
      ]}
      deliverables={locale === "en"
        ? ["Pillar-to-cluster internal link map", "Service and problem page grouping", "Related blog category pathways", "Search-intent coverage view"]
        : ["Pillar-küme iç link haritası", "Hizmet ve problem sayfası gruplaması", "İlgili blog kategori yolları", "Arama niyeti kapsama görünümü"]}
      faqs={faqs}
      cta={locale === "en" ? `Use this ${cluster.title.toLowerCase()} to choose the most relevant engineering consultation path.` : `${cluster.title} üzerinden en ilgili mühendislik danışmanlığı yolunu seçin.`}
      primaryLinks={[
        ...(pillar ? [{ title: pillar.title, href: `/${locale}/pillars/${pillar.slug}`, description: pillar.description }] : []),
        ...cluster.services.map((slug) => {
          const service = getService(locale, slug);
          return service ? { title: service.title, href: `/${locale}/services/${service.slug}`, description: service.description } : null;
        }).filter((item): item is { title: string; href: string; description: string } => Boolean(item)),
        ...cluster.blogCategories.map((category) => {
          const post = getPost(locale, category);
          return post ? { title: post.title, href: `/${locale}/blog/${post.slug}`, description: post.description } : null;
        }).filter((item): item is { title: string; href: string; description: string } => Boolean(item))
      ]}
      relatedSeed={{ services: cluster.services, problems: cluster.problems, categories: cluster.blogCategories, exclude: cluster.slug }}
    />
  );
}
