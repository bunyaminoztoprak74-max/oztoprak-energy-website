import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/programmatic-page";
import { getProblem, getProblems, getClusters } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { problemPageSchema } from "@/lib/programmatic-schema";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getProblems(locale).map((problem) => ({ locale, slug: problem.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const problem = getProblem(locale, slug);
  if (!problem) return {};
  const index = getProblems(locale).findIndex((item) => item.slug === slug);
  const translated = getProblems(alternateLocale(locale))[index];
  return buildMetadata({ locale, path: `/problems/${slug}`, alternatePath: translated ? `/problems/${translated.slug}` : undefined, title: problem.label, description: problem.description });
}

export default async function ProblemPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const problem = getProblem(locale, slug);
  if (!problem) notFound();
  const clusters = getClusters(locale).filter((cluster) => cluster.problems.includes(problem.slug));
  const faqs = locale === "en"
    ? [
        {
          question: `How is ${problem.label} diagnosed?`,
          answer: "Diagnosis starts with operating evidence, event history, EPC boundaries and site observations. The goal is to separate symptoms from root causes before recommending corrective work."
        },
        {
          question: "Is this suitable for an operating plant?",
          answer: "Yes. The review can be structured around live operation, outage windows, available records and owner reporting requirements."
        },
        {
          question: "What does the owner receive?",
          answer: "The owner receives a prioritized technical view of likely causes, evidence gaps, risk level and recommended next engineering actions."
        }
      ]
    : [
        {
          question: `${problem.label} nasıl teşhis edilir?`,
          answer: "Teşhis; işletme kanıtları, olay geçmişi, EPC sınırları ve saha gözlemleriyle başlar. Amaç düzeltici iş önermeden önce belirti ile kök nedeni ayırmaktır."
        },
        {
          question: "Bu çalışma çalışan santraller için uygun mu?",
          answer: "Evet. İnceleme canlı işletme, duruş pencereleri, mevcut kayıtlar ve işveren raporlama ihtiyacına göre yapılandırılabilir."
        },
        {
          question: "İşveren hangi çıktıyı alır?",
          answer: "İşveren olası nedenler, kanıt boşlukları, risk seviyesi ve önerilen sonraki mühendislik aksiyonları için öncelikli teknik görünüm alır."
        }
      ];

  return (
    <ProgrammaticPage
      locale={locale}
      title={problem.label}
      eyebrow={locale === "en" ? "Problem-Based Engineering Page" : "Problem Odaklı Mühendislik Sayfası"}
      description={problem.description}
      intro={
        locale === "en"
          ? `${problem.label} is rarely solved by replacing a component or repeating a generic checklist. Oztoprak Energy reviews the technical evidence behind the symptom, checks how EPC, commissioning, protection and O&M decisions interact, and turns the finding into a clear owner-side action plan.`
          : `${problem.label} çoğu zaman yalnızca bir ekipmanı değiştirerek veya genel bir kontrol listesini tekrarlayarak çözülmez. Öztoprak Enerji belirtinin arkasındaki teknik kanıtı inceler, EPC, devreye alma, koruma ve işletme bakım kararlarının nasıl etkileştiğini kontrol eder ve bulguyu işveren tarafı net aksiyon planına dönüştürür.`
      }
      breadcrumbs={[{ label: locale === "en" ? "Problems" : "Problemler", href: `/${locale}/problems` }, { label: problem.label }]}
      schema={[...problemPageSchema(locale, problem), faqSchema(faqs)]}
      bullets={[
        locale === "en" ? "Maps the technical symptom to likely EPC, commissioning, O&M or grid causes." : "Teknik belirtiyi olası EPC, devreye alma, O&M veya şebeke nedenleriyle eşleştirir.",
        locale === "en" ? "Builds internal links toward matching services, topic clusters and technical articles." : "İlgili hizmetlere, konu kümelerine ve teknik yazılara iç linkler oluşturur.",
        ...problem.keywords
      ]}
      sections={[
        {
          heading: locale === "en" ? "Root-cause assessment" : "Kök neden değerlendirmesi",
          content: locale === "en"
            ? "The review distinguishes operating symptoms from design gaps, incomplete commissioning, weak maintenance routines, protection coordination issues and missing documentation."
            : "İnceleme; işletme belirtilerini tasarım boşlukları, eksik devreye alma, zayıf bakım rutinleri, koruma koordinasyon sorunları ve eksik dokümantasyondan ayırır."
        },
        {
          heading: locale === "en" ? "Evidence used for decision making" : "Karar için kullanılan kanıtlar",
          content: locale === "en"
            ? "Useful evidence includes SCADA trends, event logs, test records, outage reports, as-built drawings, maintenance history and owner/EPC correspondence."
            : "Kullanılan kanıtlar SCADA trendleri, olay kayıtları, test kayıtları, duruş raporları, as-built çizimler, bakım geçmişi ve işveren/EPC yazışmalarını içerebilir."
        },
        {
          heading: locale === "en" ? "Consultant recommendation logic" : "Danışman öneri mantığı",
          content: locale === "en"
            ? "Recommendations are ranked by production impact, safety, reliability, outage requirement, implementation difficulty and investment sensitivity."
            : "Öneriler üretim etkisi, emniyet, güvenilirlik, duruş ihtiyacı, uygulama zorluğu ve yatırım hassasiyetine göre sıralanır."
        }
      ]}
      deliverables={locale === "en"
        ? ["Root-cause hypothesis map", "Evidence gap list", "Risk-ranked corrective action plan", "Owner-ready technical summary"]
        : ["Kök neden hipotez haritası", "Kanıt boşluğu listesi", "Risk öncelikli düzeltici aksiyon planı", "İşveren için teknik özet"]}
      expertCommentary={locale === "en"
        ? "A plant problem should be described in the same language operators use during an outage: what changed, which protection operated, which unit was loaded, which alarm came first, and what evidence is missing. That sequence matters more than a polished assumption."
        : "Bir santral problemi, işletme ekibinin duruş sırasında kullandığı dille tarif edilmelidir: ne değişti, hangi koruma çalıştı, hangi ünite yüklüydü, ilk alarm neydi ve hangi kanıt eksik? Bu sıra, cilalı varsayımdan daha önemlidir."}
      fieldProblems={locale === "en"
        ? ["Alarm floods that hide the initiating event", "Outage reports without relay-event correlation", "Corrective work closed without post-action performance tracking", "Recurring faults normalized as ordinary operation"]
        : ["İlk olayı gizleyen alarm yoğunluğu", "Röle olayı korelasyonu olmayan duruş raporları", "Aksiyon sonrası performans takibi olmadan kapatılan düzeltici işler", "Normal işletme gibi kabul edilen tekrarlayan arızalar"]}
      recommendedActions={locale === "en"
        ? ["Create one event timeline from SCADA, relay and operator logs", "Rank likely causes by evidence strength before assigning CAPEX", "Identify which tests can be done online and which require outage", "Close each action with a measurable verification criterion"]
        : ["SCADA, röle ve operatör loglarından tek olay zaman çizelgesi oluşturun", "CAPEX atamadan önce olası nedenleri kanıt gücüne göre sıralayın", "Hangi testlerin online, hangilerinin duruşta yapılacağını belirleyin", "Her aksiyonu ölçülebilir doğrulama kriteriyle kapatın"]}
      faqs={faqs}
      cta={locale === "en" ? `Request an engineering review for ${problem.label.toLowerCase()} before the issue becomes a recurring production or reliability loss.` : `${problem.label} tekrarlayan üretim veya güvenilirlik kaybına dönüşmeden mühendislik incelemesi talep edin.`}
      conclusion={locale === "en"
        ? `${problem.label} should be handled as an evidence problem first and a repair problem second. When the evidence is structured correctly, the owner can decide what to fix, what to monitor, and what to challenge contractually.`
        : `${problem.label} önce kanıt problemi, sonra onarım problemi olarak ele alınmalıdır. Kanıt doğru yapılandırıldığında işveren neyin düzeltileceğini, neyin izleneceğini ve neyin sözleşmesel olarak sorgulanacağını belirleyebilir.`}
      primaryLinks={clusters.map((cluster) => ({ title: cluster.title, href: `/${locale}/topics/${cluster.slug}`, description: cluster.description }))}
      contextualLinks={[
        { title: locale === "en" ? "Technical audit services" : "Teknik denetim hizmetleri", href: `/${locale}/services/${locale === "en" ? "technical-audits-existing-power-plants" : "mevcut-santraller-icin-teknik-denetim"}`, description: locale === "en" ? "Independent asset review for evidence gaps and operating risks." : "Kanıt boşlukları ve işletme riskleri için bağımsız varlık incelemesi." },
        { title: locale === "en" ? "O&M performance improvement" : "İşletme bakım performans iyileştirme", href: `/${locale}/services/${locale === "en" ? "om-performance-improvement" : "isletme-bakim-performans-iyilestirme"}`, description: locale === "en" ? "Turn recurring issues into maintainable reliability actions." : "Tekrarlayan sorunları sürdürülebilir güvenilirlik aksiyonlarına dönüştürün." }
      ]}
      relatedSeed={{ problems: [problem.slug], categories: problem.keywords, exclude: problem.slug }}
    />
  );
}
