import type { Locale } from "@/lib/i18n";

export type ToolContentBlock = {
  howToUseTitle: string;
  howToUseDescription: string;
  howToUseSteps: Array<{ title: string; body: string }>;
  useCasesTitle: string;
  useCasesDescription: string;
  useCases: Array<{ title: string; description: string }>;
  examplesTitle: string;
  examplesDescription: string;
  examples: Array<{
    title: string;
    inputLabel: string;
    input: string;
    outputLabel: string;
    output: string;
    note: string;
  }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export type UtilityLocalizedTool = {
  slug: "color-code-converter" | "percentage-calculator" | "discount-calculator";
  name: string;
  shortDescription: string;
  description: string;
  eyebrow: string;
  accentLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  highlights: string[];
  structuredDescription: string;
  content: ToolContentBlock;
};

export type ColorCodeConverterLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  previewLabel: string;
  clearText: string;
  copy: string;
  copied: string;
  invalid: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
};

export type PercentageCalculatorLabels = {
  modeLabel: string;
  modes: {
    percentOf: string;
    whatPercent: string;
    changeBy: string;
  };
  firstValue: string;
  secondValue: string;
  percentageValue: string;
  helper: string;
  copy: string;
  copied: string;
  result: string;
  formula: string;
  clear: string;
};

export type DiscountCalculatorLabels = {
  originalPrice: string;
  discountRate: string;
  extraDiscount: string;
  helper: string;
  copy: string;
  copied: string;
  clear: string;
  results: {
    finalPrice: string;
    totalSaving: string;
    totalDiscount: string;
    priceAfterMainDiscount: string;
  };
};

const colorCodeContentEn: ToolContentBlock = {
  howToUseTitle: "How to use the color code converter",
  howToUseDescription:
    "Paste one valid color value, then copy the exact format you need for design, CSS, or quick handoff.",
  howToUseSteps: [
    {
      title: "Paste or pick a color",
      body: "Enter a HEX, RGB, or HSL value, or use the color picker for a fast visual starting point.",
    },
    {
      title: "Check the converted formats",
      body: "Read the live HEX, RGB, and HSL values side by side without opening another tool.",
    },
    {
      title: "Copy the exact code",
      body: "Use the copy button on the format that fits your CSS, design note, or handoff.",
    },
  ],
  useCasesTitle: "Best use cases",
  useCasesDescription:
    "This tool is most useful when one valid color already exists and you need it in another format quickly.",
  useCases: [
    {
      title: "CSS and frontend styling",
      description: "Convert picked colors into HEX, RGB, or HSL before dropping them into a stylesheet.",
    },
    {
      title: "Creator brand kits",
      description: "Keep profile, thumbnail, and social colors consistent when passing values between tools.",
    },
    {
      title: "Quick design handoff",
      description: "Share the same color in multiple formats without rewriting values manually.",
    },
  ],
  examplesTitle: "Examples",
  examplesDescription: "A good color converter should keep the preview and every common code format in one place.",
  examples: [
    {
      title: "Brand accent color",
      inputLabel: "Input",
      input: "#3B82F6",
      outputLabel: "Output",
      output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)",
      note: "Useful when one brand color needs to move between CSS and design tools.",
    },
    {
      title: "Social card background",
      inputLabel: "Input",
      input: "rgb(10, 10, 15)",
      outputLabel: "Output",
      output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)",
      note: "Helpful for rebuilding the same dark surface across multiple screens.",
    },
  ],
  faqTitle: "Color code converter FAQ",
  faqs: [
    {
      question: "Which color formats does the tool support?",
      answer: "You can paste HEX, RGB, or HSL values and the page converts them into the other common formats.",
    },
    {
      question: "Can I pick a color visually?",
      answer: "Yes. The tool includes a color picker so you can start visually and still copy exact code values.",
    },
    {
      question: "Why keep HEX, RGB, and HSL together?",
      answer: "Different design and frontend setups prefer different formats, so keeping them together reduces friction.",
    },
  ],
};

const percentageCalculatorContentEn: ToolContentBlock = {
  howToUseTitle: "How to use the percentage calculator",
  howToUseDescription:
    "Choose the question you want to answer first, then enter the numbers and copy the final result if needed.",
  howToUseSteps: [
    {
      title: "Pick the calculation mode",
      body: "Use the correct mode for finding a percentage of a value, reverse percentage, or percentage-based increase and decrease.",
    },
    {
      title: "Enter the numbers once",
      body: "Fill in the values and let the page update the result and formula live without any manual recalculation.",
    },
    {
      title: "Read or copy the result",
      body: "Use the result card when you need a quick answer for pricing, planning, reporting, or content math.",
    },
  ],
  useCasesTitle: "Best use cases",
  useCasesDescription:
    "A percentage calculator is most useful when the math is simple but you need a clean answer immediately.",
  useCases: [
    {
      title: "Creator growth checks",
      description: "Calculate follower, reach, or revenue changes without opening a spreadsheet.",
    },
    {
      title: "Budget and pricing math",
      description: "Find a percentage of any amount or understand what share one value represents of another.",
    },
    {
      title: "Quick reporting",
      description: "Use the formula line to verify the result before sharing it in a note, doc, or message.",
    },
  ],
  examplesTitle: "Examples",
  examplesDescription: "The strongest experience is a direct answer plus a readable formula.",
  examples: [
    {
      title: "Find a percentage of a value",
      inputLabel: "Setup",
      input: "Mode: 20% of a number\nPercentage: 20\nValue: 250",
      outputLabel: "Result",
      output: "50",
      note: "A fast answer for budgets, fees, and target splits.",
    },
    {
      title: "Find percentage change",
      inputLabel: "Setup",
      input: "Mode: increase/decrease by %\nValue: 120\nPercentage: 15",
      outputLabel: "Result",
      output: "138",
      note: "Useful when planning price updates or simple growth scenarios.",
    },
  ],
  faqTitle: "Percentage calculator FAQ",
  faqs: [
    {
      question: "Which calculations are included?",
      answer: "You can find a percentage of a value, find what percent one number is of another, or change a value by a percentage.",
    },
    {
      question: "Does the result update live?",
      answer: "Yes. The result and formula update as soon as the values change.",
    },
    {
      question: "Can I use decimals?",
      answer: "Yes. Decimal values work, which makes the tool useful for pricing, analytics, and content planning.",
    },
  ],
};

const discountCalculatorContentEn: ToolContentBlock = {
  howToUseTitle: "How to use the discount calculator",
  howToUseDescription:
    "Enter the original price and discount rates once, then read the final price, total savings, and stacked discount effect immediately.",
  howToUseSteps: [
    {
      title: "Enter the original price",
      body: "Start with the base price before any discount is applied.",
    },
    {
      title: "Set the main and optional extra discount",
      body: "Use the extra discount field when a coupon or second promo applies after the first markdown.",
    },
    {
      title: "Read the final price and savings",
      body: "Use the result cards to see the new price, total savings, and total discount rate in one place.",
    },
  ],
  useCasesTitle: "Best use cases",
  useCasesDescription:
    "This tool is best when you want a fast and trustworthy answer for a sale or bundle scenario.",
  useCases: [
    {
      title: "Shopping and deal checks",
      description: "See the real final price instead of estimating stacked discounts in your head.",
    },
    {
      title: "Creator promo planning",
      description: "Model the effect of a launch discount plus an extra coupon before sharing a promo code.",
    },
    {
      title: "Price communication",
      description: "Use the exact savings and final price in captions, landing pages, or product notes.",
    },
  ],
  examplesTitle: "Examples",
  examplesDescription: "A useful discount calculator should make stacked discounts easy to understand.",
  examples: [
    {
      title: "Single sale price",
      inputLabel: "Setup",
      input: "Original price: 1200\nDiscount: 25%",
      outputLabel: "Result",
      output: "Final price: 900\nTotal saving: 300",
      note: "Good when you want the sale answer without manual subtraction.",
    },
    {
      title: "Sale + coupon",
      inputLabel: "Setup",
      input: "Original price: 950\nDiscount: 20%\nExtra discount: 10%",
      outputLabel: "Result",
      output: "Final price: 684\nTotal saving: 266",
      note: "Useful for checkout-style scenarios where the second discount applies after the first.",
    },
  ],
  faqTitle: "Discount calculator FAQ",
  faqs: [
    {
      question: "Can I add a second discount?",
      answer: "Yes. The extra discount field lets you model coupon-style stacked discounts after the main sale rate.",
    },
    {
      question: "Does the total discount simply add up?",
      answer: "Not always. A second discount is applied on the reduced price, which is why the tool shows the real combined outcome.",
    },
    {
      question: "What should I copy from the result?",
      answer: "Most people use the final price and total savings, but the after-main-discount value is also useful for promo planning.",
    },
  ],
};

const localizedColorCodeContent: Record<Locale, ToolContentBlock> = {
  en: colorCodeContentEn,
  tr: {
    howToUseTitle: "Renk kodu dönüştürücü nasıl kullanılır",
    howToUseDescription:
      "Tek bir geçerli renk kodu gir, canlı önizlemeyi kontrol et ve tasarım ya da CSS için doğru formatı kopyala.",
    howToUseSteps: [
      {
        title: "Renk değerini gir veya seç",
        body: "HEX, RGB ya da HSL değeri girin veya hızlı başlamak için renk seçiciyi kullanın.",
      },
      {
        title: "Formatları karşılaştır",
        body: "HEX, RGB ve HSL çıktısını aynı anda görün ve başka araca geçmeden kontrol edin.",
      },
      {
        title: "Gerekli kodu kopyala",
        body: "CSS, tasarım notu ya da marka rengi listesi için ihtiyacınız olan formatı tek tıkla alın.",
      },
    ],
    useCasesTitle: "En iyi kullanım senaryoları",
    useCasesDescription:
      "Bu araç en çok elinizde bir renk varken onu başka formata hızlıca çevirmek istediğinizde iş görür.",
    useCases: [
      {
        title: "CSS ve frontend stilleri",
        description: "Seçtiğiniz rengi doğrudan HEX, RGB veya HSL olarak stil dosyasına taşıyın.",
      },
      {
        title: "Creator brand kitleri",
        description: "Profil, thumbnail ve sosyal medya renklerini araçlar arasında tutarlı tutun.",
      },
      {
        title: "Hızlı tasarım aktarımı",
        description: "Aynı rengi farklı formatlarda paylaşın; değeri elle yeniden yazmak zorunda kalmayın.",
      },
    ],
    examplesTitle: "Örnekler",
    examplesDescription:
      "İyi bir renk dönüştürücü, önizlemeyi ve yaygın renk kodlarını tek ekranda tutmalıdır.",
    examples: [
      {
        title: "Marka vurgu rengi",
        inputLabel: "Girdi",
        input: "#3B82F6",
        outputLabel: "Çıktı",
        output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)",
        note: "Aynı rengi CSS ve tasarım araçları arasında taşırken kullanışlıdır.",
      },
      {
        title: "Sosyal kart arka planı",
        inputLabel: "Girdi",
        input: "rgb(10, 10, 15)",
        outputLabel: "Çıktı",
        output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)",
        note: "Aynı koyu yüzeyi farklı ekranlarda tekrar kurarken işinizi hızlandırır.",
      },
    ],
    faqTitle: "Renk kodu dönüştürücü sık sorulan sorular",
    faqs: [
      {
        question: "Hangi renk formatları destekleniyor?",
        answer: "HEX, RGB ve HSL değerleri girilebilir; araç bunları diğer yaygın formatlara çevirir.",
      },
      {
        question: "Rengi görsel olarak seçebilir miyim?",
        answer: "Evet. Renk seçici sayesinde önce tonu seçip sonra net kodları kopyalayabilirsiniz.",
      },
      {
        question: "HEX, RGB ve HSL’yi birlikte görmek neden önemli?",
        answer: "Farklı tasarım ve frontend akışları farklı format ister; hepsini birlikte görmek sürtünmeyi azaltır.",
      },
    ],
  },
  es: {
    howToUseTitle: "Cómo usar el conversor de colores",
    howToUseDescription:
      "Pega un color válido, revisa la vista previa y copia el formato exacto que necesitas para diseño o CSS.",
    howToUseSteps: [
      { title: "Pega o elige un color", body: "Introduce un valor HEX, RGB o HSL, o usa el selector visual para empezar rápido." },
      { title: "Revisa los formatos convertidos", body: "Lee HEX, RGB y HSL en la misma pantalla sin abrir otro conversor." },
      { title: "Copia el código correcto", body: "Usa el botón de copia en el formato que mejor encaja con tu flujo de diseño o frontend." },
    ],
    useCasesTitle: "Mejores casos de uso",
    useCasesDescription: "Es más útil cuando ya tienes un color válido y solo necesitas moverlo a otro formato.",
    useCases: [
      { title: "CSS y estilos frontend", description: "Convierte colores a HEX, RGB o HSL antes de llevarlos a una hoja de estilos." },
      { title: "Kits de marca para creadores", description: "Mantén coherentes los colores de perfil, thumbnail y redes entre varias herramientas." },
      { title: "Handoff de diseño rápido", description: "Comparte el mismo color en varios formatos sin reescribir valores a mano." },
    ],
    examplesTitle: "Ejemplos",
    examplesDescription: "Un buen conversor de colores debe mantener vista previa y códigos comunes en el mismo lugar.",
    examples: [
      { title: "Color de marca", inputLabel: "Entrada", input: "#3B82F6", outputLabel: "Salida", output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)", note: "Útil cuando un color de marca se mueve entre CSS y diseño." },
      { title: "Fondo de tarjeta social", inputLabel: "Entrada", input: "rgb(10, 10, 15)", outputLabel: "Salida", output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)", note: "Sirve para reconstruir el mismo fondo oscuro en varias pantallas." },
    ],
    faqTitle: "Preguntas frecuentes del conversor de colores",
    faqs: [
      { question: "¿Qué formatos admite?", answer: "Puedes introducir valores HEX, RGB o HSL y la página los convierte a los otros formatos comunes." },
      { question: "¿Puedo elegir un color visualmente?", answer: "Sí. El selector de color te deja empezar de forma visual y seguir copiando códigos exactos." },
      { question: "¿Por qué ver HEX, RGB y HSL juntos?", answer: "Porque distintos flujos de diseño y frontend prefieren formatos distintos, y verlos juntos ahorra tiempo." },
    ],
  },
  de: {
    howToUseTitle: "So nutzt du den Farbcode-Konverter",
    howToUseDescription:
      "Füge einen gültigen Farbwert ein, prüfe die Vorschau und kopiere das passende Format für Design oder CSS.",
    howToUseSteps: [
      { title: "Farbe einfügen oder wählen", body: "Gib HEX, RGB oder HSL ein oder nutze den Picker für einen schnellen Start." },
      { title: "Konvertierte Formate prüfen", body: "Lies HEX, RGB und HSL direkt nebeneinander, ohne ein weiteres Tool zu öffnen." },
      { title: "Passenden Code kopieren", body: "Nimm genau das Format, das du für CSS, Notizen oder Design-Handoff brauchst." },
    ],
    useCasesTitle: "Beste Einsatzfälle",
    useCasesDescription: "Am nützlichsten ist das Tool, wenn bereits ein Farbwert existiert und nur das Format gewechselt werden muss.",
    useCases: [
      { title: "CSS und Frontend", description: "Wandle Farben in HEX, RGB oder HSL um, bevor du sie in Stylesheets übernimmst." },
      { title: "Creator-Brand-Kits", description: "Halte Profil-, Thumbnail- und Social-Farben über mehrere Tools konsistent." },
      { title: "Schneller Design-Handoff", description: "Teile dieselbe Farbe in mehreren Formaten, ohne Werte manuell umzuschreiben." },
    ],
    examplesTitle: "Beispiele",
    examplesDescription: "Ein guter Farbkonverter sollte Vorschau und gebräuchliche Codes an einem Ort halten.",
    examples: [
      { title: "Marken-Akzentfarbe", inputLabel: "Eingabe", input: "#3B82F6", outputLabel: "Ausgabe", output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)", note: "Hilfreich, wenn eine Markenfarbe zwischen CSS und Design-Tools wechselt." },
      { title: "Social-Card-Hintergrund", inputLabel: "Eingabe", input: "rgb(10, 10, 15)", outputLabel: "Ausgabe", output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)", note: "Gut, um dieselbe dunkle Fläche in mehreren Screens wieder aufzubauen." },
    ],
    faqTitle: "Farbcode-Konverter FAQ",
    faqs: [
      { question: "Welche Formate werden unterstützt?", answer: "Du kannst HEX-, RGB- oder HSL-Werte eingeben und die Seite wandelt sie in die anderen Formate um." },
      { question: "Kann ich eine Farbe visuell auswählen?", answer: "Ja. Der Farbpicker erlaubt einen visuellen Start, während exakte Codes weiter kopierbar bleiben." },
      { question: "Warum HEX, RGB und HSL zusammen anzeigen?", answer: "Weil Design- und Frontend-Workflows unterschiedliche Formate bevorzugen und ein gemeinsamer Blick Zeit spart." },
    ],
  },
  fr: {
    howToUseTitle: "Comment utiliser le convertisseur de couleurs",
    howToUseDescription:
      "Colle une couleur valide, vérifie l’aperçu puis copie le format exact utile pour le design ou le CSS.",
    howToUseSteps: [
      { title: "Colle ou choisis une couleur", body: "Entre une valeur HEX, RGB ou HSL, ou utilise le sélecteur pour démarrer vite." },
      { title: "Compare les formats", body: "Lis HEX, RGB et HSL sur la même page sans ouvrir un autre convertisseur." },
      { title: "Copie le bon code", body: "Prends le format qui colle au design, au CSS ou à un partage rapide." },
    ],
    useCasesTitle: "Meilleurs cas d’usage",
    useCasesDescription: "L’outil est surtout utile quand une couleur existe déjà et doit simplement passer dans un autre format.",
    useCases: [
      { title: "CSS et frontend", description: "Convertis les couleurs en HEX, RGB ou HSL avant de les placer dans une feuille de style." },
      { title: "Kits de marque pour créateurs", description: "Garde les couleurs de profil, thumbnail et réseaux cohérentes entre plusieurs outils." },
      { title: "Handoff design rapide", description: "Partage la même couleur dans plusieurs formats sans réécrire les valeurs." },
    ],
    examplesTitle: "Exemples",
    examplesDescription: "Un bon convertisseur de couleurs doit garder aperçu et codes courants au même endroit.",
    examples: [
      { title: "Couleur d’accent de marque", inputLabel: "Entrée", input: "#3B82F6", outputLabel: "Sortie", output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)", note: "Pratique quand une couleur de marque passe entre CSS et design." },
      { title: "Fond de carte sociale", inputLabel: "Entrée", input: "rgb(10, 10, 15)", outputLabel: "Sortie", output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)", note: "Utile pour reconstruire le même fond sombre sur plusieurs écrans." },
    ],
    faqTitle: "FAQ du convertisseur de couleurs",
    faqs: [
      { question: "Quels formats sont pris en charge ?", answer: "Tu peux entrer des valeurs HEX, RGB ou HSL, puis la page les convertit vers les autres formats courants." },
      { question: "Puis-je choisir une couleur visuellement ?", answer: "Oui. Le sélecteur te permet de partir visuellement tout en gardant des codes précis à copier." },
      { question: "Pourquoi garder HEX, RGB et HSL ensemble ?", answer: "Parce que le design et le frontend n’utilisent pas toujours le même format, et les voir ensemble fait gagner du temps." },
    ],
  },
  pt: {
    howToUseTitle: "Como usar o conversor de cores",
    howToUseDescription:
      "Cole uma cor válida, confira a prévia e copie o formato exato para design ou CSS.",
    howToUseSteps: [
      { title: "Cole ou escolha uma cor", body: "Digite HEX, RGB ou HSL, ou use o seletor visual para começar mais rápido." },
      { title: "Revise os formatos convertidos", body: "Veja HEX, RGB e HSL lado a lado sem abrir outra ferramenta." },
      { title: "Copie o código certo", body: "Pegue o formato que faz sentido para CSS, anotações de design ou handoff." },
    ],
    useCasesTitle: "Melhores casos de uso",
    useCasesDescription: "Esse tool é mais útil quando uma cor já existe e você só precisa trocar o formato.",
    useCases: [
      { title: "CSS e frontend", description: "Converta cores para HEX, RGB ou HSL antes de colocá-las em uma folha de estilo." },
      { title: "Kits de marca", description: "Mantenha as cores de perfil, thumbnail e redes sociais consistentes entre várias ferramentas." },
      { title: "Handoff de design rápido", description: "Compartilhe a mesma cor em vários formatos sem reescrever valores manualmente." },
    ],
    examplesTitle: "Exemplos",
    examplesDescription: "Um bom conversor de cores deve manter prévia e códigos comuns na mesma tela.",
    examples: [
      { title: "Cor de destaque da marca", inputLabel: "Entrada", input: "#3B82F6", outputLabel: "Saída", output: "HEX: #3B82F6\nRGB: rgb(124, 58, 237)\nHSL: hsl(262, 83%, 58%)", note: "Útil quando uma cor de marca precisa circular entre CSS e ferramentas de design." },
      { title: "Fundo de card social", inputLabel: "Entrada", input: "rgb(10, 10, 15)", outputLabel: "Saída", output: "HEX: #0A0A0F\nHSL: hsl(240, 20%, 5%)", note: "Bom para reconstruir o mesmo fundo escuro em várias telas." },
    ],
    faqTitle: "Perguntas frequentes do conversor de cores",
    faqs: [
      { question: "Quais formatos são suportados?", answer: "Você pode inserir valores HEX, RGB ou HSL e a página converte para os outros formatos comuns." },
      { question: "Posso escolher uma cor visualmente?", answer: "Sim. O seletor de cor permite começar visualmente e ainda copiar códigos exatos." },
      { question: "Por que manter HEX, RGB e HSL juntos?", answer: "Porque design e frontend costumam preferir formatos diferentes, e vê-los juntos economiza tempo." },
    ],
  },
};

const localizedPercentageContent: Record<Locale, ToolContentBlock> = {
  en: percentageCalculatorContentEn,
  tr: {
    howToUseTitle: "Yüzde hesaplayıcı nasıl kullanılır",
    howToUseDescription: "Önce çözmek istediğin soruyu seç, sonra değerleri gir ve sonucu formülle birlikte anında gör.",
    howToUseSteps: [
      { title: "Hesap modunu seç", body: "Bir sayının yüzdesini bulmak, bir değerin yüzde kaç olduğunu görmek veya yüzde kadar artırıp azaltmak için doğru modu seç." },
      { title: "Değerleri gir", body: "Sayıları bir kez yaz ve manuel hesap yapmadan sonucun canlı güncellenmesini izle." },
      { title: "Sonucu oku veya kopyala", body: "Sonuç kartını fiyat, planlama, rapor veya içerik hesapları için doğrudan kullan." },
    ],
    useCasesTitle: "En iyi kullanım senaryoları",
    useCasesDescription: "Bu araç, matematik basit olsa bile hızlı ve temiz cevap gerektiğinde daha değerlidir.",
    useCases: [
      { title: "Creator büyüme kontrolü", description: "Takipçi, erişim veya gelir değişimini tablo açmadan hesapla." },
      { title: "Bütçe ve fiyat hesabı", description: "Bir tutarın yüzdesini veya bir değerin diğerine göre yüzde payını hızlıca gör." },
      { title: "Hızlı raporlama", description: "Formül satırı sayesinde sonucu paylaşmadan önce doğrula." },
    ],
    examplesTitle: "Örnekler",
    examplesDescription: "Güçlü deneyim, doğrudan sonuç ve okunur bir formülü birlikte göstermelidir.",
    examples: [
      { title: "Bir değerin yüzdesini bulmak", inputLabel: "Kurulum", input: "Mod: Bir sayının % kaçı\nYüzde: 20\nDeğer: 250", outputLabel: "Sonuç", output: "50", note: "Bütçe, komisyon ve pay dağılımı için hızlı cevap verir." },
      { title: "Yüzde değişim bulmak", inputLabel: "Kurulum", input: "Mod: % kadar artır/azalt\nDeğer: 120\nYüzde: 15", outputLabel: "Sonuç", output: "138", note: "Fiyat güncellemesi ve basit büyüme senaryolarında işe yarar." },
    ],
    faqTitle: "Yüzde hesaplayıcı sık sorulan sorular",
    faqs: [
      { question: "Hangi hesaplar var?", answer: "Bir sayının yüzdesini bulabilir, bir sayının diğerinin yüzde kaçı olduğunu görebilir veya yüzde bazlı artış/azalış yapabilirsiniz." },
      { question: "Sonuç canlı güncelleniyor mu?", answer: "Evet. Değerler değiştiğinde sonuç ve formül anında güncellenir." },
      { question: "Ondalıklı sayı kullanabilir miyim?", answer: "Evet. Ondalıklı değerler desteklenir; bu yüzden fiyat, analiz ve planlama işlerinde de uygundur." },
    ],
  },
  es: {
    howToUseTitle: "Cómo usar la calculadora de porcentajes",
    howToUseDescription: "Elige primero la pregunta correcta, introduce los valores y lee el resultado con la fórmula al instante.",
    howToUseSteps: [
      { title: "Selecciona el modo", body: "Usa el modo correcto para porcentaje de un valor, porcentaje inverso o aumento y reducción porcentual." },
      { title: "Introduce los valores", body: "Rellena los números una vez y deja que el resultado y la fórmula se actualicen al momento." },
      { title: "Lee o copia el resultado", body: "Usa la tarjeta de resultado cuando necesites una respuesta rápida para precios, análisis o planificación." },
    ],
    useCasesTitle: "Mejores casos de uso",
    useCasesDescription: "Es más útil cuando la matemática es sencilla pero necesitas una respuesta limpia de inmediato.",
    useCases: [
      { title: "Crecimiento de cuentas", description: "Calcula cambios de seguidores, alcance o ingresos sin abrir una hoja de cálculo." },
      { title: "Presupuesto y precios", description: "Encuentra el porcentaje de una cantidad o qué parte representa un valor respecto a otro." },
      { title: "Reportes rápidos", description: "Usa la fórmula para verificar el resultado antes de compartirlo en una nota o mensaje." },
    ],
    examplesTitle: "Ejemplos",
    examplesDescription: "La mejor experiencia combina una respuesta directa con una fórmula fácil de leer.",
    examples: [
      { title: "Encontrar el porcentaje de un valor", inputLabel: "Configuración", input: "Modo: % de un valor\nPorcentaje: 20\nValor: 250", outputLabel: "Resultado", output: "50", note: "Respuesta rápida para presupuestos, comisiones y repartos." },
      { title: "Encontrar un cambio porcentual", inputLabel: "Configuración", input: "Modo: aumentar/disminuir por %\nValor: 120\nPorcentaje: 15", outputLabel: "Resultado", output: "138", note: "Útil para precios y escenarios de crecimiento simples." },
    ],
    faqTitle: "Preguntas frecuentes de la calculadora de porcentajes",
    faqs: [
      { question: "¿Qué cálculos incluye?", answer: "Puedes encontrar un porcentaje de un valor, saber qué porcentaje representa un número de otro y cambiar un valor por porcentaje." },
      { question: "¿El resultado se actualiza en vivo?", answer: "Sí. El resultado y la fórmula se actualizan en cuanto cambian los valores." },
      { question: "¿Puedo usar decimales?", answer: "Sí. Los valores decimales funcionan bien para precios, analítica y planificación." },
    ],
  },
  de: {
    howToUseTitle: "So nutzt du den Prozentrechner",
    howToUseDescription: "Wähle zuerst die passende Frage, gib die Werte ein und lies Ergebnis und Formel sofort ab.",
    howToUseSteps: [
      { title: "Modus auswählen", body: "Nutze den richtigen Modus für Prozent eines Werts, Gegenprozent oder prozentuale Erhöhung und Senkung." },
      { title: "Werte eingeben", body: "Trage die Zahlen einmal ein und lass Ergebnis und Formel live berechnen." },
      { title: "Ergebnis lesen oder kopieren", body: "Verwende die Ergebnis-Karte für Preise, Planung, Reporting oder schnelle Creator-Mathe." },
    ],
    useCasesTitle: "Beste Einsatzfälle",
    useCasesDescription: "Am nützlichsten ist das Tool, wenn die Rechnung simpel ist, aber trotzdem eine schnelle, saubere Antwort gebraucht wird.",
    useCases: [
      { title: "Creator-Wachstum prüfen", description: "Berechne Änderungen bei Followern, Reichweite oder Umsatz ohne Tabelle." },
      { title: "Budget- und Preisrechnung", description: "Finde Prozente einer Summe oder den Anteil eines Werts an einem anderen." },
      { title: "Schnelles Reporting", description: "Mit der Formel prüfst du das Ergebnis, bevor du es teilst." },
    ],
    examplesTitle: "Beispiele",
    examplesDescription: "Stark ist die Kombination aus direkter Antwort und klar lesbarer Formel.",
    examples: [
      { title: "Prozent eines Werts finden", inputLabel: "Setup", input: "Modus: % eines Werts\nProzent: 20\nWert: 250", outputLabel: "Ergebnis", output: "50", note: "Schnell für Budget, Gebühren und Zielaufteilungen." },
      { title: "Prozentänderung berechnen", inputLabel: "Setup", input: "Modus: Um % erhöhen/senken\nWert: 120\nProzent: 15", outputLabel: "Ergebnis", output: "138", note: "Praktisch bei Preisänderungen oder einfachen Wachstumsszenarien." },
    ],
    faqTitle: "Prozentrechner FAQ",
    faqs: [
      { question: "Welche Berechnungen sind enthalten?", answer: "Du kannst Prozente eines Werts finden, Gegenprozent berechnen oder Werte prozentual erhöhen und senken." },
      { question: "Aktualisiert sich das Ergebnis live?", answer: "Ja. Ergebnis und Formel ändern sich sofort mit den Eingaben." },
      { question: "Kann ich Dezimalwerte nutzen?", answer: "Ja. Dezimalzahlen werden unterstützt und sind für Preise, Analytics und Planung nützlich." },
    ],
  },
  fr: {
    howToUseTitle: "Comment utiliser le calculateur de pourcentage",
    howToUseDescription: "Choisis d’abord la bonne question, saisis les valeurs puis lis le résultat et la formule immédiatement.",
    howToUseSteps: [
      { title: "Choisis le mode", body: "Utilise le bon mode pour un pourcentage d’une valeur, un pourcentage inverse ou une hausse/baisse en pourcentage." },
      { title: "Entre les valeurs", body: "Renseigne les nombres une seule fois et laisse la page calculer résultat et formule en direct." },
      { title: "Lis ou copie le résultat", body: "La carte de résultat te donne une réponse rapide pour prix, planification ou reporting." },
    ],
    useCasesTitle: "Meilleurs cas d’usage",
    useCasesDescription: "L’outil est surtout utile quand le calcul est simple mais qu’il faut une réponse propre tout de suite.",
    useCases: [
      { title: "Croissance de compte", description: "Calcule des variations de followers, portée ou revenus sans ouvrir de tableur." },
      { title: "Budget et prix", description: "Trouve le pourcentage d’une somme ou la part d’une valeur par rapport à une autre." },
      { title: "Reporting rapide", description: "Utilise la formule pour vérifier le résultat avant de le partager." },
    ],
    examplesTitle: "Exemples",
    examplesDescription: "La meilleure expérience combine une réponse directe et une formule lisible.",
    examples: [
      { title: "Trouver le pourcentage d’une valeur", inputLabel: "Réglage", input: "Mode : % d'une valeur\nPourcentage : 20\nValeur : 250", outputLabel: "Résultat", output: "50", note: "Pratique pour budget, frais ou répartition." },
      { title: "Trouver une variation en pourcentage", inputLabel: "Réglage", input: "Mode : augmenter/réduire de %\nValeur : 120\nPourcentage : 15", outputLabel: "Résultat", output: "138", note: "Utile pour mises à jour de prix et scénarios de croissance simples." },
    ],
    faqTitle: "FAQ du calculateur de pourcentage",
    faqs: [
      { question: "Quels calculs sont inclus ?", answer: "Tu peux calculer un pourcentage d’une valeur, savoir quel pourcentage représente un nombre ou modifier une valeur par pourcentage." },
      { question: "Le résultat se met-il à jour en direct ?", answer: "Oui. Le résultat et la formule changent dès que les valeurs changent." },
      { question: "Puis-je utiliser des décimales ?", answer: "Oui. Les valeurs décimales fonctionnent bien pour prix, analytics et planification." },
    ],
  },
  pt: {
    howToUseTitle: "Como usar a calculadora de porcentagem",
    howToUseDescription: "Escolha primeiro a pergunta certa, insira os valores e veja resultado e fórmula imediatamente.",
    howToUseSteps: [
      { title: "Escolha o modo", body: "Use o modo correto para porcentagem de um valor, porcentagem inversa ou aumento e redução percentuais." },
      { title: "Insira os valores", body: "Digite os números uma vez e deixe a página atualizar resultado e fórmula ao vivo." },
      { title: "Leia ou copie o resultado", body: "Use o cartão de resultado quando precisar de uma resposta rápida para preço, planejamento ou relatório." },
    ],
    useCasesTitle: "Melhores casos de uso",
    useCasesDescription: "Esse tool é mais útil quando a conta é simples, mas a resposta precisa sair limpa e rápida.",
    useCases: [
      { title: "Checagens de crescimento da conta", description: "Calcule mudanças de seguidores, alcance ou receita sem abrir planilha." },
      { title: "Orçamento e preço", description: "Descubra a porcentagem de qualquer valor ou quanto um número representa de outro." },
      { title: "Relatórios rápidos", description: "Use a linha da fórmula para validar o resultado antes de compartilhar." },
    ],
    examplesTitle: "Exemplos",
    examplesDescription: "A melhor experiência traz resposta direta e fórmula legível no mesmo lugar.",
    examples: [
      { title: "Encontrar a porcentagem de um valor", inputLabel: "Configuração", input: "Modo: % de um valor\nPorcentagem: 20\nValor: 250", outputLabel: "Resultado", output: "50", note: "Resposta rápida para orçamento, taxas e divisões." },
      { title: "Encontrar mudança percentual", inputLabel: "Configuração", input: "Modo: aumentar/reduzir por %\nValor: 120\nPorcentagem: 15", outputLabel: "Resultado", output: "138", note: "Útil para reajuste de preço e cenários simples de crescimento." },
    ],
    faqTitle: "Perguntas frequentes da calculadora de porcentagem",
    faqs: [
      { question: "Quais cálculos estão incluídos?", answer: "Você pode calcular porcentagem de um valor, porcentagem inversa e mudanças percentuais de um número." },
      { question: "O resultado atualiza ao vivo?", answer: "Sim. Resultado e fórmula mudam assim que os valores são alterados." },
      { question: "Posso usar decimais?", answer: "Sim. Valores decimais funcionam bem para preço, analytics e planejamento." },
    ],
  },
};

const localizedDiscountContent: Record<Locale, ToolContentBlock> = {
  en: discountCalculatorContentEn,
  tr: {
    howToUseTitle: "İndirim hesaplayıcı nasıl kullanılır",
    howToUseDescription: "İlk fiyatı ve indirim oranlarını gir, ardından son fiyatı, kazancı ve birleşik indirimi anında gör.",
    howToUseSteps: [
      { title: "İlk fiyatı gir", body: "İndirim uygulanmadan önceki temel fiyatı yazın." },
      { title: "Ana ve ek indirimi ayarla", body: "Ek indirim alanını ikinci kupon ya da kampanya indirimi varsa kullanın." },
      { title: "Son fiyatı ve kazancı oku", body: "Son fiyat, toplam kazanç ve toplam indirim oranını kartlardan birlikte görün." },
    ],
    useCasesTitle: "En iyi kullanım senaryoları",
    useCasesDescription: "Bu araç, kampanya veya indirim senaryosunda hızlı ve güvenilir sonuç gerektiğinde en kullanışlı halini alır.",
    useCases: [
      { title: "Alışveriş ve kampanya kontrolü", description: "Üst üste gelen indirimleri kafadan hesaplamak yerine gerçek son fiyatı görün." },
      { title: "Creator promosyon planı", description: "Lansman indirimi ve ek kuponun etkisini paylaşmadan önce modelleyin." },
      { title: "Fiyat iletişimi", description: "Son fiyat ve toplam kazancı paylaşım metni, satış sayfası veya ürün notunda kullanın." },
    ],
    examplesTitle: "Örnekler",
    examplesDescription: "İyi bir indirim hesaplayıcı, üst üste indirimleri anlaşılır hale getirmelidir.",
    examples: [
      { title: "Tek kampanya fiyatı", inputLabel: "Kurulum", input: "İlk fiyat: 1200\nİndirim: 25%", outputLabel: "Sonuç", output: "Son fiyat: 900\nToplam kazanç: 300", note: "Elle çıkarma yapmadan kampanya sonucunu görmek için uygundur." },
      { title: "İndirim + kupon", inputLabel: "Kurulum", input: "İlk fiyat: 950\nİndirim: 20%\nEk indirim: 10%", outputLabel: "Sonuç", output: "Son fiyat: 684\nToplam kazanç: 266", note: "İkinci indirimin ilk indirim sonrası uygulandığı senaryolar için yararlıdır." },
    ],
    faqTitle: "İndirim hesaplayıcı sık sorulan sorular",
    faqs: [
      { question: "İkinci indirim ekleyebilir miyim?", answer: "Evet. Ek indirim alanı ana indirimden sonra gelen kupon veya ikinci kampanyayı simüle eder." },
      { question: "Toplam indirim oranı sadece toplanıyor mu?", answer: "Hayır. İkinci indirim, düşmüş fiyat üzerinden uygulandığı için araç gerçek birleşik sonucu gösterir." },
      { question: "Sonuçtan neyi kopyalamalıyım?", answer: "Çoğu zaman son fiyat ve toplam kazanç yeterlidir, ancak ilk indirim sonrası fiyat da kampanya planında işinize yarar." },
    ],
  },
  es: {
    howToUseTitle: "Cómo usar la calculadora de descuentos",
    howToUseDescription: "Introduce el precio original y los descuentos para ver precio final, ahorro total y efecto real del descuento acumulado.",
    howToUseSteps: [
      { title: "Introduce el precio original", body: "Empieza con el precio base antes de aplicar cualquier descuento." },
      { title: "Configura descuento principal y extra", body: "Usa el descuento extra cuando haya un cupón o segunda promo tras la rebaja principal." },
      { title: "Lee precio final y ahorro", body: "Las tarjetas muestran nuevo precio, ahorro total y descuento total en una sola vista." },
    ],
    useCasesTitle: "Mejores casos de uso",
    useCasesDescription: "Es ideal cuando quieres una respuesta rápida y confiable para una venta o una promo con varias capas.",
    useCases: [
      { title: "Compras y ofertas", description: "Mira el precio final real en lugar de estimar descuentos acumulados mentalmente." },
      { title: "Planificación de promos", description: "Modela el efecto de un descuento de lanzamiento y un cupón extra antes de compartirlo." },
      { title: "Comunicación de precio", description: "Usa el precio final y el ahorro en textos de venta, landings o notas de producto." },
    ],
    examplesTitle: "Ejemplos",
    examplesDescription: "Una buena calculadora de descuentos debe hacer entendibles los descuentos acumulados.",
    examples: [
      { title: "Precio con una sola oferta", inputLabel: "Configuración", input: "Precio original: 1200\nDescuento: 25%", outputLabel: "Resultado", output: "Precio final: 900\nAhorro total: 300", note: "Útil cuando quieres el resultado de una oferta sin restar a mano." },
      { title: "Oferta + cupón", inputLabel: "Configuración", input: "Precio original: 950\nDescuento: 20%\nDescuento extra: 10%", outputLabel: "Resultado", output: "Precio final: 684\nAhorro total: 266", note: "Sirve en escenarios donde el segundo descuento se aplica sobre el precio rebajado." },
    ],
    faqTitle: "Preguntas frecuentes de la calculadora de descuentos",
    faqs: [
      { question: "¿Puedo añadir un segundo descuento?", answer: "Sí. El campo extra permite modelar descuentos acumulados tipo rebaja más cupón." },
      { question: "¿El descuento total solo se suma?", answer: "No siempre. El segundo descuento se aplica sobre el precio reducido y por eso la herramienta muestra el efecto real." },
      { question: "¿Qué conviene copiar del resultado?", answer: "Normalmente el precio final y el ahorro total, aunque el valor tras el primer descuento también puede servir para planificar promos." },
    ],
  },
  de: {
    howToUseTitle: "So nutzt du den Rabattrechner",
    howToUseDescription: "Gib Originalpreis und Rabatte ein und lies Endpreis, Ersparnis und echte kombinierte Rabattwirkung sofort ab.",
    howToUseSteps: [
      { title: "Originalpreis eingeben", body: "Starte mit dem Basispreis vor jedem Rabatt." },
      { title: "Haupt- und Zusatzrabatt setzen", body: "Nutze den Zusatzrabatt, wenn nach dem ersten Sale noch ein Coupon oder weiterer Rabatt folgt." },
      { title: "Endpreis und Ersparnis lesen", body: "Die Karten zeigen neuen Preis, Gesamtersparnis und Gesamtrabatt auf einen Blick." },
    ],
    useCasesTitle: "Beste Einsatzfälle",
    useCasesDescription: "Das Tool ist am besten, wenn du für Sale- oder Bundle-Szenarien schnell eine verlässliche Antwort brauchst.",
    useCases: [
      { title: "Shopping und Deal-Prüfung", description: "Sieh den echten Endpreis statt gestapelte Rabatte im Kopf zu schätzen." },
      { title: "Creator-Promo-Planung", description: "Modelliere Launch-Rabatt plus Coupon, bevor du einen Promo-Code teilst." },
      { title: "Preis-Kommunikation", description: "Nutze Endpreis und Ersparnis für Captions, Landingpages oder Produktnotizen." },
    ],
    examplesTitle: "Beispiele",
    examplesDescription: "Ein guter Rabattrechner sollte gestapelte Rabatte leicht verständlich machen.",
    examples: [
      { title: "Einzelner Sale-Preis", inputLabel: "Setup", input: "Originalpreis: 1200\nRabatt: 25%", outputLabel: "Ergebnis", output: "Endpreis: 900\nGesamtersparnis: 300", note: "Hilfreich, wenn du das Sale-Ergebnis ohne manuelle Subtraktion sehen willst." },
      { title: "Sale + Gutschein", inputLabel: "Setup", input: "Originalpreis: 950\nRabatt: 20%\nZusatzrabatt: 10%", outputLabel: "Ergebnis", output: "Endpreis: 684\nGesamtersparnis: 266", note: "Nützlich für Szenarien, in denen der zweite Rabatt nach dem ersten greift." },
    ],
    faqTitle: "Rabattrechner FAQ",
    faqs: [
      { question: "Kann ich einen zweiten Rabatt hinzufügen?", answer: "Ja. Das Zusatzfeld bildet Coupon- oder zweite Promo-Rabatte nach dem Haupt-Sale ab." },
      { question: "Wird der Gesamtrabatt einfach addiert?", answer: "Nicht immer. Der zweite Rabatt gilt auf den reduzierten Preis, deshalb zeigt das Tool das echte Gesamtergebnis." },
      { question: "Was sollte ich aus dem Ergebnis kopieren?", answer: "Meist reichen Endpreis und Gesamtersparnis, aber auch der Preis nach dem ersten Rabatt ist für Promo-Planung nützlich." },
    ],
  },
  fr: {
    howToUseTitle: "Comment utiliser le calculateur de remise",
    howToUseDescription: "Entre le prix initial et les remises pour voir immédiatement prix final, économie et effet réel des remises cumulées.",
    howToUseSteps: [
      { title: "Entre le prix initial", body: "Commence avec le prix de base avant toute remise." },
      { title: "Règle remise principale et remise extra", body: "Utilise la remise supplémentaire lorsqu’un coupon ou une deuxième promo s’ajoute après la première baisse." },
      { title: "Lis prix final et économie", body: "Les cartes affichent nouveau prix, économie totale et remise globale au même endroit." },
    ],
    useCasesTitle: "Meilleurs cas d’usage",
    useCasesDescription: "L’outil est le plus utile quand tu veux une réponse rapide et fiable pour une promo ou une vente groupée.",
    useCases: [
      { title: "Achats et vérification d’offres", description: "Vois le vrai prix final au lieu d’estimer les remises cumulées de tête." },
      { title: "Planification de promo", description: "Modélise une remise de lancement plus un coupon avant de la partager." },
      { title: "Communication de prix", description: "Réutilise prix final et économie dans un texte promo, une landing page ou une note produit." },
    ],
    examplesTitle: "Exemples",
    examplesDescription: "Un bon calculateur de remise doit rendre les remises cumulées faciles à comprendre.",
    examples: [
      { title: "Prix avec une seule promo", inputLabel: "Réglage", input: "Prix initial : 1200\nRemise : 25%", outputLabel: "Résultat", output: "Prix final : 900\nÉconomie totale : 300", note: "Pratique pour voir le résultat d’une promo sans soustraction manuelle." },
      { title: "Promo + coupon", inputLabel: "Réglage", input: "Prix initial : 950\nRemise : 20%\nRemise supplémentaire : 10%", outputLabel: "Résultat", output: "Prix final : 684\nÉconomie totale : 266", note: "Utile quand la deuxième remise s’applique après la première." },
    ],
    faqTitle: "FAQ du calculateur de remise",
    faqs: [
      { question: "Puis-je ajouter une deuxième remise ?", answer: "Oui. Le champ supplémentaire permet de simuler une remise type coupon après la promo principale." },
      { question: "La remise totale s’additionne-t-elle simplement ?", answer: "Pas toujours. La seconde remise s’applique sur le prix réduit, donc l’outil montre le vrai résultat combiné." },
      { question: "Que faut-il copier depuis le résultat ?", answer: "En général le prix final et l’économie totale, mais la valeur après la première remise peut aussi aider pour planifier une promo." },
    ],
  },
  pt: {
    howToUseTitle: "Como usar a calculadora de desconto",
    howToUseDescription: "Informe preço original e descontos para ver preço final, economia e efeito real dos descontos acumulados na hora.",
    howToUseSteps: [
      { title: "Informe o preço original", body: "Comece com o preço base antes de qualquer desconto." },
      { title: "Defina desconto principal e extra", body: "Use o desconto extra quando houver cupom ou segunda promoção depois da primeira queda." },
      { title: "Leia preço final e economia", body: "Os cartões mostram preço novo, economia total e desconto total em um único lugar." },
    ],
    useCasesTitle: "Melhores casos de uso",
    useCasesDescription: "Esse tool é melhor quando você quer uma resposta rápida e confiável para promoções ou bundles.",
    useCases: [
      { title: "Compras e checagem de ofertas", description: "Veja o preço final real em vez de estimar descontos acumulados de cabeça." },
      { title: "Planejamento de promo", description: "Modele um desconto de lançamento mais um cupom extra antes de divulgar." },
      { title: "Comunicação de preço", description: "Use preço final e economia em texto de oferta, páginas de venda ou notas de produto." },
    ],
    examplesTitle: "Exemplos",
    examplesDescription: "Uma boa calculadora de desconto deve deixar descontos acumulados fáceis de entender.",
    examples: [
      { title: "Preço com uma promoção", inputLabel: "Configuração", input: "Preço original: 1200\nDesconto: 25%", outputLabel: "Resultado", output: "Preço final: 900\nEconomia total: 300", note: "Útil quando você quer o resultado da promoção sem fazer conta manual." },
      { title: "Promoção + cupom", inputLabel: "Configuração", input: "Preço original: 950\nDesconto: 20%\nDesconto extra: 10%", outputLabel: "Resultado", output: "Preço final: 684\nEconomia total: 266", note: "Bom para cenários em que o segundo desconto entra depois do primeiro." },
    ],
    faqTitle: "Perguntas frequentes da calculadora de desconto",
    faqs: [
      { question: "Posso adicionar um segundo desconto?", answer: "Sim. O campo extra modela descontos acumulados como promoção mais cupom." },
      { question: "O desconto total é só a soma?", answer: "Nem sempre. O segundo desconto é aplicado sobre o preço já reduzido, então a ferramenta mostra o efeito real." },
      { question: "O que vale copiar do resultado?", answer: "Na maioria dos casos o preço final e a economia total já bastam, mas o valor após o primeiro desconto também ajuda no planejamento." },
    ],
  },
};

export const localizedColorCodeConverterLabels: Record<Locale, ColorCodeConverterLabels> = {
  en: {
    inputLabel: "Color value",
    placeholder: "Enter HEX, RGB, or HSL",
    helper: "Paste one valid color and copy the code format you need without opening another converter.",
    previewLabel: "Preview",
    clearText: "Clear",
    copy: "Copy",
    copied: "Copied",
    invalid: "Enter a valid HEX, RGB, or HSL color value.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
  tr: {
    inputLabel: "Renk değeri",
    placeholder: "HEX, RGB veya HSL gir",
    helper: "Tek bir geçerli renk kodu gir, ihtiyacın olan formatı anında kopyala.",
    previewLabel: "Önizleme",
    clearText: "Temizle",
    copy: "Kopyala",
    copied: "Kopyalandı",
    invalid: "Geçerli bir HEX, RGB veya HSL renk değeri gir.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
  es: {
    inputLabel: "Valor del color",
    placeholder: "Ingresa HEX, RGB o HSL",
    helper: "Pega un color válido y copia el formato que necesitas al instante.",
    previewLabel: "Vista previa",
    clearText: "Limpiar",
    copy: "Copiar",
    copied: "Copiado",
    invalid: "Introduce un valor de color HEX, RGB o HSL válido.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
  de: {
    inputLabel: "Farbwert",
    placeholder: "HEX, RGB oder HSL eingeben",
    helper: "Füge einen gültigen Farbwert ein und kopiere sofort das passende Format.",
    previewLabel: "Vorschau",
    clearText: "Leeren",
    copy: "Kopieren",
    copied: "Kopiert",
    invalid: "Gib einen gültigen HEX-, RGB- oder HSL-Farbwert ein.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
  fr: {
    inputLabel: "Valeur couleur",
    placeholder: "Entre HEX, RGB ou HSL",
    helper: "Colle une couleur valide et copie directement le format utile.",
    previewLabel: "Aperçu",
    clearText: "Effacer",
    copy: "Copier",
    copied: "Copié",
    invalid: "Entre une valeur de couleur HEX, RGB ou HSL valide.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
  pt: {
    inputLabel: "Valor da cor",
    placeholder: "Digite HEX, RGB ou HSL",
    helper: "Cole uma cor válida e copie na hora o formato que você precisa.",
    previewLabel: "Prévia",
    clearText: "Limpar",
    copy: "Copiar",
    copied: "Copiado",
    invalid: "Digite um valor de cor HEX, RGB ou HSL válido.",
    formats: { hex: "HEX", rgb: "RGB", hsl: "HSL" },
  },
};

export const localizedPercentageCalculatorLabels: Record<Locale, PercentageCalculatorLabels> = {
  en: {
    modeLabel: "Calculation mode",
    modes: { percentOf: "% of a value", whatPercent: "What % is this?", changeBy: "Increase/decrease by %" },
    firstValue: "First value",
    secondValue: "Second value",
    percentageValue: "Percentage",
    helper: "Use the right mode first, then read the live result and formula without doing the math manually.",
    copy: "Copy result",
    copied: "Copied",
    result: "Result",
    formula: "Formula",
    clear: "Clear",
  },
  tr: {
    modeLabel: "Hesap modu",
    modes: { percentOf: "Bir sayının % kaçı", whatPercent: "Bu sayı yüzde kaç?", changeBy: "% kadar artır/azalt" },
    firstValue: "İlk değer",
    secondValue: "İkinci değer",
    percentageValue: "Yüzde",
    helper: "Önce doğru modu seç, sonra sonucu ve formülü canlı olarak gör.",
    copy: "Sonucu kopyala",
    copied: "Kopyalandı",
    result: "Sonuç",
    formula: "Formül",
    clear: "Temizle",
  },
  es: {
    modeLabel: "Modo de cálculo",
    modes: { percentOf: "% de un valor", whatPercent: "¿Qué % es esto?", changeBy: "Aumentar/disminuir por %" },
    firstValue: "Primer valor",
    secondValue: "Segundo valor",
    percentageValue: "Porcentaje",
    helper: "Elige el modo correcto y mira el resultado y la fórmula al instante.",
    copy: "Copiar resultado",
    copied: "Copiado",
    result: "Resultado",
    formula: "Fórmula",
    clear: "Limpiar",
  },
  de: {
    modeLabel: "Berechnungsmodus",
    modes: { percentOf: "% eines Werts", whatPercent: "Wie viel % ist das?", changeBy: "Um % erhöhen/senken" },
    firstValue: "Erster Wert",
    secondValue: "Zweiter Wert",
    percentageValue: "Prozent",
    helper: "Wähle zuerst den richtigen Modus und lies Ergebnis und Formel sofort ab.",
    copy: "Ergebnis kopieren",
    copied: "Kopiert",
    result: "Ergebnis",
    formula: "Formel",
    clear: "Leeren",
  },
  fr: {
    modeLabel: "Mode de calcul",
    modes: { percentOf: "% d'une valeur", whatPercent: "Quel % est-ce ?", changeBy: "Augmenter/réduire de %" },
    firstValue: "Première valeur",
    secondValue: "Deuxième valeur",
    percentageValue: "Pourcentage",
    helper: "Choisis le bon mode puis lis le résultat et la formule immédiatement.",
    copy: "Copier le résultat",
    copied: "Copié",
    result: "Résultat",
    formula: "Formule",
    clear: "Effacer",
  },
  pt: {
    modeLabel: "Modo de cálculo",
    modes: { percentOf: "% de um valor", whatPercent: "Que % é isso?", changeBy: "Aumentar/reduzir por %" },
    firstValue: "Primeiro valor",
    secondValue: "Segundo valor",
    percentageValue: "Porcentagem",
    helper: "Escolha o modo certo e veja o resultado e a fórmula ao vivo.",
    copy: "Copiar resultado",
    copied: "Copiado",
    result: "Resultado",
    formula: "Fórmula",
    clear: "Limpar",
  },
};

export const localizedDiscountCalculatorLabels: Record<Locale, DiscountCalculatorLabels> = {
  en: {
    originalPrice: "Original price",
    discountRate: "Discount rate",
    extraDiscount: "Extra discount",
    helper: "Use the extra discount field for stacked sale + coupon scenarios.",
    copy: "Copy summary",
    copied: "Copied",
    clear: "Clear",
    results: {
      finalPrice: "Final price",
      totalSaving: "Total saving",
      totalDiscount: "Total discount",
      priceAfterMainDiscount: "After first discount",
    },
  },
  tr: {
    originalPrice: "İlk fiyat",
    discountRate: "İndirim oranı",
    extraDiscount: "Ek indirim",
    helper: "Ek indirim alanını kampanya + kupon gibi ikinci indirim senaryolarında kullan.",
    copy: "Özeti kopyala",
    copied: "Kopyalandı",
    clear: "Temizle",
    results: {
      finalPrice: "Son fiyat",
      totalSaving: "Toplam kazanç",
      totalDiscount: "Toplam indirim",
      priceAfterMainDiscount: "İlk indirim sonrası",
    },
  },
  es: {
    originalPrice: "Precio original",
    discountRate: "Descuento",
    extraDiscount: "Descuento extra",
    helper: "Usa el descuento extra para escenarios de rebaja más cupón.",
    copy: "Copiar resumen",
    copied: "Copiado",
    clear: "Limpiar",
    results: {
      finalPrice: "Precio final",
      totalSaving: "Ahorro total",
      totalDiscount: "Descuento total",
      priceAfterMainDiscount: "Tras el primer descuento",
    },
  },
  de: {
    originalPrice: "Originalpreis",
    discountRate: "Rabatt",
    extraDiscount: "Zusätzlicher Rabatt",
    helper: "Nutze den Zusatzrabatt für Sale-plus-Gutschein-Szenarien.",
    copy: "Zusammenfassung kopieren",
    copied: "Kopiert",
    clear: "Leeren",
    results: {
      finalPrice: "Endpreis",
      totalSaving: "Gesamtersparnis",
      totalDiscount: "Gesamtrabatt",
      priceAfterMainDiscount: "Nach dem ersten Rabatt",
    },
  },
  fr: {
    originalPrice: "Prix initial",
    discountRate: "Remise",
    extraDiscount: "Remise supplémentaire",
    helper: "Utilise la remise supplémentaire pour les scénarios promo + coupon.",
    copy: "Copier le résumé",
    copied: "Copié",
    clear: "Effacer",
    results: {
      finalPrice: "Prix final",
      totalSaving: "Économie totale",
      totalDiscount: "Remise totale",
      priceAfterMainDiscount: "Après la première remise",
    },
  },
  pt: {
    originalPrice: "Preço original",
    discountRate: "Desconto",
    extraDiscount: "Desconto extra",
    helper: "Use o desconto extra para cenários de promoção + cupom.",
    copy: "Copiar resumo",
    copied: "Copiado",
    clear: "Limpar",
    results: {
      finalPrice: "Preço final",
      totalSaving: "Economia total",
      totalDiscount: "Desconto total",
      priceAfterMainDiscount: "Após o primeiro desconto",
    },
  },
};

export const localizedUtilityTools: Record<
  Locale,
  Record<UtilityLocalizedTool["slug"], UtilityLocalizedTool>
> = {
  en: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Color Code Converter",
      shortDescription: "Convert HEX, RGB, and HSL colors instantly with a live preview.",
      description: "Paste one color value, preview it, and copy clean HEX, RGB, or HSL output without extra steps.",
      eyebrow: "Design tool",
      accentLabel: "COLOR",
      metaTitle: "Color Code Converter — Free Online | Toolyflow",
      metaDescription: "Convert HEX, RGB, and HSL color values instantly with a free online color code converter.",
      keywords: ["color code converter", "hex to rgb", "rgb to hex", "hsl converter"],
      highlights: [
        "Converts the three most common web color formats in one place.",
        "Includes a live swatch so you can verify the color before copying.",
        "Useful for brand kits, thumbnails, CSS, and quick design handoff.",
      ],
      structuredDescription: "Free online color code converter with HEX, RGB, and HSL outputs plus live preview.",
      content: localizedColorCodeContent.en,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Percentage Calculator",
      shortDescription: "Solve common percentage questions fast with live formulas and results.",
      description: "Calculate percentages, reverse percentages, and percentage-based increases or decreases in one clean page.",
      eyebrow: "Math tool",
      accentLabel: "MATH",
      metaTitle: "Percentage Calculator — Free Online | Toolyflow",
      metaDescription: "Calculate percentages, reverse percentages, and value changes with a free online percentage calculator.",
      keywords: ["percentage calculator", "percent of number", "percentage increase", "percentage decrease"],
      highlights: [
        "Handles the most common percentage questions without spreadsheet setup.",
        "Shows the live formula so the result is easy to verify.",
        "Useful for analytics, planning, pricing, and quick business math.",
      ],
      structuredDescription: "Free online percentage calculator for percentage-of, reverse percentage, and percentage change calculations.",
      content: localizedPercentageContent.en,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "Discount Calculator",
      shortDescription: "Calculate sale price, savings, and stacked discount outcomes instantly.",
      description: "Enter the original price and discount rates to see the final price, total savings, and combined discount effect.",
      eyebrow: "Pricing tool",
      accentLabel: "SALE",
      metaTitle: "Discount Calculator — Free Online | Toolyflow",
      metaDescription: "Calculate final sale price, total savings, and stacked discount results with a free discount calculator.",
      keywords: ["discount calculator", "sale price calculator", "coupon calculator", "discount percentage"],
      highlights: [
        "Shows the real outcome of stacked discounts, not only the headline rate.",
        "Useful for shopping, promo planning, and campaign math.",
        "Keeps final price, savings, and total discount in one view.",
      ],
      structuredDescription: "Free online discount calculator for sale price, total savings, and stacked discount calculations.",
      content: localizedDiscountContent.en,
    },
  },
  tr: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Renk Kodu Dönüştürücü",
      shortDescription: "HEX, RGB ve HSL renk kodlarını anında dönüştür ve canlı önizleme ile kontrol et.",
      description: "Tek bir renk değeri gir, canlı önizlemede gör ve ihtiyacın olan HEX, RGB veya HSL formatını anında kopyala.",
      eyebrow: "Hızlı tasarım aracı",
      accentLabel: "COLOR",
      metaTitle: "Renk Kodu Dönüştürücü — Ücretsiz Online | Toolyflow",
      metaDescription: "HEX, RGB ve HSL renk kodlarını saniyeler içinde dönüştür. Ücretsiz online renk kodu dönüştürücü.",
      keywords: ["renk kodu dönüştürücü", "hex rgb çevirici", "rgb hex çevirici", "hsl dönüştürücü"],
      highlights: [
        "En yaygın üç web renk formatını tek yerde gösterir.",
        "Canlı renk önizlemesi ile yanlış kod kopyalama riskini azaltır.",
        "Creator kitleri, thumbnail tasarımı ve CSS işleri için hızlıdır.",
      ],
      structuredDescription: "HEX, RGB ve HSL çıktılarıyla canlı önizleme sunan ücretsiz online renk kodu dönüştürücü.",
      content: localizedColorCodeContent.tr,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Yüzde Hesaplayıcı",
      shortDescription: "Yaygın yüzde sorularını canlı formül ve sonuçlarla hızlıca çöz.",
      description: "Bir sayının yüzdesini, bir değerin yüzde kaç olduğunu veya yüzde bazlı artış/azalışı tek sayfada hesapla.",
      eyebrow: "Hızlı matematik aracı",
      accentLabel: "MATH",
      metaTitle: "Yüzde Hesaplayıcı — Ücretsiz Online | Toolyflow",
      metaDescription: "Yüzde hesapla, yüzde oranını bul, artış ve azalış senaryolarını çöz. Ücretsiz online yüzde hesaplayıcı.",
      keywords: ["yüzde hesaplayıcı", "yüzde hesaplama", "yüzde artış", "yüzde azalış"],
      highlights: [
        "En sık kullanılan yüzde hesaplarını tek ekranda toplar.",
        "Sonucun yanında formülü de gösterdiği için kontrol etmek kolaydır.",
        "Büyüme, fiyat, rapor ve planlama hesapları için uygundur.",
      ],
      structuredDescription: "Bir sayının yüzdesi, ters yüzde ve yüzde değişim hesapları için ücretsiz online yüzde hesaplayıcı.",
      content: localizedPercentageContent.tr,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "İndirim Hesaplayıcı",
      shortDescription: "İndirimli fiyatı, kazancı ve üst üste indirim etkisini anında hesapla.",
      description: "İlk fiyatı ve indirim oranlarını girerek son fiyatı, toplam kazancı ve birleşik indirim etkisini temiz bir şekilde gör.",
      eyebrow: "Fiyat aracı",
      accentLabel: "SALE",
      metaTitle: "İndirim Hesaplayıcı — Ücretsiz Online | Toolyflow",
      metaDescription: "İndirimli fiyatı, toplam kazancı ve ek kupon etkisini hesapla. Ücretsiz online indirim hesaplayıcı.",
      keywords: ["indirim hesaplayıcı", "indirimli fiyat hesaplama", "kupon hesaplayıcı", "kampanya hesaplama"],
      highlights: [
        "Tek indirim ve ek kupon senaryolarında gerçek sonucu gösterir.",
        "Son fiyat, toplam kazanç ve toplam indirim oranını birlikte sunar.",
        "Alışveriş, kampanya planı ve promosyon hesapları için kullanışlıdır.",
      ],
      structuredDescription: "Son fiyat, toplam kazanç ve üst üste indirim etkisi hesaplayan ücretsiz online indirim hesaplayıcı.",
      content: localizedDiscountContent.tr,
    },
  },
  es: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Conversor de colores",
      shortDescription: "Convierte HEX, RGB y HSL al instante con vista previa en vivo.",
      description: "Pega un color, mira la vista previa y copia el formato HEX, RGB o HSL que necesitas.",
      eyebrow: "Utilidad de diseño",
      accentLabel: "COLOR",
      metaTitle: "Conversor de colores — Gratis online | Toolyflow",
      metaDescription: "Convierte valores de color HEX, RGB y HSL al instante con un conversor de colores gratis.",
      keywords: ["conversor de colores", "hex a rgb", "rgb a hex", "convertidor hsl"],
      highlights: ["Convierte los formatos de color web más comunes.", "Incluye vista previa en vivo.", "Útil para branding, CSS y diseño rápido."],
      structuredDescription: "Conversor de colores gratis con salidas HEX, RGB y HSL y vista previa en vivo.",
      content: localizedColorCodeContent.es,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Calculadora de porcentajes",
      shortDescription: "Resuelve porcentajes, porcentajes inversos y cambios porcentuales rápidamente.",
      description: "Calcula el porcentaje de un valor, qué porcentaje representa un número y cambios por porcentaje.",
      eyebrow: "Utilidad matemática",
      accentLabel: "MATH",
      metaTitle: "Calculadora de porcentajes — Gratis online | Toolyflow",
      metaDescription: "Calcula porcentajes, porcentajes inversos y cambios de valor con una calculadora de porcentajes gratis.",
      keywords: ["calculadora de porcentajes", "porcentaje de un número", "aumento porcentual", "disminución porcentual"],
      highlights: ["Resuelve las preguntas de porcentaje más comunes.", "Muestra la fórmula junto al resultado.", "Útil para precios, analítica y planificación."],
      structuredDescription: "Calculadora de porcentajes gratis para porcentaje de valor, porcentaje inverso y cambio porcentual.",
      content: localizedPercentageContent.es,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "Calculadora de descuentos",
      shortDescription: "Calcula precio final, ahorro y descuentos acumulados al instante.",
      description: "Introduce el precio original y los descuentos para ver el precio final, el ahorro total y el efecto real del descuento.",
      eyebrow: "Utilidad de precios",
      accentLabel: "SALE",
      metaTitle: "Calculadora de descuentos — Gratis online | Toolyflow",
      metaDescription: "Calcula precio final, ahorro total y descuentos acumulados con una calculadora de descuentos gratis.",
      keywords: ["calculadora de descuentos", "precio final", "cupón descuento", "porcentaje de descuento"],
      highlights: ["Muestra el resultado real de descuentos acumulados.", "Presenta precio final y ahorro total en una sola vista.", "Útil para compras y planificación de promos."],
      structuredDescription: "Calculadora de descuentos gratis para precio final, ahorro total y descuentos acumulados.",
      content: localizedDiscountContent.es,
    },
  },
  de: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Farbcode-Konverter",
      shortDescription: "Wandle HEX, RGB und HSL sofort mit Live-Vorschau um.",
      description: "Füge einen Farbwert ein, prüfe die Vorschau und kopiere das benötigte HEX-, RGB- oder HSL-Format.",
      eyebrow: "Design-Utility",
      accentLabel: "COLOR",
      metaTitle: "Farbcode-Konverter — Kostenlos online | Toolyflow",
      metaDescription: "Wandle HEX-, RGB- und HSL-Farbwerte sofort mit einem kostenlosen Farbcode-Konverter um.",
      keywords: ["farbcode konverter", "hex zu rgb", "rgb zu hex", "hsl konverter"],
      highlights: ["Konvertiert gängige Web-Farbformate an einem Ort.", "Mit Live-Vorschau für schnelle Kontrolle.", "Nützlich für CSS, Branding und Design-Workflows."],
      structuredDescription: "Kostenloser Farbcode-Konverter mit HEX-, RGB- und HSL-Ausgaben plus Live-Vorschau.",
      content: localizedColorCodeContent.de,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Prozentrechner",
      shortDescription: "Berechne Prozente, Gegenprozent und prozentuale Veränderungen schnell.",
      description: "Berechne den Prozentsatz eines Werts, den Anteil eines Werts oder Erhöhungen und Senkungen in Prozent.",
      eyebrow: "Mathe-Utility",
      accentLabel: "MATH",
      metaTitle: "Prozentrechner — Kostenlos online | Toolyflow",
      metaDescription: "Berechne Prozente, Gegenprozent und Wertänderungen mit einem kostenlosen Prozentrechner.",
      keywords: ["prozentrechner", "prozent von wert", "prozent erhöhung", "prozent senkung"],
      highlights: ["Löst häufige Prozentfragen ohne Tabellenkalkulation.", "Zeigt die Formel zusammen mit dem Ergebnis.", "Nützlich für Preise, Analyse und Planung."],
      structuredDescription: "Kostenloser Prozentrechner für Prozent-von-Wert-, Gegenprozent- und Prozentänderungsrechnungen.",
      content: localizedPercentageContent.de,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "Rabattrechner",
      shortDescription: "Berechne Endpreis, Ersparnis und kombinierte Rabatte sofort.",
      description: "Gib Originalpreis und Rabatte ein, um Endpreis, Gesamtersparnis und die echte kombinierte Rabattwirkung zu sehen.",
      eyebrow: "Preis-Utility",
      accentLabel: "SALE",
      metaTitle: "Rabattrechner — Kostenlos online | Toolyflow",
      metaDescription: "Berechne Endpreis, Ersparnis und kombinierte Rabattwirkung mit einem kostenlosen Rabattrechner.",
      keywords: ["rabattrechner", "endpreis berechnen", "gutschein rechner", "rabatt prozent"],
      highlights: ["Zeigt das echte Ergebnis gestapelter Rabatte.", "Stellt Endpreis und Ersparnis klar dar.", "Gut für Shopping und Promo-Planung."],
      structuredDescription: "Kostenloser Rabattrechner für Endpreis, Gesamtersparnis und gestapelte Rabatte.",
      content: localizedDiscountContent.de,
    },
  },
  fr: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Convertisseur de couleurs",
      shortDescription: "Convertis HEX, RGB et HSL instantanément avec aperçu en direct.",
      description: "Colle une couleur, vérifie l’aperçu et copie le format HEX, RGB ou HSL utile.",
      eyebrow: "Utilitaire design",
      accentLabel: "COLOR",
      metaTitle: "Convertisseur de couleurs — Gratuit en ligne | Toolyflow",
      metaDescription: "Convertissez des codes couleur HEX, RGB et HSL instantanément avec un convertisseur gratuit.",
      keywords: ["convertisseur couleur", "hex vers rgb", "rgb vers hex", "convertisseur hsl"],
      highlights: ["Convertit les formats couleur web les plus courants.", "Aperçu en direct inclus.", "Utile pour branding, CSS et design rapide."],
      structuredDescription: "Convertisseur de couleurs gratuit avec sorties HEX, RGB, HSL et aperçu en direct.",
      content: localizedColorCodeContent.fr,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Calculateur de pourcentage",
      shortDescription: "Résous rapidement les calculs de pourcentage et variations en pourcentage.",
      description: "Calcule un pourcentage d’une valeur, un pourcentage inverse et une augmentation ou réduction en pourcentage.",
      eyebrow: "Utilitaire math",
      accentLabel: "MATH",
      metaTitle: "Calculateur de pourcentage — Gratuit en ligne | Toolyflow",
      metaDescription: "Calculez des pourcentages, pourcentages inverses et variations avec un calculateur gratuit.",
      keywords: ["calculateur de pourcentage", "pourcentage d'un nombre", "augmentation pourcentage", "réduction pourcentage"],
      highlights: ["Répond aux questions de pourcentage courantes.", "Affiche la formule avec le résultat.", "Pratique pour prix, analyse et planification."],
      structuredDescription: "Calculateur de pourcentage gratuit pour pourcentage d’une valeur, pourcentage inverse et variation en pourcentage.",
      content: localizedPercentageContent.fr,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "Calculateur de remise",
      shortDescription: "Calcule instantanément prix final, économie et remises cumulées.",
      description: "Entre le prix initial et les remises pour voir le prix final, l’économie totale et l’effet réel des remises cumulées.",
      eyebrow: "Utilitaire prix",
      accentLabel: "SALE",
      metaTitle: "Calculateur de remise — Gratuit en ligne | Toolyflow",
      metaDescription: "Calculez prix final, économie totale et remises cumulées avec un calculateur de remise gratuit.",
      keywords: ["calculateur de remise", "prix final", "coupon remise", "pourcentage remise"],
      highlights: ["Montre le vrai résultat de remises cumulées.", "Affiche prix final et économie au même endroit.", "Utile pour shopping et promos."],
      structuredDescription: "Calculateur de remise gratuit pour prix final, économie totale et remises cumulées.",
      content: localizedDiscountContent.fr,
    },
  },
  pt: {
    "color-code-converter": {
      slug: "color-code-converter",
      name: "Conversor de cores",
      shortDescription: "Converta HEX, RGB e HSL na hora com prévia ao vivo.",
      description: "Cole uma cor, veja a prévia e copie o formato HEX, RGB ou HSL certo.",
      eyebrow: "Utilitário de design",
      accentLabel: "COLOR",
      metaTitle: "Conversor de cores — Grátis online | Toolyflow",
      metaDescription: "Converta valores de cor HEX, RGB e HSL instantaneamente com um conversor grátis.",
      keywords: ["conversor de cores", "hex para rgb", "rgb para hex", "conversor hsl"],
      highlights: ["Converte os formatos de cor web mais comuns.", "Prévia ao vivo incluída.", "Útil para branding, CSS e design rápido."],
      structuredDescription: "Conversor de cores grátis com saídas HEX, RGB, HSL e prévia ao vivo.",
      content: localizedColorCodeContent.pt,
    },
    "percentage-calculator": {
      slug: "percentage-calculator",
      name: "Calculadora de porcentagem",
      shortDescription: "Resolva porcentagens, porcentagens inversas e mudanças percentuais rapidamente.",
      description: "Calcule a porcentagem de um valor, descubra que porcentagem um número representa e faça ajustes percentuais.",
      eyebrow: "Utilitário matemático",
      accentLabel: "MATH",
      metaTitle: "Calculadora de porcentagem — Grátis online | Toolyflow",
      metaDescription: "Calcule porcentagens, porcentagens inversas e mudanças de valor com uma calculadora grátis.",
      keywords: ["calculadora de porcentagem", "porcentagem de valor", "aumento percentual", "redução percentual"],
      highlights: ["Resolve perguntas comuns de porcentagem sem planilha.", "Mostra a fórmula junto do resultado.", "Útil para preço, análise e planejamento."],
      structuredDescription: "Calculadora de porcentagem grátis para porcentagem de valor, porcentagem inversa e mudança percentual.",
      content: localizedPercentageContent.pt,
    },
    "discount-calculator": {
      slug: "discount-calculator",
      name: "Calculadora de desconto",
      shortDescription: "Calcule preço final, economia e descontos combinados na hora.",
      description: "Informe o preço original e os descontos para ver o preço final, a economia total e o efeito real do desconto combinado.",
      eyebrow: "Utilitário de preço",
      accentLabel: "SALE",
      metaTitle: "Calculadora de desconto — Grátis online | Toolyflow",
      metaDescription: "Calcule preço final, economia total e descontos acumulados com uma calculadora de desconto grátis.",
      keywords: ["calculadora de desconto", "preço final", "cupom desconto", "porcentagem desconto"],
      highlights: ["Mostra o resultado real de descontos acumulados.", "Exibe preço final e economia em um só lugar.", "Útil para compras e planejamento de promoções."],
      structuredDescription: "Calculadora de desconto grátis para preço final, economia total e descontos acumulados.",
      content: localizedDiscountContent.pt,
    },
  },
};
