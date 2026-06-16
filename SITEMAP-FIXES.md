# Sitemap Fixes

## Final Sitemap Structure

Submit only:

```text
https://www.oztoprakenerji.com/sitemap.xml
```

The sitemap index references:

```text
https://www.oztoprakenerji.com/page-sitemap.xml
https://www.oztoprakenerji.com/blog-sitemap.xml
https://www.oztoprakenerji.com/service-sitemap.xml
```

## Rules

- Only canonical apex-domain URLs are included.
- Redirected URLs are excluded.
- `/seo/...` generated pages are excluded from sitemap and marked `noindex, follow`.
- Turkish service index canonical is `/tr/hizmetler`.
- Turkish service detail pages remain under `/tr/services/[slug]`.
- English service index canonical is `/en/services`.

## Google Search Console Action

Keep only:

```text
https://www.oztoprakenerji.com/sitemap.xml
```

Old direct submissions such as `page-sitemap.xml`, `blog-sitemap.xml`, `service-sitemap.xml`, `cspt-service-sitemap.xml`, or `https://www.../sitemap.xml` should be removed if the interface allows it. If they cannot be removed, leave them; Google will eventually prioritize the active canonical sitemap.

## Important Exclusions

Excluded from sitemap intentionally:

- `/`
- `/services`
- `/hizmetler`
- `/tr/services`
- `/en/hizmetler`
- `/en/iletisim`
- `/tr/contact`
- `/seo`
- `/seo/[slug]`
- Legacy Turkish root keyword URLs

These either redirect, are duplicate route variants, or are not currently suitable for indexing.
