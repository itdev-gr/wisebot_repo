import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        // PORT lets a second checkout (git worktree) run alongside the main one.
        port: Number(process.env.PORT) || 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          // 'prompt': the new service worker waits; UpdatePrompt offers the reload instead of
          // the page reloading itself a few seconds after every deploy (mid-book, mid-quiz).
          registerType: 'prompt',
          includeAssets: ['favicon.png'],
          manifest: {
            name: 'WiseBot Academy',
            short_name: 'WiseBot',
            description: 'Η εκπαιδευτική περιπέτεια για παιδιά με AI ήρωες!',
            theme_color: '#0B0F1A',
            background_color: '#0B0F1A',
            display: 'standalone',
            orientation: 'portrait',
            id: '/',
            scope: '/',
            start_url: '/',
            categories: ['education', 'kids', 'games'],
            icons: [
              { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
              { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
              { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
              { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
            ],
          },
          workbox: {
            skipWaiting: false,
            clientsClaim: true,
            navigateFallbackDenylist: [/^\/api\//],
            // ONLY precache app shell — NO images, NO hero assets
            globPatterns: ['**/*.{js,css,html}'],
            // Exclude everything heavy
            globIgnores: [
              '**/audio/**', '**/video/**', '**/images/**',
              '**/*.png', '**/*.jpg', '**/*.webp', '**/*.svg',
              '**/*.mp3', '**/*.mp4', '**/*.woff2',
            ],
            maximumFileSizeToCacheInBytes: 1 * 1024 * 1024, // 1MB limit
            // Runtime caching — load on demand, cache after first use
            runtimeCaching: [
              {
                // Explorer map tiles (OpenStreetMap). A family opens the city on hotel
                // WiFi, then walks it without data: whatever tiles they looked at stay.
                // Tiles almost never change, so CacheFirst; 600 entries ≈ two cities at
                // three zoom levels.
                urlPattern: /^https:\/\/tile\.openstreetmap\.org\/.*\.png$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'map-tiles',
                  expiration: { maxEntries: 600, maxAgeSeconds: 60 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                // Images: load on demand, cache for 30 days
                urlPattern: /\/images\/.+\.(jpg|webp|png)$/,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'image-cache',
                  expiration: { maxEntries: 80, maxAgeSeconds: 30 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                // Audio: cache on first use. .m4a matters as much as .mp3 — the
                // ebook narration by the children is m4a, so with an mp3-only
                // rule the most valuable audio in the product was the only audio
                // never cached: ~850 KB re-fetched on every page turn, and no
                // offline read-along in a PWA.
                urlPattern: /\/audio\/.+\.(mp3|m4a)$/,
                handler: 'CacheFirst',
                options: {
                  // v2: 30/8 — 38 academy narrations were re-voiced in place
                  // (same URLs). CacheFirst would serve the old robotic audio
                  // for up to 30 days; a fresh cache name re-fetches everything.
                  cacheName: 'audio-cache-v2',
                  expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                  // Media elements fetch audio with Range headers. Without this,
                  // a cache hit answers `Range: bytes=X-` with the FULL body as
                  // a 200 — Safari refuses to play that at all, and Android
                  // TV/WebView media stacks misplace the playhead, so the
                  // read-along highlight drifts away from the spoken word from
                  // the second listen onwards (first listen streams from the
                  // network and is fine, which made this look intermittent).
                  rangeRequests: true,
                },
              },
              {
                // Word timings sit next to the narration and are ~3 KB. Kept
                // revalidating rather than CacheFirst so a re-aligned page is
                // picked up without waiting out the audio cache's 30 days.
                // Covers both readers: ebook pages and academy stories.
                urlPattern: /\/audio\/(ebooks|academy)\/.+\.json$/,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'narration-timings',
                  expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                // Local fonts cache
                urlPattern: /\/fonts\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'local-fonts-cache',
                  expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
            ],
          },
        }),
      ],
      css: {
        postcss: {
          plugins: [
            tailwindcss(),
            autoprefixer(),
          ],
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(''),
        'process.env.GEMINI_API_KEY': JSON.stringify('')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id: string) {
              if (id.includes('node_modules')) {
                if (id.includes('/react/') || id.includes('/react-dom/') ||
                    id.includes('/react-router') || id.includes('/scheduler/')) {
                  return 'react-vendor';
                }
                if (id.includes('/framer-motion/')) {
                  return 'framer-motion';
                }
                if (id.includes('/@supabase/')) {
                  return 'supabase';
                }
                if (id.includes('/lucide-react/')) {
                  return 'lucide-icons';
                }
                if (id.includes('/@google/genai')) {
                  return 'google-genai';
                }
              }
            }
          }
        }
      }
    };
});
