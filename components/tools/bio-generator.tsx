"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type Platform = "instagram" | "tiktok" | "x" | "youtube" | "twitch";
type Tone =
  | "cool"
  | "mysterious"
  | "personal"
  | "professional"
  | "minimal"
  | "bold"
  | "playful"
  | "sharp";
type BioLength = "short" | "balanced" | "long";

type BioGeneratorLabels = {
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
  platforms: Record<Platform, string>;
  tones: Record<Tone, string>;
  lengths: Record<BioLength, string>;
  defaultName: string;
  platformLines: Record<Platform, string[]>;
  ctaLines: Record<Platform, string[]>;
  templates: Record<Tone, { starters: string[]; closings: string[] }>;
};

const emojiSets: Record<Platform, string[]> = {
  instagram: ["✦", "⋆", "☁️", "♡"],
  tiktok: ["✦", "⚡", "🎥", "🎧"],
  x: ["✦", "⚑", "⌁", "⚡"],
  youtube: ["▶", "🎬", "✦", "⚡"],
  twitch: ["🎮", "⚡", "✦", "☾"],
};

function normalizeName(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("@")) {
    return `@${trimmed.slice(1).replace(/\s+/g, "")}`;
  }

  return trimmed
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function createHash(input: string) {
  return [...input].reduce((total, character, index) => {
    return (total + character.charCodeAt(0) * (index + 17)) % 100_003;
  }, 0);
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

function cleanClause(value: string) {
  return value.trim().replace(/[.|/•·]+$/g, "").replace(/\s+/g, " ");
}

function uniqueWords(value: string) {
  return cleanClause(value)
    .toLowerCase()
    .split(/[^a-z0-9\u00c0-\u024f\u0400-\u04ff\u0600-\u06ff\u0100-\u017f]+/i)
    .filter((item) => item.length > 2);
}

function joinBioParts(parts: string[], separator: string) {
  return parts.map(cleanClause).filter(Boolean).join(separator);
}

function lineOverlapPenalty(value: string) {
  const lines = value
    .split("\n")
    .map((line) => uniqueWords(line))
    .filter((line) => line.length > 0);

  let penalty = 0;

  for (let index = 0; index < lines.length; index += 1) {
    for (let nextIndex = index + 1; nextIndex < lines.length; nextIndex += 1) {
      const overlap = lines[index].filter((word) => lines[nextIndex].includes(word)).length;
      penalty += overlap * 4;
    }
  }

  return penalty;
}

function scoreBioCandidate(value: string, length: BioLength) {
  const text = cleanClause(value);
  const words = uniqueWords(text);
  const uniqueCount = new Set(words).size;
  const duplicatePenalty = words.length - uniqueCount;
  const lineCount = value.split("\n").filter(Boolean).length;
  const targetLengths: Record<BioLength, [number, number]> = {
    short: [14, 58],
    balanced: [28, 96],
    long: [46, 132],
  };
  const [minLength, maxLength] = targetLengths[length];

  let score = 0;

  if (text.length >= minLength && text.length <= maxLength) {
    score += 16;
  } else if (text.length <= maxLength + 16) {
    score += 8;
  } else {
    score -= 8;
  }

  if (words.length >= 4 && words.length <= 18) {
    score += 6;
  }

  if (lineCount >= 2 && lineCount <= 4) {
    score += 5;
  }

  if (!/[A-Za-z\u00c0-\u024f\u0100-\u017f]/.test(text)) {
    score -= 10;
  }

  score -= duplicatePenalty * 5;
  score -= lineOverlapPenalty(value);

  return score;
}

function addOptionalEmoji(value: string, platform: Platform, seed: number, enabled: boolean) {
  if (!enabled) {
    return value;
  }

  const emoji = emojiSets[platform][seed % emojiSets[platform].length];
  const lines = value.split("\n").filter(Boolean);

  if (lines.length === 0) {
    return value;
  }

  if (seed % 2 === 0) {
    lines[0] = `${emoji} ${lines[0]}`;
  } else {
    const lastIndex = lines.length - 1;
    lines[lastIndex] = `${lines[lastIndex]} ${emoji}`;
  }

  return lines.join("\n");
}

function createBioPatterns(
  safeName: string,
  starter: string,
  platformLine: string,
  closing: string,
  cta: string
) {
  return {
    short: [
      [safeName, platformLine],
      [safeName, closing],
      [starter, platformLine],
      [platformLine, cta || closing],
    ],
    balanced: [
      [safeName, platformLine, closing],
      [safeName, starter, closing],
      [starter, platformLine, closing],
      [safeName, platformLine, cta || closing],
    ],
    long: [
      [safeName, starter, platformLine, cta || closing],
      [safeName, platformLine, closing, cta || starter],
      [starter, platformLine, closing, cta],
      [safeName, starter, closing, cta || platformLine],
    ],
  };
}

function collectBioPool(
  name: string,
  platform: Platform,
  tone: Tone,
  length: BioLength,
  emojiEnabled: boolean,
  ctaEnabled: boolean,
  labels: BioGeneratorLabels
) {
  const safeName = normalizeName(name);
  const toneConfig = labels.templates[tone];
  const platformConfig = labels.platformLines[platform];
  const ctas = ctaEnabled ? labels.ctaLines[platform] : [""];
  const combinations = new Set<string>();
  let patternSeed = 0;

  for (const starter of toneConfig.starters) {
    for (const platformLine of platformConfig) {
      for (const closing of toneConfig.closings) {
        for (const cta of ctas) {
          const patterns = createBioPatterns(
            safeName,
            cleanClause(starter),
            cleanClause(platformLine),
            cleanClause(closing),
            cleanClause(cta)
          )[length];

          for (const parts of patterns) {
            const base = joinBioParts(parts.filter(Boolean), "\n");

            if (!base) {
              continue;
            }

            combinations.add(base);
            combinations.add(addOptionalEmoji(base, platform, patternSeed, emojiEnabled));
            patternSeed += 1;
          }
        }
      }
    }
  }

  return [...combinations]
    .filter((item) => scoreBioCandidate(item, length) > 10)
    .sort((left, right) => scoreBioCandidate(right, length) - scoreBioCandidate(left, length));
}

function buildBios(
  name: string,
  platform: Platform,
  tone: Tone,
  length: BioLength,
  emojiEnabled: boolean,
  ctaEnabled: boolean,
  labels: BioGeneratorLabels,
  generationIndex = 0
) {
  const signature = [
    normalizeName(name) || labels.defaultName || "bio",
    platform,
    tone,
    length,
    emojiEnabled ? "emoji" : "plain",
    ctaEnabled ? "cta" : "no-cta",
  ].join("-");
  const baseSeed = createHash(signature);
  const shuffledPool = shuffleWithSeed(
    collectBioPool(name, platform, tone, length, emojiEnabled, ctaEnabled, labels),
    baseSeed
  );
  const batchSize = 4;
  const safePool =
    shuffledPool.length > 0 ? shuffledPool : [cleanClause(labels.templates[tone].starters[0] ?? "")];
  const startIndex = (generationIndex * batchSize) % safePool.length;

  return Array.from({ length: Math.min(batchSize, safePool.length) }, (_, offset) => {
    const text = safePool[(startIndex + offset) % safePool.length];

    return {
      id: `${signature}-${generationIndex}-${offset}`,
      text,
    };
  });
}

type BioGeneratorProps = {
  labels: BioGeneratorLabels;
};

export function BioGenerator({ labels }: BioGeneratorProps) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [tone, setTone] = useState<Tone>("cool");
  const [length, setLength] = useState<BioLength>("balanced");
  const [emojiEnabled, setEmojiEnabled] = useState(true);
  const [ctaEnabled, setCtaEnabled] = useState(false);
  const [generationState, setGenerationState] = useState({
    signature: "",
    count: 0,
  });
  const [copiedValue, setCopiedValue] = useState("");
  const currentSignature = `${name}-${platform}-${tone}-${length}-${emojiEnabled}-${ctaEnabled}`;

  function handleGenerate() {
    setGenerationState((current) => ({
      signature: currentSignature,
      count: current.signature === currentSignature ? current.count + 1 : 1,
    }));
  }

  async function handleCopy(value: string) {
    const copied = await copyToClipboard(value);

    if (!copied) {
      return;
    }

    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  const generationCount =
    generationState.signature === currentSignature ? generationState.count : 0;

  const bios = useMemo(() => {
    return buildBios(
      name,
      platform,
      tone,
      length,
      emojiEnabled,
      ctaEnabled,
      labels,
      generationCount
    );
  }, [ctaEnabled, emojiEnabled, generationCount, labels, length, name, platform, tone]);

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.nameLabel}
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-[20px] border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none transition focus:border-[color:var(--color-accent)]"
              placeholder={labels.namePlaceholder}
            />
          </label>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.platformLabel}
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(labels.platforms) as Platform[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    platform === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.platforms[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.toneLabel}
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(labels.tones) as Tone[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTone(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    tone === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.tones[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.lengthLabel}
            </span>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(labels.lengths) as BioLength[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLength(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    length === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.lengths[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setEmojiEnabled((value) => !value)}
              className={`rounded-[20px] px-4 py-3 text-left text-sm font-medium transition ${
                emojiEnabled
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
              }`}
            >
              <span className="block text-xs uppercase tracking-[0.22em] opacity-80">
                {labels.emojiLabel}
              </span>
              <span className="mt-2 block">{emojiEnabled ? labels.toggleOn : labels.toggleOff}</span>
            </button>

            <button
              type="button"
              onClick={() => setCtaEnabled((value) => !value)}
              className={`rounded-[20px] px-4 py-3 text-left text-sm font-medium transition ${
                ctaEnabled
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
              }`}
            >
              <span className="block text-xs uppercase tracking-[0.22em] opacity-80">
                {labels.ctaLabel}
              </span>
              <span className="mt-2 block">{ctaEnabled ? labels.toggleOn : labels.toggleOff}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
          >
            {labels.generate}
          </button>
        </div>

        <div className="grid gap-4">
          {bios.map((bio, index) => (
            <article
              key={bio.id}
              className="rounded-[24px] border border-black/8 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                    <span className="rounded-full bg-black/[0.04] px-3 py-1">
                      {labels.platforms[platform]}
                    </span>
                    <span className="rounded-full bg-black/[0.04] px-3 py-1">
                      {labels.tones[tone]}
                    </span>
                    <span className="rounded-full bg-black/[0.04] px-3 py-1">
                      #{index + 1}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(bio.text)}
                    className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
                  >
                    {copiedValue === bio.text ? labels.copied : labels.copy}
                  </button>
                </div>

                <div className="space-y-3">
                  {bio.text.split("\n").filter(Boolean).map((line, lineIndex) => (
                    <p
                      key={`${bio.id}-${lineIndex}`}
                      className={
                        lineIndex === 0
                          ? "text-base font-medium leading-7 text-[color:var(--color-foreground)]"
                          : "text-sm leading-7 text-[color:var(--color-muted)]"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
