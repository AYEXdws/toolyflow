function normalizeUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

const primarySiteUrl = "https://toolyflow.com";

function resolveSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL;

  if (envUrl) {
    return normalizeUrl(envUrl);
  }

  if (
    process.env.VERCEL_ENV === "preview" &&
    process.env.VERCEL_URL
  ) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }

  return primarySiteUrl;
}

export const siteConfig = {
  name: "Toolyflow",
  description: "One platform, every tool.",
  url: resolveSiteUrl(),
  email: "hello@toolyflow.com",
  ogImagePath: "/images/toolyflow-logo.png",
};
