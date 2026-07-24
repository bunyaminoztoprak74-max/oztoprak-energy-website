import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "E-posta İmza Oluşturucu | Öztoprak Enerji Danışmanlık",
  description:
    "Öztoprak Enerji Danışmanlık kurumsal e-posta imzasını önizleyin, HTML olarak kopyalayın veya indirin.",
  robots: { index: false, follow: false }
};

export default function SignatureLayout({ children }: { children: ReactNode }) {
  return children;
}
