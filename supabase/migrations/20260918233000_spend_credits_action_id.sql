-- Spend rows carry the provider task id, so refunds can verify ownership.
-- ========================================================================
-- The three status-polling endpoints refund a failed task's cost to whoever
-- polls it (api/_lib/auth.ts refundCredits). Their only guard was the unique
-- index on (user_id, action, action_id) — per-USER idempotency — so the same
-- failed taskId could be "refunded" once from every account: a credit mint.
--
-- The fix needs the charge to remember which task it paid for. The generate
-- endpoints already know the provider taskId when they charge (the charge
-- happens after the provider accepts the job), so spend_credits gains an
-- optional p_action_id, written to credit_transactions.action_id. The partial
-- unique index on (user_id, action, action_id) now also covers spends, which
-- doubles as a double-charge guard per task.
--
-- The 3-arg version is dropped in the same transaction: keeping both would
-- make PostgREST named-parameter calls ambiguous. Already-deployed code that
-- calls spend_credits(p_user_id, p_amount, p_action) still resolves to this
-- function through the default, so the migration is safe to apply first.

drop function if exists public.spend_credits(uuid, integer, text);

create function public.spend_credits(p_user_id uuid, p_amount integer, p_action text, p_action_id text default null)
returns boolean
language plpgsql
security definer
set search_path to 'public'
as $$
declare
  current_credits integer;
begin
  select credits into current_credits from public.profiles where id = p_user_id for update;
  if current_credits >= p_amount then
    update public.profiles set credits = credits - p_amount, updated_at = now() where id = p_user_id;
    insert into public.credit_transactions (user_id, amount, action, action_id) values (p_user_id, -p_amount, p_action, p_action_id);
    return true;
  else
    return false;
  end if;
end;
$$;

-- Same exposure as before (20260816194200): service_role only.
revoke execute on function public.spend_credits(uuid, integer, text, text) from public, anon, authenticated;
grant execute on function public.spend_credits(uuid, integer, text, text) to service_role;
