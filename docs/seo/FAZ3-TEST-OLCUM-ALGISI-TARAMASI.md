# Faz 3 – Test / Ölçüm Hizmeti Algısı Taraması (YAPILACAK, UYGULANMADI)

Durum: Planlandı. Faz 2 tamamlanmadan uygulanmayacak. Onay olmadan içerik değişikliği yapılmaz.

## Konumlandırma ilkesi
Öztoprak Enerji bir test/ölçüm firması değildir. Test cihazlarıyla saha testi yaptığı izlenimi verilmez.
Gerekli saha testleri uygun üçüncü taraf uzmanlarca yapılır. Öztoprak Enerji test kapsamını belirler,
süreci gözlemler (witness) ve sonuçları yatırımcı açısından teknik olarak yorumlar.
(Çerçeve her sayfaya mekanik eklenmez; yalnızca test/ölçüm konusunun geçtiği ve algı riski olan yerlerde kullanılır.)

## Taranacak konu başlıkları
- Saha kabul testi (SAT / Site Acceptance Test)
- Fabrika kabul testi (FAT / Factory Acceptance Test)
- FAT/SAT genel ifadeleri
- IV Curve (IV eğrisi) ölçümü
- İzolasyon direnci ölçümü
- Topraklama ölçümü
- String testleri (Voc/Isc)
- Güç kalitesi ölçümü / analizi
- Termal kamera / IR inceleme
- Benzeri tüm ölçüm / test hizmeti algısı yaratabilecek ifadeler

## Başlangıç noktaları (Faz 2 sırasında tespit edildi, henüz değiştirilmedi)
- `content/services.ts` (~satır 490): SAT kapsamı – "Solar string testing and IV curve tracing", "Protection relay on-site testing"
- `app/[locale]/services/[slug]/page.tsx` (~464, 811–842, 877–886): FAT/SAT içerikleri, insulation resistance, IV curve tracing, earthing
- Hizmetler: fabrika-kabul-testi, saha-kabul-testi, factory-acceptance-test, site-acceptance-test (TR/EN)
- `app/[locale]/blog/[slug]/page.tsx`: kenar çubuğunda "FAT/SAT" içeren ücretsiz kontrol listesi metni
- Blog yazıları, kaynaklar (resources), ücretsiz kontrol listesi sayfaları, schema (Service/OfferCatalog) çıktıları
- `content/investments.ts`: `satilik-ges` "Test kapsamı…" cümlesi (Dilim F kapsamında ele alınacak)

- `content/investments.ts` → `ges-degerleme` (bölüm "Panel degradasyonu ve inverter durumu"): "Degradasyon varsayımı üretici garantileri ve mümkün olduğunda saha ölçümleriyle karşılaştırılır." Ölçümü kimin yaptığı belirtilmemiş; Faz 3'te onaylı üçüncü taraf çerçevesiyle netleştirilecek (Faz 2 kapsamında DEĞİŞTİRİLMEDİ).
- `content/investments.ts` → `satilik-ges` bölüm başlığı "Satın almadan önce saha doğrulaması" (içerik düzeltildi; başlık Faz 3'te gözden geçirilebilir).

## Çıktı beklentisi
Sayfa/URL bazlı bulgu tablosu (mevcut ifade, algı riski, önerilen yeniden yazım, URL değişikliği gerekip gerekmediği),
onay sonrası uygulama.
