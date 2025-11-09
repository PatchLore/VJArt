import Header from "@/components/Header"
import Image from "next/image"
import { artworks } from "@/lib/artworks"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return artworks.map((art) => ({ slug: art.slug }))
}

type ArtworkParams = { slug?: string | string[] }

export default async function ArtworkPage({ params }: { params: Promise<ArtworkParams> }) {
  const resolvedParams = await params
  const rawSlug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams?.slug[0]
    : resolvedParams?.slug
  const slug = rawSlug ? decodeURIComponent(rawSlug).toLowerCase() : undefined

  if (process.env.NODE_ENV !== "production") {
    console.log("[ArtworkPage] params:", resolvedParams, "resolved slug:", slug)
  }

  if (!slug) {
    return notFound()
  }

  const art = artworks.find((item) => item?.slug?.toLowerCase() === slug)

  if (!art) {
    return notFound()
  }

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gold shadow-md mb-10">
          <Image
            src={art.image}
            alt={art.title}
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif mb-6">{art.title}</h1>
        <p className="text-lg leading-relaxed text-brown/80 max-w-2xl mx-auto">
          {art.description}
        </p>
        <div className="mt-12">
          <a
            href="/gallery"
            className="inline-block px-6 py-2 border border-gold rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
          >
            Back to Gallery
          </a>
        </div>
      </section>
    </main>
  )
}
