import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", download }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5",
        variant === "primary" && "bg-energy-500 text-navy-950 shadow-glow hover:bg-white hover:shadow-[0_22px_70px_rgba(47,183,255,0.24)]",
        variant === "secondary" && "border border-white/20 bg-white/10 text-white hover:border-energy-500 hover:bg-white/[0.14] hover:text-energy-500",
        variant === "ghost" && "text-energy-500 hover:text-white"
      )}
    >
      {download ? <Download className="h-4 w-4" /> : null}
      {children}
      {!download ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
}
