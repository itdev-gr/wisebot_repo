/**
 * Admin → Traffic. Google Search Console, read through /api/admin/search-console.
 *
 * Clicks, impressions, CTR and average position for the last 28 days, the top queries
 * and the top pages, with a switch to look at the WiseBot World pages alone. When the
 * service account is not configured yet the tab explains the five steps instead of
 * failing — that setup is the owner's, not the code's.
 */
import React, { useCallback, useEffect, useState } from 'react';
import { ExternalLink, RefreshCw, Search } from 'lucide-react';
import { authFetch } from '../../services/backendApi';
import { Sparkline, Tile } from './Sparkline';

interface Traffic {
  configured: boolean;
  missing?: { key: boolean; site: boolean };
  error?: string;
  site?: string;
  days?: number;
  range?: { start: string; end: string };
  totals?: { clicks: number; impressions: number; ctr: number; position: number };
  byDay?: { date: string; clicks: number; impressions: number }[];
  topQueries?: { query: string; clicks: number; impressions: number; ctr: number; position: number }[];
  topPages?: { page: string; clicks: number; impressions: number; ctr: number; position: number }[];
}

export default function TrafficTab({ adminToken, lang }: { adminToken: () => string; lang: 'el' | 'en' }) {
  const [data, setData] = useState<Traffic | null>(null);
  const [worldOnly, setWorldOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = (el: string, en: string) => (lang === 'el' ? el : en);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const q = worldOnly ? '?days=28&path=/world' : '?days=28';
      const res = await authFetch(`/api/admin/search-console${q}`, { headers: { 'X-Admin-Token': adminToken() } });
      setData(await res.json());
    } catch (e: any) {
      setData({ configured: true, error: e?.message || 'error' });
    } finally {
      setLoading(false);
    }
  }, [adminToken, worldOnly]);

  useEffect(() => {
    load();
  }, [load]);

  if (!data) return <div className="text-white/40 font-bold text-sm p-6">{t('Φορτώνει…', 'Loading…')}</div>;

  if (!data.configured) {
    const steps = lang === 'el'
      ? [
          'Google Cloud Console → IAM → Service Accounts → Create («wisebot-admin»).',
          'Στο service account → Keys → Add key → JSON. Κατεβαίνει ένα αρχείο.',
          'APIs & Services → Enable «Google Search Console API».',
          'Search Console → wisebot.gr → Settings → Users → Add user: το email του service account (…iam.gserviceaccount.com), Full.',
          'Vercel → wisebot-claude-ok → Environment Variables: GOOGLE_SERVICE_ACCOUNT_JSON = τα περιεχόμενα του JSON, GSC_SITE_URL = sc-domain:wisebot.gr → Redeploy.',
        ]
      : [
          'Google Cloud Console → IAM → Service Accounts → Create ("wisebot-admin").',
          'On the service account → Keys → Add key → JSON. A file downloads.',
          'APIs & Services → Enable "Google Search Console API".',
          'Search Console → wisebot.gr → Settings → Users → Add user: the service account email (…iam.gserviceaccount.com), Full.',
          'Vercel → wisebot-claude-ok → Environment Variables: GOOGLE_SERVICE_ACCOUNT_JSON = the JSON contents, GSC_SITE_URL = sc-domain:wisebot.gr → Redeploy.',
        ];
    return (
      <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-sm"><Search size={16} className="text-blue-400" /> {t('Το Search Console δεν έχει συνδεθεί', 'Search Console is not connected')}</div>
        <p className="text-white/50 text-sm font-bold mt-2">{t('Πέντε βήματα, μία φορά. Μετά η καρτέλα γεμίζει μόνη της.', 'Five steps, once. Then this tab fills itself.')}</p>
        <ol className="mt-4 space-y-2 text-sm text-white/80 list-decimal pl-5">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
        {data.missing && (
          <p className="text-[11px] text-white/35 font-bold mt-4">
            {t('Λείπει', 'Missing')}: {[data.missing.key && 'GOOGLE_SERVICE_ACCOUNT_JSON', data.missing.site && 'GSC_SITE_URL'].filter(Boolean).join(', ')}
          </p>
        )}
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="bg-[#0f1014] border border-red-500/20 rounded-2xl p-6">
        <p className="text-white/70 font-bold text-sm">{t('Το Search Console απάντησε με σφάλμα', 'Search Console returned an error')}: <span className="text-red-400">{data.error}</span></p>
        <p className="text-white/40 text-xs font-bold mt-2">{t('Συνήθως: το service account δεν έχει προστεθεί ως χρήστης στο Search Console, ή το GSC_SITE_URL δεν ταιριάζει με το property.', 'Usually: the service account is not added as a user in Search Console, or GSC_SITE_URL does not match the property.')}</p>
        <button onClick={load} className="mt-3 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-bold text-sm"><RefreshCw size={14} className="inline mr-1" /> {t('Ξανά', 'Retry')}</button>
      </div>
    );
  }

  const tot = data.totals!;
  const pct = (x: number) => `${(x * 100).toFixed(1)}%`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-bold text-white/50">
          {data.range?.start} → {data.range?.end} · {data.site}
        </div>
        <label className="flex items-center gap-2 text-xs font-bold text-white/70 cursor-pointer">
          <input type="checkbox" checked={worldOnly} onChange={(e) => setWorldOnly(e.target.checked)} className="accent-blue-500" />
          {t('Μόνο σελίδες /world', 'Only /world pages')}
        </label>
      </div>

      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 ${loading ? 'opacity-60' : ''}`}>
        <Tile label={t('Κλικ', 'Clicks')} value={tot.clicks.toLocaleString('el-GR')} hint={t('28 μέρες', '28 days')} tone="text-blue-400" />
        <Tile label={t('Εμφανίσεις', 'Impressions')} value={tot.impressions.toLocaleString('el-GR')} />
        <Tile label="CTR" value={pct(tot.ctr)} />
        <Tile label={t('Μέση θέση', 'Avg. position')} value={tot.position.toFixed(1)} />
      </div>

      <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{t('Κλικ ανά ημέρα', 'Clicks per day')}</div>
        <Sparkline values={(data.byDay ?? []).map((d) => d.clicks)} label="clicks per day" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {[
          { title: t('Top αναζητήσεις', 'Top queries'), rows: (data.topQueries ?? []).map((r) => ({ key: r.query, ...r })) },
          { title: t('Top σελίδες', 'Top pages'), rows: (data.topPages ?? []).map((r) => ({ key: r.page.replace('https://wisebot.gr', ''), ...r })) },
        ].map((block) => (
          <div key={block.title} className="bg-[#0f1014] border border-white/10 rounded-2xl p-4 overflow-x-auto">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">{block.title}</div>
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-white/40">
                <tr><th className="text-left py-1">{t('Όρος / σελίδα', 'Term / page')}</th><th className="text-right">{t('Κλικ', 'Clicks')}</th><th className="text-right">{t('Εμφ.', 'Impr.')}</th><th className="text-right">CTR</th><th className="text-right">{t('Θέση', 'Pos.')}</th></tr>
              </thead>
              <tbody>
                {block.rows.map((r) => (
                  <tr key={r.key} className="border-t border-white/5">
                    <td className="py-1.5 text-white/85 max-w-[260px] truncate">{r.key}</td>
                    <td className="text-right text-white tabular-nums font-bold">{r.clicks}</td>
                    <td className="text-right text-white/50 tabular-nums">{r.impressions}</td>
                    <td className="text-right text-white/50 tabular-nums">{pct(r.ctr)}</td>
                    <td className="text-right text-white/50 tabular-nums">{r.position.toFixed(1)}</td>
                  </tr>
                ))}
                {block.rows.length === 0 && <tr><td colSpan={5} className="text-white/40 font-bold py-2">{t('Τίποτα ακόμη.', 'Nothing yet.')}</td></tr>}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300">
        <ExternalLink size={12} /> Search Console
      </a>
    </div>
  );
}
