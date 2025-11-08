import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif mb-8 text-center">About the Artist</h1>

        <div className="space-y-6 text-lg leading-relaxed font-sans">
          <p>
            My name is <strong>Veronica Johnstone</strong>. I&apos;ve always enjoyed drawing and painting; art was my favourite subject in school. I considered art college, but my parents insisted on a traditional career.
          </p>
          <p>
            I attend evening classes and several part-time courses covering portraiture, still life, life drawing and sculpture. In the mid 1990&apos;s I found enough time to take a two-year part-time course at Croydon Art College which incorporated printing, photography, sculpture and illustration.
          </p>
          <p>
            It wasn&apos;t until later in my life I took a strong interest in landscape painting plein air, and it is something I try to achieve once a week. My progress as an artist led me to join many established art groups and societies.
          </p>
          <p>
            Following my move to West Sussex, I have more recently established membership with Caterham, North Weald, Dorking, Sussex Group of Artists and East Grinstead art groups.
          </p>
          <p>
            I mostly work in oils but do occasionally produce works in Acrylic, Watercolour, Pastel and Charcoal. Although I prefer painting subjects directly from life, I am also open to creating art based on photographs.
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
