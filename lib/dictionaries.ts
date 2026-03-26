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
    searchLabel: string;
    searchPlaceholder: string;
    searchEmpty: string;
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    brandPoints: Array<{ title: string; description: string }>;
    useCasesEyebrow: string;
    useCasesTitle: string;
    useCasesDescription: string;
    useCases: Array<{ title: string; description: string }>;
    faqEyebrow: string;
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  staticPages: Record<StaticPageContent["slug"], StaticPageContent>;
  tools: Record<ToolSlug, LocalizedTool>;
  caseConverter: {
    inputLabel: string;
    placeholder: string;
    characters: string;
    words: string;
    lines: string;
    readingTime: string;
    clearText: string;
    uppercase: string;
    lowercase: string;
    sentenceCase: string;
    titleCase: string;
    camelCase: string;
    pascalCase: string;
    snakeCase: string;
    kebabCase: string;
    trimmedText: string;
    singleLine: string;
    copy: string;
    copied: string;
  };
  qrGenerator: {
    inputLabel: string;
    placeholder: string;
    download: string;
    downloadSvg: string;
    clear: string;
    livePreview: string;
    emptyState: string;
    generating: string;
    helper: string;
    typeLabel: string;
    sizeLabel: string;
    foregroundLabel: string;
    backgroundLabel: string;
    urlMode: string;
    textMode: string;
    emailMode: string;
    phoneMode: string;
    wifiMode: string;
    emailLabel: string;
    subjectLabel: string;
    bodyLabel: string;
    phoneLabel: string;
    ssidLabel: string;
    passwordLabel: string;
    securityLabel: string;
    securityWpa: string;
    securityWep: string;
    securityOpen: string;
  };
  nicknameGenerator: {
    keywordLabel: string;
    keywordPlaceholder: string;
    styleLabel: string;
    lengthLabel: string;
    symbolsLabel: string;
    pronounceableLabel: string;
    generateMore: string;
    copyButton: string;
    tapToCopy: string;
    copied: string;
    toggleOn: string;
    toggleOff: string;
    styles: Record<"cool" | "dark" | "gaming" | "aesthetic", string>;
    lengthModes: Record<"short" | "balanced" | "long", string>;
    symbolModes: Record<"none" | "light" | "bold", string>;
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
    lengthLabel: string;
    emojiLabel: string;
    ctaLabel: string;
    generate: string;
    copy: string;
    copied: string;
    toggleOn: string;
    toggleOff: string;
    platforms: Record<"instagram" | "tiktok" | "x" | "youtube" | "twitch", string>;
    tones: Record<
      | "cool"
      | "mysterious"
      | "personal"
      | "professional"
      | "minimal"
      | "bold"
      | "playful"
      | "sharp",
      string
    >;
    lengths: Record<"short" | "balanced" | "long", string>;
    defaultName: string;
    platformLines: Record<"instagram" | "tiktok" | "x" | "youtube" | "twitch", string[]>;
    ctaLines: Record<"instagram" | "tiktok" | "x" | "youtube" | "twitch", string[]>;
    templates: Record<
      | "cool"
      | "mysterious"
      | "personal"
      | "professional"
      | "minimal"
      | "bold"
      | "playful"
      | "sharp",
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
  "case-converter",
  "bio-generator",
  "nickname-generator",
  "qr-generator",
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
        "Toolyflow is a focused utility hub for text tools, creator tools, and quick online tasks with clean pages and multilingual SEO structure.",
      keywords: [
        "online tools",
        "free online tools",
        "text tools online",
        "creator tools",
        "qr code generator",
        "case converter",
        "bio generator",
      ],
      eyebrow: "Focused utility hub",
      title: "Toolyflow",
      tagline: "Fast text tools and creator tools that feel useful.",
      description:
        "Toolyflow brings together text tools, creator tools, and quick utilities in clean pages people can return to and use on any device.",
      primaryCta: "Browse tools",
      secondaryCta: "Learn more",
      stats: [
        { label: "Focus", value: "2 clusters" },
        { label: "Core tools", value: "4 primary" },
        { label: "Coverage", value: "6 languages" },
      ],
      toolsEyebrow: "Core tools",
      toolsTitle: "Built around text tools and creator tools",
      toolsDescription:
        "The main library now prioritizes tools for writing, formatting, bios, usernames, and fast creator workflows. Lighter utilities stay available without defining the whole product.",
      features: [
        {
          title: "Text tools",
          description:
            "Formatting, cleanup, and writing helpers should become the strongest layer of the product because they solve repeat problems with clear search intent.",
        },
        {
          title: "Creator tools",
          description:
            "Bio, username, nickname, and profile-oriented pages should feel tailored for creators instead of sounding like generic generators.",
        },
        {
          title: "Quick utilities",
          description:
            "Small utility pages still matter, but they support the brand instead of leading it. Toolyflow should feel focused before it feels broad.",
        },
      ],
      searchLabel: "Find a page fast",
      searchPlaceholder: "Search tools and categories",
      searchEmpty: "No matching tools or categories yet.",
      whyEyebrow: "Why Toolyflow",
      whyTitle: "Built for fast, low-friction daily tasks",
      whyDescription:
        "Toolyflow should feel like a product with a point of view: fast entry, useful output, low friction, and pages that are easy to trust on both mobile and desktop.",
      brandPoints: [
        {
          title: "Fast first action",
          description:
            "The first useful interaction should happen immediately. Inputs stay visible, outputs stay easy to copy, and the page does not make the user work to get value.",
        },
        {
          title: "Focused scope",
          description:
            "The product now centers on text workflows and creator workflows so users understand what Toolyflow is good at within seconds.",
        },
        {
          title: "Clean enough to return to",
          description:
            "The brand should feel practical and calm, not loud. The goal is to be the page users keep open while they work.",
        },
      ],
      useCasesEyebrow: "Use cases",
      useCasesTitle: "Where the product should earn repeat visits",
      useCasesDescription:
        "The best tools are the ones people reuse in real workflows. These are the moments Toolyflow is being shaped for.",
      useCases: [
        {
          title: "Quick text cleanup",
          description:
            "Clean titles, descriptions, notes, and copied text fast without jumping between multiple pages.",
        },
        {
          title: "Profile publishing",
          description:
            "Write bios, shape handles, and generate profile assets when publishing for Instagram, TikTok, X, YouTube, or Twitch.",
        },
        {
          title: "Small creator tasks",
          description:
            "Handle QR links, lightweight utilities, and repeat setup tasks without leaving the main workflow.",
        },
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Questions a real product should answer",
      faqs: [
        {
          question: "What is Toolyflow focused on now?",
          answer:
            "Toolyflow is now focused on text tools, creator tools, and a smaller layer of quick utilities. The goal is to stay useful, clear, and easy to return to.",
        },
        {
          question: "Are the tools free to use?",
          answer:
            "Yes. The current product is designed around fast, browser-based tools that are free to open and use without account setup.",
        },
        {
          question: "Does Toolyflow work well on mobile?",
          answer:
            "Yes. The interface is being shaped so the same tools stay clean and readable on phones, tablets, and desktop screens.",
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
        title: "A focused utility website",
        description:
          "Toolyflow is built to offer quick, clean, free online tools without unnecessary friction.",
        sections: [
          {
            title: "What Toolyflow does",
            body:
              "Toolyflow is an online tools website focused on everyday utility pages that open fast, work well on any screen size, and stay simple enough to use in seconds.",
          },
          {
            title: "What the product is becoming",
            body:
              "Toolyflow is moving toward a sharper product direction built around text tools and creator tools. Quick utilities still exist, but the main product now leads with clearer, more useful workflows.",
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
          "Generate sharper bios for Instagram, TikTok, X, YouTube, and Twitch.",
        description:
          "Generate cleaner bios by platform, tone, length, emoji use, and CTA style, then copy the version that fits your profile.",
        eyebrow: "Social profile tool",
        accentLabel: "BIO",
        metaTitle: "Bio Generator",
        metaDescription:
          "Generate cleaner bios for Instagram, TikTok, X, YouTube, and Twitch with tone, length, emoji, and CTA controls in a free online bio generator.",
        keywords: [
          "bio generator",
          "instagram bio generator",
          "short bio generator",
          "profile bio ideas",
        ],
        highlights: [
          "Tone, length, emoji, and CTA controls shape the output more precisely.",
          "Works well for social profiles, creator pages, and channel bios.",
          "Each generate action returns a fresh batch of bio options to compare quickly.",
        ],
        structuredDescription:
          "Free online bio generator for creator profiles with platform, tone, length, emoji, and CTA controls.",
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
          "Useful for usernames, social handles, creator aliases, and gaming tags.",
          "Style, length, symbol, and readability filters keep the results aligned with the vibe you want.",
          "Each suggestion is ready to copy in one tap and refresh into a new batch.",
        ],
        structuredDescription:
          "Free online nickname generator for cool, dark, gaming, and aesthetic handles with style and readability controls.",
      },
      "qr-generator": {
        slug: "qr-generator",
        name: "QR Code Generator",
        shortDescription:
          "Turn any link or text into a QR code and download it instantly.",
        description:
          "Create QR codes in the browser with live previews, multiple QR types, and quick PNG or SVG downloads.",
        eyebrow: "Utility tool",
        accentLabel: "QR",
        metaTitle: "QR Code Generator",
        metaDescription:
          "Generate QR codes for links, text, email, phone, or WiFi and download them instantly as PNG or SVG.",
        keywords: ["qr code generator", "free qr code generator", "url to qr", "text to qr"],
        highlights: [
          "Instant QR previews update as you type.",
          "Downloads stay simple with one-click PNG export.",
          "Useful for links, menus, event pages, and quick sharing.",
        ],
        structuredDescription:
          "Free online QR code generator with instant preview, multiple QR types, and PNG or SVG download.",
      },
      "case-converter": {
        slug: "case-converter",
        name: "Case Converter",
        shortDescription:
          "Convert text across uppercase, lowercase, sentence, title, camel, snake, and kebab formats.",
        description:
          "Switch text case instantly, compare richer outputs side by side, and copy the version you need.",
        eyebrow: "Text formatting tool",
        accentLabel: "CASE",
        metaTitle: "Case Converter",
        metaDescription:
          "Convert text to uppercase, lowercase, sentence case, title case, camelCase, snake_case, and more with a fast free online case converter.",
        keywords: ["case converter", "uppercase converter", "lowercase converter", "capitalize text"],
        highlights: [
          "Fast for titles, captions, notes, and quick formatting checks.",
          "Keeps outputs visible side by side instead of forcing extra clicks.",
          "Works cleanly on mobile, tablet, and desktop layouts.",
        ],
        structuredDescription:
          "Free online case converter for uppercase, lowercase, sentence case, title case, camelCase, snake_case, and kebab-case text.",
      },
      "decision-wheel": {
        slug: "decision-wheel",
        name: "Decision Wheel",
        shortDescription:
          "Spin through options when you need a lightweight extra utility for quick picks.",
        description:
          "Use a lightweight random picker with animated spinning and clear results when you need a bonus utility outside the core text and creator flows.",
        eyebrow: "Quick utility",
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
      lines: "Lines",
      readingTime: "Read time",
      clearText: "Clear text",
      uppercase: "Uppercase",
      lowercase: "Lowercase",
      sentenceCase: "Sentence case",
      titleCase: "Title Case",
      camelCase: "camelCase",
      pascalCase: "PascalCase",
      snakeCase: "snake_case",
      kebabCase: "kebab-case",
      trimmedText: "Trimmed text",
      singleLine: "Single line",
      copy: "Copy",
      copied: "Copied",
    },
    qrGenerator: {
      inputLabel: "Text or URL",
      placeholder: "Paste a link, coupon text, or plain message.",
      download: "Download PNG",
      downloadSvg: "Download SVG",
      clear: "Clear",
      livePreview: "Live preview",
      emptyState: "Add text or a link to generate a QR code instantly.",
      generating: "Generating your QR code...",
      helper: "Everything runs client-side with live previews, format selection, and direct downloads.",
      typeLabel: "QR type",
      sizeLabel: "Size",
      foregroundLabel: "Foreground",
      backgroundLabel: "Background",
      urlMode: "URL",
      textMode: "Text",
      emailMode: "Email",
      phoneMode: "Phone",
      wifiMode: "WiFi",
      emailLabel: "Email address",
      subjectLabel: "Subject",
      bodyLabel: "Message",
      phoneLabel: "Phone number",
      ssidLabel: "WiFi name",
      passwordLabel: "Password",
      securityLabel: "Security",
      securityWpa: "WPA",
      securityWep: "WEP",
      securityOpen: "Open",
    },
    nicknameGenerator: {
      keywordLabel: "Keyword or vibe",
      keywordPlaceholder: "e.g. orbit, raven, pixel",
      styleLabel: "Pick a style",
      lengthLabel: "Length",
      symbolsLabel: "Symbols",
      pronounceableLabel: "Pronounceable",
      generateMore: "Generate more",
      copyButton: "Copy",
      tapToCopy: "Tap to copy",
      copied: "Copied to clipboard",
      toggleOn: "On",
      toggleOff: "Off",
      styles: {
        cool: "Cool",
        dark: "Dark",
        gaming: "Gaming",
        aesthetic: "Aesthetic",
      },
      lengthModes: {
        short: "Short",
        balanced: "Balanced",
        long: "Long",
      },
      symbolModes: {
        none: "Clean",
        light: "Light",
        bold: "Styled",
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
      lengthLabel: "Length",
      emojiLabel: "Emoji",
      ctaLabel: "CTA line",
      generate: "Generate bios",
      copy: "Copy",
      copied: "Copied",
      toggleOn: "On",
      toggleOff: "Off",
      platforms: {
        instagram: "Instagram",
        tiktok: "TikTok",
        x: "X",
        youtube: "YouTube",
        twitch: "Twitch",
      },
      tones: {
        cool: "Cool",
        mysterious: "Mysterious",
        personal: "Personal",
        professional: "Professional",
        minimal: "Minimal",
        bold: "Bold",
        playful: "Playful",
        sharp: "Sharp",
      },
      lengths: {
        short: "Short",
        balanced: "Balanced",
        long: "Long",
      },
      defaultName: "",
      platformLines: {
        instagram: [
          "clean visuals, steady presence",
          "posting with taste, not noise",
          "simple content, strong identity",
          "clear style, calm energy",
        ],
        tiktok: [
          "short edits, clear taste",
          "fast ideas, strong identity",
          "sharp clips, calm confidence",
          "posting with rhythm, not noise",
        ],
        x: [
          "clear thoughts, zero filler",
          "signal first, noise last",
          "posting with intent and timing",
          "short form, strong point of view",
        ],
        youtube: [
          "long form ideas, clean editing",
          "building useful videos consistently",
          "clear voice, steady uploads",
          "publishing with structure and taste",
        ],
        twitch: [
          "live focus, calm energy",
          "community first, chaos controlled",
          "smart plays, readable vibes",
          "steady streams, clean presence",
        ],
      },
      ctaLines: {
        instagram: [
          "open to collabs",
          "building quietly every week",
        ],
        tiktok: [
          "new drops on the feed",
          "follow for the next edit",
        ],
        x: [
          "sharing useful notes in public",
          "writing the next version in real time",
        ],
        youtube: [
          "new videos on the channel",
          "watch the next build unfold",
        ],
        twitch: [
          "catch the next live session",
          "live when the signal feels right",
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
          "built to stay clear and memorable",
          "steady work, clean signal",
          "quiet consistency, visible taste",
          "keeps the standard high",
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
        playful: {
          starters: [
            "light mood, clean identity",
            "fun energy without trying too hard",
            "playful tone, clear style",
            "easy to read, easy to remember",
          ],
          closings: [
            "still clean, never messy",
            "bright without losing focus",
            "good taste with a little motion",
            "soft edges, strong recall",
          ],
        },
        sharp: {
          starters: [
            "clear point, quick impact",
            "concise voice, strong edge",
            "fast signal, tight delivery",
            "clean lines, no wasted words",
          ],
          closings: [
            "made to land quickly",
            "short, exact, memorable",
            "strong shape, low friction",
            "built for instant clarity",
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
      lengthModes: {
        ...base.nicknameGenerator.lengthModes,
        ...overrides.nicknameGenerator?.lengthModes,
      },
      symbolModes: {
        ...base.nicknameGenerator.symbolModes,
        ...overrides.nicknameGenerator?.symbolModes,
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
      lengths: {
        ...base.bioGenerator.lengths,
        ...overrides.bioGenerator?.lengths,
      },
      ctaLines: {
        ...base.bioGenerator.ctaLines,
        ...overrides.bioGenerator?.ctaLines,
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
      "Toolyflow; metin araçları, creator araçları ve hızlı online yardımcılar için odaklı sayfalar sunan çok dilli bir utility hub'dır.",
    keywords: [
      "online araçlar",
      "ücretsiz online araçlar",
      "metin araçları",
      "creator araçları",
      "qr code generator",
      "case converter",
      "bio generator",
    ],
    eyebrow: "Odaklı utility hub",
    tagline: "Gerçekten işe yarayan metin ve creator araçları.",
    description:
      "Toolyflow; metin araçları, creator araçları ve hızlı yardımcı utility sayfalarını telefonda ve masaüstünde rahat kullanılan temiz bir ürün içinde bir araya getirir.",
    primaryCta: "Araçlara göz at",
    secondaryCta: "Daha fazla bilgi",
    stats: [
      { label: "Odak", value: "2 cluster" },
      { label: "Ana araçlar", value: "4 öncelik" },
      { label: "Kapsam", value: "6 dil" },
    ],
    toolsEyebrow: "Ana araçlar",
    toolsTitle: "Metin araçları ve creator araçları etrafında kuruldu",
    toolsDescription:
      "Ana araç kütüphanesi; yazma, düzenleme, bio, nickname ve hızlı creator iş akışlarını öne çıkarır. Daha hafif utility araçları ise ürünü destekleyen ikinci katmanda kalır.",
    features: [
      {
        title: "Metin araçları",
        description:
          "Yazı biçimlendirme, temizlik ve hızlı düzenleme araçları ürünün en güçlü katmanına dönüşmelidir çünkü tekrar eden ihtiyaç çözerler.",
      },
      {
        title: "Creator araçları",
        description:
          "Bio, username ve nickname sayfaları jenerik his vermek yerine creator odaklı, kısa ve sahiplenilebilir çıktılar sunmalıdır.",
      },
      {
        title: "Hızlı yardımcı araçlar",
        description:
          "Küçük yardımcı araçlar hâlâ önemli; ancak artık markayı taşıyan ana omurga değiller. Önce odak, sonra genişlik gelmelidir.",
      },
    ],
    searchLabel: "Hızlı arama",
    searchPlaceholder: "Araç veya kategori ara",
    searchEmpty: "Eşleşen araç veya kategori bulunamadı.",
    whyEyebrow: "Neden Toolyflow",
    whyTitle: "Hızlı ve düşük sürtünmeli günlük işler için kuruldu",
    whyDescription:
      "Toolyflow’un amacı yalnızca sayfa açmak değil; hızlı giriş, net çıktı, düşük sürtünme ve mobilde de güven veren bir araç deneyimi kurmaktır.",
    brandPoints: [
      {
        title: "İlk aksiyon hızlı olmalı",
        description:
          "Kullanıcı sayfaya girdiğinde hemen değer almalı. Input alanı görünür, çıktı kopyalanabilir ve arayüz gereksiz uğraş çıkarmamalı.",
      },
      {
        title: "Odaklı kapsam",
        description:
          "Ürün artık metin iş akışları ve creator iş akışları etrafında kurulduğu için Toolyflow’un neye iyi geldiği birkaç saniyede anlaşılmalı.",
      },
      {
        title: "Geri dönülebilir sadelik",
        description:
          "Marka yüksek sesli değil, pratik ve sakin hissettirmeli. Hedef; çalışırken açık bırakılan araç sayfası olmak.",
      },
    ],
    useCasesEyebrow: "Kullanım senaryoları",
    useCasesTitle: "Tekrar ziyaret getirecek kullanım alanları",
    useCasesDescription:
      "En iyi araçlar gerçek iş akışlarına tekrar giren araçlardır. Toolyflow da bu anlar için şekilleniyor.",
    useCases: [
      {
        title: "Hızlı metin temizliği",
        description:
          "Başlık, açıklama, not veya kopyalanmış metinleri birden fazla sayfa açmadan hızlıca düzenle.",
      },
      {
        title: "Profil yayınlama akışı",
        description:
          "Instagram, TikTok, X, YouTube veya Twitch için bio yaz, nickname şekillendir ve profil tarafını daha hızlı hazırla.",
      },
      {
        title: "Küçük creator işleri",
        description:
          "QR linkleri, hafif utility araçları ve tekrar eden küçük görevleri ana akıştan kopmadan çöz.",
      },
    ],
    faqEyebrow: "Sık sorulanlar",
    faqTitle: "Gerçek bir ürünün cevap vermesi gereken sorular",
    faqs: [
      {
        question: "Toolyflow şu anda neye odaklanıyor?",
        answer:
          "Toolyflow artık metin araçları, creator araçları ve daha küçük bir hızlı utility katmanına odaklanıyor. Amaç geniş görünmek değil, net ve kullanışlı kalmak.",
      },
      {
        question: "Araçlar ücretsiz mi?",
        answer:
          "Evet. Mevcut yapı, hesap açtırmadan tarayıcıda çalışan hızlı ve ücretsiz araçlar etrafında kuruludur.",
      },
      {
        question: "Mobilde düzgün çalışıyor mu?",
        answer:
          "Evet. Arayüz, aynı araçların telefonda, tablette ve masaüstünde temiz ve okunabilir kalması için tasarlanıyor.",
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
      title: "Odaklı bir utility sitesi",
      description:
        "Toolyflow, gereksiz karmaşa olmadan hızlı, temiz ve ücretsiz online araçlar sunmak için kuruldu.",
      sections: [
        {
          title: "Toolyflow ne yapar",
          body:
            "Toolyflow; hızlı açılan, her ekranda düzgün çalışan ve saniyeler içinde kullanılabilen günlük yardımcı araçlara odaklanan bir online tools sitesidir.",
        },
        {
          title: "Ürün hangi yöne gidiyor",
          body:
            "Toolyflow artık metin araçları ve creator araçları etrafında daha net konumlanan bir ürüne dönüşüyor. Hızlı utility sayfaları kalır, ancak ürün kimliğini onlar belirlemez.",
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
        "Instagram, TikTok, X, YouTube ve Twitch için daha güçlü bio alternatifleri üretin.",
      description:
        "Platform, ton, uzunluk, emoji ve CTA seçerek daha temiz bio alternatifleri üretin ve profilinize uyanı kopyalayın.",
      eyebrow: "Sosyal profil aracı",
      metaDescription:
        "Instagram, TikTok, X, YouTube ve Twitch için ton, uzunluk, emoji ve CTA kontrolleriyle ücretsiz bio üretin.",
      highlights: [
        "Ton, uzunluk, emoji ve CTA kontrolleri çıktıyı daha net şekillendirir.",
        "Sosyal profil, creator sayfası ve kanal bio'ları için uygundur.",
        "Her üretimde hızlıca karşılaştırabileceğiniz yeni bir bio batch'i gelir.",
      ],
      structuredDescription:
        "Platform, ton, uzunluk, emoji ve CTA kontrolleri sunan ücretsiz online bio generator.",
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
        "Kullanıcı adı, sosyal medya handle, creator alias ve oyun nicki için uygundur.",
        "Stil, uzunluk, sembol ve okunabilirlik filtreleri sonucu istediğiniz havaya yaklaştırır.",
        "Her öneri tek dokunuşla kopyalanabilir ve yeni batch ile tazelenebilir.",
      ],
      structuredDescription:
        "Stil ve okunabilirlik kontrolleri sunan ücretsiz nickname generator.",
    },
    "qr-generator": {
      ...en.tools["qr-generator"],
      name: "QR Code Generator",
      shortDescription:
        "Herhangi bir linki veya metni QR koda dönüştürün ve anında indirin.",
      description:
        "Tarayıcı içinde canlı önizleme, farklı QR tipleri ve PNG veya SVG indirme ile hızlı QR kod üretin.",
      eyebrow: "Yardımcı araç",
      metaDescription:
        "Link, metin, e-posta, telefon veya WiFi için ücretsiz QR kod oluşturun ve PNG ya da SVG olarak indirin.",
      highlights: [
        "Yazdıkça anında QR önizlemesi güncellenir.",
        "PNG indirme süreci tek tıkla basit kalır.",
        "Link, menü, etkinlik sayfası ve hızlı paylaşım için idealdir.",
      ],
      structuredDescription:
        "Canlı önizleme, farklı QR tipleri ve PNG veya SVG indirme sunan ücretsiz QR code generator.",
    },
    "case-converter": {
      ...en.tools["case-converter"],
      name: "Case Converter",
      shortDescription:
        "Metni uppercase, lowercase, sentence, title, camel, snake ve kebab formatlarına dönüştürün.",
      description:
        "Metin biçimini anında değiştirin, zengin çıktıları yan yana karşılaştırın ve ihtiyacınız olanı kopyalayın.",
      eyebrow: "Metin biçimlendirme aracı",
      metaDescription:
        "Metni uppercase, lowercase, sentence case, title case, camelCase, snake_case ve daha fazlasına hızlıca dönüştürün.",
      highlights: [
        "Başlıklar, açıklamalar ve notlar için hızlıdır.",
        "Çıktıları tek ekranda tuttuğu için ekstra tıklama istemez.",
        "Mobil, tablet ve masaüstünde temiz çalışır.",
      ],
      structuredDescription:
        "Uppercase, lowercase, sentence case, title case, camelCase, snake_case ve kebab-case için ücretsiz case converter.",
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
    lines: "Satır",
    readingTime: "Okuma süresi",
    clearText: "Metni temizle",
    uppercase: "Büyük harf",
    lowercase: "Küçük harf",
    sentenceCase: "Cümle düzeni",
    titleCase: "Başlık düzeni",
    camelCase: "camelCase",
    pascalCase: "PascalCase",
    snakeCase: "snake_case",
    kebabCase: "kebab-case",
    trimmedText: "Temizlenmiş metin",
    singleLine: "Tek satır",
    copy: "Kopyala",
    copied: "Kopyalandı",
  },
  qrGenerator: {
    inputLabel: "Metin veya URL",
    placeholder: "Bir link, not veya düz metin yapıştırın.",
    download: "PNG indir",
    downloadSvg: "SVG indir",
    clear: "Temizle",
    livePreview: "Canlı önizleme",
    emptyState: "QR kodu anında oluşturmak için metin veya link ekleyin.",
    generating: "QR kodunuz oluşturuluyor...",
    helper: "Her şey canlı önizleme, format seçimi ve kolay indirme için client-side çalışır.",
    typeLabel: "QR tipi",
    sizeLabel: "Boyut",
    foregroundLabel: "Ön plan",
    backgroundLabel: "Arka plan",
    urlMode: "URL",
    textMode: "Metin",
    emailMode: "E-posta",
    phoneMode: "Telefon",
    wifiMode: "WiFi",
    emailLabel: "E-posta adresi",
    subjectLabel: "Konu",
    bodyLabel: "Mesaj",
    phoneLabel: "Telefon numarası",
    ssidLabel: "WiFi adı",
    passwordLabel: "Şifre",
    securityLabel: "Güvenlik",
    securityWpa: "WPA",
    securityWep: "WEP",
    securityOpen: "Açık",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Anahtar kelime veya hava",
    keywordPlaceholder: "ör. orbit, raven, pixel",
    styleLabel: "Bir stil seçin",
    lengthLabel: "Uzunluk",
    symbolsLabel: "Sembol stili",
    pronounceableLabel: "Okunabilirlik",
    generateMore: "Daha fazla üret",
    copyButton: "Kopyala",
    tapToCopy: "Kopyalamak için dokun",
    copied: "Panoya kopyalandı",
    toggleOn: "Açık",
    toggleOff: "Kapalı",
    styles: {
      cool: "Cool",
      dark: "Dark",
      gaming: "Gaming",
      aesthetic: "Aesthetic",
    },
    lengthModes: {
      short: "Kısa",
      balanced: "Dengeli",
      long: "Uzun",
    },
    symbolModes: {
      none: "Temiz",
      light: "Hafif",
      bold: "Stilize",
    },
    seeds: {
      cool: {
        left: ["Nova", "Aero", "Lyra", "Prime", "Vexa", "Nori", "Sora", "Kairo"],
        right: ["Wave", "Glow", "Lane", "Shift", "Mode", "Flow", "Edge", "Tone"],
      },
      dark: {
        left: ["Noir", "Nox", "Raven", "Vanta", "Onyx", "Sable", "Morrow", "Nyra"],
        right: ["Veil", "Drift", "Shade", "Mark", "Mist", "Reign", "Warden", "Fang"],
      },
      gaming: {
        left: ["Clutch", "Raze", "Pixel", "Blitz", "Ryko", "Quest", "Turbo", "Strix"],
        right: ["Zone", "Raid", "Boost", "Strike", "Drop", "Forge", "Lock", "Rush"],
      },
      aesthetic: {
        left: ["Luna", "Velvet", "Aura", "Melo", "Ciel", "Auri", "Bloom", "Mira"],
        right: ["Muse", "Glow", "Dream", "Line", "Note", "Diary", "Cove", "Studio"],
      },
    },
  },
  bioGenerator: {
    ...en.bioGenerator,
    nameLabel: "İsim veya kullanıcı adı",
    namePlaceholder: "@kullaniciadi",
    platformLabel: "Platform",
    toneLabel: "Ton",
    lengthLabel: "Uzunluk",
    emojiLabel: "Emoji",
    ctaLabel: "CTA satırı",
    generate: "Bio üret",
    copy: "Kopyala",
    copied: "Kopyalandı",
    toggleOn: "Açık",
    toggleOff: "Kapalı",
    platforms: {
      instagram: "Instagram",
      tiktok: "TikTok",
      x: "X",
      youtube: "YouTube",
      twitch: "Twitch",
    },
    tones: {
      cool: "Cool",
      mysterious: "Mysterious",
      personal: "Kişisel",
      professional: "Profesyonel",
      minimal: "Minimal",
      bold: "Güçlü",
      playful: "Eğlenceli",
      sharp: "Keskin",
    },
    lengths: {
      short: "Kısa",
      balanced: "Dengeli",
      long: "Uzun",
    },
    defaultName: "",
    platformLines: {
      instagram: [
        "net görsel, düzenli enerji",
        "temiz içerik, güçlü stil",
        "belirgin çizgi, sade kimlik",
        "gürültü değil, niyetli paylaşım",
      ],
      tiktok: [
        "kısa format, net kimlik",
        "hızlı fikir, temiz akış",
        "ritimli paylaşım, güçlü stil",
        "kısa içerik, belirgin tat",
      ],
      x: [
        "kısa cümle, net bakış",
        "gürültüden çok sinyal",
        "niyetli paylaşım, temiz dil",
        "az laf, güçlü görüş",
      ],
      youtube: [
        "uzun format, net anlatım",
        "düzenli video, temiz kurgu",
        "istikrarlı yayın, güçlü ses",
        "içerikte yapı, üretimde süreklilik",
      ],
      twitch: [
        "canlı odak, sakin enerji",
        "topluluk güçlü, tempo kontrollü",
        "okunur yayın, net karakter",
        "düzenli stream, temiz görünüm",
      ],
    },
    ctaLines: {
      instagram: ["iş birliklerine açık", "her hafta daha temiz üretim"],
      tiktok: ["sıradaki edit akışta", "devamı için takipte kal"],
      x: ["notları açık şekilde paylaşır", "bir sonraki versiyonu canlı kurar"],
      youtube: ["yeni videolar kanalda", "bir sonraki yapımı takip et"],
      twitch: ["sonraki canlı yayında görüşürüz", "sinyal gelince canlıda"],
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
          "çizgisi net, etkisi kalıcı",
          "sessiz ama güçlü bir iz bırakır",
          "istikrarını gösterişe tercih eder",
          "karışmadan dikkat çeker",
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
          "işi düzenli ve güven veren şekilde kurar",
          "düzenli standartlarla üretir",
        ],
        closings: [
          "iyi süreç, temiz sonuç",
          "sistemli çalışma, güçlü çıktı",
          "profesyonel ama soğuk değil",
          "düzenli çizgi, güven veren sonuç",
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
      playful: {
        starters: [
          "hafif enerji, temiz kimlik",
          "zorlamadan eğlenceli görünür",
          "oyunlu ton, net stil",
          "akılda kalır, karmaşık durmaz",
        ],
        closings: [
          "dağılmadan canlı kalır",
          "hafif ama net görünür",
          "hareketli ama temiz durur",
          "kolay okunur, çabuk hatırlanır",
        ],
      },
      sharp: {
        starters: [
          "kısa cümle, hızlı etki",
          "net ton, sert kenar",
          "fazlalıksız güçlü ifade",
          "temiz çizgi, direkt mesaj",
        ],
        closings: [
          "hızlı oturur, net kalır",
          "kısa, kesin, akılda kalır",
          "sürtünmesi düşük, etkisi yüksek",
          "hızlı anlaşılır, kolay dağılmaz",
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
      "Toolyflow es un hub utilitario centrado en herramientas de texto, herramientas para creadores y tareas online rápidas con estructura multilingüe.",
    eyebrow: "Hub utilitario enfocado",
    tagline: "Herramientas de texto y para creadores que sí se sienten útiles.",
    description:
      "Toolyflow reúne herramientas de texto, herramientas para creadores y utilidades rápidas en páginas limpias a las que puedes volver y usar en cualquier dispositivo.",
    primaryCta: "Ver herramientas",
    secondaryCta: "Saber más",
    stats: [
      { label: "Enfoque", value: "2 grupos" },
      { label: "Herramientas clave", value: "4 principales" },
      { label: "Cobertura", value: "6 idiomas" },
    ],
    toolsEyebrow: "Herramientas clave",
    toolsTitle: "Construido alrededor de herramientas de texto y para creadores",
    toolsDescription:
      "La biblioteca principal prioriza herramientas para escribir, limpiar texto, crear bios y generar nombres. Las utilidades más ligeras siguen presentes, pero ya no definen todo el producto.",
    features: [
      {
        title: "Herramientas de texto",
        description:
          "Las herramientas de formato, limpieza y escritura deben convertirse en la capa más fuerte del producto porque resuelven necesidades repetidas con intención clara.",
      },
      {
        title: "Herramientas para creadores",
        description:
          "Las páginas de bio, nickname y perfil deben sentirse hechas para creadores, no como generadores genéricos.",
      },
      {
        title: "Utilidades rápidas",
        description:
          "Las utilidades pequeñas siguen siendo útiles, pero ahora apoyan la marca en lugar de liderarla.",
      },
    ],
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palabra base o idea",
    keywordPlaceholder: "p. ej. luna, pixel, sombra",
    styleLabel: "Elige un estilo",
    generateMore: "Generar más",
    copyButton: "Copiar",
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
    copy: "Copiar",
    copied: "Copiado",
    platforms: {
      instagram: "Instagram",
      tiktok: "TikTok",
      x: "X",
      youtube: "YouTube",
      twitch: "Twitch",
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
      tiktok: [
        "Cortes rápidos, identidad clara",
        "Publica con ritmo y estilo visible",
        "Ideas breves, señal fuerte",
        "Movimiento limpio, sin exceso",
      ],
      x: [
        "Escribe con claridad y sin relleno",
        "Comparte ideas con punto de vista",
        "Busca señal antes que ruido",
        "Publica corto, claro y con intención",
      ],
      youtube: [
        "Construye videos útiles con constancia",
        "Mantiene voz clara y edición limpia",
        "Publica con estructura y criterio",
        "Convierte ideas largas en piezas sólidas",
      ],
      twitch: [
        "Juega en vivo con energía estable",
        "Mantiene control incluso bajo presión",
        "Lectura rápida y presencia clara",
        "Comunidad, foco y buen ritmo",
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
      "Toolyflow ist ein fokussierter Utility-Hub für Text-Tools, Creator-Tools und schnelle Online-Aufgaben mit mehrsprachiger Struktur.",
    eyebrow: "Fokussierter Utility-Hub",
    tagline: "Text-Tools und Creator-Tools, die wirklich nützlich wirken.",
    description:
      "Toolyflow richtet sich auf Text-Tools, Creator-Tools und eine kleine Ebene schneller Utilities aus. Das Produkt soll nicht zufällig breit wirken, sondern klar und wiederverwendbar.",
    primaryCta: "Tools ansehen",
    secondaryCta: "Mehr erfahren",
    stats: [
      { label: "Fokus", value: "2 Cluster" },
      { label: "Kern-Tools", value: "4 Prioritäten" },
      { label: "Abdeckung", value: "6 Sprachen" },
    ],
    toolsEyebrow: "Kern-Tools",
    toolsTitle: "Rund um Text-Tools und Creator-Tools aufgebaut",
    toolsDescription:
      "Die Hauptbibliothek priorisiert Schreiben, Textbereinigung, Bios, Nicknames und schnelle Creator-Workflows. Leichtere Utilities bleiben verfügbar, stehen aber nicht mehr im Zentrum.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Grundwort oder Idee",
    keywordPlaceholder: "z. B. licht, pixel, rabe",
    styleLabel: "Stil wählen",
    generateMore: "Mehr erzeugen",
    copyButton: "Kopieren",
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
    copy: "Kopieren",
    copied: "Kopiert",
    platforms: {
      instagram: "Instagram",
      tiktok: "TikTok",
      x: "X",
      youtube: "YouTube",
      twitch: "Twitch",
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
      tiktok: [
        "Kurze Clips, klare Identität",
        "Postet mit Rhythmus und deutlichem Stil",
        "Schnelle Ideen, sauber gesetzt",
        "Bewegt sich klar statt laut",
      ],
      x: [
        "Schreibt klar und ohne Füllstoff",
        "Teilt Gedanken mit Haltung",
        "Signal vor Lärm",
        "Kurz, deutlich und bewusst",
      ],
      youtube: [
        "Baut nützliche Videos mit Konstanz",
        "Hält Stimme und Schnitt sauber",
        "Veröffentlicht mit Struktur",
        "Macht aus langen Ideen klare Formate",
      ],
      twitch: [
        "Spielt live mit ruhiger Energie",
        "Bleibt auch unter Druck kontrolliert",
        "Lesbare Stimmung, klares Timing",
        "Community, Fokus und saubere Präsenz",
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
      "Toolyflow est un hub utilitaire centré sur les outils de texte, les outils pour créateurs et les tâches rapides en ligne avec une structure multilingue.",
    eyebrow: "Hub utilitaire ciblé",
    tagline: "Des outils de texte et pour créateurs qui paraissent vraiment utiles.",
    description:
      "Toolyflow réunit des outils de texte, des outils pour créateurs et des utilitaires rapides dans des pages propres que l'on peut réutiliser sur mobile comme sur desktop.",
    primaryCta: "Voir les outils",
    secondaryCta: "En savoir plus",
    stats: [
      { label: "Focus", value: "2 groupes" },
      { label: "Outils clés", value: "4 priorités" },
      { label: "Couverture", value: "6 langues" },
    ],
    toolsEyebrow: "Outils clés",
    toolsTitle: "Construit autour des outils de texte et pour créateurs",
    toolsDescription:
      "La bibliothèque principale met en avant l'écriture, le nettoyage de texte, les bios, les pseudos et les flux rapides pour créateurs. Les utilitaires légers restent disponibles, sans définir tout le produit.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Mot de base ou idée",
    keywordPlaceholder: "ex. lune, pixel, ombre",
    styleLabel: "Choisir un style",
    generateMore: "Générer plus",
    copyButton: "Copier",
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
    copy: "Copier",
    copied: "Copié",
    platforms: {
      instagram: "Instagram",
      tiktok: "TikTok",
      x: "X",
      youtube: "YouTube",
      twitch: "Twitch",
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
      tiktok: [
        "Formats courts, identité claire",
        "Publie avec rythme et style visible",
        "Idées rapides, signal propre",
        "Du mouvement sans confusion",
      ],
      x: [
        "Écrit avec clarté et sans remplissage",
        "Partage des idées avec angle net",
        "Cherche le signal avant le bruit",
        "Court, clair et intentionnel",
      ],
      youtube: [
        "Construit des vidéos utiles avec régularité",
        "Garde une voix claire et un montage propre",
        "Publie avec structure",
        "Transforme les longues idées en formats lisibles",
      ],
      twitch: [
        "Passe en live avec une énergie stable",
        "Reste lucide même sous pression",
        "Présence lisible et rythme propre",
        "Communauté, focus et style clair",
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
      "Toolyflow é um hub utilitário focado em ferramentas de texto, ferramentas para criadores e tarefas rápidas online com estrutura multilíngue.",
    eyebrow: "Hub utilitário focado",
    tagline: "Ferramentas de texto e para criadores que parecem realmente úteis.",
    description:
      "Toolyflow reúne ferramentas de texto, ferramentas para criadores e utilidades rápidas em páginas limpas que funcionam bem no celular e no desktop.",
    primaryCta: "Ver ferramentas",
    secondaryCta: "Saiba mais",
    stats: [
      { label: "Foco", value: "2 clusters" },
      { label: "Ferramentas-chave", value: "4 prioridades" },
      { label: "Cobertura", value: "6 idiomas" },
    ],
    toolsEyebrow: "Ferramentas-chave",
    toolsTitle: "Construído em torno de ferramentas de texto e para criadores",
    toolsDescription:
      "A biblioteca principal prioriza escrita, limpeza de texto, bios, nicknames e fluxos rápidos para criadores. Utilidades mais leves continuam disponíveis, mas já não definem todo o produto.",
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palavra base ou ideia",
    keywordPlaceholder: "ex. lua, pixel, sombra",
    styleLabel: "Escolha um estilo",
    generateMore: "Gerar mais",
    copyButton: "Copiar",
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
    copy: "Copiar",
    copied: "Copiado",
    platforms: {
      instagram: "Instagram",
      tiktok: "TikTok",
      x: "X",
      youtube: "YouTube",
      twitch: "Twitch",
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
      tiktok: [
        "Formato curto, identidade clara",
        "Publica com ritmo e estilo visível",
        "Ideias rápidas, sinal limpo",
        "Movimento sem excesso",
      ],
      x: [
        "Escreve com clareza e sem excesso",
        "Compartilha ideias com ponto de vista",
        "Busca sinal antes de ruído",
        "Curto, claro e intencional",
      ],
      youtube: [
        "Constrói vídeos úteis com consistência",
        "Mantém voz clara e edição limpa",
        "Publica com estrutura",
        "Transforma ideias longas em formatos fortes",
      ],
      twitch: [
        "Entra ao vivo com energia estável",
        "Mantém controle mesmo sob pressão",
        "Clima legível e ritmo limpo",
        "Comunidade, foco e presença clara",
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
