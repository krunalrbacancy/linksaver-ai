create extension if not exists "pgcrypto";

create table if not exists public.links (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  url text not null,
  created_at timestamptz not null default timezone('utc'::text, now())
);

alter table public.links enable row level security;

create policy "Users can view their own links"
on public.links
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own links"
on public.links
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can delete their own links"
on public.links
for delete
to authenticated
using (auth.uid() = user_id);
