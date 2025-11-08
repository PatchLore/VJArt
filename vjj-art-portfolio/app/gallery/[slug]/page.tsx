import Header from "@/components/Header"
import { getAllArtworks, getArtworkBySlug } from "@/lib/getArtwork"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getAllArtworks().map((art) => ({ slug: art.slug }))
}

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const art = getArtworkBySlug(params.slug)

  if (!art) {
    return notFound()
  }

  const hasMetadata = art.year || art.medium || art.size || (art.tags && art.tags.length > 0)

  return (
    <main className="min-h-screen bg-cream text-brown">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-gold/70 bg-white shadow-lg">
            <div className="relative aspect-[4/3] w-full">
              <Image src={art.image} alt={art.title} fill className="object-cover" priority />
            </div>
          </div>

          <article className="space-y-6 md:space-y-8">
            <header>
              <h1 className="text-3xl font-serif md:text-4xl">{art.title}</h1>
            </header>
            <p className="text-lg leading-relaxed text-brown/80">{art.description}</p>

            {hasMetadata && (
              <dl className="space-y-3 rounded-xl border border-brown/10 bg-white/70 p-6 shadow-sm">
                {art.year && (
                  <div className="flex justify-between">
                    <dt className="font-semibold text-brown/80">Year</dt>
                    <dd>{art.year}</dd>
                  </div>
                )}
                {art.medium && (
                  <div className="flex justify-between">
                    <dt className="font-semibold text-brown/80">Medium</dt>
                    <dd>{art.medium}</dd>
                  </div>
                )}
                {art.size && (
                  <div className="flex justify-between">
                    <dt className="font-semibold text-brown/80">Dimensions</dt>
                    <dd>{art.size}</dd>
                  </div>
                )}
                {art.tags && art.tags.length > 0 && (
                  <div>
                    <dt className="font-semibold text-brown/80">Themes</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {art.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gold/40 px-3 py-1 text-sm uppercase tracking-wide text-brown/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            )}

            <div>
              <Link
                href="/gallery"
                className="inline-block rounded-full border border-gold px-6 py-2 font-semibold transition-colors duration-300 hover:bg-gold hover:text-white"
              >
                ← Back to Gallery
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
