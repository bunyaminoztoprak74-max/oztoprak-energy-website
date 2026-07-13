"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, FileText } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { contactPath } from "@/lib/routes";

const PHONE = "+905321234567";
const EMAIL = "info@oztoprakenerji.com";
const WHATSAPP = "https://wa.me/905321234567";

export function MobileStickyCtaBar({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      if (current > 200) {
        setVisible(current < lastScrollY.current || current > 400);
      } else {
        setVisible(false);
      }
      lastScrollY.current = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const en = locale === "en";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-4 border-t border-energy-500/30 bg-navy-950/96 backdrop-blur">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-steel hover:text-energy-500 active:bg-navy-900"
        >
          <Phone className="h-5 w-5" />
          {en ? "Call" : "Ara"}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-steel hover:text-energy-500 active:bg-navy-900"
        >
          <Mail className="h-5 w-5" />
          {en ? "Email" : "E-posta"}
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-steel hover:text-energy-500 active:bg-navy-900"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href={contactPath(locale)}
          className="flex flex-col items-center gap-1 bg-energy-500 py-3 text-[10px] font-bold text-navy-950 hover:bg-white active:bg-energy-500"
        >
          <FileText className="h-5 w-5" />
          {en ? "Inquire" : "Teklif"}
        </Link>
      </div>
    </div>
  );
}
