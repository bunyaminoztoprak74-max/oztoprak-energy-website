import Link from "next/link";
import { buildSignatureDocument } from "@/lib/signature-html";
import styles from "./page.module.css";

export const metadata = {
  title: "E-posta İmzası Testi | Öztoprak Enerji",
  robots: { index: false, follow: false }
};

// Renders the literal generated email HTML inside an iframe (srcDoc) so what
// you see here is exactly what a mail client would render from the markup
// returned by /api/signature/html — not the React/CSS-module preview.
export default function SignatureTestPage() {
  const doc = buildSignatureDocument();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>E-posta İmzası Testi</h1>
            <p className={styles.subtitle}>
              Aşağıdaki önizleme, gönderilecek gerçek HTML çıktısını bir e-posta istemcisi gibi render eder.
            </p>
          </div>
          <Link href="/signature" className={styles.backLink}>
            ← Düzenleyiciye dön
          </Link>
        </div>

        <div className={styles.frameCard}>
          <div className={styles.frameLabel}>Canlı HTML Önizleme (iframe)</div>
          <iframe title="E-posta imzası önizlemesi" srcDoc={doc} className={styles.frame} sandbox="" />
        </div>

        <div className={styles.note}>
          <p style={{ margin: 0 }}>
            <strong>Test önerisi:</strong> İmzayı kopyaladıktan sonra kendinize bir test e-postası gönderip Outlook,
            Gmail, Apple Mail ve mobil e-posta uygulamasında görünümünü kontrol edin. Logo ve QR kod
            oztoprakenerji.com üzerinde barındırıldığından e-posta istemcisi resimleri engellese bile metin ve
            bağlantılar okunur kalır.
          </p>
        </div>
      </div>
    </div>
  );
}
