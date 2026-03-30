export function formatTrNumber(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    ...options,
  }).format(value);
}

export function formatTrCurrency(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(value);
}
