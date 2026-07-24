import { NextResponse } from "next/server";
import { buildSignatureHtml } from "@/lib/signature-html";

export const dynamic = "force-static";

// Returns the fully inline-CSS, table-based, Outlook/Gmail/Apple Mail/
// Thunderbird-compatible signature markup as raw HTML. Meant to be fetched
// by the /signature builder UI (Copy HTML / Copy Rich Text / Download) and
// can also be opened directly in a browser to inspect the exact output.
export function GET() {
  const html = buildSignatureHtml();

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
