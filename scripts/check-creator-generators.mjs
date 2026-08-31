import assert from "node:assert/strict";

import {
  generateBioOptions,
  generateHashtagOptions,
  generateNicknameOptions,
} from "../lib/creator-generators.ts";
import { getCreatorToolEnhancements } from "../lib/creator-tool-localizations.ts";

const tones = ["cool", "mysterious", "personal", "professional", "minimal", "bold", "playful", "sharp"];
const platforms = { instagram: "Instagram", tiktok: "TikTok", x: "X", youtube: "YouTube", twitch: "Twitch" };
const bioBase = {
  platforms,
  tones: Object.fromEntries(tones.map((tone) => [tone, tone])),
  lengths: { short: "Short", balanced: "Balanced", long: "Long" },
  templates: Object.fromEntries(tones.map((tone) => [tone, {
    starters: [`${tone} ideas with a clear point`, `useful ${tone} notes`, `${tone} work in progress`],
    closings: ["clear and useful"],
  }])),
};
const nicknameBase = {
  styles: { cool: "Cool", dark: "Dark", gaming: "Gaming", aesthetic: "Aesthetic" },
  lengthModes: { short: "Short", balanced: "Balanced", long: "Long" },
  symbolModes: { none: "Clean", light: "Light", bold: "Styled" },
};
const hashtagBase = {
  platforms: { instagram: "Instagram", tiktok: "TikTok", x: "X", youtube: "YouTube" },
  popularityModes: { viral: "Viral", balanced: "Balanced", niche: "Niche" },
  pools: {
    modifiers: ["tips", "ideas", "guide", "daily", "community", "notes", "studio", "world"],
    generic: ["contentcreator", "digitalcreator", "creatortools", "socialmedia", "creativework", "creatorlife"],
    platformTags: {
      instagram: ["instagram", "reels", "instacreator", "instatips", "content", "explorepage"],
      tiktok: ["tiktok", "fyp", "tiktoktips", "shortform", "creatorlife", "viralvideo"],
      x: ["twitterx", "xcreator", "socialtips", "posting", "trendwatch", "creatornews"],
      youtube: ["youtube", "shorts", "youtubetips", "videocreator", "channelgrowth", "videoideas"],
    },
    popularityTags: {
      viral: ["viral", "trending", "foryou", "discover", "popularnow", "mustsee"],
      balanced: ["tips", "ideas", "growth", "strategy", "community", "creativework"],
      niche: ["deepdive", "workflow", "behindthescenes", "targeted", "specialized", "insideguide"],
    },
  },
};

const tr = getCreatorToolEnhancements("tr");
const bioLabels = { ...bioBase, ...tr.bio };
const nicknameLabels = { ...nicknameBase, ...tr.nickname };
const hashtagLabels = { ...hashtagBase, ...tr.hashtag };

const bioBatches = Array.from({ length: 10 }, (_, index) => generateBioOptions({
  name: "@mutfaktanesra",
  niche: "pratik yemek tarifleri",
  audience: "zamanı az olan öğrenciler",
  value: "20 dakikada uygulanabilir tarifler",
  platform: "instagram",
  tone: "personal",
  length: "balanced",
  emojiEnabled: true,
  ctaMode: "follow",
}, bioLabels, index));

for (const batch of bioBatches) {
  assert.equal(batch.length, 3);
  assert.equal(new Set(batch.map((item) => item.text)).size, 3);
  assert.ok(batch.every((item) => item.characterCount <= 150));
  assert.ok(batch.every((item) => /yemek|tarif/i.test(item.text)));
  assert.ok(batch.every((item) => !/work in progress|keskin zevk|düzenli ivme/i.test(item.text)));
}
assert.equal(
  new Set(bioBatches.map((batch) => batch.map((item) => item.text).join("||"))).size,
  bioBatches.length
);
assert.ok(new Set(bioBatches.flatMap((batch) => batch.map((item) => item.text))).size >= 12);

const nicknameBatches = Array.from({ length: 8 }, (_, index) => generateNicknameOptions({
  keyword: "ahmet",
  useCase: "social",
  style: "cool",
  length: "balanced",
  symbolMode: "none",
  pronounceable: true,
}, nicknameLabels, index));

for (const batch of nicknameBatches) {
  assert.ok(batch.length >= 6);
  assert.equal(new Set(batch.map((item) => item.value)).size, batch.length);
  assert.ok(batch.every((item) => /^[a-z0-9._]+$/.test(item.value)));
  assert.ok(batch.every((item) => item.value.length <= 14));
}
assert.equal(
  new Set(nicknameBatches.map((batch) => batch.map((item) => item.value).join("|"))).size,
  nicknameBatches.length
);
assert.ok(new Set(nicknameBatches.flatMap((batch) => batch.map((item) => item.value))).size >= 16);

for (const count of [20, 25, 30]) {
  const tags = generateHashtagOptions({
    topic: "yemek",
    location: "İstanbul",
    platform: "instagram",
    popularity: "balanced",
    count,
  }, hashtagLabels, count);
  assert.equal(tags.length, count);
  assert.equal(new Set(tags.map((item) => item.value)).size, count);
  assert.ok(tags.every((item) => /^#[a-z0-9]+$/.test(item.value)));
}

const hashtagBatches = Array.from({ length: 6 }, (_, index) => generateHashtagOptions({
  topic: "sürdürülebilir moda",
  location: "İstanbul",
  platform: "instagram",
  popularity: "balanced",
  count: 25,
}, hashtagLabels, index));
assert.equal(
  new Set(hashtagBatches.map((batch) => batch.map((item) => item.value).join("|"))).size,
  hashtagBatches.length
);

const localizedTopics = {
  tr: "pratik yemek tarifleri",
  en: "quick recipes",
  es: "recetas rápidas",
  de: "schnelle Rezepte",
  fr: "recettes rapides",
  pt: "receitas rápidas",
};

for (const [locale, topic] of Object.entries(localizedTopics)) {
  const enhancement = getCreatorToolEnhancements(locale);
  const localizedBio = generateBioOptions({
    name: "",
    niche: topic,
    audience: "",
    value: "",
    platform: "instagram",
    tone: "minimal",
    length: "balanced",
    emojiEnabled: false,
    ctaMode: "none",
  }, { ...bioBase, ...enhancement.bio }, 2);
  const localizedTags = generateHashtagOptions({
    topic,
    location: "",
    platform: "instagram",
    popularity: "niche",
    count: 20,
  }, { ...hashtagBase, ...enhancement.hashtag }, 2);

  assert.equal(localizedBio.length, 3);
  assert.ok(localizedBio.every((item) => item.text.length > 0 && item.characterCount <= 150));
  assert.equal(localizedTags.length, 20);
}

console.log("Creator generator quality checks passed.");
console.log("Bio sample:\n", bioBatches[0].map((item) => item.text).join("\n---\n"));
console.log("Nickname sample:", nicknameBatches[0].map((item) => item.value).join(", "));
