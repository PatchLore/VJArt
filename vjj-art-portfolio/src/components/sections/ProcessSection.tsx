"use client"

import { useState } from "react"
import Lightbox from "@/components/ui/Lightbox"

const ProcessSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState("")
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const processPhotos = [
    {
      image: "https://images.unsplash.com/photo-1513364776144-60967b0fcc03?w=800&h=600&fit=crop",
      caption: "Plein air painting session in Ashdown Forest with the Sussex Group of Artists, March 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      caption: "Setting up my easel for a morning session in the Surrey Hills, capturing the early light"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      caption: "Painting alongside fellow members of the Dorking Art Group during our summer meet-up"
    },
    {
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop",
      caption: "Working on a still life composition in my studio, using natural light from the north-facing window"
    }
  ]

  const openLightbox = (imageUrl: string, alt: string) => {
    setLightboxImage(imageUrl)
    setLightboxAlt(alt)
    setIsLightboxOpen(true)
  }

  return (
    <section id="process" className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-display text-center mb-6 text-brown">
          My Process
        </h2>
        <p className="text-xl font-body text-center mb-16 text-brown-soft max-w-3xl mx-auto">
          I try to paint outdoors at least once a week, weather permitting. There's something magical about capturing the landscape directly from life—the changing light, the breeze, the sounds of nature all become part of the painting.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processPhotos.map((photo, idx) => (
            <div 
              key={idx}
              className="cursor-pointer group animate-on-scroll"
              onClick={() => openLightbox(photo.image, photo.caption)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-[300px] object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body">
                    Click to enlarge
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm font-body text-brown-soft italic">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        imageUrl={lightboxImage || ""}
        alt={lightboxAlt}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  )
}

export default ProcessSection




