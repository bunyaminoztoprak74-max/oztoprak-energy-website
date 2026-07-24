import {
  SIGNATURE_ACTION_LINKS,
  SIGNATURE_BADGES,
  SIGNATURE_BRAND,
  SIGNATURE_PERSON,
  signatureLogoDisplayHeight
} from "@/lib/signature-data";

// Builds a fully self-contained, inline-CSS, table-based HTML email
// signature. Rules followed for cross-client compatibility (Outlook/Word
// rendering engine, Gmail, Apple Mail, Thunderbird, mobile mail apps):
//  - Layout uses nested <table> elements only, no CSS grid/flexbox.
//  - Every style is inlined on the element itself; a <style> block is only
//    used for the opt-in prefers-color-scheme dark-mode block, which clients
//    that don't support it simply ignore (progressive enhancement).
//  - Fonts fall back to a websafe stack (Arial/Helvetica) since custom
//    webfonts are unreliable in email.
//  - Images carry explicit width/height attributes so layout doesn't jump
//    while images load or if they're blocked.
//  - border-radius and box-shadow are included for clients that honor them
//    (Apple Mail, Gmail, Thunderbird); Outlook's Word engine ignores both
//    and degrades gracefully to square, flat cards without breaking layout.
//  - Links use plain <a href> tags with inline color/text-decoration so they
//    don't inherit an email client's default blue-underline link style.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const FONT_STACK = "Arial, Helvetica, sans-serif";

function badgePill(label: string): string {
  return `
    <td style="padding:0 6px 6px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-family:${FONT_STACK};font-size:10px;font-weight:bold;letter-spacing:.03em;color:${SIGNATURE_BRAND.navy};background-color:${SIGNATURE_BRAND.white};border:1.5px solid ${SIGNATURE_BRAND.greenAccent};border-radius:20px;padding:5px 12px;white-space:nowrap;">${escapeHtml(label)}</td>
        </tr>
      </table>
    </td>`;
}

function actionButton(label: string, href: string): string {
  return `
    <td style="padding:0 8px 0 0;">
      <a href="${escapeHtml(href)}" target="_blank" rel="noopener"
        style="display:inline-block;font-family:${FONT_STACK};font-size:11px;font-weight:bold;line-height:1;letter-spacing:.02em;color:${SIGNATURE_BRAND.white};text-decoration:none;background-color:${SIGNATURE_BRAND.navy};border-radius:6px;padding:8px 14px;">${escapeHtml(label)}</a>
    </td>`;
}

function iconChip(letter: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:18px;height:18px;font-family:${FONT_STACK};font-size:9px;font-weight:bold;color:${SIGNATURE_BRAND.white};background-color:${SIGNATURE_BRAND.navy};border-radius:5px;text-align:center;vertical-align:middle;">${letter}</td></tr></table>`;
}

function contactRow(iconLetter: string, text: string, href?: string): string {
  const value = href
    ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener" style="color:${SIGNATURE_BRAND.ink};text-decoration:none;">${escapeHtml(text)}</a>`
    : escapeHtml(text);
  return `
    <tr>
      <td style="padding:0 9px 6px 0;vertical-align:top;width:18px;">${iconChip(iconLetter)}</td>
      <td style="padding:0 0 6px 0;font-family:${FONT_STACK};font-size:13px;line-height:18px;color:${SIGNATURE_BRAND.ink};vertical-align:middle;">${value}</td>
    </tr>`;
}

export function buildSignatureHtml(): string {
  const p = SIGNATURE_PERSON;
  const logoHeight = signatureLogoDisplayHeight;

  const badgesRow = SIGNATURE_BADGES.map((label) => badgePill(label)).join("");
  const actionsRow = SIGNATURE_ACTION_LINKS.map((l) => actionButton(l.label, l.href)).join("");

  const contactRows = [
    contactRow("T", p.phone, `tel:${p.phoneHref}`),
    contactRow("@", p.email, `mailto:${p.email}`),
    contactRow("W", p.websiteLabel, p.website),
    contactRow("in", p.linkedinLabel, p.linkedin),
    contactRow("A", p.addressLines.join(", "))
  ].join("");

  return `<!--[if mso]>
<style type="text/css">table { border-collapse:collapse; } .fallback-square { border-radius:0 !important; }</style>
<![endif]-->
<style type="text/css">
  @media (prefers-color-scheme: dark) {
    .ozt-card { background-color:#0F1B2D !important; }
    .ozt-ink { color:#F3F6F9 !important; }
    .ozt-slate { color:#B8C4D2 !important; }
    .ozt-border { border-color:#243447 !important; }
    .ozt-badge { background-color:#0F1B2D !important; color:#F3F6F9 !important; }
  }
</style>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:640px;max-width:100%;border-collapse:separate;font-family:${FONT_STACK};">
  <tr>
    <td class="ozt-card" style="background-color:${SIGNATURE_BRAND.white};border-radius:16px;box-shadow:0 12px 32px rgba(10,22,40,0.12);padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="width:${p.logoDisplayWidth}px;padding:0 24px 0 0;vertical-align:top;">
            <img src="${p.logoUrl}" width="${p.logoDisplayWidth}" height="${logoHeight}" alt="${escapeHtml(p.company)}" style="display:block;width:${p.logoDisplayWidth}px;height:auto;border:0;outline:none;" />
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">
              <tr>
                <td>
                  <img src="${p.qrUrl}" width="${p.qrDisplaySize}" height="${p.qrDisplaySize}" alt="QR: ${escapeHtml(p.website)}" class="ozt-border" style="display:block;width:${p.qrDisplaySize}px;height:${p.qrDisplaySize}px;border:1px solid ${SIGNATURE_BRAND.border};border-radius:8px;" />
                </td>
              </tr>
              <tr>
                <td class="ozt-slate" style="padding-top:6px;font-family:${FONT_STACK};font-size:9px;line-height:12px;color:${SIGNATURE_BRAND.slate};max-width:${p.logoDisplayWidth}px;">
                  Web sitemizi ziyaret edin
                </td>
              </tr>
            </table>
          </td>
          <td class="ozt-border" style="width:1px;background-color:${SIGNATURE_BRAND.border};font-size:0;line-height:0;">&nbsp;</td>
          <td style="padding:0 0 0 24px;vertical-align:top;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td class="ozt-ink" style="padding:0 0 2px 0;font-family:${FONT_STACK};font-size:18px;font-weight:bold;color:${SIGNATURE_BRAND.navy};line-height:23px;">${escapeHtml(p.name)}</td>
              </tr>
              <tr>
                <td style="padding:0 0 8px 0;font-family:${FONT_STACK};font-size:12px;font-weight:bold;color:${SIGNATURE_BRAND.green};line-height:16px;letter-spacing:.02em;">${escapeHtml(p.title)} &middot; ${escapeHtml(p.company)}</td>
              </tr>
              <tr>
                <td class="ozt-slate" style="padding:0 0 12px 0;font-family:${FONT_STACK};font-size:10px;color:${SIGNATURE_BRAND.slate};line-height:14px;">${escapeHtml(p.legalName)}</td>
              </tr>
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              ${contactRows}
            </table>
          </td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:18px;">
        <tr>
          <td class="ozt-border" style="border-top:1px solid ${SIGNATURE_BRAND.border};font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">
        <tr>${badgesRow}</tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:16px;">
        <tr>
          <td class="ozt-ink" style="padding:0 0 10px 0;font-family:${FONT_STACK};font-size:12px;font-style:italic;font-weight:bold;color:${SIGNATURE_BRAND.navy};">${escapeHtml(p.tagline)}</td>
        </tr>
        <tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>${actionsRow}</tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

export function buildSignatureDocument(): string {
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title>${escapeHtml(SIGNATURE_PERSON.name)} — E-posta İmzası</title>
  </head>
  <body style="margin:0;padding:24px;background-color:${SIGNATURE_BRAND.paleBg};">
    ${buildSignatureHtml()}
  </body>
</html>`;
}
