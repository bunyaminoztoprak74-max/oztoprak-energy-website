import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/container";

const credentials = {
  en: [
    { label: "Discipline", value: "Electrical & Power Engineering" },
    { label: "Experience", value: "28+ years — since 1997" },
    { label: "Specialisation", value: "Renewable Energy — Hydropower, Solar, EPC" },
    { label: "Standards Applied", value: "IEC, IEEE, TEİAŞ, EPDK, DSİ" },
    { label: "Languages", value: "Turkish (native), English (professional)" },
    { label: "Operating Base", value: "Turkey — active internationally" },
    { label: "Engagement Types", value: "Owner's Engineering, Independent Engineer, Lender's Engineer, Expert Witness" },
    { label: "Sectors", value: "Run-of-river HEPP, ground-mount solar, rooftop solar, industrial energy" }
  ],
  tr: [
    { label: "Disiplin", value: "Elektrik ve Güç Mühendisliği" },
    { label: "Deneyim", value: "28+ yıl — 1997'den bu yana" },
    { label: "Uzmanlık", value: "Yenilenebilir Enerji — HES, GES, EPC" },
    { label: "Uygulanan Standartlar", value: "IEC, IEEE, TEİAŞ, EPDK, DSİ" },
    { label: "Diller", value: "Türkçe (anadil), İngilizce (profesyonel)" },
    { label: "Faaliyet Merkezi", value: "Türkiye — uluslararası aktif" },
    { label: "Çalışma Türleri", value: "İşveren Mühendisliği, Bağımsız Mühendis, Finans Kuruluşu Mühendisi, Bilirkişi" },
    { label: "Sektörler", value: "Nehir tipi HES, arazi üstü GES, çatı GES, sanayi enerjisi" }
  ]
};

export function EngineeringCredentials({ locale }: { locale: Locale }) {
  const items = credentials[locale];
  const en = locale === "en";

  return (
    <section className="bg-navy-900 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Engineering Credentials" : "Mühendislik Kimlik Bilgileri"}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">
            {en
              ? "The engineering background behind every engagement"
              : "Her çalışmanın arkasındaki mühendislik geçmişi"}
          </h2>

          <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
            {items.map((item) => (
              <div
                key={item.label}
                className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-0 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] transition"
              >
                <dt className="text-sm font-semibold text-white/60">{item.label}</dt>
                <dd className="text-sm font-medium text-white">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
