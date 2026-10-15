export type InvestmentSection = { heading: string; text: string; href?: string; linkLabel?: string; extraLinks?: { href: string; label: string }[] };
export type InvestmentPage = {
  slug: string; title: string; h1: string; description: string; intro: string;
  type?: "HES" | "GES" | "RES";
  kind?: "buyer" | "seller";
  service?: "diligence" | "valuation";
  ctaLabel?: string;
  navGroup?: "investor" | "owner";
  navLabel?: string;
  /** Overrides the hero secondary CTA (label + target). */
  secondaryCta?: { label: string; href: string; kind?: "buyer" | "seller" | "valuation" | "diligence" };
  /** Overrides the hero primary CTA target (default comes from investment-cta.tsx). */
  ctaHref?: string;
  /** Page-level FAQ (rendered + FAQPage schema). The hub falls back to investmentFaqs. */
  faqs?: { question: string; answer: string }[];
  /** Blog slugs shown first in the "Enerji yatırım rehberleri" list. */
  relatedArticles?: string[];
  /** Optional "how it works" block rendered right after the hero. */
  process?: { heading: string; steps: { title: string; text: string; links?: { href: string; label: string }[] }[]; note?: string };
  sections: InvestmentSection[];
};

export const investmentFaqs = [
  { question: "Sitede neden santral ilanı göremiyorum?", answer: "Öztoprak Enerji bir ilan sitesi değildir; enerji santrali alım-satım süreçleri gizlilik esasına göre yürütülür ve kamuya açık olarak listelenmez. Yatırım kriterlerinizi paylaşabilir, kriterlerinize uygun ve paylaşılabilir bir süreç oluştuğunda kontrollü şekilde iletişime geçilmesini isteyebilirsiniz." },
  { question: "Santralimi gizli şekilde satabilir miyim?", answer: "Satış formunda gizli satış seçeneğini kullanabilirsiniz. Başvurunuz otomatik yayımlanmaz. Santral adı ve hassas bilgiler, paylaşım kapsamı sizinle netleştirildikten ve gizlilik sözleşmesi süreci tamamlandıktan sonra nitelikli yatırımcılarla paylaşılabilir." },
  { question: "Santralin değeri yalnızca MW üzerinden hesaplanır mı?", answer: "Hayır. Net üretim, gelir yapısı, işletme giderleri, bakım yatırımları, kalan işletme süresi ve borç durumu birlikte değerlendirilir. Kurulu güç ön elemede yararlıdır; tek başına satış fiyatını belirlemez." },
  { question: "Teknik inceleme için hangi kayıtlar gerekir?", answer: "İlk aşamada kapasite ve işletme durumu yeterlidir. Kapsam belirlendikten sonra mevcut üretim kayıtları, ekipman envanteri, bakım geçmişi, bağlantı ve kabul belgeleri istenir. Eksik kayıtlar raporda ayrıca belirtilir." },
  { question: "Talep oluşturmak satın alma taahhüdü müdür?", answer: "Hayır. Form bir ön görüşme talebidir. Kriter uygunluğu, inceleme kapsamı, hizmet bedeli ve işlem koşulları taraflarla ayrıca değerlendirilir; getiri veya satış garantisi verilmez." }
];

export const hubFaqs = [
  { question: "Satılık enerji santrali nasıl bulunur?", answer: "Enerji santrali alım-satımları sıklıkla kamuya açık ilan yerine gizlilik esasıyla yürütülür. Öztoprak Enerji’ye santral türü, kapasite aralığı, bütçe, bölge ve zamanlama kriterlerinizi iletebilirsiniz; uygun ve paylaşılabilir bir fırsat oluştuğunda kontrollü şekilde sizinle iletişime geçilir ve teknik ön inceleme planlanır." },
  { question: "Öztoprak Enerji ilan yayınlıyor mu?", answer: "Hayır. Bu sitede satılık santral ilan listesi yayınlamıyoruz. Bunun yerine yatırım kriterlerinize göre HES, GES ve RES fırsatlarını gizlilik esasıyla değerlendiriyor; uygun ve paylaşılabilir bir fırsat oluştuğunda teknik ve ekonomik ön incelemeyle destek veriyoruz." },
  { question: "Yatırım kriterlerimi nasıl iletebilirim?", answer: "Bu sayfadaki “Yatırım Kriterlerinizi İletin” düğmesiyle formu doldurabilir veya telefon ve WhatsApp üzerinden kısa bilgi verebilirsiniz. İlk aşamada santral türü, kapasite aralığı, bütçe, bölge ve zamanlama bilgisi yeterlidir; belge yüklemeniz gerekmez." },
  { question: "HES, GES ve RES için teknik inceleme yapılıyor mu?", answer: "Evet. Bağımsız teknik inceleme; üretim verisi, ekipman durumu, bakım geçmişi, bağlantı yapısı ve gerekli yatırım kalemlerini HES, GES ve RES için satın alma kararından önce değerlendirir ve riskleri raporlar. Gerektiğinde saha testleri uygun üçüncü taraf uzmanlarca yapılır; Öztoprak Enerji test kapsamını belirler, süreci gözlemler (witness) ve sonuçları yatırımcı açısından teknik olarak yorumlar." },
  { question: "Bir santrali satın almadan önce hangi analizler yapılmalı?", answer: "Net üretimin sayaç ve işletme kayıtlarıyla doğrulanması, ekipman durumu ve kalan ekonomik ömür, bakım ve yenileme CAPEX’i, gelir yapısı, OPEX, lisans ve bağlantı koşulları ile borç ve yükümlülükler birlikte değerlendirilmelidir. Bu analizler teknik due diligence ve teknik-ekonomik ön değerleme çalışmasında bir araya getirilir." }
];

export const investmentPages: InvestmentPage[] = [
  {
    slug: "satilik-enerji-santralleri",
    title: "Satılık HES, GES ve RES Projeleri | Öztoprak Enerji",
    h1: "Satılık Enerji Santralleri ve Yatırım Danışmanlığı",
    description: "Türkiye genelindeki satılık HES, GES ve RES projeleri için alıcı-satıcı eşleştirme, teknik inceleme ve santral değerleme desteği.",
    intro: "İlan listesi yayınlamak yerine yatırım kriterlerinize göre HES, GES ve RES fırsatlarını gizlilik esasıyla değerlendiriyoruz. Kapasite, bütçe, bölge ve zamanlama hedeflerinizi iletin; uygun ve paylaşılabilir bir fırsat oluştuğunda teknik ve ekonomik ön inceleme, ön değerleme ve satın alma öncesi teknik due diligence ile karar sürecinize destek veririz.",
    ctaLabel: "Yatırım Kriterlerinizi İletin",
    secondaryCta: { label: "Santralimi Satmak İstiyorum", href: "/tr/santralini-sat" },
    relatedArticles: ["enerji-santrali-satin-alma-sureci", "hes-satin-alirken-nelere-dikkat-edilmeli", "ges-satin-alirken-nelere-dikkat-edilmeli", "santral-teknik-due-diligence-nedir"],
    faqs: [...hubFaqs, ...investmentFaqs],
    process: {
      heading: "Nasıl Çalışıyoruz?",
      steps: [
        { title: "Yatırım kriterlerinin alınması", text: "Santral türünü, kapasite aralığını, bütçenizi, bölgenizi ve zamanlama hedefinizi iletirsiniz. İlk aşamada belge veya hassas bilgi gerekmez.", links: [{ href: "/tr/satilik-hes", label: "Satılık HES" }, { href: "/tr/satilik-ges", label: "Satılık GES" }, { href: "/tr/satilik-res", label: "Satılık RES" }] },
        { title: "Gizli ön eleme", text: "Kriterleriniz gizlilik esasıyla, yalnızca paylaşılabilir fırsatlar kapsamında ön elemeden geçirilir. Bilgileriniz kamuya açık biçimde yayınlanmaz." },
        { title: "Teknik ve ekonomik ön inceleme", text: "Uygun bir fırsat oluştuğunda üretim verisi, ekipman durumu, gelir yapısı ve gider kalemleri teknik ve ekonomik açıdan ön incelemeye alınır." },
        { title: "Satın alma öncesi due diligence ve ön değerleme", text: "Karar öncesinde teknik due diligence ve teknik-ekonomik ön değerleme ile riskler, bakım yatırımı ihtiyacı ve değer varsayımları görünür hale getirilir.", links: [{ href: "/tr/enerji-santrali-due-diligence", label: "Teknik Due Diligence" }, { href: "/tr/hes-degerleme", label: "HES Değerleme" }] }
      ],
      note: "Bu süreç belirli bir santralin satışta olduğu veya kriterlerinize uygun bir fırsatın bulunacağı anlamına gelmez; talep göndermek satın alma taahhüdü oluşturmaz. Santral sahibiyseniz gizli satış süreci için Santralini Sat sayfasını inceleyebilirsiniz."
    },
    sections: [
      { heading: "HES Yatırımları", text: "Hidroelektrik yatırımlarını kurulu gücün yanında hidrolik veri, gerçekleşen net üretim, türbin-jeneratör durumu ve işletme geçmişiyle değerlendirin.", href: "satilik-hes", linkLabel: "HES Alım-Satım Danışmanlığı" },
      { heading: "GES Yatırımları", text: "Lisanslı ve lisanssız güneş projelerinde üretim, panel ve inverter performansı, bağlantı yapısı ve arazi kullanımını birlikte inceleyin.", href: "satilik-ges", linkLabel: "GES Alım-Satım Danışmanlığı" },
      { heading: "RES Yatırımları", text: "Rüzgar santrallerinde üretim geçmişi, türbin durumu, bakım yükümlülükleri ve büyük ekipman risklerini teknik verilerle birlikte değerlendirin.", href: "satilik-res", linkLabel: "RES Alım-Satım Danışmanlığı" },
      { heading: "Teknik Due Diligence", text: "Saha bulguları ile veri odası kayıtlarını karşılaştırın. Üretim kaybı, ekipman riski ve gerekli CAPEX kalemlerini satın alma kararından önce belirleyin.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik inceleme kapsamı" },
      { heading: "Santral Değerleme", text: "Tek bir MW çarpanı yerine üretim, gelir, OPEX, yenileme ihtiyacı ve kalan işletme süresine dayalı senaryolar hazırlayın.", href: "hes-degerleme", linkLabel: "HES değerleme yaklaşımı" },
      { heading: "Yatırımcı Eşleştirme", text: "Santral türü, kapasite aralığı, bütçe, bölge ve zamanlama kriterleriyle talebinizi tanımlayın. Uygun ve paylaşılabilir bir fırsat oluştuğunda, kriterlerinizle uyumu kontrollü biçimde değerlendirilir ve sizinle iletişime geçilir.", href: "santral-satin-al", linkLabel: "Yatırımcı kriterlerinizi paylaşın" },
      { heading: "Gizli Satış Süreci", text: "Ön değerlendirme, anonim tanıtım, yatırımcı yeterliliğinin incelenmesi ve gizlilik sözleşmesi aşamalarını planlayın. Hassas verilerin paylaşımı satıcının belirlediği kapsamda yürütülür.", href: "santralini-sat", linkLabel: "Gizli satış talebi oluşturun" }
    ]
  },
  {
    slug: "satilik-hes", type: "HES", ctaLabel: "HES Kriterlerinizi İletin",
    secondaryCta: { label: "HES Satışı İçin Gizli Görüşme", href: "/tr/santralini-sat?type=HES#yatirim-formu", kind: "seller" },
    relatedArticles: ["hes-satin-alirken-nelere-dikkat-edilmeli", "hes-degeri-nasil-hesaplanir", "hes-satis-sureci-nasil-yonetilir"],
    faqs: [
      { question: "Satılık HES nasıl bulunur?", answer: "Satılık HES fırsatları sıklıkla kamuya açık ilan yerine gizlilik esasıyla yürütülür. Kapasite, bütçe, bölge ve zamanlama kriterlerinizi iletebilirsiniz; uygun ve paylaşılabilir bir fırsat oluştuğunda kontrollü şekilde sizinle iletişime geçilir." },
      { question: "HES satın almadan önce hangi teknik inceleme yapılır?", answer: "Bağımsız teknik inceleme; hidrolik ve üretim verisini, türbin-jeneratör, cebri boru ve su yapılarını, koruma sistemlerini, bakım geçmişini, bağlantı yapısını ve gerekli yenileme yatırımlarını satın alma kararından önce değerlendirir. Gerektiğinde saha testleri uygun üçüncü taraf uzmanlarca yapılır." },
      { question: "HES değerlemesinde hangi veriler önemlidir?", answer: "Doğrulanmış yıllık net üretim, debi ve düşü verileri, gelir yapısı, işletme giderleri, bakım ve yenileme yatırımları, kalan lisans süresi ile borç ve yükümlülükler önemlidir. Kurulu güç tek başına santral değerini belirlemez." },
      { question: "Talep göndermek satın alma taahhüdü müdür?", answer: "Hayır. Form bir ön görüşme talebidir; satın alma taahhüdü oluşturmaz ve belirli bir HES’in satışta olduğu anlamına gelmez. Kapsam, hizmet bedeli ve işlem koşulları taraflarla ayrıca değerlendirilir; getiri veya satış garantisi verilmez." }
    ],
    title: "HES Alım Satım Danışmanlığı | Satılık HES Yatırım Fırsatları | Öztoprak Enerji",
    h1: "HES Alım Satım Danışmanlığı – Satılık HES Yatırım Fırsatları",
    description: "HES alım satım danışmanlığı: satılık HES arayan yatırımcılar için kriter tanımlama, teknik/finansal inceleme, HES değerleme ve gizli yatırım süreci yönetimi.",
    intro: "Satılık HES arayan yatırımcılar için Öztoprak Enerji; yatırım kriterlerinin belirlenmesi, teknik ve finansal inceleme, HES değerleme ve gizli yatırım süreçlerinin yönetilmesi konularında danışmanlık sağlar. Hidroelektrik santrali satın alma veya HES satışı kararınızı kapasite, bölge, bütçe ve üretim hedefleriyle tanımlayın; ön elemeden saha incelemesine uzanan bir değerlendirme süreci sunuyoruz.",
    sections: [
      { heading: "HES alım satım danışmanlığı kapsamımız", text: "HES satın alma veya HES satışı sürecinde yatırım kriterlerinin tanımlanması, aday projelerin ön elemesi, teknik/finansal incelemenin planlanması ve gizlilik sözleşmesi kapsamında tarafların bir araya getirilmesini yönetiriz. Bu sayfada ilan listesi yayınlamıyoruz; HES arayışınız kriterlerinize göre, gizlilik esasıyla ve uygun bir fırsat oluştuğunda yönetilir." },
      { heading: "HES yatırım fırsatlarını nasıl değerlendiriyoruz?", text: "Kurulu güç tek başına üretim potansiyelini açıklamaz. Debi kayıtları, net düşü, kullanılabilir su, mevsimsellik, duruş süreleri ve ölçülen net üretim aynı dönemler üzerinden karşılaştırılır. Eksik veri varsa varsayım olarak işaretlenir; doğrulanmış üretim gibi sunulmaz." },
      { heading: "HES teknik inceleme ve due diligence", text: "Hidroelektrik santrali satın almak öncesinde türbin, jeneratör, cebri boru, su alma yapısı ve koruma sistemlerinin durumu incelenir. Bakım geçmişi, titreşim kayıtları ve işletme olayları, sahada gözlenen durum ile birlikte yorumlanır.", href: "enerji-santrali-due-diligence", linkLabel: "HES due diligence kapsamı" },
      { heading: "HES değerleme ve satın alma kriterleri", text: "Üretimin nakit akışına dönüşmesi; satış yapısı, işletme giderleri, bakım yatırımları ve borç yüküne bağlıdır. Satılık HES ararken kapasite ve bütçenin yanında veri beklentinizi de belirleyin.", href: "hes-degerleme", linkLabel: "HES değerleme parametreleri" },
      { heading: "Satılık HES ararken kriter listesi", text: "Satılık HES arayışınızı netleştirirken şu başlıkları kriter listenize ekleyin: doğrulanmış net üretim, debi ve hidroloji verileri, düşü, kalan lisans süresi, türbin-jeneratör ve yardımcı ekipman durumu, bağlantı yapısı, bakım ve yenileme ihtiyacı, borç ve yükümlülükler. Eksik veri olduğunda bu alanlar varsayım olarak işaretlenir.", href: "blog/hes-satin-alirken-nelere-dikkat-edilmeli", linkLabel: "HES satın alırken nelere dikkat edilmeli?" },
      { heading: "HES yatırım danışmanlığı ve gizli süreç yönetimi", text: "Görüşmeler, veri paylaşımı ve teklif süreci; satıcı ve alıcı tarafların belirlediği gizlilik kapsamında ilerler. HES yatırım danışmanlığı talebinizi iletmeniz, belirli bir projenin satışta olduğu anlamına gelmez; kriterleriniz uygun bir fırsatla eşleştiğinde sizinle iletişime geçilir.", href: "santralini-sat", linkLabel: "HES satışı için gizli süreç" }
    ]
  },
  {
    slug: "satilik-ges", type: "GES", ctaLabel: "Yatırım Kriterlerinizi Bildirin",
    title: "Satılık GES | Güneş Enerji Santrali Yatırım Fırsatları | Öztoprak Enerji",
    h1: "Satılık GES – Güneş Enerji Santrali Yatırım Fırsatları",
    description: "Satılık GES ve güneş enerji santrali arayan yatırımcılar için lisanslı ve lisanssız proje değerlendirme, üretim analizi, GES değerleme ve due diligence.",
    intro: "Satılık güneş enerji santrali arayışınızda teknik performans ile gelir yapısını birlikte değerlendirin. GES satın almak isteyen yatırımcılar için lisanslı GES ve lisanssız GES kriterlerine göre talep topluyoruz.",
    sections: [
      { heading: "Lisanslı ve lisanssız GES", text: "Her proje için bağlantı hakkı, kurulu DC/AC güç, tüketimle ilişki ve gelir yapısı ayrı kaydedilir. İşletme veya devir koşulları yalnızca proje dosyası ve güncel uzman incelemesiyle doğrulanır; tüm projelere aynı ticari model uygulanmaz." },
      { heading: "GES yatırım fırsatlarında üretim kalitesi", text: "Sayaç verisi, inverter kayıtları ve ışınım ölçümleri aynı zaman aralığına getirilir. PR, emre amadelik, kirlenme, gölgelenme ve kesinti etkileri ayrılarak gerçekleşen üretim ile model arasındaki fark açıklanır." },
      { heading: "GES değerleme ve due diligence", text: "Panel degradasyonu, inverter yenilemesi, arazi veya çatı kullanım süresi ve OPEX nakit akışı modeline taşınır. Beklenen üretimin hangi teknik varsayımlara dayandığını görün.", href: "ges-degerleme", linkLabel: "GES değerleme yaklaşımı" },
      { heading: "Satın almadan önce saha doğrulaması", text: "Elektriksel güvenlik, ekipman envanteri, garanti kapsamı ve bakım geçmişi teknik incelemeye alınır. Gerekli saha testlerinin kapsamı erişim koşulları ve tespit edilen risklere göre belirlenir. Testler uygun üçüncü taraf uzmanlarca gerçekleştirilir; Öztoprak Enerji süreci yatırımcı adına gözlemler ve sonuçları teknik açıdan değerlendirir.", href: "enerji-santrali-due-diligence", linkLabel: "GES due diligence talebi" }
    ]
  },
  {
    slug: "satilik-res", type: "RES", ctaLabel: "Yatırım Kriterlerinizi Bildirin",
    title: "Satılık RES | Rüzgar Enerji Santrali Fırsatları | Öztoprak Enerji",
    h1: "Satılık RES – Rüzgar Enerji Santrali Fırsatları",
    description: "Satılık RES arayan kurumlar için rüzgar enerji santrallerinde üretim, bakım yükümlülükleri ve teknik inceleme desteği.",
    intro: "Rüzgar enerji santrali alım-satımında üretim geçmişi, türbin teknolojisi, bakım sözleşmeleri ve teknik riskleri işlem öncesinde görünür hale getirin.",
    sections: [
      { heading: "Üretim ve türbin geçmişi", text: "SCADA, sayaç ve bakım kayıtları karşılaştırılır. Türbin bazında duruşlar, şebeke kısıntıları ve planlı bakım etkileri birbirinden ayrılır." },
      { heading: "Bakım yükümlülükleri", text: "Bakım sözleşmeleri, garanti istisnaları, büyük ekipman yenilemeleri ve parça temini teknik değerlendirmeye dahil edilir." },
      { heading: "Satın alma öncesi teknik inceleme", text: "Saha incelemesi ve işletme kayıtları birlikte ele alınır; bulgular etki, öncelik ve önerilen aksiyonlarla raporlanır.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik inceleme kapsamı" }
    ]
  },
  {
    slug: "santral-satin-al", kind: "buyer",
    title: "Santral Satın Al | Enerji Yatırımcı Talebi | Öztoprak Enerji",
    h1: "Enerji Santrali Satın Almak İstiyorum",
    description: "Enerji santrali satın almak mı istiyorsunuz? HES, GES ve RES yatırım kriterlerinizi (kapasite, bütçe, bölge, zamanlama) paylaşın; uygun ve paylaşılabilir bir süreç oluştuğunda iletişime geçelim.",
    intro: "Kapasite, bütçe ve üretim beklentinizi paylaşın. Uygun fırsat oluştuğunda teknik ön değerlendirme ve alıcı-satıcı eşleştirme için sizinle iletişime geçelim.",
    sections: [
      { heading: "Talebinizden sonra ne olur?", text: "Ekibimiz kriterlerinizi netleştirir. Enerji yatırım fırsatları gizlilik esasına göre yönetilir ve kamuya açık olarak listelenmez; kriterlerinize uygun ve paylaşılabilir bir yatırım süreci oluştuğunda kontrollü şekilde iletişime geçilir. Bu form bir satın alma taahhüdü değildir." },
      { heading: "Teknik incelemeyi erken planlayın", text: "Üretim verisi, ekipman durumu ve bakım ihtiyacının ön incelemesi, yatırım kriterlerinizi daha gerçekçi hale getirir.", href: "enerji-santrali-due-diligence", linkLabel: "Satın alma öncesi teknik due diligence" }
    ]
  },
  {
    slug: "santralini-sat", kind: "seller",
    ctaLabel: "Santraliniz İçin Gizli Satış Görüşmesi Talep Edin",
    // Generic, intent-safe secondary target (page covers HES, GES and RES owners).
    secondaryCta: { label: "Önce Kısa Bilgi Almak İstiyorum", href: "/tr/iletisim", kind: "seller" },
    relatedArticles: ["hes-satis-sureci-nasil-yonetilir", "enerji-santrali-satarken-nelere-dikkat-edilmeli"],
    title: "Santralini Sat | Gizli HES, GES, RES Satışı | Öztoprak Enerji",
    h1: "Enerji Santrali Satış Danışmanlığı: Gizli ve Kontrollü Satış Süreci",
    description: "HES, GES veya RES sahipleri için satış öncesi hazırlık, teknik-ekonomik ön değerlendirme ve nitelikli yatırımcılarla gizli, kontrollü iletişim danışmanlığı.",
    intro: "Öztoprak Enerji; HES, GES ve RES sahiplerine satış öncesi teknik hazırlık, teknik-ekonomik ön değerlendirme, veri odası hazırlığı, gizlilik esaslı süreç yönetimi ve nitelikli yatırımcılarla kontrollü iletişim konularında danışmanlık sağlar. Başvurunuz kamuya açık bir ilan anlamına gelmez; satış sonucu, satış fiyatı veya satış süresi garantisi verilmez.",
    process: {
      heading: "Satış süreci nasıl işler?",
      steps: [
        { title: "Gizli ön görüşme", text: "Satış beklentiniz, santralin durumu ve paylaşım sınırları sizinle gizlilik esasıyla netleştirilir. Bu görüşme bir satış taahhüdü oluşturmaz." },
        { title: "Teknik-ekonomik ön değerlendirme ve veri hazırlığı", text: "Üretim, gelir, gider ve bakım verileri ön değerlendirmeye alınır; veri odası ve eksik belgeler hazırlanır." },
        { title: "Anonim yatırım özeti / kontrollü tanıtım", text: "Sürecin niteliğine göre ve gerektiğinde, santralin kimliğini açığa çıkarmayan bir özet hazırlanır. Paylaşım kapsamını siz belirlersiniz." },
        { title: "Nitelikli yatırımcı ve gizlilik süreci", text: "Uygun görülen yatırımcıların yeterliliği incelenir; ayrıntılı bilgi paylaşımından önce gizlilik sözleşmesi süreci tamamlanır." },
        { title: "Kontrollü veri paylaşımı ve teknik inceleme", text: "Ayrıntılı veriler kontrollü erişimle paylaşılır; yatırımcının teknik incelemesi veri odası üzerinden yürütülür.", links: [{ href: "/tr/enerji-santrali-due-diligence", label: "Teknik Due Diligence" }] }
      ],
      note: "Adımlar santralin ve sürecin niteliğine göre değişebilir. Satış sonucu, fiyat veya süre garantisi verilmez; başvurunuz ilan olarak yayımlanmaz."
    },
    sections: [
      { heading: "Ön değerlendirme ve gizlilik", text: "Başvurunuz doğrudan halka açık bir ilana dönüşmez. Satış beklentisi, teknik veri kapsamı ve paylaşım sınırları sizinle netleştirilir. Gizli satış tercihi başlangıçta seçilidir; şirket ve hassas proje belgeleri ilk görüşmeden sonra kontrollü kanalla istenir." },
      { heading: "Satış öncesi teknik hazırlık", text: "Üretim geçmişi, ekipman listesi, bakım kayıtları ve mevcut finansman yükümlülükleri düzenli bir veri odasında toplanır. Eksik belgeler ve giderilebilir teknik riskler görüşmelere başlamadan önce belirlenir. Hazırlık; yıllık üretim kayıtlarını, bakım geçmişini ve ekipman durumunu, lisans ve bağlantı belgelerini ve yatırımcı incelemesinde sorulması muhtemel konuları kapsar. Bu hazırlık yatırımcının kendi incelemesini ortadan kaldırmaz; sorulara kanıtla yanıt verebilmenizi sağlar. Gerektiğinde saha testleri uygun üçüncü taraf uzmanlarca yapılır; Öztoprak Enerji test kapsamını belirler, süreci gözlemler ve sonuçları teknik olarak yorumlar.", href: "enerji-santrali-due-diligence", linkLabel: "Satış öncesi teknik durum değerlendirmesi (Technical Due Diligence)" },
      { heading: "Satış beklentisini ve yatırım değerini etkileyen faktörler", text: "Satış beklentisi tek bir rakama değil, birçok teknik ve ekonomik faktöre bağlıdır: doğrulanmış net üretim, gelir modeli, OPEX, bakım ve yenileme CAPEX’i, ekipman durumu, kalan lisans süresi, bağlantı yapısı, borç ve yükümlülükler ile gelecekte gerekebilecek yatırımlar. Bu faktörlerin açık ve belgeli olması yatırımcı değerlendirmesini kolaylaştırır. Öztoprak Enerji satış fiyatını belirlemez; teknik-ekonomik ön değerlendirme ile beklentinizi bu faktörler üzerinden değerlendirmenize yardımcı olur.", extraLinks: [{ href: "hes-degerleme", label: "HES değerleme" }, { href: "ges-degerleme", label: "GES değerleme" }] },
      { heading: "Kimler başvurabilir?", text: "HES, GES ve RES sahipleri, şirket yöneticileri, ortaklar ve hissedarlar ile lisanslı bir enerji projesinin devrini değerlendiren yatırımcılar başvurabilir. Başvuru bir ilan veya satış taahhüdü değildir.", href: "lisansli-enerji-projesi-devir-danismanligi", linkLabel: "Lisanslı enerji projesi devir danışmanlığı" }
    ]
  },
  {
    slug: "enerji-santrali-due-diligence", service: "diligence",
    ctaLabel: "Satın Alma Öncesi Teknik İnceleme Talep Edin",
    // No dedicated technical-review lead form yet: generic consultation page (planned for a later slice).
    ctaHref: "/tr/iletisim",
    secondaryCta: { label: "Teknik Due Diligence Nedir? Rehberi Okuyun", href: "/tr/blog/santral-teknik-due-diligence-nedir", kind: "diligence" },
    relatedArticles: ["santral-teknik-due-diligence-nedir", "hes-satin-alirken-nelere-dikkat-edilmeli", "ges-satin-alirken-nelere-dikkat-edilmeli", "enerji-santrali-satin-alma-sureci"],
    title: "Teknik Due Diligence | HES, GES, RES Satın Alma Öncesi | Öztoprak Enerji",
    h1: "Enerji Santrali Teknik Due Diligence: Satın Alma Öncesi Bağımsız İnceleme",
    description: "Satın alma öncesi enerji santrali teknik incelemesi: üretim analizi, ekipman durumu, bakım/yenileme CAPEX’i, şebeke bağlantısı ve teknik risk matrisi.",
    intro: "Satın almayı düşündüğünüz enerji santralinde hangi teknik riskleri devralıyorsunuz? Öztoprak Enerji; HES, GES ve RES yatırımları için satın alma öncesi, yatırımcı tarafında çalışan bağımsız teknik inceleme sağlar. Amaç ekipman veya proje satmak değil, satın alma kararınızı doğrulanabilir saha ve işletme verisine dayandırmaktır. Teknik inceleme; varlığın mevcut durumunu, performans belirsizliğini ve gelecekteki yatırım ihtiyacını görünür kılar.",
    process: {
      heading: "Süreç ve gerekli veriler",
      steps: [
        { title: "İlk görüşme ve yatırımın tanımlanması", text: "Santral türü, kurulu güç, işlem yapısı (varlık veya hisse) ve karar sorunuz netleştirilir." },
        { title: "İnceleme kapsamının belirlenmesi", text: "Kapsam; satın alma, finansman veya ortaklık gibi karar sorusuna ve erişilebilir bilgiye göre belirlenir." },
        { title: "Veri odası / belge talebi", text: "Üretim ve sayaç kayıtları, ekipman envanteri, bakım geçmişi, bağlantı ve kabul belgeleri talep edilir." },
        { title: "Teknik veri analizi", text: "Üretim, kullanılabilirlik, ekipman ve bakım verileri analiz edilir; eksik ve tutarsız veriler işaretlenir." },
        { title: "Saha ziyareti", text: "Tesisin mevcut durumu sahada gözlenir; bulgular belgelerle karşılaştırılır." },
        { title: "Gerekiyorsa üçüncü taraf test kapsamının belirlenmesi", text: "Gerekli görülen testlerin kapsamı Öztoprak Enerji tarafından belirlenir; testler uygun üçüncü taraf uzmanlarca yapılır." },
        { title: "Risk ve CAPEX değerlendirmesi", text: "Bulgular risk matrisine ve bakım/yenileme CAPEX çerçevesine dönüştürülür." },
        { title: "Teknik rapor / yatırımcı değerlendirmesi", text: "Sonuçlar yönetici özeti ve teknik rapor olarak sunulur; bulgular sizinle birlikte gözden geçirilir." }
      ],
      note: "Başlangıç için santral türü, kurulu güç ve işlem yapısı yeterlidir; diğer belgeler kapsam belirlendikten sonra istenir. Süre ve hizmet bedeli santrale ve kapsama göre belirlenir; sabit süre veya fiyat vaadi verilmez."
    },
    faqs: [
      { question: "Teknik Due Diligence neleri kapsar?", answer: "Üretim ve işletme verisinin analizi, ana ekipmanın durumu ve kalan ekonomik ömrü, bakım ve yenileme CAPEX ihtiyaçları, şebeke bağlantısı ile lisans ve izinlerin teknik kontrolü ve bulguların risk matrisiyle raporlanmasını kapsar. Kapsam, karar sorusuna ve santrale göre belirlenir." },
      { question: "Hangi enerji santralleri için yapılabilir?", answer: "İşletmedeki HES, GES ve RES yatırımları için yapılabilir. İnşaat veya proje aşamasındaki varlıklarda kapsam ve incelenen belgeler farklılaşır; bu nedenle kapsam ilk görüşmede netleştirilir." },
      { question: "Saha testlerini kim gerçekleştirir?", answer: "Gerekli saha testleri uygun üçüncü taraf uzmanlarca yapılır. Öztoprak Enerji test kapsamını belirler, süreci gözlemler (witness) ve sonuçları yatırımcı açısından teknik olarak yorumlar." },
      { question: "Satın alma öncesinde hangi belgeler incelenir?", answer: "Üretim ve sayaç kayıtları, SCADA ve işletme verileri, ekipman envanteri, bakım kayıtları, tek hat şemaları, bağlantı ve kabul belgeleri ile lisans ve izinlerin teknik yönleri incelenir. Eksik kayıtlar raporda ayrıca belirtilir." },
      { question: "Bakım ve yenileme CAPEX’i nasıl değerlendirilir?", answer: "Yenileme ihtiyacı; acil güvenlik işleri, üretimi koruyan bakım ve performansı artırabilecek yatırımlar olarak ayrılır. Her kalem için kapsam, fiyat tarihi, belirsizlik aralığı ve duruş gereksinimi kaydedilir; teklif alınmamış kalemler kesin bedel olarak sunulmaz." },
      { question: "Hukuki ve mali inceleme dahil midir?", answer: "Hayır. Teknik due diligence bir teknik incelemedir. Hukuki, vergisel ve finansal incelemeler ilgili uzmanlık disiplinleri tarafından ayrıca yürütülür; teknik bulgular gerektiğinde bu çalışmalarla koordineli değerlendirilir." }
    ],
    sections: [
      { heading: "Satın almadan önce hangi teknik riskleri devralıyorsunuz?", text: "Bir santrali satın almak yalnızca bir üretim tesisini değil; ekipmanın kalan ömrünü, ertelenmiş bakımı, üretim belirsizliğini ve bağlantı koşullarını da devralmak demektir. Teknik inceleme bu riskleri karardan önce görünür kılar: HES’te hidrolik veri, türbin-jeneratör ve su yapıları; GES’te panel, inverter ve performans oranı; RES’te türbin durumu ve bakım yükümlülükleri öne çıkar. İnceleme yatırımcı adına yapılır ve satıcı, EPC veya ekipman tedarikçisi tarafından yönlendirilmez.", extraLinks: [{ href: "satilik-hes", label: "Satılık HES" }, { href: "satilik-enerji-santralleri", label: "Satılık Enerji Santralleri" }] },
      { heading: "Teknik durum ve üretim analizi", text: "Son 3–5 yıllık sayaç, SCADA ve işletme kayıtları veri sürekliliği açısından kontrol edilir. Availability (emre amadelik), capacity factor (kapasite faktörü) ve verimlilik; veri kapsamı, ölçüm sınırı ve duruş sınıfları açıklanarak hesaplanır. Kaynak değişimi ile ekipman kaynaklı performans kaybı ayrılır." },
      { heading: "Ana ekipman ve kalan ekonomik ömür", text: "Türbin, jeneratör, panel, inverter, trafo, koruma ve yardımcı sistemler envanterle eşleştirilir. Ekipman yaşı tek başına kalan ekonomik ömrü belirlemez; işletme yükü, bakım geçmişi, arıza tekrarları ve parça temini birlikte incelenir." },
      { heading: "Rehabilitasyon ve CAPEX tahmini", text: "Yenileme / rehabilitasyon ihtiyacı; acil güvenlik işleri, üretimi koruyan bakım ve performansı artırabilecek yatırımlar olarak ayrılır. CAPEX tahmini için kapsam, fiyat tarihi, belirsizlik aralığı ve duruş gereksinimi kaydedilir; teklif alınmamış kalemler kesin bedel olarak gösterilmez. Teknik girdiler, değer analizinde kullanılmak üzere değerleme çalışmasına aktarılabilir.", extraLinks: [{ href: "hes-degerleme", label: "HES değerleme" }, { href: "ges-degerleme", label: "GES değerleme" }] },
      { heading: "Şebeke bağlantısı, lisans ve izinler", text: "Bağlantı kapasitesi, tek hat şemaları, koruma koordinasyonu ve kabul testlerinin teknik tutarlılığı incelenir. Lisans ve izinlerin teknik kontrolü; işletmenin belgelenen sınırlarla uyumuna odaklanır. Hukuki ve mali inceleme kapsamları ilgili uzmanlarla ayrıca koordine edilir." },
      { heading: "Risk matrisi ve teknik yatırım raporu", text: "Her bulgu kanıt, olasılık, etki, önerilen aksiyon, sorumlu ve zamanlama ile raporlanır. Açık veri talepleri ayrı tutulur. Rapor; yönetici özeti, teknik bulgular, kritik riskler, üretim ve veri değerlendirmesi, ekipman durumu, bakım/yenileme CAPEX ihtiyaçları, şebeke ve bağlantı riskleri, açık veri ve doğrulanamayan hususlar, risk matrisi ve kapanış öncesi dikkate alınması gereken teknik konuları içerir. Nihai teknik yatırım raporu, kapanış öncesi koşulları ve satın alma sonrasındaki ilk bakım önceliklerini destekler.", href: "santral-satin-al", linkLabel: "Teknik inceleme gereksiniminizi paylaşın" },
      { heading: "Kapsamı nasıl belirliyoruz?", text: "Teknik durum tespiti satın alma, finansman veya ortaklık gibi karar sorusuna göre kapsamlandırılır. Kapsam; tesis sınırı, erişilebilir belgeler, saha ziyareti ve gerekli görülen saha testlerinin kapsamıyla tanımlanır. Raporda neyin sahada görüldüğü, neyin belgelerden okunduğu ve neyin doğrulanamadığı ayrı belirtilir.", href: "blog/santral-teknik-due-diligence-nedir", linkLabel: "Teknik due diligence nedir? Kapsam ve süreç rehberi", extraLinks: [{ href: "services/teknik-durum-tespiti", label: "İşletmedeki santral için teknik durum tespiti" }, { href: "services/bagimsiz-muhendis", label: "Finansman için bağımsız mühendis" }] },
      { heading: "Saha testleri nasıl ele alınır?", text: "Gerekli saha testleri uygun üçüncü taraf uzmanlarca yapılır. Öztoprak Enerji test kapsamını belirler, süreci gözlemler (witness) ve sonuçları yatırımcı açısından teknik olarak yorumlar. Test ve ölçüm sonuçları raporda üçüncü taraf ölçümü olarak ayrıştırılır; ölçümün kim tarafından, hangi kapsamda ve hangi koşullarda yapıldığı belirtilir." },
      { heading: "Teknik inceleme, hukuki ve mali inceleme değildir", text: "Hukuki, vergisel ve finansal incelemeler ilgili uzmanlık disiplinleri tarafından ayrıca yürütülür; teknik bulgular gerektiğinde bu çalışmalarla koordineli değerlendirilir." }
    ]
  },
  {
    slug: "hes-degerleme", service: "valuation",
    ctaLabel: "HES’iniz İçin Ön Değerleme Talep Edin",
    // No in-page form yet; valuation is requested by buyers, sellers, partners and lenders -> generic consultation form.
    ctaHref: "/tr/iletisim",
    secondaryCta: { label: "HES Değeri Nasıl Hesaplanır? Rehberi Okuyun", href: "/tr/blog/hes-degeri-nasil-hesaplanir", kind: "valuation" },
    relatedArticles: ["hes-degeri-nasil-hesaplanir", "hes-satin-alirken-nelere-dikkat-edilmeli", "hes-satis-sureci-nasil-yonetilir"],
    title: "HES Değerleme | Hidroelektrik Santral Değeri | Öztoprak Enerji",
    h1: "HES Değerleme: Hidroelektrik Santral Değerinin Teknik-Ekonomik Analizi",
    description: "HES değerleme: net üretim, hidrolik veri, gelir yapısı, OPEX ve bakım CAPEX’i ile santral değeri. Alım/satış öncesi teknik-ekonomik ön değerleme talep edin.",
    intro: "HES satış fiyatı yalnızca MW üzerinden belirlenemez. Aynı kurulu güçteki iki santral; su rejimi, üretim, ekipman durumu ve işletme maliyetleri nedeniyle farklı ekonomik sonuçlar üretir. Öztoprak Enerji; alım, satış, finansman veya ortaklık kararı öncesinde santralin teknik-ekonomik ön değerlemesini ve yatırım değeri analizini hazırlar. Bu çalışma teknik ve ekonomik yatırım değerlendirmesi niteliğindedir; mevzuat kapsamında yetkilendirilmiş değerleme kuruluşlarınca düzenlenen resmi değerleme raporu niteliğinde değildir.",
    sections: [
      { heading: "Hangi durumlarda HES değerleme gerekir?", text: "HES değerleme; satın alma teklifi hazırlarken, satış fiyatı beklentisini kanıtlarla desteklemek isterken, ortaklık veya hisse devri görüşmelerinde ve finansman ya da yeniden yapılandırma öncesinde gündeme gelir. Alıcı, satıcı, ortak ve finansman tarafı aynı santral için farklı sorular sorar; çalışmanın kapsamı bu karar sorusuna göre belirlenir." },
      { heading: "Yıllık net üretim ve hidrolik veriler", text: "Debi, düşü, kullanılabilir su ve kapasite faktörü uzun dönem beklentisini belirler. Sayaçtan doğrulanmış yıllık net üretim, kuru ve yağışlı dönemlerle birlikte incelenir. Ölçülmüş değer ile model çıktısı ayrı gösterilir." },
      { heading: "Elektrik satış gelirleri: YEKDEM / PTF", text: "Gelir modeli santralin belgelenmiş satış yapısına dayanır. YEKDEM kapsamı ve kalan süre, piyasa satışı veya sözleşme koşulları dosya üzerinden kontrol edilir. Tek bir günün PTF değeri uzun vadeli satış fiyatı varsayımına dönüştürülmez." },
      { heading: "OPEX, bakım CAPEX’i ve ekipman yaşı", text: "Personel, bakım, sigorta ve diğer işletme giderleri üretimle birlikte okunur. Türbin-jeneratör yenilemesi, su yapıları bakımı ve büyük duruşlar nakit akışında ayrı tarihlendirilir. Ekipman yaşının etkisi saha bulgularıyla doğrulanır." },
      { heading: "Lisans süresi, borç ve işletme performansı", text: "Kalan lisans süresi model ufkunu etkiler. Santral işletme değeri ile borç, nakit ve işlem kapsamından etkilenen özsermaye değeri birbirinden ayrılır. Borcun iki kez düşülmesini önlemek için hesaplama yöntemi açıkça tanımlanır." },
      { heading: "Gelecek nakit akışı ve duyarlılık", text: "Üretim, fiyat, gider ve bakım senaryolarından gelecek nakit akışı oluşturulur. İskonto oranı ve model varsayımları raporda açıklanır. Tek fiyat yerine hangi belirsizliğin hidroelektrik yatırım değerini ne yönde etkilediği gösterilir.", href: "enerji-santrali-due-diligence", linkLabel: "Değerlemenin teknik girdilerini doğrulayın" },
      { heading: "Teknik-ekonomik ön değerlemede ne teslim edilir?", text: "Çalışma sonunda kullanılan veri ve varsayımların listesi; ölçülmüş ve modellenmiş üretimin ayrı gösterildiği net üretim değerlendirmesi; gelir, OPEX ve bakım CAPEX takvimi; borç ve lisans süresinin etkisi; temel, düşük ve yüksek senaryolara dayalı nakit akışı ile duyarlılık analizi; eksik veri ve doğrulanması gereken konuların listesi sunulur. Çıktı, yatırım kararını destekleyen bir değer aralığı ve gerekçesidir; tek bir kesin fiyat ya da satış garantisi değildir." },
      { heading: "Süreç ve gerekli veriler", text: "Süreç; karar sorusunun ve kapsamın netleştirilmesi, veri talebi, teknik ve ekonomik analiz, varsayımların sizinle gözden geçirilmesi ve çıktıların sunulmasıyla ilerler. Başlangıç için kurulu güç ve lisans bilgisi yeterlidir; sonrasında yıllık sayaç üretim kayıtları, satış yapısı ve YEKDEM durumu, işletme gideri ve bakım geçmişi, ekipman bilgileri ile borç ve yükümlülük özeti istenir. Kapsam ve hizmet bedeli talebinize göre belirlenir.", href: "blog/hes-degeri-nasil-hesaplanir", linkLabel: "HES değeri nasıl hesaplanır? Hesaplama mantığı rehberi" }
    ]
  },
  {
    slug: "ges-degerleme", service: "valuation",
    title: "GES Değerleme | Güneş Enerji Santrali Değeri | Öztoprak Enerji",
    h1: "GES Değerleme ve Güneş Enerji Santrali Değeri",
    description: "GES değerlemede yıllık üretim, panel degradasyonu, inverter, PR, arazi, lisans, OPEX ve nakit akışı parametrelerini birlikte değerlendirin.",
    intro: "GES değeri kurulu güçten ibaret değildir. Gerçekleşen üretim, gelir yapısı, kullanım hakları ve kalan proje ömrünü aynı nakit akışı modelinde değerlendirin.",
    sections: [
      { heading: "Üretim, PR ve ışınım", text: "Yıllık üretim, irradiation (ışınım) ve PR (performans oranı) aynı ölçüm dönemi ve sistem sınırına göre karşılaştırılır. Eksik sensör verileri, kısıntı, arıza ve kirlenme etkileri ayrılır. Tek bir güneşli yıl kalıcı üretim seviyesinin kanıtı değildir." },
      { heading: "Panel degradasyonu ve inverter durumu", text: "Degradasyon varsayımı üretici garantileri ve mümkün olduğunda saha ölçümleriyle karşılaştırılır. İnverter durumu, arıza geçmişi, yedek parça ve yenileme ihtiyacı kalan proje ömründeki nakit akışına dahil edilir." },
      { heading: "Lisans / mahsuplaşma ve bağlantı hakkı", text: "Satış veya mahsuplaşma yapısının projeye uygulanabilirliği belgeler üzerinden incelenir. Bağlantı hakkı, kapasite tanımları ve tüketim ilişkisi doğrulanmadan gelirlerin başka bir yatırımcıya aynen taşınacağı varsayılmaz." },
      { heading: "Kira, arazi ve OPEX", text: "Arazi mülkiyeti, kira veya çatı kullanım süresi; finansal modelin çalışma ufkuyla eşleştirilir. Kira artışları, bakım, temizlik, güvenlik ve sigorta giderleri ile büyük yenileme kalemleri ayrı değerlendirilir." },
      { heading: "Borç, kalan proje ömrü ve nakit akışı", text: "Proje değerinden özsermaye değerine geçerken borç ve nakit tutarları işlem kapsamına göre ele alınır. Üretim, fiyat, degradasyon ve inverter CAPEX senaryoları modelin hangi varsayıma duyarlı olduğunu gösterir.", href: "enerji-santrali-due-diligence", linkLabel: "GES teknik due diligence kapsamı" }
    ]
  },
  {
    slug: "yekdem-sonrasi-enerji-santrali-yatirimlari",
    kind: "buyer",
    ctaLabel: "Yatırım Kriterlerinizi Bildirin",
    navGroup: "investor",
    navLabel: "YEKDEM Sonrası Yatırımlar",
    title: "YEKDEM Sonrası Enerji Santrali Yatırımları | Öztoprak Enerji",
    h1: "YEKDEM Sonrası Enerji Santrali Yatırımları",
    description: "YEKDEM süresi dolan HES ve GES santrallerine yatırım analizi: piyasa satış geliri, üretim tahmini, OPEX/CAPEX, lisans süresi ve değerleme yaklaşımı.",
    intro: "YEKDEM desteği sona eren veya kısa süre içinde sona erecek HES ve GES santralleri, farklı bir gelir ve risk profiline geçer. Bu sayfa belirli bir santralin satışta olduğunu göstermez; YEKDEM sonrası yatırım kararının hangi teknik ve finansal parametrelere bağlı olduğunu açıklar ve yatırım kriterlerinizi tanımlamanıza yardımcı olur.",
    sections: [
      { heading: "YEKDEM sonrası gelir modeli", text: "Destek süresi dolduğunda santral, PTF üzerinden ikili anlaşma veya dengeleme piyasası satışına geçer. Gelir modeli sabit garantili fiyattan piyasa fiyat riskine döner; bu geçişin nakit akışına etkisi santral bazında ayrı hesaplanmalıdır." },
      { heading: "Piyasa fiyat riski ve üretim tahmini", text: "PTF'nin geçmiş oynaklığı, saatlik üretim profili ile fiyat profilinin örtüşme derecesi (dengesizlik maliyeti dahil) ve olası ikili anlaşma yapıları birlikte değerlendirilir. Tek bir yıllık ortalama fiyat, uzun dönem gelir varsayımı olarak kullanılmaz." },
      { heading: "OPEX, bakım ihtiyacı ve gerekli CAPEX", text: "YEKDEM sonrası dönemde genellikle ekipmanın da yaşı ilerlemiştir. Bakım geçmişi, planlı yenileme ihtiyacı ve ilk yıllarda gerekebilecek CAPEX kalemleri, gelir modeliyle birlikte nakit akışına yansıtılır." },
      { heading: "Lisans süresi ve teknik ömür", text: "Kalan lisans süresi ve ekipmanın teknik ömrü yatırım ufkunu sınırlar. Lisans yenileme koşulları ve teknik ömür sonrası senaryolar, değerleme ufkunun doğru seçilmesi için netleştirilir." },
      { heading: "Değerleme ve due diligence bağlantısı", text: "YEKDEM sonrası bir santrale teklif hazırlamadan önce üretim, ekipman durumu ve gelir varsayımlarının teknik olarak doğrulanması önerilir.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik due diligence kapsamı" },
      { heading: "Yatırım kriterlerinizi tanımlayın", text: "YEKDEM sonrası santral yatırımı arıyorsanız kapasite, bölge, bütçe ve risk toleransınızı iletin; uygun bir fırsat oluştuğunda değerlendirme süreci başlatılır.", href: "hes-degerleme", linkLabel: "Değerleme yaklaşımını inceleyin" }
    ]
  },
  {
    slug: "lisansli-enerji-projesi-devir-danismanligi",
    navGroup: "owner",
    navLabel: "Lisanslı Proje Devri",
    title: "Lisanslı Enerji Projesi Devir Danışmanlığı | Öztoprak Enerji",
    h1: "Lisanslı Enerji Projesi Devir Danışmanlığı",
    description: "Lisanslı GES, RES ve HES projelerinin devrinde teknik fizibilite, lisans ve izin süreçleri, bağlantı durumu, yatırım maliyeti ve yatırımcı eşleştirme danışmanlığı.",
    intro: "Lisanslı bir enerji projesini devretmek isteyen proje sahipleri ile bu projelere yatırım yapmak isteyen taraflar arasında teknik ve süreç danışmanlığı sağlıyoruz. Bu sayfa devirdeki belirli bir projenin ilanı değildir; proje devri sürecinin hangi teknik ve idari konulara bağlı olduğunu açıklar.",
    sections: [
      { heading: "Proje devri ve lisans süreci", text: "Lisans devri EPDK mevzuatı kapsamında idari bir süreçtir. Devir başvurusu öncesinde lisans şartlarına uyum, ödenmemiş yükümlülük olup olmadığı ve devrin hangi aşamada (inşaat öncesi, inşaat sırasında, işletmede) yapılacağı netleştirilir." },
      { heading: "Bağlantı durumu ve teknik fizibilite", text: "Bağlantı anlaşması, bağlantı kapasitesi ve şebeke yatırım yükümlülükleri projenin devredilebilirliğini doğrudan etkiler. Teknik fizibilite; saha koşulları, ekipman seçimleri ve güncel mevzuata uyumu kapsar." },
      { heading: "Yatırım maliyeti ve proje riskleri", text: "Kalan yatırım maliyeti, izin/ÇED süreçlerinin durumu, arazi/kullanım hakları ve olası gecikme riskleri devir öncesinde ayrı ayrı değerlendirilir. Doğrulanmamış maliyet veya getiri rakamları paylaşılmaz." },
      { heading: "Due diligence ve yatırımcı eşleştirme", text: "Devralacak taraf için teknik ve idari due diligence planlanır; proje sahibi tarafında ise gizlilik kapsamında nitelikli yatırımcılarla kontrollü bir süreç yürütülür.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik due diligence kapsamı" },
      { heading: "Devir sürecini başlatın", text: "Projenizi devretmeyi düşünüyorsanız veya lisanslı bir projeye yatırım arıyorsanız, sürecin gizlilik esasına göre yönetilmesi için kriterlerinizi iletin.", href: "santralini-sat", linkLabel: "Gizli görüşme talep edin" }
    ]
  }
];

function defaultNavLabel(page: InvestmentPage) {
  if (page.navLabel) return page.navLabel;
  if (page.kind === "buyer") return "Yatırımcı Kaydı";
  if (page.kind === "seller") return "Gizli Satış Danışmanlığı";
  if (page.service === "diligence") return "Teknik Due Diligence";
  if (page.service === "valuation") return page.slug === "ges-degerleme" ? "GES Değerleme" : "HES Değerleme";
  if (page.type) return `Satılık ${page.type}`;
  return "Tüm Yatırım Fırsatları";
}

function defaultNavGroup(page: InvestmentPage): "investor" | "owner" {
  if (page.navGroup) return page.navGroup;
  if (page.kind === "seller" || page.service === "valuation") return "owner";
  return "investor";
}

export const investmentNavHome = { href: "/tr/satilik-enerji-santralleri", label: "Tüm Yatırım Fırsatları" };

export const investmentNavigationGroups: { title: string; items: { href: string; label: string }[] }[] = [
  {
    title: "Yatırımcılar İçin",
    items: investmentPages
      .filter((page) => page.slug !== "satilik-enerji-santralleri" && defaultNavGroup(page) === "investor")
      .map((page) => ({ href: `/tr/${page.slug}`, label: defaultNavLabel(page) }))
  },
  {
    title: "Santral / Proje Sahipleri İçin",
    items: investmentPages
      .filter((page) => page.slug !== "satilik-enerji-santralleri" && defaultNavGroup(page) === "owner")
      .map((page) => ({ href: `/tr/${page.slug}`, label: defaultNavLabel(page) }))
  }
];

// Kept for any remaining call sites; prefer investmentNavigationGroups for new UI.
export const investmentNavigation = investmentPages.slice(0, 7).map((page) => ({ href: `/tr/${page.slug}`, label: page.kind === "buyer" ? "Santral Satın Al" : page.kind === "seller" ? "Santralini Sat" : page.type ? `Satılık ${page.type}` : "Satılık Enerji Santralleri" }));
