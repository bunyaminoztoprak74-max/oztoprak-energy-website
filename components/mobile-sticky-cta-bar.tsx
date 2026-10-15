"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, FileText } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { contactPath } from "@/lib/routes";

// Contact details come from the dictionary (single source of truth) via props,
// so this client component does not bundle the dictionaries.
export function MobileStickyCtaBar({
  locale,
  phoneRaw,
  email,
  variant = "default",
  quoteHref,
  serviceType,
  waText
}: {
  locale: Locale;
  /** Digits only, international format without "+", e.g. 905456113320 (dict.contact.phoneRaw). */
  phoneRaw: string;
  email: string;
  /** "conversion" = 3 columns: Ara | WhatsApp | Teklif Talebi (investment/BESS pages). */
  variant?: "default" | "conversion";
  quoteHref?: string;
  serviceType?: string;
  waText?: string;
}) {
  const PHONE = `+${phoneRaw}`;
  const EMAIL = email;
  const WHATSAPP = `https://wa.me/${phoneRaw}${waText ? `?text=${encodeURIComponent(waText)}` : ""}`;
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const current = window.scrollY;
      if (current > 200) {
        setVisible(current < lastScrollY.current || current > 400);
      } else {
        setVisible(false);
      }
      lastScrollY.current = current;
      ticking.current = false;
    }
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const en = locale === "en";
  const conversion = variant === "conversion";

  // Reuses the existing window.oztoprakTrack helper and existing event names; no PII is sent.
  function track(eventName: string) {
    window.oztoprakTrack?.(eventName, {
      locale,
      lead_source_page: window.location.pathname,
      cta_source: "mobile_sticky_bar",
      ...(serviceType ? { service_type: serviceType } : {})
    });
  }

  const itemClass = "flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-steel hover:text-energy-500 active:bg-navy-900";
  const quoteClass = "flex flex-col items-center gap-1 bg-energy-500 py-3 text-[10px] font-bold text-navy-950 hover:bg-white active:bg-energy-500";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
      data-conversion-bar={conversion ? "true" : undefined}
    >
      <div
        className={`grid border-t border-energy-500/30 bg-navy-950/96 backdrop-blur ${conversion ? "grid-cols-3" : "grid-cols-4"}`}
        style={conversion ? { paddingBottom: "env(safe-area-inset-bottom)" } : undefined}
      >
        <a href={`tel:${PHONE}`} onClick={() => track("phone_click")} className={itemClass} tabIndex={conversion ? (visible ? 0 : -1) : undefined}>
          <Phone className="h-5 w-5" />
          {en ? "Call" : "Ara"}
        </a>
        {!conversion && (
          <a href={`mailto:${EMAIL}`} onClick={() => track("email_click")} className={itemClass}>
            <Mail className="h-5 w-5" />
            {en ? "Email" : "E-posta"}
          </a>
        )}
        <a
          href={WHATSAPP}
          onClick={() => track("whatsapp_click")}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
          tabIndex={conversion ? (visible ? 0 : -1) : undefined}
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href={conversion && quoteHref ? quoteHref : contactPath(locale)}
          onClick={() => track("consultation_request_click")}
          className={quoteClass}
          tabIndex={conversion ? (visible ? 0 : -1) : undefined}
        >
          <FileText className="h-5 w-5" />
          {conversion ? (en ? "Request a Quote" : "Teklif Talebi") : en ? "Inquire" : "Teklif"}
        </Link>
      </div>
    </div>
  );
}
