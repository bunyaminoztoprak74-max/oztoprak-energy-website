# Enerji Yatırım Fırsatları — sonuç raporu

Tarih: 6 Eylül 2026. Proje: `D:\Projects\oztoprakenerji2codex`.

Kod repo içinde uygulanmıştır. Tüm yeni sayfalar Türkçedir. Canlıya dağıtım yapılmamıştır. Kullanıcının Web3Forms aktarım onayı sonrasında varsayılan form gönderimi Vercel uyumlu Web3Forms akışına geçirilmiştir. Canlı ortamdaki erişim anahtarı/alıcı yapılandırması ve posta kutusu teslimatı bu çalışmada doğrulanmamıştır.

## 1. Oluşturulan sayfalar

10 yatırım/hizmet sayfası:

| URL | İçerik |
| --- | --- |
| `/tr/satilik-enerji-santralleri` | HES, GES, RES, BESS; eşleştirme, gizli satış, kurumsal deneyim, FAQ |
| `/tr/satilik-hes` | HES yatırım kriterleri, teknik inceleme ve alıcı formu |
| `/tr/satilik-ges` | Lisanslı/lisanssız GES, performans ve alıcı formu |
| `/tr/satilik-res` | RES üretimi, ekipman, bakım ve alıcı formu |
| `/tr/satilik-bess` | Güç/enerji kapasitesi, batarya ömrü ve alıcı formu |
| `/tr/santral-satin-al` | Tüm istenen alıcı kriterleri ve iletişim alanları |
| `/tr/santralini-sat` | Tüm istenen satıcı alanları, başlangıçta seçili gizli satış |
| `/tr/enerji-santrali-due-diligence` | Üretim, emre amadelik, ekipman, CAPEX, bağlantı, risk matrisi |
| `/tr/hes-degerleme` | Üretim, hidrolik veri, OPEX, CAPEX, borç ve nakit akışı |
| `/tr/ges-degerleme` | PR, ışınım, degradasyon, inverter, kullanım hakları ve nakit akışı |

8 Türkçe blog yazısı ve `/tr/blog/category/enerji-yatirimlari` kategori görünümü eklendi:

1. HES Satın Alırken Nelere Dikkat Edilmeli?
2. GES Satın Alırken Nelere Dikkat Edilmeli?
3. HES Değeri Nasıl Hesaplanır?
4. GES Değeri Nasıl Hesaplanır?
5. Enerji Santrali Satın Alma Süreci
6. Santral Teknik Due Diligence Nedir?
7. Enerji Santrali Satarken Nelere Dikkat Edilmeli?
8. HES Satış Süreci Nasıl Yönetilir?

Gerçek olmayan ilan veya örnek satış fiyatı yayımlanmadı. Gerçek portföy yerine yatırımcı ve satıcı talepleri kullanıldı. Kurumsal rakamlar mevcut `AuthorityMetrics` bileşeninden alındı; bunların satış portföyü büyüklüğü olmadığı açıklandı.

## 2. Değiştirilen dosyalar

Bu çalışma kapsamında mevcut dosyalara yapılan eklemeler:

- `.env.local.example`: Web3Forms ve isteğe bağlı özel depolama ayarları; gerçek anahtar eklenmedi.
- `app/[locale]/page.tsx`: ana sayfadan yatırım bölümüne bağlantı.
- `app/[locale]/blog/[slug]/page.tsx`: bölüm içi bağlantılar ve olmayan çevirinin işaretlenmemesi.
- `app/[locale]/privacy-policy/page.tsx`: yatırım başvurularının mevcut veri akışı açıklaması.
- `components/header.tsx`, `components/footer.tsx`: yatırım menüsü ve alt bağlantı.
- `content/blog.ts`, `content/types.ts`: yeni yazılar ve bölüm bağlantı tipi.
- `lib/analytics.ts`: dokuz olay adı.
- `lib/schema.ts`: genel LocalBusiness içindeki dayanağı olmayan teklif dizisinin kaldırılması.
- `lib/sitemap-data.ts`: Türkçe yatırım, blog ve kategori URL’leri.
- `package.json`: test komutları; bağımlılık eklenmedi.
- `eslint.config.mjs`: Node CommonJS test dosyalarının modül sözdizimine özel kapsamlı ayar.

Yeni uygulama dosyaları:

- `app/[locale]/[investment]/page.tsx`
- `app/api/investment-leads/route.ts`
- `components/investment-cta.tsx`
- `components/investment-lead-form.tsx`
- `components/investment-navigation.tsx`
- `components/investment-page.tsx`
- `components/investment-portfolio.tsx`
- `components/investment-tracking.tsx`
- `content/investments.ts`
- `content/investment-articles.ts`
- `lib/investment-fields.ts`
- `lib/investment-delivery.ts`
- `lib/investment-portfolio.ts`
- `lib/investment-server.ts`

Yeni kontrol/işletim dosyaları:

- `scripts/investment.test.cjs`
- `scripts/investment-test-loader.cjs`
- `scripts/investment-browser-check.cjs`
- `scripts/investment-export.mjs`
- `docs/ENERJI-YATIRIM-MODULU.md`
- `docs/ENERJI-YATIRIM-SONUC-RAPORU.md`
- `docs/investment-qa/results.json` ve yedi ekran görüntüsü.

Göreve başlamadan önce repoda ana sayfa, SEO, imza ve başka dosyalarda değişiklikler vardı. Bunlar sıfırlanmadı veya geri alınmadı; yukarıdaki liste yalnızca bu modülde yapılan çalışmayı gösterir.

## 3. Yeni componentler

`InvestmentPage`, `InvestmentCta`, `InvestmentLeadForm`, `InvestmentNavigation`, `PortfolioCard`, `InvestorRequestCard`, `InvestmentPageView`.

Gizli portföy kartı sunucuda oluşturulur. Ad, şirket, kesin il, slug, serbest açıklama ve fiyat gizli kartın çıktısına alınmaz. Taslak/kapalı portföyler gösterilmez. Formlar, mevcut Container, Breadcrumbs, kurumsal metrikler ve Tailwind renk sistemini kullanır.

## 4. Yeni API/backend yapısı

`GET /api/investment-leads`: Web3Forms için süreli CSRF belirteci ve HttpOnly/SameSite çerezi; isteğe bağlı disk modunda HMAC imzalı belirteç.

`POST /api/investment-leads`: sunucu doğrulaması, origin kontrolü, 24 KB gövde sınırı, tuzak alan, temel hız sınırı ve sadece izin verilen alanlardan Web3Forms gönderim yükü hazırlama. Hazırlama yanıtı teslimat başarısı sayılmaz. Son gönderim sağlayıcının önerdiği şekilde tarayıcıdan yapılır.

Varsayılan modda `WEB3FORMS_ACCESS_KEY`, yoksa mevcut `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` kullanılır. Anahtar yoksa API 503 döndürür. Vercel için disk gerekmemektedir. İsteğe bağlı `disk` modu, şifreli kayıt ve yerel aktarım aracı korunmuştur; bu alternatif Vercel’de kapalıdır. CRM aktarımı veya yönetim paneli eklenmemiştir.

## 5. SEO düzenlemeleri

Yeni sayfalarda unique title, description, canonical, OpenGraph, Twitter, tek H1, breadcrumb ve ilgili iç bağlantılar bulunmaktadır. Kullanıcının istediği ana landing ve teknoloji sayfası SEO başlıkları kullanılmıştır.

Yeni içerikler mevcut sitemap yapısına eklendi. İngilizce karşılığı olmayan sayfalara İngilizce hreflang üretilmedi. HES/GES satış → değerleme → teknik inceleme → alıcı formu bağlantıları ve bloglardan ilgili sayfalara bağlantılar kuruldu. Mevcut SEO audit komutu başarıyla tamamlandı.

## 6. Structured data

Organization mevcut üst düzenden yeniden kullanıldı. Yatırım sayfalarına BreadcrumbList, ana landing üzerinde görünür FAQ içeriğiyle eşleşen FAQPage eklendi. Bloglarda mevcut Article yapısı kullanıldı.

Yeni 18 içerik sayfasında Product/Offer bulunmadığı tarayıcıda doğrulandı. Başka hizmet sayfalarının özel şemaları yeniden tasarlanmadı.

## 7. Formların veri akışı

Tarayıcı doğrulaması → aynı site API’si → sunucu doğrulaması ve yük hazırlama → tarayıcıdan Web3Forms API’sine gönderim → başarılı HTTP ve `success: true` kontrolü → referans numaralı başarı mesajı.

Başarı yalnızca sağlayıcı kabulünden sonra gösterilir. Hatalarda girilen alanlar korunur ve Türkçe açıklama gösterilir. Belirsiz sonuçta otomatik yeniden gönderim yapılmaz. Aktarım onayı (`yatirim-v2-web3forms`), kaynak, amaç, gizlilik tercihi ve tarih mesajın içeriğine eklenir. Alıcı ve satıcı formları sentetik veriler ve taklit Web3Forms yanıtlarıyla test edilir; testler üçüncü taraflara veri veya gerçek e-posta göndermez. Sağlayıcı kabulü gerçek posta kutusu teslimatıyla aynı şey değildir.

## 8. Analytics eventleri

`investment_page_view`, `buyer_form_start`, `buyer_form_submit`, `seller_form_start`, `seller_form_submit`, `due_diligence_cta_click`, `valuation_cta_click`, `hes_investment_cta_click`, `ges_investment_cta_click`.

Mevcut oztoprakTrack/dataLayer kullanılır. Ad, e-posta, telefon, bütçe veya santral detayları olaylara eklenmez. Form başlangıç ve başarı olayları tarayıcıda; dört özel CTA olayı birim testinde doğrulanmıştır.

## 9. Lint sonucu

`npm run lint`: **başarılı, 0 hata**. Görev öncesinden kalan 3 uyarı: `components/Signature.tsx` içindeki iki `img` ve `gen-assets.mjs` içindeki kullanılmayan `writeFile`. Bu modülün dosyalarında lint hatası veya uyarısı yoktur.

`npm run typecheck`: **başarılı, 0 TypeScript hatası**.

## 10. Test sonucu

`npm test`: **18/18 geçti**. Projede daha önce test komutu bulunmuyordu; bu modül için bağımlılık eklenmeden Node test altyapısı eklendi. Web3Forms yükü, çerez kontrolü, Vercel modu ve başarısız/belirsiz sağlayıcı yanıtları da kapsamdadır.

Tarayıcı: **72/72 kontrol geçti** (18 sayfa × 1440, 768, 390, 320 piksel). Menü, Escape, gezinme, form ön seçimi, aralık doğrulaması, iki Web3Forms kabulü ve bir ret yanıtı taklidi, başarı mesajları, analytics, iç bağlantılar ve 404 sınırları doğrulandı. Beklenmeyen tarayıcı hatası: **0**. Son koşunun sonuçları `docs/investment-qa/results.json` içindedir.

Kanıt: `docs/investment-qa/results.json`. Tarayıcı testi üretim derlemesini sentetik Web3Forms anahtarıyla çalıştırır; harici istekleri engeller. Canlı hizmet sağlayıcı teslimatı bu kontrolün kapsamında değildir.

## 11. Build sonucu

`npm run build`: **başarılı**. Next.js 15.5.18 ile toplam 392 statik sayfa oluşturuldu; yatırım API’si dinamik rota olarak derlendi. Yeni sayfalar mevcut uygulama yapısında üretim derlemesine dahildir.

## 12. Önerilen sonraki adımlar ve kritik eksikler

1. Vercel’de mevcut Web3Forms anahtarının tanımlı olduğunu ve doğru alıcıya bağlı olduğunu doğrulayın. Kod dağıtımı bu çalışmada yapılmadı.
2. Posta kutusunu kontrol edecek sorumlu ve geri dönüş süreci belirlenmelidir. Birden fazla sunucu örneğinde ortak hız sınırı gerekir. Genel Web3Forms anahtarı doğrudan sağlayıcıya gönderime izin verdiğinden, ön doğrulama API’si mutlak bir güven sınırı değildir; sağlayıcının spam/alan adı ayarları da önemlidir.
3. Kurumsal aydınlatma metni, saklama/silme süresi ve yetkili erişim kapsamı sorumlu ekipçe tamamlanmalıdır.
4. Yayın izni alınmış gerçek portföy oluşursa gizli veri süzgeci üzerinden eklenmelidir.
5. Dağıtım sonrasında gerçek alan adındaki API/analytics davranışı ve sağlayıcı alıcı ayarı doğrulanmalıdır. Bu çalışmada canlı mail gönderilmedi, mail veya CRM aracı kullanılmadı.

İlk aşamadaki otomatik inceleme reddinden sonra kullanıcı, iletişim ve teknik-finansal yatırım bilgilerinin Web3Forms’a aktarılmasına açıkça onay verdi. Entegrasyon bu onay üzerine uygulandı. Mevcut genel iletişim formları değiştirilmedi. Yeni yatırım başvuruları oztoprak-office CRM’e otomatik kaydedilmez.
