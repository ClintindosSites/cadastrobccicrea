create table if not exists public.leads (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  email text not null,
  consent boolean not null default false,
  source text not null default 'landing-consultoria-credito',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  gclid text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;