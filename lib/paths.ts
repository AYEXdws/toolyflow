import { isLocale, locales, type Locale } from "@/lib/i18n";
import {
  getCalculatorCategoryPath,
  getCalculatorCategoryPathSegment,
  getCalculatorPath,
  resolveCalculatorRoute,
  type CalculatorSlug,
} from "@/lib/tr-calculators";
import {
  categorySlugs,
  isStaticSlug,
  isToolSlug,
  staticSlugs,
  toolSlugs,
  type CategorySlug,
  type StaticSlug,
  type ToolSlug,
} from "@/lib/routes";

export const toolPrefix = "tools";

const categoryPathMap: Record<Locale, Record<CategorySlug, string>> = {
  tr: {
    "creator-tools": "creator-araclari",
    "text-tools": "metin-araclari",
    "quick-tools": "hizli-araclar",
  },
  en: {
    "creator-tools": "creator-tools",
    "text-tools": "text-tools",
    "quick-tools": "quick-tools",
  },
  es: {
    "creator-tools": "herramientas-creador",
    "text-tools": "herramientas-texto",
    "quick-tools": "herramientas-rapidas",
  },
  de: {
    "creator-tools": "creator-tools",
    "text-tools": "text-tools",
    "quick-tools": "schnelle-tools",
  },
  fr: {
    "creator-tools": "outils-createur",
    "text-tools": "outils-texte",
    "quick-tools": "outils-rapides",
  },
  pt: {
    "creator-tools": "ferramentas-creator",
    "text-tools": "ferramentas-texto",
    "quick-tools": "ferramentas-rapidas",
  },
};

const categoryReverseMap: Record<Locale, Record<string, CategorySlug>> = Object.fromEntries(
  locales.map((locale) => [
    locale,
    Object.fromEntries(
      categorySlugs.map((slug) => [categoryPathMap[locale][slug], slug])
    ),
  ])
) as Record<Locale, Record<string, CategorySlug>>;

type RouteDescriptor =
  | { kind: "home" }
  | { kind: "tool"; slug: ToolSlug }
  | { kind: "calculator"; slug: CalculatorSlug }
  | { kind: "calculator-category" }
  | { kind: "category"; slug: CategorySlug }
  | { kind: "static"; slug: StaticSlug };

export function getCategoryPathSegment(locale: Locale, slug: CategorySlug) {
  return categoryPathMap[locale][slug];
}

export function getCategorySlugFromPathSegment(locale: Locale, segment: string) {
  return categoryReverseMap[locale][segment] ?? null;
}

export function getHomePath(locale: Locale) {
  return `/${locale}`;
}

export function getToolPath(locale: Locale, slug: ToolSlug) {
  return `/${locale}/${toolPrefix}/${slug}`;
}

export function getCategoryPath(locale: Locale, slug: CategorySlug) {
  return `/${locale}/${getCategoryPathSegment(locale, slug)}`;
}

export function getStaticPath(locale: Locale, slug: StaticSlug) {
  return `/${locale}/${slug}`;
}

export function getPathForRoute(locale: Locale, route: RouteDescriptor) {
  switch (route.kind) {
    case "home":
      return getHomePath(locale);
    case "tool":
      return getToolPath(locale, route.slug);
    case "calculator":
      return getCalculatorPath(locale, route.slug);
    case "calculator-category":
      return getCalculatorCategoryPath(locale);
    case "category":
      return getCategoryPath(locale, route.slug);
    case "static":
      return getStaticPath(locale, route.slug);
  }
}

export function getAllLocalizedPaths(route: RouteDescriptor) {
  return Object.fromEntries(locales.map((locale) => [locale, getPathForRoute(locale, route)]));
}

export function getXDefaultPath(route: RouteDescriptor) {
  return getPathForRoute("tr", route);
}

export function getCategoryStaticParams() {
  return locales.flatMap((locale) =>
    categorySlugs.map((slug) => ({
      locale,
      slug: [getCategoryPathSegment(locale, slug)],
    }))
  );
}

export function getToolStaticParams() {
  return locales.flatMap((locale) =>
    toolSlugs.map((slug) => ({
      locale,
      slug: [toolPrefix, slug],
    }))
  );
}

export function getStaticPageParams() {
  return locales.flatMap((locale) =>
    staticSlugs.map((slug) => ({
      locale,
      slug: [slug],
    }))
  );
}

export function resolveLocalizedRoute(
  locale: Locale,
  segments?: string[]
):
  | (RouteDescriptor & { redirectTo?: string })
  | null {
  const pathSegments = segments?.filter(Boolean) ?? [];

  if (pathSegments.length === 0) {
    return { kind: "home" };
  }

  if (pathSegments.length === 1) {
    const [segment] = pathSegments;

    if (isStaticSlug(segment)) {
      return { kind: "static", slug: segment };
    }

    const localizedCategory = getCategorySlugFromPathSegment(locale, segment);
    if (localizedCategory) {
      return { kind: "category", slug: localizedCategory };
    }

    if (segment === getCalculatorCategoryPathSegment(locale)) {
      return { kind: "calculator-category" };
    }

    if (categorySlugs.includes(segment as CategorySlug)) {
      return {
        kind: "category",
        slug: segment as CategorySlug,
        redirectTo: getCategoryPath(locale, segment as CategorySlug),
      };
    }

    if (isToolSlug(segment)) {
      return {
        kind: "tool",
        slug: segment,
        redirectTo: getToolPath(locale, segment),
      };
    }
  }

  const calculatorRoute = resolveCalculatorRoute(locale, pathSegments);
  if (calculatorRoute) {
    if (calculatorRoute.kind === "calculator-category") {
      return calculatorRoute;
    }
    return { kind: "calculator", slug: calculatorRoute.slug };
  }

  if (pathSegments.length === 2 && pathSegments[0] === toolPrefix && isToolSlug(pathSegments[1])) {
    return { kind: "tool", slug: pathSegments[1] };
  }

  return null;
}

export function translatePathname(pathname: string, targetLocale: Locale) {
  const [pathOnly, hash = ""] = pathname.split("#");
  const segments = pathOnly.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `${getHomePath(targetLocale)}${hash ? `#${hash}` : ""}`;
  }

  const maybeLocale = segments[0];

  if (!isLocale(maybeLocale)) {
    return `/${targetLocale}/${segments.join("/")}${hash ? `#${hash}` : ""}`;
  }

  const resolved = resolveLocalizedRoute(maybeLocale, segments.slice(1));

  if (!resolved) {
    return `/${targetLocale}${segments.slice(1).length ? `/${segments.slice(1).join("/")}` : ""}${hash ? `#${hash}` : ""}`;
  }

  return `${getPathForRoute(targetLocale, resolved)}${hash ? `#${hash}` : ""}`;
}
