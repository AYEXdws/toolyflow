import Link from "next/link";

import { localizePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type SiteFooterProps = {
  locale: Locale;
  labels: {
    description: string;
    categoriesHeading: string;
    toolsHeading: string;
    companyHeading: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  categories: Array<{ slug: string; name: string }>;
  tools: Array<{ slug: string; name: string }>;
};

export function SiteFooter({
  locale,
  labels,
  categories,
  tools,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-black/8 bg-[color:var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 xl:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
            Toolyflow
          </p>
          <p className="max-w-md text-sm leading-7 text-[color:var(--color-muted)]">
            {labels.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            {labels.categoriesHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--color-muted)]">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={localizePath(locale, category.slug)}
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            {labels.toolsHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--color-muted)]">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={localizePath(locale, tool.slug)}
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            {labels.companyHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--color-muted)]">
            <li>
              <Link
                href={localizePath(locale, "about")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
              >
                {labels.about}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "contact")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
              >
                {labels.contact}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "privacy-policy")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
              >
                {labels.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "terms-of-service")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--color-foreground)]"
              >
                {labels.terms}
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm text-[color:var(--color-muted)]">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
