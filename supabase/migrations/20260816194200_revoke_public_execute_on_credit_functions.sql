-- P0 security fix, 16 Αυγούστου 2026.
--
-- spend_credits, earn_credits, transfer_credits and add_purchased_credits are
-- SECURITY DEFINER, so they bypass RLS, and they take the target user_id as a
-- parameter — the caller is never checked against it. EXECUTE was granted to anon
-- and authenticated, which meant anyone holding the publishable anon key (it ships
-- inside the browser bundle, and this repository is public) could call them over
-- /rest/v1/rpc/... to mint unlimited credits, drain another child's balance, or move
-- credits between accounts.
--
-- Every legitimate caller is a server-side endpoint under api/ using
-- SUPABASE_SERVICE_KEY, so service_role keeps access and the application is unaffected:
--   spend_credits     -> api/_lib/auth.ts
--   earn_credits      -> api/auth/earn.ts, api/stripe/webhook.ts
--   transfer_credits  -> api/auth/gift.ts
--   add_purchased_credits -> no caller (dead code, but was publicly reachable)
--
-- claim_referral already had no public grant; this brings the rest in line with it.

REVOKE EXECUTE ON FUNCTION public.spend_credits(uuid, integer, text) FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.spend_credits(uuid, integer, text) TO service_role;

REVOKE EXECUTE ON FUNCTION public.earn_credits(uuid, integer, text, text) FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.earn_credits(uuid, integer, text, text) TO service_role;

REVOKE EXECUTE ON FUNCTION public.transfer_credits(uuid, uuid, integer, text, text) FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.transfer_credits(uuid, uuid, integer, text, text) TO service_role;

REVOKE EXECUTE ON FUNCTION public.add_purchased_credits(uuid, integer, text) FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.add_purchased_credits(uuid, integer, text) TO service_role;

REVOKE EXECUTE ON FUNCTION public.cleanup_expired_otp() FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.cleanup_expired_otp() TO service_role;
