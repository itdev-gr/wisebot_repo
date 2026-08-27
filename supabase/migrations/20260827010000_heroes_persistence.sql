-- Heroes a child creates only ever lived in localStorage: clearing the browser
-- or switching device lost every one of them, and because nothing wrote to
-- public.heroes the parent weekly report always reported zero creations.
-- Applied 27 Αυγούστου 2026 alongside api/heroes/{save,list}.ts.

insert into storage.buckets (id, name, public)
values ('heroes', 'heroes', true)
on conflict (id) do nothing;

-- Writes go through the service key in api/heroes/save.ts, so no client-side
-- insert policy is needed. Public read matches the other creation buckets.
drop policy if exists "heroes_public_read" on storage.objects;
create policy "heroes_public_read" on storage.objects
  for select using (bucket_id = 'heroes');

-- A child sees and manages only their own heroes.
alter table public.heroes enable row level security;

drop policy if exists "heroes_select_own" on public.heroes;
create policy "heroes_select_own" on public.heroes
  for select using (user_id = auth.uid());

drop policy if exists "heroes_delete_own" on public.heroes;
create policy "heroes_delete_own" on public.heroes
  for delete using (user_id = auth.uid());

create index if not exists heroes_user_created_idx
  on public.heroes (user_id, created_at desc);
