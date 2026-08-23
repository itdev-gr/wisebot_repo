-- Parent Dashboard PIN
-- ====================
-- Until now /parent re-asked the account password. That fails for Google sign-ins (no
-- password) and protects nothing when the child logs in with the same password. The parent
-- now sets a separate 4–6 digit PIN the first time.
--
-- The hash lives in its own table with RLS enabled and NO policies: the browser (anon /
-- authenticated roles) cannot read it even for its own row, so a child with the account's
-- session cannot pull the hash and brute-force a 4-digit PIN offline. Only the service role —
-- api/auth/parent-pin.ts — reads and writes it.

create table if not exists public.parent_pins (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  pin_hash    text not null,           -- scrypt$<salt>$<hash>
  set_at      timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  failed_attempts int not null default 0,
  locked_until timestamptz
);

alter table public.parent_pins enable row level security;
-- Intentionally no policies.

revoke all on public.parent_pins from anon, authenticated;
