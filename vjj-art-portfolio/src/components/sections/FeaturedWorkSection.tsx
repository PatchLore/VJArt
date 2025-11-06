"use client"

import { useState } from "react"
import Lightbox from "@/components/ui/Lightbox"

const FeaturedWorkSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState("")
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const featuredWork = {
    id: 1,
    title: "Morning Mist, Ashdown Forest",
    category: "Oil on Canvas",
    description: "Painted on location during an early spring morning with the Sussex Group of Artists. The mist was lifting slowly, revealing the layers of trees in the distance. This piece captures the quiet beauty of the forest awakening.",
    date: "March 2024",
    dimensions: "24\" x 18\"",
    frame: "Hand-finished oak frame",
    status: "Available",
    price: 520,
    location: "Ashdown Forest, East Sussex",
    group: "Sussex Group of Artists",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
  }

  const openLightbox = (imageUrl: string, alt: string) => {
    setLightboxImage(imageUrl)
    setLightboxAlt(alt)
    setIsLightboxOpen(true)
  }

  return (
    <section className="relative py-20 px-6 bg-cream watercolor-overlay z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-display text-center mb-16 text-brown">
          Featured Work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="cursor-pointer image-zoom"
            onClick={() => openLightbox(featuredWork.image, featuredWork.title)}
          >
            <img
              src={featuredWork.image}
              alt={featuredWork.title}
              className="w-full h-[600px] object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-gold text-white px-4 py-1 text-sm uppercase tracking-wider">
                  {featuredWork.status}
                </span>
                <span className="text-gold-dark text-sm">{featuredWork.category}</span>
              </div>
              <h3 className="text-4xl font-display mb-4 text-brown">
                {featuredWork.title}
              </h3>
            </div>
            
            <p className="text-lg font-body leading-relaxed text-brown-soft">
              {featuredWork.description}
            </p>
            
            <div className="space-y-2 text-brown-soft font-body">
              <p><strong className="text-brown">Completed:</strong> {featuredWork.date}</p>
              <p><strong className="text-brown">Dimensions:</strong> {featuredWork.dimensions}</p>
              <p><strong className="text-brown">Frame:</strong> {featuredWork.frame}</p>
              <p><strong className="text-brown">Location:</strong> {featuredWork.location}</p>
              <p><strong className="text-brown">Painted with:</strong> {featuredWork.group}</p>
              <p className="text-2xl mt-4 font-display text-brown">£{featuredWork.price}</p>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-gold hover:bg-gold-dark text-white font-body text-base tracking-wide transition-colors duration-300">
              Enquire About This Piece
            </button>
          </div>
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

export default FeaturedWorkSection

