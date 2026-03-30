"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type HashtagPlatform = "instagram" | "tiktok" | "x" | "youtube";
type HashtagPopularity = "viral" | "balanced" | "niche";

type HashtagGeneratorLabels = {
  nicheLabel: string;
  nichePlaceholder: string;
  platformLabel: string;
  popularityLabel: string;
  helper: string;
  emptyState: string;
  generate: string;
  copyAll: string;
  copyOne: string;
  copied: string;
  allCopied: string;
  countSuffix: string;
  defaultTopic: string;
  platforms: Record<HashtagPlatform, string>;
  popularityModes: Record<HashtagPopularity, string>;
  pools: {
    modifiers: string[];
    generic: string[];
    platformTags: Record<HashtagPlatform, string[]>;
    popularityTags: Record<HashtagPopularity, string[]>;
  };
};

type HashtagGeneratorProps = {
  labels: HashtagGeneratorLabels;
};

function createHash(input: string) {
  return [...input].reduce((total, character, index) => {
    return (total + character.charCodeAt(0) * (index + 13)) % 100_003;
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

function normalizeToken(value: string) {
  return value
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

function tokenizeTopic(value: string, fallback: string) {
  const normalized = normalizeToken(value || fallback);

  return normalized.split(/\s+/).filter(Boolean);
}

function buildTopicVariants(tokens: string[]) {
  const full = tokens.join("");
  const first = tokens[0] ?? "";
  const last = tokens.at(-1) ?? "";
  const joined =
    tokens.length > 1 ? `${tokens[0]}${tokens.slice(1).map((token) => `${token[0]?.toUpperCase() ?? ""}${token.slice(1)}`).join("")}`.toLowerCase() : "";

  return [...new Set([full, first, last, joined].filter((item) => item.length >= 3))];
}

function addHashtag(pool: Set<string>, value: string) {
  const normalized = value.replace(/[^a-z0-9]/g, "").toLowerCase();

  if (normalized.length >= 3 && normalized.length <= 24) {
    pool.add(normalized);
  }
}

function scoreHashtag(
  value: string,
  topicVariants: string[],
  popularity: HashtagPopularity,
  platform: HashtagPlatform
) {
  let score = 0;

  if (value.length >= 5 && value.length <= 22) {
    score += 10;
  } else if (value.length <= 28) {
    score += 5;
  } else {
    score -= 6;
  }

  if (topicVariants.some((variant) => value.includes(variant))) {
    score += 10;
  }

  if (/^[a-z0-9]+$/.test(value)) {
    score += 3;
  }

  if (value.includes(platform)) {
    score += 4;
  }

  if (popularity === "viral" && /(viral|trend|fyp|kesfet|popular|discover)/.test(value)) {
    score += 6;
  }

  if (popularity === "niche" && /(guide|workflow|rehber|detay|special|target|odak)/.test(value)) {
    score += 6;
  }

  if (/(.)\1\1/.test(value)) {
    score -= 6;
  }

  if (/(tips|ideas|guide|community|studio|hub)$/.test(value)) {
    score += 2;
  }

  return score;
}

function createHashtagBatch(
  topic: string,
  platform: HashtagPlatform,
  popularity: HashtagPopularity,
  labels: HashtagGeneratorLabels,
  generationCount: number
) {
  const tokens = tokenizeTopic(topic, labels.defaultTopic);
  const topicVariants = buildTopicVariants(tokens);
  const seed = createHash(`${tokens.join("-")}-${platform}-${popularity}-${generationCount}`);
  const pool = new Set<string>();
  const topicCore = new Set<string>();
  const modifierMix = new Set<string>();
  const platformMix = new Set<string>();
  const popularityMix = new Set<string>();
  const genericMix = new Set<string>();

  for (const variant of topicVariants) {
    addHashtag(topicCore, variant);

    for (const modifier of labels.pools.modifiers) {
      addHashtag(modifierMix, `${variant}${modifier}`);
    }

    for (const tag of labels.pools.platformTags[platform].slice(0, 4)) {
      addHashtag(platformMix, `${variant}${tag}`);
    }

    for (const tag of labels.pools.popularityTags[popularity].slice(0, 4)) {
      addHashtag(popularityMix, `${variant}${tag}`);
    }
  }

  for (const tag of labels.pools.generic) {
    addHashtag(genericMix, tag);
  }

  for (const tag of labels.pools.platformTags[platform]) {
    addHashtag(platformMix, tag);
  }

  for (const tag of labels.pools.popularityTags[popularity]) {
    addHashtag(popularityMix, tag);
  }

  for (const item of [
    ...topicCore,
    ...modifierMix,
    ...platformMix,
    ...popularityMix,
    ...genericMix,
  ]) {
    addHashtag(pool, item);
  }

  const ordered = [...pool]
    .filter((item) => item.length >= 3)
    .sort((left, right) => {
      const scoreDiff =
        scoreHashtag(right, topicVariants, popularity, platform) -
        scoreHashtag(left, topicVariants, popularity, platform);

      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return createHash(`${right}-${seed}`) - createHash(`${left}-${seed}`);
    });

  const pickBucket = (items: Set<string>, limit: number, bucketSeed: number) => {
    return shuffleWithSeed(
      [...items].sort((left, right) => {
        const scoreDiff =
          scoreHashtag(right, topicVariants, popularity, platform) -
          scoreHashtag(left, topicVariants, popularity, platform);

        if (scoreDiff !== 0) {
          return scoreDiff;
        }

        return left.localeCompare(right);
      }),
      seed + bucketSeed
    ).slice(0, limit);
  };
  const quotaByPopularity: Record<HashtagPopularity, [number, number, number, number, number]> = {
    viral: [7, 6, 6, 5, 2],
    balanced: [8, 6, 5, 4, 3],
    niche: [9, 5, 4, 5, 3],
  };
  const [topicLimit, modifierLimit, platformLimit, popularityLimit, genericLimit] =
    quotaByPopularity[popularity];
  const curated = [
    ...pickBucket(topicCore, topicLimit, 11),
    ...pickBucket(modifierMix, modifierLimit, 23),
    ...pickBucket(platformMix, platformLimit, 37),
    ...pickBucket(popularityMix, popularityLimit, 41),
    ...pickBucket(genericMix, genericLimit, 53),
  ];
  const finalPool = [...new Set([...curated, ...shuffleWithSeed(ordered.slice(0, 80), seed + generationCount * 17)])];
  const batch = finalPool.slice(0, 26).map((item) => `#${item}`);

  return batch;
}

export function HashtagGenerator({ labels }: HashtagGeneratorProps) {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<HashtagPlatform>("instagram");
  const [popularity, setPopularity] = useState<HashtagPopularity>("balanced");
  const [generationCount, setGenerationCount] = useState(0);
  const [copiedTag, setCopiedTag] = useState("");
  const [allCopied, setAllCopied] = useState(false);

  const hashtags = useMemo(
    () => createHashtagBatch(topic, platform, popularity, labels, generationCount),
    [generationCount, labels, platform, popularity, topic]
  );

  async function handleCopyAll() {
    const copied = await copyToClipboard(hashtags.join(" "));

    if (!copied) {
      return;
    }

    setAllCopied(true);
    window.setTimeout(() => setAllCopied(false), 1600);
  }

  async function handleCopyOne(tag: string) {
    const copied = await copyToClipboard(tag);

    if (!copied) {
      return;
    }

    setCopiedTag(tag);
    window.setTimeout(() => setCopiedTag(""), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.nicheLabel}
            </span>
            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.16)]"
              placeholder={labels.nichePlaceholder}
            />
          </label>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.platformLabel}
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(labels.platforms) as HashtagPlatform[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    platform === item
                      ? "bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-white"
                      : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                  }`}
                >
                  {labels.platforms[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.popularityLabel}
            </span>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(labels.popularityModes) as HashtagPopularity[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPopularity(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    popularity === item
                      ? "bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-white"
                      : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                  }`}
                >
                  {labels.popularityModes[item]}
                </button>
              ))}
            </div>
          </div>

          <p className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.helper}
          </p>

          <button
            type="button"
            onClick={() => setGenerationCount((value) => value + 1)}
            className="rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {labels.generate}
          </button>
        </div>

        <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                {hashtags.length} {labels.countSuffix}
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {hashtags.length > 0 ? labels.helper : labels.emptyState}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyAll}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {allCopied ? labels.allCopied : labels.copyAll}
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {hashtags.map((tag) => (
              <article
                key={tag}
                className="rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4 transition hover:border-[color:var(--brand-border-hover)]"
              >
                <p className="break-words text-sm font-semibold leading-7 text-[color:var(--brand-text-primary)]">
                  {tag}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopyOne(tag)}
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2.5 text-sm font-medium text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
                >
                  {copiedTag === tag ? labels.copied : labels.copyOne}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
