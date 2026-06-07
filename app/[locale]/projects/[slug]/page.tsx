import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import { getProject, getProjects } from "@/content/projects";
import { getServices } from "@/content/services";
import type { Project } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, projectSchema } from "@/lib/schema";

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })));
}

function projectNarrative(locale: Locale, project: Project) {
  const en = locale === "en";
  if (en) {
    return {
      background: `${project.title} represents the kind of renewable energy assignment where the commercial question cannot be answered by a simple site visit or dashboard screenshot. The project context involved a ${project.capacity} ${project.type.toLowerCase()} asset in ${project.location}, with the owner seeking clearer technical control over risk, operating evidence and the next engineering decisions. In practice, projects like this often arrive after several signals have accumulated: production is below expectation, commissioning records are incomplete, recurring alarms have become accepted as normal, EPC interface ownership is unclear, or maintenance actions are being decided without enough evidence. The consulting work therefore began by defining the decision boundary. The review had to clarify what was already proven, what was assumed, what still required a test, and which actions could protect value without creating unnecessary downtime. This is especially important for renewable assets because a weak technical conclusion can move directly into lost generation, delayed acceptance, warranty disputes, lender concerns or avoidable CAPEX.`,
      technicalChallenges: `The main technical challenge was not one isolated defect; it was the interaction between engineering records, real operating behavior and owner-side decision pressure. The scope included ${project.scope.join(", ").toLowerCase()}, which meant that site observations had to be interpreted together with commissioning files, SCADA trends, alarm history, protection or inverter behavior, outage records and O&M routines. A common field problem in this type of work is that every stakeholder sees only part of the picture. The EPC team may focus on contractual completion, the O&M team may focus on keeping the plant available, and the owner may focus on revenue impact. The consultant's role is to connect those views into a single technical risk logic. For this project, the review treated commissioning evidence, operational response and documentation quality as engineering assets. Where evidence was missing, the finding was not written as a vague concern; it was linked to a recommended inspection, test, measurement or owner decision.`,
      approach: `The engineering approach followed a practical sequence: establish the project baseline, review available records, challenge the reliability of the data, inspect the risk areas, then convert findings into actions that can actually be executed. ${project.approach ?? project.summary} The analysis did not rely on generic benchmarks alone. For hydropower-related work, the review considered water-to-wire behavior, governor response, vibration or temperature history, auxiliary systems, protection settings and unit availability. For solar-related work, it considered PR loss, irradiation quality, inverter availability, string-level symptoms, soiling, curtailment and EPC handover evidence. For EPC and commissioning assignments, the focus moved to readiness gates, test ownership, interface control, energization prerequisites and punch-list discipline. This structure helps prevent a common mistake: treating symptoms as root causes. A low PR, repeated trip or delayed test may be visible in the data, but the consulting value comes from showing whether the real issue sits in design, installation, control logic, grid interface, O&M response or documentation quality.`,
      findings: `The findings were grouped so the owner could distinguish immediate operating risks from medium-term improvement opportunities. ${project.commissioning} ${project.om} This distinction matters because not every technical issue deserves the same response. Some findings require immediate correction before energization or continued operation. Others should be monitored through SCADA trends, checked during the next planned outage or converted into contractual follow-up with the EPC contractor. The review also looked for evidence quality: whether test forms were complete, whether alarm and event records were consistent, whether as-built documents matched site reality, whether operating logs showed repeatability, and whether maintenance actions were linked to measured losses. In a realistic plant environment, the most valuable findings are not the longest findings. They are the findings that allow management to decide what to do next, who owns it, what evidence is still missing and how much generation, safety or compliance risk is attached.`,
      recommendations: `Recommendations were prepared as engineering actions rather than marketing statements. The priority was to define what should be corrected immediately, what should be validated through a targeted test, what should be included in the next outage scope and what should be tracked through operating discipline. The recommended actions included ${project.actions?.join("; ").toLowerCase()}. Each recommendation was ranked by safety impact, generation impact, grid compliance, warranty relevance, outage dependency, implementation difficulty and cost exposure. This is the difference between a useful technical advisory output and a generic report. Owners, EPC contractors and investors need recommendations they can place into a work plan, a budget discussion, a contract meeting or a plant performance review. The project output therefore connected every recommendation to an expected decision: accept the risk, monitor it, correct it, test it again, assign it to a contractor, or plan it during a future outage.`,
      results: `The results were deliberately framed around owner value and operational usefulness. The review delivered ${project.results.join(", ").toLowerCase()}. Beyond those direct outputs, the work improved the quality of discussion between technical teams and decision-makers. Instead of debating impressions, the project created a shared evidence base: what was measured, what was missing, what risk level was reasonable, and which actions had the strongest value. ${project.lessons?.join(" ")} In renewable energy projects, this kind of clarity has a compounding effect. Better commissioning evidence supports smoother handover. Better O&M prioritization reduces repeated losses. Better EPC interface control reduces delay and claim risk. Better technical audit evidence supports investment, acquisition and refinancing decisions. The case therefore demonstrates how independent engineering consultancy can convert fragmented project information into a decision-ready technical roadmap.`
    };
  }

  return {
    background: `${project.title}, yalnizca saha ziyareti veya dashboard ekran goruntusuyle cevaplanamayacak yenilenebilir enerji kararlarina iyi bir ornektir. Proje baglami ${project.location} lokasyonunda ${project.capacity} kapasiteli bir ${project.type.toLowerCase()} varligi uzerine kuruluydu ve isveren teknik risk, isletme kaniti ve bir sonraki muhendislik kararlarini daha net kontrol etmek istiyordu. Bu tip projeler genellikle birden fazla sinyal biriktikten sonra gundeme gelir: uretim beklentinin altindadir, devreye alma kayitlari eksiktir, tekrarlayan alarmlar normal kabul edilmeye baslamistir, EPC arayuz sahipligi belirsizdir veya bakim aksiyonlari yeterli kanit olmadan secilmektedir. Bu nedenle danismanlik calismasi once karar sinirini tanimladi. Inceleme neyin kanitlandigini, neyin varsayim oldugunu, neyin test gerektirdigini ve hangi aksiyonlarin gereksiz durus yaratmadan deger koruyabilecegini ayirdi. Yenilenebilir enerji varliklarinda zayif teknik sonuc dogrudan kayip uretim, gec kabul, garanti tartismasi, finansman riski veya gereksiz CAPEX olarak geri dondugu icin bu ayrim kritiktir.`,
    technicalChallenges: `Ana teknik zorluk tek bir izole ariza degil; muhendislik kayitlari, gercek isletme davranisi ve isveren karar baskisinin birlikte okunmasiydi. Kapsam ${project.scope.join(", ").toLowerCase()} basliklarini iceriyordu; bu nedenle saha gozlemleri devreye alma dosyalari, SCADA trendleri, alarm gecmisi, koruma veya inverter davranisi, durus kayitlari ve O&M rutinleriyle birlikte yorumlandi. Bu tur calismalarda yaygin saha problemi, her paydasin tablonun yalnizca bir bolumunu gormesidir. EPC ekibi sozlesmesel tamamlanmaya, O&M ekibi santrali calisir tutmaya, isveren ise gelir etkisine odaklanabilir. Danismanin rolu bu bakislari tek bir teknik risk mantiginda birlestirmektir. Bu projede devreye alma kaniti, operasyonel yanit ve dokumantasyon kalitesi muhendislik varligi olarak ele alindi. Kanit eksikse bulgu muğlak bir endise olarak degil; onerilen inceleme, test, olcum veya isveren karariyla birlikte yazildi.`,
    approach: `Muhendislik yaklasimi pratik bir siralama izledi: proje bazini kurmak, mevcut kayitlari incelemek, verinin guvenilirligini sorgulamak, risk alanlarini sahada kontrol etmek ve bulgulari uygulanabilir aksiyonlara cevirmek. ${project.approach ?? project.summary} Analiz yalnizca genel benchmarklara dayanmadı. HES odakli islerde su-guc davranisi, governor cevabi, vibrasyon veya sicaklik gecmisi, yardimci sistemler, koruma ayarlari ve unite emre amadeligi dikkate alindi. GES odakli islerde PR kaybi, isinim kalitesi, inverter emre amadeligi, string duzeyi belirtiler, kirlenme, kisit ve EPC teslim kaniti incelendi. EPC ve devreye alma islerinde hazirlik kapilari, test sahipligi, arayuz kontrolu, enerjilendirme on kosullari ve punch-list disiplini one cikti. Bu yapi yaygin bir hatayi engeller: semptomu kok neden sanmak. Dusuk PR, tekrarlayan trip veya geciken test veride gorunebilir; danismanlik degeri sorunun tasarim, montaj, kontrol mantigi, sebeke arayuzu, O&M yaniti veya dokumantasyon kalitesinde olup olmadigini ayirmaktir.`,
    findings: `Bulgular isverenin acil isletme risklerini orta vadeli iyilestirme firsatlarindan ayirabilecegi sekilde gruplandi. ${project.commissioning} ${project.om} Bu ayrim onemlidir; cunku her teknik konu ayni yaniti hak etmez. Bazi bulgular enerjilendirme veya devam eden isletme oncesi hemen duzeltilmelidir. Bazilari SCADA trendleriyle izlenmeli, bir sonraki planli durusta kontrol edilmeli veya EPC yuklenicisiyle sozlesmesel takip maddesine donusturulmelidir. Inceleme kanit kalitesini de kontrol etti: test formlarinin eksiksizligi, alarm ve olay kayitlarinin tutarliligi, as-built dokumanlarin saha gercegiyle uyumu, operator loglarinda tekrar edilebilirlik ve bakim aksiyonlarinin olculen kayiplara baglanip baglanmadigi. Gercek santral ortaminda en degerli bulgu en uzun bulgu degildir. En degerli bulgu yonetimin ne yapacagini, kimin sahiplenecegini, hangi kanitin eksik oldugunu ve ne kadar uretim, emniyet veya uyum riski tasidigini gosterendir.`,
    recommendations: `Oneriler pazarlama cumlesi olarak degil, muhendislik aksiyonu olarak hazirlandi. Oncelik, neyin hemen duzeltilecegini, neyin hedefli testle dogrulanacagini, neyin bir sonraki durus kapsamına alinacagini ve neyin isletme disipliniyle izlenecegini tanimlamakti. Onerilen aksiyonlar ${project.actions?.join("; ").toLowerCase()} basliklarini kapsadi. Her oneri emniyet etkisi, uretim etkisi, sebeke uyumu, garanti ilgisi, durus bagimliligi, uygulama zorlugu ve maliyet maruziyetiyle siralandi. Kullanilabilir teknik danismanlik ciktisi ile genel rapor arasindaki fark budur. Isverenler, EPC yuklenicileri ve yatirimcilar onerileri is planina, butce gorusmesine, sozlesme toplantisina veya santral performans degerlendirmesine koyabilmelidir. Bu nedenle proje ciktisi her oneriyi beklenen karara bagladi: riski kabul et, izle, duzelt, tekrar test et, yukleniciye ata veya gelecek durusta planla.`,
    results: `Sonuclar isveren degeri ve operasyonel kullanilabilirlik etrafinda cercevelendi. Inceleme ${project.results.join(", ").toLowerCase()} ciktilarini sagladi. Bunun otesinde calisma teknik ekipler ile karar vericiler arasindaki tartisma kalitesini iyilestirdi. Izlenim tartismasi yerine ortak bir kanit tabani olustu: ne olculdu, ne eksik, hangi risk seviyesi kabul edilebilir ve hangi aksiyon en yuksek degere sahip. ${project.lessons?.join(" ")} Yenilenebilir enerji projelerinde bu netlik birikimli etki yaratir. Daha iyi devreye alma kaniti daha temiz teslim saglar. Daha iyi O&M onceliklendirmesi tekrarlayan kayiplari azaltir. Daha iyi EPC arayuz kontrolu gecikme ve claim riskini dusurur. Daha iyi teknik denetim kaniti yatirim, satin alma ve finansman kararlarini destekler. Bu vaka, bagimsiz muhendislik danismanliginin parca parca proje bilgisini karar verilebilir teknik yol haritasina nasil donusturdugunu gosterir.`
  };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const project = getProject(locale, slug);
  if (!project) return {};
  const index = getProjects(locale).findIndex((item) => item.slug === slug);
  const translated = getProjects(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    alternatePath: translated ? `/projects/${translated.slug}` : undefined,
    title: project.title,
    description: project.summary
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();
  const contactHref = locale === "tr" ? "/tr/iletisim" : "/en/contact";
  const narrative = projectNarrative(locale, project);
  const services = getServices(locale);
  const relatedServices = (project.relatedServices ?? [])
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.projects, url: `/${locale}/projects` },
      { name: project.title, url: `/${locale}/projects/${project.slug}` }
    ]),
    projectSchema(locale, project),
    ...(project.faqs?.length ? [faqSchema(project.faqs)] : [])
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.projects, href: `/${locale}/projects` }, { label: project.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{project.category}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contactHref} className="rounded-md bg-energy-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
            <Link href={locale === "tr" ? "/tr/hizmetler" : "/en/services"} className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {dict.nav.services}
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="premium-card rounded-lg p-6">
            {[
              [dict.labels.capacity, project.capacity],
              [dict.labels.location, project.location],
              [dict.labels.type, project.type],
              [dict.labels.role, project.role]
            ].map(([label, value]) => (
              <div key={label} className="border-b border-white/10 py-4 last:border-0">
                <p className="text-xs uppercase tracking-[0.18em] text-energy-500">{label}</p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </aside>
          <div>
            <div className="space-y-10">
              {[
                [locale === "en" ? "Project Background" : "Proje Arka Plani", narrative.background],
                [locale === "en" ? "Technical Challenges" : "Teknik Zorluklar", narrative.technicalChallenges],
                [locale === "en" ? "Engineering Approach" : "Muhendislik Yaklasimi", narrative.approach],
                [locale === "en" ? "Findings" : "Bulgular", narrative.findings],
                [locale === "en" ? "Recommendations" : "Oneriler", narrative.recommendations],
                [locale === "en" ? "Results and Engineering Value" : "Sonuclar ve Muhendislik Degeri", narrative.results]
              ].map(([heading, content]) => (
                <section key={heading} className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.18)]">
                  <h2 className="text-2xl font-semibold text-white">{heading}</h2>
                  <p className="mt-4 leading-8 text-steel">{content}</p>
                </section>
              ))}
            </div>
            {project.challenge || project.approach ? (
              <div className="my-10 grid gap-5 sm:grid-cols-2">
                {project.challenge ? (
                  <div className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-5">
                    <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Challenge" : "Zorluk"}</h2>
                    <p className="mt-4 text-sm leading-7 text-steel">{project.challenge}</p>
                  </div>
                ) : null}
                {project.approach ? (
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Approach" : "Yaklaşım"}</h2>
                    <p className="mt-4 text-sm leading-7 text-steel">{project.approach}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-semibold text-white">{dict.labels.commissioning}</h2>
                <p className="mt-4 text-sm leading-7 text-steel">{project.commissioning}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-semibold text-white">{dict.labels.om}</h2>
                <p className="mt-4 text-sm leading-7 text-steel">{project.om}</p>
              </div>
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-white">{dict.labels.technicalScope}</h2>
            <ul className="mt-6 grid gap-3">
              {project.scope.map((item) => <li key={item} className="border-l-2 border-energy-500 pl-4 leading-7 text-steel">{item}</li>)}
            </ul>
            {project.actions?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Technical Actions" : "Teknik Aksiyonlar"}</h2>
                <ul className="mt-6 grid gap-3">
                  {project.actions.map((item) => <li key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-steel">{item}</li>)}
                </ul>
              </>
            ) : null}
            {project.beforeAfterMetrics?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Before / After Performance Metrics" : "Once / Sonra Performans Metrikleri"}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.beforeAfterMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-energy-500/20 bg-energy-500/10 p-5">
                      <h3 className="text-lg font-semibold text-white">{metric.label}</h3>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-md border border-white/10 bg-navy-950/60 p-3">
                          <p className="text-xs uppercase tracking-[0.16em] text-steel">{locale === "en" ? "Before" : "Once"}</p>
                          <p className="mt-2 font-semibold text-white">{metric.before}</p>
                        </div>
                        <div className="rounded-md border border-energy-500/30 bg-navy-950/60 p-3">
                          <p className="text-xs uppercase tracking-[0.16em] text-energy-500">{locale === "en" ? "After" : "Sonra"}</p>
                          <p className="mt-2 font-semibold text-white">{metric.after}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-steel">{metric.impact}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            {project.calculations?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Engineering Calculations" : "Muhendislik Hesaplari"}</h2>
                <div className="mt-6 grid gap-3">
                  {project.calculations.map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 font-mono text-sm leading-7 text-steel">{item}</div>
                  ))}
                </div>
              </>
            ) : null}
            <h2 className="mt-10 text-2xl font-semibold text-white">
              {locale === "en" ? "Technical Contribution" : "Teknik Katki"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "The case study is presented from an engineering delivery perspective: what was checked, which site risks mattered, how commissioning or O&M evidence was interpreted, and how results supported owner decisions."
                : "Bu vaka calismasi muhendislik teslim perspektifiyle sunulur: hangi kontrollerin yapildigi, hangi saha risklerinin kritik oldugu, devreye alma veya isletme kanitlarinin nasil yorumlandigi ve sonuclarin isveren kararlarini nasil destekledigi."}
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-white">{dict.labels.results}</h2>
            <ul className="mt-6 grid gap-3">
              {project.results.map((item) => <li key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-steel">{item}</li>)}
            </ul>
            {project.lessons?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Lessons Learned" : "Çıkarılan Dersler"}</h2>
                <ul className="mt-6 grid gap-3">
                  {project.lessons.map((item) => <li key={item} className="border-l-2 border-energy-500 pl-4 leading-7 text-steel">{item}</li>)}
                </ul>
              </>
            ) : null}
            {relatedServices.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Related Services" : "İlgili Hizmetler"}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${locale}/services/${service.slug}`}
                      className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-energy-500/60 hover:bg-energy-500/10"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-energy-500">{service.eyebrow}</p>
                      <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-energy-500">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-steel">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
            {project.faqs?.length ? (
              <>
                <h2 className="mt-10 text-2xl font-semibold text-white">{locale === "en" ? "Project FAQ" : "Proje SSS"}</h2>
                <div className="mt-6 grid gap-4">
                  {project.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-steel">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
            {project.authorExpertise ? (
              <section className="mt-10 rounded-lg border border-energy-500/25 bg-[radial-gradient(circle_at_10%_0%,rgba(47,183,255,0.18),transparent_20rem),rgba(255,255,255,0.04)] p-6">
                <h2 className="text-2xl font-semibold text-white">{locale === "en" ? "Author Expertise Note" : "Uzmanlik Notu"}</h2>
                <p className="mt-4 leading-8 text-steel">{project.authorExpertise}</p>
              </section>
            ) : null}
          </div>
        </Container>
      </section>
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {locale === "en" ? "Discuss a Similar Technical Challenge" : "Benzer Bir Teknik Konuyu Görüşün"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "Share your project type, current risk, capacity and decision timeline to request a technical consultation, operational assessment or EPC advisory review."
                : "Teknik danışmanlık, operasyonel değerlendirme veya EPC danışmanlık incelemesi için proje türünü, mevcut riski, kapasiteyi ve karar takvimini paylaşın."}
            </p>
          </div>
          <ContactForm dict={dict} locale={locale} />
        </Container>
      </section>
      <CtaSection locale={locale} />
    </>
  );
}
