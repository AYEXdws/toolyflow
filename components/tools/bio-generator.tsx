"use client";

import { useMemo, useState } from "react";

type Platform = "instagram" | "gaming" | "personal";
type Tone =
  | "cool"
  | "mysterious"
  | "personal"
  | "professional"
  | "minimal"
  | "bold";

type BioGeneratorLabels = {
  nameLabel: string;
  namePlaceholder: string;
  platformLabel: string;
  toneLabel: string;
  generate: string;
  copy: string;
  copied: string;
  platforms: Record<Platform, string>;
  tones: Record<Tone, string>;
  defaultName: string;
  platformLines: Record<Platform, string[]>;
  templates: Record<Tone, { starters: string[]; closings: string[] }>;
};

const bioSeparators = [" • ", " | "];

function normalizeName(value: string, fallback: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return fallback;
  }

  return trimmed
    .split(/\s+/)
    .map((part) => {
      if (part.startsWith("@")) {
        return `@${part.slice(1).charAt(0).toUpperCase()}${part.slice(2)}`;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
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
  return value.trim().replace(/[.|/•]+$/g, "").replace(/\s+/g, " ");
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

function scoreBioCandidate(value: string) {
  const text = cleanClause(value);
  const length = text.length;
  const words = uniqueWords(text);
  const uniqueCount = new Set(words).size;
  const duplicatePenalty = words.length - uniqueCount;

  let score = 0;

  if (length >= 28 && length <= 92) {
    score += 14;
  } else if (length >= 20 && length <= 110) {
    score += 7;
  } else {
    score -= 6;
  }

  if (text.includes(" • ") || text.includes(" | ") || text.includes(" / ")) {
    score += 5;
  }

  if (words.length >= 4 && words.length <= 12) {
    score += 4;
  }

  score -= duplicatePenalty * 4;

  if (/[a-zA-Z\u00c0-\u024f\u0100-\u017f]/.test(text)) {
    score += 2;
  }

  return score;
}

function collectBioPool(
  name: string,
  platform: Platform,
  tone: Tone,
  labels: BioGeneratorLabels
) {
  const toneConfig = labels.templates[tone];
  const platformConfig = labels.platformLines[platform];
  const safeName = normalizeName(name, labels.defaultName);
  const combinations = new Set<string>();
  const handlePrefix = safeName;

  for (const separator of bioSeparators) {
    for (const starter of toneConfig.starters) {
      for (const closing of toneConfig.closings) {
        for (const platformLine of platformConfig) {
          const starterClause = cleanClause(starter);
          const platformClause = cleanClause(platformLine);
          const closingClause = cleanClause(closing);

          combinations.add(
            joinBioParts(
              handlePrefix ? [handlePrefix, starterClause] : [starterClause],
              separator
            )
          );
          combinations.add(
            joinBioParts(
              handlePrefix ? [handlePrefix, platformClause] : [platformClause],
              separator
            )
          );
          combinations.add(
            joinBioParts(
              handlePrefix
                ? [handlePrefix, starterClause, closingClause]
                : [starterClause, closingClause],
              separator
            )
          );
          combinations.add(
            joinBioParts(
              handlePrefix
                ? [handlePrefix, platformClause, closingClause]
                : [platformClause, closingClause],
              separator
            )
          );
          combinations.add(
            joinBioParts(
              handlePrefix
                ? [handlePrefix, starterClause, platformClause]
                : [starterClause, platformClause],
              separator
            )
          );
          combinations.add(
            joinBioParts(
              handlePrefix
                ? [handlePrefix, starterClause, platformClause, closingClause]
                : [starterClause, platformClause, closingClause],
              separator
            )
          );
          if (handlePrefix) {
            combinations.add(
              joinBioParts([starterClause, handlePrefix, closingClause], separator)
            );
            combinations.add(
              joinBioParts([handlePrefix, closingClause], separator)
            );
          }
        }
      }
    }
  }

  return [...combinations]
    .filter((item) => scoreBioCandidate(item) > 8)
    .sort((left, right) => scoreBioCandidate(right) - scoreBioCandidate(left));
}

function buildBios(
  name: string,
  platform: Platform,
  tone: Tone,
  labels: BioGeneratorLabels,
  generationIndex = 0
) {
  const baseSeed = createHash(
    `${normalizeName(name, labels.defaultName)}-${platform}-${tone}`
  );
  const shuffledPool = shuffleWithSeed(
    collectBioPool(name, platform, tone, labels),
    baseSeed
  );
  const batchSize = 4;
  const safePool =
    shuffledPool.length > 0
      ? shuffledPool
      : [cleanClause(labels.templates[tone].starters[0] ?? "")];
  const startIndex = (generationIndex * batchSize) % safePool.length;

  return Array.from({ length: Math.min(batchSize, safePool.length) }, (_, offset) => {
    return safePool[(startIndex + offset) % safePool.length];
  });
}

type BioGeneratorProps = {
  labels: BioGeneratorLabels;
};

export function BioGenerator({ labels }: BioGeneratorProps) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [tone, setTone] = useState<Tone>("cool");
  const [generationState, setGenerationState] = useState({
    signature: "",
    count: 0,
  });
  const [copiedValue, setCopiedValue] = useState("");
  const currentSignature = `${name}-${platform}-${tone}`;

  function handleGenerate() {
    setGenerationState((current) => ({
      signature: currentSignature,
      count: current.signature === currentSignature ? current.count + 1 : 1,
    }));
  }

  async function handleCopy(value: string) {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  const generationCount =
    generationState.signature === currentSignature ? generationState.count : 0;

  const bios = useMemo(() => {
    return buildBios(name, platform, tone, labels, generationCount);
  }, [generationCount, labels, name, platform, tone]);

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
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
            <div className="grid grid-cols-3 gap-3">
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

          <button
            type="button"
            onClick={handleGenerate}
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
          >
            {labels.generate}
          </button>
        </div>

        <div className="grid gap-4">
          {bios.map((bio) => (
            <button
              key={bio}
              type="button"
              onClick={() => handleCopy(bio)}
              className="rounded-[24px] border border-black/8 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
            >
              <p className="text-sm leading-7 text-[color:var(--color-foreground)]">
                {bio}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {copiedValue === bio ? labels.copied : labels.copy}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
