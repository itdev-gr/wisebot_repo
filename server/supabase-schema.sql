-- ============================================
-- WISEBOT ACADEMY — SUPABASE DATABASE SCHEMA
-- ============================================
-- Run this in Supabase SQL Editor after creating your project.
-- This creates all tables needed for the production app.

-- ─── USERS (extends Supabase auth.users) ─────────
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  child_name text not null default '',
  parent_email text,
  avatar_url text,
  credits integer not null default 10,
  xp integer not null default 0,
  level integer not null default 1,
  streak_current integer not null default 0,
  streak_best integer not null default 0,
  last_daily_bonus timestamp with time zone,
  last_daily_mission timestamp with time zone,
  parent_verified boolean not null default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Users can read/update their own profile
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- ─── BADGES ───────────────────────────────────────
create table public.badges (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  badge_type text not null, -- thinker, creator, filmmaker, builder, market, musician, scientist, explorer
  unlocked_at timestamp with time zone default now(),
  unique (user_id, badge_type)
);

alter table public.badges enable row level security;
create policy "Users can view own badges" on public.badges
  for select using (auth.uid() = user_id);

-- ─── STATS ────────────────────────────────────────
create table public.stats (
  user_id uuid references public.profiles on delete cascade primary key,
  images_created integer not null default 0,
  videos_created integer not null default 0,
  songs_created integer not null default 0,
  quizzes_passed integer not null default 0,
  books_read integer not null default 0,
  stories_read integer not null default 0,
  businesses_created integer not null default 0,
  heroes_uploaded integer not null default 0,
  heroes_completed integer not null default 0,
  updated_at timestamp with time zone default now()
);

alter table public.stats enable row level security;
create policy "Users can view own stats" on public.stats
  for select using (auth.uid() = user_id);
create policy "Users can update own stats" on public.stats
  for update using (auth.uid() = user_id);

-- ─── HEROES ───────────────────────────────────────
create table public.heroes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  name text not null,
  image_url text not null,
  species text,
  gear text,
  contribution text,
  rarity text default 'common',
  for_sale boolean default false,
  price integer default 0,
  created_at timestamp with time zone default now()
);

alter table public.heroes enable row level security;
create policy "Users can view own heroes" on public.heroes
  for select using (auth.uid() = user_id);
create policy "Users can insert own heroes" on public.heroes
  for insert with check (auth.uid() = user_id);
create policy "Users can update own heroes" on public.heroes
  for update using (auth.uid() = user_id);
create policy "Users can delete own heroes" on public.heroes
  for delete using (auth.uid() = user_id);
-- Marketplace: everyone can see heroes for sale
create policy "Anyone can view heroes for sale" on public.heroes
  for select using (for_sale = true);

-- ─── PURCHASES ────────────────────────────────────
create table public.purchases (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  stripe_session_id text unique,
  pack_id text not null,
  credits_amount integer not null,
  amount_eur numeric(10,2) not null,
  status text not null default 'pending', -- pending, completed, refunded
  created_at timestamp with time zone default now()
);

alter table public.purchases enable row level security;
create policy "Users can view own purchases" on public.purchases
  for select using (auth.uid() = user_id);

-- ─── CREDIT TRANSACTIONS ─────────────────────────
create table public.credit_transactions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  amount integer not null, -- positive = earn, negative = spend
  action text not null, -- PASS_QUIZ, CREATE_IMAGE, PURCHASE, etc.
  action_id text, -- optional reference (quiz id, purchase id, etc.)
  created_at timestamp with time zone default now()
);

alter table public.credit_transactions enable row level security;
create policy "Users can view own transactions" on public.credit_transactions
  for select using (auth.uid() = user_id);

-- ─── FUNCTIONS ────────────────────────────────────

-- Atomic credit spending (prevents going negative)
create or replace function spend_credits(p_user_id uuid, p_amount integer, p_action text)
returns boolean as $$
declare
  current_credits integer;
begin
  select credits into current_credits from public.profiles where id = p_user_id for update;
  if current_credits >= p_amount then
    update public.profiles set credits = credits - p_amount, updated_at = now() where id = p_user_id;
    insert into public.credit_transactions (user_id, amount, action) values (p_user_id, -p_amount, p_action);
    return true;
  else
    return false;
  end if;
end;
$$ language plpgsql security definer;

-- Atomic credit earning
create or replace function earn_credits(p_user_id uuid, p_amount integer, p_action text, p_action_id text default null)
returns integer as $$
declare
  new_balance integer;
begin
  update public.profiles set credits = credits + p_amount, updated_at = now() where id = p_user_id
  returning credits into new_balance;
  insert into public.credit_transactions (user_id, amount, action, action_id) values (p_user_id, p_amount, p_action, p_action_id);
  return new_balance;
end;
$$ language plpgsql security definer;

-- Add purchased credits (called from Stripe webhook)
create or replace function add_purchased_credits(p_user_id uuid, p_amount integer, p_stripe_session_id text)
returns void as $$
begin
  -- Check if already processed (idempotency)
  if exists (select 1 from public.purchases where stripe_session_id = p_stripe_session_id and status = 'completed') then
    return;
  end if;
  -- Update purchase status
  update public.purchases set status = 'completed' where stripe_session_id = p_stripe_session_id;
  -- Add credits
  perform earn_credits(p_user_id, p_amount, 'PURCHASE', p_stripe_session_id);
end;
$$ language plpgsql security definer;

-- ─── TRIGGER: Auto-create profile on signup ──────
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, child_name) values (new.id, coalesce(new.raw_user_meta_data->>'child_name', ''));
  insert into public.stats (user_id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
