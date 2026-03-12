import { redirect } from "next/navigation";
import { AddLinkForm } from "@/components/add-link-form";
import { LinkList } from "@/components/link-list";
import { LogoutButton } from "@/components/logout-button";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type LinkItem = {
  id: string;
  title: string;
  url: string;
  created_at: string;
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: links, error } = await supabase
    .from("links")
    .select("id, title, url, created_at")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-sky-950/10 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            LinkSaver Dashboard
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-300">{user.email}</p>
        </div>
        <LogoutButton />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
        <AddLinkForm error={params.error} />
        <LinkList links={(links as LinkItem[] | null) ?? []} error={error?.message} />
      </div>
    </main>
  );
}
