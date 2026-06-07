import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/types";

const enFaqs = {
  commissioning: [
    {
      question: "What makes commissioning readiness different from a normal construction punch-list?",
      answer: "Commissioning readiness checks whether the plant can be energized, tested, synchronized and handed over with verified evidence. A construction punch-list may show unfinished work, but readiness analysis ranks each item by startup risk, protection impact, operator exposure and test dependency."
    },
    {
      question: "Which evidence is most important before first energization?",
      answer: "The most important evidence includes protection settings, relay test records, interlock checks, functional test procedures, energization permits, SCADA point-to-point checks, operator readiness and clear responsibility for open items."
    }
  ],
  performance: [
    {
      question: "How is performance loss separated from resource variation?",
      answer: "The review compares operating data with resource data, equipment availability, control behavior, outage records and historical test baselines. This makes it possible to separate water, irradiation or curtailment effects from avoidable technical losses."
    },
    {
      question: "Do performance reviews always require CAPEX?",
      answer: "No. Many improvements come from better alarm discipline, maintenance planning, response times, setpoint review, cleaning strategy, spare parts readiness and operating procedures before major capital works are required."
    }
  ],
  audit: [
    {
      question: "What should a power plant technical audit deliver?",
      answer: "A useful audit delivers an evidence summary, risk ranking, immediate corrective actions, recommended tests, CAPEX priorities, O&M improvements and a management-level view of asset health."
    },
    {
      question: "Can an audit support acquisition or refinancing decisions?",
      answer: "Yes. The audit can identify hidden technical liabilities, missing handover evidence, performance risks, protection issues and operating assumptions that affect valuation or lender confidence."
    }
  ],
  epc: [
    {
      question: "Why does an owner need independent EPC technical control?",
      answer: "Independent control helps the owner understand interface gaps, late deliverables, design changes, commissioning readiness and contractor claims before they become schedule, quality or revenue risks."
    },
    {
      question: "What is the most common EPC risk near commissioning?",
      answer: "The most common risk is that several workstreams appear nearly complete but the evidence needed for energization, protection acceptance, control logic validation and O&M handover is still fragmented."
    }
  ]
};

const trFaqs = {
  commissioning: [
    {
      question: "Devreye alma hazirligi normal eksik is listesinden nasil ayrilir?",
      answer: "Devreye alma hazirligi santralin enerjilendirme, test, senkronizasyon ve isletmeye teslim icin kanitli olarak hazir olup olmadigini inceler. Eksik is listesi tamamlanmamis isleri gosterir; hazirlik analizi ise her kalemi baslangic riski, koruma etkisi, operator maruziyeti ve test bagimliligina gore siralar."
    },
    {
      question: "Ilk enerjilendirme oncesinde hangi kanitlar kritiktir?",
      answer: "Koruma ayarlari, role test kayitlari, kilitleme kontrolleri, fonksiyonel test prosedurleri, enerjilendirme izinleri, SCADA nokta testleri, operator hazirligi ve acik islerin sorumlulugu en kritik kanitlardir."
    }
  ],
  performance: [
    {
      question: "Performans kaybi kaynak degiskenliginden nasil ayrilir?",
      answer: "Inceleme isletme verisini kaynak verisi, ekipman emre amadeligi, kontrol davranisi, durus kayitlari ve gecmis test bazlariyla karsilastirir. Boylece su, isinim veya kisit etkileri onlenebilir teknik kayiplardan ayrilir."
    },
    {
      question: "Performans iyilestirme her zaman CAPEX gerektirir mi?",
      answer: "Hayir. Birçok iyilestirme buyuk yatirimdan once alarm disiplini, bakim planlama, mudahale suresi, setpoint incelemesi, temizlik stratejisi, yedek parca hazirligi ve isletme prosedurleriyle saglanabilir."
    }
  ],
  audit: [
    {
      question: "Santral teknik denetimi hangi ciktilari vermelidir?",
      answer: "Kullanilabilir bir denetim kanit ozeti, risk siralamasi, acil duzeltici aksiyonlar, onerilen testler, CAPEX oncelikleri, O&M iyilestirmeleri ve yonetim seviyesinde varlik sagligi gorunumu uretmelidir."
    },
    {
      question: "Teknik denetim satin alma veya finansman kararini destekler mi?",
      answer: "Evet. Denetim degerlemeyi veya kredi veren guvenini etkileyen gizli teknik yukumlulukleri, eksik teslim kanitlarini, performans risklerini, koruma sorunlarini ve isletme varsayimlarini ortaya cikarabilir."
    }
  ],
  epc: [
    {
      question: "Isveren neden bagimsiz EPC teknik kontrolune ihtiyac duyar?",
      answer: "Bagimsiz kontrol isverenin arayuz bosluklarini, gec kalan dokumanlari, tasarim degisikliklerini, devreye alma hazirligini ve yuklenici taleplerini takvim, kalite veya gelir riskine donusmeden anlamasini saglar."
    },
    {
      question: "Devreye alma yaklasirken en yaygin EPC riski nedir?",
      answer: "En yaygin risk, is kalemlerinin tamamlanmis gibi gorunmesine ragmen enerjilendirme, koruma kabul, kontrol mantigi dogrulama ve O&M teslimi icin gerekli kanitlarin parca parca kalmasidir."
    }
  ]
};

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      slug: "hydropower-portfolio-optimization",
      title: "Hydropower Portfolio Optimization",
      category: "Hydropower projects",
      capacity: "118 MW",
      location: "Turkey",
      type: "Hydropower",
      role: "Technical consultant",
      summary: "Operational review and performance improvement roadmap for a multi-unit hydropower portfolio.",
      scope: ["Generation loss analysis", "Maintenance routine review", "Turbine-generator reliability observations", "Owner reporting"],
      commissioning: "Historical commissioning evidence was reviewed against present operation to identify gaps in baseline tests, governor behavior records and long-term reliability tracking.",
      om: "Outage patterns, availability drivers, alarm discipline, spare-part readiness and maintenance planning routines were reviewed against real generation loss.",
      challenge: "The owner had several operating units with different loss patterns and needed a practical way to separate hydrology, equipment condition, operating discipline and investment needs.",
      approach: "The work connected water-to-wire performance evidence with outage history, SCADA events, maintenance routines and turbine-generator reliability observations.",
      actions: ["Grouped losses by unit, season and operating mode", "Reviewed recurring alarms and forced outage triggers", "Compared maintenance routines with actual failure history", "Ranked corrective actions by energy impact and outage requirement"],
      results: ["Prioritized O&M actions", "Improved visibility on generation losses", "Clear investment ranking for corrective works"],
      lessons: ["Hydropower optimization must connect water conditions with machine behavior", "Availability is useful only when it is tied to lost MWh", "Corrective works should be ranked by risk, energy value and outage window"],
      relatedServices: ["hydropower-consulting", "hydropower-plant-optimization", "om-performance-improvement", "technical-audits-existing-power-plants"],
      faqs: enFaqs.performance
    },
    {
      slug: "solar-plant-performance-recovery",
      title: "Solar Plant Performance Recovery",
      category: "Solar power projects",
      capacity: "46 MW",
      location: "Central Anatolia",
      type: "Solar PV",
      role: "Performance advisor",
      summary: "Technical review of underperforming solar assets with EPC quality and O&M action planning.",
      scope: ["PR review", "Inverter and string-level observations", "O&M procedure review", "Corrective action roadmap"],
      commissioning: "Commissioning and handover records were checked to separate EPC delivery gaps from operational degradation and data-quality uncertainty.",
      om: "Cleaning strategy, inspection routines, response time, inverter availability and field reporting discipline were reviewed against production losses.",
      challenge: "The plant showed lower-than-expected yield, but the owner needed to know whether the issue came from irradiation, EPC quality, inverter behavior, soiling or O&M response.",
      approach: "The analysis combined PR review, inverter-level trends, meteorological data, site observations and handover evidence into one recovery plan.",
      actions: ["Separated resource and curtailment effects from technical losses", "Reviewed inverter and string-level behavior", "Checked evidence quality from EPC handover", "Defined O&M actions that could recover yield without unnecessary CAPEX"],
      results: ["Underperformance causes grouped by impact", "O&M improvement plan", "Owner-ready reporting package"],
      lessons: ["PR alone is not enough for solar technical decisions", "Data gaps can hide both EPC and O&M responsibility", "Fast field response protects long-term yield"],
      relatedServices: ["solar-energy-consulting", "solar-power-plant-consultancy", "energy-audit", "om-performance-improvement"],
      faqs: enFaqs.performance
    },
    {
      slug: "commissioning-readiness-program",
      title: "Power Plant Commissioning Readiness Program",
      category: "Commissioning experience",
      capacity: "72 MW",
      location: "Turkey",
      type: "Renewable power plant",
      role: "Commissioning consultant",
      summary: "Commissioning readiness support for a renewable energy asset approaching first energization and performance testing.",
      scope: ["Commissioning checklist", "Test procedure challenge review", "Punch-list structure", "Handover documentation"],
      commissioning: "A staged readiness model was built for mechanical completion, electrical energization, functional tests, synchronization and performance testing.",
      om: "Commissioning evidence was connected to future operating procedures, alarm response routines, spare-part baselines and maintenance records.",
      challenge: "The project was close to energization, but the owner needed confidence that open items would not create startup risk or weak handover evidence.",
      approach: "The review converted a broad punch-list into commissioning gates with clear test dependencies, acceptance criteria and owner-side decision points.",
      actions: ["Reviewed energization prerequisites", "Challenged test procedure completeness", "Mapped protection and control readiness", "Defined handover evidence required for O&M"],
      results: ["Reduced startup uncertainty", "Clear test ownership", "Improved handover quality"],
      lessons: ["Commissioning control must start before energization pressure rises", "Open items should be ranked by startup risk", "Handover evidence becomes the first O&M baseline"],
      relatedServices: ["power-plant-commissioning", "owners-engineering", "grid-protection-system-analysis", "epc-technical-advisory"],
      faqs: enFaqs.commissioning
    },
    {
      slug: "existing-plant-technical-audit",
      title: "Existing Power Plant Technical Audit",
      category: "Technical audit experience",
      capacity: "38 MW",
      location: "Turkey",
      type: "Hydropower and balance of plant",
      role: "Independent technical auditor",
      summary: "Technical audit for an operating power plant supporting asset health, investment planning and risk prioritization.",
      scope: ["Site inspection", "Document and drawing review", "Protection observations", "O&M maturity review"],
      commissioning: "Commissioning records were compared with current operating evidence, recurring trips, alarm history and protection observations.",
      om: "Spare parts, maintenance planning, fault history, availability tracking and operator response routines were reviewed for reliability risk.",
      challenge: "The owner needed a defensible view of asset condition before deciding which technical risks required immediate action, outage planning or capital budget.",
      approach: "The audit combined site inspection, document review, operating records and engineering judgement into a risk register for management decision-making.",
      actions: ["Inspected critical balance-of-plant systems", "Reviewed protection and SCADA evidence", "Compared as-built information with site condition", "Prepared CAPEX and O&M priority inputs"],
      results: ["Asset health risk register", "CAPEX prioritization input", "Board-level technical summary"],
      lessons: ["Existing assets often carry undocumented handover risk", "Protection observations should be linked to event history", "Technical audits must turn findings into decisions"],
      relatedServices: ["technical-audits-existing-power-plants", "energy-audit", "grid-protection-system-analysis", "renewable-energy-investment-advisory"],
      faqs: enFaqs.audit
    },
    {
      slug: "hydropower-commissioning-case-study",
      title: "Hydropower Commissioning Case Study",
      category: "Commissioning case study",
      capacity: "64 MW",
      location: "Anonymized international HPP",
      type: "Hydropower",
      role: "Commissioning and owner-side technical advisor",
      summary: "Anonymized hydropower commissioning review focused on readiness, test evidence, punch-list control and operational handover.",
      scope: ["Commissioning readiness review", "Protection and energization evidence", "Functional test sequence review", "Punch-list prioritization"],
      commissioning: "Energization prerequisites, test procedures, acceptance criteria, synchronization conditions and handover evidence were reviewed before performance testing.",
      om: "Commissioning records were connected to future operating routines, alarm response, maintenance baselines and unit startup/shutdown procedures.",
      challenge: "The owner needed confidence that the plant could move from construction completion to controlled startup without carrying unresolved technical risk into commercial operation.",
      approach: "The review separated construction completion, pre-commissioning, energization, functional testing and performance testing into evidence-based gates.",
      actions: ["Challenged commissioning procedure completeness", "Ranked punch-list items by startup risk", "Reviewed protection and control readiness", "Defined handover evidence required by operations"],
      results: ["Reduced startup uncertainty", "Improved test ownership", "Clearer operational handover package"],
      lessons: ["Commissioning must be planned before energization pressure rises", "Punch-list items should be ranked by operational risk, not only by discipline", "Handover evidence is an O&M reliability asset"],
      relatedServices: ["power-plant-commissioning", "hydropower-consulting", "owners-engineering", "grid-protection-system-analysis"],
      faqs: enFaqs.commissioning
    },
    {
      slug: "plant-performance-improvement-case-study",
      title: "Plant Performance Improvement Case Study",
      category: "O&M optimization case study",
      capacity: "92 MW",
      location: "Anonymized renewable portfolio",
      type: "Hydropower and solar operations",
      role: "Performance improvement consultant",
      summary: "Anonymized performance improvement review connecting outage history, alarms, O&M discipline and generation loss to corrective actions.",
      scope: ["Generation loss assessment", "Availability and outage review", "Maintenance planning review", "Corrective action roadmap"],
      commissioning: "Historical test baselines were compared with present operating patterns to identify deterioration, data gaps and weak performance references.",
      om: "Alarm discipline, recurring failures, spare parts planning, inspection routines and operator response were reviewed against avoidable loss.",
      challenge: "The owner had production losses but limited clarity on which losses were unavoidable, which were technical, and which required CAPEX.",
      approach: "The analysis grouped losses by equipment, operations, grid interface, water or solar resource conditions and maintenance response.",
      actions: ["Built loss categories from operating data", "Reviewed outage and alarm history", "Prioritized actions by energy impact", "Created a staged O&M improvement roadmap"],
      results: ["Clear generation recovery priorities", "Better maintenance planning discipline", "Owner-ready performance improvement plan"],
      lessons: ["Performance reviews need operating context", "Availability alone is not enough to explain lost value", "Corrective actions should be ranked by energy impact and execution risk"],
      relatedServices: ["om-performance-improvement", "hydropower-plant-optimization", "solar-energy-consulting", "energy-audit"],
      faqs: enFaqs.performance
    },
    {
      slug: "solar-plant-technical-audit-case-study",
      title: "Solar Plant Technical Audit Case Study",
      category: "Solar audit case study",
      capacity: "48 MWp",
      location: "Anonymized solar PV asset",
      type: "Solar PV",
      role: "Independent solar technical auditor",
      summary: "Anonymized solar plant technical audit covering PR analysis, EPC quality evidence, inverter behavior and O&M response.",
      scope: ["Performance ratio review", "Inverter and string observations", "EPC handover evidence", "O&M routine review"],
      commissioning: "Commissioning and handover records were reviewed to distinguish delivery defects from operational degradation and measurement uncertainty.",
      om: "Inspection routines, cleaning logic, response time, recurring availability issues and field reporting were assessed against yield loss.",
      challenge: "The asset showed underperformance, but the owner needed to separate resource variation from technical losses and EPC-related quality concerns.",
      approach: "The audit combined production data, field observations, inverter-level behavior and handover evidence into one technical risk view.",
      actions: ["Separated irradiance and curtailment effects from technical loss", "Reviewed inverter availability patterns", "Checked EPC evidence quality", "Defined O&M response improvements"],
      results: ["Clear PR loss diagnosis", "Prioritized recovery actions", "Improved owner visibility on EPC and O&M responsibilities"],
      lessons: ["Solar audits should not rely on PR alone", "EPC evidence is essential for accountability", "Fast O&M response loops protect long-term yield"],
      relatedServices: ["solar-energy-consulting", "solar-power-plant-consultancy", "technical-audits-existing-power-plants", "energy-audit"],
      faqs: enFaqs.audit
    },
    {
      slug: "epc-owner-side-technical-control-case-study",
      title: "EPC Owner-Side Technical Control Case Study",
      category: "Owner's engineering case study",
      capacity: "71 MW",
      location: "Anonymized EPC project",
      type: "Renewable power plant",
      role: "Owner-side EPC technical advisor",
      summary: "Anonymized EPC owner-side technical control case study focused on design interfaces, contractor deliverables, commissioning readiness and risk reporting.",
      scope: ["EPC interface review", "Contractor deliverable challenge", "Technical risk register", "Commissioning readiness support"],
      commissioning: "Readiness gates and acceptance criteria were reviewed before energization, synchronization and performance testing.",
      om: "EPC deliverables were checked for long-term operation, maintenance planning, asset documentation and operator usability.",
      challenge: "The owner needed independent technical visibility while multiple EPC workstreams were converging toward commissioning.",
      approach: "The advisory work created a structured view of interface risks, open technical decisions, deliverable gaps and owner approvals.",
      actions: ["Reviewed technical deliverables", "Mapped interface ownership", "Prepared owner decision memos", "Tracked commissioning readiness risks"],
      results: ["Improved owner control", "Reduced ambiguity in EPC interfaces", "Stronger handover and commissioning discipline"],
      lessons: ["Owner-side control must start before commissioning", "Interface risk is a major driver of EPC delay", "Decision memos help owners act without slowing delivery"],
      relatedServices: ["epc-technical-advisory", "epc-technical-consultancy", "owners-engineering", "power-plant-commissioning"],
      faqs: enFaqs.epc
    }
  ],
  tr: [
    {
      slug: "hes-portfoy-optimizasyonu",
      title: "HES Portfoy Optimizasyonu",
      category: "HES projeleri",
      capacity: "118 MW",
      location: "Turkiye",
      type: "Hidroelektrik",
      role: "Teknik danisman",
      summary: "Cok uniteli HES portfoyu icin operasyonel inceleme ve performans iyilestirme yol haritasi.",
      scope: ["Uretim kaybi analizi", "Bakim rutinleri incelemesi", "Turbin-jenerator guvenilirlik gozlemleri", "Isveren raporlamasi"],
      commissioning: "Gecmis devreye alma kanitlari mevcut isletmeyle karsilastirilarak baz test, governor davranisi ve uzun vadeli guvenilirlik takibi bosluklari belirlendi.",
      om: "Durus paternleri, emre amadelik suruculeri, alarm disiplini, yedek parca hazirligi ve bakim planlama rutinleri gercek uretim kaybiyla birlikte incelendi.",
      challenge: "Isveren farkli kayip paternlerine sahip birden fazla unite icin hidroloji, ekipman durumu, isletme disiplini ve yatirim ihtiyacini ayirmak istiyordu.",
      approach: "Calisma su-guc performans kanitini durus gecmisi, SCADA olaylari, bakim rutinleri ve turbin-jenerator guvenilirlik gozlemleriyle birlestirdi.",
      actions: ["Kayiplar unite, sezon ve isletme moduna gore gruplandi", "Tekrarlayan alarm ve zorunlu durus tetikleyicileri incelendi", "Bakim rutinleri ariza gecmisiyle karsilastirildi", "Duzeltici aksiyonlar enerji etkisi ve durus ihtiyacina gore siralandi"],
      results: ["Oncelikli O&M aksiyonlari", "Uretim kayiplarinda daha net gorunurluk", "Duzeltici isler icin yatirim siralamasi"],
      lessons: ["HES optimizasyonu su kosullarini makine davranisiyla birlikte okumalidir", "Emre amadelik ancak kayip MWh ile baglanirsa anlamlidir", "Duzeltici isler risk, enerji degeri ve durus penceresine gore siralanmalidir"],
      relatedServices: ["hes-danismanligi", "hes-optimizasyonu", "isletme-bakim-performans-iyilestirme", "mevcut-santraller-icin-teknik-denetim"],
      faqs: trFaqs.performance
    },
    {
      slug: "ges-performans-toparlama",
      title: "GES Performans Toparlama",
      category: "GES projeleri",
      capacity: "46 MW",
      location: "Ic Anadolu",
      type: "Gunes PV",
      role: "Performans danismani",
      summary: "Dusuk performans gosteren GES varliklari icin EPC kalite ve O&M aksiyon planlamasi odakli teknik inceleme.",
      scope: ["PR incelemesi", "Inverter ve string duzeyi gozlemler", "O&M prosedur incelemesi", "Duzeltici aksiyon yol haritasi"],
      commissioning: "EPC teslim bosluklarini isletme bozulmasindan ve veri kalitesi belirsizliginden ayirmak icin devreye alma ve teslim kayitlari kontrol edildi.",
      om: "Temizlik stratejisi, kontrol rutinleri, mudahale suresi, inverter emre amadeligi ve saha raporlama disiplini uretim kayiplariyla karsilastirildi.",
      challenge: "Santral beklenenin altinda uretim yapiyordu; isveren sorunun isinim, EPC kalitesi, inverter davranisi, kirlenme veya O&M yanitindan mi kaynaklandigini bilmek istiyordu.",
      approach: "Analiz PR incelemesi, inverter trendleri, meteorolojik veri, saha gozlemi ve teslim kanitini tek toparlama planinda birlestirdi.",
      actions: ["Kaynak ve kisit etkileri teknik kayiplardan ayrildi", "Inverter ve string davranislari incelendi", "EPC teslim kaniti kalitesi kontrol edildi", "Gereksiz CAPEX yaratmadan verim toparlayacak O&M aksiyonlari tanimlandi"],
      results: ["Dusuk performans nedenleri etkiye gore gruplandi", "O&M iyilestirme plani", "Isveren icin raporlama paketi"],
      lessons: ["PR tek basina GES teknik karari icin yeterli degildir", "Veri bosluklari EPC ve O&M sorumlulugunu gizleyebilir", "Hizli saha yaniti uzun vadeli uretimi korur"],
      relatedServices: ["gunes-enerjisi-danismanligi", "ges-danismanligi", "enerji-denetimi", "isletme-bakim-performans-iyilestirme"],
      faqs: trFaqs.performance
    },
    {
      slug: "devreye-alma-hazirlik-programi",
      title: "Enerji Santrali Devreye Alma Hazirlik Programi",
      category: "Devreye alma deneyimi",
      capacity: "72 MW",
      location: "Turkiye",
      type: "Yenilenebilir enerji santrali",
      role: "Devreye alma danismani",
      summary: "Ilk enerjilendirme ve performans testlerine yaklasan yenilenebilir enerji varligi icin devreye alma hazirlik destegi.",
      scope: ["Devreye alma kontrol listesi", "Test proseduru teknik inceleme", "Eksik is yapisi", "Teslim dokumantasyonu"],
      commissioning: "Mekanik tamamlama, elektrik enerjilendirme, fonksiyonel test, senkronizasyon ve performans testleri icin asamali hazirlik modeli kuruldu.",
      om: "Devreye alma kanitlari gelecekteki isletme prosedurleri, alarm mudahale rutinleri, yedek parca bazlari ve bakim kayitlariyla iliskilendirildi.",
      challenge: "Proje enerjilendirmeye yakindi; isveren acik kalemlerin baslangic riski veya zayif teslim kaniti yaratmayacagindan emin olmak istiyordu.",
      approach: "Inceleme genis eksik is listesini net test bagimliliklari, kabul kriterleri ve isveren karar noktalari olan devreye alma kapilarina cevirdi.",
      actions: ["Enerjilendirme on kosullari incelendi", "Test proseduru eksiksizligi sorgulandi", "Koruma ve kontrol hazirligi haritalandi", "O&M icin gerekli teslim kanitlari tanimlandi"],
      results: ["Baslangic belirsizligi azaltildi", "Test sorumluluklari netlesti", "Teslim kalitesi iyilestirildi"],
      lessons: ["Devreye alma kontrolu enerjilendirme baskisi artmadan baslamalidir", "Acik isler baslangic riskine gore siralanmalidir", "Teslim kaniti ilk O&M bazidir"],
      relatedServices: ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "sebeke-koruma-sistemi-analizi", "epc-teknik-danismanlik-hizmeti"],
      faqs: trFaqs.commissioning
    },
    {
      slug: "mevcut-santral-teknik-denetim",
      title: "Mevcut Enerji Santrali Teknik Denetimi",
      category: "Teknik denetim deneyimi",
      capacity: "38 MW",
      location: "Turkiye",
      type: "HES ve yardimci sistemler",
      role: "Bagimsiz teknik denetci",
      summary: "Varlik sagligi, yatirim planlamasi ve risk onceliklendirmesi icin calisan santralde teknik denetim.",
      scope: ["Saha incelemesi", "Dokuman ve cizim incelemesi", "Koruma gozlemleri", "O&M olgunluk incelemesi"],
      commissioning: "Devreye alma kayitlari mevcut isletme kaniti, tekrarlayan tripler, alarm gecmisi ve koruma gozlemleriyle karsilastirildi.",
      om: "Yedek parca, bakim planlama, ariza gecmisi, emre amadelik takibi ve operator mudahale rutinleri guvenilirlik riski acisindan incelendi.",
      challenge: "Isveren hangi teknik risklerin acil aksiyon, durus planlamasi veya sermaye butcesi gerektirdigini savunulabilir sekilde gormek istiyordu.",
      approach: "Denetim saha incelemesi, dokuman kontrolu, isletme kayitlari ve muhendislik yargisini yonetim karari icin risk listesine donusturdu.",
      actions: ["Kritik yardimci sistemler sahada incelendi", "Koruma ve SCADA kanitlari kontrol edildi", "As-built bilgi saha durumuyla karsilastirildi", "CAPEX ve O&M oncelik girdileri hazirlandi"],
      results: ["Varlik sagligi risk listesi", "CAPEX onceliklendirme girdisi", "Yonetim duzeyi teknik ozet"],
      lessons: ["Mevcut varliklar siklikla dokumante edilmemis teslim riski tasir", "Koruma gozlemleri olay gecmisiyle baglanmalidir", "Teknik denetim bulgulari karara donusturmelidir"],
      relatedServices: ["mevcut-santraller-icin-teknik-denetim", "enerji-denetimi", "sebeke-koruma-sistemi-analizi", "yenilenebilir-enerji-yatirim-danismanligi"],
      faqs: trFaqs.audit
    },
    {
      slug: "hes-devreye-alma-vaka-calismasi",
      title: "HES Devreye Alma Vaka Calismasi",
      category: "Devreye alma vaka calismasi",
      capacity: "64 MW",
      location: "Anonim uluslararasi HES",
      type: "Hidroelektrik",
      role: "Devreye alma ve isveren tarafi teknik danisman",
      summary: "Hazirlik, test kaniti, eksik is kontrolu ve isletmeye teslim odakli anonim HES devreye alma incelemesi.",
      scope: ["Devreye alma hazirlik incelemesi", "Koruma ve enerjilendirme kaniti", "Fonksiyonel test sirasi incelemesi", "Eksik is onceliklendirme"],
      commissioning: "Performans testleri oncesinde enerjilendirme on kosullari, test prosedurleri, kabul kriterleri, senkronizasyon kosullari ve teslim kanitlari incelendi.",
      om: "Devreye alma kayitlari gelecekteki isletme rutinleri, alarm mudahalesi, bakim bazlari ve unite baslatma/durdurma prosedurleriyle iliskilendirildi.",
      challenge: "Isveren, santralin ticari isletmeye teknik risk tasimadan kontrollu baslangica gecebileceginden emin olmak istiyordu.",
      approach: "Inceleme insaat tamamlama, on devreye alma, enerjilendirme, fonksiyonel test ve performans testlerini kanita dayali kapilara ayirdi.",
      actions: ["Devreye alma prosedurleri sorgulandi", "Eksik isler baslangic riskine gore siralandi", "Koruma ve kontrol hazirligi incelendi", "Isletme teslim kanitlari tanimlandi"],
      results: ["Baslangic belirsizligi azaltildi", "Test sahipligi netlesti", "Isletmeye teslim paketi guclendi"],
      lessons: ["Devreye alma enerjilendirme baskisi olusmadan planlanmalidir", "Eksik isler disipline degil isletme riskine gore siralanmalidir", "Teslim kaniti O&M guvenilirlik varligidir"],
      relatedServices: ["enerji-santrali-devreye-alma", "hes-danismanligi", "isveren-muhendisligi", "sebeke-koruma-sistemi-analizi"],
      faqs: trFaqs.commissioning
    },
    {
      slug: "santral-performans-iyilestirme-vaka-calismasi",
      title: "Santral Performans Iyilestirme Vaka Calismasi",
      category: "O&M optimizasyon vaka calismasi",
      capacity: "92 MW",
      location: "Anonim yenilenebilir portfoy",
      type: "HES ve GES isletme",
      role: "Performans iyilestirme danismani",
      summary: "Durus gecmisi, alarmlar, O&M disiplini ve uretim kaybini duzeltici aksiyonlara baglayan anonim performans iyilestirme incelemesi.",
      scope: ["Uretim kaybi degerlendirmesi", "Emre amadelik ve durus incelemesi", "Bakim planlama incelemesi", "Duzeltici aksiyon yol haritasi"],
      commissioning: "Gecmis test bazlari mevcut isletme paternleriyle karsilastirilarak bozulma, veri boslugu ve zayif performans referanslari belirlendi.",
      om: "Alarm disiplini, tekrarlayan arizalar, yedek parca planlama, kontrol rutinleri ve operator mudahalesi onlenebilir kayipla karsilastirildi.",
      challenge: "Isveren uretim kayiplarinin hangilerinin kacinilmaz, teknik veya CAPEX gerektiren kayip oldugunu netlestirmek istiyordu.",
      approach: "Analiz kayiplari ekipman, isletme, sebeke arayuzu, su veya gunes kaynagi kosullari ve bakim mudahalesi basliklarina ayirdi.",
      actions: ["Isletme verisinden kayip kategorileri olusturuldu", "Durus ve alarm gecmisi incelendi", "Aksiyonlar enerji etkisine gore siralandi", "Asamali O&M iyilestirme yol haritasi hazirlandi"],
      results: ["Net uretim toparlama oncelikleri", "Daha iyi bakim planlama disiplini", "Isveren icin performans iyilestirme plani"],
      lessons: ["Performans incelemesi isletme baglami ister", "Emre amadelik tek basina deger kaybini aciklamaz", "Duzeltici aksiyonlar enerji etkisi ve uygulama riskine gore siralanmalidir"],
      relatedServices: ["isletme-bakim-performans-iyilestirme", "hes-optimizasyonu", "gunes-enerjisi-danismanligi", "enerji-denetimi"],
      faqs: trFaqs.performance
    },
    {
      slug: "ges-teknik-denetim-vaka-calismasi",
      title: "GES Teknik Denetim Vaka Calismasi",
      category: "GES denetim vaka calismasi",
      capacity: "48 MWp",
      location: "Anonim GES varligi",
      type: "Gunes PV",
      role: "Bagimsiz GES teknik denetcisi",
      summary: "PR analizi, EPC kalite kaniti, inverter davranisi ve O&M mudahalesini kapsayan anonim GES teknik denetimi.",
      scope: ["Performans orani incelemesi", "Inverter ve string gozlemleri", "EPC teslim kaniti", "O&M rutin incelemesi"],
      commissioning: "Dusuk performansin teslim kusuru mu isletme bozulmasi mi oldugunu ayirmak icin devreye alma ve teslim kayitlari incelendi.",
      om: "Kontrol rutinleri, temizlik mantigi, mudahale suresi, tekrarlayan emre amadelik sorunlari ve saha raporlamasi uretim kaybiyla degerlendirildi.",
      challenge: "Varlik dusuk performans gosteriyordu; isveren kaynak degiskenligi ile teknik kayiplari ve EPC kalite konularini ayirmak istiyordu.",
      approach: "Denetim uretim verisi, saha gozlemleri, inverter davranisi ve teslim kanitini tek teknik risk gorunumunde birlestirdi.",
      actions: ["Isinim ve kisit etkileri teknik kayiptan ayrildi", "Inverter emre amadelik paternleri incelendi", "EPC kanit kalitesi kontrol edildi", "O&M mudahale iyilestirmeleri tanimlandi"],
      results: ["Net PR kayip teshisi", "Oncelikli toparlama aksiyonlari", "EPC ve O&M sorumluluklarinda daha iyi gorunurluk"],
      lessons: ["GES denetimi yalnizca PR'a dayanmamalidir", "EPC kaniti sorumluluk icin kritiktir", "Hizli O&M mudahale donguleri uzun vadeli uretimi korur"],
      relatedServices: ["gunes-enerjisi-danismanligi", "ges-danismanligi", "mevcut-santraller-icin-teknik-denetim", "enerji-denetimi"],
      faqs: trFaqs.audit
    },
    {
      slug: "epc-isveren-tarafi-teknik-kontrol-vaka-calismasi",
      title: "EPC Isveren Tarafi Teknik Kontrol Vaka Calismasi",
      category: "Isveren muhendisligi vaka calismasi",
      capacity: "71 MW",
      location: "Anonim EPC projesi",
      type: "Yenilenebilir enerji santrali",
      role: "Isveren tarafi EPC teknik danismani",
      summary: "Tasarim arayuzleri, yuklenici ciktilari, devreye alma hazirligi ve risk raporlamasina odaklanan anonim EPC teknik kontrol vaka calismasi.",
      scope: ["EPC arayuz incelemesi", "Yuklenici dokuman sorgulamasi", "Teknik risk listesi", "Devreye alma hazirlik destegi"],
      commissioning: "Enerjilendirme, senkronizasyon ve performans testleri oncesinde hazirlik kapilari ve kabul kriterleri incelendi.",
      om: "EPC ciktilarinin uzun vadeli isletme, bakim planlama, varlik dokumantasyonu ve operator kullanimi icin uygunlugu kontrol edildi.",
      challenge: "Isveren, birden fazla EPC is akisi devreye alma asamasina yaklasirken bagimsiz teknik gorunurluk istiyordu.",
      approach: "Danismanlik arayuz riskleri, acik teknik kararlar, dokuman bosluklari ve isveren onaylari icin yapilandirilmis gorunum olusturdu.",
      actions: ["Teknik ciktilar incelendi", "Arayuz sahipligi haritalandi", "Isveren karar notlari hazirlandi", "Devreye alma hazirlik riskleri takip edildi"],
      results: ["Isveren kontrolu guclendi", "EPC arayuz belirsizligi azaldi", "Teslim ve devreye alma disiplini guclendi"],
      lessons: ["Isveren tarafi kontrol devreye almadan once baslamalidir", "Arayuz riski EPC gecikmesinin onemli nedenidir", "Karar notlari teslimi yavaslatmadan isverenin aksiyon almasini saglar"],
      relatedServices: ["epc-teknik-danismanlik-hizmeti", "epc-teknik-danismanlik", "isveren-muhendisligi", "enerji-santrali-devreye-alma"],
      faqs: trFaqs.epc
    }
  ]
};

type EngineeringCaseStudyTopic = {
  enSlug: string;
  trSlug: string;
  enTitle: string;
  trTitle: string;
  category: string;
  capacity: string;
  location: string;
  type: string;
  enRole: string;
  trRole: string;
  enFocus: string;
  trFocus: string;
  equipment: string;
  baseline: number;
  improved: number;
  unit: string;
  annualEnergy: number;
  serviceSet: {
    en: string[];
    tr: string[];
  };
  faqSet: keyof typeof enFaqs;
};

const engineeringCaseStudyTopics: EngineeringCaseStudyTopic[] = [
  {
    enSlug: "hydropower-optimization-unit-dispatch-case-study",
    trSlug: "hes-optimizasyonu-unite-dispec-vaka-calismasi",
    enTitle: "Hydropower Optimization Case Study: Unit Dispatch and Water-to-Wire Loss Recovery",
    trTitle: "HES Optimizasyonu Vaka Calismasi: Unite Dispec ve Su-Guc Kaybi Toparlama",
    category: "Hydropower optimization",
    capacity: "86 MW",
    location: "Anonymized HPP cascade",
    type: "Hydropower",
    enRole: "Hydropower optimization consultant",
    trRole: "HES optimizasyon danismani",
    enFocus: "unit dispatch, head loss and turbine-generator efficiency recovery",
    trFocus: "unite dispec, dusu kaybi ve turbin-jenerator verim toparlama",
    equipment: "Francis turbine units, governor system, intake gates, cooling water and SCADA historian",
    baseline: 91.8,
    improved: 94.1,
    unit: "water-to-wire efficiency",
    annualEnergy: 214000,
    serviceSet: { en: ["hydropower-consulting", "hydropower-plant-optimization", "om-performance-improvement"], tr: ["hes-danismanligi", "hes-optimizasyonu", "isletme-bakim-performans-iyilestirme"] },
    faqSet: "performance"
  },
  {
    enSlug: "kaplan-turbine-performance-blade-angle-case-study",
    trSlug: "kaplan-turbin-performansi-kanat-acisi-vaka-calismasi",
    enTitle: "Kaplan Turbine Performance Case Study: Blade Angle, Guide Vane and Low-Head Efficiency",
    trTitle: "Kaplan Turbin Performansi Vaka Calismasi: Kanat Acisi, Ayar Kanadi ve Dusuk Dusu Verimi",
    category: "Kaplan turbine performance",
    capacity: "42 MW",
    location: "Anonymized run-of-river HPP",
    type: "Hydropower",
    enRole: "Turbine performance advisor",
    trRole: "Turbin performans danismani",
    enFocus: "Kaplan blade coordination, guide-vane curve review and part-load recovery",
    trFocus: "Kaplan kanat koordinasyonu, ayar kanadi egrisi ve kismi yuk toparlama",
    equipment: "Kaplan runner, blade servo, guide vane mechanism, wicket gate feedback and governor curves",
    baseline: 88.6,
    improved: 91.7,
    unit: "part-load efficiency",
    annualEnergy: 98000,
    serviceSet: { en: ["hydropower-consulting", "hydropower-plant-optimization", "technical-audits-existing-power-plants"], tr: ["hes-danismanligi", "hes-optimizasyonu", "mevcut-santraller-icin-teknik-denetim"] },
    faqSet: "performance"
  },
  {
    enSlug: "reservoir-sedimentation-management-intake-loss-case-study",
    trSlug: "rezervuar-sediment-yonetimi-emme-kaybi-vaka-calismasi",
    enTitle: "Reservoir Sedimentation Management Case Study: Intake Loss, Turbidity and Generation Risk",
    trTitle: "Rezervuar Sediment Yonetimi Vaka Calismasi: Emme Kaybi, Bulaniklik ve Uretim Riski",
    category: "Reservoir sedimentation management",
    capacity: "64 MW",
    location: "Anonymized reservoir HPP",
    type: "Hydropower",
    enRole: "Hydropower technical auditor",
    trRole: "HES teknik denetim danismani",
    enFocus: "sediment routing, intake inspection planning and hydraulic loss control",
    trFocus: "sediment yonlendirme, emme yapisi kontrol planlama ve hidrolik kayip kontrolu",
    equipment: "reservoir intake, trash rack, desander, low-level outlet, turbine cooling strainers and bathymetry records",
    baseline: 3.8,
    improved: 1.6,
    unit: "estimated head loss in meters",
    annualEnergy: 176000,
    serviceSet: { en: ["hydropower-consulting", "technical-audits-existing-power-plants", "energy-audit"], tr: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "enerji-denetimi"] },
    faqSet: "audit"
  },
  {
    enSlug: "agc-compliance-governor-response-case-study",
    trSlug: "agc-uyumu-governor-cevabi-vaka-calismasi",
    enTitle: "AGC Compliance Case Study: Governor Response, Secondary Frequency Control and Dispatch Readiness",
    trTitle: "AGC Uyumu Vaka Calismasi: Governor Cevabi, Sekonder Frekans Kontrolu ve Dispec Hazirligi",
    category: "AGC compliance",
    capacity: "118 MW",
    location: "Anonymized HPP portfolio",
    type: "Hydropower",
    enRole: "AGC and grid compliance advisor",
    trRole: "AGC ve sebeke uyumu danismani",
    enFocus: "AGC signal tracking, governor tuning and grid-code readiness",
    trFocus: "AGC sinyal takibi, governor ayari ve sebeke kodu hazirligi",
    equipment: "AGC interface, governor controller, SCADA gateway, plant controller and dispatch telemetry",
    baseline: 72,
    improved: 93,
    unit: "AGC tracking score",
    annualEnergy: 260000,
    serviceSet: { en: ["grid-protection-system-analysis", "hydropower-consulting", "power-plant-commissioning"], tr: ["sebeke-koruma-sistemi-analizi", "hes-danismanligi", "enerji-santrali-devreye-alma"] },
    faqSet: "commissioning"
  },
  {
    enSlug: "grid-code-compliance-reactive-power-case-study",
    trSlug: "sebeke-kodu-uyumu-reaktif-guc-vaka-calismasi",
    enTitle: "Grid Code Compliance Case Study: Reactive Power, AVR Coordination and Protection Evidence",
    trTitle: "Sebeke Kodu Uyumu Vaka Calismasi: Reaktif Guc, AVR Koordinasyonu ve Koruma Kaniti",
    category: "Grid code compliance",
    capacity: "71 MW",
    location: "Anonymized renewable plant",
    type: "Hydropower and grid interface",
    enRole: "Grid compliance technical advisor",
    trRole: "Sebeke uyumu teknik danismani",
    enFocus: "reactive power capability, AVR settings and protection coordination evidence",
    trFocus: "reaktif guc kabiliyeti, AVR ayarlari ve koruma koordinasyon kaniti",
    equipment: "AVR, generator capability curve, transformer tap settings, relay files and grid metering",
    baseline: 0.92,
    improved: 0.98,
    unit: "power factor operating envelope",
    annualEnergy: 188000,
    serviceSet: { en: ["grid-protection-system-analysis", "owners-engineering", "technical-audits-existing-power-plants"], tr: ["sebeke-koruma-sistemi-analizi", "isveren-muhendisligi", "mevcut-santraller-icin-teknik-denetim"] },
    faqSet: "audit"
  },
  {
    enSlug: "solar-underperformance-recovery-pr-loss-case-study",
    trSlug: "ges-dusuk-performans-toparlama-pr-kaybi-vaka-calismasi",
    enTitle: "Solar Underperformance Recovery Case Study: PR Loss, Inverter Availability and O&M Response",
    trTitle: "GES Dusuk Performans Toparlama Vaka Calismasi: PR Kaybi, Inverter Emre Amadeligi ve O&M Yaniti",
    category: "Solar underperformance recovery",
    capacity: "52 MWp",
    location: "Anonymized solar PV site",
    type: "Solar PV",
    enRole: "Solar performance recovery advisor",
    trRole: "GES performans toparlama danismani",
    enFocus: "PR loss separation, inverter availability and corrective O&M plan",
    trFocus: "PR kaybi ayrimi, inverter emre amadeligi ve duzeltici O&M plani",
    equipment: "central inverters, string combiner boxes, pyranometer, weather station and SCADA data export",
    baseline: 77.4,
    improved: 82.9,
    unit: "performance ratio",
    annualEnergy: 82000,
    serviceSet: { en: ["solar-energy-consulting", "solar-power-plant-consultancy", "om-performance-improvement"], tr: ["gunes-enerjisi-danismanligi", "ges-danismanligi", "isletme-bakim-performans-iyilestirme"] },
    faqSet: "performance"
  },
  {
    enSlug: "epc-technical-audit-design-interface-case-study",
    trSlug: "epc-teknik-denetim-tasarim-arayuzu-vaka-calismasi",
    enTitle: "EPC Technical Audit Case Study: Design Interface, Contractor Evidence and Owner Control",
    trTitle: "EPC Teknik Denetim Vaka Calismasi: Tasarim Arayuzu, Yuklenici Kaniti ve Isveren Kontrolu",
    category: "EPC technical audit",
    capacity: "95 MW",
    location: "Anonymized EPC project",
    type: "Renewable EPC project",
    enRole: "Owner-side EPC technical auditor",
    trRole: "Isveren tarafi EPC teknik denetcisi",
    enFocus: "EPC interface gaps, design freeze quality and commissioning evidence control",
    trFocus: "EPC arayuz bosluklari, tasarim dondurma kalitesi ve devreye alma kanit kontrolu",
    equipment: "civil-electrical interfaces, protection deliverables, SCADA integration, method statements and punch-list register",
    baseline: 61,
    improved: 87,
    unit: "readiness evidence score",
    annualEnergy: 230000,
    serviceSet: { en: ["epc-technical-advisory", "epc-technical-consultancy", "owners-engineering"], tr: ["epc-teknik-danismanlik-hizmeti", "epc-teknik-danismanlik", "isveren-muhendisligi"] },
    faqSet: "epc"
  },
  {
    enSlug: "plant-commissioning-energization-readiness-case-study",
    trSlug: "santral-devreye-alma-enerjilendirme-hazirligi-vaka-calismasi",
    enTitle: "Plant Commissioning Case Study: Energization Readiness, Functional Testing and Handover Evidence",
    trTitle: "Santral Devreye Alma Vaka Calismasi: Enerjilendirme Hazirligi, Fonksiyonel Test ve Teslim Kaniti",
    category: "Plant commissioning",
    capacity: "72 MW",
    location: "Anonymized renewable plant",
    type: "Renewable power plant",
    enRole: "Commissioning readiness consultant",
    trRole: "Devreye alma hazirlik danismani",
    enFocus: "energization gates, functional test ownership and operating handover",
    trFocus: "enerjilendirme kapilari, fonksiyonel test sahipligi ve isletme teslimi",
    equipment: "medium-voltage switchgear, relay panels, auxiliary systems, SCADA point tests and transformer bay",
    baseline: 68,
    improved: 92,
    unit: "commissioning readiness score",
    annualEnergy: 150000,
    serviceSet: { en: ["power-plant-commissioning", "owners-engineering", "grid-protection-system-analysis"], tr: ["enerji-santrali-devreye-alma", "isveren-muhendisligi", "sebeke-koruma-sistemi-analizi"] },
    faqSet: "commissioning"
  },
  {
    enSlug: "availability-improvement-forced-outage-case-study",
    trSlug: "emre-amadelik-iyilestirme-zorunlu-durus-vaka-calismasi",
    enTitle: "Availability Improvement Case Study: Forced Outage Reduction and Maintenance Discipline",
    trTitle: "Emre Amadelik Iyilestirme Vaka Calismasi: Zorunlu Durus Azaltma ve Bakim Disiplini",
    category: "Availability improvement",
    capacity: "104 MW",
    location: "Anonymized renewable portfolio",
    type: "Hydropower and solar operations",
    enRole: "Availability improvement consultant",
    trRole: "Emre amadelik iyilestirme danismani",
    enFocus: "forced outage analysis, alarm discipline and maintenance planning",
    trFocus: "zorunlu durus analizi, alarm disiplini ve bakim planlama",
    equipment: "turbine-generator auxiliaries, inverter stations, protection trips, CMMS records and spare parts stores",
    baseline: 91.2,
    improved: 96.4,
    unit: "technical availability",
    annualEnergy: 292000,
    serviceSet: { en: ["om-performance-improvement", "energy-audit", "technical-audits-existing-power-plants"], tr: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "mevcut-santraller-icin-teknik-denetim"] },
    faqSet: "performance"
  },
  {
    enSlug: "om-optimization-maintenance-planning-case-study",
    trSlug: "om-optimizasyonu-bakim-planlama-vaka-calismasi",
    enTitle: "O&M Optimization Case Study: Maintenance Planning, Alarm Response and Loss Prioritization",
    trTitle: "O&M Optimizasyonu Vaka Calismasi: Bakim Planlama, Alarm Yaniti ve Kayip Onceliklendirme",
    category: "O&M optimization",
    capacity: "88 MW",
    location: "Anonymized operating assets",
    type: "Renewable operations",
    enRole: "O&M optimization advisor",
    trRole: "O&M optimizasyon danismani",
    enFocus: "maintenance planning maturity, alarm response and energy-loss ranking",
    trFocus: "bakim planlama olgunlugu, alarm yaniti ve enerji kaybi siralamasi",
    equipment: "CMMS, SCADA alarm historian, maintenance logs, transformer auxiliaries and critical spares",
    baseline: 1240,
    improved: 520,
    unit: "avoidable MWh/month loss",
    annualEnergy: 205000,
    serviceSet: { en: ["om-performance-improvement", "energy-audit", "owners-engineering"], tr: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "isveren-muhendisligi"] },
    faqSet: "performance"
  },
  {
    enSlug: "hydropower-intake-trash-rack-loss-case-study",
    trSlug: "hes-emme-izgarasi-kayip-vaka-calismasi",
    enTitle: "Hydropower Optimization Case Study: Intake Trash Rack Loss and Unit Output Recovery",
    trTitle: "HES Optimizasyonu Vaka Calismasi: Emme Izgarasi Kaybi ve Unite Cikis Toparlama",
    category: "Hydropower optimization",
    capacity: "58 MW",
    location: "Anonymized river HPP",
    type: "Hydropower",
    enRole: "Hydraulic loss consultant",
    trRole: "Hidrolik kayip danismani",
    enFocus: "trash rack differential head, intake cleaning triggers and unit derating",
    trFocus: "emme izgarasi diferansiyel dusu, temizlik tetikleri ve unite derating",
    equipment: "intake trash rack, differential level sensors, unit flow estimate and SCADA alarms",
    baseline: 2.4,
    improved: 0.8,
    unit: "trash-rack head loss in meters",
    annualEnergy: 132000,
    serviceSet: { en: ["hydropower-consulting", "hydropower-plant-optimization", "energy-audit"], tr: ["hes-danismanligi", "hes-optimizasyonu", "enerji-denetimi"] },
    faqSet: "performance"
  },
  {
    enSlug: "kaplan-turbine-cavitation-risk-case-study",
    trSlug: "kaplan-turbin-kavitasyon-riski-vaka-calismasi",
    enTitle: "Kaplan Turbine Performance Case Study: Cavitation Risk, Tailwater and Operating Envelope",
    trTitle: "Kaplan Turbin Performansi Vaka Calismasi: Kavitasyon Riski, Kuyruksuyu ve Isletme Zarfi",
    category: "Kaplan turbine performance",
    capacity: "36 MW",
    location: "Anonymized low-head HPP",
    type: "Hydropower",
    enRole: "Kaplan turbine technical advisor",
    trRole: "Kaplan turbin teknik danismani",
    enFocus: "cavitation risk, tailwater level and safe operating envelope",
    trFocus: "kavitasyon riski, kuyruksuyu seviyesi ve guvenli isletme zarfi",
    equipment: "Kaplan runner, draft tube, tailwater measurement, vibration trend and operating curve",
    baseline: 7.8,
    improved: 3.1,
    unit: "high-risk operating hours per week",
    annualEnergy: 76000,
    serviceSet: { en: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"], tr: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"] },
    faqSet: "audit"
  },
  {
    enSlug: "agc-signal-quality-scada-case-study",
    trSlug: "agc-sinyal-kalitesi-scada-vaka-calismasi",
    enTitle: "AGC Compliance Case Study: Signal Quality, SCADA Latency and Dispatch Response",
    trTitle: "AGC Uyumu Vaka Calismasi: Sinyal Kalitesi, SCADA Gecikmesi ve Dispec Cevabi",
    category: "AGC compliance",
    capacity: "120 MW",
    location: "Anonymized grid-connected plant",
    type: "Hydropower",
    enRole: "SCADA and AGC compliance consultant",
    trRole: "SCADA ve AGC uyum danismani",
    enFocus: "AGC command latency, signal scaling and telemetry validation",
    trFocus: "AGC komut gecikmesi, sinyal olcekleme ve telemetri dogrulama",
    equipment: "RTU, SCADA gateway, AGC master signal, governor setpoint channel and historian timestamps",
    baseline: 14.5,
    improved: 4.2,
    unit: "average command response delay in seconds",
    annualEnergy: 310000,
    serviceSet: { en: ["grid-protection-system-analysis", "power-plant-commissioning", "om-performance-improvement"], tr: ["sebeke-koruma-sistemi-analizi", "enerji-santrali-devreye-alma", "isletme-bakim-performans-iyilestirme"] },
    faqSet: "commissioning"
  },
  {
    enSlug: "grid-code-protection-coordination-case-study",
    trSlug: "sebeke-kodu-koruma-koordinasyonu-vaka-calismasi",
    enTitle: "Grid Code Compliance Case Study: Protection Coordination and Nuisance Trip Reduction",
    trTitle: "Sebeke Kodu Uyumu Vaka Calismasi: Koruma Koordinasyonu ve Gereksiz Trip Azaltma",
    category: "Grid code compliance",
    capacity: "67 MW",
    location: "Anonymized renewable plant",
    type: "Grid-connected renewable plant",
    enRole: "Protection and grid compliance auditor",
    trRole: "Koruma ve sebeke uyumu denetcisi",
    enFocus: "relay setting review, selectivity evidence and nuisance trip reduction",
    trFocus: "role ayar incelemesi, selektivite kaniti ve gereksiz trip azaltma",
    equipment: "generator relay, transformer differential relay, feeder protection, event recorder and grid fault files",
    baseline: 9,
    improved: 2,
    unit: "unplanned grid-interface trips per quarter",
    annualEnergy: 170000,
    serviceSet: { en: ["grid-protection-system-analysis", "technical-audits-existing-power-plants", "owners-engineering"], tr: ["sebeke-koruma-sistemi-analizi", "mevcut-santraller-icin-teknik-denetim", "isveren-muhendisligi"] },
    faqSet: "audit"
  },
  {
    enSlug: "solar-soiling-cleaning-strategy-case-study",
    trSlug: "ges-kirlenme-temizlik-stratejisi-vaka-calismasi",
    enTitle: "Solar Underperformance Case Study: Soiling Loss, Cleaning Strategy and Yield Recovery",
    trTitle: "GES Dusuk Performans Vaka Calismasi: Kirlenme Kaybi, Temizlik Stratejisi ve Uretim Toparlama",
    category: "Solar underperformance recovery",
    capacity: "34 MWp",
    location: "Anonymized solar PV site",
    type: "Solar PV",
    enRole: "Solar O&M performance consultant",
    trRole: "GES O&M performans danismani",
    enFocus: "soiling loss quantification, cleaning trigger logic and yield recovery",
    trFocus: "kirlenme kaybi olcumu, temizlik tetik mantigi ve uretim toparlama",
    equipment: "reference modules, pyranometer, string monitoring, cleaning logs and inverter production data",
    baseline: 6.7,
    improved: 2.1,
    unit: "monthly soiling loss",
    annualEnergy: 59000,
    serviceSet: { en: ["solar-energy-consulting", "om-performance-improvement", "energy-audit"], tr: ["gunes-enerjisi-danismanligi", "isletme-bakim-performans-iyilestirme", "enerji-denetimi"] },
    faqSet: "performance"
  },
  {
    enSlug: "epc-technical-audit-handover-evidence-case-study",
    trSlug: "epc-teknik-denetim-teslim-kaniti-vaka-calismasi",
    enTitle: "EPC Technical Audit Case Study: Handover Evidence, Punch-List Control and Claim Risk",
    trTitle: "EPC Teknik Denetim Vaka Calismasi: Teslim Kaniti, Punch-List Kontrolu ve Claim Riski",
    category: "EPC technical audit",
    capacity: "83 MW",
    location: "Anonymized EPC handover",
    type: "Renewable EPC project",
    enRole: "EPC handover audit consultant",
    trRole: "EPC teslim denetim danismani",
    enFocus: "handover evidence completeness, punch-list risk ranking and claim prevention",
    trFocus: "teslim kaniti eksiksizligi, punch-list risk siralamasi ve claim onleme",
    equipment: "handover dossiers, test sheets, as-built drawings, punch-list register and warranty matrix",
    baseline: 54,
    improved: 89,
    unit: "handover evidence completeness score",
    annualEnergy: 198000,
    serviceSet: { en: ["epc-technical-advisory", "owners-engineering", "power-plant-commissioning"], tr: ["epc-teknik-danismanlik-hizmeti", "isveren-muhendisligi", "enerji-santrali-devreye-alma"] },
    faqSet: "epc"
  },
  {
    enSlug: "plant-commissioning-protection-test-case-study",
    trSlug: "santral-devreye-alma-koruma-test-vaka-calismasi",
    enTitle: "Plant Commissioning Case Study: Protection Testing, Interlocks and Synchronization Readiness",
    trTitle: "Santral Devreye Alma Vaka Calismasi: Koruma Testi, Kilitlemeler ve Senkronizasyon Hazirligi",
    category: "Plant commissioning",
    capacity: "49 MW",
    location: "Anonymized commissioning site",
    type: "Hydropower and grid bay",
    enRole: "Commissioning and protection review consultant",
    trRole: "Devreye alma ve koruma inceleme danismani",
    enFocus: "relay test evidence, interlock validation and synchronization gate control",
    trFocus: "role test kaniti, kilitleme dogrulama ve senkronizasyon kapisi kontrolu",
    equipment: "generator protection, synchronizer, breaker interlocks, SCADA alarms and test sheets",
    baseline: 64,
    improved: 95,
    unit: "critical test completion score",
    annualEnergy: 112000,
    serviceSet: { en: ["power-plant-commissioning", "grid-protection-system-analysis", "owners-engineering"], tr: ["enerji-santrali-devreye-alma", "sebeke-koruma-sistemi-analizi", "isveren-muhendisligi"] },
    faqSet: "commissioning"
  },
  {
    enSlug: "availability-improvement-spare-parts-case-study",
    trSlug: "emre-amadelik-yedek-parca-vaka-calismasi",
    enTitle: "Availability Improvement Case Study: Critical Spares, Repair Time and Forced Outage Exposure",
    trTitle: "Emre Amadelik Iyilestirme Vaka Calismasi: Kritik Yedek Parca, Onarim Suresi ve Zorunlu Durus Riski",
    category: "Availability improvement",
    capacity: "73 MW",
    location: "Anonymized operating plant",
    type: "Renewable operations",
    enRole: "O&M reliability advisor",
    trRole: "O&M guvenilirlik danismani",
    enFocus: "critical spare strategy, mean time to repair and outage exposure",
    trFocus: "kritik yedek parca stratejisi, ortalama onarim suresi ve durus maruziyeti",
    equipment: "critical spares list, auxiliary pumps, inverter boards, governor cards and maintenance records",
    baseline: 18.4,
    improved: 7.6,
    unit: "average repair duration in hours",
    annualEnergy: 168000,
    serviceSet: { en: ["om-performance-improvement", "technical-audits-existing-power-plants", "energy-audit"], tr: ["isletme-bakim-performans-iyilestirme", "mevcut-santraller-icin-teknik-denetim", "enerji-denetimi"] },
    faqSet: "performance"
  },
  {
    enSlug: "om-optimization-alarm-management-case-study",
    trSlug: "om-optimizasyonu-alarm-yonetimi-vaka-calismasi",
    enTitle: "O&M Optimization Case Study: Alarm Management, Operator Response and Recurring Fault Control",
    trTitle: "O&M Optimizasyonu Vaka Calismasi: Alarm Yonetimi, Operator Yaniti ve Tekrarlayan Ariza Kontrolu",
    category: "O&M optimization",
    capacity: "61 MW",
    location: "Anonymized control room",
    type: "Renewable operations",
    enRole: "Operations optimization consultant",
    trRole: "Isletme optimizasyon danismani",
    enFocus: "alarm rationalization, operator response timing and recurring fault closure",
    trFocus: "alarm rasyonalizasyonu, operator yanit suresi ve tekrarlayan ariza kapama",
    equipment: "SCADA alarm list, event historian, operator logbook, CMMS work orders and root-cause register",
    baseline: 420,
    improved: 145,
    unit: "standing alarms per month",
    annualEnergy: 146000,
    serviceSet: { en: ["om-performance-improvement", "energy-audit", "owners-engineering"], tr: ["isletme-bakim-performans-iyilestirme", "enerji-denetimi", "isveren-muhendisligi"] },
    faqSet: "performance"
  },
  {
    enSlug: "reservoir-sedimentation-desander-operation-case-study",
    trSlug: "rezervuar-sediment-kum-tutucu-isletme-vaka-calismasi",
    enTitle: "Reservoir Sedimentation Case Study: Desander Operation, Abrasion Risk and Turbine Protection",
    trTitle: "Rezervuar Sediment Vaka Calismasi: Kum Tutucu Isletme, Asinma Riski ve Turbin Koruma",
    category: "Reservoir sedimentation management",
    capacity: "55 MW",
    location: "Anonymized sediment-prone HPP",
    type: "Hydropower",
    enRole: "Sedimentation and asset protection consultant",
    trRole: "Sedimentasyon ve varlik koruma danismani",
    enFocus: "desander operating windows, abrasion indicators and turbine protection planning",
    trFocus: "kum tutucu isletme pencereleri, asinma gostergeleri ve turbin koruma planlama",
    equipment: "desander flushing gates, sediment sampling, turbine guide bearings, cooling water strainers and inspection reports",
    baseline: 11.2,
    improved: 4.9,
    unit: "abrasive sediment exposure index",
    annualEnergy: 121000,
    serviceSet: { en: ["hydropower-consulting", "technical-audits-existing-power-plants", "om-performance-improvement"], tr: ["hes-danismanligi", "mevcut-santraller-icin-teknik-denetim", "isletme-bakim-performans-iyilestirme"] },
    faqSet: "audit"
  }
];

function buildEngineeringCaseStudy(locale: Locale, topic: EngineeringCaseStudyTopic): Project {
  const en = locale === "en";
  const title = en ? topic.enTitle : topic.trTitle;
  const focus = en ? topic.enFocus : topic.trFocus;
  const baseline = topic.baseline;
  const improved = topic.improved;
  const delta = Math.abs(improved - baseline);
  const relative = baseline !== 0 ? Math.abs((delta / baseline) * 100) : 0;
  const annualGain = Math.round(topic.annualEnergy * Math.min(relative / 100, 0.08));
  const services = en ? topic.serviceSet.en : topic.serviceSet.tr;

  if (en) {
    return {
      slug: topic.enSlug,
      title,
      category: topic.category,
      capacity: topic.capacity,
      location: topic.location,
      type: topic.type,
      role: topic.enRole,
      summary: `An anonymized engineering case study on ${focus}, prepared to show how field evidence, operating records and owner-side technical judgement can protect renewable energy project value.`,
      scope: [
        `Technical baseline review for ${focus}`,
        `SCADA, event, test and O&M evidence analysis`,
        "Before/after performance metric development",
        "Owner-side engineering recommendations and CTA-ready reporting"
      ],
      commissioning: `Commissioning and handover records were reviewed for test completeness, acceptance criteria, open punch-list items and whether the original evidence could still support current operational decisions. The review looked for missing relay sheets, incomplete functional test records, weak SCADA point validation and unclear responsibility for unresolved items.`,
      om: `Operating evidence was reviewed through SCADA exports, event history, alarm patterns, outage reports, O&M tickets and maintenance planning records. The objective was to identify whether the performance issue was caused by equipment condition, control logic, grid interface constraints, operator response, spare-part limitations or incomplete EPC handover.`,
      challenge: `The owner was facing a realistic technical decision: continue operating with incomplete evidence, approve corrective spending, challenge the EPC or O&M contractor, or request additional tests. The asset had enough symptoms to justify concern, but not enough organized evidence for a confident decision.`,
      approach: `The engineering approach combined document review, trend analysis, operating interviews and risk ranking. The work started from the commercial decision and moved backward into the technical proof required to support it. This avoided the common mistake of producing a long observation list without identifying which findings change owner action.`,
      actions: [
        `Established the baseline ${topic.unit} at ${baseline}`,
        `Validated improvement potential against ${topic.equipment}`,
        "Ranked recommended actions by safety, generation impact, grid compliance and outage dependency",
        "Linked every action to a service pathway for technical consultancy, EPC advisory, commissioning or O&M optimization"
      ],
      results: [
        `${topic.unit} improved from ${baseline} to ${improved}`,
        `Estimated recoverable annual value equivalent to approximately ${annualGain.toLocaleString("en-US")} MWh of protected or recovered generation`,
        "Owner received a decision-ready engineering action plan with supporting evidence"
      ],
      lessons: [
        "Before/after metrics are stronger when the calculation method is transparent",
        "Operational evidence should be tied to real owner decisions, not only technical observations",
        "Case-study value comes from connecting root cause, practical action and measurable result"
      ],
      relatedServices: services,
      beforeAfterMetrics: [
        {
          label: topic.unit,
          before: String(baseline),
          after: String(improved),
          impact: `The before/after comparison gave the owner a measurable basis for judging whether ${focus} should be handled through immediate correction, outage planning, contractor follow-up or ongoing monitoring.`
        },
        {
          label: "Estimated annual generation exposure",
          before: `${topic.annualEnergy.toLocaleString("en-US")} MWh baseline portfolio reference`,
          after: `${annualGain.toLocaleString("en-US")} MWh recoverable or protected value estimate`,
          impact: "This estimate was used as a decision filter. It prevented low-impact issues from consuming outage time while giving high-value risks enough management attention."
        },
        {
          label: "Engineering evidence quality",
          before: "fragmented logs, partial test records and inconsistent responsibility",
          after: "ranked evidence pack, missing-test list and owner action register",
          impact: "Evidence quality improved because findings were converted into tests, inspections, operating checks and accountable owner-side decisions."
        }
      ],
      calculations: [
        `Relative improvement = |${improved} - ${baseline}| / ${baseline} x 100 = ${relative.toFixed(1)}%. The percentage was not treated as a marketing figure; it was used to test whether the change was large enough to influence outage planning or contractor follow-up.`,
        `Recoverable generation estimate = ${topic.annualEnergy.toLocaleString("en-US")} MWh/year x capped engineering factor ${Math.min(relative / 100, 0.08).toFixed(3)} = ${annualGain.toLocaleString("en-US")} MWh/year. The cap avoids overstating value when a metric is not directly equal to annual energy recovery.`,
        `Decision priority score combined safety, lost MWh exposure, grid-code relevance, warranty leverage, outage dependency and implementation complexity. Items that scored high on safety or grid compliance were separated from purely economic optimization items.`
      ],
      authorExpertise: `This case study is written from an owner-side engineering perspective shaped by power plant operation, commissioning, EPC interface control, hydropower and solar performance analysis, grid compliance review and technical audit practice. The emphasis is intentionally practical: what evidence should be trusted, what must be tested again, which finding affects revenue or safety, and how an owner can convert a technical observation into an executable decision. Oztoprak Energy uses this structure to support power plant owners, EPC companies, investors and O&M teams that need independent technical judgement rather than generic renewable energy commentary.`,
      faqs: [
        ...enFaqs[topic.faqSet],
        {
          question: `How was the improvement in ${topic.unit} validated?`,
          answer: `The improvement was validated by comparing the baseline with corrected operating evidence, reviewing SCADA and test records, and checking whether the result was technically consistent with the condition of ${topic.equipment}.`
        },
        {
          question: "Can this type of case study support an investment or EPC decision?",
          answer: "Yes. The output is structured around owner decisions: risk acceptance, additional testing, EPC follow-up, outage planning, O&M improvement or investment prioritization."
        }
      ]
    };
  }

  return {
    slug: topic.trSlug,
    title,
    category: topic.category,
    capacity: topic.capacity,
    location: topic.location,
    type: topic.type,
    role: topic.trRole,
    summary: `${focus} konusunda anonim bir muhendislik vaka calismasi. Amac saha kaniti, isletme kaydi ve isveren tarafi teknik yarginin yenilenebilir enerji proje degerini nasil koruyabilecegini gostermektir.`,
    scope: [
      `${focus} icin teknik baz incelemesi`,
      "SCADA, olay, test ve O&M kanit analizi",
      "Once/sonra performans metrik gelistirme",
      "Isveren tarafi muhendislik onerileri ve danismanlik raporlamasi"
    ],
    commissioning: "Devreye alma ve teslim kayitlari test eksiksizligi, kabul kriterleri, acik punch-list kalemleri ve orijinal kanitin mevcut operasyonel kararlari destekleyip desteklemedigi acisindan incelendi. Eksik role formlari, tamamlanmamis fonksiyonel test kayitlari, zayif SCADA nokta dogrulamasi ve kapanmamis konularin belirsiz sorumlulugu ozellikle kontrol edildi.",
    om: "Isletme kaniti SCADA ciktilari, olay gecmisi, alarm paternleri, durus raporlari, O&M is emirleri ve bakim planlama kayitlari uzerinden incelendi. Amaç performans sorununun ekipman durumu, kontrol mantigi, sebeke arayuzu, operator yaniti, yedek parca siniri veya eksik EPC tesliminden kaynaklanip kaynaklanmadigini ayirmakti.",
    challenge: "Isveren gercekci bir teknik kararla karsi karsiyaydi: eksik kanitla isletmeye devam etmek, duzeltici harcamayi onaylamak, EPC veya O&M yuklenicisini sorgulamak ya da ek test istemek. Varlik endise yaratacak kadar belirti gosteriyordu; ancak guvenli karar icin kanitlar yeterince organize degildi.",
    approach: "Muhendislik yaklasimi dokuman incelemesi, trend analizi, isletme gorusmeleri ve risk siralamasini birlestirdi. Calisma ticari karardan baslayip bu karari destekleyecek teknik kanita geri gitti. Boylece sahibinin ne yapacagini degistirmeyen uzun gozlem listesi uretme hatasi onlendi.",
    actions: [
      `${topic.unit} icin ${baseline} baz degeri kuruldu`,
      `${topic.equipment} uzerinden iyilestirme potansiyeli dogrulandi`,
      "Oneriler emniyet, uretim etkisi, sebeke uyumu ve durus bagimliligina gore siralandi",
      "Her aksiyon teknik danismanlik, EPC danismanligi, devreye alma veya O&M optimizasyon hizmet yoluna baglandi"
    ],
    results: [
      `${topic.unit} ${baseline} seviyesinden ${improved} seviyesine iyilesti`,
      `Yaklasik ${annualGain.toLocaleString("tr-TR")} MWh/yil korunabilir veya toparlanabilir uretim degeri hesaplandi`,
      "Isveren kanitli, karar verilebilir ve uygulanabilir muhendislik aksiyon plani aldi"
    ],
    lessons: [
      "Once/sonra metrikleri ancak hesap yontemi seffafsa gucludur",
      "Operasyonel kanit yalniz teknik gozleme degil gercek isveren kararina baglanmalidir",
      "Vaka calismasi degeri kok neden, pratik aksiyon ve olculebilir sonucu birlestirmekten gelir"
    ],
    relatedServices: services,
    beforeAfterMetrics: [
      {
        label: topic.unit,
        before: String(baseline),
        after: String(improved),
        impact: `Once/sonra karsilastirmasi isverene ${focus} konusunun hemen duzeltme, durus planlama, yuklenici takibi veya izleme ile yonetilip yonetilmeyecegini olculebilir sekilde gosterdi.`
      },
      {
        label: "Tahmini yillik uretim maruziyeti",
        before: `${topic.annualEnergy.toLocaleString("tr-TR")} MWh baz portfoy referansi`,
        after: `${annualGain.toLocaleString("tr-TR")} MWh korunabilir veya toparlanabilir deger tahmini`,
        impact: "Bu tahmin karar filtresi olarak kullanildi. Dusuk etkili konularin durus zamanini tuketmesini engelledi ve yuksek degerli risklere yonetim dikkati verdi."
      },
      {
        label: "Muhendislik kanit kalitesi",
        before: "parca parca loglar, kismi test kayitlari ve belirsiz sorumluluk",
        after: "siralanmis kanit paketi, eksik test listesi ve isveren aksiyon kaydi",
        impact: "Kanit kalitesi artti; cunku bulgular testlere, incelemelere, isletme kontrollerine ve sorumlu isveren kararlarina donusturuldu."
      }
    ],
    calculations: [
      `Goreli iyilesme = |${improved} - ${baseline}| / ${baseline} x 100 = ${relative.toFixed(1)}%. Bu oran pazarlama rakami olarak degil, degisimin durus planlama veya yuklenici takibini etkileyip etkilemedigini test etmek icin kullanildi.`,
      `Toparlanabilir uretim tahmini = ${topic.annualEnergy.toLocaleString("tr-TR")} MWh/yil x sinirli muhendislik katsayisi ${Math.min(relative / 100, 0.08).toFixed(3)} = ${annualGain.toLocaleString("tr-TR")} MWh/yil. Sinir, metrik dogrudan yillik enerji toparlamaya esit degilse degerin abartilmasini engeller.`,
      "Karar oncelik puani emniyet, kayip MWh maruziyeti, sebeke kodu ilgisi, garanti gucu, durus bagimliligi ve uygulama karmasikligini birlestirdi. Emniyet veya sebeke uyumu yuksek olan kalemler ekonomik optimizasyonlardan ayrildi."
    ],
    authorExpertise: "Bu vaka calismasi enerji santrali isletmesi, devreye alma, EPC arayuz kontrolu, HES ve GES performans analizi, sebeke uyumu incelemesi ve teknik denetim tecrubesine dayanan isveren tarafi muhendislik perspektifiyle yazildi. Vurgu bilerek pratiktir: hangi kanita guvenilmeli, ne tekrar test edilmeli, hangi bulgu gelir veya emniyeti etkiler ve isveren teknik gozlemi uygulanabilir karara nasil cevirir? Oztoprak Enerji bu yapıyı santral sahipleri, EPC sirketleri, yatirimcilar ve O&M ekipleri icin bagimsiz teknik yargi uretmek amaciyla kullanir.",
    faqs: [
      ...trFaqs[topic.faqSet],
      {
        question: `${topic.unit} iyilesmesi nasil dogrulandi?`,
        answer: `Iyilesme baz degerin duzeltilmis isletme kanitiyla karsilastirilmasi, SCADA ve test kayitlarinin incelenmesi ve sonucun ${topic.equipment} durumu ile teknik olarak uyumlu olup olmadiginin kontroluyle dogrulandi.`
      },
      {
        question: "Bu tur vaka calismasi yatirim veya EPC kararini destekler mi?",
        answer: "Evet. Cikti risk kabulü, ek test, EPC takibi, durus planlama, O&M iyilestirme veya yatirim onceligi gibi isveren kararlarina gore yapilandirilir."
      }
    ]
  };
}

projects.en.push(...engineeringCaseStudyTopics.map((topic) => buildEngineeringCaseStudy("en", topic)));
projects.tr.push(...engineeringCaseStudyTopics.map((topic) => buildEngineeringCaseStudy("tr", topic)));

export function getProjects(locale: Locale) {
  return projects[locale];
}

export function getProject(locale: Locale, slug: string) {
  return projects[locale].find((project) => project.slug === slug);
}
