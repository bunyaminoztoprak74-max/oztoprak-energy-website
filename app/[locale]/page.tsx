import type { Metadata } from "next";
import { Zap, ShieldCheck, Gauge, Building2, Activity, Settings2, RadioTower, Waves } from "lucide-react";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { FeatureCard, LinkCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { getDictionary } from "@/content/dictionaries";
import { getServices } from "@/content/services";
import { getProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n";
import { localBusinessSchema } from "@/lib/schema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  return buildMetadata({ locale, path: "/", title: dict.seo.siteTitle, description: dict.seo.siteDescription });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const services = getServices(locale);
  const projects = getProjects(locale);
  const metrics = [
    ["27+", dict.labels.years],
    ["274+", dict.labels.mw],
    ["8", dict.labels.projects],
    [locale === "en" ? "Hydro + Solar" : "HES + GES", dict.labels.expertise],
    ["EPC", locale === "en" ? "EPC & commissioning experience" : "EPC ve devreye alma deneyimi"]
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(locale)) }} />
      <section className="hero-industrial relative overflow-hidden bg-navy-950">
        <Container className="relative z-10 grid min-h-[78vh] items-center py-16 sm:py-20">
          <div className="max-w-4xl">
            <MotionReveal>
            <p className="mb-5 inline-flex rounded-md border border-energy-500/30 bg-energy-500/10 px-4 py-2 text-sm font-semibold text-energy-500">
              {dict.brand.tagline}
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">{dict.home.heroText}</p>
            <p className="mt-4 text-base font-semibold text-white">{dict.home.proof}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/${locale}/contact`}>{dict.nav.consultation}</ButtonLink>
            </div>
            </MotionReveal>
            <div className="mt-10 grid max-w-4xl gap-3 text-sm text-white/82 sm:grid-cols-3">
              {(locale === "en"
                ? ["Control room discipline", "Grid interface judgment", "Commissioning evidence review"]
                : ["Kumanda odasi disiplini", "Sebeke arayuzu yorumu", "Devreye alma kanit incelemesi"]
              ).map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-[rgba(7,17,31,0.45)] px-4 py-3 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map(([value, label], index) => (
              <MotionReveal key={label} delay={index * 0.04}>
                <div className="group flex h-full min-h-[154px] flex-col justify-between rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.035))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.09] hover:shadow-[0_26px_86px_rgba(47,183,255,0.14)] sm:p-6">
                  <p className="text-3xl font-bold leading-none text-white drop-shadow-[0_0_18px_rgba(47,183,255,0.2)] sm:text-4xl">{value}</p>
                  <p className="mt-5 text-sm font-semibold leading-6 text-steel">{label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 section-pad">
        <Container>
          <SectionHeading title={dict.home.servicesTitle} description={dict.seo.siteDescription} />
          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.03}>
                <LinkCard href={`/${locale}/services/${service.slug}`} title={service.title} text={service.description} meta={service.eyebrow} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container>
          <SectionHeading
            title={dict.home.projectsTitle}
            description={locale === "en"
              ? "274+ MW completed project experience across hydropower, solar, commissioning, O&M optimization and technical audits."
              : "HES, GES, devreye alma, isletme bakim optimizasyonu ve teknik denetim alanlarinda 274+ MW tamamlanmis proje deneyimi."
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <LinkCard key={project.slug} href={`/${locale}/projects/${project.slug}`} title={project.title} text={`${project.capacity} · ${project.location} · ${project.summary}`} meta={project.category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 section-pad">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={dict.home.whyTitle} />
            <div className="mt-8 grid gap-4">
              {dict.home.reasons.map((reason) => (
                <FeatureCard key={reason} title={reason} text={dict.home.problemSolution} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title={dict.home.expertiseTitle} />
            <div className="mt-8 grid gap-4">
              {dict.home.expertise.map((item) => (
                <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Gauge className="mt-1 h-5 w-5 shrink-0 text-energy-500" />
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container>
          <SectionHeading
            eyebrow={locale === "en" ? "Operational Expertise" : "Operasyonel Uzmanlik"}
            title={locale === "en" ? "Power Plant Operations Knowledge Behind the Consultancy" : "Danismanligin Arkasindaki Santral Isletme Bilgisi"}
            description={locale === "en"
              ? "Technical recommendations are grounded in how plants actually behave under dispatch, grid events, commissioning tests and long-term O&M constraints."
              : "Teknik oneriler; santrallerin yuk tevzi, sebeke olaylari, devreye alma testleri ve uzun donem isletme-bakim kisitlari altinda gercekte nasil davrandigina dayanir."
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {(locale === "en"
              ? [
                  ["AGC-compatible operations", "Review operating discipline for AGC participation, setpoint tracking, ramp behavior and control room procedures.", Activity],
                  ["Governor response", "Assess turbine governor stability, load acceptance, transient behavior and practical tuning risks.", Settings2],
                  ["Reactive power control", "Evaluate voltage control, AVR behavior, grid code expectations and reactive power capability under field conditions.", RadioTower],
                  ["Operational optimization", "Connect alarms, outage history, auxiliary systems and generation losses to measurable corrective actions.", Waves]
                ]
              : [
                  ["AGC uyumlu isletme", "AGC katilimi, set noktasi takibi, rampa davranisi ve kumanda merkezi prosedurleri isletme disipliniyle birlikte incelenir.", Activity],
                  ["Governor tepkisi", "Turbin governor kararliligi, yuk alma davranisi, gecici rejim ve pratik ayar riskleri degerlendirilir.", Settings2],
                  ["Reaktif guc kontrolu", "Gerilim kontrolu, AVR davranisi, sebeke kodu beklentileri ve saha kosullarinda reaktif guc kabiliyeti incelenir.", RadioTower],
                  ["Operasyonel optimizasyon", "Alarm kayitlari, durus gecmisi, yardimci sistemler ve uretim kayiplari olculebilir duzeltici aksiyonlara baglanir.", Waves]
                ]
            ).map(([title, text, Icon]) => {
              const CardIcon = Icon as typeof Activity;
              return (
                <MotionReveal key={title as string}>
                  <div className="premium-card h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-energy-500/50">
                    <CardIcon className="mb-5 h-6 w-6 text-energy-500" />
                    <h3 className="text-lg font-semibold text-white">{title as string}</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">{text as string}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading title={dict.home.industriesTitle} description={dict.home.problemSolution} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.home.industries.map((industry, index) => {
              const icons = [Building2, ShieldCheck, Zap, Gauge, Building2];
              const Icon = icons[index] ?? Building2;
              return (
                <div key={industry} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="mb-5 h-6 w-6 text-energy-500" />
                  <h3 className="font-semibold text-white">{industry}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 section-pad">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading title={dict.home.problemTitle} description={dict.home.problemSolution} />
          </div>
          <div className="grid gap-4">
            {(locale === "en"
              ? [
                  ["Problem", "Incomplete commissioning records, unresolved punch-list items and protection settings that were accepted without field validation."],
                  ["Consultant response", "Review test evidence, operating alarms, outage history and EPC assumptions before recommending corrective engineering actions."],
                  ["Outcome", "A decision-ready technical path for owners, EPC teams and investors who need risk, cost and generation impact stated clearly."]
                ]
              : [
                  ["Problem", "Eksik devreye alma kayitlari, kapanmamis eksik is maddeleri ve sahada dogrulanmadan kabul edilen koruma ayarlari."],
                  ["Danisman yaklasimi", "Duzeltici muhendislik aksiyonlari oncesinde test kanitlari, alarm kayitlari, durus gecmisi ve EPC varsayimlari incelenir."],
                  ["Sonuc", "Risk, maliyet ve uretim etkisini net gormek isteyen isveren, EPC ekibi ve yatirimci icin karara hazir teknik yol haritasi."]
                ]
            ).map(([title, text]) => (
              <div key={title} className="premium-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
