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
