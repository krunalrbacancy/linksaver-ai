import { addLink } from "@/app/dashboard/actions";
import { SubmitButton } from "@/components/submit-button";

export function AddLinkForm({ error }: { error?: string }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-sky-950/10">
      <h2 className="text-xl font-semibold text-white">Add a link</h2>
      <p className="mt-2 text-sm text-slate-300">
        Save a URL to your personal dashboard.
      </p>
      <form action={addLink} className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="title">
            Title
          </label>
          <input
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400"
            id="title"
            name="title"
            type="text"
            placeholder="OpenAI Docs"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="url">
            URL
          </label>
          <input
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400"
            id="url"
            name="url"
            type="url"
            placeholder="https://example.com"
            required
          />
        </div>
        {error ? (
          <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            {error}
          </p>
        ) : null}
        <SubmitButton className="w-full rounded-2xl bg-sky-400 px-4 py-3 font-medium text-slate-950 hover:bg-sky-300">
          Save link
        </SubmitButton>
      </form>
    </section>
  );
}
