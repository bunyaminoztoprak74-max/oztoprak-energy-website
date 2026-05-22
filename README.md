# Oztoprak Energy Consultancy Website

Premium bilingual EPC and renewable energy consultancy website built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## Routes

- English: `/en`
- Turkish: `/tr`
- Services: `/en/services`, `/tr/services`
- Turkish service alias: `/tr/hizmetler`
- Projects: `/en/projects`, `/tr/projects`
- Blog and categories: `/en/blog`, `/tr/blog`
- Contact: `/en/contact`, `/tr/contact`, `/tr/iletisim`
- Legal: privacy policy and terms in both languages

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en`.

## Contact Form Email Delivery

The contact form uses Web3Forms for production email delivery to `info@oztoprakenerji.com`.

1. Create a Web3Forms access key for `info@oztoprakenerji.com`.
2. Copy `.env.local.example` to `.env.local`.
3. Set:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

4. On Vercel, add the same variable under Project Settings -> Environment Variables.

If `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is missing, the form shows a configuration warning and does not pretend to send email.

## Production Build

```bash
npm run typecheck
npm run build
npm run start
```

## Vercel Deployment

1. Push this repository to GitHub, GitLab or Bitbucket.
2. Import the project in Vercel.
3. Keep the default framework preset as Next.js.
4. Build command: `npm run build`
5. Output directory: managed automatically by Next.js.
6. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for the production contact form.
7. Add CRM, analytics and Calendly integrations as needed.

## Content Maintenance

Localized content is centralized in:

- `content/dictionaries.ts`
- `content/services.ts`
- `content/projects.ts`
- `content/blog.ts`
- `content/programmatic-seo.ts`

SEO and schema helpers live in `lib/seo.ts` and `lib/schema.ts`.

## Programmatic SEO Architecture

The site now supports scalable bilingual SEO generation through JSON-style content entities:

- Services: existing detail pages plus generated service-location-intent pages
- Problems: `/en/problems/[slug]`, `/tr/problems/[slug]`
- Locations: `/en/locations/[slug]`, `/tr/locations/[slug]`
- Topic clusters: `/en/topics/[slug]`, `/tr/topics/[slug]`
- Pillar pages: `/en/pillars/[slug]`, `/tr/pillars/[slug]`
- Generated SEO landing pages: `/en/seo/[slug]`, `/tr/seo/[slug]`

The generator currently creates 216 service-location-intent SEO pages per language from:

- 9 services
- 8 locations
- 3 search intents

Add more services, locations, problems or intents in `content/programmatic-seo.ts` to scale to hundreds or thousands of static pages. Related content, metadata, hreflang alternates, structured data and sitemap entries are generated from the same source.
