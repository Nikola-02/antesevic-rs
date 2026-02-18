import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AdminLoginPage() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      redirect("/dashboard");
    }
  }

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-xl border border-border p-8">
        <h1 className="mb-6 font-serif text-4xl">Admin prijava</h1>
        <AdminLoginForm />
      </div>
    </section>
  );
}
