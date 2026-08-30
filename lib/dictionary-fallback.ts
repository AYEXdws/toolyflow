import fallbackRecords from "@/lib/dictionary-fallback.json";
import {
  normalizeDictionaryWord,
  type DictionaryCategory,
  type DictionaryWord,
} from "@/lib/dictionary-shared";

export const fallbackDictionaryWords: DictionaryWord[] = fallbackRecords.map((record) =>
  normalizeDictionaryWord(record)
);

const fallbackBySlug = new Map(
  fallbackDictionaryWords.map((word) => [word.slug, word] as const)
);

export function getFallbackDictionaryWord(slug: string) {
  return fallbackBySlug.get(slug) ?? null;
}

export function getFallbackDictionarySlugs() {
  return fallbackDictionaryWords.map((word) => word.slug);
}

export function getFallbackCategoryCounts() {
  const counts: Record<DictionaryCategory, number> = {
    argo: 0,
    deyim: 0,
    genel: 0,
  };

  for (const word of fallbackDictionaryWords) {
    if (word.kategori in counts) {
      counts[word.kategori as DictionaryCategory] += 1;
    }
  }

  return counts;
}

export function searchFallbackDictionary({
  query = "",
  category = "all",
  limit = 24,
  offset = 0,
}: {
  query?: string;
  category?: DictionaryCategory | "all";
  limit?: number;
  offset?: number;
}) {
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
  const filtered = fallbackDictionaryWords.filter((word) => {
    if (category !== "all" && word.kategori !== category) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return `${word.kelime} ${word.anlam}`
      .toLocaleLowerCase("tr-TR")
      .includes(normalizedQuery);
  });

  return {
    words: filtered.slice(offset, offset + limit),
    count: filtered.length,
  };
}

export function getFallbackRelatedWords(category: string, excludeSlug: string, limit = 4) {
  return fallbackDictionaryWords
    .filter((word) => word.kategori === category && word.slug !== excludeSlug)
    .slice(0, limit);
}
