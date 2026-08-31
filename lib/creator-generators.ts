import type {
  BioCtaMode,
  BioEnhancementLabels,
  CreatorTone,
  HashtagEnhancementLabels,
  HashtagGroup,
  NicknameArchetype,
  NicknameEnhancementLabels,
  NicknameUseCase,
} from "./creator-tool-localizations";

export type BioPlatform = "instagram" | "tiktok" | "x" | "youtube" | "twitch";
export type BioLength = "short" | "balanced" | "long";
export type NicknameStyle = "cool" | "dark" | "gaming" | "aesthetic";
export type NicknameLength = "short" | "balanced" | "long";
export type SymbolMode = "none" | "light" | "bold";
export type HashtagPlatform = "instagram" | "tiktok" | "x" | "youtube";
export type HashtagPopularity = "viral" | "balanced" | "niche";

export type BioGeneratorRuntimeLabels = BioEnhancementLabels & {
  platforms: Record<BioPlatform, string>;
  tones: Record<CreatorTone, string>;
  lengths: Record<BioLength, string>;
  templates: Record<CreatorTone, { starters: string[]; closings: string[] }>;
};

export type NicknameGeneratorRuntimeLabels = NicknameEnhancementLabels & {
  styles: Record<NicknameStyle, string>;
  lengthModes: Record<NicknameLength, string>;
  symbolModes: Record<SymbolMode, string>;
};

export type HashtagGeneratorRuntimeLabels = HashtagEnhancementLabels & {
  platforms: Record<HashtagPlatform, string>;
  popularityModes: Record<HashtagPopularity, string>;
  pools: {
    modifiers: string[];
    generic: string[];
    platformTags: Record<HashtagPlatform, string[]>;
    popularityTags: Record<HashtagPopularity, string[]>;
  };
};

export type BioGeneratorInput = {
  name: string;
  niche: string;
  audience: string;
  value: string;
  platform: BioPlatform;
  tone: CreatorTone;
  length: BioLength;
  emojiEnabled: boolean;
  ctaMode: BioCtaMode;
};

export type BioOption = {
  id: string;
  text: string;
  blueprint: keyof BioEnhancementLabels["blueprintLabels"];
  label: string;
  characterCount: number;
};

export type NicknameGeneratorInput = {
  keyword: string;
  useCase: NicknameUseCase;
  style: NicknameStyle;
  length: NicknameLength;
  symbolMode: SymbolMode;
  pronounceable: boolean;
};

export type NicknameOption = {
  value: string;
  archetype: NicknameArchetype;
  reasons: string[];
};

export type HashtagGeneratorInput = {
  topic: string;
  location: string;
  platform: HashtagPlatform;
  popularity: HashtagPopularity;
  count: 20 | 25 | 30;
};

export type HashtagOption = {
  value: string;
  group: HashtagGroup;
};

function createHash(input: string) {
  return [...input].reduce((total, character, index) => {
    return (total + character.charCodeAt(0) * (index + 17)) % 2_147_483_647;
  }, 97);
}

function createRandom(seed: number) {
  let state = seed % 2_147_483_647;

  if (state <= 0) {
    state += 2_147_483_646;
  }

  return () => {
    state = (state * 16_807) % 2_147_483_647;
    return (state - 1) / 2_147_483_646;
  };
}

function shuffleWithSeed<T>(items: T[], seed: number) {
  const clone = [...items];
  const random = createRandom(seed);

  for (let index = clone.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(random() * (index + 1));
    [clone[index], clone[nextIndex]] = [clone[nextIndex], clone[index]];
  }

  return clone;
}

function pickWithSeed<T>(items: T[], seed: number, fallback: T): T {
  if (items.length === 0) {
    return fallback;
  }

  return items[Math.abs(seed) % items.length] ?? fallback;
}

function compactText(value: string, maxLength = 52) {
  const cleaned = value.trim().replace(/\s+/g, " ").replace(/[\n\r]+/g, " ");

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  const slice = cleaned.slice(0, maxLength + 1);
  const boundary = slice.lastIndexOf(" ");
  return `${slice.slice(0, boundary > maxLength * 0.55 ? boundary : maxLength).trim()}…`;
}

function fillTemplate(template: string, values: Record<string, string>) {
  return template
    .replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "")
    .replace(/\s+([|•:])/g, " $1")
    .replace(/([|•:])\s*$/g, "")
    .replace(/^\s*([|•:])\s*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueLines(lines: string[]) {
  const seen = new Set<string>();

  return lines.filter((line) => {
    const normalized = line.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

    if (!normalized || seen.has(normalized)) {
      return false;
    }

    seen.add(normalized);
    return true;
  });
}

const bioEmoji: Record<BioPlatform, string[]> = {
  instagram: ["✦", "✨", "↘", "☀️"],
  tiktok: ["✦", "⚡", "🎬", "↘"],
  x: ["✦", "↗", "⚡", "•"],
  youtube: ["▶", "🎬", "✦", "↘"],
  twitch: ["🎮", "⚡", "✦", "↘"],
};

const bioToneSeparators: Record<CreatorTone, string[]> = {
  cool: [" • ", " / ", " — ", " | ", " · "],
  mysterious: [" / ", " · ", " — ", " | ", " ↘ "],
  personal: [" — ", " • ", " / ", " + ", " · "],
  professional: [" | ", " • ", " — ", " / ", " · "],
  minimal: [" · ", " / ", " | ", " — ", " • "],
  bold: [": ", " — ", " • ", " | ", " → "],
  playful: [" ✦ ", " • ", " + ", " / ", " — "],
  sharp: [" → ", ": ", " | ", " / ", " — "],
};

function fitBioLines(lines: string[], maxCharacters: number) {
  let fitted = uniqueLines(lines.filter(Boolean));

  if (fitted.join("\n").length <= maxCharacters) {
    return fitted;
  }

  const perLine = Math.max(18, Math.floor((maxCharacters - fitted.length + 1) / fitted.length));
  fitted = fitted.map((line) => compactText(line, perLine));

  while (fitted.join("\n").length > maxCharacters) {
    const longestIndex = fitted.reduce(
      (winner, line, index) => (line.length > fitted[winner].length ? index : winner),
      0
    );
    const overflow = fitted.join("\n").length - maxCharacters;
    fitted[longestIndex] = compactText(
      fitted[longestIndex],
      Math.max(14, fitted[longestIndex].length - overflow - 1)
    );
  }

  return fitted;
}

export function generateBioOptions(
  input: BioGeneratorInput,
  labels: BioGeneratorRuntimeLabels,
  generationIndex = 0
): BioOption[] {
  const name = compactText(input.name, 32);
  const niche = compactText(input.niche, 46);
  const audience = compactText(input.audience, 44);
  const signature = [name, niche, audience, input.value, input.platform, input.tone, input.length, input.ctaMode].join("|");
  const baseSeed = createHash(signature);
  const value = compactText(
    input.value || pickWithSeed(labels.fallbackValues[input.tone], baseSeed + generationIndex + 23, labels.fallbackValues[input.tone][0]),
    54
  );
  const cta =
    input.ctaMode === "none"
      ? ""
      : pickWithSeed(labels.ctaLines[input.ctaMode], baseSeed + generationIndex + 37, labels.ctaLines[input.ctaMode][0]);
  const phraseValues = { name, niche, audience, value };
  const phrase = (key: keyof BioEnhancementLabels["phraseTemplates"], offset: number) => {
    const templates = labels.phraseTemplates[key];
    return fillTemplate(
      pickWithSeed(templates, baseSeed + generationIndex + offset, templates[0]),
      phraseValues
    );
  };
  const identity = name ? phrase("identity", 3) : niche;
  const nicheValue = phrase("nicheValue", 5);
  const audienceValue = audience ? phrase("audienceValue", 7) : "";
  const audienceNiche = audience ? phrase("audienceNiche", 9) : "";
  const profileSummary = [niche, value]
    .filter(Boolean)
    .join(
      pickWithSeed(
        bioToneSeparators[input.tone],
        baseSeed + generationIndex,
        bioToneSeparators[input.tone][0]
      )
    );
  const maxByLength: Record<BioLength, number> = { short: 78, balanced: 150, long: 150 };
  const blueprints: Array<{
    key: BioOption["blueprint"];
    lines: Record<BioLength, string[]>;
  }> = [
    {
      key: "positioning",
      lines: {
        short: [nicheValue],
        balanced: [identity, audienceValue || value, cta],
        long: [identity, audienceNiche || nicheValue, value, cta],
      },
    },
    {
      key: "audience",
      lines: {
        short: [audienceValue || nicheValue],
        balanced: audience ? [audienceNiche, value, cta] : [value, niche, cta],
        long: audience ? [audienceNiche, value, cta] : [value, niche, cta],
      },
    },
    {
      key: "personality",
      lines: {
        short: [profileSummary],
        balanced: [name, profileSummary, cta],
        long: [name, profileSummary, cta],
      },
    },
  ];

  return blueprints.map(({ key, lines }, index) => {
    let selectedLines = fitBioLines(lines[input.length], maxByLength[input.length]);

    if (input.emojiEnabled && selectedLines.length > 0) {
      const emoji = pickWithSeed(
        bioEmoji[input.platform],
        baseSeed + generationIndex + index * 19,
        "✦"
      );
      selectedLines = [...selectedLines];
      selectedLines[index % 2 === 0 ? 0 : selectedLines.length - 1] =
        index % 2 === 0
          ? `${emoji} ${selectedLines[0]}`
          : `${selectedLines.at(-1)} ${emoji}`;
      selectedLines = fitBioLines(selectedLines, maxByLength[input.length]);
    }

    const text = selectedLines.join("\n");

    return {
      id: `${createHash(`${signature}|${generationIndex}|${key}|${text}`)}`,
      text,
      blueprint: key,
      label: labels.blueprintLabels[key],
      characterCount: text.length,
    };
  });
}

const aliasPool: Record<NicknameStyle, string[]> = {
  cool: ["aerivo", "novale", "kaivo", "sorev", "vaylen", "orvia", "zeniro", "avelo", "norex", "elvyn", "ravio", "cayro", "veyra", "solven"],
  dark: ["noxen", "vanta", "nyxora", "ravyn", "morven", "obsyn", "sablex", "noctra", "veilyn", "ashvor", "draeven", "onyra", "vorune", "mavren"],
  gaming: ["raxion", "voltix", "nexaro", "stryk", "kaivox", "zeryn", "blitzor", "rivenx", "hexaro", "turion", "vexon", "clutchy", "dravix", "nexilo"],
  aesthetic: ["lunea", "velora", "aureli", "mireya", "sorelle", "ciela", "novelle", "eloria", "mellune", "auryn", "solenne", "lunova", "avielle", "mirelle"],
};

const styleAffixes: Record<NicknameStyle, { prefixes: string[]; suffixes: string[] }> = {
  cool: { prefixes: ["neo", "aero", "hey", "its"], suffixes: ["flow", "wave", "shift", "era", "lane", "mode"] },
  dark: { prefixes: ["nox", "nyx", "void", "ash"], suffixes: ["veil", "shade", "night", "vanta", "noir", "void"] },
  gaming: { prefixes: ["x", "pro", "gg", "v"], suffixes: ["gg", "fps", "plays", "tv", "zone", "frag"] },
  aesthetic: { prefixes: ["luna", "aura", "soft", "melo"], suffixes: ["muse", "core", "diary", "jpg", "bloom", "archive"] },
};

const useCaseAffixes: Record<NicknameUseCase, { prefixes: string[]; suffixes: string[] }> = {
  social: { prefixes: ["hey", "its", "real"], suffixes: ["daily", "online", "era", "feed"] },
  gaming: { prefixes: ["im", "x", "gg"], suffixes: ["gg", "plays", "fps", "tv"] },
  brand: { prefixes: ["the", "get", "use"], suffixes: ["studio", "lab", "works", "co", "hq"] },
  anonymous: { prefixes: ["hidden", "not", "lowkey"], suffixes: ["archive", "offline", "notes", "void"] },
};

function toAsciiHandle(value: string) {
  return value
    .replace(/ı/gi, "i")
    .replace(/ß/gi, "ss")
    .replace(/æ/gi, "ae")
    .replace(/œ/gi, "oe")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function normalizeHandle(value: string) {
  return toAsciiHandle(value).toLowerCase().replace(/[^a-z0-9._]/g, "").replace(/[._]{2,}/g, ".");
}

function keywordRoots(value: string) {
  const tokens = toAsciiHandle(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const full = tokens.join("");
  const first = tokens[0] ?? "";
  const last = tokens.at(-1) ?? "";
  const initials = tokens.length > 1 ? tokens.map((token) => token[0]).join("") : "";
  const compact = full.length > 8 ? `${full.slice(0, 5)}${full.slice(-2)}` : full;
  return [...new Set([full, first, last, initials, compact].filter(Boolean))];
}

function vowelRatio(value: string) {
  const letters = value.replace(/[^a-z]/g, "");
  if (!letters) return 0;
  return (letters.match(/[aeiouy]/g) ?? []).length / letters.length;
}

function longestConsonantRun(value: string) {
  return Math.max(0, ...(value.replace(/[^a-z]/g, "").match(/[^aeiouy]+/g) ?? []).map((item) => item.length));
}

function nicknameBounds(length: NicknameLength) {
  if (length === "short") return [4, 8] as const;
  if (length === "long") return [9, 16] as const;
  return [6, 12] as const;
}

function decorateHandle(value: string, mode: SymbolMode, seed: number) {
  if (mode === "none") return value;
  const light = [`${value}_`, `_${value}`, `${value}.x`, `${value}.v`];
  const bold = [`x.${value}`, `${value}.gg`, `x_${value}`, `${value}_tv`];
  return pickWithSeed(mode === "light" ? light : bold, seed, value);
}

function nicknameScore(value: string, input: NicknameGeneratorInput, root: string) {
  const [min, max] = nicknameBounds(input.length);
  const plain = value.replace(/[^a-z0-9]/g, "");
  let score = 0;
  if (value.length >= min && value.length <= max) score += 24;
  if (plain.length >= 5 && plain.length <= 12) score += 8;
  const ratio = vowelRatio(plain);
  if (ratio >= 0.28 && ratio <= 0.58) score += 8;
  if (input.pronounceable && longestConsonantRun(plain) <= 3) score += 10;
  if (root && plain.includes(root.slice(0, Math.min(root.length, 5)))) score += 10;
  if (/^[a-z][a-z0-9._]+$/i.test(value)) score += 4;
  if (/(.)\1\1|[qxz]{3}|\d{4}/i.test(value)) score -= 20;
  if (/[._]$/.test(value)) score -= 3;
  return score;
}

export function generateNicknameOptions(
  input: NicknameGeneratorInput,
  labels: NicknameGeneratorRuntimeLabels,
  generationIndex = 0
): NicknameOption[] {
  const roots = keywordRoots(input.keyword);
  const primaryRoot = roots[0] ?? "";
  const candidates = new Map<string, NicknameArchetype>();
  const style = styleAffixes[input.style];
  const purpose = useCaseAffixes[input.useCase];
  const seed = createHash(`${input.keyword}|${input.useCase}|${input.style}|${input.length}|${input.symbolMode}|${input.pronounceable}|${generationIndex}`);
  const add = (raw: string, archetype: NicknameArchetype, offset: number) => {
    const plain = normalizeHandle(raw);
    if (!plain || plain === primaryRoot) return;
    const decorated = decorateHandle(plain, input.symbolMode, seed + offset);
    const [min, max] = nicknameBounds(input.length);
    if (decorated.length < min || decorated.length > max + (input.symbolMode === "none" ? 0 : 2)) return;
    if (input.pronounceable && (vowelRatio(plain) < 0.22 || vowelRatio(plain) > 0.66 || longestConsonantRun(plain) > 4)) return;
    candidates.set(decorated, archetype);
  };

  aliasPool[input.style].forEach((alias, index) => add(alias, "alias", index));

  if (roots.length > 0) {
    roots.forEach((root, rootIndex) => {
      [...style.suffixes, ...purpose.suffixes].forEach((suffix, index) => {
        add(`${root}${suffix}`, input.useCase === "brand" ? "brandable" : "clean", rootIndex * 50 + index);
      });
      [...style.prefixes, ...purpose.prefixes].forEach((prefix, index) => {
        add(`${prefix}${root}`, input.useCase === "brand" ? "brandable" : "clean", rootIndex * 70 + index);
      });
    });
  } else {
    style.prefixes.forEach((prefix, index) => {
      style.suffixes.forEach((suffix, suffixIndex) => add(`${prefix}${suffix}`, "brandable", index * 20 + suffixIndex));
    });
  }

  const ranked = [...candidates.entries()]
    .map(([value, archetype]) => ({ value, archetype, score: nicknameScore(value, input, primaryRoot) }))
    .filter((item) => item.score > 8)
    .sort((left, right) => right.score - left.score || createHash(`${right.value}|${seed}`) - createHash(`${left.value}|${seed}`));
  const shuffledTop = shuffleWithSeed(ranked.slice(0, 80), seed + generationIndex * 101);
  const archetypeOrder: NicknameArchetype[] = ["clean", "alias", "brandable", "styled"];
  const selected: typeof ranked = [];

  for (const archetype of archetypeOrder) {
    const sourceType = archetype === "styled" && input.symbolMode !== "none" ? undefined : archetype;
    const match = shuffledTop.find((item) => {
      if (selected.some((selectedItem) => selectedItem.value === item.value)) return false;
      if (!sourceType) return /[._]/.test(item.value);
      return item.archetype === sourceType;
    });
    if (match) selected.push(match);
  }

  for (const item of shuffledTop) {
    if (selected.length >= 8) break;
    if (!selected.some((selectedItem) => selectedItem.value === item.value)) selected.push(item);
  }

  return selected.slice(0, 8).map((item) => {
    const plain = item.value.replace(/[^a-z0-9]/g, "");
    const reasons = [
      item.value.length <= 10 ? labels.reasonLabels.concise : "",
      input.pronounceable ? labels.reasonLabels.pronounceable : "",
      input.symbolMode === "none" ? labels.reasonLabels.clean : "",
      primaryRoot && plain.includes(primaryRoot.slice(0, Math.min(4, primaryRoot.length))) ? labels.reasonLabels.keyword : "",
      item.archetype === "brandable" || item.archetype === "alias" ? labels.reasonLabels.brandable : "",
    ].filter(Boolean).slice(0, 3);

    return {
      value: item.value,
      archetype: input.symbolMode !== "none" && /[._]/.test(item.value) ? "styled" : item.archetype,
      reasons,
    };
  });
}

function normalizeTag(value: string) {
  return value
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 30);
}

function topicTokens(value: string) {
  const normalized = toAsciiHandle(value).toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  return normalized.split(/\s+/).map(normalizeTag).filter((item) => item.length >= 2);
}

export function generateHashtagOptions(
  input: HashtagGeneratorInput,
  labels: HashtagGeneratorRuntimeLabels,
  generationIndex = 0
): HashtagOption[] {
  const tokens = topicTokens(input.topic);
  const fullTopic = normalizeTag(tokens.join(""));
  const location = normalizeTag(input.location);
  const groups: Record<HashtagGroup, Set<string>> = {
    topic: new Set<string>(),
    community: new Set<string>(),
    discovery: new Set<string>(),
    broad: new Set<string>(),
  };
  const add = (group: HashtagGroup, value: string) => {
    const tag = normalizeTag(value);
    if (tag.length >= 3) groups[group].add(tag);
  };
  const topicVariants = [...new Set([fullTopic, ...tokens])].filter(Boolean);
  topicVariants.forEach((variant) => add("topic", variant));

  const matchedPacks = Object.entries(labels.topicPacks)
    .filter(([key]) => {
      const normalizedKey = normalizeTag(key);
      return topicVariants.some((variant) => variant.includes(normalizedKey) || normalizedKey.includes(variant));
    })
    .flatMap(([, tags]) => tags);
  matchedPacks.forEach((tag) => add("topic", tag));

  topicVariants.forEach((variant) => {
    labels.pools.modifiers.forEach((modifier) => add("community", `${variant}${modifier}`));
    if (location) {
      add("community", `${variant}${location}`);
      add("community", `${location}${variant}`);
    }
  });

  labels.pools.platformTags[input.platform].forEach((tag) => add("discovery", tag));
  labels.pools.popularityTags[input.popularity].forEach((tag) => add(input.popularity === "niche" ? "community" : "discovery", tag));
  labels.pools.generic.forEach((tag) => add("broad", tag));
  if (location) add("broad", location);

  const ratioByStrategy: Record<HashtagPopularity, Record<HashtagGroup, number>> = {
    viral: { topic: 0.24, community: 0.2, discovery: 0.36, broad: 0.2 },
    balanced: { topic: 0.32, community: 0.28, discovery: 0.24, broad: 0.16 },
    niche: { topic: 0.4, community: 0.36, discovery: 0.16, broad: 0.08 },
  };
  const seed = createHash(`${input.topic}|${input.location}|${input.platform}|${input.popularity}|${input.count}|${generationIndex}`);
  const selected: HashtagOption[] = [];
  const used = new Set<string>();
  const groupOrder: HashtagGroup[] = ["topic", "community", "discovery", "broad"];

  groupOrder.forEach((group, index) => {
    const quota = Math.max(1, Math.round(input.count * ratioByStrategy[input.popularity][group]));
    const pool = shuffleWithSeed([...groups[group]], seed + index * 71 + generationIndex * 31);
    for (const tag of pool) {
      if (used.has(tag) || selected.filter((item) => item.group === group).length >= quota) continue;
      used.add(tag);
      selected.push({ value: `#${tag}`, group });
    }
  });

  const fallbackPool = shuffleWithSeed(
    groupOrder.flatMap((group) => [...groups[group]].map((tag) => ({ tag, group }))),
    seed + 401
  );
  for (const item of fallbackPool) {
    if (selected.length >= input.count) break;
    if (!used.has(item.tag)) {
      used.add(item.tag);
      selected.push({ value: `#${item.tag}`, group: item.group });
    }
  }

  return selected.slice(0, input.count);
}
