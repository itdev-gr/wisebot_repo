-- 16 Αυγούστου 2026.
--
-- add_purchased_credits asked "is this purchase already completed?" and then acted,
-- with no lock in between: two concurrent callers could both pass the check and both
-- grant credits. It also granted credits when no purchase row existed at all — the
-- UPDATE simply matched zero rows and execution continued into earn_credits.
--
-- Dead code today (no caller), fixed rather than dropped so it is safe if it is ever
-- wired up. search_path is pinned at the same time, clearing one advisor warning.
--
-- Note: CREATE OR REPLACE preserves existing grants, so the revoke from the previous
-- migration stays in force.

CREATE OR REPLACE FUNCTION public.add_purchased_credits(
  p_user_id uuid,
  p_amount integer,
  p_stripe_session_id text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $function$
declare
  v_id uuid;
  v_status text;
begin
  -- Take the row lock first: this is what makes the check-then-act safe.
  select id, status into v_id, v_status
    from public.purchases
   where stripe_session_id = p_stripe_session_id
   for update;

  -- No purchase on record: never grant credits for an unknown session.
  if v_id is null then
    return;
  end if;

  -- Already credited by a concurrent or earlier call.
  if v_status = 'completed' then
    return;
  end if;

  update public.purchases set status = 'completed' where id = v_id;
  perform public.earn_credits(p_user_id, p_amount, 'PURCHASE', p_stripe_session_id);
end;
$function$;
