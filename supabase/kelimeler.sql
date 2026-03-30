create extension if not exists "pgcrypto";

create table if not exists public.kelimeler (
  id uuid primary key default gen_random_uuid(),
  kelime text not null,
  anlam text not null,
  ornek_cumle text,
  kategori text not null check (kategori in ('argo', 'deyim', 'genel')),
  etiketler text[] not null default '{}',
  slug text not null unique,
  goruntulenme integer not null default 0,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists kelimeler_slug_idx on public.kelimeler (slug);
create index if not exists kelimeler_kategori_idx on public.kelimeler (kategori);
create index if not exists kelimeler_goruntulenme_idx on public.kelimeler (goruntulenme desc);

alter table public.kelimeler enable row level security;

drop policy if exists "Public can read kelimeler" on public.kelimeler;
create policy "Public can read kelimeler"
on public.kelimeler
for select
to anon, authenticated
using (true);
