import Header from "@/components/Header"

export default function About() {
  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif">About the Artist</h1>
        <p className="text-brown/80">
          Veronica Johnstone paints the English countryside with a focus on light, atmosphere, and quiet moments of reflection.
        </p>
        <p className="text-brown/80">
          Her oil paintings begin with plein air studies before evolving into layered studio pieces that invite slow looking.
        </p>
      </section>
    </main>
  )
}
