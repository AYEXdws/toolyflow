"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchItem = {
  label: string;
  description: string;
  href: string;
  kind: string;
  terms?: string[];
};

type HomeToolSearchProps = {
  items: SearchItem[];
  placeholder: string;
  emptyLabel: string;
};

export function HomeToolSearch({
  items,
  placeholder,
  emptyLabel,
}: HomeToolSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items.slice(0, 7);
    }

    return items
      .filter((item) => {
        const haystack = `${item.label} ${item.description} ${item.kind} ${
          item.terms?.join(" ") ?? ""
        }`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [items, query]);

  return (
    <div className="rounded-[28px] border border-black/8 bg-white/90 p-4 shadow-[0_20px_60px_rgba(23,28,24,0.07)] backdrop-blur">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[20px] border border-black/10 bg-[color:var(--color-surface)] px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none transition focus:border-[color:var(--color-accent)]"
      />

      <div className="mt-4 grid gap-3">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={`${item.kind}-${item.href}`}
              href={item.href}
              className="rounded-[20px] border border-black/8 bg-white px-4 py-4 transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-[color:var(--color-foreground)]">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
                <span className="rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  {item.kind}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-[20px] border border-dashed border-black/10 px-4 py-6 text-sm text-[color:var(--color-muted)]">
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
}
