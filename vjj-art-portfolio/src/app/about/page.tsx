import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <article className="space-y-12">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Artist Statement</p>
        <h1 className="mt-4 text-4xl font-serif sm:text-5xl">About the Artist</h1>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6 text-lg leading-relaxed text-brown/85">
          <p>
            Veronica Johnstone is a British painter devoted to the lyricism of landscape. Her canvases begin with brisk plein air sketches made as light shifts across the Downs, before expanding into layered studio works that explore atmosphere and memory.
          </p>
          <p>
            Working primarily in oils, Veronica favours natural pigments, linen grounds, and slow, deliberate brushwork. Each painting is an invitation to pause, to breathe, and to contemplate the quiet drama of land, sky, and water.
          </p>
          <p>
            Through exhibitions across Sussex and the wider UK, her work has found homes with collectors who seek serenity and authenticity. She continues to teach outdoor painting workshops, encouraging students to embrace patience and presence.
          </p>
          <blockquote className="rounded-2xl border border-gold/30 bg-cream px-6 py-5 text-center font-serif text-xl italic text-brown shadow-md">
            “Painting outdoors teaches patience and presence.”
          </blockquote>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brown/20 px-5 py-3 text-sm uppercase tracking-[0.2em] text-brown transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="relative mx-auto h-96 w-full max-w-md overflow-hidden rounded-2xl border border-brown/10 bg-subtle-texture shadow-md">
          <Image
            src="/images/IMG_6431.jpg"
            alt="Portrait of Veronica Johnstone painting outdoors"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover opacity-95"
          />
        </div>
      </div>
    </article>
  )
}
