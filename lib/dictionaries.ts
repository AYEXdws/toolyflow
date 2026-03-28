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
