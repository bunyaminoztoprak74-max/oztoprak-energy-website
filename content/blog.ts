import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/content/types";

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: [
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
