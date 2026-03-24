/**
 * Suno Callback Endpoint
 * =======================
 * Receives callbacks from Suno API when song generation completes.
 * We primarily use polling, but Suno requires a valid callBackUrl.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withProtection } from '../_lib/middleware';

export default withProtection(async (req: any, res: any) => {
  // Accept the callback (we use polling instead, but Suno requires a valid URL)
  console.log('[suno-callback] Received callback:', JSON.stringify(req.body || {}).slice(0, 500));
  return res.status(200).json({ received: true });
});
