import { createCipheriv, createHmac, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { link, mkdir, open, unlink } from "node:fs/promises";
import { isAbsolute, join, relative, resolve } from "node:path";
import { fieldsFor, validateLead } from "./investment-fields";

const MAX_BODY_BYTES = 24_000;
const TOKEN_LIFETIME = 2 * 60 * 60 * 1000;
const attempts = new Map<string, { count: number; expires: number }>();
const response = (body: object, status = 200, headers: Record<string, string> = {}) => Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
const signature = (value: string, key: string) => createHmac("sha256", key).update(value).digest("hex");
const cookieName = "investment_form";

type DeliveryConfig = { delivery: "web3forms"; key: string } | { delivery: "disk"; key: string; directory: string };

function configuration(): DeliveryConfig | null {
  const mode = process.env.INVESTMENT_LEAD_DELIVERY || "web3forms";
  if (mode === "web3forms") {
    // Web3Forms access keys are public form identifiers, never signing secrets.
    const key = (process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "").trim();
    return key && key.length <= 256 && !/your_|placeholder|\s/i.test(key) ? { delivery: "web3forms", key } : null;
  }
  if (mode !== "disk") return null;
  const key = process.env.INVESTMENT_LEAD_ENCRYPTION_KEY;
  const directory = process.env.INVESTMENT_LEAD_STORAGE_DIR;
  // Serverless /tmp is not durable. Explicitly refuse it instead of losing requests.
  if (process.env.VERCEL || !key || !/^[a-f0-9]{64}$/i.test(key) || !directory || !isAbsolute(directory)) return null;
  const relation = relative(process.cwd(), resolve(directory));
  if (!relation.startsWith("..") && !isAbsolute(relation)) return null;
  return { delivery: "disk", key, directory };
}

function cookieToken(request?: Request) {
  const value = request?.headers.get("cookie")?.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1);
  return value && /^\d{13}\.[a-f0-9-]{36}$/.test(value) ? value : "";
}

function freshBrowserToken(token: string, minimumAge: number) {
  const age = Date.now() - Number(token.split(".")[0]);
  return /^\d{13}\.[a-f0-9-]{36}$/.test(token) && age >= minimumAge && age <= TOKEN_LIFETIME;
}

// Double-submit CSRF token. It is not an authentication or CAPTCHA mechanism.
function verifyBrowserToken(request: Request, token: unknown) {
  const cookie = cookieToken(request);
  return typeof token === "string" && freshBrowserToken(token, 2000) && cookie.length === token.length && timingSafeEqual(Buffer.from(cookie), Buffer.from(token));
}

export function createFormToken(key: string, now = Date.now()) {
  const value = `${now}.${randomUUID()}`;
  return `${value}.${signature(value, key)}`;
}

export function verifyFormToken(token: unknown, key: string, now = Date.now()) {
  if (typeof token !== "string" || token.length > 180) return false;
  const [issued, nonce, mac, extra] = token.split(".");
  if (extra || !/^\d{13}$/.test(issued || "") || !/^[a-f0-9-]{36}$/.test(nonce || "") || !/^[a-f0-9]{64}$/.test(mac || "")) return false;
  const age = now - Number(issued);
  return age >= 2000 && age <= TOKEN_LIFETIME && timingSafeEqual(Buffer.from(mac), Buffer.from(signature(`${issued}.${nonce}`, key)));
}

export function getInvestmentToken(request?: Request) {
  const config = configuration();
  if (!config) return response({ error: "Talep formu şu anda kullanılamıyor. Lütfen iletişim sayfamızdan bize ulaşın." }, 503);
  if (config.delivery === "disk") return response({ token: createFormToken(config.key) });
  const existing = cookieToken(request);
  const token = freshBrowserToken(existing, 0) ? existing : `${Date.now()}.${randomUUID()}`;
  return response({ token }, 200, { "Set-Cookie": `${cookieName}=${token}; Path=/api/investment-leads; HttpOnly; SameSite=Strict; Max-Age=7200${process.env.NODE_ENV === "production" ? "; Secure" : ""}` });
}

function rateLimited(request: Request, key: string) {
  const now = Date.now();
  for (const [id, value] of attempts) if (value.expires <= now) attempts.delete(id);
  // A self-hosted reverse proxy must overwrite X-Real-IP, never append untrusted input.
  const ip = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") || "unknown" : process.env.INVESTMENT_TRUST_PROXY === "true" ? request.headers.get("x-real-ip") || "unknown" : "local";
  const id = signature(ip, key);
  const bucket = attempts.get(id) || { count: 0, expires: now + 10 * 60_000 };
  bucket.count += 1;
  if (attempts.size >= 10_000 && !attempts.has(id)) return true;
  attempts.set(id, bucket);
  return bucket.count > 8;
}

async function readLimitedJson(request: Request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) throw new Error("size");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("body");
  let bytes = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) { await reader.cancel(); throw new Error("size"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export async function submitInvestmentLead(request: Request) {
  const config = configuration();
  if (!config) return response({ error: "Talep formu şu anda kullanılamıyor. Lütfen iletişim sayfamızdan bize ulaşın." }, 503);
  const origin = request.headers.get("origin");
  const allowed = ["https://www.oztoprakenerji.com", "https://oztoprakenerji.com"];
  if (process.env.NODE_ENV !== "production") allowed.push(new URL(request.url).origin);
  if (!origin || !allowed.includes(origin)) return response({ error: "Gönderim kaynağı doğrulanamadı." }, 403);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return response({ error: "Geçersiz içerik türü." }, 415);
  if (rateLimited(request, config.key)) return response({ error: "Çok fazla deneme yapıldı. Lütfen 10 dakika sonra yeniden deneyin." }, 429);
  let input: Record<string, unknown>;
  try { input = await readLimitedJson(request); } catch { return response({ error: "Form okunamadı veya izin verilen boyutu aşıyor." }, 400); }
  if (!input || typeof input !== "object" || Array.isArray(input)) return response({ error: "Geçersiz form." }, 400);
  const tokenValid = config.delivery === "disk" ? verifyFormToken(input.token, config.key) : verifyBrowserToken(request, input.token);
  if (input.website || !tokenValid) return response({ error: "Form doğrulanamadı. Sayfayı yenileyip tekrar deneyin." }, 400);
  const result = validateLead(input);
  if (!result.ok) return response({ error: "Lütfen işaretli alanları kontrol edin.", errors: result.errors }, 422);
  const reference = config.delivery === "web3forms" ? randomUUID().replaceAll("-", "") : signature(String(input.token), config.key).slice(0, 32);
  if (config.delivery === "web3forms") {
    const lead = result.lead;
    const intentLabels: Record<string, string> = { investment: "Yatırım / satış", "due-diligence": "Teknik inceleme", valuation: "Değerleme" };
    const lines = fieldsFor(lead.kind).map((field) => `${field.label}: ${lead.values[field.name] || "Belirtilmedi"}`);
    lines.push(`Gizli satış: ${lead.confidential ? "Evet" : "Hayır"}`, "KVKK / aktarım onayı: Evet (yatirim-v2-web3forms)", `Talep amacı: ${intentLabels[lead.intent]}`, `Kaynak: ${lead.source}`, `Başvuru referansı: ${reference}`, `Tarih: ${new Date().toISOString()}`);
    // Preparation is not delivery. The browser must check Web3Forms' receipt.
    // Only an allowlisted payload is returned; recipient is bound to the access key.
    return response({ delivery: "web3forms", reference, payload: {
      access_key: config.key,
      subject: `Öztoprak Enerji | ${lead.kind === "buyer" ? "Yatırımcı talebi" : "Santral satış talebi"}`,
      from_name: "Öztoprak Enerji Yatırım Fırsatları",
      name: lead.values.name,
      email: lead.values.email,
      message: lines.join("\n"),
      botcheck: ""
    } });
  }
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", Buffer.from(config.key, "hex"), iv);
  cipher.setAAD(Buffer.from(reference));
  const encrypted = Buffer.concat([cipher.update(JSON.stringify({ ...result.lead, reference, receivedAt: new Date().toISOString(), consentVersion: "yatirim-v1" }), "utf8"), cipher.final()]);
  const envelope = JSON.stringify({ version: 1, reference, iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64"), ciphertext: encrypted.toString("base64") });
  let publishing = false;
  try {
    await mkdir(config.directory, { recursive: true, mode: 0o700 });
    const pending = join(config.directory, `.${randomUUID()}.pending`);
    const file = await open(pending, "wx", 0o600);
    try {
      try { await file.writeFile(envelope, "utf8"); await file.sync(); } finally { await file.close(); }
      // Publish a complete record without overwriting an earlier submission.
      publishing = true;
      await link(pending, join(config.directory, `${reference}.json`));
    } finally { await unlink(pending).catch(() => undefined); }
    return response({ success: true, reference });
  } catch (error) {
    if (publishing && (error as NodeJS.ErrnoException).code === "EEXIST") return response({ error: "Bu form daha önce gönderildi. Yeniden göndermeden önce bizimle iletişime geçin." }, 409);
    return response({ error: "Talebiniz kaydedilemedi. Lütfen iletişim sayfamızdan bize ulaşın." }, 503);
  }
}
