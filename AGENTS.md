# AGENTS.md — Octopuzz institutional site

## Stack
- **Frontend:** React 18 + Vite 6 + Tailwind CSS (shadcn/ui), React Router, TanStack Query, Framer Motion
- **Backend:** None in this repo. All data comes from an **external self-hosted Supabase** at `https://supabase.octopuzz.com.br` (Postgres + PostgREST + Storage). The logo and some images are also served from Supabase Storage.

## Environment
- `VITE_SUPABASE_URL` — public Supabase URL (`https://supabase.octopuzz.com.br`), set in `.env.base44-defaults`.
- `VITE_SUPABASE_ANON_KEY` — Supabase anon/public key. **Secret** — provided via the platform secrets store (`/run/base44/app.env`). A placeholder in `.env.base44-defaults` lets the app boot; the real key is needed for blog/cases/contact to function.

## Architecture notes
- `src/lib/supabaseClient.js` creates the Supabase client at module load using `import.meta.env`. If both env vars are missing, `createClient` throws and the **entire app crashes** (all pages import entities transitively via `App.jsx`). A placeholder key is enough to boot.
- `src/lib/supabaseEntity.js` wraps Supabase tables (`blog_post`, `case_study`, `contact`) in a `makeEntityClient` factory that mimics the old Base44 Entity API (`list/filter/get/create/update/delete`).
- `src/entities/*.js` — one file per table, each calling `makeEntityClient('table_name')`.
- No admin panel — blog posts and cases are managed directly in Supabase Studio.

## Running locally (Base44 sandbox)
- `docker compose -f docker-compose.base44.yml up -d` — starts Vite dev server on port 3000 (mapped to container port 5173), bind-mounted from source with live reload.
- Vite binds `0.0.0.0` and uses `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` (set by the platform) for host allowlisting.

## Build
- `npm run build` — production build (not used in dev; the sandbox runs the dev server).
