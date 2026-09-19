import { NextResponse, type NextRequest } from "next/server";

// Note: legacy path -> locale redirects (/, /about, /services, /hizmetler, etc.)
// are handled exclusively by next.config.mjs's `redirects()`. Do not duplicate
// them here — having the same source/destination pairs in both middleware and
// next.config.js is redundant and makes the redirect map harder to keep in
// sync (see 2026-08 GSC redirect-error cleanup).
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";

  if (pathname === "/cardbook-ai") {
    return NextResponse.rewrite(new URL("/cardbook-ai/index.html", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml|page-sitemap.xml|blog-sitemap.xml|service-sitemap.xml).*)"
  ]
};
