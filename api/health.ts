import { withProtection } from './_lib/middleware';

export default withProtection(async (req: any, res: any) => {
  try {
    // Don't expose which services are configured — attackers can use this info
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(500).json({ status: 'error' });
  }
});
