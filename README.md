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

## 5. Seed development data

Create at least one user first by signing up in the app or from the Supabase dashboard. Then open the Supabase SQL Editor and run the SQL from [supabase/seed.sql](/home/bacancy/Krunal/Codex/linksaver-ai/supabase/seed.sql).

The seed script:

- inserts 6 realistic development links
- uses `auth.uid()` for `user_id`
- works with RLS enabled by setting the JWT subject to an existing auth user before the insert

## 6. Run the project locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

Optional quality checks:

```bash
npm run lint
npm run build
```

## 7. Deploy on Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. In the Vercel project settings, add these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Deploy the project.
5. After deployment, copy your Vercel production URL.
6. In Supabase, go to `Authentication` -> `URL Configuration` and add:

- `Site URL`: `https://linksaver-ai-six.vercel.app`
- `Redirect URLs`: `https://linksaver-ai-six.vercel.app` and preview URLs if you use them

Example:

```text
https://linksaver-ai-six.vercel.app
https://your-app-name-git-branch-your-team.vercel.app
```

7. Redeploy from Vercel if you changed environment variables after the first deployment.

Vercel will automatically run the Next.js build command during deployment.

## Project structure

```text
app/
components/
lib/supabase/
supabase/
```
