# AI Development Rules

Tech Stack

- Next.js App Router
- Supabase authentication
- Supabase PostgreSQL database
- Tailwind CSS

Environment Variables

Never hardcode Supabase URL or keys.

Always use:

NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY

Authentication

Use Supabase email/password authentication.

Architecture

/app
/components
/lib/supabase

Styling

Use Tailwind CSS only.