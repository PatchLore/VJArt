import Header from "@/components/Header"
import { artworks } from "@/lib/artworks"
import Image from "next/image"
import Link from "next/link"

export default function Gallery() {
  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-serif mb-4">Gallery</h1>
        <p className="text-brown/80">
          Explore the full collection of paintings, still life, and plein air works.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {artworks.map((art) => (
            <Link
              key={art.slug}
              href={`/gallery/${art.slug}`}
              className="group block border border-transparent rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:border-gold hover:shadow-md"
            >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/70">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-3 text-center font-serif">{art.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
