import { notFound } from "next/navigation";
import { getGalleryBySlug } from "@/lib/data";
import { PortfolioLightbox } from "@/components/site/portfolio-lightbox";

export default async function GalleryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { gallery, images } = await getGalleryBySlug(params.slug);
  if (!gallery) {
    notFound();
  }

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-8xl">
        <h1 className="font-serif text-5xl">{gallery.title}</h1>
        <p className="mb-10 mt-2 text-muted">{gallery.date}</p>
        <PortfolioLightbox images={images.map((item) => item.image_url)} />
      </div>
    </section>
  );
}
