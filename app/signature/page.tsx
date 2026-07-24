"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Signature } from "@/components/Signature";

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#F4F7FA] px-4 py-10 text-[#0F172A] transition-colors sm:px-8 dark:bg-[#050B14] dark:text-white">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#28860C]">Öztoprak Enerji Danışmanlık</p>
              <h1 className="mt-1 text-2xl font-bold text-[#0A1628] dark:text-white sm:text-3xl">
                E-posta İmza Oluşturucu
              </h1>
              <p className="mt-2 max-w-xl text-sm text-[#4B5A6B] dark:text-white/60">
                Kurumsal e-posta imzanızı önizleyin, panoya kopyalayın veya HTML dosyası olarak indirin.
                Oluşturulan HTML; Outlook, Gmail, Apple Mail, Thunderbird ve mobil e-posta uygulamalarıyla
                uyumludur.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="shrink-0 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#0A1628] transition-colors hover:border-[#28860C] hover:text-[#28860C] dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              {darkMode ? "☀ Açık Mod" : "🌙 Koyu Mod"}
            </button>
          </header>

          <div className="mb-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopyHtml}
              className="rounded-md bg-[#0A1628] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#112844]"
            >
              HTML Kopyala
            </button>
            <button
              type="button"
              onClick={handleCopyRichText}
              className="rounded-md bg-[#28860C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1F6B0A]"
            >
              Zengin Metin Kopyala
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-md border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-semibold text-[#0A1628] transition-colors hover:border-[#28860C] hover:text-[#28860C] dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              HTML İndir
            </button>
            <Link
              href="/signature/test"
              target="_blank"
              className="rounded-md border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-semibold text-[#0A1628] no-underline transition-colors hover:border-[#28860C] hover:text-[#28860C] dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              Önizle (Test Sayfası) ↗
            </Link>

            {copyState === "html-copied" && (
              <span className="flex items-center text-sm font-semibold text-[#28860C]">HTML panoya kopyalandı ✓</span>
            )}
            {copyState === "rich-copied" && (
              <span className="flex items-center text-sm font-semibold text-[#28860C]">
                Zengin metin panoya kopyalandı — doğrudan e-posta gövdesine yapıştırabilirsiniz ✓
              </span>
            )}
            {copyState === "error" && (
              <span className="flex items-center text-sm font-semibold text-red-600">{errorMessage}</span>
            )}
          </div>

          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4B5A6B] dark:text-white/50">
              Önizleme
            </h2>
            <Signature />
          </section>

          <section className="mt-8 rounded-lg border border-[#E2E8F0] bg-white p-5 text-sm text-[#4B5A6B] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/60">
            <h3 className="mb-2 text-sm font-bold text-[#0A1628] dark:text-white">Nasıl kurulur?</h3>
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>
                <strong>Zengin Metin Kopyala</strong> butonuna basın, ardından e-posta istemcinizin imza
                ayarlarındaki metin alanına doğrudan yapıştırın (Outlook, Gmail, Apple Mail).
              </li>
              <li>
                Yapıştırma biçimlendirmeyi korumazsa <strong>HTML İndir</strong> ile dosyayı indirip
                istemcinizin &quot;HTML imza içe aktar&quot; seçeneğini kullanın.
              </li>
              <li>
                Kurulumdan sonra kendinize bir test e-postası gönderip <strong>Önizle</strong> sayfasındaki
                sonuçla karşılaştırın.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
