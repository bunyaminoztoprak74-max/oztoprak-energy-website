import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/server/", "/admin/", "/*?*"]
      }
    ],
    sitemap: "https://www.oztoprakenerji.com/sitemap.xml",
    host: "https://www.oztoprakenerji.com"
  };
}
