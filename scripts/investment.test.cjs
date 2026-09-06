const { test, after } = require("node:test");
const assert = require("node:assert/strict");
const { mkdtemp, readFile, readdir, rm } = require("node:fs/promises");
const { tmpdir } = require("node:os");
const { join } = require("node:path");
const { createDecipheriv } = require("node:crypto");
const { randomUUID } = require("node:crypto");
const { loadTs } = require("./investment-test-loader.cjs");
const { validateLead } = loadTs("lib/investment-fields.ts");
const { publicPortfolio } = loadTs("lib/investment-portfolio.ts");
const { createFormToken, verifyFormToken, getInvestmentToken, submitInvestmentLead } = loadTs("lib/investment-server.ts");
const { investmentPages } = loadTs("content/investments.ts");
const { investmentArticles } = loadTs("content/investment-articles.ts");
const { pageSitemapEntries, blogSitemapEntries } = loadTs("lib/sitemap-data.ts");

const key = "ab".repeat(32);
process.env.INVESTMENT_LEAD_DELIVERY = "disk";
const buyer = { kind: "buyer", name: "Test Başvuru", email: "test@example.invalid", phone: "+905551234567", plantType: "HES", currency: "TRY", operationalStatus: "Farketmez", licenseStatus: "Farketmez", timing: "Hemen", consent: true, source: "/tr/santral-satin-al" };
const seller = { ...buyer, kind: "seller", capacity: "10", city: "Test İl", operationalStatus: "İşletmede", licenseStatus: "Lisanslı", saleType: "Değerlendirilecek", confidential: true };
let directory;
let sequence = 0;
function request(payload, headers = {}) {
  return new Request("http://localhost:3000/api/investment-leads", { method: "POST", headers: { "content-type": "application/json", origin: "https://www.oztoprakenerji.com", "x-real-ip": `test-${++sequence}`, ...headers }, body: JSON.stringify({ ...payload, token: payload.token || createFormToken(key, Date.now() - 3000) }) });
}

test("valid buyer/seller; optional values stay empty, not zero", () => {
  assert.equal(validateLead(buyer).ok, true);
  const result = validateLead(seller);
  assert.equal(result.ok, true);
  assert.equal(result.lead.values.askingPrice, "");
  assert.equal(result.lead.confidential, true);
});
test("invalid ranges, negatives, non-finite values and enum injection rejected", () => {
  for (const change of [{ minCapacity: "20", maxCapacity: "10" }, { minBudget: "2", maxBudget: "1" }, { minIrr: "101" }, { minCapacity: "-1" }, { maxCapacity: "Infinity" }, { currency: "BTC" }, { minBudget: "0x20" }, { timing: "tomorrow" }]) assert.equal(validateLead({ ...buyer, ...change }).ok, false);
});
test("invalid contact, missing consent and overlong content rejected", () => {
  for (const change of [{ email: "bad" }, { phone: "---123" }, { name: " " }, { consent: false }, { consent: "true" }, { notes: "x".repeat(3001) }, { name: {} }]) assert.equal(validateLead({ ...buyer, ...change }).ok, false);
  assert.equal(validateLead({ ...seller, capacity: "0" }).ok, false);
  assert.equal(validateLead({ ...seller, confidential: "false" }).ok, false);
});
test("only allowed fields are persisted; source/intent are bounded", () => {
  const result = validateLead({ ...buyer, access_key: "injected", source: "https://evil.invalid", intent: "<script>" });
  assert.equal(result.ok, true);
  assert.equal(result.lead.values.access_key, undefined);
  assert.equal(result.lead.source, "/tr/satilik-enerji-santralleri");
  assert.equal(result.lead.intent, "investment");
});
test("signed tokens enforce signature, minimum age and expiration", () => {
  const now = Date.now();
  assert.equal(verifyFormToken(createFormToken(key, now - 3000), key, now), true);
  for (const token of [createFormToken(key, now), createFormToken(key, now + 6000), createFormToken(key, now - 7_300_000), createFormToken("ff".repeat(32), now - 3000), null, "x".repeat(999)]) assert.equal(verifyFormToken(token, key, now), false);
});
test("confidential projection cannot expose names, exact city, summary, slug or price", () => {
  const plant = { id: "private", type: "HES", status: "active", region: "Karadeniz", name: "SECRET-NAME", companyName: "SECRET-COMPANY", city: "SECRET-CITY", slug: "SECRET-SLUG", summary: "SECRET-TEXT", installedCapacityMW: 18, annualGenerationGWh: 62, operationalStatus: "İşletmede", askingPrice: 999, currency: "TRY", confidential: true };
  const output = publicPortfolio(plant);
  assert.equal(JSON.stringify(output).includes("SECRET"), false);
  assert.equal(output.askingPrice, null);
  assert.equal(publicPortfolio({ ...plant, status: "draft" }), null);
  assert.equal(publicPortfolio({ ...plant, status: "closed" }), null);
  assert.equal(publicPortfolio({ ...plant, confidential: false }).title, "SECRET-NAME");
});
test("investment CTAs send the four requested events without personal data", () => {
  const { InvestmentCta } = loadTs("components/investment-cta.tsx");
  const captured = [];
  global.window = { oztoprakTrack: (event, params) => captured.push({ event, params }) };
  try {
    for (const kind of ["hes", "ges", "diligence", "valuation"]) InvestmentCta({ kind }).props.onClick();
    assert.deepEqual(captured.map((item) => item.event), ["hes_investment_cta_click", "ges_investment_cta_click", "due_diligence_cta_click", "valuation_cta_click"]);
    assert.ok(captured.every((item) => Object.keys(item.params).join(",") === "locale"));
  } finally { delete global.window; }
});
test("ten unique Turkish pages and eight unique Turkish articles have sitemap entries", () => {
  assert.equal(investmentPages.length, 10);
  assert.equal(investmentArticles.length, 8);
  assert.equal(new Set(investmentPages.map((p) => p.title)).size, 10);
  assert.equal(new Set(investmentArticles.map((p) => p.slug)).size, 8);
  const pages = pageSitemapEntries();
  const blogs = blogSitemapEntries();
  for (const page of investmentPages) {
    const entry = pages.find((p) => p.path === `/tr/${page.slug}`);
    assert.ok(entry); assert.equal(entry.alternates, undefined);
    assert.ok(page.h1 && page.description);
  }
  for (const post of investmentArticles) {
    const entry = blogs.find((p) => p.path === `/tr/blog/${post.slug}`);
    assert.ok(entry); assert.equal(entry.alternates, undefined);
    for (const section of post.body) for (const link of section.links || []) assert.ok(investmentPages.some((p) => `/tr/${p.slug}` === link.href.split("?")[0]));
  }
});
test("unconfigured and serverless storage fail closed", () => {
  delete process.env.INVESTMENT_LEAD_STORAGE_DIR;
  delete process.env.INVESTMENT_LEAD_ENCRYPTION_KEY;
  assert.equal(getInvestmentToken().status, 503);
  process.env.INVESTMENT_LEAD_ENCRYPTION_KEY = key;
  process.env.INVESTMENT_LEAD_STORAGE_DIR = process.cwd();
  assert.equal(getInvestmentToken().status, 503);
  process.env.VERCEL = "1";
  assert.equal(getInvestmentToken().status, 503);
  delete process.env.VERCEL;
});
test("API persists encrypted buyer/seller records, authenticates them, blocks replay", async () => {
  directory = await mkdtemp(join(tmpdir(), "oztoprak-investment-test-"));
  process.env.INVESTMENT_LEAD_STORAGE_DIR = directory;
  process.env.INVESTMENT_TRUST_PROXY = "true";
  assert.equal(getInvestmentToken().status, 200);
  for (const payload of [buyer, seller]) {
    const token = createFormToken(key, Date.now() - 3000);
    const result = await submitInvestmentLead(request({ ...payload, token }));
    assert.equal(result.status, 200);
    const receipt = await result.json();
    const raw = await readFile(join(directory, `${receipt.reference}.json`), "utf8");
    assert.equal(raw.includes(payload.email), false);
    const envelope = JSON.parse(raw);
    const cipher = createDecipheriv("aes-256-gcm", Buffer.from(key, "hex"), Buffer.from(envelope.iv, "base64"));
    cipher.setAAD(Buffer.from(envelope.reference));
    cipher.setAuthTag(Buffer.from(envelope.tag, "base64"));
    const saved = JSON.parse(Buffer.concat([cipher.update(Buffer.from(envelope.ciphertext, "base64")), cipher.final()]).toString());
    assert.equal(saved.values.email, payload.email);
    assert.equal(saved.consentVersion, "yatirim-v1");
    assert.equal(saved.confidential, payload.kind === "seller");
    assert.equal((await submitInvestmentLead(request({ ...payload, token }))).status, 409);
  }
  assert.equal((await readdir(directory)).length, 2);
});
test("API rejects cross-origin, bot, invalid fields, large and malformed bodies", async () => {
  assert.equal((await submitInvestmentLead(request(buyer, { origin: "https://evil.invalid" }))).status, 403);
  assert.equal((await submitInvestmentLead(request(buyer, { "content-type": "text/plain" }))).status, 415);
  assert.equal((await submitInvestmentLead(request({ ...buyer, website: "spam" }))).status, 400);
  assert.equal((await submitInvestmentLead(request({ ...buyer, consent: false }))).status, 422);
  assert.equal((await submitInvestmentLead(request({ ...buyer, notes: "a".repeat(25000) }))).status, 400);
  assert.equal((await submitInvestmentLead(new Request("http://localhost:3000/api/investment-leads", { method: "POST", headers: { origin: "https://www.oztoprakenerji.com", "content-type": "application/json" }, body: "{" }))).status, 400);
  assert.equal((await readdir(directory)).length, 2);
});
test("API limits repeated attempts", async () => {
  for (let i = 0; i < 8; i++) assert.equal((await submitInvestmentLead(request({ ...buyer, website: "bot" }, { "x-real-ip": "rate-limit-test" }))).status, 400);
  assert.equal((await submitInvestmentLead(request(buyer, { "x-real-ip": "rate-limit-test" }))).status, 429);
});
test("storage failure never returns success", async () => {
  process.env.INVESTMENT_LEAD_STORAGE_DIR = join(directory, "not-directory");
  const { writeFile } = require("node:fs/promises");
  await writeFile(process.env.INVESTMENT_LEAD_STORAGE_DIR, "test");
  assert.equal((await submitInvestmentLead(request(buyer))).status, 503);
});

test("Web3Forms works on Vercel without disk or encryption secret", async () => {
  process.env.INVESTMENT_LEAD_DELIVERY = "web3forms";
  process.env.WEB3FORMS_ACCESS_KEY = "test-public-form-key";
  process.env.VERCEL = "1";
  delete process.env.INVESTMENT_LEAD_ENCRYPTION_KEY;
  const challenge = getInvestmentToken();
  assert.equal(challenge.status, 200);
  assert.match(challenge.headers.get("set-cookie"), /HttpOnly; SameSite=Strict/);
  assert.ok((await challenge.json()).token);
  for (const sample of [buyer, seller]) {
    const token = `${Date.now() - 3000}.${randomUUID()}`;
    const result = await submitInvestmentLead(request({ ...sample, token, to: "evil@example.invalid", webhook: "https://evil.invalid", access_key: "override" }, { cookie: `investment_form=${token}`, "x-vercel-forwarded-for": randomUUID() }));
    assert.equal(result.status, 200);
    const prepared = await result.json();
    assert.equal(prepared.success, undefined, "preparation cannot claim delivery success");
    assert.equal(prepared.delivery, "web3forms");
    assert.equal(prepared.payload.access_key, "test-public-form-key");
    assert.equal(prepared.payload.to, undefined);
    assert.equal(prepared.payload.webhook, undefined);
    assert.match(prepared.payload.message, /yatirim-v2-web3forms/);
    assert.match(prepared.payload.message, /Telefon: \+905551234567/);
    if (sample.kind === "seller") assert.match(prepared.payload.message, /Gizli satış: Evet/);
  }
});
test("Web3Forms rejects missing/mismatched cookie and unapproved form data", async () => {
  const token = `${Date.now() - 3000}.${randomUUID()}`;
  assert.equal((await submitInvestmentLead(request({ ...buyer, token }))).status, 400);
  assert.equal((await submitInvestmentLead(request({ ...buyer, token }, { cookie: `investment_form=${Date.now()}.${randomUUID()}` }))).status, 400);
  assert.equal((await submitInvestmentLead(request({ ...buyer, token, consent: false }, { cookie: `investment_form=${token}` }))).status, 422);
});
test("public access key is not used to sign browser form tokens", async () => {
  const issued = await getInvestmentToken().json();
  assert.equal(issued.token.split(".").length, 2);
  const next = await getInvestmentToken(new Request("https://www.oztoprakenerji.com/api/investment-leads", { headers: { cookie: `investment_form=${issued.token}` } })).json();
  assert.equal(next.token, issued.token, "multiple tabs share a valid CSRF cookie");
});
test("provider receipt must be successful; rejection and uncertainty never pass", async () => {
  const { deliverInvestment, UncertainDeliveryError } = loadTs("lib/investment-delivery.ts");
  const payload = { access_key: "test", message: "Synthetic test" };
  let sent;
  await deliverInvestment(payload, async (url, options) => { sent = { url, options }; return Response.json({ success: true }); });
  assert.equal(sent.url, "https://api.web3forms.com/submit");
  assert.deepEqual(JSON.parse(sent.options.body), payload);
  for (const mock of [async () => Response.json({ success: false }), async () => Response.json({ success: true }, { status: 500 })]) await assert.rejects(deliverInvestment(payload, mock), /iletilemedi/);
  for (const mock of [async () => { throw new Error("timeout"); }, async () => new Response("not-json")]) await assert.rejects(deliverInvestment(payload, mock), UncertainDeliveryError);
});
test("missing Web3Forms key stays unavailable instead of silently switching transport", () => {
  delete process.env.WEB3FORMS_ACCESS_KEY;
  delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  assert.equal(getInvestmentToken().status, 503);
  delete process.env.VERCEL;
});
after(async () => {
  if (directory) await rm(directory, { recursive: true, force: true });
});
