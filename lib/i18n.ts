export const locales = ["tr", "en", "es", "de", "fr", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, slug?: string) {
  if (!slug) {
    return `/${locale}`;
  }

  return `/${locale}/${slug}`;
}

export function replaceLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return `/${locale}/${segments.join("/")}`;
}
