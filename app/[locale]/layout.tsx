import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnalyticsFoundation } from "@/components/analytics-foundation";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://www.oztoprakenerji.com"),
    title: {
      default: dict.seo.siteTitle,
      template: `%s | ${dict.brand.name}`
    },
    description: dict.seo.siteDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        tr: "/tr"
      }
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
    },
    openGraph: {
      title: dict.seo.siteTitle,
      description: dict.seo.siteDescription,
      url: `/${locale}`,
      siteName: dict.brand.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.siteTitle,
      description: dict.seo.siteDescription
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <AnalyticsFoundation />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(locale), localBusinessSchema(locale), websiteSchema(locale)])
          }}
        />
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton phone={dict.contact.phoneRaw} label={dict.contact.whatsapp} />
      </body>
    </html>
  );
}
