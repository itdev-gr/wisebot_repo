/**
 * AUTH MIDDLEWARE
 * ==============
 * Verifies Supabase JWT tokens and attaches user info to requests.
 * Protected routes use `requireAuth` to ensure only authenticated users access them.
 */

import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../lib/supabase.js';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
      accessToken?: string;
    }
  }
}

/**
 * Middleware that requires a valid Supabase JWT token.
 * Extracts Bearer token from Authorization header,
 * verifies it via Supabase Auth, and attaches user info to req.
 */
export async function requireAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Missing or invalid Authorization header' });
      return;
    }

    const token = authHeader.replace('Bearer ', '');

    // Verify the JWT token via Supabase Auth
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !user) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }

    // Attach user info and token to request
    req.user = {
      id: user.id,
      email: user.email || '',
    };
    req.accessToken = token;

    next();
  } catch (err) {
    console.error('[Auth Middleware] Error:', err);
    res.status(500).json({ error: 'Authentication failed' });
  }
}

/**
 * Optional auth middleware — attaches user if token present, but doesn't block.
 * Useful for endpoints that work for both authenticated and anonymous users.
 */
export async function optionalAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user } } = await supabaseAdmin.auth.getUser(token);

      if (user) {
        req.user = {
          id: user.id,
          email: user.email || '',
        };
        req.accessToken = token;
      }
    }

    next();
  } catch {
    // Silently continue without auth
    next();
  }
}
