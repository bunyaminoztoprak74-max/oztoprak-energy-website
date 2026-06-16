# Oztoprak Energy Implementation Audit

Reference strategy: `OZTOPRAK_ENERGY_GROWTH_PLAN.md`  
Scope: repository-only implementation audit. No pages were created, deleted, redirected, or refactored during this audit.

## 1. Current Project Structure

The project is a production Next.js 15 App Router website with TypeScript, Tailwind CSS, Framer Motion and structured content in TypeScript files.

Important root files:

- `package.json`: scripts for `dev`, `build`, `lint`, `typecheck`, and `seo:audit`.
- `middleware.ts`: root and legacy URL redirects.
- `next.config.mjs`: Next.js configuration.
- `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css`: styling pipeline.
- `README.md`: deployment/setup documentation.
- Existing SEO reports: `SEO-AUDIT.md`, `INDEXING-FIXES.md`, `SITEMAP-FIXES.md`, `INTERNAL-LINKING-REPORT.md`, `CONTENT-IMPROVEMENT-PLAN.md`, `URL-INVENTORY.md`.
- Growth strategy: `OZTOPRAK_ENERGY_GROWTH_PLAN.md`.

Main app route structure:

- `app/[locale]/page.tsx`: localized homepage.
- `app/[locale]/layout.tsx`: localized layout, global schema, header, footer and WhatsApp button.
- `app/[locale]/about/page.tsx`: about page.
- `app/[locale]/services/page.tsx`: English services index, redirects Turkish `/tr/services` to `/tr/hizmetler`.
- `app/[locale]/hizmetler/page.tsx`: Turkish services index route.
- `app/[locale]/services/[slug]/page.tsx`: dynamic service detail pages.
- `app/[locale]/projects/page.tsx` and `app/[locale]/projects/[slug]/page.tsx`: project/case study index and detail pages.
- `app/[locale]/blog/page.tsx`, `app/[locale]/blog/[slug]/page.tsx`, `app/[locale]/blog/category/[category]/page.tsx`: blog index, article pages and category pages.
- `app/[locale]/topics/*`, `app/[locale]/problems/*`, `app/[locale]/locations/*`, `app/[locale]/pillars/*`: programmatic topical SEO architecture.
- `app/[locale]/seo/*`: generated service-location-intent pages, currently noindex/follow.
- `app/[locale]/contact/page.tsx` and `app/[locale]/iletisim/page.tsx`: contact routes.
- `app/[locale]/privacy-policy/page.tsx`, `app/[locale]/terms/page.tsx`: legal pages.

Content and data files:

- `content/services.ts`: service definitions for both languages.
- `content/blog.ts`: blog posts, categories and generated authority article definitions.
- `content/projects.ts`: project/case study definitions.
- `content/programmatic-seo.ts`: problems, locations, pillars, clusters and generated SEO pages.
- `content/growth-system.ts`: additional organic growth content architecture.
- `content/dictionaries.ts`: localized UI and SEO strings.
- `content/types.ts`: shared content types.

SEO and routing libraries:

- `lib/seo.ts`: metadata builder for canonical, hreflang, Open Graph and Twitter metadata.
- `lib/schema.ts`: Organization, LocalBusiness, WebSite, Breadcrumb, Service, FAQ, Article and Project schema.
- `lib/programmatic-schema.ts`: programmatic page schema helpers.
- `lib/sitemap-data.ts`: sitemap index, URL set generation and sitemap entry lists.
- `lib/routes.ts`: reusable route path helpers.
- `lib/i18n.ts`: locale helpers.
- `lib/social.ts`: LinkedIn URL source.
- `lib/analytics.ts`: analytics/event foundation.

Sitemap and robots routes:

- `app/sitemap.xml/route.ts`
- `app/page-sitemap.xml/route.ts`
- `app/blog-sitemap.xml/route.ts`
- `app/service-sitemap.xml/route.ts`
- `app/robots.ts`

Navigation and conversion components:

- `components/header.tsx`
- `components/footer.tsx`
- `components/brand-logo.tsx`
- `components/related-content.tsx`
- `components/cta-section.tsx`
- `components/contact-form.tsx`
- `components/conversion-funnel.tsx`
- `components/sticky-consultation-cta.tsx`
- `components/authority-metrics.tsx`
- `components/engineering-visual-blocks.tsx`

## 2. Existing Important Pages

### Commercial Pages Already Present

English service slugs in `content/services.ts` include:

- `epc-technical-consultancy`
- `hydropower-plant-optimization`
- `solar-power-plant-consultancy`
- `power-plant-commissioning`
- `owners-engineering`
- `om-performance-improvement`
- `grid-protection-system-analysis`
- `technical-audits-existing-power-plants`
- `renewable-energy-investment-advisory`
- `hydropower-consulting`
- `energy-audit`
- `solar-energy-consulting`
- `epc-technical-advisory`

Turkish service slugs in `content/services.ts` include:

- `epc-teknik-danismanlik`
- `hes-optimizasyonu`
- `ges-danismanligi`
- `enerji-santrali-devreye-alma`
- `isveren-muhendisligi`
- `isletme-bakim-performans-iyilestirme`
- `sebeke-koruma-sistemi-analizi`
- `mevcut-santraller-icin-teknik-denetim`
- `yenilenebilir-enerji-yatirim-danismanligi`
- `hes-danismanligi`
- `enerji-denetimi`
- `gunes-enerjisi-danismanligi`
- `epc-teknik-danismanlik-hizmeti`

### Existing Topical / Programmatic Pages

The site already has dynamic routes for:

- `/en/topics/*`, `/tr/topics/*`
- `/en/problems/*`, `/tr/problems/*`
- `/en/locations/*`, `/tr/locations/*`
- `/en/pillars/*`, `/tr/pillars/*`
- `/en/seo/*`, `/tr/seo/*`

`/seo/*` pages are generated but intentionally marked `noindex, follow`, which is appropriate until each page is manually curated.

### Blog and Case Study Content

The blog system is already substantial. `content/blog.ts` contains a mixture of manual and generated technical articles. Current slug pattern count is 115, which indicates a large bilingual article set.

`content/projects.ts` contains a large case-study/project portfolio. Current slug pattern count is 61, which indicates an extensive bilingual project library.

## 3. Existing SEO Setup

### Metadata

`lib/seo.ts` centralizes metadata through `buildMetadata()`.

It provides:

- Page title.
- Meta description.
- Keywords.
- Authors, creator, publisher.
- Canonical path.
- Language alternates.
- Open Graph metadata.
- Twitter card metadata.
- Default OG image.

Strength:

- Central metadata builder reduces inconsistent implementation across dynamic pages.
- Uses `metadataBase` in localized layout.
- Canonical domain is `https://www.oztoprakenerji.com`.

Risk:

- `buildMetadata()` constructs translated alternates mostly from the provided `alternatePath`; several callers generate that alternate by array index. If EN/TR content order diverges, hreflang can point to the wrong semantic page.
- `x-default` is always `/en`. That is acceptable, but pages with strong Turkish commercial intent may still benefit from consistent EN default only if all alternate links are correct.

### Hreflang

Hreflang exists in metadata and sitemap XML.

Main implementation points:

- `lib/seo.ts`
- `lib/sitemap-data.ts`
- Dynamic route `generateMetadata()` functions.

Risk:

- Service, project, blog, category, topic, problem, location and pillar alternates are mostly mapped by array index.
- Blog category mapping is especially risky because English and Turkish category lists can differ semantically. This can create incorrect alternate pairs such as an English category pointing to a non-equivalent Turkish category.

### Canonical

Canonical paths are produced through `buildMetadata()`.

Strength:

- Canonical domain is centralized.
- Localized canonical path pattern is consistent.

Risk:

- Redirected convenience URLs such as `/hes-danismanligi`, `/ges-danismanligi`, `/epc-danismanligi`, `/teknik-denetim`, `/devreye-alma`, `/performans-analizi` and `/enerji-yatirim-danismanligi` exist only as middleware redirects. They are not direct canonical landing pages.
- This is safe technically, but it means the growth plan's top-level commercial Turkish URLs are not real indexable pages yet.

### Schema

`lib/schema.ts` implements:

- Organization.
- WebSite.
- LocalBusiness + ProfessionalService.
- BreadcrumbList.
- Service.
- FAQPage.
- Article.
- CreativeWork for projects.

`lib/programmatic-schema.ts` supports dynamic programmatic pages.

Strength:

- Schema coverage is broad and suitable for a technical consultancy.
- Service pages include Service + FAQ + Breadcrumb schema.
- Blog posts include Article + FAQ + Breadcrumb schema.
- Project pages include CreativeWork + FAQ + Breadcrumb schema.

Issues:

- Some Turkish text in schema and components appears mojibake-encoded, for example `Ã–ztoprak`, `DanÄ±ÅŸmanlÄ±k`, `Ä°lgili`, and copyright output. This is a trust and quality issue and should be fixed before further production polish.
- `articleSchema()` currently lacks full `mainEntityOfPage`, `image`, `dateModified`, and canonical URL fields. It is valid enough, but not maximally rich.
- `websiteSchema()` does not include `SearchAction`. The growth plan recommends WebSite + SearchAction readiness.

### Robots

`app/robots.ts` outputs:

- `Allow: /`
- `Disallow: /api/`
- `Disallow: /_next/server/`
- `Disallow: /admin/`
- `Disallow: /*?*`
- Sitemap: `https://www.oztoprakenerji.com/sitemap.xml`
- Host: `https://www.oztoprakenerji.com`

This is aligned with the single-domain strategy.

### Sitemap

`app/sitemap.xml/route.ts` creates a sitemap index referencing:

- `/page-sitemap.xml`
- `/blog-sitemap.xml`
- `/service-sitemap.xml`

`lib/sitemap-data.ts` builds all entries.

Strength:

- Single sitemap index exists.
- Service sitemap is separate.
- Blog sitemap is separate.
- Page sitemap is separate.
- `dedupeEntries()` removes duplicate paths inside each sitemap build.

Risks:

- `pageSitemapEntries()` includes topics, problems, locations and pillars. The growth plan recommends keeping programmatic exposure selective until core pages index more reliably.
- `buildStamp = new Date().toISOString()` means sitemap index and entries without explicit dates receive build-time timestamps. This is not inherently wrong, but it can make unchanged pages look freshly modified on every build.
- Blog generated dates include `2026-07-*` in `content/blog.ts`, while the current date is 2026-06-16. Future `lastmod`/publish dates should not be used for URLs intended to be indexed now.
- Hreflang alternates in sitemap are index-based for blogs, categories, projects and programmatic pages.

## 4. Missing Pages From The Growth Plan

The growth plan recommends several commercial pages and lead-generation routes that do not currently exist as direct indexable pages.

### Missing Direct Turkish Commercial Landing Pages

These exist as middleware redirects, not real pages:

- `/hes-danismanligi`
- `/ges-danismanligi`
- `/epc-danismanligi`
- `/teknik-denetim`
- `/devreye-alma`
- `/performans-analizi`
- `/enerji-yatirim-danismanligi`

Recommendation:

- Do not create them immediately without strategy approval.
- Decide whether they should remain redirects to `/tr/services/*` or become direct high-conversion landing pages with canonical self-reference.

### Missing Industrial Electricity Consumer Pages

These are recommended in the growth plan and appear not to exist as direct pages:

- `/tr/sanayi-elektrik-maliyeti-optimizasyonu`
- `/tr/elektrik-faturasi-analizi`
- `/tr/reaktif-ceza-analizi`
- `/tr/kompanzasyon-sistemi-denetimi`
- `/tr/cati-ges-fizibilite`
- `/tr/organize-sanayi-bolgesi-enerji-danismanligi`
- `/tr/fabrika-elektrik-maliyeti-danismanligi`
- `/tr/osb-enerji-danismanligi`

This is the biggest lead-generation gap. The current site is strong for renewable asset owners but weaker for industrial consumers who search for energy cost savings.

### Missing English International Landing Pages

Recommended but not currently direct pages:

- `/en/technical-due-diligence-renewable-energy`
- `/en/hydropower-technical-audit`
- `/en/solar-plant-performance-review`
- `/en/epc-owner-side-technical-control`
- `/en/power-plant-commissioning-supervision`
- `/en/industrial-energy-cost-optimization`

Some of these topics are covered by existing service detail pages, but the exact landing-page URLs do not exist.

### Missing Team / Reference Pages

Earlier SEO strategy requested trust pages such as:

- `/tr/ekip`
- `/en/team`
- `/tr/referanslar`
- `/en/references`

The current structure includes `/about` and `/projects`, but not dedicated team/reference pages.

## 5. Sitemap And Indexing Issues

### Issue 1: Programmatic Groups Are Still In Page Sitemap

`pageSitemapEntries()` includes:

- `/topics`
- `/problems`
- `/locations`
- `/pillars`
- individual topic pages.
- individual problem pages.
- individual location pages.
- individual pillar pages.

This is not necessarily wrong, but it conflicts with the growth plan's conservative recommendation: reduce sitemap exposure to a smaller set of high-value URLs until Google indexes more core pages.

Recommended next action:

- Keep services, projects and strongest blog posts in sitemap.
- Review whether all topic/location/pillar pages should stay in sitemap.
- Consider removing lower-value location/topic/pillar entries from sitemap while leaving pages accessible internally.

### Issue 2: `/seo/*` Generated Pages Are Noindex But Still Generated

This is acceptable and intentional. They are not currently added to sitemap, which is good.

Recommended next action:

- Keep `/seo/*` noindex/follow.
- Do not submit these URLs manually to Google yet.
- Promote only selected generated pages after manual enrichment.

### Issue 3: Future Blog Dates

`content/blog.ts` includes generated dates:

- `2026-06-*`
- `2026-07-*`

Because the current date is 2026-06-16, July 2026 dates are future-dated.

Recommended next action:

- Change future-dated generated blog dates to current/past dates only when content is intended to be live.
- Alternatively keep future-dated items out of sitemap and route generation until their publish date.

### Issue 4: Sitemap `lastmod` Uses Build Time For Many Pages

`lib/sitemap-data.ts` uses `buildStamp` when entries have no explicit `lastModified`.

Recommended next action:

- Add stable `lastModified` fields to important service, project and core pages.
- Avoid making every unchanged page look updated on every deploy.

### Issue 5: Legacy Sitemap Submissions

Search Console screenshots showed old submitted sitemaps such as `cspt-service-sitemap.xml` and `page-sitemap.xml` from older periods. The current code only generates the new sitemap index and three child sitemaps.

Recommended next action:

- In Google Search Console, keep only `https://www.oztoprakenerji.com/sitemap.xml` submitted.
- Old sitemap submissions cannot always be deleted easily, but they can be ignored once they return no new URLs and the canonical sitemap remains clean.

## 6. Internal Linking Gaps

### Strengths

- Header links to home, about, services, projects, blog and contact.
- Footer links to priority services.
- Service pages include `RelatedContent`, `ConversionFunnel`, `ContactForm`, `CtaSection`, and service/project/blog links.
- Blog posts link to service pages via `post.serviceLinks`.
- Projects link to related services through `project.relatedServices`.
- Programmatic pages include contextual links and related content.

### Gaps

1. Homepage service cards link to older service slugs in some cases.

   Examples in `app/[locale]/page.tsx`:

   - English card uses `/services/hydropower-plant-optimization`, while growth plan prioritizes `/en/services/hydropower-consulting`.
   - English card uses `/services/solar-power-plant-consultancy`, while growth plan prioritizes `/en/services/solar-energy-consulting`.
   - English card uses `/services/epc-technical-consultancy`, while growth plan prioritizes `/en/services/epc-technical-advisory`.
   - Turkish card uses `/services/hes-optimizasyonu`, while growth plan prioritizes `/tr/services/hes-danismanligi`.
   - Turkish card uses `/services/epc-teknik-danismanlik`, while growth plan prioritizes `/tr/services/epc-teknik-danismanlik-hizmeti`.

2. Footer lacks the industrial energy cost optimization pathway.

   Current footer priority services include renewable/EPC items, but not a dedicated industrial electricity cost or bill analysis service.

3. Header does not expose high-priority service dropdowns.

   Header is clean, but Google and users currently get priority service links mostly through footer/homepage/services pages. A compact services submenu or prominent homepage link block could improve crawl priority.

4. Blog category pages are thin navigational pages.

   They list posts but do not include a rich category intro, related service links, FAQ or stronger topical explanation.

5. Contact funnel is general.

   Contact form is functional, but there is no industrial electricity bill scan funnel, bill upload path, or facility-type segmentation.

## 7. Metadata / Title / Description Gaps

### Strong Areas

- Most dynamic pages call `buildMetadata()`.
- Service pages use service title and description.
- Blog posts use post title and description.
- Project pages use project title and summary.

### Gaps

1. Service index metadata is generic.

   `app/[locale]/services/page.tsx` uses `dict.seo.siteDescription`. The services index should have a unique service-specific description.

2. Blog category metadata is generic.

   `app/[locale]/blog/category/[category]/page.tsx` uses:

   `Articles about ${found.title} by Oztoprak Energy Consultancy.`

   This should be localized, richer and category-specific.

3. Location metadata is generic.

   `app/[locale]/locations/[slug]/page.tsx` uses `${location.label} Energy Consultancy` for both locales. Turkish pages should not use an English title pattern.

4. Some generated Turkish metadata/content appears mojibake-encoded.

   This can harm trust, snippets and readability.

5. Keyword arrays are broad.

   `lib/seo.ts` adds global target keywords to all pages. This is not fatal, but keyword metadata has little ranking value and can look repetitive. Page-specific keywords should matter more than global repetition.

## 8. Hreflang / Canonical Issues

### Primary Risk: Index-Based Alternate Mapping

Files that use index-based translation matching:

- `lib/sitemap-data.ts`
- `app/[locale]/services/[slug]/page.tsx`
- `app/[locale]/blog/[slug]/page.tsx`
- `app/[locale]/blog/category/[category]/page.tsx`
- `app/[locale]/projects/[slug]/page.tsx`
- `app/[locale]/topics/[slug]/page.tsx`
- `app/[locale]/problems/[slug]/page.tsx`
- `app/[locale]/locations/[slug]/page.tsx`
- `app/[locale]/pillars/[slug]/page.tsx`
- `app/[locale]/seo/[slug]/page.tsx`

This works only if EN and TR arrays stay perfectly aligned forever. That is fragile.

Recommended next action:

- Add explicit `translationKey` or `alternateSlug` fields to content entities.
- Use that mapping in metadata and sitemap generation.

### Redirected Turkish Service Index

`/tr/services` redirects to `/tr/hizmetler`. This is okay, and the sitemap uses `/tr/hizmetler`.

### Top-Level Turkish Commercial URLs

Middleware redirects top-level keywords like `/hes-danismanligi` to `/tr/services/hes-danismanligi`.

This is technically safe, but if the growth strategy wants top-level Turkish pages to rank, they need to become real pages or the strategy should explicitly treat `/tr/services/*` as canonical money pages.

## 9. Schema / Structured Data Issues

### Existing Schema Coverage Is Good

The site already covers the major schema types needed for the industry:

- Organization.
- LocalBusiness.
- ProfessionalService.
- WebSite.
- Service.
- FAQ.
- Breadcrumb.
- Article.
- CreativeWork/Project.

### Improvement Areas

1. Fix mojibake text in schema output.

   Example: `alternateName` in `lib/schema.ts` contains mojibake for Turkish brand name.

2. Add `SearchAction` to WebSite schema.

   This was requested in earlier SEO strategy and is not currently present.

3. Enrich Article schema.

   Add:

   - `mainEntityOfPage`
   - `image`
   - `dateModified`
   - canonical URL

4. Enrich Project schema.

   Current `CreativeWork` schema is acceptable but could include:

   - `provider`
   - `about`
   - `keywords`
   - `mainEntityOfPage`
   - `isPartOf`

5. Service schema URL pattern assumes `/[locale]/services/[slug]`.

   This works for service detail pages, but if top-level Turkish landing pages are created later, schema IDs must not conflict.

## 10. Recommended First 20 Code / Content Tasks

1. Fix mojibake encoding in `content/dictionaries.ts`, `content/services.ts`, `content/blog.ts`, `content/projects.ts`, `content/programmatic-seo.ts`, `components/footer.tsx`, `components/related-content.tsx`, and `lib/schema.ts`.
2. Add explicit translation mapping fields for services, posts, categories, projects, topics, problems, locations, pillars and generated pages.
3. Replace index-based hreflang mapping in `lib/sitemap-data.ts` with explicit translation keys.
4. Replace index-based alternate metadata in all dynamic page `generateMetadata()` functions.
5. Review `content/blog.ts` future dates and prevent future-dated URLs from appearing in sitemap.
6. Add stable `lastModified` fields for important service and project content.
7. Decide whether top-level Turkish keyword URLs should remain redirects or become direct landing pages.
8. Update homepage service card links to point to the priority service pages from the growth plan.
9. Add a new Energy Cost Optimization service content item before creating its page.
10. Add industrial electricity consumer CTA copy to homepage and footer.
11. Add footer link placeholder/path strategy for `sanayi-elektrik-maliyeti-optimizasyonu` once the page is created.
12. Improve services index metadata with unique EN/TR titles and descriptions.
13. Improve blog category pages with rich intros, related service links and localized descriptions.
14. Add `SearchAction` to WebSite schema in `lib/schema.ts`.
15. Enrich Article schema with `mainEntityOfPage`, `dateModified`, `image`, and canonical URL.
16. Create a sitemap inclusion policy helper so low-priority programmatic groups can be excluded without deleting pages.
17. Consider removing `/locations/*`, `/topics/*`, and `/pillars/*` detail URLs from sitemap until core indexing improves.
18. Keep `/seo/*` noindex/follow and out of sitemap until manually curated.
19. Add event tracking for WhatsApp, email, phone, contact submit, service CTA and future bill-scan CTA.
20. Add a small internal-link priority block on homepage pointing to HES, GES, EPC, technical audit, commissioning, investment advisory and energy cost optimization.

## 11. Exact Files That Should Be Modified Next

### Highest Priority

- `lib/sitemap-data.ts`
  - Replace index-based alternates with explicit mapping.
  - Add sitemap inclusion control for programmatic route groups.
  - Avoid build-time `lastmod` for unchanged pages where possible.

- `content/blog.ts`
  - Fix future dates.
  - Add explicit translation keys/category mapping.
  - Review category definitions for EN/TR semantic equivalence.

- `content/services.ts`
  - Add translation keys.
  - Add or prepare Energy Cost Optimization service content.
  - Clarify priority service slugs for homepage/footer.

- `app/[locale]/page.tsx`
  - Update homepage service links to the priority service URLs.
  - Add industrial energy cost optimization pathway after service content exists.
  - Fix mojibake Turkish content.

- `components/footer.tsx`
  - Add industrial energy cost optimization path once available.
  - Fix mojibake copyright output.
  - Ensure priority service list matches growth plan.

- `lib/schema.ts`
  - Fix mojibake brand alternate name.
  - Add WebSite SearchAction.
  - Enrich Article and Project schema.

### Secondary Priority

- `app/[locale]/services/[slug]/page.tsx`
  - Replace index-based alternate lookup.
  - Fix mojibake text.
  - Confirm service schema IDs if top-level landing pages are added.

- `app/[locale]/blog/[slug]/page.tsx`
  - Replace index-based alternate lookup.
  - Add richer article schema fields through `lib/schema.ts`.

- `app/[locale]/blog/category/[category]/page.tsx`
  - Replace index-based alternate lookup.
  - Add localized rich intro, related services and FAQ.

- `app/[locale]/projects/[slug]/page.tsx`
  - Replace index-based alternate lookup.
  - Fix mojibake Turkish labels/content.

- `app/[locale]/locations/[slug]/page.tsx`
  - Replace generic English title pattern for Turkish metadata.
  - Decide sitemap inclusion policy.

- `app/[locale]/topics/[slug]/page.tsx`
  - Decide sitemap inclusion policy.
  - Replace index-based alternate lookup.

- `app/[locale]/pillars/[slug]/page.tsx`
  - Decide sitemap inclusion policy.
  - Replace index-based alternate lookup.

- `app/[locale]/problems/[slug]/page.tsx`
  - Keep likely indexable, but replace index-based alternate lookup.

- `middleware.ts`
  - Review whether root Turkish keyword redirects should stay or later become direct landing pages.
  - Do not remove current redirects until replacement pages are intentionally created.

- `components/header.tsx`
  - Consider a compact priority services menu later, but not as first risky change.

- `components/contact-form.tsx`
  - Later add industrial bill-scan fields or a separate lead form.

- `lib/analytics.ts` and `components/analytics-foundation.tsx`
  - Add conversion event tracking for key CTAs.

## 12. Implementation Recommendation

Do not start by creating dozens of new pages. The safest first implementation sprint should be:

1. Fix encoding/mojibake.
2. Fix explicit hreflang mapping.
3. Fix future dates.
4. Tighten sitemap inclusion.
5. Update homepage/footer internal links to priority service pages.
6. Then add the Energy Cost Optimization service and industrial lead funnel as a controlled new content area.

This sequence improves trust, crawl quality and indexing without destabilizing the existing bilingual site.
