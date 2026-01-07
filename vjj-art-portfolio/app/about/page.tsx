import type { Metadata } from "next"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "About | VJ Art",
  description:
    "Learn about Veronica Johnstone, an oil painter specializing in landscapes and plein air works inspired by light and nature.",
}

export default function AboutPage() {
  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif mb-8 text-center">About the Artist</h1>

        <div className="space-y-6 text-lg leading-relaxed font-sans">
          <p>
            I&apos;m <strong>Veronica Johnstone</strong>, and I&apos;ve been painting for as long as I can remember. Art was always my favourite subject in school, and though life took me on a different path initially, I never stopped drawing and painting.
          </p>
          <p>
            Over the years, I&apos;ve dedicated myself to learning through evening classes and part-time courses. In the mid-1990s, I completed a two-year part-time course at Croydon Art College, where I explored various mediums including portraiture, still life, life drawing, sculpture, printing, photography, and illustration.
          </p>
          <p>
            These days, I&apos;m particularly drawn to painting landscapes outdoors, working directly from life whenever possible. I try to paint plein air at least once a week, capturing the changing light and atmosphere of the places I love.
          </p>
          <p>
            Since moving to West Sussex, I&apos;ve become a member of several local art groups including the Caterham, North Weald, Dorking, Sussex Group of Artists, and East Grinstead art societies. These communities have been wonderful for sharing inspiration and continuing to grow as an artist.
          </p>
          <p>
            I primarily work in oils, though I also enjoy working with acrylics, watercolours, pastels, and charcoal. While I prefer painting directly from life, I also create pieces based on photographs when working outdoors isn&apos;t possible.
          </p>
        </div>

        <hr className="my-10 border-t border-gold/30" />

        <div className="text-center space-y-2">
          <p className="font-semibold uppercase tracking-wide text-sm text-brown/80">Email</p>
          <p>
            <a href="mailto:johnej@btinternet.com" className="text-gold hover:underline">
              johnej@btinternet.com
            </a>
          </p>
          <p className="font-semibold uppercase tracking-wide text-sm text-brown/80">Instagram</p>
          <p>
            <a href="https://www.instagram.com/vjj_art" target="_blank" rel="noreferrer" className="text-gold hover:underline">
              @vjj_art
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
