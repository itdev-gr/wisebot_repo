-- The real Hero Market: children sell what they made (songs, hero images) for
-- credits, with admin approval before anything is visible; plus 3D-print orders.
-- Prices are fixed server-side (song 10, image 3); the seller receives 80%,
-- the remaining 20% leaves the economy on purpose.

create table if not exists public.market_listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.profiles(id) on delete cascade,
  seller_name text not null,
  type text not null check (type in ('song', 'image')),
  title text not null,
  image_url text,          -- hero image, or song cover
  audio_url text,          -- songs
  stream_url text,
  lyrics text,
  price int not null check (price > 0),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'removed')),
  sales_count int not null default 0,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
create index if not exists market_listings_status_idx on public.market_listings (status, created_at desc);
create index if not exists market_listings_seller_idx on public.market_listings (seller_id);

create table if not exists public.market_purchases (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.market_listings(id) on delete cascade,
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  price int not null,
  seller_earn int not null,
  created_at timestamptz not null default now(),
  unique (listing_id, buyer_id)   -- you own a copy; buying it twice is a mistake
);
create index if not exists market_purchases_buyer_idx on public.market_purchases (buyer_id);

create table if not exists public.print_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  hero_name text not null,
  image_url text not null,
  credits int not null,
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'shipped', 'cancelled', 'refunded')),
  created_at timestamptz not null default now()
);
create index if not exists print_orders_user_idx on public.print_orders (user_id);

alter table public.market_listings enable row level security;
alter table public.market_purchases enable row level security;
alter table public.print_orders enable row level security;

-- Everyone signed in can browse what was approved; sellers see their own always.
create policy "read approved or own listings" on public.market_listings
  for select using (status = 'approved' or seller_id = auth.uid());
create policy "read own purchases" on public.market_purchases
  for select using (buyer_id = auth.uid());
create policy "read own print orders" on public.print_orders
  for select using (user_id = auth.uid());
-- All writes go through the server (service_role bypasses RLS; no insert/update policies).

-- Atomic purchase: charge the buyer, pay the seller 80%, record both sides.
-- Raises on double-buy (unique) and on insufficient balance.
create or replace function public.market_purchase(p_buyer uuid, p_listing uuid)
returns integer language plpgsql security definer set search_path = public as $$
declare
  l record;
  buyer_credits integer;
  v_earn integer;
  new_balance integer;
begin
  select * into l from public.market_listings where id = p_listing and status = 'approved' for update;
  if not found then raise exception 'listing_unavailable'; end if;
  if l.seller_id = p_buyer then raise exception 'own_listing'; end if;

  select credits into buyer_credits from public.profiles where id = p_buyer for update;
  if buyer_credits is null or buyer_credits < l.price then raise exception 'insufficient_credits'; end if;

  v_earn := floor(l.price * 0.8);

  update public.profiles set credits = credits - l.price, updated_at = now() where id = p_buyer
    returning credits into new_balance;
  insert into public.credit_transactions (user_id, amount, action, action_id)
    values (p_buyer, -l.price, 'MARKET_BUY', l.id::text);

  update public.profiles set credits = credits + v_earn, updated_at = now() where id = l.seller_id;
  insert into public.credit_transactions (user_id, amount, action, action_id)
    values (l.seller_id, v_earn, 'MARKET_SALE', l.id::text || ':' || p_buyer::text);

  insert into public.market_purchases (listing_id, buyer_id, price, seller_earn)
    values (p_listing, p_buyer, l.price, v_earn);
  update public.market_listings set sales_count = sales_count + 1 where id = p_listing;

  return new_balance;
end;
$$;
revoke execute on function public.market_purchase(uuid, uuid) from public, anon, authenticated;

-- Public bucket for listing images (hero pictures / song covers).
insert into storage.buckets (id, name, public) values ('market', 'market', true)
on conflict (id) do nothing;
