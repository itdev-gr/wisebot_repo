
import React from 'react';
import { Target, CheckCircle2, Zap, Flame } from 'lucide-react';
import { useEconomy, MISSION_POOL } from '../context/EconomyContext';

interface DailyMissionProps {
  lang: 'el' | 'en';
}

const DailyMission: React.FC<DailyMissionProps> = ({ lang }) => {
  const { dailyMission } = useEconomy();
  const missionDef = MISSION_POOL[dailyMission.id];

  if (!missionDef) return null;

  const missionText = lang === 'el' ? missionDef.el : missionDef.en;

  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
      dailyMission.completed
        ? 'border-emerald-500/30 bg-emerald-950/40'
        : 'border-amber-500/30 bg-gradient-to-r from-amber-950/40 to-orange-950/40'
    }`}>
      {/* Glow */}
      {!dailyMission.completed && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 animate-pulse" />
      )}

      <div className="relative z-10 px-6 py-4 flex items-center justify-between gap-4">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            dailyMission.completed
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-amber-500/20 text-amber-400'
          }`}>
            {dailyMission.completed ? <CheckCircle2 size={24} /> : <Target size={24} className="animate-pulse" />}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <Flame size={12} className={dailyMission.completed ? 'text-emerald-400' : 'text-amber-400'} />
              <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                dailyMission.completed ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {lang === 'el' ? 'ΗΜΕΡΗΣΙΑ ΑΠΟΣΤΟΛΗ' : 'DAILY MISSION'}
              </span>
            </div>
            <p className="text-white font-bold text-sm leading-snug">
              {dailyMission.completed
                ? (lang === 'el' ? 'Ολοκληρώθηκε! Μπράβο!' : 'Completed! Well done!')
                : missionText
              }
            </p>
          </div>
        </div>

        {/* Right: Reward */}
        <div className={`shrink-0 px-3 py-2 rounded-lg border flex items-center gap-2 ${
          dailyMission.completed
            ? 'border-emerald-500/30 bg-emerald-500/10'
            : 'border-amber-500/30 bg-amber-500/10'
        }`}>
          <Zap size={14} className={`fill-current ${dailyMission.completed ? 'text-emerald-400' : 'text-amber-400'}`} />
          <span className={`text-sm font-black ${dailyMission.completed ? 'text-emerald-300' : 'text-amber-300'}`}>
            {dailyMission.completed ? '✓' : '+3'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyMission;
