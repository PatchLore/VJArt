"use client"

import { useState } from "react"
import Lightbox from "@/components/ui/Lightbox"

interface Artwork {
  id: number
  category: string
  title: string
  categoryLabel: string
  description: string
  price: number
  status: 'Available' | 'Sold'
  dimensions: string
  frame: string
  date: string
  location: string
  group: string
  image: string
  type: 'landscape' | 'still-life' | 'portrait'
}

const GallerySection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState("")
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const artworks: Artwork[] = [
    {
      id: 1,
      category: 'oil',
      title: 'Morning Mist, Ashdown Forest',
      categoryLabel: 'Oil on Canvas',
      description: 'I painted this on location during an early spring morning with the Sussex Group of Artists. The mist was lifting slowly, revealing layers of trees in the distance. I remember how quiet it was—just the sound of birds and my brush on the canvas.',
      price: 520,
      status: 'Available',
      dimensions: '24" x 18"',
      frame: 'Hand-finished oak frame',
      date: 'March 2024',
      location: 'Ashdown Forest, East Sussex',
      group: 'Sussex Group of Artists',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 2,
      category: 'watercolour',
      title: 'Autumn Colours, Dorking Hills',
      categoryLabel: 'Watercolour',
      description: 'A delicate watercolour painted during the Dorking Art Group\'s autumn session. The changing foliage seemed to glow in the soft afternoon light, and I wanted to capture that fleeting moment before the leaves fell.',
      price: 280,
      status: 'Available',
      dimensions: '16" x 12"',
      frame: 'White mount, light wood frame',
      date: 'October 2024',
      location: 'Dorking Hills, Surrey',
      group: 'Dorking Art Group',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 3,
      category: 'oil',
      title: 'Woodland Path, East Grinstead',
      categoryLabel: 'Oil on Board',
      description: 'A peaceful forest scene painted on location. I love how the dappled light filtered through the trees that day. This path is one I walk often, and painting it helped me see it with fresh eyes.',
      price: 380,
      status: 'Sold',
      dimensions: '20" x 16"',
      frame: 'Dark wood frame',
      date: 'August 2024',
      location: 'East Grinstead, West Sussex',
      group: 'East Grinstead Art Group',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 4,
      category: 'pastel',
      title: 'Evening Sky over Surrey Hills',
      categoryLabel: 'Pastel',
      description: 'Soft pastel work capturing the dramatic colours of sunset. I painted this from my studio window one evening, watching the sky change minute by minute. Pastels are perfect for capturing those soft, atmospheric moments.',
      price: 320,
      status: 'Available',
      dimensions: '18" x 14"',
      frame: 'Double mount, simple frame',
      date: 'September 2024',
      location: 'Surrey Hills (from studio)',
      group: 'Caterham Art Group',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 5,
      category: 'acrylic',
      title: 'Still Life with Garden Herbs',
      categoryLabel: 'Acrylic',
      description: 'A vibrant still life study from my kitchen. I gathered fresh herbs from the garden and arranged them in my grandmother\'s ceramic bowl. The morning light streaming through the window created beautiful shadows.',
      price: 295,
      status: 'Available',
      dimensions: '16" x 20"',
      frame: 'Natural wood frame',
      date: 'July 2024',
      location: 'Home studio',
      group: 'North Weald Art Society',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      type: 'still-life'
    },
    {
      id: 6,
      category: 'charcoal',
      title: 'Life Drawing Study',
      categoryLabel: 'Charcoal',
      description: 'An expressive charcoal drawing from one of our evening life drawing sessions. I\'ve been attending these sessions for years, and they help me understand form and light. This particular pose captured a wonderful sense of movement.',
      price: 180,
      status: 'Available',
      dimensions: '12" x 16"',
      frame: 'Simple black frame, white mount',
      date: 'June 2024',
      location: 'Caterham Community Centre',
      group: 'Caterham Art Group',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0fcc03?w=800&h=600&fit=crop',
      type: 'portrait'
    },
    {
      id: 7,
      category: 'oil',
      title: 'Caterham Valley View',
      categoryLabel: 'Oil on Canvas',
      description: 'Plein air landscape painted on location during our Caterham Art Group outing. The valley was bathed in warm afternoon light, and I worked quickly to capture the shadows as they moved across the fields.',
      price: 520,
      status: 'Available',
      dimensions: '22" x 18"',
      frame: 'Traditional gold frame',
      date: 'May 2024',
      location: 'Caterham Valley, Surrey',
      group: 'Caterham Art Group',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 8,
      category: 'watercolour',
      title: 'Coastal Scene, Seaford',
      categoryLabel: 'Watercolour',
      description: 'Light and atmospheric watercolour from a painting day with the Sussex Group. We spent the day at the coast, and the changing weather made for interesting painting conditions. This captures the sea in that soft, hazy light just before a shower.',
      price: 265,
      status: 'Available',
      dimensions: '14" x 10"',
      frame: 'White mount, silver frame',
      date: 'April 2024',
      location: 'Seaford, East Sussex',
      group: 'Sussex Group of Artists',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
      type: 'landscape'
    },
    {
      id: 9,
      category: 'oil',
      title: 'Venetian Sunrise',
      categoryLabel: 'Oil on Canvas',
      description: 'Soft morning light breaks through the haze over the Venetian lagoon, scattering golden reflections across calm waters. This piece captures the quiet poetry of dawn and the timeless beauty of Venice.',
      price: 180,
      status: 'Available',
      dimensions: 'Unframed',
      frame: 'Unframed',
      date: '2024',
      location: 'Venice, Italy',
      group: '',
      image: '/images/IMG_4741.jpg',
      type: 'landscape'
    },
    {
      id: 10,
      category: 'oil',
      title: 'San Giorgio Reflections',
      categoryLabel: 'Oil on Canvas',
      description: 'Inspired by the gentle glow of late afternoon, this painting portrays the magnificent San Giorgio Maggiore across shimmering blue waters. Subtle brushwork and delicate light evoke a peaceful, dreamlike stillness.',
      price: 180,
      status: 'Available',
      dimensions: 'Unframed',
      frame: 'Unframed',
      date: '2024',
      location: 'Venice, Italy',
      group: '',
      image: '/images/IMG_4745.jpg',
      type: 'landscape'
    },
    {
      id: 11,
      category: 'oil',
      title: 'Evening Café, Paris',
      categoryLabel: 'Oil on Canvas',
      description: 'A charming Parisian café scene alive with warmth and atmosphere. The glow of hanging lights contrasts with the cool cobblestones, while a passerby adds a touch of quiet mystery to this nocturnal moment.',
      price: 180,
      status: 'Available',
      dimensions: 'Unframed',
      frame: 'Unframed',
      date: '2024',
      location: 'Paris, France',
      group: '',
      image: '/images/IMG_6431.jpg',
      type: 'landscape'
    },
    {
      id: 12,
      category: 'oil',
      title: 'Crocuses in Mum\'s Cup',
      categoryLabel: 'Oil on Canvas',
      description: 'Fresh crocuses bloom from a floral teacup marked "Mum," painted with care and affection. A tender still life celebrating comfort, memory, and the gentle beauty of everyday life.',
      price: 180,
      status: 'Available',
      dimensions: 'Unframed',
      frame: 'Unframed',
      date: '2024',
      location: 'Home studio',
      group: '',
      image: '/images/IMG_6519.jpg',
      type: 'still-life'
    }
  ]

  const toggleView = (view: 'grid' | 'list') => {
    setViewMode(view)
  }

  const filteredArtworks = artworks.filter(artwork => {
    if (categoryFilter === 'all') return true
    if (categoryFilter === 'landscapes') return artwork.type === 'landscape'
    if (categoryFilter === 'still-life') return artwork.type === 'still-life'
    if (categoryFilter === 'portraits') return artwork.type === 'portrait'
    return artwork.category === categoryFilter
  })

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  const openLightbox = (imageUrl: string, alt: string) => {
    setLightboxImage(imageUrl)
    setLightboxAlt(alt)
    setIsLightboxOpen(true)
  }

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-[60px]" id="gallery">
      <h2 className="text-5xl font-display text-center mb-6 text-brown">
        My Gallery
      </h2>
      <p className="text-xl font-body text-center mb-12 text-brown-soft max-w-3xl mx-auto">
        Each piece tells a story of a place, a moment, or a feeling. I paint what I see and what moves me—the changing light, the quiet beauty of the countryside, the simple elegance of everyday objects.
      </p>

      <div className="flex justify-between items-center mb-10 flex-wrap gap-5">
        <div className="flex gap-4 flex-wrap">
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-5 py-3 border border-gold bg-white text-sm cursor-pointer rounded-sm transition-colors hover:border-[#6B7A4B] font-body"
          >
            <option value="all">All Works</option>
            <option value="landscapes">Landscapes</option>
            <option value="still-life">Still Life</option>
            <option value="portraits">Portraits</option>
          </select>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => toggleView('grid')}
            className={`px-4 py-2 bg-white border border-gold cursor-pointer transition-all rounded-sm font-body ${
              viewMode === 'grid' ? 'bg-gold text-white border-gold' : ''
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => toggleView('list')}
            className={`px-4 py-2 bg-white border border-gold cursor-pointer transition-all rounded-sm font-body ${
              viewMode === 'list' ? 'bg-gold text-white border-gold' : ''
            }`}
          >
            List
          </button>
        </div>
      </div>

      <div className={`grid gap-10 mb-[60px] ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {sortedArtworks.map((artwork) => (
          <div
            key={artwork.id}
            className="bg-white rounded-sm overflow-hidden shadow-md animate-on-scroll group"
            tabIndex={0}
          >
            <div
              className="border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-md overflow-hidden cursor-pointer"
              onClick={() => openLightbox(artwork.image, artwork.title)}
            >
              <div className="w-full h-[300px] relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider ${
                    artwork.status === 'Available' 
                      ? 'bg-gold text-white' 
                      : 'bg-gold-light text-white'
                  }`}>
                    {artwork.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-xs text-[#8B9A6B] uppercase tracking-wider mb-2 font-body">
                {artwork.categoryLabel}
              </div>
              <h3 className="text-lg font-display mb-2 tracking-wide text-brown">
                {artwork.title}
              </h3>
              <p className="text-sm text-brown-soft leading-relaxed mb-4 font-body">
                {artwork.description}
              </p>
              
              <div className="space-y-1 text-xs text-brown-soft font-body mb-5">
                <p><strong className="text-brown">Dimensions:</strong> {artwork.dimensions}</p>
                <p><strong className="text-brown">Frame:</strong> {artwork.frame}</p>
                <p><strong className="text-brown">Location:</strong> {artwork.location}</p>
                <p><strong className="text-brown">Date:</strong> {artwork.date}</p>
                {artwork.group && (
                  <p><strong className="text-brown">Painted with:</strong> {artwork.group}</p>
                )}
              </div>
              
              <div className="flex justify-between items-center pt-5 border-t border-gray-100">
                <span className="text-lg font-display text-brown">
                  £{artwork.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    alert(`Thank you for your interest in "${artwork.title}". Please email me at johnej@btinternet.com to enquire about this piece.`)
                  }}
                  className="px-6 py-2 bg-gold text-white text-xs uppercase tracking-wider transition-colors hover:bg-gold-dark font-body"
                >
                  Enquire About This Piece
                </button>
              </div>
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
    </div>
  )
}

export default GallerySection
