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
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.png'],
          manifest: {
            name: 'WiseBot Academy',
            short_name: 'WiseBot',
            description: 'Η εκπαιδευτική περιπέτεια για παιδιά με AI ήρωες!',
            theme_color: '#0B0F1A',
            background_color: '#0B0F1A',
            display: 'standalone',
            orientation: 'portrait',
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
            skipWaiting: true,
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
                // Audio: cache on first use
                urlPattern: /\/audio\/.+\.mp3$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'audio-cache',
                  expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                // Google Fonts CSS
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'google-fonts-cache',
                  expiration: { maxEntries: 5, maxAgeSeconds: 365 * 24 * 60 * 60 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                // Google Fonts files
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'gstatic-fonts-cache',
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
