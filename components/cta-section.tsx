import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { contactPath } from "@/lib/routes";

export function CtaSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-energy-500 py-16 text-navy-950">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.22),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(7,17,31,0.24),transparent_24rem)]" />
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative">
          <h2 className="text-3xl font-bold">{dict.home.ctaTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-navy-900">{dict.home.ctaText}</p>
        </div>
        <div className="relative flex flex-wrap gap-3">
          <ButtonLink href={contactPath(locale)} variant="secondary">{dict.nav.consultation}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
