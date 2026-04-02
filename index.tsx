/// <reference types="vite/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './App';
import './index.css';

// ── Sentry error monitoring ───────────────────────────────────────────────────
// Set VITE_SENTRY_DSN in Vercel → Settings → Environment Variables
// Leave empty locally or if you don't have a Sentry project yet.
const sentryDsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    environment: import.meta.env.MODE ?? 'production',
    integrations: [
      Sentry.browserTracingIntegration(),
    ],
    // Capture 10% of performance traces (free tier friendly)
    tracesSampleRate: 0.1,
    // Capture full session replay only on errors
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0,
  });
}
// ─────────────────────────────────────────────────────────────────────────────

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={({ error }) => (
        <div style={{ padding: '2rem', color: '#fff', background: '#0B0F1A', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Κάτι πήγε στραβά / Something went wrong</h2>
          <p style={{ color: '#888', fontSize: '0.85rem' }}>{String(error)}</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '0.6rem 1.5rem', borderRadius: '0.75rem', background: '#7C3AED', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700 }}
          >
            Ανανέωση / Reload
          </button>
        </div>
      )}
    >
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);
