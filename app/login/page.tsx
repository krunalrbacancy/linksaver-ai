import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { createServerSupabaseClient } from "@/lib/supabase/server";

async function login(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/dashboard");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          LinkSaver
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Login</h1>
        <p className="mt-2 text-sm text-slate-300">
          Access your saved links with your email and password.
        </p>
        <AuthForm
          action={login}
          submitLabel="Login"
          error={params.error}
          message={params.message}
        />
        <p className="mt-6 text-sm text-slate-400">
          New here?{" "}
          <Link className="text-sky-300 hover:text-sky-200" href="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
