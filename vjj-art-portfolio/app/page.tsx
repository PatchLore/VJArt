import Header from "@/components/Header"
import { artworks } from "@/lib/artworks"
import Image from "next/image"
import Link from "next/link"

const FEATURED_SLUGS = ["crocuses-in-mums-cup", "venetian-sunrise"]

export default function Home() {
  const featured = artworks.filter((art) => FEATURED_SLUGS.includes(art.slug))

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />

      <section className="px-6 py-20 text-center">
        <h1 className="mb-4 text-4xl font-serif md:text-5xl">
          Landscapes in Oil by Veronica Johnstone
        </h1>
        <p className="text-lg text-brown/80">
          Capturing light, mood, and the quiet poetry of nature.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="mb-6 text-center text-2xl font-serif">Featured Works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((art) => (
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
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-block rounded-full border border-gold px-6 py-2 font-semibold transition-colors duration-300 hover:bg-gold hover:text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </section>
    </main>
  )
}
