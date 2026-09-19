const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { randomBytes } = require("node:crypto");
const { loadTs } = require("./investment-test-loader.cjs");
const { investmentPages } = loadTs("content/investments.ts");
const { investmentArticles } = loadTs("content/investment-articles.ts");
const { fieldsFor } = loadTs("lib/investment-fields.ts");

async function run() {
  const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
  const output = path.resolve("docs/investment-qa");
  await fs.mkdir(output, { recursive: true });
  const storage = await fs.mkdtemp(path.join(os.tmpdir(), "oztoprak-browser-test-"));
  const port = Number(process.env.INVESTMENT_TEST_PORT || 3117);
  const base = `http://localhost:${port}`;
  const env = { ...process.env, INVESTMENT_LEAD_DELIVERY: "web3forms", WEB3FORMS_ACCESS_KEY: "browser-test-public-key", INVESTMENT_LEAD_ENCRYPTION_KEY: randomBytes(32).toString("hex"), INVESTMENT_LEAD_STORAGE_DIR: storage, INVESTMENT_TRUST_PROXY: "false" };
  delete env.VERCEL;
  const server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "-p", String(port)], { env, windowsHide: true, stdio: "pipe" });
  let logs = "";
  server.stdout.on("data", (chunk) => { logs += chunk; });
  server.stderr.on("data", (chunk) => { logs += chunk; });
  let browser;
  let page;
  const failures = [];
  const results = [];
  const deliveries = [];
  let rejectProvider = false;
  try {
    for (let i = 0; i < 60; i++) {
      if (server.exitCode !== null) throw new Error(`Test server failed: ${logs}`);
      try { if ((await fetch(`${base}/api/investment-leads`)).ok) break; } catch {}
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
    const context = await browser.newContext();
    // Test only local code. Suppress analytics/other external traffic entirely.
    await context.route("**/*", async (route) => {
      const req = route.request();
      if (req.url() === "https://api.web3forms.com/submit") {
        const payload = req.postDataJSON();
        assert.equal(payload.access_key, "browser-test-public-key");
        assert.match(payload.message, /yatirim-v2-web3forms/);
        if (!rejectProvider) deliveries.push(payload);
        return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: !rejectProvider }) });
      }
      if (!req.url().startsWith(base)) return route.fulfill({ status: 200, contentType: "application/javascript", body: "" });
      // Production intentionally rejects localhost origins; proxy the approved test origin.
      if (req.method() === "POST") return route.fulfill({ response: await route.fetch({ headers: { ...req.headers(), origin: "https://www.oztoprakenerji.com" } }) });
      return route.continue();
    });
    page = await context.newPage();

    page.on("pageerror", (error) => failures.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") failures.push(message.text()); });
    const targets = [...investmentPages.map((p) => `/tr/${p.slug}`), ...investmentArticles.map((p) => `/tr/blog/${p.slug}`)];
    for (const [name, width, height] of (process.env.INVESTMENT_BROWSER_FORMS_ONLY ? [] : [["desktop", 1440, 1000], ["tablet", 768, 1024], ["mobile", 390, 844], ["small-mobile", 320, 740]])) {
      await page.setViewportSize({ width, height });
      for (const target of targets) {
        const res = await page.goto(base + target, { waitUntil: "networkidle" });
        assert.equal(res.status(), 200, target);
        assert.equal(await page.locator("h1").count(), 1, target);
        assert.equal(await page.locator("html").getAttribute("lang"), "tr");
        assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), `https://www.oztoprakenerji.com${target}`);
        assert.equal(await page.locator('link[rel="alternate"][hreflang="en"]').count(), 0, `Unexpected translation: ${target}`);
        for (const selector of ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="twitter:title"]', 'meta[name="twitter:description"]']) assert.ok(await page.locator(selector).getAttribute("content"), `${target}: ${selector}`);
        assert.ok(await page.locator('nav[aria-label="Breadcrumb"]').count());
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        assert.equal(overflow, false, `${name} horizontal overflow: ${target}`);
        const schemaTypes = await page.locator('script[type="application/ld+json"]').evaluateAll((nodes) => {
          const types = [];
          const walk = (v) => { if (!v || typeof v !== "object") return; if (v["@type"]) types.push(...[v["@type"]].flat()); Object.values(v).forEach(walk); };
          nodes.forEach((node) => walk(JSON.parse(node.textContent)));
          return types;
        });
        assert.ok(schemaTypes.includes("Organization"));
        assert.ok(schemaTypes.includes("BreadcrumbList"));
        if (target.includes("/blog/")) assert.ok(schemaTypes.includes("Article"));
        if (target === "/tr/satilik-enerji-santralleri") assert.ok(schemaTypes.includes("FAQPage"));
        assert.equal(schemaTypes.includes("Product"), false);
        assert.equal(schemaTypes.includes("Offer"), false);
        results.push({ viewport: name, path: target, status: 200, overflow: false });
      }
      await page.goto(`${base}/tr/satilik-enerji-santralleri`, { waitUntil: "networkidle" });
      const navButton = page.getByRole("button", { name: "Yatırım Fırsatları", exact: true });
      await navButton.click();
      assert.equal(await navButton.getAttribute("aria-expanded"), "true");
      const menu = page.getByRole("navigation", { name: "Yatırım fırsatları alt menüsü" });
      assert.equal(await menu.getByRole("link").count(), 7);
      await page.keyboard.press("Escape");
      assert.equal(await navButton.getAttribute("aria-expanded"), "false");
      await navButton.click();
      await menu.getByRole("link", { name: "Satılık HES", exact: true }).click();
      await page.waitForURL("**/tr/satilik-hes");
      await page.screenshot({ path: path.join(output, `${name}-hes.png`), fullPage: true });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`${base}/tr/satilik-enerji-santralleri`, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(output, "desktop-landing.png"), fullPage: true });
    for (const kind of ["buyer", "seller"]) {
      await page.setViewportSize({ width: 390, height: 844 });
      const slug = kind === "buyer" ? "santral-satin-al" : "santralini-sat";
      await page.goto(`${base}/tr/${slug}?type=HES`, { waitUntil: "networkidle" });
      const form = page.locator("form");
      assert.equal(await form.locator('[name="plantType"]').inputValue(), "HES");
      if (kind === "seller") assert.equal(await form.locator('[name="confidential"]').isChecked(), true);
      for (const field of fieldsFor(kind)) {
        const element = form.locator(`[name="${field.name}"]`);
        if (field.options) await element.selectOption(field.options[0]);
        else await element.fill(field.name === "email" ? "browser@example.invalid" : field.name === "phone" ? "+905551234567" : field.type === "number" ? "10" : "Test başvurusu");
      }
      await form.locator('[name="consent"]').check();
      if (kind === "buyer") {
        await form.locator('[name="minCapacity"]').fill("20");
        await form.getByRole("button").click();
        assert.ok(await form.getByText("Maksimum değer minimumdan küçük olamaz.").count());
        await form.locator('[name="minCapacity"]').fill("5");
      }
      await page.waitForTimeout(2200);
      if (kind === "buyer") {
        rejectProvider = true;
        await form.getByRole("button").click();
        await form.getByText(/Talebiniz iletilemedi/).waitFor();
        assert.equal(await form.getByRole("button").isDisabled(), false);
        assert.equal(await form.locator('[name="email"]').inputValue(), "browser@example.invalid");
        assert.equal(await page.evaluate(() => (window.dataLayer || []).filter((e) => e.event === "buyer_form_submit").length), 0);
        rejectProvider = false;
      }
      await form.getByRole("button").click();
      await form.getByText(/Teşekkürler/).waitFor();
      assert.equal(await form.getByRole("button").isDisabled(), true);
      const events = await page.evaluate(() => (window.dataLayer || []).filter((entry) => entry.event));
      assert.ok(events.some((e) => e.event === `${kind}_form_start`));
      assert.ok(events.some((e) => e.event === `${kind}_form_submit`));
      assert.equal(JSON.stringify(events).includes("browser@example.invalid"), false);
      await page.screenshot({ path: path.join(output, `mobile-${kind}-success.png`), fullPage: true });
    }
    assert.equal(deliveries.length, 2);
    assert.match(deliveries[1].message, /Gizli satış: Evet/);
    assert.equal((await fs.readdir(storage)).length, 0, "Web3Forms mode must not write local lead data");
    // All newly introduced contextual links and their intended targets respond successfully.
    const links = new Set([...targets, "/tr/blog/category/enerji-yatirimlari", "/tr/privacy-policy", "/tr/iletisim"]);
    for (const post of investmentArticles) for (const section of post.body) for (const link of section.links || []) links.add(link.href.split("?")[0]);
    for (const target of links) assert.equal((await context.request.get(base + target)).status(), 200, target);
    assert.equal((await context.request.get(`${base}/en/satilik-hes`)).status(), 404);
    assert.equal((await context.request.get(`${base}/tr/olmayan-yatirim`)).status(), 404);
    assert.deepEqual(failures, []);
    await fs.writeFile(path.join(output, "results.json"), JSON.stringify({ pagesChecked: results.length, viewports: 4, provider: "Web3Forms (mock)", formsDelivered: 2, providerRejectionChecked: true, consoleErrors: failures, results }, null, 2));
    console.log(`PASS: ${results.length} page/viewport checks; desktop/mobile menu; mocked Web3Forms buyer/seller delivery and rejection; analytics; links; no browser errors.`);
  } catch (error) {
    if (page) {
      await page.screenshot({ path: path.join(output, "failure.png"), fullPage: true }).catch(() => undefined);
      console.log("Form status:", await page.locator('[role="status"]').allTextContents());
      console.log("Invalid fields:", await page.locator("input:invalid,select:invalid").evaluateAll((nodes) => nodes.map((node) => ({ name: node.name, message: node.validationMessage }))));
    }
    throw error;
  } finally {
    if (browser) await browser.close();
    server.kill();
    await fs.rm(storage, { recursive: true, force: true });
  }
}
run().catch((error) => { console.error(error); process.exitCode = 1; });
