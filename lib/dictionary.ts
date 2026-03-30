import { cache } from "react";

import {
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

  const normalizedQuery = query.trim();

  if (normalizedQuery) {
    const escaped = normalizedQuery.replaceAll("%", "\\%").replaceAll("_", "\\_");
    request = request.or(
      `kelime.ilike.%${escaped}%,anlam.ilike.%${escaped}%,etiketler.cs.{${escaped}}`
    );
  }

  return request;
}

async function safeSelect<T>(
  promise: PromiseLike<{ data: T[] | null; error: { message: string } | null }>
) {
  try {
    const { data, error } = await promise;

    if (error || !data) {
      return [];
    }

    return data;
  } catch {
    return [];
  }
}

export const getPopularDictionaryWords = cache(async (limit = 12) => {
  if (!isSupabaseConfigured) {
    return [] as DictionaryWord[];
  }

  const data = await safeSelect<DictionaryWord>(
    supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .order("goruntulenme", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .limit(limit)
  );

  return data.map(normalizeDictionaryWord);
});

export const getDictionaryWordBySlug = cache(async (slug: string) => {
  if (!isSupabaseConfigured) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .eq("slug", slug)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return normalizeDictionaryWord(data);
  } catch {
    return null;
  }
});

export async function getRelatedDictionaryWords(category: string, excludeSlug: string, limit = 4) {
  if (!isSupabaseConfigured) {
    return [] as DictionaryWord[];
  }

  const data = await safeSelect<DictionaryWord>(
    supabase
      .from("kelimeler")
      .select(dictionarySelectColumns)
      .eq("kategori", category)
      .neq("slug", excludeSlug)
      .order("goruntulenme", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .limit(limit)
  );

  return data.map(normalizeDictionaryWord);
}

export async function searchDictionaryWords(input: DictionarySearchInput) {
  if (!isSupabaseConfigured) {
    return [] as DictionaryWord[];
  }

  const data = await safeSelect<DictionaryWord>(buildSearchQuery(input));
  return data.map(normalizeDictionaryWord);
}

export async function getDictionaryCategoryCounts() {
  if (!isSupabaseConfigured) {
    return {
      argo: 0,
      deyim: 0,
      genel: 0,
    } as Record<DictionaryCategory, number>;
  }

  const entries = await Promise.all(
    dictionaryCategories.map(async (category) => {
      try {
        const { count } = await supabase
          .from("kelimeler")
          .select("id", { count: "exact", head: true })
          .eq("kategori", category);

        return [category, count ?? 0] as const;
      } catch {
        return [category, 0] as const;
      }
    })
  );

  return Object.fromEntries(entries) as Record<DictionaryCategory, number>;
}

export const getAllDictionaryWordSlugs = cache(async () => {
  if (!isSupabaseConfigured) {
    return [] as string[];
  }

  try {
    const { data, error } = await supabase
      .from("kelimeler")
      .select("slug")
      .order("goruntulenme", { ascending: false, nullsFirst: false })
      .limit(500);

    if (error || !data) {
      return [] as string[];
    }

    return data
      .map((item) => item.slug)
      .filter((value): value is string => Boolean(value));
  } catch {
    return [] as string[];
  }
});
