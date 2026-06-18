"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="hidden shrink-0 items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500 print:hidden sm:flex"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}
