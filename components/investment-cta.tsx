"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackInvestment } from "./investment-tracking";

const ctas = {
  buyer: ["Yatırım Kriterlerinizi Bildirin", "/tr/santral-satin-al", ""],
  seller: ["Gizli Görüşme Talep Et", "/tr/santralini-sat", ""],
  hes: ["Satılık HES Arıyorum", "/tr/santral-satin-al?type=HES", "hes_investment_cta_click"],
  ges: ["Satılık GES Arıyorum", "/tr/santral-satin-al?type=GES", "ges_investment_cta_click"],
  diligence: ["Teknik İnceleme Talep Et", "/tr/santral-satin-al?intent=due-diligence", "due_diligence_cta_click"],
  valuation: ["Santral Değerleme Talep Et", "/tr/santralini-sat?intent=valuation", "valuation_cta_click"],
  request: ["Yatırım Kriterlerinizi Bildirin", "/tr/santral-satin-al", ""]
} as const;

export function InvestmentCta({ kind, label, href, secondary = false }: { kind: keyof typeof ctas; label?: string; href?: string; secondary?: boolean }) {
  const [text, target, event] = ctas[kind];
  return <Link href={href || target} onClick={() => {
    const params = { locale: "tr", lead_source_page: window.location.pathname, service_type: kind, cta_source: label || text };
    // Existing events keep their names (extra params are backward compatible); previously untracked CTAs get a generic event.
    trackInvestment(event || "investment_cta_click", params);
  }} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-500 ${secondary ? "border border-white/20 bg-white/10 text-white hover:border-energy-500" : "bg-energy-500 text-navy-950 shadow-glow hover:bg-white"}`}>
    {label || text}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
  </Link>;
}
