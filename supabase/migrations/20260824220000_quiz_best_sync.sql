-- Quiz best runs — server-side progress
-- =====================================
-- Until now a child's best quiz runs (the wb_quiz_best_* localStorage keys that drive
-- School stars, Master badges and diplomas) lived only on the device that played them.
-- This table mirrors them per account so the Parent Dashboard — and later the Maker
-- Levels / Passport / weekly report — can read progress from any device.
--
-- One row per (user, category). category_id is the QuizEngine categoryId, e.g.
-- "school-g3-math-multiplication" or "school-g1-exam".
--
-- Merge policy is the same as QuizEngine.saveQuizBest: a run only replaces the stored
-- one when its score/total ratio is strictly higher. The trigger enforces it in the
-- database, so no client — stale device, replayed request, concurrent upsert — can ever
-- lower a best run.

create table if not exists public.quiz_best (
  user_id     uuid not null references auth.users(id) on delete cascade,
  category_id text not null check (char_length(category_id) between 1 and 120),
  score       int  not null check (score >= 0 and score <= total),
  total       int  not null check (total between 1 and 500),
  achieved_at timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  primary key (user_id, category_id)
);

-- Never-lower guard: an UPDATE that does not strictly improve the ratio is silently
-- dropped (returning null keeps the existing row). Clients can therefore upsert blindly.
create or replace function public.quiz_best_keep_better()
returns trigger
language plpgsql
set search_path = pg_catalog, public
as $$
begin
  if (new.score::numeric / new.total) <= (old.score::numeric / old.total) then
    return null;
  end if;
  new.achieved_at := now();
  new.updated_at  := now();
  return new;
end;
$$;

drop trigger if exists quiz_best_keep_better on public.quiz_best;
create trigger quiz_best_keep_better
  before update on public.quiz_best
  for each row execute function public.quiz_best_keep_better();

-- RLS: the child reads and writes only their own rows. No delete — a best run is
-- permanent, like the localStorage key it mirrors.
alter table public.quiz_best enable row level security;

drop policy if exists "quiz_best_select_own" on public.quiz_best;
create policy "quiz_best_select_own" on public.quiz_best
  for select to authenticated using (user_id = auth.uid());

drop policy if exists "quiz_best_insert_own" on public.quiz_best;
create policy "quiz_best_insert_own" on public.quiz_best
  for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "quiz_best_update_own" on public.quiz_best;
create policy "quiz_best_update_own" on public.quiz_best
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

revoke all on public.quiz_best from anon;
revoke delete, truncate, references, trigger on public.quiz_best from authenticated;
