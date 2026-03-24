export default function handler(req: any, res: any) {
  try {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        gemini: !!process.env.GEMINI_API_KEY,
        stripe: !!process.env.STRIPE_SECRET_KEY,
        supabase: !!process.env.SUPABASE_URL,
      }
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
