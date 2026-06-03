import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirects: Record<string, string> = {
    "/": "/en",
    "/about": "/en/about",
    "/services": "/en/services",
    "/projects": "/en/projects",
    "/blog": "/en/blog",
    "/contact": "/en/contact",
    "/hizmetler": "/tr/hizmetler",
    "/projeler": "/tr/projects",
    "/sss": "/tr/hizmetler",
    "/hizmetler/fizibilite-ve-yatirim-danismanligi": "/tr/services/yenilenebilir-enerji-yatirim-danismanligi",
    "/hizmetler/proje-tasarim-ve-muhendislik": "/tr/services/epc-teknik-danismanlik-hizmeti",
    "/en/hizmetler": "/en/services",
    "/tr/services": "/tr/hizmetler",
    "/en/iletisim": "/en/contact",
    "/tr/contact": "/tr/iletisim"
  };
  const target = redirects[pathname];

  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml).*)"]
};
