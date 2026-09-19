"use client";

import { useEffect } from "react";

export function trackInvestment(event: string, params: Record<string, string> = {}) {
  if (window.oztoprakTrack) window.oztoprakTrack(event, params);
  else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}

export function InvestmentPageView({ slug }: { slug: string }) {
  useEffect(() => { trackInvestment("investment_page_view", { page: slug, locale: "tr" }); }, [slug]);
  return null;
}
