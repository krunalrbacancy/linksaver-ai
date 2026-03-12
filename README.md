# LinkSaver

Small SaaS-style link manager built with Next.js App Router, Supabase Auth, Supabase PostgreSQL, and Tailwind CSS.

## Features

- Email/password sign up and login
- Protected `/dashboard` route
- Add and delete saved links
- Supabase Row Level Security so users only access their own rows

## 1. Install dependencies

```bash
npm install
```

If you hit a client-side Next.js runtime error after changing dependencies or branch state, clear the build cache first:

```bash
npm run clean
```

## 2. Set Supabase environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can copy the example file first:

```bash
cp .env.example .env.local
```

## 3. Create the database table and RLS policies

Open the Supabase SQL Editor and run the SQL from [supabase/schema.sql](/home/bacancy/Krunal/Codex/linksaver-ai/supabase/schema.sql).

This creates:

- `links` table
- `id`, `user_id`, `title`, `url`, `created_at` fields
- row level security policies for `select`, `insert`, and `delete`

## 4. Configure Supabase Auth

In your Supabase project:

- Go to `Authentication` -> `Providers`
- Ensure `Email` provider is enabled
- Use email/password signups

## 5. Run the project locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

Optional quality checks:

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
components/
lib/supabase/
supabase/
```
