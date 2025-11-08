import Header from "@/components/Header"
import { artworks } from "@/lib/artworks"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return artworks.map((art) => ({ slug: art.slug }))
}

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const art = artworks.find((item) => item.slug.toLowerCase() === params.slug.toLowerCase())

  if (!art) {
    return notFound()
  }

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gold shadow-md">
          <Image src={art.image} alt={art.title} fill className="object-cover" priority />
        </div>
        <h1 className="text-3xl font-serif mt-8 mb-4 text-center">{art.title}</h1>
        <p className="text-lg text-brown/80 leading-relaxed text-center">{art.description}</p>
        <div className="mt-8 text-center">
          <a
            href="/gallery"
            className="inline-block px-5 py-2 border border-gold rounded-md hover:bg-gold hover:text-white transition-all duration-300"
          >
            Back to Gallery
          </a>
        </div>
      </section>
    </main>
  )
}
