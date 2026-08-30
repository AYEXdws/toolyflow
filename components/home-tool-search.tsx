"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";

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
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLocaleLowerCase();

  const results = normalizedQuery
    ? items
      .filter((item) => {
        const haystack = `${item.label} ${item.description} ${item.kind} ${
          item.terms?.join(" ") ?? ""
        }`.toLocaleLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 7)
    : items.slice(0, 7);

  return (
    <div className="min-h-0 flex-1 rounded-[24px] bg-[color:var(--brand-surface)] p-3 sm:p-4">
      <label className="relative block">
        <span className="sr-only">{placeholder}</span>
        <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[color:var(--brand-text-tertiary)]">⌕</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="min-h-14 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] py-3 pl-11 pr-4 text-sm font-semibold text-[color:var(--brand-text-primary)] outline-none transition placeholder:font-medium placeholder:text-[color:var(--brand-text-tertiary)] focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
        />
      </label>

      <div className="mt-3 grid max-h-[390px] gap-1.5 overflow-y-auto pr-1">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={`${item.kind}-${item.href}`}
              href={item.href}
              className="group rounded-[16px] border border-transparent bg-transparent px-3 py-3 transition hover:border-[color:var(--brand-border)] hover:bg-[color:var(--brand-card)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold tracking-[-0.02em] text-[color:var(--brand-text-primary)]">{item.label}</p>
                  <p className="mt-1 line-clamp-1 text-xs leading-5 text-[color:var(--brand-text-secondary)]">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 text-base font-bold text-[color:var(--brand-secondary)] transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-[16px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-8 text-center text-sm text-[color:var(--brand-text-secondary)]">
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
}
