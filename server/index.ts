import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { aiRouter } from './routes/ai.js';
import { creditsRouter } from './routes/credits.js';
import { stripeRouter, stripeWebhookHandler } from './routes/stripe.js';
import { authRouter } from './routes/auth.js';
import { requireAuth, optionalAuth } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Security ─────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
      connectSrc: ["'self'", 'https://*.supabase.co', 'https://api.stripe.com'],
    },
  },
  crossOriginEmbedderPolicy: false, // Allow loading external images
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Stripe webhook needs raw body — must be BEFORE express.json()
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), stripeWebhookHandler);

// JSON body parser for all other routes
app.use(express.json({ limit: '10mb' }));

// ─── Rate Limiting ────────────────────────────────────────
const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60,
  message: { error: 'Too many requests. Please wait.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10, // 10 AI requests per minute
  message: { error: 'AI rate limit reached. Please wait a minute.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 auth attempts per 15 minutes
  message: { error: 'Too many login attempts. Please wait 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const stripeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5, // 5 payment requests per minute
  message: { error: 'Too many payment requests. Please wait.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', generalLimiter);
app.use('/api/ai', aiLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
app.use('/api/stripe/checkout', stripeLimiter);

// ─── Routes ───────────────────────────────────────────────

// Public routes (no auth required)
app.use('/api/auth', authRouter);
app.get('/api/stripe/packs', (_req, res, next) => next()); // Allow unauthenticated pack listing

// Protected routes (require valid JWT)
app.use('/api/credits', requireAuth, creditsRouter);
app.use('/api/ai', requireAuth, aiRouter);
app.use('/api/stripe', requireAuth, stripeRouter);

// Health check (public)
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// ─── Error Handler ────────────────────────────────────────
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Start ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`WiseBot Server running on port ${PORT}`);
  console.log(`   Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`   Gemini API: ${process.env.GEMINI_API_KEY ? 'configured' : 'missing'}`);
  console.log(`   Stripe: ${process.env.STRIPE_SECRET_KEY ? 'configured' : 'missing'}`);
  console.log(`   Supabase: ${process.env.SUPABASE_URL ? 'configured' : 'missing'}`);
});
