import { SIGNATURE_ACTION_LINKS, SIGNATURE_BADGES, SIGNATURE_BRAND, SIGNATURE_PERSON } from "@/lib/signature-data";

// Builds a fully self-contained, inline-CSS, table-based HTML email signature.
// Rules followed for cross-client compatibility (Outlook/Word engine, Gmail,
// Apple Mail, Thunderbird, mobile mail apps):
//  - Layout uses nested <table> elements only, no CSS grid/flexbox.
//  - Every style is inlined on the element itself; no <style> block or
//    external classes, since many clients strip <head> styles.
//  - Fonts fall back to a websafe stack (Arial/Helvetica) since custom
//    webfonts are unreliable in email.
//  - Images carry explicit width/height attributes so layout doesn't jump
//    while images load or if they're blocked.
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

function actionButton(label: string, href: string): string {
  return `
    <td style="padding:0 8px 0 0;">
      <a href="${escapeHtml(href)}" target="_blank" rel="noopener"
        style="display:inline-block;font-family:${FONT_STACK};font-size:11px;font-weight:bold;line-height:1;letter-spacing:.02em;color:${SIGNATURE_BRAND.navy};text-decoration:none;background-color:${SIGNATURE_BRAND.white};border:1px solid ${SIGNATURE_BRAND.border};border-radius:4px;padding:7px 12px;">${escapeHtml(label)}</a>
    </td>`;
}

function badgePill(label: string): string {
  return `
    <td style="padding:0 6px 6px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-family:${FONT_STACK};font-size:10px;font-weight:bold;letter-spacing:.03em;color:${SIGNATURE_BRAND.white};background-color:${SIGNATURE_BRAND.navy};border-radius:3px;padding:4px 9px;white-space:nowrap;">${escapeHtml(label)}</td>
        </tr>
      </table>
    </td>`;
}

function contactRow(iconCell: string, text: string, href?: string): string {
  const value = href
    ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener" style="color:${SIGNATURE_BRAND.ink};text-decoration:none;">${escapeHtml(text)}</a>`
    : escapeHtml(text);
  return `
    <tr>
      <td style="padding:0 8px 4px 0;vertical-align:top;width:16px;">${iconCell}</td>
      <td style="padding:0 0 4px 0;font-family:${FONT_STACK};font-size:12px;line-height:17px;color:${SIGNATURE_BRAND.ink};vertical-align:top;">${value}</td>
    </tr>`;
}

function iconSquare(letter: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:16px;height:16px;font-family:${FONT_STACK};font-size:9px;font-weight:bold;color:${SIGNATURE_BRAND.white};background-color:${SIGNATURE_BRAND.green};border-radius:3px;text-align:center;vertical-align:middle;">${letter}</td></tr></table>`;
}

export function buildSignatureHtml(): string {
  const p = SIGNATURE_PERSON;

  const badgesRow = SIGNATURE_BADGES.map((b) => badgePill(b.label)).join("");
  const actionsRow = SIGNATURE_ACTION_LINKS.map((l) => actionButton(l.label, l.href)).join("");

  const rows = [
    contactRow(iconSquare("T"), p.phone, `tel:${p.phoneHref}`),
    contactRow(iconSquare("@"), p.email, `mailto:${p.email}`),
    contactRow(iconSquare("W"), p.websiteLabel, p.website),
    contactRow(iconSquare("in"), p.linkedinLabel, p.linkedin),
    contactRow(iconSquare("A"), p.addressLines.join(", "))
  ].join("");

  return `<!--[if mso]>
<style type="text/css">
table { border-collapse:collapse; }
</style>
<![endif]-->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:640px;max-width:100%;border-collapse:collapse;font-family:${FONT_STACK};background-color:${SIGNATURE_BRAND.white};">
  <tr>
    <td style="padding:0 0 12px 0;border-top:3px solid ${SIGNATURE_BRAND.green};line-height:0;font-size:0;">&nbsp;</td>
  </tr>
  <tr>
    <td>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="width:150px;padding:0 20px 0 0;vertical-align:top;border-right:1px solid ${SIGNATURE_BRAND.border};">
            <img src="${p.logoUrl}" width="${p.logoWidth}" height="${p.logoHeight}" alt="${escapeHtml(p.company)}" style="display:block;width:100%;max-width:${p.logoWidth}px;height:auto;border:0;outline:none;" />
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">
              <tr>
                <td>
                  <img src="${p.qrUrl}" width="${p.qrSize}" height="${p.qrSize}" alt="QR: ${escapeHtml(p.website)}" style="display:block;border:1px solid ${SIGNATURE_BRAND.border};border-radius:4px;" />
                </td>
                <td style="padding-left:10px;font-family:${FONT_STACK};font-size:9px;line-height:13px;color:${SIGNATURE_BRAND.slate};max-width:90px;">
                  Web sitemizi ziyaret etmek için QR kodu okutun
                </td>
              </tr>
            </table>
          </td>
          <td style="padding:0 0 0 20px;vertical-align:top;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:0 0 2px 0;font-family:${FONT_STACK};font-size:17px;font-weight:bold;color:${SIGNATURE_BRAND.navy};line-height:22px;">${escapeHtml(p.name)}</td>
              </tr>
              <tr>
                <td style="padding:0 0 8px 0;font-family:${FONT_STACK};font-size:12px;font-weight:bold;color:${SIGNATURE_BRAND.green};line-height:16px;letter-spacing:.02em;">${escapeHtml(p.title)} &middot; ${escapeHtml(p.company)}</td>
              </tr>
              <tr>
                <td style="padding:0 0 10px 0;font-family:${FONT_STACK};font-size:10px;color:${SIGNATURE_BRAND.slate};line-height:14px;">${escapeHtml(p.legalName)}</td>
              </tr>
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              ${rows}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:14px 0 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>${badgesRow}</tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 0 0 0;border-top:1px solid ${SIGNATURE_BRAND.border};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0 10px 0;font-family:${FONT_STACK};font-size:12px;font-style:italic;font-weight:bold;color:${SIGNATURE_BRAND.navy};">${escapeHtml(p.tagline)}</td>
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
    <title>${escapeHtml(SIGNATURE_PERSON.name)} — E-posta İmzası</title>
  </head>
  <body style="margin:0;padding:24px;background-color:${SIGNATURE_BRAND.paleBg};">
    ${buildSignatureHtml()}
  </body>
</html>`;
}
