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

export type ExtraLocalizedTool = {
  slug: "word-counter" | "text-cleaner";
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

export type WordCounterLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  defaultText: string;
  clearText: string;
  copyText: string;
  copied: string;
  words: string;
  characters: string;
  noSpaces: string;
  sentences: string;
  paragraphs: string;
  readingTime: string;
  topWords: string;
  emptyTerms: string;
};

export type TextCleanerLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  defaultText: string;
  clearText: string;
  copy: string;
  copied: string;
  cleanedText: string;
  removeBlankLines: string;
  uniqueLines: string;
  singleLine: string;
  commaList: string;
  noText: string;
};

const wordCounterContentEn: ToolContentBlock = {
  howToUseTitle: "How to use the word counter",
  howToUseDescription:
    "Paste the draft, read the core counts, then use the top terms list when you want a quick sense of repetition.",
  howToUseSteps: [
    {
      title: "Paste the text",
      body:
        "Drop in a caption, script, article section, or note so the tool can calculate the live word, sentence, and paragraph counts.",
    },
    {
      title: "Check the main stats",
      body:
        "Use the cards to read word count, characters, characters without spaces, sentences, paragraphs, and reading time at a glance.",
    },
    {
      title: "Review repeated terms",
      body:
        "Use the top words block to spot overused terms before you publish or send the text somewhere else.",
    },
  ],
  useCasesTitle: "Best use cases",
  useCasesDescription:
    "This tool is strongest when you need a quick count check before publishing, submitting, or trimming text.",
  useCases: [
    {
      title: "Instagram, TikTok, and X captions",
      description:
        "Check whether a short caption or thread draft is too thin, too repetitive, or longer than it needs to be.",
    },
    {
      title: "YouTube descriptions and scripts",
      description:
        "Read the paragraph and reading-time counts when you want a faster overview of a longer draft.",
    },
    {
      title: "Editing and rewriting passes",
      description:
        "Compare counts after cleanup so you can see whether the revision actually made the text tighter.",
    },
  ],
  examplesTitle: "Examples",
  examplesDescription:
    "A useful word counter should help you judge both size and repetition quickly.",
  examples: [
    {
      title: "Creator caption check",
      inputLabel: "Input",
      input: "Short launch note for a new creator tool with a clear CTA and one repeated phrase.",
      outputLabel: "What you read",
      output: "Words: 15\nSentences: 1\nReading time: <1m",
      note: "Good when you want to know whether a short caption still says enough.",
    },
    {
      title: "Draft audit",
      inputLabel: "Input",
      input: "A longer draft with two paragraphs and several repeated terms around growth, content, and workflow.",
      outputLabel: "What you read",
      output: "Paragraphs: 2\nTop words: content (4), workflow (3), growth (3)",
      note: "Useful when a rewrite should remove repetition rather than only shorten the text.",
    },
  ],
  faqTitle: "Word counter FAQ",
  faqs: [
    {
      question: "What does the word counter measure?",
      answer:
        "The page measures words, characters, characters without spaces, sentences, paragraphs, reading time, and repeated terms.",
    },
    {
      question: "Can I use it for short captions and long drafts?",
      answer:
        "Yes. It works for quick caption checks, but it is also useful for longer descriptions, notes, and scripts.",
    },
    {
      question: "Why are top words useful?",
      answer:
        "They help you spot repetition fast, especially when the draft sounds flatter than expected but you cannot see why right away.",
    },
  ],
};

const textCleanerContentEn: ToolContentBlock = {
  howToUseTitle: "How to use the text cleaner",
  howToUseDescription:
    "Paste messy text once, then copy the exact cleaned format you need instead of manually fixing it line by line.",
  howToUseSteps: [
    {
      title: "Paste the raw text",
      body:
        "Drop in copied notes, messy captions, exported lists, or text with broken spacing and empty lines.",
    },
    {
      title: "Compare the cleaned outputs",
      body:
        "Review the cleaned text, blank-line removal, unique lines, single-line version, and comma list without leaving the page.",
    },
    {
      title: "Copy the useful version",
      body:
        "Take the version that fits your workflow, whether you need a clean paragraph, a unique list, or a paste-ready one-liner.",
    },
  ],
  useCasesTitle: "Best use cases",
  useCasesDescription:
    "This tool is most useful when copied text is structurally messy but still worth keeping.",
  useCases: [
    {
      title: "Cleanup after copying from chat or docs",
      description:
        "Fix broken spacing and blank lines before moving the text into a post, note, or CMS field.",
    },
    {
      title: "List cleanup",
      description:
        "Remove duplicate lines or turn a stacked list into a clean comma list for tags, names, or quick notes.",
    },
    {
      title: "Paste-ready one-line outputs",
      description:
        "Collapse multi-line text into a single line when a form, prompt box, or metadata field needs compact input.",
    },
  ],
  examplesTitle: "Examples",
  examplesDescription:
    "A good text cleaner should help you move from messy raw input to a usable format in one step.",
  examples: [
    {
      title: "Broken spacing cleanup",
      inputLabel: "Input",
      input: "Toolyflow    helps creators\n\nclean copied text   faster.",
      outputLabel: "Cleaned text",
      output: "Toolyflow helps creators\nclean copied text faster.",
      note: "Useful when the content is fine but spacing makes it look rough.",
    },
    {
      title: "Duplicate list cleanup",
      inputLabel: "Input",
      input: "bio ideas\nnickname ideas\nbio ideas\nhashtag ideas",
      outputLabel: "Unique lines",
      output: "bio ideas\nnickname ideas\nhashtag ideas",
      note: "Good for notes, idea boards, and repeated export lists.",
    },
  ],
  faqTitle: "Text cleaner FAQ",
  faqs: [
    {
      question: "What does the text cleaner remove?",
      answer:
        "It helps normalize spacing, remove blank lines, collapse text into one line, and create a deduplicated line list.",
    },
    {
      question: "Can I copy each cleaned result separately?",
      answer:
        "Yes. Every result card has its own copy action so you can take only the version you need.",
    },
    {
      question: "Is this different from the case converter?",
      answer:
        "Yes. The case converter changes text format, while the text cleaner focuses on spacing, structure, and repeated line cleanup.",
    },
  ],
};

export const localizedWordCounterLabels: Record<Locale, WordCounterLabels> = {
  en: {
    inputLabel: "Paste your text",
    placeholder: "Paste a caption, article, note, or script.",
    helper: "Use the live counts to size a draft quickly, then scan the top terms to spot repetition.",
    defaultText:
      "Toolyflow helps creators check draft length, repeated words, and reading time before they publish.",
    clearText: "Clear text",
    copyText: "Copy text",
    copied: "Copied",
    words: "Words",
    characters: "Characters",
    noSpaces: "No spaces",
    sentences: "Sentences",
    paragraphs: "Paragraphs",
    readingTime: "Read time",
    topWords: "Top words",
    emptyTerms: "Add more text to see repeated terms here.",
  },
  tr: {
    inputLabel: "Metnini yapıştır",
    placeholder: "Caption, not, açıklama ya da script yapıştır.",
    helper: "Taslağın uzunluğunu hızlıca görmek için canlı sayıları kullan, ardından tekrar eden kelimeleri kontrol et.",
    defaultText:
      "Toolyflow, içerik üreticilerin yayınlamadan önce taslak uzunluğunu, tekrar eden kelimeleri ve okuma süresini kontrol etmesine yardımcı olur.",
    clearText: "Metni temizle",
    copyText: "Metni kopyala",
    copied: "Kopyalandı",
    words: "Kelime",
    characters: "Karakter",
    noSpaces: "Boşluksuz",
    sentences: "Cümle",
    paragraphs: "Paragraf",
    readingTime: "Okuma süresi",
    topWords: "Öne çıkan kelimeler",
    emptyTerms: "Burada tekrar eden kelimeleri görmek için biraz daha metin ekle.",
  },
  es: {
    inputLabel: "Pega tu texto",
    placeholder: "Pega un caption, nota, artículo o guion.",
    helper: "Usa los conteos en vivo para medir el borrador y luego revisa los términos repetidos.",
    defaultText:
      "Toolyflow ayuda a los creadores a revisar longitud, repetición y tiempo de lectura antes de publicar.",
    clearText: "Limpiar texto",
    copyText: "Copiar texto",
    copied: "Copiado",
    words: "Palabras",
    characters: "Caracteres",
    noSpaces: "Sin espacios",
    sentences: "Frases",
    paragraphs: "Párrafos",
    readingTime: "Tiempo de lectura",
    topWords: "Palabras repetidas",
    emptyTerms: "Añade más texto para ver términos repetidos.",
  },
  de: {
    inputLabel: "Text einfügen",
    placeholder: "Füge Caption, Notiz, Artikel oder Skript ein.",
    helper: "Nutze die Live-Zahlen für Länge und Wiederholung, bevor du den Text veröffentlichst.",
    defaultText:
      "Toolyflow hilft Creatorn dabei, Länge, Wiederholung und Lesezeit eines Textes vor der Veröffentlichung zu prüfen.",
    clearText: "Text leeren",
    copyText: "Text kopieren",
    copied: "Kopiert",
    words: "Wörter",
    characters: "Zeichen",
    noSpaces: "Ohne Leerzeichen",
    sentences: "Sätze",
    paragraphs: "Absätze",
    readingTime: "Lesezeit",
    topWords: "Häufige Wörter",
    emptyTerms: "Füge mehr Text ein, um wiederholte Wörter zu sehen.",
  },
  fr: {
    inputLabel: "Colle ton texte",
    placeholder: "Colle une légende, une note, un article ou un script.",
    helper: "Utilise les compteurs en direct pour mesurer le texte puis repérer les répétitions.",
    defaultText:
      "Toolyflow aide les créateurs à vérifier longueur, répétition et temps de lecture avant publication.",
    clearText: "Effacer le texte",
    copyText: "Copier le texte",
    copied: "Copié",
    words: "Mots",
    characters: "Caractères",
    noSpaces: "Sans espaces",
    sentences: "Phrases",
    paragraphs: "Paragraphes",
    readingTime: "Temps de lecture",
    topWords: "Mots fréquents",
    emptyTerms: "Ajoute plus de texte pour voir les mots répétés.",
  },
  pt: {
    inputLabel: "Cole seu texto",
    placeholder: "Cole uma legenda, nota, artigo ou roteiro.",
    helper: "Use as métricas ao vivo para medir o texto e depois revisar repetições.",
    defaultText:
      "A Toolyflow ajuda creators a revisar tamanho, repetição e tempo de leitura antes de publicar.",
    clearText: "Limpar texto",
    copyText: "Copiar texto",
    copied: "Copiado",
    words: "Palavras",
    characters: "Caracteres",
    noSpaces: "Sem espaços",
    sentences: "Frases",
    paragraphs: "Parágrafos",
    readingTime: "Tempo de leitura",
    topWords: "Palavras frequentes",
    emptyTerms: "Adicione mais texto para ver termos repetidos.",
  },
};

export const localizedTextCleanerLabels: Record<Locale, TextCleanerLabels> = {
  en: {
    inputLabel: "Paste messy text",
    placeholder: "Paste copied text with messy spaces, empty lines, or repeated rows.",
    helper: "Compare multiple cleaned outputs and copy only the one that fits the next step.",
    defaultText: "Toolyflow   helps creators\n\nclean copied text faster.\nToolyflow   helps creators",
    clearText: "Clear text",
    copy: "Copy",
    copied: "Copied",
    cleanedText: "Cleaned text",
    removeBlankLines: "No blank lines",
    uniqueLines: "Unique lines",
    singleLine: "Single line",
    commaList: "Comma list",
    noText: "No text yet.",
  },
  tr: {
    inputLabel: "Dağınık metni yapıştır",
    placeholder: "Bozuk boşluklar, boş satırlar veya tekrar eden satırlar içeren metni yapıştır.",
    helper: "Birden fazla temiz çıktıyı karşılaştır ve yalnızca işine yarayanı kopyala.",
    defaultText: "Toolyflow   içerik üreticilere yardım eder.\n\nKopyalanan metni   daha hızlı temizler.\nToolyflow   içerik üreticilere yardım eder.",
    clearText: "Metni temizle",
    copy: "Kopyala",
    copied: "Kopyalandı",
    cleanedText: "Temizlenmiş metin",
    removeBlankLines: "Boş satırlar yok",
    uniqueLines: "Tekil satırlar",
    singleLine: "Tek satır",
    commaList: "Virgüllü liste",
    noText: "Henüz metin yok.",
  },
  es: {
    inputLabel: "Pega texto desordenado",
    placeholder: "Pega texto con espacios rotos, líneas vacías o filas repetidas.",
    helper: "Compara varias salidas limpias y copia solo la que te sirve.",
    defaultText: "Toolyflow   ayuda a creadores.\n\nLimpia texto copiado   más rápido.\nToolyflow   ayuda a creadores.",
    clearText: "Limpiar texto",
    copy: "Copiar",
    copied: "Copiado",
    cleanedText: "Texto limpio",
    removeBlankLines: "Sin líneas vacías",
    uniqueLines: "Líneas únicas",
    singleLine: "Una línea",
    commaList: "Lista con comas",
    noText: "Aún no hay texto.",
  },
  de: {
    inputLabel: "Unordentlichen Text einfügen",
    placeholder: "Füge Text mit kaputten Leerzeichen, Leerzeilen oder doppelten Zeilen ein.",
    helper: "Vergleiche mehrere bereinigte Versionen und kopiere nur die passende.",
    defaultText: "Toolyflow   hilft Creatorn.\n\nKopierter Text   wird schneller bereinigt.\nToolyflow   hilft Creatorn.",
    clearText: "Text leeren",
    copy: "Kopieren",
    copied: "Kopiert",
    cleanedText: "Bereinigter Text",
    removeBlankLines: "Ohne Leerzeilen",
    uniqueLines: "Eindeutige Zeilen",
    singleLine: "Einzeilig",
    commaList: "Kommaliste",
    noText: "Noch kein Text.",
  },
  fr: {
    inputLabel: "Colle un texte brouillon",
    placeholder: "Colle un texte avec espaces cassés, lignes vides ou doublons.",
    helper: "Compare plusieurs sorties propres et copie seulement celle qui te sert.",
    defaultText: "Toolyflow   aide les créateurs.\n\nNettoie le texte copié   plus vite.\nToolyflow   aide les créateurs.",
    clearText: "Effacer le texte",
    copy: "Copier",
    copied: "Copié",
    cleanedText: "Texte nettoyé",
    removeBlankLines: "Sans lignes vides",
    uniqueLines: "Lignes uniques",
    singleLine: "Une ligne",
    commaList: "Liste avec virgules",
    noText: "Pas encore de texte.",
  },
  pt: {
    inputLabel: "Cole texto bagunçado",
    placeholder: "Cole texto com espaços quebrados, linhas vazias ou linhas repetidas.",
    helper: "Compare várias saídas limpas e copie só a que faz sentido para o próximo passo.",
    defaultText: "A Toolyflow   ajuda creators.\n\nLimpa texto copiado   mais rápido.\nA Toolyflow   ajuda creators.",
    clearText: "Limpar texto",
    copy: "Copiar",
    copied: "Copiado",
    cleanedText: "Texto limpo",
    removeBlankLines: "Sem linhas vazias",
    uniqueLines: "Linhas únicas",
    singleLine: "Uma linha",
    commaList: "Lista com vírgulas",
    noText: "Ainda não há texto.",
  },
};

export const localizedWordCounterTools: Record<Locale, ExtraLocalizedTool> = {
  en: {
    slug: "word-counter",
    name: "Word Counter",
    shortDescription: "Count words, characters, reading time, and repeated terms in one clean view.",
    description:
      "Measure draft length fast with live word, sentence, paragraph, and reading-time stats, then scan repeated terms before publishing.",
    eyebrow: "Text workflow tool",
    accentLabel: "COUNT",
    metaTitle: "Word Counter — Free Online | Toolyflow",
    metaDescription:
      "Count words, characters, sentences, paragraphs, and reading time with a free online word counter.",
    keywords: ["word counter", "character counter", "reading time calculator", "word count tool"],
    highlights: [
      "Shows draft size, structure, and reading time in one place.",
      "Top repeated terms help you catch flat or repetitive phrasing quickly.",
      "Useful for captions, scripts, notes, and longer drafts.",
    ],
    structuredDescription:
      "Free online word counter with characters, sentences, paragraphs, reading time, and repeated term tracking.",
    content: wordCounterContentEn,
  },
  tr: {
    slug: "word-counter",
    name: "Kelime Sayacı",
    shortDescription: "Kelime, karakter, okuma süresi ve tekrar eden kelimeleri tek ekranda görün.",
    description:
      "Taslağın uzunluğunu hızlıca ölçün; kelime, cümle, paragraf ve okuma süresi sayılarıyla metni yayın öncesi kontrol edin.",
    eyebrow: "Metin iş akışı aracı",
    accentLabel: "COUNT",
    metaTitle: "Kelime Sayacı — Ücretsiz Online | Toolyflow",
    metaDescription:
      "Kelime, karakter, cümle, paragraf ve okuma süresini anında hesapla. Ücretsiz online kelime sayacı.",
    keywords: ["kelime sayacı", "karakter sayacı", "okuma süresi hesaplama", "kelime sayma aracı"],
    highlights: [
      "Metnin boyutunu, yapısını ve okuma süresini tek yerde gösterir.",
      "Tekrar eden kelimeler daha yavan veya fazla uzayan cümleleri hızlıca yakalatır.",
      "Caption, açıklama, not ve script kontrolü için uygundur.",
    ],
    structuredDescription:
      "Kelime, karakter, cümle, paragraf ve okuma süresi metrikleri sunan ücretsiz online kelime sayacı.",
    content: {
      howToUseTitle: "Kelime sayacı nasıl kullanılır",
      howToUseDescription:
        "Metni yapıştırın, ana sayıları okuyun ve tekrar eden kelimeler bölümünü kullanarak gereksiz tekrarları görün.",
      howToUseSteps: [
        {
          title: "Metni yapıştırın",
          body:
            "Caption, açıklama, script veya not gibi kontrol etmek istediğiniz metni tek alana bırakın.",
        },
        {
          title: "Ana sayıları okuyun",
          body:
            "Kelime, karakter, boşluksuz karakter, cümle, paragraf ve okuma süresi kartlarını birlikte kontrol edin.",
        },
        {
          title: "Tekrar eden kelimeleri tarayın",
          body:
            "Metnin fazla kendini tekrar edip etmediğini anlamak için öne çıkan kelimeler bloğunu kullanın.",
        },
      ],
      useCasesTitle: "En iyi kullanım senaryoları",
      useCasesDescription:
        "Bu araç; bir metni yayınlamadan, göndermeden veya kısaltmadan önce hızlı kontrol gerektiğinde daha değerlidir.",
      useCases: [
        {
          title: "Caption ve kısa açıklama kontrolü",
          description:
            "Instagram, TikTok veya X metninin fazla kısa, gereksiz uzun ya da tekrar dolu olup olmadığını anlayın.",
        },
        {
          title: "YouTube açıklaması ve script",
          description:
            "Daha uzun taslaklarda paragraf ve okuma süresi sayılarıyla hızlı bir genel bakış alın.",
        },
        {
          title: "Revizyon sonrası karşılaştırma",
          description:
            "Temizlik veya kısaltma sonrası metnin gerçekten daha sıkı hale gelip gelmediğini görün.",
        },
      ],
      examplesTitle: "Örnekler",
      examplesDescription:
        "İyi bir kelime sayacı hem metnin boyutunu hem de tekrar seviyesini hızlı göstermelidir.",
      examples: [
        {
          title: "Creator caption kontrolü",
          inputLabel: "Girdi",
          input: "Yeni creator aracı için kısa bir duyuru metni ve net bir CTA satırı.",
          outputLabel: "Okunan değer",
          output: "Kelime: 11\nCümle: 1\nOkuma süresi: <1m",
          note: "Kısa bir caption’ın gerçekten yeterli olup olmadığını hızlıca görürsünüz.",
        },
        {
          title: "Taslak taraması",
          inputLabel: "Girdi",
          input: "İki paragraflı, growth, içerik ve workflow kelimelerini tekrar eden daha uzun bir taslak.",
          outputLabel: "Okunan değer",
          output: "Paragraf: 2\nÖne çıkan kelimeler: içerik (4), workflow (3), growth (3)",
          note: "Metin kısaltmak yerine tekrarları azaltmak istediğinizde faydalıdır.",
        },
      ],
      faqTitle: "Kelime sayacı sık sorulan sorular",
      faqs: [
        {
          question: "Kelime sayacı neleri ölçer?",
          answer:
            "Kelime, karakter, boşluksuz karakter, cümle, paragraf, okuma süresi ve tekrar eden kelimeleri birlikte gösterir.",
        },
        {
          question: "Kısa caption’larda da işe yarar mı?",
          answer:
            "Evet. Kısa caption’larda da hızlıca metnin yeterli olup olmadığını ve kendini tekrar edip etmediğini gösterir.",
        },
        {
          question: "Öne çıkan kelimeler ne işe yarar?",
          answer:
            "Yavan, tekrar eden veya gereksiz yere uzayan taslakları daha hızlı fark etmeye yardımcı olur.",
        },
      ],
    },
  },
  es: {
    ...{
      slug: "word-counter",
      name: "Contador de palabras",
      shortDescription: "Cuenta palabras, caracteres y tiempo de lectura en una sola vista.",
      description:
        "Mide el tamaño del borrador con palabras, frases, párrafos y tiempo de lectura antes de publicar.",
      eyebrow: "Herramienta de texto",
      accentLabel: "COUNT",
      metaTitle: "Contador de palabras — Gratis online | Toolyflow",
      metaDescription:
        "Cuenta palabras, caracteres, frases, párrafos y tiempo de lectura con un contador gratis online.",
      keywords: ["contador de palabras", "contador de caracteres", "tiempo de lectura", "herramienta de texto"],
      highlights: [
        "Muestra tamaño, estructura y tiempo de lectura en un solo lugar.",
        "Las palabras repetidas ayudan a detectar frases planas o redundantes.",
        "Útil para captions, notas, guiones y descripciones.",
      ],
      structuredDescription:
        "Contador de palabras gratis con métricas de caracteres, frases, párrafos y tiempo de lectura.",
      content: {
        ...wordCounterContentEn,
        howToUseDescription:
          "Pega el texto, revisa los conteos principales y usa el bloque de palabras repetidas para encontrar redundancias.",
      },
    },
  },
  de: {
    ...{
      slug: "word-counter",
      name: "Wortzähler",
      shortDescription: "Zähle Wörter, Zeichen und Lesezeit in einer klaren Ansicht.",
      description:
        "Prüfe Textlänge, Sätze, Absätze und Lesezeit schnell vor dem Veröffentlichen.",
      eyebrow: "Text-Tool",
      accentLabel: "COUNT",
      metaTitle: "Wortzähler — Kostenlos online | Toolyflow",
      metaDescription:
        "Zähle Wörter, Zeichen, Sätze, Absätze und Lesezeit mit einem kostenlosen Online-Wortzähler.",
      keywords: ["wortzähler", "zeichenzähler", "lesezeit", "text tool"],
      highlights: [
        "Zeigt Größe, Struktur und Lesezeit an einem Ort.",
        "Wiederholte Wörter machen Redundanz schneller sichtbar.",
        "Nützlich für Captions, Notizen, Skripte und Beschreibungen.",
      ],
      structuredDescription:
        "Kostenloser Wortzähler mit Zeichen-, Satz-, Absatz- und Lesezeitmetriken.",
      content: {
        ...wordCounterContentEn,
        howToUseDescription:
          "Füge den Text ein, lies die Kernzahlen und prüfe wiederholte Wörter für schnellere Überarbeitungen.",
      },
    },
  },
  fr: {
    ...{
      slug: "word-counter",
      name: "Compteur de mots",
      shortDescription: "Compte mots, caractères et temps de lecture dans une vue claire.",
      description:
        "Mesure rapidement la taille du brouillon avec mots, phrases, paragraphes et temps de lecture.",
      eyebrow: "Outil texte",
      accentLabel: "COUNT",
      metaTitle: "Compteur de mots — Gratuit en ligne | Toolyflow",
      metaDescription:
        "Comptez mots, caractères, phrases, paragraphes et temps de lecture avec un outil gratuit.",
      keywords: ["compteur de mots", "compteur de caractères", "temps de lecture", "outil texte"],
      highlights: [
        "Affiche taille, structure et temps de lecture au même endroit.",
        "Les mots répétés aident à voir les redites plus vite.",
        "Utile pour légendes, notes, scripts et descriptions.",
      ],
      structuredDescription:
        "Compteur de mots gratuit avec caractères, phrases, paragraphes et temps de lecture.",
      content: {
        ...wordCounterContentEn,
        howToUseDescription:
          "Colle le texte, lis les chiffres principaux puis regarde les mots répétés pour repérer les lourdeurs.",
      },
    },
  },
  pt: {
    ...{
      slug: "word-counter",
      name: "Contador de palavras",
      shortDescription: "Conte palavras, caracteres e tempo de leitura em uma visão clara.",
      description:
        "Meça rapidamente o tamanho do texto com palavras, frases, parágrafos e tempo de leitura.",
      eyebrow: "Ferramenta de texto",
      accentLabel: "COUNT",
      metaTitle: "Contador de palavras — Grátis online | Toolyflow",
      metaDescription:
        "Conte palavras, caracteres, frases, parágrafos e tempo de leitura com um contador grátis online.",
      keywords: ["contador de palavras", "contador de caracteres", "tempo de leitura", "ferramenta de texto"],
      highlights: [
        "Mostra tamanho, estrutura e tempo de leitura em um só lugar.",
        "Palavras repetidas ajudam a detectar texto redundante mais rápido.",
        "Útil para legendas, notas, roteiros e descrições.",
      ],
      structuredDescription:
        "Contador de palavras grátis com métricas de caracteres, frases, parágrafos e tempo de leitura.",
      content: {
        ...wordCounterContentEn,
        howToUseDescription:
          "Cole o texto, leia os números principais e use as palavras repetidas para revisar melhor.",
      },
    },
  },
};

export const localizedTextCleanerTools: Record<Locale, ExtraLocalizedTool> = {
  en: {
    slug: "text-cleaner",
    name: "Text Cleaner",
    shortDescription: "Clean spacing, blank lines, duplicate rows, and one-line outputs fast.",
    description:
      "Turn messy copied text into cleaner versions you can paste right away, including unique lines and single-line output.",
    eyebrow: "Text cleanup tool",
    accentLabel: "CLEAN",
    metaTitle: "Text Cleaner — Free Online | Toolyflow",
    metaDescription:
      "Clean messy text, remove blank lines, deduplicate rows, and create one-line output with a free online text cleaner.",
    keywords: ["text cleaner", "remove blank lines", "deduplicate text", "clean copied text"],
    highlights: [
      "Built for copied text that looks usable but arrives with broken structure.",
      "Shows multiple cleaned outputs side by side so you can pick the right format fast.",
      "Useful for notes, captions, export lists, prompts, and metadata fields.",
    ],
    structuredDescription:
      "Free online text cleaner for spacing cleanup, blank line removal, duplicate line cleanup, and single-line output.",
    content: textCleanerContentEn,
  },
  tr: {
    slug: "text-cleaner",
    name: "Metin Temizleyici",
    shortDescription: "Bozuk boşlukları, boş satırları ve tekrar eden satırları hızlıca temizleyin.",
    description:
      "Dağınık kopyalanmış metni daha temiz, tek satırlı veya tekil satırlı çıktılara dönüştürün ve doğru sürümü anında kopyalayın.",
    eyebrow: "Metin temizleme aracı",
    accentLabel: "CLEAN",
    metaTitle: "Metin Temizleyici — Ücretsiz Online | Toolyflow",
    metaDescription:
      "Bozuk boşlukları temizle, boş satırları kaldır, tekrar eden satırları ayıkla. Ücretsiz online metin temizleyici.",
    keywords: ["metin temizleyici", "boş satır silme", "tekrar eden satır temizleme", "kopyalanmış metin temizleme"],
    highlights: [
      "Kopyalanmış ama yapısı bozulmuş metinler için hızlı çalışır.",
      "Birden fazla temiz çıktı verdiği için doğru formatı sayfadan çıkmadan seçebilirsiniz.",
      "Not, caption, prompt ve export listeleri için uygundur.",
    ],
    structuredDescription:
      "Boşluk temizleme, boş satır kaldırma, tekrar eden satır ayıklama ve tek satır çıktısı sunan ücretsiz online metin temizleyici.",
    content: {
      howToUseTitle: "Metin temizleyici nasıl kullanılır",
      howToUseDescription:
        "Dağınık metni bir kez yapıştırın, sonra ihtiyacınız olan temiz formatı seçip doğrudan kopyalayın.",
      howToUseSteps: [
        {
          title: "Ham metni yapıştırın",
          body:
            "Bozuk boşluklar, boş satırlar veya tekrar eden satırlar içeren metni araca bırakın.",
        },
        {
          title: "Temiz çıktıları karşılaştırın",
          body:
            "Temizlenmiş metin, boş satırsız sürüm, tekil satırlar, tek satır ve virgüllü liste çıktısını birlikte görün.",
        },
        {
          title: "Doğru sürümü kopyalayın",
          body:
            "İş akışınıza uygun olan sürümü tek tıkla kopyalayın ve tekrar elle düzenleme yapmayın.",
        },
      ],
      useCasesTitle: "En iyi kullanım senaryoları",
      useCasesDescription:
        "Bu araç, içerik aslında işe yarar durumdayken yapısal dağınıklığın metni kullanılamaz hale getirdiği anlarda daha değerlidir.",
      useCases: [
        {
          title: "Chat veya dokümandan kopyalanan metni düzeltmek",
          description:
            "Bozuk boşlukları ve anlamsız boş satırları temizleyip metni yeniden kullanılabilir hale getirin.",
        },
        {
          title: "Liste temizliği yapmak",
          description:
            "Tekrarlı satırları kaldırın veya alt alta gelen bir listeyi virgüllü düzene çevirin.",
        },
        {
          title: "Tek satır gereken alanlar",
          description:
            "Form, prompt kutusu veya metadata alanı için çok satırlı metni tek satıra indirin.",
        },
      ],
      examplesTitle: "Örnekler",
      examplesDescription:
        "İyi bir metin temizleyici, dağınık girdiyi tek hamlede kullanılabilir formata getirmelidir.",
      examples: [
        {
          title: "Bozuk boşluk temizliği",
          inputLabel: "Girdi",
          input: "Toolyflow    içerik üreticilere yardım eder.\n\nKopyalanan metni   daha hızlı temizler.",
          outputLabel: "Temiz metin",
          output: "Toolyflow içerik üreticilere yardım eder.\nKopyalanan metni daha hızlı temizler.",
          note: "İçerik doğru ama boşluk yapısı bozuk olduğunda işe yarar.",
        },
        {
          title: "Tekrarlı liste temizliği",
          inputLabel: "Girdi",
          input: "bio fikirleri\nkullanıcı adı fikirleri\nbio fikirleri\nhashtag fikirleri",
          outputLabel: "Tekil satırlar",
          output: "bio fikirleri\nkullanıcı adı fikirleri\nhashtag fikirleri",
          note: "Notlar, fikir listeleri ve export sonuçlarında sık kullanılır.",
        },
      ],
      faqTitle: "Metin temizleyici sık sorulan sorular",
      faqs: [
        {
          question: "Metin temizleyici neyi temizler?",
          answer:
            "Bozuk boşlukları düzeltmeye, boş satırları kaldırmaya, tekil satır listesi çıkarmaya ve metni tek satıra indirmeye yardımcı olur.",
        },
        {
          question: "Her çıktıyı ayrı kopyalayabilir miyim?",
          answer:
            "Evet. Her sonuç kartının ayrı kopyalama butonu vardır; sadece ihtiyacınız olan sürümü alabilirsiniz.",
        },
        {
          question: "Bu araç case converter’dan farklı mı?",
          answer:
            "Evet. Case converter yazım formatını değiştirir, metin temizleyici ise yapıyı ve boşluk düzenini temizler.",
        },
      ],
    },
  },
  es: {
    ...{
      slug: "text-cleaner",
      name: "Limpiador de texto",
      shortDescription: "Limpia espacios rotos, líneas vacías y filas repetidas rápidamente.",
      description:
        "Convierte texto copiado y desordenado en versiones más limpias, una sola línea o líneas únicas.",
      eyebrow: "Herramienta de limpieza",
      accentLabel: "CLEAN",
      metaTitle: "Limpiador de texto — Gratis online | Toolyflow",
      metaDescription:
        "Limpia espacios, elimina líneas vacías, quita duplicados y crea texto en una sola línea con una herramienta gratis.",
      keywords: ["limpiador de texto", "quitar líneas vacías", "texto duplicado", "limpiar texto copiado"],
      highlights: [
        "Útil para texto copiado que llega con estructura rota.",
        "Muestra varias salidas limpias al mismo tiempo.",
        "Funciona bien para notas, captions, listas y prompts.",
      ],
      structuredDescription:
        "Herramienta gratis para limpiar espacios, quitar líneas vacías y generar texto en una sola línea.",
      content: {
        ...textCleanerContentEn,
        howToUseDescription:
          "Pega el texto desordenado, compara las salidas y copia solo la versión que encaja con el siguiente paso.",
      },
    },
  },
  de: {
    ...{
      slug: "text-cleaner",
      name: "Textbereiniger",
      shortDescription: "Bereinige kaputte Leerzeichen, Leerzeilen und doppelte Zeilen schnell.",
      description:
        "Verwandle unordentlich kopierten Text in sauberere Versionen, Einzeiler oder eindeutige Listen.",
      eyebrow: "Bereinigungstool",
      accentLabel: "CLEAN",
      metaTitle: "Textbereiniger — Kostenlos online | Toolyflow",
      metaDescription:
        "Bereinige Leerzeichen, entferne Leerzeilen, lösche doppelte Zeilen und erstelle Einzeiler mit einem kostenlosen Tool.",
      keywords: ["text bereinigen", "leerzeilen entfernen", "doppelte zeilen", "kopierten text bereinigen"],
      highlights: [
        "Hilft bei kopiertem Text mit kaputter Struktur.",
        "Zeigt mehrere saubere Varianten nebeneinander.",
        "Gut für Notizen, Captions, Listen und Prompt-Felder.",
      ],
      structuredDescription:
        "Kostenloses Tool zum Bereinigen von Leerzeichen, Leerzeilen und doppelten Zeilen.",
      content: {
        ...textCleanerContentEn,
        howToUseDescription:
          "Füge den unordentlichen Text ein, vergleiche die Ergebnisse und kopiere nur die passende Version.",
      },
    },
  },
  fr: {
    ...{
      slug: "text-cleaner",
      name: "Nettoyeur de texte",
      shortDescription: "Nettoie rapidement les espaces cassés, lignes vides et doublons.",
      description:
        "Transforme un texte copié et brouillon en versions plus propres, en une ligne ou en lignes uniques.",
      eyebrow: "Outil de nettoyage",
      accentLabel: "CLEAN",
      metaTitle: "Nettoyeur de texte — Gratuit en ligne | Toolyflow",
      metaDescription:
        "Nettoyez les espaces, supprimez les lignes vides, retirez les doublons et créez une sortie sur une ligne.",
      keywords: ["nettoyeur de texte", "supprimer lignes vides", "texte dupliqué", "texte copié"],
      highlights: [
        "Utile pour les textes copiés avec une structure cassée.",
        "Affiche plusieurs sorties propres côte à côte.",
        "Pratique pour notes, légendes, listes et prompts.",
      ],
      structuredDescription:
        "Outil gratuit pour nettoyer les espaces, retirer les lignes vides et produire une sortie compacte.",
      content: {
        ...textCleanerContentEn,
        howToUseDescription:
          "Colle le texte brouillon, compare les sorties puis copie seulement celle qui te convient.",
      },
    },
  },
  pt: {
    ...{
      slug: "text-cleaner",
      name: "Limpador de texto",
      shortDescription: "Limpe espaços quebrados, linhas vazias e linhas repetidas rapidamente.",
      description:
        "Transforme texto copiado e bagunçado em versões mais limpas, uma linha única ou linhas sem repetição.",
      eyebrow: "Ferramenta de limpeza",
      accentLabel: "CLEAN",
      metaTitle: "Limpador de texto — Grátis online | Toolyflow",
      metaDescription:
        "Limpe espaços, remova linhas vazias, elimine linhas duplicadas e gere saída em uma linha com uma ferramenta grátis.",
      keywords: ["limpador de texto", "remover linhas vazias", "texto duplicado", "limpar texto copiado"],
      highlights: [
        "Ajuda com texto copiado que chega com estrutura quebrada.",
        "Mostra várias saídas limpas ao mesmo tempo.",
        "Útil para notas, legendas, listas e prompts.",
      ],
      structuredDescription:
        "Ferramenta grátis para limpar espaços, linhas vazias e linhas duplicadas.",
      content: {
        ...textCleanerContentEn,
        howToUseDescription:
          "Cole o texto bagunçado, compare as saídas e copie só a versão que se encaixa melhor.",
      },
    },
  },
};
