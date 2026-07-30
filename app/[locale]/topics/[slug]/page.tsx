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
        { question: "Which technical scopes should be reviewed together?", answer: "The answer depends on the decision, but EPC, commissioning, performance, O&M, grid and evidence risks often need to be assessed together." },
        { question: "How are related engineering issues connected?", answer: "Services, operating problems and technical evidence are connected according to their effect on the same project or asset decision." },
        { question: "How should buyers use this page?", answer: "Use it as a navigation hub to move from a broad technical concern to a specific service, problem diagnosis or article." }
      ]
    : [
        { question: "Hangi teknik kapsamlar birlikte incelenmelidir?", answer: "Karara göre değişmekle birlikte EPC, devreye alma, performans, O&M, şebeke ve kanıt risklerinin çoğu zaman birlikte değerlendirilmesi gerekir." },
        { question: "Anahtar kelime doldurmadan nasıl kaçınır?", answer: "Sayfalar aynı ifadeyi tekrar ederek değil; hizmet, problem ve kanıt ilişkileriyle birbirine bağlanır." },
        { question: "Teknik alıcılar bu sayfayı nasıl kullanmalı?", answer: "Geniş bir teknik endişeden belirli bir hizmete, problem teşhisine veya makaleye geçmek için navigasyon merkezi olarak kullanın." }
      ];

  return (
    <ProgrammaticPage
      locale={locale}
      title={cluster.title}
      eyebrow={locale === "en" ? "Engineering Knowledge Area" : "Mühendislik Bilgi Alanı"}
      description={cluster.description}
      intro={
        locale === "en"
          ? `${cluster.title} connects services, operating problems and technical evidence that should be considered together before a power plant investment, project or operating decision.`
          : `${cluster.title}; enerji santrali yatırımı, proje veya işletme kararı öncesinde birlikte değerlendirilmesi gereken hizmetleri, işletme problemlerini ve teknik kanıtları bir araya getirir.`
      }
      breadcrumbs={[{ label: locale === "en" ? "Topics" : "Konular", href: `/${locale}/topics` }, { label: cluster.title }]}
      schema={[...topicClusterSchema(locale, cluster), faqSchema(faqs)]}
      bullets={[
        locale === "en" ? "Groups services, problems and articles around one semantic energy-sector theme." : "Hizmetleri, problemleri ve yazıları tek bir semantik enerji sektörü teması etrafında toplar.",
        locale === "en" ? "Helps owners move from a broad concern to the right technical scope." : "İşverenin geniş bir endişeden doğru teknik kapsama ilerlemesini sağlar.",
        ...cluster.blogCategories
      ]}
      sections={[
        {
          heading: locale === "en" ? "Why these issues belong together" : "Bu konular neden birlikte ele alınır",
          content: locale === "en"
            ? "Power plant decisions rarely sit inside one isolated service. EPC risk, commissioning quality, O&M discipline and grid reliability influence each other, so the cluster groups pages that should be reviewed together."
            : "Santral kararları çoğu zaman tek bir hizmet içinde izole kalmaz. EPC riski, devreye alma kalitesi, işletme bakım disiplini ve şebeke güvenilirliği birbirini etkiler; bu nedenle konu kümesi birlikte incelenmesi gereken sayfaları gruplar."
        },
        {
          heading: locale === "en" ? "How to use this engineering area" : "Bu mühendislik alanı nasıl kullanılır",
          content: locale === "en"
            ? "Begin with the owner decision or operating symptom, review the related service and problem pages, then use the technical articles to understand the evidence and recommended actions."
            : "İşveren kararı veya işletme belirtisiyle başlayın; ilgili hizmet ve problem sayfalarını inceleyin, ardından kanıtları ve önerilen aksiyonları anlamak için teknik yazılara ilerleyin."
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
