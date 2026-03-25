function normalizeUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function resolveSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  return normalizeUrl(envUrl || "https://toolyflow.com");
}

export const siteConfig = {
  name: "Toolyflow",
  description: "Fast, simple, free online tools.",
  url: resolveSiteUrl(),
  email: "hello@toolyflow.com",
  ogImagePath: "/opengraph-image",
};
