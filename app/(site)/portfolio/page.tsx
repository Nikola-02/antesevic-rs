import Image from "next/image";
import Link from "next/link";
import { getGalleries } from "@/lib/data";

export default async function PortfolioPage() {
  const galleries = await getGalleries();

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-8xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Izabrane galerije</p>
        <h1 className="mb-10 font-serif text-5xl">Portfolio</h1>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/portfolio/${gallery.slug}`}
              className="group block"
            >
              <div className="relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[520px]">
                <Image
                  src={gallery.cover_image}
                  alt={gallery.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">{gallery.date}</p>
                  <h2 className="mt-2 font-serif text-[30px] leading-[0.95]">{gallery.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
