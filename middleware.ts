import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
