"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Share2 } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { analyticsEvents } from "@/lib/analytics";

type BlogSearchPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  tags?: string[];
  trending?: boolean;
};

export function BlogSearch({ locale, posts }: { locale: Locale; posts: BlogSearchPost[] }) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return posts;
    return posts.filter((post) => [post.title, post.description, post.category].join(" ").toLowerCase().includes(needle));
  }, [posts, query]);

  return (
    <div>
      <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus-within:border-energy-500">
        <Search className="h-5 w-5 shrink-0 text-energy-500" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            window.oztoprakTrack?.(analyticsEvents.blogSearch, { locale, query_length: event.target.value.length });
          }}
          placeholder={locale === "en" ? "Search EPC, hydropower, commissioning..." : "EPC, HES, devreye alma ara..."}
          className="w-full bg-transparent text-sm outline-none placeholder:text-steel"
        />
      </label>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group flex min-h-[250px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.07]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-energy-500">
              {post.category} - {post.readingTime}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-white group-hover:text-energy-500">{post.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-steel">{post.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.trending ? (
                <span className="rounded-md border border-energy-500/35 bg-energy-500/10 px-2.5 py-1 text-xs font-semibold text-energy-500">
                  {locale === "en" ? "Trending" : "Trend"}
                </span>
              ) : null}
              {(post.tags ?? []).slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-steel">
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              {locale === "en" ? "Read technical article" : "Teknik yaziyi oku"}
              <Share2 className="h-4 w-4 text-energy-500" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
