import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { RelatedContent } from "@/components/related-content";
import { AuthorityMetrics } from "@/components/authority-metrics";
import { ConversionFunnel } from "@/components/conversion-funnel";
import { EngineeringVisualBlocks } from "@/components/engineering-visual-blocks";
import { StickyConsultationCta } from "@/components/sticky-consultation-cta";
import { MobileStickyCtaBar } from "@/components/mobile-sticky-cta-bar";
import { getDictionary } from "@/content/dictionaries";
import { getService, getServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { servicesIndexPath } from "@/lib/routes";

function contactHref(locale: Locale) {
  return locale === "tr" ? "/tr/iletisim" : "/en/contact";
}

function serviceAuthoritySections(locale: Locale, service: NonNullable<ReturnType<typeof getService>>) {
  const en = locale === "en";
  const scopeText = service.scope.join(", ");
  const outcomesText = service.outcomes.join(", ");

  return en
    ? [
        {
          heading: `What ${service.title} Covers`,
          content: `${service.title} is not a generic advisory exercise. It is a structured engineering review for renewable energy owners, EPC contractors and investors who need decisions based on field evidence. The work connects site observations, commissioning documentation, power plant operations data, grid interface records and O&M history into one practical view of technical risk. For this scope, Oztoprak Energy typically reviews ${scopeText}. The objective is to identify what affects generation, availability, reliability, compliance and handover quality, then translate those findings into owner-ready decisions. This is especially valuable when hydropower consulting, solar energy consulting, HPP commissioning, power plant operations support or energy audit services must be understood by both technical and commercial stakeholders.`
        },
        {
          heading: "Technical Problems This Service Solves",
          content: `Renewable energy projects often lose value because commissioning evidence is incomplete, EPC interface ownership is unclear, equipment performance is not interpreted with operating context, or O&M routines are not connected to measured loss. In real plant reviews, the problem is rarely one isolated defect. It is usually a chain involving design assumptions, protection settings, control behavior, operator response, maintenance discipline and contract handover evidence. This service is designed to make that chain visible. Findings are linked to practical benefits such as ${outcomesText}. The result is a consulting output that can be used by asset managers, project directors, EPC teams, lenders and plant operations staff without needing to translate vague recommendations into engineering actions later.`
        },
        {
          heading: "Engineering Process",
          content: `The process begins with a focused briefing to understand the owner objective, commercial deadline, asset condition and decision risk. The second step is document and data review: design records, single-line diagrams, commissioning forms, performance tests, SCADA trends, outage logs, protection records and O&M plans. The third step is field or remote technical analysis, where observations are checked against actual operating behavior. The fourth step is risk ranking by generation impact, safety, grid compliance, cost urgency and implementation difficulty. The final step is a concise action plan. For EPC advisory and owner’s engineering, this may include scope clarifications, interface risks and commissioning readiness actions. For energy audits and plant performance reviews, it may include loss categories, corrective maintenance priorities and future monitoring recommendations.`
        },
        {
          heading: "Benefits for Owners, EPC Teams and Investors",
          content: `The main benefit is technical clarity before a project or asset decision becomes expensive to reverse. Owners gain an independent view of what is proven, what is assumed and what still needs verification. EPC teams gain a structured way to close technical gaps before they become delay claims or handover disputes. Investors gain a more realistic understanding of production risk, CAPEX exposure and asset recovery potential. For power plant operations teams, the value is practical: fewer unclear defects, better evidence discipline, stronger O&M priorities and a clearer link between engineering action and plant performance. This is how renewable energy consultancy becomes decision support rather than presentation material.`
        },
        {
          heading: "Recommended Deliverables",
          content: `A strong deliverable package usually includes an executive technical summary, a prioritized risk register, a finding-by-finding evidence table, recommendations ranked by urgency and impact, and a practical implementation roadmap. Depending on the asset, it can also include commissioning readiness comments, protection and grid interface observations, O&M maturity notes, performance loss categories and due diligence red flags. The most useful reports avoid keyword stuffing and generic marketing language. They state what was checked, what evidence supports the conclusion, what risk remains, and which engineering action should be taken next.`
        },
        {
          heading: "When to Request This Review",
          content: `The best time to request this review is before a technical decision becomes locked into schedule, contract or investment pressure. Typical triggers include EPC tender preparation, late-stage design review, first energization planning, repeated plant trips, unexplained generation loss, acquisition due diligence, refinancing, warranty discussions and owner concerns about O&M maturity. Early review protects value because it gives the project team time to correct evidence gaps, clarify responsibility and plan outages or tests properly. For existing assets, the review is also useful when production trends are declining, availability looks acceptable but revenue is weak, or site teams cannot explain recurring alarms with confidence.`
        },
        {
          heading: "Trust Indicators and Engineering Judgment",
          content: `For technical buyers, trust comes from disciplined reasoning, not broad claims. A credible review must show how each conclusion was reached, which evidence was used, what assumptions remain and how the recommendation affects safety, generation, reliability, compliance or cost. Oztoprak Energy positions each engagement around plant operations experience, EPC delivery awareness, commissioning discipline and practical power plant constraints. The goal is to help the owner ask better questions, challenge weak assumptions and act with enough technical confidence to protect long-term asset performance.`
        }
      ]
    : [
        {
          heading: `${service.title} Kapsamı`,
          content: `${service.title} genel bir danışmanlık çalışması değildir. Yenilenebilir enerji yatırımcıları, santral sahipleri ve EPC ekipleri için saha kanıtına dayalı karar üretmek üzere yapılandırılmış mühendislik incelemesidir. Çalışma; saha gözlemleri, devreye alma dokümantasyonu, enerji santrali işletme verisi, şebeke arayüz kayıtları ve O&M geçmişini tek bir teknik risk görünümünde birleştirir. Bu kapsamda genellikle ${scopeText} incelenir. Amaç; üretimi, emre amadeliği, güvenilirliği, uyumu ve teslim kalitesini etkileyen konuları belirlemek ve bu bulguları işveren kararına hazır aksiyonlara dönüştürmektir.`
        },
        {
          heading: "Bu Hizmetin Çözdüğü Teknik Problemler",
          content: `Yenilenebilir enerji projelerinde değer kaybı çoğu zaman eksik devreye alma kanıtı, belirsiz EPC arayüz sahipliği, işletme bağlamı olmadan yorumlanan ekipman performansı veya ölçülen kayıpla ilişkilendirilmeyen O&M rutinlerinden kaynaklanır. Gerçek santral incelemelerinde problem nadiren tek bir kusurdur. Tasarım varsayımları, koruma ayarları, kontrol davranışı, operatör müdahalesi, bakım disiplini ve sözleşmesel teslim kanıtı birlikte değerlendirilmelidir. Bu hizmet bu zinciri görünür hale getirir ve ${outcomesText} gibi sonuçlara bağlar.`
        },
        {
          heading: "Mühendislik Süreci",
          content: `Süreç işveren hedefi, ticari takvim, varlık durumu ve karar riskinin netleştirildiği kısa bir teknik brifingle başlar. İkinci adım doküman ve veri incelemesidir: tasarım kayıtları, tek hat şemaları, devreye alma formları, performans testleri, SCADA trendleri, duruş kayıtları, koruma kayıtları ve O&M planları. Üçüncü adım saha veya uzaktan teknik analizdir. Dördüncü adım risklerin üretim etkisi, güvenlik, şebeke uyumu, maliyet aciliyeti ve uygulama zorluğuna göre sıralanmasıdır. Son adım uygulanabilir aksiyon planıdır.`
        },
        {
          heading: "İşveren, EPC Ekibi ve Yatırımcı İçin Faydalar",
          content: `Ana fayda, proje veya varlık kararları geri dönülmesi pahalı hale gelmeden önce teknik netlik sağlamaktır. İşveren neyin kanıtlandığını, neyin varsayıldığını ve neyin doğrulanması gerektiğini görür. EPC ekipleri teknik boşlukları gecikme veya teslim anlaşmazlığına dönüşmeden kapatabilir. Yatırımcılar üretim riski, CAPEX etkisi ve varlık toparlama potansiyelini daha gerçekçi değerlendirir. İşletme ekipleri için değer daha pratiktir: daha az belirsiz kusur, daha iyi kanıt disiplini ve mühendislik aksiyonuyla santral performansı arasında daha net bağ.`
        },
        {
          heading: "Önerilen Çıktılar",
          content: `Güçlü bir teslim paketi genellikle yönetici teknik özeti, öncelikli risk listesi, bulgu bazlı kanıt tablosu, aciliyet ve etkiye göre sıralanmış öneriler ve uygulanabilir yol haritası içerir. Varlığa bağlı olarak devreye alma hazırlık yorumları, koruma ve şebeke arayüz gözlemleri, O&M olgunluk notları, performans kayıp kategorileri ve teknik durum tespiti riskleri de dahil edilebilir. En faydalı raporlar neyin incelendiğini, hangi kanıtın sonucu desteklediğini ve sonraki mühendislik aksiyonunun ne olduğunu net söyler.`
        },
        {
          heading: "Bu İnceleme Ne Zaman Talep Edilmeli",
          content: `Bu inceleme için en doğru zaman, teknik karar takvim, sözleşme veya yatırım baskısı altında kilitlenmeden öncedir. Tipik tetikleyiciler EPC ihale hazırlığı, tasarım incelemesi, ilk enerjilendirme planı, tekrarlayan santral açmaları, açıklanamayan üretim kaybı, satın alma teknik durum tespiti, refinansman, garanti görüşmeleri ve O&M olgunluğu hakkındaki işveren endişeleridir. Erken inceleme değer korur; çünkü proje ekibine kanıt boşluklarını kapatma, sorumlulukları netleştirme ve test veya duruşları doğru planlama zamanı verir. Mevcut varlıklarda üretim trendi düşerken, emre amadelik iyi görünmesine rağmen gelir zayıfsa veya saha ekipleri tekrarlayan alarmları güvenle açıklayamıyorsa da faydalıdır.`
        },
        {
          heading: "Güven Sinyalleri ve Mühendislik Yorumu",
          content: `Teknik karar vericiler için güven geniş iddialardan değil, disiplinli muhakemeden gelir. Güvenilir bir inceleme her sonuca nasıl ulaşıldığını, hangi kanıtın kullanıldığını, hangi varsayımların kaldığını ve önerinin güvenlik, üretim, güvenilirlik, uyum veya maliyet üzerinde nasıl etki yaratacağını göstermelidir. Öztoprak Enerji her çalışmayı santral işletme deneyimi, EPC teslim farkındalığı, devreye alma disiplini ve pratik santral kısıtları etrafında konumlandırır. Amaç işverenin daha doğru sorular sormasını, zayıf varsayımları sorgulamasını ve uzun vadeli varlık performansını koruyacak teknik güvenle hareket etmesini sağlamaktır.`
        }
      ];
}

function serviceExpansionSections(locale: Locale, service: NonNullable<ReturnType<typeof getService>>) {
  if (locale === "en") {
    return [
      {
        heading: "Commissioning and Operational Readiness Perspective",
        content: `A deep ${service.title} review must reflect how a power plant actually moves from design intent to stable operation. Mechanical completion, cold checks, energization, functional tests, synchronization, load rejection checks, governor response, AVR behavior, reactive power capability and performance runs all create evidence. When this evidence is weak, the owner inherits uncertainty. Oztoprak Energy treats commissioning records as operational risk signals: missing test sheets, unclear punch-list closure, unstable alarms, incomplete relay files or unverified control loops affect availability, warranty discussions, operator confidence and future troubleshooting.`
      },
      {
        heading: "Owner-Side EPC Workflow Control",
        content: `EPC value is protected through disciplined interface control. Civil readiness, electromechanical installation, automation logic, grid connection, protection settings, auxiliary systems, spare parts, training and handover documents must mature together. If one stream moves without the others, delay risk and claim exposure increase. For ${service.title}, owner-side review checks whether submittals, site progress, test plans and acceptance criteria tell the same technical story before unresolved project risk becomes schedule loss, generation loss or a handover dispute.`
      },
      {
        heading: "Long-Term SEO and Knowledge Architecture",
        content: `This page is structured as a topic-cluster asset for hydropower consulting, solar energy consulting, EPC technical advisory, power plant commissioning, technical due diligence, owner engineering and power plant audits. It links related services, case studies, blog articles, problem pages and topical clusters so a technical visitor can move from a broad concern to a specific consultation path without hitting a dead end. That internal structure supports organic traffic growth while keeping the content useful for engineers, owners and investors.`
      }
    ];
  }

  return [
    {
      heading: "Devreye Alma ve Operasyonel Hazirlik Bakisi",
      content: `Kapsamli bir ${service.title} incelemesi, enerji santralinin tasarim niyetinden kararli isletmeye nasil gectigini yansitmalidir. Mekanik tamamlama, soguk kontroller, enerjilendirme, fonksiyonel testler, senkronizasyon, yuk atma kontrolleri, governor tepkisi, AVR davranisi, reaktif guc kabiliyeti ve performans kosulari kanit uretir. Bu kanit zayifsa belirsizlik isverene kalir. Eksik test formlari, belirsiz punch-list kapanisi, kararsiz alarmlar, eksik role dosyalari veya dogrulanmamis kontrol donguleri emre amadeligi, garanti gorusmelerini, operator guvenini ve gelecekteki ariza analizini etkiler.`
    },
    {
      heading: "Isveren Tarafi EPC Is Akisi Kontrolu",
      content: `EPC projelerinde teknik deger disiplinli arayuz kontrolu ile korunur. Insaat hazirligi, elektromekanik montaj, otomasyon mantigi, sebeke baglantisi, koruma ayarlari, yardimci sistemler, yedek parca, egitim ve teslim dokumanlari birlikte olgunlasmalidir. Bir akis digerlerinden kopuk ilerlerse gecikme riski ve talep uyusmazligi artar. ${service.title} kapsaminda isveren tarafi inceleme; teknik sunumlarin, saha ilerlemesinin, test planlarinin ve kabul kriterlerinin ayni teknik hikayeyi anlatip anlatmadigina odaklanir.`
    },
    {
      heading: "Uzun Vadeli SEO ve Bilgi Mimarisi Degeri",
      content: `Bu icerik HES danismanligi, GES danismanligi, EPC teknik danismanlik, santral devreye alma, teknik durum tespiti, isveren muhendisligi ve santral denetimleri icin konu kumesi varligi olarak yapilandirilmistir. Sayfa ilgili hizmetlere, vaka calismalarina, blog yazilarina, problem sayfalarina ve konu kumelerine baglanir; teknik ziyaretci genis bir sorundan belirli bir danismanlik yoluna kolayca ilerler.`
    }
  ];
}

function specializedServiceSections(locale: Locale, service: NonNullable<ReturnType<typeof getService>>) {
  const en = locale === "en";

  if (service.slug === "technical-due-diligence" || service.slug === "teknik-durum-tespiti") {
    return en
      ? [
          {
            heading: "Investor-Grade Data Room Review",
            content: "A renewable energy technical due diligence review begins with the quality of the evidence. The data room should prove how the project was designed, procured, commissioned, operated and maintained. Oztoprak Energy reviews EPC contracts, technical specifications, as-built documents, commissioning sheets, protection files, performance test records, SCADA exports, outage logs, warranty correspondence, O&M reports and grid connection documents. Weak records are not treated as administration problems; they are risk signals. Missing relay settings, incomplete punch-list closure, unclear test acceptance criteria or inconsistent production records can affect valuation, lender confidence, warranty recovery and post-acquisition CAPEX planning."
          },
          {
            heading: "Performance, Availability and Revenue Risk",
            content: "Due diligence must connect technical findings to commercial exposure. For hydropower assets, this means separating water availability, turbine-generator efficiency, forced outages, sedimentation signals, governor behavior and dispatch constraints. For solar assets, it means reviewing performance ratio trends, inverter availability, string losses, soiling assumptions, clipping, curtailment and O&M response discipline. The objective is not to produce a long defect list. The objective is to explain whether historical generation is repeatable, which losses are structural, which losses are recoverable and which risks should influence price, warranty negotiations or post-closing improvement budgets."
          },
          {
            heading: "EPC, Commissioning and Handover Risk",
            content: "Many renewable energy assets look acceptable on a summary dashboard but carry unresolved EPC risk inside the documentation. Technical due diligence checks whether commissioning evidence proves equipment readiness, whether FAT and SAT records align with actual site conditions, whether NCRs were closed with engineering evidence and whether handover documents are complete enough for long-term operations. If energization, synchronization, protection tests, reactive power capability, SCADA points, alarm logic or performance tests were poorly documented, the buyer may inherit uncertainty that only appears after a trip, outage or warranty dispute."
          },
          {
            heading: "Due Diligence Outputs for Decision Makers",
            content: "The final output should be usable by investors, lenders, asset managers and technical teams. A strong report includes an executive risk summary, evidence-based findings, severity ranking, likely operational or CAPEX impact, recommended clarifications, red flag items, post-closing action priorities and questions for the seller or EPC contractor. Each finding should state what was checked, what evidence was available, what remains uncertain and what action is recommended. That structure helps commercial decision makers avoid overreacting to minor defects while still protecting the transaction from hidden technical exposure."
          }
        ]
      : [
          {
            heading: "Yatirimci Duzeyinde Data Room Incelemesi",
            content: "Yenilenebilir enerji teknik durum tespiti, mevcut kanitin kalitesiyle baslar. Data room; projenin nasil tasarlandigini, satin alindigini, devreye alindigini, isletildigini ve bakiminin nasil yapildigini gostermelidir. Oztoprak Enerji EPC sozlesmelerini, teknik sartnameleri, as-built dokumanlari, devreye alma formlarini, koruma dosyalarini, performans testlerini, SCADA verilerini, durus loglarini, garanti yazismalarini, O&M raporlarini ve sebeke baglanti dokumanlarini inceler. Eksik kayitlar sadece idari problem degildir; degerleme, garanti, CAPEX ve satin alma karari icin teknik risk sinyalidir."
          },
          {
            heading: "Performans, Emre Amadelik ve Gelir Riski",
            content: "Teknik durum tespiti teknik bulgulari ticari maruziyetle iliskilendirmelidir. HES varliklarinda su geliri, turbin-jenerator verimi, zorunlu duruslar, sedimentasyon sinyalleri, governor davranisi ve yuk tevzi kisitlari ayrilmali olarak incelenir. GES varliklarinda performans orani, inverter emre amadeligi, string kayiplari, kirlenme varsayimlari, clipping, kisinti ve O&M mudahele disiplini degerlendirilir. Amac uzun bir kusur listesi degil; gecmis uretimin tekrarlanabilir olup olmadigini, hangi kayiplarin yapisal, hangilerinin toparlanabilir oldugunu ve hangi risklerin fiyata veya kapanis sonrasi butceye etki edecegini aciklamaktir."
          },
          {
            heading: "EPC, Devreye Alma ve Teslim Riski",
            content: "Bir varlik ozet gostergelerde iyi gorunebilir ancak dokumantasyon icinde cozulmemis EPC riski tasiyabilir. Teknik durum tespiti; devreye alma kanitlarinin ekipman hazirligini kanitlayip kanitlamadigini, FAT ve SAT kayitlarinin saha kosullariyla uyumunu, NCR kapanislarinin muhendislik kanitiyla yapilip yapilmadigini ve teslim dokumanlarinin uzun vadeli isletme icin yeterli olup olmadigini kontrol eder. Enerjilendirme, senkronizasyon, koruma testleri, reaktif guc kabiliyeti, SCADA noktalari, alarm mantigi veya performans testleri zayif belgelenmisse alici belirsizlik devralir."
          },
          {
            heading: "Karar Vericiler Icin Ciktilar",
            content: "Son rapor yatirimci, finans kurumu, varlik yoneticisi ve teknik ekip tarafindan kullanilabilir olmalidir. Guclu bir rapor; yonetici risk ozeti, kanita dayali bulgular, siddet siralamasi, muhtemel operasyonel veya CAPEX etkisi, onerilen netlestirme sorulari, kirmizi bayraklar, kapanis sonrasi aksiyon oncelikleri ve satici veya EPC yuklenicisine yoneltilecek sorulari icerir. Her bulgu neyin incelendigini, hangi kanitin mevcut oldugunu, hangi belirsizligin kaldigini ve hangi aksiyonun onerildigini net bicimde soylemelidir."
          }
        ];
  }

  if (service.slug === "hpp-performance-analysis" || service.slug === "hes-performans-analizi") {
    return en
      ? [
          {
            heading: "Hydropower Loss Separation Method",
            content: "Useful HPP performance analysis separates losses before recommending action. A low generation month can be caused by water availability, dispatch restrictions, turbine efficiency loss, auxiliary system limitations, forced outages, sedimentation, trash rack losses, governor instability, reactive power constraints or operator procedures. Oztoprak Energy reviews monthly generation, hydrology context, unit availability, operating curves, SCADA trends, alarm history and outage records to separate recoverable technical loss from non-controllable resource variation. That separation is essential because the wrong diagnosis can lead to unnecessary CAPEX or missed operational improvements."
          },
          {
            heading: "Turbine, Governor and AGC Behavior",
            content: "Hydropower performance is not only a turbine issue. Unit response depends on the interaction between hydraulic conditions, wicket gate position, runner condition, generator loading, governor tuning, AGC setpoint tracking and grid dispatch expectations. The review looks for unstable load response, slow ramping, setpoint deviation, recurring alarms, abnormal vibration signals, cavitation indicators, reactive power limitations and protection-related trips. When available, operating data is compared with expected unit behavior to decide whether the next action should be testing, control tuning, maintenance, hydraulic inspection or operational procedure improvement."
          },
          {
            heading: "SCADA, Alarms and Outage Evidence",
            content: "Plant teams often know that performance is weak but lack a structured explanation. SCADA trends, alarms, trip logs and maintenance records provide the timeline. A performance review checks whether the same alarm precedes recurring outages, whether forced outage categories are accurate, whether auxiliary systems limit generation, whether manual operation bypasses normal control behavior and whether maintenance actions remove the root cause or only reset the symptom. This evidence-based method converts scattered operating history into a ranked action list that can be used by management, O&M teams and contractors."
          },
          {
            heading: "Recommended HPP Recovery Actions",
            content: "Recommended actions should be practical and staged. Typical actions include targeted unit performance testing, governor and AGC response review, trash rack and waterway inspection, cooling and auxiliary system checks, protection event review, alarm rationalization, O&M routine correction, spare parts prioritization and updated performance monitoring. The goal is to recover generation where possible, reduce avoidable trips, improve availability and give the owner enough evidence to decide whether a maintenance outage, contractor claim, control tuning or CAPEX intervention is justified."
          }
        ]
      : [
          {
            heading: "HES Kayiplarini Ayirma Yontemi",
            content: "Faydali bir HES performans analizi, aksiyon onermeden once kayiplari ayirir. Dusuk uretim; su geliri, yuk tevzi kisiti, turbin verim kaybi, yardimci sistem limitleri, zorunlu duruslar, sedimentasyon, izgara kayiplari, governor kararsizligi, reaktif guc kisitlari veya operator prosedurlerinden kaynaklanabilir. Oztoprak Enerji aylik uretim, hidroloji baglami, unit emre amadeligi, isletme egrileri, SCADA trendleri, alarm gecmisi ve durus kayitlarini birlikte inceler. Dogru ayrim yapilmazsa gereksiz CAPEX veya kacirilan operasyonel iyilestirme riski dogar."
          },
          {
            heading: "Turbin, Governor ve AGC Davranisi",
            content: "HES performansi sadece turbin konusu degildir. Unit tepkisi hidrolik kosullar, ayar kanadi pozisyonu, runner durumu, jenerator yuklenmesi, governor ayari, AGC set noktasi takibi ve sebeke yuk tevzi beklentilerinin birlikte davranisina baglidir. Inceleme kararsiz yuk tepkisi, yavas rampa, set noktasi sapmasi, tekrarlayan alarmlar, anormal titresim sinyalleri, kavitasyon gostergeleri, reaktif guc limitleri ve koruma kaynakli tripleri arar. Veri mevcutsa beklenen unit davranisiyla karsilastirma yapilir."
          },
          {
            heading: "SCADA, Alarm ve Durus Kaniti",
            content: "Saha ekipleri performansin zayif oldugunu cogu zaman bilir; fakat yapilandirilmis aciklama eksiktir. SCADA trendleri, alarmlar, trip loglari ve bakim kayitlari zaman cizgisini verir. Performans incelemesi ayni alarmin tekrarlayan duruslardan once gelip gelmedigini, zorunlu durus kategorilerinin dogru tutulup tutulmadigini, yardimci sistemlerin uretimi sinirlayip sinirlamadigini, manuel isletmenin normal kontrol davranisini baypas edip etmedigini ve bakim aksiyonlarinin kok nedeni mi yoksa belirtiyi mi ortadan kaldirdigini kontrol eder."
          },
          {
            heading: "Onerilen HES Toparlama Aksiyonlari",
            content: "Oneriler pratik ve asamali olmalidir. Tipik aksiyonlar hedefli unit performans testi, governor ve AGC tepki incelemesi, izgara ve su yolu kontrolu, sogutma ve yardimci sistem kontrolleri, koruma olay incelemesi, alarm rasyonalizasyonu, O&M rutini duzeltme, yedek parca onceliklendirme ve guncellenmis performans izleme olabilir. Amac toparlanabilir uretimi geri almak, onlenebilir tripleri azaltmak, emre amadeligi iyilestirmek ve isverene bakim durusu, yuklenici talebi, kontrol ayari veya CAPEX karari icin kanit saglamaktir."
          }
        ];
  }

  if (service.slug === "industrial-energy-cost-optimization" || service.slug === "endustriyel-enerji-maliyet-optimizasyonu") {
    return en
      ? [
          {
            heading: "Electricity Bill Analysis: Where the Cost Is Really Coming From",
            content: "Most industrial facilities pay more for electricity than necessary, but the cause is rarely obvious from a single bill line. Reactive power penalties, contract demand overruns, active energy tariff misalignment, time-of-use exposure and metering errors each behave differently and require different corrective actions. Oztoprak Energy reviews the last 12 months of consumption data, reactive power ratios, demand peaks, contracted power levels and tariff components to produce a structured cost breakdown. This analysis shows which cost drivers are controllable, what the savings potential is, and which actions have the fastest payback — before any equipment purchase or contract change is committed."
          },
          {
            heading: "Reactive Power Penalties and Compensation System Review",
            content: "Reactive power penalties are one of the most common and recoverable electricity cost problems for industrial facilities. A compensation panel that is undersized, incorrectly programmed, poorly maintained or affected by harmonics can fail to keep the power factor within the required range. The review checks the compensation panel capacity, switching response, control settings and harmonic environment. Where the existing system is inadequate, the review provides technical basis for upgrade decisions — right-sized, with protection for the harmonic context and realistic payback estimates rather than generic equipment specifications."
          },
          {
            heading: "Rooftop Solar Feasibility for Industrial Facilities",
            content: "For factories and commercial buildings with large roof areas and stable daytime electricity consumption, rooftop solar can significantly reduce grid electricity cost and penalty exposure. A sound feasibility study requires accurate consumption baseline analysis, roof condition and area assessment, shading evaluation, self-consumption ratio estimation, grid export constraints, connection upgrade requirements and realistic financial modeling. Oztoprak Energy prepares rooftop solar feasibility analyses that reflect actual operating patterns rather than generic production assumptions, so the investment case can be evaluated on real numbers before any contractor or equipment commitment is made."
          },
          {
            heading: "Contract Power, Demand Charges and Tariff Optimization",
            content: "Industrial electricity contracts often have misaligned demand levels — either overcontracted, leading to avoidable capacity charges, or undercontracted, leading to penalty exposure from demand overruns. Tariff eligibility for open market supply, time-of-use rates, reactive power allowances and consumption thresholds can also create savings opportunities that are not visible in standard bill review. The analysis looks at whether the contracted power level matches actual demand behavior, whether a different tariff structure would reduce total cost, and whether open market supply eligibility provides a lower blended rate for the facility's consumption profile."
          }
        ]
      : [
          {
            heading: "Elektrik Faturası Analizi: Maliyet Gerçekte Nereden Geliyor",
            content: "Çoğu sanayi tesisi gerekenden fazla elektrik öder; ancak neden, tek bir fatura kaleminden anlaşılamaz. Reaktif güç cezaları, sözleşme gücü aşımı, aktif enerji tarife uyumsuzluğu, zaman dilimine bağlı tüketim açığı ve sayaç hataları farklı mekanizmalarla çalışır ve farklı düzeltici aksiyon gerektirir. Öztoprak Enerji son 12 aylık tüketim verisini, reaktif güç oranlarını, talep zirvelerini, sözleşme gücü düzeylerini ve tarife bileşenlerini inceleyerek yapılandırılmış bir maliyet dağılımı hazırlar. Bu analiz hangi maliyet kalemlerinin kontrol edilebilir olduğunu, tasarruf potansiyelini ve hangi aksiyonun en hızlı geri dönüşü sağlayacağını gösterir."
          },
          {
            heading: "Reaktif Güç Cezası ve Kompanzasyon Sistemi İncelemesi",
            content: "Reaktif güç cezaları, sanayi tesislerinde en yaygın ve en kolay telafi edilebilir elektrik maliyeti sorunlarından biridir. Yetersiz kapasiteli, hatalı programlanmış, kötü bakımlı veya harmonik bozunum etkisindeki bir kompanzasyon panosu güç faktörünü gerekli aralıkta tutamaz. İnceleme kompanzasyon panosu kapasitesini, anahtarlama tepkisini, kontrol ayarlarını ve harmonik ortamı değerlendirir. Mevcut sistem yetersizse yükseltme kararı için teknik gerekçe sağlanır; genel ekipman önerisi yerine harmonik bağlamına uygun, gerçekçi geri ödeme hesaplı boyutlandırma yapılır."
          },
          {
            heading: "Sanayi Tesisleri İçin Çatı GES Fizibilite",
            content: "Geniş çatı alanı ve kararlı gündüz elektrik tüketimi olan fabrikalar ve ticari binalar için çatı güneş enerjisi sistemi şebeke elektrik maliyetini ve ceza riskini önemli ölçüde azaltabilir. Sağlam bir fizibilite çalışması gerçek tüketim profili analizi, çatı durumu ve alan değerlendirmesi, gölgelenme analizi, öz tüketim oranı tahmini, şebeke ihracat kısıtları, bağlantı yükseltme gereksinimleri ve gerçekçi finansal model gerektirir. Öztoprak Enerji, genel üretim varsayımları yerine gerçek işletme verilerine dayalı çatı GES fizibilite analizleri hazırlar; böylece herhangi bir yüklenici veya ekipman taahhüdü verilmeden önce yatırım kararı gerçek rakamlara dayanır."
          },
          {
            heading: "Sözleşme Gücü, Talep Fazlası ve Tarife Optimizasyonu",
            content: "Sanayi elektrik sözleşmeleri çoğunlukla uyumsuz talep düzeyleri içerir. Fazla sözleşme yapılmışsa gereksiz kapasite bedeli, az sözleşme yapılmışsa talep aşımı cezası oluşur. Serbest piyasa uygunluğu, zaman dilimine dayalı tarife, reaktif güç toleransı ve tüketim eşikleri de standart fatura incelemesinde görünmeyen tasarruf fırsatları yaratabilir. Analiz sözleşme gücünün gerçek talep davranışıyla uyumunu, farklı bir tarife yapısının toplam maliyeti düşürüp düşürmeyeceğini ve serbest piyasa uygunluğunun tesisin tüketim profili için daha düşük kWh maliyeti sağlayıp sağlamayacağını değerlendirir."
          }
        ];
  }

    if (service.slug === "owners-engineering" || service.slug === "isveren-muhendisligi") {
    return en
      ? [
          {
            heading: "EPC Design Review and Constructability Control",
            content: "Owner's engineering should challenge whether EPC design outputs are buildable, testable and operable. Drawings, specifications, single-line diagrams, control narratives, equipment lists, protection philosophy, civil-electromechanical interfaces and grid connection assumptions are reviewed for gaps that can later affect procurement, installation, commissioning or operations. The value is not only detecting errors; it is forcing technical clarity before the contractor's assumptions become site delays or handover disputes."
          },
          {
            heading: "FAT, SAT, ITP and NCR Discipline",
            content: "FAT, SAT, ITP and NCR records are the backbone of quality evidence. A mature owner's engineering process checks whether factory tests prove equipment readiness, whether site acceptance tests match actual installation conditions, whether inspection and test plans include meaningful hold points and whether non-conformances are closed with evidence rather than administrative notes. This discipline protects the owner from accepting equipment, systems or documentation that look complete but remain technically unresolved."
          },
          {
            heading: "Commissioning Readiness and Handover Controls",
            content: "Before energization or synchronization, the owner needs confidence that mechanical completion, electrical testing, protection files, SCADA points, alarm lists, spare parts, training, O&M manuals, punch-list status and test procedures are ready. Handover control is more than collecting documents. It verifies that the plant can be operated, maintained, troubleshot and audited after the EPC team leaves. Strong handover controls reduce early operating failures and protect warranty discussions."
          }
        ]
      : [
          {
            heading: "EPC Tasarim Inceleme ve Uygulanabilirlik Kontrolu",
            content: "Isveren muhendisligi, EPC tasarim ciktisinin insa edilebilir, test edilebilir ve isletilebilir olup olmadigini sorgulamalidir. Cizimler, sartnameler, tek hat semalari, kontrol anlatimlari, ekipman listeleri, koruma felsefesi, insaat-elektromekanik arayuzleri ve sebeke baglanti varsayimlari; satin alma, montaj, devreye alma veya isletme uzerinde etkili olabilecek bosluklar acisindan incelenir."
          },
          {
            heading: "FAT, SAT, ITP ve NCR Disiplini",
            content: "FAT, SAT, ITP ve NCR kayitlari kalite kanitinin omurgasidir. Olgun bir isveren muhendisligi sureci; fabrika testlerinin ekipman hazirligini kanitlayip kanitlamadigini, saha kabul testlerinin gercek montaj kosullariyla uyumunu, muayene ve test planlarinin anlamli durdurma noktalarina sahip olup olmadigini ve uygunsuzluklarin idari not yerine kanitla kapatilip kapatilmadigini kontrol eder."
          },
          {
            heading: "Devreye Alma Hazirligi ve Teslim Kontrolleri",
            content: "Enerjilendirme veya senkronizasyon oncesinde isveren; mekanik tamamlama, elektrik testleri, koruma dosyalari, SCADA noktalari, alarm listeleri, yedek parca, egitim, O&M kitaplari, punch-list durumu ve test prosedurlerinin hazir oldugundan emin olmalidir. Teslim kontrolu sadece dokuman toplamak degildir; santralin EPC ekibi ayrildiktan sonra isletilebilir, bakimi yapilabilir ve ariza analizi uygulanabilir oldugunu dogrular."
          }
        ];
  }


  if (service.slug === "hydropower-consulting" || service.slug === "hes-danismanligi") {
    return en
      ? [
          {
            heading: "Hydropower Project Development: Feasibility to Financial Close",
            content: "Hydropower consulting covers the full development arc: preliminary resource screening, hydrology interpretation, site selection, flow duration curve analysis, conceptual design, environmental permitting, grid connection strategy, EPC scope definition and financial model support. Each stage produces evidence that either builds or narrows the investment case. Oztoprak Energy positions the advisory at the decision boundary — the points where incomplete hydrology, weak grid connection clarity, unresolved water rights or premature equipment commitment create the most project risk. The goal is to give the developer and investor a technically grounded view before CAPEX commitments are locked."
          },
          {
            heading: "Hydrology Analysis and Water Right Assessment",
            content: "Hydropower energy yield depends on flow duration, seasonal variability, drought-year performance and how the installed capacity is matched to the usable flow envelope. Reliable hydrology requires gauge records, regional comparison, flow duration curve construction, minimum ecological flow obligation, sedimentation assessment and dry-year sensitivity analysis. Water rights, intake license conditions, irrigation priority obligations and downstream user conflicts are also technical inputs. Weak hydrology or unclear water rights create production risk that surfaces in lender due diligence, insurance assessments and post-commissioning performance gaps."
          },
          {
            heading: "Electromechanical Equipment Selection and Specification",
            content: "Turbine type, runner configuration, operating head range, design flow, generator topology, switchgear arrangement, transformer specification, governor control strategy and auxiliary system design must all be matched to the site hydrology and grid interface requirements. Incorrect design flow selection leaves capacity on the table or overloads the turbine in peak flow events. Weak governor specification creates frequency response problems. Oztoprak Energy reviews EPC technical specifications and equipment proposals to check whether the electromechanical package reflects site reality or relies on generic design assumptions that will require expensive corrections during commissioning."
          },
          {
            heading: "Grid Connection, Protection Philosophy and Grid Code Compliance",
            content: "Grid connection is consistently the most underestimated technical risk in hydropower development. Connection voltage level, feeder capacity, line losses, reactive power requirements, protection coordination with the network operator, power quality limits, anti-islanding requirements, grid code compliance obligations and connection agreement conditions shape the technical specification and commissioning scope. Connection delays, reactive power limitation orders, curtailment events and protection-related trips are avoidable if the grid interface is designed with field-level clarity rather than generic single-line assumptions. Early grid connection advisory reduces design changes at energization stage and generation losses from dispatch constraints after commissioning."
          }
        ]
      : [
          {
            heading: "HES Proje Geliştirme: Fizibilite'den Finansal Kapanışa",
            content: "HES danışmanlığı tam geliştirme sürecini kapsar: ön kaynak taraması, hidroloji yorumu, saha seçimi, akış süre eğrisi analizi, kavramsal tasarım, çevresel izinleme, şebeke bağlantı stratejisi, EPC kapsam tanımı ve finansal model desteği. Her aşama yatırım kararını pekiştiren veya daraltan kanıt üretir. Öztoprak Enerji danışmanlığı karar sınırında konumlandırır: eksik hidroloji, belirsiz şebeke bağlantısı, çözümsüz su hakları veya erken ekipman taahhütlerinin en fazla proje riski yarattığı noktalarda. Amaç CAPEX taahhütleri kilitlenmeden önce geliştirici ve yatırımcıya teknik temele dayalı görünüm sağlamaktır."
          },
          {
            heading: "Hidroloji Analizi ve Su Hakkı Değerlendirmesi",
            content: "HES enerji verimi akış süresi, mevsimsel değişkenlik, kuraklık yılı performansı ve kurulu kapasitenin kullanılabilir akış zarfıyla eşleştirilmesine bağlıdır. Güvenilir hidroloji için ölçüm kayıtları, bölgesel karşılaştırma, akış süre eğrisi oluşturma, minimum ekolojik akış yükümlülüğü, sedimentasyon değerlendirmesi ve kuraklık yılı duyarlılık analizi gerekir. Su hakları, alım lisans koşulları, sulama öncelik yükümlülükleri ve mansap kullanıcı çatışmaları da teknik girdi niteliğindedir. Zayıf hidroloji veya belirsiz su hakları kredi teknik durum tespitinde ve devreye alma sonrası performans açığında ortaya çıkan üretim riski yaratır."
          },
          {
            heading: "Elektromekanik Ekipman Seçimi ve Teknik Özellik Belirleme",
            content: "Türbin tipi, runner konfigürasyonu, işletme düşüsü aralığı, tasarım debisi, jeneratör topolojisi, şalt düzeni, trafo teknik özellikleri, governor kontrol stratejisi ve yardımci sistem tasarımının tümü saha hidrolojisine ve şebeke arayüzü gereksinimlerine göre eşleştirilmelidir. Yanlış tasarım debisi seçimi kapasiteyi gereksiz sınırlar ya da pik akış olaylarında türbini aşırı yükler. Zayıf governor spesifikasyonu frekans tepkisi sorunları yaratır. Öztoprak Enerji EPC teknik şartnamelerini ve ekipman tekliflerini; elektromekanik paketin saha gerçekliğini mi yoksa devreye almada pahalı düzeltme gerektiren genel tasarım varsayımlarını mı yansıttığını kontrol ederek inceler."
          },
          {
            heading: "Şebeke Bağlantısı, Koruma Felsefesi ve Şebeke Kodu Uyumu",
            content: "Şebeke bağlantısı HES geliştirmede en az tahmin edilen teknik risktir. Bağlantı gerilim seviyesi, besleme kapasitesi, hat kayıpları, reaktif güç gereksinimleri, şebeke işleticisiyle koruma koordinasyonu, güç kalitesi limitleri, ada çalışma önleme gereksinimleri ve şebeke kodu uyum yükümlülükleri teknik şartnameyi ve devreye alma kapsamını şekillendirir. Erken şebeke bağlantı danışmanlığı enerji aşamasındaki tasarım değişikliği ve devreye alma sonrası yük tevzi kısıtından kaynaklanan üretim kayıpları riskini azaltır."
          }
        ];
  }

  if (service.slug === "solar-energy-consulting" || service.slug === "ges-danismanligi") {
    return en
      ? [
          {
            heading: "Solar Resource Assessment and Energy Yield Modeling",
            content: "A credible solar energy yield estimate requires more than a GHI map. Oztoprak Energy reviews satellite irradiance datasets, local measurement data where available, horizon shading profiles, albedo conditions, typical meteorological year construction, soiling assumptions, degradation rates, loss modeling methodology and inter-annual variability. The energy yield model must reflect actual site conditions — tilt, azimuth, row spacing, backtracking settings, clipping ratio and inverter loading — not default software assumptions. Yield estimates that carry weak meteorological support or undisclosed assumptions become liabilities in lender due diligence, insurance assessments and post-commissioning performance gap disputes."
          },
          {
            heading: "Inverter Selection, String Architecture and DC/AC Ratio",
            content: "Solar plant electrical design decisions — central versus string inverters, DC/AC ratio, string configuration, cable sizing, combiner boxes, DC fusing, grounding strategy, transformer topology and medium-voltage arrangement — have long-term performance and O&M consequences. An aggressive DC/AC ratio increases clipping but also increases low-irradiance generation; the optimal point depends on the irradiance distribution, grid export limits and dispatch strategy. String architecture determines troubleshooting granularity and mismatch loss risk. Oztoprak Energy reviews electrical design proposals to verify that the design logic matches the site-specific financial model assumptions and that O&M access, safety clearances and metering points are planned for the plant's full operating life."
          },
          {
            heading: "Grid Connection, Protection and Power Quality Requirements",
            content: "Solar plant grid connection requirements — connection voltage, short-circuit contribution, reactive power capability, ride-through obligations, anti-islanding, harmonic distortion limits, protection relay settings and SCADA telemetry interface — must be agreed with the grid operator early and translated accurately into the plant design. Reactive power capability and voltage regulation obligations affect inverter selection, transformer sizing and control settings. Power quality non-compliance after commissioning is difficult and expensive to correct. Oztoprak Energy reviews connection agreement conditions, technical specification responses and commissioning test plans to confirm that the design and protection settings will satisfy both grid operator requirements and long-term plant operations stability."
          },
          {
            heading: "O&M Strategy, Soiling and Long-Term Performance Management",
            content: "Solar plant long-term performance is primarily determined by how soiling, degradation, inverter availability, string fault response and vegetation management are handled. A soiling strategy that relies on rainfall alone in a dust-exposed location can cause performance ratio losses that eliminate the margin between project IRR and financing cost. Inverter availability targets require spare parts planning and service response agreements that the O&M model must cost realistically. Oztoprak Energy helps owners structure O&M performance guarantees, KPI frameworks, monitoring system specifications and corrective maintenance response criteria that are technically defensible and commercially meaningful."
          }
        ]
      : [
          {
            heading: "Güneş Kaynağı Değerlendirmesi ve Enerji Verimi Modellemesi",
            content: "Güvenilir güneş enerji verimi tahmini yalnızca GHI haritasından ibaret değildir. Öztoprak Enerji uydu ışınım veri setlerini, mevcut yerel ölçüm verilerini, ufuk gölgelenme profillerini, albedo koşullarını, tipik meteorolojik yıl yapısını, kirlenme varsayımlarını, bozulma oranlarını, kayıp modelleme metodolojisini ve yıllar arası değişkenliği inceler. Enerji verimi modeli gerçek saha koşullarını yansıtmalıdır: eğim, azimut, sıra aralığı, backtracking ayarları, kırpma oranı ve invertör yükleme. Zayıf meteorolojik desteğe dayanan verim tahminleri kredi teknik durum tespiti, sigorta değerlendirmesi ve devreye alma sonrası performans açığı anlaşmazlıklarında yükümlülüğe dönüşür."
          },
          {
            heading: "İnvertör Seçimi, String Mimarisi ve DC/AC Oranı",
            content: "Güneş santrali elektrik tasarım kararları — merkezi veya string invertör, DC/AC oranı, string konfigürasyonu, kablo boyutlandırma, kombiner kutular, DC sigortalama, topraklama stratejisi, trafo topolojisi ve orta gerilim düzeni — uzun vadeli performans ve O&M sonuçları doğurur. Agresif DC/AC oranı kırpmayı artırır ama aynı zamanda düşük ışınımdaki üretimi de iyileştirir; optimum nokta ışınım dağılımına, şebeke ihracat limitine ve yük tevzi stratejisine bağlıdır. Öztoprak Enerji elektrik tasarım tekliflerini; tasarım mantığının sahaya özgü finansal model varsayımlarıyla uyumunu ve O&M erişiminin tüm işletme ömrü için planlanıp planlanmadığını doğrulayarak inceler."
          },
          {
            heading: "Şebeke Bağlantısı, Koruma ve Güç Kalitesi Gereksinimleri",
            content: "Güneş santrali şebeke bağlantısı gereksinimleri — bağlantı gerilimi, kısa devre katkısı, reaktif güç kabiliyeti, ride-through yükümlülükleri, ada çalışma önleme, harmonik bozulma limitleri, koruma rölesi ayarları ve SCADA telemetri arayüzü — şebeke işleticisiyle erken aşamada mutabık kalınmalı ve santral tasarımına doğru aktarılmalıdır. Reaktif güç kabiliyeti ve gerilim düzenleme yükümlülükleri invertör seçimini, trafo boyutlandırmasını ve kontrol ayarlarını etkiler. Devreye alma sonrasında güç kalitesi uyumsuzluğunu düzeltmek güç ve pahalıdır. Öztoprak Enerji bağlantı anlaşması koşullarını ve devreye alma test planlarını; tasarım ve koruma ayarlarının şebeke işleticisi gereksinimlerini karşılayıp karşılamayacağını teyit ederek inceler."
          },
          {
            heading: "O&M Stratejisi, Kirlenme Yönetimi ve Uzun Vadeli Performans",
            content: "Güneş santrali uzun vadeli performansı öncelikle kirlenme, bozulma, invertör emre amadeliği, string hata tepkisi ve bitki örtüsü yönetiminin nasıl ele alındığına bağlıdır. Toz maruziyetinin yüksek olduğu bir konumda yalnızca yağışa güvenen kirlenme stratejisi proje IRR'si ile finansman maliyeti arasındaki marjı ortadan kaldıran performans oranı kayıplarına yol açabilir. İnvertör emre amadeliği hedefleri O&M modelinin gerçekçi maliyetlendirmesi gereken yedek parça planlaması ve servis müdahale anlaşmalarını gerektirir. Öztoprak Enerji işverenlerin teknik olarak savunulabilir O&M performans garantileri, KPI çerçeveleri ve düzeltici bakım müdahale kriterleri oluşturmalarına yardımcı olur."
          }
        ];
  }

  if (service.slug === "epc-technical-advisory" || service.slug === "epc-teknik-danismanlik-hizmeti") {
    return en
      ? [
          {
            heading: "EPC Contract Technical Scope, Interface Definition and Risk Allocation",
            content: "EPC contract risk lives in the interface definitions. Civil completion criteria, electromechanical installation readiness, grid connection ownership, protection settings responsibility, commissioning acceptance criteria, performance test methodology, final acceptance milestone and handover document completeness must all have unambiguous technical descriptions. Ambiguous scope boundaries become delay claims, cost variations and handover disputes. Oztoprak Energy reviews EPC technical scope documents, interface risk matrices, schedule logic and acceptance test definitions to identify gaps where risk is implicitly carried by the owner or where the contractor obligations are not technically testable — before those gaps become contract events."
          },
          {
            heading: "Design Review, Submittals and Engineering Change Management",
            content: "EPC design review is the owner's technical gate for confirming that the contractor's design choices are buildable, compliant, operable and maintainable — and that deviations from the specification are evaluated before they become field installations. Oztoprak Energy reviews design submittals across civil, electromechanical, electrical, control, protection and SCADA disciplines, checking alignment between design assumptions, specifications, equipment datasheet compliance and site conditions. Engineering change management discipline — how changes are proposed, evaluated, documented and approved — determines whether the as-built plant matches the designed plant and whether change costs are supportable under contract."
          },
          {
            heading: "Construction Quality, ITP Hold Points and NCR Management",
            content: "Construction quality is controlled through inspection and test plan hold points, witness and review activities, non-conformance tracking and material certification. An ITP that only covers visual inspections does not adequately control installation quality for electrical, protection or control systems. Hold points routinely released without verification create documentation gaps that surface in commissioning, warranty discussions or refinancing due diligence. Oztoprak Energy supports owner-side ITP development, site inspection representation, NCR documentation review and closure verification — ensuring quality evidence is built during construction rather than retrospectively assembled before handover."
          },
          {
            heading: "Commissioning Readiness, Acceptance Testing and Final Handover",
            content: "Commissioning readiness means all prerequisite systems, documentation, test procedures and personnel are in place before energization or synchronization is attempted. Pre-commissioning checklists, energization procedures, protection relay commissioning records, FAT and SAT evidence, punch-list status, spare parts inventory, O&M training records and handover document completeness must all be confirmed before the owner accepts generation risk. Performance acceptance testing must use agreed methodology, measurement accuracy and correction factor conventions. Final handover should transfer not just physical assets but also all technical knowledge required for safe, reliable and efficient long-term plant operations."
          }
        ]
      : [
          {
            heading: "EPC Sözleşme Teknik Kapsamı, Arayüz Tanımı ve Risk Dağılımı",
            content: "EPC sözleşme riski arayüz tanımlarında yaşar. İnşaat tamamlama kriterleri, elektromekanik montaj hazırlığı, şebeke bağlantısı sahipliği, koruma ayarları sorumluluğu, devreye alma kabul kriterleri, performans test metodolojisi, nihai kabul dönüm noktası ve teslim belge tamlığının tümünün açık teknik tanımları olmalıdır. Belirsiz kapsam sınırları gecikme taleplerini, maliyet değişikliklerini ve teslim anlaşmazlıklarını doğurur. Öztoprak Enerji EPC teknik kapsam belgelerini, arayüz risk matrislerini, takvim mantığını ve kabul testi tanımlarını; riskin örtük olarak işverende kaldığı boşlukları sözleşme olayına dönüşmeden tespit ederek inceler."
          },
          {
            heading: "Tasarım İncelemesi, Teknik Sunumlar ve Mühendislik Değişiklik Yönetimi",
            content: "EPC tasarım incelemesi yüklenicinin tasarım seçimlerinin inşa edilebilir, uyumlu, işletilebilir ve bakımı yapılabilir olduğunu doğrulayan; teknik şartnameden sapmaların saha montajına dönüşmeden değerlendirilmesini sağlayan işveren teknik geçişidir. Öztoprak Enerji inşaat, elektromekanik, elektrik, kontrol, koruma ve SCADA disiplinlerinde tasarım sunumlarını; tasarım varsayımları, şartnameler ve saha koşulları arasındaki uyumu kontrol ederek inceler. Mühendislik değişiklik yönetimi disiplini as-built santralin tasarlanan santrale uyumunu ve değişiklik maliyetlerinin sözleşme kapsamında desteklenebilirliğini belirler."
          },
          {
            heading: "İnşaat Kalitesi, ITP Durdurma Noktaları ve NCR Yönetimi",
            content: "İnşaat kalitesi muayene ve test planı durdurma noktaları, tanıklık ve inceleme faaliyetleri, uygunsuzluk takibi ve malzeme sertifikasyonu aracılığıyla kontrol edilir. Yalnızca görsel muayeneyi kapsayan bir ITP elektrik, koruma veya kontrol sistemleri için montaj kalitesini yeterince kontrol edemez. Rutin olarak doğrulama yapılmadan serbest bırakılan durdurma noktaları devreye alma ve teknik durum tespitinde ortaya çıkan dokümantasyon boşlukları yaratır. Öztoprak Enerji işveren taraflı ITP geliştirme, saha muayene temsili, NCR belgesi incelemesi ve kapanış doğrulamasını destekler; teslim öncesinde geriye dönük değil inşaat sırasında kanıt oluşturulmasını sağlar."
          },
          {
            heading: "Devreye Alma Hazırlığı, Kabul Testi ve Final Teslim",
            content: "Devreye alma hazırlığı tüm ön koşul sistemlerin, belgelerin, test prosedürlerinin ve personelin enerjilendirme veya senkronizasyon girişiminden önce hazır olduğu anlamına gelir. Devreye alma öncesi kontrol listeleri, koruma rölesi kayıtları, FAT ve SAT kanıtları, punch-list durumu, yedek parça envanteri, O&M eğitim kayıtları ve teslim belgesi tamlığı işveren üretim riskini kabul etmeden önce doğrulanmalıdır. Performans kabul testi mutabık kalınmış metodoloji ve ölçüm doğruluğunu kullanmalıdır. Final teslim yalnızca fiziksel varlıkları değil güvenli, güvenilir ve verimli uzun vadeli santral işletmesi için gerekli tüm teknik bilgiyi aktarmalıdır."
          }
        ];
  }

  if (service.slug === "technical-audits-existing-power-plants" || service.slug === "mevcut-santraller-icin-teknik-denetim") {
    return en
      ? [
          {
            heading: "On-Site Audit Methodology: Evidence Collection and Risk Classification",
            content: "A credible technical audit of an existing power plant begins with evidence collection protocol, not a generic checklist. The audit scope is defined by the owner's decision: pre-acquisition assessment, refinancing technical review, post-failure root cause investigation, warranty claim support or periodic safety audit. Evidence collected during site inspection is cross-referenced with design documents, commissioning records, O&M logs, protection settings files, SCADA trend exports, maintenance work orders and contractor correspondence. Findings are classified by severity: safety-critical, generation-impacting, reliability-risk, compliance-gap and monitoring-priority. That classification drives the action plan structure and allows the owner to prioritize resources without overreacting to cosmetic observations."
          },
          {
            heading: "Mechanical and Civil Structure Condition Assessment",
            content: "For hydropower plants, the audit covers penstock condition, turbine runner and wicket gate wear, bearing state, seal conditions, cooling system performance, draft tube flow patterns, trash rack blocking frequency and cavitation observation records. Civil structure integrity checks include dam body, headworks, forebay and powerhouse structural condition, crack monitoring, drainage system function and settlement indicators. For solar plants, the assessment covers module mounting structure integrity, ground anchoring, tracker mechanism condition, cable management and physical damage patterns. Each finding is evaluated not as a standalone defect but as an indicator of maintenance maturity, operational discipline and long-term reliability trajectory."
          },
          {
            heading: "Electrical, Protection and SCADA System Review",
            content: "Protection relay settings, calibration records and protection coordination studies must be current, documented and aligned with network operator requirements. Out-of-date relay settings, missing protection test records or coordination gaps that developed after a transformer change or grid topology modification create both safety and compliance risk. SCADA system review covers alarm rationalization, analog signal calibration, data historian accuracy and remote access security. Metering accuracy — class specification, calibration interval compliance, test records and potential transformer ratio verification — directly affects revenue and is a frequent audit finding. Oztoprak Energy checks the gap between protection and metering documentation on paper and the actual configuration operating in the field."
          },
          {
            heading: "O&M Maturity Assessment and Improvement Roadmap",
            content: "O&M maturity determines whether a plant's technical condition improves, holds steady or slowly degrades between major inspections. The maturity assessment reviews preventive maintenance plan completeness, actual maintenance execution discipline, outage planning and scheduling quality, spare parts inventory adequacy, contractor management scope, work permit system application and incident reporting quality. Low O&M maturity is rarely visible from generation statistics alone — it becomes visible in the accumulation of deferred maintenance, the inability to explain recurring alarms and the gap between planned and actual maintenance activities. The improvement roadmap produced by the audit is sequenced by safety priority, generation impact, implementation cost and required organizational change."
          }
        ]
      : [
          {
            heading: "Saha Denetimi Metodolojisi: Kanıt Toplama ve Risk Sınıflandırması",
            content: "Mevcut bir enerji santralinin güvenilir teknik denetimi genel kontrol listesiyle değil kanıt toplama protokolüyle başlar. Denetim kapsamı işverenin kararına göre tanımlanır: satın alma öncesi değerlendirme, refinansman teknik incelemesi, arıza sonrası kök neden araştırması, garanti talebi desteği veya periyodik güvenlik denetimi. Saha incelemesi sırasında toplanan kanıtlar tasarım belgeleri, devreye alma kayıtları, O&M logları, koruma ayar dosyaları, SCADA trend dışa aktarımları ve bakım iş emirleriyle çapraz referanslanır. Bulgular güvenlik kritik, üretim etkili, güvenilirlik riski, uyum açığı ve izleme öncelikli olarak sınıflandırılır. Bu sınıflandırma aksiyon planı yapısını belirler ve işverenin kaynakları doğru önceliklendirmesini sağlar."
          },
          {
            heading: "Mekanik ve İnşaat Yapısı Durum Değerlendirmesi",
            content: "Hidroelektrik santrallerde denetim cebri boru durumunu, türbin runner ve ayar kanadı aşınmasını, yatak durumunu, salmastra koşullarını, soğutma sistemi performansını, emme borusu akış düzenini, ızgara tıkanma sıklığını ve kavitasyon gözlem kayıtlarını kapsar. İnşaat yapısı bütünlük kontrolleri baraj gövdesini, su alma yapısını, ön havuzu ve santral binası yapısal durumunu, çatlak izlemeyi ve drenaj sistemi işlevini içerir. Güneş santrallerinde değerlendirme modül montaj yapısı bütünlüğünü, zemin ankrajını, tracker mekanizma durumunu ve fiziksel hasar düzenlerini kapsar. Her bulgu bağımsız kusur değil bakım olgunluğu ve uzun vadeli güvenilirlik yörüngesinin göstergesi olarak değerlendirilir."
          },
          {
            heading: "Elektrik, Koruma ve SCADA Sistemi İncelemesi",
            content: "Koruma rölesi ayarları, kalibrasyon kayıtları ve koruma koordinasyon etüdleri güncel, belgelenmiş ve şebeke işleticisi gereksinimleriyle uyumlu olmalıdır. Güncel olmayan röle ayarları, eksik koruma test kayıtları veya trafo değişikliği sonrası gelişen koordinasyon boşlukları hem güvenlik hem uyum riski yaratır. SCADA sistem incelemesi alarm rasyonalizasyonunu, analog sinyal kalibrasyonunu, veri tarihçisi doğruluğunu ve uzaktan erişim güvenliğini kapsar. Sayaç doğruluğu geliri doğrudan etkiler ve sık karşılaşılan denetim bulgusudur. Öztoprak Enerji kağıt üzerindeki koruma ve sayaç belgesiyle sahada gerçekte çalışan konfigürasyon arasındaki boşluğu kontrol eder."
          },
          {
            heading: "O&M Olgunluğu Değerlendirmesi ve İyileştirme Yol Haritası",
            content: "O&M olgunluğu santralin teknik durumunun büyük muayeneler arasında iyileşip iyileşmediğini, sabit kalıp kalmadığını veya yavaşça bozulup bozulmadığını belirler. Olgunluk değerlendirmesi önleyici bakım planı tamlığını, gerçek bakım uygulama disiplinini, duruş planlama kalitesini, yedek parça envanteri yeterliliğini ve olay raporlama kalitesini inceler. Düşük O&M olgunluğu nadiren üretim istatistiklerinden görünür; ertelenmiş bakım birikiminde ve tekrarlayan alarmları açıklayamamada ortaya çıkar. Denetimin ürettiği iyileştirme yol haritası güvenlik önceliği, üretim etkisi, uygulama maliyeti ve gerekli organizasyonel değişime göre sıralanır."
          }
        ];
  }

  if (service.slug === "power-plant-commissioning" || service.slug === "enerji-santrali-devreye-alma") {
    return en
      ? [
          {
            heading: "Pre-Commissioning Readiness: What Must Be Resolved Before First Energization",
            content: "Commissioning failures at first energization are expensive and reputationally damaging. The most common causes are not equipment defects — they are preparation gaps: protection relay settings not verified against the coordination study, SCADA I/O list not reconciled with installed signals, mechanical punch-list items still open, grid operator FAT evidence not accepted, auxiliary power systems not fully commissioned and testing documentation not available at the switchyard. Oztoprak Energy supports pre-commissioning readiness reviews that systematically check whether civil, electromechanical, electrical, control, protection, auxiliary and grid interface systems are genuinely ready — before the first energization attempt creates a safety event, equipment damage or significant schedule regression."
          },
          {
            heading: "Protection, Control and SCADA Commissioning",
            content: "Protection relay commissioning requires secondary injection testing, coordination verification, trip circuit continuity checks and network operator witness acceptance. Missing or poorly documented protection commissioning is a persistent audit finding that affects both safety and grid compliance. Control system commissioning requires logic verification, interlock testing, operator display review and alarm rationalization before load is applied. SCADA commissioning requires I/O verification, analog signal calibration, data historian startup, remote access testing and telemetry signal acceptance by the network operator. Each of these streams creates documentation that becomes the plant's baseline evidence for future O&M troubleshooting, protection review and regulatory audits."
          },
          {
            heading: "Synchronization, Load Testing and Performance Run Acceptance",
            content: "Synchronization requires confirmed voltage, frequency, phase angle and phase sequence matching, with automatic synchronizer function verified and manual sync backup confirmed. Load testing must follow a staged progression — light load stability check, governor response verification, reactive power capability test, load rejection test, AVR response check and full-load run — before the performance run begins. The performance run acceptance protocol must define measurement method, correction factors, ambient condition limits, data averaging period and minimum run duration. Ambiguous performance run acceptance criteria create disputes between owner and EPC contractor at the most commercially sensitive moment of the project — when the generation meter starts running but the commercial milestone is not yet confirmed."
          },
          {
            heading: "Commissioning Documentation, Punch-List Closure and Handover Evidence",
            content: "Commissioning documentation is the technical foundation for everything that follows: O&M, warranty claims, protection updates, insurance assessments, performance disputes and regulatory audits. Every test must have a date-stamped, signed, revision-controlled record. Punch-list closure must be evidence-based, not administrative. Open items carried past handover must be listed with priority, responsibility and completion date, reviewed by the owner with full understanding of their operational and safety implications. The handover evidence package that leaves with the EPC team is the last moment to capture knowledge that was obvious on site but was never written down — and that knowledge gap is what creates the first year of unexplained operational problems."
          }
        ]
      : [
          {
            heading: "Devreye Alma Öncesi Hazırlık: İlk Enerjilendirmeden Önce Çözülmesi Gerekenler",
            content: "İlk enerjilendirmede yaşanan devreye alma arızaları pahalı ve itibar zedeleyicidir. En yaygın nedenler ekipman kusuru değil hazırlık boşluklarıdır: koordinasyon etüdüne göre doğrulanmamış koruma rölesi ayarları, kurulu sinyallerle uzlaştırılmamış SCADA G/Ç listesi, hala açık mekanik punch-list kalemleri, şebeke işleticisinin kabul etmediği FAT kanıtları ve tam devreye alınmamış yardımci güç sistemleri. Öztoprak Enerji inşaat, elektromekanik, elektrik, kontrol, koruma, yardımci ve şebeke arayüz sistemlerinin gerçekten hazır olup olmadığını sistematik biçimde kontrol eden devreye alma öncesi hazırlık incelemelerini destekler."
          },
          {
            heading: "Koruma, Kontrol ve SCADA Devreye Alma",
            content: "Koruma rölesi devreye alması ikincil enjeksiyon testi, koordinasyon doğrulaması, trip devresi süreklilik kontrolleri ve şebeke işleticisi tanıklık kabulü gerektirir. Eksik veya zayıf belgelenmiş koruma devreye alması hem güvenlik hem şebeke uyumunu etkileyen kalıcı denetim bulgusudur. Kontrol sistemi devreye alması yük uygulanmadan önce mantık doğrulaması, kilit testi ve alarm rasyonalizasyonu gerektirir. SCADA devreye alması G/Ç doğrulaması, analog sinyal kalibrasyonu, veri tarihçisi başlatma ve şebeke işleticisinin telemetri sinyali kabulünü kapsar. Bu akışların her biri gelecekteki O&M arıza giderme, koruma incelemesi ve düzenleyici denetimlerin temel kanıtı haline gelen belgeler üretir."
          },
          {
            heading: "Senkronizasyon, Yük Testi ve Performans Koşusu Kabulü",
            content: "Senkronizasyon doğrulanmış gerilim, frekans, faz açısı ve faz sırası eşleşmesini; otomatik senkronizör işlevi doğrulamasını ve manuel senkronizasyon yedeğinin onaylanmasını gerektirir. Yük testi performans koşusuna başlamadan önce aşamalı ilerlemeyi takip etmelidir: hafif yük kararlılık kontrolü, governor tepkisi doğrulama, reaktif güç kabiliyeti testi, yük atma testi, AVR tepki kontrolü ve tam yük koşusu. Belirsiz performans koşusu kabul kriterleri işveren ve EPC yüklenicisi arasında ticari açıdan en hassas anda anlaşmazlık yaratır."
          },
          {
            heading: "Devreye Alma Dokümantasyonu, Punch-List Kapanışı ve Teslim Kanıtı",
            content: "Devreye alma dokümantasyonu sonraki her şeyin teknik temelidir: O&M, garanti talepleri, koruma güncellemeleri, sigorta değerlendirmeleri ve düzenleyici denetimler. Her testin tarih damgalı, imzalı, revizyon kontrollü kaydı olmalıdır. Punch-list kapanışı idari değil kanıt tabanlı olmalıdır. Teslimden sonraki açık kalemler öncelik, sorumluluk ve tamamlama tarihleriyle listelenmeli ve işveren tarafından operasyonel ve güvenlik sonuçları tam anlaşılarak incelenmelidir. EPC ekibiyle birlikte giden teslim kanıtı paketi sahada bariz olan ama hiç yazıya dökülmeyen bilgiyi yakalamak için son fırsattır."
          }
        ];
  }

  if (service.slug === "renewable-energy-investment-advisory" || service.slug === "yenilenebilir-enerji-yatirim-danismanligi") {
    return en
      ? [
          {
            heading: "Project Screening and Investment Criteria Definition",
            content: "Investment advisory begins before the technical review — with a clear definition of what the investor is trying to achieve and what technical threshold a project must clear to qualify for deeper evaluation. Screening criteria should cover resource quality, site control status, grid connection clarity, permitting stage, EPC contractor availability, technology risk, country regulatory framework and timeline to financial close. Oztoprak Energy helps investors define technically grounded screening criteria that filter out projects with structurally unreachable assumptions before significant due diligence cost is committed — and helps developers understand what a technically sophisticated investor will scrutinize, so development resources are directed at real risks."
          },
          {
            heading: "Technical Risk Assessment Supporting Investment Decisions",
            content: "Technical risk in renewable energy investment is not a binary pass/fail assessment. It is a ranked view of which project characteristics — hydrology uncertainty, grid connection exposure, EPC contractor capability, equipment supply chain risk, commissioning timeline realism, O&M cost assumptions and performance guarantee enforceability — represent material financial exposure. Oztoprak Energy produces technical risk assessments structured around the investment decision: what risks can be mitigated before financial close, what risks should influence price or structure, what risks must be covered by contractual protections and what risks remain in the owner's portfolio after all mitigations. This framing allows commercial and technical teams to work from the same risk map."
          },
          {
            heading: "CAPEX, OPEX and Long-Term Revenue Model Validation",
            content: "Financial models for renewable energy investments often carry optimistic assumptions that are technically unsupportable: energy yield estimates without inter-annual variability, OPEX budgets without realistic spare parts and unplanned maintenance allowances, degradation curves that do not reflect site conditions, transformer and switchgear lifecycle assumptions without replacement provisions, and availability targets that exceed what the O&M contract actually guarantees. Oztoprak Energy reviews the technical assumptions behind CAPEX, OPEX and yield inputs in the financial model — identifying where optimism creates a gap between the modeled return and the technically defensible return — without replacing the financial analyst but by providing the technical evidence base they need."
          },
          {
            heading: "Lender Technical Advisor Requirements and Due Diligence Coordination",
            content: "Project finance lenders require an independent technical advisor to review energy yield assessment, EPC contract technical adequacy, commissioning plan, performance test methodology, O&M structure, insurance provisions and drawdown conditions. The technical advisor report must satisfy lender requirements while remaining technically honest. Understanding what lenders expect, what questions independent technical advisors consistently raise and how to structure project documentation to minimize conditionality risk is a material advantage in reaching financial close efficiently. Oztoprak Energy helps project developers and owners prepare for the lender independent technical advisor process by identifying and resolving typical documentation gaps before the formal review begins."
          }
        ]
      : [
          {
            heading: "Proje Tarama ve Yatırım Kriterleri Tanımı",
            content: "Yatırım danışmanlığı teknik incelemeden önce başlar: yatırımcının neyi başarmaya çalıştığını ve bir projenin daha derin değerlendirme için hangi teknik eşiği geçmesi gerektiğini net biçimde tanımlamayla. Tarama kriterleri kaynak kalitesini, saha kontrol durumunu, şebeke bağlantısı netliğini, izinleme aşamasını, EPC yüklenicisi kullanılabilirliğini, teknoloji riskini, ülke düzenleyici çerçevesini ve finansal kapanışa kadar geçen süreyi kapsamalıdır. Öztoprak Enerji yatırımcıların yapısal olarak ulaşılamayan varsayımları olan projeleri önemli teknik durum tespiti maliyeti taahhüt edilmeden elemelerine yardımcı olan teknik temele dayalı tarama kriterleri belirlemelerine yardımcı olur."
          },
          {
            heading: "Yatırım Kararlarını Destekleyen Teknik Risk Değerlendirmesi",
            content: "Yenilenebilir enerji yatırımında teknik risk ikili geçer/kalır değerlendirmesi değildir. Hidroloji belirsizliği, şebeke bağlantısı riski, EPC yüklenicisi kapasitesi, ekipman tedarik zinciri riski, devreye alma takvimi gerçekçiliği, O&M maliyet varsayımları ve performans garantisi uygulanabilirliği gibi hangi proje özelliklerinin önemli finansal maruziyet teşkil ettiğine dair sıralı bir bakıştır. Öztoprak Enerji teknik risk değerlendirmelerini yatırım kararı etrafında yapılandırarak üretir: hangi riskler finansal kapanıştan önce azaltılabilir, hangileri fiyatı veya yapıyı etkilemeli ve tüm azaltmalar sonrasında hangi riskler işveren portföyünde kalır."
          },
          {
            heading: "CAPEX, OPEX ve Uzun Vadeli Gelir Modeli Doğrulama",
            content: "Yenilenebilir enerji yatırımlarına yönelik finansal modeller çoğu zaman teknik olarak desteklenemeyen iyimser varsayımlar taşır: yıllar arası değişkenlik olmadan enerji verimi tahminleri, gerçekçi yedek parça ve planlanmamış bakım ödenekleri olmadan OPEX bütçeleri, saha koşullarını yansıtmayan bozulma eğrileri ve O&M sözleşmesinin gerçekte garanti ettiği düzeyi aşan emre amadelik hedefleri. Öztoprak Enerji finansal analistin yerine geçmeksizin onun ihtiyaç duyduğu teknik kanıt tabanını sağlayarak finansal modeldeki teknik varsayımları inceler ve iyimserliğin modellenen getiri ile teknik olarak savunulabilir getiri arasında boşluk yarattığı yerleri tespit eder."
          },
          {
            heading: "Kredi Kuruluşu Bağımsız Teknik Danışman Gereksinimleri ve Koordinasyon",
            content: "Proje finansmanı kredi kuruluşları enerji verimi değerlendirmesini, EPC sözleşmesi teknik yeterliliğini, devreye alma planını, performans testi metodolojisini, O&M yapısını, sigorta hükümlerini ve çekiş koşullarını incelemek üzere bağımsız teknik danışman talep eder. Bağımsız teknik danışman raporu kredi kuruluşu gereksinimlerini karşılamalı ancak teknik açıdan dürüst kalmalıdır. Kredi kuruluşlarının ne beklediğini ve proje dokümantasyonunun koşulluluk riskini en aza indirecek şekilde nasıl yapılandırılacağını bilmek finansal kapanışa etkin biçimde ulaşmada önemli avantaj sağlar. Öztoprak Enerji proje geliştiricilerinin tipik dokümantasyon boşluklarını resmi bağımsız teknik danışman incelemesi başlamadan tespit edip çözerek sürece hazırlanmalarına yardımcı olur."
          }
        ];
  }

  if (service.slug === "reactive-power-audit" || service.slug === "reaktif-guc-denetimi") {
    return en ? [
      {
        heading: "How Reactive Power Penalties Are Calculated in Turkey",
        content: "TEİAŞ bills reactive power penalties when the inductive or capacitive reactive energy exchanged at the grid connection point exceeds the allowed threshold relative to active energy consumption. The penalty rate increases progressively as the power factor moves further from the target range. Most facilities do not realise the penalty accumulation until the annual total becomes significant. A reactive power audit calculates the exact monthly penalty exposure, identifies the source (load behavior, compensation panel failure, harmonic injection, or incorrect capacitor bank switching), and determines whether the problem can be resolved through panel adjustment, expansion, or replacement."
      },
      {
        heading: "Compensation Panel Assessment and Right-Sizing",
        content: "A compensation panel that is correctly sized for the original load profile may become inadequate as the facility expands, as load composition changes, or as harmonic levels increase from variable speed drives, LED lighting, or inverter-based equipment. The audit reviews the panel's rated capacity, the number and size of capacitor steps, the reactive power controller setpoints, the switching response time, and the harmonic filter configuration if present. Where harmonics are above safe levels for standard capacitor banks, the audit flags the risk of capacitor overload and recommends appropriately rated detuned reactors or active filter solutions."
      },
      {
        heading: "Free Reactive Power Analysis — Initial Assessment from Invoices",
        content: "The most common barrier to starting a reactive power audit is uncertainty about whether the problem is serious enough to justify a site visit. Oztoprak Energy offers a free initial analysis based on the last 12 months of TEİAŞ electricity invoices. This analysis calculates the annual reactive penalty total, the average power factor per month, the trend over time, and a preliminary estimate of potential savings from correct compensation. In most cases, this is enough to determine whether a site visit and formal audit are justified — and what the payback period on a compensation upgrade would be."
      }
    ] : [
      {
        heading: "Türkiye'de Reaktif Güç Cezaları Nasıl Hesaplanır",
        content: "TEİAŞ, şebeke bağlantı noktasında değiştirilen endüktif veya kapasitif reaktif enerji, aktif enerji tüketimine oranla izin verilen eşiği aştığında reaktif güç cezası uygular. Ceza oranı, güç faktörü hedef aralıktan uzaklaştıkça kademeli olarak artar. Çoğu tesis yıllık toplam önemli bir düzeye ulaşana kadar ceza birikiminin farkında olmaz. Reaktif güç denetimi, her ay ödenecek cezayı tam olarak hesaplar, kaynağı (yük davranışı, kompanzasyon panosu arızası, harmonik enjeksiyonu veya hatalı kondansatör grubu anahtarlaması) tespit eder ve sorunun pano ayarı, genişletme veya değiştirme yoluyla çözülüp çözülemeyeceğini belirler."
      },
      {
        heading: "Kompanzasyon Panosu Değerlendirmesi ve Doğru Boyutlandırma",
        content: "Orijinal yük profiline göre doğru boyutlandırılmış bir kompanzasyon panosu, tesis genişledikçe, yük bileşimi değiştikçe veya harmonik düzeyleri değişken hız sürücüleri, LED aydınlatma veya invertör tabanlı ekipmanlar nedeniyle arttıkça yetersiz kalabilir. Denetim, pano anma kapasitesini, kondansatör kademelerinin sayısını ve boyutunu, reaktif güç kontrol cihazı set noktalarını, anahtarlama tepki süresini ve varsa harmonik filtre konfigürasyonunu inceler. Harmoniklerin standart kondansatör bankaları için güvenli düzeyin üzerinde olduğu durumlarda denetim, kondansatör aşırı yükleme riskini işaret eder ve uygun şekilde derecelendirilmiş detune reaktör veya aktif filtre çözümleri önerir."
      },
      {
        heading: "Ücretsiz Reaktif Güç Analizi — Faturalardan İlk Değerlendirme",
        content: "Reaktif güç denetimine başlamanın önündeki en yaygın engel, sorunun saha ziyaretini haklı kılacak kadar ciddi olup olmadığı konusundaki belirsizliktir. Öztoprak Enerji, son 12 aylık TEİAŞ elektrik faturalarına dayalı ücretsiz bir ön analiz sunmaktadır. Bu analiz, yıllık reaktif ceza toplamını, aylık ortalama güç faktörünü, zaman içindeki trendi ve doğru kompanzasyondan elde edilecek potansiyel tasarrufun ön tahminini hesaplar. Çoğu durumda bu, bir saha ziyareti ve resmi denetimin haklı olup olmadığını ve bir kompanzasyon güncellemesinin geri ödeme süresinin ne olacağını belirlemek için yeterlidir."
      }
    ];
  }

  if (service.slug === "independent-engineer" || service.slug === "bagimsiz-muhendis") {
    return en ? [
      {
        heading: "Independent Engineer Role in Turkish Project Finance",
        content: "An Independent Engineer (IE) appointment is a standard condition in renewable energy project finance in Turkey. Development banks, including Ziraat Bankası, Halkbank and Garanti BBVA, and international financial institutions including EBRD and IFC, require an IE to be appointed before loan disbursement can begin. The IE's role is to give the lender confidence that the project is technically sound, that the EPC contractor can deliver, and that the plant will generate the yields needed to service the debt. The IE is appointed by the lender — not the developer — and reports to the lender throughout the project lifecycle."
      },
      {
        heading: "IE Appointment Scope: Pre-Construction Through Completion",
        content: "A typical IE appointment covers three phases. Pre-financial-close review: the IE reviews the EPC contract technical scope, energy yield assessment, grid connection plan, permits and environmental documentation before the lender commits to the loan. Construction phase: the IE conducts monthly site visits, prepares written progress reports, witnesses FAT and SAT inspections, and verifies drawdown conditions before each loan disbursement. Completion phase: the IE witnesses the performance test, reviews the results against the contracted guarantee, and issues the completion certificate that triggers the final drawdown. The quality of the IE's reports directly affects the lender's confidence in disbursing funds."
      },
      {
        heading: "IFC Performance Standards and Equator Principles Context",
        content: "For projects financed by IFC, EBRD or Equator Principles-compliant banks, the IE report must also address environmental and social risk assessment, ESAP (Environmental and Social Action Plan) compliance, and stakeholder engagement adequacy. Oztoprak Energy structures IE reports for both Turkish development bank requirements and IFC Performance Standards compliance, so the same engagement satisfies both domestic and international lender requirements without requiring a second IE appointment."
      }
    ] : [
      {
        heading: "Türk Proje Finansmanında Bağımsız Mühendis Rolü",
        content: "Bağımsız Mühendis (BM) atama, Türkiye'deki yenilenebilir enerji proje finansmanında standart bir koşuldur. Ziraat Bankası, Halkbank ve Garanti BBVA dahil kalkınma bankaları ile EBRD ve IFC dahil uluslararası finansal kuruluşlar, kredi kullandırımına başlamadan önce BM atanmasını şart koşar. BM'nin rolü, kredi kuruluşuna projenin teknik açıdan sağlam olduğu, EPC yüklenicisinin teslim edebileceği ve santralin borç servisine yetecek getiriyi üreteceği konusunda güvence vermektir. BM, geliştirici değil kredi kuruluşu tarafından atanır ve proje yaşam döngüsü boyunca kredi kuruluşuna rapor verir."
      },
      {
        heading: "BM Atama Kapsamı: Ön Yapımdan Tamamlamaya",
        content: "Tipik bir BM ataması üç aşamayı kapsar. Finansal kapanış öncesi inceleme: BM, kredi kuruluşu kredi taahhüdü vermeden önce EPC sözleşmesi teknik kapsamını, enerji verimi değerlendirmesini, şebeke bağlantı planını, izinleri ve çevresel belgeleri inceler. İnşaat aşaması: BM aylık saha ziyaretleri yapar, yazılı ilerleme raporları hazırlar, FAT ve SAT denetimlerine tanıklık eder ve her kredi kullandırımından önce çekiş koşullarını doğrular. Tamamlama aşaması: BM performans testine tanıklık eder, sonuçları sözleşme garantisine karşı inceler ve son çekimi tetikleyen tamamlama sertifikasını düzenler."
      },
      {
        heading: "IFC Performans Standartları ve Ekvator İlkeleri Bağlamı",
        content: "IFC, EBRD veya Ekvator İlkeleri uyumlu bankalarca finanse edilen projeler için BM raporu aynı zamanda çevresel ve sosyal risk değerlendirmesini, ÇSEP (Çevresel ve Sosyal Eylem Planı) uyumunu ve paydaş katılımı yeterliliğini kapsamalıdır. Öztoprak Enerji BM raporlarını hem Türk kalkınma bankası gereksinimleri hem de IFC Performans Standartları uyumu için yapılandırır."
      }
    ];
  }

  if (service.slug === "lenders-engineer" || service.slug === "finans-kurulusu-muhendisi") {
    return en ? [
      {
        heading: "Drawdown Conditions and Verification",
        content: "The Lender's Engineer plays a critical role in the disbursement process. Before each construction drawdown, the LE verifies that the conditions precedent specified in the facility agreement have been met — including physical progress milestones, quality evidence, EPC contract compliance, environmental and social requirements, and insurance certificate currency. The LE's verification is the bank's technical gating mechanism: without a positive LE confirmation, the disbursement does not proceed. This makes the LE's reporting discipline, site visit quality, and technical judgment directly material to the project's financing timeline."
      },
      {
        heading: "Reporting Standards for Turkish and International Lenders",
        content: "Turkish development bank LE reports typically follow a structured template covering physical progress percentage, photographic evidence, EPC contractor compliance, schedule variance, open issues register, and confirmation of drawdown condition compliance. International LE reports for IFC, EBRD or private lenders typically include an additional section on environmental and social monitoring, community engagement evidence, and compliance with lender-specific environmental covenants. Oztoprak Energy prepares LE reports that meet both Turkish regulatory standards and international lender quality expectations."
      }
    ] : [
      {
        heading: "Çekiş Koşulları ve Doğrulama",
        content: "Finans Kuruluşu Mühendisi, kullandırım sürecinde kritik bir rol oynar. Her inşaat çekişinden önce FK Mühendisi, kredi anlaşmasında belirtilen ön koşulların karşılandığını doğrular: fiziksel ilerleme kilometre taşları, kalite kanıtı, EPC sözleşme uyumu, çevresel ve sosyal gereksinimler ve sigorta sertifikası güncelliği dahil. FK Mühendisinin doğrulaması bankanın teknik geçiş mekanizmasıdır: FK'nın olumlu teyidi olmadan kullandırım gerçekleşmez. Bu durum FK'nın raporlama disiplinini, saha ziyareti kalitesini ve teknik yargısını projenin finansman takvimi açısından doğrudan önemli kılar."
      },
      {
        heading: "Türk ve Uluslararası Kredi Kuruluşları için Raporlama Standartları",
        content: "Türk kalkınma bankası FK raporları genellikle fiziksel ilerleme yüzdesi, fotoğraf kanıtı, EPC yüklenici uyumu, takvim sapması, açık sorunlar kaydı ve çekiş koşulu uyum teyidini kapsayan yapılandırılmış bir şablonu izler. IFC, EBRD veya özel kredi kuruluşları için uluslararası FK raporları genellikle çevresel ve sosyal izleme, toplum katılımı kanıtı ve kredi kuruluşuna özgü çevresel taahhütlerle uyumu kapsayan ek bir bölüm içerir."
      }
    ];
  }

  if (service.slug === "bank-technical-advisor" || service.slug === "banka-teknik-danismani") {
    return en ? [
      {
        heading: "What a BTA Report Must Cover",
        content: "A Bank Technical Advisor report for a renewable energy project finance transaction typically covers: energy yield assessment review (methodology, datasets, P50 vs P90 sensitivity, inter-annual variability), EPC contract technical adequacy (scope definition, interface risks, performance guarantee enforceability, liquidated damages structure), grid connection plan (TEİAŞ connection conditions, protection requirements, FRT obligations, reactive power compliance), permitting status (generation licence, connection agreement, environmental permits, land access), and technical risk summary ranked by severity and mitigation status. The report must be structured around the technical schedules of the lender's facility agreement."
      },
      {
        heading: "Timeline and Process for BTA Engagement",
        content: "A typical BTA engagement takes 3–6 weeks from data room access to final report. The process begins with a data room review and initial information request list. This is followed by a site visit (1–2 days) to verify physical conditions, meet the project team, and observe the grid connection interface. The draft report is reviewed by the lender's legal team and typically requires one round of clarifications before the final version is issued for the credit committee. Oztoprak Energy has structured BTA reports that have been accepted by Turkish development banks and international project finance lenders."
      }
    ] : [
      {
        heading: "BTA Raporu Neleri Kapsamalıdır",
        content: "Yenilenebilir enerji proje finansmanı işlemi için banka teknik danışmanı raporu genellikle şunları kapsar: enerji verimi değerlendirmesi incelemesi (metodoloji, veri setleri, P50'ye karşı P90 duyarlılığı, yıllar arası değişkenlik), EPC sözleşmesi teknik yeterliliği (kapsam tanımı, arayüz riskleri, performans garantisi uygulanabilirliği, gecikme cezası yapısı), şebeke bağlantısı planı (TEİAŞ bağlantı koşulları, koruma gereksinimleri, FRT yükümlülükleri, reaktif güç uyumu), izinleme durumu (üretim lisansı, bağlantı anlaşması, çevresel izinler, arazi erişimi) ve şiddet ve azaltım durumuna göre sıralanmış teknik risk özeti."
      },
      {
        heading: "BTA Çalışması için Süreç ve Zaman Çizelgesi",
        content: "Tipik bir BTA çalışması, data room erişiminden nihai rapora kadar 3-6 hafta sürer. Süreç bir data room incelemesi ve ilk bilgi talep listesiyle başlar. Bunu fiziksel koşulları doğrulamak, proje ekibiyle görüşmek ve şebeke bağlantı arayüzünü gözlemlemek için bir saha ziyareti (1-2 gün) izler. Taslak rapor kredi kuruluşunun hukuk ekibi tarafından incelenir ve genellikle kredi komitesi için nihai versiyon düzenlenmeden önce bir tur açıklama gerektir."
      }
    ];
  }

  if (service.slug === "portfolio-technical-review" || service.slug === "portfoy-teknik-incelemesi") {
    return en ? [
      {
        heading: "Why Portfolio Reviews Find Risks Asset Reviews Miss",
        content: "Individual asset technical reviews are designed to assess one plant's condition against its own standards. Portfolio reviews are designed to find patterns across multiple assets that no individual review can see. Common portfolio-level findings include: the same EPC contractor delivered multiple plants with the same commissioning documentation gap; a shared grid operator applies inconsistent reactive power compliance enforcement across different plants in the portfolio; O&M contractors for different assets use different maintenance intervals, creating variable risk exposure; or the same protection relay firmware version is running across multiple sites with a known vulnerability. These systematic risks only become visible when assets are reviewed together."
      },
      {
        heading: "Deliverable: Portfolio Technical Dashboard and Priority Matrix",
        content: "The portfolio technical review delivers a consolidated view of technical performance, risk exposure, and compliance status across all assets in the portfolio. The dashboard summarizes generation performance (actual vs. budget, PR trends), availability (actual vs. O&M contract targets), open defects (by severity, asset and responsible party), grid compliance status, and outstanding corrective actions. The priority action matrix ranks issues across the portfolio by financial impact, safety risk, and implementation urgency — allowing the asset management team to allocate resources to where they create the most portfolio value."
      }
    ] : [
      {
        heading: "Portföy İncelemesinin Varlık İncelemesinin Kaçırdığı Riskleri Neden Bulduğu",
        content: "Bireysel varlık teknik incelemeleri, tek bir santralin durumunu kendi standartlarına göre değerlendirmek için tasarlanmıştır. Portföy incelemeleri, hiçbir bireysel incelemenin göremeyeceği çoklu varlıklardaki kalıpları bulmak için tasarlanmıştır. Yaygın portföy düzeyindeki bulgular şunlardır: aynı EPC yüklenicisi aynı devreye alma dokümantasyonu boşluğuyla birden fazla santral teslim etti; paylaşılan bir şebeke işleticisi portföydeki farklı santrallerde tutarsız reaktif güç uyum uygulaması yapıyor; farklı varlıklar için O&M yüklenicileri farklı bakım aralıkları kullanıyor ve bu da değişken risk maruziyeti yaratıyor."
      },
      {
        heading: "Teslim Edilecek: Portföy Teknik Gösterge Paneli ve Öncelik Matrisi",
        content: "Portföy teknik incelemesi, portföydeki tüm varlıklarda teknik performans, risk maruziyeti ve uyum durumunun konsolide bir görünümünü sunar. Gösterge paneli üretim performansını (gerçek bütçeye karşı, PR trendleri), emre amadeliği (gerçek O&M sözleşme hedeflerine karşı), açık kusurları (şiddet, varlık ve sorumlu tarafa göre), şebeke uyum durumunu ve bekleyen düzeltici aksiyonları özetler. Öncelik eylem matrisi, portföy genelindeki sorunları finansal etki, güvenlik riski ve uygulama aciliyetine göre sıralayarak varlık yönetim ekibinin kaynakları en fazla portföy değeri yaratan alanlara tahsis etmesine olanak tanır."
      }
    ];
  }

  if (service.slug === "expert-witness" || service.slug === "bilirkisi") {
    return en ? [
      {
        heading: "Common Renewable Energy Disputes That Require Expert Witnesses",
        content: "The most common technical disputes in renewable energy that require an Expert Witness include: EPC performance guarantee shortfall (the plant generates less than the contracted guarantee and the parties dispute whether the shortfall is the contractor's responsibility); construction delay causation (the project reached commercial operation late and the parties dispute which delays were caused by the EPC contractor versus owner-caused or force majeure events); commissioning defects (equipment installed by the EPC contractor fails within the defect liability period and the parties dispute whether the failure is a commissioning defect or an O&M issue); and grid connection failure responsibility (the plant cannot achieve the required grid connection technical standards and the parties dispute whether the fault lies with the EPC contractor, the equipment supplier, or the grid operator)."
      },
      {
        heading: "Independence and Impartiality",
        content: "An Expert Witness in legal or arbitration proceedings has a duty to the tribunal — not to the party that appointed them. This duty of independence is a professional and legal obligation that overrides the commercial interest of the appointing party. Oztoprak Energy structures Expert Witness engagements to maintain this independence: we do not accept instructions to produce a predetermined conclusion, we disclose any potential conflicts of interest, and our reports state the factual basis for each opinion clearly. A report that is not independently defensible will be challenged successfully in cross-examination — which damages the appointing party's case more than having no expert at all."
      }
    ] : [
      {
        heading: "Bilirkişi Gerektiren Yaygın Yenilenebilir Enerji Uyuşmazlıkları",
        content: "Bilirkişi gerektiren en yaygın yenilenebilir enerji teknik uyuşmazlıkları şunlardır: EPC performans garantisi açığı (santral, sözleşme garantisinden daha az üretim yapıyor ve taraflar açığın yüklenicinin sorumluluğunda olup olmadığını tartışıyor); inşaat gecikmesi nedenselliği (proje ticari işletmeye geç ulaştı ve taraflar hangi gecikmelerin EPC yüklenicisi tarafından mı yoksa işveren kaynaklı mı ya da force majeure olaylarından mı kaynaklandığını tartışıyor); devreye alma kusurları (EPC yüklenicisi tarafından kurulan ekipman kusur sorumluluk dönemi içinde arıza yapıyor ve taraflar arızanın devreye alma kusuru mu yoksa O&M sorunu mu olduğunu tartışıyor)."
      },
      {
        heading: "Bağımsızlık ve Tarafsızlık",
        content: "Hukuki veya tahkim süreçlerindeki bir bilirkişinin, onu atayan taraf değil mahkeme veya tahkim kuruluna karşı görevi vardır. Bu bağımsızlık görevi, atayan tarafın ticari çıkarının önüne geçen mesleki ve hukuki bir yükümlülüktür. Öztoprak Enerji bilirkişi çalışmalarını bu bağımsızlığı koruyacak şekilde yapılandırır: önceden belirlenmiş bir sonuç üretme talimatı kabul etmiyor, olası çıkar çatışmalarını açıklıyor ve raporlarımız her görüşün gerçek dayanağını net olarak belirtiyor."
      }
    ];
  }

  if (service.slug === "technical-arbitration-support" || service.slug === "teknik-tahkim-destegi") {
    return en ? [
      {
        heading: "Understanding the Technical Facts of an EPC Dispute",
        content: "Before any legal strategy can be developed, the technical facts of a renewable energy EPC dispute must be established. What does the EPC contract actually require? What did the contractor deliver? How do the two compare? Where performance fell short of the contractual guarantee, what caused the shortfall — and can that cause be attributed to the contractor, the owner, the equipment supplier, or external conditions? These questions require someone with field experience of how renewable energy plants are built, commissioned, and operated — and how EPC contracts allocate technical risk between parties. This is the core value of technical arbitration support: providing that engineering clarity before legal strategy is committed."
      },
      {
        heading: "Supporting Legal Counsel Without Replacing Legal Advice",
        content: "Technical arbitration support is engineering advice — it is not legal advice. The role of Oztoprak Energy in a dispute is to help legal counsel understand the technical facts clearly enough to develop and test legal strategy: to identify which technical arguments are sustainable, which evidence supports each position, where the technical weaknesses are in the client's case, and what questions should be asked of the opposing party's technical experts. The legal strategy — choice of arbitration venue, timing, procedural steps, settlement decisions — remains entirely with the client and their legal counsel."
      }
    ] : [
      {
        heading: "Bir EPC Uyuşmazlığının Teknik Gerçeklerini Anlamak",
        content: "Herhangi bir hukuki strateji geliştirilebilmeden önce, yenilenebilir enerji EPC uyuşmazlığının teknik gerçekleri ortaya konulmalıdır. EPC sözleşmesi gerçekte ne gerektiriyor? Yüklenici ne teslim etti? İkisi nasıl karşılaştırılıyor? Performans sözleşme garantisinin altında kaldığında, açığa ne sebep oldu — ve bu neden yükleniciye, işverene, ekipman tedarikçisine veya dış koşullara atfedilebilir mi? Bu sorular, yenilenebilir enerji santrallerinin nasıl inşa edildiği, devreye alındığı ve işletildiği konusunda saha deneyimi gerektirir. Teknik tahkim desteğinin temel değeri budur: hukuki strateji taahhüt edilmeden önce mühendislik netliği sağlamak."
      },
      {
        heading: "Hukuki Danışmanlığın Yerine Geçmeden Hukuk Müşavirlerine Destek",
        content: "Teknik tahkim desteği mühendislik tavsiyesidir — hukuki tavsiye değildir. Öztoprak Enerji'nin bir uyuşmazlıktaki rolü, hukuk müşavirlerinin teknik gerçekleri hukuki strateji geliştirmek ve test etmek için yeterince net anlamalarına yardımcı olmaktır: hangi teknik argümanların sürdürülebilir olduğunu, her pozisyonu hangi kanıtların desteklediğini, müvekkil davasındaki teknik zayıflıkların nerede olduğunu ve karşı tarafın teknik uzmanlarına hangi soruların yöneltilmesi gerektiğini belirlemek. Hukuki strateji — tahkim mekanı seçimi, zamanlama, usul adımları, uzlaşma kararları — tamamen müvekkil ve hukuk müşavirlerine aittir."
      }
    ];
  }

  if (service.slug === "factory-acceptance-test" || service.slug === "fabrika-kabul-testi") {
    return en ? [
      {
        heading: "FAT Agenda and Typical Duration",
        content: "A FAT for a solar inverter typically covers: visual inspection of manufacturing quality and labelling, functional test of all control inputs and outputs, protection relay integration test, communication protocol test (Modbus, DNP3 or IEC 61850 as specified), insulation resistance and high-voltage withstand test, efficiency measurement at multiple load points, harmonic distortion measurement, anti-islanding function test, and SCADA integration verification. Duration depends on the equipment type: inverter FAT typically takes 1–2 days per unit or batch, transformer FAT takes 1–3 days depending on the extent of routine testing required, and protection relay FAT takes 0.5–1 day per unit. Oztoprak Energy attends FATs with calibrated test equipment and produces a signed FAT report with test results and photographic evidence."
      },
      {
        heading: "FAT vs. SAT: Why Both Are Required",
        content: "FAT and SAT are complementary, not alternatives. FAT verifies that the equipment meets its specification in the controlled environment of the manufacturer's facility. SAT verifies that the same equipment, once installed at the site, operates correctly in its actual environment — which includes cable runs, earthing systems, auxiliary power supplies, ambient temperature and humidity, interaction with other plant systems, and the specific software configuration for the plant's operating conditions. Defects that pass FAT and emerge at SAT are typically installation or interface issues rather than manufacturing defects. Both stages of testing are required for a complete evidence record."
      }
    ] : [
      {
        heading: "FAT Programı ve Tipik Süre",
        content: "Bir GES invertörü için FAT genellikle şunları kapsar: üretim kalitesi ve etiketlemenin görsel incelemesi, tüm kontrol giriş ve çıkışlarının fonksiyonel testi, koruma rölesi entegrasyon testi, iletişim protokolü testi (belirtilen şekilde Modbus, DNP3 veya IEC 61850), yalıtım direnci ve yüksek gerilim dayanma testi, birden fazla yük noktasında verimlilik ölçümü, harmonik bozunum ölçümü, ada önleme fonksiyon testi ve SCADA entegrasyon doğrulaması. Süre ekipman türüne bağlıdır: invertör FAT genellikle birim veya parti başına 1-2 gün, transformatör FAT gereken rutin test kapsamına göre 1-3 gün, koruma rölesi FAT birim başına 0,5-1 gün sürer."
      },
      {
        heading: "FAT ve SAT: Her İkisi Neden Gereklidir",
        content: "FAT ve SAT alternatif değil, tamamlayıcıdır. FAT, ekipmanın üreticinin tesisinin kontrollü ortamında teknik şartnameyi karşıladığını doğrular. SAT, aynı ekipmanın sahaya kurulduktan sonra gerçek ortamında — kablo güzergahları, topraklama sistemleri, yardımcı güç kaynakları, ortam sıcaklığı ve nemi, diğer santral sistemleriyle etkileşim ve santralin işletme koşulları için özel yazılım konfigürasyonu dahil — doğru çalıştığını doğrular. FAT'ı geçen ve SAT'ta ortaya çıkan kusurlar genellikle imalat hatası değil kurulum veya arayüz sorunlarıdır."
      }
    ];
  }

  if (service.slug === "site-acceptance-test" || service.slug === "saha-kabul-testi") {
    return en ? [
      {
        heading: "SAT Scope for Solar Plants",
        content: "For solar plants, the SAT scope typically covers: DC side string testing (open circuit voltage, short circuit current, insulation resistance per IEC 62446), IV curve tracing for representative strings to identify shading, soiling, mismatch or bypass diode failure, inverter commissioning verification (startup sequence, protection settings, reactive power capability, LVRT and FRT function), MV collection network testing (cable continuity, cable insulation, transformer earthing, protection relay settings verification), SCADA commissioning (I/O verification, data historian startup, alarm configuration, telemetry interface to grid operator), performance ratio measurement for one representative day as a baseline, and punch-list management to close all open items before handover sign-off."
      },
      {
        heading: "IEC 62446 Documentation Requirements",
        content: "IEC 62446-1 (Grid-connected photovoltaic systems — minimum requirements for system documentation, commissioning tests and inspection) defines the documentation that must be produced and retained as evidence of SAT completion. Required documents include: design documentation (single-line diagram, system schematic, array layout), inspection and testing records (visual inspection, electrical tests, performance measurements), commissioning test results (signed test sheets with pass/fail criteria), and operational documentation (system manual, maintenance schedule, fault diagnosis guide). Oztoprak Energy's SAT reports are structured to meet IEC 62446-1 requirements so the documentation is acceptable for grid connection approval, insurance assessments and future due diligence reviews."
      }
    ] : [
      {
        heading: "GES için SAT Kapsamı",
        content: "GES'ler için SAT kapsamı genellikle şunları kapsar: DC tarafı string testi (IEC 62446 uyarınca açık devre gerilimi, kısa devre akımı, yalıtım direnci), gölgelenme, kirlenme, uyumsuzluk veya bypass diyotu arızasını tespit etmek için temsili string IV eğrisi izleme, invertör devreye alma doğrulaması (başlatma sırası, koruma ayarları, reaktif güç kabiliyeti, LVRT ve FRT fonksiyonu), OG koleksiyon ağı testi (kablo sürekliliği, kablo yalıtımı, trafo topraklaması, koruma rölesi ayarları doğrulaması), SCADA devreye alma (G/Ç doğrulaması, veri tarihçisi başlatma, alarm konfigürasyonu, şebeke işleticisine telemetri arayüzü), referans için bir temsili günde performans oranı ölçümü ve teslim onayından önce tüm açık kalemleri kapatmak için eksik iş yönetimi."
      },
      {
        heading: "IEC 62446 Dokümantasyon Gereksinimleri",
        content: "IEC 62446-1, SAT tamamlanmasının kanıtı olarak üretilmesi ve saklanması gereken dokümantasyonu tanımlar. Gerekli belgeler şunlardır: tasarım dokümantasyonu (tek hat şeması, sistem şeması, dizi düzeni), muayene ve test kayıtları (görsel inceleme, elektriksel testler, performans ölçümleri), devreye alma testi sonuçları (geçer/kalır kriterleriyle imzalı test formları) ve operasyonel dokümantasyon (sistem kılavuzu, bakım takvimi, arıza teşhis kılavuzu). Öztoprak Enerji'nin SAT raporları IEC 62446-1 gereksinimlerini karşılayacak şekilde yapılandırılmıştır."
      }
    ];
  }

  if (service.slug === "performance-guarantee-verification" || service.slug === "performans-garantisi-dogrulama") {
    return en ? [
      {
        heading: "Performance Ratio and Energy Yield: What the EPC Guarantee Covers",
        content: "EPC contracts for solar plants typically guarantee one or more of the following: Performance Ratio (the ratio of actual AC energy output to the theoretically expected output for the same irradiation conditions), Energy Yield (the absolute AC energy production over a defined test period), or Availability (the percentage of time the plant is available for generation). The most common guarantee metric is Performance Ratio because it normalises for irradiation variation — but the methodology for calculating PR, the correction factors applied, and the measurement standards used must be clearly defined in the contract to avoid disputes. If the contract is ambiguous about test methodology, both parties will calculate different results from the same measurement data."
      },
      {
        heading: "IEC 61724 Methodology and Measurement Setup",
        content: "IEC 61724-1 defines the minimum requirements for PV system performance monitoring: measurement equipment specifications, data sampling intervals, sensor calibration requirements, and data quality criteria. IEC 61724-3 defines the energy evaluation method used for performance guarantee verification. Oztoprak Energy sets up the measurement system with calibrated Class A irradiance sensors (pyranometers or reference cells), calibrated temperature sensors, and calibrated revenue-grade energy meters before the test period begins. The measurement duration must be sufficient to achieve statistical confidence — typically a minimum of 30 days at full capacity, avoiding periods with significant curtailment, shading events, or grid operator restrictions that would distort the result."
      }
    ] : [
      {
        heading: "Performans Oranı ve Enerji Verimi: EPC Garantisi Neleri Kapsıyor",
        content: "GES'ler için EPC sözleşmeleri genellikle şunlardan birini veya birkaçını garanti eder: Performans Oranı (aynı ışınım koşulları için teorik olarak beklenen çıktıya karşı gerçek AC enerji çıktısının oranı), Enerji Verimi (tanımlı test dönemi boyunca mutlak AC enerji üretimi) veya Emre Amadelik (santralin üretim için müsait olduğu sürenin yüzdesi). En yaygın garanti metriği, ışınım değişkenliğini normalleştirdiği için Performans Oranıdır. Ancak PR hesaplamak için kullanılan metodoloji, uygulanan düzeltme faktörleri ve kullanılan ölçüm standartları, uyuşmazlıklardan kaçınmak için sözleşmede açıkça tanımlanmalıdır."
      },
      {
        heading: "IEC 61724 Metodolojisi ve Ölçüm Kurulumu",
        content: "IEC 61724-1, FV sistem performansı izleme için asgari gereksinimleri tanımlar: ölçüm ekipmanı spesifikasyonları, veri örnekleme aralıkları, sensör kalibrasyon gereksinimleri ve veri kalitesi kriterleri. IEC 61724-3, performans garantisi doğrulaması için kullanılan enerji değerlendirme yöntemini tanımlar. Öztoprak Enerji, test dönemi başlamadan önce kalibre edilmiş A Sınıfı ışınım sensörleri, kalibre sıcaklık sensörleri ve kalibre gelir sınıfı enerji sayaçlarıyla ölçüm sistemini kurar. Ölçüm süresi istatistiksel güven elde etmek için yeterli olmalıdır — genellikle tam kapasitede minimum 30 gün."
      }
    ];
  }

  if (service.slug === "construction-monitoring" || service.slug === "insaat-izleme") {
    return en ? [
      {
        heading: "Critical Construction Inspection Points",
        content: "Construction monitoring focuses on the installation phases where mistakes are most expensive to correct after completion. For solar plants, these include: tracker system anchor installation (incorrect depth or spacing creates long-term structural risk), DC cable routing and labelling (incorrect polarity, inadequate bend radii, or missing conduit protection create fire and performance risk), combiner box connections and fusing (loose connections or incorrect fuse ratings create heat and failure risk), MV cable termination (incorrect heat shrink application, missing armour earthing, or inadequate ferrule crimping create insulation failure risk), and protection relay wiring and settings verification (incorrect CT polarity or relay settings create protection failure risk at energization). Each of these is a hold point in the ITP where Oztoprak Energy witnesses and documents the work before it is covered up."
      },
      {
        heading: "Non-Conformance Report Management",
        content: "A well-managed construction phase produces NCRs — that is a sign of a disciplined quality process, not a sign that the project is in trouble. The NCR process identifies deviations from the approved drawings, specifications or quality procedures, requires the EPC contractor to investigate the root cause, propose a corrective action, and close the NCR with evidence that the correction has been implemented. Oztoprak Energy tracks open NCRs across categories (safety, quality, documentation) and ensures they are closed before handover. NCRs carried past handover without closure evidence transfer technical and commercial risk to the owner."
      }
    ] : [
      {
        heading: "Kritik İnşaat Denetim Noktaları",
        content: "İnşaat izleme, tamamlanmanın ardından hataların düzeltilmesinin en pahalı olduğu kurulum aşamalarına odaklanır. GES'ler için bunlar şunlardır: tracker sistemi ankraj kurulumu (yanlış derinlik veya aralık uzun vadeli yapısal risk yaratır), DC kablo güzergahı ve etiketleme (yanlış polarite, yetersiz bükme radyusleri veya eksik kanal koruması yangın ve performans riski yaratır), kombiner kutu bağlantıları ve sigortalama (gevşek bağlantılar veya yanlış sigorta değerlendirmeleri ısı ve arıza riski yaratır), OG kablo sonlandırma (yanlış ısı büzme uygulaması, eksik zırh topraklaması veya yetersiz kıkırdak baskı yalıtım arıza riski yaratır) ve koruma rölesi kablo bağlantısı ve ayar doğrulaması. Bunların her biri, Öztoprak Enerji'nin kapatılmadan önce işi tanıklık ettiği ve belgelediği ITP'deki bir durdurma noktasıdır."
      },
      {
        heading: "Uygunsuzluk Raporu Yönetimi",
        content: "İyi yönetilen bir inşaat aşaması NCR'lar üretir — bu disiplinli bir kalite sürecinin işaretidir, projenin sorun yaşadığının değil. NCR süreci, onaylı çizimlerden, şartnamelerden veya kalite prosedürlerinden sapmaları tespit eder, EPC yüklenicisinin kök nedeni araştırmasını, düzeltici eylem önermesini ve düzeltmenin uygulandığının kanıtıyla NCR'ı kapatmasını gerektirir. Öztoprak Enerji açık NCR'ları kategoriler bazında (güvenlik, kalite, dokümantasyon) takip eder ve teslimden önce kapatılmalarını sağlar."
      }
    ];
  }

  if (service.slug === "project-monitoring" || service.slug === "proje-izleme") {
    return en ? [
      {
        heading: "What a Monthly Progress Report Covers",
        content: "A monthly project monitoring report for a lender or investor typically covers: physical progress percentage (civil, electromechanical, electrical, grid connection — each as a percentage of total), photographic evidence of progress since the last visit, schedule variance analysis (actual vs. baseline programme), contractor workforce and equipment levels on site, material delivery and procurement status, quality issues or NCRs raised since the last report, environmental and social compliance status (if applicable), drawdown condition compliance confirmation, and a risk and issue register update. The report is structured so the bank's credit officer can quickly assess whether the project is on track without needing to interpret raw construction data."
      },
      {
        heading: "Early Warning Identification",
        content: "The most valuable function of project monitoring is early warning — identifying technical, schedule or quality issues before they become delays or disputes. Common early warnings identified during project monitoring include: civil subcontractor mobilisation delays suggesting later electrical installation pressure, incorrect anchor bolt positions not visible once grouted, discrepancies between ordered and delivered equipment specifications, grid operator approval timeline slipping without contractor action, and commissioning test equipment not ordered when needed. These issues are low-cost to resolve when identified 4–8 weeks before they become critical, and high-cost when they reach handover undiscovered."
      }
    ] : [
      {
        heading: "Aylık İlerleme Raporu Neler Kapsar",
        content: "Bir kredi kuruluşu veya yatırımcı için aylık proje izleme raporu genellikle şunları kapsar: fiziksel ilerleme yüzdesi (inşaat, elektromekanik, elektrik, şebeke bağlantısı — her biri toplam yüzdesi olarak), son ziyaretten bu yana ilerlemenin fotoğraf kanıtı, takvim sapma analizi (gerçekleşen ile referans programa karşı), sahada yüklenici iş gücü ve ekipman düzeyleri, malzeme teslimat ve tedarik durumu, son rapordan bu yana ortaya çıkan kalite sorunları veya NCR'lar, çevresel ve sosyal uyum durumu (varsa), çekiş koşulu uyum teyidi ve risk ve sorun kaydı güncellemesi."
      },
      {
        heading: "Erken Uyarı Tespiti",
        content: "Proje izlemenin en değerli işlevi erken uyarıdır — teknik, takvim veya kalite sorunlarını gecikmelere veya uyuşmazlıklara dönüşmeden tespit etmek. Proje izleme sırasında tespit edilen yaygın erken uyarılar şunlardır: inşaat alt yüklenicisinin seferberlik gecikmeleri, daha sonraki elektrik kurulum baskısını öngörür; yanlış ankraj cıvatası konumları harçlandıktan sonra görünmez; sipariş edilen ve teslim edilen ekipman özellikleri arasındaki tutarsızlıklar; yüklenici eylemi olmadan şebeke işleticisi onay takviminin kayması ve gerektiğinde sipariş edilmemiş devreye alma test ekipmanı. Bu sorunlar kritik hale gelmeden 4-8 hafta önce tespit edildiğinde düşük maliyetle çözülebilir."
      }
    ];
  }

  if (service.slug === "grid-compliance-audit" || service.slug === "sebeke-uyum-denetimi") {
    return en ? [
      {
        heading: "TEİAŞ Requirements Covered in the Audit",
        content: "The grid compliance audit reviews the plant's compliance with the key requirements of the TEİAŞ Sistem İşletim Yönetmeliği (System Operation Regulation). Specific requirements reviewed include: protection relay settings (overcurrent, earth fault, under/overvoltage, under/overfrequency, loss-of-mains protection) calibrated against the network operator's coordination study; reactive power capability (the plant must be able to operate within the required power factor range at all generation levels); fault ride-through (FRT) performance (the plant must remain connected through voltage dips as specified in the connection agreement); anti-islanding protection (the plant must detect and disconnect from an islanded section of the network); SCADA telemetry interface (the plant must provide the specified real-time data to TEİAŞ); and grid connection documentation (connection agreement, approval for energization, protection coordination study approval)."
      },
      {
        heading: "Common Compliance Gaps in Operating Plants",
        content: "The most frequently identified compliance gaps in operating solar and hydropower plants in Turkey include: protection relay settings that have drifted from the originally approved values without documentation or re-approval from the network operator; reactive power compensation that is undersized or not functioning correctly, causing the plant to operate below the minimum required power factor; FRT settings that do not match the voltage-time profile specified in the connection agreement; SCADA telemetry signals that are not updated or calibrated, causing discrepancies between the plant's reported output and the network operator's measurement; and documentation gaps where the as-installed configuration does not match the approved design."
      }
    ] : [
      {
        heading: "Denetimde Kapsanan TEİAŞ Gereksinimleri",
        content: "Şebeke uyum denetimi, santralin TEİAŞ Sistem İşletim Yönetmeliği'nin temel gereksinimleriyle uyumunu inceler. İncelenen spesifik gereksinimler şunlardır: şebeke işleticisinin koordinasyon etüdüne göre kalibre edilmiş koruma rölesi ayarları; reaktif güç kabiliyeti (santral tüm üretim düzeylerinde gerekli güç faktörü aralığında çalışabilmelidir); hata geçiş (FRT) performansı (santral bağlantı anlaşmasında belirtilen gerilim çöküntüleri boyunca bağlı kalmalıdır); ada önleme koruması; SCADA telemetri arayüzü ve şebeke bağlantısı dokümantasyonu."
      },
      {
        heading: "İşletmedeki Santrallerde Yaygın Uyum Boşlukları",
        content: "Türkiye'deki işletmedeki GES ve HES'lerde en sık tespit edilen uyum boşlukları şunlardır: şebeke işleticisinden belgeleme veya yeniden onay alınmadan başlangıçta onaylanan değerlerden sapan koruma rölesi ayarları; santralin minimum gerekli güç faktörünün altında çalışmasına neden olan yetersiz boyutlandırılmış veya doğru çalışmayan reaktif güç kompanzasyonu; bağlantı anlaşmasında belirtilen gerilim-zaman profilini karşılamayan FRT ayarları; santralin raporlanan çıktısı ile şebeke işleticisinin ölçümü arasında tutarsızlıklara neden olan güncellenmeyen veya kalibre edilmeyen SCADA telemetri sinyalleri."
      }
    ];
  }

  if (service.slug === "power-quality-audit" || service.slug === "guc-kalitesi-denetimi") {
    return en ? [
      {
        heading: "Power Quality Issues That Affect Renewable Plants",
        content: "The most common power quality problems affecting renewable energy plants and industrial facilities in Turkey include: harmonic distortion (created by inverters, variable speed drives, and switching equipment — can cause transformer overheating, capacitor bank failure, relay maloperation, and metering errors); voltage imbalance (unbalanced loading or asymmetric faults create negative sequence voltage that reduces generator and motor efficiency and life); flicker (rapid voltage fluctuations caused by arc furnaces, spot welders or wind turbines can affect sensitive equipment and violate grid connection limits); and frequency deviation (relevant for islanded systems or plants with synchronous generators operating at partial load). Each of these has specific limits defined in IEEE 519, IEC 61000-3-x, and TEİAŞ grid connection requirements."
      },
      {
        heading: "Measurement Duration and Data Interpretation",
        content: "Power quality measurement is not a one-day snapshot. IEC 61000-4-30 Class A measurement requires a minimum of 7 days of continuous measurement to capture the full weekly load variation pattern. Harmonic levels vary significantly with load level, time of day, and season — a measurement taken during a low-load weekend will underestimate the harmonic exposure during a high-load weekday. The measurement report must present 10-minute aggregated statistics (per IEC 61000-4-30), 95th percentile values for comparison with limits, and identification of the times and operating conditions associated with limit exceedances. Oztoprak Energy interprets measurement data against the specific grid connection agreement limits rather than generic standard limits, since connection agreement limits are the ones that have legal and contractual relevance."
      }
    ] : [
      {
        heading: "Yenilenebilir Enerji Santrallerini Etkileyen Güç Kalitesi Sorunları",
        content: "Türkiye'deki yenilenebilir enerji santralleri ve sanayi tesislerini etkileyen en yaygın güç kalitesi sorunları şunlardır: harmonik bozunum (invertörler, değişken hız sürücüleri ve anahtarlama ekipmanları tarafından oluşturulan — trafo aşırı ısınması, kondansatör grubu arızası, röle hatalı çalışması ve sayaç hatalarına neden olabilir); gerilim dengesizliği (dengesiz yükleme veya asimetrik arızalar jeneratör ve motor verimliliğini ve ömrünü azaltan negatif sıra gerilimi yaratır); flicker (ark ocakları, nokta kaynak makineleri veya rüzgar türbinlerinden kaynaklanan hızlı gerilim dalgalanmaları hassas ekipmanı etkileyebilir); frekans sapması (kısmi yükte çalışan senkron jeneratörlere sahip izole sistemler veya santraller için geçerlidir). Bunların her birinin IEEE 519, IEC 61000-3-x ve TEİAŞ şebeke bağlantısı gereksinimlerinde tanımlanmış spesifik limitleri vardır."
      },
      {
        heading: "Ölçüm Süresi ve Veri Yorumlama",
        content: "Güç kalitesi ölçümü tek günlük bir anlık görüntü değildir. IEC 61000-4-30 A Sınıfı ölçümü, tam haftalık yük değişim modelini yakalamak için minimum 7 gün sürekli ölçüm gerektirir. Harmonik düzeyler yük düzeyine, günün saatine ve mevsime göre önemli ölçüde değişir — düşük yük hafta sonu esnasında alınan bir ölçüm, yüksek yük hafta içi günündeki harmonik maruziyetini küçümser. Öztoprak Enerji ölçüm verilerini genel standart limitlerinden ziyade spesifik şebeke bağlantı anlaşması limitlerine karşı yorumlar, zira bağlantı anlaşması limitleri hukuki ve sözleşmesel ilgiye sahip olanlardır."
      }
    ];
  }

  if (service.slug === "asset-management" || service.slug === "teknik-varlik-yonetimi") {
    return en ? [
      {
        heading: "What Performance Monitoring Actually Measures",
        content: "Effective technical asset management begins with measuring the right things — not just total generation. The key performance indicators that drive asset management decisions include: Performance Ratio (PR) trend over time against a weather-corrected baseline (declining PR indicates soiling, degradation, or equipment issues); specific yield (kWh/kWp) compared to the energy yield assessment P50 (persistent underperformance against P50 means the original yield estimate or the plant design is not being achieved); availability (actual plant availability vs. O&M contract target — gaps indicate contractor underperformance); forced outage rate (frequency and duration of unplanned outages — trends indicate equipment aging or O&M quality issues); and reactive power compliance status (TEİAŞ penalty exposure)."
      },
      {
        heading: "O&M Contractor Oversight and KPI Management",
        content: "An O&M contract that is not actively monitored provides little protection. Common O&M contractor failures that technical asset management identifies include: preventive maintenance activities completed on paper but not on site; response times for fault clearance exceeding contract SLAs without escalation; spare parts not stocked as required by the contract; soiling cleaning intervals not adhered to during critical generation periods; and maintenance reports produced that do not reflect actual site conditions. Oztoprak Energy reviews O&M performance against the specific KPIs in the O&M contract — not generic benchmarks — and produces evidence-based performance assessments that allow owners to enforce contract obligations or negotiate justified scope reductions."
      }
    ] : [
      {
        heading: "Performans İzlemenin Gerçekte Neyi Ölçtüğü",
        content: "Etkin teknik varlık yönetimi doğru şeyleri ölçmekle başlar — sadece toplam üretimi değil. Varlık yönetimi kararlarını yönlendiren temel performans göstergeleri şunlardır: hava düzeltmeli referans eğrisine karşı zaman içindeki Performans Oranı (PR) trendi (düşen PR kirlenme, bozulma veya ekipman sorunlarını gösterir); enerji verimi değerlendirmesi P50'ye karşı spesifik verim (kWh/kWp) (P50'ye karşı süregelen düşük performans, orijinal verim tahmininin veya santral tasarımının elde edilemediği anlamına gelir); emre amadelik (gerçek santral emre amadeliği ile O&M sözleşme hedefine karşı — boşluklar yüklenici düşük performansını gösterir); ve reaktif güç uyum durumu (TEİAŞ ceza maruziyeti)."
      },
      {
        heading: "O&M Yüklenici Denetimi ve KPI Yönetimi",
        content: "Aktif olarak izlenmeyen bir O&M sözleşmesi çok az koruma sağlar. Teknik varlık yönetiminin tespit ettiği yaygın O&M yüklenici başarısızlıkları şunlardır: kağıt üzerinde tamamlanan ama sahada yapılmayan önleyici bakım faaliyetleri; sözleşme SLA'larını aşan arıza giderme yanıt süreleri; sözleşmenin gerektirdiği şekilde depolanmayan yedek parçalar; kritik üretim dönemlerinde uyulunmayen temizlik aralıkları; ve gerçek saha koşullarını yansıtmayan bakım raporları. Öztoprak Enerji O&M performansını genel referanslara değil O&M sözleşmesindeki spesifik KPI'lara karşı inceler."
      }
    ];
  }

  return [];
}

export function generateStaticParams() {
  return (["en", "tr"] as Locale[]).flatMap((locale) => getServices(locale).map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const service = getService(locale, slug);
  if (!service) return {};
  const index = getServices(locale).findIndex((item) => item.slug === slug);
  const translated = getServices(alternateLocale(locale))[index];
  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    alternatePath: translated ? `/services/${translated.slug}` : undefined,
    title: service.title,
    description: service.description
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);
  const service = getService(locale, slug);
  if (!service) notFound();
  const authoritySections = [...serviceAuthoritySections(locale, service), ...specializedServiceSections(locale, service), ...serviceExpansionSections(locale, service)];
  const serviceFaqs = [
    ...service.faqs,
    {
      question: locale === "en" ? `What evidence is reviewed for ${service.title}?` : `${service.title} için hangi kanıtlar incelenir?`,
      answer: locale === "en"
        ? `The review typically uses ${service.scope.slice(0, 3).join(", ")} together with operating records, EPC documents, commissioning evidence and owner priorities.`
        : `İnceleme genellikle ${service.scope.slice(0, 3).join(", ")} kapsamlarını; işletme kayıtları, EPC dokümanları, devreye alma kanıtları ve işveren öncelikleriyle birlikte kullanır.`
    },
    {
      question: locale === "en" ? `What makes this ${service.title.toLowerCase()} engagement decision-ready?` : `Bu ${service.title} çalışmasını karara hazır yapan nedir?`,
      answer: locale === "en"
        ? `Findings are tied to ${service.outcomes.slice(0, 2).join(" and ")}, then ranked by technical risk, generation impact, implementation urgency and evidence quality.`
        : `Bulgular ${service.outcomes.slice(0, 2).join(" ve ")} ile ilişkilendirilir; ardından teknik risk, üretim etkisi, uygulama aciliyeti ve kanıt kalitesine göre sıralanır.`
    }
  ];

  const schemas = [
    breadcrumbSchema([
      { name: dict.labels.breadcrumbsHome, url: `/${locale}` },
      { name: dict.nav.services, url: servicesIndexPath(locale) },
      { name: service.title, url: `/${locale}/services/${service.slug}` }
    ]),
    serviceSchema(locale, service),
    faqSchema(serviceFaqs)
  ];

  return (
    <>
      <StickyConsultationCta locale={locale} />
      <MobileStickyCtaBar locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <section className="bg-navy-950 py-20">
        <Container>
          <Breadcrumbs locale={locale} items={[{ label: dict.nav.services, href: servicesIndexPath(locale) }, { label: service.title }]} />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{service.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contactHref(locale)} className="rounded-md bg-energy-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow hover:bg-white">
              {dict.nav.consultation}
            </Link>
            <Link href={`/${locale}/projects`} className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500">
              {dict.nav.projects}
            </Link>
          </div>
          <div className="mt-12">
            <AuthorityMetrics locale={locale} />
          </div>
        </Container>
      </section>
      <EngineeringVisualBlocks locale={locale} />
      <section className="bg-navy-900 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="rounded-lg border border-energy-500/25 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Problem and Solution" : "Problem ve Çözüm"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? `${service.title} helps technical buyers move from uncertain asset conditions, EPC ambiguity and incomplete operating evidence toward a ranked engineering action plan. The consultancy is designed for hydropower consulting, solar energy consulting, power plant operations support, HPP commissioning and energy audit services where the output must support real decisions.`
                  : `${service.title}; belirsiz varlık durumu, EPC kapsam belirsizliği ve eksik işletme kanıtlarından önceliklendirilmiş mühendislik aksiyon planına geçiş sağlar. Çalışma HES danışmanlığı, GES danışmanlığı, enerji santrali işletme desteği, devreye alma ve enerji denetimi kararlarını desteklemek üzere tasarlanır.`}
              </p>
            </div>
            <div className="mt-12 grid gap-8">
              {authoritySections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-steel">{section.content}</p>
                </section>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-white">{dict.labels.technicalScope}</h2>
            <div className="mt-6 grid gap-4">
              {service.scope.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-steel">{item}</div>
              ))}
            </div>
            <h2 className="mt-12 text-2xl font-semibold text-white">{dict.labels.results}</h2>
            <ul className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <li key={item} className="border-l-2 border-energy-500 pl-4 text-steel">{item}</li>
              ))}
            </ul>
            <div className="mt-12 rounded-lg border border-energy-500/30 bg-energy-500/10 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {locale === "en" ? "Consultant Recommendation" : "Danisman Tavsiyesi"}
              </h2>
              <p className="mt-4 leading-8 text-steel">
                {locale === "en"
                  ? `For ${service.title}, the strongest results come when site evidence, EPC documents, commissioning records and O&M logs are reviewed together. This prevents isolated findings and gives the owner a ranked engineering action plan.`
                  : `${service.title} calismasinda en guclu sonuc; saha kanitlari, EPC dokumanlari, devreye alma kayitlari ve isletme bakim loglari birlikte incelendiginde alinir. Bu yaklasim tekil bulgular yerine onceliklendirilmis muhendislik aksiyon plani uretir.`}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/${locale}/blog`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.blog}</Link>
                <Link href={`/${locale}/projects`} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.projects}</Link>
                <Link href={contactHref(locale)} className="text-sm font-semibold text-energy-500 hover:text-white">{dict.nav.contact}</Link>
              </div>
            </div>
          </div>
          <aside className="premium-card rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 grid gap-6">
              {serviceFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel">{faq.answer}</p>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>
      <ConversionFunnel locale={locale} />
      {(service.slug === "industrial-energy-cost-optimization" || service.slug === "endustriyel-enerji-maliyet-optimizasyonu") && (
        <section className="bg-energy-500/10 border-y border-energy-500/20 py-14">
          <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-energy-500">
                {locale === "en" ? "Free Offer" : "Ücretsiz Teklif"}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                {locale === "en"
                  ? "Get a Free Electricity Bill Review"
                  : "Ücretsiz Elektrik Faturası İncelemesi Alın"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-steel">
                {locale === "en"
                  ? "Send us your last 12 months of electricity bills. We will identify reactive penalties, contract demand risks, tariff optimization opportunities and rooftop solar feasibility — at no charge. Preliminary memo delivered within 5–7 working days."
                  : "Son 12 aylık elektrik faturalarınızı gönderin. Reaktif enerji cezaları, sözleşme gücü riskleri, tarife optimizasyon fırsatları ve çatı GES fizibilitesini ücretsiz olarak belirleyelim. Ön not 5–7 iş günü içinde teslim edilir."}
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href={locale === "en" ? "/en/industrial-bill-review" : "/tr/industrial-bill-review"}
                className="rounded-md bg-energy-500 px-6 py-4 text-center text-sm font-bold text-navy-950 shadow-glow hover:bg-white"
              >
                {locale === "en" ? "Request Free Review" : "Ücretsiz İnceleme Talep Et"}
              </Link>
              <Link
                href={locale === "en" ? "/en/reactive-penalty-analysis" : "/tr/reactive-penalty-analysis"}
                className="rounded-md border border-white/20 bg-white/[0.05] px-6 py-3 text-center text-sm font-semibold text-white hover:border-energy-500 hover:text-energy-500"
              >
                {locale === "en" ? "Reactive Penalty Analysis" : "Reaktif Ceza Analizi"}
              </Link>
            </div>
          </Container>
        </section>
      )}
      <section className="bg-navy-950 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {locale === "en" ? "Request a Plant Performance Review" : "Santral Performans İncelemesi Talep Edin"}
            </h2>
            <p className="mt-4 leading-8 text-steel">
              {locale === "en"
                ? "Use the form to request a technical consultation, operational assessment, EPC advisory review or plant performance review. Include the project type, capacity, current decision deadline and the main technical concern."
                : "Teknik danışmanlık, operasyonel değerlendirme, EPC danışmanlığı veya santral performans incelemesi talep etmek için formu kullanın. Proje türünü, kapasiteyi, karar takvimini ve ana teknik problemi paylaşın."}
            </p>
          </div>
          <ContactForm dict={dict} locale={locale} />
        </Container>
      </section>
      <RelatedContent locale={locale} seed={{ services: [service.slug], categories: service.keywords, exclude: service.slug }} />
      <CtaSection locale={locale} />
    </>
  );
}
