# Implementation Sprint 3 Report

Date: 2026-06-17  
Domain: https://www.oztoprakenerji.com  
Goal: publish the first high-commercial-intent SEO service pages and strengthen lead generation.

## Implemented Pages

Created via the existing dynamic service route:

- `/en/services/technical-due-diligence`
- `/tr/services/teknik-durum-tespiti`
- `/en/services/hpp-performance-analysis`
- `/tr/services/hes-performans-analizi`

These pages are generated from `content/services.ts` and inherit:

- localized metadata through `buildMetadata`
- OpenGraph and Twitter card metadata
- canonical and hreflang metadata
- breadcrumb UI
- BreadcrumbList schema
- Service schema
- FAQ schema
- contact CTA section
- related content/internal linking section
- static generation through `generateStaticParams`

## Content Improvements

Added engineering-level service content for:

- technical due diligence data room review
- investor-grade renewable energy asset risk analysis
- EPC, commissioning and handover risk review
- HPP/HES generation loss separation
- turbine, governor and AGC behavior
- SCADA, alarm, trip and outage evidence review
- HES performance recovery actions

The dynamic service template now adds slug-specific expertise sections for:

- Technical Due Diligence
- HPP / HES Performance Analysis
- Owner's Engineering

This reduces duplicate-template risk and makes the new pages feel like consultant-written technical resources rather than generic programmatic SEO pages.

## Owner's Engineering Expansion

Expanded the existing Owner's Engineering service page without creating a duplicate page.

Added:

- EPC design review and constructability challenge
- FAT evidence review
- SAT evidence review
- ITP control
- NCR management and closeout follow-up
- commissioning readiness and energization gate review
- project handover controls
- punch-list discipline
- as-built documentation review

The page also receives additional specialized sections through the service detail template.

## Homepage Updates

Added homepage service cards for:

- Technical Due Diligence
- HPP Performance Analysis
- Teknik Durum Tespiti
- HES Performans Analizi

These cards create strong homepage-to-money-page internal links.

## Footer Updates

Added footer links for:

- `/en/services/technical-due-diligence`
- `/en/services/hpp-performance-analysis`
- `/tr/services/teknik-durum-tespiti`
- `/tr/services/hes-performans-analizi`

This gives the new service pages sitewide internal links and improves crawl discovery.

## Sitemap Update

The sitemap system is data-driven through `getServices(locale)`.

Because the new services were added to `content/services.ts`, they are automatically included in:

- `/service-sitemap.xml`
- `/sitemap.xml` sitemap index coverage

No hardcoded sitemap route change was required.

## Files Modified

- `content/services.ts`
- `app/[locale]/services/[slug]/page.tsx`
- `app/[locale]/page.tsx`
- `components/footer.tsx`

## Verification

Completed:

- `npm.cmd run typecheck`
- `npm.cmd run lint`
- `npm.cmd run build`

Build notes:

- Next.js 15 production build completed successfully.
- Static generation completed for 1002 routes.
- New dynamic service pages are included through `generateStaticParams`.
- New service URLs are included through the service sitemap data source.

Pending in this sprint:

- production deployment

## SEO Impact

Expected improvements:

- stronger commercial intent targeting for technical due diligence and HES performance analysis
- better topical authority around EPC risk, commissioning evidence, O&M maturity and hydropower operational performance
- stronger internal linking from homepage and footer
- improved crawl priority for high-value service pages
- better lead capture alignment through service-specific CTA and contact form sections
