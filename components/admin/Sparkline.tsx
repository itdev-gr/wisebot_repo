/**
 * A thirty-day line in one SVG, no chart library. Values are drawn as a polyline over a
 * soft fill; the last value is marked. Enough for "is it going up", which is all a
 * dashboard tile needs to answer.
 */
import React from 'react';

export function Sparkline({
  values,
  height = 48,
  stroke = '#60a5fa',
  fill = 'rgba(96,165,250,0.15)',
  label,
}: {
  values: number[];
  height?: number;
  stroke?: string;
  fill?: string;
  label?: string;
}) {
  const w = 240;
  const h = height;
  const n = values.length;
  if (n === 0) return <div className="h-12" aria-hidden />;
  const max = Math.max(1, ...values);
  const pts = values.map((v, i) => {
    const x = n === 1 ? w : (i / (n - 1)) * w;
    const y = h - 4 - (v / max) * (h - 8);
    return [x, y] as const;
  });
  const path = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${path} L${w},${h} L0,${h} Z`;
  const [lx, ly] = pts[n - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: h }} role="img" aria-label={label ?? 'trend'}>
      <path d={area} fill={fill} />
      <path d={path} fill="none" stroke={stroke} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lx} cy={ly} r={3} fill={stroke} />
    </svg>
  );
}

/** A stat tile in the dashboard's own idiom. */
export function Tile({
  label,
  value,
  hint,
  tone = 'text-white',
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
  tone?: string;
}) {
  return (
    <div className="bg-[#0f1014] border border-white/10 rounded-2xl p-4">
      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{label}</div>
      <div className={`text-2xl font-[1000] mt-1 ${tone}`}>{value}</div>
      {hint && <div className="text-[11px] font-bold text-white/35 mt-1">{hint}</div>}
    </div>
  );
}

export default Sparkline;
