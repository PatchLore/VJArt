import Image from "next/image"
import Link from "next/link"

const featuredWorks = [
  {
    title: "Evening Light in Sussex",
    image: "/images/IMG_4741.jpg",
  },
  {
    title: "Quiet Moorland",
    image: "/images/IMG_4745.jpg",
  },
  {
    title: "Winter Hedgerow",
    image: "/images/IMG_6431.jpg",
  },
  {
    title: "Riverbank Reflections",
    image: "/images/IMG_6519.jpg",
  },
  {
    title: "Coastal Breeze",
    image: "/images/IMG_4741.jpg",
  },
  {
    title: "Morning Mist",
    image: "/images/IMG_4745.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="rounded-2xl bg-subtle-texture px-6 py-16 text-center shadow-md sm:px-12">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">Landscape Oil Paintings</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-serif leading-tight text-brown sm:text-5xl">
          Landscapes in Oil by Veronica Johnstone
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brown/80 sm:text-xl">
          Capturing light, mood, and the quiet poetry of nature through patient observation and layered brushwork.
        </p>
        <Link
          href="/gallery"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-brown/20 bg-cream px-6 py-3 text-sm uppercase tracking-[0.2em] text-brown transition-all duration-300 hover:border-gold hover:text-gold"
        >
          Explore the Gallery
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif sm:text-4xl">Featured Works</h2>
          <p className="mt-3 max-w-2xl text-brown/80">
            A glimpse into recent plein air studies and studio paintings, each celebrating the drama of light across the English countryside.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((work) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-2xl border border-transparent bg-cream shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brown/5">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif text-brown">{work.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-brown/10 bg-cream p-8 shadow-md sm:p-12">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div>
            <h2 className="text-3xl font-serif sm:text-4xl">About the Artist</h2>
            <p className="mt-4 text-brown/80">
              Veronica Johnstone paints the landscapes she knows best—rolling downs, wind-carved estuaries, and sunlit hedgerows. Working in oils, she blends classical technique with a contemporary sensitivity to atmosphere and light.
            </p>
            <p className="mt-3 text-brown/80">
              Each canvas begins outdoors, capturing quick impressions of sky and shadow, before evolving into layered studio pieces that invite quiet contemplation.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-brown/20 px-5 py-3 text-sm uppercase tracking-[0.2em] text-brown transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Read More About the Artist
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative ml-auto h-64 w-full overflow-hidden rounded-2xl border border-brown/10 bg-subtle-texture shadow-inner sm:h-full">
            <Image
              src="/images/IMG_6519.jpg"
              alt="Artist studio details"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 400px"
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
