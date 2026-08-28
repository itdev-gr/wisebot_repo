import type { CapacitorConfig } from '@capacitor/cli';

// Remote-URL shell: the app loads wisebot.gr directly, so web deploys update the
// app instantly and the API sees a normal same-site origin (no CORS changes).
// Apple guideline 4.2 (minimum functionality) dislikes THIN wrappers — before
// submission we add native value (splash, status bar, push later) and revisit
// bundling the web build locally if review pushes back.
const config: CapacitorConfig = {
  appId: 'gr.wisebot.academy',
  appName: 'WiseBot Academy',
  webDir: 'www',
  backgroundColor: '#0B0F1A',
  server: {
    url: 'https://wisebot.gr',
    allowNavigation: ['wisebot.gr', '*.wisebot.gr'],
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0B0F1A',
  },
};

export default config;
