export type InvestmentSection = { heading: string; text: string; href?: string; linkLabel?: string };
export type InvestmentPage = {
  slug: string; title: string; h1: string; description: string; intro: string;
  type?: "HES" | "GES" | "RES";
  kind?: "buyer" | "seller";
  service?: "diligence" | "valuation";
  ctaLabel?: string;
  navGroup?: "investor" | "owner";
  navLabel?: string;
  sections: InvestmentSection[];
};

export const investmentPages: InvestmentPage[] = [
  {
    slug: "satilik-enerji-santralleri",
    title: "Satılık HES, GES ve RES Projeleri | Öztoprak Enerji",
    h1: "Satılık Enerji Santralleri ve Yatırım Danışmanlığı",
    description: "Türkiye genelindeki satılık HES, GES ve RES projeleri için alıcı-satıcı eşleştirme, teknik inceleme ve santral değerleme desteği.",
    intro: "HES, GES ve RES alım-satım süreçlerinde alıcı-satıcı eşleştirme, teknik değerlendirme, üretim analizi, santral değerleme ve satın alma öncesi teknik inceleme desteği.",
    sections: [
      { heading: "HES Yatırımları", text: "Hidroelektrik yatırımlarını kurulu gücün yanında hidrolik veri, gerçekleşen net üretim, türbin-jeneratör durumu ve işletme geçmişiyle değerlendirin.", href: "satilik-hes", linkLabel: "HES Alım-Satım Danışmanlığı" },
      { heading: "GES Yatırımları", text: "Lisanslı ve lisanssız güneş projelerinde üretim, panel ve inverter performansı, bağlantı yapısı ve arazi kullanımını birlikte inceleyin.", href: "satilik-ges", linkLabel: "GES Alım-Satım Danışmanlığı" },
      { heading: "RES Yatırımları", text: "Rüzgar santrallerinde üretim geçmişi, türbin durumu, bakım yükümlülükleri ve büyük ekipman risklerini teknik verilerle birlikte değerlendirin.", href: "satilik-res", linkLabel: "RES Alım-Satım Danışmanlığı" },
      { heading: "Teknik Due Diligence", text: "Saha bulguları ile veri odası kayıtlarını karşılaştırın. Üretim kaybı, ekipman riski ve gerekli CAPEX kalemlerini satın alma kararından önce belirleyin.", href: "enerji-santrali-due-diligence", linkLabel: "Teknik inceleme kapsamı" },
      { heading: "Santral Değerleme", text: "Tek bir MW çarpanı yerine üretim, gelir, OPEX, yenileme ihtiyacı ve kalan işletme süresine dayalı senaryolar hazırlayın.", href: "hes-degerleme", linkLabel: "HES değerleme yaklaşımı" },
      { heading: "Yatırımcı Eşleştirme", text: "Santral türü, kapasite aralığı, bütçe, bölge ve zamanlama kriterleriyle talebinizi tanımlayın. Uygun fırsat oluştuğunda tarafların beklentileri kontrollü biçimde eşleştirilir.", href: "santral-satin-al", linkLabel: "Yatırımcı kriterlerinizi paylaşın" },
      { heading: "Gizli Satış Süreci", text: "Ön değerlendirme, anonim tanıtım, yatırımcı yeterliliğinin incelenmesi ve gizlilik sözleşmesi aşamalarını planlayın. Hassas verilerin paylaşımı satıcının belirlediği kapsamda yürütülür.", href: "santralini-sat", linkLabel: "Gizli satış talebi oluşturun" }
    ]
  },
  {
    slug: "satilik-hes", type: "HES", ctaLabel: "Yatırım Kriterlerinizi Bildirin",
    title: "HES Alım Satım Danışmanlığı | Satılık HES Yatırım Fırsatları | Öztoprak Enerji",
    h1: "HES Alım Satım Danışmanlığı – Satılık HES Yatırım Fırsatları",
    description: "HES alım satım danışmanlığı: satılık HES arayan yatırımcılar için kriter tanımlama, teknik/finansal inceleme, HES değerleme ve gizli yatırım süreci yönetimi.",
    intro: "Satılık HES arayan yatırımcılar için Öztoprak Enerji; yatırım kriterlerinin belirlenmesi, teknik ve finansal inceleme, HES değerleme ve gizli yatırım süreçlerinin yönetilmesi konularında danışmanlık sağlar. Hidroelektrik santrali satın alma veya HES satışı kararınızı kapasite, bölge, bütçe ve üretim hedefleriyle tanımlayın; ön elemeden saha incelemesine uzanan bir değerlendirme süreci sunuyoruz.",
    sections: [
      { heading: "HES alım satım danışmanlığı kapsamımız", text: "HES satın alma veya HES satışı sürecinde yatırım kriterlerinin tanımlanması, aday projelerin ön elemesi, teknik/finansal incelemenin planlanması ve gizlilik sözleşmesi kapsamında tarafların bir araya getirilmesini yönetiriz. Portföyümüzde şu anda satışa çıkarılmış belirli bir HES bulunduğu yönünde bir taahhüt vermeyiz; süreç talebinize göre şekillenir." },
      { heading: "HES yatırım fırsatlarını nasıl değerlendiriyoruz?", text: "Kurulu güç tek başına üretim potansiyelini açıklamaz. Debi kayıtları, net düşü, kullanılabilir su, mevsimsellik, duruş süreleri ve ölçülen net üretim aynı dönemler üzerinden karşılaştırılır. Eksik veri varsa varsayım olarak işaretlenir; doğrulanmış üretim gibi sunulmaz." },
      { heading: "HES teknik inceleme ve due diligence", text: "Hidroelektrik santrali satın almak öncesinde türbin, jeneratör, cebri boru, su alma yapısı ve koruma sistemlerinin durumu incelenir. Bakım geçmişi, titreşim kayıtları ve işletme olayları, sahada gözlenen durum ile birlikte yorumlanır.", href: "enerji-santrali-due-diligence", linkLabel: "HES due diligence kapsamı" },
      { heading: "HES değerleme ve satın alma kriterleri", text: "Üretimin nakit akışına dönüşmesi; satış yapısı, işletme giderleri, bakım yatırımları ve borç yüküne bağlıdır. Satılık HES ararken kapasite ve bütçenin yanında veri beklentinizi de belirleyin.", href: "hes-degerleme", linkLabel: "HES değerleme parametreleri" },
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
      { heading: "Satın almadan önce saha doğrulaması", text: "Elektriksel güvenlik, ekipman envanteri, garanti kapsamı ve bakım geçmişi teknik incelemeye alınır. Test kapsamı erişim koşulları ve tespit edilen risklere göre planlanır.", href: "enerji-santrali-due-diligence", linkLabel: "GES due diligence talebi" }
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
    title: "Santralini Sat | Gizli Enerji Santrali Satışı | Öztoprak Enerji",
    h1: "Enerji Santralinizi Satmayı mı Düşünüyorsunuz?",
    description: "Santralinizi satmayı mı düşünüyorsunuz? HES, GES veya RES için gizli satış süreci, teknik değerlendirme, değerleme ve nitelikli alıcılarla kontrollü iletişim. Gizli görüşme talep edin.",
    intro: "Öztoprak Enerji; HES, GES ve RES projelerinde gizli satış süreci, teknik değerlendirme, alıcı-satıcı eşleştirme ve işlem desteği sunar.",
    sections: [
      { heading: "Ön değerlendirme ve gizlilik", text: "Başvurunuz doğrudan halka açık bir ilana dönüşmez. Satış beklentisi, teknik veri kapsamı ve paylaşım sınırları sizinle netleştirilir. Gizli satış tercihi başlangıçta seçilidir; şirket ve hassas proje belgeleri ilk görüşmeden sonra kontrollü kanalla istenir." },
      { heading: "Satışa hazırlık", text: "Üretim geçmişi, ekipman listesi, bakım kayıtları ve mevcut finansman yükümlülükleri düzenli bir veri odasında toplanır. Eksik belgeler ve giderilebilir teknik riskler görüşmelere başlamadan önce belirlenir.", href: "hes-degerleme", linkLabel: "HES satış fiyatını etkileyen parametreler" }
    ]
  },
  {
    slug: "enerji-santrali-due-diligence", service: "diligence",
    ctaLabel: "Teknik Due Diligence Talebi",
    title: "Teknik Due Diligence | HES, GES ve RES Teknik İnceleme | Öztoprak Enerji",
    h1: "Enerji Santrali Teknik Due Diligence",
    description: "HES, GES ve RES teknik due diligence hizmeti: kapsam, yöntem ve raporlanan çıktılar. Satın alma öncesi teknik durum, üretim, ekipman, bakım CAPEX'i ve şebeke bağlantısı incelemesi.",
    intro: "Satın alma kararını doğrulanabilir saha ve işletme verisine dayandırın. Teknik inceleme; varlığın mevcut durumunu, performans belirsizliğini ve gelecekteki yatırım ihtiyacını görünür kılar.",
    sections: [
      { heading: "Teknik durum ve üretim analizi", text: "Son 3–5 yıllık sayaç, SCADA ve işletme kayıtları veri sürekliliği açısından kontrol edilir. Availability (emre amadelik), capacity factor (kapasite faktörü) ve verimlilik; veri kapsamı, ölçüm sınırı ve duruş sınıfları açıklanarak hesaplanır. Kaynak değişimi ile ekipman kaynaklı performans kaybı ayrılır." },
      { heading: "Ana ekipman ve kalan ekonomik ömür", text: "Türbin, jeneratör, panel, inverter, trafo, koruma ve yardımcı sistemler envanterle eşleştirilir. Ekipman yaşı tek başına kalan ekonomik ömrü belirlemez; işletme yükü, bakım geçmişi, arıza tekrarları ve parça temini birlikte incelenir." },
      { heading: "Rehabilitasyon ve CAPEX tahmini", text: "Yenileme / rehabilitasyon ihtiyacı; acil güvenlik işleri, üretimi koruyan bakım ve performansı artırabilecek yatırımlar olarak ayrılır. CAPEX tahmini için kapsam, fiyat tarihi, belirsizlik aralığı ve duruş gereksinimi kaydedilir; teklif alınmamış kalemler kesin bedel olarak gösterilmez." },
      { heading: "Şebeke bağlantısı, lisans ve izinler", text: "Bağlantı kapasitesi, tek hat şemaları, koruma koordinasyonu ve kabul testlerinin teknik tutarlılığı incelenir. Lisans ve izinlerin teknik kontrolü; işletmenin belgelenen sınırlarla uyumuna odaklanır. Hukuki ve mali inceleme kapsamları ilgili uzmanlarla ayrıca koordine edilir." },
      { heading: "Risk matrisi ve teknik yatırım raporu", text: "Her bulgu kanıt, olasılık, etki, önerilen aksiyon, sorumlu ve zamanlama ile raporlanır. Açık veri talepleri ayrı tutulur. Nihai teknik yatırım raporu, kapanış öncesi koşulları ve satın alma sonrasındaki ilk bakım önceliklerini destekler.", href: "santral-satin-al", linkLabel: "Teknik inceleme gereksiniminizi paylaşın" },
      { heading: "Kapsamı nasıl belirliyoruz?", text: "Teknik durum tespiti satın alma, finansman veya ortaklık gibi karar sorusuna göre kapsamlandırılır. Kapsam; tesis sınırı, erişilebilir belgeler, saha ziyareti ve gerekiyorsa planlanan testlerle tanımlanır. Raporda neyin sahada görüldüğü, neyin belgelerden okunduğu ve neyin doğrulanamadığı ayrı belirtilir.", href: "blog/santral-teknik-due-diligence-nedir", linkLabel: "Teknik due diligence nedir? Kapsam ve süreç rehberi" }
    ]
  },
  {
    slug: "hes-degerleme", service: "valuation",
    title: "HES Değerleme: Santral Değeri Nasıl Belirlenir? | Öztoprak Enerji",
    h1: "HES Değerleme ve Hidroelektrik Yatırım Değeri",
    description: "HES değerleme yaklaşımı: hidroelektrik santrali değerinde net üretim, hidrolik veriler, OPEX, bakım CAPEX'i, borç ve nakit akışı senaryoları. Değerleme talebi oluşturun.",
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

export const investmentFaqs = [
  { question: "Sitede neden santral ilanı göremiyorum?", answer: "Öztoprak Enerji bir ilan sitesi değildir; enerji santrali alım-satım süreçleri gizlilik esasına göre yürütülür ve kamuya açık olarak listelenmez. Yatırım kriterlerinizi paylaşabilir, kriterlerinize uygun ve paylaşılabilir bir süreç oluştuğunda kontrollü şekilde iletişime geçilmesini isteyebilirsiniz." },
  { question: "Santralimi gizli şekilde satabilir miyim?", answer: "Satış formunda gizli satış seçeneğini kullanabilirsiniz. Başvurunuz otomatik yayımlanmaz. Santral adı ve hassas bilgiler, paylaşım kapsamı sizinle netleştirildikten ve gizlilik sözleşmesi süreci tamamlandıktan sonra nitelikli yatırımcılarla paylaşılabilir." },
  { question: "Santralin değeri yalnızca MW üzerinden hesaplanır mı?", answer: "Hayır. Net üretim, gelir yapısı, işletme giderleri, bakım yatırımları, kalan işletme süresi ve borç durumu birlikte değerlendirilir. Kurulu güç ön elemede yararlıdır; tek başına satış fiyatını belirlemez." },
  { question: "Teknik inceleme için hangi kayıtlar gerekir?", answer: "İlk aşamada kapasite ve işletme durumu yeterlidir. Kapsam belirlendikten sonra mevcut üretim kayıtları, ekipman envanteri, bakım geçmişi, bağlantı ve kabul belgeleri istenir. Eksik kayıtlar raporda ayrıca belirtilir." },
  { question: "Talep oluşturmak satın alma taahhüdü müdür?", answer: "Hayır. Form bir ön görüşme talebidir. Kriter uygunluğu, inceleme kapsamı, hizmet bedeli ve işlem koşulları taraflarla ayrıca değerlendirilir; getiri veya satış garantisi verilmez." }
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
