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
