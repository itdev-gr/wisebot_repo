-- Children could set their own balance.
-- ===================================
-- The profiles UPDATE policy ("Users can update own profile", USING auth.uid() = id)
-- is row-scoped only, and anon/authenticated held column-level UPDATE on every
-- column — so `supabase.from('profiles').update({ credits: 999999 })` from the
-- browser console succeeded. Same for the referral flags and the verification
-- flags the photo-upload gate trusts.
--
-- Server code (service_role) keeps full access. The client may still update
-- child_name, avatar_url, xp, level, streaks, onboarding_complete, etc.
revoke update (credits, referral_code, referred_by, referral_rewarded, referral_count,
               parent_verified, phone_verified, phone_number)
  on public.profiles from anon, authenticated;
-- (has_password stays client-writable: it is a UI hint set right after
--  supabase.auth.updateUser() succeeds.)

-- The email-confirmation trigger that sets parent_verified was defined as a
-- function but never attached (the client did it as a "backup", which the grant
-- above now blocks). Attach it.
drop trigger if exists on_auth_user_email_confirmed on auth.users;
create trigger on_auth_user_email_confirmed
  after update of email_confirmed_at on auth.users
  for each row execute function public.sync_parent_verified();

-- Referral bookkeeping for the Stripe webhook (service_role only).
create or replace function public.increment_referral_count(p_user_id uuid)
returns void language sql security definer set search_path = public as $$
  update public.profiles set referral_count = coalesce(referral_count, 0) + 1 where id = p_user_id;
$$;
revoke execute on function public.increment_referral_count(uuid) from public, anon, authenticated;

-- Pin search_path on the money RPCs (SECURITY DEFINER without it is a known foot-gun).
alter function public.spend_credits(uuid, integer, text) set search_path = public;
alter function public.earn_credits(uuid, integer, text, text) set search_path = public;
