-- A parent's «Λάθος σημείο» report is a queue item for the admin, not a permanent flag.
-- `resolved_at` lets the admin close one from the dashboard; open reports are those
-- where it is still null. Service-role only — no client policy touches this column.

alter table public.world_pin_reports
  add column if not exists resolved_at timestamptz;

create index if not exists world_pin_reports_open_idx
  on public.world_pin_reports (reported_at desc)
  where resolved_at is null;
