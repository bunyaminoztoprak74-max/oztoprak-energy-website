import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function BrandLogo({ locale, size = "header" }: { locale: Locale; size?: "header" | "footer" }) {
  const primary = locale === "tr" ? "ENERJİ DANIŞMANLIK" : "ENERGY CONSULTING";
  const secondary = locale === "tr" ? "ENERGY CONSULTING" : "ENERJİ DANIŞMANLIK";
  const isFooter = size === "footer";

  return (
    <div className={isFooter ? "flex items-center gap-3 sm:gap-4" : "flex max-h-[52px] items-center gap-2.5 sm:gap-3"}>
      <Image
        src="/oztoprak-logo-mark.png"
        alt="Oztoprak Energy Consultancy Logo"
        width={205}
        height={188}
        priority={!isFooter}
        sizes={isFooter ? "80px" : "(min-width: 640px) 52px, 40px"}
        style={{ maxHeight: isFooter ? undefined : "52px", width: "auto", objectFit: "contain" }}
        className={
          isFooter
            ? "h-16 w-auto shrink-0 object-contain drop-shadow-[0_0_18px_rgba(0,214,224,0.32)] sm:h-20"
            : "h-10 max-h-[52px] w-auto shrink-0 object-contain drop-shadow-[0_0_16px_rgba(0,214,224,0.34)] sm:h-[52px]"
        }
      />
      <div className={isFooter ? "min-w-0" : "min-w-0 max-w-[160px] sm:max-w-[230px]"}>
        <div
          className={
            isFooter
              ? "text-3xl font-black leading-none tracking-[0.02em] text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.16)] sm:text-4xl"
              : "text-lg font-black leading-none tracking-[0.02em] text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.18)] sm:text-xl"
          }
        >
          ÖZTOPRAK
        </div>
        <div className={isFooter ? "mt-1 h-px w-full bg-energy-500/80" : "mt-0.5 h-px w-full bg-energy-500/80"} />
        <div
          className={
            isFooter
              ? "mt-1 text-sm font-black leading-none tracking-[0.12em] text-[#00d6e0] sm:text-base sm:tracking-[0.18em]"
              : "mt-0.5 text-[8px] font-black leading-none tracking-[0.14em] text-[#00d6e0] sm:text-[9px] sm:tracking-[0.18em]"
          }
        >
          {primary}
        </div>
        <div
          className={
            isFooter
              ? "mt-1 text-[10px] font-medium uppercase leading-none tracking-[0.32em] text-steel/70 sm:text-xs sm:tracking-[0.42em]"
              : "mt-0.5 hidden text-[8px] font-medium uppercase leading-none tracking-[0.24em] text-steel/70 sm:block sm:text-[9px] sm:tracking-[0.3em]"
          }
        >
          {secondary}
        </div>
      </div>
    </div>
  );
}
