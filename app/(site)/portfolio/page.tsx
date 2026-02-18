import Image from "next/image";
import Link from "next/link";
import { getGalleries } from "@/lib/data";

export default async function PortfolioPage() {
  const galleries = await getGalleries();

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-8xl">
        <h1 className="mb-10 font-serif text-5xl">Portfolio</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/portfolio/${gallery.slug}`}
              className="group border border-border bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={gallery.cover_image}
                  alt={gallery.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/45" />
              </div>
              <div className="p-4">
                <h2 className="font-serif text-2xl">{gallery.title}</h2>
                <p className="text-sm text-muted">{gallery.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
