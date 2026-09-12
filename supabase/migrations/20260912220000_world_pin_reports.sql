-- WiseBot World — «Λάθος σημείο»
-- =============================
-- A parent standing in the street is the only person who can tell us a pin is wrong, and
-- until now they had nowhere to say it. docs/world/research/10-explorer-pin-audit.md
-- measured 41 live pins that need an eye and 12 that are more than 150 m out; that audit
-- was done against Wikidata from a desk. This table is the other half: the report from
-- somebody who actually walked there.
--
-- Three reasons, and only three. They are not free text and there is no free-text column,
-- because each one maps onto a field the data model already has and therefore onto a
-- specific repair:
--
--   'entrance'  the place is right, the door is somewhere else  -> `anchor` / a measured
--               entrance, and the `findIt` note. This is the single most common real
--               fault: the Panathenaic Stadium's centre is 127 m from its gate and graded
--               A, because three sources agreed about the centre.
--   'wrong'     it sent us somewhere else entirely              -> the wrong Wikidata
--               q-id in scripts/world/seeds/<city>.json. Re-seed and re-resolve.
--   'gone'      it has closed or moved                          -> `location.note` plus a
--               fresh `verifiedAt`, or the place leaves the city.
--
-- WHAT IS DELIBERATELY NOT HERE: any coordinate, any accuracy, any timestamp of where a
-- child was, and any free text. Brief §28 forbids storing a child's location and §29
-- lists child-location history by name. A report says "this pin is wrong, and in which of
-- three ways" — it never says where the reporter was standing. `reported_at` is the time
-- the report arrived, which is a fact about our table, not about a child's afternoon.
--
-- ANONYMOUS INSERT IS ALLOWED, and that is a deliberate trade. WiseBot World runs for
-- visitors without an account, and a family on a pavement in Rome is exactly the reporter
-- this table exists for; requiring a sign-in would silence them. The exposure is bounded
-- by shape: an inserter controls a place id and one of three enum values, nothing else.
-- There is no text to inject, nothing is rendered back to any child, and the table is
-- advisory — it feeds a human's worklist and changes nothing a family sees. The worst
-- case is junk rows that waste a reviewer's time, which is why place_id is pattern-checked
-- rather than free.

create table if not exists public.world_pin_reports (
  id          bigint generated always as identity primary key,
  -- Null for a visitor without an account. Kept when there is one, so a follow-up is
  -- possible and so a signed-in reporter's history can be weighed more heavily.
  user_id     uuid references auth.users(id) on delete set null,
  -- A PlaceId, e.g. "rome-colosseo". Pattern-checked so the column cannot become a
  -- free-text field by accident.
  place_id    text not null check (place_id ~ '^[a-z0-9]+(-[a-z0-9]+)+$' and char_length(place_id) between 3 and 120),
  reason      text not null check (reason in ('entrance', 'wrong', 'gone')),
  reported_at timestamptz not null default now()
);

-- The worklist query is "what has been reported, worst first".
create index if not exists world_pin_reports_place_idx
  on public.world_pin_reports (place_id, reason);

alter table public.world_pin_reports enable row level security;

-- Anyone may file one; see the trade above.
drop policy if exists "world_pin_reports_insert_anyone" on public.world_pin_reports;
create policy "world_pin_reports_insert_anyone" on public.world_pin_reports
  for insert to anon, authenticated with check (
    -- A signed-in reporter files as themselves; a visitor files anonymously. Nobody files
    -- as somebody else.
    user_id is null or user_id = auth.uid()
  );

-- A signed-in parent may read back only their own reports. Nobody reads anyone else's:
-- the worklist is read by the owner with the service role, not from the app.
drop policy if exists "world_pin_reports_select_own" on public.world_pin_reports;
create policy "world_pin_reports_select_own" on public.world_pin_reports
  for select to authenticated using (user_id = auth.uid());

revoke all on public.world_pin_reports from anon;
grant insert on public.world_pin_reports to anon;
revoke update, delete, truncate, references, trigger on public.world_pin_reports from authenticated;
