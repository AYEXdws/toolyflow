# Toolyflow

Günlük metin işleri, içerik üretimi ve hızlı hesaplamalar için çok dilli web araçları.

[Web sitesi](https://www.toolyflow.com) · [Hata bildir / öneri paylaş](https://github.com/AYEXdws/toolyflow/issues)

## Neler sunar?

- **Metin araçları:** kelime sayacı, metin temizleyici ve büyük/küçük harf dönüştürücü.
- **İçerik üretimi:** biyografi, kullanıcı adı ve hashtag üreticileri.
- **Hızlı araçlar:** QR kod, renk kodu dönüştürücü ve karar çarkı.
- **Hesaplamalar:** yüzde, indirim, yaş, beden kitle indeksi, kredi ve kira artışı araçları.
- **Sözlük:** kelime arama, kategori ve kelime detay sayfaları; Supabase bağlantısı olmadığında yerel sözlük verisine dönüş.
- **Altı dil:** Türkçe, İngilizce, İspanyolca, Almanca, Fransızca ve Portekizce.
- Dil bazlı adresler, canonical ve alternatif dil bağlantıları, yapılandırılmış veri, sitemap ve robots çıktıları.

Araçların büyük bölümü tarayıcıda çalışır. İçerik üreticileri kaynak kodundaki yerelleştirilmiş üretim mantığını kullanır; çalışmak için harici bir yapay zekâ servisi gerektirmez.

## Teknoloji ve yapı

Next.js 16 App Router, React 19, TypeScript ve Tailwind CSS 4 kullanılır.

| Dizin / dosya | Sorumluluk |
| --- | --- |
| `app/` | Sayfalar, dil düzenleri, sitemap ve robots |
| `components/tools/` | Etkileşimli araçlar |
| `components/calculators/` | Hesaplama arayüzleri |
| `lib/i18n.ts`, `lib/paths.ts` | Diller ve adres üretimi |
| `lib/creator-generators.ts` | İçerik üretim mantığı |
| `lib/dictionary.ts` | Uzak ve yerel sözlük kaynakları |
| `supabase/` | Sözlük tablo ve başlangıç verileri |
| `scripts/` | İçerik üreticisi kontrolleri |

## Yerel kurulum

Node.js ve npm gerekir. Kilit dosyasındaki bağımlılıkları kurun:

```bash
npm ci
npm run dev
```

Arayüzü [localhost:3000](http://localhost:3000) adresinde açın.

İsteğe bağlı yapılandırmayı `.env.local` içinde tutun:

| Değişken | Kullanım |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL`, `SITE_URL` | Canonical, sitemap ve paylaşım metaverileri için site adresi |
| `NEXT_PUBLIC_SUPABASE_URL` | Uzak sözlük projesinin adresi |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Sözlük için tarayıcıda kullanılabilen anahtar |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Eski anahtar biçimiyle uyumluluk |

Supabase yapılandırması, temel araçları kullanmak için zorunlu değildir. Sunucuya özel servis anahtarlarını `NEXT_PUBLIC_*` değişkenlerine koymayın.

## Kontroller

```bash
npm run check
npm run check:creator
```

`check`, ESLint, TypeScript ve üretim derlemesini sırayla çalıştırır. `check:creator`, üreticilerin dil ve çıktı sözleşmelerini ayrıca denetler; Node sürümü bu komuttaki `--experimental-strip-types` seçeneğini desteklemelidir. Bu komutların listelenmesi, son değişikliklerde çalıştırıldıkları anlamına gelmez.

## Yayınlama

Vercel'de Next.js projesi olarak veya Node sunucusunda çalıştırılabilir:

```bash
npm ci
npm run build
npm start
```

Yayın ortamındaki site adresi ayarlarını gerçek domain ile eşleştirin. Sonrasında dil yollarını, araç etkileşimlerini, `robots.txt`, `sitemap.xml` ve mobil görünümü kontrol edin. Hesaplayıcıların kullandığı güncel oran ve varsayımlar ilgili araç açıklamalarında değerlendirilmelidir.
