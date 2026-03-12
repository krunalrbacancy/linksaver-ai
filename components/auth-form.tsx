import { SubmitButton } from "@/components/submit-button";

type AuthFormProps = {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  error?: string;
  message?: string;
};

export function AuthForm({ action, submitLabel, error, message }: AuthFormProps) {
  return (
    <form action={action} className="mt-8 space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">
          Password
        </label>
        <input
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400"
          id="password"
          name="password"
          type="password"
          placeholder="Minimum 6 characters"
          minLength={6}
          required
        />
      </div>
      {error ? (
        <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}
      {message ? (
        <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {message}
        </p>
      ) : null}
      <SubmitButton className="w-full rounded-2xl bg-sky-400 px-4 py-3 font-medium text-slate-950 hover:bg-sky-300">
        {submitLabel}
      </SubmitButton>
    </form>
  );
}
