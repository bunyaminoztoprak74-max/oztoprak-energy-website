import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, ".next", "server", "app");
const canonicalHost = "https://www.oztoprakenerji.com";

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

function fileToUrl(file) {
  const relative = path.relative(appDir, file).replaceAll("\\", "/");
  if (!relative.endsWith(".html")) return null;
  const withoutExt = relative.replace(/\.html$/, "");
  if (withoutExt === "_not-found") return null;
  return `/${withoutExt}`.replace(/\/index$/, "") || "/";
}

function normalizeUrl(value) {
  if (!value) return null;
  let href = value.trim();
  if (href.startsWith(canonicalHost)) href = href.slice(canonicalHost.length);
  if (href.startsWith("https://www.oztoprakenerji.com")) href = href.slice("https://www.oztoprakenerji.com".length);
  if (!href.startsWith("/")) return null;
  href = href.split("#")[0].split("?")[0];
  if (href.length > 1) href = href.replace(/\/$/, "");
  return href || "/";
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  const text = stripHtml(html);
  if (!text) return 0;
  return text.split(/\s+/).filter((word) => /[A-Za-z0-9À-ž]/.test(word)).length;
}

function getGroup(url) {
  if (/^\/(en|tr)\/locations(\/|$)/.test(url)) return "/locations/*";
  if (/^\/(en|tr)\/topics(\/|$)/.test(url)) return "/topics/*";
  if (/^\/(en|tr)\/pillars(\/|$)/.test(url)) return "/pillars/*";
  if (/^\/(en|tr)\/projects(\/|$)/.test(url)) return "/projects/*";
  if (/^\/(en|tr)\/blog(\/|$)/.test(url)) return "/blog/*";
  if (/^\/(en|tr)\/services(\/|$)/.test(url)) return "/services/*";
  if (/^\/(en|tr)\/problems(\/|$)/.test(url)) return "/problems/*";
  if (/^\/(en|tr)\/seo(\/|$)/.test(url)) return "/seo/*";
  if (/^\/(en|tr)$/.test(url)) return "homepage";
  if (/^\/(en|tr)\/about$/.test(url)) return "/about";
  if (/^\/(en|tr)\/(contact|iletisim)$/.test(url)) return "/contact";
  if (/^\/(en|tr)\/(privacy-policy|terms)$/.test(url)) return "legal";
  if (/^\/(en|tr)\/(hizmetler)$/.test(url)) return "/hizmetler";
  return "other";
}

function likelihood(group, avgWords, avgIncoming, sitemapCount, noindexCount) {
  if (noindexCount > 0 && noindexCount >= sitemapCount) return "Low";
  if (group === "/seo/*") return "Low";
  if (avgWords >= 1200 && avgIncoming >= 5 && sitemapCount > 0) return "High";
  if (avgWords >= 700 && avgIncoming >= 2 && sitemapCount > 0) return "Medium";
  if (sitemapCount > 0 && avgIncoming >= 3) return "Medium";
  return "Low";
}

function recommendation(group, count, sitemapCount, avgWords, avgIncoming, noindexCount) {
  if (group === "/seo/*") {
    return "Keep noindex/follow and keep out of sitemap until manually curated; this is the main discovered-not-indexed source.";
  }
  if (["/services/*", "/blog/*", "/projects/*", "/problems/*"].includes(group)) {
    return "Remain indexable; strengthen contextual links and keep in sitemap.";
  }
  if (["/locations/*", "/topics/*", "/pillars/*"].includes(group)) {
    if (count > 100 || avgWords < 700 || avgIncoming < 2) {
      return "Remove from sitemap or noindex weaker URLs until domain authority increases; keep only strongest topical assets indexable.";
    }
    return "Remain indexable for now; monitor GSC coverage and expand unique expert content if impressions stay low.";
  }
  if (group === "legal") return "Remain indexable but low priority; keep in page sitemap or reduce priority.";
  if (group === "/hizmetler") return "Keep only canonical Turkish index page; redirected language variants should stay out of sitemap.";
  if (noindexCount > 0) return "Keep noindex or merge into a stronger canonical page.";
  return sitemapCount > 0 ? "Remain indexable if canonical and internally linked." : "Keep out of sitemap unless it becomes a commercial or editorial landing page.";
}

const htmlFiles = walk(appDir).filter((file) => file.endsWith(".html"));
const pages = new Map();

for (const file of htmlFiles) {
  const url = fileToUrl(file);
  if (!url) continue;
  const html = fs.readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/gi)]
    .map((match) => normalizeUrl(match[1]))
    .filter(Boolean);
  const robotsNoindex = /name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) || /name=["']googlebot["'][^>]+content=["'][^"']*noindex/i.test(html);
  pages.set(url, {
    url,
    group: getGroup(url),
    words: wordCount(html),
    hrefs,
    noindex: robotsNoindex
  });
}

const sitemapFiles = ["page-sitemap.xml.body", "blog-sitemap.xml.body", "service-sitemap.xml.body"];
const sitemapUrls = new Set();
for (const fileName of sitemapFiles) {
  const fullPath = path.join(appDir, fileName);
  if (!fs.existsSync(fullPath)) continue;
  const xml = fs.readFileSync(fullPath, "utf8");
  for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const normalized = normalizeUrl(match[1]);
    if (normalized) sitemapUrls.add(normalized);
  }
}

const incoming = new Map();
for (const page of pages.values()) {
  for (const href of page.hrefs) {
    if (!pages.has(href)) continue;
    incoming.set(href, (incoming.get(href) ?? 0) + 1);
  }
}

const groups = new Map();
for (const page of pages.values()) {
  const data =
    groups.get(page.group) ?? {
      group: page.group,
      count: 0,
      sitemapCount: 0,
      noindexCount: 0,
      totalWords: 0,
      totalIncoming: 0,
      examples: []
    };
  data.count += 1;
  data.sitemapCount += sitemapUrls.has(page.url) ? 1 : 0;
  data.noindexCount += page.noindex ? 1 : 0;
  data.totalWords += page.words;
  data.totalIncoming += incoming.get(page.url) ?? 0;
  if (data.examples.length < 8) data.examples.push(page.url);
  groups.set(page.group, data);
}

const orderedGroups = [...groups.values()].sort((a, b) => b.count - a.count);
const totalGenerated = [...pages.values()].length;
const totalSitemap = sitemapUrls.size;
const generatedSeo = groups.get("/seo/*")?.count ?? 0;
const noindexSeo = groups.get("/seo/*")?.noindexCount ?? 0;

const rows = orderedGroups.map((group) => {
  const avgWords = Math.round(group.totalWords / group.count);
  const avgIncoming = Number((group.totalIncoming / group.count).toFixed(1));
  const indexability = likelihood(group.group, avgWords, avgIncoming, group.sitemapCount, group.noindexCount);
  return {
    ...group,
    avgWords,
    avgIncoming,
    indexability,
    recommendation: recommendation(group.group, group.count, group.sitemapCount, avgWords, avgIncoming, group.noindexCount)
  };
});

const lowValueGeoTopicPillar = rows.filter((row) => ["/locations/*", "/topics/*", "/pillars/*"].includes(row.group) && (row.count > 100 || row.indexability === "Low"));

const markdown = `# URL Inventory Analysis

Generated: ${new Date().toISOString()}  
Source: local Next.js production build HTML and generated sitemap XML  
Canonical domain: \`${canonicalHost}\`

## Executive Summary

- Total statically generated HTML URLs found: **${totalGenerated}**
- URLs currently included in sitemap files: **${totalSitemap}**
- Programmatic \`/seo/*\` URLs generated: **${generatedSeo}**
- Programmatic \`/seo/*\` URLs marked noindex: **${noindexSeo}**
- Most likely source of the 341 "Discovered - currently not indexed" URLs: **programmatic \`/seo/*\` pages plus old submitted/crawled sitemap variants**.

The current site can generate many more URLs than the sitemap exposes. This is useful for future scale, but Google is unlikely to index hundreds of similar generated pages while the domain has low authority and low impressions. The best indexation strategy is to keep the sitemap small, commercial, editorial and evidence-rich.

## Route Group Inventory

| Route group | Generated URL count | Sitemap count | Noindex count | Avg. word count | Avg. internal incoming links | Indexed likelihood | Recommendation |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
${rows.map((row) => `| ${row.group} | ${row.count} | ${row.sitemapCount} | ${row.noindexCount} | ${row.avgWords} | ${row.avgIncoming} | ${row.indexability} | ${row.recommendation} |`).join("\n")}

## Exact Counts by Requested Group

${["/locations/*", "/topics/*", "/pillars/*", "/projects/*", "/blog/*", "/services/*", "/problems/*", "/seo/*", "other"].map((name) => {
  const row = rows.find((item) => item.group === name);
  if (!row) return `- ${name}: 0 generated, 0 in sitemap`;
  return `- ${name}: ${row.count} generated, ${row.sitemapCount} in sitemap, ${row.noindexCount} noindex, avg ${row.avgWords} words, avg ${row.avgIncoming} incoming internal links`;
}).join("\n")}

## Route Group Details

${rows.map((row) => `### ${row.group}

- URL count: ${row.count}
- Sitemap count: ${row.sitemapCount}
- Noindex count: ${row.noindexCount}
- Average word count: ${row.avgWords}
- Average internal links pointing to URLs in this group: ${row.avgIncoming}
- Indexed likelihood: ${row.indexability}
- Recommendation: ${row.recommendation}
- Example URLs:
${row.examples.map((example) => `  - \`${example}\``).join("\n")}
`).join("\n")}

## Locations, Topics and Pillars Threshold Review

${lowValueGeoTopicPillar.length > 0
  ? lowValueGeoTopicPillar.map((row) => `- ${row.group}: ${row.count} URLs. Recommendation: reduce sitemap exposure or noindex weaker URLs until authority improves.`).join("\n")
  : "- Locations, topics and pillars are below the 100 URL threshold. Keep them indexable only if they continue receiving internal links and unique expert content."}

## Recommended Sitemap Strategy

Remain in sitemap:

- Homepage language roots: \`/en\`, \`/tr\`
- Main service index pages: \`/en/services\`, \`/tr/hizmetler\`
- Service detail pages
- Blog index, blog posts and useful category pages
- Project index and project detail pages
- High-value problem, location, topic and pillar pages if they stay unique and linked

Keep out of sitemap:

- \`/seo/*\` generated landing pages
- Redirect-only route variants
- Legacy Turkish root keyword URLs
- Language-mismatched variants such as \`/en/hizmetler\`, \`/tr/services\`, \`/en/iletisim\`, \`/tr/contact\`

Noindex/follow:

- \`/seo/*\` until each page receives manual content enrichment, unique search intent and contextual internal links.

Merge or redirect:

- Any future duplicate short keyword page should redirect into the strongest canonical service detail page instead of creating another content copy.

## Why 341 URLs Are Probably Not Indexed

1. Google discovered many generated URLs before the sitemap was reduced.
2. The domain has low authority and low impressions, so Google is selective.
3. Programmatic pages share similar templates and intent patterns.
4. Internal link equity is stronger for core pages than for deep generated combinations.
5. Some old sitemap submissions and previously crawled URL variants may remain in GSC until Google reprocesses them.

## Action Plan

1. Keep only \`${canonicalHost}/sitemap.xml\` submitted in GSC.
2. Keep \`/seo/*\` out of sitemap and noindex/follow.
3. Request indexing manually only for the strongest Turkish commercial service pages.
4. Expand blog and case-study content that links into HES, GES, EPC, technical audit and investment advisory pages.
5. Recheck GSC coverage after two to four weeks; expect discovered-not-indexed to decline slowly, not instantly.
`;

fs.writeFileSync(path.join(root, "URL-INVENTORY.md"), markdown);
console.log(markdown);
