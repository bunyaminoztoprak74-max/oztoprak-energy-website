# Enerji Yatırım Fırsatları — uygulama ve işletim

Bu modül yalnızca Türkçe yayımlanır. Gerçek ilan eklenmemiştir. Portföy kartı örnek santral verisiyle canlı sayfalarda kullanılmaz; yatırımcı kriteri ve satıcı başvurusu toplanır.

## Sayfalar

- `/tr/satilik-enerji-santralleri`
- `/tr/satilik-hes`
- `/tr/satilik-ges`
- `/tr/satilik-res`
- `/tr/satilik-bess`
- `/tr/santral-satin-al`
- `/tr/santralini-sat`
- `/tr/enerji-santrali-due-diligence`
- `/tr/hes-degerleme`
- `/tr/ges-degerleme`

İçerikler `content/investments.ts`, sayfa sunumu `components/investment-page.tsx`, Türkçe rota sınırı `app/[locale]/[investment]/page.tsx` içindedir. Bilinmeyen yatırım yolları ve İngilizce karşılıklar 404 verir.

Sekiz yeni yazı `content/investment-articles.ts` üzerinden mevcut blog sistemine eklenir. Kategori `/tr/blog/category/enerji-yatirimlari`; yazı yolları `/tr/blog/` altında:

- `hes-satin-alirken-nelere-dikkat-edilmeli`
- `ges-satin-alirken-nelere-dikkat-edilmeli`
- `hes-degeri-nasil-hesaplanir`
- `ges-degeri-nasil-hesaplanir`
- `enerji-santrali-satin-alma-sureci`
- `santral-teknik-due-diligence-nedir`
- `enerji-santrali-satarken-nelere-dikkat-edilmeli`
- `hes-satis-sureci-nasil-yonetilir`

## Veri akışı

1. Varsayılan gönderim Web3Forms’tur. Form, `GET /api/investment-leads` ile süreli bir CSRF belirteci ve HttpOnly/SameSite=Strict çerezi alır. Üretimde Secure kullanılır. Web3Forms erişim anahtarı halka açık form kimliğidir; imzalama sırrı olarak kullanılmaz.
2. Alıcı/satıcı alanları `lib/investment-fields.ts` ortak kurallarıyla tarayıcıda doğrulanır. Seçim listeleri, minimum–maksimum ilişkileri, telefon, e-posta, uzunluk ve onay kontrol edilir.
3. `POST /api/investment-leads` kaynak, içerik türü, 24 KB gövde sınırı, tuzak alan, çerez/belirteç eşleşmesi, yaş ve hız sınırını doğrular. Alanlar sunucuda tekrar kontrol edilir. Bilinmeyen alanlar gönderime dahil edilmez.
4. API; Türkçe alan etiketleri, iletişim bilgileri, doldurulan teknik-finansal bilgiler, gizli satış tercihi, onay sürümü (`yatirim-v2-web3forms`), tarih, amaç, kaynak ve referans içeren sınırlı bir Web3Forms yükü hazırlar. Kullanıcıdan `to`, `webhook`, `access_key` veya benzeri teslimat ayarları kabul edilmez. Bu aşama başarı/teslimat sayılmaz.
5. Tarayıcı yükü yalnızca `https://api.web3forms.com/submit` adresine gönderir. Sağlayıcının başarılı HTTP yanıtı ve `success: true` değeri birlikte kontrol edilir. Sonrasında başarı mesajı ve analytics olayı gösterilir. API kabulü, alıcı posta kutusuna kesin teslim kanıtı değildir.
6. Reddedilen gönderimde alanlar korunur, Türkçe hata gösterilir. Zaman aşımı/bozuk yanıt gibi belirsiz sonuçta otomatik tekrar yapılmaz ve aynı formun gönderim düğmesi kilitlenir. Başvurular Web3Forms erişim anahtarına bağlı adrese yönlendirilir; oztoprak-office veya başka CRM’e otomatik kayıt yapılmaz. Yerel diske kopya yazılmaz.

## Vercel / Web3Forms yapılandırması

Kullanıcı 6 Eylül 2026’da iletişim ve teknik-finansal yatırım bilgilerinin mevcut Web3Forms sağlayıcısına aktarılmasını açıkça onayladı. Varsayılan entegrasyon Vercel ile uyumludur; kalıcı yerel disk veya yeni şifreleme anahtarı gerektirmez.

- `INVESTMENT_LEAD_DELIVERY=web3forms`: varsayılandır, yazılması zorunlu değildir.
- `WEB3FORMS_ACCESS_KEY`: varsa tercih edilir; yoksa mevcut `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` kullanılır. Anahtar yoksa API 503 döndürür; sahte başarı verilmez. Yerel `.env.local` içinde mevcut anahtar bulundu, değeri loglara veya dokümanlara yazılmadı.
- Vercel ortamındaki anahtarın ve bağlı alıcı adresinin doğrulanması gerekir. Bu çalışma dağıtım yapmadı veya canlı e-posta göndermedi.

Sağlayıcı sunucudan API çağrısı yerine tarayıcıdan çağrı önerdiği için son gönderim tarayıcıdadır: [Web3Forms API](https://github.com/surjithctly/web3forms-docs/blob/main/getting-started/api-reference.md), [sorun giderme](https://github.com/surjithctly/web3forms-docs/blob/main/getting-started/troubleshooting.md). Erişim anahtarı halka açık olduğu için doğrudan sağlayıcı çağrıları kendi ön doğrulama API’mizi atlayabilir; bu mimaride sağlayıcının spam koruması ve gerektiğinde alan adı/CAPTCHA ayarları da önemlidir. CSRF belirteci kullanıcı kimlik doğrulaması değildir.

## İsteğe bağlı özel disk adaptörü

`INVESTMENT_LEAD_DELIVERY=disk` seçilirse sürekli çalışan Node.js sunucusunda, uygulama kökünün dışında bulunan **kalıcı ve erişim kontrollü bir disk birimi** kullanılabilir. Bu alternatif Vercel’de bilerek devre dışıdır. Disk modunda belirteç HMAC imzalıdır; kayıtlar AES-256-GCM ile şifrelenir ve tamamlandıktan sonra atomik yayımlanır. Aynı belirteçle tekrar kayıt engellenir. Web3Forms’a gönderim yapılmaz:

- `INVESTMENT_LEAD_STORAGE_DIR`: uygulama ve web kökünün dışında mutlak depolama yolu. Dizin statik dosya olarak sunulmamalıdır. Sunucu kullanıcısının yazma yetkisi gerekir. Windows ACL ile erişim yalnızca uygulama ve yetkili operatör hesaplarına verilmelidir.
- `INVESTMENT_LEAD_ENCRYPTION_KEY`: 32 bayt rastgele anahtarın 64 karakterlik hex gösterimi. Sunucunun sır yönetiminde saklayın; repoya, tarayıcıya veya loglara koymayın. Dosya yedeklerinden ayrı güvenli yedekleyin. Kaybolursa kayıtlar açılamaz. Anahtar değişiminden önce eski kayıtları güvenli biçimde taşıyın.
- `INVESTMENT_TRUST_PROXY=true`: yalnızca ters vekil `X-Real-IP` başlığını istemciden gelen değeri silerek kendisi yazıyorsa kullanın. Varsayılan durumda tüm istekler aynı yerel hız sınırını paylaşır.

Üretim kaynakları `https://www.oztoprakenerji.com` ve `https://oztoprakenerji.com` ile sınırlıdır. Yerel geliştirme kaynağı yalnızca geliştirme modunda kabul edilir. Önizleme dağıtımlarında gerçek kullanıcı bilgileriyle test yapılmamalıdır.

Hız sınırı süreç başına 10 dakikada 8 ön doğrulama/gönderim denemesidir. Vercel’de platformun `X-Vercel-Forwarded-For` başlığı kullanılır. Birden fazla uygulama örneğinde WAF üzerinde ortak hız sınırı gerekir. Belirteçler 2 saniye sonra kullanılabilir ve 2 saat geçerlidir. Bu temel önlemler CAPTCHA eşdeğeri değildir. Web3Forms modunda dağıtık, kalıcı tekrar-gönderim garantisi yoktur.

## Yalnızca disk modundaki başvuruları okuma

Yetkili operatör, sunucu ortam değişkenlerini yükledikten sonra:

```text
node scripts/investment-export.mjs <32-karakter-başvuru-referansı> <özel-mutlak-çıktı-dosyası>
```

Araç kaydı doğrular ve JSON içeriğini yalnızca belirtilen özel dosyaya yazar; kişisel verileri konsola basmaz. Var olan dosyanın üzerine yazmaz. Çıktı artık şifreli değildir; erişim kontrolü uygulanmalı, paylaşılan klasöre veya repoya konmamalıdır. Operatörün başvuruları düzenli kontrol etmesi, geri dönüş sorumlusunun atanması ve şifreli dosyaların yedeklenmesi gerekir.

Saklama süresi, erişim yetkileri, silme/düzeltme taleplerinin yönetimi ve kurumun aydınlatma metni yayından önce sorumlu ekip tarafından tamamlanmalıdır. Kodda otomatik süresiz saklama taahhüdü veya otomatik silme görevi yoktur.

## SEO ve gizlilik

Her yatırım sayfası bağımsız title, description, canonical, OpenGraph, Twitter metadata, tek H1, breadcrumb ve iç bağlantı içerir. İngilizce çevirisi olmayan URL’ler için hreflang üretilmez. Ana sayfada görünür sorulara birebir karşılık gelen FAQPage vardır. Bloglar mevcut Article şemasını kullanır; Organization üst düzenden gelir.

Genel LocalBusiness şemasındaki fiyat/ilan kanıtına dayanmayan `makesOffer` dizisi kaldırılmıştır. Yatırım sayfalarında Product veya Offer üretilmez. Diğer hizmet sayfalarının mevcut özel şemaları değiştirilmemiştir.

Gelecekte gerçek portföy kullanılırsa `PortfolioCard` sunucu bileşeni üzerinden `publicPortfolio` süzgeci uygulanmalıdır. Gizli portföylerde ad, şirket, il, slug, serbest açıklama ve fiyat kart çıktısına alınmaz. Bölge/kapasite gibi paylaşılacak özet verileri de yayın öncesinde satıcı onayıyla kontrol edin. Taslak ve kapalı kayıtlar gösterilmez. Gerçek kayıtlar bu değişiklikte eklenmedi.

## Analytics

Mevcut `oztoprakTrack` / dataLayer altyapısı kullanılır. Yeni bağımlılık yoktur:

`investment_page_view`, `buyer_form_start`, `buyer_form_submit`, `seller_form_start`, `seller_form_submit`, `due_diligence_cta_click`, `valuation_cta_click`, `hes_investment_cta_click`, `ges_investment_cta_click`.

Başlama olayı ilk değişiklikte bir kez, gönderim olayı yalnızca sağlayıcının başarılı kabul yanıtı veya disk modunda başarılı kayıttan sonra çalışır. Olaylara iletişim, bütçe veya santral detayları gönderilmez. Form Hotjar kayıtlarından bastırılmıştır.

## Kontroller

- `npm run lint`
- `npm run typecheck`
- `npm test`: doğrulama, gizli portföy, Türkçe sitemap, spam, origin, şifreli kayıt, tekrar gönderim ve depolama hatası kontrolleri.
- `npm run build`
- `npm run test:investment:browser`: üretim derlemesinden sonra 4 ekran genişliği, 18 sayfa, menü, SEO, iki sentetik başvuru, Web3Forms kabul/ret taklidi ve tarayıcı hata kontrolleri.

Tarayıcı kontrolü `PLAYWRIGHT_MODULE` ortam değişkeniyle mevcut Playwright paketinin yolunu kullanabilir. `CHROME_EXECUTABLE` isteğe bağlıdır. Projeye Playwright bağımlılığı eklenmez. Test sunucusu sentetik erişim anahtarıyla çalışır; Web3Forms yanıtları taklit edilir ve üçüncü taraf ağ trafiği engellenir. Böylece testler gerçek e-posta göndermez. Sonuçlar `docs/investment-qa/results.json`, ekran görüntüleri aynı dizine yazılır.
