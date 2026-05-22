import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function BrandLogo({ locale, size = "header" }: { locale: Locale; size?: "header" | "footer" }) {
  const primary = locale === "tr" ? "ENERJİ DANIŞMANLIK" : "ENERGY CONSULTING";
  const secondary = locale === "tr" ? "ENERGY CONSULTING" : "ENERJİ DANIŞMANLIK";
  const markSize = size === "footer" ? "h-16 w-16 sm:h-20 sm:w-20" : "h-11 w-11 sm:h-14 sm:w-14";
  const wordmarkSize = size === "footer" ? "text-3xl sm:text-4xl" : "text-xl sm:text-3xl";
  const subSize = size === "footer" ? "text-sm sm:text-base" : "text-[10px] sm:text-sm";
  const secondaryVisibility = size === "footer" ? "" : "hidden sm:block";

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Image
        src="/oztoprak-logo-mark.png"
        alt="Oztoprak Energy Consultancy Logo"
        width={205}
        height={188}
        priority={size === "header"}
        sizes={size === "footer" ? "80px" : "56px"}
        className={`${markSize} shrink-0 object-contain drop-shadow-[0_0_18px_rgba(0,214,224,0.32)]`}
      />
      <div className={size === "footer" ? "min-w-0" : "min-w-0 max-w-[178px] sm:max-w-none"}>
        <div className={`${wordmarkSize} font-black leading-none tracking-[0.02em] text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.16)]`}>
          ÖZTOPRAK
        </div>
        <div className="mt-1 h-px w-full bg-energy-500/80" />
        <div className={`${subSize} mt-1 font-black leading-none tracking-[0.12em] text-[#00d6e0] sm:tracking-[0.18em]`}>
          {primary}
        </div>
        <div className={`${secondaryVisibility} mt-1 text-[10px] font-medium uppercase leading-none tracking-[0.32em] text-steel/70 sm:text-xs sm:tracking-[0.42em]`}>
          {secondary}
        </div>
      </div>
    </div>
  );
}
