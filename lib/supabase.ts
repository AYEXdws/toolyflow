import { createClient } from "@supabase/supabase-js";

const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const envKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl =
  envUrl && envUrl.startsWith("http") ? envUrl : "https://placeholder.supabase.co";
const supabaseAnonKey =
  envKey && envKey !== "senin_key_in" ? envKey : "placeholder-anon-key";

const retiredProjectRefs = new Set(["cxhftokvkbgaulgnewto"]);

function getProjectRef(url: string | undefined) {
  if (!url) return "";

  try {
    return new URL(url).hostname.split(".")[0] ?? "";
  } catch {
    return "";
  }
}

async function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
  global: {
    fetch: fetchWithTimeout,
  },
});

export const isSupabaseConfigured = Boolean(
  envUrl &&
    envKey &&
    envUrl !== "senin_url_in" &&
    envKey !== "senin_key_in" &&
    envUrl.startsWith("http") &&
    !retiredProjectRefs.has(getProjectRef(envUrl))
);
