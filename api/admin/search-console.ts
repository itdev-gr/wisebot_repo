/**
 * GET /api/admin/search-console?days=28[&path=/world]
 *
 * Google Search Console, read through a service account: clicks, impressions, CTR and
 * position per day, plus the top queries and top pages. This is the "are families
 * finding us" number the business plan asks for, next to the product counts.
 *
 * No SDK: the service account's private key signs a short-lived JWT (RS256, Node's
 * crypto), the token endpoint swaps it for an access token, and three Search Analytics
 * queries do the rest. Responses are cached in the function instance for an hour —
 * the dashboard refreshes every 30 s and Google's quota is not for that.
 *
 * Not configured (no key in the environment) is a normal state, answered with 200 and
 * `configured: false` so the dashboard can show the owner the five steps instead of
 * an error.
 *
 * Env: GOOGLE_SERVICE_ACCOUNT_JSON (the key file's contents, raw JSON or base64),
 *      GSC_SITE_URL (e.g. `sc-domain:wisebot.gr` or `https://wisebot.gr/`).
 */
import { createSign } from 'node:crypto';
import { ADMIN_CORS_HEADERS, verifyAdminToken } from '../_lib/adminAuth.js';

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CACHE_MS = 60 * 60 * 1000;

interface ServiceAccount { client_email: string; private_key: string; token_uri?: string }

function readServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (!raw) return null;
  try {
    const text = raw.startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8');
    const parsed = JSON.parse(text);
    if (!parsed.client_email || !parsed.private_key) return null;
    return parsed;
  } catch {
    return null;
  }
}

const b64url = (input: Buffer | string) =>
  Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

let tokenCache: { token: string; exp: number } | null = null;

async function accessToken(sa: ServiceAccount): Promise<string> {
  if (tokenCache && tokenCache.exp > Date.now() + 60_000) return tokenCache.token;
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({ iss: sa.client_email, scope: SCOPE, aud: sa.token_uri || TOKEN_URL, iat: now, exp: now + 3600 }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const signature = b64url(signer.sign(sa.private_key));
  const assertion = `${header}.${claims}.${signature}`;

  const resp = await fetch(sa.token_uri || TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  });
  if (!resp.ok) throw new Error(`token ${resp.status}: ${(await resp.text()).slice(0, 200)}`);
  const json = (await resp.json()) as { access_token: string; expires_in: number };
  tokenCache = { token: json.access_token, exp: Date.now() + json.expires_in * 1000 };
  return json.access_token;
}

interface Row { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }

async function query(
  token: string,
  site: string,
  body: Record<string, unknown>,
): Promise<Row[]> {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!resp.ok) throw new Error(`gsc ${resp.status}: ${(await resp.text()).slice(0, 200)}`);
  const json = (await resp.json()) as { rows?: Row[] };
  return json.rows || [];
}

const dataCache = new Map<string, { at: number; data: unknown }>();

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  if (!verifyAdminToken(req.headers['x-admin-token'])) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const sa = readServiceAccount();
  const site = process.env.GSC_SITE_URL?.trim();
  if (!sa || !site) {
    return res.status(200).json({ configured: false, missing: { key: !sa, site: !site } });
  }

  const days = Math.min(90, Math.max(7, Number(req.query?.days) || 28));
  const pathFilter = typeof req.query?.path === 'string' && req.query.path.startsWith('/') ? req.query.path : '';
  const cacheKey = `${days}|${pathFilter}`;
  const cached = dataCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_MS) return res.status(200).json(cached.data);

  try {
    const token = await accessToken(sa);
    // Search Console data lags by about two days; ask for a window that ends then.
    const end = new Date(Date.now() - 2 * 24 * 3600 * 1000);
    const start = new Date(end.getTime() - (days - 1) * 24 * 3600 * 1000);
    const iso = (d: Date) => d.toISOString().slice(0, 10);
    const base: Record<string, unknown> = { startDate: iso(start), endDate: iso(end) };
    if (pathFilter) {
      base.dimensionFilterGroups = [
        { filters: [{ dimension: 'page', operator: 'contains', expression: pathFilter }] },
      ];
    }

    const [byDate, byQuery, byPage] = await Promise.all([
      query(token, site, { ...base, dimensions: ['date'], rowLimit: 100 }),
      query(token, site, { ...base, dimensions: ['query'], rowLimit: 20 }),
      query(token, site, { ...base, dimensions: ['page'], rowLimit: 20 }),
    ]);

    const totals = byDate.reduce(
      (acc, r) => {
        acc.clicks += r.clicks;
        acc.impressions += r.impressions;
        acc.positionSum += r.position * r.impressions;
        return acc;
      },
      { clicks: 0, impressions: 0, positionSum: 0 },
    );

    const data = {
      configured: true,
      site,
      days,
      pathFilter,
      range: { start: iso(start), end: iso(end) },
      totals: {
        clicks: totals.clicks,
        impressions: totals.impressions,
        ctr: totals.impressions ? totals.clicks / totals.impressions : 0,
        position: totals.impressions ? totals.positionSum / totals.impressions : 0,
      },
      byDay: byDate
        .map((r) => ({ date: r.keys[0], clicks: r.clicks, impressions: r.impressions }))
        .sort((a, b) => a.date.localeCompare(b.date)),
      topQueries: byQuery.map((r) => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position })),
      topPages: byPage.map((r) => ({ page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position })),
      generatedAt: new Date().toISOString(),
    };
    dataCache.set(cacheKey, { at: Date.now(), data });
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('[admin/search-console]', err?.message || err);
    return res.status(502).json({ configured: true, error: String(err?.message || err).slice(0, 300) });
  }
}
