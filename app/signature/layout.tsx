import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "E-posta İmza Oluşturucu | Öztoprak Enerji Danışmanlık",
  description:
    "Öztoprak Enerji Danışmanlık kurumsal e-posta imzasını önizleyin, HTML olarak kopyalayın veya indirin.",
  robots: { index: false, follow: false }
};

// /signature sits outside app/[locale], the only other place in this project
// that renders <html>/<body> (see app/[locale]/layout.tsx). There is no
// shared app/layout.tsx, so this layout is the effective document root for
// the whole /signature route tree and must supply <html>/<body> itself.
// Styling is handled entirely by CSS Modules scoped to each component/page
// (Signature.module.css, page.module.css, etc.) rather than a global
// stylesheet import, so this route never depends on what any other layout
// does or does not import.
export default function SignatureLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
