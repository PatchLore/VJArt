import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
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
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-12 md:mb-16">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gold/30 shadow-lg bg-white/50">
            <Image
              src={art.image}
              alt={art.title}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif mb-4 text-center">
              {art.title}
            </h1>
          </div>

          <div className="pt-4 border-t border-gold/20">
            <p className="text-lg md:text-xl leading-relaxed text-brown/70 text-center max-w-2xl mx-auto">
              {art.description}
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 border border-gold rounded-md text-brown hover:bg-gold hover:text-white transition-colors duration-300 font-medium"
          >
            ← Back to Gallery
          </Link>
        </div>
      </section>
    </main>
  )
}
