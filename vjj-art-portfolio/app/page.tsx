import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { artworks } from "@/lib/artworks"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Landscapes in Oil by Veronica Johnstone
        </h1>
        <p className="text-lg text-brown/80">
          Capturing light, mood, and the quiet poetry of nature.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <Link
            key={art.slug}
            href={`/gallery/${art.slug}`}
            className="group border border-transparent hover:border-gold transition-all duration-500 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative w-full aspect-[4/3]">
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
    </main>
  )
}
