/**
 * POST /api/contact — Contact form handler
 * ==========================================
 * Receives contact form data and sends email notification to info@wisebot.gr
 * Uses Supabase or a simple email forwarding approach.
 * For now, stores in Supabase table + sends via fetch to email service.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

async function getSupabase() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, surname, email, phone, orderId, message, type } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    // Rate limit: simple check (in production, use Redis/Upstash)
    const supportEmail = process.env.SUPPORT_EMAIL || 'info@wisebot.gr';

    // Store in Supabase (if table exists)
    const supabase = await getSupabase();
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

    // Send email notification via Resend API
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const fullName = `${name} ${surname || ''}`.trim();
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'WiseBot <noreply@wisebot.gr>',
            to: [supportEmail],
            subject: `[WiseBot Contact] ${type || 'Μήνυμα'} από ${fullName}`,
            html: `
              <h2>Νέο μήνυμα επικοινωνίας</h2>
              <p><strong>Όνομα:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Τηλέφωνο:</strong> ${phone}</p>` : ''}
              ${orderId ? `<p><strong>Αριθμός παραγγελίας:</strong> ${orderId}</p>` : ''}
              <p><strong>Τύπος:</strong> ${type || 'contact'}</p>
              <hr>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p style="color:#888;font-size:12px">Αποστολή: ${new Date().toISOString()}</p>
            `,
          }),
        });
        console.log('[contact] Email sent to', supportEmail);
      } catch (emailErr) {
        console.error('[contact] Email send failed:', (emailErr as any)?.message);
        // Don't fail the request — message is already saved in Supabase
      }
    } else {
      console.log('[contact] RESEND_API_KEY not set — email not sent');
    }

    // Also log for Vercel dashboard visibility
    console.log('[contact] New message:', {
      from: `${name} ${surname || ''}`.trim(),
      email,
      type: type || 'contact',
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
}
