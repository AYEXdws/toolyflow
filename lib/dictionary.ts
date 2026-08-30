import { cache } from "react";

import {
  getFallbackCategoryCounts,
  getFallbackDictionarySlugs,
  getFallbackDictionaryWord,
  getFallbackRelatedWords,
  searchFallbackDictionary,
} from "@/lib/dictionary-fallback";
import {
  createDictionarySearchFilter,
  dictionaryCategories,
  dictionarySelectColumns,
  normalizeDictionaryWord,
  type DictionaryCategory,
  type DictionaryWord,
} from "@/lib/dictionary-shared";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type DictionarySearchInput = {
  query?: string;
  category?: DictionaryCategory | "all";
  limit?: number;
};

function reportDictionaryError(operation: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[dictionary:${operation}] ${message}`);
}

function buildSearchQuery({
  query = "",
  category = "all",
  limit = 12,
}: DictionarySearchInput) {
  let request = supabase
    .from("kelimeler")
    .select(dictionarySelectColumns)
    .order("goruntulenme", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (category !== "all") {
    request = request.eq("kategori", category);
  }

  const searchFilter = createDictionarySearchFilter(query);
  if (searchFilter) {
    request = request.or(searchFilter);
  }

  return request;
}

export const getPopularDictionaryWords = cache(async (limit = 12) => {
  const fallback = searchFallbackDictionary({ limit }).words;

  if (!isSupabaseConfigured) {
    return fallback;
  }

  try {
    const { data, error } = await supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .order("goruntulenme", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      reportDictionaryError("popular", error.message);
      return fallback;
    }

    return data?.length
      ? data.map((item) => normalizeDictionaryWord(item as DictionaryWord))
      : fallback;
  } catch (error) {
    reportDictionaryError("popular", error);
    return fallback;
  }
});

export const getDictionaryWordBySlug = cache(async (slug: string) => {
  const fallback = getFallbackDictionaryWord(slug);

  if (!isSupabaseConfigured) {
    return fallback;
  }

  try {
    const { data, error } = await supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      reportDictionaryError("word", error.message);
      return fallback;
    }

    return data ? normalizeDictionaryWord(data as DictionaryWord) : fallback;
  } catch (error) {
    reportDictionaryError("word", error);
    return fallback;
  }
});

export async function getRelatedDictionaryWords(category: string, excludeSlug: string, limit = 4) {
  const fallback = getFallbackRelatedWords(category, excludeSlug, limit);

  if (!isSupabaseConfigured) {
    return fallback;
  }

  try {
    const { data, error } = await supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .eq("kategori", category)
      .neq("slug", excludeSlug)
      .order("goruntulenme", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      reportDictionaryError("related", error.message);
      return fallback;
    }

    return data?.length
      ? data.map((item) => normalizeDictionaryWord(item as DictionaryWord))
      : fallback;
  } catch (error) {
    reportDictionaryError("related", error);
    return fallback;
  }
}

export async function searchDictionaryWords(input: DictionarySearchInput) {
  const fallback = searchFallbackDictionary(input).words;

  if (!isSupabaseConfigured) {
    return fallback;
  }

  try {
    const { data, error } = await buildSearchQuery(input);

    if (error) {
      reportDictionaryError("search", error.message);
      return fallback;
    }

    return data?.length
      ? data.map((item) => normalizeDictionaryWord(item as DictionaryWord))
      : fallback;
  } catch (error) {
    reportDictionaryError("search", error);
    return fallback;
  }
}

export async function getDictionaryCategoryCounts() {
  const fallback = getFallbackCategoryCounts();

  if (!isSupabaseConfigured) {
    return fallback;
  }

  const entries = await Promise.all(
    dictionaryCategories.map(async (category) => {
      try {
        const { count, error } = await supabase
          .from("kelimeler")
          .select("id", { count: "exact", head: true })
          .eq("kategori", category);

        if (error) {
          reportDictionaryError(`count-${category}`, error.message);
          return [category, fallback[category]] as const;
        }

        return [category, count ?? fallback[category]] as const;
      } catch (error) {
        reportDictionaryError(`count-${category}`, error);
        return [category, fallback[category]] as const;
      }
    })
  );

  const counts = Object.fromEntries(entries) as Record<DictionaryCategory, number>;
  return Object.values(counts).some((count) => count > 0) ? counts : fallback;
}

export const getAllDictionaryWordSlugs = cache(async () => {
  const fallbackSlugs = getFallbackDictionarySlugs();

  if (!isSupabaseConfigured) {
    return fallbackSlugs;
  }

  try {
    const pageSize = 1000;
    const remoteSlugs: string[] = [];

    for (let offset = 0; ; offset += pageSize) {
      const { data, error } = await supabase
        .from("kelimeler")
        .select("slug")
        .order("created_at", { ascending: true })
        .range(offset, offset + pageSize - 1);

      if (error) {
        reportDictionaryError("slugs", error.message);
        break;
      }

      remoteSlugs.push(
        ...(data ?? [])
          .map((item) => item.slug)
          .filter((value): value is string => Boolean(value))
      );

      if (!data || data.length < pageSize) {
        break;
      }
    }

    return [...new Set([...fallbackSlugs, ...remoteSlugs])];
  } catch (error) {
    reportDictionaryError("slugs", error);
    return fallbackSlugs;
  }
});
