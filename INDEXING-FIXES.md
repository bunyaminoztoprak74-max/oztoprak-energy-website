# Indexing Fixes

## Problem

Google Search Console reports:

- Indexed pages: 17
- Not indexed pages: 356
- Discovered - currently not indexed: 341

The most likely cause is not a crawl-blocking bug. The site is technically crawlable, but Google is choosing not to index a large group of generated URLs because many are low-priority, similar, or not yet supported by enough internal authority.

## URL Classes

### Keep Indexable

- `/en`, `/tr`
- `/en/about`, `/tr/about`
- `/en/services`, `/tr/hizmetler`
- `/en/services/[slug]`, `/tr/services/[slug]`
- `/en/blog`, `/tr/blog`
- `/en/blog/[slug]`, `/tr/blog/[slug]`
- `/en/projects`, `/tr/projects`
- `/en/projects/[slug]`, `/tr/projects/[slug]`
- `/en/problems/[slug]`, `/tr/problems/[slug]`
- `/en/locations/[slug]`, `/tr/locations/[slug]`
- `/en/topics/[slug]`, `/tr/topics/[slug]`
- `/en/pillars/[slug]`, `/tr/pillars/[slug]`

### Noindex, Follow

- `/en/seo`
- `/tr/seo`
- `/en/seo/[slug]`
- `/tr/seo/[slug]`

Reason: these pages are useful for future programmatic SEO expansion, but the current generated set can create hundreds of similar URLs. Keeping them `noindex, follow` preserves crawl paths while preventing low-value indexing signals.

### Redirected to Canonical Turkish Service Pages

- `/hes-danismanligi` -> `/tr/services/hes-danismanligi`
- `/ges-danismanligi` -> `/tr/services/ges-danismanligi`
- `/epc-danismanligi` -> `/tr/services/epc-teknik-danismanlik-hizmeti`
- `/teknik-denetim` -> `/tr/services/mevcut-santraller-icin-teknik-denetim`
- `/devreye-alma` -> `/tr/services/enerji-santrali-devreye-alma`
- `/performans-analizi` -> `/tr/services/isletme-bakim-performans-iyilestirme`
- `/enerji-yatirim-danismanligi` -> `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
- `/ariza-analizi` -> `/tr/problems/isletme-bakim-emre-amadelik-kayiplari`

## Applied Fixes

1. Updated canonical domain to `https://oztoprakenerji.com`.
2. Updated Organization, LocalBusiness, Website and Service schema base URLs.
3. Updated robots sitemap host.
4. Set generated `/seo` pages to `noindex, follow`.
5. Added 301 redirects for short Turkish keyword URLs.
6. Improved footer internal links to commercial service pages.
7. Improved About page E-E-A-T content.

## Expected Impact

- Fewer low-quality generated URLs competing for crawl budget.
- Stronger signals around canonical commercial pages.
- Better internal authority flow to Turkish target keyword services.
- Lower "Discovered - currently not indexed" volume over time.
