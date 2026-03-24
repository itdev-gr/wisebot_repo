// @ts-nocheck
// ErrorBoundary requires a class component (React limitation).
// This file uses @ts-nocheck because the project has no @types/react installed.
import React, { ErrorInfo, ReactNode } from 'react';
import { RefreshCcw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  lang?: 'el' | 'en';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const text = {
  el: {
    title: 'Ωχ! Κάτι πήγε στραβά',
    subtitle: 'Μην ανησυχείς, τα δεδομένα σου είναι ασφαλή.',
    retry: 'ΔΟΚΙΜΑΣΕ ΞΑΝΑ',
    home: 'ΑΡΧΙΚΗ',
  },
  en: {
    title: 'Oops! Something went wrong',
    subtitle: "Don't worry, your data is safe.",
    retry: 'TRY AGAIN',
    home: 'HOME',
  },
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const t = text[this.props.lang || 'el'];

      return (
        <div className="flex items-center justify-center min-h-[60vh] animate-in fade-in duration-700 px-4">
          <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-[3rem] p-10 max-w-md w-full text-center space-y-6 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
              <AlertTriangle size={36} className="text-amber-400" />
            </div>

            <div>
              <h2 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">
                {t.title}
              </h2>
              <p className="text-white/40 text-sm font-bold mt-2">
                {t.subtitle}
              </p>
            </div>

            {this.state.error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-left">
                <p className="text-red-400 text-xs font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-[1000] uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all"
              >
                <RefreshCcw size={14} /> {t.retry}
              </button>
              <button
                onClick={() => { this.setState({ hasError: false, error: null }); window.location.hash = '#/dashboard'; }}
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-[1000] uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Home size={14} /> {t.home}
              </button>
            </div>
            <p className="text-white/20 text-[10px] font-bold">
              {(this.props.lang || 'el') === 'el' ? 'Υποστήριξη:' : 'Support:'} <a href="mailto:info@wisebot.gr" className="text-blue-400/50 hover:text-blue-400 underline">info@wisebot.gr</a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
