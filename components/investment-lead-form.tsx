"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { fieldsFor, plantTypes, validateLead, type LeadKind } from "@/lib/investment-fields";
import { trackInvestment } from "./investment-tracking";
import { deliverInvestment, UncertainDeliveryError } from "@/lib/investment-delivery";

export function InvestmentLeadForm({ kind, plantType = "", source }: { kind: LeadKind; plantType?: string; source: string }) {
  const prefix = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const inFlight = useRef(false);
  const [token, setToken] = useState("");
  const [intent, setIntent] = useState("investment");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uncertain, setUncertain] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const query = new URLSearchParams(window.location.search);
    const type = query.get("type");
    if (!plantType && type && (plantTypes as readonly string[]).includes(type)) {
      const select = formRef.current?.elements.namedItem("plantType") as HTMLSelectElement | null;
      if (select) select.value = type;
    }
    const requestIntent = query.get("intent");
    if (requestIntent && ["due-diligence", "valuation"].includes(requestIntent)) setIntent(requestIntent);
    fetch("/api/investment-leads", { signal: controller.signal, cache: "no-store" }).then(async (res) => {
      const data = await res.json();
      if (!res.ok || typeof data.token !== "string") throw new Error("unavailable");
      setToken(data.token);
    }).catch((error: Error) => { if (error.name !== "AbortError") { setStatus("error"); setMessage("Form şu anda kullanılamıyor. Lütfen iletişim sayfamızdan bize ulaşın."); } });
    return () => controller.abort();
  }, [plantType]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || status === "success" || uncertain) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = { ...Object.fromEntries(data.entries()), kind, source, intent, token, consent: data.get("consent") === "on", confidential: data.get("confidential") === "on" };
    const valid = validateLead(payload);
    if (!valid.ok) {
      setErrors(valid.errors); setStatus("error"); setMessage("Lütfen işaretli alanları kontrol edin.");
      (form.elements.namedItem(Object.keys(valid.errors)[0]) as HTMLElement | null)?.focus();
      return;
    }
    inFlight.current = true;
    setErrors({}); setStatus("sending"); setMessage("");
    try {
      const res = await fetch("/api/investment-leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(20_000) });
      const result = await res.json();
      if (!res.ok) { setErrors(result.errors || {}); throw new Error(result.error || "Talebiniz iletilemedi."); }
      if (result.delivery === "web3forms" && result.payload) await deliverInvestment(result.payload);
      else if (result.success !== true) throw new Error("Talebiniz iletilemedi.");
      setStatus("success");
      setMessage(`Teşekkürler. ${kind === "buyer" ? "Yatırım kriterleriniz" : "Santral satış talebiniz"} ${result.delivery === "web3forms" ? "iletildi" : "kaydedildi"}. Ekibimiz sizinle iletişime geçecektir. Başvuru referansınız: ${result.reference}`);
      trackInvestment(`${kind}_form_submit`, { source, intent, locale: "tr" });
      form.reset();
    } catch (error) {
      setStatus("error");
      if (error instanceof UncertainDeliveryError || (error instanceof Error && error.name === "TimeoutError")) setUncertain(true);
      setMessage(error instanceof Error && error.name !== "TimeoutError" ? error.message : "Gönderim sonucu doğrulanamadı. Tekrar göndermeden önce lütfen bizimle iletişime geçin.");
    } finally { inFlight.current = false; }
  }

  const control = "w-full min-w-0 rounded-md border border-white/20 bg-navy-950 px-4 py-3 text-base text-white outline-none focus:border-energy-500 focus:ring-1 focus:ring-energy-500";
  return <form ref={formRef} onSubmit={submit} onChange={() => { if (!started.current) { started.current = true; trackInvestment(`${kind}_form_start`, { source, intent, locale: "tr" }); } }} className="premium-card rounded-xl p-5 sm:p-8" aria-label={kind === "buyer" ? "Yatırımcı kriter formu" : "Santral satış formu"} aria-busy={status === "sending"} data-hj-suppress>
    <p className="mb-6 text-sm leading-7 text-steel">Yıldızlı alanlar zorunludur. Diğer alanları henüz bilmiyorsanız boş bırakabilirsiniz. İlk aşamada sözleşme, kimlik veya hassas teknik belge yüklemeniz gerekmez.</p>
    {intent !== "investment" && <p className="mb-5 rounded-md border border-energy-500/30 p-3 text-energy-500">Talep konusu: {intent === "valuation" ? "Santral değerleme" : "Satın alma öncesi teknik inceleme"}</p>}
    <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <fieldset disabled={status === "sending" || status === "success"}>
      <legend className="sr-only">İletişim ve yatırım bilgileri</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        {fieldsFor(kind).map((field) => <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : "min-w-0"}>
          <label htmlFor={`${prefix}-${field.name}`} className="mb-2 block text-sm font-medium text-white">{field.label}{field.required ? " *" : ""}</label>
          {field.options ? <select id={`${prefix}-${field.name}`} name={field.name} defaultValue={field.name === "plantType" ? plantType : ""} required={field.required} className={control} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${prefix}-${field.name}-error` : undefined}>
            <option value="">Seçiniz</option>{field.options.map((option) => <option key={option}>{option}</option>)}
          </select> : field.type === "textarea" ? <textarea id={`${prefix}-${field.name}`} name={field.name} rows={4} maxLength={3000} className={control} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${prefix}-${field.name}-error` : undefined} /> : <input id={`${prefix}-${field.name}`} name={field.name} type={field.type || "text"} required={field.required} min={field.name === "capacity" ? 0.001 : 0} max={field.max ?? 1e12} step="any" maxLength={200} autoComplete={field.autoComplete} className={control} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${prefix}-${field.name}-error` : undefined} />}
          {errors[field.name] && <p id={`${prefix}-${field.name}-error`} className="mt-2 text-sm text-red-300">{errors[field.name]}</p>}
        </div>)}
      </div>
      {kind === "seller" && <div className="mt-6 rounded-lg border-2 border-energy-500/50 bg-energy-500/10 p-5">
        <label className="flex items-center gap-3 font-semibold text-white"><input type="checkbox" name="confidential" defaultChecked className="h-5 w-5 accent-sky-400" />Gizli Satış İstiyorum</label>
        <p className="mt-3 text-sm leading-7 text-steel">Santral adı, şirket bilgileri ve hassas teknik-finansal veriler talebiniz doğrultusunda yalnızca gizlilik sözleşmesi sonrasında nitelikli yatırımcılarla paylaşılabilir.</p>
      </div>}
      <label className="mt-6 flex items-start gap-3 text-sm leading-7 text-steel"><input type="checkbox" name="consent" required className="mt-1.5 h-5 w-5 shrink-0 accent-sky-400" aria-invalid={Boolean(errors.consent)} /><span><Link href="/tr/privacy-policy" className="text-energy-500 underline">KVKK / gizlilik açıklamasını</Link> okudum; paylaştığım iletişim ve yatırım bilgilerinin talebimi değerlendirmek ve benimle iletişime geçmek amacıyla işlenmesini ve Web3Forms aracılığıyla ekibe iletilmesini onaylıyorum. *</span></label>
      {errors.consent && <p className="text-sm text-red-300">{errors.consent}</p>}
      <button disabled={!token || uncertain || status === "sending" || status === "success"} className="mt-6 min-h-12 w-full rounded-md bg-energy-500 px-5 py-3 font-bold text-navy-950 hover:bg-white focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-energy-500 disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Gönderiliyor…" : status === "success" ? "Talebiniz alındı" : kind === "buyer" ? "Yatırımcı Talebimi Gönder" : "Santral Satış Talebimi Gönder"}</button>
    </fieldset>
    <div role="status" aria-live="polite" className="mt-4 break-words text-sm leading-7">{message && <p className={status === "success" ? "text-energy-500" : "text-red-300"}>{message}</p>}</div>
    {status === "error" && <Link href="/tr/iletisim" className="mt-2 inline-block text-sm text-energy-500 underline">İletişim seçenekleri</Link>}
  </form>;
}
