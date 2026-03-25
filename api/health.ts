import { withProtection } from './_lib/middleware';

export default withProtection(async (req: any, res: any) => {
  try {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(500).json({ status: 'error' });
  }
});
