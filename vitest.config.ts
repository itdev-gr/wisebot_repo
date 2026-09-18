import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Standalone config: vite.config.ts carries PWA/prerender plugins and build
// chunking that have no business running under the test runner.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    // .claude/worktrees holds abandoned agent checkouts whose stale copies of
    // real test files otherwise fail a full local run (vite.config already
    // excludes them; this standalone config had missed it).
    exclude: ['**/node_modules/**', 'dist/**', 'server/**', '**/.claude/**'],
  },
});
