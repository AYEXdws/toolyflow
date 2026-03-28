import type { Locale } from "@/lib/i18n";
import type { ToolSlug } from "@/lib/routes";

export const categorySlugs = ["creator-tools", "text-tools", "quick-tools"] as const;

export type CategorySlug = (typeof categorySlugs)[number];

type CategoryCopy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  highlights: string[];
};

type CategoryLabels = {
  browseEyebrow: string;
  browseTitle: string;
  browseDescription: string;
  categoriesHeading: string;
  categoryToolsHeading: string;
  categoryToolsDescription: string;
  countSuffix: string;
};

type LocalizedCategory = CategoryCopy & {
  slug: CategorySlug;
  toolSlugs: ToolSlug[];
};

const categoryToolMap: Record<CategorySlug, ToolSlug[]> = {
  "text-tools": ["case-converter", "word-counter", "text-cleaner"],
  "creator-tools": ["bio-generator", "nickname-generator", "hashtag-generator"],
  "quick-tools": [
    "color-code-converter",
    "percentage-calculator",
    "discount-calculator",
    "qr-generator",
    "decision-wheel",
  ],
};

const categoryLabels: Record<Locale, CategoryLabels> = {
  en: {
    browseEyebrow: "Browse by category",
    browseTitle: "A tighter structure for the product",
    browseDescription:
      "Toolyflow now organizes its main pages around text workflows and creator workflows so the site feels easier to navigate and easier to expand.",
    categoriesHeading: "Categories",
    categoryToolsHeading: "Tools in this category",
    categoryToolsDescription:
      "Each page in this category stays focused on one clear workflow instead of mixing unrelated utilities together.",
    countSuffix: "tools",
  },
  tr: {
    browseEyebrow: "Kategoriye göre gez",
    browseTitle: "Ürün için daha sıkı bir yapı",
    browseDescription:
      "Toolyflow artık ana sayfalarını metin iş akışları ve creator iş akışları etrafında düzenliyor. Böylece site hem daha net geziliyor hem de büyütmesi daha mantıklı hale geliyor.",
    categoriesHeading: "Kategoriler",
    categoryToolsHeading: "Bu kategorideki araçlar",
    categoryToolsDescription:
      "Bu kategorideki her sayfa, alakasız utility’leri karıştırmak yerine tek bir net iş akışına odaklanır.",
    countSuffix: "araç",
  },
  es: {
    browseEyebrow: "Explorar por categoría",
    browseTitle: "Una estructura más clara para el producto",
    browseDescription:
      "Toolyflow organiza ahora sus páginas principales alrededor de flujos de texto y flujos para creadores para que el sitio sea más fácil de usar y de ampliar.",
    categoriesHeading: "Categorías",
    categoryToolsHeading: "Herramientas de esta categoría",
    categoryToolsDescription:
      "Cada página de esta categoría se centra en un flujo claro en lugar de mezclar utilidades sin relación.",
    countSuffix: "herramientas",
  },
  de: {
    browseEyebrow: "Nach Kategorie entdecken",
    browseTitle: "Eine klarere Produktstruktur",
    browseDescription:
      "Toolyflow ordnet seine Hauptseiten jetzt nach Text-Workflows und Creator-Workflows, damit die Website klarer navigierbar und sinnvoller erweiterbar bleibt.",
    categoriesHeading: "Kategorien",
    categoryToolsHeading: "Tools in dieser Kategorie",
    categoryToolsDescription:
      "Jede Seite in dieser Kategorie konzentriert sich auf einen klaren Workflow, statt unverbundene Utilities zu mischen.",
    countSuffix: "Tools",
  },
  fr: {
    browseEyebrow: "Parcourir par catégorie",
    browseTitle: "Une structure produit plus nette",
    browseDescription:
      "Toolyflow organise désormais ses pages principales autour des flux texte et des flux créateur afin que le site soit plus facile à parcourir et à faire évoluer.",
    categoriesHeading: "Catégories",
    categoryToolsHeading: "Outils de cette catégorie",
    categoryToolsDescription:
      "Chaque page de cette catégorie reste centrée sur un workflow clair au lieu de mélanger des utilitaires sans lien.",
    countSuffix: "outils",
  },
  pt: {
    browseEyebrow: "Explorar por categoria",
    browseTitle: "Uma estrutura mais clara para o produto",
    browseDescription:
      "A Toolyflow agora organiza suas páginas principais em torno de fluxos de texto e fluxos para criadores, deixando o site mais fácil de navegar e de expandir.",
    categoriesHeading: "Categorias",
    categoryToolsHeading: "Ferramentas desta categoria",
    categoryToolsDescription:
      "Cada página desta categoria se concentra em um fluxo claro, em vez de misturar utilities sem relação.",
    countSuffix: "ferramentas",
  },
};

const categoryContent: Record<Locale, Record<CategorySlug, CategoryCopy>> = {
  en: {
    "text-tools": {
      navLabel: "Text tools",
      eyebrow: "Text workflow category",
      title: "Text tools for formatting and cleanup",
      description:
        "This category is where Toolyflow will build its strongest utility layer: formatting, cleanup, conversion, and writing helpers that solve repeat problems fast.",
      metaTitle: "Text Tools",
      metaDescription:
        "Browse Toolyflow text tools for formatting, cleanup, and fast writing workflows with focused pages and clean outputs.",
      keywords: ["text tools", "online text tools", "formatting tools", "text cleanup tools"],
      highlights: [
        "Focused on repeat workflows like formatting, cleanup, and conversion.",
        "Built for quick input, quick output, and easy copying across devices.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator tools",
      eyebrow: "Creator workflow category",
      title: "Creator tools for bios, names, and profile workflows",
      description:
        "This category groups profile-facing tools for creators who need clean bios, usable nickname ideas, and fast utility pages that support publishing workflows.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Browse Toolyflow creator tools for bios, nicknames, profile ideas, and quick creator-focused online workflows.",
      keywords: ["creator tools", "bio generator", "nickname generator", "profile tools"],
      highlights: [
        "Designed for creators, handles, bios, and profile-first publishing flows.",
        "Keeps name and identity tools in one place instead of scattering them across the site.",
      ],
    },
    "quick-tools": {
      navLabel: "Quick tools",
      eyebrow: "Quick utility category",
      title: "Quick tools for colors, pricing, and fast utility work",
      description:
        "This category groups fast utility pages for color conversion, percentage math, discount checks, QR codes, and lightweight decision flows.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Browse Toolyflow quick tools for color conversion, percentage math, discount checks, QR codes, and more.",
      keywords: ["quick tools", "color converter", "discount calculator", "percentage calculator"],
      highlights: [
        "Built for fast answers and small tasks that should not need a heavy app.",
        "Useful for creator workflows, pricing checks, and lightweight utility actions.",
      ],
    },
  },
  tr: {
    "text-tools": {
      navLabel: "Metin Araçları",
      eyebrow: "Metin iş akışı kategorisi",
      title: "Biçimlendirme ve temizlik için metin araçları",
      description:
        "Bu kategori, Toolyflow’un en güçlü utility katmanını kuracağı yer: biçimlendirme, temizlik, dönüştürme ve yazma yardımcıları tekrar eden ihtiyaçları hızlıca çözmelidir.",
      metaTitle: "Metin Araçları",
      metaDescription:
        "Biçimlendirme, temizlik ve hızlı yazı iş akışları için Toolyflow metin araçlarını keşfedin.",
      keywords: ["metin araçları", "online metin araçları", "biçimlendirme araçları", "metin temizleme"],
      highlights: [
        "Biçimlendirme, temizlik ve dönüştürme gibi tekrar eden iş akışlarına odaklanır.",
        "Hızlı giriş, hızlı çıktı ve cihazlar arası kolay kopyalama için tasarlanır.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator Araçları",
      eyebrow: "İçerik üretici iş akışı kategorisi",
      title: "Bio, isim ve profil iş akışları için creator araçları",
      description:
        "Bu kategori; içerik üreticilerin bio, kullanıcı adı, hashtag ve profil odaklı işlerinde kullanacağı araçları aynı çatı altında toplar ve yayınlama akışlarını destekler.",
      metaTitle: "İçerik Üretici Araçları",
      metaDescription:
        "Bio, nickname, profil fikirleri ve creator odaklı hızlı iş akışları için Toolyflow içerik üretici araçlarını keşfedin.",
      keywords: ["içerik üretici araçları", "bio generator", "nickname generator", "profil araçları"],
      highlights: [
        "İçerik üreticiler, handle’lar, bio’lar ve profil odaklı yayın akışları için tasarlandı.",
        "Kimlik ve isim araçlarını sitede dağınık tutmak yerine tek yerde toplar.",
      ],
    },
    "quick-tools": {
      navLabel: "Hızlı Araçlar",
      eyebrow: "Hızlı utility kategorisi",
      title: "Renk, fiyat ve pratik işler için hızlı araçlar",
      description:
        "Bu kategori; renk dönüştürme, yüzde hesabı, indirim kontrolü, QR üretimi ve hafif karar akışları gibi hızlı utility araçlarını bir arada toplar.",
      metaTitle: "Hızlı Araçlar",
      metaDescription:
        "Renk dönüştürme, yüzde hesabı, indirim kontrolü, QR üretimi ve daha fazlası için Toolyflow hızlı araçlarını keşfedin.",
      keywords: ["hızlı araçlar", "renk dönüştürücü", "indirim hesaplayıcı", "yüzde hesaplayıcı"],
      highlights: [
        "Küçük ama sık tekrar eden işler için hızlı sonuç verir.",
        "Creator iş akışları, fiyat kontrolü ve pratik utility ihtiyaçları için uygundur.",
      ],
    },
  },
  es: {
    "text-tools": {
      navLabel: "Herramientas de texto",
      eyebrow: "Categoría de texto",
      title: "Herramientas de texto para formato y limpieza",
      description:
        "Esta categoría es donde Toolyflow construirá su capa más fuerte: formato, limpieza, conversión y ayudas de escritura para resolver tareas repetidas.",
      metaTitle: "Text Tools",
      metaDescription:
        "Explora las herramientas de texto de Toolyflow para formato, limpieza y flujos de escritura rápidos.",
      keywords: ["text tools", "herramientas de texto", "limpieza de texto", "formato de texto"],
      highlights: [
        "Se centra en flujos repetidos como formato, limpieza y conversión.",
        "Pensado para entrada rápida, salida rápida y copia fácil.",
      ],
    },
    "creator-tools": {
      navLabel: "Herramientas para creadores",
      eyebrow: "Categoría para creadores",
      title: "Herramientas para bios, nombres y perfiles",
      description:
        "Esta categoría reúne herramientas pensadas para creadores que necesitan bios limpias, ideas de nombres y páginas rápidas para apoyar su flujo de publicación.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Explora las herramientas para creadores de Toolyflow para bios, nicknames, perfiles y flujos rápidos.",
      keywords: ["creator tools", "bio generator", "nickname generator", "herramientas para creadores"],
      highlights: [
        "Pensadas para creadores, handles y flujos centrados en perfiles.",
        "Mantiene juntas las herramientas de identidad y nombre.",
      ],
    },
    "quick-tools": {
      navLabel: "Herramientas rápidas",
      eyebrow: "Categoría rápida",
      title: "Herramientas rápidas para color, precio y utilidades",
      description:
        "Esta categoría reúne conversiones de color, cálculos porcentuales, descuentos, QR y otras utilidades ligeras.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Explora herramientas rápidas para color, porcentajes, descuentos, QR y utilidades ligeras.",
      keywords: ["herramientas rápidas", "conversor de color", "calculadora de descuentos", "calculadora de porcentajes"],
      highlights: [
        "Pensada para respuestas rápidas y tareas pequeñas.",
        "Útil para creadores, precios y utilidades cotidianas.",
      ],
    },
  },
  de: {
    "text-tools": {
      navLabel: "Text-Tools",
      eyebrow: "Text-Workflow-Kategorie",
      title: "Text-Tools für Formatierung und Bereinigung",
      description:
        "In dieser Kategorie baut Toolyflow seine stärkste Utility-Ebene auf: Formatierung, Bereinigung, Umwandlung und Schreibhelfer für wiederkehrende Aufgaben.",
      metaTitle: "Text-Tools",
      metaDescription:
        "Entdecke Toolyflow Text-Tools für Formatierung, Bereinigung und schnelle Schreib-Workflows.",
      keywords: ["text-tools", "online text-tools", "text bereinigen", "formatierung tools"],
      highlights: [
        "Konzentriert sich auf wiederkehrende Workflows wie Formatierung, Bereinigung und Umwandlung.",
        "Für schnelle Eingabe, schnelle Ausgabe und einfaches Kopieren aufgebaut.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator-Tools",
      eyebrow: "Creator-Workflow-Kategorie",
      title: "Creator-Tools für Bios, Namen und Profile",
      description:
        "Diese Kategorie bündelt Tools für Creator, die saubere Bios, brauchbare Nickname-Ideen und schnelle Profil-Workflows brauchen.",
      metaTitle: "Creator-Tools",
      metaDescription:
        "Entdecke Toolyflow Creator-Tools für Bios, Nicknames, Profile und schnelle Creator-Workflows.",
      keywords: ["creator-tools", "bio generator", "nickname generator", "profil tools"],
      highlights: [
        "Gedacht für Creator, Handles und profilorientierte Publishing-Workflows.",
        "Hält Identitäts- und Namenstools an einem Ort zusammen.",
      ],
    },
    "quick-tools": {
      navLabel: "Schnelle Tools",
      eyebrow: "Schnelle Utility-Kategorie",
      title: "Schnelle Tools für Farbe, Preise und kleine Aufgaben",
      description:
        "Diese Kategorie bündelt Farbkonvertierung, Prozentrechnung, Rabattprüfung, QR-Codes und leichte Utility-Workflows.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Entdecke schnelle Tools für Farbe, Prozentrechnung, Rabatte, QR-Codes und weitere Utilities.",
      keywords: ["schnelle tools", "farbkonverter", "rabattrechner", "prozentrechner"],
      highlights: [
        "Für schnelle Antworten und kleine wiederkehrende Aufgaben gebaut.",
        "Nützlich für Creator-Workflows, Preisprüfungen und leichte Utilities.",
      ],
    },
  },
  fr: {
    "text-tools": {
      navLabel: "Outils de texte",
      eyebrow: "Catégorie texte",
      title: "Outils de texte pour formatage et nettoyage",
      description:
        "Cette catégorie est l'endroit où Toolyflow doit construire sa couche la plus forte: formatage, nettoyage, conversion et aides d'écriture pour des besoins répétés.",
      metaTitle: "Text Tools",
      metaDescription:
        "Parcourez les outils de texte de Toolyflow pour le formatage, le nettoyage et les flux d'écriture rapides.",
      keywords: ["text tools", "outils de texte", "nettoyage texte", "formatage texte"],
      highlights: [
        "Centrée sur des workflows répétés comme le formatage, le nettoyage et la conversion.",
        "Pensée pour une saisie rapide, une sortie rapide et une copie simple.",
      ],
    },
    "creator-tools": {
      navLabel: "Outils créateur",
      eyebrow: "Catégorie créateur",
      title: "Outils pour bios, noms et profils créateur",
      description:
        "Cette catégorie regroupe les outils destinés aux créateurs qui ont besoin de bios propres, d'idées de pseudos et de pages rapides pour leurs profils.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Parcourez les outils créateur de Toolyflow pour bios, pseudos, profils et workflows rapides.",
      keywords: ["creator tools", "bio generator", "nickname generator", "outils créateur"],
      highlights: [
        "Pensés pour les créateurs, les handles et les flux centrés sur le profil.",
        "Regroupe les outils d'identité et de nom au même endroit.",
      ],
    },
    "quick-tools": {
      navLabel: "Outils rapides",
      eyebrow: "Catégorie utilitaire rapide",
      title: "Outils rapides pour couleur, prix et tâches légères",
      description:
        "Cette catégorie réunit conversion de couleurs, calculs de pourcentage, remises, QR et autres utilitaires rapides.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Parcourez des outils rapides pour couleur, pourcentages, remises, QR et autres utilitaires légers.",
      keywords: ["outils rapides", "convertisseur couleur", "calculateur remise", "calculateur pourcentage"],
      highlights: [
        "Conçue pour des réponses rapides et des petites tâches récurrentes.",
        "Pratique pour créateurs, prix et utilitaires du quotidien.",
      ],
    },
  },
  pt: {
    "text-tools": {
      navLabel: "Ferramentas de texto",
      eyebrow: "Categoria de texto",
      title: "Ferramentas de texto para formatação e limpeza",
      description:
        "Esta categoria é onde a Toolyflow deve construir sua camada mais forte: formatação, limpeza, conversão e ajudas de escrita para tarefas repetidas.",
      metaTitle: "Text Tools",
      metaDescription:
        "Explore as text tools da Toolyflow para formatação, limpeza e fluxos rápidos de escrita.",
      keywords: ["text tools", "ferramentas de texto", "limpeza de texto", "formatação de texto"],
      highlights: [
        "Focada em fluxos repetidos como formatação, limpeza e conversão.",
        "Feita para entrada rápida, saída rápida e cópia simples.",
      ],
    },
    "creator-tools": {
      navLabel: "Ferramentas para criadores",
      eyebrow: "Categoria creator",
      title: "Ferramentas para bios, nomes e perfis",
      description:
        "Esta categoria reúne ferramentas para creators que precisam de bios limpas, ideias de nicknames e páginas rápidas para apoiar seus fluxos de publicação.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Explore as creator tools da Toolyflow para bios, nicknames, perfis e fluxos rápidos.",
      keywords: ["creator tools", "bio generator", "nickname generator", "ferramentas para creators"],
      highlights: [
        "Pensadas para creators, handles e fluxos centrados em perfil.",
        "Mantém juntas as ferramentas de identidade e nome.",
      ],
    },
    "quick-tools": {
      navLabel: "Ferramentas rápidas",
      eyebrow: "Categoria de utilidades rápidas",
      title: "Ferramentas rápidas para cor, preço e tarefas leves",
      description:
        "Esta categoria reúne conversão de cor, cálculos de porcentagem, descontos, QR e outras utilidades leves.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Explore ferramentas rápidas para cor, porcentagem, descontos, QR e outras utilidades.",
      keywords: ["ferramentas rápidas", "conversor de cores", "calculadora de desconto", "calculadora de porcentagem"],
      highlights: [
        "Feita para respostas rápidas e tarefas pequenas recorrentes.",
        "Útil para creators, preços e utilidades leves.",
      ],
    },
  },
};

export function isCategorySlug(value: string): value is CategorySlug {
  return categorySlugs.includes(value as CategorySlug);
}

export function getCategoryLabels(locale: Locale) {
  return categoryLabels[locale];
}

export function getCategories(locale: Locale): LocalizedCategory[] {
  const content = categoryContent[locale];

  return categorySlugs.map((slug) => ({
    slug,
    toolSlugs: categoryToolMap[slug],
    ...content[slug],
  }));
}

export function getCategory(locale: Locale, slug: CategorySlug): LocalizedCategory {
  return getCategories(locale).find((category) => category.slug === slug)!;
}

export function getCategoryForTool(slug: ToolSlug): CategorySlug | null {
  const matched = categorySlugs.find((categorySlug) =>
    categoryToolMap[categorySlug].includes(slug)
  );

  return matched ?? null;
}

export function getToolSlugsForCategory(slug: CategorySlug) {
  return categoryToolMap[slug];
}
