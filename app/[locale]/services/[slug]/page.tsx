import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { RelatedContent } from "@/components/related-content";
import { AuthorityMetrics } from "@/components/authority-metrics";
import { ConversionFunnel } from "@/components/conversion-funnel";
import { EngineeringVisualBlocks } from "@/components/engineering-visual-blocks";
import { StickyConsultationCta } from "@/components/sticky-consultation-cta";
import { getDictionary } from "@/content/dictionaries";
import { getService, getServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { servicesIndexPath } from "@/lib/routes";

function contactHref(locale: Locale) {
  return locale === "tr" ? "/tr/iletisim" : "/en/contact";
}

function serviceAuthoritySections(locale: Locale, service: NonNullable<ReturnType<typeof getService>>) {
  const en = locale === "en";
  const scopeText = service.scope.join(", ");
  const outcomesText = service.outcomes.join(", ");

  return en
    ? [
        {
          heading: `What ${service.title} Covers`,
          content: `${service.title} is not a generic advisory exercise. It is a structured engineering review for renewable energy owners, EPC contractors and investors who need decisions based on field evidence. The work connects site observations, commissioning documentation, power plant operations data, grid interface records and O&M history into one practical view of technical risk. For this scope, Oztoprak Energy typically reviews ${scopeText}. The objective is to identify what affects generation, availability, reliability, compliance and handover quality, then translate those findings into owner-ready decisions. This is especially valuable when hydropower consulting, solar energy consulting, HPP commissioning, power plant operations support or energy audit services must be understood by both technical and commercial stakeholders.`
        },
        {
          heading: "Technical Problems This Service Solves",
          content: `Renewable energy projects often lose value because commissioning evidence is incomplete, EPC interface ownership is unclear, equipment performance is not interpreted with operating context, or O&M routines are not connected to measured loss. In real plant reviews, the problem is rarely one isolated defect. It is usually a chain involving design assumptions, protection settings, control behavior, operator response, maintenance discipline and contract handover evidence. This service is designed to make that chain visible. Findings are linked to practical benefits such as ${outcomesText}. The result is a consulting output that can be used by asset managers, project directors, EPC teams, lenders and plant operations staff without needing to translate vague recommendations into engineering actions later.`
        },
        {
          heading: "Engineering Process",
          content: `The process begins with a focused briefing to understand the owner objective, commercial deadline, asset condition and decision risk. The second step is document and data review: design records, single-line diagrams, commissioning forms, performance tests, SCADA trends, outage logs, protection records and O&M plans. The third step is field or remote technical analysis, where observations are checked against actual operating behavior. The fourth step is risk ranking by generation impact, safety, grid compliance, cost urgency and implementation difficulty. The final step is a concise action plan. For EPC advisory and owner’s engineering, this may include scope clarifications, interface risks and commissioning readiness actions. For energy audits and plant performance reviews, it may include loss categories, corrective maintenance priorities and future monitoring recommendations.`
        },
        {
          heading: "Benefits for Owners, EPC Teams and Investors",
          content: `The main benefit is technical clarity before a project or asset decision becomes expensive to reverse. Owners gain an independent view of what is proven, what is assumed and what still needs verification. EPC teams gain a structured way to close technical gaps before they become delay claims or handover disputes. Investors gain a more realistic understanding of production risk, CAPEX exposure and asset recovery potential. For power plant operations teams, the value is practical: fewer unclear defects, better evidence discipline, stronger O&M priorities and a clearer link between engineering action and plant performance. This is how renewable energy consultancy becomes decision support rather than presentation material.`
        },
        {
          heading: "Recommended Deliverables",
          content: `A strong deliverable package usually includes an executive technical summary, a prioritized risk register, a finding-by-finding evidence table, recommendations ranked by urgency and impact, and a practical implementation roadmap. Depending on the asset, it can also include commissioning readiness comments, protection and grid interface observations, O&M maturity notes, performance loss categories and due diligence red flags. The most useful reports avoid keyword stuffing and generic marketing language. They state what was checked, what evidence supports the conclusion, what risk remains, and which engineering action should be taken next.`
        },
        {
          heading: "When to Request This Review",
          content: `The best time to request this review is before a technical decision becomes locked into schedule, contract or investment pressure. Typical triggers include EPC tender preparation, late-stage design review, first energization planning, repeated plant trips, unexplained generation loss, acquisition due diligence, refinancing, warranty discussions and owner concerns about O&M maturity. Early review protects value because it gives the project team time to correct evidence gaps, clarify responsibility and plan outages or tests properly. For existing assets, the review is also useful when production trends are declining, availability looks acceptable but revenue is weak, or site teams cannot explain recurring alarms with confidence.`
        },
        {
          heading: "Trust Indicators and Engineering Judgment",
          content: `For technical buyers, trust comes from disciplined reasoning, not broad claims. A credible review must show how each conclusion was reached, which evidence was used, what assumptions remain and how the recommendation affects safety, generation, reliability, compliance or cost. Oztoprak Energy positions each engagement around plant operations experience, EPC delivery awareness, commissioning discipline and practical power plant constraints. The goal is to help the owner ask better questions, challenge weak assumptions and act with enough technical confidence to protect long-term asset performance.`
        }
      ]
    : [
        {
          heading: `${service.title} Kapsamı`,
          content: `${service.title} genel bir danışmanlık çalışması değildir. Yenilenebilir enerji yatırımcıları, santral sahipleri ve EPC ekipleri için saha kanıtına dayalı karar üretmek üzere yapılandırılmış mühendislik incelemesidir. Çalışma; saha gözlemleri, devreye alma dokümantasyonu, enerji santrali işletme verisi, şebeke arayüz kayıtları ve O&M geçmişini tek bir teknik risk görünümünde birleştirir. Bu kapsamda genellikle ${scopeText} incelenir. Amaç; üretimi, emre amadeliği, güvenilirliği, uyumu ve teslim kalitesini etkileyen konuları belirlemek ve bu bulguları işveren kararına hazır aksiyonlara dönüştürmektir.`
        },
        {
          heading: "Bu Hizmetin Çözdüğü Teknik Problemler",
          content: `Yenilenebilir enerji projelerinde değer kaybı çoğu zaman eksik devreye alma kanıtı, belirsiz EPC arayüz sahipliği, işletme bağlamı olmadan yorumlanan ekipman performansı veya ölçülen kayıpla ilişkilendirilmeyen O&M rutinlerinden kaynaklanır. Gerçek santral incelemelerinde problem nadiren tek bir kusurdur. Tasarım varsayımları, koruma ayarları, kontrol davranışı, operatör müdahalesi, bakım disiplini ve sözleşmesel teslim kanıtı birlikte değerlendirilmelidir. Bu hizmet bu zinciri görünür hale getirir ve ${outcomesText} gibi sonuçlara bağlar.`
        },
        {
          heading: "Mühendislik Süreci",
          content: `Süreç işveren hedefi, ticari takvim, varlık durumu ve karar riskinin netleştirildiği kısa bir teknik brifingle başlar. İkinci adım doküman ve veri incelemesidir: tasarım kayıtları, tek hat şemaları, devreye alma formları, performans testleri, SCADA trendleri, duruş kayıtları, koruma kayıtları ve O&M planları. Üçüncü adım saha veya uzaktan teknik analizdir. Dördüncü adım risklerin üretim etkisi, güvenlik, şebeke uyumu, maliyet aciliyeti ve uygulama zorluğuna göre sıralanmasıdır. Son adım uygulanabilir aksiyon planıdır.`
        },
        {
          heading: "İşveren, EPC Ekibi ve Yatırımcı İçin Faydalar",
          content: `Ana fayda, proje veya varlık kararları geri dönülmesi pahalı hale gelmeden önce teknik netlik sağlamaktır. İşveren neyin kanıtlandığını, neyin varsayıldığını ve neyin doğrulanması gerektiğini görür. EPC ekipleri teknik boşlukları gecikme veya teslim anlaşmazlığına dönüşmeden kapatabilir. Yatırımcılar üretim riski, CAPEX etkisi ve varlık toparlama potansiyelini daha gerçekçi değerlendirir. İşletme ekipleri için değer daha pratiktir: daha az belirsiz kusur, daha iyi kanıt disiplini ve mühendislik aksiyonuyla santral performansı arasında daha net bağ.`
        },
        {
          heading: "Önerilen Çıktılar",
          content: `Güçlü bir teslim paketi genellikle yönetici teknik özeti, öncelikli risk listesi, bulgu bazlı kanıt tablosu, aciliyet ve etkiye göre sıralanmış öneriler ve uygulanabilir yol haritası içerir. Varlığa bağlı olarak devreye alma hazırlık yorumları, koruma ve şebeke arayüz gözlemleri, O&M olgunluk notları, performans kayıp kategorileri ve teknik durum tespiti riskleri de dahil edilebilir. En faydalı raporlar neyin incelendiğini, hangi kanıtın sonucu desteklediğini ve sonraki mühendislik aksiyonunun ne olduğunu net söyler.`
        },
        {
          heading: "Bu İnceleme Ne Zaman Talep Edilmeli",
          content: `Bu inceleme için en doğru zaman, teknik karar takvim, sözleşme veya yatırım baskısı altında kilitlenmeden öncedir. Tipik tetikleyiciler EPC ihale hazırlığı, tasarım incelemesi, ilk enerjilendirme planı, tekrarlayan santral açmaları, açıklanamayan üretim kaybı, satın alma teknik durum tespiti, refinansman, garanti görüşmeleri ve O&M olgunluğu hakkındaki işveren endişeleridir. Erken inceleme değer korur; çünkü proje ekibine kanıt boşluklarını kapatma, sorumlulukları netleştirme ve test veya duruşları doğru planlama zamanı verir. Mevcut varlıklarda üretim trendi düşerken, emre amadelik iyi görünmesine rağmen gelir zayıfsa veya saha ekipleri tekrarlayan alarmları güvenle açıklayamıyorsa da faydalıdır.`
        },
        {
          heading: "Güven Sinyalleri ve Mühendislik Yorumu",
          content: `Teknik karar vericiler için güven geniş iddialardan değil, disiplinli muhakemeden gelir. Güvenilir bir inceleme her sonuca nasıl ulaşıldığını, hangi kanıtın kullanıldığını, hangi varsayımların kaldığını ve önerinin güvenlik, üretim, güvenilirlik, uyum veya maliyet üzerinde nasıl etki yaratacağını göstermelidir. Öztoprak Enerji her çalışmayı santral işletme deneyimi, EPC teslim farkındalığı, devreye alma disiplini ve pratik santral kısıtları etrafında konumlandırır. Amaç işverenin daha doğru sorular sormasını, zayıf varsayımları sorgulamasını ve uzun vadeli varlık performansını koruyacak teknik güvenle hareket etmesini sağlamaktır.`
        }
      ];
}

function serviceExpansionSections(locale: Locale, service: NonNullable<ReturnType<typeof getService>>) {
  if (locale === "en") {
    return [
      {
        heading: "Commissioning and Operational Readiness Perspective",
        content: `A deep ${service.title} review must reflect how a power plant actually moves from design intent to stable operation. Mechanical completion, cold checks, energization, functional tests, synchronization, load rejection checks, governor response, AVR behavior, reactive power capability and performance runs all create evidence. When this evidence is weak, the owner inherits uncertainty. Oztoprak Energy treats commissioning records as operational risk signals: missing test sheets, unclear punch-list closure, unstable alarms, incomplete relay files or unverified control loops affect availability, warranty discussions, operator confidence and future troubleshooting.`
      },
      {
        heading: "Owner-Side EPC Workflow Control",
        content: `EPC value is protected through disciplined interface control. Civil readiness, electromechanical installation, automation logic, grid connection, protection settings, auxiliary systems, spare parts, training and handover documents must mature together. If one stream moves without the others, delay risk and claim exposure increase. For ${service.title}, owner-side review checks whether submittals, site progress, test plans and acceptance criteria tell the same technical story before unresolved project risk becomes schedule loss, generation loss or a handover dispute.`
      },
      {
        heading: "Long-Term SEO and Knowledge Architecture",
        content: `This page is structured as a topic-cluster asset for hydropower consulting, solar energy consulting, EPC technical advisory, power plant commissioning, technical due diligence, owner engineering and power plant audits. It links related services, case studies, blog articles, problem pages and topical clusters so a technical visitor can move from a broad concern to a specific consultation path without hitting a dead end. That internal structure supports organic traffic growth while keeping the content useful for engineers, owners and investors.`
      }
    ];
  }

  return [
    {
      heading: "Devreye Alma ve Operasyonel Hazirlik Bakisi",
      content: `Kapsamli bir ${service.title} incelemesi, enerji santralinin tasarim niyetinden kararli isletmeye nasil gectigini yansitmalidir. Mekanik tamamlama, soguk kontroller, enerjilendirme, fonksiyonel testler, senkronizasyon, yuk atma kontrolleri, governor tepkisi, AVR davranisi, reaktif guc kabiliyeti ve performans kosulari kanit uretir. Bu kanit zayifsa belirsizlik isverene kalir. Eksik test formlari, belirsiz punch-list kapanisi, kararsiz alarmlar, eksik role dosyalari veya dogrulanmamis kontrol donguleri emre amadeligi, garanti gorusmelerini, operator guvenini ve gelecekteki ariza analizini etkiler.`
    },
    {
      heading: "Isveren Tarafi EPC Is Akisi Kontrolu",
      content: `EPC projelerinde teknik deger disiplinli arayuz kontrolu ile korunur. Insaat hazirligi, elektromekanik montaj, otomasyon mantigi, sebeke baglantisi, koruma ayarlari, yardimci sistemler, yedek parca, egitim ve teslim dokumanlari birlikte olgunlasmalidir. Bir akis digerlerinden kopuk ilerlerse gecikme riski ve talep uyusmazligi artar. ${service.title} kapsaminda isveren tarafi inceleme; teknik sunumlarin, saha ilerlemesinin, test planlarinin ve kabul kriterlerinin ayni teknik hikayeyi anlatip anlatmadigina odaklanir.`
    },
    {
      heading: "Uzun Vadeli SEO ve Bilgi Mimarisi Degeri",
      content: `Bu icerik HES danismanligi, GES danismanligi, EPC teknik danismanlik, santral devreye alma, teknik durum tespiti, isveren muhendisligi ve santral denetimleri icin konu kumesi varligi olarak yapilandirilmistir. Sayfa ilgili hizmetlere, vaka calismalarina, blog yazilarina, problem sayfalarina ve konu kumelerine baglanir; teknik ziyaretci genis bir sorundan belirli bir danismanlik yoluna kolayca ilerler.`
    }
  ];
}

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getServices(locale).map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const service = getService(locale, slug);
  if (!service) return {};
  const index = getServices(locale).findIndex((item) => item.slug === slug);
  const translated = getServices(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    alternatePath: translated ? `/services/${translated.slug}` : undefined,
    title: service.title,
    description: service.description
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const service = getService(locale, slug);
  if (!service) notFound();
  const authoritySections = [...serviceAuthoritySections(locale, service), ...serviceExpansionSections(locale, service)];
  const serviceFaqs = [
    ...service.faqs,
    {
      question: locale === "en" ? `What evidence is reviewed for ${service.title}?` : `${service.title} için hangi kanıtlar incelenir?`,
      answer: locale === "en"
        ? `The review typically uses ${service.scope.slice(0, 3).join(", ")} together with operating records, EPC documents, commissioning evidence and owner priorities.`
        : `İnceleme genellikle ${service.scope.slice(0, 3).join(", ")} kapsamlarını; işletme kayıtları, EPC dokümanları, devreye alma kanıtları ve işveren öncelikleriyle birlikte kullanır.`
    },
    {
      question: locale === "en" ? `What makes this ${service.title.toLowerCase()} engagement decision-ready?` : `Bu ${service.title} çalışmasını karara hazır yapan nedir?`,
      answer: locale === "en"
        ? `Findings are tied to ${service.outcomes.slice(0, 2).join(" and ")}, then ranked by technical risk, generation impact, implementation urgency and evidence quality.`
        : `Bulgular ${service.outcomes.slice(0, 2).join(" ve ")} ile ilişkilendirilir; ardından teknik risk, üretim etkisi, uygulama aciliyeti ve kanıt kalitesine göre sıralanır.`
    }
  ];

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.services, url: servicesIndexPath(locale) },
      { name: service.title, url: `/${locale}/services/${service.slug}` }
    ]),
    serviceSchema(locale, service),
    faqSchema(serviceFaqs)
  ];

  return (
    <>
      <StickyConsultationCta locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.services, href: servicesIndexPath(locale) }, { label: service.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{service.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contactHref(locale)} className="rounded-md bg-energy-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
            <Link href={`/${locale}/projects`} className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {dict.nav.projects}
            </Link>
          </div>
          <div className="mt-12">
            <AuthorityMetrics locale={locale} />
          </div>
        </Container>
      </section>
      <EngineeringVisualBlocks locale={locale} />
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Problem and Solution" : "Problem ve Çözüm"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? `${service.title} helps technical buyers move from uncertain asset conditions, EPC ambiguity and incomplete operating evidence toward a ranked engineering action plan. The consultancy is designed for hydropower consulting, solar energy consulting, power plant operations support, HPP commissioning and energy audit services where the output must support real decisions.`
                  : `${service.title}; belirsiz varlık durumu, EPC kapsam belirsizliği ve eksik işletme kanıtlarından önceliklendirilmiş mühendislik aksiyon planına geçiş sağlar. Çalışma HES danışmanlığı, GES danışmanlığı, enerji santrali işletme desteği, devreye alma ve enerji denetimi kararlarını desteklemek üzere tasarlanır.`}
              </p>
            </div>
            <div className="mt-12 grid gap-8">
              {authoritySections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-steel">{section.content}</p>
                </section>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-white">{dict.labels.technicalScope}</h2>
            <div className="mt-6 grid gap-4">
              {service.scope.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-steel">{item}</div>
              ))}
            </div>
            <h2 className="mt-12 text-2xl font-semibold text-white">{dict.labels.results}</h2>
            <ul className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <li key={item} className="border-l-2 border-energy-500 pl-4 text-steel">{item}</li>
              ))}
            </ul>
            <div className="mt-12 rounded-lg border border-energy-500/30 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Consultant Recommendation" : "Danisman Tavsiyesi"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? `For ${service.title}, the strongest results come when site evidence, EPC documents, commissioning records and O&M logs are reviewed together. This prevents isolated findings and gives the owner a ranked engineering action plan.`
                  : `${service.title} calismasinda en guclu sonuc; saha kanitlari, EPC dokumanlari, devreye alma kayitlari ve isletme bakim loglari birlikte incelendiginde alinir. Bu yaklasim tekil bulgular yerine onceliklendirilmis muhendislik aksiyon plani uretir.`}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/${locale}/blog`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.blog}</Link>
                <Link href={`/${locale}/projects`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.projects}</Link>
                <Link href={contactHref(locale)} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.contact}</Link>
              </div>
            </div>
          </div>
          <aside className="premium-card rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 grid gap-6">
              {serviceFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{faq.answer}</p>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>
      <ConversionFunnel locale={locale} />
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {locale === "en" ? "Request a Plant Performance Review" : "Santral Performans İncelemesi Talep Edin"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "Use the form to request a technical consultation, operational assessment, EPC advisory review or plant performance review. Include the project type, capacity, current decision deadline and the main technical concern."
                : "Teknik danışmanlık, operasyonel değerlendirme, EPC danışmanlığı veya santral performans incelemesi talep etmek için formu kullanın. Proje türünü, kapasiteyi, karar takvimini ve ana teknik problemi paylaşın."}
            </p>
          </div>
          <ContactForm dict={dict} locale={locale} />
        </Container>
      </section>
      <RelatedContent locale={locale} seed={{ services: [service.slug], categories: service.keywords, exclude: service.slug }} />
      <CtaSection locale={locale} />
    </>
  );
}
