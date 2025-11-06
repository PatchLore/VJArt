"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "@/components/ui/Lightbox"

interface Artwork {
  id: number
  title: string
  description: string
  price: number
  image: string
  featured?: boolean
}

interface ResponsiveGalleryProps {
  artworks: Artwork[]
  featured?: boolean
}

const ResponsiveGallery = ({ artworks, featured = false }: ResponsiveGalleryProps) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState("")
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const displayArtworks = featured 
    ? artworks.filter(art => art.featured).slice(0, 3)
    : artworks

  const openLightbox = (imageUrl: string, alt: string) => {
    setLightboxImage(imageUrl)
    setLightboxAlt(alt)
    setIsLightboxOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {displayArtworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-md"
            onClick={() => openLightbox(artwork.image, artwork.title)}
            tabIndex={0}
          >
            <div className="border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-md overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display mb-2 tracking-wide text-brown">
                {artwork.title}
              </h3>
              <p className="text-sm text-brown-soft leading-relaxed mb-4 font-body line-clamp-2">
                {artwork.description}
              </p>
              <p className="text-lg font-display text-brown">
                £{artwork.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        imageUrl={lightboxImage || ""}
        alt={lightboxAlt}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  )
}

export default ResponsiveGallery


