# Antesevic Studio Website

Production-ready Next.js 14 editorial photography site with:

- App Router + TypeScript + Tailwind + Framer Motion
- Supabase (content + auth)
- Cloudflare R2 signed uploads
- Zod + React Hook Form validation
- Rate limiting + honeypot spam protection
- Hidden admin login + dashboard moderation

## Run Locally

```bash
npm install
npm run dev
```

## Required Environment Variables

Create `.env.local` and add:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_ENDPOINT=

RESEND_API_KEY=
CONTACT_RECEIVER_EMAIL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

STORAGE_LIMIT_GB=500
STORAGE_WARNING_GB=300
STORAGE_BLOCK_GB=450
SIMULATED_STORAGE_GB=120
```

## Supabase Setup

Run SQL from `supabase/schema.sql` in your Supabase SQL editor.

Create one admin user in Supabase Auth (email+password), then log in via:

- `/admin-login`

## Cloudflare R2 Setup

1. Create an R2 bucket.
2. Create an API token with object read/write for that bucket.
3. Set `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_ENDPOINT`.
4. Uploads use signed URLs generated at `POST /api/generate-upload-url`.

## Important Security Notes

- Never expose R2 secrets in the frontend.
- Dashboard and `/api/admin/*` are middleware-protected.
- Public review submission is rate-limited and honeypot-protected.
- Input validation is performed with Zod across APIs.

## Deployment

Deploy to Vercel and connect your custom domain in Vercel project settings.

## Full Client Documentation

Detailed setup, deployment, operations, security, and cost control guide:

- `docs/DEPLOYMENT_AND_OPERATIONS_GUIDE.md`
