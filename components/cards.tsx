import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="premium-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-energy-500/50 hover:shadow-[0_26px_90px_rgba(47,183,255,0.12)]">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
    </div>
  );
}

export function LinkCard({ href, title, text, meta }: { href: string; title: string; text: string; meta?: string }) {
  return (
    <Link href={href} className="group flex h-full min-h-[260px] flex-col rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-energy-500/55 hover:bg-white/[0.065] hover:shadow-[0_26px_86px_rgba(47,183,255,0.13)]">
      {meta ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-energy-500">{meta}</p> : null}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-navy-950/70 text-energy-500 transition group-hover:border-energy-500/55 group-hover:bg-energy-500 group-hover:text-navy-950">
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <p className="mt-5 flex-1 text-sm leading-7 text-steel">{text}</p>
      <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-energy-500/35" />
    </Link>
  );
}
