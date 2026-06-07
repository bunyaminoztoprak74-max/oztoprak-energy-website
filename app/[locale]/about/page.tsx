import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "About Oztoprak Energy Consultancy",
    description:
      "Independent renewable energy consultancy for hydropower, solar, EPC advisory, commissioning, power plant audits and owner-side technical decision support.",
    intro:
      "Oztoprak Energy Consultancy supports owners, EPC contractors, renewable energy investors and operating teams that need independent engineering judgment before a technical, commercial or operational decision becomes expensive to reverse.",
    positioning:
      "The consultancy is built around field evidence rather than generic advisory language. Reviews connect SCADA trends, commissioning records, outage history, relay files, single-line diagrams, O&M routines, punch-list closure and EPC handover quality into a practical owner-side view of risk.",
    metrics: [
      ["28+", "years of energy sector experience"],
      ["274 MW+", "renewable power portfolio exposure"],
      ["8", "power plant commissioning references"],
      ["HPP + SPP", "hydropower and solar expertise"]
    ],
    sections: [
      {
        title: "Field-Based Engineering Judgment",
        text: "Technical decisions in renewable energy projects should be supported by evidence that can survive a site meeting, a lender review, a contractor discussion and a future operational audit. Oztoprak Energy evaluates the quality of that evidence and shows which assumptions still need verification."
      },
      {
        title: "Hydropower, Solar and EPC Perspective",
        text: "The technical view combines hydropower plant behavior, solar PV performance logic, EPC interface control, commissioning discipline and operational optimization. Reviews consider governor response, AVR behavior, reactive power capability, AGC-compatible operation, auxiliary system reliability, turbine-generator performance, inverter performance ratio and grid compliance evidence."
      },
      {
        title: "Independent Owner-Side Support",
        text: "The role is not to produce generic marketing reports. The objective is to help owners, EPC contractors and investors separate measured facts from assumptions, prioritize corrective actions, reduce generation loss and improve the quality of technical decisions before commercial, contractual or operational risk becomes expensive."
      }
    ],
    values: ["Hydropower consultancy", "Solar power plant consultancy", "EPC technical advisory", "Commissioning and operational readiness", "Technical due diligence", "Power plant performance analysis"]
  },
  tr: {
    title: "Oztoprak Enerji Danismanlik Hakkinda",
    description:
      "HES, GES, EPC danismanligi, devreye alma, teknik denetim ve isveren tarafi teknik karar destegi icin bagimsiz yenilenebilir enerji danismanligi.",
    intro:
      "Oztoprak Enerji Danismanlik; santral sahipleri, EPC yuklenicileri, yenilenebilir enerji yatirimcilari ve isletme ekipleri icin teknik, ticari veya operasyonel kararlar geri donusu pahali hale gelmeden once bagimsiz muhendislik gorusu saglar.",
    positioning:
      "Danismanlik yaklasimi genel tanitim diline degil saha kanitina dayanir. Incelemeler SCADA trendleri, devreye alma kayitlari, durus gecmisi, role dosyalari, tek hat semalari, O&M rutinleri, punch-list kapanisi ve EPC teslim kalitesini pratik bir isveren tarafi risk gorunumunde birlestirir.",
    metrics: [
      ["28+", "yil enerji sektoru deneyimi"],
      ["274 MW+", "yenilenebilir enerji proje portfoyu"],
      ["8", "santral devreye alma deneyimi"],
      ["HES + GES", "hidroelektrik ve gunes uzmanligi"]
    ],
    sections: [
      {
        title: "Sahaya Dayali Muhendislik Muhakemesi",
        text: "Yenilenebilir enerji projelerinde teknik kararlar; saha toplantisinda, finans kuruluslari incelemesinde, yuklenici gorusmesinde ve gelecekteki operasyonel denetimde savunulabilecek kanitlara dayanmalidir. Oztoprak Enerji bu kanitin kalitesini degerlendirir ve hangi varsayimlarin hala dogrulanmasi gerektigini gosterir."
      },
      {
        title: "HES, GES ve EPC Bakis Acisi",
        text: "Teknik yaklasim; HES santral davranisi, GES performans mantigi, EPC arayuz kontrolu, devreye alma disiplini ve operasyonel optimizasyonu birlikte ele alir. Incelemelerde governor tepkisi, AVR davranisi, reaktif guc kabiliyeti, AGC uyumlu isletme, yardimci sistem guvenilirligi, turbin-jenerator performansi, inverter performans orani ve sebeke uyum kanitlari dikkate alinir."
      },
      {
        title: "Bagimsiz Isveren Tarafi Destek",
        text: "Amac genel tanitim raporu uretmek degildir. Hedef; isverenlerin, EPC yuklenicilerinin ve yatirimcilarin olculmus gercekleri varsayimlardan ayirmasina, duzeltici aksiyonlari onceliklendirmesine, uretim kaybini azaltmasina ve ticari, sozlesmesel veya operasyonel risk pahali hale gelmeden teknik karar kalitesini artirmasina yardim etmektir."
      }
    ],
    values: ["HES danismanligi", "GES danismanligi", "EPC teknik danismanlik", "Devreye alma ve operasyonel hazirlik", "Teknik durum tespiti", "Santral performans analizi"]
  }
} satisfies Record<Locale, {
  title: string;
  description: string;
  intro: string;
  positioning: string;
  metrics: Array<[string, string]>;
  sections: Array<{ title: string; text: string }>;
  values: string[];
}>;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const page = copy[locale];
  return buildMetadata({ locale, path: "/about", title: page.title, description: page.description });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const page = copy[locale];

  return (
    <>
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.about }]} />
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{page.description}</p>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-steel">
            <p>{page.intro}</p>
            <p>{page.positioning}</p>
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
          <div className="grid gap-4">
            {page.metrics.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6">
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{label}</p>
              </div>
            ))}
            {page.values.map((value) => (
              <div key={value} className="premium-card rounded-lg p-6 text-lg font-semibold text-white">
                {value}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
