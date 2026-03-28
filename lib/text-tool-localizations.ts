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
    "Paste the draft, scan the core counts, then use the top terms list to catch repetition before you publish.",
  howToUseSteps: [
    {
      title: "Paste the text",
      body:
        "Drop in a caption, script, article section, or note so the tool can calculate live word, sentence, and paragraph counts.",
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
      title: "Post caption check",
      inputLabel: "Input",
      input: "Short launch note for a new tool with a clear follow line and one repeated phrase.",
      outputLabel: "What you read",
      output: "Words: 15\nSentences: 1\nReading time: <1m",
      note: "Useful when you want to know whether a short caption still says enough.",
    },
    {
      title: "Draft audit",
      inputLabel: "Input",
      input: "A longer draft with two paragraphs and repeated terms around growth, content, and posting.",
      outputLabel: "What you read",
      output: "Paragraphs: 2\nTop words: content (4), posting (3), growth (3)",
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

const localizedWordCounterContent: Record<Locale, ToolContentBlock> = {
  en: wordCounterContentEn,
  tr: {
    howToUseTitle: "Kelime sayacı nasıl kullanılır",
    howToUseDescription:
      "Metni yapıştırın, ana sayıları okuyun ve tekrar eden kelimeler bölümünü kullanarak gereksiz tekrarları görün.",
    howToUseSteps: [
      {
        title: "Metni yapıştırın",
        body: "Caption, açıklama, script veya not gibi kontrol etmek istediğiniz metni tek alana bırakın.",
      },
      {
        title: "Ana sayıları okuyun",
        body: "Kelime, karakter, boşluksuz karakter, cümle, paragraf ve okuma süresi kartlarını birlikte kontrol edin.",
      },
      {
        title: "Tekrar eden kelimeleri tarayın",
        body: "Metnin fazla kendini tekrar edip etmediğini anlamak için öne çıkan kelimeler bloğunu kullanın.",
      },
    ],
    useCasesTitle: "En iyi kullanım senaryoları",
    useCasesDescription:
      "Bu araç; bir metni yayınlamadan, göndermeden veya kısaltmadan önce hızlı kontrol gerektiğinde daha değerlidir.",
    useCases: [
      {
        title: "Paylaşım metni ve kısa açıklama kontrolü",
        description:
          "Instagram, TikTok veya X için yazdığınız metnin fazla kısa, gereksiz uzun ya da tekrar dolu olup olmadığını anlayın.",
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
    examplesDescription: "İyi bir kelime sayacı hem metnin boyutunu hem de tekrar seviyesini hızlı göstermelidir.",
    examples: [
      {
          title: "Paylaşım metni kontrolü",
        inputLabel: "Girdi",
          input: "Yeni araç duyurusu için kısa bir paylaşım metni ve net bir takip çağrısı.",
        outputLabel: "Okunan değer",
        output: "Kelime: 11\nCümle: 1\nOkuma süresi: <1m",
          note: "Kısa bir paylaşım metninin gerçekten yeterli olup olmadığını hızlıca görürsünüz.",
      },
      {
        title: "Taslak taraması",
        inputLabel: "Girdi",
          input: "İki paragraflı, büyüme, içerik ve paylaşım kelimelerini tekrar eden daha uzun bir taslak.",
        outputLabel: "Okunan değer",
          output: "Paragraf: 2\nÖne çıkan kelimeler: içerik (4), paylaşım (3), büyüme (3)",
        note: "Metni kısaltmak yerine tekrarları azaltmak istediğinizde faydalıdır.",
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
          question: "Kısa paylaşım metinlerinde de işe yarar mı?",
        answer:
            "Evet. Kısa paylaşım metinlerinde de metnin yeterli olup olmadığını ve kendini tekrar edip etmediğini hızlıca gösterir.",
      },
      {
        question: "Öne çıkan kelimeler ne işe yarar?",
        answer:
          "Yavan, tekrar eden veya gereksiz yere uzayan taslakları daha hızlı fark etmeye yardımcı olur.",
      },
    ],
  },
  es: {
    howToUseTitle: "Cómo usar el contador de palabras",
    howToUseDescription:
      "Pega el texto, revisa los datos principales y usa el bloque de palabras repetidas para detectar redundancias rápido.",
    howToUseSteps: [
      {
        title: "Pega el texto",
        body: "Añade una leyenda, guion, nota o descripción para calcular palabras, frases y párrafos en vivo.",
      },
      {
        title: "Lee las métricas clave",
        body: "Usa las tarjetas para ver palabras, caracteres, caracteres sin espacios, frases, párrafos y tiempo de lectura.",
      },
      {
        title: "Revisa las palabras repetidas",
        body: "El bloque de términos frecuentes te ayuda a encontrar repeticiones antes de publicar o compartir el texto.",
      },
    ],
    useCasesTitle: "Mejores casos de uso",
    useCasesDescription:
      "Funciona mejor cuando necesitas una revisión rápida del tamaño del texto antes de publicar, entregar o recortar.",
    useCases: [
      {
        title: "Textos para Instagram, TikTok y X",
        description:
          "Comprueba si un texto para publicar es demasiado corto, repetitivo o más largo de lo necesario.",
      },
      {
        title: "Descripciones y guiones de YouTube",
        description: "Revisa párrafos y tiempo de lectura cuando el borrador ya es más largo.",
      },
      {
        title: "Edición y reescritura",
        description: "Compara cifras después de limpiar el texto para ver si realmente quedó más claro.",
      },
    ],
    examplesTitle: "Ejemplos",
    examplesDescription: "Un buen contador de palabras debe ayudarte a medir tamaño y repetición de un vistazo.",
    examples: [
      {
        title: "Control del texto de publicación",
        inputLabel: "Entrada",
        input: "Nota corta de lanzamiento para una nueva herramienta con llamada clara y una frase repetida.",
        outputLabel: "Lo que ves",
        output: "Palabras: 16\nFrases: 1\nTiempo de lectura: <1m",
        note: "Útil cuando quieres saber si un texto breve de publicación sigue diciendo lo suficiente.",
      },
      {
        title: "Auditoría de borrador",
        inputLabel: "Entrada",
        input: "Un borrador más largo con dos párrafos y varios términos repetidos sobre crecimiento, contenido y publicación.",
        outputLabel: "Lo que ves",
        output: "Párrafos: 2\nPalabras destacadas: contenido (4), publicación (3), crecimiento (3)",
        note: "Sirve cuando la reescritura debe reducir repetición, no solo acortar texto.",
      },
    ],
    faqTitle: "Preguntas frecuentes del contador de palabras",
    faqs: [
      {
        question: "¿Qué mide el contador de palabras?",
        answer:
          "Mide palabras, caracteres, caracteres sin espacios, frases, párrafos, tiempo de lectura y términos repetidos.",
      },
      {
        question: "¿Sirve para textos cortos de publicación y borradores largos?",
        answer:
          "Sí. Es útil tanto para textos rápidos de publicación como para descripciones, notas y guiones más largos.",
      },
      {
        question: "¿Por qué son útiles las palabras frecuentes?",
        answer:
          "Ayudan a ver repeticiones rápidas cuando un texto suena plano o cargado pero no sabes por qué.",
      },
    ],
  },
  de: {
    howToUseTitle: "So nutzt du den Wortzähler",
    howToUseDescription:
      "Füge den Text ein, lies die Kernzahlen ab und nutze die häufigen Wörter, um Wiederholungen schnell zu erkennen.",
    howToUseSteps: [
      {
        title: "Text einfügen",
        body: "Füge Caption, Skript, Notiz oder Beschreibung ein, damit Wörter, Sätze und Absätze live berechnet werden.",
      },
      {
        title: "Hauptwerte prüfen",
        body: "Die Karten zeigen Wörter, Zeichen, Zeichen ohne Leerzeichen, Sätze, Absätze und Lesezeit auf einen Blick.",
      },
      {
        title: "Wiederholungen prüfen",
        body: "Mit den häufigen Wörtern erkennst du übernutzte Begriffe vor dem Veröffentlichen schneller.",
      },
    ],
    useCasesTitle: "Beste Einsatzfälle",
    useCasesDescription:
      "Das Tool ist am stärksten, wenn du vor Veröffentlichung, Abgabe oder Kürzung schnell die Textgröße prüfen willst.",
    useCases: [
      {
        title: "Captions für Instagram, TikTok und X",
        description: "Prüfe, ob ein kurzer Text zu knapp, zu repetitiv oder unnötig lang geworden ist.",
      },
      {
        title: "YouTube-Beschreibungen und Skripte",
        description: "Absatz- und Lesezeitwerte helfen bei längeren Entwürfen für einen schnellen Überblick.",
      },
      {
        title: "Editing und Überarbeitung",
        description: "Vergleiche die Zahlen nach einer Bereinigung, um zu sehen, ob der Text wirklich straffer wurde.",
      },
    ],
    examplesTitle: "Beispiele",
    examplesDescription: "Ein guter Wortzähler sollte Textgröße und Wiederholung schnell sichtbar machen.",
    examples: [
      {
        title: "Caption-Check",
        inputLabel: "Eingabe",
        input: "Kurze Launch-Notiz für ein neues Tool mit klarem Hinweis und einem wiederholten Ausdruck.",
        outputLabel: "Was du liest",
        output: "Wörter: 15\nSätze: 1\nLesezeit: <1m",
        note: "Hilfreich, wenn du wissen willst, ob eine kurze Caption trotzdem genug sagt.",
      },
      {
        title: "Entwurfsprüfung",
        inputLabel: "Eingabe",
        input: "Ein längerer Entwurf mit zwei Absätzen und wiederholten Begriffen rund um Wachstum, Content und Workflow.",
        outputLabel: "Was du liest",
        output: "Absätze: 2\nTop-Wörter: Content (4), Workflow (3), Wachstum (3)",
        note: "Praktisch, wenn die Überarbeitung Wiederholungen entfernen soll statt nur zu kürzen.",
      },
    ],
    faqTitle: "Wortzähler FAQ",
    faqs: [
      {
        question: "Was misst der Wortzähler?",
        answer:
          "Er misst Wörter, Zeichen, Zeichen ohne Leerzeichen, Sätze, Absätze, Lesezeit und wiederholte Begriffe.",
      },
      {
        question: "Kann ich ihn für kurze Captions und lange Texte nutzen?",
        answer:
          "Ja. Er funktioniert für schnelle Caption-Checks genauso wie für längere Beschreibungen, Notizen und Skripte.",
      },
      {
        question: "Warum sind häufige Wörter hilfreich?",
        answer:
          "Sie helfen, Wiederholungen schnell zu sehen, besonders wenn ein Text flacher klingt als erwartet.",
      },
    ],
  },
  fr: {
    howToUseTitle: "Comment utiliser le compteur de mots",
    howToUseDescription:
      "Colle le texte, lis les chiffres principaux puis regarde les mots fréquents pour repérer les répétitions vite.",
    howToUseSteps: [
      {
        title: "Colle le texte",
        body: "Ajoute une légende, un script, une note ou une description pour calculer mots, phrases et paragraphes en direct.",
      },
      {
        title: "Lis les métriques clés",
        body: "Les cartes affichent mots, caractères, caractères sans espaces, phrases, paragraphes et temps de lecture.",
      },
      {
        title: "Repère les répétitions",
        body: "Le bloc des mots fréquents aide à voir les termes trop répétés avant publication.",
      },
    ],
    useCasesTitle: "Meilleurs cas d’usage",
    useCasesDescription:
      "Cet outil est le plus utile quand tu veux vérifier rapidement la taille d’un texte avant publication, envoi ou coupe.",
    useCases: [
      {
        title: "Légendes Instagram, TikTok et X",
        description: "Vérifie si un texte de publication est trop court, trop répétitif ou plus long que nécessaire.",
      },
      {
        title: "Descriptions et scripts YouTube",
        description: "Les paragraphes et le temps de lecture donnent une vue rapide sur un brouillon plus long.",
      },
      {
        title: "Réécriture et édition",
        description: "Compare les chiffres après nettoyage pour voir si le texte est vraiment devenu plus serré.",
      },
    ],
    examplesTitle: "Exemples",
    examplesDescription: "Un bon compteur de mots doit montrer rapidement la taille et la répétition du texte.",
    examples: [
      {
        title: "Vérification du texte de publication",
        inputLabel: "Entrée",
        input: "Courte note de lancement pour un nouvel outil avec appel clair et une phrase répétée.",
        outputLabel: "Ce que tu lis",
        output: "Mots : 15\nPhrases : 1\nTemps de lecture : <1m",
        note: "Utile quand tu veux savoir si un texte court de publication reste assez clair.",
      },
      {
        title: "Audit de brouillon",
        inputLabel: "Entrée",
        input: "Brouillon plus long avec deux paragraphes et plusieurs termes répétés autour de croissance, contenu et publication.",
        outputLabel: "Ce que tu lis",
        output: "Paragraphes : 2\nMots fréquents : contenu (4), publication (3), croissance (3)",
        note: "Pratique quand la réécriture doit réduire les répétitions plutôt que juste raccourcir.",
      },
    ],
    faqTitle: "FAQ du compteur de mots",
    faqs: [
      {
        question: "Que mesure le compteur de mots ?",
        answer:
          "Il mesure les mots, caractères, caractères sans espaces, phrases, paragraphes, temps de lecture et termes répétés.",
      },
      {
        question: "Puis-je l’utiliser pour des textes courts de publication et des brouillons plus longs ?",
        answer:
          "Oui. Il est utile pour des textes rapides de publication comme pour des descriptions, notes et scripts plus longs.",
      },
      {
        question: "Pourquoi les mots fréquents sont-ils utiles ?",
        answer:
          "Ils aident à repérer les répétitions rapidement quand un texte paraît plus plat que prévu.",
      },
    ],
  },
  pt: {
    howToUseTitle: "Como usar o contador de palavras",
    howToUseDescription:
      "Cole o texto, leia os números principais e use as palavras frequentes para encontrar repetições mais rápido.",
    howToUseSteps: [
      {
        title: "Cole o texto",
        body: "Adicione legenda, roteiro, nota ou descrição para calcular palavras, frases e parágrafos ao vivo.",
      },
      {
        title: "Leia as métricas principais",
        body: "Os cartões mostram palavras, caracteres, caracteres sem espaços, frases, parágrafos e tempo de leitura.",
      },
      {
        title: "Revise as palavras repetidas",
        body: "O bloco de palavras frequentes ajuda a enxergar repetições antes de publicar ou enviar o texto.",
      },
    ],
    useCasesTitle: "Melhores casos de uso",
    useCasesDescription:
      "Esse contador faz mais sentido quando você precisa conferir o tamanho do texto antes de publicar, enviar ou enxugar o rascunho.",
    useCases: [
      {
        title: "Legendas para Instagram, TikTok e X",
        description: "Veja se um texto de publicação está curto demais, repetitivo ou maior do que precisa.",
      },
      {
        title: "Descrições e roteiros de YouTube",
        description: "Os dados de parágrafo e tempo de leitura ajudam quando o rascunho já está mais longo.",
      },
      {
        title: "Edição e reescrita",
        description: "Compare os números depois da limpeza para saber se o texto realmente ficou mais enxuto.",
      },
    ],
    examplesTitle: "Exemplos",
    examplesDescription: "Um bom contador de palavras deve mostrar tamanho e repetição com rapidez.",
    examples: [
      {
        title: "Checagem de legenda",
        inputLabel: "Entrada",
        input: "Nota curta de lançamento para uma nova ferramenta com chamada clara e uma frase repetida.",
        outputLabel: "O que você vê",
        output: "Palavras: 15\nFrases: 1\nTempo de leitura: <1m",
        note: "Útil quando você quer saber se um texto curto de publicação ainda comunica o suficiente.",
      },
      {
        title: "Auditoria de rascunho",
        inputLabel: "Entrada",
        input: "Rascunho mais longo com dois parágrafos e termos repetidos sobre crescimento, conteúdo e publicação.",
        outputLabel: "O que você vê",
        output: "Parágrafos: 2\nPalavras frequentes: conteúdo (4), publicação (3), crescimento (3)",
        note: "Bom quando a revisão precisa cortar repetição e não só reduzir o texto.",
      },
    ],
    faqTitle: "Perguntas frequentes do contador de palavras",
    faqs: [
      {
        question: "O que o contador de palavras mede?",
        answer:
          "Ele mede palavras, caracteres, caracteres sem espaços, frases, parágrafos, tempo de leitura e termos repetidos.",
      },
      {
        question: "Posso usar para textos curtos de publicação e rascunhos longos?",
        answer:
          "Sim. Funciona bem tanto para checks rápidos de publicação quanto para descrições, notas e roteiros mais longos.",
      },
      {
        question: "Por que as palavras frequentes ajudam?",
        answer:
          "Elas ajudam a encontrar repetição rapidamente, especialmente quando o texto soa mais fraco do que deveria.",
      },
    ],
  },
};

const localizedTextCleanerContent: Record<Locale, ToolContentBlock> = {
  en: textCleanerContentEn,
  tr: {
    howToUseTitle: "Metin temizleyici nasıl kullanılır",
    howToUseDescription:
      "Dağınık metni bir kez yapıştırın, sonra ihtiyacınız olan temiz formatı seçip doğrudan kopyalayın.",
    howToUseSteps: [
      {
        title: "Ham metni yapıştırın",
        body: "Bozuk boşluklar, boş satırlar veya tekrar eden satırlar içeren metni araca bırakın.",
      },
      {
        title: "Temiz çıktıları karşılaştırın",
        body: "Temizlenmiş metin, boş satırsız sürüm, tekil satırlar, tek satır ve virgüllü liste çıktısını birlikte görün.",
      },
      {
        title: "Doğru sürümü kopyalayın",
        body: "İş akışınıza uygun olan sürümü tek tıkla kopyalayın ve tekrar elle düzenleme yapmayın.",
      },
    ],
    useCasesTitle: "En iyi kullanım senaryoları",
    useCasesDescription:
      "Bu araç, içerik aslında işe yarar durumdayken yapısal dağınıklığın metni kullanılamaz hale getirdiği anlarda daha değerlidir.",
    useCases: [
      {
        title: "Chat veya dokümandan kopyalanan metni düzeltmek",
        description: "Bozuk boşlukları ve anlamsız boş satırları temizleyip metni yeniden kullanılabilir hale getirin.",
      },
      {
        title: "Liste temizliği yapmak",
        description: "Tekrarlı satırları kaldırın veya alt alta gelen bir listeyi virgüllü düzene çevirin.",
      },
      {
        title: "Tek satır gereken alanlar",
        description: "Form, prompt kutusu veya metadata alanı için çok satırlı metni tek satıra indirin.",
      },
    ],
    examplesTitle: "Örnekler",
    examplesDescription: "İyi bir metin temizleyici, dağınık girdiyi tek hamlede kullanılabilir formata getirmelidir.",
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
  es: {
    howToUseTitle: "Cómo usar el limpiador de texto",
    howToUseDescription:
      "Pega el texto desordenado una vez y copia exactamente la versión limpia que necesitas.",
    howToUseSteps: [
      {
        title: "Pega el texto en bruto",
        body: "Añade notas copiadas, captions desordenadas o listas exportadas con espacios rotos y líneas vacías.",
      },
      {
        title: "Compara las salidas limpias",
        body: "Revisa texto limpio, sin líneas vacías, líneas únicas, una sola línea y lista con comas en la misma página.",
      },
      {
        title: "Copia la versión útil",
        body: "Toma solo la versión que encaja con el siguiente paso, sin corregir línea por línea a mano.",
      },
    ],
    useCasesTitle: "Mejores casos de uso",
    useCasesDescription:
      "Este tool es más útil cuando el texto copiado sigue siendo valioso, pero llega con una estructura desordenada.",
    useCases: [
      {
        title: "Limpieza tras copiar de chat o documentos",
        description: "Corrige espacios rotos y líneas vacías antes de llevar el texto a un post, nota o CMS.",
      },
      {
        title: "Limpieza de listas",
        description: "Elimina líneas duplicadas o convierte una lista vertical en una lista limpia separada por comas.",
      },
      {
        title: "Salidas en una sola línea",
        description: "Compacta texto de varias líneas cuando un formulario o campo de metadata necesita una entrada breve.",
      },
    ],
    examplesTitle: "Ejemplos",
    examplesDescription:
      "Un buen limpiador de texto debe llevarte de una entrada desordenada a un formato útil en un solo paso.",
    examples: [
      {
        title: "Limpieza de espacios rotos",
        inputLabel: "Entrada",
        input: "Toolyflow    ayuda a creadores\n\nlimpiando texto copiado   más rápido.",
        outputLabel: "Texto limpio",
        output: "Toolyflow ayuda a creadores\nlimpiando texto copiado más rápido.",
        note: "Útil cuando el contenido sirve, pero el espaciado lo hace ver descuidado.",
      },
      {
        title: "Limpieza de lista repetida",
        inputLabel: "Entrada",
        input: "ideas de bio\nideas de nickname\nideas de bio\nideas de hashtags",
        outputLabel: "Líneas únicas",
        output: "ideas de bio\nideas de nickname\nideas de hashtags",
        note: "Va bien para notas, tableros de ideas y listas exportadas con repeticiones.",
      },
    ],
    faqTitle: "Preguntas frecuentes del limpiador de texto",
    faqs: [
      {
        question: "¿Qué limpia el limpiador de texto?",
        answer:
          "Ayuda a normalizar espacios, eliminar líneas vacías, dejar texto en una sola línea y crear una lista de líneas únicas.",
      },
      {
        question: "¿Puedo copiar cada salida por separado?",
        answer:
          "Sí. Cada tarjeta de resultado tiene su propia acción de copia para que tomes solo la versión necesaria.",
      },
      {
        question: "¿Es diferente del convertidor de texto?",
        answer:
          "Sí. El convertidor de texto cambia el formato de escritura; el limpiador de texto se centra en espacios, estructura y líneas repetidas.",
      },
    ],
  },
  de: {
    howToUseTitle: "So nutzt du den Textbereiniger",
    howToUseDescription:
      "Füge unordentlichen Text einmal ein und kopiere dann genau das bereinigte Format, das du brauchst.",
    howToUseSteps: [
      {
        title: "Rohtext einfügen",
        body: "Füge kopierte Notizen, unordentliche Captions oder exportierte Listen mit kaputten Leerzeichen und Leerzeilen ein.",
      },
      {
        title: "Bereinigte Ausgaben vergleichen",
        body: "Prüfe bereinigten Text, Version ohne Leerzeilen, eindeutige Zeilen, Einzeiler und Kommaliste direkt auf derselben Seite.",
      },
      {
        title: "Passende Version kopieren",
        body: "Kopiere nur die Ausgabe, die zu deinem nächsten Schritt passt, statt alles manuell nachzuarbeiten.",
      },
    ],
    useCasesTitle: "Beste Einsatzfälle",
    useCasesDescription:
      "Das Tool ist besonders nützlich, wenn kopierter Text inhaltlich brauchbar ist, aber strukturell chaotisch ankommt.",
    useCases: [
      {
        title: "Bereinigung nach Copy aus Chat oder Docs",
        description: "Repariere Leerzeichen und Leerzeilen, bevor der Text in Post, Notiz oder CMS-Feld landet.",
      },
      {
        title: "Listen bereinigen",
        description: "Entferne doppelte Zeilen oder wandle eine Zeilenliste in eine saubere Kommaliste um.",
      },
      {
        title: "Einzeilige Ausgaben",
        description: "Reduziere mehrzeiligen Text auf eine Zeile, wenn ein Formular oder Metadatenfeld eine kompakte Eingabe braucht.",
      },
    ],
    examplesTitle: "Beispiele",
    examplesDescription:
      "Ein guter Textbereiniger sollte unordentliche Rohdaten in einem Schritt in ein brauchbares Format bringen.",
    examples: [
      {
        title: "Kaputte Leerzeichen bereinigen",
        inputLabel: "Eingabe",
        input: "Toolyflow   hilft Creatorn\n\nkopierten Text   schneller zu bereinigen.",
        outputLabel: "Bereinigter Text",
        output: "Toolyflow hilft Creatorn\nkopierten Text schneller zu bereinigen.",
        note: "Hilfreich, wenn der Inhalt stimmt, aber die Formatierung unruhig aussieht.",
      },
      {
        title: "Doppelte Liste bereinigen",
        inputLabel: "Eingabe",
        input: "bio ideen\nnickname ideen\nbio ideen\nhashtag ideen",
        outputLabel: "Eindeutige Zeilen",
        output: "bio ideen\nnickname ideen\nhashtag ideen",
        note: "Gut für Notizen, Ideensammlungen und wiederholte Exportlisten.",
      },
    ],
    faqTitle: "Textbereiniger FAQ",
    faqs: [
      {
        question: "Was bereinigt der Textbereiniger?",
        answer:
          "Er hilft beim Normalisieren von Leerzeichen, Entfernen von Leerzeilen, Erstellen eindeutiger Zeilenlisten und Umwandeln in eine Einzeile.",
      },
      {
        question: "Kann ich jede Ausgabe einzeln kopieren?",
        answer:
          "Ja. Jede Ergebnis-Karte hat ihre eigene Kopieraktion, damit du nur die benötigte Version übernimmst.",
      },
      {
        question: "Ist das anders als der Text-Konverter?",
        answer:
          "Ja. Der Text-Konverter ändert das Schreibformat, der Textbereiniger kümmert sich um Leerzeichen, Struktur und doppelte Zeilen.",
      },
    ],
  },
  fr: {
    howToUseTitle: "Comment utiliser le nettoyeur de texte",
    howToUseDescription:
      "Colle le texte brouillon une fois, puis copie exactement le format nettoyé dont tu as besoin.",
    howToUseSteps: [
      {
        title: "Colle le texte brut",
        body: "Ajoute des notes copiées, des captions brouillonnes ou des listes exportées avec espaces cassés et lignes vides.",
      },
      {
        title: "Compare les sorties nettoyées",
        body: "Vérifie le texte propre, la version sans lignes vides, les lignes uniques, la version sur une ligne et la liste avec virgules.",
      },
      {
        title: "Copie la bonne version",
        body: "Prends seulement la sortie utile pour la suite au lieu de tout corriger à la main.",
      },
    ],
    useCasesTitle: "Meilleurs cas d’usage",
    useCasesDescription:
      "Cet outil est surtout utile quand un texte copié reste exploitable mais arrive avec une structure désordonnée.",
    useCases: [
      {
        title: "Nettoyage après copie depuis chat ou docs",
        description: "Répare espaces et lignes vides avant d’envoyer le texte vers un post, une note ou un champ CMS.",
      },
      {
        title: "Nettoyage de liste",
        description: "Supprime les lignes dupliquées ou transforme une liste verticale en liste propre séparée par des virgules.",
      },
      {
        title: "Sorties sur une ligne",
        description: "Compresse un texte multiligne en une seule ligne quand un formulaire ou champ metadata l’exige.",
      },
    ],
    examplesTitle: "Exemples",
    examplesDescription:
      "Un bon nettoyeur de texte doit transformer une entrée brouillonne en format utile en un seul passage.",
    examples: [
      {
        title: "Nettoyage d’espaces cassés",
        inputLabel: "Entrée",
        input: "Toolyflow   aide les créateurs\n\nà nettoyer le texte copié   plus vite.",
        outputLabel: "Texte nettoyé",
        output: "Toolyflow aide les créateurs\nà nettoyer le texte copié plus vite.",
        note: "Utile quand le contenu est bon mais que l’espacement le rend brouillon.",
      },
      {
        title: "Nettoyage de liste dupliquée",
        inputLabel: "Entrée",
        input: "idées bio\nidées pseudo\nidées bio\nidées hashtags",
        outputLabel: "Lignes uniques",
        output: "idées bio\nidées pseudo\nidées hashtags",
        note: "Pratique pour notes, tableaux d’idées et listes exportées avec répétitions.",
      },
    ],
    faqTitle: "FAQ du nettoyeur de texte",
    faqs: [
      {
        question: "Que nettoie le nettoyeur de texte ?",
        answer:
          "Il aide à normaliser les espaces, supprimer les lignes vides, créer une liste de lignes uniques et produire une sortie sur une ligne.",
      },
      {
        question: "Puis-je copier chaque sortie séparément ?",
        answer:
          "Oui. Chaque carte de résultat a sa propre action de copie pour que tu récupères seulement la bonne version.",
      },
      {
        question: "Est-ce différent du convertisseur de texte ?",
        answer:
          "Oui. Le convertisseur de texte change le format d’écriture, tandis que le nettoyeur de texte s’occupe des espaces, de la structure et des lignes répétées.",
      },
    ],
  },
  pt: {
    howToUseTitle: "Como usar o limpador de texto",
    howToUseDescription:
      "Cole o texto bagunçado uma vez e copie exatamente a versão limpa que você precisa.",
    howToUseSteps: [
      {
        title: "Cole o texto bruto",
        body: "Adicione notas copiadas, captions bagunçadas ou listas exportadas com espaços quebrados e linhas vazias.",
      },
      {
        title: "Compare as saídas limpas",
        body: "Veja texto limpo, sem linhas vazias, linhas únicas, versão em uma linha e lista com vírgulas na mesma página.",
      },
      {
        title: "Copie a versão certa",
        body: "Leve só a saída que combina com o próximo passo, sem arrumar tudo manualmente.",
      },
    ],
    useCasesTitle: "Melhores casos de uso",
    useCasesDescription:
      "Esse tool é mais útil quando o texto copiado ainda vale a pena, mas chega com estrutura bagunçada.",
    useCases: [
      {
        title: "Limpeza depois de copiar de chat ou docs",
        description: "Corrija espaços quebrados e linhas vazias antes de levar o texto para post, nota ou CMS.",
      },
      {
        title: "Limpeza de listas",
        description: "Remova linhas duplicadas ou transforme uma lista vertical em uma lista limpa com vírgulas.",
      },
      {
        title: "Saídas em uma linha",
        description: "Compacte texto com várias linhas quando um formulário ou campo de metadata pede algo enxuto.",
      },
    ],
    examplesTitle: "Exemplos",
    examplesDescription:
      "Um bom limpador de texto deve levar uma entrada bagunçada para um formato útil em um único passo.",
    examples: [
      {
        title: "Limpeza de espaços quebrados",
        inputLabel: "Entrada",
        input: "A Toolyflow   ajuda creators\n\na limpar texto copiado   mais rápido.",
        outputLabel: "Texto limpo",
        output: "A Toolyflow ajuda creators\na limpar texto copiado mais rápido.",
        note: "Útil quando o conteúdo está bom, mas o espaçamento deixa tudo confuso.",
      },
      {
        title: "Limpeza de lista repetida",
        inputLabel: "Entrada",
        input: "ideias de bio\nideias de nickname\nideias de bio\nideias de hashtag",
        outputLabel: "Linhas únicas",
        output: "ideias de bio\nideias de nickname\nideias de hashtag",
        note: "Bom para notas, quadros de ideia e listas exportadas com repetição.",
      },
    ],
    faqTitle: "Perguntas frequentes do limpador de texto",
    faqs: [
      {
        question: "O que o limpador de texto remove?",
        answer:
          "Ele ajuda a normalizar espaços, remover linhas vazias, criar uma lista de linhas únicas e reduzir o texto para uma linha só.",
      },
      {
        question: "Posso copiar cada saída separadamente?",
        answer:
          "Sim. Cada cartão de resultado tem sua própria ação de cópia para você pegar apenas a versão necessária.",
      },
      {
        question: "Isso é diferente do conversor de texto?",
        answer:
          "Sim. O conversor de texto muda o formato de escrita, enquanto o limpador de texto cuida de espaços, estrutura e linhas repetidas.",
      },
    ],
  },
};

export const localizedWordCounterLabels: Record<Locale, WordCounterLabels> = {
  en: {
    inputLabel: "Paste your text",
    placeholder: "Paste a post draft, article, note, or script.",
    helper: "Use the live counts to size a draft quickly, then scan the top terms to spot repetition.",
    defaultText:
      "Toolyflow helps you check draft length, repeated words, and reading time before you publish.",
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
    placeholder: "Paylaşım metni, not, açıklama ya da video metni yapıştır.",
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
    placeholder: "Pega un texto de publicación, nota, artículo o guion.",
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
      "Toolyflow hilft dir dabei, Länge, Wiederholung und Lesezeit eines Textes vor der Veröffentlichung zu prüfen.",
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
      "Toolyflow t’aide à vérifier longueur, répétition et temps de lecture avant publication.",
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
      "A Toolyflow ajuda você a revisar tamanho, repetição e tempo de leitura antes de publicar.",
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
    defaultText: "Toolyflow   helps teams\n\nclean copied text faster.\nToolyflow   helps teams",
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
    defaultText: "Toolyflow   kopyalanan metni daha hızlı temizler.\n\nBozuk boşlukları toparlar   ve metni okunur hale getirir.\nToolyflow   kopyalanan metni daha hızlı temizler.",
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
    defaultText: "Toolyflow   limpia texto copiado más rápido.\n\nOrdena espacios rotos   y deja el texto listo para usar.\nToolyflow   limpia texto copiado más rápido.",
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
    defaultText: "Toolyflow   bereinigt kopierten Text schneller.\n\nOrdnet kaputte Abstände   und macht den Text wieder nutzbar.\nToolyflow   bereinigt kopierten Text schneller.",
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
    defaultText: "Toolyflow   nettoie le texte copié plus vite.\n\nRemet de l’ordre dans les espaces cassés   et rend le texte prêt à l’emploi.\nToolyflow   nettoie le texte copié plus vite.",
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
    defaultText: "A Toolyflow   ajuda equipes.\n\nLimpa texto copiado   mais rápido.\nA Toolyflow   ajuda equipes.",
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
    eyebrow: "Text utility tool",
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
    content: localizedWordCounterContent.en,
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
          title: "Paylaşım metni kontrolü",
          inputLabel: "Girdi",
          input: "Yeni araç duyurusu için kısa bir paylaşım metni ve net bir takip çağrısı.",
          outputLabel: "Okunan değer",
          output: "Kelime: 11\nCümle: 1\nOkuma süresi: <1m",
          note: "Kısa bir paylaşım metninin gerçekten yeterli olup olmadığını hızlıca görürsünüz.",
        },
        {
          title: "Taslak taraması",
          inputLabel: "Girdi",
          input: "İki paragraflı, büyüme, içerik ve paylaşım kelimelerini tekrar eden daha uzun bir taslak.",
          outputLabel: "Okunan değer",
          output: "Paragraf: 2\nÖne çıkan kelimeler: içerik (4), paylaşım (3), büyüme (3)",
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
        question: "Kısa paylaşım metinlerinde de işe yarar mı?",
          answer:
          "Evet. Kısa paylaşım metinlerinde de metnin yeterli olup olmadığını ve kendini tekrar edip etmediğini hızlıca gösterir.",
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
      content: localizedWordCounterContent.es,
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
      content: localizedWordCounterContent.de,
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
      content: localizedWordCounterContent.fr,
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
      content: localizedWordCounterContent.pt,
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
      "Useful for notes, post drafts, export lists, prompts, and form fields.",
    ],
    structuredDescription:
      "Free online text cleaner for spacing cleanup, blank line removal, duplicate line cleanup, and single-line output.",
    content: localizedTextCleanerContent.en,
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
      "Not, paylaşım metni, prompt ve dışa aktarılan listeler için uygundur.",
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
      content: localizedTextCleanerContent.es,
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
      content: localizedTextCleanerContent.de,
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
      content: localizedTextCleanerContent.fr,
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
      content: localizedTextCleanerContent.pt,
    },
  },
};
