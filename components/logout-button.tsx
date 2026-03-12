import { logout } from "@/app/dashboard/actions";
import { SubmitButton } from "@/components/submit-button";

export function LogoutButton() {
  return (
    <form action={logout}>
      <SubmitButton className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 font-medium text-slate-100 hover:border-slate-600 hover:bg-slate-900">
        Logout
      </SubmitButton>
    </form>
  );
}
