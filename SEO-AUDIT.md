# SEO Audit - Oztoprak Energy

Audit date: 2026-06-07  
Canonical domain: `https://oztoprakenerji.com`  
Languages: English `/en`, Turkish `/tr`

## Executive Findings

- The site had a canonical/domain consistency risk because core SEO helpers still used `https://www.oztoprakenerji.com` while the requested single domain is `https://oztoprakenerji.com`.
- Google Search Console showed 346 discovered URLs with only 17 indexed. The largest quality/crawl-budget risk is the programmatic `/seo/...` URL set, which can generate hundreds of similar service-location-intent pages.
- The current sitemap architecture is already split into `page-sitemap.xml`, `blog-sitemap.xml`, and `service-sitemap.xml`; it now needs to serve only apex-domain canonical URLs.
- Core indexable assets should be the homepage, main service pages, service detail pages, selected blog posts, projects, problem pages, location pages, topic clusters and pillar pages.
- Low-value generated pages should not compete with canonical service pages until they have stronger unique demand, search intent and manual editorial depth.

## Technical Audit Checklist

| Area | Status | Action Taken |
| --- | --- | --- |
| Canonical domain | Fixed | Changed metadata, schema, robots and sitemap host to `https://oztoprakenerji.com`. |
| Sitemap host | Fixed | `lib/sitemap-data.ts` now emits apex-domain URLs. |
| Robots sitemap reference | Fixed | `robots.txt` now references `https://oztoprakenerji.com/sitemap.xml`. |
| Programmatic index bloat | Fixed | `/en/seo`, `/tr/seo` and `/seo/[slug]` pages now return `noindex, follow`. |
| Duplicate Turkish short URLs | Fixed | Root-level Turkish keyword URLs redirect to canonical Turkish service pages. |
| Internal linking | Improved | Footer now links to high-value service pages instead of only the first five services. |
| E-E-A-T | Improved | About page now includes operational experience, MW portfolio, commissioning experience and engineering authority blocks. |
| Breadcrumbs | Present | Existing page templates use breadcrumb components and schema on service pages. |
| FAQ schema | Present | Service pages include FAQ schema. |
| Service schema | Present | Service detail pages include Service schema. |
| Article schema | Present | Blog post templates include Article schema. |

## Key SEO Risks Found

1. **Programmatic URL volume exceeds current authority**
   - The project can statically generate hundreds of `/seo/...` pages.
   - For a young domain with low impressions, Google often keeps these as "Discovered - currently not indexed".
   - Fix: keep them crawl-followable but not indexable until content is manually strengthened.

2. **Canonical split risk**
   - `www` and apex domain signals can split indexing.
   - Fix: all core SEO helpers now point to `https://oztoprakenerji.com`.

3. **Service keyword URL duplication risk**
   - URLs such as `/hes-danismanligi` and `/tr/services/hes-danismanligi` could become duplicate if both served content.
   - Fix: short Turkish keyword URLs redirect to canonical Turkish service detail pages.

4. **Footer link priority**
   - Footer previously listed only the first five services, which did not emphasize all target commercial keywords.
   - Fix: footer now prioritizes HES, GES, EPC, technical audit, commissioning, performance and investment advisory services.

## Remaining Watch Items

- Run URL Inspection in GSC after deployment for:
  - `https://oztoprakenerji.com/tr/services/hes-danismanligi`
  - `https://oztoprakenerji.com/tr/services/ges-danismanligi`
  - `https://oztoprakenerji.com/tr/services/epc-teknik-danismanlik-hizmeti`
  - `https://oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
- Remove old sitemap submissions in GSC where possible and keep only:
  - `https://oztoprakenerji.com/sitemap.xml`
- Monitor "Discovered - currently not indexed" for two to four weeks after deployment.
