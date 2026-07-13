import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Network, ShieldCheck, Zap } from "lucide-react";
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
    path: "/microgrids",
    title: en
      ? "Microgrid Engineering Consulting | Oztoprak Energy"
      : "Mikro Şebeke Mühendislik Danışmanlığı | Öztoprak Enerji",
    description: en
      ? "Independent engineering consulting for industrial and remote microgrids in Turkey — islanding protection, DER integration, grid interface design, and owner's engineering for microgrid developers and operators."
      : "Türkiye'deki endüstriyel ve uzak bölge mikro şebekeleri için bağımsız mühendislik danışmanlığı — adalama koruması, DER entegrasyonu, şebeke arayüz tasarımı ve mikro şebeke geliştiricileri ve işletmecileri için işveren mühendisliği."
  });
}

export default async function MicrogridsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const en = locale === "en";

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: en ? "Microgrids" : "Mikro Şebekeler", url: `/${locale}/microgrids` }
    ]),
    organizationSchema(locale)
  ];

  const scopeItems = en
    ? [
        {
          icon: Network,
          title: "Islanding and Protection Design Review",
          text: "Independent assessment of islanding detection schemes, protection coordination between DERs and the utility interface, anti-islanding compliance, and reconnection procedures under TEİAŞ requirements."
        },
        {
          icon: Zap,
          title: "DER Integration and Control Architecture",
          text: "Technical review of solar, BESS, diesel, and load control integration in a microgrid — master controller logic, black start sequence, load shedding scheme, and frequency/voltage regulation hierarchy."
        },
        {
          icon: ShieldCheck,
          title: "Owner's Engineering for Microgrid Projects",
          text: "Independent technical oversight during microgrid EPC — scope adequacy review, commissioning planning, FAT/SAT verification, and lender or investor technical advisory for project finance."
        }
      ]
    : [
        {
          icon: Network,
          title: "Adalama ve Koruma Tasarımı İncelemesi",
          text: "Adalama tespit şemalarının, DER'ler ile şebeke arayüzü arasındaki koruma koordinasyonunun, anti-adalama uyumunun ve TEİAŞ gereksinimleri kapsamında yeniden bağlantı prosedürlerinin bağımsız değerlendirmesi."
        },
        {
          icon: Zap,
          title: "DER Entegrasyonu ve Kontrol Mimarisi",
          text: "Mikro şebekede GES, BESS, dizel ve yük kontrolü entegrasyonunun teknik incelemesi — ana kontrolör mantığı, siyah başlatma sırası, yük atma şeması ve frekans/gerilim düzenleme hiyerarşisi."
        },
        {
          icon: ShieldCheck,
          title: "Mikro Şebeke Projeleri için İşveren Mühendisliği",
          text: "Mikro şebeke EPC süresince bağımsız teknik denetim — kapsam yeterliliği incelemesi, devreye alma planlaması, FAT/SAT doğrulama ve proje finansmanı için kredi veya yatırımcı teknik danışmanlığı."
        }
      ];

  const keyTopics = en
    ? [
        "Islanding detection methodology and TEİAŞ type approval requirements",
        "Protection coordination between distributed generators and the utility grid",
        "BESS sizing and control strategy for peak shaving and resilience",
        "Black start capability — sequence design and commissioning test criteria",
        "Load shedding and load management in islanded operation",
        "Microgrid EPC contract scope adequacy and risk matrix",
        "Power quality in islanded mode — voltage, frequency, harmonic compliance",
        "Transition between grid-connected and islanded mode — transient behaviour",
        "Regulatory framework for behind-the-meter microgrids in Turkey",
        "O&M planning and fault recovery procedures for microgrid operators"
      ]
    : [
        "Adalama tespit metodolojisi ve TEİAŞ tip onay gereksinimleri",
        "Dağıtık jeneratörler ile şebeke arasındaki koruma koordinasyonu",
        "Pik kesme ve dayanıklılık için BESS boyutlandırma ve kontrol stratejisi",
        "Siyah başlatma kapasitesi — sıra tasarımı ve devreye alma test kriterleri",
        "Adalanmış işletmede yük atma ve yük yönetimi",
        "Mikro şebeke EPC sözleşme kapsamı yeterliliği ve risk matrisi",
        "Adalanmış moddaki güç kalitesi — gerilim, frekans, harmonik uyumu",
        "Şebekeye bağlı ve adalanmış mod arasındaki geçiş — geçici davranış",
        "Türkiye'de sayaç arkası mikro şebekelerin mevzuat çerçevesi",
        "Mikro şebeke işletmecileri için O&M planlaması ve arıza kurtarma prosedürleri"
      ];

  const relatedServices = en
    ? ["grid-compliance-audit", "power-quality-audit", "owners-engineering", "technical-due-diligence", "grid-protection-system-analysis"]
    : ["sebeke-uyum-denetimi", "guc-kalitesi-denetimi", "isveren-muhendisligi", "teknik-durum-tespiti", "sebeke-koruma-sistemi-analizi"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Industrial · Remote · Behind-the-meter" : "Endüstriyel · Uzak bölge · Sayaç arkası"}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {en ? "Microgrid Engineering Consulting" : "Mikro Şebeke Mühendislik Danışmanlığı"}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            {en
              ? "Oztoprak Energy provides independent technical advisory for microgrid projects in Turkey — covering islanding protection design, DER integration review, EPC scope assessment, and owner's engineering for industrial and remote-area microgrid developers, operators, and investors."
              : "Öztoprak Enerji, Türkiye'deki mikro şebeke projeleri için bağımsız teknik danışmanlık sunuyor — adalama koruma tasarımı, DER entegrasyonu incelemesi, EPC kapsam değerlendirmesi ve endüstriyel ile uzak bölge mikro şebeke geliştiricileri, işletmecileri ve yatırımcıları için işveren mühendisliği kapsıyor."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/free-consultation`} className="inline-flex rounded-md bg-energy-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-glow hover:bg-white transition">
              {en ? "Discuss Your Microgrid Project" : "Mikro Şebeke Projenizi Tartışın"}
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
            {scopeItems.map((item) => {
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
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                {en ? "Turkey context" : "Türkiye bağlamı"}
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {en
                  ? "Turkish industrial sites with large solar or cogeneration assets face increasing interest in behind-the-meter microgrid configurations. TEİAŞ and EPDK requirements for grid disconnection, islanding detection, and reconnection remain evolving and require careful engineering to satisfy both safety and commercial operation requirements."
                  : "Büyük GES veya kojenerasyon varlıklarına sahip Türk endüstriyel tesisleri, sayaç arkası mikro şebeke konfigürasyonlarına giderek artan ilgiyle karşı karşıya. Şebeke bağlantısının kesilmesi, adalama tespiti ve yeniden bağlantıya ilişkin TEİAŞ ve EPDK gereksinimleri gelişmeye devam etmekte olup hem güvenlik hem ticari işletme gereksinimlerini karşılamak için titiz mühendislik gerektirmektedir."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
