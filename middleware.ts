import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  if (!isLocal && (host === "www.oztoprakenerji.com" || request.nextUrl.protocol === "http:")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "oztoprakenerji.com";
    return NextResponse.redirect(url, 308);
  }

  const redirects: Record<string, string> = {
    "/": "/en",
    "/en/hizmetler": "/en/services",
    "/tr/services": "/tr/hizmetler",
    "/en/iletisim": "/en/contact",
    "/tr/contact": "/tr/iletisim"
  };
  const target = redirects[request.nextUrl.pathname];

  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml).*)"]
};
