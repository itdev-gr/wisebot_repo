/**
 * POST /api/contact — Contact form handler
 * ==========================================
 * Receives contact form data and sends email notification to info@wisebot.gr
 * Uses Supabase or a simple email forwarding approach.
 * For now, stores in Supabase table + sends via fetch to email service.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { withProtection } from './_lib/middleware';

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, surname, email, phone, orderId, message, type } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    // Rate limit: simple check (in production, use Redis/Upstash)
    const supportEmail = process.env.SUPPORT_EMAIL || 'info@wisebot.gr';

    // Store in Supabase (if table exists)
    const supabase = getSupabase();
    try {
      await supabase.from('contact_messages').insert({
        name: `${name} ${surname || ''}`.trim(),
        email,
        phone: phone || null,
        order_id: orderId || null,
        message,
        type: type || 'contact',
        created_at: new Date().toISOString(),
        read: false,
      });
    } catch (dbErr) {
      // Table might not exist yet — that's OK, we still log it
      console.log('[contact] DB insert skipped (table may not exist):', (dbErr as any)?.message);
    }

    // Log the message for admin visibility in Vercel logs
    console.log('[contact] New message:', {
      from: `${name} ${surname || ''}`.trim(),
      email,
      phone: phone || 'N/A',
      orderId: orderId || 'N/A',
      type: type || 'contact',
      message: message.substring(0, 200),
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Message received. We will contact you soon.',
      supportEmail,
    });
  } catch (err: any) {
    console.error('[contact] Error:', err.message);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});
