-- WiseBot World — the passport, per account
-- ========================================
-- Until now every stamp a child earned in WiseBot World lived only in the
-- `wb_world_progress` localStorage key on the device that earned it. A family with a
-- tablet at home and a phone on the pavement carried two different passports, and
-- signing out wiped the only copy — AuthContext.signOut removes every `wb_*` key.
--
-- One row per (user, place). place_id is the PlaceId written in
-- data/world/cities/<city>.ts, e.g. "rome-colosseo". Those ids are permanent on purpose:
-- renaming one erases the stamp that belongs to it, which is why data/world/world.test.ts
-- pins both the ids and the rule that every place id starts with its city id.
--
-- Merge policy is UNION, per docs/world/specs/02-progress-and-rewards.md and the owner's
-- decision (β) in docs/world/BUSINESS-PLAN.md. A stamp is a fact that happened, so it can
-- only ever be added. Two consequences, both enforced by the trigger below rather than
-- trusted to a client — a stale device, a replayed request and a concurrent writer all
-- have to obey them:
--
--   * visited_at only ever moves EARLIER. A device that syncs late may correct a date
--     backwards to the day the child was actually there; nothing may push it forward.
--   * correct only ever moves false -> true. A child who answered the question right on
--     one device answered it right, and a later wrong attempt elsewhere cannot take that
--     away.
--
-- The spec also says city and country seals are DERIVED from these rows and never stored,
-- so that the two can never disagree. That is why this is the only World table: a city is
-- finished when every one of its places has a row here.
--
-- There is no delete policy and no delete grant. Nothing in this application may erase a
-- child's passport.

create table if not exists public.world_stamps (
  user_id    uuid not null references auth.users(id) on delete cascade,
  place_id   text not null check (char_length(place_id) between 1 and 120),
  visited_at timestamptz not null default now(),
  correct    boolean not null default false,
  primary key (user_id, place_id)
);

-- Union guard. An UPDATE may only widen what the row already says; anything else is
-- silently dropped and the existing row stands, exactly as quiz_best_keep_better does for
-- scores. Clients can therefore upsert blindly without reading first.
create or replace function public.world_stamps_union()
returns trigger
language plpgsql
set search_path = pg_catalog, public
as $$
begin
  -- Earliest visit wins; a later date is not news.
  new.visited_at := least(old.visited_at, new.visited_at);
  -- Correct is a high-water mark, never lowered.
  new.correct := old.correct or new.correct;

  -- Nothing actually widened, so leave the stored row untouched.
  if new.visited_at = old.visited_at and new.correct = old.correct then
    return null;
  end if;

  return new;
end;
$$;

drop trigger if exists world_stamps_union on public.world_stamps;
create trigger world_stamps_union
  before update on public.world_stamps
  for each row execute function public.world_stamps_union();

-- RLS: a child reads and writes only their own stamps. Enabled here as it is on all
-- nineteen existing tables.
alter table public.world_stamps enable row level security;

drop policy if exists "world_stamps_select_own" on public.world_stamps;
create policy "world_stamps_select_own" on public.world_stamps
  for select to authenticated using (user_id = auth.uid());

drop policy if exists "world_stamps_insert_own" on public.world_stamps;
create policy "world_stamps_insert_own" on public.world_stamps
  for insert to authenticated with check (user_id = auth.uid());

-- Update is granted only so the union trigger can run on an upsert conflict. The trigger
-- is what makes it safe: it cannot lower `correct`, cannot move `visited_at` forward, and
-- cannot remove a row.
drop policy if exists "world_stamps_update_own" on public.world_stamps;
create policy "world_stamps_update_own" on public.world_stamps
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

revoke all on public.world_stamps from anon;
revoke delete, truncate, references, trigger on public.world_stamps from authenticated;
