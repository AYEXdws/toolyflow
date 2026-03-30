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
      title: "Text tools",
      description:
        "Convert, clean, and tighten text in one place without bouncing between separate pages.",
      metaTitle: "Text Tools",
      metaDescription:
        "Browse Toolyflow text tools for formatting, cleanup, and fast writing workflows with focused pages and clean outputs.",
      keywords: ["text tools", "online text tools", "formatting tools", "text cleanup tools"],
      highlights: [
        "Built for repeat formatting, cleanup, and conversion tasks.",
        "Made for quick input, clean output, and easy copying across devices.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator tools",
      eyebrow: "Creator workflow category",
      title: "Creator tools",
      description:
        "Profile-focused tools for bios, usernames, hashtags, and quick publishing prep.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Browse Toolyflow creator tools for bios, nicknames, profile ideas, and quick creator-focused online workflows.",
      keywords: ["creator tools", "bio generator", "nickname generator", "profile tools"],
      highlights: [
        "Made for social profiles, creator handles, bios, and post-ready setup.",
        "Keeps identity tools together instead of scattering them across the site.",
      ],
    },
    "quick-tools": {
      navLabel: "Quick tools",
      eyebrow: "Quick utility category",
      title: "Quick tools",
      description:
        "Fast pages for QR codes, quick calculations, color conversion, and small everyday tasks.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Browse Toolyflow quick tools for color conversion, percentage math, discount checks, QR codes, and more.",
      keywords: ["quick tools", "color converter", "discount calculator", "percentage calculator"],
      highlights: [
        "Useful when you need a quick answer without opening a heavy app.",
        "Covers pricing checks, QR sharing, and other lightweight utility tasks.",
      ],
    },
  },
  tr: {
    "text-tools": {
      navLabel: "Metin Araçları",
      eyebrow: "Metin iş akışı kategorisi",
      title: "Metin Araçları",
      description:
        "Metni dönüştürmek, temizlemek ve daha okunur hale getirmek için bir arada duran araçlar.",
      metaTitle: "Metin Araçları",
      metaDescription:
        "Biçimlendirme, temizlik ve hızlı yazı iş akışları için Toolyflow metin araçlarını keşfedin.",
      keywords: ["metin araçları", "online metin araçları", "biçimlendirme araçları", "metin temizleme"],
      highlights: [
        "Biçimlendirme, temizlik ve dönüştürme gibi tekrar eden işlerde hız kazandırır.",
        "Telefonda da masaüstünde de hızlı giriş ve temiz çıktı için tasarlanır.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator Araçları",
      eyebrow: "İçerik üretici iş akışı kategorisi",
      title: "Creator Araçları",
      description:
        "Bio, kullanıcı adı ve hashtag gibi creator işlerini tek yerde hızlandıran araçlar.",
      metaTitle: "İçerik Üretici Araçları",
      metaDescription:
        "Bio, nickname, profil fikirleri ve creator odaklı hızlı iş akışları için Toolyflow içerik üretici araçlarını keşfedin.",
      keywords: ["içerik üretici araçları", "bio generator", "nickname generator", "profil araçları"],
      highlights: [
        "Profil, handle ve paylaşım hazırlığı gibi işler için daha net bir akış kurar.",
        "Creator tarafındaki isim, bio ve hashtag araçlarını tek yerde toplar.",
      ],
    },
    "quick-tools": {
      navLabel: "Hızlı Araçlar",
      eyebrow: "Hızlı utility kategorisi",
      title: "Hızlı Araçlar",
      description:
        "QR kod, karar çarkı, renk dönüştürme ve hesaplayıcılar gibi pratik işleri hızlandıran sayfalar.",
      metaTitle: "Hızlı Araçlar",
      metaDescription:
        "Renk dönüştürme, yüzde hesabı, indirim kontrolü, QR üretimi ve daha fazlası için Toolyflow hızlı araçlarını keşfedin.",
      keywords: ["hızlı araçlar", "renk dönüştürücü", "indirim hesaplayıcı", "yüzde hesaplayıcı"],
      highlights: [
        "Küçük ama sık tekrar eden işler için hızlı sonuç verir.",
        "Creator akışlarını destekleyen pratik utility ihtiyaçları için uygundur.",
      ],
    },
  },
  es: {
    "text-tools": {
      navLabel: "Herramientas de texto",
      eyebrow: "Categoría de texto",
      title: "Herramientas de texto",
      description:
        "Herramientas para convertir, limpiar y pulir texto sin salir del flujo.",
      metaTitle: "Text Tools",
      metaDescription:
        "Explora las herramientas de texto de Toolyflow para formato, limpieza y flujos de escritura rápidos.",
      keywords: ["text tools", "herramientas de texto", "limpieza de texto", "formato de texto"],
      highlights: [
        "Resuelve tareas repetidas de formato, limpieza y conversión.",
        "Pensado para entrada rápida, salida clara y copia fácil.",
      ],
    },
    "creator-tools": {
      navLabel: "Herramientas para creadores",
      eyebrow: "Categoría para creadores",
      title: "Herramientas para creadores",
      description:
        "Herramientas pensadas para bios, nombres de usuario, hashtags y preparación de perfil.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Explora las herramientas para creadores de Toolyflow para bios, nicknames, perfiles y flujos rápidos.",
      keywords: ["creator tools", "bio generator", "nickname generator", "herramientas para creadores"],
      highlights: [
        "Hechas para perfiles, handles y tareas rápidas de publicación.",
        "Mantiene juntas las herramientas de identidad y nombre.",
      ],
    },
    "quick-tools": {
      navLabel: "Herramientas rápidas",
      eyebrow: "Categoría rápida",
      title: "Herramientas rápidas",
      description:
        "QR, ruedas de decisión, convertidores de color y calculadoras para resolver tareas rápidas.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Explora herramientas rápidas para color, porcentajes, descuentos, QR y utilidades ligeras.",
      keywords: ["herramientas rápidas", "conversor de color", "calculadora de descuentos", "calculadora de porcentajes"],
      highlights: [
        "Pensada para respuestas rápidas y tareas pequeñas.",
        "Útil para precios, QR y utilidades del día a día.",
      ],
    },
  },
  de: {
    "text-tools": {
      navLabel: "Text-Tools",
      eyebrow: "Text-Workflow-Kategorie",
      title: "Text-Tools",
      description:
        "Text-Tools zum Umwandeln, Bereinigen und Glätten von Copy in wenigen Sekunden.",
      metaTitle: "Text-Tools",
      metaDescription:
        "Entdecke Toolyflow Text-Tools für Formatierung, Bereinigung und schnelle Schreib-Workflows.",
      keywords: ["text-tools", "online text-tools", "text bereinigen", "formatierung tools"],
      highlights: [
        "Hilft bei wiederkehrenden Aufgaben wie Formatierung, Bereinigung und Umwandlung.",
        "Für schnelle Eingabe, saubere Ausgabe und einfaches Kopieren gebaut.",
      ],
    },
    "creator-tools": {
      navLabel: "Creator-Tools",
      eyebrow: "Creator-Workflow-Kategorie",
      title: "Creator-Tools",
      description:
        "Tools für Bios, Usernames, Hashtags und schnelle Profil-Workflows.",
      metaTitle: "Creator-Tools",
      metaDescription:
        "Entdecke Toolyflow Creator-Tools für Bios, Nicknames, Profile und schnelle Creator-Workflows.",
      keywords: ["creator-tools", "bio generator", "nickname generator", "profil tools"],
      highlights: [
        "Gedacht für Creator-Profile, Handles und schnelle Publishing-Aufgaben.",
        "Hält Identitäts- und Namenstools an einem Ort zusammen.",
      ],
    },
    "quick-tools": {
      navLabel: "Schnelle Tools",
      eyebrow: "Schnelle Utility-Kategorie",
      title: "Schnelle Tools",
      description:
        "QR-Codes, Entscheidungsrad, Farbkonvertierung und Rechner für kleine schnelle Aufgaben.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Entdecke schnelle Tools für Farbe, Prozentrechnung, Rabatte, QR-Codes und weitere Utilities.",
      keywords: ["schnelle tools", "farbkonverter", "rabattrechner", "prozentrechner"],
      highlights: [
        "Für schnelle Antworten und kleine wiederkehrende Aufgaben gebaut.",
        "Nützlich für Preisprüfungen, QR-Sharing und leichte Utilities.",
      ],
    },
  },
  fr: {
    "text-tools": {
      navLabel: "Outils de texte",
      eyebrow: "Catégorie texte",
      title: "Outils de texte",
      description:
        "Des outils de texte pour convertir, nettoyer et resserrer un texte rapidement.",
      metaTitle: "Text Tools",
      metaDescription:
        "Parcourez les outils de texte de Toolyflow pour le formatage, le nettoyage et les flux d'écriture rapides.",
      keywords: ["text tools", "outils de texte", "nettoyage texte", "formatage texte"],
      highlights: [
        "Conçue pour les tâches répétées de formatage, nettoyage et conversion.",
        "Pensée pour une saisie rapide, un résultat clair et une copie simple.",
      ],
    },
    "creator-tools": {
      navLabel: "Outils créateur",
      eyebrow: "Catégorie créateur",
      title: "Outils créateur",
      description:
        "Des outils pensés pour les bios, pseudos, hashtags et tâches rapides de profil.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Parcourez les outils créateur de Toolyflow pour bios, pseudos, profils et workflows rapides.",
      keywords: ["creator tools", "bio generator", "nickname generator", "outils créateur"],
      highlights: [
        "Pensés pour les profils créateur, les handles et la préparation de publication.",
        "Regroupe les outils d'identité et de nom au même endroit.",
      ],
    },
    "quick-tools": {
      navLabel: "Outils rapides",
      eyebrow: "Catégorie utilitaire rapide",
      title: "Outils rapides",
      description:
        "QR codes, roue de décision, conversion de couleur et calculateurs pour régler vite les petites tâches.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Parcourez des outils rapides pour couleur, pourcentages, remises, QR et autres utilitaires légers.",
      keywords: ["outils rapides", "convertisseur couleur", "calculateur remise", "calculateur pourcentage"],
      highlights: [
        "Conçus pour les réponses rapides et les petits besoins répétés.",
        "Utile pour les prix, les QR et les besoins du quotidien.",
      ],
    },
  },
  pt: {
    "text-tools": {
      navLabel: "Ferramentas de texto",
      eyebrow: "Categoria de texto",
      title: "Ferramentas de texto",
      description:
        "Ferramentas para converter, limpar e ajustar texto sem sair do fluxo.",
      metaTitle: "Text Tools",
      metaDescription:
        "Explore as text tools da Toolyflow para formatação, limpeza e fluxos rápidos de escrita.",
      keywords: ["text tools", "ferramentas de texto", "limpeza de texto", "formatação de texto"],
      highlights: [
        "Resolvem fluxos repetidos como formatação, limpeza e conversão.",
        "Pensadas para entrada rápida, saída clara e cópia fácil.",
      ],
    },
    "creator-tools": {
      navLabel: "Ferramentas para criadores",
      eyebrow: "Categoria creator",
      title: "Ferramentas para criadores",
      description:
        "Ferramentas para bios, nomes de usuário, hashtags e tarefas rápidas de perfil.",
      metaTitle: "Creator Tools",
      metaDescription:
        "Explore as creator tools da Toolyflow para bios, nicknames, perfis e fluxos rápidos.",
      keywords: ["creator tools", "bio generator", "nickname generator", "ferramentas para creators"],
      highlights: [
        "Feitas para perfis creator, handles e tarefas rápidas de publicação.",
        "Mantém juntas as ferramentas de identidade e nome.",
      ],
    },
    "quick-tools": {
      navLabel: "Ferramentas rápidas",
      eyebrow: "Categoria de utilidades rápidas",
      title: "Ferramentas rápidas",
      description:
        "QR codes, roda de decisão, conversão de cor e calculadoras para resolver tarefas rápidas.",
      metaTitle: "Quick Tools",
      metaDescription:
        "Explore ferramentas rápidas para cor, porcentagem, descontos, QR e outras utilidades.",
      keywords: ["ferramentas rápidas", "conversor de cores", "calculadora de desconto", "calculadora de porcentagem"],
      highlights: [
        "Criadas para respostas rápidas e tarefas pequenas recorrentes.",
        "Úteis para preços, QR e utilidades leves do dia a dia.",
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
