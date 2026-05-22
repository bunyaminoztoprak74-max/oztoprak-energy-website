import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticPage } from "@/components/programmatic-page";
import { getLocation, getLocations, generateProgrammaticSeoPages } from "@/content/programmatic-seo";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { locationPageSchema } from "@/lib/programmatic-schema";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getLocations(locale).map((location) => ({ locale, slug: location.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const location = getLocation(locale, slug);
  if (!location) return {};
  const index = getLocations(locale).findIndex((item) => item.slug === slug);
  const translated = getLocations(alternateLocale(locale))[index];
  return buildMetadata({ locale, path: `/locations/${slug}`, alternatePath: translated ? `/locations/${translated.slug}` : undefined, title: `${location.label} Energy Consultancy`, description: location.description });
}

export default async function LocationPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const location = getLocation(locale, slug);
  if (!location) notFound();
  const pages = generateProgrammaticSeoPages(locale).filter((page) => page.locationSlug === location.slug).slice(0, 8);
  const faqs = locale === "en"
    ? [
        {
          question: `Which services are available for ${location.label}?`,
          answer: "The location architecture connects EPC technical consultancy, hydropower, solar, commissioning, owner engineering, O&M optimization, grid protection and technical audit scopes."
        },
        {
          question: "Does location-based content change the engineering method?",
          answer: "The engineering method stays evidence-led, but grid context, project documentation, climate, asset type and owner decision needs are localized."
        },
        {
          question: "Can this support international project teams?",
          answer: "Yes. The outputs can be written for owner, EPC, lender, investor and operating teams that need a common technical decision record."
        }
      ]
    : [
        {
          question: `${location.label} için hangi hizmetler sunulur?`,
          answer: "Lokasyon mimarisi EPC teknik danışmanlık, HES, GES, devreye alma, işveren mühendisliği, işletme bakım optimizasyonu, şebeke koruma ve teknik denetim kapsamlarını bağlar."
        },
        {
          question: "Lokasyon odaklı içerik mühendislik yöntemini değiştirir mi?",
          answer: "Mühendislik yöntemi kanıt odaklı kalır; ancak şebeke bağlamı, proje dokümantasyonu, iklim, varlık türü ve işveren karar ihtiyacı yerelleştirilir."
        },
        {
          question: "Uluslararası proje ekipleri için kullanılabilir mi?",
          answer: "Evet. Çıktılar işveren, EPC, finans kuruluşu, yatırımcı ve işletme ekiplerinin ortak teknik karar kaydı olarak kullanabileceği şekilde yazılabilir."
        }
      ];

  return (
    <ProgrammaticPage
      locale={locale}
      title={locale === "en" ? `Energy Consultancy in ${location.label}` : `${location.label} Enerji Danışmanlığı`}
      eyebrow={locale === "en" ? "Location Engineering Page" : "Lokasyon Mühendislik Sayfası"}
      description={location.description}
      intro={
        locale === "en"
          ? `${location.label} renewable energy projects need more than a location keyword inserted into a generic page. The technical review should reflect grid interface, resource profile, EPC responsibility split, commissioning maturity and the practical operating constraints of the asset.`
          : `${location.label} yenilenebilir enerji projeleri, genel bir sayfaya lokasyon anahtar kelimesi eklemekten fazlasını gerektirir. Teknik inceleme şebeke arayüzünü, kaynak profilini, EPC sorumluluk dağılımını, devreye alma olgunluğunu ve varlığın pratik işletme kısıtlarını yansıtmalıdır.`
      }
      breadcrumbs={[{ label: locale === "en" ? "Locations" : "Lokasyonlar", href: `/${locale}/locations` }, { label: location.label }]}
      schema={[...locationPageSchema(locale, location), faqSchema(faqs)]}
      bullets={[
        locale === "en" ? "Localizes EPC, hydropower, solar, commissioning and audit services for regional search intent." : "EPC, HES, GES, devreye alma ve denetim hizmetlerini bölgesel arama niyetine göre yerelleştirir.",
        locale === "en" ? "Connects every location to service-intent landing pages and matching technical content." : "Her lokasyonu hizmet-niyet landing page'leri ve ilgili teknik içeriklerle bağlar.",
        ...location.keywords
      ]}
      sections={[
        {
          heading: locale === "en" ? `Technical context in ${location.label}` : `${location.label} teknik bağlamı`,
          content: locale === "en"
            ? "The local context is considered through grid connection conditions, operating environment, owner reporting needs and the maturity of EPC or O&M documentation."
            : "Yerel bağlam; şebeke bağlantı koşulları, işletme ortamı, işveren raporlama ihtiyacı ve EPC veya O&M dokümantasyon olgunluğu üzerinden değerlendirilir."
        },
        {
          heading: locale === "en" ? "How pages avoid duplication" : "Sayfalar tekrar içerikten nasıl kaçınır",
          content: locale === "en"
            ? "Each service-location page adds its own service scope, location context, search intent, deliverables, FAQ and internal links instead of reusing one block of text."
            : "Her hizmet-lokasyon sayfası tek bir metin bloğunu tekrar etmek yerine kendi hizmet kapsamını, lokasyon bağlamını, arama niyetini, teslimatlarını, SSS alanını ve iç linklerini üretir."
        },
        {
          heading: locale === "en" ? "Trust signals for technical buyers" : "Teknik karar vericiler için güven sinyalleri",
          content: locale === "en"
            ? "The page emphasizes 28+ years of plant operations and EPC experience, 274+ MW project experience, evidence-based reporting and owner-side engineering judgment."
            : "Sayfa 28+ yıllık santral işletme ve EPC deneyimini, 274+ MW proje deneyimini, kanıta dayalı raporlamayı ve işveren tarafı mühendislik yorumunu öne çıkarır."
        }
      ]}
      deliverables={locale === "en"
        ? [`Localized technical scope for ${location.label}`, "Service-intent landing page map", "Recommended consultation pathway", "Internal links to matching services and topics"]
        : [`${location.label} için yerelleştirilmiş teknik kapsam`, "Hizmet-niyet landing page haritası", "Önerilen danışmanlık yolu", "İlgili hizmet ve konulara iç linkler"]}
      expertCommentary={locale === "en"
        ? `For ${location.label}, I would avoid assuming the same engineering priorities apply to every renewable asset. A solar site, a hydropower station and an industrial self-consumption project can share an owner but have completely different grid, O&M and commissioning risks.`
        : `${location.label} için her yenilenebilir enerji varlığında aynı mühendislik önceliklerinin geçerli olduğunu varsaymam. Bir GES sahası, HES santrali ve endüstriyel öz tüketim projesi aynı işverene ait olabilir; ancak şebeke, O&M ve devreye alma riskleri tamamen farklıdır.`}
      fieldProblems={locale === "en"
        ? ["Local grid constraints not reflected in acceptance criteria", "Regional weather or hydrology assumptions copied from feasibility without operational validation", "EPC handover files not organized for future audits", "Owner teams receiving alarms but not actionable performance diagnosis"]
        : ["Yerel şebeke kısıtlarının kabul kriterlerine yansıtılmaması", "Bölgesel hava veya hidroloji varsayımlarının operasyonel doğrulama olmadan fizibiliteden kopyalanması", "EPC teslim dosyalarının gelecekteki denetimler için düzenlenmemesi", "İşveren ekiplerinin alarm almasına rağmen uygulanabilir performans teşhisi alamaması"]}
      recommendedActions={locale === "en"
        ? ["Map location-specific grid and resource assumptions before selecting the consulting scope", "Check whether handover records support future O&M and lender review", "Connect regional constraints to service-specific acceptance criteria", "Route the user from location intent to the most relevant service page"]
        : ["Danışmanlık kapsamı seçilmeden önce lokasyona özel şebeke ve kaynak varsayımlarını haritalayın", "Teslim kayıtlarının gelecekteki O&M ve finans kuruluşu incelemesini destekleyip desteklemediğini kontrol edin", "Bölgesel kısıtları hizmete özel kabul kriterlerine bağlayın", "Kullanıcıyı lokasyon niyetinden en ilgili hizmet sayfasına yönlendirin"]}
      faqs={faqs}
      cta={locale === "en" ? `Request a technical consultation for a renewable energy asset or EPC decision in ${location.label}.` : `${location.label} için yenilenebilir enerji varlığı veya EPC kararı hakkında teknik danışmanlık talep edin.`}
      conclusion={locale === "en"
        ? `A location page earns trust when it helps the buyer choose a better engineering path, not when it repeats a city name. For ${location.label}, the next useful step is to connect the asset type, grid context and decision deadline to the right technical scope.`
        : `Bir lokasyon sayfası şehir adını tekrar ettiğinde değil, teknik alıcının daha doğru mühendislik yolunu seçmesine yardım ettiğinde güven üretir. ${location.label} için faydalı sonraki adım; varlık türünü, şebeke bağlamını ve karar tarihini doğru teknik kapsama bağlamaktır.`}
      primaryLinks={pages.map((page) => ({ title: page.h1, href: `/${locale}/seo/${page.slug}`, description: page.description }))}
      contextualLinks={[
        { title: locale === "en" ? "Generated service-location pages" : "Üretilmiş hizmet-lokasyon sayfaları", href: `/${locale}/seo`, description: locale === "en" ? "Browse service, location and intent combinations." : "Hizmet, lokasyon ve niyet kombinasyonlarını inceleyin." },
        { title: locale === "en" ? "Problem-based pages" : "Problem odaklı sayfalar", href: `/${locale}/problems`, description: locale === "en" ? "Move from regional search intent into field problem diagnosis." : "Bölgesel arama niyetinden saha problemi teşhisine geçin." }
      ]}
      relatedSeed={{ categories: location.keywords, exclude: location.slug }}
    />
  );
}
