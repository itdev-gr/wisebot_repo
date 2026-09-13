/**
 * Admin → World. What the passport game is doing, as counts.
 *
 * Numbers come from /api/admin/world (stamps, explorers, open pin reports); the shape of
 * the product — which cities exist, how many places each has, which languages are
 * complete — comes from the World registry the app already ships. Place ids are
 * prefixed by their city id, so the join happens here with no extra table.
 *
 * Nothing on this screen names a child. A pin report shows the place, the reason and
 * the day; that is all the admin needs to go and look.
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Check, MapPin, RefreshCw } from 'lucide-react';
import { CITIES, COUNTRIES, PLACE_COUNTS, translationsFor } from '../../data/world/registry';
import { authFetch } from '../../services/backendApi';
import { Sparkline, Tile } from './Sparkline';

interface WorldData {
  generatedAt: string;
  stamps: {
    total: number;
    truncated: boolean;
    explorers: number;
    active7: number;
    active30: number;
    last7: number;
    last30: number;
    secondCity: number;
    byDay: { date: string; count: number }[];
    byPlace: { place_id: string; count: number; correct: number; last: string }[];
  };
  reports: {
    open: { id: number; place_id: string; reason: 'entrance' | 'wrong' | 'gone'; reported_at: string }[];
    openCount: number;
    closedCount: number;
  };
}

const REASON: Record<string, { el: string; en: string }> = {
  entrance: { el: 'Λάθος είσοδος', en: 'Wrong entrance' },
  wrong: { el: 'Λάθος σημείο', en: 'Wrong spot' },
  gone: { el: 'Δεν υπάρχει πια', en: 'No longer there' },
};

const cityOf = (placeId: string) => CITIES.find((c) => placeId.startsWith(`${c.id}-`));
const placeLabel = (placeId: string) => {
  const city = cityOf(placeId);
  const rest = city ? placeId.slice(city.id.length + 1) : placeId;
  return rest.replace(/-/g, ' ');
};

export default function WorldTab({ adminToken, lang }: { adminToken: () => string; lang: 'el' | 'en' }) {
  const [data, setData] = useState<WorldData | null>(null);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState<number | null>(null);
  const t = (el: string, en: string) => (lang === 'el' ? el : en);

  const load = useCallback(async () => {
    try {
      const res = await authFetch('/api/admin/world', { headers: { 'X-Admin-Token': adminToken() } });
      if (!res.ok) throw new Error(`${res.status}`);
      setData(await res.json());
      setError('');
    } catch (e: any) {
      setError(e?.message || 'error');
    }
  }, [adminToken]);

  useEffect(() => {
    load();
    const id = window.setInterval(load, 30_000);
    return () => window.clearInterval(id);
  }, [load]);

  const resolve = async (id: number) => {
    setBusyId(id);
    try {
      await authFetch('/api/admin/world', {
        method: 'POST',
        headers: { 'X-Admin-Token': adminToken(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'resolve', id }),
      });
      await load();
    } finally {
      setBusyId(null);
    }
  };

  const cities = useMemo(() => {
    const byPlace = data?.stamps.byPlace ?? [];
    const open = data?.reports.open ?? [];
    return CITIES.map((city) => {
      const prefix = `${city.id}-`;
      const stamps = byPlace.filter((p) => p.place_id.startsWith(prefix)).reduce((n, p) => n + p.count, 0);
      const reports = open.filter((r) => r.place_id.startsWith(prefix)).length;
      const langs = 2 + translationsFor(city.id).length;
      const country = COUNTRIES.find((c) => c.id === city.countryId);
      return { city, country, stamps, reports, langs, places: PLACE_COUNTS[city.id] ?? 0 };
    }).sort((a, b) => b.stamps - a.stamps || a.city.order - b.city.order);
  }, [data]);

  const countriesOpen = useMemo(
    () => COUNTRIES.filter((c) => cities.some((x) => x.city.countryId === c.id && x.stamps > 0)).length,
    [cities],
  );

  if (error) {
    return (
      <div className="bg-[#0f1014] border border-red-500/20 rounded-2xl p-6 text-center">
        <AlertTriangle className="mx-auto text-amber-400" />
        <p className="text-white/70 font-bold mt-2">{t('Δεν φορτώθηκαν τα δεδομένα του World', 'World data did not load')} ({error})</p>
        <button onClick={load} className="mt-3 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-bold text-sm">
          <RefreshCw size={14} className="inline mr-1" /> {t('Ξανά', 'Retry')}
        </button>
      </div>
    );
  }
  if (!data) return <div className="text-white/40 font-bold text-sm p-6">{t('Φορτώνει…', 'Loading…')}</div>;

  const s = data.stamps;
  const yes = s.last30;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <Tile label={t('Σφραγίδες', 'Stamps')} value={s.total.toLocaleString('el-GR')} hint={t(`${s.last7} τις τελευταίες 7 μέρες`, `${s.last7} in the last 7 days`)} />
        <Tile label={t('Εξερευνητές', 'Explorers')} value={s.explorers} hint={t(`${s.active7} ενεργοί 7ημ · ${s.active30} 30ημ`, `${s.active7} active 7d · ${s.active30} 30d`)} />
        <Tile label={t('Δεύτερη πόλη', 'Second city')} value={s.secondCity} hint={t('εξερευνητές με 2+ πόλεις', 'explorers with 2+ cities')} tone="text-emerald-400" />
        <Tile label={t('Χώρες με σφραγίδα', 'Countries stamped')} value={`${countriesOpen} / ${COUNTRIES.length}`} />
        <Tile label={t('Πόλεις live', 'Cities live')} value={CITIES.length} hint={t(`${Object.values(PLACE_COUNTS).reduce((a, b) => a + b, 0)} μέρη`, `${Object.values(PLACE_COUNTS).reduce((a, b) => a + b, 0)} places`)} />
        <Tile label={t('Λάθος σημείο', 'Pin reports')} value={data.reports.openCount} hint={t(`${data.reports.closedCount} κλειστές`, `${data.reports.closedCount} closed`)} tone={data.reports.openCount ? 'text-amber-400' : 'text-white'} />
      </div>

      <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{t('Σφραγίδες ανά ημέρα, 30 μέρες', 'Stamps per day, 30 days')}</div>
          <div className="text-xs font-bold text-white/50">{yes} {t('σύνολο', 'total')}</div>
        </div>
        <Sparkline values={s.byDay.map((d) => d.count)} label="stamps per day" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4 overflow-x-auto">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">{t('Ανά πόλη', 'By city')}</div>
          <table className="w-full text-sm">
            <thead className="text-[10px] uppercase tracking-wider text-white/40">
              <tr><th className="text-left py-1">{t('Πόλη', 'City')}</th><th className="text-right">{t('Σφραγίδες', 'Stamps')}</th><th className="text-right">{t('Μέρη', 'Places')}</th><th className="text-right">{t('Γλώσσες', 'Langs')}</th><th className="text-right">{t('Αναφορές', 'Reports')}</th></tr>
            </thead>
            <tbody>
              {cities.map(({ city, country, stamps, places, langs, reports }) => (
                <tr key={city.id} className="border-t border-white/5">
                  <td className="py-1.5 text-white font-bold">{country?.flag} {city.name[lang]}</td>
                  <td className="text-right text-white/80 tabular-nums">{stamps}</td>
                  <td className="text-right text-white/50 tabular-nums">{places}</td>
                  <td className={`text-right tabular-nums ${langs >= 6 ? 'text-emerald-400' : 'text-white/50'}`}>{langs}/6</td>
                  <td className={`text-right tabular-nums ${reports ? 'text-amber-400' : 'text-white/30'}`}>{reports}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">{t('Ανοιχτές αναφορές «Λάθος σημείο»', 'Open pin reports')}</div>
            {data.reports.open.length === 0 ? (
              <p className="text-white/40 text-sm font-bold">{t('Καμία. Ωραία.', 'None. Good.')}</p>
            ) : (
              <ul className="space-y-2">
                {data.reports.open.map((r) => (
                  <li key={r.id} className="flex items-center gap-3 text-sm">
                    <MapPin size={14} className="text-amber-400 shrink-0" />
                    <span className="flex-1 min-w-0">
                      <span className="text-white font-bold">{cityOf(r.place_id)?.name[lang] ?? '—'} · {placeLabel(r.place_id)}</span>
                      <span className="block text-white/40 text-xs">{REASON[r.reason]?.[lang] ?? r.reason} · {new Date(r.reported_at).toLocaleDateString('el-GR')}</span>
                    </span>
                    <button
                      onClick={() => resolve(r.id)}
                      disabled={busyId === r.id}
                      className="px-3 py-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-bold disabled:opacity-50"
                    >
                      <Check size={12} className="inline mr-1" />{t('Κλείσιμο', 'Close')}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">{t('Top 10 μέρη', 'Top 10 places')}</div>
            <ol className="space-y-1 text-sm">
              {s.byPlace.slice(0, 10).map((p, i) => (
                <li key={p.place_id} className="flex justify-between gap-3">
                  <span className="text-white/80 truncate"><span className="text-white/30 mr-2">{i + 1}.</span>{cityOf(p.place_id)?.name[lang] ?? ''} · {placeLabel(p.place_id)}</span>
                  <span className="text-white tabular-nums font-bold">{p.count}</span>
                </li>
              ))}
              {s.byPlace.length === 0 && <li className="text-white/40 font-bold">{t('Καμία σφραγίδα ακόμη.', 'No stamps yet.')}</li>}
            </ol>
          </div>
        </div>
      </div>
      {s.truncated && <p className="text-[11px] text-amber-400/80 font-bold">{t('Πάνω από 50.000 σφραγίδες: τα πλήθη είναι μερικά.', 'Over 50,000 stamps: counts are partial.')}</p>}
    </div>
  );
}
