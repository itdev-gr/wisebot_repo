/**
 * POST /api/auth/gift — Send credits as a gift to another user
 * ==============================================================
 * Authenticated endpoint. Sender gifts credits to a recipient by username.
 *
 * Flow:
 * 1. Verify sender via JWT (inline CORS + JWT, same pattern as delete-account.ts)
 * 2. Find recipient by username (case-insensitive)
 * 3. Validate: recipient exists, sender !== recipient, sender has enough credits
 * 4. Deduct from sender, add to recipient
 * 5. Log transactions for both users in credit_transactions
 * 6. Return success with new balance
 */

const PRESET_MESSAGES = [
  { id: 'birthday', text: { el: '🎂 Χρόνια Πολλά!', en: '🎂 Happy Birthday!' } },
  { id: 'bravo', text: { el: '⭐ Μπράβο!', en: '⭐ Great job!' } },
  { id: 'gift', text: { el: '🎁 Δώρο!', en: '🎁 A gift for you!' } },
];

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Required auth — verify JWT
  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  let senderId: string;
  let senderEmail: string;

  try {
    const token = authHeader.slice(7);
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: { user: u }, error } = await supabase.auth.getUser(token);
    if (error || !u) return res.status(401).json({ error: 'Invalid token' });
    senderId = u.id;
    senderEmail = u.email || '';
  } catch {
    return res.status(401).json({ error: 'Auth failed' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const body = req.body || {};
    const toUsername = typeof body.toUsername === 'string' ? body.toUsername.trim() : '';
    const amount = typeof body.amount === 'number' ? body.amount : 0;
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 100) : '';

    // Validate inputs
    if (!toUsername) {
      return res.status(400).json({ error: 'toUsername is required' });
    }
    if (!amount || amount < 1 || amount > 1000 || !Number.isInteger(amount)) {
      return res.status(400).json({ error: 'Amount must be a whole number between 1 and 1000' });
    }

    // Find recipient by username (case-insensitive)
    const { data: recipients, error: findError } = await supabaseAdmin
      .from('profiles')
      .select('id, child_name')
      .ilike('child_name', toUsername)
      .limit(1);

    if (findError || !recipients || recipients.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const recipient = recipients[0];

    // Can't gift to yourself
    if (recipient.id === senderId) {
      return res.status(400).json({ error: "You can't send a gift to yourself" });
    }

    // Resolve sender name for the transaction log
    const { data: senderProfile } = await supabaseAdmin
      .from('profiles')
      .select('child_name')
      .eq('id', senderId)
      .single();
    const senderName = senderProfile?.child_name || 'A friend';

    const giftMessage = message || PRESET_MESSAGES[2].text.el; // default gift message

    // Atomic transfer — locks both profile rows, checks balance, moves credits,
    // and logs both transactions in a single DB transaction (no double-spend).
    const { data: rpcResult, error: rpcError } = await supabaseAdmin.rpc('transfer_credits', {
      p_from_user: senderId,
      p_to_user: recipient.id,
      p_amount: amount,
      p_from_reason: `Gift to ${recipient.child_name}: ${giftMessage}`,
      p_to_reason: `Gift from ${senderName}: ${giftMessage}`,
    });

    if (rpcError) {
      console.error('[Gift] transfer_credits RPC error:', rpcError.message);
      return res.status(500).json({ error: 'Failed to process gift' });
    }

    const newBalance = typeof rpcResult === 'number' ? rpcResult : -1;
    if (newBalance === -3) {
      return res.status(400).json({ error: 'Not enough credits' });
    }
    if (newBalance < 0) {
      return res.status(400).json({ error: 'Gift could not be processed' });
    }

    console.log(`[Gift] ${senderName} -> ${recipient.child_name}: ${amount} credits`);

    return res.status(200).json({
      success: true,
      recipientName: recipient.child_name,
      amount,
      message: giftMessage,
      newBalance,
    });
  } catch (err: any) {
    console.error('[Gift] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
