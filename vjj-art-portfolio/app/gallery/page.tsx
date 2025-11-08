import Header from "@/components/Header"
import Image from "next/image"

const artworks: Array<{ title: string; image: string }> = []

export default function Gallery() {
  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <div
            key={art.title}
            className="group border border-transparent hover:border-gold transition-all duration-500 rounded-xl overflow-hidden"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="mt-3 text-center font-serif">{art.title}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
