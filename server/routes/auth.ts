/**
 * AUTH ROUTES
 * ===========
 * Authentication using Supabase Auth.
 * Handles signup, login, session verification, and COPPA parent verification.
 */

import { Router } from 'express';
import { supabaseAdmin } from '../lib/supabase.js';

export const authRouter = Router();

// ─── Register ─────────────────────────────────────────────
authRouter.post('/register', async (req, res) => {
  try {
    const { email, password, parentEmail, childName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // COPPA: Require parent email for verification
    if (!parentEmail) {
      return res.status(400).json({ error: 'Parent email required (COPPA compliance)' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Create user in Supabase Auth with auto-confirm
    // (profile + stats are auto-created via database trigger `handle_new_user`)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm for now — parent verification is separate
      user_metadata: {
        child_name: childName || '',
        parent_email: parentEmail,
      },
    });

    if (error) {
      // Handle duplicate email
      if (error.message?.includes('already been registered') || error.message?.includes('already exists')) {
        return res.status(409).json({ error: 'Email already registered' });
      }
      console.error('[Auth] Register error:', error.message);
      return res.status(400).json({ error: error.message || 'Registration failed' });
    }

    // Update profile with parent email and child name
    if (data.user) {
      await supabaseAdmin
        .from('profiles')
        .update({
          child_name: childName || '',
          parent_email: parentEmail,
        })
        .eq('id', data.user.id);
    }

    res.json({
      success: true,
      userId: data.user?.id,
      message: 'Account created successfully.',
    });
  } catch (err: any) {
    console.error('[Auth] Register error:', err.message);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// ─── Login ────────────────────────────────────────────────
authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Sign in via Supabase Auth
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      success: true,
      token: data.session?.access_token,
      refreshToken: data.session?.refresh_token,
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    });
  } catch (err: any) {
    console.error('[Auth] Login error:', err.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

// ─── Verify Session (middleware helper) ───────────────────
authRouter.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Fetch profile data
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('child_name, parent_email, avatar_url, parent_verified, credits')
      .eq('id', user.id)
      .single();

    res.json({
      user: {
        id: user.id,
        email: user.email,
        childName: profile?.child_name || '',
        parentEmail: profile?.parent_email || '',
        avatarUrl: profile?.avatar_url || '',
        parentVerified: profile?.parent_verified || false,
        credits: profile?.credits || 0,
      },
    });
  } catch (err: any) {
    console.error('[Auth] Session verify error:', err.message);
    res.status(500).json({ error: 'Session verification failed' });
  }
});

// ─── Parent Verification (COPPA) ─────────────────────────
authRouter.post('/parent-verify', async (req, res) => {
  try {
    const { token, childUserId } = req.body;

    if (!token || !childUserId) {
      return res.status(400).json({ error: 'Token and child user ID required' });
    }

    // Verify the parent consent token
    // For now, we use a simple approach: token = SHA256(childUserId + secret)
    // In production, use a proper token system with expiration
    const crypto = await import('crypto');
    const secret = process.env.PARENT_VERIFY_SECRET || process.env.SUPABASE_SERVICE_KEY || '';
    const expectedToken = crypto
      .createHmac('sha256', secret)
      .update(`parent_verify_${childUserId}`)
      .digest('hex');

    if (token !== expectedToken) {
      return res.status(400).json({ error: 'Invalid verification token' });
    }

    // Mark child account as parent-verified
    const { error } = await supabaseAdmin
      .from('profiles')
      .update({ parent_verified: true })
      .eq('id', childUserId);

    if (error) {
      return res.status(500).json({ error: 'Verification update failed' });
    }

    res.json({ success: true, message: 'Parent verification complete' });
  } catch (err: any) {
    console.error('[Auth] Parent verify error:', err.message);
    res.status(500).json({ error: 'Verification failed' });
  }
});

// ─── Delete Account (COPPA requirement) ──────────────────
authRouter.delete('/account', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Delete user from Supabase Auth (cascades to all related tables via foreign keys)
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (error) {
      console.error('[Auth] Account deletion error:', error.message);
      return res.status(500).json({ error: 'Account deletion failed' });
    }

    res.json({ success: true, message: 'Account deleted successfully' });
  } catch (err: any) {
    console.error('[Auth] Account deletion error:', err.message);
    res.status(500).json({ error: 'Account deletion failed' });
  }
});
