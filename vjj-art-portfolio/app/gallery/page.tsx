import Header from "@/components/Header"
import { getAllArtworks } from "@/lib/getArtwork"
import Image from "next/image"
import Link from "next/link"

export default function Gallery() {
  const artworks = getAllArtworks()

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-serif">Gallery</h1>
        <p className="mt-4 text-brown/80">
          Explore the complete collection of paintings, sketches, and plein air studies by Veronica Johnstone.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {artworks.map((art) => (
            <Link
              key={art.slug}
              href={`/gallery/${art.slug}`}
              className="group block overflow-hidden rounded-2xl border border-transparent bg-white/70 shadow-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-serif text-lg">{art.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
