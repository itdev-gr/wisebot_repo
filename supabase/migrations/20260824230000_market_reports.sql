-- Market listing reports — the child's report button
-- ===================================================
-- The Hero Market already pre-moderates (a human approves every listing before other
-- children see it). This adds the post-approval safety net: any signed-in child can
-- report a live listing; at 3 unresolved reports the listing is automatically pulled
-- back to 'pending' (invisible to children) until an admin re-reviews it.
--
-- One report per child per listing (unique). Children can only INSERT their own
-- report — they can never read reports (who reported whom stays invisible; only the
-- admin endpoint reads them, with the service role).

create table if not exists public.market_reports (
  id          uuid primary key default gen_random_uuid(),
  listing_id  uuid not null references public.market_listings(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason      text not null check (reason in ('upsetting', 'mean', 'other')),
  created_at  timestamptz not null default now(),
  -- Set by the admin endpoint when a decision is made on the listing; resolved
  -- reports stop counting toward auto-unpublish and leave the admin queue.
  resolved_at timestamptz,
  unique (listing_id, reporter_id)
);

create index if not exists market_reports_listing_open_idx
  on public.market_reports (listing_id) where resolved_at is null;

-- Auto-unpublish: 3 open reports pull an approved listing back to review. SECURITY
-- DEFINER because the reporting child has no RLS right to update the listing itself.
create or replace function public.market_reports_auto_unpublish()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if (select count(*) from public.market_reports
      where listing_id = new.listing_id and resolved_at is null) >= 3 then
    update public.market_listings
      set status = 'pending', reviewed_at = null
      where id = new.listing_id and status = 'approved';
  end if;
  return new;
end;
$$;
revoke all on function public.market_reports_auto_unpublish() from anon, authenticated;

drop trigger if exists market_reports_auto_unpublish on public.market_reports;
create trigger market_reports_auto_unpublish
  after insert on public.market_reports
  for each row execute function public.market_reports_auto_unpublish();

alter table public.market_reports enable row level security;

-- Children: insert-only, own rows, and only against listings that are actually
-- visible to them (approved) — you cannot report what you cannot see.
drop policy if exists "market_reports_insert_own" on public.market_reports;
create policy "market_reports_insert_own" on public.market_reports
  for insert to authenticated
  with check (
    reporter_id = auth.uid()
    and exists (select 1 from public.market_listings l
                where l.id = listing_id and l.status = 'approved')
  );
-- Intentionally no SELECT/UPDATE/DELETE policies — reads happen only through the
-- admin endpoint (service role).

revoke all on public.market_reports from anon;
revoke select, update, delete, truncate, references, trigger on public.market_reports from authenticated;
