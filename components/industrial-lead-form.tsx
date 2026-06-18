"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";

type FormStatus = "idle" | "loading" | "success" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const copy = {
  en: {
    name: "Full Name",
    company: "Company / Facility Name",
    email: "Business Email",
    phone: "Phone",
    billRange: "Monthly Electricity Bill (approx.)",
    billRangePlaceholder: "Select bill range",
    billOptions: [
      "Under ₺100,000",
      "₺100,000 – ₺500,000",
      "₺500,000 – ₺2,000,000",
      "Over ₺2,000,000",
      "I don't know / prefer not to say"
    ],
    facilityType: "Facility Type",
    facilityPlaceholder: "Select facility type",
    facilityOptions: [
      "Factory / Manufacturing",
      "Organized Industrial Zone (OSB) facility",
      "Food & Beverage Production",
      "Cold Storage / Logistics",
      "Hospital / Healthcare",
      "Commercial Building / Hotel",
      "Other"
    ],
    painPoint: "Primary Issue",
    painPlaceholder: "Select main concern",
    painOptions: [
      "High reactive power penalties",
      "High electricity bill, unclear cause",
      "Contract demand / excess demand charges",
      "Rooftop solar feasibility",
      "Open market tariff eligibility",
      "General cost reduction"
    ],
    message: "Additional Notes (optional)",
    messagePlaceholder: "Describe your situation or share any details that would help us prepare a more targeted preliminary review.",
    submit: "Request Free Bill Review",
    submitting: "Sending…",
    successMsg: "Thank you. Your request has been received. We will contact you within 1–2 business days with a preliminary assessment.",
    errorMsg: "The form could not be sent. Please email info@oztoprakenerji.com or contact us directly.",
    notConfigured: "Form delivery requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel environment variables.",
    disclaimer: "Your information is kept strictly confidential and used only to prepare your preliminary review."
  },
  tr: {
    name: "Ad Soyad",
    company: "Şirket / Tesis Adı",
    email: "İş E-postası",
    phone: "Telefon",
    billRange: "Aylık Elektrik Faturası (yaklaşık)",
    billRangePlaceholder: "Fatura aralığı seçin",
    billOptions: [
      "₺100.000 altı",
      "₺100.000 – ₺500.000",
      "₺500.000 – ₺2.000.000",
      "₺2.000.000 üzeri",
      "Bilmiyorum / Belirtmek istemiyorum"
    ],
    facilityType: "Tesis Türü",
    facilityPlaceholder: "Tesis türü seçin",
    facilityOptions: [
      "Fabrika / İmalat",
      "Organize Sanayi Bölgesi (OSB) tesisi",
      "Gıda & İçecek Üretimi",
      "Soğuk Depo / Lojistik",
      "Hastane / Sağlık",
      "Ticari Bina / Otel",
      "Diğer"
    ],
    painPoint: "Ana Sorun",
    painPlaceholder: "Temel endişenizi seçin",
    painOptions: [
      "Yüksek reaktif enerji cezaları",
      "Yüksek elektrik faturası, nedeni belirsiz",
      "Sözleşme gücü / aşım talep bedeli",
      "Çatı GES fizibilite",
      "Serbest piyasa tarife uygunluğu",
      "Genel maliyet düşürme"
    ],
    message: "Ek Notlar (isteğe bağlı)",
    messagePlaceholder: "Durumu açıklayın veya ön incelemeye katkı sağlayacak detayları paylaşın.",
    submit: "Ücretsiz Fatura İncelemesi Talep Et",
    submitting: "Gönderiliyor…",
    successMsg: "Teşekkürler. Talebiniz alındı. 1–2 iş günü içinde ön değerlendirme ile geri dönülecektir.",
    errorMsg: "Form gönderilemedi. Lütfen info@oztoprakenerji.com adresine e-posta gönderin veya doğrudan iletişime geçin.",
    notConfigured: "E-posta teslimi için Vercel ortam değişkenlerinde NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY gereklidir.",
    disclaimer: "Bilgileriniz kesinlikle gizli tutulur ve yalnızca ön incelemenizi hazırlamak için kullanılır."
  }
} as const;

export function IndustrialLeadForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const t = copy[locale];
  const isConfigured = Boolean(accessKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    if (!isConfigured) {
      setStatus("error");
      setMessage(t.notConfigured);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const botcheck = String(formData.get("botcheck") || "");
    if (botcheck) {
      setStatus("success");
      setMessage(t.successMsg);
      form.reset();
      return;
    }

    const email = String(formData.get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage(locale === "tr" ? "Lütfen geçerli bir iş e-postası girin." : "Please enter a valid business email address.");
      return;
    }

    const billRange = String(formData.get("bill_range") || "");
    const facilityType = String(formData.get("facility_type") || "");
    const painPoint = String(formData.get("pain_point") || "");
    const name = String(formData.get("name") || "");
    const company = String(formData.get("company") || "");

    formData.set("access_key", accessKey as string);
    formData.set("subject", `Oztoprak Energy: Industrial Bill Review — ${company || name}`);
    formData.set("from_name", "Oztoprak Energy — Industrial Lead");
    formData.set("to", "info@oztoprakenerji.com");
    formData.set(
      "message",
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${formData.get("phone") || "—"}`,
        `Bill Range: ${billRange}`,
        `Facility Type: ${facilityType}`,
        `Primary Issue: ${painPoint}`,
        `Notes: ${formData.get("notes") || "—"}`
      ].join("\n")
    );

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message || "Form delivery failed.");

      setStatus("success");
      setMessage(t.successMsg);
      form.reset();
      if (typeof window !== "undefined" && typeof (window as Window & { oztoprakTrack?: (e: string, p?: object) => void }).oztoprakTrack === "function") {
        (window as Window & { oztoprakTrack?: (e: string, p?: object) => void }).oztoprakTrack!("bill_review_form_submit", { locale });
      }
    } catch {
      setStatus("error");
      setMessage(t.errorMsg);
    }
  }

  return (
    <form className="premium-card rounded-xl p-6 lg:p-8" onSubmit={handleSubmit}>
      <div className="hidden">
        <label>
          Do not fill
          <input name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.name} *
          <input
            name="name"
            required
            minLength={2}
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.company} *
          <input
            name="company"
            required
            minLength={2}
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.email} *
          <input
            name="email"
            required
            type="email"
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.phone}
          <input
            name="phone"
            type="tel"
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.billRange} *
          <select
            name="bill_range"
            required
            defaultValue=""
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          >
            <option value="" disabled>{t.billRangePlaceholder}</option>
            {t.billOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white">
          {t.facilityType} *
          <select
            name="facility_type"
            required
            defaultValue=""
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          >
            <option value="" disabled>{t.facilityPlaceholder}</option>
            {t.facilityOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="col-span-full grid gap-2 text-sm font-medium text-white">
          {t.painPoint} *
          <select
            name="pain_point"
            required
            defaultValue=""
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white outline-none focus:border-energy-500"
          >
            <option value="" disabled>{t.painPlaceholder}</option>
            {t.painOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="col-span-full grid gap-2 text-sm font-medium text-white">
          {t.message}
          <textarea
            name="notes"
            rows={4}
            placeholder={t.messagePlaceholder}
            className="rounded-md border border-white/10 bg-navy-950 px-4 py-3 text-white placeholder-steel/50 outline-none focus:border-energy-500"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-energy-500 px-6 py-4 text-base font-bold text-navy-950 shadow-glow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? t.submitting : t.submit}
        </button>
        <p className="text-center text-xs leading-5 text-steel">{t.disclaimer}</p>
      </div>
      {message ? (
        <p
          className={`mt-4 rounded-md p-3 text-sm leading-6 ${status === "success" ? "border border-energy-500/30 bg-energy-500/10 text-energy-500" : "border border-copper/30 bg-copper/10 text-copper"}`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
