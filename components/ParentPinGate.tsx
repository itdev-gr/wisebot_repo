import React, { useEffect, useState } from 'react';
import { Shield, AlertCircle, Loader2, KeyRound, Lock } from 'lucide-react';
import { authFetch } from '../services/backendApi';

/**
 * The Parent Dashboard gate.
 *
 * A separate 4–6 digit PIN, set by the parent the first time, verified by
 * /api/auth/parent-pin. It replaced "type the account password again", which
 * (a) could never succeed for Google sign-ins and (b) protected nothing when the
 * child logs in with that same password.
 *
 * `hasPassword` decides whether "forgot PIN" can offer the account-password reset.
 */
interface Props {
  lang: 'el' | 'en';
  hasPassword: boolean;
  onUnlocked: () => void;
}

type Mode = 'loading' | 'set' | 'verify' | 'reset' | 'error';

const TEXT = {
  el: {
    title: 'Γονεϊκός Πίνακας',
    setTitle: 'Όρισε το γονεϊκό PIN',
    setDesc: 'Ένας κωδικός 4–6 ψηφίων μόνο για τους γονείς. Δεν είναι ο κωδικός του λογαριασμού — το παιδί δεν πρέπει να τον ξέρει.',
    verifyTitle: 'Γράψε το γονεϊκό PIN',
    verifyDesc: 'Εδώ μπαίνουν μόνο οι γονείς.',
    resetTitle: 'Ξέχασες το PIN;',
    resetDesc: 'Γράψε τον κωδικό του λογαριασμού σου και διάλεξε νέο PIN.',
    resetNoPassword: 'Ο λογαριασμός μπήκε με Google και δεν έχει κωδικό. Για επαναφορά του PIN στείλε email στο info@wisebot.gr από το email του λογαριασμού.',
    pin: 'PIN',
    pinAgain: 'Ξανά το PIN',
    newPin: 'Νέο PIN',
    password: 'Κωδικός λογαριασμού',
    save: 'ΑΠΟΘΗΚΕΥΣΗ',
    enter: 'ΕΙΣΟΔΟΣ',
    reset: 'ΕΠΑΝΑΦΟΡΑ',
    forgot: 'Ξέχασα το PIN',
    back: 'Πίσω',
    mismatch: 'Τα δύο PIN δεν είναι ίδια',
    badPin: 'Το PIN πρέπει να έχει 4–6 ψηφία',
    wrongPin: (n: number) => `Λάθος PIN — ${n} ${n === 1 ? 'προσπάθεια' : 'προσπάθειες'} ακόμα`,
    locked: (m: number) => `Πολλές λάθος προσπάθειες. Δοκίμασε ξανά σε ${m} λεπτά.`,
    wrongPassword: 'Λάθος κωδικός λογαριασμού',
    generic: 'Κάτι πήγε στραβά. Δοκίμασε ξανά.',
    retry: 'Δοκίμασε ξανά',
  },
  en: {
    title: 'Parent Dashboard',
    setTitle: 'Set your parent PIN',
    setDesc: 'A 4–6 digit code for parents only. It is not the account password — your child should not know it.',
    verifyTitle: 'Enter your parent PIN',
    verifyDesc: 'Parents only.',
    resetTitle: 'Forgot your PIN?',
    resetDesc: 'Type your account password and choose a new PIN.',
    resetNoPassword: 'This account signed in with Google and has no password. To reset the PIN, email info@wisebot.gr from the account\'s address.',
    pin: 'PIN',
    pinAgain: 'Repeat PIN',
    newPin: 'New PIN',
    password: 'Account password',
    save: 'SAVE',
    enter: 'ENTER',
    reset: 'RESET',
    forgot: 'I forgot my PIN',
    back: 'Back',
    mismatch: 'The two PINs do not match',
    badPin: 'The PIN must be 4–6 digits',
    wrongPin: (n: number) => `Wrong PIN — ${n} ${n === 1 ? 'try' : 'tries'} left`,
    locked: (m: number) => `Too many wrong tries. Try again in ${m} minutes.`,
    wrongPassword: 'Wrong account password',
    generic: 'Something went wrong. Please try again.',
    retry: 'Try again',
  },
};

const PIN_RE = /^\d{4,6}$/;

export async function parentPinRequest(body: Record<string, unknown>) {
  const res = await authFetch('/api/auth/parent-pin', { method: 'POST', body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export default function ParentPinGate({ lang, hasPassword, onUnlocked }: Props) {
  const t = TEXT[lang];
  const [mode, setMode] = useState<Mode>('loading');
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const loadStatus = async () => {
    setMode('loading');
    const r = await parentPinRequest({ action: 'status' });
    if (!r.ok) { setMode('error'); return; }
    setMode(r.data.hasPin ? 'verify' : 'set');
  };
  useEffect(() => { loadStatus(); }, []);

  const describe = (r: { status: number; data: any }): string => {
    const c = r.data?.code;
    if (c === 'locked') return t.locked(r.data.minutes || 15);
    if (c === 'wrong_pin') return t.wrongPin(r.data.attemptsLeft ?? 0);
    if (c === 'wrong_password') return t.wrongPassword;
    if (c === 'bad_pin') return t.badPin;
    return t.generic;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!PIN_RE.test(pin)) { setError(t.badPin); return; }
    if (mode === 'set' && pin !== pin2) { setError(t.mismatch); return; }
    setBusy(true);
    try {
      let r;
      if (mode === 'set') r = await parentPinRequest({ action: 'set', pin });
      else if (mode === 'reset') r = await parentPinRequest({ action: 'reset', password, newPin: pin });
      else r = await parentPinRequest({ action: 'verify', pin });
      if (r.ok) { onUnlocked(); return; }
      // A PIN appeared between status and set (another device): fall through to verify.
      if (r.data?.code === 'has_pin') { setMode('verify'); setPin(''); setPin2(''); return; }
      setError(describe(r));
      setPin(''); setPin2('');
    } catch {
      setError(t.generic);
    } finally {
      setBusy(false);
    }
  };

  const pinInput = (value: string, onChange: (v: string) => void, placeholder: string, autoFocus = false) => (
    <input
      type="password"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={6}
      autoComplete="off"
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/\D/g, '').slice(0, 6))}
      placeholder={placeholder}
      aria-label={placeholder}
      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-lg font-black tracking-[0.5em] placeholder:text-white/20 placeholder:tracking-normal placeholder:text-sm placeholder:font-bold focus:outline-none focus:border-blue-500/40 text-center"
    />
  );

  const title = mode === 'set' ? t.setTitle : mode === 'reset' ? t.resetTitle : t.verifyTitle;
  const desc = mode === 'set' ? t.setDesc : mode === 'reset' ? (hasPassword ? t.resetDesc : t.resetNoPassword) : t.verifyDesc;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-sm bg-[#0B0F1A]/80 border border-white/10 rounded-3xl p-8 md:p-10 text-center backdrop-blur-xl">
        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-500/30">
          {mode === 'set' ? <KeyRound size={30} className="text-blue-400" /> : mode === 'reset' ? <Lock size={30} className="text-amber-400" /> : <Shield size={30} className="text-blue-400" />}
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">{t.title}</p>

        {mode === 'loading' && <Loader2 className="animate-spin text-white/40 mx-auto my-6" size={24} />}

        {mode === 'error' && (
          <>
            <p className="text-red-400 text-sm font-bold my-4">{t.generic}</p>
            <button onClick={loadStatus} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-black uppercase">{t.retry}</button>
          </>
        )}

        {(mode === 'set' || mode === 'verify' || mode === 'reset') && (
          <>
            <h2 className="text-xl font-black text-white tracking-tight mb-2">{title}</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">{desc}</p>

            {mode === 'reset' && !hasPassword ? (
              <button onClick={() => { setMode('verify'); setError(''); }} className="text-white/50 text-xs font-bold underline underline-offset-4">{t.back}</button>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                {mode === 'reset' && (
                  <input
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t.password}
                    aria-label={t.password}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 text-center"
                  />
                )}
                {pinInput(pin, setPin, mode === 'reset' ? t.newPin : t.pin, true)}
                {mode === 'set' && pinInput(pin2, setPin2, t.pinAgain)}

                {error && (
                  <p className="text-red-400 text-xs font-bold flex items-center justify-center gap-1" role="alert">
                    <AlertCircle size={14} /> {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={busy || pin.length < 4 || (mode === 'reset' && !password)}
                  className="w-full py-3 bg-blue-600/20 border border-blue-500/30 rounded-xl text-white font-black uppercase text-sm hover:bg-blue-600/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {busy ? <Loader2 size={16} className="animate-spin" /> : (mode === 'set' ? t.save : mode === 'reset' ? t.reset : t.enter)}
                </button>

                {mode === 'verify' && (
                  <button type="button" onClick={() => { setMode('reset'); setError(''); setPin(''); }} className="text-white/40 hover:text-white/70 text-xs font-bold underline underline-offset-4 pt-1">
                    {t.forgot}
                  </button>
                )}
                {mode === 'reset' && (
                  <button type="button" onClick={() => { setMode('verify'); setError(''); setPin(''); setPassword(''); }} className="text-white/40 hover:text-white/70 text-xs font-bold underline underline-offset-4 pt-1">
                    {t.back}
                  </button>
                )}
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/** "Change PIN" card for inside the dashboard (current PIN → new PIN). */
export function ParentPinChange({ lang }: { lang: 'el' | 'en' }) {
  const t = TEXT[lang];
  const L = lang === 'el'
    ? { title: 'ΓΟΝΕΪΚΟ PIN', desc: 'Άλλαξε το PIN με το οποίο ανοίγει αυτός ο πίνακας.', current: 'Τρέχον PIN', done: 'Το PIN άλλαξε.', btn: 'ΑΛΛΑΓΗ PIN' }
    : { title: 'PARENT PIN', desc: 'Change the PIN that opens this dashboard.', current: 'Current PIN', done: 'PIN changed.', btn: 'CHANGE PIN' };
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState('');
  const [next, setNext] = useState('');
  const [next2, setNext2] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (!PIN_RE.test(next)) { setMsg({ ok: false, text: t.badPin }); return; }
    if (next !== next2) { setMsg({ ok: false, text: t.mismatch }); return; }
    setBusy(true);
    const r = await parentPinRequest({ action: 'change', pin: cur, newPin: next });
    setBusy(false);
    if (r.ok) { setMsg({ ok: true, text: L.done }); setCur(''); setNext(''); setNext2(''); setOpen(false); return; }
    const c = r.data?.code;
    setMsg({ ok: false, text: c === 'locked' ? t.locked(r.data.minutes || 15) : c === 'wrong_pin' ? t.wrongPin(r.data.attemptsLeft ?? 0) : t.generic });
    setCur('');
  };

  const field = (v: string, set: (s: string) => void, ph: string) => (
    <input type="password" inputMode="numeric" pattern="[0-9]*" maxLength={6} autoComplete="off" value={v}
      onChange={(e) => set(e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder={ph} aria-label={ph}
      className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-black tracking-[0.4em] placeholder:tracking-normal placeholder:font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 text-center" />
  );

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-sm font-black text-white/80 uppercase tracking-wider mb-2 flex items-center gap-2">
        <KeyRound size={16} /> {L.title}
      </h3>
      <p className="text-white/40 text-xs mb-4">{L.desc}</p>
      {!open ? (
        <div className="flex items-center gap-3 flex-wrap">
          <button type="button" onClick={() => { setOpen(true); setMsg(null); }} className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-black uppercase hover:bg-white/10">{L.btn}</button>
          {msg && <span className={`text-xs font-bold ${msg.ok ? 'text-emerald-400' : 'text-red-400'}`}>{msg.text}</span>}
        </div>
      ) : (
        <form onSubmit={submit} className="grid sm:grid-cols-3 gap-3 max-w-xl">
          {field(cur, setCur, L.current)}
          {field(next, setNext, t.newPin)}
          {field(next2, setNext2, t.pinAgain)}
          {msg && <p className={`sm:col-span-3 text-xs font-bold ${msg.ok ? 'text-emerald-400' : 'text-red-400'}`} role="alert">{msg.text}</p>}
          <div className="sm:col-span-3 flex gap-2">
            <button type="submit" disabled={busy || cur.length < 4 || next.length < 4} className="px-4 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-white text-xs font-black uppercase disabled:opacity-50 flex items-center gap-2">
              {busy ? <Loader2 size={14} className="animate-spin" /> : null} {t.save}
            </button>
            <button type="button" onClick={() => { setOpen(false); setMsg(null); }} className="px-4 py-2.5 text-white/50 text-xs font-bold">{t.back}</button>
          </div>
        </form>
      )}
    </div>
  );
}
