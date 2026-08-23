-- One refund per task.
-- api/_lib/auth.ts refundCredits() calls earn_credits(user, amount, 'REFUND_*', task_id)
-- from status-polling endpoints that run every few seconds. This index makes the
-- second insert for the same (user, action, task) fail, which aborts earn_credits
-- before the balance update commits — so a task can never be refunded twice.
-- Existing rows with action_id (Stripe purchases) are already unique per session.
create unique index if not exists credit_transactions_user_action_action_id_key
  on public.credit_transactions (user_id, action, action_id)
  where action_id is not null;
