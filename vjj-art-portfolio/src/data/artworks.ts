export interface Artwork {
  id: number
  title: string
  description: string
  price: number
  image: string
  featured?: boolean
  medium?: string
  year?: number
  dimensions?: string
  category?: string
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Venetian Sunrise",
    description: "Soft morning light reflects on the Venetian lagoon, evoking peace and stillness.",
    price: 180,
    image: "/images/IMG_4741.jpg",
    featured: true,
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: "24\" x 30\"",
    category: "landscape"
  },
  {
    id: 2,
    title: "San Giorgio Reflections",
    description: "The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.",
    price: 180,
    image: "/images/IMG_4745.jpg",
    featured: true,
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: "24\" x 30\"",
    category: "landscape"
  },
  {
    id: 3,
    title: "Crocuses in Mum's Cup",
    description: "Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.",
    price: 180,
    image: "/images/IMG_6431.jpg",
    featured: false,
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: "20\" x 24\"",
    category: "still-life"
  },
  {
    id: 4,
    title: "Evening Café, Paris",
    description: "A cozy Parisian café bathed in golden light — a quiet moment of city life.",
    price: 180,
    image: "/images/IMG_6519.jpg",
    featured: true,
    medium: "Oil on Canvas",
    year: 2024,
    dimensions: "24\" x 30\"",
    category: "landscape"
  }
]

export const featuredArtworks = artworks.filter(art => art.featured)

