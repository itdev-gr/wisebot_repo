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
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
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
      .select('id, credits, child_name')
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

    // Check sender has enough credits
    const { data: senderProfile, error: senderError } = await supabaseAdmin
      .from('profiles')
      .select('credits, child_name')
      .eq('id', senderId)
      .single();

    if (senderError || !senderProfile) {
      return res.status(404).json({ error: 'Sender profile not found' });
    }

    if ((senderProfile.credits || 0) < amount) {
      return res.status(400).json({ error: 'Not enough credits' });
    }

    // Deduct from sender
    const senderNewBalance = (senderProfile.credits || 0) - amount;
    const { error: deductError } = await supabaseAdmin
      .from('profiles')
      .update({ credits: senderNewBalance })
      .eq('id', senderId);

    if (deductError) {
      console.error('[Gift] Failed to deduct from sender:', deductError.message);
      return res.status(500).json({ error: 'Failed to process gift' });
    }

    // Add to recipient
    const recipientNewBalance = (recipient.credits || 0) + amount;
    const { error: addError } = await supabaseAdmin
      .from('profiles')
      .update({ credits: recipientNewBalance })
      .eq('id', recipient.id);

    if (addError) {
      // Rollback sender deduction
      console.error('[Gift] Failed to add to recipient, rolling back:', addError.message);
      await supabaseAdmin
        .from('profiles')
        .update({ credits: senderProfile.credits })
        .eq('id', senderId);
      return res.status(500).json({ error: 'Failed to process gift' });
    }

    // Log transactions for both users
    const giftMessage = message || PRESET_MESSAGES[2].text.el; // default gift message
    const now = new Date().toISOString();

    // Sender transaction (debit)
    await supabaseAdmin.from('credit_transactions').insert({
      user_id: senderId,
      action: 'GIFT_SENT',
      amount: -amount,
      reason: `Gift to ${recipient.child_name}: ${giftMessage}`,
      balance_after: senderNewBalance,
      created_at: now,
    });

    // Recipient transaction (credit)
    await supabaseAdmin.from('credit_transactions').insert({
      user_id: recipient.id,
      action: 'GIFT_RECEIVED',
      amount: amount,
      reason: `Gift from ${senderProfile.child_name}: ${giftMessage}`,
      balance_after: recipientNewBalance,
      created_at: now,
    });

    return res.status(200).json({
      success: true,
      recipientName: recipient.child_name,
      amount,
      message: giftMessage,
      newBalance: senderNewBalance,
    });
  } catch (err: any) {
    console.error('[Gift] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
