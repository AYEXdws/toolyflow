import type { Locale } from "@/lib/i18n";
import type { ToolSlug } from "@/lib/routes";

export type ToolSearchIntentEnhancement = {
  keywords: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const turkishSearchIntents = {
  "word-counter": {
    keywords: [
      "metin kaç kelime",
      "kelime sayısı nasıl bulunur",
      "karakter sayacı",
      "instagram karakter sayısı",
    ],
    faqs: [
      {
        question: "Bir metnin kaç kelime olduğunu nasıl bulurum?",
        answer:
          "Metni alana yapıştırdığında Toolyflow kelime ve karakter sayısını anında hesaplar. Ayrıca tahmini okuma süresini ve sık tekrarlanan kelimeleri de aynı ekranda gösterir.",
      },
      {
        question: "Instagram, X veya bir ödev için karakter sayısı nasıl hesaplanır?",
        answer:
          "Metni değiştirmeden alana yapıştırman yeterli. Boşluklu ve boşluksuz karakter sayıları ayrı gösterildiği için platform sınırını veya teslim koşulunu doğru değerle kontrol edebilirsin.",
      },
    ],
  },
  "text-cleaner": {
    keywords: [
      "metindeki fazla boşlukları silme",
      "bozuk satır sonlarını düzeltme",
      "kopyalanan metni temizleme",
      "online metin temizleyici",
    ],
    faqs: [
      {
        question: "Metindeki fazla boşluklar nasıl silinir?",
        answer:
          "Metni yapıştır, fazla boşluk temizleme seçeneğini açık bırak ve temizlenmiş sonucu kopyala. Araç kelimeleri değiştirmeden art arda gelen gereksiz boşlukları düzenler.",
      },
      {
        question: "Kopyalanan metindeki bozuk satırlar nasıl düzeltilir?",
        answer:
          "PDF, e-posta veya web sayfasından gelen düzensiz satırları alana ekle. Satır sonu ve boş paragraf kontrolleri, metni yeniden yazmadan daha okunur bir akışa dönüştürür.",
      },
    ],
  },
  "color-code-converter": {
    keywords: [
      "hex rgb çevirme",
      "rgb hex dönüştürücü",
      "renk kodu nasıl çevrilir",
      "hsl renk kodu",
    ],
    faqs: [
      {
        question: "HEX kodu RGB'ye nasıl çevrilir?",
        answer:
          "HEX alanına # işaretiyle birlikte renk kodunu gir. Araç aynı rengin RGB ve HSL karşılığını anında gösterir; istediğin formatı tek tıkla kopyalayabilirsin.",
      },
      {
        question: "RGB renk kodu HEX'e nasıl dönüştürülür?",
        answer:
          "Kırmızı, yeşil ve mavi değerlerini RGB alanına yaz. Dönüşüm tarayıcıda yapılır ve eşleşen HEX kodu renk önizlemesiyle birlikte görünür.",
      },
    ],
  },
  "percentage-calculator": {
    keywords: [
      "bir sayının yüzdesi nasıl hesaplanır",
      "bir sayı diğerinin yüzde kaçı",
      "yüzde artış hesaplama",
      "online yüzde hesaplama",
    ],
    faqs: [
      {
        question: "Bir sayının yüzdesi nasıl hesaplanır?",
        answer:
          "Tutarı ve yüzde oranını gir. Araç yüzde değerini, artışlı sonucu ve azalışlı sonucu ayrı ayrı gösterir; böylece aynı hesabı tekrar kurman gerekmez.",
      },
      {
        question: "Bir sayı diğerinin yüzde kaçı nasıl bulunur?",
        answer:
          "Parça değeri toplam değere bölünür ve sonuç 100 ile çarpılır. Araç bu işlemi girişlerinle otomatik yapar ve sonucu okunabilir biçimde gösterir.",
      },
    ],
  },
  "discount-calculator": {
    keywords: [
      "indirimli fiyat nasıl hesaplanır",
      "yüzde 20 indirim hesaplama",
      "indirim oranı hesaplama",
      "online indirim hesaplayıcı",
    ],
    faqs: [
      {
        question: "İndirimli fiyat nasıl hesaplanır?",
        answer:
          "Etiket fiyatını ve indirim oranını gir. Araç indirim tutarını fiyattan düşerek ödenecek son tutarı ve kazancını aynı anda gösterir.",
      },
      {
        question: "Yüzde 20 indirim ne kadar yapar?",
        answer:
          "Fiyat 20 ile çarpılıp 100'e bölünür; çıkan değer indirim tutarıdır. Toolyflow bu tutarı ve indirim sonrası fiyatı doğrudan hesaplar.",
      },
    ],
  },
  "case-converter": {
    keywords: [
      "büyük harfi küçük harfe çevirme",
      "küçük harfi büyük harfe çevirme",
      "camelcase oluşturma",
      "snake case dönüştürücü",
    ],
    faqs: [
      {
        question: "Metin büyük harften küçük harfe nasıl çevrilir?",
        answer:
          "Metni alana yapıştır ve küçük harf seçeneğine dokun. Dönüştürülen metin anında görünür ve kopyala düğmesiyle panoya alınır.",
      },
      {
        question: "camelCase ve snake_case nasıl oluşturulur?",
        answer:
          "Metni bir kez girip camelCase veya snake_case çıktısını seçebilirsin. Araç boşlukları ve kelime sınırlarını seçilen yazım biçimine göre otomatik düzenler.",
      },
    ],
  },
  "qr-generator": {
    keywords: [
      "linkten qr kod nasıl yapılır",
      "wifi qr kodu oluşturma",
      "ücretsiz qr kod yapma",
      "metni qr koda çevirme",
    ],
    faqs: [
      {
        question: "Linkten QR kod nasıl yapılır?",
        answer:
          "URL türünü seç, tam bağlantıyı gir ve önizlemeyi kontrol et. Oluşan QR kodu PNG veya SVG olarak indirip dijital içerikte ya da baskıda kullanabilirsin.",
      },
      {
        question: "WiFi QR kodu nasıl oluşturulur?",
        answer:
          "WiFi türünü seçip ağ adı, şifre ve güvenlik tipini gir. QR kod tarandığında desteklenen cihazlar bilgileri elle yazmadan ağa bağlanabilir.",
      },
    ],
  },
  "decision-wheel": {
    keywords: [
      "rastgele seçim nasıl yapılır",
      "isim çekiliş çarkı",
      "karar çarkı çevir",
      "rastgele isim seçici",
    ],
    faqs: [
      {
        question: "Kararsız kaldığımda rastgele seçim nasıl yaparım?",
        answer:
          "Seçeneklerini ayrı satırlar halinde ekle ve çarkı çevir. Araç tüm seçenekleri görsel olarak dağıtır ve dönüş tamamlandığında tek bir sonucu öne çıkarır.",
      },
      {
        question: "İsimlerle çekiliş çarkı nasıl hazırlanır?",
        answer:
          "Katılımcı adlarını seçenek listesine ekle, tekrar edenleri kontrol et ve çarkı başlat. Sonuç tarayıcıda rastgele seçilir; resmi çekilişlerde kendi kural ve kayıt sürecini ayrıca uygulamalısın.",
      },
    ],
  },
} satisfies Partial<Record<ToolSlug, ToolSearchIntentEnhancement>>;

export function getToolSearchIntentEnhancement(
  locale: Locale,
  slug: ToolSlug
): ToolSearchIntentEnhancement | undefined {
  return locale === "tr" ? turkishSearchIntents[slug as keyof typeof turkishSearchIntents] : undefined;
}
