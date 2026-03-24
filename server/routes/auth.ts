/**
 * AUTH ROUTES
 * ===========
 * Authentication using Supabase Auth.
 * Handles signup, login, and session verification.
 *
 * TODO [SUPABASE]: Connect to Supabase Auth when ready.
 * For now, provides the route structure.
 */

import { Router } from 'express';

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

    // TODO [SUPABASE]:
    // 1. Create user in Supabase Auth
    // 2. Send verification email to parentEmail
    // 3. User account is inactive until parent confirms
    // const { data, error } = await supabase.auth.signUp({ email, password });
    // await sendParentVerificationEmail(parentEmail, data.user.id);

    res.json({
      success: true,
      message: 'Account created. Parent verification email sent.',
      // token: data.session.access_token,
    });
  } catch (err: any) {
    console.error('Register error:', err.message);
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

    // TODO [SUPABASE]:
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    // if (error) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({
      success: true,
      // token: data.session.access_token,
      // user: { id: data.user.id, email: data.user.email },
      message: 'Placeholder — connect Supabase',
    });
  } catch (err: any) {
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

// ─── Verify Session (middleware helper) ───────────────────
authRouter.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });

    // TODO [SUPABASE]:
    // const { data: { user }, error } = await supabase.auth.getUser(token);
    // if (error || !user) return res.status(401).json({ error: 'Invalid token' });
    // res.json({ user: { id: user.id, email: user.email } });

    res.json({ user: null, message: 'Placeholder — connect Supabase' });
  } catch (err: any) {
    res.status(500).json({ error: 'Session verification failed' });
  }
});

// ─── Parent Verification (COPPA) ─────────────────────────
authRouter.post('/parent-verify', async (req, res) => {
  try {
    const { token } = req.body;

    // TODO: Verify parent consent token
    // This is called when parent clicks the link in verification email
    // Activates the child's account

    res.json({ success: true, message: 'Parent verification placeholder' });
  } catch (err: any) {
    res.status(500).json({ error: 'Verification failed' });
  }
});

// ─── Delete Account (COPPA requirement) ──────────────────
authRouter.delete('/account', async (req, res) => {
  try {
    // TODO [SUPABASE]:
    // Delete all user data (COPPA requires this)
    // const userId = req.user.id;
    // await supabase.from('heroes').delete().eq('user_id', userId);
    // await supabase.from('stats').delete().eq('user_id', userId);
    // await supabase.auth.admin.deleteUser(userId);

    res.json({ success: true, message: 'Account deletion placeholder' });
  } catch (err: any) {
    res.status(500).json({ error: 'Account deletion failed' });
  }
});
