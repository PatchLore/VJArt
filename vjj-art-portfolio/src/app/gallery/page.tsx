"use client"

import Image from "next/image"
import Link from "next/link"
import { artworks } from "@/data/artworks"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
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
            <Link href="/#about" className="text-brown hover:text-gold transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <h1 className="text-4xl text-center mb-12 font-serif italic text-brown">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {artworks.map((artwork) => (
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
                {artwork.medium && (
                  <p className="text-xs mt-1 text-brown-soft">{artwork.medium}, {artwork.year}</p>
                )}
                <p className="mt-3 font-semibold text-brown">£{artwork.price} — Unframed</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-8 mt-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 VJ Art — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
