export type InvestmentSection = { heading: string; text: string; href?: string; linkLabel?: string };
export type InvestmentPage = {
  slug: string; title: string; h1: string; description: string; intro: string;
  type?: "HES" | "GES" | "RES" | "BESS";
  kind?: "buyer" | "seller";
  service?: "diligence" | "valuation";
  sections: InvestmentSection[];
};

export const investmentPages: InvestmentPage[] = [
  {
    slug: "satilik-enerji-santralleri",
    title: "Satılık Enerji Santralleri | HES, GES, RES ve BESS | Öztoprak Enerji",
    h1: "Satılık Enerji Santralleri ve Yatırım Fırsatları",
    description: "Türkiye genelindeki HES, GES, RES ve BESS yatırım fırsatları için Öztoprak Enerji ile iletişime geçin. Santral alım-satımı, teknik inceleme, değerleme ve due diligence danışmanlığı.",
    intro: "Türkiye genelinde HES, GES, RES ve enerji depolama yatırımlarında alıcı-satıcı eşleştirme, teknik değerlendirme, üretim analizi, santral değerleme ve satın alma öncesi teknik due diligence hizmetleri.",
    sections: [
      { heading: "HES Yatırımları", text: "Hidroelektrik yatırımlarını kurulu gücün yanında hidrolik veri, gerçekleşen net üretim, türbin-jeneratör durumu ve işletme geçmişiyle değerlendirin.", href: "satilik-hes", linkLabel: "Satılık HES fırsatları" },
      { heading: "GES Yatırımları", text: "Lisanslı ve lisanssız güneş projelerinde üretim, panel ve inverter performansı, bağlantı yapısı ve arazi kullanımını birlikte inceleyin.", href: "satilik-ges", linkLabel: "Satılık GES fırsatları" },
      { heading: "RES Yatırımları", text: "Rüzgar kaynağı, türbin emre amadeliği, bakım sözleşmeleri ve büyük ekipman yenilemelerinin yatırım üzerindeki etkisini görün.", href: "satilik-res", linkLabel: "Satılık RES fırsatları" },
      { heading: "BESS / Enerji Depolama", text: "Batarya yatırımlarında MW ve MWh kapasitesi, çevrim ömrü, garanti koşulları, bağlantı ve işletme senaryosu üzerinden teknik değerlendirme yapın.", href: "satilik-bess", linkLabel: "BESS yatırım fırsatları" },
      { heading: "Teknik Due Diligence", text: "Saha bulguları ile veri odası kayıtlarını karşılaştırın. Üretim kaybı, ekipman riski ve gerekli CAPEX kalemlerini satın alma kararından önce belirleyin.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik inceleme kapsamı" },
      { heading: "Santral Değerleme", text: "Tek bir MW çarpanı yerine üretim, gelir, OPEX, yenileme ihtiyacı ve kalan işletme süresine dayalı senaryolar hazırlayın.", href: "hes-degerleme", linkLabel: "HES değerleme yaklaşımı" },
      { heading: "Yatırımcı Eşleştirme", text: "Santral türü, kapasite aralığı, bütçe, bölge ve zamanlama kriterleriyle talebinizi tanımlayın. Uygun fırsat oluştuğunda tarafların beklentileri kontrollü biçimde eşleştirilir.", href: "santral-satin-al", linkLabel: "Yatırımcı kriterlerinizi paylaşın" },
      { heading: "Gizli Satış Süreci", text: "Ön değerlendirme, anonim tanıtım, yatırımcı yeterliliğinin incelenmesi ve gizlilik sözleşmesi aşamalarını planlayın. Hassas verilerin paylaşımı satıcının belirlediği kapsamda yürütülür.", href: "santralini-sat", linkLabel: "Gizli satış talebi oluşturun" }
    ]
  },
  {
    slug: "satilik-hes", type: "HES",
    title: "Satılık HES | Hidroelektrik Santrali Yatırım Fırsatları | Öztoprak Enerji",
    h1: "Satılık HES – Hidroelektrik Santrali Yatırım Fırsatları",
    description: "Satılık HES ve hidroelektrik santrali yatırım fırsatları. HES satın alma, teknik inceleme, üretim analizi, değerleme ve due diligence hizmetleri.",
    intro: "Satılık hidroelektrik santrali arayışınızı kapasite, bölge, bütçe ve üretim hedefleriyle tanımlayın. HES satın almak isteyen yatırımcılar için ön elemeden saha incelemesine uzanan bir değerlendirme süreci sunuyoruz.",
    sections: [
      { heading: "HES yatırım fırsatlarını nasıl değerlendiriyoruz?", text: "Kurulu güç tek başına üretim potansiyelini açıklamaz. Debi kayıtları, net düşü, kullanılabilir su, mevsimsellik, duruş süreleri ve ölçülen net üretim aynı dönemler üzerinden karşılaştırılır. Eksik veri varsa varsayım olarak işaretlenir; doğrulanmış üretim gibi sunulmaz." },
      { heading: "HES teknik inceleme ve due diligence", text: "Hidroelektrik santrali satın almak öncesinde türbin, jeneratör, cebri boru, su alma yapısı ve koruma sistemlerinin durumu incelenir. Bakım geçmişi, titreşim kayıtları ve işletme olayları, sahada gözlenen durum ile birlikte yorumlanır.", href: "enerji-santrali-due-diligence", linkLabel: "HES due diligence kapsamı" },
      { heading: "HES değerleme ve satın alma kriterleri", text: "Üretimin nakit akışına dönüşmesi; satış yapısı, işletme giderleri, bakım yatırımları ve borç yüküne bağlıdır. Satılık HES portföyünü elemeden önce kapasite ve bütçenin yanında veri beklentinizi de belirleyin.", href: "hes-degerleme", linkLabel: "HES değerleme parametreleri" }
    ]
  },
  {
    slug: "satilik-ges", type: "GES",
    title: "Satılık GES | Güneş Enerji Santrali Yatırım Fırsatları | Öztoprak Enerji",
    h1: "Satılık GES – Güneş Enerji Santrali Yatırım Fırsatları",
    description: "Satılık GES ve güneş enerji santrali arayan yatırımcılar için lisanslı ve lisanssız proje değerlendirme, üretim analizi, GES değerleme ve due diligence.",
    intro: "Satılık güneş enerji santrali arayışınızda teknik performans ile gelir yapısını birlikte değerlendirin. GES satın almak isteyen yatırımcılar için lisanslı GES ve lisanssız GES kriterlerine göre talep topluyoruz.",
    sections: [
      { heading: "Lisanslı ve lisanssız GES", text: "Her proje için bağlantı hakkı, kurulu DC/AC güç, tüketimle ilişki ve gelir yapısı ayrı kaydedilir. İşletme veya devir koşulları yalnızca proje dosyası ve güncel uzman incelemesiyle doğrulanır; tüm projelere aynı ticari model uygulanmaz." },
      { heading: "GES yatırım fırsatlarında üretim kalitesi", text: "Sayaç verisi, inverter kayıtları ve ışınım ölçümleri aynı zaman aralığına getirilir. PR, emre amadelik, kirlenme, gölgelenme ve kesinti etkileri ayrılarak gerçekleşen üretim ile model arasındaki fark açıklanır." },
      { heading: "GES değerleme ve due diligence", text: "Panel degradasyonu, inverter yenilemesi, arazi veya çatı kullanım süresi ve OPEX nakit akışı modeline taşınır. Beklenen üretimin hangi teknik varsayımlara dayandığını görün.", href: "ges-degerleme", linkLabel: "GES değerleme yaklaşımı" },
      { heading: "Satın almadan önce saha doğrulaması", text: "Elektriksel güvenlik, ekipman envanteri, garanti kapsamı ve bakım geçmişi teknik incelemeye alınır. Test kapsamı erişim koşulları ve tespit edilen risklere göre planlanır.", href: "enerji-santrali-due-diligence", linkLabel: "GES due diligence talebi" }
    ]
  },
  {
    slug: "satilik-res", type: "RES",
    title: "Satılık RES | Rüzgar Enerji Santrali Yatırım Fırsatları | Öztoprak Enerji",
    h1: "Satılık RES – Rüzgar Enerji Santrali Yatırım Fırsatları",
    description: "Satılık RES ve rüzgar enerji santrali yatırımları için yatırımcı eşleştirme, RES değerleme, üretim analizi ve teknik due diligence danışmanlığı.",
    intro: "Satılık rüzgar enerji santrali arayışınızı rüzgar kaynağı, türbin teknolojisi, kapasite ve bütçe kriterleriyle daraltın. RES satın almak için teknik ve ticari belirsizlikleri işlem öncesinde görünür hale getirin.",
    sections: [
      { heading: "RES yatırım fırsatlarında veri incelemesi", text: "SCADA, sayaç ve rüzgar ölçümleri karşılaştırılır. Türbin bazında duruşlar, şebeke kısıntıları ve iz etkileri ayrılır; tek bir yılın üretimi uzun dönem beklentisi olarak kabul edilmez." },
      { heading: "RES değerleme ve bakım yükümlülükleri", text: "Ana yatak, dişli kutusu, jeneratör ve kanatların durumu büyük onarım bütçesini etkileyebilir. Bakım sözleşmesi, garanti istisnaları, vinç erişimi ve yedek parça temini senaryo bazında incelenir." },
      { heading: "RES teknik due diligence", text: "Saha incelemesi ile üretici bakım raporları birlikte okunur. Teknik riskler olasılık, üretim etkisi, maliyet ve giderilme süresiyle sıralanır; yatırımcıya kapanış öncesi kontrol listesi sunulur.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik inceleme süreci" }
    ]
  },
  {
    slug: "satilik-bess", type: "BESS",
    title: "Satılık BESS ve Enerji Depolama Yatırımları | Öztoprak Enerji",
    h1: "Satılık BESS ve Enerji Depolama Yatırımları",
    description: "Satılık BESS ve enerji depolama tesisi yatırımlarında güç, enerji kapasitesi, batarya sağlığı, bağlantı ve teknik inceleme kriterlerinizi paylaşın.",
    intro: "Batarya enerji depolama sistemi yatırımlarında yalnızca güç değil, kullanılabilir enerji ve ömür boyunca çalışma koşulları da önemlidir. BESS yatırım fırsatı arayışınızı teknik kriterlerle tanımlayın.",
    sections: [
      { heading: "MW ve MWh birlikte değerlendirilir", text: "MW anlık gücü, MWh depolanabilir enerjiyi ifade eder. Enerji depolama tesisi için AC/DC ölçüm sınırı, kullanılabilir kapasite, çevrim verimi ve yardımcı tüketimler aynı teknik tanım altında karşılaştırılır. Talep formunun açıklama alanında MWh ve hedef deşarj sürenizi belirtin." },
      { heading: "Batarya sağlığı ve güvenlik", text: "Hücre kimyası, sağlık durumu, çevrim sayısı, sıcaklık yönetimi, yangın algılama ve kontrol sistemleri incelenir. Garanti edilen kapasitenin hangi sıcaklık, çevrim ve işletme kısıtları altında geçerli olduğu belirlenir." },
      { heading: "Enerji depolama yatırımı ve işletme senaryosu", text: "Gelir varsayımları, bağlantı kapasitesi ve izin verilen kullanım senaryoları proje özelinde doğrulanmalıdır. Arbitraj veya hizmet gelirleri garanti kabul edilmez; batarya yenileme ihtiyacı ve işletme sınırlamaları senaryolara dahil edilir.", href: "enerji-santrali-due-diligence", linkLabel: "BESS teknik değerlendirme talebi" }
    ]
  },
  {
    slug: "santral-satin-al", kind: "buyer",
    title: "Santral Satın Al | Enerji Yatırımcı Talebi | Öztoprak Enerji",
    h1: "Enerji Santrali Satın Almak İstiyorum",
    description: "HES, GES, RES ve BESS satın alma kriterlerinizi paylaşın. Kapasite, bütçe, bölge ve yatırım zamanlamasına göre yatırımcı eşleştirme talebi oluşturun.",
    intro: "Kapasite, bütçe ve üretim beklentinizi paylaşın. Uygun fırsat oluştuğunda teknik ön değerlendirme ve alıcı-satıcı eşleştirme için sizinle iletişime geçelim.",
    sections: [
      { heading: "Talebinizden sonra ne olur?", text: "Ekibimiz kriterlerinizi netleştirir. Uygunluk değerlendirmesinden sonra paylaşılmasına izin verilen portföy bilgileri sunulur. Bu form bir satın alma taahhüdü veya belirli bir portföyün mevcut olduğuna dair garanti değildir." },
      { heading: "Teknik incelemeyi erken planlayın", text: "Üretim verisi, ekipman durumu ve bakım ihtiyacının ön incelemesi, yatırım kriterlerinizi daha gerçekçi hale getirir.", href: "enerji-santrali-due-diligence", linkLabel: "Satın alma öncesi teknik due diligence" }
    ]
  },
  {
    slug: "santralini-sat", kind: "seller",
    title: "Santralini Sat | Gizli Enerji Santrali Satışı | Öztoprak Enerji",
    h1: "Enerji Santralinizi Satmayı mı Düşünüyorsunuz?",
    description: "HES, GES, RES ve BESS santral satış talebi oluşturun. Gizli satış, teknik değerlendirme, değerleme ve nitelikli yatırımcı eşleştirme desteği alın.",
    intro: "Öztoprak Enerji; HES, GES, RES ve diğer enerji yatırımlarında gizli satış süreci, teknik değerlendirme, yatırımcı eşleştirme ve işlem desteği sunar.",
    sections: [
      { heading: "Ön değerlendirme ve gizlilik", text: "Başvurunuz doğrudan halka açık bir ilana dönüşmez. Satış beklentisi, teknik veri kapsamı ve paylaşım sınırları sizinle netleştirilir. Gizli satış tercihi başlangıçta seçilidir; şirket ve hassas proje belgeleri ilk görüşmeden sonra kontrollü kanalla istenir." },
      { heading: "Satışa hazırlık", text: "Üretim geçmişi, ekipman listesi, bakım kayıtları ve mevcut finansman yükümlülükleri düzenli bir veri odasında toplanır. Eksik belgeler ve giderilebilir teknik riskler görüşmelere başlamadan önce belirlenir.", href: "hes-degerleme", linkLabel: "HES satış fiyatını etkileyen parametreler" }
    ]
  },
  {
    slug: "enerji-santrali-due-diligence", service: "diligence",
    title: "Enerji Santrali Teknik Due Diligence | HES, GES, RES | Öztoprak Enerji",
    h1: "Enerji Santrali Teknik Due Diligence",
    description: "HES, GES ve RES satın alma öncesinde teknik durum, üretim, ekipman, bakım CAPEX'i ve şebeke bağlantısını inceleyen teknik due diligence hizmeti.",
    intro: "Satın alma kararını doğrulanabilir saha ve işletme verisine dayandırın. Teknik inceleme; varlığın mevcut durumunu, performans belirsizliğini ve gelecekteki yatırım ihtiyacını görünür kılar.",
    sections: [
      { heading: "Teknik durum ve üretim analizi", text: "Son 3–5 yıllık sayaç, SCADA ve işletme kayıtları veri sürekliliği açısından kontrol edilir. Availability (emre amadelik), capacity factor (kapasite faktörü) ve verimlilik; veri kapsamı, ölçüm sınırı ve duruş sınıfları açıklanarak hesaplanır. Kaynak değişimi ile ekipman kaynaklı performans kaybı ayrılır." },
      { heading: "Ana ekipman ve kalan ekonomik ömür", text: "Türbin, jeneratör, panel, inverter, trafo, koruma ve yardımcı sistemler envanterle eşleştirilir. Ekipman yaşı tek başına kalan ekonomik ömrü belirlemez; işletme yükü, bakım geçmişi, arıza tekrarları ve parça temini birlikte incelenir." },
      { heading: "Rehabilitasyon ve CAPEX tahmini", text: "Yenileme / rehabilitasyon ihtiyacı; acil güvenlik işleri, üretimi koruyan bakım ve performansı artırabilecek yatırımlar olarak ayrılır. CAPEX tahmini için kapsam, fiyat tarihi, belirsizlik aralığı ve duruş gereksinimi kaydedilir; teklif alınmamış kalemler kesin bedel olarak gösterilmez." },
      { heading: "Şebeke bağlantısı, lisans ve izinler", text: "Bağlantı kapasitesi, tek hat şemaları, koruma koordinasyonu ve kabul testlerinin teknik tutarlılığı incelenir. Lisans ve izinlerin teknik kontrolü; işletmenin belgelenen sınırlarla uyumuna odaklanır. Hukuki ve mali inceleme kapsamları ilgili uzmanlarla ayrıca koordine edilir." },
      { heading: "Risk matrisi ve teknik yatırım raporu", text: "Her bulgu kanıt, olasılık, etki, önerilen aksiyon, sorumlu ve zamanlama ile raporlanır. Açık veri talepleri ayrı tutulur. Nihai teknik yatırım raporu, kapanış öncesi koşulları ve satın alma sonrasındaki ilk bakım önceliklerini destekler.", href: "santral-satin-al", linkLabel: "Teknik inceleme gereksiniminizi paylaşın" }
    ]
  },
  {
    slug: "hes-degerleme", service: "valuation",
    title: "HES Değerleme | Hidroelektrik Santrali Değeri | Öztoprak Enerji",
    h1: "HES Değerleme ve Hidroelektrik Yatırım Değeri",
    description: "HES değeri nasıl hesaplanır? Hidroelektrik santrali değerlemede net üretim, hidrolik veriler, OPEX, CAPEX, borç ve nakit akışı yaklaşımını inceleyin.",
    intro: "HES satış fiyatı yalnızca MW üzerinden belirlenemez. Aynı kurulu güçteki iki santral; su rejimi, üretim, ekipman durumu ve işletme maliyetleri nedeniyle farklı ekonomik sonuçlar üretir.",
    sections: [
      { heading: "Yıllık net üretim ve hidrolik veriler", text: "Debi, düşü, kullanılabilir su ve kapasite faktörü uzun dönem beklentisini belirler. Sayaçtan doğrulanmış yıllık net üretim, kuru ve yağışlı dönemlerle birlikte incelenir. Ölçülmüş değer ile model çıktısı ayrı gösterilir." },
      { heading: "Elektrik satış gelirleri: YEKDEM / PTF", text: "Gelir modeli santralin belgelenmiş satış yapısına dayanır. YEKDEM kapsamı ve kalan süre, piyasa satışı veya sözleşme koşulları dosya üzerinden kontrol edilir. Tek bir günün PTF değeri uzun vadeli satış fiyatı varsayımına dönüştürülmez." },
      { heading: "OPEX, bakım CAPEX’i ve ekipman yaşı", text: "Personel, bakım, sigorta ve diğer işletme giderleri üretimle birlikte okunur. Türbin-jeneratör yenilemesi, su yapıları bakımı ve büyük duruşlar nakit akışında ayrı tarihlendirilir. Ekipman yaşının etkisi saha bulgularıyla doğrulanır." },
      { heading: "Lisans süresi, borç ve işletme performansı", text: "Kalan lisans süresi model ufkunu etkiler. Santral işletme değeri ile borç, nakit ve işlem kapsamından etkilenen özsermaye değeri birbirinden ayrılır. Borcun iki kez düşülmesini önlemek için hesaplama yöntemi açıkça tanımlanır." },
      { heading: "Gelecek nakit akışı ve duyarlılık", text: "Üretim, fiyat, gider ve bakım senaryolarından gelecek nakit akışı oluşturulur. İskonto oranı ve model varsayımları raporda açıklanır. Tek fiyat yerine hangi belirsizliğin hidroelektrik yatırım değerini ne yönde etkilediği gösterilir.", href: "enerji-santrali-due-diligence", linkLabel: "Değerlemenin teknik girdilerini doğrulayın" }
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
  }
];

export const investmentFaqs = [
  { question: "Sitede neden santral ilanı göremiyorum?", answer: "Bu bölüm yatırımcı ve satıcı taleplerini toplar. Yayın izni alınmış gerçek portföy eklenene kadar ilan gösterilmez. Kriterlerinizi ileterek uygun fırsat oluştuğunda iletişime geçilmesini isteyebilirsiniz." },
  { question: "Santralimi gizli şekilde satabilir miyim?", answer: "Satış formunda gizli satış seçeneğini kullanabilirsiniz. Başvurunuz otomatik yayımlanmaz. Santral adı ve hassas bilgiler, paylaşım kapsamı sizinle netleştirildikten ve gizlilik sözleşmesi süreci tamamlandıktan sonra nitelikli yatırımcılarla paylaşılabilir." },
  { question: "Santralin değeri yalnızca MW üzerinden hesaplanır mı?", answer: "Hayır. Net üretim, gelir yapısı, işletme giderleri, bakım yatırımları, kalan işletme süresi ve borç durumu birlikte değerlendirilir. Kurulu güç ön elemede yararlıdır; tek başına satış fiyatını belirlemez." },
  { question: "Teknik inceleme için hangi kayıtlar gerekir?", answer: "İlk aşamada kapasite ve işletme durumu yeterlidir. Kapsam belirlendikten sonra mevcut üretim kayıtları, ekipman envanteri, bakım geçmişi, bağlantı ve kabul belgeleri istenir. Eksik kayıtlar raporda ayrıca belirtilir." },
  { question: "Talep oluşturmak satın alma taahhüdü müdür?", answer: "Hayır. Form bir ön görüşme talebidir. Portföy uygunluğu, inceleme kapsamı, hizmet bedeli ve işlem koşulları taraflarla ayrıca değerlendirilir; getiri veya satış garantisi verilmez." }
];

export const investmentNavigation = investmentPages.slice(0, 7).map((page) => ({ href: `/tr/${page.slug}`, label: page.kind === "buyer" ? "Santral Satın Al" : page.kind === "seller" ? "Santralini Sat" : page.type ? `Satılık ${page.type}` : "Satılık Enerji Santralleri" }));
