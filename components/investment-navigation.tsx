"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { investmentNavigation } from "@/content/investments";

export function InvestmentNavigation({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);
  return <div ref={root} className={mobile ? "border-t border-white/10 px-5 py-2 xl:hidden" : "relative"} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } }}>
    <button ref={button} type="button" aria-expanded={open} aria-controls={mobile ? "investment-mobile-links" : "investment-desktop-links"} onClick={() => setOpen(!open)} className="flex min-h-10 items-center gap-2 whitespace-nowrap text-sm font-semibold text-energy-500 focus-visible:outline focus-visible:outline-energy-500">Yatırım Fırsatları<ChevronDown aria-hidden="true" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} /></button>
    {open && <nav id={mobile ? "investment-mobile-links" : "investment-desktop-links"} aria-label="Yatırım fırsatları alt menüsü" className={mobile ? "grid max-h-[50vh] gap-1 overflow-y-auto pb-3 sm:grid-cols-2" : "absolute left-0 top-full z-50 grid w-64 rounded-lg border border-white/15 bg-navy-950 p-2 shadow-xl"}>
      {investmentNavigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className="rounded-md px-3 py-3 text-sm text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none">{item.label}</Link>)}
    </nav>}
  </div>;
}
