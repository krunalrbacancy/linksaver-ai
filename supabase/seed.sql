-- Seed development links for an existing authenticated user.
-- Run this after creating at least one user in Supabase Auth.

begin;

select set_config(
  'request.jwt.claim.sub',
  (select id::text from auth.users order by created_at asc limit 1),
  true
);

insert into public.links (user_id, title, url)
values
  (auth.uid(), 'Next.js Docs', 'https://nextjs.org/docs'),
  (auth.uid(), 'Supabase Docs', 'https://supabase.com/docs'),
  (auth.uid(), 'Tailwind CSS Docs', 'https://tailwindcss.com/docs'),
  (auth.uid(), 'React Docs', 'https://react.dev'),
  (auth.uid(), 'GitHub', 'https://github.com'),
  (auth.uid(), 'Vercel', 'https://vercel.com');

commit;
