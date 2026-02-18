import { ReviewCard } from "@/components/site/review-card";
import { ReviewFormModal } from "@/components/site/review-form-modal";
import { getApprovedReviews } from "@/lib/data";

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();

  return (
    <section className="section-spacing bg-[linear-gradient(to_bottom,#ffffff_0%,#fafafa_100%)]">
      <div className="mx-auto w-full max-w-8xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">Iskustva klijenata</p>
            <h1 className="font-serif text-5xl">Recenzije</h1>
            <p className="mt-3 max-w-2xl text-muted">
              Utisci ljudi sa kojima smo radili. Svaka recenzija je autenticna i odobrena pre objave.
            </p>
          </div>
          <ReviewFormModal />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {reviews.length === 0 ? (
            <p className="text-muted">Jos nema odobrenih recenzija. Ostavi svoju.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
