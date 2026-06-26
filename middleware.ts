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
    "/hes-danismanligi": "/tr/services/hes-danismanligi",
    "/ges-danismanligi": "/tr/services/ges-danismanligi",
    "/epc-danismanligi": "/tr/services/epc-teknik-danismanlik-hizmeti",
    "/teknik-denetim": "/tr/services/mevcut-santraller-icin-teknik-denetim",
    "/devreye-alma": "/tr/services/enerji-santrali-devreye-alma",
    "/performans-analizi": "/tr/services/isletme-bakim-performans-iyilestirme",
    "/enerji-yatirim-danismanligi": "/tr/services/yenilenebilir-enerji-yatirim-danismanligi",
    "/ariza-analizi": "/tr/problems/isletme-bakim-emre-amadelik-kayiplari",
    "/hizmetler/fizibilite-ve-yatirim-danismanligi": "/tr/services/yenilenebilir-enerji-yatirim-danismanligi",
    "/hizmetler/proje-tasarim-ve-muhendislik": "/tr/services/epc-teknik-danismanlik-hizmeti",
    "/en/hizmetler": "/en/services",
    "/tr/services": "/tr/hizmetler",
    "/en/iletisim": "/en/contact",
    "/tr/contact": "/tr/iletisim"
  };
  if (pathname === "/cardbook-ai") {
    return NextResponse.rewrite(new URL("/cardbook-ai/index.html", request.url));
  }
  const target = redirects[pathname];

  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml|page-sitemap.xml|blog-sitemap.xml|service-sitemap.xml).*)"
  ]
};
