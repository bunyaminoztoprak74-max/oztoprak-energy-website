import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "./container";
import { Breadcrumbs } from "./breadcrumbs";
import { AuthorityMetrics } from "./authority-metrics";
import { InvestmentCta } from "./investment-cta";
import { InvestmentLeadForm } from "./investment-lead-form";
import { InvestmentPageView } from "./investment-tracking";
import { InvestorRequestCard } from "./investment-portfolio";
import { investmentPages, investmentFaqs, type InvestmentPage as PageData } from "@/content/investments";
import { investmentArticles } from "@/content/investment-articles";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function InvestmentPage({ page }: { page: PageData }) {
  const home = page.slug === "satilik-enerji-santralleri";
  const crumbs = [...(!home ? [{ label: "Yatırım Fırsatları", href: "/tr/satilik-enerji-santralleri" }] : []), { label: home ? "Yatırım Fırsatları" : page.h1 }];
  const schemas = [breadcrumbSchema([{ name: "Ana Sayfa", url: "/tr" }, ...(!home ? [{ name: "Yatırım Fırsatları", url: "/tr/satilik-enerji-santralleri" }] : []), { name: page.h1, url: `/tr/${page.slug}` }]), ...(home ? [faqSchema(investmentFaqs)] : [])];
  const formKind = page.kind || (page.type ? "buyer" : null);
  return <>
    <InvestmentPageView slug={page.slug} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    <section className="energy-grid bg-navy-950 py-12 sm:py-20">
      <Container>
        <Breadcrumbs locale="tr" items={crumbs} />
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-energy-500">Öztoprak Enerji · Yatırım Danışmanlığı</p>
        <h1 className="max-w-5xl text-balance text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{page.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{page.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {page.service ? <InvestmentCta kind={page.service} label={page.service === "diligence" ? "Santral Satın Alma Öncesi Teknik İnceleme Talep Et" : undefined} /> : <InvestmentCta kind={page.type === "HES" ? "hes" : page.type === "GES" ? "ges" : page.kind === "seller" ? "seller" : "buyer"} href={formKind ? "#yatirim-formu" : undefined} label={page.type ? `Satılık ${page.type} Arıyorum` : page.kind === "seller" ? "Gizli Satış Talebi Oluştur" : undefined} />}
          <InvestmentCta kind={page.kind === "seller" ? "buyer" : "seller"} secondary href={page.type ? `/tr/santralini-sat?type=${page.type}` : undefined} label={page.type ? `${page.type}’imi Satmak İstiyorum` : undefined} />
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-steel"><ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-energy-500" />Kontrollü bilgi paylaşımı · Teknik değerlendirme · Yatırımcı eşleştirme</p>
      </Container>
    </section>
    <section className="bg-navy-900 py-14 sm:py-20">
      <Container>
        <div className={home ? "grid gap-5 md:grid-cols-2 lg:grid-cols-4" : "grid gap-6 lg:grid-cols-2"}>
          {page.sections.map((section, index) => <section key={section.heading} className="premium-card rounded-xl p-6 sm:p-7">
            <p aria-hidden="true" className="mb-5 text-xs font-semibold tracking-widest text-energy-500">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="text-xl font-bold text-white">{section.heading}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">{section.text}</p>
            {section.href && <Link href={`/tr/${section.href}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-energy-500 hover:text-white">{section.linkLabel}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>}
          </section>)}
        </div>
      </Container>
    </section>
    {home && <section className="bg-navy-950 py-14"><Container>
      <h2 className="mb-4 text-3xl font-bold text-white">Neden Öztoprak Enerji?</h2>
      <p className="mb-8 max-w-3xl leading-8 text-steel">HES, GES, EPC, devreye alma ve O&M sahalarındaki deneyimi yatırımın teknik kararlarına taşıyoruz. Aşağıdaki rakamlar kurumsal deneyimimizi gösterir; satılık portföy büyüklüğü değildir.</p>
      <AuthorityMetrics locale="tr" />
    </Container></section>}
    {!page.kind && <section className="bg-navy-950 py-12"><Container><InvestorRequestCard /></Container></section>}
    {formKind && <section id="yatirim-formu" className="scroll-mt-52 bg-navy-950 py-14"><Container className="max-w-4xl">
      <h2 className="mb-4 text-3xl font-bold text-white">{page.type ? `Aradığınız ${page.type}’i Birlikte Bulalım` : formKind === "buyer" ? "Yatırım kriterlerinizi paylaşın" : "Santral satış talebiniz"}</h2>
      <p className="mb-7 leading-8 text-steel">{formKind === "buyer" ? "Yayın izni alınmış gerçek portföy eklenene kadar bu sayfada ilan gösterilmiyor. Kriterlerinizi iletin, uygun fırsat oluştuğunda görüşelim." : "Bilgileriniz ilan olarak yayımlanmaz. Paylaşım kapsamını ilk görüşmede birlikte belirleyelim."}</p>
      <InvestmentLeadForm kind={formKind} plantType={page.type} source={`/tr/${page.slug}`} />
    </Container></section>}
    <section className="bg-navy-900 py-14"><Container>
      <h2 className="mb-6 text-2xl font-bold text-white">Yatırım sürecinizin sonraki adımı</h2>
      <nav aria-label="İlgili yatırım hizmetleri" className="flex flex-wrap gap-3">
        {investmentPages.filter((item) => item.slug !== page.slug).map((item) => <Link key={item.slug} href={`/tr/${item.slug}`} className="rounded-md border border-white/15 px-4 py-3 text-sm text-steel hover:border-energy-500 hover:text-energy-500">{item.type ? `Satılık ${item.type}` : item.slug === "hes-degerleme" ? "HES Değerleme" : item.slug === "ges-degerleme" ? "GES Değerleme" : item.kind === "buyer" ? "Santral Satın Al" : item.kind === "seller" ? "Santralini Sat" : item.service ? "Teknik Due Diligence" : "Satılık Enerji Santralleri"}</Link>)}
      </nav>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row"><InvestmentCta kind="diligence" /><InvestmentCta kind="valuation" secondary /></div>
    </Container></section>
    {home && <section className="bg-navy-950 py-14"><Container>
      <h2 className="mb-7 text-3xl font-bold text-white">Sık sorulan sorular</h2>
      <div className="grid gap-4">{investmentFaqs.map((faq) => <details key={faq.question} className="rounded-lg border border-white/15 p-5"><summary className="cursor-pointer font-semibold text-white">{faq.question}</summary><p className="mt-4 max-w-4xl leading-8 text-steel">{faq.answer}</p></details>)}</div>
    </Container></section>}
    <section className="bg-navy-950 py-14"><Container>
      <h2 className="mb-7 text-2xl font-bold text-white">Enerji yatırım rehberleri</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{investmentArticles.map((post) => <Link key={post.slug} href={`/tr/blog/${post.slug}`} className="premium-card rounded-lg p-5 hover:border-energy-500/50"><h3 className="font-semibold text-white">{post.title}</h3><p className="mt-3 text-sm leading-6 text-steel">{post.description}</p></Link>)}</div>
    </Container></section>
  </>;
}
