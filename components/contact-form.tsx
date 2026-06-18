"use client";

import { useState, type FormEvent } from "react";
import type { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

type Dict = ReturnType<typeof getDictionary>;
type FormStatus = "idle" | "loading" | "success" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContactForm({ dict, locale }: { dict: Dict; locale: Locale }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const isTurkish = locale === "tr";
  const isConfigured = Boolean(accessKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    if (!isConfigured) {
      setStatus("error");
      setMessage(
        isTurkish
          ? "Form gonderimi henuz yapilandirilmadi. NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY eklenmeden e-posta gonderimi yapilmaz."
          : "Form delivery is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY before email delivery can work."
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const botcheck = String(formData.get("botcheck") || "");

    if (botcheck) {
      setStatus("success");
      setMessage(isTurkish ? "Talebiniz alindi." : "Your request has been received.");
      form.reset();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage(isTurkish ? "Lutfen gecerli bir e-posta adresi girin." : "Please enter a valid business email address.");
      return;
    }

    formData.set("access_key", accessKey as string);
    formData.set("subject", subject ? `Oztoprak Energy: ${subject}` : "Oztoprak Energy technical consultation request");
    formData.set("from_name", "Oztoprak Energy Website");
    formData.set("to", "info@oztoprakenerji.com");

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form delivery failed.");
      }

      setStatus("success");
      setMessage(
        isTurkish
          ? "Tesekkurler. Teknik danismanlik talebiniz info@oztoprakenerji.com adresine iletildi."
          : "Thank you. Your technical consultation request was sent to info@oztoprakenerji.com."
      );
      form.reset();
      if (typeof window !== "undefined" && (window as unknown as { oztoprakTrack?: (e: string) => void }).oztoprakTrack) {
        (window as unknown as { oztoprakTrack: (e: string) => void }).oztoprakTrack("contact_form_submit");
      }
    } catch {
      setStatus("error");
      setMessage(
        isTurkish
          ? "Form gonderilemedi. Lutfen info@oztoprakenerji.com adresine e-posta gonderin veya WhatsApp ile iletisime gecin."
          : "The form could not be sent. Please email info@oztoprakenerji.com or contact us on WhatsApp."
      );
    }
  }

  return (
    <form className="premium-card rounded-lg p-6" onSubmit={handleSubmit}>
      <div className="hidden">
        <label>
          Do not fill this field
          <input name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-white">
          {dict.contact.formName}
          <input name="name" required minLength={2} className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {dict.contact.formEmail}
          <input name="email" required type="email" className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {dict.contact.formCompany}
          <input name="company" className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {dict.contact.formSubject}
          <input name="subject" required minLength={3} className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {dict.contact.formMessage}
          <textarea name="message" required minLength={20} rows={5} className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500" />
        </label>
        <button
          disabled={status === "loading"}
          className="rounded-md bg-energy-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (isTurkish ? "Gonderiliyor..." : "Sending...") : dict.contact.formSubmit}
        </button>
        {!isConfigured ? (
          <p className="rounded-md border border-copper/30 bg-copper/10 p-3 text-sm leading-6 text-copper">
            {isTurkish
              ? "E-posta gonderimi icin Vercel ortam degiskenlerinde NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY tanimlanmalidir."
              : "Email delivery requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in the Vercel environment variables."}
          </p>
        ) : null}
        {message ? (
          <p className={status === "success" ? "text-sm leading-6 text-energy-500" : "text-sm leading-6 text-copper"} aria-live="polite">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
