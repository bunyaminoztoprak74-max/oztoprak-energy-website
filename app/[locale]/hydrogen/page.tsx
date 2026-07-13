import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Zap, FlaskConical, Wind } from "lucide-react";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const en = locale === "en";
  return buildMetadata({
    locale,
    path: "/hydrogen",
    title: en
      ? "Green Hydrogen Engineering Consulting | Oztoprak Energy"
      : "Yeşil Hidrojen Mühendislik Danışmanlığı | Öztoprak Enerji",
    description: en
      ? "Engineering consulting for green hydrogen projects in Turkey — electrolyser integration, renewable coupling, grid compliance, feasibility review, and owner's engineering for H2 developers and investors."
      : "Türkiye'de yeşil hidrojen projeleri için mühendislik danışmanlığı — elektrolizör entegrasyonu, yenilenebilir kaynak eşleştirmesi, şebeke uyumu, fizibilite incelemesi ve H2 geliştiriciler ve yatırımcılar için işveren mühendisliği."
  });
}

export default async function HydrogenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: en ? "Green Hydrogen" : "Yeşil Hidrojen", url: `/${locale}/hydrogen` }
    ]),
    organizationSchema(locale)
  ];

  const scope = en
    ? [
        {
          icon: FlaskConical,
          title: "Electrolyser Integration Review",
          text: "Technical assessment of PEM and alkaline electrolyser integration with renewable energy sources — power quality requirements, control interfaces, grid coupling, and O&M planning."
        },
        {
          icon: Zap,
          title: "Renewable Coupling and Power Supply Analysis",
          text: "Review of direct solar or wind coupling to electrolyser loads — variability management, curtailment logic, hydrogen output yield modelling, and storage interface design."
        },
        {
          icon: Wind,
          title: "Owner's Engineering for H2 Projects",
          text: "Independent technical oversight during H2 project development — EPC scope review, technical specification gap analysis, commissioning planning, and lender's engineer support."
        }
      ]
    : [
        {
          icon: FlaskConical,
          title: "Elektrolizör Entegrasyonu İncelemesi",
          text: "PEM ve alkalin elektrolizörün yenilenebilir enerji kaynaklarıyla entegrasyonunun teknik değerlendirmesi — güç kalitesi gereksinimleri, kontrol arayüzleri, şebeke eşleştirmesi ve O&M planlaması."
        },
        {
          icon: Zap,
          title: "Yenilenebilir Eşleştirme ve Güç Kaynağı Analizi",
          text: "Elektrolizör yüklerine doğrudan GES veya rüzgar eşleştirmesinin incelemesi — değişkenlik yönetimi, kısıtlama mantığı, hidrojen çıktı verimi modellemesi ve depolama arayüzü tasarımı."
        },
        {
          icon: Wind,
          title: "H2 Projeleri için İşveren Mühendisliği",
          text: "H2 proje geliştirme süresince bağımsız teknik denetim — EPC kapsam incelemesi, teknik şartname boşluk analizi, devreye alma planlaması ve kredi kuruluşu mühendisi desteği."
        }
      ];

  const keyTopics = en
    ? [
        "Additionality requirements — matching electrolyser consumption with new renewable generation",
        "Grid connection strategy for large H2 loads under TEİAŞ rules",
        "Power purchase agreement structure for renewable H2 projects",
        "EPC contractor selection and scope adequacy for H2 balance of plant",
        "Commissioning and performance verification for electrolysers",
        "Technical due diligence for H2 project acquisitions and investments",
        "Lender's engineer scope for green hydrogen project finance",
        "O&M planning and KPI framework for operating H2 facilities"
      ]
    : [
        "Eklemlilik gereksinimleri — elektrolizör tüketimini yeni yenilenebilir üretimle eşleştirme",
        "TEİAŞ kuralları kapsamında büyük H2 yüklerine yönelik şebeke bağlantısı stratejisi",
        "Yenilenebilir H2 projeleri için enerji alım sözleşmesi yapısı",
        "H2 denge tesisi için EPC yüklenici seçimi ve kapsam yeterliliği",
        "Elektrolizörler için devreye alma ve performans doğrulama",
        "H2 proje satın alımları ve yatırımları için teknik durum tespiti",
        "Yeşil hidrojen proje finansmanı için kredi kuruluşu mühendisi kapsamı",
        "İşletmedeki H2 tesisleri için O&M planlaması ve KPI çerçevesi"
      ];

  const relatedServices = en
    ? ["owners-engineering", "independent-engineer", "lenders-engineer", "technical-due-diligence", "renewable-energy-investment-advisory"]
    : ["isveren-muhendisligi", "bagimsiz-muhendis", "finans-kurulusu-muhendisi", "teknik-durum-tespiti", "yenilenebilir-enerji-yatirim-danismanligi"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Emerging technology · Turkey & region" : "Gelişen teknoloji · Türkiye ve bölge"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en ? "Green Hydrogen Engineering Consulting" : "Yeşil Hidrojen Mühendislik Danışmanlığı"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Turkey's national hydrogen strategy targets 2 GW of electrolyser capacity by 2030. Oztoprak Energy provides independent technical review, owner's engineering, and lender's engineer services for green hydrogen developers and investors navigating this fast-evolving market."
              : "Türkiye'nin ulusal hidrojen stratejisi 2030'a kadar 2 GW elektrolizör kapasitesi hedefliyor. Öztoprak Enerji, bu hızla gelişen pazarda yol alan yeşil hidrojen geliştiricileri ve yatırımcıları için bağımsız teknik inceleme, işveren mühendisliği ve kredi kuruluşu mühendisi hizmetleri sunuyor."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Discuss Your H2 Project" : "H2 Projenizi Tartışın"}
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 transition">
              {en ? "Contact Us" : "İletişim"}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">
            {en ? "Technical Scope" : "Teknik Kapsam"}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {scope.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card rounded-xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-energy-500/25 bg-energy-500/10 text-energy-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {en ? "Technical topics we cover" : "Ele aldığımız teknik konular"}
            </h2>
            <div className="mt-6 grid gap-3">
              {keyTopics.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-500" />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {en ? "Related services" : "İlgili hizmetler"}
            </h2>
            <div className="mt-6 grid gap-2">
              {relatedServices.map((slug) => (
                <Link key={slug} href={servicePath(locale, slug)} className="group flex items-center gap-2 text-sm text-steel hover:text-energy-500 transition">
                  <span className="h-px w-4 bg-energy-500/40 group-hover:w-6 group-hover:bg-energy-500 transition-all" />
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-energy-500/30 bg-energy-500/10 p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "Note on market readiness" : "Pazar hazırlığı notu"}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "Green hydrogen in Turkey is at pre-FEED and early feasibility stage for most projects. Our current services focus on feasibility review, technology selection support, EPC readiness, and lender/investor technical advisory — not construction monitoring, which will become relevant as projects mature."
                  : "Türkiye'de yeşil hidrojen çoğu proje için ön-FEED ve erken fizibilite aşamasındadır. Mevcut hizmetlerimiz fizibilite incelemesi, teknoloji seçimi desteği, EPC hazırlığı ve kredi/yatırımcı teknik danışmanlığına odaklanmaktadır — projeler olgunlaştıkça geçerli olacak olan inşaat izleme hizmetine değil."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
