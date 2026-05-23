import { Mail, Phone, CalendarDays, Linkedin } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { linkedinUrl } from "@/lib/social";

export function ContactPageContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="energy-grid bg-navy-950 py-20">
      <Container>
        <Breadcrumbs locale={locale} items={[{ label: dict.nav.contact }]} />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="text-balance text-4xl font-bold text-white sm:text-6xl">{dict.contact.title}</h1>
            <p className="mt-6 text-lg leading-8 text-steel">{dict.contact.description}</p>
            <div className="mt-10 grid gap-4">
              <a href={`mailto:${dict.contact.email}`} className="premium-card flex items-center gap-4 rounded-lg p-5 text-white hover:border-energy-500">
                <Mail className="h-5 w-5 text-energy-500" /> {dict.contact.email}
              </a>
              <a href={`tel:${dict.contact.phone.replaceAll(" ", "")}`} className="premium-card flex items-center gap-4 rounded-lg p-5 text-white hover:border-energy-500">
                <Phone className="h-5 w-5 text-energy-500" /> {dict.contact.phone}
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card flex items-center gap-4 rounded-lg p-5 text-white hover:border-energy-500"
              >
                <Linkedin className="h-5 w-5 text-energy-500" /> LinkedIn
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-dashed border-white/15 bg-white/[0.04] p-5 text-steel">
                <CalendarDays className="h-5 w-5 text-energy-500" /> {dict.contact.calendly}
              </div>
            </div>
          </div>
          <ContactForm dict={dict} locale={locale} />
        </div>
      </Container>
    </section>
  );
}
