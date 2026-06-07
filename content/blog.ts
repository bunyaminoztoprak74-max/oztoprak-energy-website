import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/content/types";

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: "common-problems-during-hydropower-plant-commissioning",
      title: "Common Problems During Hydropower Plant Commissioning",
      description: "Commissioning risks that commonly affect HPP startup, grid synchronization, protection readiness and operational handover.",
      category: "Commissioning",
      categorySlug: "commissioning",
      date: "2026-05-01",
      readingTime: "8 min",
      toc: ["Commissioning readiness gaps", "Protection and grid interface issues", "Handover evidence for operations"],
      related: ["power-plant-operational-readiness-checklist", "hydropower-efficiency-optimization-methods"],
      serviceLinks: ["power-plant-commissioning", "hydropower-consulting", "owners-engineering"],
      body: [
        { heading: "Commissioning readiness gaps", content: "Hydropower commissioning often becomes difficult when mechanical completion, pre-commissioning and functional testing are treated as one combined activity. A controlled HPP startup requires clear system boundaries, signed test procedures, verified instrumentation, trained operators and punch-list items ranked by startup risk." },
        { heading: "Protection and grid interface issues", content: "Grid synchronization depends on correct protection settings, breaker logic, AVR behavior, governor response, communication protocols and utility acceptance. When these items are reviewed late, commissioning teams face avoidable delays and unclear responsibility between EPC, owner and grid stakeholders." },
        { heading: "Handover evidence for operations", content: "The most valuable commissioning output is not only a successful first synchronization. It is a complete evidence package that operations can use later: test records, as-built drawings, protection files, alarm lists, operator procedures and unresolved risk notes." }
      ],
      faqs: [
        { question: "When should hydropower commissioning planning begin?", answer: "Commissioning planning should begin before construction completion pressure rises, ideally while design interfaces, protection settings and operating procedures can still be challenged without delaying energization." },
        { question: "What is the biggest commissioning risk for HPP projects?", answer: "The biggest risk is incomplete readiness evidence. Without verified procedures, settings, punch-list priorities and operations handover records, startup risk transfers into commercial operation." }
      ]
    },
    {
      slug: "hydropower-efficiency-optimization-methods",
      title: "Hydropower Efficiency Optimization Methods",
      description: "Practical methods for improving hydropower output, water-to-wire efficiency, availability and O&M performance.",
      category: "Hydropower",
      categorySlug: "hydropower",
      date: "2026-05-02",
      readingTime: "8 min",
      toc: ["Separate hydrology from technical loss", "Review water-to-wire performance", "Prioritize O&M actions"],
      related: ["common-problems-during-hydropower-plant-commissioning", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["hydropower-consulting", "energy-audit", "om-performance-improvement"],
      body: [
        { heading: "Separate hydrology from technical loss", content: "Hydropower optimization starts by separating unavoidable water conditions from avoidable technical loss. Production records, reservoir or river flow, unit dispatch, outage history and operating restrictions must be reviewed together before assigning a loss cause." },
        { heading: "Review water-to-wire performance", content: "Efficiency is affected by intake conditions, hydraulic losses, turbine condition, generator behavior, cooling systems, control tuning, auxiliary loads and operator routines. A useful review connects these elements instead of treating each equipment package separately." },
        { heading: "Prioritize O&M actions", content: "Optimization should end with a ranked action plan. The strongest recommendations show expected energy impact, reliability impact, outage requirement, implementation difficulty and whether the work is OPEX, minor corrective maintenance or CAPEX." }
      ],
      faqs: [
        { question: "Can an operating HPP be optimized without major CAPEX?", answer: "Yes. Many gains come from operating discipline, maintenance planning, alarm response, control tuning review and better loss visibility before larger investments are required." },
        { question: "What data is needed for hydropower optimization?", answer: "Useful data includes generation, flow, outages, alarms, maintenance records, unit dispatch, test records and historical commissioning baselines." }
      ]
    },
    {
      slug: "solar-plant-performance-ratio-analysis",
      title: "Solar Plant Performance Ratio Analysis",
      description: "How solar PR analysis should be interpreted with EPC evidence, O&M routines, inverter behavior and real field conditions.",
      category: "Solar",
      categorySlug: "solar",
      date: "2026-05-03",
      readingTime: "7 min",
      toc: ["What PR can and cannot explain", "EPC evidence and inverter behavior", "Turning PR findings into action"],
      related: ["how-epc-delays-affect-power-plant-revenue", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["solar-energy-consulting", "energy-audit", "epc-technical-advisory"],
      body: [
        { heading: "What PR can and cannot explain", content: "Performance ratio is a useful solar KPI, but it cannot explain asset performance alone. Irradiance quality, curtailment, temperature, soiling, inverter availability, string-level faults and metering accuracy must be reviewed before conclusions are drawn." },
        { heading: "EPC evidence and inverter behavior", content: "Solar underperformance often begins with a handover evidence gap. As-built records, commissioning tests, punch-list closure, inverter event logs and warranty boundaries should be reviewed together to separate delivery issues from operational degradation." },
        { heading: "Turning PR findings into action", content: "A good PR analysis creates a prioritized recovery plan. Actions may include monitoring corrections, cleaning logic, inverter troubleshooting, string inspections, O&M response improvements and EPC warranty follow-up." }
      ],
      faqs: [
        { question: "Is low PR always an EPC problem?", answer: "No. Low PR can result from resource variation, curtailment, soiling, equipment faults, poor O&M response or EPC quality issues. Evidence is needed before assigning responsibility." },
        { question: "How often should PR be reviewed?", answer: "PR should be monitored continuously and formally reviewed when losses persist, after major faults, before acquisition, or when O&M performance is questioned." }
      ]
    },
    {
      slug: "how-epc-delays-affect-power-plant-revenue",
      title: "How EPC Delays Affect Power Plant Revenue",
      description: "Why EPC delays create revenue exposure through late energization, incomplete commissioning and unresolved technical interfaces.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-05-04",
      readingTime: "7 min",
      toc: ["Delay is not only a schedule issue", "Commissioning delay drivers", "Owner-side controls that reduce exposure"],
      related: ["common-problems-during-hydropower-plant-commissioning", "power-plant-operational-readiness-checklist"],
      serviceLinks: ["epc-technical-advisory", "owners-engineering", "power-plant-commissioning"],
      body: [
        { heading: "Delay is not only a schedule issue", content: "EPC delay affects revenue because every unresolved interface can postpone energization, performance testing, grid acceptance and commercial operation. Technical delay also creates legal and commercial ambiguity when evidence is weak." },
        { heading: "Commissioning delay drivers", content: "Common drivers include late test procedures, unclear protection settings, missing grid documents, incomplete SCADA readiness, open punch-list items and O&M teams that are not ready to receive the asset." },
        { heading: "Owner-side controls that reduce exposure", content: "Owners can reduce delay exposure through independent deliverable review, interface risk registers, commissioning readiness gates, decision memos and evidence-based acceptance criteria." }
      ],
      faqs: [
        { question: "How can owners reduce EPC delay risk?", answer: "Owners should review design interfaces, contractor deliverables, commissioning readiness and handover evidence before schedule pressure forces rushed acceptance." },
        { question: "Do EPC delays affect long-term operations?", answer: "Yes. Delayed or rushed commissioning can transfer unresolved technical issues into O&M, increasing trips, documentation gaps and reliability risk." }
      ]
    },
    {
      slug: "power-plant-operational-readiness-checklist",
      title: "Power Plant Operational Readiness Checklist",
      description: "A practical checklist for confirming whether a renewable power plant is ready for reliable operation after EPC delivery.",
      category: "Operations",
      categorySlug: "operations",
      date: "2026-05-05",
      readingTime: "8 min",
      toc: ["Technical documentation", "People and procedures", "Performance and reliability evidence"],
      related: ["common-problems-during-hydropower-plant-commissioning", "hydropower-efficiency-optimization-methods"],
      serviceLinks: ["owners-engineering", "power-plant-commissioning", "energy-audit"],
      body: [
        { heading: "Technical documentation", content: "Operational readiness requires accurate as-built drawings, protection settings, O&M manuals, commissioning test records, punch-list status, warranty boundaries and spare parts information. Missing documents become operational risk." },
        { heading: "People and procedures", content: "Operators need training, alarm response routines, permit procedures, maintenance planning, reporting lines and escalation rules. A technically complete plant can still underperform if the operating organization is not ready." },
        { heading: "Performance and reliability evidence", content: "Readiness should be proven through functional tests, performance tests, reliability observations and evidence that recurring alarms or trips have been understood before takeover." }
      ],
      faqs: [
        { question: "Who should own operational readiness?", answer: "Operational readiness should be jointly controlled by the owner, EPC contractor and O&M team, with clear responsibility for evidence, acceptance and unresolved risks." },
        { question: "What is the best output of a readiness review?", answer: "The best output is a prioritized list of actions that must be closed before operation, plus risk notes for items that can be managed after takeover." }
      ]
    },
    {
      slug: "hydropower-plant-efficiency-optimization-guide",
      title: "Hydropower Plant Efficiency Optimization Guide",
      description: "A practical guide to improving hydropower output, availability and maintenance discipline.",
      category: "Hydropower",
      categorySlug: "hydropower",
      date: "2026-01-10",
      readingTime: "6 min",
      toc: ["Start with measured losses", "Review water-to-wire performance", "Turn findings into O&M actions"],
      related: ["why-existing-hydropower-plants-need-technical-audits", "power-plant-commissioning-checklist"],
      serviceLinks: ["hydropower-plant-optimization", "om-performance-improvement"],
      body: [
        { heading: "Start with measured losses", content: "Hydropower optimization should begin with production data, outage history, water availability and unit-level operating patterns. This separates unavoidable hydrology from avoidable technical loss." },
        { heading: "Review water-to-wire performance", content: "Turbine, generator, hydraulic structures, controls and auxiliary systems must be reviewed together. A narrow equipment-only review can miss the interface issues that reduce real plant output." },
        { heading: "Turn findings into O&M actions", content: "The strongest optimization plans rank actions by energy impact, reliability impact, cost and outage requirement so owners can execute improvements without disrupting production unnecessarily." }
      ]
    },
    {
      slug: "common-epc-mistakes-renewable-energy-projects",
      title: "Common EPC Mistakes in Renewable Energy Projects",
      description: "Frequent EPC delivery mistakes that increase technical risk in renewable energy projects.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-01-18",
      readingTime: "5 min",
      toc: ["Weak interface ownership", "Late commissioning planning", "Incomplete handover evidence"],
      related: ["power-plant-commissioning-checklist", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["epc-technical-consultancy", "owners-engineering"],
      body: [
        { heading: "Weak interface ownership", content: "Many EPC issues arise between civil, electrical, mechanical, grid and control scopes. Interface matrices and decision ownership should be active documents, not tender-stage formalities." },
        { heading: "Late commissioning planning", content: "Commissioning risk grows when test procedures, energization sequences and acceptance criteria are created too late. Early readiness reviews protect schedule and asset quality." },
        { heading: "Incomplete handover evidence", content: "Owners need test results, as-built records, protection settings, O&M manuals and punch-list closure evidence that can support reliable operation years after takeover." }
      ]
    },
    {
      slug: "power-plant-commissioning-checklist",
      title: "Power Plant Commissioning Checklist",
      description: "A commissioning checklist structure for safer startup, testing and handover.",
      category: "Commissioning",
      categorySlug: "commissioning",
      date: "2026-02-02",
      readingTime: "7 min",
      toc: ["Mechanical completion", "Electrical energization", "Functional and performance testing"],
      related: ["common-epc-mistakes-renewable-energy-projects", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["power-plant-commissioning", "epc-technical-consultancy"],
      body: [
        { heading: "Mechanical completion", content: "Completion status should be verified system by system, with clear punch-list ownership and boundaries between construction, pre-commissioning and commissioning." },
        { heading: "Electrical energization", content: "Energization requires verified protection settings, inspections, permits, communication protocols and a controlled sequence accepted by responsible parties." },
        { heading: "Functional and performance testing", content: "Functional tests prove systems operate correctly; performance tests show the plant can meet contractual and operational expectations under defined conditions." }
      ]
    },
    {
      slug: "grid-and-protection-system-analysis-for-power-plants",
      title: "Grid and Protection System Analysis for Power Plants",
      description: "Why protection coordination and grid interface review are critical for renewable power plant reliability.",
      category: "Grid",
      categorySlug: "grid",
      date: "2026-02-14",
      readingTime: "6 min",
      toc: ["Protection settings are asset value decisions", "Trip history reveals coordination issues", "Grid compliance needs evidence"],
      related: ["power-plant-commissioning-checklist", "common-epc-mistakes-renewable-energy-projects"],
      serviceLinks: ["grid-protection-system-analysis", "technical-audits-existing-power-plants"],
      body: [
        { heading: "Protection settings are asset value decisions", content: "Incorrect protection assumptions can create unnecessary trips, equipment stress or utility compliance issues. Settings must match the actual grid interface and plant configuration." },
        { heading: "Trip history reveals coordination issues", content: "Reviewing event records and operating logs helps identify whether trips are caused by equipment faults, grid disturbances or protection miscoordination." },
        { heading: "Grid compliance needs evidence", content: "Owners should keep a defensible record of settings, tests, studies and utility correspondence to support reliable operation and audits." }
      ]
    },
    {
      slug: "solar-plant-performance-improvement-guide",
      title: "Solar Plant Performance Improvement Guide",
      description: "How owners can diagnose solar PV underperformance and prioritize recovery actions.",
      category: "Solar",
      categorySlug: "solar",
      date: "2026-03-01",
      readingTime: "5 min",
      toc: ["Separate resource from technical loss", "Review EPC quality evidence", "Improve O&M response loops"],
      related: ["common-epc-mistakes-renewable-energy-projects", "power-plant-commissioning-checklist"],
      serviceLinks: ["solar-power-plant-consultancy", "om-performance-improvement"],
      body: [
        { heading: "Separate resource from technical loss", content: "Irradiance, temperature, curtailment, inverter availability, soiling and string-level issues must be separated before assigning performance responsibility." },
        { heading: "Review EPC quality evidence", content: "As-built records, test results and punch-list closure can reveal whether underperformance began at delivery or developed during operation." },
        { heading: "Improve O&M response loops", content: "Fast fault response, cleaning discipline, inspection routines and performance analytics are often the fastest path to better energy yield." }
      ]
    },
    {
      slug: "why-existing-hydropower-plants-need-technical-audits",
      title: "Why Existing Hydropower Plants Need Technical Audits",
      description: "How technical audits help owners understand risk, reliability and investment priorities in operating hydropower assets.",
      category: "Technical Audits",
      categorySlug: "technical-audits",
      date: "2026-03-15",
      readingTime: "6 min",
      toc: ["Aging assets hide technical debt", "Operations data needs engineering context", "Audit outputs should support decisions"],
      related: ["hydropower-plant-efficiency-optimization-guide", "grid-and-protection-system-analysis-for-power-plants"],
      serviceLinks: ["technical-audits-existing-power-plants", "hydropower-plant-optimization"],
      body: [
        { heading: "Aging assets hide technical debt", content: "Hydropower plants can operate for decades while accumulating documentation gaps, unresolved defects and maintenance shortcuts that gradually reduce reliability." },
        { heading: "Operations data needs engineering context", content: "Availability, outages and production trends become more useful when interpreted together with site observations, equipment condition and historical project records." },
        { heading: "Audit outputs should support decisions", content: "A good audit produces a prioritized technical risk register, corrective action roadmap and investment logic that owners can use immediately." }
      ]
    }
  ],
  tr: [
    {
      slug: "hes-devreye-alma-sirasinda-sik-gorulen-problemler",
      title: "HES Devreye Alma Sırasında Sık Görülen Problemler",
      description: "HES başlangıcı, şebeke senkronizasyonu, koruma hazırlığı ve işletmeye teslimi etkileyen yaygın devreye alma riskleri.",
      category: "Devreye Alma",
      categorySlug: "devreye-alma",
      date: "2026-05-01",
      readingTime: "8 dk",
      toc: ["Devreye alma hazırlık boşlukları", "Koruma ve şebeke arayüz sorunları", "İşletme için teslim kanıtı"],
      related: ["enerji-santrali-operasyonel-hazirlik-kontrol-listesi", "hes-verimlilik-optimizasyon-yontemleri"],
      serviceLinks: ["enerji-santrali-devreye-alma", "hes-danismanligi", "isveren-muhendisligi"],
      body: [
        { heading: "Devreye alma hazırlık boşlukları", content: "HES devreye alma süreci mekanik tamamlama, ön devreye alma ve fonksiyonel testler tek faaliyet gibi yönetildiğinde zorlaşır. Kontrollü başlangıç için sistem sınırları, imzalı test prosedürleri, doğrulanmış enstrümantasyon, eğitimli operatörler ve risk bazlı eksik iş listesi gerekir." },
        { heading: "Koruma ve şebeke arayüz sorunları", content: "Şebeke senkronizasyonu doğru koruma ayarları, kesici mantığı, AVR davranışı, governor tepkisi, iletişim protokolleri ve dağıtım/iletim şirketi kabulüne bağlıdır. Bu kalemler geç incelendiğinde gecikme ve sorumluluk belirsizliği oluşur." },
        { heading: "İşletme için teslim kanıtı", content: "En değerli devreye alma çıktısı yalnızca ilk senkronizasyon değildir. İşletmenin daha sonra kullanacağı test kayıtları, as-built çizimler, koruma dosyaları, alarm listeleri, operatör prosedürleri ve açık risk notlarıdır." }
      ],
      faqs: [
        { question: "HES devreye alma planlaması ne zaman başlamalıdır?", answer: "Devreye alma planlaması enerjilendirme baskısı oluşmadan, tasarım arayüzleri ve koruma ayarları hâlâ sorgulanabilirken başlamalıdır." },
        { question: "HES devreye almada en büyük risk nedir?", answer: "En büyük risk eksik hazırlık kanıtıdır. Prosedür, ayar, eksik iş önceliği ve işletme teslim kayıtları olmadan risk ticari işletmeye taşınır." }
      ]
    },
    {
      slug: "hes-verimlilik-optimizasyon-yontemleri",
      title: "HES Verimlilik Optimizasyon Yöntemleri",
      description: "HES üretimi, su-güç verimi, emre amadelik ve O&M performansını iyileştirmek için pratik yöntemler.",
      category: "HES",
      categorySlug: "hes",
      date: "2026-05-02",
      readingTime: "8 dk",
      toc: ["Hidrolojiyi teknik kayıptan ayırın", "Su-güç performansını inceleyin", "O&M aksiyonlarını önceliklendirin"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["hes-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Hidrolojiyi teknik kayıptan ayırın", content: "HES optimizasyonu kaçınılmaz su koşullarını önlenebilir teknik kayıptan ayırarak başlar. Üretim kayıtları, akış, ünite yük dağılımı, duruş geçmişi ve işletme kısıtları birlikte incelenmelidir." },
        { heading: "Su-güç performansını inceleyin", content: "Verim; su alma koşulları, hidrolik kayıplar, türbin durumu, jeneratör davranışı, soğutma sistemleri, kontrol ayarı, yardımcı tüketimler ve operatör rutinlerinden etkilenir." },
        { heading: "O&M aksiyonlarını önceliklendirin", content: "Optimizasyon enerji etkisi, güvenilirlik etkisi, duruş ihtiyacı, uygulama zorluğu ve yatırım türü net olan sıralı aksiyon planıyla bitmelidir." }
      ],
      faqs: [
        { question: "Mevcut HES büyük CAPEX olmadan optimize edilebilir mi?", answer: "Evet. Birçok kazanım işletme disiplini, bakım planlama, alarm müdahalesi, kontrol ayarı incelemesi ve kayıp görünürlüğünden gelir." },
        { question: "HES optimizasyonu için hangi veri gerekir?", answer: "Üretim, akış, duruş, alarm, bakım kaydı, ünite yük dağılımı, test kayıtları ve devreye alma bazları faydalıdır." }
      ]
    },
    {
      slug: "ges-performans-orani-analizi",
      title: "GES Performans Oranı Analizi",
      description: "GES PR analizinin EPC kanıtı, O&M rutinleri, inverter davranışı ve saha koşullarıyla nasıl yorumlanması gerektiği.",
      category: "GES",
      categorySlug: "ges",
      date: "2026-05-03",
      readingTime: "7 dk",
      toc: ["PR neyi açıklar, neyi açıklamaz", "EPC kanıtı ve inverter davranışı", "PR bulgularını aksiyona çevirmek"],
      related: ["epc-gecikmeleri-enerji-santrali-gelirini-nasil-etkiler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["gunes-enerjisi-danismanligi", "enerji-denetimi", "epc-teknik-danismanlik-hizmeti"],
      body: [
        { heading: "PR neyi açıklar, neyi açıklamaz", content: "Performans oranı faydalı bir GES KPI'ıdır fakat tek başına varlık performansını açıklamaz. Işınım, kısıt, sıcaklık, kirlenme, inverter emre amadeliği, string arızaları ve ölçüm doğruluğu birlikte incelenmelidir." },
        { heading: "EPC kanıtı ve inverter davranışı", content: "GES düşük performansı çoğu zaman teslim kanıtı boşluğu ile başlar. As-built kayıtlar, devreye alma testleri, eksik iş kapanışı, inverter olay logları ve garanti sınırları birlikte değerlendirilmelidir." },
        { heading: "PR bulgularını aksiyona çevirmek", content: "İyi PR analizi öncelikli toparlama planı üretir. Aksiyonlar izleme düzeltmeleri, temizlik mantığı, inverter arıza incelemesi, string kontrolleri, O&M müdahale iyileştirmesi ve EPC garanti takibini içerebilir." }
      ],
      faqs: [
        { question: "Düşük PR her zaman EPC problemi midir?", answer: "Hayır. Düşük PR kaynak değişkenliği, kısıt, kirlenme, ekipman arızası, zayıf O&M müdahalesi veya EPC kalite probleminden kaynaklanabilir." },
        { question: "PR ne sıklıkla incelenmelidir?", answer: "PR sürekli izlenmeli; kalıcı kayıplar, büyük arızalar, satın alma öncesi veya O&M performansı sorgulandığında formal olarak incelenmelidir." }
      ]
    },
    {
      slug: "epc-gecikmeleri-enerji-santrali-gelirini-nasil-etkiler",
      title: "EPC Gecikmeleri Enerji Santrali Gelirini Nasıl Etkiler",
      description: "EPC gecikmelerinin geç enerjilendirme, eksik devreye alma ve açık teknik arayüzlerle nasıl gelir riski yarattığı.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-05-04",
      readingTime: "7 dk",
      toc: ["Gecikme yalnızca takvim konusu değildir", "Devreye alma gecikme nedenleri", "İşveren tarafı kontroller"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "enerji-santrali-operasyonel-hazirlik-kontrol-listesi"],
      serviceLinks: ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "enerji-santrali-devreye-alma"],
      body: [
        { heading: "Gecikme yalnızca takvim konusu değildir", content: "EPC gecikmesi gelir riskidir çünkü her açık arayüz enerjilendirme, performans testi, şebeke kabulü ve ticari işletmeyi geciktirebilir. Kanıt zayıf olduğunda teknik gecikme ticari belirsizlik de yaratır." },
        { heading: "Devreye alma gecikme nedenleri", content: "Yaygın nedenler geç test prosedürleri, belirsiz koruma ayarları, eksik şebeke dokümanları, SCADA hazırlık boşlukları, açık eksik işler ve varlığı devralmaya hazır olmayan O&M ekipleridir." },
        { heading: "İşveren tarafı kontroller", content: "İşverenler bağımsız doküman incelemesi, arayüz risk listesi, devreye alma hazırlık kapıları, karar notları ve kanıta dayalı kabul kriterleriyle gecikme riskini azaltabilir." }
      ],
      faqs: [
        { question: "İşveren EPC gecikme riskini nasıl azaltabilir?", answer: "Tasarım arayüzleri, yüklenici dokümanları, devreye alma hazırlığı ve teslim kanıtları takvim baskısından önce incelenmelidir." },
        { question: "EPC gecikmeleri uzun vadeli işletmeyi etkiler mi?", answer: "Evet. Gecikmiş veya aceleye gelmiş devreye alma çözülmemiş teknik konuları O&M sürecine taşır." }
      ]
    },
    {
      slug: "enerji-santrali-operasyonel-hazirlik-kontrol-listesi",
      title: "Enerji Santrali Operasyonel Hazırlık Kontrol Listesi",
      description: "EPC teslimi sonrası yenilenebilir enerji santralinin güvenilir işletmeye hazır olup olmadığını doğrulamak için pratik kontrol listesi.",
      category: "İşletme",
      categorySlug: "isletme",
      date: "2026-05-05",
      readingTime: "8 dk",
      toc: ["Teknik dokümantasyon", "İnsan ve prosedürler", "Performans ve güvenilirlik kanıtı"],
      related: ["hes-devreye-alma-sirasinda-sik-gorulen-problemler", "hes-verimlilik-optimizasyon-yontemleri"],
      serviceLinks: ["isveren-muhendisligi", "enerji-santrali-devreye-alma", "enerji-denetimi"],
      body: [
        { heading: "Teknik dokümantasyon", content: "Operasyonel hazırlık doğru as-built çizimler, koruma ayarları, O&M dokümanları, devreye alma test kayıtları, eksik iş durumu, garanti sınırları ve yedek parça bilgisi gerektirir." },
        { heading: "İnsan ve prosedürler", content: "Operatörlerin eğitim, alarm müdahale rutini, izin prosedürleri, bakım planlama, raporlama hatları ve eskalasyon kuralları hazır olmalıdır. Teknik olarak tamamlanmış bir santral, işletme organizasyonu hazır değilse düşük performans gösterebilir." },
        { heading: "Performans ve güvenilirlik kanıtı", content: "Hazırlık; fonksiyonel testler, performans testleri, güvenilirlik gözlemleri ve tekrarlayan alarm veya triplerin devir öncesi anlaşıldığına dair kanıtla gösterilmelidir." }
      ],
      faqs: [
        { question: "Operasyonel hazırlığın sahibi kim olmalıdır?", answer: "İşveren, EPC yüklenicisi ve O&M ekibi kanıt, kabul ve açık riskler için net sorumlulukla birlikte sahiplenmelidir." },
        { question: "Hazırlık incelemesinin en iyi çıktısı nedir?", answer: "En iyi çıktı işletme öncesi kapatılması gereken aksiyonlar ve devir sonrası yönetilebilecek risk notlarıdır." }
      ]
    },
    {
      slug: "hes-santrallerinde-verimlilik-optimizasyonu",
      title: "HES Santrallerinde Verimlilik Optimizasyonu",
      description: "HES üretimi, emre amadeliği ve bakım disiplinini iyileştirmek için pratik rehber.",
      category: "HES",
      categorySlug: "hes",
      date: "2026-01-10",
      readingTime: "6 dk",
      toc: ["Ölçülen kayıplarla başlayın", "Su-güç performansını inceleyin", "Bulguları O&M aksiyonuna çevirin"],
      related: ["mevcut-hes-santrallerinde-teknik-denetim-neden-gereklidir", "enerji-santrali-devreye-alma-kontrol-listesi"],
      serviceLinks: ["hes-optimizasyonu", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Ölçülen kayıplarla başlayın", content: "HES optimizasyonu üretim verisi, duruş geçmişi, su durumu ve ünite bazlı işletme paternleri ile başlamalıdır. Bu yaklaşım kaçınılmaz hidrolojiyi önlenebilir teknik kayıptan ayırır." },
        { heading: "Su-güç performansını inceleyin", content: "Türbin, jeneratör, hidrolik yapılar, kontrol sistemleri ve yardımcı sistemler birlikte değerlendirilmelidir. Sadece ekipmana odaklanan inceleme gerçek üretimi azaltan arayüz sorunlarını kaçırabilir." },
        { heading: "Bulguları O&M aksiyonuna çevirin", content: "En güçlü optimizasyon planları aksiyonları enerji etkisi, güvenilirlik etkisi, maliyet ve duruş ihtiyacına göre sıralar." }
      ]
    },
    {
      slug: "yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari",
      title: "Yenilenebilir Enerji Projelerinde Sık Yapılan EPC Hataları",
      description: "Yenilenebilir enerji projelerinde teknik riski artıran yaygın EPC teslim hataları.",
      category: "EPC",
      categorySlug: "epc",
      date: "2026-01-18",
      readingTime: "5 dk",
      toc: ["Zayıf arayüz sahipliği", "Geç devreye alma planlaması", "Eksik teslim kanıtları"],
      related: ["enerji-santrali-devreye-alma-kontrol-listesi", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["epc-teknik-danismanlik", "isveren-muhendisligi"],
      body: [
        { heading: "Zayıf arayüz sahipliği", content: "Birçok EPC problemi inşaat, elektrik, mekanik, şebeke ve kontrol kapsamlarının arasında oluşur. Arayüz matrisleri yaşayan dokümanlar olmalıdır." },
        { heading: "Geç devreye alma planlaması", content: "Test prosedürleri, enerjilendirme sıraları ve kabul kriterleri geç oluşturulduğunda devreye alma riski büyür." },
        { heading: "Eksik teslim kanıtları", content: "İşverenler test sonuçları, as-built kayıtlar, koruma ayarları, O&M dokümanları ve eksik iş kapanış kanıtlarını eksiksiz teslim almalıdır." }
      ]
    },
    {
      slug: "enerji-santrali-devreye-alma-kontrol-listesi",
      title: "Enerji Santrali Devreye Alma Kontrol Listesi",
      description: "Daha güvenli başlangıç, test ve teslim için devreye alma kontrol listesi yapısı.",
      category: "Devreye Alma",
      categorySlug: "devreye-alma",
      date: "2026-02-02",
      readingTime: "7 dk",
      toc: ["Mekanik tamamlama", "Elektrik enerjilendirme", "Fonksiyonel ve performans testleri"],
      related: ["yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["enerji-santrali-devreye-alma", "epc-teknik-danismanlik"],
      body: [
        { heading: "Mekanik tamamlama", content: "Tamamlama durumu sistem bazında doğrulanmalı, eksik iş sahipliği ve inşaat, ön devreye alma, devreye alma sınırları net olmalıdır." },
        { heading: "Elektrik enerjilendirme", content: "Enerjilendirme doğrulanmış koruma ayarları, kontroller, izinler, iletişim protokolleri ve kontrollü sıra gerektirir." },
        { heading: "Fonksiyonel ve performans testleri", content: "Fonksiyonel testler sistemlerin doğru çalıştığını; performans testleri santralin sözleşmesel ve operasyonel beklentileri karşıladığını gösterir." }
      ]
    },
    {
      slug: "santrallerde-sebeke-ve-koruma-sistemi-analizi",
      title: "Santrallerde Şebeke ve Koruma Sistemi Analizi",
      description: "Koruma koordinasyonu ve şebeke arayüz incelemesinin santral güvenilirliği için önemi.",
      category: "Şebeke",
      categorySlug: "sebeke",
      date: "2026-02-14",
      readingTime: "6 dk",
      toc: ["Koruma ayarları varlık değeri kararıdır", "Açma geçmişi koordinasyon sorunlarını gösterir", "Şebeke uyumu kanıt gerektirir"],
      related: ["enerji-santrali-devreye-alma-kontrol-listesi", "yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari"],
      serviceLinks: ["sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim"],
      body: [
        { heading: "Koruma ayarları varlık değeri kararıdır", content: "Hatalı koruma varsayımları gereksiz açmalara, ekipman zorlanmasına veya şebeke uyum sorunlarına yol açabilir." },
        { heading: "Açma geçmişi koordinasyon sorunlarını gösterir", content: "Olay kayıtları ve işletme logları, açmaların ekipman arızası, şebeke olayı veya koruma koordinasyonsuzluğundan kaynaklanıp kaynaklanmadığını gösterir." },
        { heading: "Şebeke uyumu kanıt gerektirir", content: "İşverenler ayarlar, testler, çalışmalar ve dağıtım/iletim şirketi yazışmaları için savunulabilir kayıt tutmalıdır." }
      ]
    },
    {
      slug: "ges-performans-iyilestirme-rehberi",
      title: "GES Performans İyileştirme Rehberi",
      description: "GES sahipleri düşük performansı nasıl teşhis edip toparlama aksiyonlarını nasıl önceliklendirebilir?",
      category: "GES",
      categorySlug: "ges",
      date: "2026-03-01",
      readingTime: "5 dk",
      toc: ["Kaynak etkisini teknik kayıptan ayırın", "EPC kalite kanıtlarını inceleyin", "O&M müdahale döngülerini güçlendirin"],
      related: ["yenilenebilir-enerji-projelerinde-sik-yapilan-epc-hatalari", "enerji-santrali-devreye-alma-kontrol-listesi"],
      serviceLinks: ["ges-danismanligi", "isletme-bakim-performans-iyilestirme"],
      body: [
        { heading: "Kaynak etkisini teknik kayıptan ayırın", content: "Işınım, sıcaklık, kısıt, inverter emre amadeliği, kirlenme ve string düzeyi sorunlar sorumluluk belirlenmeden ayrıştırılmalıdır." },
        { heading: "EPC kalite kanıtlarını inceleyin", content: "As-built kayıtlar, test sonuçları ve eksik iş kapanışı düşük performansın teslimde mi yoksa işletmede mi başladığını gösterebilir." },
        { heading: "O&M müdahale döngülerini güçlendirin", content: "Hızlı arıza müdahalesi, temizlik disiplini, kontrol rutinleri ve performans analitiği daha yüksek üretime giden en hızlı yollardandır." }
      ]
    },
    {
      slug: "mevcut-hes-santrallerinde-teknik-denetim-neden-gereklidir",
      title: "Mevcut HES Santrallerinde Teknik Denetim Neden Gereklidir",
      description: "Teknik denetimlerin çalışan HES varlıklarında risk, güvenilirlik ve yatırım önceliklerini nasıl netleştirdiği.",
      category: "Teknik Denetim",
      categorySlug: "teknik-denetim",
      date: "2026-03-15",
      readingTime: "6 dk",
      toc: ["Yaşlanan varlıklar teknik borç saklar", "İşletme verisi mühendislik bağlamı ister", "Denetim çıktıları karar desteklemelidir"],
      related: ["hes-santrallerinde-verimlilik-optimizasyonu", "santrallerde-sebeke-ve-koruma-sistemi-analizi"],
      serviceLinks: ["mevcut-santraller-icin-teknik-denetim", "hes-optimizasyonu"],
      body: [
        { heading: "Yaşlanan varlıklar teknik borç saklar", content: "HES tesisleri yıllarca çalışırken dokümantasyon boşlukları, çözülmemiş kusurlar ve bakım kısayolları biriktirebilir." },
        { heading: "İşletme verisi mühendislik bağlamı ister", content: "Emre amadelik, duruşlar ve üretim trendleri saha gözlemleri, ekipman durumu ve geçmiş proje kayıtlarıyla birlikte yorumlandığında anlam kazanır." },
        { heading: "Denetim çıktıları karar desteklemelidir", content: "İyi bir denetim öncelikli teknik risk listesi, düzeltici aksiyon yol haritası ve yatırım mantığı üretir." }
      ]
    }
  ]
};

const longFormTopics = {
  en: [
    ["hydropower-plant-commissioning-procedures", "Hydropower Plant Commissioning Procedures", "A field-oriented guide to HPP commissioning gates, test evidence, synchronization, governor response, AVR behavior and owner-side handover control.", "Commissioning", "commissioning", ["HPP commissioning", "governor response", "handover evidence"], ["power-plant-commissioning", "hydropower-consulting", "owners-engineering"]],
    ["common-hpp-operational-problems", "Common HPP Operational Problems", "Technical review of recurring hydropower operating problems including nuisance trips, cooling limits, sediment effects, auxiliary failures and weak alarm discipline.", "Hydropower", "hydropower", ["HPP operations", "availability", "O&M"], ["hydropower-consulting", "om-performance-improvement", "energy-audit"]],
    ["solar-plant-performance-optimization", "Solar Plant Performance Optimization", "Expert guide to solar PV performance recovery using PR analysis, inverter event review, string testing, soiling logic and O&M response improvement.", "Solar", "solar", ["solar PR", "PV optimization", "technical audit"], ["solar-energy-consulting", "energy-audit", "om-performance-improvement"]],
    ["epc-technical-due-diligence", "EPC Technical Due Diligence", "How owners and investors should review EPC scope, design evidence, interface risk, commissioning readiness and handover quality before committing capital.", "EPC", "epc", ["EPC due diligence", "owner engineering", "technical advisory"], ["epc-technical-advisory", "owners-engineering", "renewable-energy-investment-advisory"]],
    ["power-plant-operational-readiness", "Power Plant Operational Readiness", "A practical owner-side framework for confirming people, procedures, documentation, grid interface and reliability evidence before commercial operation.", "Operations", "operations", ["operational readiness", "commissioning", "O&M"], ["power-plant-commissioning", "owners-engineering", "om-performance-improvement"]],
    ["turbine-efficiency-loss-analysis", "Turbine Efficiency Loss Analysis", "How hydropower owners can diagnose turbine efficiency loss through water-to-wire evidence, operating points, vibration, cavitation and outage history.", "Hydropower", "hydropower", ["turbine efficiency", "water-to-wire", "HPP audit"], ["hydropower-consulting", "hydropower-plant-optimization", "energy-audit"]],
    ["agc-and-grid-stability", "AGC and Grid Stability", "Engineering perspective on AGC-compatible operation, governor response, reactive power control, AVR behavior and grid stability evidence for renewable plants.", "Grid", "grid", ["AGC", "grid stability", "reactive power"], ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"]],
    ["renewable-energy-investment-risks", "Renewable Energy Investment Risks", "Technical investment risk guide for renewable energy assets covering EPC evidence, production assumptions, grid constraints, O&M maturity and CAPEX exposure.", "Investment", "investment", ["investment risk", "technical due diligence", "renewable energy"], ["renewable-energy-investment-advisory", "energy-audit", "epc-technical-advisory"]]
  ],
  tr: [
    ["hes-devreye-alma-prosedurleri", "HES Devreye Alma Prosedurleri", "HES devreye alma kapilari, test kanitlari, senkronizasyon, governor tepkisi, AVR davranisi ve isveren tarafi teslim kontrolu icin saha odakli rehber.", "Devreye Alma", "devreye-alma", ["HES devreye alma", "governor tepkisi", "teslim kaniti"], ["enerji-santrali-devreye-alma", "hes-danismanligi", "isveren-muhendisligi"]],
    ["yaygin-hes-isletme-problemleri", "Yaygin HES Isletme Problemleri", "Gereksiz tripler, sogutma limitleri, sediment etkisi, yardimci sistem arizalari ve zayif alarm disiplini dahil HES isletme problemlerinin teknik incelemesi.", "HES", "hes", ["HES isletme", "emre amadelik", "O&M"], ["hes-danismanligi", "isletme-bakim-performans-iyilestirme", "enerji-denetimi"]],
    ["ges-performans-optimizasyonu", "GES Performans Optimizasyonu", "PR analizi, inverter olay incelemesi, string testi, kirlenme mantigi ve O&M yanit iyilestirmesi ile GES performans toparlama rehberi.", "GES", "ges", ["GES PR", "PV optimizasyon", "teknik denetim"], ["gunes-enerjisi-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"]],
    ["epc-teknik-due-diligence", "EPC Teknik Due Diligence", "Sermaye karari oncesinde EPC kapsam, tasarim kaniti, arayuz riski, devreye alma hazirligi ve teslim kalitesinin nasil incelenecegi.", "EPC", "epc", ["EPC due diligence", "isveren muhendisligi", "teknik danismanlik"], ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "yenilenebilir-enerji-yatirim-danismanligi"]],
    ["enerji-santrali-operasyonel-hazirlik", "Enerji Santrali Operasyonel Hazirlik", "Ticari isletme oncesinde insan, prosedur, dokumantasyon, sebeke arayuzu ve guvenilirlik kanitinin dogrulanmasi icin pratik cerceve.", "Isletme", "isletme", ["operasyonel hazirlik", "devreye alma", "O&M"], ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "isletme-bakim-performans-iyilestirme"]],
    ["turbin-verim-kaybi-analizi", "Turbin Verim Kaybi Analizi", "HES sahipleri icin su-guc kaniti, isletme noktalari, vibrasyon, kavitasyon ve durus gecmisi ile turbin verim kaybi teshisi.", "HES", "hes", ["turbin verimi", "su-guc", "HES denetim"], ["hes-danismanligi", "hes-optimizasyonu", "enerji-denetimi"]],
    ["agc-ve-sebeke-kararliligi", "AGC ve Sebeke Kararliligi", "AGC uyumlu isletme, governor tepkisi, reaktif guc kontrolu, AVR davranisi ve yenilenebilir santrallerde sebeke kararliligi kaniti.", "Sebeke", "sebeke", ["AGC", "sebeke kararliligi", "reaktif guc"], ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"]],
    ["yenilenebilir-enerji-yatirim-riskleri", "Yenilenebilir Enerji Yatirim Riskleri", "EPC kaniti, uretim varsayimlari, sebeke kisitlari, O&M olgunlugu ve CAPEX maruziyeti dahil yenilenebilir enerji teknik yatirim riski rehberi.", "Yatirim", "yatirim", ["yatirim riski", "teknik due diligence", "yenilenebilir enerji"], ["yenilenebilir-enerji-yatirim-danismanligi", "enerji-denetimi", "epc-teknik-danismanlik-hizmeti"]]
  ]
} as const;

function buildAuthorityArticle(locale: Locale, topic: (typeof longFormTopics)[Locale][number], index: number): BlogPost {
  const [slug, title, description, category, categorySlug, tags, serviceLinks] = topic;
  const en = locale === "en";
  const toc = en
    ? ["Operating context", "Engineering evidence", "Field problems", "Recommended actions", "Owner decision value"]
    : ["Isletme baglami", "Muhendislik kaniti", "Saha problemleri", "Onerilen aksiyonlar", "Isveren karar degeri"];
  return {
    slug,
    title,
    description,
    category,
    categorySlug,
    tags: [...tags],
    author: en ? "Oztoprak Energy engineering desk" : "Oztoprak Enerji muhendislik masasi",
    featured: index === 0,
    trending: index < 3,
    date: `2026-06-${String(index + 1).padStart(2, "0")}`,
    readingTime: en ? "18 min" : "18 dk",
    toc,
    related: longFormTopics[locale].filter((item) => item[0] !== slug).slice(0, 3).map((item) => item[0]),
    serviceLinks: [...serviceLinks],
    body: toc.map((heading, sectionIndex) => ({
      heading,
      content: en
        ? `${title} should be evaluated as a decision system, not as a checklist. In real renewable power plants, the useful answer comes from connecting EPC records, commissioning evidence, SCADA trends, protection files, O&M logs, operator routines and commercial deadlines. Section ${sectionIndex + 1} focuses on how an experienced consultant turns those inputs into a practical owner-side recommendation. The analysis considers availability, generation loss, grid compliance, reactive power behavior, governor or inverter response, outage planning, CAPEX exposure and the quality of evidence available for future audits or warranty discussions.`
        : `${title} bir kontrol listesi degil, karar sistemi olarak degerlendirilmelidir. Gercek yenilenebilir enerji santrallerinde faydali cevap; EPC kayitlari, devreye alma kanitlari, SCADA trendleri, koruma dosyalari, O&M loglari, operator rutinleri ve ticari takvim arasindaki bagdan gelir. ${sectionIndex + 1}. bolum, deneyimli bir danismanin bu girdileri nasil uygulanabilir isveren tarafi onerisine donusturdugunu aciklar. Analiz emre amadelik, uretim kaybi, sebeke uyumu, reaktif guc davranisi, governor veya inverter tepkisi, durus planlama, CAPEX maruziyeti ve gelecekteki denetim veya garanti gorusmeleri icin kanit kalitesini dikkate alir.`
    })),
    faqs: [
      {
        question: en ? `Who should read ${title}?` : `${title} kimler icin uygundur?`,
        answer: en
          ? "Owners, EPC teams, investors and O&M managers who need technically defensible decisions before commissioning, acquisition, audit or performance recovery work."
          : "Devreye alma, satin alma, denetim veya performans toparlama oncesinde teknik olarak savunulabilir karar isteyen isverenler, EPC ekipleri, yatirimcilar ve O&M yoneticileri icin uygundur."
      },
      {
        question: en ? "What evidence is most important?" : "En onemli kanit nedir?",
        answer: en
          ? "The strongest evidence combines site observations, operating data, commissioning records, grid/protection files and clear ownership of unresolved risks."
          : "En guclu kanit; saha gozlemleri, isletme verisi, devreye alma kayitlari, sebeke/koruma dosyalari ve acik risklerin net sorumlulugunu birlikte gosterir."
      }
    ]
  };
}

blogPosts.en.push(...longFormTopics.en.map((topic, index) => buildAuthorityArticle("en", topic, index)));
blogPosts.tr.push(...longFormTopics.tr.map((topic, index) => buildAuthorityArticle("tr", topic, index)));

type AuthorityTopic = {
  enSlug: string;
  trSlug: string;
  enTitle: string;
  trTitle: string;
  enDescription: string;
  trDescription: string;
  category: string;
  categorySlug: string;
  enServices: string[];
  trServices: string[];
  focus: string;
  equipment: string;
  risk: string;
};

const authorityTopics: AuthorityTopic[] = [
  {
    enSlug: "hydropower-consulting-field-guide",
    trSlug: "hes-danismanligi-saha-rehberi",
    enTitle: "Hydropower Consulting Field Guide for Owners and Investors",
    trTitle: "HES Danismanligi Saha Rehberi: Isveren ve Yatirimci Icin Teknik Yol Haritasi",
    enDescription: "A deep engineering guide to hydropower consulting, technical audits, commissioning evidence, turbine performance and owner-side decision control.",
    trDescription: "HES danismanligi, teknik denetim, devreye alma kaniti, turbin performansi ve isveren tarafi karar kontrolu icin kapsamli muhendislik rehberi.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"],
    trServices: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"],
    focus: "HES danismanligi",
    equipment: "Francis, Kaplan veya Pelton turbin-jenerator grubu",
    risk: "su-guc verim kaybi, gereksiz tripler ve eksik isletme kaniti"
  },
  {
    enSlug: "solar-energy-consulting-performance-guide",
    trSlug: "ges-danismanligi-performans-rehberi",
    enTitle: "Solar Energy Consulting Performance Guide for PV Investors",
    trTitle: "GES Danismanligi Performans Rehberi: PV Yatirimcilari Icin Teknik Kontrol",
    enDescription: "How solar energy consulting should review PR loss, inverter evidence, EPC handover quality, O&M response and technical audit priorities.",
    trDescription: "GES danismanligi kapsaminda PR kaybi, inverter kaniti, EPC teslim kalitesi, O&M yaniti ve teknik denetim oncelikleri nasil incelenir?",
    category: "GES",
    categorySlug: "ges",
    enServices: ["solar-energy-consulting", "energy-audit", "om-performance-improvement"],
    trServices: ["gunes-enerjisi-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"],
    focus: "GES danismanligi",
    equipment: "inverter, string, trafo, meteoroloji ve SCADA olcum zinciri",
    risk: "dusuk performans orani, kirlenme kaybi ve gec ariza mudahalesi"
  },
  {
    enSlug: "epc-consulting-owner-side-control",
    trSlug: "epc-danismanligi-isveren-tarafi-kontrol",
    enTitle: "EPC Consulting for Owner-Side Technical Control",
    trTitle: "EPC Danismanligi: Isveren Tarafi Teknik Kontrol ve Risk Yonetimi",
    enDescription: "Owner-side EPC consulting framework for interface control, design review, commissioning readiness and evidence-based contractor management.",
    trDescription: "EPC danismanligi ile arayuz kontrolu, tasarim inceleme, devreye alma hazirligi ve kanita dayali yuklenici yonetimi.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["epc-technical-advisory", "owners-engineering", "power-plant-commissioning"],
    trServices: ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "enerji-santrali-devreye-alma"],
    focus: "EPC danismanligi",
    equipment: "insaat, elektromekanik, otomasyon, koruma ve sebeke arayuzleri",
    risk: "gecikme, kapsam boslugu, teslim kaniti eksigi ve claim riski"
  },
  {
    enSlug: "technical-audit-power-plant-evidence",
    trSlug: "teknik-denetim-santral-kanit-yonetimi",
    enTitle: "Technical Audit Evidence for Existing Power Plants",
    trTitle: "Teknik Denetim: Mevcut Santrallerde Kanit ve Risk Yonetimi",
    enDescription: "Technical audit methodology for existing hydropower and solar assets using operating records, commissioning files, site evidence and risk ranking.",
    trDescription: "Teknik denetim metodolojisi: mevcut HES ve GES varliklarinda isletme kaydi, devreye alma dosyasi, saha kaniti ve risk siralamasi.",
    category: "Teknik Denetim",
    categorySlug: "teknik-denetim",
    enServices: ["technical-audits-existing-power-plants", "energy-audit", "renewable-energy-investment-advisory"],
    trServices: ["mevcut-santraller-icin-teknik-denetim", "enerji-denetimi", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "Teknik denetim",
    equipment: "primer ekipman, yardimci sistemler, koruma, SCADA ve O&M dokumantasyonu",
    risk: "gizli CAPEX ihtiyaci, garanti belirsizligi ve yatirim riski"
  },
  {
    enSlug: "commissioning-services-renewable-power-plants",
    trSlug: "devreye-alma-hizmetleri-yenilenebilir-santraller",
    enTitle: "Commissioning Services for Renewable Power Plants",
    trTitle: "Devreye Alma Hizmetleri: Yenilenebilir Enerji Santrallerinde Kontrollu Baslangic",
    enDescription: "Commissioning services guide covering energization, functional tests, synchronization, protection files, punch-list discipline and handover evidence.",
    trDescription: "Devreye alma hizmetleri rehberi: enerjilendirme, fonksiyonel test, senkronizasyon, koruma dosyalari, punch-list disiplini ve teslim kaniti.",
    category: "Devreye Alma",
    categorySlug: "devreye-alma",
    enServices: ["power-plant-commissioning", "owners-engineering", "grid-protection-system-analysis"],
    trServices: ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "sebeke-koruma-sistemi-analizi"],
    focus: "Devreye alma",
    equipment: "kesici, role, governor, AVR, SCADA, yardimci sistem ve trafo adalari",
    risk: "erken enerjilendirme, eksik test ve operasyonel hazirlik zafiyeti"
  },
  {
    enSlug: "power-plant-performance-analysis-methodology",
    trSlug: "santral-performans-analizi-metodolojisi",
    enTitle: "Power Plant Performance Analysis Methodology",
    trTitle: "Santral Performans Analizi Metodolojisi: Uretim Kaybini Kanitla Okumak",
    enDescription: "Performance analysis methodology for hydropower and solar plants using loss categories, SCADA trends, O&M events and corrective action ranking.",
    trDescription: "Santral performans analizi metodolojisi: HES ve GES varliklarinda kayip kategorisi, SCADA trendi, O&M olayi ve aksiyon onceligi.",
    category: "Performans",
    categorySlug: "performans",
    enServices: ["om-performance-improvement", "energy-audit", "hydropower-consulting"],
    trServices: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "hes-danismanligi"],
    focus: "Performans analizi",
    equipment: "uretim sayaclari, SCADA trendleri, inverter veya turbin kontrol sistemi",
    risk: "gelir kaybi, dusuk emre amadelik ve yanlis bakim onceligi"
  },
  {
    enSlug: "renewable-energy-investment-consulting-due-diligence",
    trSlug: "enerji-yatirim-danismanligi-teknik-due-diligence",
    enTitle: "Renewable Energy Investment Consulting and Technical Due Diligence",
    trTitle: "Enerji Yatirim Danismanligi: Teknik Due Diligence ve Varlik Riski",
    enDescription: "Investment consulting framework for renewable energy assets covering EPC evidence, performance assumptions, grid risk, O&M maturity and CAPEX exposure.",
    trDescription: "Enerji yatirim danismanligi cercevesi: EPC kaniti, performans varsayimi, sebeke riski, O&M olgunlugu ve CAPEX maruziyeti.",
    category: "Yatirim",
    categorySlug: "yatirim",
    enServices: ["renewable-energy-investment-advisory", "technical-audits-existing-power-plants", "epc-technical-advisory"],
    trServices: ["yenilenebilir-enerji-yatirim-danismanligi", "mevcut-santraller-icin-teknik-denetim", "epc-teknik-danismanlik-hizmeti"],
    focus: "Enerji yatirim danismanligi",
    equipment: "finansal model varsayimlari, uretim raporlari, teknik varlik dosyasi ve lisans-saha kanitlari",
    risk: "fazla iyimser uretim tahmini, gizli teknik borc ve yatirim deger kaybi"
  },
  {
    enSlug: "agc-compliance-consulting-hydropower",
    trSlug: "agc-uyumu-danismanligi-hes-isletme",
    enTitle: "AGC Compliance Consulting for Hydropower Operations",
    trTitle: "AGC Uyumu Danismanligi: HES Isletmede Governor Tepkisi ve Sebeke Kararliligi",
    enDescription: "AGC compliance guide for hydropower plants covering governor response, setpoint tracking, ramp behavior, reactive power and grid stability evidence.",
    trDescription: "AGC uyumu rehberi: HES isletmede governor tepkisi, set noktasi takibi, rampa davranisi, reaktif guc ve sebeke kararliligi kaniti.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"],
    focus: "AGC uyumu",
    equipment: "governor, AVR, SCADA, telemetri, primer ve sekonder frekans kontrolu",
    risk: "set noktasi sapmasi, frekans kontrol zafiyeti ve sebeke uyum riski"
  },
  {
    enSlug: "kaplan-turbine-consulting-efficiency-loss",
    trSlug: "kaplan-turbin-danismanligi-verim-kaybi",
    enTitle: "Kaplan Turbine Consulting for Efficiency Loss and Availability",
    trTitle: "Kaplan Turbin Danismanligi: Verim Kaybi, Kanat Ayari ve Emre Amadelik",
    enDescription: "Kaplan turbine consulting guide for blade pitch behavior, hydraulic efficiency, vibration evidence, governor response and O&M priorities.",
    trDescription: "Kaplan turbin danismanligi rehberi: kanat ayari davranisi, hidrolik verim, vibrasyon kaniti, governor tepkisi ve O&M oncelikleri.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "hydropower-plant-optimization", "energy-audit"],
    trServices: ["hes-danismanligi", "hes-optimizasyonu", "enerji-denetimi"],
    focus: "Kaplan turbin",
    equipment: "Kaplan runner, kanat ayar mekanizmasi, yolluk, governor ve yatak sistemleri",
    risk: "kismi yuk verim kaybi, kanat mekanizmasi arizasi ve vibrasyon artisi"
  },
  {
    enSlug: "scada-optimization-power-plant-operations",
    trSlug: "scada-optimizasyonu-santral-isletme",
    enTitle: "SCADA Optimization for Power Plant Operations",
    trTitle: "SCADA Optimizasyonu: Santral Isletmede Alarm, Trend ve Karar Kalitesi",
    enDescription: "SCADA optimization guide for alarm discipline, trend quality, event records, O&M response and power plant performance decisions.",
    trDescription: "SCADA optimizasyonu rehberi: alarm disiplini, trend kalitesi, olay kaydi, O&M yaniti ve santral performans kararlari.",
    category: "SCADA",
    categorySlug: "scada",
    enServices: ["om-performance-improvement", "grid-protection-system-analysis", "energy-audit"],
    trServices: ["isletme-bakim-performans-iyilestirme", "sebeke-koruma-sistemi-analizi", "enerji-denetimi"],
    focus: "SCADA optimizasyonu",
    equipment: "SCADA tag yapisi, alarm siniflandirmasi, olay kaydi, historian ve raporlama ekranlari",
    risk: "alarm yorgunlugu, veri kalitesi zafiyeti ve gec ariza teshisi"
  },
  {
    enSlug: "francis-turbine-performance-diagnosis",
    trSlug: "francis-turbin-performans-teshisi",
    enTitle: "Francis Turbine Performance Diagnosis for Hydropower Plants",
    trTitle: "Francis Turbin Performans Teshisi: HES Danismanligi Icin Kanit Yaklasimi",
    enDescription: "Francis turbine diagnosis guide covering efficiency loss, cavitation, guide vane behavior, vibration, cooling limits and outage evidence.",
    trDescription: "Francis turbin teshis rehberi: verim kaybi, kavitasyon, ayar kanadi davranisi, vibrasyon, sogutma limiti ve durus kaniti.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"],
    trServices: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"],
    focus: "Francis turbin",
    equipment: "Francis runner, ayar kanatlari, salyangoz, draft tube, yatak ve sogutma sistemi",
    risk: "kavitasyon, verim dususu, sogutma limiti ve plansiz durus"
  },
  {
    enSlug: "primary-frequency-control-renewable-plants",
    trSlug: "primer-frekans-kontrolu-yenilenebilir-santraller",
    enTitle: "Primary Frequency Control in Renewable Power Plants",
    trTitle: "Primer Frekans Kontrolu: Yenilenebilir Santrallerde Tepki ve Kanit Yonetimi",
    enDescription: "Engineering guide to primary frequency control, governor or inverter response, droop behavior, testing evidence and grid compliance.",
    trDescription: "Primer frekans kontrolu icin muhendislik rehberi: governor veya inverter tepkisi, droop davranisi, test kaniti ve sebeke uyumu.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "owners-engineering"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isveren-muhendisligi"],
    focus: "Primer frekans kontrolu",
    equipment: "governor droop, inverter kontrol modu, frekans olcum zinciri ve test kayitlari",
    risk: "uyum testi basarisizligi, grid kod riski ve kontrol kararsizligi"
  },
  {
    enSlug: "secondary-frequency-control-agc-readiness",
    trSlug: "sekonder-frekans-kontrolu-agc-hazirligi",
    enTitle: "Secondary Frequency Control and AGC Readiness",
    trTitle: "Sekonder Frekans Kontrolu ve AGC Hazirligi: Santral Kabul Kriterleri",
    enDescription: "Secondary frequency control and AGC readiness guide for renewable plants including telemetry, setpoint tracking, ramp tests and control room procedures.",
    trDescription: "Sekonder frekans kontrolu ve AGC hazirligi rehberi: telemetri, set noktasi takibi, rampa testi ve kumanda prosedurleri.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"],
    trServices: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"],
    focus: "Sekonder frekans kontrolu",
    equipment: "AGC baglantisi, telemetri, setpoint tracking, SCADA ve kontrol odasi rutini",
    risk: "AGC komut takibi zafiyeti, rampa siniri ve operasyonel kabul riski"
  },
  {
    enSlug: "solar-plant-technical-audit-checklist",
    trSlug: "ges-teknik-denetim-kontrol-listesi",
    enTitle: "Solar Plant Technical Audit Checklist",
    trTitle: "GES Teknik Denetim Kontrol Listesi: PR, Inverter ve EPC Kaniti",
    enDescription: "Solar technical audit checklist for PR analysis, inverter logs, string evidence, EPC handover, O&M maturity and investment decisions.",
    trDescription: "GES teknik denetim kontrol listesi: PR analizi, inverter loglari, string kaniti, EPC teslimi, O&M olgunlugu ve yatirim kararlari.",
    category: "GES",
    categorySlug: "ges",
    enServices: ["solar-energy-consulting", "technical-audits-existing-power-plants", "renewable-energy-investment-advisory"],
    trServices: ["ges-danismanligi", "mevcut-santraller-icin-teknik-denetim", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "GES teknik denetim",
    equipment: "modul, inverter, string, trafo, kamera, meteoroloji istasyonu ve izleme sistemi",
    risk: "eksik EPC kaniti, PR kaybi ve satin alma sonrasi CAPEX ihtiyaci"
  },
  {
    enSlug: "hpp-technical-audit-operating-assets",
    trSlug: "hes-teknik-denetim-isletmedeki-varliklar",
    enTitle: "HPP Technical Audit for Operating Hydropower Assets",
    trTitle: "HES Teknik Denetim: Isletmedeki Varliklarda Risk ve Performans",
    enDescription: "HPP technical audit guide for operating assets covering civil structures, turbine-generator evidence, protection records, O&M maturity and CAPEX ranking.",
    trDescription: "HES teknik denetim rehberi: isletmedeki varliklarda insaat yapilari, turbin-jenerator kaniti, koruma kayitlari, O&M olgunlugu ve CAPEX siralamasi.",
    category: "HES",
    categorySlug: "hes",
    enServices: ["technical-audits-existing-power-plants", "hydropower-consulting", "energy-audit"],
    trServices: ["mevcut-santraller-icin-teknik-denetim", "hes-danismanligi", "enerji-denetimi"],
    focus: "HES teknik denetim",
    equipment: "cebri boru, vana, turbin, generator, trafo, kesici ve koruma sistemi",
    risk: "yaslanan varlik riski, dokumantasyon boslugu ve plansiz CAPEX"
  },
  {
    enSlug: "epc-delay-risk-power-plant-projects",
    trSlug: "epc-gecikme-riski-enerji-santrali-projeleri",
    enTitle: "EPC Delay Risk in Power Plant Projects",
    trTitle: "EPC Gecikme Riski: Enerji Santrali Projelerinde Teknik Kokenler",
    enDescription: "Technical review of EPC delay risk in renewable power projects including interface gaps, late testing, grid documents and owner-side controls.",
    trDescription: "Yenilenebilir enerji projelerinde EPC gecikme riski: arayuz bosluklari, gec test, sebeke dokumanlari ve isveren tarafi kontroller.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["epc-technical-advisory", "power-plant-commissioning", "owners-engineering"],
    trServices: ["epc-teknik-danismanlik-hizmeti", "enerji-santrali-devreye-alma", "isveren-muhendisligi"],
    focus: "EPC gecikme riski",
    equipment: "proje takvimi, arayuz matrisi, test proseduru, koruma dosyasi ve kabul kriterleri",
    risk: "gec ticari isletme, gelir kaybi ve sozlesmesel uyusmazlik"
  },
  {
    enSlug: "reactive-power-control-renewable-plants",
    trSlug: "reaktif-guc-kontrolu-yenilenebilir-santraller",
    enTitle: "Reactive Power Control in Renewable Power Plants",
    trTitle: "Reaktif Guc Kontrolu: Yenilenebilir Santrallerde AVR, Inverter ve Sebeke Uyumu",
    enDescription: "Reactive power control guide for renewable plants covering AVR, inverter modes, voltage setpoints, transformer limits and compliance testing.",
    trDescription: "Reaktif guc kontrolu rehberi: AVR, inverter modlari, gerilim setleri, trafo limitleri ve sebeke uyum testi.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "solar-energy-consulting", "power-plant-commissioning"],
    trServices: ["sebeke-koruma-sistemi-analizi", "gunes-enerjisi-danismanligi", "enerji-santrali-devreye-alma"],
    focus: "Reaktif guc kontrolu",
    equipment: "AVR, inverter Q kontrolu, trafo tap, gerilim regule modu ve sayaç olcumleri",
    risk: "gerilim uyumsuzlugu, ceza riski ve ekipman zorlanmasi"
  },
  {
    enSlug: "om-optimization-renewable-assets",
    trSlug: "om-optimizasyonu-yenilenebilir-enerji-varliklari",
    enTitle: "O&M Optimization for Renewable Energy Assets",
    trTitle: "O&M Optimizasyonu: Yenilenebilir Enerji Varliklarinda Emre Amadelik ve Kayip Azaltma",
    enDescription: "O&M optimization guide for renewable assets using alarms, outage history, maintenance planning, spare parts and performance recovery logic.",
    trDescription: "O&M optimizasyonu rehberi: alarm, durus gecmisi, bakim planlama, yedek parca ve performans toparlama mantigi.",
    category: "Isletme",
    categorySlug: "isletme",
    enServices: ["om-performance-improvement", "energy-audit", "technical-audits-existing-power-plants"],
    trServices: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "mevcut-santraller-icin-teknik-denetim"],
    focus: "O&M optimizasyonu",
    equipment: "bakim planlari, alarm listeleri, yedek parca, ariza kaydi ve performans raporlari",
    risk: "tekrar eden ariza, dusuk emre amadelik ve uretim kaybi"
  },
  {
    enSlug: "owner-engineering-renewable-energy-projects",
    trSlug: "isveren-muhendisligi-yenilenebilir-enerji-projeleri",
    enTitle: "Owner's Engineering in Renewable Energy Projects",
    trTitle: "Isveren Muhendisligi: Yenilenebilir Enerji Projelerinde Bagimsiz Teknik Kontrol",
    enDescription: "Owner's engineering guide for renewable projects covering design review, EPC deliverables, commissioning evidence and investment decision support.",
    trDescription: "Isveren muhendisligi rehberi: tasarim inceleme, EPC teslimatlari, devreye alma kaniti ve yatirim karari destegi.",
    category: "EPC",
    categorySlug: "epc",
    enServices: ["owners-engineering", "epc-technical-advisory", "renewable-energy-investment-advisory"],
    trServices: ["isveren-muhendisligi", "epc-teknik-danismanlik-hizmeti", "yenilenebilir-enerji-yatirim-danismanligi"],
    focus: "Isveren muhendisligi",
    equipment: "tasarim dosyalari, EPC deliverable listesi, saha ilerleme kaniti ve kabul kriterleri",
    risk: "isveren gorunurlugu eksigi, zayif teknik itiraz ve teslim kalitesi riski"
  },
  {
    enSlug: "power-plant-fault-analysis-method",
    trSlug: "santral-ariza-analizi-metodu",
    enTitle: "Power Plant Fault Analysis Method for Owners",
    trTitle: "Santral Ariza Analizi Metodu: Koku Neden, SCADA ve Koruma Kaydi",
    enDescription: "Fault analysis method for renewable power plants using SCADA events, relay records, operator logs, maintenance history and corrective action ranking.",
    trDescription: "Santral ariza analizi metodu: SCADA olaylari, role kayitlari, operator loglari, bakim gecmisi ve duzeltici aksiyon siralamasi.",
    category: "Ariza Analizi",
    categorySlug: "ariza-analizi",
    enServices: ["om-performance-improvement", "grid-protection-system-analysis", "technical-audits-existing-power-plants"],
    trServices: ["isletme-bakim-performans-iyilestirme", "sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim"],
    focus: "Ariza analizi",
    equipment: "SCADA olay sirasi, role kaydi, operator notu, bakim gecmisi ve ekipman testleri",
    risk: "tekrar eden ariza, yanlis koku neden ve gereksiz durus"
  },
  {
    enSlug: "renewable-energy-feasibility-technical-review",
    trSlug: "yenilenebilir-enerji-fizibilite-teknik-inceleme",
    enTitle: "Renewable Energy Feasibility Technical Review",
    trTitle: "Yenilenebilir Enerji Fizibilite Teknik Inceleme: Yatirim Kararindan Once Kanit",
    enDescription: "Feasibility technical review for renewable energy investments covering production assumptions, grid limits, EPC cost logic, O&M maturity and risk ranking.",
    trDescription: "Yenilenebilir enerji yatirimlari icin fizibilite teknik inceleme: uretim varsayimi, sebeke limiti, EPC maliyet mantigi, O&M olgunlugu ve risk siralamasi.",
    category: "Yatirim",
    categorySlug: "yatirim",
    enServices: ["renewable-energy-investment-advisory", "epc-technical-advisory", "energy-audit"],
    trServices: ["yenilenebilir-enerji-yatirim-danismanligi", "epc-teknik-danismanlik-hizmeti", "enerji-denetimi"],
    focus: "Enerji yatirim danismanligi",
    equipment: "fizibilite raporu, uretim modeli, grid baglanti gorusu, EPC teklifleri ve O&M varsayimlari",
    risk: "yatirim oncesi yanlis kabul, gelir sapmasi ve finansman riski"
  },
  {
    enSlug: "grid-protection-audit-renewable-plants",
    trSlug: "sebeke-koruma-denetimi-yenilenebilir-santraller",
    enTitle: "Grid and Protection Audit for Renewable Plants",
    trTitle: "Sebeke ve Koruma Denetimi: Yenilenebilir Santrallerde Acma Analizi",
    enDescription: "Grid and protection audit guide covering relay settings, event records, transformer constraints, breaker logic and compliance evidence.",
    trDescription: "Sebeke ve koruma denetimi rehberi: role ayarlari, olay kayitlari, trafo kisitlari, kesici mantigi ve uyum kaniti.",
    category: "Sebeke",
    categorySlug: "sebeke",
    enServices: ["grid-protection-system-analysis", "technical-audits-existing-power-plants", "power-plant-commissioning"],
    trServices: ["sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim", "enerji-santrali-devreye-alma"],
    focus: "Teknik denetim",
    equipment: "koruma roleleri, kesici, trafo, bara, tek hat semasi ve olay kayit sistemi",
    risk: "gereksiz acma, koruma koordinasyon hatasi ve sebeke uyum sorunu"
  }
];

const authorityHeadings = {
  en: [
    "Why this topic matters for asset value",
    "Engineering evidence that must be reviewed",
    "Common field problems",
    "How the consultant separates facts from assumptions",
    "Case study example",
    "Recommended engineering actions",
    "Internal links for owner-side decisions",
    "When to request consultancy support"
  ],
  tr: [
    "Bu konu varlik degeri icin neden kritiktir",
    "Incelenmesi gereken muhendislik kanitlari",
    "Sahada sik gorulen problemler",
    "Danisman gercekleri varsayimlardan nasil ayirir",
    "Vaka ornegi",
    "Onerilen muhendislik aksiyonlari",
    "Isveren kararlari icin ic linkler",
    "Ne zaman danismanlik destegi alinmali"
  ]
} satisfies Record<Locale, string[]>;

function buildAuthoritySection(locale: Locale, topic: AuthorityTopic, heading: string, sectionIndex: number) {
  const en = locale === "en";
  if (en) {
    return `${topic.enTitle} should be handled as a structured engineering decision, not as a generic checklist. The consultant first defines the plant boundary, commercial decision, operating history and evidence quality. For this topic, the most important field context is ${topic.equipment}; the most common value risk is ${topic.risk}. A useful review connects design intent, EPC records, commissioning files, SCADA trends, protection settings, operator logs, outage history, maintenance routines and grid interface evidence. Section ${sectionIndex + 1} focuses on ${heading.toLowerCase()} and explains how an owner, EPC contractor or investor can turn incomplete site information into a defensible action plan. In practice, the strongest recommendations rank actions by safety, generation impact, grid compliance, outage requirement, CAPEX exposure, warranty relevance and implementation difficulty. A case example would compare the contractual acceptance evidence with real operating behavior, then identify whether the root issue is design, installation, control logic, O&M response, documentation quality or unresolved handover responsibility. The final output should link directly to consultancy services, define the next test or inspection, and make clear which risk can be accepted, monitored or corrected immediately. A senior review should also test the quality of the assumptions behind the numbers. For hydropower assets this may mean checking net head, tailwater influence, governor response, vibration history, cooling water reliability and reactive power capability under real dispatch conditions. For solar assets it can mean separating irradiation uncertainty from inverter clipping, string mismatch, soiling, transformer losses, availability losses and SCADA data gaps. In EPC advisory work, the same discipline applies to interface registers, design freezes, factory acceptance tests, method statements, protection coordination, energization permits and punch-list closure. The practical consulting value is not only to describe a problem, but to show the owner what can be measured next week, what must wait for an outage, what should be negotiated with the contractor, and what can be monitored through operating discipline without unnecessary CAPEX.`;
  }

  return `${topic.trTitle} genel bir kontrol listesi olarak degil, yapilandirilmis bir muhendislik karari olarak ele alinmalidir. Danisman once santral sinirini, ticari karari, isletme gecmisini ve kanit kalitesini tanimlar. Bu konuda en kritik saha baglami ${topic.equipment}; en yaygin deger riski ise ${topic.risk}. Yararlı bir inceleme tasarim niyetini, EPC kayitlarini, devreye alma dosyalarini, SCADA trendlerini, koruma ayarlarini, operator loglarini, durus gecmisini, bakim rutinlerini ve sebeke arayuz kanitlarini birlikte okur. ${sectionIndex + 1}. bolum ${heading.toLowerCase()} konusuna odaklanir ve isverenin, EPC yuklenicisinin veya yatirimcinin eksik saha bilgisini nasil savunulabilir aksiyon planina donusturebilecegini aciklar. Pratikte en guclu oneriler; emniyet, uretim etkisi, sebeke uyumu, durus ihtiyaci, CAPEX maruziyeti, garanti ilgisi ve uygulama zorluguna gore siralanir. Vaka orneginde sozlesmesel kabul kaniti gercek isletme davranisiyla karsilastirilir; kok nedenin tasarim, montaj, kontrol mantigi, O&M yaniti, dokumantasyon kalitesi veya kapanmamis teslim sorumlulugu olup olmadigi ayrilir. Nihai cikti dogrudan danismanlik hizmetlerine baglanmali, bir sonraki test veya incelemeyi tanimlamali ve hangi riskin kabul edilecegini, izlenecegini veya hemen duzeltilecegini netlestirmelidir. Tecrubeli bir inceleme sayilarin arkasindaki varsayim kalitesini de test eder. HES varliklarinda bu; net dusu, kuyruksuyu etkisi, governor cevabi, vibrasyon gecmisi, sogutma suyu guvenilirligi ve reaktif guc kabiliyetinin gercek yuk rejiminde okunmasi anlamina gelebilir. GES varliklarinda ise isinim belirsizligi, inverter clipping, string uyumsuzlugu, kirlenme kaybi, trafo kayiplari, emre amadelik kaybi ve SCADA veri bosluklari ayrilmalidir. EPC danismanligi tarafinda ayni disiplin arayuz listesi, tasarim dondurma, fabrika kabul testleri, metot beyanlari, koruma koordinasyonu, enerjilendirme izinleri ve punch-list kapanisi icin uygulanir. Danismanligin pratik degeri sadece problemi tarif etmek degil; isverene gelecek hafta neyin olculebilecegini, neyin durus beklemesi gerektigini, neyin yukleniciyle muzakerelik oldugunu ve hangi konunun gereksiz CAPEX yaratmadan isletme disipliniyle izlenebilecegini gostermektir.`;
}

function buildAuthorityTopicPost(locale: Locale, topic: AuthorityTopic, index: number): BlogPost {
  const en = locale === "en";
  const slug = en ? topic.enSlug : topic.trSlug;
  const title = en ? topic.enTitle : topic.trTitle;
  const description = en ? topic.enDescription : topic.trDescription;
  const serviceLinks = en ? topic.enServices : topic.trServices;
  const headings = authorityHeadings[locale];
  const relatedPool = authorityTopics.filter((item) => item !== topic);

  return {
    slug,
    title,
    description,
    category: topic.category,
    categorySlug: topic.categorySlug,
    tags: en ? [topic.focus, "technical audit", "renewable energy consultancy"] : [topic.focus, "teknik denetim", "enerji danismanligi"],
    author: en ? "Oztoprak Energy engineering desk" : "Oztoprak Enerji muhendislik masasi",
    featured: index < 3,
    trending: index < 6,
    date: `2026-07-${String(index + 1).padStart(2, "0")}`,
    readingTime: en ? "22 min" : "22 dk",
    toc: headings,
    related: relatedPool.slice(index % 5, (index % 5) + 5).map((item) => (en ? item.enSlug : item.trSlug)),
    serviceLinks,
    body: [
      ...headings.map((heading, sectionIndex) => ({
        heading,
        content: buildAuthoritySection(locale, topic, heading, sectionIndex)
      })),
      {
        heading: en ? "Consultancy CTA" : "Danismanlik Cagrisi",
        content: en
          ? `If ${topic.focus} is connected to an active investment, commissioning gate, EPC dispute, performance loss or acquisition decision, request an independent technical consultation before the evidence becomes harder to recover. Oztoprak Energy can review the available records, define the missing tests, prepare an owner-side risk register and connect the findings to hydropower, solar, EPC, commissioning, technical due diligence and performance analysis services.`
          : `${topic.focus} aktif bir yatirim, devreye alma kapisi, EPC uyusmazligi, performans kaybi veya satin alma karariyla baglantiliysa kanit toparlanmasi zorlasmadan bagimsiz teknik danismanlik alin. Oztoprak Enerji mevcut kayitlari inceleyebilir, eksik testleri tanimlayabilir, isveren tarafi risk listesi hazirlayabilir ve bulgulari HES danismanligi, GES danismanligi, EPC danismanligi, devreye alma, teknik denetim, enerji yatirim danismanligi ve performans analizi hizmetlerine baglayabilir.`
      }
    ],
    faqs: [
      {
        question: en ? `When should an owner request support for ${topic.focus}?` : `${topic.focus} icin ne zaman destek alinmali?`,
        answer: en
          ? `Support should be requested before acceptance, acquisition, refinancing, warranty discussion or repeated operating loss. Early review protects evidence quality and prevents weak assumptions from becoming commercial risk.`
          : `Destek kabul, satin alma, refinansman, garanti gorusmesi veya tekrarlayan isletme kaybi oncesinde alinmalidir. Erken inceleme kanit kalitesini korur ve zayif varsayimlarin ticari riske donusmesini engeller.`
      },
      {
        question: en ? "Which records are most important?" : "Hangi kayitlar en onemlidir?",
        answer: en
          ? `The most useful records are commissioning test sheets, SCADA event history, protection files, O&M logs, outage reports, as-built drawings, performance trends and clear ownership of open issues.`
          : `En faydali kayitlar devreye alma test formlari, SCADA olay gecmisi, koruma dosyalari, O&M loglari, durus raporlari, as-built cizimler, performans trendleri ve acik konularin net sorumlulugudur.`
      },
      {
        question: en ? "What should the final consulting output include?" : "Nihai danismanlik ciktisi ne icermelidir?",
        answer: en
          ? `It should include an evidence summary, risk ranking, recommended engineering actions, missing tests, owner-side decisions and a practical implementation sequence.`
          : `Kanit ozeti, risk siralamasi, onerilen muhendislik aksiyonlari, eksik testler, isveren kararlari ve uygulanabilir is sirasi icermelidir.`
      }
    ]
  };
}

blogPosts.en.push(...authorityTopics.map((topic, index) => buildAuthorityTopicPost("en", topic, index)));
blogPosts.tr.push(...authorityTopics.map((topic, index) => buildAuthorityTopicPost("tr", topic, index)));

export function getPosts(locale: Locale) {
  return blogPosts[locale];
}

export function getPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}

export function getCategories(locale: Locale) {
  const map = new Map<string, string>();
  blogPosts[locale].forEach((post) => map.set(post.categorySlug, post.category));
  return Array.from(map.entries()).map(([slug, title]) => ({ slug, title }));
}
