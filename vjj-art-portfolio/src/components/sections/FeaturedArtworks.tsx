"use client"

import ResponsiveGallery from "@/components/gallery/ResponsiveGallery"
import { featuredArtworks } from "@/data/artworks"

const FeaturedArtworks = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-brown">
            Featured Works
          </h2>
          <p className="text-lg md:text-xl font-body text-brown-soft max-w-2xl mx-auto">
            A selection of recent paintings that capture moments of light, beauty, and quiet reflection.
          </p>
        </div>
        <ResponsiveGallery artworks={featuredArtworks} featured={true} />
        <div className="text-center mt-12">
          <a 
            href="#gallery" 
            className="inline-block px-8 py-3 bg-gold hover:bg-gold-dark text-white font-body text-base tracking-wide transition-colors duration-300"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArtworks


