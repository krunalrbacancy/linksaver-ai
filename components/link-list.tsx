import { deleteLink } from "@/app/dashboard/actions";
import { SubmitButton } from "@/components/submit-button";

type LinkItem = {
  id: string;
  title: string;
  url: string;
  created_at: string;
};

export function LinkList({
  links,
  error,
}: {
  links: LinkItem[];
  error?: string;
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-sky-950/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Saved links</h2>
          <p className="mt-2 text-sm text-slate-300">
            Only your own links are visible because the table uses RLS.
          </p>
        </div>
        <div className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
          {links.length} total
        </div>
      </div>

      {error ? (
        <p className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      <div className="mt-6 space-y-4">
        {links.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 px-6 py-12 text-center text-sm text-slate-400">
            No links saved yet.
          </div>
        ) : (
          links.map((link) => (
            <article
              key={link.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-white">{link.title}</h3>
                  <a
                    className="mt-2 block truncate text-sm text-sky-300 hover:text-sky-200"
                    href={link.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.url}
                  </a>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {new Date(link.created_at).toLocaleString()}
                  </p>
                </div>
                <form action={deleteLink}>
                  <input name="id" type="hidden" value={link.id} />
                  <SubmitButton className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-200 hover:bg-rose-500/20">
                    Delete
                  </SubmitButton>
                </form>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
