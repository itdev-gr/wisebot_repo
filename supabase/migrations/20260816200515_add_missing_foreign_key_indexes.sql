-- 16 Αυγούστου 2026.
--
-- Postgres creates an index for a primary key but not for a foreign key. Every column
-- below is what a per-user query filters on — a child opening their heroes, their
-- videos, their songs, their purchase or credit history — so each of those lookups was
-- a sequential scan over the whole table. Flagged by the Supabase performance advisor.

CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_id ON public.credit_transactions (user_id);
CREATE INDEX IF NOT EXISTS idx_gift_items_from_user_id     ON public.gift_items (from_user_id);
CREATE INDEX IF NOT EXISTS idx_gift_items_to_user_id       ON public.gift_items (to_user_id);
CREATE INDEX IF NOT EXISTS idx_heroes_user_id              ON public.heroes (user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_referred_by        ON public.profiles (referred_by);
CREATE INDEX IF NOT EXISTS idx_purchases_user_id           ON public.purchases (user_id);
CREATE INDEX IF NOT EXISTS idx_user_songs_user_id          ON public.user_songs (user_id);
CREATE INDEX IF NOT EXISTS idx_user_videos_user_id         ON public.user_videos (user_id);
