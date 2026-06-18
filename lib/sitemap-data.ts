import { getCategories, getPosts } from "@/content/blog";
import { getProjects } from "@/content/projects";
import { getServices } from "@/content/services";
import { getClusters, getIndustries, getLocations, getPillars, getProblems } from "@/content/programmatic-seo";

export const sitemapBaseUrl = "https://www.oztoprakenerji.com";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type AlternateMap = {
  en: string;
  tr: string;
  xDefault?: string;
};

export type SitemapEntry = {
  path: string;
  lastModified?: Date | string;
  changeFrequency?: ChangeFrequency;
  priority?: number;
  alternates?: AlternateMap;
};

const buildStamp = new Date().toISOString();

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isoDate(value?: Date | string) {
  if (!value) return buildStamp;
  return new Date(value).toISOString();
}

function absoluteUrl(path: string) {
  return `${sitemapBaseUrl}${path}`;
}

function dedupeEntries(entries: SitemapEntry[]) {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });
}

function pairedEntries(en: string, tr: string, options: Omit<SitemapEntry, "path" | "alternates"> = {}) {
  const alternates = { en, tr, xDefault: en };
  return [
    { path: en, alternates, ...options },
    { path: tr, alternates, ...options }
  ];
}

export function buildSitemapIndex(paths: string[]) {
  const items = paths
    .map(
      (path) => `  <sitemap>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    <lastmod>${buildStamp}</lastmod>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export function buildUrlSet(entries: SitemapEntry[]) {
  const urls = dedupeEntries(entries)
    .map((entry) => {
      const alternateLinks = entry.alternates
        ? [
            ["en", entry.alternates.en],
            ["tr", entry.alternates.tr],
            ["x-default", entry.alternates.xDefault ?? entry.alternates.en]
          ]
            .map(
              ([locale, path]) =>
                `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(absoluteUrl(path))}" />`
            )
            .join("\n")
        : "";

      return `  <url>
    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>
${alternateLinks ? `${alternateLinks}\n` : ""}    <lastmod>${isoDate(entry.lastModified)}</lastmod>
${entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>\n` : ""}${entry.priority ? `    <priority>${entry.priority.toFixed(1)}</priority>\n` : ""}  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

export function pageSitemapEntries() {
  const entries: SitemapEntry[] = [
    ...pairedEntries("/en", "/tr", { changeFrequency: "weekly", priority: 1.0 }),
    ...pairedEntries("/en/about", "/tr/about", { changeFrequency: "monthly", priority: 0.8 }),
    ...pairedEntries("/en/projects", "/tr/projects", { changeFrequency: "monthly", priority: 0.8 }),
    ...pairedEntries("/en/contact", "/tr/iletisim", { changeFrequency: "monthly", priority: 0.9 }),
    ...pairedEntries("/en/privacy-policy", "/tr/privacy-policy", { changeFrequency: "yearly", priority: 0.3 }),
    ...pairedEntries("/en/terms", "/tr/terms", { changeFrequency: "yearly", priority: 0.3 }),
    ...pairedEntries("/en/topics", "/tr/topics", { changeFrequency: "monthly", priority: 0.7 }),
    ...pairedEntries("/en/problems", "/tr/problems", { changeFrequency: "monthly", priority: 0.7 }),
    ...pairedEntries("/en/locations", "/tr/locations", { changeFrequency: "monthly", priority: 0.7 }),
    ...pairedEntries("/en/pillars", "/tr/pillars", { changeFrequency: "monthly", priority: 0.7 }),
    ...pairedEntries("/en/industries", "/tr/industries", { changeFrequency: "monthly", priority: 0.8 }),
    ...pairedEntries("/en/industrial-bill-review", "/tr/industrial-bill-review", { changeFrequency: "monthly", priority: 0.9 }),
    ...pairedEntries("/en/reactive-penalty-analysis", "/tr/reactive-penalty-analysis", { changeFrequency: "monthly", priority: 0.85 }),
    ...pairedEntries("/en/industrial-savings-checklist", "/tr/industrial-savings-checklist", { changeFrequency: "monthly", priority: 0.8 })
  ];

  getProjects("en").forEach((project, index) => {
    const trProject = getProjects("tr")[index];
    if (!trProject) return;
    entries.push(
      ...pairedEntries(`/en/projects/${project.slug}`, `/tr/projects/${trProject.slug}`, {
        changeFrequency: "monthly",
        priority: 0.7
      })
    );
  });

  getClusters("en").forEach((cluster, index) => {
    const trCluster = getClusters("tr")[index];
    if (!trCluster) return;
    entries.push(
      ...pairedEntries(`/en/topics/${cluster.slug}`, `/tr/topics/${trCluster.slug}`, {
        changeFrequency: "monthly",
        priority: 0.7
      })
    );
  });

  getProblems("en").forEach((problem, index) => {
    const trProblem = getProblems("tr")[index];
    if (!trProblem) return;
    entries.push(
      ...pairedEntries(`/en/problems/${problem.slug}`, `/tr/problems/${trProblem.slug}`, {
        changeFrequency: "monthly",
        priority: 0.7
      })
    );
  });

  getLocations("en").forEach((location, index) => {
    const trLocation = getLocations("tr")[index];
    if (!trLocation) return;
    entries.push(
      ...pairedEntries(`/en/locations/${location.slug}`, `/tr/locations/${trLocation.slug}`, {
        changeFrequency: "monthly",
        priority: 0.7
      })
    );
  });

  getPillars("en").forEach((pillar, index) => {
    const trPillar = getPillars("tr")[index];
    if (!trPillar) return;
    entries.push(
      ...pairedEntries(`/en/pillars/${pillar.slug}`, `/tr/pillars/${trPillar.slug}`, {
        changeFrequency: "monthly",
        priority: 0.8
      })
    );
  });

  getIndustries("en").forEach((industry, index) => {
    const trIndustry = getIndustries("tr")[index];
    if (!trIndustry) return;
    entries.push(
      ...pairedEntries(`/en/industries/${industry.slug}`, `/tr/industries/${trIndustry.slug}`, {
        changeFrequency: "monthly",
        priority: 0.8
      })
    );
  });

  return dedupeEntries(entries);
}

export function blogSitemapEntries() {
  const entries: SitemapEntry[] = [
    ...pairedEntries("/en/blog", "/tr/blog", { changeFrequency: "weekly", priority: 0.8 })
  ];

  getPosts("en").forEach((post, index) => {
    const trPost = getPosts("tr")[index];
    if (!trPost) return;
    entries.push(
      ...pairedEntries(`/en/blog/${post.slug}`, `/tr/blog/${trPost.slug}`, {
        lastModified: post.date,
        changeFrequency: "monthly",
        priority: post.featured ? 0.8 : 0.7
      })
    );
  });

  getCategories("en").forEach((category, index) => {
    const trCategory = getCategories("tr")[index];
    if (!trCategory) return;
    entries.push(
      ...pairedEntries(`/en/blog/category/${category.slug}`, `/tr/blog/category/${trCategory.slug}`, {
        changeFrequency: "weekly",
        priority: 0.6
      })
    );
  });

  return dedupeEntries(entries);
}

export function serviceSitemapEntries() {
  const entries: SitemapEntry[] = [
    ...pairedEntries("/en/services", "/tr/hizmetler", { changeFrequency: "monthly", priority: 0.9 })
  ];

  getServices("en").forEach((service, index) => {
    const trService = getServices("tr")[index];
    if (!trService) return;
    entries.push(
      ...pairedEntries(`/en/services/${service.slug}`, `/tr/services/${trService.slug}`, {
        changeFrequency: "monthly",
        priority: 0.9
      })
    );
  });

  return dedupeEntries(entries);
}
