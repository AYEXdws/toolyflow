import { localeLabels, type Locale } from "@/lib/i18n";
import { type ToolSlug } from "@/lib/routes";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

type LocalizedTool = {
  slug: ToolSlug;
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
};

type StaticPageContent = {
  slug: "about" | "contact" | "privacy-policy" | "terms-of-service";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{ title: string; body: string }>;
};

export type Dictionary = {
  languageName: string;
  localeCode: string;
  siteDescription: string;
  header: {
    tools: string;
    about: string;
    contact: string;
  };
  footer: {
    description: string;
    toolsHeading: string;
    companyHeading: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  shared: {
    language: string;
    openTool: string;
    go: string;
    whyUseIt: string;
    exploreMore: string;
    noText: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ label: string; value: string }>;
    toolsEyebrow: string;
    toolsTitle: string;
    toolsDescription: string;
    features: Array<{ title: string; description: string }>;
  };
  staticPages: Record<StaticPageContent["slug"], StaticPageContent>;
  tools: Record<ToolSlug, LocalizedTool>;
  caseConverter: {
    inputLabel: string;
    placeholder: string;
    characters: string;
    words: string;
    clearText: string;
    uppercase: string;
    lowercase: string;
    capitalize: string;
    copy: string;
    copied: string;
  };
  qrGenerator: {
    inputLabel: string;
    placeholder: string;
    download: string;
    clear: string;
    livePreview: string;
    emptyState: string;
    generating: string;
    helper: string;
  };
  nicknameGenerator: {
    keywordLabel: string;
    keywordPlaceholder: string;
    styleLabel: string;
    generateMore: string;
    tapToCopy: string;
    copied: string;
    styles: Record<"cool" | "dark" | "gaming" | "aesthetic", string>;
    seeds: Record<
      "cool" | "dark" | "gaming" | "aesthetic",
      { left: string[]; right: string[] }
    >;
  };
  bioGenerator: {
    nameLabel: string;
    namePlaceholder: string;
    platformLabel: string;
    toneLabel: string;
    generate: string;
    copy: string;
    copied: string;
    platforms: Record<"instagram" | "gaming" | "personal", string>;
    tones: Record<
      "cool" | "mysterious" | "personal" | "professional" | "minimal" | "bold",
      string
    >;
    defaultName: string;
    platformLines: Record<"instagram" | "gaming" | "personal", string[]>;
    templates: Record<
      "cool" | "mysterious" | "personal" | "professional" | "minimal" | "bold",
      { starters: string[]; closings: string[] }
    >;
  };
  decisionWheel: {
    inputLabel: string;
    button: string;
    spinning: string;
    helper: string;
    resultLabel: string;
    emptyResult: string;
    starterOptions: string[];
  };
};

const baseToolSlugs: ToolSlug[] = [
  "bio-generator",
  "nickname-generator",
  "qr-generator",
  "case-converter",
  "decision-wheel",
];

function createEnglishDictionary(): Dictionary {
  return {
    languageName: localeLabels.en,
    localeCode: "en_US",
    siteDescription: "Fast, simple, free online tools.",
    header: {
      tools: "Tools",
      about: "About",
      contact: "Contact",
    },
    footer: {
      description:
        "Fast, simple, free online tools for quick daily tasks. Every tool is designed to work cleanly on mobile, tablet, and desktop.",
      toolsHeading: "Tools",
      companyHeading: "Company",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    shared: {
      language: "Language",
      openTool: "Open tool",
      go: "Go",
      whyUseIt: "Why use it",
      exploreMore: "Explore more",
      noText: "No text yet.",
    },
    home: {
      metaTitle: "Fast, simple, free online tools",
      metaDescription:
        "Toolyflow is a fast mini tools website with free online tools, separate tool pages, responsive layouts, and SEO-friendly structure.",
      keywords: [
        "online tools",
        "free online tools",
        "mini tools website",
        "qr code generator",
        "case converter",
        "bio generator",
      ],
      eyebrow: "Online tools website",
      title: "Toolyflow",
      tagline: "Fast, simple, free online tools.",
      description:
        "Toolyflow is built as a clean mini tools website with focused utility pages, strong SEO structure, and a responsive layout that feels like a real product instead of a demo.",
      primaryCta: "Browse tools",
      secondaryCta: "Learn more",
      stats: [
        { label: "First release", value: "6 languages" },
        { label: "Tool stack", value: "5 tools" },
        { label: "Experience", value: "All screens" },
      ],
      toolsEyebrow: "Tool library",
      toolsTitle: "Useful tools, one clear page each",
      toolsDescription:
        "Each tool has its own route, metadata, and focused interface so the site stays easy to browse, index, and scale across multiple languages.",
      features: [
        {
          title: "Clean structure",
          description:
            "Reusable components, separate tool pages, and a production-minded file structure keep the codebase ready for growth.",
        },
        {
          title: "Client-side first",
          description:
            "The MVP avoids unnecessary backend complexity. Tools run mostly in the browser for speed, simplicity, and lower maintenance.",
        },
        {
          title: "Trust-ready pages",
          description:
            "About, Contact, Privacy Policy, and Terms of Service are included to make the site feel complete and more ad-ready.",
        },
      ],
    },
    staticPages: {
      about: {
        slug: "about",
        metaTitle: "About",
        metaDescription:
          "Learn what Toolyflow is, why it exists, and how the project is designed around fast and simple online tools.",
        keywords: ["about toolyflow", "online tools website", "free online tools"],
        eyebrow: "About Toolyflow",
        title: "A focused mini tools website",
        description:
          "Toolyflow is built to offer quick, clean, free online tools without unnecessary friction.",
        sections: [
          {
            title: "What Toolyflow does",
            body:
              "Toolyflow is an online tools website focused on everyday utility pages that open fast, work well on any screen size, and stay simple enough to use in seconds.",
          },
          {
            title: "How the first version is designed",
            body:
              "The first release is an MVP with five working tools: Bio Generator, Nickname Generator, QR Code Generator, Case Converter, and Decision Wheel. Each one lives on its own page instead of being packed into a single long screen.",
          },
          {
            title: "Why the product stays simple",
            body:
              "The goal is to ship a production-ready first version, not an over-engineered system. Most features run client-side so the site stays fast, lightweight, and easier to maintain.",
          },
        ],
      },
      contact: {
        slug: "contact",
        metaTitle: "Contact",
        metaDescription:
          "Contact Toolyflow for support, partnerships, or general questions about the online tools website.",
        keywords: ["contact toolyflow", "toolyflow support", "online tools contact"],
        eyebrow: "Contact",
        title: "Reach the Toolyflow team",
        description:
          "Use the contact details below for support requests, business questions, or feedback about the site.",
        sections: [
          {
            title: "Email",
            body:
              "The fastest way to reach Toolyflow is by email at hello@toolyflow.com.",
          },
          {
            title: "What to include",
            body:
              "If you are reporting a tool issue, include the page URL, the device you used, and a short description of what happened so the issue can be reproduced quickly.",
          },
          {
            title: "Partnerships and ads",
            body:
              "For sponsorship, advertising, or growth opportunities, send a message with your company details and the type of collaboration you have in mind.",
          },
        ],
      },
      "privacy-policy": {
        slug: "privacy-policy",
        metaTitle: "Privacy Policy",
        metaDescription:
          "Read the Toolyflow privacy policy and understand how the site handles visitor information and browser-based tools.",
        keywords: ["toolyflow privacy policy", "online tools privacy", "website privacy policy"],
        eyebrow: "Privacy Policy",
        title: "Privacy policy",
        description:
          "This page explains the basic privacy approach for Toolyflow and its browser-based tools.",
        sections: [
          {
            title: "Information handling",
            body:
              "Toolyflow is designed to keep the first version lightweight. Most tools run directly in the browser, which means user input is generally processed client-side instead of being sent to a backend service.",
          },
          {
            title: "Analytics and service providers",
            body:
              "Toolyflow may use analytics, hosting, security, or advertising services to understand site traffic, keep the website available, and support future monetization. Those providers may process technical information such as browser type, device data, and page visits.",
          },
          {
            title: "Policy updates",
            body:
              "This policy may be updated as the product grows. Any future changes will be reflected on this page with the latest published version.",
          },
        ],
      },
      "terms-of-service": {
        slug: "terms-of-service",
        metaTitle: "Terms of Service",
        metaDescription:
          "Read the Toolyflow terms of service for general usage rules, limitations, and website conditions.",
        keywords: ["toolyflow terms of service", "website terms", "online tools terms"],
        eyebrow: "Terms of Service",
        title: "Terms of service",
        description:
          "These terms describe the general conditions for using Toolyflow and its online tools.",
        sections: [
          {
            title: "Use of the website",
            body:
              "Toolyflow is provided for general informational and utility purposes. By using the website, you agree to use the tools lawfully and in a way that does not interfere with normal service operation.",
          },
          {
            title: "No guarantee of suitability",
            body:
              "The tools are offered as-is. While the product aims to be reliable and accurate, Toolyflow does not guarantee that every output will fit every business, legal, or technical use case.",
          },
          {
            title: "Future updates",
            body:
              "Features, pages, and policies may change over time as the product evolves. Continued use of the website after updates means you accept the current version of these terms.",
          },
        ],
      },
    },
    tools: {
      "bio-generator": {
        slug: "bio-generator",
        name: "Bio Generator",
        shortDescription:
          "Generate short bios for social profiles, gaming pages, and personal branding.",
        description:
          "Write clean social bios with tone controls for Instagram, gaming, personal, cool, and mysterious styles.",
        eyebrow: "Social profile tool",
        accentLabel: "BIO",
        metaTitle: "Bio Generator",
        metaDescription:
          "Generate short bios for Instagram, gaming, and personal profiles with different tones using a free online bio generator.",
        keywords: [
          "bio generator",
          "instagram bio generator",
          "short bio generator",
          "profile bio ideas",
        ],
        highlights: [
          "Tone controls help shape bios for different personal brands.",
          "Works well for social profiles, creator pages, and gaming handles.",
          "Generates multiple options at once so the page never feels empty.",
        ],
        structuredDescription:
          "Free online bio generator for Instagram, gaming, and personal profiles.",
      },
      "nickname-generator": {
        slug: "nickname-generator",
        name: "Nickname Generator",
        shortDescription:
          "Create nickname ideas in cool, dark, gaming, and aesthetic styles.",
        description:
          "Generate memorable nicknames with optional keywords and quick copy actions for fast brainstorming.",
        eyebrow: "Name idea tool",
        accentLabel: "NICK",
        metaTitle: "Nickname Generator",
        metaDescription:
          "Create nickname ideas in cool, dark, gaming, and aesthetic styles with a free online nickname generator.",
        keywords: [
          "nickname generator",
          "username generator",
          "gaming nickname ideas",
          "cool nicknames",
        ],
        highlights: [
          "Useful for usernames, social handles, and gaming tags.",
          "Style filters keep the results aligned with the vibe you want.",
          "Each suggestion is ready to copy in one tap.",
        ],
        structuredDescription:
          "Free online nickname generator for cool, dark, gaming, and aesthetic styles.",
      },
      "qr-generator": {
        slug: "qr-generator",
        name: "QR Code Generator",
        shortDescription:
          "Turn any link or text into a QR code and download it instantly.",
        description:
          "Create a QR code in the browser with live previews and one-click download for sharing links fast.",
        eyebrow: "Utility tool",
        accentLabel: "QR",
        metaTitle: "QR Code Generator",
        metaDescription:
          "Generate a QR code from any text or link and download it instantly with a free online QR code generator.",
        keywords: ["qr code generator", "free qr code generator", "url to qr", "text to qr"],
        highlights: [
          "Instant QR previews update as you type.",
          "Downloads stay simple with one-click PNG export.",
          "Useful for links, menus, event pages, and quick sharing.",
        ],
        structuredDescription:
          "Free online QR code generator with instant preview and PNG download.",
      },
      "case-converter": {
        slug: "case-converter",
        name: "Case Converter",
        shortDescription:
          "Convert text to uppercase, lowercase, or capitalized format in one place.",
        description:
          "Switch text case instantly, compare outputs side by side, and copy the version you need.",
        eyebrow: "Text formatting tool",
        accentLabel: "CASE",
        metaTitle: "Case Converter",
        metaDescription:
          "Convert text to uppercase, lowercase, or capitalized format with a fast and simple free online case converter.",
        keywords: ["case converter", "uppercase converter", "lowercase converter", "capitalize text"],
        highlights: [
          "Fast for titles, captions, notes, and quick formatting checks.",
          "Keeps outputs visible side by side instead of forcing extra clicks.",
          "Works cleanly on mobile, tablet, and desktop layouts.",
        ],
        structuredDescription:
          "Free online case converter for uppercase, lowercase, and capitalized text.",
      },
      "decision-wheel": {
        slug: "decision-wheel",
        name: "Decision Wheel",
        shortDescription:
          "Enter options, spin the wheel, and let the result pick for you.",
        description:
          "Use a lightweight random picker with animated spinning and clear results for quick decisions.",
        eyebrow: "Picker tool",
        accentLabel: "WHEEL",
        metaTitle: "Decision Wheel",
        metaDescription:
          "Enter choices, spin the wheel, and get a random result with a free online decision wheel tool.",
        keywords: ["decision wheel", "spin the wheel", "random picker", "choice wheel"],
        highlights: [
          "Ideal for quick team choices, content ideas, and small decisions.",
          "The animated spin makes the result feel clear and interactive.",
          "Everything stays simple, responsive, and client-side.",
        ],
        structuredDescription:
          "Free online decision wheel for spinning through options and picking a random result.",
      },
    },
    caseConverter: {
      inputLabel: "Paste your text",
      placeholder: "Enter or paste text to convert.",
      characters: "Characters",
      words: "Words",
      clearText: "Clear text",
      uppercase: "Uppercase",
      lowercase: "Lowercase",
      capitalize: "Capitalize",
      copy: "Copy",
      copied: "Copied",
    },
    qrGenerator: {
      inputLabel: "Text or URL",
      placeholder: "Paste a link, coupon text, or plain message.",
      download: "Download PNG",
      clear: "Clear",
      livePreview: "Live preview",
      emptyState: "Add text or a link to generate a QR code instantly.",
      generating: "Generating your QR code...",
      helper: "Everything runs client-side for fast previews and simple downloads.",
    },
    nicknameGenerator: {
      keywordLabel: "Keyword or vibe",
      keywordPlaceholder: "e.g. orbit, raven, pixel",
      styleLabel: "Pick a style",
      generateMore: "Generate more",
      tapToCopy: "Tap to copy",
      copied: "Copied to clipboard",
      styles: {
        cool: "Cool",
        dark: "Dark",
        gaming: "Gaming",
        aesthetic: "Aesthetic",
      },
      seeds: {
        cool: {
          left: ["Nova", "Aero", "Vivid", "Prime", "Clear", "Pulse", "Urban", "Neon"],
          right: ["Lane", "Wave", "Point", "Shift", "Glow", "Mode", "Edge", "Flow"],
        },
        dark: {
          left: ["Shadow", "Night", "Void", "Obsidian", "Noir", "Raven", "Ash", "Silent"],
          right: ["Veil", "Drift", "Warden", "Fang", "Reign", "Mist", "Shade", "Mark"],
        },
        gaming: {
          left: ["Clutch", "Turbo", "Pixel", "Rank", "Quest", "Rush", "Squad", "Nexus"],
          right: ["Strike", "Forge", "Runner", "Drop", "Raid", "Lock", "Boost", "Zone"],
        },
        aesthetic: {
          left: ["Velvet", "Luna", "Aura", "Bloom", "Mellow", "Cloud", "Cove", "Soft"],
          right: ["Muse", "Diary", "Dream", "Studio", "Garden", "Note", "Glow", "Line"],
        },
      },
    },
    bioGenerator: {
      nameLabel: "Name or handle",
      namePlaceholder: "@yourhandle",
      platformLabel: "Platform",
      toneLabel: "Tone",
      generate: "Generate bio",
      copy: "Click to copy",
      copied: "Copied",
      platforms: {
        instagram: "Instagram",
        gaming: "Gaming",
        personal: "Personal",
      },
      tones: {
        cool: "Cool",
        mysterious: "Mysterious",
        personal: "Personal",
        professional: "Professional",
        minimal: "Minimal",
        bold: "Bold",
      },
      defaultName: "",
      platformLines: {
        instagram: [
          "clean visuals, steady presence",
          "posting with taste, not noise",
          "simple content, strong identity",
          "clear style, calm energy",
        ],
        gaming: [
          "calm aim, smart reads",
          "queue ready, focus locked",
          "clean plays, strong finishes",
          "steady wins over loud moments",
        ],
        personal: [
          "building useful work consistently",
          "learning in public, staying clear",
          "progress, clarity, momentum",
          "simple process, honest output",
        ],
      },
      templates: {
        cool: {
          starters: [
            "low noise, clear direction",
            "sharp taste, steady momentum",
            "quiet moves, strong presence",
            "simple energy, real focus",
          ],
          closings: [
            "quality over volume",
            "clean, useful, memorable",
            "always refining the next version",
            "made to feel effortless",
          ],
        },
        mysterious: {
          starters: [
            "a little hidden, fully intentional",
            "moving quietly with a plan",
            "not everything needs explaining",
            "keeping the details controlled",
          ],
          closings: [
            "say less, let the work speak",
            "signal lives in the quiet part",
            "some details land better later",
            "restraint with presence",
          ],
        },
        personal: {
          starters: [
            "sharing the work behind the progress",
            "learning, refining, moving forward",
            "documenting growth in real time",
            "better habits, one step at a time",
          ],
          closings: [
            "honest and useful",
            "small steps still count",
            "trying, refining, repeating",
            "built on consistency",
          ],
        },
        professional: {
          starters: [
            "useful work, clear outcomes",
            "turning ideas into structured results",
            "clarity, reliability, execution",
            "precision with steady standards",
          ],
          closings: [
            "clear process, better output",
            "strong systems, cleaner results",
            "professional without sounding cold",
            "consistency is part of the brand",
          ],
        },
        minimal: {
          starters: [
            "less noise, more meaning",
            "simple by choice, clear by design",
            "light style, strong signal",
            "minimal presence, steady value",
          ],
          closings: [
            "nothing extra, nothing unclear",
            "sharp and readable",
            "built with calm focus",
            "simple still wins",
          ],
        },
        bold: {
          starters: [
            "direct voice, strong direction",
            "built to stand out cleanly",
            "clear energy, visible intent",
            "presence over background noise",
          ],
          closings: [
            "confidence works better when clear",
            "noticed fast, remembered cleanly",
            "made to leave a clear impression",
            "bold, readable, intentional",
          ],
        },
      },
    },
    decisionWheel: {
      inputLabel: "One option per line",
      button: "Spin the wheel",
      spinning: "Spinning...",
      helper:
        "Add at least two choices. The wheel keeps everything client-side and reveals the winner after the spin.",
      resultLabel: "Result",
      emptyResult: "Press spin to pick a winner",
      starterOptions: [
        "Ship it",
        "Coffee break",
        "Refactor later",
        "Push a draft",
        "Take notes",
        "Go live",
      ],
    },
  };
}

function translateDictionary(
  base: Dictionary,
  locale: Locale,
  overrides: DeepPartial<Dictionary>
): Dictionary {
  return {
    ...base,
    ...overrides,
    languageName: localeLabels[locale],
    header: { ...base.header, ...overrides.header } as Dictionary["header"],
    footer: { ...base.footer, ...overrides.footer } as Dictionary["footer"],
    shared: { ...base.shared, ...overrides.shared } as Dictionary["shared"],
    home: { ...base.home, ...overrides.home } as Dictionary["home"],
    staticPages: {
      ...base.staticPages,
      ...overrides.staticPages,
    } as Dictionary["staticPages"],
    tools: {
      ...base.tools,
      ...overrides.tools,
    } as Dictionary["tools"],
    caseConverter: {
      ...base.caseConverter,
      ...overrides.caseConverter,
    } as Dictionary["caseConverter"],
    qrGenerator: {
      ...base.qrGenerator,
      ...overrides.qrGenerator,
    } as Dictionary["qrGenerator"],
    nicknameGenerator: {
      ...base.nicknameGenerator,
      ...overrides.nicknameGenerator,
      styles: {
        ...base.nicknameGenerator.styles,
        ...overrides.nicknameGenerator?.styles,
      },
      seeds: {
        ...base.nicknameGenerator.seeds,
        ...overrides.nicknameGenerator?.seeds,
      },
    } as Dictionary["nicknameGenerator"],
    bioGenerator: {
      ...base.bioGenerator,
      ...overrides.bioGenerator,
      platforms: {
        ...base.bioGenerator.platforms,
        ...overrides.bioGenerator?.platforms,
      },
      tones: {
        ...base.bioGenerator.tones,
        ...overrides.bioGenerator?.tones,
      },
      templates: {
        ...base.bioGenerator.templates,
        ...overrides.bioGenerator?.templates,
      },
    } as Dictionary["bioGenerator"],
    decisionWheel: {
      ...base.decisionWheel,
      ...overrides.decisionWheel,
    } as Dictionary["decisionWheel"],
  };
}

const en = createEnglishDictionary();

const tr = translateDictionary(en, "tr", {
  localeCode: "tr_TR",
  siteDescription: "Hızlı, sade ve ücretsiz online araçlar.",
  header: {
    tools: "Araçlar",
    about: "Hakkında",
    contact: "İletişim",
  },
  footer: {
    description:
      "Günlük işler için hızlı, sade ve ücretsiz online araçlar. Her araç telefonda, tablette ve bilgisayarda temiz çalışacak şekilde tasarlandı.",
    toolsHeading: "Araçlar",
    companyHeading: "Site",
    about: "Hakkında",
    contact: "İletişim",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
  },
  shared: {
    language: "Dil",
    openTool: "Aracı aç",
    go: "Git",
    whyUseIt: "Neden kullanılır",
    exploreMore: "Diğer araçlar",
    noText: "Henüz metin yok.",
  },
  home: {
    metaTitle: "Hızlı, sade ve ücretsiz online araçlar",
    metaDescription:
      "Toolyflow; ücretsiz online araçlar, ayrı tool sayfaları, responsive tasarım ve SEO odaklı yapı sunan hızlı bir mini tools sitesidir.",
    keywords: [
      "online araçlar",
      "ücretsiz online araçlar",
      "mini tools sitesi",
      "qr code generator",
      "case converter",
      "bio generator",
    ],
    eyebrow: "Online araç sitesi",
    tagline: "Hızlı, sade ve ücretsiz online araçlar.",
    description:
      "Toolyflow; odaklı araç sayfaları, güçlü SEO yapısı ve gerçek ürün hissi veren responsive düzeniyle kurulan temiz bir mini tools sitesidir.",
    primaryCta: "Araçlara göz at",
    secondaryCta: "Daha fazla bilgi",
    stats: [
      { label: "İlk sürüm", value: "6 dil" },
      { label: "Araç sayısı", value: "5 araç" },
      { label: "Deneyim", value: "Her ekran" },
    ],
    toolsEyebrow: "Araç kütüphanesi",
    toolsTitle: "Her araç için ayrı, net bir sayfa",
    toolsDescription:
      "Her araç kendi route, metadata ve odaklı arayüzüyle geliyor. Böylece site hem çok dilli büyüyor hem de indekslenmesi kolay kalıyor.",
    features: [
      {
        title: "Temiz yapı",
        description:
          "Tekrar kullanılabilir component yapısı ve ayrı tool sayfaları kod tabanını büyümeye hazır tutuyor.",
      },
      {
        title: "Client-side öncelikli",
        description:
          "MVP gereksiz backend kurmuyor. Araçlar çoğunlukla tarayıcıda çalışarak hızı ve bakım kolaylığını koruyor.",
      },
      {
        title: "Güven veren sayfalar",
        description:
          "About, Contact, Privacy Policy ve Terms of Service sayfaları siteyi daha tamamlanmış ve reklam hazırlıklı gösteriyor.",
      },
    ],
  },
  staticPages: {
    about: {
      slug: "about",
      metaTitle: "Hakkında",
      metaDescription:
        "Toolyflow’un ne olduğunu, neden kurulduğunu ve hızlı online araçlar etrafında nasıl tasarlandığını öğrenin.",
      keywords: ["toolyflow hakkında", "online araç sitesi", "ücretsiz online araçlar"],
      eyebrow: "Toolyflow Hakkında",
      title: "Odaklı bir mini tools sitesi",
      description:
        "Toolyflow, gereksiz karmaşa olmadan hızlı, temiz ve ücretsiz online araçlar sunmak için kuruldu.",
      sections: [
        {
          title: "Toolyflow ne yapar",
          body:
            "Toolyflow; hızlı açılan, her ekranda düzgün çalışan ve saniyeler içinde kullanılabilen günlük yardımcı araçlara odaklanan bir online tools sitesidir.",
        },
        {
          title: "İlk sürüm nasıl tasarlandı",
          body:
            "İlk yayınlanan sürüm; Bio Generator, Nickname Generator, QR Code Generator, Case Converter ve Decision Wheel araçlarından oluşan çalışan bir MVP’dir. Hepsi tek sayfaya yığılmak yerine ayrı sayfalarda sunulur.",
        },
        {
          title: "Neden sade tutuldu",
          body:
            "Hedef aşırı kompleks bir sistem kurmak değil, üretime yakın ilk sürümü yayınlamaktır. Bu yüzden özelliklerin çoğu client-side çalışır; site hızlı, hafif ve bakım açısından daha kolay kalır.",
        },
      ],
    },
    contact: {
      slug: "contact",
      metaTitle: "İletişim",
      metaDescription:
        "Destek, iş birlikleri veya genel sorular için Toolyflow ile iletişime geçin.",
      keywords: ["toolyflow iletişim", "online tools iletişim", "toolyflow destek"],
      eyebrow: "İletişim",
      title: "Toolyflow ekibine ulaşın",
      description:
        "Destek talepleri, iş birlikleri veya siteyle ilgili geri bildirimler için aşağıdaki iletişim bilgilerini kullanın.",
      sections: [
        {
          title: "E-posta",
          body:
            "Toolyflow’a ulaşmanın en hızlı yolu hello@toolyflow.com adresine e-posta göndermektir.",
        },
        {
          title: "Neler eklenmeli",
          body:
            "Bir araç hatası bildiriyorsanız sayfa URL’sini, kullandığınız cihazı ve yaşadığınız sorunun kısa açıklamasını ekleyin. Bu sayede sorun daha hızlı yeniden üretilebilir.",
        },
        {
          title: "İş birlikleri ve reklam",
          body:
            "Sponsorluk, reklam veya büyüme odaklı iş birlikleri için şirket bilgilerinizi ve düşündüğünüz iş modelini paylaşabilirsiniz.",
        },
      ],
    },
    "privacy-policy": {
      slug: "privacy-policy",
      metaTitle: "Gizlilik Politikası",
      metaDescription:
        "Toolyflow gizlilik politikasını okuyun ve sitenin ziyaretçi verilerini nasıl ele aldığını öğrenin.",
      keywords: ["toolyflow gizlilik politikası", "online araçlar gizlilik", "site gizlilik politikası"],
      eyebrow: "Gizlilik Politikası",
      title: "Gizlilik politikası",
      description:
        "Bu sayfa Toolyflow’un gizlilik yaklaşımını ve tarayıcı tabanlı araçlarını nasıl ele aldığını açıklar.",
      sections: [
        {
          title: "Bilgi işleme",
          body:
            "Toolyflow ilk sürümde hafif kalacak şekilde tasarlanmıştır. Araçların çoğu doğrudan tarayıcıda çalıştığı için kullanıcı girdileri genellikle backend’e gönderilmeden client-side işlenir.",
        },
        {
          title: "Analitik ve servis sağlayıcılar",
          body:
            "Toolyflow; trafik takibi, site sürekliliği ve gelecekteki gelir modeli için analitik, hosting, güvenlik veya reklam servisleri kullanabilir. Bu servisler tarayıcı tipi, cihaz bilgisi ve sayfa ziyaretleri gibi teknik verileri işleyebilir.",
        },
        {
          title: "Politika güncellemeleri",
          body:
            "Ürün büyüdükçe bu politika güncellenebilir. Değişiklikler en güncel sürüm olarak bu sayfada yayınlanır.",
        },
      ],
    },
    "terms-of-service": {
      slug: "terms-of-service",
      metaTitle: "Kullanım Şartları",
      metaDescription:
        "Toolyflow kullanım şartlarını okuyun ve site kullanım koşullarını inceleyin.",
      keywords: ["toolyflow kullanım şartları", "site şartları", "online araçlar kullanım şartları"],
      eyebrow: "Kullanım Şartları",
      title: "Kullanım şartları",
      description:
        "Bu şartlar Toolyflow ve online araçlarının genel kullanım koşullarını açıklar.",
      sections: [
        {
          title: "Site kullanımı",
          body:
            "Toolyflow genel bilgi ve pratik kullanım amaçlarıyla sunulur. Siteyi kullanarak araçları yasal biçimde ve servis işleyişini bozmayacak şekilde kullanmayı kabul etmiş olursunuz.",
        },
        {
          title: "Uygunluk garantisi yoktur",
          body:
            "Araçlar olduğu gibi sunulur. Ürün güvenilir ve doğru olmaya çalışsa da her çıktının her ticari, hukuki veya teknik senaryo için uygun olacağı garanti edilmez.",
        },
        {
          title: "Gelecekteki güncellemeler",
          body:
            "Özellikler, sayfalar ve politikalar zamanla değişebilir. Güncellemelerden sonra siteyi kullanmaya devam etmeniz mevcut şartları kabul ettiğiniz anlamına gelir.",
        },
      ],
    },
  },
  tools: {
    "bio-generator": {
      ...en.tools["bio-generator"],
      name: "Bio Generator",
      shortDescription:
        "Sosyal profiller, oyuncu hesapları ve kişisel markalar için kısa biyografiler üretin.",
      description:
        "Instagram, gaming, personal, cool ve mysterious tonlarıyla temiz biyografiler oluşturun.",
      eyebrow: "Sosyal profil aracı",
      metaDescription:
        "Instagram, oyun ve kişisel profiller için farklı tonlarda kısa biyografiler üretin.",
      highlights: [
        "Farklı kişisel marka stilleri için ton seçimi sunar.",
        "Sosyal profil, içerik üretici sayfası ve oyuncu hesapları için uygundur.",
        "Sayfayı boş bırakmadan birden fazla bio önerisi üretir.",
      ],
      structuredDescription:
        "Instagram, oyun ve kişisel profiller için ücretsiz online bio generator.",
    },
    "nickname-generator": {
      ...en.tools["nickname-generator"],
      name: "Nickname Generator",
      shortDescription:
        "Cool, dark, gaming ve aesthetic stillerde takma ad fikirleri üretin.",
      description:
        "Anahtar kelimeye göre hızlıca hatırlanabilir nickname önerileri alın ve kopyalayın.",
      eyebrow: "İsim fikri aracı",
      metaDescription:
        "Cool, dark, gaming ve aesthetic stillerde ücretsiz takma ad önerileri üretin.",
      highlights: [
        "Kullanıcı adı, sosyal medya handle ve oyun nicki için uygundur.",
        "Stil filtreleri sonucu istediğiniz havaya yaklaştırır.",
        "Her öneri tek dokunuşla kopyalanabilir.",
      ],
      structuredDescription:
        "Cool, dark, gaming ve aesthetic stiller için ücretsiz nickname generator.",
    },
    "qr-generator": {
      ...en.tools["qr-generator"],
      name: "QR Code Generator",
      shortDescription:
        "Herhangi bir linki veya metni QR koda dönüştürün ve anında indirin.",
      description:
        "Tarayıcı içinde canlı önizleme ve tek tık indirme ile hızlı QR kod üretin.",
      eyebrow: "Yardımcı araç",
      metaDescription:
        "Metin veya linkten ücretsiz şekilde QR kod oluşturun ve anında indirin.",
      highlights: [
        "Yazdıkça anında QR önizlemesi güncellenir.",
        "PNG indirme süreci tek tıkla basit kalır.",
        "Link, menü, etkinlik sayfası ve hızlı paylaşım için idealdir.",
      ],
      structuredDescription:
        "Canlı önizleme ve PNG indirme sunan ücretsiz QR code generator.",
    },
    "case-converter": {
      ...en.tools["case-converter"],
      name: "Case Converter",
      shortDescription:
        "Metni uppercase, lowercase veya capitalize formatına tek yerde dönüştürün.",
      description:
        "Metin biçimini anında değiştirin, yan yana karşılaştırın ve ihtiyacınız olanı kopyalayın.",
      eyebrow: "Metin biçimlendirme aracı",
      metaDescription:
        "Metni uppercase, lowercase veya capitalize formatına hızlıca dönüştürün.",
      highlights: [
        "Başlıklar, açıklamalar ve notlar için hızlıdır.",
        "Çıktıları tek ekranda tuttuğu için ekstra tıklama istemez.",
        "Mobil, tablet ve masaüstünde temiz çalışır.",
      ],
      structuredDescription:
        "Uppercase, lowercase ve capitalize dönüşümleri için ücretsiz case converter.",
    },
    "decision-wheel": {
      ...en.tools["decision-wheel"],
      name: "Decision Wheel",
      shortDescription:
        "Seçenekleri girin, çarkı çevirin ve sonucu otomatik seçtirin.",
      description:
        "Küçük kararlar için animasyonlu ve net sonuç veren hafif bir rastgele seçim aracı kullanın.",
      eyebrow: "Seçim aracı",
      metaDescription:
        "Seçenekleri girin, çarkı çevirin ve ücretsiz decision wheel ile rastgele sonuç alın.",
      highlights: [
        "Hızlı ekip kararları, içerik fikirleri ve küçük seçimler için uygundur.",
        "Animasyon sonucu daha net ve etkileşimli hissettirir.",
        "Her şey sade, responsive ve client-side kalır.",
      ],
      structuredDescription:
        "Seçenekler arasında dönen ve rastgele seçim yapan ücretsiz decision wheel.",
    },
  },
  caseConverter: {
    inputLabel: "Metninizi yapıştırın",
    placeholder: "Dönüştürmek için metin girin veya yapıştırın.",
    characters: "Karakter",
    words: "Kelime",
    clearText: "Metni temizle",
    uppercase: "Büyük harf",
    lowercase: "Küçük harf",
    capitalize: "Baş harfleri büyüt",
    copy: "Kopyala",
    copied: "Kopyalandı",
  },
  qrGenerator: {
    inputLabel: "Metin veya URL",
    placeholder: "Bir link, not veya düz metin yapıştırın.",
    download: "PNG indir",
    clear: "Temizle",
    livePreview: "Canlı önizleme",
    emptyState: "QR kodu anında oluşturmak için metin veya link ekleyin.",
    generating: "QR kodunuz oluşturuluyor...",
    helper: "Her şey hızlı önizleme ve kolay indirme için client-side çalışır.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Anahtar kelime veya hava",
    keywordPlaceholder: "ör. orbit, raven, pixel",
    styleLabel: "Bir stil seçin",
    generateMore: "Daha fazla üret",
    tapToCopy: "Kopyalamak için dokun",
    copied: "Panoya kopyalandı",
    styles: {
      cool: "Cool",
      dark: "Dark",
      gaming: "Gaming",
      aesthetic: "Aesthetic",
    },
    seeds: {
      cool: {
        left: ["Nova", "Canlı", "Net", "Prime", "Ritim", "Aero", "Parlak", "Akım"],
        right: ["Akış", "Dalga", "İz", "Ton", "Işık", "Çizgi", "Form", "Yön"],
      },
      dark: {
        left: ["Gölge", "Gece", "Kül", "Sessiz", "Kara", "Kuzgun", "Sis", "Obsidyen"],
        right: ["İz", "Perde", "Duruş", "Pençe", "Yankı", "Form", "Hiza", "Katman"],
      },
      gaming: {
        left: ["Kilit", "Piksel", "Turbo", "Rütbe", "Klan", "Nexus", "Hamle", "Arena"],
        right: ["Vuruş", "Akın", "Seviye", "Baskın", "Çizgi", "Kombo", "Görev", "Alan"],
      },
      aesthetic: {
        left: ["Luna", "Aura", "Bulut", "Kadife", "Cove", "Mellow", "Flora", "Yumuşak"],
        right: ["Not", "Işık", "Düş", "Stüdyo", "Çizgi", "Bahçe", "Form", "Esinti"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "İsim veya kullanıcı adı",
    namePlaceholder: "@kullaniciadi",
    platformLabel: "Platform",
    toneLabel: "Ton",
    generate: "Bio üret",
    copy: "Kopyalamak için tıkla",
    copied: "Kopyalandı",
    platforms: {
      instagram: "Instagram",
      gaming: "Gaming",
      personal: "Kişisel",
    },
    tones: {
      cool: "Cool",
      mysterious: "Mysterious",
      personal: "Kişisel",
      professional: "Profesyonel",
      minimal: "Minimal",
      bold: "Güçlü",
    },
    defaultName: "",
    platformLines: {
      instagram: [
        "net görsel, düzenli enerji",
        "temiz içerik, güçlü stil",
        "belirgin çizgi, sade kimlik",
        "gürültü değil, niyetli paylaşım",
      ],
      gaming: [
        "sakin refleks, akıllı oyun",
        "odak açık, tempo kontrollü",
        "temiz oyun, güçlü kapanış",
        "soğukkanlı karar, net sonuç",
      ],
      personal: [
        "düzenli üretim, faydalı işler",
        "dürüst süreç, net paylaşım",
        "görünür ilerleme, sade dil",
        "tutarlılık ve açıklık odağı",
      ],
    },
    templates: {
      cool: {
        starters: [
          "az gürültü, net yön",
          "keskin zevk, düzenli ivme",
          "sessiz hamleler, güçlü duruş",
          "sade enerji, gerçek odak",
        ],
        closings: [
          "hacim değil kalite",
          "temiz, faydalı, akılda kalan",
          "bir sonrakini daha iyi kurmaya odaklı",
          "kolay görünen ama düşünülmüş",
        ],
      },
      mysterious: {
        starters: [
          "biraz gizli ama bilinçli",
          "sessiz ilerler, kontrolü bırakmaz",
          "her şeyi anlatma ihtiyacı duymaz",
          "detayları zamana bırakır",
        ],
        closings: [
          "az konuşur, iş görünür",
          "asıl sinyal sessiz tarafta",
          "bazı detaylar sonra oturur",
          "kontrollü ve dikkat çekici",
        ],
      },
      personal: {
        starters: [
          "ilerlemenin arkasını paylaşır",
          "öğrenir, geliştirir, devam eder",
          "büyümeyi daha gerçek anlatır",
          "daha iyi alışkanlıklar kurar",
        ],
        closings: [
          "dürüst ve faydalı kalır",
          "küçük adımların gücüne inanır",
          "dener, geliştirir, tekrar eder",
          "tutarlılığı gürültünün önüne koyar",
        ],
      },
      professional: {
        starters: [
          "faydalı iş, net sonuç",
          "fikirleri düzenli çıktıya çevirir",
          "açıklık, güven, uygulama",
          "düzenli standartlarla üretir",
        ],
        closings: [
          "iyi süreç, temiz sonuç",
          "sistemli çalışma, güçlü çıktı",
          "profesyonel ama soğuk değil",
          "tutarlılığı marka parçası sayar",
        ],
      },
      minimal: {
        starters: [
          "daha az gürültü, daha net anlam",
          "sadelik bilinçli tercih",
          "güçlü sinyal, hafif görünüm",
          "minimal duruş, düzenli değer",
        ],
        closings: [
          "fazlalık bırakmadan net",
          "okunabilir ve keskin",
          "sakin odakla ilerler",
          "işe yarayan sadelikten vazgeçmez",
        ],
      },
      bold: {
        starters: [
          "doğrudan ses, güçlü yön",
          "karışmadan öne çıkar",
          "görünür enerji, net niyet",
          "arka planda kalmak istemez",
        ],
        closings: [
          "özgüveni netlikle dengeler",
          "güçlü görünür, anlaşılır kalır",
          "temiz etki bırakmaya odaklı",
          "belirgin, okunabilir, bilinçli",
        ],
      },
    },
  },
  decisionWheel: {
    inputLabel: "Her satıra bir seçenek",
    button: "Çarkı çevir",
    spinning: "Dönüyor...",
    helper:
      "En az iki seçenek ekleyin. Çark tamamen client-side çalışır ve dönüş sonunda kazananı gösterir.",
    resultLabel: "Sonuç",
    emptyResult: "Kazananı seçmek için çarkı çevirin",
    starterOptions: [
      "Yayınla",
      "Kahve molası",
      "Sonra düzenle",
      "Taslak gönder",
      "Not al",
      "Canlıya çık",
    ],
  },
});

const es = translateDictionary(en, "es", {
  localeCode: "es_ES",
  siteDescription: "Herramientas online rápidas, simples y gratis.",
  header: { tools: "Herramientas", about: "Acerca de", contact: "Contacto" },
  footer: {
    description:
      "Herramientas online rápidas, simples y gratis para tareas diarias. Cada herramienta funciona bien en móvil, tablet y escritorio.",
    toolsHeading: "Herramientas",
    companyHeading: "Sitio",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
  },
  shared: {
    language: "Idioma",
    openTool: "Abrir herramienta",
    go: "Ir",
    whyUseIt: "Por qué usarla",
    exploreMore: "Más herramientas",
    noText: "Aún no hay texto.",
  },
  home: {
    metaTitle: "Herramientas online rápidas, simples y gratis",
    metaDescription:
      "Toolyflow es un sitio de mini herramientas con páginas separadas, diseño responsive y estructura SEO para atraer tráfico internacional.",
    eyebrow: "Sitio de herramientas online",
    tagline: "Herramientas online rápidas, simples y gratis.",
    description:
      "Toolyflow está diseñado como un sitio limpio de mini herramientas con páginas enfocadas, estructura SEO sólida y una experiencia responsive que parece producto real.",
    primaryCta: "Ver herramientas",
    secondaryCta: "Saber más",
    stats: [
      { label: "Primera versión", value: "6 idiomas" },
      { label: "Colección", value: "5 herramientas" },
      { label: "Enfoque", value: "Tráfico SEO" },
    ],
    toolsEyebrow: "Biblioteca",
    toolsTitle: "Herramientas útiles, una página clara para cada una",
    toolsDescription:
      "Cada herramienta tiene su propia ruta, metadata e interfaz enfocada para que el sitio sea fácil de indexar y escalar en varios idiomas.",
    features: [
      {
        title: "Estructura limpia",
        description:
          "Los componentes reutilizables y las páginas separadas mantienen el proyecto listo para crecer.",
      },
      {
        title: "Cliente primero",
        description:
          "El MVP evita un backend innecesario. La mayoría de las herramientas funcionan en el navegador para ganar velocidad y simplicidad.",
      },
      {
        title: "Páginas de confianza",
        description:
          "About, Contact, Privacy Policy y Terms of Service ayudan a que el sitio se vea más completo y preparado para monetización.",
      },
    ],
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palabra base o idea",
    keywordPlaceholder: "p. ej. luna, pixel, sombra",
    styleLabel: "Elige un estilo",
    generateMore: "Generar más",
    tapToCopy: "Toca para copiar",
    copied: "Copiado al portapapeles",
    styles: {
      cool: "Cool",
      dark: "Oscuro",
      gaming: "Gaming",
      aesthetic: "Estético",
    },
    seeds: {
      cool: {
        left: ["Nova", "Brío", "Claro", "Prime", "Pulso", "Aero", "Vivo", "Neón"],
        right: ["Flow", "Wave", "Line", "Shift", "Glow", "Beat", "Edge", "Mode"],
      },
      dark: {
        left: ["Sombra", "Noche", "Cuervo", "Negro", "Ceniza", "Silente", "Vacío", "Noir"],
        right: ["Velo", "Rastro", "Marca", "Filo", "Eco", "Reino", "Niebla", "Guard"],
      },
      gaming: {
        left: ["Clutch", "Turbo", "Pixel", "Rango", "Quest", "Rush", "Nexus", "Squad"],
        right: ["Strike", "Forge", "Raid", "Drop", "Zone", "Lock", "Boost", "Run"],
      },
      aesthetic: {
        left: ["Luna", "Aura", "Nube", "Terciop", "Brisa", "Flora", "Soft", "Mellow"],
        right: ["Muse", "Dream", "Studio", "Glow", "Garden", "Note", "Line", "Bloom"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "Nombre o usuario",
    namePlaceholder: "@tuusuario",
    platformLabel: "Plataforma",
    toneLabel: "Tono",
    generate: "Generar bio",
    copy: "Haz clic para copiar",
    copied: "Copiado",
    platforms: {
      instagram: "Instagram",
      gaming: "Gaming",
      personal: "Personal",
    },
    tones: {
      cool: "Cool",
      mysterious: "Misterioso",
      personal: "Personal",
      professional: "Profesional",
      minimal: "Minimal",
      bold: "Fuerte",
    },
    defaultName: "Usuario de Toolyflow",
    platformLines: {
      instagram: [
        "Comparte imagen limpia y energía constante",
        "Publica con estilo claro y presencia fuerte",
        "Mantiene una identidad visual simple y sólida",
        "Sube contenido con intención, no con ruido",
      ],
      gaming: [
        "Juega con calma, lectura rápida y buen cierre",
        "Entra a la partida con foco total",
        "Confía en decisiones firmes y ritmo estable",
        "Mantiene control incluso bajo presión",
      ],
      personal: [
        "Construye trabajo útil con constancia",
        "Comparte su proceso con claridad",
        "Avanza con enfoque real y ritmo estable",
        "Prefiere progreso claro antes que ruido",
      ],
    },
    templates: {
      cool: {
        starters: [
          "Poca distracción, dirección clara",
          "Buen gusto y movimiento constante",
          "Presencia tranquila, señal fuerte",
          "Energía simple con enfoque real",
        ],
        closings: [
          "Siempre mejorando la siguiente versión",
          "Prefiere calidad antes que volumen",
          "Busca verse claro y memorable",
          "Todo se siente limpio y bien pensado",
        ],
      },
      mysterious: {
        starters: [
          "No todo necesita explicación completa",
          "Avanza en silencio con intención",
          "Mantiene parte del plan fuera de vista",
          "Deja que los detalles lleguen después",
        ],
        closings: [
          "Dice menos y muestra más",
          "La parte silenciosa también comunica",
          "El control está en los detalles",
          "Presencia reservada, impacto claro",
        ],
      },
      personal: {
        starters: [
          "Comparte el trabajo detrás del progreso",
          "Aprende, ajusta y sigue adelante",
          "Documenta crecimiento de forma honesta",
          "Construye hábitos con intención real",
        ],
        closings: [
          "La constancia sigue contando",
          "Ser útil importa más que parecer perfecto",
          "Mejorar también es parte de la historia",
          "Prefiere honestidad antes que ruido",
        ],
      },
      professional: {
        starters: [
          "Convierte ideas en resultados ordenados",
          "Trabaja con claridad, estructura y criterio",
          "Apuesta por utilidad y ejecución limpia",
          "Construye procesos que sostienen resultados",
        ],
        closings: [
          "La consistencia también comunica marca",
          "Buen proceso, mejor salida",
          "Profesional sin perder personalidad",
          "La claridad siempre suma valor",
        ],
      },
      minimal: {
        starters: [
          "Menos ruido, más significado",
          "Sencillo por elección, claro por diseño",
          "Mantiene el mensaje limpio y ligero",
          "Presencia mínima, valor estable",
        ],
        closings: [
          "Nada extra, nada confuso",
          "Lo simple funciona cuando sigue siendo útil",
          "Diseñado para leerse rápido",
          "La calma también puede destacar",
        ],
      },
      bold: {
        starters: [
          "Voz directa y rumbo claro",
          "Hecho para destacar sin confundir",
          "Muestra intención desde el primer vistazo",
          "Tiene presencia y la sostiene bien",
        ],
        closings: [
          "Fuerte, claro y fácil de recordar",
          "La confianza funciona mejor con claridad",
          "Hecho para dejar una impresión limpia",
          "Visible sin perder orden",
        ],
      },
    },
  },
});

const de = translateDictionary(en, "de", {
  localeCode: "de_DE",
  siteDescription: "Schnelle, einfache und kostenlose Online-Tools.",
  header: { tools: "Tools", about: "Über uns", contact: "Kontakt" },
  footer: {
    description:
      "Schnelle, einfache und kostenlose Online-Tools für tägliche Aufgaben. Jedes Tool funktioniert sauber auf Smartphone, Tablet und Desktop.",
    toolsHeading: "Tools",
    companyHeading: "Website",
    about: "Über uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
  },
  shared: {
    language: "Sprache",
    openTool: "Tool öffnen",
    go: "Öffnen",
    whyUseIt: "Warum nutzen",
    exploreMore: "Mehr Tools",
    noText: "Noch kein Text.",
  },
  home: {
    metaTitle: "Schnelle, einfache und kostenlose Online-Tools",
    metaDescription:
      "Toolyflow ist eine schlanke Mini-Tools-Website mit separaten Tool-Seiten, responsivem Layout und SEO-freundlicher Struktur.",
    eyebrow: "Online-Tools-Website",
    tagline: "Schnelle, einfache und kostenlose Online-Tools.",
    description:
      "Toolyflow ist als saubere Mini-Tools-Website mit fokussierten Hilfsseiten, starker SEO-Struktur und responsivem Produktgefühl aufgebaut.",
    primaryCta: "Tools ansehen",
    secondaryCta: "Mehr erfahren",
    stats: [
      { label: "Erste Version", value: "6 Sprachen" },
      { label: "Tool-Set", value: "5 Tools" },
      { label: "Ziel", value: "SEO-Traffic" },
    ],
    toolsEyebrow: "Tool-Bibliothek",
    toolsTitle: "Nützliche Tools, jeweils auf einer klaren Seite",
    toolsDescription:
      "Jedes Tool hat seine eigene Route, Metadata und fokussierte Oberfläche, damit die Website in mehreren Sprachen leicht indexierbar bleibt.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Grundwort oder Idee",
    keywordPlaceholder: "z. B. licht, pixel, rabe",
    styleLabel: "Stil wählen",
    generateMore: "Mehr erzeugen",
    tapToCopy: "Zum Kopieren tippen",
    copied: "In die Zwischenablage kopiert",
    styles: {
      cool: "Cool",
      dark: "Dunkel",
      gaming: "Gaming",
      aesthetic: "Ästhetisch",
    },
    seeds: {
      cool: {
        left: ["Nova", "Klar", "Prime", "Aero", "Puls", "Urban", "Neon", "Vivid"],
        right: ["Linie", "Welle", "Flow", "Shift", "Glanz", "Modus", "Punkt", "Spur"],
      },
      dark: {
        left: ["Schatten", "Nacht", "Rabe", "Asche", "Still", "Obsidian", "Leere", "Noir"],
        right: ["Spur", "Schleier", "Marke", "Nebel", "Wacht", "Fang", "Drift", "Echo"],
      },
      gaming: {
        left: ["Clutch", "Turbo", "Pixel", "Rang", "Quest", "Rush", "Arena", "Nexus"],
        right: ["Strike", "Forge", "Raid", "Boost", "Zone", "Drop", "Run", "Lock"],
      },
      aesthetic: {
        left: ["Luna", "Aura", "Wolke", "Sanft", "Flora", "Velvet", "Mellow", "Cove"],
        right: ["Muse", "Studio", "Traum", "Linie", "Garten", "Notiz", "Glow", "Bloom"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "Name oder Handle",
    namePlaceholder: "@deinhandle",
    platformLabel: "Plattform",
    toneLabel: "Ton",
    generate: "Bio erzeugen",
    copy: "Zum Kopieren klicken",
    copied: "Kopiert",
    platforms: {
      instagram: "Instagram",
      gaming: "Gaming",
      personal: "Persönlich",
    },
    tones: {
      cool: "Cool",
      mysterious: "Geheimnisvoll",
      personal: "Persönlich",
      professional: "Professionell",
      minimal: "Minimal",
      bold: "Klar stark",
    },
    defaultName: "Toolyflow Nutzer",
    platformLines: {
      instagram: [
        "Teilt klare Inhalte mit ruhiger Präsenz",
        "Zeigt Stil ohne unnötigen Lärm",
        "Hält die visuelle Linie sauber und stark",
        "Postet bewusst statt beliebig",
      ],
      gaming: [
        "Spielt ruhig, liest schnell und schließt sauber ab",
        "Bleibt auch unter Druck kontrolliert",
        "Vertraut auf Fokus und saubere Entscheidungen",
        "Kommt vorbereitet in jede Runde",
      ],
      personal: [
        "Arbeitet konstant an nützlichen Ergebnissen",
        "Teilt Fortschritt mit klarer Haltung",
        "Lernt sichtbar und bleibt fokussiert",
        "Setzt auf Klarheit statt auf Lärm",
      ],
    },
    templates: {
      cool: {
        starters: [
          "Wenig Lärm, klare Richtung",
          "Ruhige Präsenz mit gutem Gespür",
          "Saubere Energie und klarer Fokus",
          "Deutlicher Stil ohne Übertreibung",
        ],
        closings: [
          "Qualität bleibt wichtiger als Lautstärke",
          "Alles wirkt bewusst und sauber gesetzt",
          "Arbeitet an der besseren nächsten Version",
          "Bleibt klar, nützlich und merkbar",
        ],
      },
      mysterious: {
        starters: [
          "Nicht alles braucht eine Erklärung",
          "Bleibt im Hintergrund und behält Kontrolle",
          "Lässt Details zur richtigen Zeit auftauchen",
          "Arbeitet ruhig mit klarer Absicht",
        ],
        closings: [
          "Sagt wenig und zeigt genug",
          "Die stille Seite trägt oft das Signal",
          "Zurückhaltend, aber nicht unsichtbar",
          "Kontrolle liegt in den Details",
        ],
      },
      personal: {
        starters: [
          "Teilt den Weg hinter dem Fortschritt",
          "Lernt, verfeinert und geht weiter",
          "Dokumentiert Wachstum auf ehrliche Weise",
          "Baut Gewohnheiten mit echter Absicht auf",
        ],
        closings: [
          "Kleine Schritte zählen weiterhin",
          "Nützlich zu bleiben ist Teil der Arbeit",
          "Ehrlich, klar und in Bewegung",
          "Beständigkeit schlägt Lärm",
        ],
      },
      professional: {
        starters: [
          "Macht aus Ideen strukturierte Ergebnisse",
          "Arbeitet mit Klarheit und Verlässlichkeit",
          "Setzt auf saubere Umsetzung und Nutzen",
          "Baut Systeme, die Ergebnisse tragen",
        ],
        closings: [
          "Gute Prozesse schaffen bessere Resultate",
          "Professionell, ohne beliebig zu wirken",
          "Klarheit bleibt Teil der Marke",
          "Verlässlichkeit wirkt sichtbar nach außen",
        ],
      },
      minimal: {
        starters: [
          "Weniger Lärm, mehr Bedeutung",
          "Einfach aus Überzeugung, klar im Ergebnis",
          "Hält Stil leicht und Signal stark",
          "Minimale Präsenz, stabiler Wert",
        ],
        closings: [
          "Nichts extra, nichts unklar",
          "Einfach bleibt stark, wenn es nützlich ist",
          "Ruhig, lesbar und bewusst",
          "Reduktion kann trotzdem Wirkung haben",
        ],
      },
      bold: {
        starters: [
          "Direkte Stimme, klare Richtung",
          "Will auffallen, ohne chaotisch zu wirken",
          "Zeigt Haltung schon im ersten Eindruck",
          "Präsenz mit Absicht statt mit Lärm",
        ],
        closings: [
          "Stark, klar und gut merkbar",
          "Selbstbewusst, aber lesbar",
          "Hinterlässt einen sauberen Eindruck",
          "Sichtbar ohne Unordnung",
        ],
      },
    },
  },
});

const fr = translateDictionary(en, "fr", {
  localeCode: "fr_FR",
  siteDescription: "Outils en ligne rapides, simples et gratuits.",
  header: { tools: "Outils", about: "À propos", contact: "Contact" },
  footer: {
    description:
      "Des outils en ligne rapides, simples et gratuits pour les tâches quotidiennes. Chaque outil fonctionne proprement sur mobile, tablette et ordinateur.",
    toolsHeading: "Outils",
    companyHeading: "Site",
    about: "À propos",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
  shared: {
    language: "Langue",
    openTool: "Ouvrir l'outil",
    go: "Ouvrir",
    whyUseIt: "Pourquoi l'utiliser",
    exploreMore: "Plus d'outils",
    noText: "Pas encore de texte.",
  },
  home: {
    metaTitle: "Outils en ligne rapides, simples et gratuits",
    metaDescription:
      "Toolyflow est un site de mini outils avec pages séparées, structure SEO solide et interface responsive pensée pour le trafic international.",
    eyebrow: "Site d'outils en ligne",
    tagline: "Outils en ligne rapides, simples et gratuits.",
    description:
      "Toolyflow est conçu comme un site de mini outils propre avec des pages utiles, une structure SEO forte et une mise en page responsive qui ressemble à un vrai produit.",
    primaryCta: "Voir les outils",
    secondaryCta: "En savoir plus",
    stats: [
      { label: "Première version", value: "6 langues" },
      { label: "Collection", value: "5 outils" },
      { label: "Objectif", value: "Trafic SEO" },
    ],
    toolsEyebrow: "Bibliothèque d'outils",
    toolsTitle: "Des outils utiles, une page claire pour chacun",
    toolsDescription:
      "Chaque outil a sa propre route, ses metadata et une interface ciblée pour rester facile à indexer et à faire évoluer en plusieurs langues.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Mot de base ou idée",
    keywordPlaceholder: "ex. lune, pixel, ombre",
    styleLabel: "Choisir un style",
    generateMore: "Générer plus",
    tapToCopy: "Touchez pour copier",
    copied: "Copié dans le presse-papiers",
    styles: {
      cool: "Cool",
      dark: "Sombre",
      gaming: "Gaming",
      aesthetic: "Esthétique",
    },
    seeds: {
      cool: {
        left: ["Nova", "Clair", "Prime", "Aero", "Pulse", "Neon", "Urban", "Vif"],
        right: ["Flow", "Wave", "Ligne", "Shift", "Glow", "Mode", "Trace", "Point"],
      },
      dark: {
        left: ["Ombre", "Nuit", "Corbeau", "Cendre", "Noir", "Silence", "Vide", "Obsidien"],
        right: ["Voile", "Trace", "Marque", "Brume", "Croc", "Echo", "Garde", "Drift"],
      },
      gaming: {
        left: ["Clutch", "Turbo", "Pixel", "Rang", "Quest", "Rush", "Nexus", "Squad"],
        right: ["Strike", "Forge", "Raid", "Boost", "Zone", "Drop", "Run", "Lock"],
      },
      aesthetic: {
        left: ["Luna", "Aura", "Nuage", "Velours", "Flora", "Soft", "Mellow", "Cove"],
        right: ["Muse", "Studio", "Dream", "Glow", "Garden", "Note", "Line", "Bloom"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "Nom ou pseudo",
    namePlaceholder: "@tonpseudo",
    platformLabel: "Plateforme",
    toneLabel: "Ton",
    generate: "Générer une bio",
    copy: "Cliquer pour copier",
    copied: "Copié",
    platforms: {
      instagram: "Instagram",
      gaming: "Gaming",
      personal: "Personnel",
    },
    tones: {
      cool: "Cool",
      mysterious: "Mystérieux",
      personal: "Personnel",
      professional: "Professionnel",
      minimal: "Minimal",
      bold: "Assumé",
    },
    defaultName: "Utilisateur Toolyflow",
    platformLines: {
      instagram: [
        "Partage un style net avec une présence calme",
        "Publie avec intention et identité claire",
        "Garde une ligne visuelle simple et forte",
        "Préfère le signal au bruit",
      ],
      gaming: [
        "Joue avec calme, lecture rapide et bon timing",
        "Reste lucide même sous pression",
        "Mise sur des décisions propres et stables",
        "Entre en partie avec un vrai focus",
      ],
      personal: [
        "Construit un travail utile avec régularité",
        "Partage sa progression avec clarté",
        "Avance avec une énergie simple et constante",
        "Préfère la cohérence au bruit",
      ],
    },
    templates: {
      cool: {
        starters: [
          "Peu de bruit, une direction claire",
          "Du goût, du rythme et une présence nette",
          "Une énergie simple avec un vrai focus",
          "Calme à l'extérieur, solide à l'intérieur",
        ],
        closings: [
          "La qualité reste prioritaire",
          "Tout est pensé pour rester lisible et propre",
          "Construit toujours une meilleure version",
          "Sobre, clair et mémorable",
        ],
      },
      mysterious: {
        starters: [
          "Tout n'a pas besoin d'être expliqué",
          "Avance discrètement avec intention",
          "Laisse certains détails arriver plus tard",
          "Garde une part de mystère sans confusion",
        ],
        closings: [
          "En dit peu mais montre assez",
          "La partie silencieuse parle aussi",
          "Réservé, mais jamais absent",
          "Le détail garde le contrôle",
        ],
      },
      personal: {
        starters: [
          "Partage le travail derrière le progrès",
          "Apprend, ajuste et continue",
          "Documente sa croissance avec honnêteté",
          "Construit de meilleures habitudes avec intention",
        ],
        closings: [
          "Les petits pas comptent encore",
          "Rester utile compte plus que paraître parfait",
          "Honnête, clair et en mouvement",
          "La constance passe avant le bruit",
        ],
      },
      professional: {
        starters: [
          "Transforme les idées en résultats structurés",
          "Travaille avec clarté et fiabilité",
          "Choisit l'exécution propre et utile",
          "Met en place des systèmes qui tiennent",
        ],
        closings: [
          "Un bon process améliore le résultat",
          "Professionnel sans perdre sa personnalité",
          "La clarté fait partie de l'image",
          "La régularité crée la confiance",
        ],
      },
      minimal: {
        starters: [
          "Moins de bruit, plus de sens",
          "Simple par choix, clair par design",
          "Garde le style léger et le signal fort",
          "Présence minimale, valeur stable",
        ],
        closings: [
          "Rien d'en trop, rien de flou",
          "Le simple gagne quand il reste utile",
          "Conçu pour rester lisible",
          "Le calme peut aussi marquer",
        ],
      },
      bold: {
        starters: [
          "Voix directe, direction claire",
          "Fait pour se démarquer sans désordre",
          "Montre son intention dès le premier regard",
          "Présence assumée, jamais brouillonne",
        ],
        closings: [
          "Fort, lisible et mémorisable",
          "L'assurance fonctionne mieux avec de la clarté",
          "Construit pour laisser une impression nette",
          "Visible sans perdre en ordre",
        ],
      },
    },
  },
});

const pt = translateDictionary(en, "pt", {
  localeCode: "pt_PT",
  siteDescription: "Ferramentas online rápidas, simples e grátis.",
  header: { tools: "Ferramentas", about: "Sobre", contact: "Contato" },
  footer: {
    description:
      "Ferramentas online rápidas, simples e grátis para tarefas do dia a dia. Cada ferramenta funciona bem no celular, tablet e desktop.",
    toolsHeading: "Ferramentas",
    companyHeading: "Site",
    about: "Sobre",
    contact: "Contato",
    privacy: "Política de privacidade",
    terms: "Termos de serviço",
  },
  shared: {
    language: "Idioma",
    openTool: "Abrir ferramenta",
    go: "Abrir",
    whyUseIt: "Por que usar",
    exploreMore: "Mais ferramentas",
    noText: "Ainda sem texto.",
  },
  home: {
    metaTitle: "Ferramentas online rápidas, simples e grátis",
    metaDescription:
      "Toolyflow é um site de mini ferramentas com páginas separadas, estrutura SEO forte e layout responsivo para atrair tráfego internacional.",
    eyebrow: "Site de ferramentas online",
    tagline: "Ferramentas online rápidas, simples e grátis.",
    description:
      "Toolyflow foi criado como um site limpo de mini ferramentas com páginas focadas, boa estrutura de SEO e layout responsivo com cara de produto real.",
    primaryCta: "Ver ferramentas",
    secondaryCta: "Saiba mais",
    stats: [
      { label: "Primeira versão", value: "6 idiomas" },
      { label: "Coleção", value: "5 ferramentas" },
      { label: "Objetivo", value: "Tráfego SEO" },
    ],
    toolsEyebrow: "Biblioteca",
    toolsTitle: "Ferramentas úteis, uma página clara para cada uma",
    toolsDescription:
      "Cada ferramenta tem sua própria rota, metadata e interface focada, mantendo o site fácil de indexar e escalar em vários idiomas.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palavra base ou ideia",
    keywordPlaceholder: "ex. lua, pixel, sombra",
    styleLabel: "Escolha um estilo",
    generateMore: "Gerar mais",
    tapToCopy: "Toque para copiar",
    copied: "Copiado para a área de transferência",
    styles: {
      cool: "Cool",
      dark: "Dark",
      gaming: "Gaming",
      aesthetic: "Aesthetic",
    },
    seeds: {
      cool: {
        left: ["Nova", "Claro", "Prime", "Aero", "Pulso", "Neon", "Urbano", "Vivo"],
        right: ["Flow", "Wave", "Linha", "Shift", "Glow", "Modo", "Traço", "Ponto"],
      },
      dark: {
        left: ["Sombra", "Noite", "Corvo", "Cinza", "Noir", "Silente", "Vazio", "Obsidian"],
        right: ["Véu", "Rastro", "Marca", "Névoa", "Eco", "Fang", "Guarda", "Drift"],
      },
      gaming: {
        left: ["Clutch", "Turbo", "Pixel", "Rank", "Quest", "Rush", "Nexus", "Squad"],
        right: ["Strike", "Forge", "Raid", "Boost", "Zone", "Drop", "Run", "Lock"],
      },
      aesthetic: {
        left: ["Luna", "Aura", "Nuvem", "Velvet", "Flora", "Soft", "Mellow", "Cove"],
        right: ["Muse", "Studio", "Dream", "Glow", "Garden", "Note", "Line", "Bloom"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "Nome ou usuário",
    namePlaceholder: "@seuusuario",
    platformLabel: "Plataforma",
    toneLabel: "Tom",
    generate: "Gerar bio",
    copy: "Clique para copiar",
    copied: "Copiado",
    platforms: {
      instagram: "Instagram",
      gaming: "Gaming",
      personal: "Pessoal",
    },
    tones: {
      cool: "Cool",
      mysterious: "Misterioso",
      personal: "Pessoal",
      professional: "Profissional",
      minimal: "Minimal",
      bold: "Marcante",
    },
    defaultName: "Usuário Toolyflow",
    platformLines: {
      instagram: [
        "Compartilha presença limpa e energia constante",
        "Publica com estilo claro e identidade forte",
        "Mantém uma linha visual simples e sólida",
        "Prefere intenção no lugar de barulho",
      ],
      gaming: [
        "Joga com calma, leitura rápida e decisão firme",
        "Entra na partida com foco total",
        "Confia em ritmo estável e escolhas limpas",
        "Mantém controle mesmo sob pressão",
      ],
      personal: [
        "Constrói trabalho útil com consistência",
        "Compartilha progresso com clareza real",
        "Avança com foco, ritmo e intenção",
        "Prefere clareza antes de excesso",
      ],
    },
    templates: {
      cool: {
        starters: [
          "Pouco ruído, direção clara",
          "Bom gosto com movimento constante",
          "Presença calma e sinal forte",
          "Energia simples com foco real",
        ],
        closings: [
          "Sempre ajustando a próxima versão",
          "Qualidade vale mais que volume",
          "Feito para ser claro e memorável",
          "Tudo parece limpo e bem pensado",
        ],
      },
      mysterious: {
        starters: [
          "Nem tudo precisa de explicação",
          "Segue em silêncio com intenção",
          "Guarda parte do plano para depois",
          "Deixa os detalhes aparecerem no tempo certo",
        ],
        closings: [
          "Fala menos e mostra melhor",
          "A parte silenciosa também comunica",
          "Reservado sem perder presença",
          "O controle mora nos detalhes",
        ],
      },
      personal: {
        starters: [
          "Mostra o trabalho por trás do progresso",
          "Aprende, ajusta e continua",
          "Documenta crescimento de forma honesta",
          "Constrói hábitos com intenção real",
        ],
        closings: [
          "Pequenos passos ainda contam",
          "Ser útil importa mais do que parecer perfeito",
          "Honesto, claro e em movimento",
          "Consistência vale mais que barulho",
        ],
      },
      professional: {
        starters: [
          "Transforma ideias em resultados organizados",
          "Trabalha com clareza e confiança",
          "Escolhe execução limpa e útil",
          "Cria sistemas que sustentam resultado",
        ],
        closings: [
          "Bom processo gera saída melhor",
          "Profissional sem perder personalidade",
          "Clareza também faz parte da marca",
          "Consistência transmite valor",
        ],
      },
      minimal: {
        starters: [
          "Menos ruído, mais significado",
          "Simples por escolha, claro por design",
          "Mantém o estilo leve e o sinal forte",
          "Presença mínima, valor constante",
        ],
        closings: [
          "Nada extra, nada confuso",
          "O simples funciona quando continua útil",
          "Feito para leitura rápida e limpa",
          "Calma também pode marcar",
        ],
      },
      bold: {
        starters: [
          "Voz direta e direção clara",
          "Feito para se destacar sem confundir",
          "Mostra intenção logo no primeiro olhar",
          "Presença forte sem virar excesso",
        ],
        closings: [
          "Forte, claro e fácil de lembrar",
          "Confiança funciona melhor com clareza",
          "Feito para deixar uma impressão limpa",
          "Visível sem perder organização",
        ],
      },
    },
  },
});

const dictionaries: Record<Locale, Dictionary> = {
  en,
  tr,
  es,
  de,
  fr,
  pt,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getToolEntries(locale: Locale) {
  const dictionary = getDictionary(locale);
  return baseToolSlugs.map((slug) => dictionary.tools[slug]);
}
