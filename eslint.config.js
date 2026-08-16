import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    // Same exclusions as tsconfig.json, plus build output and the vendored
    // server/ folder (see FIX-PLAN.md — it must not be touched).
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'server/**',
      '.claude/**',
      '.vercel/**',
      'public/**',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // Browser code: components, context, services, App/index/constants.
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2022 },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // The reason this config exists — see FIX-PLAN.md Tier 1. Both are
      // errors, not warnings: at least 8 audited bugs are of exactly this
      // shape, so they must fail a build, not scroll past.
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // 600 of the 655-error baseline are these two. Left as errors they make a
      // clean run impossible, so `lint` could never become a CI gate — and they
      // bury the 22 hook errors that map to actual audited bugs. Still reported,
      // just not fatal. Burn them down separately, not under time pressure.
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  {
    // Serverless functions and build/generation scripts run under Node.
    files: ['api/**/*.ts', 'scripts/**/*.{js,mjs}', '*.config.{js,ts}', 'vite.config.ts'],
    languageOptions: {
      globals: { ...globals.node, ...globals.es2022 },
    },
  },

  {
    // CommonJS scripts — `require` and `__dirname` are correct here.
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node, ...globals.es2022 },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
