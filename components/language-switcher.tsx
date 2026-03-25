"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, replaceLocaleInPath, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {locales.map((locale) => {
          const isActive = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={replaceLocaleInPath(pathname, locale)}
              className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                isActive
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "border border-black/10 text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-foreground)]"
              }`}
              hrefLang={locale}
            >
              {localeLabels[locale]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
