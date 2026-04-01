/**
 * ErrorBoundary — catches uncaught React render errors
 * ======================================================
 * Wraps the entire app so crashes don't show a blank white screen.
 * Logs errors to /api/log-error for production monitoring.
 */
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  lang?: 'el' | 'en';
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message || 'Unknown error' };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    try {
      fetch('/api/log-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error_message: error.message,
          error_stack: error.stack?.slice(0, 2000),
          component: info.componentStack?.slice(0, 1000),
          page_url: window.location.pathname,
        }),
      }).catch(() => {});
    } catch {}
    console.error('[ErrorBoundary] Caught error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
    window.location.href = '/dashboard';
  };

  render() {
    const { lang = 'el' } = this.props;

    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="text-6xl">🤖</div>
            <h1 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
              {lang === 'el' ? 'Κάτι Πήγε Στραβά' : 'Something Went Wrong'}
            </h1>
            <p className="text-white/50 font-bold text-sm">
              {lang === 'el'
                ? 'Συνέβη ένα απρόσμενο σφάλμα. Η ομάδα μας ειδοποιήθηκε αυτόματα.'
                : 'An unexpected error occurred. Our team has been notified automatically.'}
            </p>
            {this.state.errorMessage && (
              <p className="text-red-400/60 text-xs font-mono bg-white/5 p-3 rounded-xl border border-red-500/20 text-left break-all">
                {this.state.errorMessage.slice(0, 200)}
              </p>
            )}
            <button
              onClick={this.handleReset}
              className="px-8 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform text-sm"
            >
              🏠 {lang === 'el' ? 'Επιστροφή στο Dashboard' : 'Back to Dashboard'}
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
