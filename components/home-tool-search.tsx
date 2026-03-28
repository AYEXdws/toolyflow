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
    <div className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
      />

      <div className="mt-4 grid gap-3">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={`${item.kind}-${item.href}`}
              href={item.href}
              className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 transition hover:border-[color:var(--brand-border-hover)] hover:bg-white/3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-[color:var(--brand-text-primary)]">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--brand-text-secondary)]">
                    {item.description}
                  </p>
                </div>
                <span className="rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {item.kind}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[color:var(--brand-border)] px-4 py-6 text-sm text-[color:var(--brand-text-secondary)]">
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
}
