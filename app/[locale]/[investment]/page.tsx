import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { investmentPages } from "@/content/investments";
import { InvestmentPage } from "@/components/investment-page";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; investment: string }> };

export function generateStaticParams() {
  return investmentPages.map((page) => ({ locale: "tr", investment: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, investment } = await params;
  const page = investmentPages.find((item) => item.slug === investment);
  if (locale !== "tr" || !page) notFound();
  const meta = buildMetadata({ locale: "tr", path: `/${page.slug}`, title: page.title, description: page.description, hasTranslation: false });
  return { ...meta, title: { absolute: page.title }, alternates: { canonical: `/tr/${page.slug}`, languages: {} }, openGraph: { ...meta.openGraph, alternateLocale: [] } };
}

export default async function Page({ params }: Props) {
  const { locale, investment } = await params;
  const page = investmentPages.find((item) => item.slug === investment);
  if (locale !== "tr" || !page) notFound();
  return <InvestmentPage page={page} />;
}
