async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export const config = { api: { bodyParser: false } };

async function getRawBody(req: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).end();

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!key || !webhookSecret) return res.status(500).json({ error: 'Not configured' });

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(key);
    const rawBody = await getRawBody(req);
    const sig = req.headers['stripe-signature'] as string;

    let event: any;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).json({ error: 'Invalid signature' });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      const { userId, packId, credits } = session.metadata || {};
      const creditsAmount = parseInt(credits || '0');
      const sessionId = session.id;

      console.log(`[Webhook] Payment completed: user=${userId}, pack=${packId}, credits=${creditsAmount}`);

      // Write to Supabase if user is authenticated
      if (userId && userId !== 'anonymous' && creditsAmount > 0) {
        try {
          // Reuse a single Supabase admin client for the entire webhook
          const supabase = await getSupabaseAdmin();

          // Insert purchase record
          await supabase
            .from('purchases')
            .insert({
              user_id: userId,
              stripe_session_id: sessionId,
              pack_id: packId || 'unknown',
              credits_amount: creditsAmount,
              amount_eur: (session.amount_total || 0) / 100,
              status: 'completed',
            });

          // Add credits via atomic function
          const { error: rpcError } = await supabase.rpc('earn_credits', {
            p_user_id: userId,
            p_amount: creditsAmount,
            p_action: 'PURCHASE',
            p_action_id: sessionId,
          });

          if (rpcError) {
            console.error('[Webhook] Credit RPC error:', rpcError.message);
          } else {
            console.log(`[Webhook] Added ${creditsAmount} credits to user ${userId}`);
          }

          // Send email notification to parent about the purchase
          try {
            const { data: profileData } = await supabase
              .from('profiles')
              .select('parent_email, child_name')
              .eq('id', userId)
              .single();

            if (profileData?.parent_email) {
              const amountEur = ((session.amount_total || 0) / 100).toFixed(2);
              const date = new Date().toLocaleDateString('el-GR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
              const childName = profileData.child_name || 'Το παιδί σας';

              const RESEND_KEY = process.env.RESEND_API_KEY;
              if (RESEND_KEY) {
                await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    from: 'WiseBot Academy <noreply@wisebot.gr>',
                    to: [profileData.parent_email],
                    subject: `WiseBot Academy — Αγορά Credits (${creditsAmount} ⚡)`,
                    html: `
                      <div style="font-family:system-ui,sans-serif;max-width:500px;margin:0 auto;padding:20px;">
                        <h2 style="color:#1a1a2e;">WiseBot Academy — Ειδοποίηση Αγοράς</h2>
                        <p>Αγαπητέ γονέα,</p>
                        <p>Σας ενημερώνουμε ότι πραγματοποιήθηκε αγορά credits στον λογαριασμό <strong>${childName}</strong>:</p>
                        <table style="border-collapse:collapse;width:100%;margin:16px 0;">
                          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Πακέτο</td><td style="padding:8px;border:1px solid #ddd;">${packId || 'Credits'}</td></tr>
                          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Credits</td><td style="padding:8px;border:1px solid #ddd;">${creditsAmount} ⚡</td></tr>
                          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ποσό</td><td style="padding:8px;border:1px solid #ddd;">€${amountEur}</td></tr>
                          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ημερομηνία</td><td style="padding:8px;border:1px solid #ddd;">${date}</td></tr>
                        </table>
                        <p style="color:#666;font-size:13px;">Αν δεν αναγνωρίζετε αυτή την αγορά, επικοινωνήστε μαζί μας: info@wisebot.gr</p>
                        <p style="color:#999;font-size:11px;">© 2026 WiseBot Academy — wisebot.gr</p>
                      </div>
                    `,
                  }),
                });
                console.log(`[Webhook] Purchase notification sent to ${profileData.parent_email}`);
              }
            }
          } catch (emailErr: any) {
            console.error('[Webhook] Email notification error:', emailErr.message);
            // Don't fail — email is non-critical
          }
        } catch (dbErr: any) {
          console.error('[Webhook] DB error:', dbErr.message);
          // Don't fail the webhook — Stripe needs 200 to not retry
        }
      } else {
        console.log('[Webhook] Anonymous purchase or no credits — skipping DB write');
      }
    }

    res.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error:', err.message);
    res.status(500).json({ error: 'Webhook processing error' });
  }
}
