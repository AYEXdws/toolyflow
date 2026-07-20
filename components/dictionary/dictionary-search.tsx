"use client";

import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useRef, useState, useTransition } from "react";

import {
  createDictionarySearchFilter,
  dictionaryCategories,
  dictionarySelectColumns,
  getDictionaryCategoryLabel,
  normalizeDictionaryWord,
  trimMeaning,
  type DictionaryCategory,
  type DictionaryWord,
} from "@/lib/dictionary-shared";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const pageSize = 24;

const categoryDescriptions: Record<DictionaryCategory, string> = {
  argo: "Günlük dilde ve internet kültüründe kullanılan ifadeler.",
  deyim: "Kalıplaşmış sözlerin anlamları ve kullanım örnekleri.",
  genel: "Sık aranan kelimeler ve anlaşılır açıklamaları.",
};

type DictionarySearchProps = {
  initialWords: DictionaryWord[];
  categoryCounts: Record<DictionaryCategory, number>;
  totalWords: number;
};

export function DictionarySearch({
  initialWords,
  categoryCounts,
  totalWords,
}: DictionarySearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<DictionaryCategory | "all">("all");
  const [words, setWords] = useState(initialWords);
  const [resultCount, setResultCount] = useState(totalWords);
  const [loadedPages, setLoadedPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const requestSequenceRef = useRef(0);
  const deferredQuery = useDeferredValue(query.trim());

  const categoryPills = useMemo(
    () => [
      { value: "all" as const, label: "Tümü", count: totalWords },
      ...dictionaryCategories.map((category) => ({
        value: category,
        label: getDictionaryCategoryLabel(category),
        count: categoryCounts[category],
      })),
    ],
    [categoryCounts, totalWords]
  );

  useEffect(() => {
    let cancelled = false;
    const requestSequence = ++requestSequenceRef.current;

    async function runSearch() {
      if (!isSupabaseConfigured) {
        setError("Supabase bağlantısı kurulunca sözlük sonuçları burada görünecek.");
        startTransition(() => {
          setWords(initialWords);
          setResultCount(initialWords.length);
          setLoadedPages(1);
        });
        return;
      }

      setError("");

      try {
        let request = supabase
          .from("kelimeler")
          .select(dictionarySelectColumns, { count: "exact" })
          .order("goruntulenme", { ascending: false, nullsFirst: false })
          .order("created_at", { ascending: false })
          .range(0, pageSize - 1);

        if (activeCategory !== "all") {
          request = request.eq("kategori", activeCategory);
        }

        if (deferredQuery) {
          const searchFilter = createDictionarySearchFilter(deferredQuery);
          if (searchFilter) {
            request = request.or(searchFilter);
          }
        }

        const { data, count, error: requestError } = await request;

        if (cancelled || requestSequence !== requestSequenceRef.current) {
          return;
        }

        if (requestError) {
          setError("Bir şeyler ters gitti, tekrar dene.");
          return;
        }

        startTransition(() => {
          setWords((data ?? []).map((item) => normalizeDictionaryWord(item as DictionaryWord)));
          setResultCount(count ?? 0);
          setLoadedPages(1);
        });
      } catch {
        if (!cancelled) {
          setError("Bir şeyler ters gitti, tekrar dene.");
        }
      }
    }

    runSearch();

    return () => {
      cancelled = true;
    };
  }, [activeCategory, deferredQuery, initialWords]);

  async function loadMore() {
    if (!isSupabaseConfigured || isLoadingMore || words.length >= resultCount) {
      return;
    }

    setIsLoadingMore(true);
    setError("");
    const requestSequence = requestSequenceRef.current;

    try {
      const from = loadedPages * pageSize;
      let request = supabase
        .from("kelimeler")
        .select(dictionarySelectColumns)
        .order("goruntulenme", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false })
        .range(from, from + pageSize - 1);

      if (activeCategory !== "all") {
        request = request.eq("kategori", activeCategory);
      }

      if (deferredQuery) {
        const searchFilter = createDictionarySearchFilter(deferredQuery);
        if (searchFilter) {
          request = request.or(searchFilter);
        }
      }

      const { data, error: requestError } = await request;

      if (requestSequence !== requestSequenceRef.current) {
        return;
      }

      if (requestError) {
        setError("Bir şeyler ters gitti, tekrar dene.");
        return;
      }

      startTransition(() => {
        setWords((currentWords) => [
          ...currentWords,
          ...(data ?? []).map((item) => normalizeDictionaryWord(item as DictionaryWord)),
        ]);
        setLoadedPages((currentPage) => currentPage + 1);
      });
    } catch {
      setError("Bir şeyler ters gitti, tekrar dene.");
    } finally {
      setIsLoadingMore(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {dictionaryCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                requestSequenceRef.current += 1;
                setActiveCategory(category);
              }}
              aria-pressed={isActive}
              className={`min-h-36 rounded-[24px] border p-5 text-left shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.01] hover:border-[color:var(--brand-border-hover)] ${
                isActive
                  ? "border-[color:var(--brand-border-hover)] bg-[color:var(--brand-surface)]"
                  : "border-[color:var(--brand-border)] bg-[color:var(--brand-card)]"
              }`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {getDictionaryCategoryLabel(category)}
                </span>
                <span className="text-sm font-semibold text-[color:var(--brand-secondary)]">
                  {categoryCounts[category]}
                </span>
              </span>
              <span className="mt-4 block text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {categoryDescriptions[category]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
        <label className="block space-y-3">
          <span className="text-sm font-semibold text-[color:var(--brand-text-primary)]">
            Kelime veya ifade ara
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Örn. ghostlamak, lowkey, kırmızı çizgi"
            className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
          />
        </label>

        <div className="mt-5 flex flex-wrap gap-2">
          {categoryPills.map((pill) => {
            const isActive = pill.value === activeCategory;

            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => {
                  requestSequenceRef.current += 1;
                  setActiveCategory(pill.value);
                }}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-white"
                    : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                }`}
              >
                <span>{pill.label}</span>
                <span
                  className={`text-xs ${
                    isActive ? "text-white/80" : "text-[color:var(--brand-text-secondary)]"
                  }`}
                >
                  {pill.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
            Sonuçlar
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[color:var(--brand-text-primary)]">
            {resultCount} kelime
          </h2>
          <p className="mt-2 text-sm text-[color:var(--brand-text-secondary)]">
            {resultCount > words.length
              ? `${words.length} sonuç gösteriliyor.`
              : `Toplam ${totalWords} kelime içinde geziniyorsun.`}
          </p>
        </div>
        <p className="text-sm text-[color:var(--brand-text-secondary)]">
          {isPending ? "Hazırlanıyor..." : deferredQuery ? "Aramaya göre güncellendi" : "Öne çıkan kelimeler"}
        </p>
      </div>

      {error ? (
        <div className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-5 py-4 text-sm text-[color:var(--brand-text-secondary)]">
          {error}
        </div>
      ) : null}

      {words.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {words.map((word) => (
            <Link
              key={word.id || word.slug}
              href={`/tr/sozluk/${word.slug}`}
              className="group rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {getDictionaryCategoryLabel(word.kategori)}
                </span>
                <span className="text-lg text-[color:var(--brand-secondary)]">↗</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {word.kelime}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {trimMeaning(word.anlam)}
              </p>
              {word.etiketler.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {word.etiketler.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 py-1 text-[11px] font-medium text-[color:var(--brand-text-secondary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-10 text-center text-[color:var(--brand-text-secondary)] shadow-[var(--brand-shadow)]">
          Henüz bir şey yok. Aramayı değiştirmeyi dene.
        </div>
      )}

      {words.length < resultCount ? (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={loadMore}
            disabled={isLoadingMore || isPending}
            className="min-h-12 rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
          >
            {isLoadingMore ? "Hazırlanıyor..." : "Daha fazla göster"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
