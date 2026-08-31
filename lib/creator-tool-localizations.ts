import type { Locale } from "@/lib/i18n";

export type CreatorTone =
  | "cool"
  | "mysterious"
  | "personal"
  | "professional"
  | "minimal"
  | "bold"
  | "playful"
  | "sharp";

export type BioCtaMode = "none" | "follow" | "dm" | "link" | "collab";
export type NicknameUseCase = "social" | "gaming" | "brand" | "anonymous";
export type NicknameArchetype = "clean" | "alias" | "brandable" | "styled";
export type HashtagGroup = "topic" | "community" | "discovery" | "broad";

export type BioEnhancementLabels = {
  nicheLabel: string;
  nichePlaceholder: string;
  audienceLabel: string;
  audiencePlaceholder: string;
  valueLabel: string;
  valuePlaceholder: string;
  presetLabel: string;
  presets: Array<{ label: string; niche: string; audience: string; value: string }>;
  requiredMessage: string;
  resultsTitle: string;
  resultsDescription: string;
  emptyTitle: string;
  emptyDescription: string;
  regenerate: string;
  characterLabel: string;
  optionLabel: string;
  ctaModes: Record<BioCtaMode, string>;
  ctaLines: Record<Exclude<BioCtaMode, "none">, string[]>;
  blueprintLabels: {
    positioning: string;
    audience: string;
    personality: string;
  };
  fallbackValues: Record<CreatorTone, string[]>;
  phraseTemplates: {
    identity: string[];
    nicheValue: string[];
    audienceValue: string[];
    audienceNiche: string[];
  };
};

export type NicknameEnhancementLabels = {
  useCaseLabel: string;
  useCases: Record<NicknameUseCase, string>;
  presetLabel: string;
  presets: string[];
  resultsTitle: string;
  resultsDescription: string;
  emptyTitle: string;
  emptyDescription: string;
  generate: string;
  regenerate: string;
  availabilityNote: string;
  characterLabel: string;
  archetypes: Record<NicknameArchetype, string>;
  reasonLabels: {
    concise: string;
    pronounceable: string;
    clean: string;
    keyword: string;
    brandable: string;
  };
};

export type HashtagEnhancementLabels = {
  locationLabel: string;
  locationPlaceholder: string;
  countLabel: string;
  resultsTitle: string;
  resultsDescription: string;
  requiredMessage: string;
  regenerate: string;
  dataNotice: string;
  presetLabel: string;
  presets: string[];
  groupLabels: Record<HashtagGroup, string>;
  strategyDescriptions: Record<"viral" | "balanced" | "niche", string>;
  topicPacks: Record<string, string[]>;
};

export type CreatorToolEnhancements = {
  bio: BioEnhancementLabels;
  nickname: NicknameEnhancementLabels;
  hashtag: HashtagEnhancementLabels;
};

export type CreatorCategoryGuide = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Array<{
    toolSlug: "bio-generator" | "nickname-generator" | "hashtag-generator";
    number: string;
    title: string;
    description: string;
    cta: string;
  }>;
};

const bioEnhancements: Record<Locale, BioEnhancementLabels> = {
  tr: {
    nicheLabel: "Ne üretiyorsun?",
    nichePlaceholder: "ör. pratik yemek tarifleri",
    audienceLabel: "Kimin için?",
    audiencePlaceholder: "ör. zamanı az olan öğrenciler",
    valueLabel: "Profil vaadin",
    valuePlaceholder: "ör. 20 dakikada yapılabilen tarifler",
    presetLabel: "Hızlı başlangıç",
    presets: [
      { label: "Yemek", niche: "pratik yemek tarifleri", audience: "zamanı az olanlar", value: "20 dakikada uygulanabilir tarifler" },
      { label: "Oyun", niche: "oyun içerikleri", audience: "rekabetçi oyuncular", value: "kısa rehberler ve dürüst oyun yorumları" },
      { label: "Fitness", niche: "evde fitness", audience: "spora yeni başlayanlar", value: "sürdürülebilir rutinler ve net hareket anlatımları" },
    ],
    requiredMessage: "İyi bir bio için önce ne ürettiğini yaz.",
    resultsTitle: "Profiline hazır 3 yön",
    resultsDescription: "Her seçenek farklı bir konumlandırma kullanır; en güçlü satırları birleştirebilirsin.",
    emptyTitle: "Jenerik değil, sana ait bir bio üret",
    emptyDescription: "Nişini yaz, mümkünse hedef kitleni ve verdiğin değeri ekle. Sonuçlar bunlara göre kurulacak.",
    regenerate: "Yeni 3 seçenek üret",
    characterLabel: "karakter",
    optionLabel: "Seçenek",
    ctaModes: { none: "CTA yok", follow: "Takip et", dm: "DM gönder", link: "Linke git", collab: "İş birliği" },
    ctaLines: {
      follow: ["devamı için takip et", "yeni içerikler için burada kal"],
      dm: ["soruların için DM açık", "detaylar için mesaj bırak"],
      link: ["başlamak için aşağıdaki linke göz at", "tüm kaynaklar linkte"],
      collab: ["iş birlikleri için DM", "proje ve iş birliklerine açık"],
    },
    blueprintLabels: { positioning: "Net konum", audience: "Kitle odaklı", personality: "Profil özeti" },
    fallbackValues: {
      cool: ["net fikirler, temiz anlatım", "gereksiz gürültü olmadan işe yarayan içerikler"],
      mysterious: ["az sözle merak bırakan içerikler", "detayını takip edenlerin yakaladığı paylaşımlar"],
      personal: ["deneyerek öğrendiklerimi açıkça paylaşıyorum", "gerçek süreç, uygulanabilir notlar"],
      professional: ["uygulanabilir bilgi ve ölçülü sonuçlar", "net yöntemler, güvenilir anlatım"],
      minimal: ["kısa, sade ve işe yarayan içerikler", "fazlalıksız fikirler"],
      bold: ["doğrudan fikirler ve güçlü bir bakış", "net tavır, uygulanabilir sonuç"],
      playful: ["öğretirken eğlendiren içerikler", "hafif enerji, gerçekten işe yarayan fikirler"],
      sharp: ["hızlı okunan, net sonuç veren içerikler", "az kelimeyle güçlü fikirler"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} | {niche}"],
      audienceValue: ["{audience} için {value}", "{audience}: {value}"],
      audienceNiche: ["{audience} için {niche}", "{niche} • {audience}"],
    },
  },
  en: {
    nicheLabel: "What do you create?",
    nichePlaceholder: "e.g. quick weeknight recipes",
    audienceLabel: "Who is it for?",
    audiencePlaceholder: "e.g. busy students",
    valueLabel: "Your profile promise",
    valuePlaceholder: "e.g. recipes ready in 20 minutes",
    presetLabel: "Quick start",
    presets: [
      { label: "Food", niche: "quick recipes", audience: "busy home cooks", value: "practical meals ready in 20 minutes" },
      { label: "Gaming", niche: "gaming content", audience: "competitive players", value: "short guides and honest game reviews" },
      { label: "Fitness", niche: "home fitness", audience: "fitness beginners", value: "sustainable routines with clear form tips" },
    ],
    requiredMessage: "Tell us what you create before generating a bio.",
    resultsTitle: "Three profile-ready directions",
    resultsDescription: "Each option uses a different angle, so you can keep one or mix the strongest lines.",
    emptyTitle: "Build a bio that actually sounds like you",
    emptyDescription: "Add your niche, audience, and the value you offer. The generator will build around those details.",
    regenerate: "Generate 3 new options",
    characterLabel: "characters",
    optionLabel: "Option",
    ctaModes: { none: "No CTA", follow: "Follow", dm: "Send a DM", link: "Visit link", collab: "Collaborate" },
    ctaLines: {
      follow: ["follow for the next post", "stay for practical weekly ideas"],
      dm: ["DMs open for questions", "send a message for the details"],
      link: ["start with the link below", "find every resource in the link"],
      collab: ["DM for collaborations", "open to thoughtful collaborations"],
    },
    blueprintLabels: { positioning: "Clear position", audience: "Audience first", personality: "Profile summary" },
    fallbackValues: {
      cool: ["clear ideas with a clean point of view", "useful content without the noise"],
      mysterious: ["quiet details worth noticing", "less explanation, more intrigue"],
      personal: ["honest lessons from the work in progress", "real process and practical notes"],
      professional: ["practical insight with reliable delivery", "clear methods and useful outcomes"],
      minimal: ["short, useful, carefully edited ideas", "no filler, just the useful part"],
      bold: ["direct ideas with a strong point of view", "clear conviction and practical action"],
      playful: ["useful ideas with a lighter edge", "learning without the stiff tone"],
      sharp: ["fast reads with a clear takeaway", "tight language and useful outcomes"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} for {niche}"],
      audienceValue: ["{value} for {audience}", "helping {audience} with {value}"],
      audienceNiche: ["{niche} for {audience}", "{audience} • {niche}"],
    },
  },
  es: {
    nicheLabel: "¿Qué contenido creas?",
    nichePlaceholder: "p. ej. recetas rápidas",
    audienceLabel: "¿Para quién?",
    audiencePlaceholder: "p. ej. estudiantes con poco tiempo",
    valueLabel: "La promesa de tu perfil",
    valuePlaceholder: "p. ej. recetas listas en 20 minutos",
    presetLabel: "Inicio rápido",
    presets: [
      { label: "Comida", niche: "recetas rápidas", audience: "personas con poco tiempo", value: "platos prácticos listos en 20 minutos" },
      { label: "Gaming", niche: "contenido gaming", audience: "jugadores competitivos", value: "guías breves y reseñas honestas" },
      { label: "Fitness", niche: "fitness en casa", audience: "personas que empiezan", value: "rutinas sostenibles explicadas con claridad" },
    ],
    requiredMessage: "Escribe primero qué tipo de contenido creas.",
    resultsTitle: "Tres enfoques listos para tu perfil",
    resultsDescription: "Cada opción parte de un ángulo distinto. Puedes usar una o combinar sus mejores líneas.",
    emptyTitle: "Crea una bio que suene a ti",
    emptyDescription: "Añade tu nicho, tu público y el valor que aportas para evitar resultados genéricos.",
    regenerate: "Generar 3 opciones nuevas",
    characterLabel: "caracteres",
    optionLabel: "Opción",
    ctaModes: { none: "Sin CTA", follow: "Seguir", dm: "Enviar DM", link: "Visitar enlace", collab: "Colaborar" },
    ctaLines: {
      follow: ["sígueme para ver lo próximo", "quédate para nuevas ideas"],
      dm: ["DM abierto para preguntas", "escríbeme para más detalles"],
      link: ["empieza en el enlace de abajo", "todos los recursos están en el enlace"],
      collab: ["DM para colaboraciones", "abierto a colaboraciones con sentido"],
    },
    blueprintLabels: { positioning: "Posición clara", audience: "Centrada en el público", personality: "Resumen del perfil" },
    fallbackValues: {
      cool: ["ideas claras con un estilo limpio", "contenido útil sin ruido"],
      mysterious: ["detalles sutiles que invitan a mirar", "menos explicación, más intriga"],
      personal: ["aprendizajes reales durante el proceso", "proceso honesto y notas prácticas"],
      professional: ["información práctica y fiable", "métodos claros con resultados útiles"],
      minimal: ["ideas breves, útiles y bien editadas", "sin relleno, solo lo importante"],
      bold: ["ideas directas con un punto de vista fuerte", "criterio claro y acción práctica"],
      playful: ["ideas útiles con un tono ligero", "aprender sin ponerse solemne"],
      sharp: ["lecturas rápidas con una conclusión clara", "pocas palabras, resultado útil"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} sobre {niche}"],
      audienceValue: ["{value} para {audience}", "ayudo a {audience} con {value}"],
      audienceNiche: ["{niche} para {audience}", "{audience} • {niche}"],
    },
  },
  de: {
    nicheLabel: "Was erstellst du?",
    nichePlaceholder: "z. B. schnelle Rezepte",
    audienceLabel: "Für wen?",
    audiencePlaceholder: "z. B. Studierende mit wenig Zeit",
    valueLabel: "Dein Profilversprechen",
    valuePlaceholder: "z. B. Rezepte in 20 Minuten",
    presetLabel: "Schnellstart",
    presets: [
      { label: "Food", niche: "schnelle Rezepte", audience: "Menschen mit wenig Zeit", value: "alltagstaugliche Gerichte in 20 Minuten" },
      { label: "Gaming", niche: "Gaming-Content", audience: "kompetitive Spieler", value: "kurze Guides und ehrliche Spieleindrücke" },
      { label: "Fitness", niche: "Fitness zu Hause", audience: "Fitness-Einsteiger", value: "nachhaltige Routinen mit klaren Erklärungen" },
    ],
    requiredMessage: "Schreib zuerst, welche Inhalte du erstellst.",
    resultsTitle: "Drei profilfertige Richtungen",
    resultsDescription: "Jede Option setzt einen anderen Schwerpunkt. Nutze eine davon oder kombiniere die besten Zeilen.",
    emptyTitle: "Erstelle eine Bio, die wirklich zu dir passt",
    emptyDescription: "Nenne Thema, Zielgruppe und Nutzen, damit die Vorschläge nicht generisch bleiben.",
    regenerate: "3 neue Optionen erzeugen",
    characterLabel: "Zeichen",
    optionLabel: "Option",
    ctaModes: { none: "Ohne CTA", follow: "Folgen", dm: "DM senden", link: "Link öffnen", collab: "Zusammenarbeit" },
    ctaLines: {
      follow: ["folge für den nächsten Beitrag", "bleib für neue praktische Ideen"],
      dm: ["DMs sind für Fragen offen", "schreib mir für Details"],
      link: ["starte über den Link unten", "alle Ressourcen findest du im Link"],
      collab: ["DM für Kooperationen", "offen für passende Kooperationen"],
    },
    blueprintLabels: { positioning: "Klare Position", audience: "Zielgruppenfokus", personality: "Profilübersicht" },
    fallbackValues: {
      cool: ["klare Ideen mit sauberem Stil", "nützlicher Content ohne Lärm"],
      mysterious: ["leise Details, die neugierig machen", "weniger erklären, mehr Spannung"],
      personal: ["ehrliche Lektionen aus dem laufenden Prozess", "echter Prozess und praktische Notizen"],
      professional: ["praktisches Wissen, zuverlässig vermittelt", "klare Methoden und brauchbare Ergebnisse"],
      minimal: ["kurze, nützliche und sauber editierte Ideen", "kein Fülltext, nur der relevante Teil"],
      bold: ["direkte Ideen mit klarer Haltung", "klare Überzeugung und praktische Schritte"],
      playful: ["nützliche Ideen mit leichterem Ton", "lernen ohne steife Sprache"],
      sharp: ["schnelle Inhalte mit klarem Ergebnis", "wenige Worte, klarer Nutzen"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} rund um {niche}"],
      audienceValue: ["{value} für {audience}", "ich helfe {audience} mit {value}"],
      audienceNiche: ["{niche} für {audience}", "{audience} • {niche}"],
    },
  },
  fr: {
    nicheLabel: "Quel contenu crées-tu ?",
    nichePlaceholder: "ex. recettes rapides",
    audienceLabel: "Pour qui ?",
    audiencePlaceholder: "ex. étudiants pressés",
    valueLabel: "La promesse de ton profil",
    valuePlaceholder: "ex. des recettes prêtes en 20 minutes",
    presetLabel: "Démarrage rapide",
    presets: [
      { label: "Cuisine", niche: "recettes rapides", audience: "personnes qui manquent de temps", value: "des plats pratiques prêts en 20 minutes" },
      { label: "Gaming", niche: "contenu gaming", audience: "joueurs compétitifs", value: "des guides courts et des avis honnêtes" },
      { label: "Fitness", niche: "fitness à la maison", audience: "débutants en fitness", value: "des routines durables expliquées clairement" },
    ],
    requiredMessage: "Indique d'abord le type de contenu que tu crées.",
    resultsTitle: "Trois directions prêtes pour ton profil",
    resultsDescription: "Chaque proposition suit un angle différent. Garde-en une ou mélange les meilleures lignes.",
    emptyTitle: "Crée une bio qui te ressemble vraiment",
    emptyDescription: "Ajoute ta niche, ton public et la valeur que tu apportes pour éviter une bio générique.",
    regenerate: "Générer 3 nouvelles options",
    characterLabel: "caractères",
    optionLabel: "Option",
    ctaModes: { none: "Sans CTA", follow: "Suivre", dm: "Envoyer un DM", link: "Voir le lien", collab: "Collaborer" },
    ctaLines: {
      follow: ["abonne-toi pour la suite", "reste pour de nouvelles idées pratiques"],
      dm: ["DM ouverts pour les questions", "écris-moi pour les détails"],
      link: ["commence avec le lien ci-dessous", "toutes les ressources sont dans le lien"],
      collab: ["DM pour les collaborations", "ouvert aux collaborations pertinentes"],
    },
    blueprintLabels: { positioning: "Position claire", audience: "Centrée public", personality: "Résumé du profil" },
    fallbackValues: {
      cool: ["des idées claires avec un style net", "du contenu utile sans bruit"],
      mysterious: ["des détails discrets qui donnent envie de regarder", "moins d'explications, plus d'intrigue"],
      personal: ["des leçons honnêtes tirées du travail en cours", "un vrai processus et des notes pratiques"],
      professional: ["des conseils pratiques et fiables", "des méthodes claires pour des résultats utiles"],
      minimal: ["des idées courtes, utiles et bien éditées", "aucun remplissage, seulement l'essentiel"],
      bold: ["des idées directes avec un point de vue fort", "une conviction claire et des actions concrètes"],
      playful: ["des idées utiles avec un ton plus léger", "apprendre sans ton rigide"],
      sharp: ["des contenus rapides avec une conclusion claire", "peu de mots, un résultat utile"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} autour de {niche}"],
      audienceValue: ["{value} pour {audience}", "j'aide {audience} avec {value}"],
      audienceNiche: ["{niche} pour {audience}", "{audience} • {niche}"],
    },
  },
  pt: {
    nicheLabel: "Que conteúdo você cria?",
    nichePlaceholder: "ex. receitas rápidas",
    audienceLabel: "Para quem?",
    audiencePlaceholder: "ex. estudantes com pouco tempo",
    valueLabel: "A promessa do seu perfil",
    valuePlaceholder: "ex. receitas prontas em 20 minutos",
    presetLabel: "Começo rápido",
    presets: [
      { label: "Comida", niche: "receitas rápidas", audience: "pessoas com pouco tempo", value: "pratos práticos prontos em 20 minutos" },
      { label: "Gaming", niche: "conteúdo gamer", audience: "jogadores competitivos", value: "guias curtos e análises honestas" },
      { label: "Fitness", niche: "fitness em casa", audience: "quem está começando", value: "rotinas sustentáveis com explicações claras" },
    ],
    requiredMessage: "Escreva primeiro que tipo de conteúdo você cria.",
    resultsTitle: "Três caminhos prontos para o perfil",
    resultsDescription: "Cada opção usa um ângulo diferente. Escolha uma ou combine as melhores linhas.",
    emptyTitle: "Crie uma bio que realmente pareça sua",
    emptyDescription: "Adicione nicho, público e valor para evitar resultados genéricos.",
    regenerate: "Gerar 3 novas opções",
    characterLabel: "caracteres",
    optionLabel: "Opção",
    ctaModes: { none: "Sem CTA", follow: "Seguir", dm: "Enviar DM", link: "Abrir link", collab: "Colaborar" },
    ctaLines: {
      follow: ["siga para ver o próximo conteúdo", "fique para novas ideias práticas"],
      dm: ["DM aberto para perguntas", "mande uma mensagem para saber mais"],
      link: ["comece pelo link abaixo", "todos os recursos estão no link"],
      collab: ["DM para parcerias", "aberto a boas parcerias"],
    },
    blueprintLabels: { positioning: "Posição clara", audience: "Foco no público", personality: "Resumo do perfil" },
    fallbackValues: {
      cool: ["ideias claras com um estilo limpo", "conteúdo útil sem ruído"],
      mysterious: ["detalhes discretos que despertam curiosidade", "menos explicação, mais intriga"],
      personal: ["aprendizados honestos do processo", "processo real e notas práticas"],
      professional: ["informação prática e confiável", "métodos claros e resultados úteis"],
      minimal: ["ideias curtas, úteis e bem editadas", "sem enrolação, só o que importa"],
      bold: ["ideias diretas com um ponto de vista forte", "convicção clara e ação prática"],
      playful: ["ideias úteis com um tom mais leve", "aprender sem formalidade excessiva"],
      sharp: ["conteúdo rápido com conclusão clara", "poucas palavras, resultado útil"],
    },
    phraseTemplates: {
      identity: ["{name} • {niche}", "{name} | {niche}"],
      nicheValue: ["{niche} • {value}", "{value} sobre {niche}"],
      audienceValue: ["{value} para {audience}", "ajudo {audience} com {value}"],
      audienceNiche: ["{niche} para {audience}", "{audience} • {niche}"],
    },
  },
};

const nicknameEnhancements: Record<Locale, NicknameEnhancementLabels> = {
  tr: {
    useCaseLabel: "Nerede kullanacaksın?",
    useCases: { social: "Sosyal medya", gaming: "Oyun", brand: "Marka / proje", anonymous: "Anonim profil" },
    presetLabel: "Örnek fikirler",
    presets: ["ahmet", "luna", "orbit", "pixel"],
    resultsTitle: "Handle gibi duran öneriler",
    resultsDescription: "Liste; temiz, alias, markalaşabilir ve stilize yönleri dengeli biçimde karıştırır.",
    emptyTitle: "Bir kelime yaz veya tamamen özgün başla",
    emptyDescription: "Kelime zorunlu değil. Kullanım amacı ve stil, önerilerin nasıl görüneceğini belirler.",
    generate: "Kullanıcı adı üret",
    regenerate: "Yeni 8 öneri üret",
    availabilityNote: "Kullanıcı adı uygunluğu canlı kontrol edilmez. Seçtiğin platformda müsaitliği doğrula.",
    characterLabel: "karakter",
    archetypes: { clean: "Temiz handle", alias: "Özgün alias", brandable: "Markalaşabilir", styled: "Stilize" },
    reasonLabels: { concise: "kısa", pronounceable: "okunabilir", clean: "temiz", keyword: "anahtar kelimeli", brandable: "sahiplenilebilir" },
  },
  en: {
    useCaseLabel: "Where will you use it?",
    useCases: { social: "Social media", gaming: "Gaming", brand: "Brand / project", anonymous: "Anonymous profile" },
    presetLabel: "Example ideas",
    presets: ["alex", "luna", "orbit", "pixel"],
    resultsTitle: "Suggestions that look like real handles",
    resultsDescription: "The batch balances clean handles, original aliases, brandable names, and styled options.",
    emptyTitle: "Add a word or start completely fresh",
    emptyDescription: "A keyword is optional. Use case and style decide what the suggestions should feel like.",
    generate: "Generate usernames",
    regenerate: "Generate 8 new ideas",
    availabilityNote: "Handle availability is not checked live. Confirm it on your chosen platform.",
    characterLabel: "characters",
    archetypes: { clean: "Clean handle", alias: "Original alias", brandable: "Brandable", styled: "Styled" },
    reasonLabels: { concise: "concise", pronounceable: "pronounceable", clean: "clean", keyword: "keyword-led", brandable: "ownable" },
  },
  es: {
    useCaseLabel: "¿Dónde lo vas a usar?",
    useCases: { social: "Redes sociales", gaming: "Gaming", brand: "Marca / proyecto", anonymous: "Perfil anónimo" },
    presetLabel: "Ideas de ejemplo",
    presets: ["alex", "luna", "orbit", "pixel"],
    resultsTitle: "Sugerencias que parecen handles reales",
    resultsDescription: "La lista combina opciones limpias, alias originales, nombres de marca y versiones estilizadas.",
    emptyTitle: "Añade una palabra o empieza desde cero",
    emptyDescription: "La palabra es opcional. El uso y el estilo marcan la dirección de los resultados.",
    generate: "Generar nombres",
    regenerate: "Generar 8 ideas nuevas",
    availabilityNote: "La disponibilidad no se comprueba en tiempo real. Confírmala en la plataforma elegida.",
    characterLabel: "caracteres",
    archetypes: { clean: "Handle limpio", alias: "Alias original", brandable: "De marca", styled: "Estilizado" },
    reasonLabels: { concise: "breve", pronounceable: "pronunciable", clean: "limpio", keyword: "con palabra base", brandable: "apropiable" },
  },
  de: {
    useCaseLabel: "Wo willst du den Namen nutzen?",
    useCases: { social: "Social Media", gaming: "Gaming", brand: "Marke / Projekt", anonymous: "Anonymes Profil" },
    presetLabel: "Beispielideen",
    presets: ["alex", "luna", "orbit", "pixel"],
    resultsTitle: "Vorschläge, die wie echte Handles wirken",
    resultsDescription: "Die Liste mischt klare Handles, eigene Aliase, markenfähige Namen und stilisierte Varianten.",
    emptyTitle: "Grundwort eingeben oder ganz neu starten",
    emptyDescription: "Ein Grundwort ist optional. Einsatzzweck und Stil bestimmen die Richtung.",
    generate: "Namen erzeugen",
    regenerate: "8 neue Ideen erzeugen",
    availabilityNote: "Die Verfügbarkeit wird nicht live geprüft. Kontrolliere sie auf der gewählten Plattform.",
    characterLabel: "Zeichen",
    archetypes: { clean: "Klares Handle", alias: "Eigener Alias", brandable: "Markenfähig", styled: "Stilisiert" },
    reasonLabels: { concise: "kurz", pronounceable: "aussprechbar", clean: "klar", keyword: "mit Grundwort", brandable: "eigenständig" },
  },
  fr: {
    useCaseLabel: "Où vas-tu l'utiliser ?",
    useCases: { social: "Réseaux sociaux", gaming: "Gaming", brand: "Marque / projet", anonymous: "Profil anonyme" },
    presetLabel: "Idées d'exemple",
    presets: ["alex", "luna", "orbit", "pixel"],
    resultsTitle: "Des propositions qui ressemblent à de vrais pseudos",
    resultsDescription: "La liste équilibre handles propres, alias originaux, noms de marque et variantes stylisées.",
    emptyTitle: "Ajoute un mot ou pars de zéro",
    emptyDescription: "Le mot-clé est facultatif. L'usage et le style donnent la direction.",
    generate: "Générer des pseudos",
    regenerate: "Générer 8 nouvelles idées",
    availabilityNote: "La disponibilité n'est pas vérifiée en direct. Confirme-la sur la plateforme choisie.",
    characterLabel: "caractères",
    archetypes: { clean: "Handle propre", alias: "Alias original", brandable: "Mémorisable", styled: "Stylisé" },
    reasonLabels: { concise: "court", pronounceable: "prononçable", clean: "propre", keyword: "avec mot-clé", brandable: "appropriable" },
  },
  pt: {
    useCaseLabel: "Onde você vai usar?",
    useCases: { social: "Redes sociais", gaming: "Gaming", brand: "Marca / projeto", anonymous: "Perfil anônimo" },
    presetLabel: "Ideias de exemplo",
    presets: ["alex", "luna", "orbit", "pixel"],
    resultsTitle: "Sugestões que parecem nomes de usuário reais",
    resultsDescription: "A lista equilibra handles limpos, aliases originais, nomes de marca e opções estilizadas.",
    emptyTitle: "Adicione uma palavra ou comece do zero",
    emptyDescription: "A palavra é opcional. O uso e o estilo definem a direção dos resultados.",
    generate: "Gerar nomes",
    regenerate: "Gerar 8 novas ideias",
    availabilityNote: "A disponibilidade não é verificada ao vivo. Confirme na plataforma escolhida.",
    characterLabel: "caracteres",
    archetypes: { clean: "Handle limpo", alias: "Alias original", brandable: "De marca", styled: "Estilizado" },
    reasonLabels: { concise: "curto", pronounceable: "pronunciável", clean: "limpo", keyword: "com palavra-base", brandable: "apropriável" },
  },
};

const hashtagEnhancements: Record<Locale, HashtagEnhancementLabels> = {
  tr: {
    locationLabel: "Konum (isteğe bağlı)",
    locationPlaceholder: "ör. İstanbul",
    countLabel: "Hashtag sayısı",
    resultsTitle: "Kopyalanmaya hazır hashtag seti",
    resultsDescription: "Tekrarsız etiketler konu, topluluk, keşif ve geniş erişim katmanlarına ayrılır.",
    requiredMessage: "Önce konu veya niş alanını yaz.",
    regenerate: "Yeni hashtag seti üret",
    dataNotice: "Viral etiketi canlı trend verisi değildir; daha geniş erişimli etiket karışımını ifade eder.",
    presetLabel: "Popüler konular",
    presets: ["yemek", "moda", "oyun", "fitness", "teknoloji", "seyahat"],
    groupLabels: { topic: "Konu", community: "Topluluk", discovery: "Keşif", broad: "Geniş" },
    strategyDescriptions: {
      viral: "Daha geniş etiketleri ve platform keşif terimlerini öne çıkarır.",
      balanced: "Konuya özel ve daha geniş etiketleri dengeler.",
      niche: "Uzun kuyruklu, daha odaklı konu etiketlerine ağırlık verir.",
    },
    topicPacks: {
      yemek: ["yemektarifleri", "kolaytarifler", "pratikyemekler", "evyemekleri", "bugunnepisirsem", "mutfaktan", "tarifonerisi", "lezzetli"],
      moda: ["stilonerileri", "gununstili", "kombinonerileri", "sokakmodasi", "modatutkusu", "kapsuldolap", "stilgunlugu", "tarziniyansit"],
      oyun: ["oyuncular", "gamingturkiye", "oyuntavsiyesi", "oyunhaberleri", "oyunklipleri", "gamerhayati", "oyunrehberi", "yayinci"],
      fitness: ["fitnessmotivasyon", "antrenman", "sporyap", "saglikliyasam", "evdeantrenman", "guclen", "fitnessturkiye", "sporrutini"],
      teknoloji: ["teknolojihaberleri", "teknolojiinceleme", "yapayzeka", "dijitalyasam", "gadget", "teknolojinotlari", "yazilim", "teknoloji"],
      seyahat: ["gezirehberi", "seyahatnotlari", "gezirotasi", "tatilonerileri", "turkiyegezi", "yolhikayeleri", "gezgin", "kesfet"],
      guzellik: ["ciltbakimi", "makyaj", "bakimrutini", "guzellikonerileri", "makyajipuclari", "guzellikbakim", "skincare", "beauty"],
      muzik: ["yenimuzik", "muziktavsiyesi", "playlist", "muziksever", "sarkionerisi", "muzisyen", "muzikgunlugu", "nowplaying"],
      kitap: ["kitaponerisi", "neokusam", "kitapsever", "kitapyorum", "kitapkulubu", "edebiyat", "okumalisti", "okumagunlugu"],
      egitim: ["derscalisma", "ogrenme", "sinavhazirlik", "calismamotivasyonu", "ogrenci", "nottutma", "verimlicalismak", "egitim"],
    },
  },
  en: {
    locationLabel: "Location (optional)", locationPlaceholder: "e.g. London", countLabel: "Hashtag count",
    resultsTitle: "A hashtag set ready to copy", resultsDescription: "Duplicate-free tags are split across topic, community, discovery, and broad layers.",
    requiredMessage: "Enter a topic or niche first.", regenerate: "Generate a new hashtag set", dataNotice: "Viral does not use live trend data; it means a broader discovery-oriented mix.",
    presetLabel: "Popular topics", presets: ["food", "fashion", "gaming", "fitness", "technology", "travel"],
    groupLabels: { topic: "Topic", community: "Community", discovery: "Discovery", broad: "Broad" },
    strategyDescriptions: { viral: "Prioritizes broader tags and platform discovery terms.", balanced: "Balances topic-specific and broader discovery tags.", niche: "Leans toward focused, longer-tail topic tags." },
    topicPacks: {
      food: ["foodideas", "easyrecipes", "homecooking", "quickmeals", "recipeideas", "foodcreator", "whatsfordinner", "cookingtips"],
      fashion: ["styleideas", "outfitideas", "streetstyle", "capsulewardrobe", "dailyoutfit", "fashioncreator", "personalstyle", "styleinspo"],
      gaming: ["gamingcommunity", "gametips", "gamingclips", "gameguide", "gamerlife", "gamingcreator", "gameplay", "gamingnews"],
      fitness: ["fitnessmotivation", "workoutroutine", "homeworkout", "fitnessbeginner", "trainingtips", "strongereveryday", "fitnesstips", "healthylifestyle"],
      technology: ["technews", "techreview", "artificialintelligence", "digitaltools", "gadgets", "softwaretips", "technology", "techcreator"],
      travel: ["travelguide", "travelideas", "travelcreator", "cityguide", "tripplanning", "traveltips", "hiddenplaces", "travelstory"],
    },
  },
  es: {
    locationLabel: "Ubicación (opcional)", locationPlaceholder: "p. ej. Madrid", countLabel: "Número de hashtags",
    resultsTitle: "Un set de hashtags listo para copiar", resultsDescription: "Las etiquetas sin duplicados se organizan por tema, comunidad, descubrimiento y alcance amplio.",
    requiredMessage: "Escribe primero un tema o nicho.", regenerate: "Generar un nuevo set", dataNotice: "Viral no usa tendencias en tiempo real; indica una mezcla orientada a mayor descubrimiento.",
    presetLabel: "Temas populares", presets: ["comida", "moda", "gaming", "fitness", "tecnología", "viajes"],
    groupLabels: { topic: "Tema", community: "Comunidad", discovery: "Descubrimiento", broad: "Amplio" },
    strategyDescriptions: { viral: "Prioriza etiquetas amplias y términos de descubrimiento.", balanced: "Equilibra etiquetas específicas y amplias.", niche: "Da más peso a etiquetas concretas y de cola larga." },
    topicPacks: {
      comida: ["recetasfaciles", "cocinaencasa", "comidacasera", "ideasdecomida", "recetasrapidas", "cocinacreativa", "quecomemos", "tipsdecocina"],
      moda: ["ideasdeoutfit", "estilopersonal", "modaurbana", "lookdeldia", "inspiraciondemoda", "armariocapsula", "creadordemoda", "consejosdeestilo"],
      gaming: ["comunidadgamer", "guiadejuegos", "clipsdegaming", "vidagamer", "gameplay", "noticiasgaming", "consejosgamer", "creadorgaming"],
      fitness: ["motivacionfitness", "rutinafitness", "entrenamientoencasa", "consejosfitness", "vidasaludable", "fitnessprincipiantes", "entrenamiento", "progresofitness"],
      tecnologia: ["noticiastech", "tecnologia", "inteligenciaartificial", "reviewtech", "herramientasdigitales", "gadgets", "software", "creadortech"],
      viajes: ["guiadeviaje", "ideasdeviaje", "consejosdeviaje", "rutasdeviaje", "lugaressecretos", "viajeros", "historiasdeviaje", "planificaviaje"],
    },
  },
  de: {
    locationLabel: "Ort (optional)", locationPlaceholder: "z. B. Berlin", countLabel: "Anzahl der Hashtags",
    resultsTitle: "Ein kopierfertiges Hashtag-Set", resultsDescription: "Doppelte Tags werden entfernt und nach Thema, Community, Discovery und Reichweite sortiert.",
    requiredMessage: "Gib zuerst ein Thema oder eine Nische ein.", regenerate: "Neues Hashtag-Set erzeugen", dataNotice: "Viral verwendet keine Live-Trenddaten, sondern steht für eine breitere Discovery-Mischung.",
    presetLabel: "Beliebte Themen", presets: ["essen", "mode", "gaming", "fitness", "technologie", "reisen"],
    groupLabels: { topic: "Thema", community: "Community", discovery: "Discovery", broad: "Breit" },
    strategyDescriptions: { viral: "Gewichtet breite Tags und Plattform-Discovery stärker.", balanced: "Mischt themenspezifische und breitere Tags.", niche: "Setzt stärker auf fokussierte Long-Tail-Tags." },
    topicPacks: {
      essen: ["einfachegerichte", "schnellerezepte", "hausmannskost", "rezeptideen", "kochenmachtspass", "foodcreator", "wasgibtsheute", "kochtipps"],
      mode: ["outfitideen", "persoenlicherstil", "streetstyle", "tagesoutfit", "modeinspiration", "capsulewardrobe", "modecreator", "styletipps"],
      gaming: ["gamingcommunity", "spieletipps", "gamingclips", "spielguide", "gamerleben", "gameplay", "gamingnews", "gamingcreator"],
      fitness: ["fitnessmotivation", "trainingsplan", "homeworkout", "fitnesstipps", "gesundeleben", "fitnessanfanger", "training", "fitnessfortschritt"],
      technologie: ["techniknews", "techniktest", "kuenstlicheintelligenz", "digitaletools", "gadgets", "softwaretipps", "technologie", "techcreator"],
      reisen: ["reisefuehrer", "reisetipps", "reiseideen", "stadtfuehrer", "reiseplanung", "geheimtipps", "reiseblog", "reisegeschichten"],
    },
  },
  fr: {
    locationLabel: "Lieu (facultatif)", locationPlaceholder: "ex. Paris", countLabel: "Nombre de hashtags",
    resultsTitle: "Un lot de hashtags prêt à copier", resultsDescription: "Les doublons sont retirés et les tags sont répartis entre sujet, communauté, découverte et portée large.",
    requiredMessage: "Indique d'abord un sujet ou une niche.", regenerate: "Générer un nouveau lot", dataNotice: "Viral n'utilise pas de tendances en direct ; il désigne un mélange plus orienté découverte.",
    presetLabel: "Sujets populaires", presets: ["cuisine", "mode", "gaming", "fitness", "technologie", "voyage"],
    groupLabels: { topic: "Sujet", community: "Communauté", discovery: "Découverte", broad: "Large" },
    strategyDescriptions: { viral: "Met davantage en avant les tags larges et de découverte.", balanced: "Équilibre les tags précis et plus larges.", niche: "Privilégie les tags ciblés et longue traîne." },
    topicPacks: {
      cuisine: ["recettesfaciles", "cuisine maison", "recettesrapides", "ideesrecettes", "cuisinecreative", "foodcreator", "quoimanger", "astucescuisine"],
      mode: ["ideeslook", "stylepersonnel", "streetstyle", "lookdujour", "inspirationmode", "garderobecapsule", "createurmode", "conseilsstyle"],
      gaming: ["communautegaming", "astucesgaming", "clipsgaming", "guidejeu", "viedegamer", "gameplay", "actugaming", "createurgaming"],
      fitness: ["motivationfitness", "routinefitness", "sportalamaison", "conseilsfitness", "viesaine", "debutantfitness", "entrainement", "progressionfitness"],
      technologie: ["actutech", "testtech", "intelligenceartificielle", "outilsnumeriques", "gadgets", "astuceslogiciel", "technologie", "createurtech"],
      voyage: ["guidedevoyage", "conseilsvoyage", "ideesvoyage", "cityguide", "preparervoyage", "lieuxsecrets", "blogvoyage", "recitdevoyage"],
    },
  },
  pt: {
    locationLabel: "Local (opcional)", locationPlaceholder: "ex. Lisboa", countLabel: "Quantidade de hashtags",
    resultsTitle: "Um conjunto de hashtags pronto para copiar", resultsDescription: "As tags sem repetição são separadas por tema, comunidade, descoberta e alcance amplo.",
    requiredMessage: "Escreva primeiro um tema ou nicho.", regenerate: "Gerar um novo conjunto", dataNotice: "Viral não usa dados de tendência ao vivo; significa uma mistura mais ampla para descoberta.",
    presetLabel: "Temas populares", presets: ["comida", "moda", "gaming", "fitness", "tecnologia", "viagem"],
    groupLabels: { topic: "Tema", community: "Comunidade", discovery: "Descoberta", broad: "Amplo" },
    strategyDescriptions: { viral: "Prioriza tags amplas e termos de descoberta.", balanced: "Equilibra tags específicas e mais amplas.", niche: "Dá mais peso a tags focadas e de cauda longa." },
    topicPacks: {
      comida: ["receitasfaceis", "cozinhaemcasa", "comidacaseira", "receitasrapidas", "ideiasdereceita", "cozinhacriativa", "oquecomer", "dicasdecozinha"],
      moda: ["ideiasdelook", "estilopessoal", "modaurbana", "lookdodia", "inspiracaodemoda", "armariocapsula", "criadordemoda", "dicasdeestilo"],
      gaming: ["comunidadegamer", "dicasdejogos", "clipsdegaming", "guiadejogos", "vidagamer", "gameplay", "noticiasgaming", "criadorgamer"],
      fitness: ["motivacaofitness", "rotinafitness", "treinoemcasa", "dicasfitness", "vidasaudavel", "fitnessiniciante", "treino", "progressofitness"],
      tecnologia: ["noticiastech", "reviewtech", "inteligenciaartificial", "ferramentasdigitais", "gadgets", "dicasdesoftware", "tecnologia", "criadortech"],
      viagem: ["guiadeviagem", "dicasdeviagem", "ideiasdeviagem", "roteirodeviagem", "lugaressecretos", "viajantes", "historiasdeviagem", "planejarviagem"],
    },
  },
};

export type CreatorToolSeoEnhancement = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  highlights: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const localizedCreatorToolSeo: Record<
  Locale,
  Record<"bio-generator" | "nickname-generator" | "hashtag-generator", CreatorToolSeoEnhancement>
> = {
  tr: {
    "bio-generator": {
      metaTitle: "Instagram Bio ve Biyografi Üreticisi | Toolyflow",
      metaDescription: "Instagram, TikTok ve YouTube için nişine, hedef kitlene ve tonuna uygun Türkçe bio oluştur. Ücretsiz biyografi üreticisini hemen dene.",
      keywords: ["instagram bio nasıl yazılır", "instagram biyografi sözleri", "profil açıklaması", "tiktok bio önerileri", "etkileyici biyografi"],
      description: "Nişini, hedef kitleni ve profil vaadini gir; Instagram, TikTok, X, YouTube veya Twitch için gerçekten kullanılabilir üç farklı bio yönü oluştur.",
      highlights: ["Niş, hedef kitle ve vaat bilgisiyle jenerik cümleleri azaltır.", "Üç ayrı konumlandırmayı aynı anda karşılaştırır.", "Karakter sayısı, CTA ve platform tonu tek ekranda kontrol edilir."],
      faqs: [
        { question: "Instagram bio nasıl yazılır?", answer: "İyi bir Instagram bio; ne ürettiğini, kime hitap ettiğini ve takipçinin senden ne kazanacağını kısa biçimde anlatır. Araç bu üç bilgiyi ayrı alanlardan alıp profil uzunluğuna uygun seçeneklere dönüştürür." },
        { question: "Etkileyici bir biyografide ne olmalı?", answer: "Net bir konu, ayırt edici bir vaat ve gerekiyorsa tek bir çağrı satırı yeterlidir. Birbiriyle ilgisiz sıfatları sıralamak yerine profilin gerçek faydasını görünür kılmak daha değerlidir." },
        { question: "Instagram biyografi sözleri yerine neden kişiselleştirilmiş bio kullanmalıyım?", answer: "Hazır sözler çok sayıda profilde tekrar eder. Nişine ve kitlene göre kurulan bio, profilini daha hızlı açıklar ve kullanıcıya neden takip etmesi gerektiğini gösterir." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Nickname ve Kullanıcı Adı Üreticisi | Toolyflow",
      metaDescription: "Sosyal medya, oyun veya marka için havalı, kısa ve özgün nickname bul. Okunabilir ve markalaşabilir kullanıcı adı önerilerini ücretsiz üret.",
      keywords: ["nickname nasıl bulunur", "havalı kullanıcı adı", "instagram kullanıcı adı önerileri", "oyun nickleri", "özgün nickname", "kullanıcı adı bulma"],
      description: "Bir kelimeden yola çık veya sıfırdan başla; sosyal medya, oyun, marka ya da anonim profil için gerçek handle gibi görünen kullanıcı adı önerileri üret.",
      highlights: ["Temiz handle, özgün alias, markalaşabilir ve stilize yönleri dengeler.", "Uzunluk ve okunabilirlik puanı bozuk hece yığınlarını eler.", "Her yeni üretim önceki batch'ten farklı bir kısa liste getirir."],
      faqs: [
        { question: "Nickname nasıl bulunur?", answer: "Önce nerede kullanacağını ve nasıl bir izlenim bırakmak istediğini belirle. Kısa, okunabilen ve yüksek sesle söylendiğinde anlaşılabilen seçenekler genellikle daha akılda kalır." },
        { question: "Havalı bir kullanıcı adı nasıl seçilir?", answer: "Sadece x, q veya rastgele sayı eklemek yerine tek bir güçlü kök, dengeli ses yapısı ve platforma uygun uzunluk seç. Araç önerileri bu ölçütlerle puanlar." },
        { question: "Üretilen kullanıcı adının müsait olduğu kontrol ediliyor mu?", answer: "Hayır. Araç isim kalitesi ve görünümüne odaklanır; canlı kullanıcı adı sorgusu yapmaz. Beğendiğin seçeneği kullanmadan önce ilgili platformda müsaitliğini kontrol etmelisin." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Instagram ve TikTok Hashtag Üreticisi | Toolyflow",
      metaDescription: "Konu, platform ve erişim hedefine göre 20, 25 veya 30 Türkçe hashtag üret. Instagram, TikTok, X ve YouTube için ücretsiz hashtag aracı.",
      keywords: ["hashtag nasıl bulunur", "instagram hashtag üretici", "tiktok hashtag önerileri", "keşfet hashtagleri", "niş hashtag bulma"],
      description: "Konunu ve platformunu seç; tekrar etmeyen hashtagleri konu, topluluk, keşif ve geniş erişim katmanlarıyla dengeli bir sete dönüştür.",
      highlights: ["Bilinen nişlerde doğal Türkçe hashtag paketlerinden yararlanır.", "20, 25 veya 30 etiketi tek tıkla toplu kopyalar.", "Viral seçeneğini canlı trend iddiası olmadan geniş erişim stratejisi olarak açıklar."],
      faqs: [
        { question: "Instagram için hashtag nasıl bulunur?", answer: "İçeriğin ana konusu, alt konusu, hedef topluluğu ve konumu birlikte düşünülmelidir. Yalnızca çok geniş etiketleri kullanmak yerine doğrudan içeriği anlatan etiketlerle daha geniş olanları karıştırmak daha açıklayıcı bir set oluşturur." },
        { question: "Kaç hashtag kullanmalıyım?", answer: "Tek bir evrensel sayı yoktur. İçeriği gerçekten anlatan ve tekrar etmeyen etiketleri seçmek, sırf sayıyı doldurmaktan daha değerlidir. Araç 20, 25 ve 30 seçeneklerini karşılaştırman için sunar." },
        { question: "Viral hashtagler canlı veriden mi geliyor?", answer: "Hayır. Toolyflow sosyal ağların canlı trend verisine bağlanmaz. Viral modu, daha geniş ve keşif odaklı etiketlere daha fazla ağırlık veren bir dağılımdır." },
      ],
    },
  },
  en: {
    "bio-generator": {
      metaTitle: "Instagram Bio Generator - Free Online | Toolyflow",
      metaDescription: "Create a tailored Instagram, TikTok, or YouTube bio from your niche, audience, and profile promise. Generate three useful options for free.",
      keywords: ["how to write an instagram bio", "instagram bio ideas", "tiktok bio ideas", "profile description generator"],
      description: "Add your niche, audience, and profile promise to generate three usable bio directions for Instagram, TikTok, X, YouTube, or Twitch.",
      highlights: ["Uses your niche, audience, and value instead of generic adjective lists.", "Compares three distinct positioning directions in one batch.", "Keeps character count, CTA, and platform tone visible."],
      faqs: [
        { question: "How do I write a good Instagram bio?", answer: "State what you create, who it helps, and what a follower will get. Keep the language specific and use one clear CTA only when it adds value." },
        { question: "What should a creator bio include?", answer: "A focused topic, a useful promise, and a recognizable voice are usually enough. Generic labels are less useful than a concrete reason to follow." },
        { question: "Why use a tailored bio instead of a quote?", answer: "A quote rarely explains the account. A tailored bio helps visitors understand the content and decide whether the profile is relevant to them." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Nickname and Username Generator | Toolyflow",
      metaDescription: "Find short, memorable usernames for social media, gaming, or a new brand. Generate pronounceable, brandable nickname ideas for free.",
      keywords: ["how to find a nickname", "cool username ideas", "instagram username generator", "gaming nickname generator"],
      description: "Start from a word or generate from scratch to find handle-like names for social media, gaming, brands, or anonymous profiles.",
      highlights: ["Balances clean handles, original aliases, brandable names, and styled options.", "Filters awkward letter runs and weak length matches.", "Every new batch rotates to a different shortlist."],
      faqs: [
        { question: "How do I find a good nickname?", answer: "Start with where it will be used and the impression you want. Short names that are easy to say and type are usually easier to remember." },
        { question: "What makes a username look good?", answer: "A strong root, balanced sound, and platform-friendly length matter more than random numbers or excessive symbols." },
        { question: "Does the generator check username availability?", answer: "No. It focuses on name quality and presentation. Check availability on the platform before using a suggestion." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Instagram and TikTok Hashtag Generator | Toolyflow",
      metaDescription: "Generate 20, 25, or 30 relevant hashtags by topic, platform, and reach strategy. Free hashtag generator for Instagram, TikTok, X, and YouTube.",
      keywords: ["how to find hashtags", "instagram hashtag generator", "tiktok hashtag ideas", "niche hashtag finder"],
      description: "Turn a topic and platform into a duplicate-free hashtag set balanced across topic, community, discovery, and broad-reach layers.",
      highlights: ["Uses curated packs for common creator niches.", "Copies 20, 25, or 30 tags in one tap.", "Explains that broader mode is a strategy, not live trend data."],
      faqs: [
        { question: "How do I find hashtags for Instagram?", answer: "Combine tags that describe the exact topic, the audience community, the location when relevant, and a small number of broader discovery terms." },
        { question: "How many hashtags should I use?", answer: "There is no universal number. Relevance and accuracy matter more than filling a quota, so compare the 20, 25, and 30 tag sets and keep only the useful ones." },
        { question: "Are the viral hashtags based on live data?", answer: "No. Toolyflow does not connect to live social trend feeds. Viral mode simply gives more weight to broad and discovery-oriented tags." },
      ],
    },
  },
  es: {
    "bio-generator": {
      metaTitle: "Generador de Bio para Instagram Gratis | Toolyflow", metaDescription: "Crea una bio para Instagram, TikTok o YouTube a partir de tu nicho, público y propuesta. Compara tres opciones útiles gratis.",
      keywords: ["cómo escribir una bio de instagram", "ideas para bio de instagram", "bio para tiktok", "generador de biografía"],
      description: "Añade tu nicho, tu público y tu promesa para generar tres bios utilizables en Instagram, TikTok, X, YouTube o Twitch.",
      highlights: ["Parte de tu nicho y tu público, no de frases genéricas.", "Compara tres enfoques distintos en cada lote.", "Muestra caracteres, CTA y tono de plataforma."],
      faqs: [
        { question: "¿Cómo escribir una buena bio de Instagram?", answer: "Explica qué creas, a quién ayudas y qué obtiene quien te sigue. Usa lenguaje concreto y una sola llamada a la acción cuando sea necesaria." },
        { question: "¿Qué debe incluir una bio de creador?", answer: "Un tema claro, una promesa útil y una voz reconocible suelen ser suficientes. Los adjetivos genéricos aportan menos que una razón concreta para seguirte." },
        { question: "¿Por qué personalizar la bio en lugar de usar una frase?", answer: "Una frase rara vez explica la cuenta. Una bio personalizada ayuda a entender el contenido y su utilidad." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Generador de Nicknames y Nombres de Usuario | Toolyflow", metaDescription: "Encuentra nombres cortos y memorables para redes, gaming o marcas. Genera nicknames pronunciables y apropiables gratis.",
      keywords: ["cómo encontrar un nickname", "nombres de usuario originales", "ideas de username", "nick gamer"],
      description: "Parte de una palabra o empieza desde cero para crear nombres que parezcan handles reales en redes, gaming, marcas o perfiles anónimos.",
      highlights: ["Equilibra handles limpios, alias, nombres de marca y estilos.", "Filtra combinaciones difíciles de leer.", "Cada lote rota hacia una lista diferente."],
      faqs: [
        { question: "¿Cómo encontrar un buen nickname?", answer: "Define primero dónde se usará y qué impresión debe transmitir. Los nombres cortos, fáciles de pronunciar y escribir suelen recordarse mejor." },
        { question: "¿Qué hace que un nombre de usuario se vea bien?", answer: "Una raíz fuerte, un sonido equilibrado y una longitud adecuada importan más que añadir números o símbolos al azar." },
        { question: "¿Se comprueba la disponibilidad?", answer: "No. El generador se centra en la calidad del nombre. Comprueba la disponibilidad en la plataforma antes de usarlo." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Generador de Hashtags para Instagram y TikTok | Toolyflow", metaDescription: "Genera 20, 25 o 30 hashtags relevantes por tema, plataforma y alcance. Herramienta gratis para Instagram, TikTok, X y YouTube.",
      keywords: ["cómo encontrar hashtags", "generador de hashtags instagram", "hashtags para tiktok", "hashtags de nicho"],
      description: "Convierte un tema y una plataforma en un set sin duplicados repartido entre tema, comunidad, descubrimiento y alcance amplio.",
      highlights: ["Incluye paquetes cuidados para nichos habituales.", "Copia 20, 25 o 30 etiquetas de una vez.", "No confunde estrategia amplia con datos de tendencia en vivo."],
      faqs: [
        { question: "¿Cómo encontrar hashtags para Instagram?", answer: "Combina etiquetas del tema exacto, la comunidad, la ubicación cuando aporte contexto y unas pocas etiquetas amplias de descubrimiento." },
        { question: "¿Cuántos hashtags debo usar?", answer: "No existe un número universal. La relevancia importa más que completar una cuota; compara los lotes y conserva solo las etiquetas útiles." },
        { question: "¿Los hashtags virales usan datos en vivo?", answer: "No. Toolyflow no se conecta a tendencias en tiempo real. El modo viral da más peso a etiquetas amplias y de descubrimiento." },
      ],
    },
  },
  de: {
    "bio-generator": {
      metaTitle: "Instagram Bio-Generator kostenlos | Toolyflow", metaDescription: "Erstelle eine passende Bio für Instagram, TikTok oder YouTube aus Nische, Zielgruppe und Nutzen. Drei brauchbare Optionen kostenlos.",
      keywords: ["instagram bio schreiben", "instagram bio ideen", "tiktok bio", "bio generator deutsch"],
      description: "Gib Nische, Zielgruppe und Profilversprechen ein und erhalte drei nutzbare Bio-Richtungen für Instagram, TikTok, X, YouTube oder Twitch.",
      highlights: ["Nutzt Nische und Zielgruppe statt generischer Phrasen.", "Vergleicht drei unterschiedliche Positionierungen.", "Zeigt Zeichen, CTA und Plattformton direkt an."],
      faqs: [
        { question: "Wie schreibt man eine gute Instagram-Bio?", answer: "Sag, was du erstellst, wem es hilft und welchen Nutzen Follower bekommen. Formuliere konkret und nutze höchstens einen klaren CTA." },
        { question: "Was gehört in eine Creator-Bio?", answer: "Ein klares Thema, ein nützliches Versprechen und eine erkennbare Stimme reichen meist aus. Konkreter Nutzen ist stärker als allgemeine Adjektive." },
        { question: "Warum eine individuelle Bio statt eines Zitats?", answer: "Ein Zitat erklärt das Profil selten. Eine individuelle Bio zeigt sofort, worum es geht und für wen der Account relevant ist." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Nickname- und Benutzernamen-Generator | Toolyflow", metaDescription: "Finde kurze, merkbare Namen für Social Media, Gaming oder Marken. Erzeuge aussprechbare und markenfähige Nicknames kostenlos.",
      keywords: ["nickname finden", "coole benutzernamen", "instagram name ideen", "gaming nickname generator"],
      description: "Starte mit einem Wort oder komplett neu und erzeuge handleartige Namen für Social Media, Gaming, Marken oder anonyme Profile.",
      highlights: ["Mischt klare Handles, Aliase, markenfähige und stilisierte Namen.", "Filtert schwer lesbare Buchstabenfolgen.", "Jeder neue Durchlauf liefert eine andere Auswahl."],
      faqs: [
        { question: "Wie finde ich einen guten Nickname?", answer: "Lege zuerst Einsatzort und gewünschte Wirkung fest. Kurze Namen, die leicht auszusprechen und zu tippen sind, bleiben meist besser hängen." },
        { question: "Was macht einen guten Benutzernamen aus?", answer: "Eine starke Basis, ausgewogener Klang und passende Länge sind wichtiger als zufällige Zahlen oder zu viele Symbole." },
        { question: "Wird die Verfügbarkeit geprüft?", answer: "Nein. Der Generator bewertet Namensqualität und Darstellung. Prüfe die Verfügbarkeit direkt auf der Plattform." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Hashtag-Generator für Instagram und TikTok | Toolyflow", metaDescription: "Erzeuge 20, 25 oder 30 relevante Hashtags nach Thema, Plattform und Reichweite. Kostenlos für Instagram, TikTok, X und YouTube.",
      keywords: ["hashtags finden", "instagram hashtag generator", "tiktok hashtags", "nischen hashtags"],
      description: "Erstelle aus Thema und Plattform ein Set ohne Duplikate, aufgeteilt in Thema, Community, Discovery und breite Reichweite.",
      highlights: ["Nutzt kuratierte Pakete für häufige Nischen.", "Kopiert 20, 25 oder 30 Tags auf einmal.", "Erklärt breite Strategie ohne Live-Trendversprechen."],
      faqs: [
        { question: "Wie finde ich Hashtags für Instagram?", answer: "Kombiniere genaue Themen-Tags, Community-Begriffe, einen relevanten Ort und wenige breitere Discovery-Tags." },
        { question: "Wie viele Hashtags sollte ich nutzen?", answer: "Es gibt keine universelle Zahl. Relevanz ist wichtiger als eine Quote; vergleiche die Sets und behalte nur passende Tags." },
        { question: "Basieren virale Hashtags auf Live-Daten?", answer: "Nein. Toolyflow nutzt keine Live-Trendfeeds. Der virale Modus gewichtet breite und Discovery-orientierte Tags stärker." },
      ],
    },
  },
  fr: {
    "bio-generator": {
      metaTitle: "Générateur de bio Instagram gratuit | Toolyflow", metaDescription: "Crée une bio adaptée à Instagram, TikTok ou YouTube à partir de ta niche, ton public et ta promesse. Trois options utiles gratuitement.",
      keywords: ["écrire bio instagram", "idées bio instagram", "bio tiktok", "générateur de biographie"],
      description: "Ajoute ta niche, ton public et ta promesse pour générer trois bios utilisables sur Instagram, TikTok, X, YouTube ou Twitch.",
      highlights: ["Part de ta niche et de ton public, pas de phrases génériques.", "Compare trois positionnements distincts.", "Affiche caractères, CTA et ton de plateforme."],
      faqs: [
        { question: "Comment écrire une bonne bio Instagram ?", answer: "Dis ce que tu crées, à qui cela sert et ce que les abonnés vont obtenir. Reste concret et garde un seul CTA utile." },
        { question: "Que doit contenir une bio de créateur ?", answer: "Un sujet clair, une promesse utile et une voix reconnaissable suffisent souvent. Le bénéfice concret vaut mieux qu'une liste d'adjectifs." },
        { question: "Pourquoi personnaliser sa bio plutôt que choisir une citation ?", answer: "Une citation explique rarement le compte. Une bio personnalisée aide à comprendre le contenu et sa pertinence." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Générateur de pseudo et nom d'utilisateur | Toolyflow", metaDescription: "Trouve des pseudos courts et mémorables pour les réseaux, le gaming ou une marque. Génère gratuitement des idées prononçables.",
      keywords: ["trouver un pseudo", "idées nom utilisateur", "pseudo instagram", "générateur pseudo gaming"],
      description: "Pars d'un mot ou de zéro pour créer des noms qui ressemblent à de vrais handles pour les réseaux, le gaming, une marque ou un profil anonyme.",
      highlights: ["Équilibre handles propres, alias, noms mémorisables et styles.", "Écarte les suites de lettres difficiles à lire.", "Chaque lot propose une sélection différente."],
      faqs: [
        { question: "Comment trouver un bon pseudo ?", answer: "Commence par l'usage et l'impression recherchée. Les noms courts, faciles à prononcer et à taper sont généralement plus mémorables." },
        { question: "Qu'est-ce qui rend un nom d'utilisateur réussi ?", answer: "Une base forte, un son équilibré et une longueur adaptée comptent plus que des chiffres ou symboles ajoutés au hasard." },
        { question: "La disponibilité est-elle vérifiée ?", answer: "Non. Le générateur se concentre sur la qualité du nom. Vérifie sa disponibilité directement sur la plateforme." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Générateur de hashtags Instagram et TikTok | Toolyflow", metaDescription: "Génère 20, 25 ou 30 hashtags pertinents selon le sujet, la plateforme et la portée. Gratuit pour Instagram, TikTok, X et YouTube.",
      keywords: ["trouver hashtags", "générateur hashtags instagram", "hashtags tiktok", "hashtags de niche"],
      description: "Transforme un sujet et une plateforme en un lot sans doublons réparti entre sujet, communauté, découverte et portée large.",
      highlights: ["Utilise des listes soignées pour les niches courantes.", "Copie 20, 25 ou 30 tags en une fois.", "Distingue stratégie large et données de tendance en direct."],
      faqs: [
        { question: "Comment trouver des hashtags pour Instagram ?", answer: "Mélange des tags précis sur le sujet, la communauté, le lieu si utile et quelques termes de découverte plus larges." },
        { question: "Combien de hashtags faut-il utiliser ?", answer: "Il n'existe pas de nombre universel. La pertinence compte plus qu'un quota ; compare les lots et garde uniquement les tags utiles." },
        { question: "Les hashtags viraux utilisent-ils des données en direct ?", answer: "Non. Toolyflow ne se connecte pas aux tendances en temps réel. Le mode viral pondère davantage les tags larges et de découverte." },
      ],
    },
  },
  pt: {
    "bio-generator": {
      metaTitle: "Gerador de bio para Instagram grátis | Toolyflow", metaDescription: "Crie uma bio para Instagram, TikTok ou YouTube usando nicho, público e promessa. Compare três opções úteis gratuitamente.",
      keywords: ["como escrever bio instagram", "ideias de bio instagram", "bio tiktok", "gerador de biografia"],
      description: "Adicione nicho, público e promessa para gerar três bios utilizáveis no Instagram, TikTok, X, YouTube ou Twitch.",
      highlights: ["Usa nicho e público em vez de frases genéricas.", "Compara três posicionamentos diferentes.", "Mostra caracteres, CTA e tom da plataforma."],
      faqs: [
        { question: "Como escrever uma boa bio do Instagram?", answer: "Diga o que você cria, para quem e qual benefício o seguidor recebe. Use linguagem específica e apenas um CTA claro quando fizer sentido." },
        { question: "O que uma bio de criador deve ter?", answer: "Um tema claro, uma promessa útil e uma voz reconhecível costumam bastar. Benefício concreto vale mais que adjetivos genéricos." },
        { question: "Por que personalizar a bio em vez de usar uma frase?", answer: "Uma frase raramente explica a conta. Uma bio personalizada ajuda a entender o conteúdo e sua relevância." },
      ],
    },
    "nickname-generator": {
      metaTitle: "Gerador de nickname e nome de usuário | Toolyflow", metaDescription: "Encontre nomes curtos para redes, games ou marcas. Gere gratuitamente nicknames pronunciáveis, memoráveis e apropriáveis.",
      keywords: ["como escolher nickname", "nomes de usuário legais", "username instagram", "nick para jogos"],
      description: "Comece com uma palavra ou do zero para criar nomes que parecem handles reais para redes, games, marcas ou perfis anônimos.",
      highlights: ["Equilibra handles limpos, aliases, nomes de marca e estilos.", "Filtra combinações difíceis de ler.", "Cada lote traz uma seleção diferente."],
      faqs: [
        { question: "Como encontrar um bom nickname?", answer: "Defina onde será usado e qual impressão deve transmitir. Nomes curtos, fáceis de falar e digitar costumam ser mais memoráveis." },
        { question: "O que faz um nome de usuário ficar bom?", answer: "Uma raiz forte, som equilibrado e tamanho adequado importam mais que números ou símbolos aleatórios." },
        { question: "A disponibilidade é verificada?", answer: "Não. O gerador foca na qualidade do nome. Verifique a disponibilidade diretamente na plataforma." },
      ],
    },
    "hashtag-generator": {
      metaTitle: "Gerador de hashtags para Instagram e TikTok | Toolyflow", metaDescription: "Gere 20, 25 ou 30 hashtags relevantes por tema, plataforma e alcance. Ferramenta grátis para Instagram, TikTok, X e YouTube.",
      keywords: ["como encontrar hashtags", "gerador hashtags instagram", "hashtags tiktok", "hashtags de nicho"],
      description: "Transforme tema e plataforma em um conjunto sem repetição dividido entre assunto, comunidade, descoberta e alcance amplo.",
      highlights: ["Usa listas cuidadas para nichos comuns.", "Copia 20, 25 ou 30 tags de uma vez.", "Separa estratégia ampla de dados de tendência ao vivo."],
      faqs: [
        { question: "Como encontrar hashtags para Instagram?", answer: "Combine tags do tema exato, da comunidade, do local quando relevante e algumas opções mais amplas de descoberta." },
        { question: "Quantas hashtags devo usar?", answer: "Não existe um número universal. Relevância importa mais que preencher uma cota; compare os conjuntos e mantenha apenas as tags úteis." },
        { question: "Hashtags virais usam dados ao vivo?", answer: "Não. A Toolyflow não consulta tendências em tempo real. O modo viral dá mais peso a tags amplas e de descoberta." },
      ],
    },
  },
};

export function getCreatorToolEnhancements(locale: Locale): CreatorToolEnhancements {
  return {
    bio: bioEnhancements[locale],
    nickname: nicknameEnhancements[locale],
    hashtag: hashtagEnhancements[locale],
  };
}

const creatorCategoryGuides: Record<Locale, CreatorCategoryGuide> = {
  tr: {
    eyebrow: "Profilini adım adım kur",
    title: "Önce adın, sonra vaadin, sonra keşfedilme katmanın.",
    description: "Üç araç birbirinden kopuk değil. Kullanıcı adın kimliğini kurar, bio neden takip edilmen gerektiğini açıklar, hashtag seti ise doğru içeriği doğru bağlama taşır.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Hatırlanabilir bir kullanıcı adı seç", description: "Kısa, okunur ve platformlar arasında taşınabilir bir handle yönü bul.", cta: "Kullanıcı adı üret" },
      { toolSlug: "bio-generator", number: "02", title: "Profil vaadini netleştir", description: "Nişini, kitleni ve verdiğin değeri birkaç satırda anlaşılır hale getir.", cta: "Bio oluştur" },
      { toolSlug: "hashtag-generator", number: "03", title: "İçeriğini doğru etiketlerle tamamla", description: "Konu, topluluk ve keşif etiketlerini dengeli bir sete dönüştür.", cta: "Hashtag seti üret" },
    ],
  },
  en: {
    eyebrow: "Build your profile step by step",
    title: "Start with the name, clarify the promise, then add discovery.",
    description: "These tools work as one profile flow: your handle builds identity, your bio explains why to follow, and your hashtag set gives each post clearer context.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Choose a memorable handle", description: "Find a short, readable direction that can travel across platforms.", cta: "Generate usernames" },
      { toolSlug: "bio-generator", number: "02", title: "Clarify your profile promise", description: "Turn your niche, audience, and value into a few useful lines.", cta: "Create a bio" },
      { toolSlug: "hashtag-generator", number: "03", title: "Add relevant discovery tags", description: "Balance topic, community, and broader discovery tags in one set.", cta: "Generate hashtags" },
    ],
  },
  es: {
    eyebrow: "Construye tu perfil paso a paso",
    title: "Empieza por el nombre, aclara la promesa y añade descubrimiento.",
    description: "Los tres recursos forman un mismo flujo: el nombre crea identidad, la bio explica por qué seguirte y los hashtags dan contexto a cada publicación.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Elige un nombre memorable", description: "Busca un handle corto, legible y fácil de llevar entre plataformas.", cta: "Generar nombres" },
      { toolSlug: "bio-generator", number: "02", title: "Aclara la promesa del perfil", description: "Convierte nicho, público y valor en unas líneas útiles.", cta: "Crear una bio" },
      { toolSlug: "hashtag-generator", number: "03", title: "Añade etiquetas relevantes", description: "Equilibra tema, comunidad y descubrimiento en un solo set.", cta: "Generar hashtags" },
    ],
  },
  de: {
    eyebrow: "Profil Schritt für Schritt aufbauen",
    title: "Erst der Name, dann das Versprechen, danach die Discovery-Ebene.",
    description: "Die drei Tools bilden einen Ablauf: Das Handle schafft Identität, die Bio erklärt den Nutzen und Hashtags geben jedem Beitrag klaren Kontext.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Ein merkbares Handle wählen", description: "Finde einen kurzen, lesbaren Namen, der auf mehreren Plattformen funktioniert.", cta: "Namen erzeugen" },
      { toolSlug: "bio-generator", number: "02", title: "Profilversprechen klären", description: "Forme Nische, Zielgruppe und Nutzen zu wenigen brauchbaren Zeilen.", cta: "Bio erstellen" },
      { toolSlug: "hashtag-generator", number: "03", title: "Relevante Tags ergänzen", description: "Mische Thema, Community und Discovery in einem sinnvollen Set.", cta: "Hashtags erzeugen" },
    ],
  },
  fr: {
    eyebrow: "Construis ton profil étape par étape",
    title: "Commence par le nom, précise la promesse, puis ajoute la découverte.",
    description: "Les trois outils forment un même parcours : le pseudo crée l'identité, la bio explique l'intérêt du compte et les hashtags donnent du contexte aux publications.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Choisir un pseudo mémorable", description: "Trouve un handle court, lisible et facile à utiliser sur plusieurs plateformes.", cta: "Générer des pseudos" },
      { toolSlug: "bio-generator", number: "02", title: "Préciser la promesse du profil", description: "Transforme niche, public et valeur en quelques lignes utiles.", cta: "Créer une bio" },
      { toolSlug: "hashtag-generator", number: "03", title: "Ajouter des tags pertinents", description: "Équilibre sujet, communauté et découverte dans un seul lot.", cta: "Générer des hashtags" },
    ],
  },
  pt: {
    eyebrow: "Monte seu perfil passo a passo",
    title: "Comece pelo nome, esclareça a promessa e depois pense em descoberta.",
    description: "As três ferramentas formam um fluxo: o nome cria identidade, a bio explica por que seguir e as hashtags dão contexto a cada publicação.",
    steps: [
      { toolSlug: "nickname-generator", number: "01", title: "Escolha um nome memorável", description: "Encontre um handle curto, legível e fácil de usar em várias plataformas.", cta: "Gerar nomes" },
      { toolSlug: "bio-generator", number: "02", title: "Esclareça a promessa do perfil", description: "Transforme nicho, público e valor em poucas linhas úteis.", cta: "Criar uma bio" },
      { toolSlug: "hashtag-generator", number: "03", title: "Adicione tags relevantes", description: "Equilibre tema, comunidade e descoberta em um único conjunto.", cta: "Gerar hashtags" },
    ],
  },
};

export function getCreatorCategoryGuide(locale: Locale): CreatorCategoryGuide {
  return creatorCategoryGuides[locale];
}
