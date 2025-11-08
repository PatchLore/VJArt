import Header from "@/components/Header"

const milestones = [
  {
    year: "2003",
    detail: "Completed classical drawing studies at the Florence Academy of Art and returned home to Sussex inspired by plein air traditions."
  },
  {
    year: "2010",
    detail: "Opened her garden studio to students, hosting seasonal workshops focused on light and colour observation."
  },
  {
    year: "2018",
    detail: 'Solo exhibition "Quiet Horizons" at the Lewes Art Collective, featuring 24 landscape oils from across the South Downs.'
  },
  {
    year: "2024",
    detail: "Residency along the Northumberland coast, developing the coastal dusk series now touring community galleries."
  }
]

const values = [
  "Observation before interpretation - sketches begin outdoors, even in brisk weather.",
  "Layered glazing, natural pigments, and slow drying times for luminous depth.",
  "Stories of place and season shared with collectors to keep each canvas rooted in memory."
]

export default function About() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <header className="text-center space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-brown/60">About Veronica Johnstone</p>
          <h1 className="text-3xl md:text-4xl font-serif">Painting the Quiet Poetry of Landscape</h1>
          <p className="text-brown/80">
            Veronica Johnstone is a British landscape painter whose oil canvases explore the hush that follows sunrise, the glow before rain, and the echoes of footsteps along English footpaths. From her studio near the South Downs she pairs classical technique with contemporary restraint, allowing colour harmonies and atmospheric light to lead each composition.
          </p>
        </header>

        <article className="space-y-6 text-brown/80 leading-relaxed">
          <p>
            Trained in observational drawing and plein air principles, Veronica builds every painting on location studies. Tiny panels carried into fields and estuaries record fleeting light; back in the studio those impressions are layered into larger works that invite viewers to breathe more slowly. Her brushwork alternates between soft, fragrant blends and decisive strokes that anchor hedgerows, riverbanks, and silhouetted trees.
          </p>
          <p>
            Collectors across the UK and abroad know her for compositions that feel intimate yet expansive. Whether translating mist rising over Sussex meadows or moonlight catching Venetian rooftops, she balances classical glazing with subtle modern palettes of ochre, indigo, and violet grey.
          </p>
        </article>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-brown">Studio Practice</h2>
            <ul className="space-y-3 text-brown/80">
              {values.map((value) => (
                <li key={value} className="rounded-xl border border-brown/15 bg-white/60 p-4 text-left shadow-sm">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-brown">Selected Milestones</h2>
            <ul className="space-y-3 text-brown/80">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="rounded-xl border border-brown/15 bg-white/60 p-4 shadow-sm">
                  <p className="font-serif text-brown">{milestone.year}</p>
                  <p>{milestone.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="space-y-4 text-center">
          <p className="text-brown/80">
            Veronica continues to accept commissioned landscape projects and loves collaborating with writers, composers, and local artisans to celebrate place. Studio visits are available by appointment throughout the year.
          </p>
          <p className="text-brown">Email <a href="mailto:studio@vjart.co.uk" className="hover:text-gold">studio@vjart.co.uk</a> to plan a visit or request a catalogue.</p>
        </footer>
      </section>
    </main>
  )
}
