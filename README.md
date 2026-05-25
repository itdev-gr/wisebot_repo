<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1F1SRtNdbLX_qSnK3GydfFHKNEN1lFY_4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Admin login configuration

The `/admin` panel authenticates against server-side environment variables:

- `ADMIN_EMAIL` and `ADMIN_PASSWORD` for the primary admin account
- `ADMIN_CREDENTIALS` for additional accounts, using either:
  - `email:password` entries separated by commas or new lines
  - JSON such as `[{"email":"test@wisebot.local","password":"admin"}]`
- `ADMIN_SECRET` for signing the admin session token

If `https://wisebot.gr/admin` rejects `test@wisebot.local` / `admin`, update the production Vercel environment so those values are present in `ADMIN_EMAIL` / `ADMIN_PASSWORD`, or add them to `ADMIN_CREDENTIALS`, then redeploy.
