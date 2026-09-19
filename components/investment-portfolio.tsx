import { publicPortfolio, type PlantPortfolio } from "@/lib/investment-portfolio";
import { InvestmentCta } from "./investment-cta";

export function PortfolioCard({ plant }: { plant: PlantPortfolio }) {
  const item = publicPortfolio(plant);
  if (!item) return null;
  return <article className="premium-card rounded-xl p-6">
    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
    <dl className="my-5 grid gap-3 text-sm text-steel">
      {[["Tür", item.type], ["Kurulu Güç", `${item.capacity} MW`], ["Yıllık Üretim", item.generation === null ? "Belirtilmedi" : `${item.generation} GWh`], ["Durum", item.operationalStatus], ...(item.city ? [["İl", item.city]] : [])].map(([label, value]) => <div key={label} className="flex justify-between gap-4"><dt>{label}</dt><dd className="text-white">{value}</dd></div>)}
    </dl>
    <p className="mb-5 text-sm leading-7 text-steel">{item.summary}</p>
    <InvestmentCta kind="request" />
  </article>;
}

export function InvestorRequestCard() {
  return <aside className="rounded-xl border border-energy-500/30 bg-energy-500/10 p-6 sm:p-8">
    <h2 className="text-2xl font-bold text-white">Aradığınız Santral Portföyümüzde Yok mu?</h2>
    <p className="mb-6 mt-4 max-w-2xl leading-8 text-steel">Kriterlerinizi bırakın. Uygun yatırım fırsatı oluştuğunda sizinle iletişime geçelim.</p>
    <InvestmentCta kind="request" />
  </aside>;
}
