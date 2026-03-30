import type { Locale } from "@/lib/i18n";

const localeMap: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  pt: "pt-PT",
};

const currencyMap: Record<Locale, string> = {
  tr: "TRY",
  en: "USD",
  es: "EUR",
  de: "EUR",
  fr: "EUR",
  pt: "EUR",
};

export function formatLocalizedNumber(
  locale: Locale,
  value: number,
  options?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat(localeMap[locale], {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    ...options,
  }).format(value);
}

export function formatLocalizedCurrency(
  locale: Locale,
  value: number,
  currency = currencyMap[locale]
) {
  return new Intl.NumberFormat(localeMap[locale], {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatTrNumber(value: number, options?: Intl.NumberFormatOptions) {
  return formatLocalizedNumber("tr", value, options);
}

export function formatTrCurrency(value: number) {
  return formatLocalizedCurrency("tr", value, "TRY");
}
