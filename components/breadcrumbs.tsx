import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";

export function Breadcrumbs({ locale, items }: { locale: Locale; items: Array<{ label: string; href?: string }> }) {
  const dict = getDictionary(locale);

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-steel">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={`/${locale}`} className="hover:text-energy-500">{dict.labels.breadcrumbsHome}</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className="text-white/30">/</span>
            {item.href ? <Link href={item.href} className="hover:text-energy-500">{item.label}</Link> : <span className="text-white">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
