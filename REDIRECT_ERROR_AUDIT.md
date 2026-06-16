# Redirect Error Audit

Date: 2026-06-16  
Scope: Google Search Console redirected-page investigation for selected URLs.  
Instruction followed: analysis only. No code was changed.

## Executive Summary

The reported redirect errors are mainly caused by a domain canonicalization conflict:

- Code, sitemap and canonical tags use `https://www.oztoprakenerji.com` without `www`.
- Live Vercel/domain behavior redirects `https://www.oztoprakenerji.com/...` to `https://www.oztoprakenerji.com/...` with `307 Temporary Redirect`.
- The final live HTML on `www` still declares canonical URLs on non-www.

This means Google sees sitemap URLs and canonical tags pointing to non-www URLs, but those non-www URLs redirect to www. That is a classic cause of Search Console "Redirected page" and canonical inconsistency signals.

The service legacy URL also has an additional internal redirect:

- `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
- redirects first to `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
- then redirects to `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`

So that URL has a two-step chain without trailing slash and a three-step chain with trailing slash.

## URLs Investigated

1. `/tr/blog/ges-performans-iyilestirme-rehberi`
2. `/tr/blog/epc-teknik-due-diligence`
3. `/tr/blog/hes-devreye-alma-prosedurleri`
4. `/tr/blog/hes-verimlilik-optimizasyon-yontemleri`
5. `/hizmetler/fizibilite-ve-yatirim-danismanligi`

## 1. Redirects Affecting These URLs

### `/tr/blog/ges-performans-iyilestirme-rehberi`

Live request:

- `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi`
- `307 Temporary Redirect`
- Location: `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi`
- Final: `200 OK`
- Redirect count: 1

With trailing slash:

- `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi/`
- Final: `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi`
- Redirect count: 2

### `/tr/blog/epc-teknik-due-diligence`

Live request:

- `https://www.oztoprakenerji.com/tr/blog/epc-teknik-due-diligence`
- Final: `https://www.oztoprakenerji.com/tr/blog/epc-teknik-due-diligence`
- Status: `200 OK`
- Redirect count: 1

Likely redirect source:

- Domain-level non-www to www redirect, not application middleware.

### `/tr/blog/hes-devreye-alma-prosedurleri`

Live request:

- `https://www.oztoprakenerji.com/tr/blog/hes-devreye-alma-prosedurleri`
- Final: `https://www.oztoprakenerji.com/tr/blog/hes-devreye-alma-prosedurleri`
- Status: `200 OK`
- Redirect count: 1

Likely redirect source:

- Domain-level non-www to www redirect, not application middleware.

### `/tr/blog/hes-verimlilik-optimizasyon-yontemleri`

Live request:

- `https://www.oztoprakenerji.com/tr/blog/hes-verimlilik-optimizasyon-yontemleri`
- Final: `https://www.oztoprakenerji.com/tr/blog/hes-verimlilik-optimizasyon-yontemleri`
- Status: `200 OK`
- Redirect count: 1

Likely redirect source:

- Domain-level non-www to www redirect, not application middleware.

### `/hizmetler/fizibilite-ve-yatirim-danismanligi`

Live request:

- `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
- `307 Temporary Redirect`
- Location: `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
- then `308 Permanent Redirect`
- Location: `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
- Final: `https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
- Final status: `200 OK`
- Redirect count: 2

With trailing slash:

- `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi/`
- Final: `https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
- Redirect count: 3

Application middleware source:

`middleware.ts`

```ts
"/hizmetler/fizibilite-ve-yatirim-danismanligi": "/tr/services/yenilenebilir-enerji-yatirim-danismanligi"
```

This legacy redirect is intentional, but it currently sits behind the domain-level non-www to www redirect.

## 2. Canonical Tags

Canonical tags on live final `www` pages point to non-www URLs:

### Blog canonical examples

`https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi` outputs:

```html
<link rel="canonical" href="https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi"/>
```

`https://www.oztoprakenerji.com/tr/blog/epc-teknik-due-diligence` outputs:

```html
<link rel="canonical" href="https://www.oztoprakenerji.com/tr/blog/epc-teknik-due-diligence"/>
```

`https://www.oztoprakenerji.com/tr/blog/hes-devreye-alma-prosedurleri` outputs:

```html
<link rel="canonical" href="https://www.oztoprakenerji.com/tr/blog/hes-devreye-alma-prosedurleri"/>
```

`https://www.oztoprakenerji.com/tr/blog/hes-verimlilik-optimizasyon-yontemleri` outputs:

```html
<link rel="canonical" href="https://www.oztoprakenerji.com/tr/blog/hes-verimlilik-optimizasyon-yontemleri"/>
```

### Service canonical example

`https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi` outputs:

```html
<link rel="canonical" href="https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi"/>
```

### Canonical Assessment

The canonical tags are internally consistent with the codebase, but not with the live domain routing.

Current conflict:

- Canonical says: non-www.
- Sitemap says: non-www.
- Live server redirects non-www to www.

Recommended future fix:

- Choose one preferred host.
- If preferred host is non-www, Vercel/domain DNS must stop redirecting non-www to www and should redirect www to non-www.
- If preferred host is www, update `lib/seo.ts`, `lib/sitemap-data.ts`, `app/robots.ts`, schema base URLs and metadata base to `https://www.oztoprakenerji.com`.

## 3. Sitemap Entries

### Blog sitemap

The following reported blog URLs are present in the live `blog-sitemap.xml`:

- `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi`
- `https://www.oztoprakenerji.com/tr/blog/epc-teknik-due-diligence`
- `https://www.oztoprakenerji.com/tr/blog/hes-devreye-alma-prosedurleri`
- `https://www.oztoprakenerji.com/tr/blog/hes-verimlilik-optimizasyon-yontemleri`

These sitemap URLs use non-www. Because live non-www redirects to www, Google sees sitemap URLs as redirected pages.

### Service sitemap

The legacy URL is not present in `service-sitemap.xml`:

- Missing from sitemap: `fizibilite-ve-yatirim-danismanligi`

The canonical target is present:

- `https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`

This is correct from a content perspective, but still affected by the non-www to www redirect.

### Sitemap Index

Live `sitemap.xml` references non-www child sitemaps:

- `https://www.oztoprakenerji.com/page-sitemap.xml`
- `https://www.oztoprakenerji.com/blog-sitemap.xml`
- `https://www.oztoprakenerji.com/service-sitemap.xml`

These URLs are consistent with code, but not with the current live host redirect behavior.

## 4. Internal Links

Repository search found no direct app/component navigation links to the old service URL except middleware.

Found references:

- `middleware.ts`
  - `/hizmetler/fizibilite-ve-yatirim-danismanligi` legacy redirect.

Blog references in `content/blog.ts`:

- `slug: "hes-verimlilik-optimizasyon-yontemleri"`
- `slug: "ges-performans-iyilestirme-rehberi"`
- generated authority topic:
  - `"hes-devreye-alma-prosedurleri"`
  - `"epc-teknik-due-diligence"`
- related links also reference `hes-verimlilik-optimizasyon-yontemleri`.

Assessment:

- The four blog URLs are not old broken URLs; they are current valid blog pages.
- Their GSC "redirected page" issue is caused by host redirect, not by slug redirect.
- The service URL is a true legacy URL and intentionally redirects to the current service page.

## 5. Trailing Slash Consistency

The site normalizes trailing slash URLs to no-slash URLs.

Examples:

- `https://www.oztoprakenerji.com/tr/blog/ges-performans-iyilestirme-rehberi/`
  - `308 Permanent Redirect`
  - Location: `/tr/blog/ges-performans-iyilestirme-rehberi`

- `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi/`
  - `308 Permanent Redirect`
  - Location: `/hizmetler/fizibilite-ve-yatirim-danismanligi`
  - then redirects again to `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`

Assessment:

- No-slash is the canonical URL style.
- Trailing slash requests create one extra redirect.
- Sitemap entries are no-slash, which is correct.

## 6. Are Old URLs Still Present In Sitemap?

### Blog URLs

The four reported blog URLs are still present in `blog-sitemap.xml`. They are not old URLs; they are valid current pages.

Problem:

- They are submitted as non-www.
- Live final URL is www.

### Legacy service URL

`/hizmetler/fizibilite-ve-yatirim-danismanligi` is not present in the current service sitemap.

This is correct.

## 7. Redirect Chains

### Blog URLs

Without trailing slash:

1. `https://www.oztoprakenerji.com/tr/blog/[slug]`
2. `307` to `https://www.oztoprakenerji.com/tr/blog/[slug]`
3. `200 OK`

With trailing slash:

1. `https://www.oztoprakenerji.com/tr/blog/[slug]/`
2. `307` to `https://www.oztoprakenerji.com/tr/blog/[slug]/`
3. `308` to `/tr/blog/[slug]`
4. `200 OK`

### Legacy service URL

Without trailing slash:

1. `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
2. `307` to `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
3. `308` to `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
4. `200 OK`

With trailing slash:

1. `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi/`
2. `307` to `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi/`
3. `308` to `/hizmetler/fizibilite-ve-yatirim-danismanligi`
4. `308` to `/tr/services/yenilenebilir-enerji-yatirim-danismanligi`
5. `200 OK`

## 8. Root Cause

Primary root cause:

- Production host preference is currently `www.oztoprakenerji.com`.
- Codebase SEO preference is currently `oztoprakenerji.com`.

Secondary root cause:

- Legacy Turkish service URL redirects through the host redirect first, creating a chain.

Not the primary cause:

- The four blog slugs are not missing.
- The four blog pages return `200 OK` on the final www URL.
- The legacy service URL is not in the sitemap.
- Trailing slash is not the main issue because sitemap uses no-slash URLs.

## 9. Recommended Fixes For Next Coding / Deployment Step

Do not implement until approved, but the clean path is:

1. Decide preferred host.

   The existing strategy says single domain should be `https://www.oztoprakenerji.com` without `.com.tr`. It did not explicitly say www or non-www, but the code currently assumes non-www.

2. If non-www remains preferred:

   - Fix Vercel/domain settings so:
     - `https://www.oztoprakenerji.com/*` redirects to `https://www.oztoprakenerji.com/*`.
     - `https://www.oztoprakenerji.com/*` returns `200` directly.
   - Keep current code base URLs.
   - Resubmit `https://www.oztoprakenerji.com/sitemap.xml`.

3. If www becomes preferred:

   - Update:
     - `lib/seo.ts`
     - `lib/sitemap-data.ts`
     - `lib/schema.ts`
     - `app/robots.ts`
     - `app/[locale]/layout.tsx` metadata base
   - Rebuild sitemap with `https://www.oztoprakenerji.com`.
   - Ensure canonical tags point to www final URLs.

4. Flatten the legacy service redirect.

   If non-www is preferred, make:

   - `https://www.oztoprakenerji.com/hizmetler/fizibilite-ve-yatirim-danismanligi`
   - redirect directly to:
   - `https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`

   If www is preferred, make it redirect directly to:

   - `https://www.oztoprakenerji.com/tr/services/yenilenebilir-enerji-yatirim-danismanligi`

5. Keep no trailing slash in internal links and sitemap.

6. After deployment, validate in Search Console:

   - Test live URL for each reported page.
   - Confirm submitted sitemap URLs match final canonical URLs.
   - Use "Validate fix" for redirected pages.

## 10. Final Status

Current reported blog URLs are valid pages but are submitted/canonicalized as non-www while production serves www.

Current legacy service URL is correctly excluded from sitemap but has a redirect chain because domain-level and application-level redirects both run.

No code was changed in this audit.
