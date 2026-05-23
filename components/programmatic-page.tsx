import Link from "next/link";
import { MapPin, Network, ShieldCheck, Target } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { RelatedContent } from "@/components/related-content";
import { AuthorityMetrics } from "@/components/authority-metrics";
import { ConversionFunnel } from "@/components/conversion-funnel";
import { EngineeringVisualBlocks } from "@/components/engineering-visual-blocks";
import { StickyConsultationCta } from "@/components/sticky-consultation-cta";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { contactPath, servicesIndexPath } from "@/lib/routes";

type ProgrammaticPageProps = {
  locale: Locale;
  title: string;
  eyebrow: string;
  description: string;
  intro?: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  primaryLinks: Array<{ title: string; href: string; description: string }>;
  bullets: string[];
  sections?: Array<{ heading: string; content: string }>;
  expertCommentary?: string;
  fieldProblems?: string[];
  recommendedActions?: string[];
  deliverables?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  cta?: string;
  conclusion?: string;
  contextualLinks?: Array<{ title: string; href: string; description: string }>;
  schema: unknown;
  relatedSeed: {
    services?: string[];
    problems?: string[];
    categories?: string[];
    exclude?: string;
  };
  stats?: Array<[string, string]>;
};

export function ProgrammaticPage({
  locale,
  title,
  eyebrow,
  description,
  intro,
  breadcrumbs,
  primaryLinks,
  bullets,
  sections = [],
  expertCommentary,
  fieldProblems = [],
  recommendedActions = [],
  deliverables = [],
  faqs = [],
  cta,
  conclusion,
  contextualLinks = [],
  schema,
  relatedSeed,
  stats
}: ProgrammaticPageProps) {
  const dict = getDictionary(locale);
  const icons = [Target, ShieldCheck, Network, MapPin];

  return (
    <>
      <StickyConsultationCta locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="energy-grid bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={breadcrumbs} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{eyebrow}</p>
          <h1 className="max-w-5xl text-balance text-4xl font-bold text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{description}</p>
          {intro ? <p className="mt-5 max-w-4xl text-base leading-8 text-white/85">{intro}</p> : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={contactPath(locale)}>{dict.nav.consultation}</ButtonLink>
            <ButtonLink href={servicesIndexPath(locale)} variant="secondary">{dict.nav.services}</ButtonLink>
          </div>
          {stats ? (
            <div className="mt-12 grid gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="premium-card rounded-lg p-5">
                  <p className="text-2xl font-bold text-energy-500">{value}</p>
                  <p className="mt-2 text-sm text-steel">{label}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-12">
            <AuthorityMetrics locale={locale} />
          </div>
        </Container>
      </section>
      <EngineeringVisualBlocks locale={locale} />

      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">{locale === "en" ? "Engineering Assessment Scope" : "Mühendislik Değerlendirme Kapsamı"}</h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "The scope is written for technical buyers who need evidence, judgment and clear next actions rather than generic marketing copy."
                : "Kapsam; genel tanıtım metni yerine kanıt, mühendislik yorumu ve net sonraki aksiyon arayan teknik karar vericiler için yazılmıştır."}
            </p>
            <div className="mt-8 grid gap-4">
              {bullets.map((bullet, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={bullet} className="premium-card flex gap-4 rounded-lg p-5">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-energy-500" />
                    <p className="text-sm leading-7 text-steel">{bullet}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <aside className="premium-card rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Recommended Next Pages" : "Önerilen Sonraki Sayfalar"}</h2>
            <div className="mt-6 grid gap-4">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-md border border-white/10 p-4 transition hover:border-energy-500">
                  <span className="font-semibold text-white">{link.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-steel">{link.description}</span>
                </Link>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      {sections.length > 0 || deliverables.length > 0 ? (
        <section className="bg-navy-950 py-20">
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white">{locale === "en" ? "Consultant Notes" : "Danışman Notları"}</h2>
              <div className="mt-8 grid gap-8">
                {sections.map((section) => (
                  <section key={section.heading} className="premium-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white">{section.heading}</h3>
                    <p className="mt-4 leading-8 text-steel">{section.content}</p>
                  </section>
                ))}
              </div>
            </div>
            {deliverables.length > 0 ? (
              <aside className="rounded-lg border border-energy-500/30 bg-energy-500/10 p-6 shadow-glow">
                <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Expected Deliverables" : "Beklenen Teslimatlar"}</h2>
                <ul className="mt-6 grid gap-4">
                  {deliverables.map((item) => (
                    <li key={item} className="border-l-2 border-energy-500 pl-4 text-sm leading-7 text-steel">{item}</li>
                  ))}
                </ul>
                {cta ? (
                  <div className="mt-8 rounded-md bg-navy-950 p-5">
                    <p className="text-sm leading-7 text-white">{cta}</p>
                    <div className="mt-5">
                      <ButtonLink href={contactPath(locale)}>{dict.nav.consultation}</ButtonLink>
                    </div>
                  </div>
                ) : null}
              </aside>
            ) : null}
          </Container>
        </section>
      ) : null}

      {expertCommentary || fieldProblems.length > 0 || recommendedActions.length > 0 ? (
        <section className="bg-navy-900 py-20">
          <Container className="grid gap-8 lg:grid-cols-3">
            {expertCommentary ? (
              <div className="rounded-lg border border-energy-500/30 bg-energy-500/10 p-6 shadow-glow lg:col-span-1">
                <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Expert Commentary" : "Uzman Yorumu"}</h2>
                <p className="mt-4 text-sm leading-7 text-steel">{expertCommentary}</p>
              </div>
            ) : null}
            {fieldProblems.length > 0 ? (
              <div className="premium-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Common Field Problems" : "Sahada Sık Görülen Problemler"}</h2>
                <ul className="mt-5 grid gap-3">
                  {fieldProblems.map((problem) => (
                    <li key={problem} className="border-l-2 border-energy-500 pl-4 text-sm leading-7 text-steel">{problem}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {recommendedActions.length > 0 ? (
              <div className="premium-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Recommended Engineering Actions" : "Önerilen Mühendislik Aksiyonları"}</h2>
                <ol className="mt-5 grid gap-3">
                  {recommendedActions.map((action, index) => (
                    <li key={action} className="flex gap-3 text-sm leading-7 text-steel">
                      <span className="font-semibold text-energy-500">{index + 1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {faqs.length > 0 ? (
        <section className="bg-navy-900 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-white">{locale === "en" ? "Technical FAQ" : "Teknik SSS"}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.question} className="premium-card rounded-lg p-6">
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {contextualLinks.length > 0 || conclusion ? (
        <section className="bg-navy-950 py-20">
          <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            {conclusion ? (
              <div>
                <h2 className="text-3xl font-semibold text-white">{locale === "en" ? "Consultant Conclusion" : "Danışman Sonucu"}</h2>
                <p className="mt-5 leading-8 text-steel">{conclusion}</p>
              </div>
            ) : null}
            {contextualLinks.length > 0 ? (
              <aside className="premium-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white">{locale === "en" ? "Contextual Engineering Links" : "Bağlamsal Mühendislik Linkleri"}</h2>
                <div className="mt-5 grid gap-4">
                  {contextualLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-md border border-white/10 p-4 transition hover:border-energy-500">
                      <span className="font-semibold text-white">{link.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-steel">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            ) : null}
          </Container>
        </section>
      ) : null}

      <ConversionFunnel locale={locale} />
      <RelatedContent locale={locale} seed={relatedSeed} />
    </>
  );
}
