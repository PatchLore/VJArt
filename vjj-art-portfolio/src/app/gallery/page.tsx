import Image from "next/image"

const artworks = [
  {
    title: "Sussex Dawn",
    medium: "Oil on linen",
    image: "/images/IMG_4741.jpg",
  },
  {
    title: "Harbour Mist",
    medium: "Oil on panel",
    image: "/images/IMG_4745.jpg",
  },
  {
    title: "Fenland Horizon",
    medium: "Oil on canvas",
    image: "/images/IMG_6431.jpg",
  },
  {
    title: "Golden Meadow",
    medium: "Oil on canvas",
    image: "/images/IMG_6519.jpg",
  },
  {
    title: "Twilight Path",
    medium: "Oil on linen",
    image: "/images/IMG_4741.jpg",
  },
  {
    title: "Sea Lavender",
    medium: "Oil on panel",
    image: "/images/IMG_4745.jpg",
  },
]

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Portfolio</p>
        <h1 className="mt-4 text-4xl font-serif sm:text-5xl">Artworks</h1>
        <p className="mx-auto mt-4 max-w-2xl text-brown/80">
          A curated selection of recent landscape paintings. Each piece is developed from plein air studies, capturing the shifting light and tranquility of the countryside.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {artworks.map((artwork) => (
          <article
            key={artwork.title}
            className="group overflow-hidden rounded-2xl border border-transparent bg-cream shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-gold"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brown/5">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-4 text-center">
              <h2 className="text-lg font-serif text-brown">{artwork.title}</h2>
              <p className="text-sm uppercase tracking-[0.2em] text-brown/60">{artwork.medium}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
