"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Signature } from "@/components/Signature";
import styles from "./page.module.css";

type CopyState = "idle" | "html-copied" | "rich-copied" | "error";

export default function SignaturePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = setTimeout(() => setCopyState("idle"), 2600);
    return () => clearTimeout(timeout);
  }, [copyState]);

  const fetchSignatureHtml = useCallback(async () => {
    const response = await fetch("/api/signature/html", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`İmza HTML'i alınamadı (${response.status})`);
    }
    return response.text();
  }, []);

  const handleCopyHtml = useCallback(async () => {
    try {
      const html = await fetchSignatureHtml();
      await navigator.clipboard.writeText(html);
      setCopyState("html-copied");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Kopyalama başarısız oldu.");
      setCopyState("error");
    }
  }, [fetchSignatureHtml]);

  const handleCopyRichText = useCallback(async () => {
    try {
      const html = await fetchSignatureHtml();
      if (typeof window !== "undefined" && "ClipboardItem" in window) {
        const htmlBlob = new Blob([html], { type: "text/html" });
        const textBlob = new Blob([html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()], {
          type: "text/plain"
        });
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": htmlBlob,
            "text/plain": textBlob
          })
        ]);
      } else {
        await navigator.clipboard.writeText(html);
      }
      setCopyState("rich-copied");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Kopyalama başarısız oldu.");
      setCopyState("error");
    }
  }, [fetchSignatureHtml]);

  const handleDownload = useCallback(async () => {
    try {
      const html = await fetchSignatureHtml();
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "oztoprak-enerji-imza.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "İndirme başarısız oldu.");
      setCopyState("error");
    }
  }, [fetchSignatureHtml]);

  const pageClassName = `${styles.page} ${darkMode ? `${styles.dark} dark` : ""}`;

  return (
    <div className={pageClassName}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Öztoprak Enerji Danışmanlık</p>
            <h1 className={styles.title}>E-posta İmza Oluşturucu</h1>
            <p className={styles.subtitle}>
              Kurumsal e-posta imzanızı önizleyin, panoya kopyalayın veya HTML dosyası olarak indirin. Oluşturulan
              HTML; Outlook, Gmail, Apple Mail, Thunderbird ve mobil e-posta uygulamalarıyla uyumludur.
            </p>
          </div>
          <button type="button" onClick={() => setDarkMode((prev) => !prev)} className={styles.themeToggle}>
            {darkMode ? "☀ Açık Mod" : "🌙 Koyu Mod"}
          </button>
        </header>

        <div className={styles.toolbar}>
          <button type="button" onClick={handleCopyHtml} className={styles.btnPrimary}>
            HTML Kopyala
          </button>
          <button type="button" onClick={handleCopyRichText} className={styles.btnSecondary}>
            Zengin Metin Kopyala
          </button>
          <button type="button" onClick={handleDownload} className={styles.btnGhost}>
            HTML İndir
          </button>
          <Link href="/signature/test" target="_blank" className={styles.btnGhost}>
            Önizle (Test Sayfası) ↗
          </Link>

          {copyState === "html-copied" && <span className={`${styles.status} ${styles.statusOk}`}>HTML panoya kopyalandı ✓</span>}
          {copyState === "rich-copied" && (
            <span className={`${styles.status} ${styles.statusOk}`}>
              Zengin metin panoya kopyalandı — doğrudan e-posta gövdesine yapıştırabilirsiniz ✓
            </span>
          )}
          {copyState === "error" && <span className={`${styles.status} ${styles.statusError}`}>{errorMessage}</span>}
        </div>

        <p className={styles.sectionLabel}>Önizleme</p>
        <Signature />

        <div className={styles.helpCard}>
          <p className={styles.helpTitle}>Nasıl kurulur?</p>
          <ol>
            <li>
              <strong>Zengin Metin Kopyala</strong> butonuna basın, ardından e-posta istemcinizin imza ayarlarındaki
              metin alanına doğrudan yapıştırın (Outlook, Gmail, Apple Mail).
            </li>
            <li>
              Yapıştırma biçimlendirmeyi korumazsa <strong>HTML İndir</strong> ile dosyayı indirip istemcinizin
              &quot;HTML imza içe aktar&quot; seçeneğini kullanın.
            </li>
            <li>
              Kurulumdan sonra kendinize bir test e-postası gönderip <strong>Önizle</strong> sayfasındaki sonuçla
              karşılaştırın.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
