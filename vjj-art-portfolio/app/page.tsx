import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { artworks } from "@/lib/artworks"

const FEATURED_SLUGS = ["evening-cafe-paris", "venetian-sunrise", "crocuses-in-mums-cup"]

export default function Home() {
  const featured = artworks.filter((art) => FEATURED_SLUGS.includes(art.slug))

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />

      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Landscapes in Oil by Veronica Johnstone
        </h1>
        <p className="text-lg text-brown/80 mb-12">
          Capturing light, mood, and the quiet poetry of nature.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featured.map((art) => (
          <Link
            key={art.slug}
            href={`/gallery/${art.slug}`}
            className="group block border border-transparent rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:border-gold hover:shadow-md"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
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
      </section>

      <div className="text-center pb-20">
        <Link
          href="/gallery"
          className="inline-block px-6 py-2 border border-gold rounded-md text-brown hover:bg-gold hover:text-white transition-colors duration-300"
        >
          View Full Gallery →
        </Link>
      </div>
    </main>
  )
}
