export type LeadKind = "buyer" | "seller";
export type LeadField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea";
  options?: readonly string[];
  required?: boolean;
  max?: number;
  autoComplete?: string;
};

export const plantTypes = ["HES", "GES", "RES", "BESS", "Diğer"] as const;
export const commonFields: LeadField[] = [
  { name: "name", label: "Ad Soyad", required: true, autoComplete: "name" },
  { name: "company", label: "Şirket", autoComplete: "organization" },
  { name: "phone", label: "Telefon", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "E-posta", type: "email", required: true, autoComplete: "email" },
  { name: "plantType", label: "Santral Türü", options: plantTypes, required: true }
];
export const buyerFields: LeadField[] = [
  { name: "minCapacity", label: "Minimum Kurulu Güç (MW)", type: "number" },
  { name: "maxCapacity", label: "Maksimum Kurulu Güç (MW)", type: "number" },
  { name: "minBudget", label: "Minimum Bütçe", type: "number" },
  { name: "maxBudget", label: "Maksimum Bütçe", type: "number" },
  { name: "currency", label: "Para Birimi", options: ["TRY", "USD", "EUR"], required: true },
  { name: "region", label: "Tercih Edilen Bölge" },
  { name: "operationalStatus", label: "Santral Durumu", options: ["İşletmede", "Proje", "Farketmez"], required: true },
  { name: "licenseStatus", label: "Lisans Durumu", options: ["Lisanslı", "Lisanssız", "Farketmez"], required: true },
  { name: "minGeneration", label: "Beklenen Minimum Yıllık Üretim (GWh)", type: "number" },
  { name: "paybackYears", label: "Hedeflenen Geri Dönüş Süresi (Yıl)", type: "number", max: 100 },
  { name: "minIrr", label: "Minimum IRR (%)", type: "number", max: 100 },
  { name: "timing", label: "Yatırım Zamanlaması", options: ["Hemen", "0–3 Ay", "3–6 Ay", "6–12 Ay"], required: true }
];
export const sellerFields: LeadField[] = [
  { name: "capacity", label: "Kurulu Güç (MW)", type: "number", required: true },
  { name: "city", label: "İl", required: true },
  { name: "district", label: "İlçe" },
  { name: "operationalStatus", label: "Santral Durumu", options: ["İşletmede", "İnşaat", "Proje"], required: true },
  { name: "annualGeneration", label: "Ortalama Yıllık Üretim (GWh)", type: "number" },
  { name: "licenseStatus", label: "Lisans Durumu", options: ["Lisanslı", "Lisanssız", "Başvuru aşamasında", "Değerlendirilecek"], required: true },
  { name: "yekdem", label: "YEKDEM Durumu", options: ["Yararlanıyor", "Süresi doldu", "Kapsam dışı", "Değerlendirilecek"] },
  { name: "productionHistory", label: "Son 3 Yıllık Üretim Bilgisi Var mı?", options: ["Evet", "Hayır", "Kısmen"] },
  { name: "askingPrice", label: "Talep Edilen Satış Fiyatı", type: "number" },
  { name: "currency", label: "Para Birimi", options: ["TRY", "USD", "EUR"], required: true },
  { name: "financing", label: "Borç / Finansman Durumu" },
  { name: "saleType", label: "Satış Tipi", options: ["Varlık Satışı", "Şirket Hisse Satışı", "Değerlendirilecek"], required: true }
];
export const noteField: LeadField = { name: "notes", label: "Ek Açıklama", type: "textarea" };
export const fieldsFor = (kind: LeadKind) => [...commonFields, ...(kind === "buyer" ? buyerFields : sellerFields), noteField];

export type ValidLead = { kind: LeadKind; values: Record<string, string>; consent: true; confidential: boolean; source: string; intent: string };
export function validateLead(input: unknown): { ok: true; lead: ValidLead } | { ok: false; errors: Record<string, string> } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, errors: { form: "Geçersiz form." } };
  const data = input as Record<string, unknown>;
  if (data.kind !== "buyer" && data.kind !== "seller") return { ok: false, errors: { form: "Geçersiz talep türü." } };
  const errors: Record<string, string> = {};
  const values: Record<string, string> = {};
  for (const field of fieldsFor(data.kind)) {
    const raw = data[field.name];
    const value = typeof raw === "string" ? raw.trim() : "";
    values[field.name] = value;
    if (raw !== undefined && typeof raw !== "string") errors[field.name] = "Geçersiz değer.";
    if (field.required && !value) errors[field.name] = "Bu alan zorunludur.";
    if (value.length > (field.type === "textarea" ? 3000 : 200)) errors[field.name] = "Girdi çok uzun.";
    if (value && field.options && !field.options.includes(value)) errors[field.name] = "Listeden bir seçenek seçin.";
    if (value && field.type === "number" && (!/^\d+(\.\d+)?$/.test(value) || !Number.isFinite(Number(value)) || Number(value) > (field.max ?? 1e12))) errors[field.name] = "Geçerli, negatif olmayan bir sayı girin.";
  }
  if (values.name.length < 2) errors.name = "Ad soyad en az 2 karakter olmalıdır.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Geçerli bir e-posta girin.";
  if (!/^[+\d\s().-]{7,30}$/.test(values.phone) || values.phone.replace(/\D/g, "").length < 7 || values.phone.replace(/\D/g, "").length > 15) errors.phone = "Geçerli bir telefon numarası girin.";
  if (data.kind === "seller" && Number(values.capacity) <= 0) errors.capacity = "Kurulu güç sıfırdan büyük olmalıdır.";
  for (const [min, max] of [["minCapacity", "maxCapacity"], ["minBudget", "maxBudget"]]) {
    if (values[min] && values[max] && Number(values[min]) > Number(values[max])) errors[max] = "Maksimum değer minimumdan küçük olamaz.";
  }
  if (data.consent !== true) errors.consent = "Devam etmek için gizlilik onayı gereklidir.";
  if (data.kind === "seller" && typeof data.confidential !== "boolean") errors.confidential = "Gizlilik tercihinizi belirtin.";
  const source = typeof data.source === "string" && /^\/tr\/[a-z0-9-]{1,100}$/.test(data.source) ? data.source : "/tr/satilik-enerji-santralleri";
  const intent = typeof data.intent === "string" && ["investment", "due-diligence", "valuation"].includes(data.intent) ? data.intent : "investment";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, lead: { kind: data.kind, values, consent: true, confidential: data.kind === "seller" ? data.confidential as boolean : false, source, intent } };
}
