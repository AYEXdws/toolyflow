import type { ToolContentBlock } from "@/lib/utility-tool-localizations";

export const trCalculatorPrefix = "hesaplayici";
export const trCalculatorCategorySegment = "hesaplayicilar";

export const trCalculatorSlugs = [
  "kredi-hesaplayici",
  "bmi-hesaplayici",
  "yas-hesaplayici",
  "yuzde-hesaplayici",
  "kira-artis-hesaplayici",
] as const;

export type TrCalculatorSlug = (typeof trCalculatorSlugs)[number];

export function getTrCalculatorCategoryPath() {
  return `/tr/${trCalculatorCategorySegment}`;
}

export function getTrCalculatorPath(slug: TrCalculatorSlug) {
  return `/tr/${trCalculatorPrefix}/${slug}`;
}

type TrCalculatorEntry = {
  slug: TrCalculatorSlug;
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  accentLabel: string;
  highlights: string[];
  structuredDescription: string;
  content: ToolContentBlock;
  related: TrCalculatorSlug[];
};

export const trCalculatorCategory = {
  slug: "calculators",
  title: "Hesaplayıcılar",
  eyebrow: "Günlük hesap işleri",
  description: "Kredi, BMI, yaş, yüzde ve kira artışı gibi hesapları tek yerde hızlıca çöz.",
  metaTitle: "Hesaplayıcılar | Toolyflow",
  metaDescription: "Kredi, BMI, yaş, yüzde ve kira artışı için ücretsiz online hesaplayıcıları keşfet.",
  keywords: ["hesaplayıcılar", "kredi hesaplayıcı", "bmi hesaplayıcı", "yaş hesaplayıcı", "yüzde hesaplayıcı", "kira artış hesaplayıcı"],
  highlights: [
    "Günlük hayatta sık açılan hesap araçlarını tek kategoride toplar.",
    "Hesap sonucunu temiz kartlarla ve anlaşılır ara değerlerle gösterir.",
  ],
} as const;

const calculatorContent: Record<TrCalculatorSlug, Omit<TrCalculatorEntry, "slug" | "related"> & { related: TrCalculatorSlug[] }> = {
  "kredi-hesaplayici": {
    icon: "🏦",
    name: "Kredi Hesaplayıcı",
    shortDescription: "Aylık taksit, toplam geri ödeme ve faiz yükünü saniyeler içinde gör.",
    description: "Kredi tutarı, aylık faiz oranı ve vadeyi girerek aylık taksiti, toplam geri ödemeyi ve ödeme tablosunu anında hesapla.",
    metaTitle: "Kredi Hesaplayıcı — Aylık Taksit Hesapla | Toolyflow",
    metaDescription: "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit, toplam geri ödeme ve faiz maliyetini ücretsiz hesapla.",
    keywords: ["kredi hesaplayıcı", "aylık taksit hesaplama", "faiz hesaplama", "kredi ödeme planı"],
    eyebrow: "Finans hesap aracı",
    accentLabel: "Kredi",
    highlights: [
      "Aylık taksiti ve toplam geri ödemeyi aynı ekranda gösterir.",
      "Ödeme tablosu ile ay bazında faiz ve anapara dağılımını açar.",
    ],
    structuredDescription: "Kredi tutarı, aylık faiz oranı ve vade üzerinden aylık taksit ve toplam ödeme hesaplayan ücretsiz kredi hesaplayıcı.",
    content: {
      howToUseTitle: "Kredi hesaplayıcı nasıl kullanılır?",
      howToUseDescription: "Üç alanı doldur ve aylık taksitten ödeme tablosuna kadar tüm özeti tek ekranda gör.",
      howToUseSteps: [
        { title: "Kredi tutarını gir", body: "Kredi çekmeyi düşündüğün toplam tutarı TL olarak yaz." },
        { title: "Faiz oranı ve vadeyi ekle", body: "Aylık faiz oranını yüzde olarak, vade süresini ay olarak gir." },
        { title: "Ödeme planını incele", body: "Aylık taksiti, toplam geri ödemeyi ve ay bazlı tabloyu birlikte değerlendir." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Kredi tekliflerini karşılaştırırken veya kaba bir ödeme planı çıkarmak istediğinde en çok işine yarar.",
      useCases: [
        { title: "İhtiyaç kredisi karşılaştırması", description: "Aynı tutar için farklı faiz ve vade senaryolarını hızlıca karşılaştır." },
        { title: "Aylık bütçe planlaması", description: "Taksit tutarının aylık giderlerine uyup uymadığını hızlıca kontrol et." },
        { title: "Toplam maliyet kontrolü", description: "Sadece taksite değil, toplam geri ödeme ve faiz yüküne de bak." },
      ],
      examplesTitle: "Örnekler",
      examplesDescription: "Sağlam bir kredi hesaplayıcı aylık sonucu ve ödeme planını birlikte göstermelidir.",
      examples: [
        {
          title: "24 ay ihtiyaç kredisi",
          inputLabel: "Kurulum",
          input: "Kredi tutarı: 250.000 TL\nFaiz: %3,19\nVade: 24 ay",
          outputLabel: "Çıktı",
          output: "Aylık taksit, toplam geri ödeme ve ödeme tablosu birlikte oluşur.",
          note: "Teklif karşılaştırırken ilk bakışta faydalıdır.",
        },
      ],
      faqTitle: "Kredi hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Aylık taksit nasıl hesaplanır?", answer: "Standart eşit taksit formülü kullanılır; anapara, aylık faiz ve vade birlikte hesaba katılır." },
        { question: "Faiz 0 olursa ne olur?", answer: "Toplam kredi tutarı vade sayısına bölünür ve toplam faiz 0 TL görünür." },
        { question: "Bu araç resmi teklif yerine geçer mi?", answer: "Hayır. Nihai karar için bankanın resmi ödeme planını ve ek masrafları ayrıca incele." },
      ],
    },
    related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
  },
  "bmi-hesaplayici": {
    icon: "⚖️",
    name: "BMI Hesaplayıcı",
    shortDescription: "Boy ve kilona göre vücut kitle indeksini ve kısa yorumunu hemen gör.",
    description: "Boy ve kilo bilgilerini girerek BMI değerini, kategori yorumunu ve renkli göstergeyi anında öğren.",
    metaTitle: "BMI Hesaplayıcı — Vücut Kitle İndeksi Hesapla | Toolyflow",
    metaDescription: "Boy ve kilona göre BMI değerini, kilo kategorini ve kısa yorumunu anında gör. Ücretsiz BMI hesaplayıcı.",
    keywords: ["bmi hesaplayıcı", "vücut kitle indeksi", "boy kilo endeksi", "bmi hesaplama"],
    eyebrow: "Sağlık hesap aracı",
    accentLabel: "BMI",
    highlights: [
      "BMI değerini renkli kategori etiketiyle gösterir.",
      "Sonucun yanına kısa ve anlaşılır yorum ekler.",
    ],
    structuredDescription: "Boy ve kilo bilgisine göre vücut kitle indeksi hesaplayan ücretsiz BMI hesaplayıcı.",
    content: {
      howToUseTitle: "BMI hesaplayıcı nasıl kullanılır?",
      howToUseDescription: "Boy ve kilo bilgisini gir, istersen cinsiyet seç ve sonucu tek kartta gör.",
      howToUseSteps: [
        { title: "Boy ve kiloyu yaz", body: "Boyunu santimetre, kilonu kilogram olarak gir." },
        { title: "İstersen cinsiyet seç", body: "Cinsiyet seçimi sonucu değiştirmez; yalnızca açıklama metnini kişiselleştirir." },
        { title: "BMI sonucunu oku", body: "Değer, kategori ve kısa yorum birlikte görünür." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Genel bir fikir edinmek istediğinde veya boy-kilo ilişkisini hızlı görmek istediğinde uygundur.",
      useCases: [
        { title: "Kişisel sağlık takibi", description: "Kilon değiştikçe BMI değerinin hangi aralıkta kaldığını kontrol et." },
        { title: "Diyet ve spor başlangıcı", description: "Yeni bir sürece başlarken kaba bir referans değeri gör." },
        { title: "Hızlı ön değerlendirme", description: "Detaylı ölçüm öncesinde boy-kilo ilişkisini tek sayıda özetle." },
      ],
      examplesTitle: "Örnekler",
      examplesDescription: "BMI sonucu tek başına teşhis değildir ama pratik bir ilk değerlendirme sunar.",
      examples: [
        {
          title: "Günlük kontrol",
          inputLabel: "Kurulum",
          input: "Boy: 175 cm\nKilo: 70 kg",
          outputLabel: "Çıktı",
          output: "BMI değeri, kategori ve kısa yorum tek kartta görünür.",
          note: "Hızlı ve anlaşılır bir ilk bakış sağlar.",
        },
      ],
      faqTitle: "BMI hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "BMI neyi gösterir?", answer: "Boy ve kilo ilişkisini tek sayıda özetler ve genel kilo kategorisini anlamaya yardımcı olur." },
        { question: "Cinsiyet sonucu değiştirir mi?", answer: "Hayır. Cinsiyet alanı yalnızca ek açıklama metnini kişiselleştirir." },
        { question: "BMI tek başına yeterli mi?", answer: "Hayır. Sağlık değerlendirmesi için ek ölçümler ve uzman görüşü gerekebilir." },
      ],
    },
    related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
  },
  "yas-hesaplayici": {
    icon: "🎂",
    name: "Yaş Hesaplayıcı",
    shortDescription: "Tam yaşını yıl, ay, gün olarak ve yaşadığın toplam günle birlikte öğren.",
    description: "Doğum tarihini girerek tam yaşını, yaşadığın gün sayısını ve sonraki doğum gününe kalan süreyi hesapla.",
    metaTitle: "Yaş Hesaplayıcı — Tam Yaşını Hesapla | Toolyflow",
    metaDescription: "Doğum tarihine göre tam yaşını yıl, ay ve gün olarak hesapla. Yaşadığın gün sayısını da anında gör.",
    keywords: ["yaş hesaplayıcı", "tam yaş hesaplama", "doğum tarihi hesaplama", "yaş günü hesaplama"],
    eyebrow: "Zaman hesap aracı",
    accentLabel: "Yaş",
    highlights: [
      "Tam yaşı yıl, ay ve gün olarak verir.",
      "Yaşadığın toplam gün sayısı ve sonraki doğum günü bilgisini ekler.",
    ],
    structuredDescription: "Doğum tarihine göre tam yaş, yaşanan gün sayısı ve bir sonraki doğum gününe kalan süreyi hesaplayan yaş hesaplayıcı.",
    content: {
      howToUseTitle: "Yaş hesaplayıcı nasıl kullanılır?",
      howToUseDescription: "Doğum tarihini seç ve tam yaşını gün detayına kadar anında gör.",
      howToUseSteps: [
        { title: "Doğum tarihini seç", body: "Takvim alanından doğum gününü, ayını ve yılını belirle." },
        { title: "Hesapla butonuna bas", body: "Araç bugünün tarihine göre tam yaşını oluşturur." },
        { title: "Detayları incele", body: "Toplam gün sayısı ve sonraki doğum gününe kalan süreyi alt kartlarda gör." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Resmi formlar, başvurular veya kişisel merak için en sık açılan hesap araçlarından biridir.",
      useCases: [
        { title: "Resmi başvurular", description: "Tam yaş gerektiğinde yaklaşık yıl hesabı yerine net sonucu kullan." },
        { title: "Kişisel takip", description: "Yaşadığın toplam gün sayısını ve doğum gününe kalan zamanı gör." },
        { title: "Yaş sınırı kontrolü", description: "Belirli bir yaş eşiğine ulaşıp ulaşmadığını daha net incele." },
      ],
      examplesTitle: "Örnekler",
      examplesDescription: "Yıl farkı tek başına yeterli olmadığında tam yaş hesabı öne çıkar.",
      examples: [
        {
          title: "Doğum tarihi kontrolü",
          inputLabel: "Kurulum",
          input: "Doğum tarihi: 14.09.1998",
          outputLabel: "Çıktı",
          output: "Tam yaş, yaşanan gün sayısı ve sonraki doğum gününe kalan süre görünür.",
          note: "Form doldururken işini kolaylaştırır.",
        },
      ],
      faqTitle: "Yaş hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Tam yaş nasıl hesaplanır?", answer: "Doğum tarihi ile bugünün tarihi karşılaştırılır; yıl, ay ve gün farkı ayrı ayrı hesaplanır." },
        { question: "Sonraki doğum gününe kalan gün nasıl bulunur?", answer: "Mevcut yıl içindeki doğum günün ile bugünün tarihi karşılaştırılır; geçtiyse sonraki yıl baz alınır." },
        { question: "Bugünden farklı bir tarihe göre yaş hesaplanabilir mi?", answer: "Bu sürüm bugünün tarihine göre hesap yapar. Gerekirse ileride referans tarihi desteği eklenebilir." },
      ],
    },
    related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
  },
  "yuzde-hesaplayici": {
    icon: "📐",
    name: "Yüzde Hesaplayıcı",
    shortDescription: "Bir sayının yüzdesini bul, oran hesapla veya yüzde ekleyip çıkar.",
    description: "Üç farklı modla yüzde alma, oran bulma ve yüzde ekleme-çıkarma işlemlerini tek ekranda yap.",
    metaTitle: "Yüzde Hesaplayıcı — Online Yüzde Hesapla | Toolyflow",
    metaDescription: "Bir sayının yüzdesini bul, oran hesapla veya yüzde ekleyip çıkar. 3 modlu ücretsiz online yüzde hesaplayıcı.",
    keywords: ["yüzde hesaplayıcı", "online yüzde hesaplama", "oran hesaplama", "yüzde artış hesaplama"],
    eyebrow: "Matematik hesap aracı",
    accentLabel: "Yüzde",
    highlights: [
      "Tek araç içinde üç farklı yüzde modu sunar.",
      "Sonucu kısa açıklamayla birlikte verir.",
    ],
    structuredDescription: "Bir sayının yüzdesini, oranını veya yüzdeye göre artış ve azalışını hesaplayan ücretsiz yüzde hesaplayıcı.",
    content: {
      howToUseTitle: "Yüzde hesaplayıcı nasıl kullanılır?",
      howToUseDescription: "Yapmak istediğin yüzde işlemini seç, değerleri yaz ve sonucu tek kartta gör.",
      howToUseSteps: [
        { title: "İşlem modunu seç", body: "Yüzde alma, oran bulma veya yüzde ekle-çıkar modlarından birini seç." },
        { title: "Değerleri gir", body: "İki sayıyı yaz; gerekirse işlem yönünü belirle." },
        { title: "Sonucu yorumla", body: "Araç sonucu ve kısa açıklamayı birlikte verir." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "İndirim, zam, rapor ve hızlı oran kontrolü gibi günlük işlemler için çok uygundur.",
      useCases: [
        { title: "İndirim ve zam hesabı", description: "Bir fiyatın yüzde kaç arttığını veya azaldığını hızlıca gör." },
        { title: "Raporlama", description: "İki sayı arasındaki yüzde ilişkiyi ek hesap yapmadan öğren." },
        { title: "Bütçe ve planlama", description: "Bir tutarın belli bir yüzdesini hızlıca çıkar." },
      ],
      examplesTitle: "Örnekler",
      examplesDescription: "Net sonuç ve kısa açıklama günlük yüzde hesaplarında en çok iş gören kombinasyondur.",
      examples: [
        {
          title: "Bir tutarın yüzdesi",
          inputLabel: "Kurulum",
          input: "Sayı: 250\nYüzde: 20",
          outputLabel: "Çıktı",
          output: "250 sayısının %20 değeri 50 eder.",
          note: "Fiyat, bütçe ve pay hesabında pratiktir.",
        },
      ],
      faqTitle: "Yüzde hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Hangi mod ne işe yarar?", answer: "İlk mod bir sayının yüzdesini bulur, ikinci mod oranı hesaplar, üçüncü mod ise yüzde ekleme veya çıkarma yapar." },
        { question: "Negatif değer girilebilir mi?", answer: "Teknik olarak evet; ama çoğu günlük kullanım için pozitif sayılar daha anlamlıdır." },
        { question: "Sonuç neden ondalıklı çıkabilir?", answer: "Bazı yüzde işlemleri tam sayıya bölünmez; daha doğru sonuç için ondalık gösterilir." },
      ],
    },
    related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
  },
  "kira-artis-hesaplayici": {
    icon: "🏠",
    name: "Kira Artış Hesaplayıcı",
    shortDescription: "Artış oranına göre yeni kira tutarını ve dönemsel artış tablosunu anında gör.",
    description: "Mevcut kira, artış oranı ve artış sayısını girerek yeni kira bedelini ve artış tablosunu hesapla.",
    metaTitle: "Kira Artış Hesaplayıcı — Yeni Kira Tutarını Hesapla | Toolyflow",
    metaDescription: "Mevcut kira ve artış oranına göre yeni kira tutarını, artış miktarını ve dönemsel tabloyu ücretsiz hesapla.",
    keywords: ["kira artış hesaplayıcı", "yeni kira hesaplama", "kira zam oranı", "kira hesaplama"],
    eyebrow: "Finans hesap aracı",
    accentLabel: "Kira",
    highlights: [
      "Yeni kira bedelini ve toplam artış tutarını birlikte gösterir.",
      "Birden fazla dönem için bileşik artış tablosu oluşturur.",
    ],
    structuredDescription: "Mevcut kira tutarı, artış oranı ve artış sayısına göre yeni kira bedelini hesaplayan kira artış hesaplayıcı.",
    content: {
      howToUseTitle: "Kira artış hesaplayıcı nasıl kullanılır?",
      howToUseDescription: "Mevcut kira tutarını, artış oranını ve kaç kez artış uygulanacağını girerek sonucu anında gör.",
      howToUseSteps: [
        { title: "Mevcut kirayı yaz", body: "Başlangıç kira bedelini TL olarak gir." },
        { title: "Artış oranı ve sayısını ekle", body: "Yüzde oranını ve kaç dönem artış uygulanacağını belirt." },
        { title: "Tabloyu incele", body: "Her dönemde eski kira, artış tutarı ve yeni kira bedelini birlikte gör." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Kira yenileme dönemlerinde hızlı senaryo çıkarmak ve artış etkisini görmek için idealdir.",
      useCases: [
        { title: "Yıllık kira kontrolü", description: "Artış oranına göre yeni kira tutarını hızlıca hesapla." },
        { title: "Bileşik artış etkisi", description: "Birden fazla dönem artış uygulandığında sonucun nereye gittiğini gör." },
        { title: "Ev sahibi / kiracı planlaması", description: "Artış miktarını ve yeni kira düzeyini önceden netleştir." },
      ],
      examplesTitle: "Örnekler",
      examplesDescription: "Kira artışında en kritik şey yeni bedeli ve dönemsel farkı birlikte görebilmektir.",
      examples: [
        {
          title: "Yıllık artış senaryosu",
          inputLabel: "Kurulum",
          input: "Mevcut kira: 15.000 TL\nArtış oranı: %25\nArtış sayısı: 2",
          outputLabel: "Çıktı",
          output: "Yeni kira tutarı, toplam artış ve dönemsel tablo birlikte görünür.",
          note: "Bileşik etkiyi hızlıca görmeyi sağlar.",
        },
      ],
      faqTitle: "Kira artış hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Artış sayısı ne anlama gelir?", answer: "Aynı oranın kaç dönem üst üste uygulanacağını gösterir. Sonuç bileşik olarak hesaplanır." },
        { question: "Bu araç resmi TÜFE hesabı yerine geçer mi?", answer: "Hayır. Araç senin girdiğin oranla hesap yapar; resmi oranı ayrıca kontrol etmen gerekir." },
        { question: "Tablo neyi gösterir?", answer: "Her dönemde önceki kira, artış tutarı ve yeni kira değerini ayrı ayrı listeler." },
      ],
    },
    related: ["kredi-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
  },
};

export function getTrCalculatorEntries() {
  return trCalculatorSlugs.map((slug) => ({
    slug,
    ...calculatorContent[slug],
  }));
}

export function getTrCalculatorEntry(slug: string) {
  if (!trCalculatorSlugs.includes(slug as TrCalculatorSlug)) {
    return null;
  }

  const calculator = calculatorContent[slug as TrCalculatorSlug];

  return {
    slug: slug as TrCalculatorSlug,
    ...calculator,
    relatedEntries: calculator.related.map((relatedSlug) => ({
      slug: relatedSlug,
      ...calculatorContent[relatedSlug],
    })),
  };
}
