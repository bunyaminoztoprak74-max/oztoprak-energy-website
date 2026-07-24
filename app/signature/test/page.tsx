import { buildSignatureDocument } from "@/lib/signature-html";
import Link from "next/link";

export const metadata = {
  title: "E-posta İmzası Testi | Öztoprak Enerji",
  robots: { index: false, follow: false }
};

// Renders the literal generated email HTML inside an iframe (srcDoc) so what
// you see here is exactly what a mail client would render from the markup
// returned by /api/signature/html — not the React/Tailwind preview.
export default function SignatureTestPage() {
  const doc = buildSignatureDocument();

  return (
    <div className="min-h-screen bg-[#F4F7FA] px-4 py-10 text-[#0F172A] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#0A1628]">E-posta İmzası Testi</h1>
            <p className="mt-1 text-sm text-[#4B5A6B]">
              Aşağıdaki önizleme, gönderilecek gerçek HTML çıktısını bir e-posta istemcisi gibi render eder.
            </p>
          </div>
          <Link
            href="/signature"
            className="rounded border border-[#E2E8F0] bg-white px-3 py-2 text-sm font-semibold text-[#0A1628] no-underline hover:border-[#28860C] hover:text-[#28860C]"
          >
            ← Düzenleyiciye dön
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#E2E8F0] bg-white shadow-sm">
          <div className="border-b border-[#E2E8F0] bg-[#0A1628] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
            Canlı HTML Önizleme (iframe)
          </div>
          <iframe
            title="E-posta imzası önizlemesi"
            srcDoc={doc}
            className="h-[520px] w-full border-0"
            sandbox=""
          />
        </div>

        <div className="mt-6 rounded-lg border border-[#E2E8F0] bg-white p-4 text-sm text-[#4B5A6B] shadow-sm">
          <p className="font-semibold text-[#0A1628]">Test önerisi</p>
          <p className="mt-1">
            İmzayı kopyaladıktan sonra kendinize bir test e-postası gönderip Outlook, Gmail, Apple Mail ve
            mobil e-posta uygulamasında görünümünü kontrol edin. Tüm görseller (logo ve QR kod)
            oztoprakenerji.com üzerinde barındırıldığından e-posta istemcisi resimleri engellese bile
            metin ve bağlantılar okunur kalır.
          </p>
        </div>
      </div>
    </div>
  );
}
