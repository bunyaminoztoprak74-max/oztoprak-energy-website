import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/container";

const differentiators = {
  en: [
    {
      title: "Owner-aligned independence",
      body: "We have no equity stake in EPC contractors, equipment suppliers, or project developers. Our only obligation is to the entity that hired us — and their lenders. This structural independence is the foundation of a credible technical opinion."
    },
    {
      title: "Full project lifecycle coverage",
      body: "We engage at feasibility, survive construction, and continue into O&M. This gives us a longitudinal view of project risk that a one-off inspection firm cannot provide. We have watched projects we assessed at feasibility reach commercial operation — and know what the original risks actually became."
    },
    {
      title: "TEİAŞ-fluent grid compliance",
      body: "Turkey's grid connection process is the single most common delay cause for renewable projects. We have navigated it across solar, HEPP, and cogeneration projects — and know the documents, the timeline, and where delays originate."
    },
    {
      title: "Bankable technical reporting",
      body: "Our reports are structured for the technical schedules of project finance agreements. We understand what Turkish development banks (Ziraat, Halkbank, Garanti BBVA) require and what international IFIs (EBRD, IFC, EIB) consider adequate for technical due diligence."
    },
    {
      title: "On-site field experience",
      body: "We conduct site inspections — not desk reviews. Every performance assessment includes field measurement: thermal imaging, I-V curve tracing, relay test equipment, data logger verification. We report what we found, not what documents say should be there."
    }
  ],
  tr: [
    {
      title: "İşverene hizalı bağımsızlık",
      body: "EPC yüklenicilerinde, ekipman tedarikçilerinde veya proje geliştiricilerinde öz sermayemiz yoktur. Tek yükümlülüğümüz bizi işe alan tarafa — ve onların kredi kuruluşlarına karşıdır. Bu yapısal bağımsızlık güvenilir teknik görüşün temelidir."
    },
    {
      title: "Tam proje yaşam döngüsü kapsamı",
      body: "Fizibilite aşamasında başlar, inşaatı yönetir, O&M aşamasına geçeriz. Bu bize tek seferlik denetim firmalarının sağlayamayacağı uzunlamasına proje risk perspektifi sunar. Fizibilite aşamasında değerlendirdiğimiz projelerin ticari işletmeye açılışını izledik ve orijinal risklerin gerçekte ne olduğunu biliyoruz."
    },
    {
      title: "TEİAŞ odaklı şebeke uyumu",
      body: "Türkiye'nin şebeke bağlantı süreci (TEİAŞ), ülkedeki yenilenebilir enerji projelerinde en yaygın gecikme nedenidir. GES, HES ve kojenerasyon projelerinde bu süreci yönettik — gerekli belgeleri, takvimi ve gecikmelerin nereden kaynaklandığını biliyoruz."
    },
    {
      title: "Bankaya sunulabilir teknik raporlama",
      body: "Raporlarımız proje finansmanı anlaşmalarının teknik eklerine göre yapılandırılmıştır. Türk kalkınma bankalarının (Ziraat, Halkbank, Garanti BBVA) teknik ekten neler beklediğini ve uluslararası finansal kuruluşların (EBRD, IFC, EIB) çevresel ve sosyal durum tespiti için neyi yeterli saydığını biliyoruz."
    },
    {
      title: "Sahaya dayalı mühendislik deneyimi",
      body: "Saha denetimleri yapıyoruz — masabaşı incelemesi değil. Her performans değerlendirmesi saha ölçümü içerir: termal görüntüleme, I-V eğrisi izleme, röle test ekipmanı, veri kaydedici doğrulama. Belgelerin ne söylediğini değil, sahada ne bulduğumuzu raporlarız."
    }
  ]
};

export function InvestorTrustBlock({ locale }: { locale: Locale }) {
  const items = differentiators[locale];
  const en = locale === "en";

  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
            {en ? "Why Clients Choose Oztoprak Energy" : "Müşteriler Neden Öztoprak Enerji'yi Seçiyor"}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {en
              ? "Structural independence. Field-proven engineering. Bankable reports."
              : "Yapısal bağımsızlık. Sahada kanıtlanmış mühendislik. Bankaya sunulabilir raporlar."}
          </h2>
          <p className="mt-4 leading-8 text-steel">
            {en
              ? "Engineering consultancies are only as credible as their independence. Every engagement we deliver is structured so that our technical opinion cannot be compromised by contractor relationships or commercial interests outside the scope of the assignment."
              : "Mühendislik danışmanlıkları ancak bağımsızlıkları kadar güvenilirdir. Sunduğumuz her çalışma, teknik görüşümüzün yüklenici ilişkileri veya görev kapsamı dışındaki ticari çıkarlar tarafından tehlikeye atılamayacağı şekilde yapılandırılmıştır."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-energy-500/40 hover:bg-white/[0.07]"
            >
              <CheckCircle2 className="h-6 w-6 text-energy-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {items.slice(3).map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-energy-500/40 hover:bg-white/[0.07]"
            >
              <CheckCircle2 className="h-6 w-6 text-energy-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
