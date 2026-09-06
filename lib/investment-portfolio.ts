export type PlantPortfolio = {
  id: string; type: "HES" | "GES" | "RES" | "BESS"; status: "active" | "closed" | "draft";
  name?: string; companyName?: string; region: string; city: string;
  installedCapacityMW: number; annualGenerationGWh: number | null;
  operationalStatus: string; yekdem: string; licenseStatus: string;
  askingPrice: number | null; currency: "TRY" | "USD" | "EUR";
  confidential: boolean; summary: string; slug: string;
};

// Only an allowlisted public projection may be rendered. Confidential free text,
// city, company, name and slug never reach the card or client payload.
export function publicPortfolio(plant: PlantPortfolio) {
  if (plant.status !== "active") return null;
  return {
    title: plant.confidential ? `Gizli Portföy – ${plant.region}` : plant.name || `${plant.type} Yatırımı`,
    region: plant.region,
    city: plant.confidential ? null : plant.city,
    type: plant.type,
    capacity: plant.installedCapacityMW,
    generation: plant.annualGenerationGWh,
    operationalStatus: plant.operationalStatus,
    summary: plant.confidential ? "Detaylar NDA sonrasında paylaşılır." : plant.summary,
    askingPrice: plant.confidential ? null : plant.askingPrice,
    currency: plant.currency
  };
}
