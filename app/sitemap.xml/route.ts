import { buildSitemapIndex } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildSitemapIndex(["/page-sitemap.xml", "/blog-sitemap.xml", "/service-sitemap.xml"]), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
