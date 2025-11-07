"use client"

import Image from "next/image"
import Link from "next/link"
import { artworks } from "@/data/artworks"

export default function HomePage() {
  // Use featured artworks or fallback to first 4
  const displayedArtworks = artworks.filter(art => art.featured).length > 0 
    ? artworks.filter(art => art.featured) 
    : artworks.slice(0, 4)

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <header className="bg-cream sticky top-0 z-50 border-b-2 border-gold/30">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-serif italic text-brown hover:text-gold transition-colors">
            VJ Art
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-brown hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/gallery" className="text-brown hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link href="#about" className="text-brown hover:text-gold transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-serif italic mb-4 text-brown">VJ Art</h1>
        <p className="text-xl text-brown-soft mb-6">Original Oil Paintings — Inspired by Light, Nature, and Memory</p>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 font-serif italic text-brown">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="group border-2 border-transparent hover:border-gold transition-all duration-300 rounded-md overflow-hidden bg-white shadow-md"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image 
                  src={artwork.image} 
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif italic text-brown">{artwork.title}</h3>
                <p className="text-sm mt-2 text-brown-soft">{artwork.description}</p>
                <p className="mt-3 font-semibold text-brown">£{artwork.price} — Unframed</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 font-serif italic text-brown">About Veronica Johnstone</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-base leading-relaxed space-y-4 text-brown">
            <p>Art has always been my passion. From an early age, drawing and painting were my favourite subjects at school. Although I once considered art college, my parents encouraged me to pursue a more traditional career path. Nevertheless, I continued to study art through evening and part-time courses, exploring portraiture, still life, life drawing, and sculpture.</p>
            <p>In the mid-1990s, I completed a two-year part-time course at Croydon Art College, which introduced me to printing, photography, sculpture, and illustration. Later in life, I developed a deep love for plein air landscape painting — something I now try to practice every week.</p>
            <p>My artistic journey has led me to join several established art societies and groups. Since moving to West Sussex, I've become a member of the Caterham, North Weald, Dorking, Sussex Group of Artists, and East Grinstead art groups.</p>
            <p>I work primarily in oils but also enjoy experimenting with acrylics, watercolour, pastel, and charcoal. While I prefer painting directly from life, I'm equally happy to create work inspired by photographs.</p>
            <div className="mt-6 p-4 bg-cream/50 rounded border border-brown/10">
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:johnej@btinternet.com" className="hover:text-gold transition-colors text-brown">
                  johnej@btinternet.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Instagram:</span>{' '}
                <a href="https://instagram.com/vjj_art" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-brown">
                  @vjj_art
                </a>
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/IMG_4741.jpg" 
              alt="Artist in studio painting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-8 mt-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 VJ Art — All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
