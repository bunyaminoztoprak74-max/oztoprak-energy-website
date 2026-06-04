import { buildUrlSet, serviceSitemapEntries } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildUrlSet(serviceSitemapEntries()), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
