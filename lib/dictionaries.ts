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
  content: {
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
};

type StaticPageContent = {
  slug: "about" | "contact" | "privacy-policy" | "terms-of-service";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
    emailLabel?: string;
    email?: string;
  }>;
};

export type Dictionary = {
  languageName: string;
  localeCode: string;
  siteDescription: string;
  header: {
    tools: string;
    about: string;
    contact: string;
    menu: string;
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
    proofEyebrow: string;
    proofTitle: string;
    proofDescription: string;
    proofExamples: Array<{
      title: string;
      description: string;
      toolSlug: ToolSlug;
      toolName: string;
      inputLabel: string;
      input: string;
      outputLabel: string;
      output: string;
    }>;
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    brandPoints: Array<{ title: string; description: string }>;
    pathsEyebrow: string;
    pathsTitle: string;
    pathsDescription: string;
    paths: Array<{
      title: string;
      description: string;
      links: Array<{ label: string; slug: ToolSlug }>;
    }>;
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
      menu: "Open menu",
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
        { label: "Core tool pages", value: "4 live" },
        { label: "Coverage", value: "6 languages" },
        { label: "Guided pages", value: "4 with content" },
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
      proofEyebrow: "In practice",
      proofTitle: "What people can actually do here",
      proofDescription:
        "Instead of generic product claims, these examples show the kind of quick jobs the current tools can already help finish.",
      proofExamples: [
        {
          title: "Clean up copied text fast",
          description:
            "Use the case converter when a title, note, or rough text block needs to be reformatted and copied immediately.",
          toolSlug: "case-converter",
          toolName: "Case Converter",
          inputLabel: "Example input",
          input: "launch your next creator page with cleaner text",
          outputLabel: "Useful output",
          output:
            "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
        },
        {
          title: "Generate a publishable profile bio",
          description:
            "Use the bio generator to compare short platform-specific options instead of writing from scratch every time.",
          toolSlug: "bio-generator",
          toolName: "Bio Generator",
          inputLabel: "Example setup",
          input: "Platform: Instagram\nTone: Cool\nLength: Balanced\nCTA: On",
          outputLabel: "Useful output",
          output:
            "clean visuals, steady presence\nsimple content, strong identity\nopen to collabs",
        },
        {
          title: "Create a usable handle direction",
          description:
            "Use the nickname generator when you need a cleaner handle shortlist for social, gaming, or creator profiles.",
          toolSlug: "nickname-generator",
          toolName: "Nickname Generator",
          inputLabel: "Example setup",
          input: "Keyword: orbit\nStyle: Cool\nLength: Short\nPronounceable: On",
          outputLabel: "Useful output",
          output: "orbitlane\nvexaflow\nsorashift",
        },
      ],
      whyEyebrow: "Why Toolyflow",
      whyTitle: "What the product is trying to get right",
      whyDescription:
        "The goal is not to sound bigger than the product. The goal is to make a few useful pages easier to trust, easier to use, and easier to revisit.",
      brandPoints: [
        {
          title: "Useful fast",
          description:
            "A visitor should be able to paste, generate, or convert something useful within seconds of landing on the page.",
        },
        {
          title: "Clear scope",
          description:
            "The site is being narrowed around text workflows and creator workflows so the product feels more coherent and less random.",
        },
        {
          title: "Worth returning to",
          description:
            "Pages should stay calm, readable, and lightweight enough that users do not mind coming back for the same task again.",
        },
      ],
      pathsEyebrow: "Start here",
      pathsTitle: "Stronger paths into the tool library",
      pathsDescription:
        "These link groups are the clearest ways into the current product instead of making visitors guess where to start.",
      paths: [
        {
          title: "Text cleanup path",
          description:
            "Start with formatting or cleanup tasks, then move into other text workflows as the library grows.",
          links: [
            { label: "Case Converter", slug: "case-converter" },
          ],
        },
        {
          title: "Creator profile path",
          description:
            "Build or refine bios, profile handles, and supporting creator assets in one cluster.",
          links: [
            { label: "Bio Generator", slug: "bio-generator" },
            { label: "Nickname Generator", slug: "nickname-generator" },
            { label: "QR Code Generator", slug: "qr-generator" },
          ],
        },
        {
          title: "Quick utility path",
          description:
            "Use a lighter utility when you need a simple output fast without leaving the main workflow.",
          links: [
            { label: "QR Code Generator", slug: "qr-generator" },
            { label: "Decision Wheel", slug: "decision-wheel" },
          ],
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
          "Learn who runs Toolyflow, why it exists, and how the product is being built around useful online tools.",
        keywords: ["about toolyflow", "online tools website", "free online tools"],
        eyebrow: "About Toolyflow",
        title: "A focused tools product built for everyday utility",
        description:
          "Toolyflow is being built as a practical online tools product focused on fast utility, clear output, and pages people can trust enough to reuse.",
        sections: [
          {
            title: "Who runs Toolyflow",
            body:
              "Toolyflow is operated as an independent web product focused on building useful browser-based tools without unnecessary account friction or heavy backend complexity.",
          },
          {
            title: "Why Toolyflow exists",
            body:
              "The product exists to solve small repeat tasks quickly. Instead of making users jump across cluttered pages, Toolyflow aims to keep core workflows clean, fast, and easy to return to.",
          },
          {
            title: "What the product is focused on",
            body:
              "Toolyflow is currently centered on text tools, creator tools, and a smaller layer of quick utilities. The direction is deliberate: fewer categories, stronger pages, and more useful outputs.",
            items: [
              "Text tools for cleanup, formatting, and quick writing tasks.",
              "Creator tools for bios, names, handles, and profile workflows.",
              "A smaller utility layer for lightweight tasks that still fit the product.",
            ],
          },
          {
            title: "How the product is built",
            body:
              "The goal is to ship useful pages, not over-engineer the stack. Most tools run client-side so the site can stay faster, easier to maintain, and more dependable across phone, tablet, and desktop screens.",
          },
          {
            title: "How to contact the team",
            body:
              "Use the contact addresses below depending on the reason for your message. Support and bug reports should stay separate from general business conversations so nothing gets lost.",
            items: [
              "Use info@toolyflow.com for tool issues, support questions, and general site feedback.",
              "Use hello@toolyflow.com for partnerships, advertising, collaborations, and business inquiries.",
            ],
            emailLabel: "General contact",
            email: "hello@toolyflow.com",
          },
        ],
      },
      contact: {
        slug: "contact",
        metaTitle: "Contact",
        metaDescription:
          "Contact Toolyflow for support, partnerships, advertising, or general questions about the website.",
        keywords: ["contact toolyflow", "toolyflow support", "online tools contact"],
        eyebrow: "Contact",
        title: "Reach the Toolyflow team",
        description:
          "Use the right contact route below for support, bug reports, partnerships, advertising, or general product questions.",
        sections: [
          {
            title: "Support and site issues",
            body:
              "For tool issues, broken pages, feedback, or general support, contact the support inbox first.",
            items: [
              "Best for bug reports and page errors.",
              "Best for feedback about tool quality or usability.",
              "Best for general questions about how the site works.",
            ],
            emailLabel: "Support email",
            email: "info@toolyflow.com",
          },
          {
            title: "Partnerships, ads, and business",
            body:
              "For partnerships, sponsorships, advertising, or other business conversations, use the business inbox so those requests stay separate from support traffic.",
            items: [
              "Include your company or project name.",
              "Explain the type of collaboration you want.",
              "Add timeline, budget range, or campaign details if relevant.",
            ],
            emailLabel: "Business email",
            email: "hello@toolyflow.com",
          },
          {
            title: "What to include in support emails",
            body:
              "The clearer the report, the faster it can be reviewed and reproduced.",
            items: [
              "The exact page URL where the issue happened.",
              "Your device, browser, and screen type if possible.",
              "A short note explaining what you expected and what actually happened.",
            ],
          },
          {
            title: "Response flow",
            body:
              "Messages are reviewed manually. Tool reports, product feedback, and business requests may be answered on different timelines depending on volume and priority.",
            items: [
              "Support messages should stay focused and include enough detail to reproduce the issue.",
              "Business requests should clearly state the purpose of the outreach.",
              "If you are unsure which inbox to use, send the message to hello@toolyflow.com.",
            ],
          },
        ],
      },
      "privacy-policy": {
        slug: "privacy-policy",
        metaTitle: "Privacy Policy",
        metaDescription:
          "Read the Toolyflow privacy policy to understand cookies, advertising services, consent, and how browser-based tools handle visitor data.",
        keywords: ["toolyflow privacy policy", "online tools privacy", "website privacy policy"],
        eyebrow: "Privacy Policy",
        title: "Privacy policy",
        description:
          "This page explains how Toolyflow handles browser-based tool input, cookies, third-party services, advertising technologies, and visitor consent.",
        sections: [
          {
            title: "Information handling",
            body:
              "Toolyflow is designed to keep the first version lightweight. Most tools run directly in the browser, which means user input is generally processed client-side instead of being sent to a backend service.",
          },
          {
            title: "Cookies and local browser storage",
            body:
              "Toolyflow and its service providers may use cookies, local storage, or similar technologies to keep the site working, understand traffic, remember limited preferences, measure performance, and support advertising.",
            items: [
              "Cookies may be used for site functionality, analytics, and advertising-related measurement.",
              "Some browser storage may be created directly by embedded services or advertising technology.",
              "You can control or delete cookies from your browser settings at any time.",
            ],
          },
          {
            title: "Advertising and third-party vendors",
            body:
              "Toolyflow may work with third-party vendors, including Google, to serve ads, measure ad performance, and understand how visitors use the site. Those vendors may use cookies, web beacons, identifiers, IP address information, browser data, and page interaction signals to show or measure advertising.",
            items: [
              "Google and other vendors may use cookies to serve ads based on prior visits to this site or other websites.",
              "Third-party advertising vendors may combine technical browser and device signals for ad delivery, frequency control, fraud prevention, and reporting.",
              "Hosting, analytics, security, and advertising partners may process technical data needed to operate their services.",
            ],
          },
          {
            title: "Consent and visitor choices",
            body:
              "Where required by applicable law, Toolyflow may request consent before using non-essential cookies or certain advertising technologies. Consent choices may affect how advertising, analytics, or personalization features behave on the site.",
            items: [
              "You may be asked to accept, reject, or manage certain cookie categories.",
              "Withdrawing consent later may reduce personalized advertising or analytics functionality.",
              "You can also manage many advertising preferences directly through your browser or Google ad settings.",
            ],
          },
          {
            title: "Contact for privacy questions",
            body:
              "If you have a privacy-related question about how Toolyflow handles visitor data, cookies, or advertising services, use the address below.",
            emailLabel: "Privacy contact",
            email: "info@toolyflow.com",
          },
          {
            title: "Policy updates",
            body:
              "This policy may be updated as the product grows. Any future changes will be reflected on this page with the latest published version.",
          },
          {
            title: "Analytics and service providers",
            body:
              "Toolyflow may use analytics, hosting, security, or advertising services to understand site traffic, keep the website available, and support future monetization. Those providers may process technical information such as browser type, device data, and page visits.",
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
        content: {
          howToUseTitle: "How to use the bio generator",
          howToUseDescription:
            "The strongest results come from picking a clear platform and tone first, then trimming the options to the one that actually sounds like your profile.",
          howToUseSteps: [
            {
              title: "Choose the platform and tone",
              body:
                "Start with the platform you are writing for, then pick the tone that matches how you want to sound: clean, bold, personal, minimal, or more mysterious.",
            },
            {
              title: "Set the format filters",
              body:
                "Adjust the length, emoji toggle, and CTA line so the batch stays close to the type of bio you would realistically publish.",
            },
            {
              title: "Generate, compare, and copy",
              body:
                "Generate a fresh batch, compare the strongest options side by side, and copy the version that fits your profile without extra editing.",
            },
          ],
          useCasesTitle: "Best use cases",
          useCasesDescription:
            "This tool works best when you need multiple profile-ready bio options quickly instead of writing from scratch every time.",
          useCases: [
            {
              title: "Refresh a creator profile",
              description:
                "Generate cleaner options when your Instagram, TikTok, X, YouTube, or Twitch bio feels flat, outdated, or too generic.",
            },
            {
              title: "Launch a new channel",
              description:
                "Use the tool to find a tighter first bio when opening a new creator account and you want the profile to look intentional from day one.",
            },
            {
              title: "Test different positioning",
              description:
                "Compare a minimal, sharp, playful, or more professional direction before you update your public profile.",
            },
          ],
          examplesTitle: "Examples",
          examplesDescription:
            "These are the kinds of concise bios the page should help you arrive at after a few generate cycles.",
          examples: [
            {
              title: "Instagram creator bio",
              inputLabel: "Setup",
              input: "Platform: Instagram\nTone: Cool\nLength: Balanced\nEmoji: Off\nCTA: On",
              outputLabel: "Example output",
              output: "clean visuals, steady presence\nsimple content, strong identity\nopen to collabs",
              note: "Works when you want a direct creator profile without sounding overwritten.",
            },
            {
              title: "YouTube channel bio",
              inputLabel: "Setup",
              input: "Platform: YouTube\nTone: Professional\nLength: Short\nEmoji: Off\nCTA: Off",
              outputLabel: "Example output",
              output: "clear voice, steady uploads\nbuilding useful videos consistently",
              note: "Good for channel pages that should feel credible and structured.",
            },
          ],
          faqTitle: "Bio generator FAQ",
          faqs: [
            {
              question: "Does the bio generator create different results every time?",
              answer:
                "Yes. Each generate action returns a fresh batch so you can compare multiple directions instead of getting one locked answer.",
            },
            {
              question: "Which platforms does the bio generator support?",
              answer:
                "The tool is tuned for Instagram, TikTok, X, YouTube, and Twitch so the output feels closer to how those profiles are usually written.",
            },
            {
              question: "Can I use the results as-is?",
              answer:
                "Yes, but the best workflow is to generate a few batches, pick the strongest line set, and make a small final tweak so it feels personal.",
            },
          ],
        },
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
        content: {
          howToUseTitle: "How to use the nickname generator",
          howToUseDescription:
            "The best nickname results usually come from a clear vibe, shorter lengths, and only light styling unless you specifically want a louder handle.",
          howToUseSteps: [
            {
              title: "Start with a vibe or keyword",
              body:
                "Enter a short keyword if you have one, or leave it broad and let the style steer the batch toward a cleaner handle direction.",
            },
            {
              title: "Choose style, length, and symbols",
              body:
                "Use the filters to decide whether the results should feel cool, dark, gaming, or aesthetic, then keep the length and symbol style aligned with the platforms you care about.",
            },
            {
              title: "Refresh until one feels claimable",
              body:
                "Generate a new batch until you get a nickname that looks usable, sounds good when read aloud, and feels worth keeping.",
            },
          ],
          useCasesTitle: "Best use cases",
          useCasesDescription:
            "This tool is strongest when you need a handle-style name that looks good fast, not a literal dictionary word.",
          useCases: [
            {
              title: "Gaming tags and usernames",
              description:
                "Generate shorter handles that feel sharper on Discord, Twitch, Steam, or in-game profiles.",
            },
            {
              title: "Creator alias brainstorming",
              description:
                "Use it to find a more ownable nickname before you settle on a public username or brand-facing alias.",
            },
            {
              title: "Aesthetic or dark profile handles",
              description:
                "Test multiple vibes quickly when the goal is style, tone, and memorability rather than literal meaning.",
            },
          ],
          examplesTitle: "Examples",
          examplesDescription:
            "Strong outputs should feel short enough to use, easy enough to remember, and distinct enough to own.",
          examples: [
            {
              title: "Cool profile handle",
              inputLabel: "Setup",
              input: "Keyword: orbit\nStyle: Cool\nLength: Short\nSymbols: Clean\nPronounceable: On",
              outputLabel: "Example output",
              output: "orbitlane\nvexaflow\nsorashift",
              note: "These feel closer to usable handles than random broken syllables.",
            },
            {
              title: "Dark gaming nickname",
              inputLabel: "Setup",
              input: "Keyword: raven\nStyle: Dark\nLength: Balanced\nSymbols: Light\nPronounceable: Off",
              outputLabel: "Example output",
              output: "ravenveil\nnoxdrift\nonyxmark",
              note: "Useful when you want something moodier without becoming unreadable.",
            },
          ],
          faqTitle: "Nickname generator FAQ",
          faqs: [
            {
              question: "Will the nickname generator return a new batch each time?",
              answer:
                "Yes. Every generate action rotates to a fresh batch so you can keep exploring new handle directions with the same settings.",
            },
            {
              question: "Is the goal literal meaning or a good-looking handle?",
              answer:
                "The goal is a nickname that looks usable and feels right for the vibe you picked. A strong result does not always need a strict dictionary meaning.",
            },
            {
              question: "Should I keep symbols on?",
              answer:
                "Usually start with clean or light styling first. It keeps the nickname more readable and easier to reuse across platforms.",
            },
          ],
        },
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
        content: {
          howToUseTitle: "How to use the QR code generator",
          howToUseDescription:
            "The tool works best when you choose the right QR type first, then confirm the preview before downloading the final file.",
          howToUseSteps: [
            {
              title: "Pick the QR type",
              body:
                "Choose URL, text, email, phone, or WiFi so the encoded content matches the action you want people to take after scanning.",
            },
            {
              title: "Fill in the details and preview",
              body:
                "Enter the content, adjust the size and colors if needed, and make sure the live preview still looks clean and scannable.",
            },
            {
              title: "Download the format you need",
              body:
                "Export the final QR code as PNG for quick sharing or SVG when you want a cleaner scalable file for print and design use.",
            },
          ],
          useCasesTitle: "Best use cases",
          useCasesDescription:
            "QR codes are most useful when you need a fast bridge between offline surfaces and a clean digital destination.",
          useCases: [
            {
              title: "Menu, event, or profile links",
              description:
                "Turn a landing page, menu, booking page, or creator profile into a scannable code in seconds.",
            },
            {
              title: "WiFi and contact sharing",
              description:
                "Create quick QR codes for guest WiFi, email addresses, or phone numbers when you want a cleaner handoff than typing details manually.",
            },
            {
              title: "Posters, print assets, and packaging",
              description:
                "Use the SVG download for cleaner print workflows when you need the code to stay sharp at different sizes.",
            },
          ],
          examplesTitle: "Examples",
          examplesDescription:
            "These setups show the kinds of QR outputs people usually create on a utility page like this.",
          examples: [
            {
              title: "Website link QR",
              inputLabel: "Setup",
              input: "Type: URL\nValue: https://toolyflow.com/en/bio-generator\nSize: 320 px",
              outputLabel: "Result",
              output: "A scannable website QR ready for PNG or SVG download.",
              note: "Useful for flyers, profile cards, and quick share flows.",
            },
            {
              title: "Guest WiFi QR",
              inputLabel: "Setup",
              input: "Type: WiFi\nSSID: StudioGuest\nPassword: CreateFast24\nSecurity: WPA",
              outputLabel: "Result",
              output: "A QR that lets visitors join the network without typing the password manually.",
              note: "A practical use case for cafes, studios, offices, and events.",
            },
          ],
          faqTitle: "QR code generator FAQ",
          faqs: [
            {
              question: "Can I generate QR codes for more than just URLs?",
              answer:
                "Yes. The tool supports URL, text, email, phone, and WiFi modes so the code can match the type of action you need.",
            },
            {
              question: "Should I download PNG or SVG?",
              answer:
                "PNG is usually enough for quick digital use. SVG is better when you need a scalable file for print or design work.",
            },
            {
              question: "Does the QR code update live?",
              answer:
                "Yes. The preview updates as you change the content and settings, which makes it easier to confirm the final output before downloading.",
            },
          ],
        },
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
        content: {
          howToUseTitle: "How to use the case converter",
          howToUseDescription:
            "The page is built for quick compare-and-copy workflows, so the main idea is to paste once, review multiple formats, and copy the right one immediately.",
          howToUseSteps: [
            {
              title: "Paste the source text",
              body:
                "Drop in the text you want to clean up or reformat. The tool calculates the output views instantly as you type or paste.",
            },
            {
              title: "Compare the output formats",
              body:
                "Review uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, and kebab-case side by side without leaving the page.",
            },
            {
              title: "Copy the exact result you need",
              body:
                "Use the copy action on the card that matches your workflow, whether you are fixing copy, naming fields, or formatting titles.",
            },
          ],
          useCasesTitle: "Best use cases",
          useCasesDescription:
            "This tool is strongest when text needs to move quickly between content, product, and development contexts.",
          useCases: [
            {
              title: "Headlines and content cleanup",
              description:
                "Switch between sentence case, title case, upper, or lower when editing headlines, captions, and notes.",
            },
            {
              title: "Developer naming formats",
              description:
                "Generate camelCase, PascalCase, snake_case, or kebab-case versions for variables, routes, and field names.",
            },
            {
              title: "Bulk formatting checks",
              description:
                "Keep multiple output styles visible at once so you can compare and copy the right version without extra steps.",
            },
          ],
          examplesTitle: "Examples",
          examplesDescription:
            "A good case converter should make input and output differences obvious at a glance.",
          examples: [
            {
              title: "Headline formatting",
              inputLabel: "Input",
              input: "build fast tools without extra friction",
              outputLabel: "Output",
              output: "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
              note: "Useful when you are deciding between editorial styles quickly.",
            },
            {
              title: "Developer naming",
              inputLabel: "Input",
              input: "fast online tools",
              outputLabel: "Output",
              output: "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
              note: "Handy for slugs, variables, and simple naming tasks.",
            },
          ],
          faqTitle: "Case converter FAQ",
          faqs: [
            {
              question: "Which formats can I copy from the case converter?",
              answer:
                "The page gives you uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text, and a single-line cleanup output.",
            },
            {
              question: "Can I compare multiple text formats at the same time?",
              answer:
                "Yes. The outputs stay visible together so you can compare styles and copy the right one without opening another page.",
            },
            {
              question: "Is the case converter useful for development work too?",
              answer:
                "Yes. It is useful for both writing tasks and developer naming tasks, especially when switching between content and code-friendly formats.",
            },
          ],
        },
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
        content: {
          howToUseTitle: "How to use the decision wheel",
          howToUseDescription:
            "This tool is intentionally lightweight. Add clear options, spin once, and use the result when you want a quick decision without overthinking.",
          howToUseSteps: [
            {
              title: "Add the choices you want to compare",
              body:
                "Enter each option as a separate line so the wheel can distribute the choices clearly before the spin begins.",
            },
            {
              title: "Spin the wheel",
              body:
                "Start the spin and let the wheel land on one final result instead of manually debating similar options.",
            },
            {
              title: "Use the result or reshuffle",
              body:
                "Accept the outcome for a quick decision, or update the list and spin again if the option set itself needs work.",
            },
          ],
          useCasesTitle: "Best use cases",
          useCasesDescription:
            "The wheel is most helpful for small decisions where speed matters more than deep analysis.",
          useCases: [
            {
              title: "Content and naming picks",
              description:
                "Pick between post ideas, title options, or shortlists when you want a quick tie-breaker.",
            },
            {
              title: "Team micro-decisions",
              description:
                "Use it for lightweight team choices like order, rotation, or quick activity selection.",
            },
            {
              title: "Personal choice cleanup",
              description:
                "Break indecision on small daily options without leaving the page.",
            },
          ],
          examplesTitle: "Examples",
          examplesDescription:
            "The best use cases are short lists with a real need for a simple final pick.",
          examples: [
            {
              title: "Content idea shortlist",
              inputLabel: "Input",
              input: "Behind the scenes\nNew tool demo\nWorkflow tips\nLaunch update",
              outputLabel: "Result",
              output: "The wheel lands on one option and shows a single final pick.",
              note: "Helpful when a shortlist is already good enough and you just need a final choice.",
            },
            {
              title: "Lunch rotation",
              inputLabel: "Input",
              input: "Pizza\nSushi\nSalad\nBurgers",
              outputLabel: "Result",
              output: "One choice is selected after the spin.",
              note: "A straightforward everyday use case for the utility layer.",
            },
          ],
          faqTitle: "Decision wheel FAQ",
          faqs: [
            {
              question: "What is the decision wheel best for?",
              answer:
                "It is best for quick low-stakes choices where a simple random pick is faster than discussing the options for too long.",
            },
            {
              question: "Can I edit the options before I spin?",
              answer:
                "Yes. You can rewrite the option list before spinning so the wheel only includes the choices you actually want to consider.",
            },
            {
              question: "Is the wheel part of the main Toolyflow focus?",
              answer:
                "It sits in the lighter utility layer. The main product focus is still text tools and creator tools.",
            },
          ],
        },
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
  const staticPageSlugs: StaticPageContent["slug"][] = [
    "about",
    "contact",
    "privacy-policy",
    "terms-of-service",
  ];

  return {
    ...base,
    ...overrides,
    languageName: localeLabels[locale],
    header: { ...base.header, ...overrides.header } as Dictionary["header"],
    footer: { ...base.footer, ...overrides.footer } as Dictionary["footer"],
    shared: { ...base.shared, ...overrides.shared } as Dictionary["shared"],
    home: { ...base.home, ...overrides.home } as Dictionary["home"],
    staticPages: Object.fromEntries(
      staticPageSlugs.map((slug) => {
        const basePage = base.staticPages[slug];
        const overridePage = overrides.staticPages?.[slug];

        return [
          slug,
          overridePage
            ? {
                ...basePage,
                ...overridePage,
                sections: overridePage.sections ?? basePage.sections,
              }
            : basePage,
        ];
      })
    ) as Dictionary["staticPages"],
    tools: Object.fromEntries(
      baseToolSlugs.map((slug) => {
        const baseTool = base.tools[slug];
        const overrideTool = overrides.tools?.[slug];

        return [
          slug,
          overrideTool
            ? {
                ...baseTool,
                ...overrideTool,
                highlights: overrideTool.highlights ?? baseTool.highlights,
                keywords: overrideTool.keywords ?? baseTool.keywords,
                content: overrideTool.content
                  ? {
                      ...baseTool.content,
                      ...overrideTool.content,
                      howToUseSteps:
                        overrideTool.content.howToUseSteps ?? baseTool.content.howToUseSteps,
                      useCases: overrideTool.content.useCases ?? baseTool.content.useCases,
                      examples: overrideTool.content.examples ?? baseTool.content.examples,
                      faqs: overrideTool.content.faqs ?? baseTool.content.faqs,
                    }
                  : baseTool.content,
              }
            : baseTool,
        ];
      })
    ) as Dictionary["tools"],
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
    menu: "Menüyü aç",
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
      { label: "Ana araç sayfası", value: "4 canlı" },
      { label: "Kapsam", value: "6 dil" },
      { label: "İçerikli araç sayfası", value: "4 rehberli" },
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
    proofEyebrow: "Pratikte",
    proofTitle: "Burada gerçekten hangi işler çözülebilir",
    proofDescription:
      "Genel ürün iddiaları yerine, mevcut araçların bugün hangi küçük işleri gerçekten bitirebildiğini gösteren örnekler burada durur.",
    proofExamples: [
      {
        title: "Kopyalanmış metni hızlıca düzenlemek",
        description:
          "Case Converter; başlık, not veya ham metni hızlıca biçimlendirip doğru formatta kopyalamak için kullanılır.",
        toolSlug: "case-converter",
        toolName: "Case Converter",
        inputLabel: "Örnek girdi",
        input: "launch your next creator page with cleaner text",
        outputLabel: "İşe yarayan çıktı",
        output:
          "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
      },
      {
        title: "Yayınlanabilir bir bio üretmek",
        description:
          "Bio Generator; her seferinde sıfırdan yazmak yerine kısa ve platforma uygun bio alternatiflerini karşılaştırmak için kullanılır.",
        toolSlug: "bio-generator",
        toolName: "Bio Generator",
        inputLabel: "Örnek kurulum",
        input: "Platform: Instagram\nTon: Cool\nUzunluk: Dengeli\nCTA: Açık",
        outputLabel: "İşe yarayan çıktı",
        output:
          "net görsel, düzenli enerji\ntemiz içerik, güçlü stil\niş birliklerine açık",
      },
      {
        title: "Kullanılabilir bir handle yönü bulmak",
        description:
          "Nickname Generator; sosyal medya, oyun veya creator profilleri için daha temiz bir nickname shortlist’i oluşturur.",
        toolSlug: "nickname-generator",
        toolName: "Nickname Generator",
        inputLabel: "Örnek kurulum",
        input: "Kelime: orbit\nStil: Cool\nUzunluk: Kısa\nOkunabilirlik: Açık",
        outputLabel: "İşe yarayan çıktı",
        output: "orbitlane\nvexaflow\nsorashift",
      },
    ],
    whyEyebrow: "Neden Toolyflow",
    whyTitle: "Ürünün doğru yapmaya çalıştığı şeyler",
    whyDescription:
      "Amaç ürünü olduğundan büyük göstermek değil; birkaç faydalı aracı daha güvenilir, daha net ve daha tekrar kullanılabilir hale getirmek.",
    brandPoints: [
      {
        title: "Hızlıca iş görmeli",
        description:
          "Bir ziyaretçi sayfaya geldiğinde saniyeler içinde yapıştırma, üretme veya dönüştürme gibi işe yarayan ilk aksiyonu alabilmeli.",
      },
      {
        title: "Kapsam net olmalı",
        description:
          "Site metin iş akışları ve creator iş akışları etrafında daraldıkça daha tutarlı ve daha az rastgele hissettirmeli.",
      },
      {
        title: "Geri dönmeye değer olmalı",
        description:
          "Sayfalar sakin, okunabilir ve hafif kalmalı ki kullanıcı aynı iş için yeniden gelmekten çekinmesin.",
      },
    ],
    pathsEyebrow: "Başlangıç yolları",
    pathsTitle: "Araç kütüphanesine daha net girişler",
    pathsDescription:
      "Ziyaretçinin nereden başlayacağını tahmin etmesini beklemek yerine, mevcut ürünün en net giriş yolları burada verilir.",
    paths: [
      {
        title: "Metin düzenleme yolu",
        description:
          "Biçimlendirme ve temizlik işleriyle başlayıp zamanla büyüyecek metin araç katmanına girin.",
        links: [
          { label: "Case Converter", slug: "case-converter" },
        ],
      },
      {
        title: "Creator profil yolu",
        description:
          "Bio, nickname ve destekleyici creator araçlarını aynı cluster içinde kullanın.",
        links: [
          { label: "Bio Generator", slug: "bio-generator" },
          { label: "Nickname Generator", slug: "nickname-generator" },
          { label: "QR Code Generator", slug: "qr-generator" },
        ],
      },
      {
        title: "Hızlı utility yolu",
        description:
          "Ana akıştan kopmadan basit bir çıktıyı hızlıca almak için daha hafif araçlara gidin.",
        links: [
          { label: "QR Code Generator", slug: "qr-generator" },
          { label: "Decision Wheel", slug: "decision-wheel" },
        ],
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
        "Toolyflow’u kimin işlettiğini, neden kurulduğunu ve ürünün hangi mantıkla geliştirildiğini öğrenin.",
      keywords: ["toolyflow hakkında", "online araç sitesi", "ücretsiz online araçlar"],
      eyebrow: "Toolyflow Hakkında",
      title: "Günlük utility işleri için kurulan odaklı bir ürün",
      description:
        "Toolyflow; hızlı utility, net çıktı ve tekrar ziyaret edilmeye değer sayfalar üretmek için geliştirilen pratik bir online tools ürünüdür.",
      sections: [
        {
          title: "Toolyflow’u kim işletiyor",
          body:
            "Toolyflow, gereksiz hesap adımları ve ağır sistemler kurmadan tarayıcı içinde çalışan kullanışlı araçlar üretmeye odaklanan bağımsız bir web ürünüdür.",
        },
        {
          title: "Neden kuruldu",
          body:
            "Amaç; küçük ama tekrar eden işleri hızlıca çözmek. Kullanıcıların dağınık ve düşük kaliteli araçlar arasında gezinmek zorunda kalmadan temiz, hızlı ve tekrar kullanılabilir sayfalara ulaşabilmesi hedefleniyor.",
        },
        {
          title: "Ürün neye odaklanıyor",
          body:
            "Toolyflow şu anda metin araçları, creator araçları ve daha küçük bir hızlı utility katmanı üzerine kuruluyor. Yön bilinçli biçimde dar tutuluyor: daha az kategori, daha güçlü sayfalar, daha kullanışlı çıktılar.",
          items: [
            "Temizlik, biçimlendirme ve hızlı yazı işleri için metin araçları.",
            "Bio, isim, handle ve profil akışları için creator araçları.",
            "Ürünü destekleyen hafif utility sayfaları.",
          ],
        },
        {
          title: "Nasıl geliştiriliyor",
          body:
            "Amaç teknoloji gösterisi yapmak değil, çalışan sayfalar üretmek. Bu yüzden araçların çoğu client-side çalışır; site telefon, tablet ve masaüstünde daha hızlı, daha hafif ve daha bakımı kolay kalır.",
        },
        {
          title: "Ekibe nasıl ulaşılır",
          body:
            "Mesajın konusuna göre doğru adrese yazmak, destek ve iş birliği süreçlerinin karışmamasını sağlar.",
          items: [
            "Araç hataları, destek ve genel geri bildirim için info@toolyflow.com adresini kullanın.",
            "İş birliği, reklam ve ticari konular için hello@toolyflow.com adresini kullanın.",
          ],
          emailLabel: "Genel iletişim",
          email: "hello@toolyflow.com",
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
        "Destek, hata bildirimi, iş birlikleri, reklam veya genel ürün soruları için aşağıdaki iletişim akışını kullanın.",
      sections: [
        {
          title: "Destek ve site sorunları",
          body:
            "Araç hataları, çalışan ama yanlış sonuç veren sayfalar, genel geri bildirim veya destek talepleri için önce destek adresine yazın.",
          items: [
            "Araç hataları ve bozuk sayfalar için uygundur.",
            "Kullanılabilirlik ve çıktı kalitesi geri bildirimi için uygundur.",
            "Sitenin çalışma mantığıyla ilgili genel sorular için uygundur.",
          ],
          emailLabel: "Destek e-postası",
          email: "info@toolyflow.com",
        },
        {
          title: "İş birlikleri, reklam ve ticari konular",
          body:
            "İş birliği, sponsorluk, reklam veya başka bir ticari görüşme için business inbox kullanılmalıdır; böylece destek mesajlarıyla karışmaz.",
          items: [
            "Şirket veya proje adınızı belirtin.",
            "Nasıl bir iş birliği düşündüğünüzü açık yazın.",
            "Varsa zamanlama, bütçe veya kampanya detaylarını ekleyin.",
          ],
          emailLabel: "Business e-postası",
          email: "hello@toolyflow.com",
        },
        {
          title: "Destek e-postasına neler eklenmeli",
          body:
            "Mesaj ne kadar net olursa sorun o kadar hızlı incelenebilir.",
          items: [
            "Sorunun yaşandığı tam sayfa URL’si.",
            "Mümkünse kullandığınız cihaz, tarayıcı ve ekran tipi.",
            "Ne beklediğinizi ve gerçekte ne olduğunu anlatan kısa açıklama.",
          ],
        },
        {
          title: "Yanıt akışı",
          body:
            "Mesajlar manuel olarak incelenir. Destek talepleri, ürün geri bildirimleri ve ticari görüşmeler yoğunluk ve önceliğe göre farklı sürelerde yanıtlanabilir.",
          items: [
            "Destek mesajlarını kısa ve tekrar üretilebilir detaylarla yazın.",
            "Ticari mesajlarda amacınızı ilk paragrafta netleştirin.",
            "Hangi adrese yazmanız gerektiğinden emin değilseniz hello@toolyflow.com adresini kullanın.",
          ],
        },
      ],
    },
    "privacy-policy": {
      slug: "privacy-policy",
      metaTitle: "Gizlilik Politikası",
      metaDescription:
        "Toolyflow gizlilik politikasını okuyun; çerezler, reklam servisleri, üçüncü taraf sağlayıcılar ve ziyaretçi onayı hakkında bilgi alın.",
      keywords: ["toolyflow gizlilik politikası", "online araçlar gizlilik", "site gizlilik politikası"],
      eyebrow: "Gizlilik Politikası",
      title: "Gizlilik politikası",
      description:
        "Bu sayfa Toolyflow’un tarayıcı tabanlı araçları, çerezleri, üçüncü taraf servisleri, reklam teknolojileri ve ziyaretçi onayını nasıl ele aldığını açıklar.",
      sections: [
        {
          title: "Bilgi işleme",
          body:
            "Toolyflow ilk sürümde hafif kalacak şekilde tasarlanmıştır. Araçların çoğu doğrudan tarayıcıda çalıştığı için kullanıcı girdileri genellikle backend’e gönderilmeden client-side işlenir.",
        },
        {
          title: "Çerezler ve tarayıcı içi depolama",
          body:
            "Toolyflow ve servis sağlayıcıları; sitenin çalışması, trafik ölçümü, sınırlı tercihlerin hatırlanması, performans analizi ve reklam desteği için çerezler, local storage veya benzer teknolojiler kullanabilir.",
          items: [
            "Çerezler site işlevleri, analitik ve reklam ölçümü için kullanılabilir.",
            "Bazı tarayıcı verileri doğrudan gömülü servisler veya reklam teknolojileri tarafından oluşturulabilir.",
            "Çerezleri tarayıcı ayarlarınız üzerinden istediğiniz zaman yönetebilir veya silebilirsiniz.",
          ],
        },
        {
          title: "Reklam servisleri ve üçüncü taraf sağlayıcılar",
          body:
            "Toolyflow, reklam göstermek, reklam performansını ölçmek ve site kullanımını anlamak için Google dahil üçüncü taraf sağlayıcılarla çalışabilir. Bu sağlayıcılar reklam sunumu ve ölçümü için çerez, web beacon, tanımlayıcı, IP adresi, tarayıcı bilgisi ve sayfa etkileşimi gibi teknik sinyalleri kullanabilir.",
          items: [
            "Google ve diğer sağlayıcılar, bu siteye veya başka sitelere yapılan önceki ziyaretlere göre reklam göstermek için çerez kullanabilir.",
            "Üçüncü taraf reklam sağlayıcıları; reklam sunumu, frekans kontrolü, sahtecilik önleme ve raporlama için teknik verileri işleyebilir.",
            "Hosting, analitik, güvenlik ve reklam ortakları kendi hizmetlerini çalıştırmak için gerekli teknik verileri işleyebilir.",
          ],
        },
        {
          title: "Onay ve ziyaretçi tercihleri",
          body:
            "Yürürlükteki mevzuatın gerekli olduğu durumlarda Toolyflow, zorunlu olmayan çerezler veya belirli reklam teknolojileri kullanılmadan önce ziyaretçiden onay isteyebilir. Verilen onay, reklam ve ölçüm özelliklerinin nasıl çalıştığını etkileyebilir.",
          items: [
            "Bazı çerez kategorileri için kabul, red veya tercih yönetimi ekranı gösterilebilir.",
            "Onayın geri çekilmesi, kişiselleştirilmiş reklam veya analitik işlevlerini azaltabilir.",
            "Birçok reklam tercihine tarayıcı ayarlarından veya Google reklam ayarlarından da müdahale edebilirsiniz.",
          ],
        },
        {
          title: "Gizlilik soruları için iletişim",
          body:
            "Çerezler, reklam servisleri veya ziyaretçi verileriyle ilgili gizlilik soruları için aşağıdaki adrese yazabilirsiniz.",
          emailLabel: "Gizlilik iletişimi",
          email: "info@toolyflow.com",
        },
        {
          title: "Politika güncellemeleri",
          body:
            "Ürün büyüdükçe bu politika güncellenebilir. Değişiklikler en güncel sürüm olarak bu sayfada yayınlanır.",
        },
        {
          title: "Analitik ve servis sağlayıcılar",
          body:
            "Toolyflow; trafik takibi, site sürekliliği ve gelecekteki gelir modeli için analitik, hosting, güvenlik veya reklam servisleri kullanabilir. Bu servisler tarayıcı tipi, cihaz bilgisi ve sayfa ziyaretleri gibi teknik verileri işleyebilir.",
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
      content: {
        howToUseTitle: "Bio generator nasıl kullanılır",
        howToUseDescription:
          "En iyi sonuç için önce platformu ve tonu seçin, sonra gerçekten profilinizde durabilecek bio alternatifleri arasından seçim yapın.",
        howToUseSteps: [
          {
            title: "Platformu ve tonu seçin",
            body:
              "Bio’nun yayınlanacağı platformu seçin, ardından profilinizin havasına uyan tonu belirleyin: clean, güçlü, kişisel, minimal veya daha gizemli.",
          },
          {
            title: "Format filtrelerini ayarlayın",
            body:
              "Uzunluk, emoji ve CTA satırı seçeneklerini düzenleyerek çıkan batch’in gerçekten kullanabileceğiniz bio formatına yaklaşmasını sağlayın.",
          },
          {
            title: "Üretin, karşılaştırın ve kopyalayın",
            body:
              "Yeni bir batch üretin, güçlü alternatifleri yan yana okuyun ve profilinize en uygun olanı doğrudan kopyalayın.",
          },
        ],
        useCasesTitle: "En iyi kullanım senaryoları",
        useCasesDescription:
          "Bu araç, her seferinde sıfırdan bio yazmak yerine hızlıca birkaç düzgün alternatif görmek istediğinizde daha değerlidir.",
        useCases: [
          {
            title: "Creator profilini yenilemek",
            description:
              "Instagram, TikTok, X, YouTube veya Twitch bio’nuz fazla düz, eski veya jenerik kalıyorsa daha temiz alternatifler üretin.",
          },
          {
            title: "Yeni bir hesap açmak",
            description:
              "Yeni açılan creator hesabı için ilk bio’yu daha niyetli ve daha düzenli göstermek istediğinizde kullanın.",
          },
          {
            title: "Farklı konumlandırmaları karşılaştırmak",
            description:
              "Minimal, keskin, eğlenceli veya daha profesyonel bir profil yönünü bio üzerinden test edin.",
          },
        ],
        examplesTitle: "Örnekler",
        examplesDescription:
          "Araç birkaç üretim sonrası sizi buna benzer kısa ve kullanılabilir bio’lara yaklaştırmalıdır.",
        examples: [
          {
            title: "Instagram creator bio",
            inputLabel: "Kurulum",
            input: "Platform: Instagram\nTon: Cool\nUzunluk: Dengeli\nEmoji: Kapalı\nCTA: Açık",
            outputLabel: "Örnek çıktı",
            output: "net görsel, düzenli enerji\ntemiz içerik, güçlü stil\niş birliklerine açık",
            note: "Gösterişsiz ama niyetli görünen creator profilleri için uygundur.",
          },
          {
            title: "YouTube kanal bio",
            inputLabel: "Kurulum",
            input: "Platform: YouTube\nTon: Profesyonel\nUzunluk: Kısa\nEmoji: Kapalı\nCTA: Kapalı",
            outputLabel: "Örnek çıktı",
            output: "net anlatım, düzenli yayın\ndüzenli video, temiz kurgu",
            note: "Kanal sayfasının daha güvenilir ve düzenli görünmesini sağlar.",
          },
        ],
        faqTitle: "Bio generator sık sorulan sorular",
        faqs: [
          {
            question: "Bio generator her seferinde farklı sonuç verir mi?",
            answer:
              "Evet. Her üretimde yeni bir batch gelir; böylece tek bir cevaba sıkışmadan farklı yönleri karşılaştırabilirsiniz.",
          },
          {
            question: "Hangi platformlar için uygundur?",
            answer:
              "Araç Instagram, TikTok, X, YouTube ve Twitch için ayarlanmıştır. Bu yüzden çıktılar bu profillerde daha doğal görünür.",
          },
          {
            question: "Çıktıları doğrudan kullanabilir miyim?",
            answer:
              "Evet. Yine de en iyi yöntem birkaç batch üretip en iyi satırları seçmek ve son küçük dokunuşu kendiniz yapmaktır.",
          },
        ],
      },
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
      content: {
        howToUseTitle: "Nickname generator nasıl kullanılır",
        howToUseDescription:
          "En iyi nickname sonuçları genelde net bir hava, daha kısa uzunluklar ve gerekmedikçe daha sade sembol kullanımıyla gelir.",
        howToUseSteps: [
          {
            title: "Bir hava veya anahtar kelime ile başlayın",
            body:
              "İsterseniz kısa bir kelime girin, isterseniz boş bırakıp stil seçiminin batch’i yönlendirmesine izin verin.",
          },
          {
            title: "Stil, uzunluk ve sembol tipini seçin",
            body:
              "Cool, dark, gaming veya aesthetic yönlerinden birini seçin; sonra nickname’in hangi platformlarda kullanılacağını düşünerek uzunluk ve sembol stilini ayarlayın.",
          },
          {
            title: "Sahiplenilebilir bir sonuç gelene kadar yenileyin",
            body:
              "Yeni batch’ler üretin ve kulağa iyi gelen, okunabilen ve gerçekten kullanılabilir duran nickname’i seçin.",
          },
        ],
        useCasesTitle: "En iyi kullanım senaryoları",
        useCasesDescription:
          "Bu araç, sözlük anlamı aramaktan çok iyi duran ve kullanılabilir hissi veren bir handle bulmak istediğinizde daha güçlüdür.",
        useCases: [
          {
            title: "Oyun nicki ve kullanıcı adı üretmek",
            description:
              "Discord, Twitch, Steam veya oyun içi profiller için daha kısa ve daha güçlü handle’lar üretin.",
          },
          {
            title: "Creator alias aramak",
            description:
              "Herkese açık kullanıcı adınızı veya creator isminizi belirlemeden önce daha sahiplenilebilir seçenekler görmek için kullanın.",
          },
          {
            title: "Dark veya aesthetic profil adı bulmak",
            description:
              "Amaç kelime anlamından çok hava, ton ve akılda kalıcılıksa farklı stilleri hızlıca deneyin.",
          },
        ],
        examplesTitle: "Örnekler",
        examplesDescription:
          "Güçlü bir çıktı kısa, akılda kalıcı ve sahiplenilebilir görünmelidir; bozuk hece yığını gibi durmamalıdır.",
        examples: [
          {
            title: "Cool profil handle",
            inputLabel: "Kurulum",
            input: "Kelime: orbit\nStil: Cool\nUzunluk: Kısa\nSemboller: Temiz\nOkunabilirlik: Açık",
            outputLabel: "Örnek çıktı",
            output: "orbitlane\nvexaflow\nsorashift",
            note: "Bunlar rastgele parçalanmış kelimelerden çok gerçek handle gibi görünür.",
          },
          {
            title: "Dark gaming nickname",
            inputLabel: "Kurulum",
            input: "Kelime: raven\nStil: Dark\nUzunluk: Dengeli\nSemboller: Hafif\nOkunabilirlik: Kapalı",
            outputLabel: "Örnek çıktı",
            output: "ravenveil\nnoxdrift\nonyxmark",
            note: "Daha karanlık bir hava verirken tamamen okunmaz hale düşmez.",
          },
        ],
        faqTitle: "Nickname generator sık sorulan sorular",
        faqs: [
          {
            question: "Nickname generator her tıklamada yeni batch verir mi?",
            answer:
              "Evet. Her üretimde yeni bir batch döner; böylece aynı ayarlarla farklı handle yönlerini hızlıca görürsünüz.",
          },
          {
            question: "Amaç kelime anlamı mı, iyi görünen bir handle mı?",
            answer:
              "Asıl amaç iyi duran ve kullanılabilir hissi veren bir nickname bulmaktır. Güçlü bir sonucun her zaman düz sözlük anlamı olmak zorunda değildir.",
          },
          {
            question: "Sembol kullanımı açık mı kapalı mı olmalı?",
            answer:
              "Genelde önce temiz veya hafif stillerle başlamak daha iyidir. Böylece nickname daha okunur kalır ve daha çok platformda rahat kullanılır.",
          },
        ],
      },
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
      content: {
        howToUseTitle: "QR code generator nasıl kullanılır",
        howToUseDescription:
          "En iyi akış, önce doğru QR tipini seçmek ve ardından indirmeden önce önizlemeyi kontrol etmektir.",
        howToUseSteps: [
          {
            title: "QR tipini seçin",
            body:
              "URL, metin, e-posta, telefon veya WiFi seçeneklerinden size uygun olanı seçin ki kod tarandığında doğru aksiyon çalışsın.",
          },
          {
            title: "Detayları girin ve önizlemeyi kontrol edin",
            body:
              "İçeriği ekleyin, gerekirse boyut ve renkleri ayarlayın, ardından önizlemenin temiz ve taranabilir kaldığından emin olun.",
          },
          {
            title: "Gereken formatta indirin",
            body:
              "Hızlı paylaşım için PNG, baskı ve tasarım işlerinde daha esnek kullanım için SVG indirin.",
          },
        ],
        useCasesTitle: "En iyi kullanım senaryoları",
        useCasesDescription:
          "QR kodlar, fiziksel yüzey ile dijital hedef arasında hızlı bir köprü gerektiğinde en değerlidir.",
        useCases: [
          {
            title: "Link, menü veya profil paylaşımı",
            description:
              "Bir landing page, menü, rezervasyon sayfası veya creator profilini saniyeler içinde taranabilir hale getirin.",
          },
          {
            title: "WiFi ve iletişim paylaşımı",
            description:
              "Misafir WiFi, e-posta veya telefon paylaşımını elle yazdırmak yerine QR ile daha temiz verin.",
          },
          {
            title: "Poster, baskı ve paketleme işleri",
            description:
              "SVG indirerek kodun farklı boyutlarda da net kalmasını sağlayın.",
          },
        ],
        examplesTitle: "Örnekler",
        examplesDescription:
          "Bunlar utility tipi bir QR aracında en sık görülen ve değer üreten kullanım örnekleridir.",
        examples: [
          {
            title: "Web sitesi link QR",
            inputLabel: "Kurulum",
            input: "Tip: URL\nDeğer: https://toolyflow.com/tr/bio-generator\nBoyut: 320 px",
            outputLabel: "Sonuç",
            output: "PNG veya SVG olarak indirilmeye hazır taranabilir bir web sitesi QR kodu.",
            note: "El ilanı, profil kartı ve hızlı paylaşım akışları için uygundur.",
          },
          {
            title: "Misafir WiFi QR",
            inputLabel: "Kurulum",
            input: "Tip: WiFi\nSSID: StudioGuest\nŞifre: CreateFast24\nGüvenlik: WPA",
            outputLabel: "Sonuç",
            output: "Ziyaretçilerin şifre yazmadan ağa bağlanmasını sağlayan bir QR kod.",
            note: "Kafe, stüdyo, ofis ve etkinliklerde pratik bir kullanım sunar.",
          },
        ],
        faqTitle: "QR code generator sık sorulan sorular",
        faqs: [
          {
            question: "Sadece link için mi QR oluşturabilirim?",
            answer:
              "Hayır. Araç URL, metin, e-posta, telefon ve WiFi modlarını destekler; böylece ihtiyacınız olan aksiyona uygun QR oluşturabilirsiniz.",
          },
          {
            question: "PNG mi yoksa SVG mi indirmeliyim?",
            answer:
              "Hızlı dijital kullanım için çoğu zaman PNG yeterlidir. Baskı veya tasarım odaklı işlerde SVG daha esnektir.",
          },
          {
            question: "QR kod önizlemesi canlı güncelleniyor mu?",
            answer:
              "Evet. İçerik ve ayarlar değiştikçe önizleme canlı güncellenir; böylece indirmeden önce sonucu rahatça kontrol edebilirsiniz.",
          },
        ],
      },
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
      content: {
        howToUseTitle: "Case converter nasıl kullanılır",
        howToUseDescription:
          "Sayfa tek yapıştırma ile çoklu çıktı görüp doğru formatı hemen kopyalama mantığıyla çalışır.",
        howToUseSteps: [
          {
            title: "Kaynak metni yapıştırın",
            body:
              "Dönüştürmek istediğiniz metni kutuya bırakın. Çıktılar yazdıkça veya yapıştırdıkça anında güncellenir.",
          },
          {
            title: "Formatları yan yana karşılaştırın",
            body:
              "Uppercase, lowercase, sentence, title, camelCase, PascalCase, snake_case ve kebab-case çıktıları tek ekranda görün.",
          },
          {
            title: "İhtiyacınız olan çıktıyı kopyalayın",
            body:
              "İçerik düzenleme, değişken isimlendirme veya hızlı biçimlendirme için doğru karttaki sonucu doğrudan kopyalayın.",
          },
        ],
        useCasesTitle: "En iyi kullanım senaryoları",
        useCasesDescription:
          "Bu araç metnin içerik, ürün ve geliştirme işleri arasında hızlıca taşınması gerektiğinde daha güçlüdür.",
        useCases: [
          {
            title: "Başlık ve içerik düzenleme",
            description:
              "Başlık, açıklama, caption ve notlarda sentence case, title case veya diğer temel formatlara hızlıca geçin.",
          },
          {
            title: "Developer isimlendirme formatları",
            description:
              "camelCase, PascalCase, snake_case ve kebab-case çıktıları değişken, route veya alan isimleri için üretin.",
          },
          {
            title: "Toplu biçim kontrolü",
            description:
              "Birden fazla formatı aynı anda açık tutarak en doğru sonucu ekstra sayfa açmadan seçin.",
          },
        ],
        examplesTitle: "Örnekler",
        examplesDescription:
          "İyi bir case converter, giriş ve çıkış farkını tek bakışta net göstermelidir.",
        examples: [
          {
            title: "Başlık biçimlendirme",
            inputLabel: "Girdi",
            input: "build fast tools without extra friction",
            outputLabel: "Çıktı",
            output: "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
            note: "Editoryal stil seçimini hızlı yapmak için uygundur.",
          },
          {
            title: "Developer isimlendirme",
            inputLabel: "Girdi",
            input: "fast online tools",
            outputLabel: "Çıktı",
            output: "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
            note: "Slug, değişken ve alan adı üretiminde pratiktir.",
          },
        ],
        faqTitle: "Case converter sık sorulan sorular",
        faqs: [
          {
            question: "Hangi formatları kopyalayabilirim?",
            answer:
              "Sayfa uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text ve single-line çıktılarını sunar.",
          },
          {
            question: "Birden fazla formatı aynı anda karşılaştırabilir miyim?",
            answer:
              "Evet. Çıktılar aynı ekranda birlikte durur; böylece farklı stilleri rahatça karşılaştırıp doğru olanı kopyalayabilirsiniz.",
          },
          {
            question: "Bu araç geliştiriciler için de uygun mu?",
            answer:
              "Evet. Hem içerik işleri hem de kod dostu isimlendirme formatları için kullanışlıdır.",
          },
        ],
      },
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
  header: {
    tools: "Herramientas",
    about: "Acerca de",
    contact: "Contacto",
    menu: "Abrir menú",
  },
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
    searchLabel: "Encuentra una página rápido",
    searchPlaceholder: "Busca herramientas y categorías",
    searchEmpty: "Todavía no hay coincidencias para esa búsqueda.",
    proofEyebrow: "En la práctica",
    proofTitle: "Lo que realmente puedes resolver aquí",
    proofDescription:
      "En lugar de promesas genéricas, estos ejemplos muestran el tipo de tareas rápidas que las herramientas actuales ya pueden cerrar.",
    proofExamples: [
      {
        title: "Limpiar texto copiado en segundos",
        description:
          "Usa Case Converter cuando un título, una nota o un bloque de texto necesita una limpieza rápida y una copia inmediata.",
        toolSlug: "case-converter",
        toolName: "Case Converter",
        inputLabel: "Configuración",
        input: "launch your next creator page with cleaner text",
        outputLabel: "Salida útil",
        output:
          "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
      },
      {
        title: "Generar una bio publicable",
        description:
          "Usa Bio Generator para comparar varias bios cortas por plataforma sin empezar desde cero cada vez.",
        toolSlug: "bio-generator",
        toolName: "Bio Generator",
        inputLabel: "Configuración",
        input: "Plataforma: Instagram\nTono: Cool\nLongitud: Balanced\nCTA: On",
        outputLabel: "Salida útil",
        output:
          "visual limpio, presencia constante\ncontenido simple, identidad fuerte\nabierto a colaboraciones",
      },
      {
        title: "Encontrar un handle usable",
        description:
          "Usa Nickname Generator cuando necesites una shortlist más limpia para redes, gaming o perfiles de creador.",
        toolSlug: "nickname-generator",
        toolName: "Nickname Generator",
        inputLabel: "Configuración",
        input: "Keyword: orbit\nStyle: Cool\nLength: Short\nPronounceable: On",
        outputLabel: "Salida útil",
        output: "orbitlane\nvexaflow\nsorashift",
      },
    ],
    whyEyebrow: "Por qué Toolyflow",
    whyTitle: "Qué intenta hacer bien el producto",
    whyDescription:
      "La meta no es parecer más grande de lo que ya es, sino hacer que unas pocas páginas útiles sean más claras, más confiables y más fáciles de reutilizar.",
    brandPoints: [
      {
        title: "Útil rápido",
        description:
          "La visita debe poder pegar, generar o convertir algo valioso en pocos segundos.",
      },
      {
        title: "Enfoque claro",
        description:
          "El sitio se está cerrando alrededor de flujos de texto y de creador para sentirse menos aleatorio y más coherente.",
      },
      {
        title: "Vale la vuelta",
        description:
          "Las páginas deben seguir siendo ligeras, legibles y tranquilas para que volver al mismo flujo tenga sentido.",
      },
    ],
    pathsEyebrow: "Empieza aquí",
    pathsTitle: "Entradas más claras a la biblioteca",
    pathsDescription:
      "Estos grupos de enlaces son la forma más directa de entrar al producto actual sin obligar al visitante a adivinar por dónde empezar.",
    paths: [
      {
        title: "Ruta de limpieza de texto",
        description:
          "Entra en la capa de herramientas de formato y limpieza que seguirá creciendo con el producto.",
        links: [{ label: "Case Converter", slug: "case-converter" }],
      },
      {
        title: "Ruta de perfil de creador",
        description:
          "Usa bios, nicknames y herramientas de apoyo al perfil dentro del mismo cluster.",
        links: [
          { label: "Bio Generator", slug: "bio-generator" },
          { label: "Nickname Generator", slug: "nickname-generator" },
          { label: "QR Code Generator", slug: "qr-generator" },
        ],
      },
      {
        title: "Ruta utility rápida",
        description:
          "Accede a herramientas más ligeras cuando necesitas una salida simple sin salir del flujo principal.",
        links: [
          { label: "QR Code Generator", slug: "qr-generator" },
          { label: "Decision Wheel", slug: "decision-wheel" },
        ],
      },
    ],
    useCasesEyebrow: "Casos de uso",
    useCasesTitle: "Flujos que deberían traer visitas repetidas",
    useCasesDescription:
      "Las mejores herramientas vuelven a aparecer en tareas reales. Toolyflow se está moldeando para esos momentos.",
    useCases: [
      {
        title: "Limpieza rápida de texto",
        description:
          "Corrige títulos, notas y textos pegados sin abrir varias páginas para una sola tarea.",
      },
      {
        title: "Publicación de perfiles",
        description:
          "Prepara bios, handles y pequeños detalles de perfil para Instagram, TikTok, X, YouTube o Twitch.",
      },
      {
        title: "Tareas rápidas de creador",
        description:
          "Resuelve QR, pequeñas utilidades y decisiones cortas sin romper el flujo de trabajo principal.",
      },
    ],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas que un producto real debería responder",
    faqs: [
      {
        question: "¿En qué se está enfocando Toolyflow ahora mismo?",
        answer:
          "Toolyflow se está centrando en herramientas de texto, herramientas para creadores y una capa más ligera de utilidades rápidas. La idea es ser útil y claro antes que parecer enorme.",
      },
      {
        question: "¿Las herramientas son gratis?",
        answer:
          "Sí. La versión actual está construida alrededor de herramientas rápidas y gratuitas que funcionan en el navegador sin obligarte a crear una cuenta.",
      },
      {
        question: "¿Funciona bien en móvil?",
        answer:
          "Sí. La interfaz se está diseñando para que las mismas herramientas sigan siendo limpias y legibles en móvil, tablet y escritorio.",
      },
    ],
  },
  staticPages: {
    about: {
      eyebrow: "Acerca de Toolyflow",
      metaTitle: "Acerca de",
      metaDescription:
        "Descubre quién opera Toolyflow, por qué existe y cómo se está construyendo el producto.",
      title: "Un producto de herramientas enfocado para utilidades diarias",
      description:
        "Toolyflow se está construyendo como un producto práctico de herramientas online centrado en utilidad rápida, salidas claras y páginas que valga la pena reutilizar.",
      sections: [
        {
          title: "Quién opera Toolyflow",
          body:
            "Toolyflow funciona como un producto web independiente centrado en herramientas útiles dentro del navegador, sin fricción innecesaria de cuentas ni complejidad backend pesada.",
        },
        {
          title: "Por qué existe Toolyflow",
          body:
            "El producto existe para resolver tareas pequeñas y repetidas con rapidez. En lugar de llevar a la gente por páginas cargadas, Toolyflow busca mantener los flujos centrales limpios, rápidos y fáciles de reutilizar.",
        },
        {
          title: "En qué se enfoca el producto",
          body:
            "Toolyflow se está centrando en herramientas de texto, herramientas para creadores y una capa más pequeña de utilidades rápidas.",
          items: [
            "Herramientas de texto para limpieza, formato y tareas rápidas de escritura.",
            "Herramientas para bios, nombres, handles y flujos de perfil.",
            "Una capa utility ligera para tareas pequeñas que sí encajan con el producto.",
          ],
        },
        {
          title: "Cómo se construye",
          body:
            "La meta es publicar páginas útiles, no sobrediseñar el stack. La mayoría de las herramientas funcionan del lado del cliente para que el sitio siga siendo rápido, mantenible y confiable en móvil, tablet y escritorio.",
        },
        {
          title: "Cómo contactar al equipo",
          body:
            "Usa las direcciones de abajo según el motivo del mensaje. El soporte y los bugs deben ir separados de las conversaciones comerciales para no mezclar prioridades.",
          items: [
            "Usa info@toolyflow.com para problemas en herramientas, soporte y feedback general.",
            "Usa hello@toolyflow.com para alianzas, publicidad, colaboraciones y consultas de negocio.",
          ],
          emailLabel: "Contacto general",
          email: "hello@toolyflow.com",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      metaTitle: "Contacto",
      metaDescription:
        "Contacta con Toolyflow para soporte, alianzas, publicidad o dudas generales sobre el sitio.",
      title: "Habla con el equipo de Toolyflow",
      description:
        "Usa la vía correcta de contacto para soporte, errores, alianzas, publicidad o preguntas generales del producto.",
      sections: [
        {
          title: "Soporte y problemas del sitio",
          body:
            "Para errores de herramientas, páginas rotas, feedback o soporte general, escribe primero al buzón de soporte.",
          items: [
            "Ideal para reportes de bugs y errores de página.",
            "Ideal para feedback sobre calidad o usabilidad de las herramientas.",
            "Ideal para dudas generales sobre cómo funciona el sitio.",
          ],
          emailLabel: "Correo de soporte",
          email: "info@toolyflow.com",
        },
        {
          title: "Alianzas, publicidad y negocio",
          body:
            "Para patrocinios, colaboraciones, publicidad o conversaciones comerciales, usa el buzón de negocio para mantener esas solicitudes separadas del soporte.",
          items: [
            "Incluye el nombre de tu empresa o proyecto.",
            "Explica el tipo de colaboración que buscas.",
            "Añade tiempos, rango de presupuesto o detalles de campaña si aplica.",
          ],
          emailLabel: "Correo de negocio",
          email: "hello@toolyflow.com",
        },
        {
          title: "Qué incluir en un correo de soporte",
          body:
            "Cuanto más claro sea el reporte, más rápido podrá revisarse y reproducirse.",
          items: [
            "La URL exacta donde ocurrió el problema.",
            "Tu dispositivo, navegador y tipo de pantalla si es posible.",
            "Una nota corta explicando qué esperabas y qué ocurrió realmente.",
          ],
        },
        {
          title: "Cómo se revisan los mensajes",
          body:
            "Los mensajes se revisan manualmente. Los reportes de herramientas, el feedback de producto y las solicitudes comerciales pueden tener tiempos de respuesta distintos según volumen y prioridad.",
          items: [
            "Los mensajes de soporte deben ser concretos y traer el detalle suficiente para reproducir el problema.",
            "Las solicitudes comerciales deben dejar claro el objetivo del contacto.",
            "Si no sabes qué buzón usar, escribe a hello@toolyflow.com.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Política de privacidad",
      metaTitle: "Política de privacidad",
      metaDescription:
        "Lee la política de privacidad de Toolyflow para entender cookies, servicios publicitarios, consentimiento y tratamiento de datos.",
      title: "Política de privacidad",
      description:
        "Esta página explica cómo Toolyflow gestiona entradas en el navegador, cookies, servicios de terceros, tecnologías publicitarias y consentimiento del visitante.",
      sections: [
        {
          title: "Tratamiento de la información",
          body:
            "Toolyflow está diseñado para mantener la primera versión ligera. La mayoría de las herramientas funcionan directamente en el navegador, así que las entradas del usuario suelen procesarse del lado del cliente en lugar de enviarse a un backend.",
        },
        {
          title: "Cookies y almacenamiento local",
          body:
            "Toolyflow y sus proveedores pueden usar cookies, almacenamiento local o tecnologías similares para mantener el sitio operativo, entender el tráfico, recordar preferencias limitadas, medir rendimiento y apoyar publicidad.",
          items: [
            "Las cookies pueden utilizarse para funcionalidad del sitio, analítica y medición relacionada con publicidad.",
            "Algunos datos del navegador pueden ser creados por servicios incrustados o tecnologías publicitarias.",
            "Puedes controlar o eliminar cookies desde la configuración del navegador en cualquier momento.",
          ],
        },
        {
          title: "Publicidad y terceros",
          body:
            "Toolyflow puede trabajar con terceros, incluido Google, para servir anuncios, medir rendimiento publicitario y entender cómo se usa el sitio. Estos proveedores pueden usar cookies, web beacons, identificadores, IP, datos del navegador y señales de interacción.",
          items: [
            "Google y otros proveedores pueden usar cookies para mostrar anuncios según visitas previas a este u otros sitios.",
            "Los proveedores publicitarios pueden combinar señales técnicas del navegador y del dispositivo para entrega, control de frecuencia, prevención de fraude y reporting.",
            "Socios de hosting, analítica, seguridad y publicidad pueden procesar datos técnicos necesarios para operar sus servicios.",
          ],
        },
        {
          title: "Consentimiento y opciones del visitante",
          body:
            "Cuando la ley aplicable lo exija, Toolyflow puede solicitar consentimiento antes de usar cookies no esenciales o determinadas tecnologías publicitarias.",
          items: [
            "Puede pedirse aceptar, rechazar o gestionar determinadas categorías de cookies.",
            "Retirar el consentimiento puede reducir funciones de personalización, analítica o publicidad.",
            "También puedes gestionar muchas preferencias publicitarias desde tu navegador o desde la configuración de anuncios de Google.",
          ],
        },
        {
          title: "Contacto para privacidad",
          body:
            "Si tienes una pregunta relacionada con privacidad, cookies o servicios publicitarios, usa la dirección siguiente.",
          emailLabel: "Contacto de privacidad",
          email: "info@toolyflow.com",
        },
        {
          title: "Actualizaciones de la política",
          body:
            "Esta política puede actualizarse a medida que el producto evoluciona. Los cambios futuros se reflejarán en esta misma página.",
        },
        {
          title: "Analítica y proveedores de servicio",
          body:
            "Toolyflow puede usar servicios de analítica, hosting, seguridad o publicidad para entender el tráfico, mantener el sitio disponible y apoyar monetización futura. Esos proveedores pueden procesar información técnica como navegador, dispositivo y visitas de página.",
        },
      ],
    },
    "terms-of-service": {
      eyebrow: "Términos del servicio",
      metaTitle: "Términos del servicio",
      metaDescription:
        "Lee los términos de servicio de Toolyflow para conocer reglas generales de uso, límites y condiciones del sitio.",
      title: "Términos del servicio",
      description:
        "Estos términos describen las condiciones generales para usar Toolyflow y sus herramientas online.",
      sections: [
        {
          title: "Uso del sitio",
          body:
            "Toolyflow se ofrece con fines informativos y de utilidad general. Al usar el sitio aceptas utilizar las herramientas de forma legal y sin interferir con el funcionamiento normal del servicio.",
        },
        {
          title: "Sin garantía de adecuación",
          body:
            "Las herramientas se ofrecen tal cual. Aunque el producto busca ser fiable y preciso, Toolyflow no garantiza que cada salida encaje en todos los casos de uso empresariales, legales o técnicos.",
        },
        {
          title: "Actualizaciones futuras",
          body:
            "Las funciones, páginas y políticas pueden cambiar con el tiempo a medida que el producto evoluciona. El uso continuado del sitio después de esas actualizaciones implica aceptar la versión vigente de estos términos.",
        },
      ],
    },
  },
  tools: {
    "bio-generator": {
      shortDescription:
        "Genera bios más limpias para Instagram, TikTok, X, YouTube y Twitch.",
      description:
        "Genera bios por plataforma, tono, longitud, emojis y CTA, y copia la opción que mejor encaje con tu perfil.",
      eyebrow: "Herramienta de perfil social",
      metaDescription:
        "Genera bios para Instagram, TikTok, X, YouTube y Twitch con controles de tono, longitud, emoji y CTA en un generador gratis.",
      highlights: [
        "Los controles de tono, longitud, emoji y CTA ajustan mejor el resultado.",
        "Va bien para perfiles sociales, páginas de creador y bios de canal.",
        "Cada generación devuelve un lote nuevo para comparar rápido.",
      ],
      structuredDescription:
        "Generador online gratis de bios para perfiles de creador con controles de plataforma, tono, longitud, emoji y CTA.",
      content: {
        howToUseDescription:
          "Los mejores resultados llegan cuando eliges primero plataforma y tono, y luego recortas el lote hasta quedarte con la opción que sí suena a tu perfil.",
        howToUseSteps: [
          {
            title: "Elige plataforma y tono",
            body:
              "Empieza por la plataforma para la que escribes y luego selecciona el tono que más se parezca a tu forma de sonar: limpio, fuerte, personal, minimal o más misterioso.",
          },
          {
            title: "Ajusta los filtros de formato",
            body:
              "Cambia longitud, emoji y CTA para que el lote quede más cerca del tipo de bio que realmente publicarías.",
          },
          {
            title: "Genera, compara y copia",
            body:
              "Saca un lote nuevo, compara las opciones más fuertes y copia la versión que encaje sin necesidad de demasiada edición.",
          },
        ],
        useCasesDescription:
          "Esta herramienta funciona mejor cuando necesitas varias opciones listas para perfil sin escribir cada bio desde cero.",
        useCases: [
          {
            title: "Actualizar un perfil de creador",
            description:
              "Genera opciones más limpias cuando tu bio de Instagram, TikTok, X, YouTube o Twitch se siente plana, vieja o demasiado genérica.",
          },
          {
            title: "Abrir un canal nuevo",
            description:
              "Encuentra una primera bio más cerrada cuando lanzas una cuenta nueva y quieres que el perfil se vea pensado desde el día uno.",
          },
          {
            title: "Probar distintos posicionamientos",
            description:
              "Compara una dirección más minimal, más afilada, más divertida o más profesional antes de tocar tu perfil público.",
          },
        ],
        examplesDescription:
          "Estos son los tipos de bios cortas a los que debería ayudarte a llegar la página tras unas pocas generaciones.",
        examples: [
          {
            title: "Bio para Instagram",
            inputLabel: "Configuración",
            input: "Plataforma: Instagram\nTono: Cool\nLongitud: Balanced\nEmoji: Off\nCTA: On",
            outputLabel: "Salida",
            output:
              "visual limpio, presencia constante\ncontenido simple, identidad fuerte\nabierto a colaboraciones",
            note: "Sirve cuando buscas un perfil de creador directo sin sonar recargado.",
          },
          {
            title: "Bio para canal de YouTube",
            inputLabel: "Configuración",
            input: "Plataforma: YouTube\nTono: Professional\nLongitud: Short\nEmoji: Off\nCTA: Off",
            outputLabel: "Salida",
            output:
              "voz clara, publicaciones constantes\ncreando videos útiles con regularidad",
            note: "Buena para páginas de canal que deben sentirse creíbles y ordenadas.",
          },
        ],
        faqs: [
          {
            question: "¿La bio cambia en cada generación?",
            answer:
              "Sí. Cada clic devuelve un lote nuevo para comparar varias direcciones en lugar de una única respuesta cerrada.",
          },
          {
            question: "¿Qué plataformas admite?",
            answer:
              "La herramienta está ajustada para Instagram, TikTok, X, YouTube y Twitch, para que la salida se parezca más a cómo se escriben esas bios en la práctica.",
          },
          {
            question: "¿Puedo usar la bio tal cual?",
            answer:
              "Sí, aunque lo más sólido suele ser generar varios lotes, escoger la mejor base y hacer un pequeño retoque final para que suene más personal.",
          },
        ],
      },
    },
    "nickname-generator": {
      shortDescription:
        "Crea ideas de nick en estilos cool, oscuro, gaming y aesthetic.",
      description:
        "Genera nicknames memorables con palabra base opcional y copia rápida para sesiones de brainstorming.",
      eyebrow: "Herramienta de nombres",
      metaDescription:
        "Crea ideas de nickname en estilos cool, oscuro, gaming y aesthetic con un generador online gratis.",
      highlights: [
        "Útil para usernames, handles sociales, alias de creador y tags de gaming.",
        "Los filtros de estilo, longitud, símbolos y legibilidad alinean mejor el resultado con el vibe que buscas.",
        "Cada sugerencia se copia en un toque y se puede refrescar en un lote nuevo.",
      ],
      structuredDescription:
        "Generador online gratis de nicknames para handles cool, dark, gaming y aesthetic con controles de estilo y legibilidad.",
      content: {
        howToUseDescription:
          "Los mejores resultados suelen salir de un vibe claro, longitudes cortas y un nivel de estilo ligero salvo que quieras un handle más agresivo.",
        howToUseSteps: [
          {
            title: "Empieza con una idea o keyword",
            body:
              "Escribe una palabra corta si ya tienes una pista, o déjalo abierto y deja que el estilo empuje el lote hacia una dirección más usable.",
          },
          {
            title: "Elige estilo, longitud y símbolos",
            body:
              "Decide si el resultado debe sentirse cool, oscuro, gaming o aesthetic, y mantén la longitud y los símbolos alineados con las plataformas que vas a usar.",
          },
          {
            title: "Refresca hasta que uno se sienta tuyo",
            body:
              "Genera nuevos lotes hasta que aparezca un nickname que se vea usable, suene bien al leerlo y valga la pena guardar.",
          },
        ],
        useCasesDescription:
          "Esta herramienta destaca cuando necesitas un handle con estilo y buena forma, no una palabra literal de diccionario.",
        useCases: [
          {
            title: "Tags de gaming y usernames",
            description:
              "Genera handles más cortos y nítidos para Discord, Twitch, Steam o perfiles dentro de juegos.",
          },
          {
            title: "Ideas para alias de creador",
            description:
              "Úsala para encontrar un nickname más propio antes de fijar un username público o un alias más de marca.",
          },
          {
            title: "Handles oscuros o aesthetic",
            description:
              "Prueba varios vibes rápido cuando el objetivo es estilo, tono y memoria antes que significado literal.",
          },
        ],
        examplesDescription:
          "Las mejores salidas deben sentirse lo bastante cortas para usar, lo bastante claras para recordar y lo bastante distintas para adueñarte de ellas.",
        examples: [
          {
            title: "Handle cool para perfil",
            inputLabel: "Configuración",
            input: "Keyword: orbit\nStyle: Cool\nLength: Short\nSymbols: Clean\nPronounceable: On",
            outputLabel: "Salida",
            output: "orbitlane\nvexaflow\nsorashift",
            note: "Se sienten más cerca de handles reales que de sílabas rotas al azar.",
          },
          {
            title: "Nickname dark para gaming",
            inputLabel: "Configuración",
            input: "Keyword: raven\nStyle: Dark\nLength: Balanced\nSymbols: Light\nPronounceable: Off",
            outputLabel: "Salida",
            output: "ravenveil\nnoxdrift\nonyxmark",
            note: "Útil cuando quieres algo más oscuro sin perder legibilidad.",
          },
        ],
        faqs: [
          {
            question: "¿El generador devuelve un lote nuevo cada vez?",
            answer:
              "Sí. Cada generación rota a un lote nuevo para que sigas explorando handles con la misma configuración.",
          },
          {
            question: "¿Importa más el significado o la forma?",
            answer:
              "La meta es un nickname usable y con buena presencia para el vibe elegido. Un resultado fuerte no siempre necesita significado literal.",
          },
          {
            question: "¿Conviene dejar símbolos activados?",
            answer:
              "Normalmente conviene empezar con estilo limpio o ligero. Así el nickname sigue siendo más legible y reutilizable entre plataformas.",
          },
        ],
      },
    },
    "qr-generator": {
      shortDescription:
        "Convierte cualquier enlace o texto en un QR y descárgalo al instante.",
      description:
        "Crea códigos QR en el navegador con vista previa en vivo, varios tipos de QR y descarga rápida en PNG o SVG.",
      eyebrow: "Herramienta utility",
      metaDescription:
        "Genera códigos QR para enlaces, texto, email, teléfono o WiFi y descárgalos al instante en PNG o SVG.",
      highlights: [
        "La vista previa se actualiza al instante mientras escribes.",
        "La descarga sigue siendo simple con exportación directa en PNG o SVG.",
        "Útil para enlaces, menús, eventos y flujos de compartido rápido.",
      ],
      structuredDescription:
        "Generador online gratis de códigos QR con vista previa en vivo, varios tipos de QR y descarga en PNG o SVG.",
      content: {
        howToUseDescription:
          "La página funciona mejor cuando eliges primero el tipo correcto de QR y confirmas la vista previa antes de descargar el archivo final.",
        howToUseSteps: [
          {
            title: "Elige el tipo de QR",
            body:
              "Selecciona URL, texto, email, teléfono o WiFi para que el contenido codificado coincida con la acción que quieres después del escaneo.",
          },
          {
            title: "Completa los datos y revisa la vista previa",
            body:
              "Añade el contenido, ajusta tamaño y colores si hace falta y confirma que el preview siga viéndose limpio y escaneable.",
          },
          {
            title: "Descarga el formato correcto",
            body:
              "Exporta en PNG para compartir rápido o en SVG cuando necesitas un archivo escalable para diseño o impresión.",
          },
        ],
        useCasesDescription:
          "Los QR son más útiles cuando necesitas un puente rápido entre una superficie física y un destino digital claro.",
        useCases: [
          {
            title: "Enlaces de menú, evento o perfil",
            description:
              "Convierte una landing, un menú, una página de reservas o un perfil en un código escaneable en segundos.",
          },
          {
            title: "WiFi y datos de contacto",
            description:
              "Crea QR rápidos para WiFi de invitados, emails o teléfonos cuando quieres un traspaso más limpio que dictar datos manualmente.",
          },
          {
            title: "Posters, impresos y packaging",
            description:
              "Usa la descarga SVG cuando necesitas que el código se mantenga nítido en distintos tamaños.",
          },
        ],
        examplesDescription:
          "Estas configuraciones muestran el tipo de QR que la gente suele crear en una utility page como esta.",
        examples: [
          {
            title: "QR para un enlace web",
            inputLabel: "Configuración",
            input: "Tipo: URL\nValor: https://toolyflow.com/en/bio-generator\nTamaño: 320 px",
            outputLabel: "Resultado",
            output: "Un QR escaneable listo para descargar en PNG o SVG.",
            note: "Útil para flyers, tarjetas de perfil y flujos de compartido rápido.",
          },
          {
            title: "QR para WiFi invitado",
            inputLabel: "Configuración",
            input: "Tipo: WiFi\nSSID: StudioGuest\nPassword: CreateFast24\nSecurity: WPA",
            outputLabel: "Resultado",
            output: "Un QR que permite entrar a la red sin escribir la contraseña manualmente.",
            note: "Caso práctico para cafeterías, estudios, oficinas y eventos.",
          },
        ],
        faqs: [
          {
            question: "¿Puedo generar algo más que URLs?",
            answer:
              "Sí. La herramienta admite URL, texto, email, teléfono y WiFi para que el QR encaje con la acción que necesitas.",
          },
          {
            question: "¿Debo descargar PNG o SVG?",
            answer:
              "PNG suele ser suficiente para uso digital rápido. SVG es mejor cuando necesitas un archivo escalable para impresión o diseño.",
          },
          {
            question: "¿La vista previa se actualiza en vivo?",
            answer:
              "Sí. El preview cambia al modificar contenido o ajustes, lo que facilita validar el resultado antes de descargarlo.",
          },
        ],
      },
    },
    "case-converter": {
      shortDescription:
        "Convierte texto entre uppercase, lowercase, sentence, title, camel, snake y kebab.",
      description:
        "Cambia el case al instante, compara varias salidas lado a lado y copia justo la versión que necesitas.",
      eyebrow: "Herramienta de formato de texto",
      metaDescription:
        "Convierte texto a uppercase, lowercase, sentence case, title case, camelCase, snake_case y más con un case converter rápido y gratis.",
      highlights: [
        "Rápido para títulos, captions, notas y revisiones de formato.",
        "Mantiene todas las salidas visibles a la vez en lugar de obligarte a dar más clics.",
        "Funciona bien en layouts de móvil, tablet y escritorio.",
      ],
      structuredDescription:
        "Case converter online gratis para uppercase, lowercase, sentence case, title case, camelCase, snake_case y kebab-case.",
      content: {
        howToUseDescription:
          "La página está pensada para flujos rápidos de pegar, comparar y copiar. La idea es pegar una vez, revisar varios formatos y llevarte el correcto al instante.",
        howToUseSteps: [
          {
            title: "Pega el texto base",
            body:
              "Introduce el texto que quieres limpiar o reformatear. La herramienta recalcula las salidas al momento al escribir o pegar.",
          },
          {
            title: "Compara los formatos",
            body:
              "Revisa uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case y kebab-case uno junto al otro.",
          },
          {
            title: "Copia el resultado exacto",
            body:
              "Usa el botón de copiar de la tarjeta que encaje con tu flujo, ya sea para contenido, variables, rutas o títulos.",
          },
        ],
        useCasesDescription:
          "La herramienta es más útil cuando el texto se mueve rápido entre contexto editorial, producto y desarrollo.",
        useCases: [
          {
            title: "Limpieza de titulares y contenido",
            description:
              "Cambia entre sentence case, title case, mayúsculas o minúsculas al editar títulos, captions y notas.",
          },
          {
            title: "Nombres para desarrollo",
            description:
              "Genera camelCase, PascalCase, snake_case o kebab-case para variables, rutas y nombres de campos.",
          },
          {
            title: "Comparación rápida de formatos",
            description:
              "Mantén varios estilos visibles a la vez para comparar y copiar el correcto sin pasos extra.",
          },
        ],
        examplesDescription:
          "Un buen case converter debería dejar clara la diferencia entre entrada y salida de un vistazo.",
        examples: [
          {
            title: "Formato de titular",
            inputLabel: "Entrada",
            input: "build fast tools without extra friction",
            outputLabel: "Salida",
            output:
              "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
            note: "Útil cuando necesitas decidir rápido entre estilos editoriales.",
          },
          {
            title: "Naming para desarrollo",
            inputLabel: "Entrada",
            input: "fast online tools",
            outputLabel: "Salida",
            output:
              "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
            note: "Práctico para slugs, variables y tareas simples de naming.",
          },
        ],
        faqs: [
          {
            question: "¿Qué formatos puedo copiar?",
            answer:
              "La página ofrece uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text y una salida single-line.",
          },
          {
            question: "¿Puedo comparar varios formatos a la vez?",
            answer:
              "Sí. Todas las salidas permanecen visibles juntas para comparar estilos y copiar la correcta sin abrir otra página.",
          },
          {
            question: "¿También sirve para desarrollo?",
            answer:
              "Sí. Es útil tanto para escritura como para naming técnico, especialmente cuando cambias entre texto editorial y formatos amigables para código.",
          },
        ],
      },
    },
    "decision-wheel": {
      shortDescription:
        "Haz girar opciones cuando necesites una utility ligera para una elección rápida.",
      description:
        "Usa un selector aleatorio con animación y resultado claro cuando necesites una herramienta extra fuera del flujo central.",
      eyebrow: "Utility rápida",
      metaDescription:
        "Introduce opciones, gira la rueda y obtén un resultado aleatorio con una decision wheel online gratis.",
      highlights: [
        "Útil para decisiones rápidas, ideas de contenido y pequeñas elecciones de equipo.",
        "La animación hace que el resultado se sienta claro e interactivo.",
        "Todo sigue siendo simple, responsive y client-side.",
      ],
      structuredDescription:
        "Decision wheel online gratis para girar opciones y elegir un resultado aleatorio.",
      content: {
        howToUseDescription:
          "Esta herramienta es deliberadamente ligera. Añade opciones claras, gira una vez y usa el resultado cuando quieras decidir rápido sin pensarlo de más.",
        howToUseSteps: [
          {
            title: "Añade las opciones",
            body:
              "Introduce cada opción en una línea separada para que la rueda reparta bien las elecciones antes de empezar.",
          },
          {
            title: "Gira la rueda",
            body:
              "Inicia el giro y deja que la rueda cierre la decisión con un único resultado final.",
          },
          {
            title: "Acepta el resultado o rehace la lista",
            body:
              "Usa el resultado para decidir rápido o ajusta las opciones y vuelve a girar si el problema está en la lista misma.",
          },
        ],
        useCasesDescription:
          "La rueda es más útil para decisiones pequeñas en las que la velocidad importa más que un análisis profundo.",
        useCases: [
          {
            title: "Ideas de contenido y nombres",
            description:
              "Elige entre ideas de posts, títulos o shortlists cuando solo necesitas un desempate rápido.",
          },
          {
            title: "Microdecisiones de equipo",
            description:
              "Úsala para turnos, orden de tareas o pequeñas elecciones compartidas.",
          },
          {
            title: "Decisiones personales simples",
            description:
              "Rompe la indecisión en elecciones diarias pequeñas sin salir de la página.",
          },
        ],
        examplesDescription:
          "Los mejores casos de uso son listas cortas con necesidad real de una elección final simple.",
        examples: [
          {
            title: "Shortlist de ideas de contenido",
            inputLabel: "Entrada",
            input: "Behind the scenes\nNew tool demo\nWorkflow tips\nLaunch update",
            outputLabel: "Resultado",
            output: "La rueda cae sobre una opción y muestra una única elección final.",
            note: "Útil cuando la shortlist ya es suficientemente buena y solo falta una decisión final.",
          },
          {
            title: "Elegir comida",
            inputLabel: "Entrada",
            input: "Pizza\nSushi\nSalad\nBurgers",
            outputLabel: "Resultado",
            output: "Se selecciona una opción al terminar el giro.",
            note: "Un ejemplo simple y cotidiano para esta capa utility.",
          },
        ],
        faqs: [
          {
            question: "¿Para qué sirve mejor la decision wheel?",
            answer:
              "Funciona mejor para elecciones rápidas y de bajo riesgo, donde un resultado aleatorio es más útil que seguir discutiendo demasiado.",
          },
          {
            question: "¿Puedo editar las opciones antes de girar?",
            answer:
              "Sí. Puedes reescribir la lista antes del giro para dejar solo las opciones que realmente quieras considerar.",
          },
          {
            question: "¿Forma parte del foco principal de Toolyflow?",
            answer:
              "Está dentro de la capa utility más ligera. El foco principal del producto sigue siendo texto y creator tools.",
          },
        ],
      },
    },
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palabra base o idea",
    keywordPlaceholder: "p. ej. luna, pixel, sombra",
    styleLabel: "Elige un estilo",
    lengthLabel: "Longitud",
    symbolsLabel: "Símbolos",
    pronounceableLabel: "Pronunciable",
    generateMore: "Generar más",
    copyButton: "Copiar",
    tapToCopy: "Toca para copiar",
    copied: "Copiado al portapapeles",
    toggleOn: "Sí",
    toggleOff: "No",
    styles: {
      cool: "Cool",
      dark: "Oscuro",
      gaming: "Gaming",
      aesthetic: "Estético",
    },
    lengthModes: {
      short: "Corto",
      balanced: "Equilibrado",
      long: "Largo",
    },
    symbolModes: {
      none: "Limpio",
      light: "Ligero",
      bold: "Con estilo",
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
    lengthLabel: "Longitud",
    emojiLabel: "Emoji",
    ctaLabel: "Línea CTA",
    generate: "Generar bio",
    copy: "Copiar",
    copied: "Copiado",
    toggleOn: "Sí",
    toggleOff: "No",
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
      playful: "Divertido",
      sharp: "Afilado",
    },
    lengths: {
      short: "Corta",
      balanced: "Equilibrada",
      long: "Larga",
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
  caseConverter: {
    inputLabel: "Pega tu texto",
    placeholder: "Escribe o pega texto para convertir.",
    characters: "Caracteres",
    words: "Palabras",
    lines: "Líneas",
    readingTime: "Tiempo de lectura",
    clearText: "Limpiar texto",
    uppercase: "Mayúsculas",
    lowercase: "Minúsculas",
    sentenceCase: "Sentence case",
    titleCase: "Title Case",
    camelCase: "camelCase",
    pascalCase: "PascalCase",
    snakeCase: "snake_case",
    kebabCase: "kebab-case",
    trimmedText: "Texto recortado",
    singleLine: "Una línea",
    copy: "Copiar",
    copied: "Copiado",
  },
  qrGenerator: {
    inputLabel: "Texto o URL",
    placeholder: "Pega un enlace, un texto de cupón o un mensaje.",
    download: "Descargar PNG",
    downloadSvg: "Descargar SVG",
    clear: "Limpiar",
    livePreview: "Vista previa",
    emptyState: "Añade texto o un enlace para generar un QR al instante.",
    generating: "Generando tu código QR...",
    helper: "Todo funciona en el navegador con vista previa en vivo, selección de formato y descarga directa.",
    typeLabel: "Tipo de QR",
    sizeLabel: "Tamaño",
    foregroundLabel: "Primer plano",
    backgroundLabel: "Fondo",
    urlMode: "URL",
    textMode: "Texto",
    emailMode: "Email",
    phoneMode: "Teléfono",
    wifiMode: "WiFi",
    emailLabel: "Correo",
    subjectLabel: "Asunto",
    bodyLabel: "Mensaje",
    phoneLabel: "Número",
    ssidLabel: "Nombre de WiFi",
    passwordLabel: "Contraseña",
    securityLabel: "Seguridad",
    securityWpa: "WPA",
    securityWep: "WEP",
    securityOpen: "Abierta",
  },
  decisionWheel: {
    inputLabel: "Una opción por línea",
    button: "Girar la rueda",
    spinning: "Girando...",
    helper:
      "Añade al menos dos opciones. La rueda funciona totalmente en el cliente y muestra el ganador al final del giro.",
    resultLabel: "Resultado",
    emptyResult: "Pulsa girar para elegir un ganador",
    starterOptions: [
      "Publicar",
      "Pausa café",
      "Revisar luego",
      "Enviar borrador",
      "Tomar notas",
      "Salir en vivo",
    ],
  },
});

const de = translateDictionary(en, "de", {
  localeCode: "de_DE",
  siteDescription: "Schnelle, einfache und kostenlose Online-Tools.",
  header: { tools: "Tools", about: "Über uns", contact: "Kontakt", menu: "Menü öffnen" },
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
    searchLabel: "Seite schnell finden",
    searchPlaceholder: "Nach Tools und Kategorien suchen",
    searchEmpty: "Dafür gibt es noch keine Treffer.",
    proofEyebrow: "In der Praxis",
    proofTitle: "Was sich hier tatsächlich erledigen lässt",
    proofDescription:
      "Statt allgemeiner Produktversprechen zeigen diese Beispiele, welche schnellen Aufgaben die aktuellen Tools heute schon sinnvoll lösen können.",
    proofExamples: [
      {
        title: "Kopierten Text sofort bereinigen",
        description:
          "Nutze den Case Converter, wenn ein Titel, eine Notiz oder ein Textblock schnell formatiert und direkt kopiert werden soll.",
        toolSlug: "case-converter",
        toolName: "Case Converter",
        inputLabel: "Beispiel-Setup",
        input: "launch your next creator page with cleaner text",
        outputLabel: "Nützliche Ausgabe",
        output:
          "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
      },
      {
        title: "Eine brauchbare Bio erzeugen",
        description:
          "Nutze den Bio Generator, um mehrere kurze plattformspezifische Bios zu vergleichen, statt jedes Mal neu zu schreiben.",
        toolSlug: "bio-generator",
        toolName: "Bio Generator",
        inputLabel: "Beispiel-Setup",
        input: "Plattform: Instagram\nTon: Cool\nLänge: Balanced\nCTA: On",
        outputLabel: "Nützliche Ausgabe",
        output:
          "klare Optik, ruhige Präsenz\neinfache Inhalte, starke Identität\noffen für Collabs",
      },
      {
        title: "Eine brauchbare Handle-Richtung finden",
        description:
          "Nutze den Nickname Generator, wenn du eine sauberere Auswahl für Social, Gaming oder Creator-Profile brauchst.",
        toolSlug: "nickname-generator",
        toolName: "Nickname Generator",
        inputLabel: "Beispiel-Setup",
        input: "Keyword: orbit\nStyle: Cool\nLength: Short\nPronounceable: On",
        outputLabel: "Nützliche Ausgabe",
        output: "orbitlane\nvexaflow\nsorashift",
      },
    ],
    whyEyebrow: "Warum Toolyflow",
    whyTitle: "Was das Produkt richtig machen will",
    whyDescription:
      "Das Ziel ist nicht, größer zu klingen als das Produkt ist. Das Ziel ist, einige nützliche Seiten klarer, vertrauenswürdiger und wiederverwendbarer zu machen.",
    brandPoints: [
      {
        title: "Schnell nützlich",
        description:
          "Ein Besuch sollte in wenigen Sekunden etwas Sinnvolles einfügen, erzeugen oder umwandeln können.",
      },
      {
        title: "Klarer Fokus",
        description:
          "Die Website wird auf Text- und Creator-Workflows verengt, damit sie kohärenter und weniger zufällig wirkt.",
      },
      {
        title: "Wiederkommen lohnt sich",
        description:
          "Seiten sollten ruhig, lesbar und leicht genug bleiben, damit dieselbe Aufgabe später wieder gern hier erledigt wird.",
      },
    ],
    pathsEyebrow: "Hier starten",
    pathsTitle: "Klarere Wege in die Tool-Bibliothek",
    pathsDescription:
      "Diese Linkgruppen sind der direkteste Einstieg in das aktuelle Produkt, statt Nutzer raten zu lassen, wo sie anfangen sollen.",
    paths: [
      {
        title: "Pfad für Textbereinigung",
        description:
          "Steig in die Schicht für Formatierung und Bereinigung ein, die als Text-Cluster weiter ausgebaut wird.",
        links: [{ label: "Case Converter", slug: "case-converter" }],
      },
      {
        title: "Pfad für Creator-Profile",
        description:
          "Nutze Bios, Nicknames und unterstützende Creator-Tools im selben Cluster.",
        links: [
          { label: "Bio Generator", slug: "bio-generator" },
          { label: "Nickname Generator", slug: "nickname-generator" },
          { label: "QR Code Generator", slug: "qr-generator" },
        ],
      },
      {
        title: "Schneller Utility-Pfad",
        description:
          "Greif auf leichtere Tools zu, wenn du eine schnelle Ausgabe brauchst, ohne den Hauptfluss zu verlassen.",
        links: [
          { label: "QR Code Generator", slug: "qr-generator" },
          { label: "Decision Wheel", slug: "decision-wheel" },
        ],
      },
    ],
    useCasesEyebrow: "Anwendungsfälle",
    useCasesTitle: "Workflows, die Wiederbesuche bringen sollten",
    useCasesDescription:
      "Die besten Tools tauchen immer wieder in echten Abläufen auf. Genau dafür wird Toolyflow geschärft.",
    useCases: [
      {
        title: "Schnelle Textbereinigung",
        description:
          "Überarbeite Überschriften, Notizen und eingefügten Text schnell, ohne mehrere Seiten zu öffnen.",
      },
      {
        title: "Profil-Setup für Creator",
        description:
          "Bereite Bios, Handles und kleine Profilbausteine für Instagram, TikTok, X, YouTube oder Twitch vor.",
      },
      {
        title: "Kleine Creator-Aufgaben",
        description:
          "Löse QR-Codes, leichte Utilities und kurze Entscheidungen ohne den Hauptworkflow zu verlassen.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Fragen, die ein echtes Produkt beantworten sollte",
    faqs: [
      {
        question: "Worauf konzentriert sich Toolyflow gerade?",
        answer:
          "Toolyflow fokussiert sich auf Text-Tools, Creator-Tools und eine kleinere Schicht schneller Utilities. Ziel ist nicht Breite um jeden Preis, sondern klare und nützliche Seiten.",
      },
      {
        question: "Sind die Tools kostenlos?",
        answer:
          "Ja. Die aktuelle Version setzt auf schnelle kostenlose Browser-Tools, die ohne Account funktionieren.",
      },
      {
        question: "Funktioniert die Seite auf dem Handy gut?",
        answer:
          "Ja. Die Oberfläche wird so aufgebaut, dass dieselben Tools auf Smartphone, Tablet und Desktop lesbar und sauber bleiben.",
      },
    ],
  },
  staticPages: {
    about: {
      eyebrow: "Über Toolyflow",
      metaTitle: "Über uns",
      metaDescription:
        "Erfahre, wer Toolyflow betreibt, warum es existiert und wie das Produkt aufgebaut wird.",
      title: "Ein fokussiertes Tool-Produkt für tägliche Utility-Aufgaben",
      description:
        "Toolyflow wird als praktisches Online-Tool-Produkt aufgebaut, das auf schnelle Utility, klare Ausgaben und wiederverwendbare Seiten setzt.",
      sections: [
        {
          title: "Wer Toolyflow betreibt",
          body:
            "Toolyflow wird als unabhängiges Webprodukt betrieben, das nützliche browserbasierte Tools ohne unnötige Konto-Hürden und ohne schweres Backend bauen will.",
        },
        {
          title: "Warum Toolyflow existiert",
          body:
            "Das Produkt soll kleine wiederkehrende Aufgaben schnell lösen. Statt Nutzer über überladene Seiten springen zu lassen, will Toolyflow Kern-Workflows sauber, schnell und leicht wiederverwendbar halten.",
        },
        {
          title: "Worauf sich das Produkt fokussiert",
          body:
            "Toolyflow konzentriert sich auf Text-Tools, Creator-Tools und eine kleinere Schicht schneller Utilities.",
          items: [
            "Text-Tools für Bereinigung, Formatierung und schnelle Schreibaufgaben.",
            "Creator-Tools für Bios, Namen, Handles und Profil-Workflows.",
            "Eine kleinere Utility-Schicht für leichte Aufgaben, die trotzdem zum Produkt passen.",
          ],
        },
        {
          title: "Wie das Produkt gebaut wird",
          body:
            "Das Ziel ist, nützliche Seiten zu veröffentlichen, nicht den Stack zu überbauen. Die meisten Tools laufen clientseitig, damit die Seite schnell, wartbar und verlässlich auf Smartphone, Tablet und Desktop bleibt.",
        },
        {
          title: "So erreichst du das Team",
          body:
            "Nutze die passenden Adressen unten je nach Anliegen. Support und Fehlerberichte sollten getrennt von geschäftlichen Anfragen bleiben.",
          items: [
            "info@toolyflow.com für Tool-Probleme, Support-Fragen und allgemeines Feedback.",
            "hello@toolyflow.com für Partnerschaften, Werbung, Kooperationen und Business-Anfragen.",
          ],
          emailLabel: "Allgemeiner Kontakt",
          email: "hello@toolyflow.com",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      metaTitle: "Kontakt",
      metaDescription:
        "Kontaktiere Toolyflow für Support, Partnerschaften, Werbung oder allgemeine Fragen.",
      title: "Erreiche das Toolyflow-Team",
      description:
        "Nutze den passenden Kontaktweg für Support, Fehlerberichte, Partnerschaften, Werbung oder allgemeine Produktfragen.",
      sections: [
        {
          title: "Support und Website-Probleme",
          body:
            "Für Tool-Fehler, defekte Seiten, Feedback oder allgemeinen Support nutze zuerst das Support-Postfach.",
          items: [
            "Am besten für Bugreports und Seitenfehler.",
            "Am besten für Feedback zur Tool-Qualität oder Nutzbarkeit.",
            "Am besten für allgemeine Fragen zur Funktionsweise der Website.",
          ],
          emailLabel: "Support-E-Mail",
          email: "info@toolyflow.com",
        },
        {
          title: "Partnerschaften, Werbung und Business",
          body:
            "Für Partnerschaften, Sponsoring, Werbung oder andere Business-Gespräche nutze das Business-Postfach, damit diese Anfragen getrennt vom Support bleiben.",
          items: [
            "Füge den Namen deiner Firma oder deines Projekts hinzu.",
            "Erkläre die Art der Zusammenarbeit, die du suchst.",
            "Nenne Zeitrahmen, Budgetrahmen oder Kampagnendetails, wenn relevant.",
          ],
          emailLabel: "Business-E-Mail",
          email: "hello@toolyflow.com",
        },
        {
          title: "Was in Support-Mails stehen sollte",
          body:
            "Je klarer der Bericht ist, desto schneller lässt sich das Problem prüfen und nachstellen.",
          items: [
            "Die genaue URL der Seite, auf der das Problem auftrat.",
            "Gerät, Browser und möglichst auch Bildschirmtyp.",
            "Eine kurze Notiz dazu, was du erwartet hast und was tatsächlich passiert ist.",
          ],
        },
        {
          title: "Wie Antworten ablaufen",
          body:
            "Nachrichten werden manuell geprüft. Tool-Reports, Produktfeedback und Business-Anfragen können je nach Volumen und Priorität unterschiedlich schnell beantwortet werden.",
          items: [
            "Support-Nachrichten sollten konkret bleiben und genug Details zum Nachstellen enthalten.",
            "Business-Anfragen sollten den Zweck der Kontaktaufnahme klar benennen.",
            "Wenn du unsicher bist, nutze hello@toolyflow.com.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Datenschutz",
      metaTitle: "Datenschutz",
      metaDescription:
        "Lies die Datenschutzerklärung von Toolyflow, um Cookies, Werbedienste, Einwilligung und Datenverarbeitung zu verstehen.",
      title: "Datenschutzerklärung",
      description:
        "Diese Seite erklärt, wie Toolyflow mit Browser-Eingaben, Cookies, Drittanbietern, Werbetechnologien und Einwilligungen umgeht.",
      sections: [
        {
          title: "Umgang mit Informationen",
          body:
            "Toolyflow ist so gebaut, dass die erste Version leicht bleibt. Die meisten Tools laufen direkt im Browser, daher werden Eingaben im Regelfall clientseitig verarbeitet und nicht an ein Backend gesendet.",
        },
        {
          title: "Cookies und lokaler Speicher",
          body:
            "Toolyflow und seine Dienstleister können Cookies, lokalen Speicher oder ähnliche Technologien verwenden, um die Website funktionsfähig zu halten, Traffic zu verstehen, begrenzte Präferenzen zu speichern, Leistung zu messen und Werbung zu unterstützen.",
          items: [
            "Cookies können für Funktionalität, Analyse und werbebezogene Messung verwendet werden.",
            "Einige Browserdaten können direkt durch eingebettete Dienste oder Werbetechnologien entstehen.",
            "Du kannst Cookies jederzeit in deinem Browser verwalten oder löschen.",
          ],
        },
        {
          title: "Werbung und Drittanbieter",
          body:
            "Toolyflow kann mit Drittanbietern, einschließlich Google, zusammenarbeiten, um Werbung auszuspielen, Werbeleistung zu messen und die Nutzung der Website zu verstehen.",
          items: [
            "Google und andere Anbieter können Cookies verwenden, um Anzeigen basierend auf früheren Besuchen auf dieser oder anderen Websites auszuspielen.",
            "Drittanbieter für Werbung können technische Browser- und Gerätesignale für Auslieferung, Frequenzkontrolle, Betrugsprävention und Reporting kombinieren.",
            "Hosting-, Analyse-, Sicherheits- und Werbepartner können technische Daten verarbeiten, die für ihren Dienst nötig sind.",
          ],
        },
        {
          title: "Einwilligung und Besucherwahl",
          body:
            "Wo es gesetzlich erforderlich ist, kann Toolyflow vor dem Einsatz nicht essenzieller Cookies oder bestimmter Werbetechnologien eine Einwilligung abfragen.",
          items: [
            "Du kannst bestimmte Cookie-Kategorien annehmen, ablehnen oder verwalten.",
            "Ein späterer Widerruf kann personalisierte Werbung oder Analysefunktionen einschränken.",
            "Viele Werbepräferenzen lassen sich auch über den Browser oder die Google-Anzeigeneinstellungen steuern.",
          ],
        },
        {
          title: "Kontakt für Datenschutzfragen",
          body:
            "Bei Fragen zu Datenschutz, Cookies oder Werbediensten nutze bitte die folgende Adresse.",
          emailLabel: "Datenschutz-Kontakt",
          email: "info@toolyflow.com",
        },
        {
          title: "Aktualisierungen der Richtlinie",
          body:
            "Diese Richtlinie kann sich mit dem Wachstum des Produkts ändern. Künftige Änderungen werden auf dieser Seite veröffentlicht.",
        },
        {
          title: "Analyse- und Serviceanbieter",
          body:
            "Toolyflow kann Analyse-, Hosting-, Sicherheits- oder Werbedienste verwenden, um Traffic zu verstehen, die Website verfügbar zu halten und künftige Monetarisierung zu unterstützen.",
        },
      ],
    },
    "terms-of-service": {
      eyebrow: "Nutzungsbedingungen",
      metaTitle: "Nutzungsbedingungen",
      metaDescription:
        "Lies die Nutzungsbedingungen von Toolyflow für allgemeine Regeln, Grenzen und Bedingungen der Website.",
      title: "Nutzungsbedingungen",
      description:
        "Diese Bedingungen beschreiben die allgemeinen Regeln für die Nutzung von Toolyflow und seinen Online-Tools.",
      sections: [
        {
          title: "Nutzung der Website",
          body:
            "Toolyflow wird für allgemeine Informations- und Utility-Zwecke bereitgestellt. Durch die Nutzung der Website erklärst du dich damit einverstanden, die Tools rechtmäßig und ohne Störung des normalen Betriebs zu verwenden.",
        },
        {
          title: "Keine Eignungsgarantie",
          body:
            "Die Tools werden wie besehen angeboten. Obwohl das Produkt zuverlässig und präzise sein soll, garantiert Toolyflow nicht, dass jede Ausgabe für jeden geschäftlichen, rechtlichen oder technischen Anwendungsfall passt.",
        },
        {
          title: "Zukünftige Updates",
          body:
            "Funktionen, Seiten und Richtlinien können sich mit der Zeit ändern. Wer die Website nach Änderungen weiter nutzt, akzeptiert die aktuelle Version dieser Bedingungen.",
        },
      ],
    },
  },
  tools: {
    "bio-generator": {
      shortDescription:
        "Erzeuge klarere Bios für Instagram, TikTok, X, YouTube und Twitch.",
      description:
        "Generiere Bios nach Plattform, Ton, Länge, Emoji-Nutzung und CTA und kopiere die Version, die zu deinem Profil passt.",
      eyebrow: "Profil-Tool",
      metaDescription:
        "Erzeuge klarere Bios für Instagram, TikTok, X, YouTube und Twitch mit Ton-, Längen-, Emoji- und CTA-Steuerung.",
      highlights: [
        "Ton, Länge, Emoji und CTA formen die Ausgabe präziser.",
        "Gut geeignet für Social-Profile, Creator-Seiten und Channel-Bios.",
        "Jede Generierung liefert einen frischen Stapel zum schnellen Vergleichen.",
      ],
      structuredDescription:
        "Kostenloser Online-Bio-Generator für Creator-Profile mit Plattform-, Ton-, Längen-, Emoji- und CTA-Steuerung.",
      content: {
        howToUseDescription:
          "Die besten Ergebnisse entstehen, wenn du zuerst Plattform und Ton klärst und danach die Optionen auf die Variante reduzierst, die wirklich nach deinem Profil klingt.",
        howToUseSteps: [
          {
            title: "Plattform und Ton wählen",
            body:
              "Starte mit der Plattform und wähle dann den Ton, der am besten zu deiner Wirkung passt: klar, stark, persönlich, minimal oder geheimnisvoller.",
          },
          {
            title: "Format-Filter setzen",
            body:
              "Passe Länge, Emoji-Schalter und CTA-Zeile so an, dass der Batch nah an der Art von Bio bleibt, die du wirklich veröffentlichen würdest.",
          },
          {
            title: "Generieren, vergleichen, kopieren",
            body:
              "Erzeuge einen frischen Batch, vergleiche die stärksten Optionen und kopiere die Version, die ohne viel Nacharbeit passt.",
          },
        ],
        useCasesDescription:
          "Dieses Tool ist am stärksten, wenn du schnell mehrere profilfertige Bio-Optionen brauchst, statt jedes Mal neu zu schreiben.",
        useCases: [
          {
            title: "Creator-Profil auffrischen",
            description:
              "Erzeuge klarere Optionen, wenn die Bio auf Instagram, TikTok, X, YouTube oder Twitch zu flach, alt oder zu generisch wirkt.",
          },
          {
            title: "Neuen Channel starten",
            description:
              "Finde eine straffere erste Bio, wenn du ein neues Creator-Konto öffnest und das Profil von Anfang an bewusst wirken soll.",
          },
          {
            title: "Mehrere Positionierungen testen",
            description:
              "Vergleiche eine minimalere, schärfere, spielerische oder professionellere Richtung, bevor du dein öffentliches Profil aktualisierst.",
          },
        ],
        examplesDescription:
          "So sehen die knappen Bios aus, zu denen die Seite nach ein paar Generierungen führen sollte.",
        examples: [
          {
            title: "Instagram-Bio",
            inputLabel: "Setup",
            input: "Plattform: Instagram\nTon: Cool\nLänge: Balanced\nEmoji: Off\nCTA: On",
            outputLabel: "Ausgabe",
            output:
              "klare Optik, ruhige Präsenz\neinfache Inhalte, starke Identität\noffen für Collabs",
            note: "Gut, wenn du ein direktes Creator-Profil willst, ohne überladen zu klingen.",
          },
          {
            title: "YouTube-Channel-Bio",
            inputLabel: "Setup",
            input: "Plattform: YouTube\nTon: Professional\nLänge: Short\nEmoji: Off\nCTA: Off",
            outputLabel: "Ausgabe",
            output: "klare Stimme, stabile Uploads\nnützliche Videos mit Konstanz",
            note: "Passt für Channel-Seiten, die glaubwürdig und strukturiert wirken sollen.",
          },
        ],
        faqs: [
          {
            question: "Erzeugt der Bio Generator jedes Mal neue Ergebnisse?",
            answer:
              "Ja. Jede Generierung liefert einen neuen Batch, damit du mehrere Richtungen vergleichen kannst.",
          },
          {
            question: "Welche Plattformen werden unterstützt?",
            answer:
              "Das Tool ist auf Instagram, TikTok, X, YouTube und Twitch abgestimmt, damit die Ausgabe näher an echten Profil-Bios bleibt.",
          },
          {
            question: "Kann ich die Ergebnisse direkt übernehmen?",
            answer:
              "Ja, aber am besten erzeugst du mehrere Batches, wählst die stärkste Basis und gibst ihr zum Schluss noch einen kleinen persönlichen Feinschliff.",
          },
        ],
      },
    },
    "nickname-generator": {
      shortDescription:
        "Erzeuge Nickname-Ideen in coolen, dunklen, Gaming- und ästhetischen Stilen.",
      description:
        "Generiere einprägsame Nicknames mit optionalem Keyword und schnellem Copy-Flow fürs Brainstorming.",
      eyebrow: "Namensidee-Tool",
      metaDescription:
        "Erzeuge Nickname-Ideen in coolen, dunklen, Gaming- und ästhetischen Stilen mit einem kostenlosen Online-Generator.",
      highlights: [
        "Nützlich für Usernames, Social-Handles, Creator-Aliase und Gaming-Tags.",
        "Stil-, Längen-, Symbol- und Lesbarkeitsfilter halten die Richtung näher an dem Vibe, den du suchst.",
        "Jeder Vorschlag ist mit einem Tipp kopierbar und in neue Batches rotierbar.",
      ],
      structuredDescription:
        "Kostenloser Online-Nickname-Generator für coole, dunkle, Gaming- und ästhetische Handles mit Stil- und Lesbarkeitskontrolle.",
      content: {
        howToUseDescription:
          "Die besten Ergebnisse entstehen meist aus einer klaren Richtung, eher kürzeren Längen und nur leichter Stilgebung, außer du willst bewusst ein lauteres Handle.",
        howToUseSteps: [
          {
            title: "Mit Vibe oder Keyword starten",
            body:
              "Gib ein kurzes Keyword ein, wenn du schon eine Richtung hast, oder lass es offen und nutze den Stil als Hauptlenkung.",
          },
          {
            title: "Stil, Länge und Symbole wählen",
            body:
              "Lege fest, ob die Ergebnisse cool, dunkel, gaming oder ästhetisch wirken sollen, und halte Länge und Symbole passend zu den Plattformen.",
          },
          {
            title: "Neu laden, bis es claimbar wirkt",
            body:
              "Erzeuge neue Batches, bis ein Nickname auftaucht, der brauchbar aussieht, gut klingt und sich lohnend anfühlt.",
          },
        ],
        useCasesDescription:
          "Das Tool ist am stärksten, wenn du einen handleartigen Namen mit Wirkung suchst und kein wörtliches Wörterbuchwort.",
        useCases: [
          {
            title: "Gaming-Tags und Usernames",
            description:
              "Erzeuge kürzere, schärfere Handles für Discord, Twitch, Steam oder In-Game-Profile.",
          },
          {
            title: "Creator-Alias finden",
            description:
              "Nutze es, um vor einem öffentlichen Username oder Marken-Alias eine besser besetzbare Richtung zu finden.",
          },
          {
            title: "Dunkle oder ästhetische Handles testen",
            description:
              "Teste mehrere Stimmungen schnell, wenn Stil, Ton und Merkbarkeit wichtiger sind als wörtliche Bedeutung.",
          },
        ],
        examplesDescription:
          "Starke Ausgaben sollten kurz genug zum Nutzen, leicht genug zum Merken und eigen genug zum Besitzen sein.",
        examples: [
          {
            title: "Cooles Profil-Handle",
            inputLabel: "Setup",
            input: "Keyword: orbit\nStyle: Cool\nLength: Short\nSymbols: Clean\nPronounceable: On",
            outputLabel: "Ausgabe",
            output: "orbitlane\nvexaflow\nsorashift",
            note: "Wirkt deutlich eher wie ein brauchbares Handle als wie zufällige Silbenreste.",
          },
          {
            title: "Dunkler Gaming-Nickname",
            inputLabel: "Setup",
            input: "Keyword: raven\nStyle: Dark\nLength: Balanced\nSymbols: Light\nPronounceable: Off",
            outputLabel: "Ausgabe",
            output: "ravenveil\nnoxdrift\nonyxmark",
            note: "Hilfreich, wenn es düsterer wirken soll, ohne unlesbar zu werden.",
          },
        ],
        faqs: [
          {
            question: "Kommt bei jeder Generierung ein neuer Batch?",
            answer:
              "Ja. Jede Generierung rotiert auf einen frischen Batch, damit du mit denselben Einstellungen weiter neue Richtungen testen kannst.",
          },
          {
            question: "Geht es mehr um Bedeutung oder um Form?",
            answer:
              "Es geht um ein brauchbares Handle, das zum gewählten Vibe passt. Ein starker Nickname braucht nicht immer eine wörtliche Bedeutung.",
          },
          {
            question: "Sollte ich Symbole aktiviert lassen?",
            answer:
              "Meist lohnt sich ein Start mit sauberer oder leichter Stilgebung. So bleibt der Nickname lesbarer und leichter plattformübergreifend nutzbar.",
          },
        ],
      },
    },
    "qr-generator": {
      shortDescription:
        "Wandle jeden Link oder Text in einen QR-Code um und lade ihn sofort herunter.",
      description:
        "Erstelle QR-Codes im Browser mit Live-Vorschau, mehreren QR-Typen und schnellem PNG- oder SVG-Download.",
      eyebrow: "Utility-Tool",
      metaDescription:
        "Erzeuge QR-Codes für Links, Text, E-Mail, Telefon oder WiFi und lade sie direkt als PNG oder SVG herunter.",
      highlights: [
        "Die QR-Vorschau aktualisiert sich sofort während der Eingabe.",
        "Der Download bleibt mit direktem PNG- und SVG-Export einfach.",
        "Nützlich für Links, Menüs, Events und schnelle Sharing-Flows.",
      ],
      structuredDescription:
        "Kostenloser Online-QR-Code-Generator mit Live-Vorschau, mehreren QR-Typen und PNG- oder SVG-Download.",
      content: {
        howToUseDescription:
          "Das Tool funktioniert am besten, wenn du zuerst den passenden QR-Typ wählst und die Vorschau prüfst, bevor du die finale Datei herunterlädst.",
        howToUseSteps: [
          {
            title: "QR-Typ wählen",
            body:
              "Wähle URL, Text, E-Mail, Telefon oder WiFi, damit der codierte Inhalt zur gewünschten Aktion nach dem Scan passt.",
          },
          {
            title: "Details eingeben und Vorschau prüfen",
            body:
              "Gib den Inhalt ein, passe Größe und Farben bei Bedarf an und prüfe, ob die Vorschau sauber und scannbar bleibt.",
          },
          {
            title: "Passendes Format herunterladen",
            body:
              "Nutze PNG für schnelle digitale Einsätze oder SVG für skalierbare Dateien in Druck und Design.",
          },
        ],
        useCasesDescription:
          "QR-Codes sind am stärksten, wenn du einen schnellen Übergang von einer physischen Fläche zu einem klaren digitalen Ziel brauchst.",
        useCases: [
          {
            title: "Menü-, Event- oder Profil-Links",
            description:
              "Mach aus einer Landingpage, Speisekarte, Buchungsseite oder einem Creator-Profil in Sekunden einen scannbaren Code.",
          },
          {
            title: "WiFi und Kontaktdaten teilen",
            description:
              "Erzeuge schnelle QR-Codes für Gast-WiFi, E-Mail-Adressen oder Telefonnummern, wenn die Übergabe sauberer sein soll als manuelles Tippen.",
          },
          {
            title: "Poster, Print und Verpackung",
            description:
              "Nutze SVG für saubere Print-Workflows, wenn der Code in unterschiedlichen Größen scharf bleiben soll.",
          },
        ],
        examplesDescription:
          "Diese Setups zeigen, welche QR-Ausgaben auf einer Utility-Seite wie dieser typischerweise gebraucht werden.",
        examples: [
          {
            title: "QR für Website-Link",
            inputLabel: "Setup",
            input: "Typ: URL\nWert: https://toolyflow.com/en/bio-generator\nGröße: 320 px",
            outputLabel: "Ergebnis",
            output: "Ein scannbarer Website-QR, bereit für PNG- oder SVG-Download.",
            note: "Nützlich für Flyer, Profilkarten und schnelle Sharing-Flows.",
          },
          {
            title: "QR für Gast-WiFi",
            inputLabel: "Setup",
            input: "Typ: WiFi\nSSID: StudioGuest\nPassword: CreateFast24\nSecurity: WPA",
            outputLabel: "Ergebnis",
            output: "Ein QR, mit dem Besucher dem Netzwerk beitreten können, ohne das Passwort zu tippen.",
            note: "Praktisch für Cafés, Studios, Büros und Events.",
          },
        ],
        faqs: [
          {
            question: "Kann ich mehr als nur URLs erzeugen?",
            answer:
              "Ja. Das Tool unterstützt URL, Text, E-Mail, Telefon und WiFi, damit der Code zur gewünschten Aktion passt.",
          },
          {
            question: "Soll ich PNG oder SVG herunterladen?",
            answer:
              "PNG reicht meist für schnelle digitale Einsätze. SVG ist besser, wenn du eine skalierbare Datei für Druck oder Design brauchst.",
          },
          {
            question: "Aktualisiert sich der QR-Code live?",
            answer:
              "Ja. Die Vorschau aktualisiert sich bei Änderungen am Inhalt oder an den Einstellungen, sodass du das Ergebnis vor dem Download prüfen kannst.",
          },
        ],
      },
    },
    "case-converter": {
      shortDescription:
        "Wandle Text in uppercase, lowercase, sentence, title, camel, snake und kebab um.",
      description:
        "Wechsle das Textformat sofort, vergleiche mehrere Ausgaben nebeneinander und kopiere genau die Version, die du brauchst.",
      eyebrow: "Textformatierungs-Tool",
      metaDescription:
        "Wandle Text in uppercase, lowercase, sentence case, title case, camelCase, snake_case und mehr um.",
      highlights: [
        "Schnell für Überschriften, Captions, Notizen und Formatierungschecks.",
        "Hält alle Ausgaben gleichzeitig sichtbar, statt unnötige Zusatzklicks zu erzwingen.",
        "Funktioniert sauber auf Smartphone, Tablet und Desktop.",
      ],
      structuredDescription:
        "Kostenloser Online-Case-Converter für uppercase, lowercase, sentence case, title case, camelCase, snake_case und kebab-case.",
      content: {
        howToUseDescription:
          "Die Seite ist für schnelle Compare-and-Copy-Workflows gebaut: einmal einfügen, mehrere Formate prüfen und sofort die passende Ausgabe kopieren.",
        howToUseSteps: [
          {
            title: "Quelltext einfügen",
            body:
              "Füge den Text ein, den du bereinigen oder umformatieren willst. Die Ansichten aktualisieren sich sofort beim Tippen oder Einfügen.",
          },
          {
            title: "Ausgabeformate vergleichen",
            body:
              "Prüfe uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case und kebab-case direkt nebeneinander.",
          },
          {
            title: "Genau das richtige Ergebnis kopieren",
            body:
              "Nutze den Copy-Button auf der Karte, die zu deinem Workflow passt, egal ob für Content, Variablen, Slugs oder Titel.",
          },
        ],
        useCasesDescription:
          "Das Tool ist am stärksten, wenn Text schnell zwischen Content-, Produkt- und Entwicklungs-Kontexten wechseln muss.",
        useCases: [
          {
            title: "Überschriften und Content bereinigen",
            description:
              "Wechsle zwischen sentence case, title case, Groß- oder Kleinschreibung beim Bearbeiten von Headlines, Captions und Notizen.",
          },
          {
            title: "Entwickler-Namensformate",
            description:
              "Erzeuge camelCase, PascalCase, snake_case oder kebab-case für Variablen, Routen und Feldnamen.",
          },
          {
            title: "Schnelle Formatvergleiche",
            description:
              "Halte mehrere Ausgabestile gleichzeitig sichtbar, damit der richtige ohne Zusatzschritte kopiert werden kann.",
          },
        ],
        examplesDescription:
          "Ein guter Case Converter sollte Unterschiede zwischen Eingabe und Ausgabe auf den ersten Blick klar machen.",
        examples: [
          {
            title: "Überschriftenformat",
            inputLabel: "Eingabe",
            input: "build fast tools without extra friction",
            outputLabel: "Ausgabe",
            output:
              "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
            note: "Praktisch, wenn du schnell zwischen redaktionellen Stilen entscheiden musst.",
          },
          {
            title: "Developer-Naming",
            inputLabel: "Eingabe",
            input: "fast online tools",
            outputLabel: "Ausgabe",
            output:
              "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
            note: "Hilfreich für Slugs, Variablen und einfache Naming-Aufgaben.",
          },
        ],
        faqs: [
          {
            question: "Welche Formate kann ich kopieren?",
            answer:
              "Die Seite liefert uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text und eine single-line-Ausgabe.",
          },
          {
            question: "Kann ich mehrere Formate gleichzeitig vergleichen?",
            answer:
              "Ja. Die Ausgaben bleiben gemeinsam sichtbar, damit du Stile vergleichen und direkt die richtige Version kopieren kannst.",
          },
          {
            question: "Ist das Tool auch für Entwicklung nützlich?",
            answer:
              "Ja. Es ist sowohl für Schreibarbeit als auch für technische Namensgebung nützlich, besonders beim Wechsel zwischen Content- und Code-Formaten.",
          },
        ],
      },
    },
    "decision-wheel": {
      shortDescription:
        "Dreh durch Optionen, wenn du eine leichte Utility für schnelle Entscheidungen brauchst.",
      description:
        "Nutze einen zufälligen Picker mit Animation und klarem Ergebnis, wenn du ein Extra-Tool außerhalb der Kernflüsse brauchst.",
      eyebrow: "Schnelle Utility",
      metaDescription:
        "Gib Optionen ein, dreh das Rad und erhalte ein zufälliges Ergebnis mit einem kostenlosen Decision Wheel.",
      highlights: [
        "Nützlich für schnelle Team-Entscheidungen, Content-Ideen und kleine Auswahlmomente.",
        "Die Animation macht das Ergebnis klar und interaktiv.",
        "Alles bleibt einfach, responsiv und clientseitig.",
      ],
      structuredDescription:
        "Kostenloses Online-Decision-Wheel zum Drehen durch Optionen und Wählen eines Zufallsergebnisses.",
      content: {
        howToUseDescription:
          "Dieses Tool ist bewusst leicht gehalten. Füge klare Optionen ein, drehe einmal und nutze das Ergebnis für eine schnelle Entscheidung ohne Grübeln.",
        howToUseSteps: [
          {
            title: "Optionen eintragen",
            body:
              "Gib jede Wahl in eine eigene Zeile, damit das Rad die Optionen sauber verteilen kann.",
          },
          {
            title: "Rad drehen",
            body:
              "Starte den Spin und lass das Rad eine endgültige Auswahl treffen, statt ähnliche Optionen weiter auszudiskutieren.",
          },
          {
            title: "Ergebnis nutzen oder Liste anpassen",
            body:
              "Nimm das Ergebnis für eine schnelle Entscheidung oder ändere die Liste und drehe erneut, wenn eher die Optionenauswahl selbst noch nicht passt.",
          },
        ],
        useCasesDescription:
          "Das Rad ist am hilfreichsten für kleine Entscheidungen, bei denen Tempo wichtiger ist als tiefe Analyse.",
        useCases: [
          {
            title: "Content- und Naming-Auswahl",
            description:
              "Wähle zwischen Post-Ideen, Titeln oder Shortlists, wenn du nur einen schnellen Tie-Breaker brauchst.",
          },
          {
            title: "Team-Mikroentscheidungen",
            description:
              "Nutze es für Reihenfolge, Rotation oder kleine gemeinsame Auswahlmomente.",
          },
          {
            title: "Kleine Alltagsentscheidungen",
            description:
              "Durchbrich Unentschlossenheit bei simplen Tagesoptionen, ohne die Seite zu verlassen.",
          },
        ],
        examplesDescription:
          "Die besten Einsatzfälle sind kurze Listen mit echtem Bedarf an einer einfachen Schlussentscheidung.",
        examples: [
          {
            title: "Content-Ideen-Shortlist",
            inputLabel: "Eingabe",
            input: "Behind the scenes\nNew tool demo\nWorkflow tips\nLaunch update",
            outputLabel: "Ergebnis",
            output: "Das Rad landet auf einer Option und zeigt eine finale Auswahl an.",
            note: "Hilfreich, wenn die Shortlist schon gut genug ist und nur noch eine letzte Wahl fehlt.",
          },
          {
            title: "Mittagspause wählen",
            inputLabel: "Eingabe",
            input: "Pizza\nSushi\nSalad\nBurgers",
            outputLabel: "Ergebnis",
            output: "Nach dem Spin wird eine Option ausgewählt.",
            note: "Ein einfacher Alltagsfall für die leichtere Utility-Schicht.",
          },
        ],
        faqs: [
          {
            question: "Wofür eignet sich das Decision Wheel am besten?",
            answer:
              "Am besten für schnelle Entscheidungen mit geringem Risiko, bei denen ein einfacher Zufallspick sinnvoller ist als langes Diskutieren.",
          },
          {
            question: "Kann ich die Optionen vor dem Drehen noch bearbeiten?",
            answer:
              "Ja. Du kannst die Liste vor dem Spin umschreiben, damit nur die Optionen drin sind, die du wirklich berücksichtigen willst.",
          },
          {
            question: "Ist das Teil des Hauptfokus von Toolyflow?",
            answer:
              "Es gehört zur leichteren Utility-Schicht. Der Hauptfokus des Produkts liegt weiterhin auf Text-Tools und Creator-Tools.",
          },
        ],
      },
    },
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Grundwort oder Idee",
    keywordPlaceholder: "z. B. licht, pixel, rabe",
    styleLabel: "Stil wählen",
    lengthLabel: "Länge",
    symbolsLabel: "Symbole",
    pronounceableLabel: "Aussprechbar",
    generateMore: "Mehr erzeugen",
    copyButton: "Kopieren",
    tapToCopy: "Zum Kopieren tippen",
    copied: "In die Zwischenablage kopiert",
    toggleOn: "An",
    toggleOff: "Aus",
    styles: {
      cool: "Cool",
      dark: "Dunkel",
      gaming: "Gaming",
      aesthetic: "Ästhetisch",
    },
    lengthModes: {
      short: "Kurz",
      balanced: "Ausgewogen",
      long: "Lang",
    },
    symbolModes: {
      none: "Klar",
      light: "Leicht",
      bold: "Stilisiert",
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
    lengthLabel: "Länge",
    emojiLabel: "Emoji",
    ctaLabel: "CTA-Zeile",
    generate: "Bio erzeugen",
    copy: "Kopieren",
    copied: "Kopiert",
    toggleOn: "An",
    toggleOff: "Aus",
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
      playful: "Verspielt",
      sharp: "Scharf",
    },
    lengths: {
      short: "Kurz",
      balanced: "Ausgewogen",
      long: "Lang",
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
  caseConverter: {
    inputLabel: "Text einfügen",
    placeholder: "Text eingeben oder einfügen, um ihn umzuwandeln.",
    characters: "Zeichen",
    words: "Wörter",
    lines: "Zeilen",
    readingTime: "Lesezeit",
    clearText: "Text leeren",
    uppercase: "Großbuchstaben",
    lowercase: "Kleinbuchstaben",
    sentenceCase: "Sentence case",
    titleCase: "Title Case",
    camelCase: "camelCase",
    pascalCase: "PascalCase",
    snakeCase: "snake_case",
    kebabCase: "kebab-case",
    trimmedText: "Bereinigter Text",
    singleLine: "Eine Zeile",
    copy: "Kopieren",
    copied: "Kopiert",
  },
  qrGenerator: {
    inputLabel: "Text oder URL",
    placeholder: "Einen Link, Coupon-Text oder eine Nachricht einfügen.",
    download: "PNG herunterladen",
    downloadSvg: "SVG herunterladen",
    clear: "Leeren",
    livePreview: "Live-Vorschau",
    emptyState: "Text oder Link hinzufügen, um sofort einen QR-Code zu erzeugen.",
    generating: "QR-Code wird erzeugt...",
    helper: "Alles läuft clientseitig mit Live-Vorschau, Formatauswahl und direktem Download.",
    typeLabel: "QR-Typ",
    sizeLabel: "Größe",
    foregroundLabel: "Vordergrund",
    backgroundLabel: "Hintergrund",
    urlMode: "URL",
    textMode: "Text",
    emailMode: "E-Mail",
    phoneMode: "Telefon",
    wifiMode: "WiFi",
    emailLabel: "E-Mail-Adresse",
    subjectLabel: "Betreff",
    bodyLabel: "Nachricht",
    phoneLabel: "Telefonnummer",
    ssidLabel: "WiFi-Name",
    passwordLabel: "Passwort",
    securityLabel: "Sicherheit",
    securityWpa: "WPA",
    securityWep: "WEP",
    securityOpen: "Offen",
  },
  decisionWheel: {
    inputLabel: "Eine Option pro Zeile",
    button: "Rad drehen",
    spinning: "Dreht...",
    helper:
      "Mindestens zwei Optionen hinzufügen. Das Rad läuft komplett clientseitig und zeigt am Ende den Gewinner an.",
    resultLabel: "Ergebnis",
    emptyResult: "Zum Gewinnerauswählen auf Drehen klicken",
    starterOptions: [
      "Veröffentlichen",
      "Kaffeepause",
      "Später überarbeiten",
      "Entwurf senden",
      "Notizen machen",
      "Live gehen",
    ],
  },
});

const fr = translateDictionary(en, "fr", {
  localeCode: "fr_FR",
  siteDescription: "Outils en ligne rapides, simples et gratuits.",
  header: { tools: "Outils", about: "À propos", contact: "Contact", menu: "Ouvrir le menu" },
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
    searchLabel: "Trouver une page rapidement",
    searchPlaceholder: "Rechercher des outils et catégories",
    searchEmpty: "Aucun résultat pour cette recherche pour l'instant.",
    proofEyebrow: "En pratique",
    proofTitle: "Ce que l'on peut vraiment faire ici",
    proofDescription:
      "Au lieu de promesses vagues, ces exemples montrent les petites tâches réelles que les outils actuels peuvent déjà aider à terminer.",
    proofExamples: [
      {
        title: "Nettoyer du texte copié rapidement",
        description:
          "Utilisez Case Converter lorsqu'un titre, une note ou un bloc de texte doit être reformatté puis recopié immédiatement.",
        toolSlug: "case-converter",
        toolName: "Case Converter",
        inputLabel: "Exemple de réglage",
        input: "launch your next creator page with cleaner text",
        outputLabel: "Sortie utile",
        output:
          "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
      },
      {
        title: "Générer une bio publiable",
        description:
          "Utilisez Bio Generator pour comparer plusieurs bios courtes par plateforme au lieu de repartir de zéro à chaque fois.",
        toolSlug: "bio-generator",
        toolName: "Bio Generator",
        inputLabel: "Exemple de réglage",
        input: "Plateforme: Instagram\nTon: Cool\nLongueur: Balanced\nCTA: On",
        outputLabel: "Sortie utile",
        output:
          "visuel propre, présence régulière\ncontenu simple, identité forte\nouvert aux collabs",
      },
      {
        title: "Trouver une vraie direction de handle",
        description:
          "Utilisez Nickname Generator lorsque vous avez besoin d'une shortlist plus propre pour le social, le gaming ou un profil de créateur.",
        toolSlug: "nickname-generator",
        toolName: "Nickname Generator",
        inputLabel: "Exemple de réglage",
        input: "Keyword: orbit\nStyle: Cool\nLength: Short\nPronounceable: On",
        outputLabel: "Sortie utile",
        output: "orbitlane\nvexaflow\nsorashift",
      },
    ],
    whyEyebrow: "Pourquoi Toolyflow",
    whyTitle: "Ce que le produit essaie de bien faire",
    whyDescription:
      "Le but n'est pas de paraître plus grand que le produit. Le but est de rendre quelques pages utiles plus claires, plus fiables et plus faciles à réutiliser.",
    brandPoints: [
      {
        title: "Utile vite",
        description:
          "Une visite doit pouvoir coller, générer ou convertir quelque chose d'utile en quelques secondes.",
      },
      {
        title: "Périmètre clair",
        description:
          "Le site se resserre autour des flux texte et créateur pour paraître moins aléatoire et plus cohérent.",
      },
      {
        title: "Le retour doit avoir du sens",
        description:
          "Les pages doivent rester calmes, lisibles et légères pour que revenir sur le même besoin soit naturel.",
      },
    ],
    pathsEyebrow: "Commencer ici",
    pathsTitle: "Des entrées plus claires dans la bibliothèque",
    pathsDescription:
      "Ces groupes de liens sont les chemins les plus nets dans le produit actuel, au lieu de laisser le visiteur deviner où commencer.",
    paths: [
      {
        title: "Parcours nettoyage de texte",
        description:
          "Entrez dans la couche d'outils de formatage et de nettoyage qui doit encore s'étoffer.",
        links: [{ label: "Case Converter", slug: "case-converter" }],
      },
      {
        title: "Parcours profil créateur",
        description:
          "Utilisez bios, pseudos et outils de profil dans le même cluster.",
        links: [
          { label: "Bio Generator", slug: "bio-generator" },
          { label: "Nickname Generator", slug: "nickname-generator" },
          { label: "QR Code Generator", slug: "qr-generator" },
        ],
      },
      {
        title: "Parcours utility rapide",
        description:
          "Accédez aux outils plus légers quand vous avez besoin d'une sortie simple sans casser le flux principal.",
        links: [
          { label: "QR Code Generator", slug: "qr-generator" },
          { label: "Decision Wheel", slug: "decision-wheel" },
        ],
      },
    ],
    useCasesEyebrow: "Cas d'usage",
    useCasesTitle: "Les usages qui devraient faire revenir",
    useCasesDescription:
      "Les meilleurs outils reviennent dans de vrais workflows. C'est pour ces moments que Toolyflow se construit.",
    useCases: [
      {
        title: "Nettoyage rapide de texte",
        description:
          "Corrigez titres, notes et textes collés sans ouvrir plusieurs pages pour une seule tâche.",
      },
      {
        title: "Préparation de profils",
        description:
          "Préparez bios, handles et petits éléments de profil pour Instagram, TikTok, X, YouTube ou Twitch.",
      },
      {
        title: "Petites tâches créateur",
        description:
          "Gérez QR, utilitaires légers et petites décisions sans sortir du flux principal.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Les questions qu'un vrai produit doit traiter",
    faqs: [
      {
        question: "Sur quoi Toolyflow se concentre-t-il actuellement ?",
        answer:
          "Toolyflow se concentre sur les outils de texte, les outils pour créateurs et une couche plus légère d'utilitaires rapides. L'idée est d'être clair et utile avant de paraître large.",
      },
      {
        question: "Les outils sont-ils gratuits ?",
        answer:
          "Oui. La version actuelle repose sur des outils rapides et gratuits dans le navigateur, sans obligation de créer un compte.",
      },
      {
        question: "Le site fonctionne-t-il bien sur mobile ?",
        answer:
          "Oui. L'interface est pensée pour que les mêmes outils restent lisibles et propres sur mobile, tablette et ordinateur.",
      },
    ],
  },
  staticPages: {
    about: {
      eyebrow: "À propos de Toolyflow",
      metaTitle: "À propos",
      metaDescription:
        "Découvrez qui gère Toolyflow, pourquoi il existe et comment le produit est construit.",
      title: "Un produit d'outils ciblé pour les utilités du quotidien",
      description:
        "Toolyflow se construit comme un produit d'outils en ligne pratique, centré sur l'utilité rapide, des sorties claires et des pages qu'on peut réutiliser.",
      sections: [
        {
          title: "Qui gère Toolyflow",
          body:
            "Toolyflow fonctionne comme un produit web indépendant centré sur des outils utiles dans le navigateur, sans friction inutile liée aux comptes et sans backend lourd.",
        },
        {
          title: "Pourquoi Toolyflow existe",
          body:
            "Le produit existe pour résoudre rapidement de petites tâches répétées. Au lieu d'envoyer les utilisateurs sur des pages chargées, Toolyflow cherche à garder les flux principaux propres, rapides et faciles à réutiliser.",
        },
        {
          title: "Ce sur quoi le produit se concentre",
          body:
            "Toolyflow se concentre sur les outils de texte, les outils pour créateurs et une couche plus légère d'utilitaires rapides.",
          items: [
            "Outils de texte pour nettoyage, formatage et tâches d'écriture rapides.",
            "Outils pour bios, noms, handles et workflows de profil.",
            "Une couche utility plus légère pour les petites tâches qui restent cohérentes avec le produit.",
          ],
        },
        {
          title: "Comment le produit est construit",
          body:
            "L'objectif est de publier des pages utiles, pas de surcomplexifier la stack. La plupart des outils tournent côté client pour garder le site rapide, maintenable et fiable sur mobile, tablette et desktop.",
        },
        {
          title: "Comment contacter l'équipe",
          body:
            "Utilisez les adresses ci-dessous selon la raison du message. Support et bugs doivent rester séparés des conversations business.",
          items: [
            "Utilisez info@toolyflow.com pour les problèmes d'outils, le support et les retours généraux.",
            "Utilisez hello@toolyflow.com pour les partenariats, la publicité, les collaborations et les demandes business.",
          ],
          emailLabel: "Contact général",
          email: "hello@toolyflow.com",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      metaTitle: "Contact",
      metaDescription:
        "Contactez Toolyflow pour le support, les partenariats, la publicité ou les questions générales.",
      title: "Contacter l'équipe Toolyflow",
      description:
        "Utilisez la bonne voie de contact pour le support, les bugs, les partenariats, la publicité ou les questions produit.",
      sections: [
        {
          title: "Support et problèmes du site",
          body:
            "Pour les bugs, pages cassées, retours ou support général, écrivez d'abord à la boîte de support.",
          items: [
            "Idéal pour les rapports de bugs et erreurs de page.",
            "Idéal pour les retours sur la qualité ou l'usage des outils.",
            "Idéal pour les questions générales sur le fonctionnement du site.",
          ],
          emailLabel: "Email support",
          email: "info@toolyflow.com",
        },
        {
          title: "Partenariats, publicité et business",
          body:
            "Pour les partenariats, le sponsoring, la publicité ou d'autres échanges business, utilisez la boîte business pour séparer ces demandes du support.",
          items: [
            "Ajoutez le nom de votre société ou projet.",
            "Expliquez le type de collaboration souhaité.",
            "Ajoutez calendrier, budget ou détails de campagne si utile.",
          ],
          emailLabel: "Email business",
          email: "hello@toolyflow.com",
        },
        {
          title: "Que mettre dans un email de support",
          body:
            "Plus le signalement est clair, plus il peut être relu et reproduit vite.",
          items: [
            "L'URL exacte de la page concernée.",
            "Votre appareil, navigateur et type d'écran si possible.",
            "Une courte note expliquant ce que vous attendiez et ce qui s'est réellement passé.",
          ],
        },
        {
          title: "Fonctionnement des réponses",
          body:
            "Les messages sont relus manuellement. Les rapports d'outils, retours produit et demandes business peuvent suivre des délais différents selon le volume et la priorité.",
          items: [
            "Les messages support doivent rester précis et assez détaillés pour reproduire le problème.",
            "Les demandes business doivent indiquer clairement l'objectif du contact.",
            "En cas de doute, utilisez hello@toolyflow.com.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Politique de confidentialité",
      metaTitle: "Politique de confidentialité",
      metaDescription:
        "Lisez la politique de confidentialité de Toolyflow pour comprendre cookies, publicité, consentement et traitement des données.",
      title: "Politique de confidentialité",
      description:
        "Cette page explique comment Toolyflow gère les entrées dans le navigateur, les cookies, les services tiers, les technologies publicitaires et le consentement des visiteurs.",
      sections: [
        {
          title: "Gestion des informations",
          body:
            "Toolyflow est conçu pour garder la première version légère. La plupart des outils fonctionnent directement dans le navigateur, donc les entrées sont généralement traitées côté client plutôt qu'envoyées à un backend.",
        },
        {
          title: "Cookies et stockage local",
          body:
            "Toolyflow et ses prestataires peuvent utiliser des cookies, le stockage local ou des technologies similaires pour faire fonctionner le site, comprendre le trafic, mémoriser certaines préférences, mesurer la performance et soutenir la publicité.",
          items: [
            "Les cookies peuvent être utilisés pour la fonctionnalité, l'analytics et la mesure liée à la publicité.",
            "Certaines données du navigateur peuvent être créées directement par des services embarqués ou des technologies publicitaires.",
            "Vous pouvez gérer ou supprimer les cookies depuis votre navigateur à tout moment.",
          ],
        },
        {
          title: "Publicité et prestataires tiers",
          body:
            "Toolyflow peut travailler avec des prestataires tiers, y compris Google, pour diffuser des annonces, mesurer leur performance et comprendre l'usage du site.",
          items: [
            "Google et d'autres prestataires peuvent utiliser des cookies pour diffuser des annonces en fonction des visites précédentes sur ce site ou sur d'autres sites.",
            "Les prestataires publicitaires peuvent combiner des signaux techniques liés au navigateur et à l'appareil pour la diffusion, le contrôle de fréquence, la prévention de la fraude et le reporting.",
            "Les partenaires d'hébergement, d'analytics, de sécurité et de publicité peuvent traiter les données techniques nécessaires à leurs services.",
          ],
        },
        {
          title: "Consentement et choix des visiteurs",
          body:
            "Lorsque la loi applicable l'exige, Toolyflow peut demander un consentement avant d'utiliser des cookies non essentiels ou certaines technologies publicitaires.",
          items: [
            "Vous pouvez être invité à accepter, refuser ou gérer certaines catégories de cookies.",
            "Le retrait du consentement peut réduire certaines fonctions de personnalisation, d'analytics ou de publicité.",
            "Vous pouvez aussi gérer de nombreuses préférences publicitaires via votre navigateur ou les paramètres Google Ads.",
          ],
        },
        {
          title: "Contact confidentialité",
          body:
            "Si vous avez une question liée à la confidentialité, aux cookies ou aux services publicitaires, utilisez l'adresse suivante.",
          emailLabel: "Contact confidentialité",
          email: "info@toolyflow.com",
        },
        {
          title: "Mises à jour de la politique",
          body:
            "Cette politique peut évoluer avec le produit. Les changements futurs seront publiés sur cette page.",
        },
        {
          title: "Analytics et prestataires",
          body:
            "Toolyflow peut utiliser des services d'analytics, d'hébergement, de sécurité ou de publicité pour comprendre le trafic, garder le site disponible et soutenir une future monétisation.",
        },
      ],
    },
    "terms-of-service": {
      eyebrow: "Conditions d'utilisation",
      metaTitle: "Conditions d'utilisation",
      metaDescription:
        "Lisez les conditions d'utilisation de Toolyflow pour connaître les règles générales, limites et conditions du site.",
      title: "Conditions d'utilisation",
      description:
        "Ces conditions décrivent les règles générales d'utilisation de Toolyflow et de ses outils en ligne.",
      sections: [
        {
          title: "Usage du site",
          body:
            "Toolyflow est fourni à des fins d'information générale et d'utilité. En utilisant le site, vous acceptez d'utiliser les outils de manière légale et sans perturber le fonctionnement normal du service.",
        },
        {
          title: "Aucune garantie d'adéquation",
          body:
            "Les outils sont fournis tels quels. Même si le produit vise la fiabilité et la précision, Toolyflow ne garantit pas que chaque sortie conviendra à tous les cas d'usage business, juridiques ou techniques.",
        },
        {
          title: "Évolutions futures",
          body:
            "Les fonctionnalités, pages et politiques peuvent changer avec le temps. L'usage continu du site après mise à jour vaut acceptation de la version en vigueur.",
        },
      ],
    },
  },
  tools: {
    "bio-generator": {
      shortDescription:
        "Générez des bios plus nettes pour Instagram, TikTok, X, YouTube et Twitch.",
      description:
        "Générez des bios par plateforme, ton, longueur, emoji et CTA, puis copiez la version qui colle à votre profil.",
      eyebrow: "Outil de profil social",
      metaDescription:
        "Générez des bios pour Instagram, TikTok, X, YouTube et Twitch avec des réglages de ton, longueur, emoji et CTA.",
      highlights: [
        "Les réglages de ton, longueur, emoji et CTA rendent la sortie plus précise.",
        "Très utile pour les profils sociaux, pages créateur et bios de chaîne.",
        "Chaque génération renvoie un nouveau lot à comparer rapidement.",
      ],
      structuredDescription:
        "Générateur de bio gratuit pour profils créateur avec contrôles de plateforme, ton, longueur, emoji et CTA.",
      content: {
        howToUseDescription:
          "Les meilleurs résultats arrivent quand on choisit d'abord une plateforme et un ton, puis qu'on réduit le lot à la version qui sonne vraiment comme le profil.",
        howToUseSteps: [
          {
            title: "Choisir plateforme et ton",
            body:
              "Commencez par la plateforme visée, puis choisissez le ton le plus proche de votre manière de vous présenter : clair, fort, personnel, minimal ou plus mystérieux.",
          },
          {
            title: "Régler le format",
            body:
              "Ajustez longueur, emoji et CTA pour que le lot se rapproche d'une bio que vous pourriez réellement publier.",
          },
          {
            title: "Générer, comparer et copier",
            body:
              "Générez un nouveau lot, comparez les options les plus solides et copiez celle qui tient bien sans trop d'édition.",
          },
        ],
        useCasesDescription:
          "L'outil marche le mieux quand vous avez besoin de plusieurs bios prêtes à publier sans réécrire à chaque fois.",
        useCases: [
          {
            title: "Rafraîchir un profil créateur",
            description:
              "Générez des options plus propres quand votre bio Instagram, TikTok, X, YouTube ou Twitch paraît plate, datée ou trop générique.",
          },
          {
            title: "Lancer une nouvelle chaîne",
            description:
              "Trouvez une première bio plus serrée quand vous ouvrez un nouveau compte créateur et voulez une présence plus intentionnelle dès le départ.",
          },
          {
            title: "Tester plusieurs positionnements",
            description:
              "Comparez une direction plus minimale, plus nette, plus joueuse ou plus professionnelle avant de mettre à jour le profil public.",
          },
        ],
        examplesDescription:
          "Voici les types de bios courtes que la page devrait permettre d'obtenir après quelques générations.",
        examples: [
          {
            title: "Bio Instagram",
            inputLabel: "Réglage",
            input: "Plateforme: Instagram\nTon: Cool\nLongueur: Balanced\nEmoji: Off\nCTA: On",
            outputLabel: "Sortie",
            output:
              "visuel propre, présence régulière\ncontenu simple, identité forte\nouvert aux collabs",
            note: "Utile quand on veut un profil créateur direct sans paraître trop écrit.",
          },
          {
            title: "Bio de chaîne YouTube",
            inputLabel: "Réglage",
            input: "Plateforme: YouTube\nTon: Professional\nLongueur: Short\nEmoji: Off\nCTA: Off",
            outputLabel: "Sortie",
            output: "voix claire, uploads réguliers\nvidéos utiles publiées avec constance",
            note: "Adapté aux pages de chaîne qui doivent sembler crédibles et structurées.",
          },
        ],
        faqs: [
          {
            question: "La bio change-t-elle à chaque génération ?",
            answer:
              "Oui. Chaque génération renvoie un nouveau lot pour comparer plusieurs directions au lieu d'une réponse figée.",
          },
          {
            question: "Quelles plateformes sont prises en charge ?",
            answer:
              "L'outil est réglé pour Instagram, TikTok, X, YouTube et Twitch afin que la sortie ressemble davantage à de vraies bios de ces plateformes.",
          },
          {
            question: "Puis-je utiliser la bio telle quelle ?",
            answer:
              "Oui, mais le meilleur flux consiste à générer plusieurs lots, garder la meilleure base puis faire une petite retouche finale.",
          },
        ],
      },
    },
    "nickname-generator": {
      shortDescription:
        "Créez des idées de pseudos en styles cool, sombre, gaming et esthétique.",
      description:
        "Générez des nicknames mémorables avec mot-clé optionnel et copie rapide pour vos sessions de brainstorming.",
      eyebrow: "Outil d'idées de nom",
      metaDescription:
        "Créez des idées de nickname en styles cool, sombre, gaming et esthétique avec un générateur en ligne gratuit.",
      highlights: [
        "Utile pour usernames, handles sociaux, alias créateur et tags gaming.",
        "Les filtres de style, longueur, symboles et lisibilité gardent les résultats plus proches du vibe recherché.",
        "Chaque suggestion se copie en un geste et peut être renouvelée dans un nouveau lot.",
      ],
      structuredDescription:
        "Générateur gratuit de nicknames pour handles cool, dark, gaming et esthétiques avec contrôles de style et de lisibilité.",
      content: {
        howToUseDescription:
          "Les meilleurs résultats viennent souvent d'une direction claire, de longueurs plus courtes et d'un styling léger, sauf si vous voulez volontairement un handle plus marqué.",
        howToUseSteps: [
          {
            title: "Partir d'un vibe ou d'un mot-clé",
            body:
              "Entrez un mot court si vous avez déjà une piste, ou laissez plus ouvert et laissez le style guider le lot.",
          },
          {
            title: "Choisir style, longueur et symboles",
            body:
              "Décidez si le rendu doit paraître cool, sombre, gaming ou esthétique, puis gardez longueur et symboles alignés avec vos plateformes.",
          },
          {
            title: "Rafraîchir jusqu'au bon résultat",
            body:
              "Générez de nouveaux lots jusqu'à voir un pseudo qui semble utilisable, lisible et vraiment appropriable.",
          },
        ],
        useCasesDescription:
          "L'outil est le plus fort quand vous cherchez un handle avec de l'allure, pas un mot de dictionnaire littéral.",
        useCases: [
          {
            title: "Tags gaming et usernames",
            description:
              "Générez des handles plus courts et plus nets pour Discord, Twitch, Steam ou des profils de jeu.",
          },
          {
            title: "Chercher un alias créateur",
            description:
              "Utilisez-le pour trouver une direction plus possédable avant de figer un username public ou un alias plus marque.",
          },
          {
            title: "Tester des handles sombres ou esthétiques",
            description:
              "Essayez plusieurs vibes rapidement quand le style, le ton et la mémorisation comptent plus que le sens littéral.",
          },
        ],
        examplesDescription:
          "Les meilleures sorties doivent être assez courtes pour être utilisées, assez nettes pour être retenues et assez distinctes pour être adoptées.",
        examples: [
          {
            title: "Handle cool pour profil",
            inputLabel: "Réglage",
            input: "Keyword: orbit\nStyle: Cool\nLength: Short\nSymbols: Clean\nPronounceable: On",
            outputLabel: "Sortie",
            output: "orbitlane\nvexaflow\nsorashift",
            note: "On est plus proche de vrais handles que de syllabes cassées aléatoires.",
          },
          {
            title: "Pseudo gaming sombre",
            inputLabel: "Réglage",
            input: "Keyword: raven\nStyle: Dark\nLength: Balanced\nSymbols: Light\nPronounceable: Off",
            outputLabel: "Sortie",
            output: "ravenveil\nnoxdrift\nonyxmark",
            note: "Utile quand on veut quelque chose de plus sombre sans le rendre illisible.",
          },
        ],
        faqs: [
          {
            question: "Le générateur renvoie-t-il un nouveau lot à chaque fois ?",
            answer:
              "Oui. Chaque génération passe à un nouveau lot pour continuer à explorer avec les mêmes réglages.",
          },
          {
            question: "L'important, c'est le sens ou l'allure ?",
            answer:
              "L'objectif est un pseudo utilisable qui colle au vibe choisi. Un bon résultat n'a pas toujours besoin d'un sens de dictionnaire strict.",
          },
          {
            question: "Faut-il garder les symboles activés ?",
            answer:
              "Le plus souvent, mieux vaut commencer avec un style clean ou léger. Le pseudo reste ainsi plus lisible et plus facile à réutiliser entre plateformes.",
          },
        ],
      },
    },
    "qr-generator": {
      shortDescription:
        "Transformez n'importe quel lien ou texte en QR code et téléchargez-le instantanément.",
      description:
        "Créez des QR codes dans le navigateur avec aperçu en direct, plusieurs types de QR et téléchargement rapide en PNG ou SVG.",
      eyebrow: "Outil utility",
      metaDescription:
        "Générez des QR codes pour liens, texte, email, téléphone ou WiFi et téléchargez-les en PNG ou SVG.",
      highlights: [
        "L'aperçu du QR se met à jour en direct pendant la saisie.",
        "Le téléchargement reste simple avec export direct en PNG ou SVG.",
        "Utile pour liens, menus, événements et partages rapides.",
      ],
      structuredDescription:
        "Générateur gratuit de QR codes avec aperçu en direct, plusieurs types de QR et téléchargement PNG ou SVG.",
      content: {
        howToUseDescription:
          "L'outil fonctionne le mieux quand vous choisissez d'abord le bon type de QR puis validez l'aperçu avant de télécharger le fichier final.",
        howToUseSteps: [
          {
            title: "Choisir le type de QR",
            body:
              "Sélectionnez URL, texte, email, téléphone ou WiFi pour que le contenu encodé corresponde à l'action attendue après le scan.",
          },
          {
            title: "Renseigner les détails et vérifier l'aperçu",
            body:
              "Entrez le contenu, ajustez taille et couleurs si besoin, puis vérifiez que l'aperçu reste propre et scannable.",
          },
          {
            title: "Télécharger le bon format",
            body:
              "Utilisez PNG pour un usage numérique rapide ou SVG pour un fichier scalable destiné à l'impression ou au design.",
          },
        ],
        useCasesDescription:
          "Les QR codes sont les plus utiles quand il faut relier rapidement une surface physique à une destination numérique claire.",
        useCases: [
          {
            title: "Liens de menu, d'événement ou de profil",
            description:
              "Transformez une landing page, un menu, une page de réservation ou un profil créateur en code scannable en quelques secondes.",
          },
          {
            title: "WiFi et partage de contact",
            description:
              "Créez des QR rapides pour un WiFi invité, une adresse email ou un numéro quand c'est plus propre que tout saisir à la main.",
          },
          {
            title: "Affiches, print et packaging",
            description:
              "Utilisez SVG quand le code doit rester net à plusieurs tailles dans un flux print.",
          },
        ],
        examplesDescription:
          "Ces réglages montrent les types de QR que l'on génère le plus souvent sur une utility page comme celle-ci.",
        examples: [
          {
            title: "QR pour lien web",
            inputLabel: "Réglage",
            input: "Type: URL\nValeur: https://toolyflow.com/en/bio-generator\nTaille: 320 px",
            outputLabel: "Résultat",
            output: "Un QR scannable prêt à être téléchargé en PNG ou SVG.",
            note: "Utile pour flyers, cartes de profil et flux de partage rapide.",
          },
          {
            title: "QR pour WiFi invité",
            inputLabel: "Réglage",
            input: "Type: WiFi\nSSID: StudioGuest\nPassword: CreateFast24\nSecurity: WPA",
            outputLabel: "Résultat",
            output: "Un QR qui permet de rejoindre le réseau sans saisir le mot de passe à la main.",
            note: "Pratique pour cafés, studios, bureaux et événements.",
          },
        ],
        faqs: [
          {
            question: "Puis-je générer autre chose que des URLs ?",
            answer:
              "Oui. L'outil prend en charge URL, texte, email, téléphone et WiFi pour que le QR corresponde au type d'action souhaité.",
          },
          {
            question: "Faut-il télécharger en PNG ou en SVG ?",
            answer:
              "PNG suffit souvent pour un usage numérique rapide. SVG est meilleur quand il faut un fichier scalable pour l'impression ou le design.",
          },
          {
            question: "Le QR se met-il à jour en direct ?",
            answer:
              "Oui. L'aperçu se met à jour à chaque modification du contenu ou des réglages, ce qui aide à valider le résultat avant téléchargement.",
          },
        ],
      },
    },
    "case-converter": {
      shortDescription:
        "Convertissez du texte entre uppercase, lowercase, sentence, title, camel, snake et kebab.",
      description:
        "Changez instantanément le format du texte, comparez plusieurs sorties côte à côte et copiez la bonne version.",
      eyebrow: "Outil de formatage de texte",
      metaDescription:
        "Convertissez du texte en uppercase, lowercase, sentence case, title case, camelCase, snake_case et plus encore.",
      highlights: [
        "Rapide pour les titres, captions, notes et contrôles de format.",
        "Garde les sorties visibles ensemble au lieu d'ajouter des clics inutiles.",
        "Fonctionne proprement sur mobile, tablette et desktop.",
      ],
      structuredDescription:
        "Case converter gratuit pour uppercase, lowercase, sentence case, title case, camelCase, snake_case et kebab-case.",
      content: {
        howToUseDescription:
          "La page est pensée pour des flux rapides de collage, comparaison et copie : coller une fois, vérifier plusieurs formats et prendre le bon immédiatement.",
        howToUseSteps: [
          {
            title: "Coller le texte source",
            body:
              "Déposez le texte à nettoyer ou reformater. Les vues de sortie se recalculent au moment où vous tapez ou collez.",
          },
          {
            title: "Comparer les formats",
            body:
              "Comparez uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case et kebab-case directement côte à côte.",
          },
          {
            title: "Copier le résultat exact",
            body:
              "Utilisez le bouton de copie de la carte qui colle à votre usage, que ce soit pour du contenu, des variables, des slugs ou des titres.",
          },
        ],
        useCasesDescription:
          "L'outil est le plus utile quand un texte doit passer vite entre contexte éditorial, produit et développement.",
        useCases: [
          {
            title: "Nettoyage de titres et de contenu",
            description:
              "Passez entre sentence case, title case, majuscules ou minuscules en éditant titres, captions et notes.",
          },
          {
            title: "Formats de nommage pour le dev",
            description:
              "Générez camelCase, PascalCase, snake_case ou kebab-case pour des variables, routes et noms de champs.",
          },
          {
            title: "Comparaison rapide de formats",
            description:
              "Gardez plusieurs styles visibles en même temps pour comparer et copier le bon sans détour.",
          },
        ],
        examplesDescription:
          "Un bon case converter doit rendre la différence entre entrée et sortie évidente d'un seul coup d'œil.",
        examples: [
          {
            title: "Format de titre",
            inputLabel: "Entrée",
            input: "build fast tools without extra friction",
            outputLabel: "Sortie",
            output:
              "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
            note: "Utile quand il faut choisir rapidement entre plusieurs styles éditoriaux.",
          },
          {
            title: "Nommage pour le développement",
            inputLabel: "Entrée",
            input: "fast online tools",
            outputLabel: "Sortie",
            output:
              "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
            note: "Pratique pour les slugs, variables et tâches simples de naming.",
          },
        ],
        faqs: [
          {
            question: "Quels formats puis-je copier ?",
            answer:
              "La page propose uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text et une sortie single-line.",
          },
          {
            question: "Puis-je comparer plusieurs formats en même temps ?",
            answer:
              "Oui. Les sorties restent visibles ensemble pour comparer les styles et copier la bonne version sans ouvrir une autre page.",
          },
          {
            question: "Est-ce utile aussi pour le développement ?",
            answer:
              "Oui. C'est utile à la fois pour l'écriture et pour le naming technique, surtout quand on passe d'un format éditorial à un format orienté code.",
          },
        ],
      },
    },
    "decision-wheel": {
      shortDescription:
        "Faites tourner des options quand vous avez besoin d'une utility légère pour un choix rapide.",
      description:
        "Utilisez un sélecteur aléatoire avec animation et résultat clair quand vous voulez un outil bonus en dehors des flux principaux.",
      eyebrow: "Utility rapide",
      metaDescription:
        "Entrez des choix, faites tourner la roue et obtenez un résultat aléatoire avec une decision wheel gratuite.",
      highlights: [
        "Utile pour les décisions rapides, idées de contenu et petits choix d'équipe.",
        "L'animation rend le résultat clair et interactif.",
        "Tout reste simple, responsive et côté client.",
      ],
      structuredDescription:
        "Decision wheel gratuite pour faire tourner des options et obtenir un résultat aléatoire.",
      content: {
        howToUseDescription:
          "Cet outil est volontairement léger. Ajoutez des options claires, lancez un tour et utilisez le résultat quand vous voulez décider vite sans trop réfléchir.",
        howToUseSteps: [
          {
            title: "Ajouter les choix",
            body:
              "Entrez chaque option sur une ligne séparée pour que la roue répartisse proprement les choix avant le lancement.",
          },
          {
            title: "Faire tourner la roue",
            body:
              "Lancez le spin et laissez la roue trancher au lieu de continuer à débattre entre options proches.",
          },
          {
            title: "Utiliser le résultat ou refaire la liste",
            body:
              "Prenez le résultat pour une décision rapide, ou ajustez la liste et relancez si le vrai problème vient des options elles-mêmes.",
          },
        ],
        useCasesDescription:
          "La roue aide surtout pour les petites décisions où la vitesse compte plus qu'une analyse approfondie.",
        useCases: [
          {
            title: "Choix d'idées de contenu ou de noms",
            description:
              "Choisissez entre idées de posts, titres ou shortlists quand il ne vous faut qu'un tie-break rapide.",
          },
          {
            title: "Micro-décisions d'équipe",
            description:
              "Utilisez-la pour l'ordre, la rotation ou de petites décisions collectives.",
          },
          {
            title: "Petits choix personnels",
            description:
              "Débloquez une hésitation sur de petites options du quotidien sans quitter la page.",
          },
        ],
        examplesDescription:
          "Les meilleurs cas d'usage sont des listes courtes avec un vrai besoin d'une décision finale simple.",
        examples: [
          {
            title: "Shortlist d'idées de contenu",
            inputLabel: "Entrée",
            input: "Behind the scenes\nNew tool demo\nWorkflow tips\nLaunch update",
            outputLabel: "Résultat",
            output: "La roue s'arrête sur une option et affiche un choix final unique.",
            note: "Utile quand la shortlist est déjà assez bonne et qu'il ne manque qu'un dernier choix.",
          },
          {
            title: "Choix du déjeuner",
            inputLabel: "Entrée",
            input: "Pizza\nSushi\nSalad\nBurgers",
            outputLabel: "Résultat",
            output: "Une option est sélectionnée après le spin.",
            note: "Un cas d'usage simple et quotidien pour la couche utility légère.",
          },
        ],
        faqs: [
          {
            question: "À quoi sert le mieux la decision wheel ?",
            answer:
              "Elle est surtout utile pour des choix rapides et peu risqués, quand un tirage simple vaut mieux qu'une longue discussion.",
          },
          {
            question: "Puis-je modifier les options avant de lancer ?",
            answer:
              "Oui. Vous pouvez réécrire la liste avant le spin pour ne garder que les options que vous voulez réellement considérer.",
          },
          {
            question: "Fait-elle partie du focus principal de Toolyflow ?",
            answer:
              "Elle appartient à la couche utility plus légère. Le focus principal du produit reste les outils de texte et les outils pour créateurs.",
          },
        ],
      },
    },
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Mot de base ou idée",
    keywordPlaceholder: "ex. lune, pixel, ombre",
    styleLabel: "Choisir un style",
    lengthLabel: "Longueur",
    symbolsLabel: "Symboles",
    pronounceableLabel: "Prononçable",
    generateMore: "Générer plus",
    copyButton: "Copier",
    tapToCopy: "Touchez pour copier",
    copied: "Copié dans le presse-papiers",
    toggleOn: "Oui",
    toggleOff: "Non",
    styles: {
      cool: "Cool",
      dark: "Sombre",
      gaming: "Gaming",
      aesthetic: "Esthétique",
    },
    lengthModes: {
      short: "Courte",
      balanced: "Équilibrée",
      long: "Longue",
    },
    symbolModes: {
      none: "Propre",
      light: "Léger",
      bold: "Stylisé",
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
    lengthLabel: "Longueur",
    emojiLabel: "Emoji",
    ctaLabel: "Ligne CTA",
    generate: "Générer une bio",
    copy: "Copier",
    copied: "Copié",
    toggleOn: "Oui",
    toggleOff: "Non",
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
      playful: "Joueur",
      sharp: "Tranchant",
    },
    lengths: {
      short: "Courte",
      balanced: "Équilibrée",
      long: "Longue",
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
  caseConverter: {
    inputLabel: "Collez votre texte",
    placeholder: "Saisissez ou collez du texte à convertir.",
    characters: "Caractères",
    words: "Mots",
    lines: "Lignes",
    readingTime: "Temps de lecture",
    clearText: "Effacer le texte",
    uppercase: "Majuscules",
    lowercase: "Minuscules",
    sentenceCase: "Sentence case",
    titleCase: "Title Case",
    camelCase: "camelCase",
    pascalCase: "PascalCase",
    snakeCase: "snake_case",
    kebabCase: "kebab-case",
    trimmedText: "Texte nettoyé",
    singleLine: "Une ligne",
    copy: "Copier",
    copied: "Copié",
  },
  qrGenerator: {
    inputLabel: "Texte ou URL",
    placeholder: "Collez un lien, un texte de coupon ou un message.",
    download: "Télécharger en PNG",
    downloadSvg: "Télécharger en SVG",
    clear: "Effacer",
    livePreview: "Aperçu en direct",
    emptyState: "Ajoutez du texte ou un lien pour générer un QR code instantanément.",
    generating: "Génération du QR code...",
    helper: "Tout fonctionne côté client avec aperçu en direct, choix du format et téléchargement direct.",
    typeLabel: "Type de QR",
    sizeLabel: "Taille",
    foregroundLabel: "Premier plan",
    backgroundLabel: "Arrière-plan",
    urlMode: "URL",
    textMode: "Texte",
    emailMode: "Email",
    phoneMode: "Téléphone",
    wifiMode: "WiFi",
    emailLabel: "Adresse email",
    subjectLabel: "Sujet",
    bodyLabel: "Message",
    phoneLabel: "Numéro",
    ssidLabel: "Nom du WiFi",
    passwordLabel: "Mot de passe",
    securityLabel: "Sécurité",
    securityWpa: "WPA",
    securityWep: "WEP",
    securityOpen: "Ouvert",
  },
  decisionWheel: {
    inputLabel: "Une option par ligne",
    button: "Faire tourner la roue",
    spinning: "En rotation...",
    helper:
      "Ajoutez au moins deux options. La roue fonctionne entièrement côté client et affiche le gagnant à la fin du spin.",
    resultLabel: "Résultat",
    emptyResult: "Appuyez sur tourner pour choisir un gagnant",
    starterOptions: [
      "Publier",
      "Pause café",
      "Revoir plus tard",
      "Envoyer le brouillon",
      "Prendre des notes",
      "Passer en live",
    ],
  },
});

const pt = translateDictionary(en, "pt", {
  localeCode: "pt_PT",
  siteDescription: "Ferramentas online rápidas, simples e grátis.",
  header: { tools: "Ferramentas", about: "Sobre", contact: "Contato", menu: "Abrir menu" },
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
    searchLabel: "Encontre uma página rápido",
    searchPlaceholder: "Busque ferramentas e categorias",
    searchEmpty: "Ainda não há resultados para essa busca.",
    proofEyebrow: "Na prática",
    proofTitle: "O que realmente dá para resolver aqui",
    proofDescription:
      "Em vez de promessas genéricas, estes exemplos mostram os tipos de tarefas rápidas que as ferramentas atuais já conseguem fechar.",
    proofExamples: [
      {
        title: "Limpar texto copiado em segundos",
        description:
          "Use o Case Converter quando um título, uma nota ou um bloco de texto precisar ser reformulado e copiado imediatamente.",
        toolSlug: "case-converter",
        toolName: "Case Converter",
        inputLabel: "Exemplo de configuração",
        input: "launch your next creator page with cleaner text",
        outputLabel: "Saída útil",
        output:
          "Title Case: Launch Your Next Creator Page With Cleaner Text\nkebab-case: launch-your-next-creator-page-with-cleaner-text",
      },
      {
        title: "Gerar uma bio publicável",
        description:
          "Use o Bio Generator para comparar várias bios curtas por plataforma sem começar do zero toda vez.",
        toolSlug: "bio-generator",
        toolName: "Bio Generator",
        inputLabel: "Exemplo de configuração",
        input: "Plataforma: Instagram\nTom: Cool\nTamanho: Balanced\nCTA: On",
        outputLabel: "Saída útil",
        output:
          "visual limpo, presença constante\nconteúdo simples, identidade forte\naberto para collabs",
      },
      {
        title: "Encontrar um handle mais usável",
        description:
          "Use o Nickname Generator quando você precisar de uma shortlist mais limpa para social, gaming ou perfis de criador.",
        toolSlug: "nickname-generator",
        toolName: "Nickname Generator",
        inputLabel: "Exemplo de configuração",
        input: "Keyword: orbit\nStyle: Cool\nLength: Short\nPronounceable: On",
        outputLabel: "Saída útil",
        output: "orbitlane\nvexaflow\nsorashift",
      },
    ],
    whyEyebrow: "Por que Toolyflow",
    whyTitle: "O que o produto está tentando acertar",
    whyDescription:
      "O objetivo não é parecer maior do que o produto realmente é. O objetivo é tornar algumas páginas úteis mais claras, mais confiáveis e mais fáceis de reutilizar.",
    brandPoints: [
      {
        title: "Útil rápido",
        description:
          "A visita deve conseguir colar, gerar ou converter algo útil em poucos segundos.",
      },
      {
        title: "Escopo claro",
        description:
          "O site está se fechando em torno de fluxos de texto e de criador para parecer menos aleatório e mais coerente.",
      },
      {
        title: "Vale a pena voltar",
        description:
          "As páginas devem continuar leves, legíveis e calmas para que voltar à mesma tarefa faça sentido.",
      },
    ],
    pathsEyebrow: "Comece aqui",
    pathsTitle: "Entradas mais claras para a biblioteca",
    pathsDescription:
      "Esses grupos de links são as formas mais diretas de entrar no produto atual sem obrigar o visitante a adivinhar onde começar.",
    paths: [
      {
        title: "Caminho de limpeza de texto",
        description:
          "Entre na camada de formatação e limpeza que deve continuar crescendo dentro do produto.",
        links: [{ label: "Case Converter", slug: "case-converter" }],
      },
      {
        title: "Caminho de perfil de criador",
        description:
          "Use bios, nicknames e ferramentas de apoio ao perfil dentro do mesmo cluster.",
        links: [
          { label: "Bio Generator", slug: "bio-generator" },
          { label: "Nickname Generator", slug: "nickname-generator" },
          { label: "QR Code Generator", slug: "qr-generator" },
        ],
      },
      {
        title: "Caminho utility rápido",
        description:
          "Acesse ferramentas mais leves quando precisar de uma saída simples sem sair do fluxo principal.",
        links: [
          { label: "QR Code Generator", slug: "qr-generator" },
          { label: "Decision Wheel", slug: "decision-wheel" },
        ],
      },
    ],
    useCasesEyebrow: "Casos de uso",
    useCasesTitle: "Fluxos que devem trazer visitas repetidas",
    useCasesDescription:
      "As melhores ferramentas voltam a aparecer em tarefas reais. É para esses momentos que Toolyflow está sendo moldado.",
    useCases: [
      {
        title: "Limpeza rápida de texto",
        description:
          "Ajuste títulos, notas e textos colados sem abrir várias páginas para uma tarefa simples.",
      },
      {
        title: "Preparação de perfis",
        description:
          "Prepare bios, handles e pequenos blocos de perfil para Instagram, TikTok, X, YouTube ou Twitch.",
      },
      {
        title: "Pequenas tarefas de criador",
        description:
          "Resolva QR, utilidades leves e decisões rápidas sem quebrar o fluxo principal.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas que um produto real precisa responder",
    faqs: [
      {
        question: "No que Toolyflow está focando agora?",
        answer:
          "Toolyflow está focando em ferramentas de texto, ferramentas para criadores e uma camada mais leve de utilidades rápidas. A ideia é ser claro e útil antes de parecer enorme.",
      },
      {
        question: "As ferramentas são gratuitas?",
        answer:
          "Sim. A versão atual gira em torno de ferramentas rápidas e gratuitas que funcionam no navegador sem exigir conta.",
      },
      {
        question: "Funciona bem no celular?",
        answer:
          "Sim. A interface está sendo desenhada para que as mesmas ferramentas continuem legíveis e limpas em celular, tablet e desktop.",
      },
    ],
  },
  staticPages: {
    about: {
      eyebrow: "Sobre Toolyflow",
      metaTitle: "Sobre",
      metaDescription:
        "Saiba quem opera a Toolyflow, por que ela existe e como o produto está sendo construído.",
      title: "Um produto de ferramentas focado em utilidade do dia a dia",
      description:
        "Toolyflow está sendo construída como um produto prático de ferramentas online, focado em utilidade rápida, saída clara e páginas que valem ser reutilizadas.",
      sections: [
        {
          title: "Quem opera a Toolyflow",
          body:
            "Toolyflow funciona como um produto web independente focado em ferramentas úteis no navegador, sem fricção desnecessária de conta e sem um backend pesado.",
        },
        {
          title: "Por que Toolyflow existe",
          body:
            "O produto existe para resolver tarefas pequenas e repetidas com rapidez. Em vez de jogar o usuário em páginas carregadas, Toolyflow tenta manter os fluxos principais limpos, rápidos e fáceis de revisitar.",
        },
        {
          title: "No que o produto está focado",
          body:
            "Toolyflow está focando em ferramentas de texto, ferramentas para criadores e uma camada menor de utilidades rápidas.",
          items: [
            "Ferramentas de texto para limpeza, formatação e tarefas rápidas de escrita.",
            "Ferramentas para bios, nomes, handles e fluxos de perfil.",
            "Uma camada utility menor para tarefas leves que ainda fazem sentido dentro do produto.",
          ],
        },
        {
          title: "Como o produto é construído",
          body:
            "A meta é publicar páginas úteis, não complicar demais a stack. A maioria das ferramentas roda no client para manter o site rápido, sustentável e confiável em celular, tablet e desktop.",
        },
        {
          title: "Como falar com a equipe",
          body:
            "Use os endereços abaixo de acordo com o motivo do contato. Suporte e bugs devem ficar separados de conversas comerciais.",
          items: [
            "Use info@toolyflow.com para problemas em ferramentas, dúvidas de suporte e feedback geral.",
            "Use hello@toolyflow.com para parcerias, publicidade, colaborações e assuntos de negócio.",
          ],
          emailLabel: "Contato geral",
          email: "hello@toolyflow.com",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      metaTitle: "Contato",
      metaDescription:
        "Fale com a Toolyflow para suporte, parcerias, publicidade ou dúvidas gerais sobre o site.",
      title: "Entre em contato com a equipe Toolyflow",
      description:
        "Use o canal certo para suporte, bugs, parcerias, publicidade ou perguntas gerais sobre o produto.",
      sections: [
        {
          title: "Suporte e problemas no site",
          body:
            "Para erros em ferramentas, páginas quebradas, feedback ou suporte geral, escreva primeiro para a caixa de suporte.",
          items: [
            "Melhor para relatórios de bug e erros de página.",
            "Melhor para feedback sobre qualidade ou usabilidade das ferramentas.",
            "Melhor para dúvidas gerais sobre como o site funciona.",
          ],
          emailLabel: "Email de suporte",
          email: "info@toolyflow.com",
        },
        {
          title: "Parcerias, anúncios e negócios",
          body:
            "Para parcerias, patrocínios, publicidade ou outras conversas comerciais, use a caixa business para manter esses pedidos separados do suporte.",
          items: [
            "Inclua o nome da sua empresa ou projeto.",
            "Explique o tipo de colaboração que você busca.",
            "Adicione prazo, faixa de orçamento ou detalhes de campanha se fizer sentido.",
          ],
          emailLabel: "Email comercial",
          email: "hello@toolyflow.com",
        },
        {
          title: "O que incluir em emails de suporte",
          body:
            "Quanto mais claro for o relato, mais rápido ele pode ser revisado e reproduzido.",
          items: [
            "A URL exata da página em que o problema aconteceu.",
            "Seu dispositivo, navegador e tipo de tela, se possível.",
            "Uma nota curta explicando o que você esperava e o que realmente aconteceu.",
          ],
        },
        {
          title: "Como as respostas funcionam",
          body:
            "As mensagens são revisadas manualmente. Relatos de ferramentas, feedback de produto e pedidos comerciais podem seguir ritmos diferentes de resposta conforme volume e prioridade.",
          items: [
            "Mensagens de suporte devem ser objetivas e trazer detalhes suficientes para reproduzir o problema.",
            "Pedidos comerciais devem deixar claro o objetivo do contato.",
            "Se houver dúvida, use hello@toolyflow.com.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Política de privacidade",
      metaTitle: "Política de privacidade",
      metaDescription:
        "Leia a política de privacidade da Toolyflow para entender cookies, publicidade, consentimento e tratamento de dados.",
      title: "Política de privacidade",
      description:
        "Esta página explica como Toolyflow lida com entradas no navegador, cookies, serviços de terceiros, tecnologias publicitárias e consentimento do visitante.",
      sections: [
        {
          title: "Tratamento das informações",
          body:
            "Toolyflow foi desenhada para manter a primeira versão leve. A maior parte das ferramentas roda diretamente no navegador, então as entradas do usuário normalmente são processadas no client em vez de enviadas a um backend.",
        },
        {
          title: "Cookies e armazenamento local",
          body:
            "Toolyflow e seus prestadores podem usar cookies, armazenamento local ou tecnologias semelhantes para manter o site funcionando, entender tráfego, lembrar preferências limitadas, medir desempenho e apoiar publicidade.",
          items: [
            "Cookies podem ser usados para funcionalidade do site, analytics e medição ligada à publicidade.",
            "Alguns dados do navegador podem ser criados por serviços embutidos ou tecnologias de anúncios.",
            "Você pode controlar ou apagar cookies a qualquer momento nas configurações do navegador.",
          ],
        },
        {
          title: "Publicidade e terceiros",
          body:
            "Toolyflow pode trabalhar com fornecedores terceiros, incluindo Google, para exibir anúncios, medir desempenho publicitário e entender o uso do site.",
          items: [
            "Google e outros fornecedores podem usar cookies para servir anúncios com base em visitas anteriores a este ou outros sites.",
            "Fornecedores de anúncios podem combinar sinais técnicos de navegador e dispositivo para entrega, frequência, prevenção de fraude e relatórios.",
            "Parceiros de hospedagem, analytics, segurança e publicidade podem processar dados técnicos necessários aos seus serviços.",
          ],
        },
        {
          title: "Consentimento e escolhas do visitante",
          body:
            "Quando exigido por lei, Toolyflow pode pedir consentimento antes de usar cookies não essenciais ou determinadas tecnologias publicitárias.",
          items: [
            "Você pode ser convidado a aceitar, rejeitar ou gerenciar certas categorias de cookies.",
            "Retirar o consentimento depois pode reduzir recursos de personalização, analytics ou publicidade.",
            "Também é possível gerenciar muitas preferências de anúncios no navegador ou nas configurações do Google Ads.",
          ],
        },
        {
          title: "Contato de privacidade",
          body:
            "Se você tiver uma dúvida ligada à privacidade, cookies ou serviços de anúncios, use o endereço abaixo.",
          emailLabel: "Contato de privacidade",
          email: "info@toolyflow.com",
        },
        {
          title: "Atualizações da política",
          body:
            "Esta política pode ser atualizada conforme o produto evolui. Mudanças futuras serão refletidas nesta mesma página.",
        },
        {
          title: "Analytics e provedores de serviço",
          body:
            "Toolyflow pode usar serviços de analytics, hospedagem, segurança ou publicidade para entender tráfego, manter o site disponível e apoiar monetização futura.",
        },
      ],
    },
    "terms-of-service": {
      eyebrow: "Termos de serviço",
      metaTitle: "Termos de serviço",
      metaDescription:
        "Leia os termos de serviço da Toolyflow para entender regras gerais, limites e condições do site.",
      title: "Termos de serviço",
      description:
        "Esses termos descrevem as condições gerais para uso da Toolyflow e de suas ferramentas online.",
      sections: [
        {
          title: "Uso do site",
          body:
            "Toolyflow é oferecida para fins informativos e de utilidade geral. Ao usar o site, você concorda em usar as ferramentas de forma legal e sem interferir no funcionamento normal do serviço.",
        },
        {
          title: "Sem garantia de adequação",
          body:
            "As ferramentas são oferecidas como estão. Embora o produto busque ser confiável e preciso, Toolyflow não garante que toda saída sirva para qualquer caso de uso comercial, legal ou técnico.",
        },
        {
          title: "Atualizações futuras",
          body:
            "Recursos, páginas e políticas podem mudar ao longo do tempo. O uso contínuo do site após essas mudanças significa aceitação da versão atual destes termos.",
        },
      ],
    },
  },
  tools: {
    "bio-generator": {
      shortDescription:
        "Gere bios mais limpas para Instagram, TikTok, X, YouTube e Twitch.",
      description:
        "Gere bios por plataforma, tom, tamanho, emoji e CTA e copie a versão que melhor encaixa no seu perfil.",
      eyebrow: "Ferramenta de perfil social",
      metaDescription:
        "Gere bios para Instagram, TikTok, X, YouTube e Twitch com controles de tom, tamanho, emoji e CTA.",
      highlights: [
        "Os controles de tom, tamanho, emoji e CTA deixam a saída mais precisa.",
        "Funciona bem para perfis sociais, páginas de criador e bios de canal.",
        "Cada geração devolve um lote novo para comparar rápido.",
      ],
      structuredDescription:
        "Gerador online grátis de bios para perfis de criador com controles de plataforma, tom, tamanho, emoji e CTA.",
      content: {
        howToUseDescription:
          "Os melhores resultados aparecem quando você escolhe primeiro plataforma e tom, e depois reduz o lote até sobrar a opção que realmente parece seu perfil.",
        howToUseSteps: [
          {
            title: "Escolha plataforma e tom",
            body:
              "Comece pela plataforma para a qual você está escrevendo e depois selecione o tom que mais combina com sua forma de aparecer: limpo, forte, pessoal, minimal ou mais misterioso.",
          },
          {
            title: "Ajuste os filtros de formato",
            body:
              "Mude tamanho, emoji e CTA para que o lote fique mais próximo do tipo de bio que você realmente publicaria.",
          },
          {
            title: "Gere, compare e copie",
            body:
              "Gere um lote novo, compare as opções mais fortes e copie a versão que encaixa sem precisar de muita edição.",
          },
        ],
        useCasesDescription:
          "A ferramenta funciona melhor quando você precisa de várias bios prontas para perfil sem ter que escrever tudo do zero.",
        useCases: [
          {
            title: "Atualizar um perfil de criador",
            description:
              "Gere opções mais limpas quando a bio do Instagram, TikTok, X, YouTube ou Twitch estiver sem força, antiga ou genérica demais.",
          },
          {
            title: "Abrir um canal novo",
            description:
              "Encontre uma primeira bio mais fechada quando estiver lançando uma nova conta e quiser um perfil mais intencional desde o começo.",
          },
          {
            title: "Testar posicionamentos diferentes",
            description:
              "Compare uma direção mais minimal, mais afiada, mais divertida ou mais profissional antes de mudar o perfil público.",
          },
        ],
        examplesDescription:
          "Esses são os tipos de bios curtas que a página deve ajudar você a alcançar depois de algumas gerações.",
        examples: [
          {
            title: "Bio para Instagram",
            inputLabel: "Configuração",
            input: "Plataforma: Instagram\nTom: Cool\nTamanho: Balanced\nEmoji: Off\nCTA: On",
            outputLabel: "Saída",
            output:
              "visual limpo, presença constante\nconteúdo simples, identidade forte\naberto para collabs",
            note: "Boa quando você quer um perfil de criador direto sem soar exagerado.",
          },
          {
            title: "Bio para canal do YouTube",
            inputLabel: "Configuração",
            input: "Plataforma: YouTube\nTom: Professional\nTamanho: Short\nEmoji: Off\nCTA: Off",
            outputLabel: "Saída",
            output:
              "voz clara, uploads consistentes\nvídeos úteis publicados com regularidade",
            note: "Funciona para páginas de canal que precisam parecer confiáveis e organizadas.",
          },
        ],
        faqs: [
          {
            question: "A bio muda a cada geração?",
            answer:
              "Sim. Cada clique devolve um lote novo para comparar várias direções em vez de uma resposta travada.",
          },
          {
            question: "Quais plataformas o gerador cobre?",
            answer:
              "A ferramenta está ajustada para Instagram, TikTok, X, YouTube e Twitch para que a saída fique mais próxima de bios reais dessas plataformas.",
          },
          {
            question: "Posso usar a bio do jeito que saiu?",
            answer:
              "Sim, mas o fluxo mais forte costuma ser gerar alguns lotes, escolher a melhor base e fazer um ajuste final pequeno para ficar mais pessoal.",
          },
        ],
      },
    },
    "nickname-generator": {
      shortDescription:
        "Crie ideias de nickname em estilos cool, dark, gaming e aesthetic.",
      description:
        "Gere nicknames memoráveis com palavra-base opcional e cópia rápida para brainstorming.",
      eyebrow: "Ferramenta de ideias de nome",
      metaDescription:
        "Crie ideias de nickname em estilos cool, dark, gaming e aesthetic com um gerador online grátis.",
      highlights: [
        "Útil para usernames, handles sociais, aliases de criador e tags de gaming.",
        "Os filtros de estilo, tamanho, símbolos e legibilidade mantêm os resultados mais próximos do vibe desejado.",
        "Cada sugestão pode ser copiada em um toque e renovada em um lote novo.",
      ],
      structuredDescription:
        "Gerador online grátis de nicknames para handles cool, dark, gaming e aesthetic com controles de estilo e legibilidade.",
      content: {
        howToUseDescription:
          "Os melhores resultados normalmente saem de uma direção clara, comprimentos menores e styling leve, a menos que você queira algo mais marcante de propósito.",
        howToUseSteps: [
          {
            title: "Comece com um vibe ou palavra-chave",
            body:
              "Digite uma palavra curta se já tiver uma pista, ou deixe mais aberto e deixe o estilo conduzir o lote.",
          },
          {
            title: "Escolha estilo, tamanho e símbolos",
            body:
              "Defina se o resultado deve parecer cool, dark, gaming ou aesthetic e mantenha tamanho e símbolos alinhados com as plataformas que você vai usar.",
          },
          {
            title: "Renove até parecer seu",
            body:
              "Gere novos lotes até surgir um nickname que pareça usável, soe bem e valha a pena guardar.",
          },
        ],
        useCasesDescription:
          "A ferramenta é mais forte quando você procura um handle com presença e estilo, não uma palavra literal de dicionário.",
        useCases: [
          {
            title: "Tags de gaming e usernames",
            description:
              "Gere handles mais curtos e mais fortes para Discord, Twitch, Steam ou perfis dentro de jogos.",
          },
          {
            title: "Buscar um alias de criador",
            description:
              "Use a ferramenta para encontrar uma direção mais própria antes de fixar um username público ou um alias mais de marca.",
          },
          {
            title: "Testar handles dark ou aesthetic",
            description:
              "Experimente vários vibes rapidamente quando estilo, tom e memorização importam mais do que significado literal.",
          },
        ],
        examplesDescription:
          "As melhores saídas devem ser curtas o suficiente para usar, claras o suficiente para lembrar e distintas o suficiente para virar algo seu.",
        examples: [
          {
            title: "Handle cool para perfil",
            inputLabel: "Configuração",
            input: "Keyword: orbit\nStyle: Cool\nLength: Short\nSymbols: Clean\nPronounceable: On",
            outputLabel: "Saída",
            output: "orbitlane\nvexaflow\nsorashift",
            note: "Parece mais um handle de verdade do que um conjunto aleatório de sílabas.",
          },
          {
            title: "Nickname dark para gaming",
            inputLabel: "Configuração",
            input: "Keyword: raven\nStyle: Dark\nLength: Balanced\nSymbols: Light\nPronounceable: Off",
            outputLabel: "Saída",
            output: "ravenveil\nnoxdrift\nonyxmark",
            note: "Útil quando você quer algo mais sombrio sem perder legibilidade.",
          },
        ],
        faqs: [
          {
            question: "O gerador devolve um lote novo a cada vez?",
            answer:
              "Sim. Cada geração gira para um lote novo para que você continue explorando com as mesmas configurações.",
          },
          {
            question: "O mais importante é o significado ou a forma?",
            answer:
              "A meta é um nickname usável que combine com o vibe escolhido. Um bom resultado não precisa ter um significado literal rígido.",
          },
          {
            question: "Vale a pena deixar símbolos ligados?",
            answer:
              "Na maior parte dos casos vale começar com visual clean ou leve. Isso mantém o nickname mais legível e mais fácil de reutilizar entre plataformas.",
          },
        ],
      },
    },
    "qr-generator": {
      shortDescription:
        "Transforme qualquer link ou texto em QR code e baixe na hora.",
      description:
        "Crie QR codes no navegador com preview ao vivo, vários tipos de QR e download rápido em PNG ou SVG.",
      eyebrow: "Ferramenta utility",
      metaDescription:
        "Gere QR codes para links, texto, email, telefone ou WiFi e baixe instantaneamente em PNG ou SVG.",
      highlights: [
        "O preview do QR atualiza em tempo real enquanto você digita.",
        "O download continua simples com exportação direta em PNG ou SVG.",
        "Útil para links, menus, eventos e fluxos de compartilhamento rápido.",
      ],
      structuredDescription:
        "Gerador online grátis de QR code com preview ao vivo, vários tipos de QR e download em PNG ou SVG.",
      content: {
        howToUseDescription:
          "A ferramenta funciona melhor quando você escolhe primeiro o tipo certo de QR e confirma o preview antes de baixar o arquivo final.",
        howToUseSteps: [
          {
            title: "Escolha o tipo de QR",
            body:
              "Selecione URL, texto, email, telefone ou WiFi para que o conteúdo codificado combine com a ação esperada depois do scan.",
          },
          {
            title: "Preencha os dados e revise o preview",
            body:
              "Adicione o conteúdo, ajuste tamanho e cores se precisar e confirme que o preview continua limpo e escaneável.",
          },
          {
            title: "Baixe no formato certo",
            body:
              "Use PNG para compartilhamento digital rápido ou SVG quando precisar de um arquivo escalável para design ou impressão.",
          },
        ],
        useCasesDescription:
          "QR codes são mais úteis quando você precisa de uma ponte rápida entre uma superfície física e um destino digital claro.",
        useCases: [
          {
            title: "Links de menu, evento ou perfil",
            description:
              "Transforme uma landing page, um menu, uma página de reserva ou um perfil de criador em um código escaneável em segundos.",
          },
          {
            title: "WiFi e contato",
            description:
              "Crie QR codes rápidos para WiFi de visitante, emails ou telefones quando for melhor do que digitar tudo manualmente.",
          },
          {
            title: "Pôsteres, impressos e embalagem",
            description:
              "Use SVG quando o código precisar continuar nítido em vários tamanhos dentro de um fluxo de impressão.",
          },
        ],
        examplesDescription:
          "Essas configurações mostram os tipos de QR que normalmente fazem sentido em uma utility page como esta.",
        examples: [
          {
            title: "QR para link de site",
            inputLabel: "Configuração",
            input: "Tipo: URL\nValor: https://toolyflow.com/en/bio-generator\nTamanho: 320 px",
            outputLabel: "Resultado",
            output: "Um QR escaneável pronto para baixar em PNG ou SVG.",
            note: "Útil para flyers, cartões de perfil e fluxos de compartilhamento rápido.",
          },
          {
            title: "QR para WiFi de visitante",
            inputLabel: "Configuração",
            input: "Tipo: WiFi\nSSID: StudioGuest\nPassword: CreateFast24\nSecurity: WPA",
            outputLabel: "Resultado",
            output: "Um QR que permite entrar na rede sem digitar a senha manualmente.",
            note: "Prático para cafés, estúdios, escritórios e eventos.",
          },
        ],
        faqs: [
          {
            question: "Posso gerar mais do que URLs?",
            answer:
              "Sim. A ferramenta cobre URL, texto, email, telefone e WiFi para que o QR acompanhe o tipo de ação que você precisa.",
          },
          {
            question: "Devo baixar em PNG ou SVG?",
            answer:
              "PNG normalmente basta para uso digital rápido. SVG é melhor quando você precisa de um arquivo escalável para impressão ou design.",
          },
          {
            question: "O QR atualiza ao vivo?",
            answer:
              "Sim. O preview muda conforme o conteúdo ou as configurações mudam, o que facilita validar o resultado antes de baixar.",
          },
        ],
      },
    },
    "case-converter": {
      shortDescription:
        "Converta texto entre uppercase, lowercase, sentence, title, camel, snake e kebab.",
      description:
        "Troque o formato do texto instantaneamente, compare várias saídas lado a lado e copie exatamente a versão de que você precisa.",
      eyebrow: "Ferramenta de formatação de texto",
      metaDescription:
        "Converta texto em uppercase, lowercase, sentence case, title case, camelCase, snake_case e muito mais.",
      highlights: [
        "Rápido para títulos, captions, notas e checagens de formatação.",
        "Mantém várias saídas visíveis ao mesmo tempo em vez de exigir cliques extras.",
        "Funciona de forma limpa em celular, tablet e desktop.",
      ],
      structuredDescription:
        "Case converter online grátis para uppercase, lowercase, sentence case, title case, camelCase, snake_case e kebab-case.",
      content: {
        howToUseDescription:
          "A página foi desenhada para fluxos rápidos de colar, comparar e copiar: colar uma vez, revisar vários formatos e levar o certo imediatamente.",
        howToUseSteps: [
          {
            title: "Cole o texto de origem",
            body:
              "Insira o texto que você quer limpar ou reformular. As visualizações de saída se recalculam na hora enquanto você digita ou cola.",
          },
          {
            title: "Compare os formatos",
            body:
              "Revise uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case e kebab-case lado a lado.",
          },
          {
            title: "Copie o resultado exato",
            body:
              "Use o botão de copiar do cartão que combina com o seu fluxo, seja para conteúdo, variáveis, rotas ou títulos.",
          },
        ],
        useCasesDescription:
          "A ferramenta é mais forte quando o texto precisa circular rápido entre contexto editorial, produto e desenvolvimento.",
        useCases: [
          {
            title: "Limpeza de títulos e conteúdo",
            description:
              "Alterne entre sentence case, title case, maiúsculas ou minúsculas ao editar headlines, captions e notas.",
          },
          {
            title: "Padrões de nome para desenvolvimento",
            description:
              "Gere camelCase, PascalCase, snake_case ou kebab-case para variáveis, rotas e nomes de campo.",
          },
          {
            title: "Comparação rápida de formatos",
            description:
              "Mantenha vários estilos visíveis ao mesmo tempo para comparar e copiar o formato certo sem passos extras.",
          },
        ],
        examplesDescription:
          "Um bom case converter deve deixar clara a diferença entre entrada e saída em um único olhar.",
        examples: [
          {
            title: "Formato de headline",
            inputLabel: "Entrada",
            input: "build fast tools without extra friction",
            outputLabel: "Saída",
            output:
              "Title Case: Build Fast Tools Without Extra Friction\nSentence case: Build fast tools without extra friction",
            note: "Útil quando você precisa decidir rapidamente entre estilos editoriais.",
          },
          {
            title: "Naming para desenvolvimento",
            inputLabel: "Entrada",
            input: "fast online tools",
            outputLabel: "Saída",
            output:
              "camelCase: fastOnlineTools\nsnake_case: fast_online_tools\nkebab-case: fast-online-tools",
            note: "Prático para slugs, variáveis e tarefas simples de naming.",
          },
        ],
        faqs: [
          {
            question: "Quais formatos eu posso copiar?",
            answer:
              "A página entrega uppercase, lowercase, sentence case, title case, camelCase, PascalCase, snake_case, kebab-case, trimmed text e uma saída single-line.",
          },
          {
            question: "Posso comparar vários formatos ao mesmo tempo?",
            answer:
              "Sim. As saídas ficam visíveis juntas para comparar estilos e copiar a versão certa sem abrir outra página.",
          },
          {
            question: "Isso também serve para desenvolvimento?",
            answer:
              "Sim. É útil tanto para escrita quanto para naming técnico, especialmente quando você alterna entre conteúdo editorial e formatos amigáveis para código.",
          },
        ],
      },
    },
    "decision-wheel": {
      shortDescription:
        "Gire opções quando você precisar de uma utility leve para uma escolha rápida.",
      description:
        "Use um seletor aleatório com animação e resultado claro quando quiser uma ferramenta extra fora dos fluxos principais.",
      eyebrow: "Utility rápida",
      metaDescription:
        "Digite opções, gire a roda e obtenha um resultado aleatório com uma decision wheel online grátis.",
      highlights: [
        "Útil para decisões rápidas, ideias de conteúdo e pequenas escolhas de equipe.",
        "A animação torna o resultado mais claro e interativo.",
        "Tudo continua simples, responsivo e client-side.",
      ],
      structuredDescription:
        "Decision wheel online grátis para girar opções e escolher um resultado aleatório.",
      content: {
        howToUseDescription:
          "Esta ferramenta é propositalmente leve. Adicione opções claras, gire uma vez e use o resultado quando quiser decidir rápido sem pensar demais.",
        howToUseSteps: [
          {
            title: "Adicione as opções",
            body:
              "Escreva cada opção em uma linha separada para que a roda distribua as escolhas de forma clara antes do giro.",
          },
          {
            title: "Gire a roda",
            body:
              "Inicie o giro e deixe a roda fechar a decisão com um resultado final em vez de continuar debatendo opções parecidas.",
          },
          {
            title: "Use o resultado ou refaça a lista",
            body:
              "Aceite o resultado para uma decisão rápida ou ajuste a lista e gire de novo se o problema estiver nas opções em si.",
          },
        ],
        useCasesDescription:
          "A roda ajuda mais em decisões pequenas nas quais velocidade importa mais do que análise profunda.",
        useCases: [
          {
            title: "Escolha de ideias de conteúdo ou nomes",
            description:
              "Escolha entre ideias de posts, títulos ou shortlists quando tudo o que você quer é um desempate rápido.",
          },
          {
            title: "Microdecisões de equipe",
            description:
              "Use para ordem, rotação ou pequenas decisões coletivas.",
          },
          {
            title: "Escolhas pessoais simples",
            description:
              "Quebre a indecisão em opções pequenas do dia a dia sem sair da página.",
          },
        ],
        examplesDescription:
          "Os melhores casos de uso são listas curtas com necessidade real de uma escolha final simples.",
        examples: [
          {
            title: "Shortlist de ideias de conteúdo",
            inputLabel: "Entrada",
            input: "Behind the scenes\nNew tool demo\nWorkflow tips\nLaunch update",
            outputLabel: "Resultado",
            output: "A roda cai em uma opção e mostra uma escolha final única.",
            note: "Útil quando a shortlist já é boa o bastante e só falta uma decisão final.",
          },
          {
            title: "Escolha do almoço",
            inputLabel: "Entrada",
            input: "Pizza\nSushi\nSalad\nBurgers",
            outputLabel: "Resultado",
            output: "Uma opção é selecionada depois do giro.",
            note: "Um caso simples e cotidiano para essa camada utility mais leve.",
          },
        ],
        faqs: [
          {
            question: "Para que a decision wheel serve melhor?",
            answer:
              "Ela funciona melhor para escolhas rápidas e de baixo risco, quando um sorteio simples é mais útil do que alongar a discussão.",
          },
          {
            question: "Posso editar as opções antes de girar?",
            answer:
              "Sim. Você pode reescrever a lista antes do giro para deixar apenas as opções que realmente quer considerar.",
          },
          {
            question: "Ela faz parte do foco principal da Toolyflow?",
            answer:
              "Ela pertence à camada utility mais leve. O foco principal do produto continua sendo ferramentas de texto e ferramentas para criadores.",
          },
        ],
      },
    },
  },
  nicknameGenerator: {
    ...en.nicknameGenerator,
    keywordLabel: "Palavra base ou ideia",
    keywordPlaceholder: "ex. lua, pixel, sombra",
    styleLabel: "Escolha um estilo",
    lengthLabel: "Tamanho",
    symbolsLabel: "Símbolos",
    pronounceableLabel: "Pronunciável",
    generateMore: "Gerar mais",
    copyButton: "Copiar",
    tapToCopy: "Toque para copiar",
    copied: "Copiado para a área de transferência",
    toggleOn: "Sim",
    toggleOff: "Não",
    styles: {
      cool: "Cool",
      dark: "Dark",
      gaming: "Gaming",
      aesthetic: "Aesthetic",
    },
    lengthModes: {
      short: "Curto",
      balanced: "Equilibrado",
      long: "Longo",
    },
    symbolModes: {
      none: "Limpo",
      light: "Leve",
      bold: "Estilizado",
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
    lengthLabel: "Tamanho",
    emojiLabel: "Emoji",
    ctaLabel: "Linha CTA",
    generate: "Gerar bio",
    copy: "Copiar",
    copied: "Copiado",
    toggleOn: "Sim",
    toggleOff: "Não",
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
      playful: "Divertido",
      sharp: "Afiado",
    },
    lengths: {
      short: "Curta",
      balanced: "Equilibrada",
      long: "Longa",
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
  caseConverter: {
    inputLabel: "Cole seu texto",
    placeholder: "Digite ou cole texto para converter.",
    characters: "Caracteres",
    words: "Palavras",
    lines: "Linhas",
    readingTime: "Tempo de leitura",
    clearText: "Limpar texto",
    uppercase: "Maiúsculas",
    lowercase: "Minúsculas",
    sentenceCase: "Sentence case",
    titleCase: "Title Case",
    camelCase: "camelCase",
    pascalCase: "PascalCase",
    snakeCase: "snake_case",
    kebabCase: "kebab-case",
    trimmedText: "Texto limpo",
    singleLine: "Uma linha",
    copy: "Copiar",
    copied: "Copiado",
  },
  qrGenerator: {
    inputLabel: "Texto ou URL",
    placeholder: "Cole um link, texto de cupom ou mensagem.",
    download: "Baixar PNG",
    downloadSvg: "Baixar SVG",
    clear: "Limpar",
    livePreview: "Preview ao vivo",
    emptyState: "Adicione texto ou um link para gerar um QR code na hora.",
    generating: "Gerando seu QR code...",
    helper: "Tudo roda no navegador com preview ao vivo, seleção de formato e download direto.",
    typeLabel: "Tipo de QR",
    sizeLabel: "Tamanho",
    foregroundLabel: "Frente",
    backgroundLabel: "Fundo",
    urlMode: "URL",
    textMode: "Texto",
    emailMode: "Email",
    phoneMode: "Telefone",
    wifiMode: "WiFi",
    emailLabel: "Endereço de email",
    subjectLabel: "Assunto",
    bodyLabel: "Mensagem",
    phoneLabel: "Número de telefone",
    ssidLabel: "Nome do WiFi",
    passwordLabel: "Senha",
    securityLabel: "Segurança",
    securityWpa: "WPA",
    securityWep: "WEP",
    securityOpen: "Aberta",
  },
  decisionWheel: {
    inputLabel: "Uma opção por linha",
    button: "Girar a roda",
    spinning: "Girando...",
    helper:
      "Adicione pelo menos duas opções. A roda roda totalmente no client e mostra o vencedor no final do giro.",
    resultLabel: "Resultado",
    emptyResult: "Clique em girar para escolher um vencedor",
    starterOptions: [
      "Publicar",
      "Pausa para café",
      "Revisar depois",
      "Enviar rascunho",
      "Anotar",
      "Entrar ao vivo",
    ],
  },
});

const toolContentTitleTemplates: Record<
  Locale,
  {
    howToUse: (toolName: string) => string;
    useCases: string;
    examples: string;
    faq: (toolName: string) => string;
  }
> = {
  en: {
    howToUse: (toolName) => `How to use the ${toolName.toLowerCase()}`,
    useCases: "Best use cases",
    examples: "Examples",
    faq: (toolName) => `${toolName} FAQ`,
  },
  tr: {
    howToUse: (toolName) => `${toolName} nasıl kullanılır`,
    useCases: "En iyi kullanım senaryoları",
    examples: "Örnekler",
    faq: (toolName) => `${toolName} sık sorulan sorular`,
  },
  es: {
    howToUse: (toolName) => `Cómo usar ${toolName}`,
    useCases: "Mejores casos de uso",
    examples: "Ejemplos",
    faq: (toolName) => `Preguntas frecuentes de ${toolName}`,
  },
  de: {
    howToUse: (toolName) => `So nutzt du ${toolName}`,
    useCases: "Beste Anwendungsfälle",
    examples: "Beispiele",
    faq: (toolName) => `${toolName} FAQ`,
  },
  fr: {
    howToUse: (toolName) => `Comment utiliser ${toolName}`,
    useCases: "Meilleurs cas d'usage",
    examples: "Exemples",
    faq: (toolName) => `FAQ ${toolName}`,
  },
  pt: {
    howToUse: (toolName) => `Como usar ${toolName}`,
    useCases: "Melhores casos de uso",
    examples: "Exemplos",
    faq: (toolName) => `Perguntas frequentes do ${toolName}`,
  },
};

function withLocalizedToolContentTitles(
  locale: Locale,
  dictionary: Dictionary
): Dictionary {
  const titles = toolContentTitleTemplates[locale];

  return {
    ...dictionary,
    tools: Object.fromEntries(
      baseToolSlugs.map((slug) => {
        const tool = dictionary.tools[slug];

        return [
          slug,
          {
            ...tool,
            content: {
              ...tool.content,
              howToUseTitle: titles.howToUse(tool.name),
              useCasesTitle: titles.useCases,
              examplesTitle: titles.examples,
              faqTitle: titles.faq(tool.name),
            },
          },
        ];
      })
    ) as Dictionary["tools"],
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: withLocalizedToolContentTitles("en", en),
  tr: withLocalizedToolContentTitles("tr", tr),
  es: withLocalizedToolContentTitles("es", es),
  de: withLocalizedToolContentTitles("de", de),
  fr: withLocalizedToolContentTitles("fr", fr),
  pt: withLocalizedToolContentTitles("pt", pt),
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getToolEntries(locale: Locale) {
  const dictionary = getDictionary(locale);
  return baseToolSlugs.map((slug) => dictionary.tools[slug]);
}
