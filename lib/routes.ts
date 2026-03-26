import { categorySlugs, type CategorySlug } from "@/lib/tool-categories";

export const toolSlugs = [
  "bio-generator",
  "nickname-generator",
  "qr-generator",
  "case-converter",
  "decision-wheel",
] as const;

export type ToolSlug = (typeof toolSlugs)[number];

export const staticSlugs = [
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
] as const;

export type StaticSlug = (typeof staticSlugs)[number];

export { categorySlugs };
export type { CategorySlug };

export type LocalizedSlug = ToolSlug | StaticSlug | CategorySlug;

export function isToolSlug(value: string): value is ToolSlug {
  return toolSlugs.includes(value as ToolSlug);
}

export function isStaticSlug(value: string): value is StaticSlug {
  return staticSlugs.includes(value as StaticSlug);
}

export function isCategorySlug(value: string): value is CategorySlug {
  return categorySlugs.includes(value as CategorySlug);
}
