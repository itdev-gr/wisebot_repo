import { withProtection } from '../_lib/middleware';

const CREDIT_PACKS = [
  { id: 'starter', name: 'Starter Pack', credits: 100, price: 499, priceDisplay: '€4.99' },
  { id: 'hero', name: 'Hero Pack', credits: 240, price: 999, priceDisplay: '€9.99' },
  { id: 'legend', name: 'Legend Pack', credits: 600, price: 1999, priceDisplay: '€19.99' },
  { id: 'ultimate', name: 'Ultimate Pack', credits: 1600, price: 3999, priceDisplay: '€39.99' },
];

export default withProtection(async (req: any, res: any) => {
  try {
    res.status(200).json({ packs: CREDIT_PACKS });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
