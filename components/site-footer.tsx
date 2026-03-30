import Link from "next/link";
import Image from "next/image";

import { type Locale } from "@/lib/i18n";
import { getCategoryPath, getStaticPath } from "@/lib/paths";

type SiteFooterProps = {
  locale: Locale;
  labels: {
    slogan: string;
    madeIn: string;
    categoriesHeading: string;
    companyHeading: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  categories: Array<{ slug: string; name: string }>;
};

export function SiteFooter({
  locale,
  labels,
  categories,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-bg)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
              <Image
                src="/images/toolyflow-mark.png"
                alt="Toolyflow logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <p className="text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--brand-text-primary)]">
              Tooly<span className="text-[color:var(--brand-secondary)]">flow</span>
            </p>
          </div>
          <p className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.slogan}</p>
          <p className="text-sm text-[color:var(--brand-text-secondary)]">{labels.madeIn}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-tertiary)]">
            {labels.categoriesHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            {locale === "tr" ? (
              <li>
                <Link
                  href="/tr/sozluk"
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
                >
                  Türkçe Sözlük
                </Link>
              </li>
            ) : null}
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={getCategoryPath(locale, category.slug as Parameters<typeof getCategoryPath>[1])}
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-tertiary)]">
            {labels.companyHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            <li>
              <Link
                href={getStaticPath(locale, "about")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.about}
              </Link>
            </li>
            <li>
              <Link
                href={getStaticPath(locale, "contact")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.contact}
              </Link>
            </li>
            <li>
              <Link
                href={getStaticPath(locale, "privacy-policy")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={getStaticPath(locale, "terms-of-service")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--brand-border)] px-4 py-5 text-center text-sm text-[color:var(--brand-text-secondary)] sm:px-6 lg:px-8">
        {labels.copyright}
      </div>
    </footer>
  );
}
