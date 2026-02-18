import { redirect } from "next/navigation";
import { DashboardClient } from "@/components/admin/dashboard-client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Gallery, Review, Video } from "@/types/database";

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    redirect("/admin-login");
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/admin-login");
  }

  const [{ data: galleries }, { data: videos }, { data: reviews }] = await Promise.all([
    supabase.from("galleries").select("*").order("date", { ascending: false }),
    supabase.from("videos").select("*").order("created_at", { ascending: false }),
    supabase
      .from("reviews")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false }),
  ]);

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-8xl">
        <h1 className="mb-8 font-serif text-5xl">Kontrolna tabla</h1>
        <DashboardClient
          initialGalleries={(galleries ?? []) as Gallery[]}
          initialVideos={(videos ?? []) as Video[]}
          pendingReviews={(reviews ?? []) as Review[]}
        />
      </div>
    </section>
  );
}
