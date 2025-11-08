import Header from "@/components/Header"
import { artworks } from "@/lib/artworks"
import Image from "next/image"

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const art = artworks.find((item) => item.slug === params.slug)

  if (!art) {
    return (
      <main>
        <Header />
        <section className="py-20 text-center text-brown">
          <p>Artwork not found.</p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-gold shadow-md">
          <Image src={art.image} alt={art.title} fill className="object-cover" />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif text-brown">{art.title}</h1>
          <p className="text-lg leading-relaxed text-brown/80">{art.description}</p>
        </div>
      </section>
    </main>
  )
}
