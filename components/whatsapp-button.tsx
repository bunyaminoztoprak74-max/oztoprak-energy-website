"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getConversionBar } from "@/lib/conversion-bar";

export function WhatsAppButton({ phone, label }: { phone: string; label: string }) {
  // On pages with the mobile conversion bar (which already has WhatsApp) the floating
  // button is hidden below the lg breakpoint only; desktop behaviour is unchanged.
  const hideOnMobile = Boolean(getConversionBar(usePathname()));
  return (
    <a
      href={`https://wa.me/${phone}`}
      aria-label={label}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-navy-950 shadow-2xl transition hover:scale-105${hideOnMobile ? " max-lg:hidden" : ""}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        if (typeof window !== "undefined") {
          const w = window as unknown as { oztoprakTrack?: (event: string, data?: Record<string, unknown>) => void };
          w.oztoprakTrack?.("whatsapp_click", { phone });
        }
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
