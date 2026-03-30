import { createClient } from "@supabase/supabase-js";

const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const envKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl =
  envUrl && envUrl.startsWith("http") ? envUrl : "https://placeholder.supabase.co";
const supabaseAnonKey =
  envKey && envKey !== "senin_key_in" ? envKey : "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

export const isSupabaseConfigured = Boolean(
  envUrl &&
    envKey &&
    envUrl !== "senin_url_in" &&
    envKey !== "senin_key_in" &&
    envUrl.startsWith("http")
);
