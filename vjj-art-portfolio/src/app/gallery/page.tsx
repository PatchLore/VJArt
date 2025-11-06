"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { artworks } from "@/data/artworks"

const GalleryPage = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  // Map our artworks to the format expected by the gallery
  const galleryArtworks = artworks.map(art => ({
    ...art,
    medium: art.medium || "Oil on Canvas",
    year: art.year || 2024,
    dimensions: art.dimensions || "24\" x 30\"",
    category: art.category || "landscape"
  }))

  const categories = [
    { id: "all", name: "All Works" },
    { id: "landscape", name: "Landscape" },
    { id: "still-life", name: "Still Life" },
  ]

  const filteredArtworks = galleryArtworks.filter(
    (artwork) => filter === "all" || artwork.category === filter
  )

  const openLightbox = (artwork: any) => {
    setSelectedArtwork(artwork)
  }

  const closeLightbox = () => {
    setSelectedArtwork(null)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A collection of original oil paintings capturing moments of light, beauty, and quiet reflection in landscapes and still life.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category.id
                    ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(artwork)}
                  tabIndex={0}
                >
                  <div className="border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-md overflow-hidden">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:brightness-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <ZoomIn size={24} className="text-gray-900" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                        <p className="text-sm opacity-90">{artwork.medium}, {artwork.year}</p>
                        {artwork.price && (
                          <p className="text-sm font-semibold text-yellow-400">
                            £{artwork.price.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto relative bg-gray-100">
                  <Image
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
                    {selectedArtwork.title}
                  </h2>
                  <div className="space-y-2 mb-6 text-gray-600">
                    <p><strong>Medium:</strong> {selectedArtwork.medium}</p>
                    <p><strong>Year:</strong> {selectedArtwork.year}</p>
                    <p><strong>Dimensions:</strong> {selectedArtwork.dimensions}</p>
                    {selectedArtwork.price && (
                      <p><strong>Price:</strong> £{selectedArtwork.price.toLocaleString()}</p>
                    )}
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md">
                      Inquire About This Piece
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 p-2 rounded-md">
                      <Heart size={20} />
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 p-2 rounded-md">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryPage

