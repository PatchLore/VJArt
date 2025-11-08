export interface Artwork {
  slug: string
  title: string
  image: string
  description: string
  tags?: string[]
  year?: string
  medium?: string
  size?: string
}

export const artworks: Artwork[] = [
  {
    slug: "evening-light-in-sussex",
    title: "Evening Light in Sussex",
    image: "/images/sussex.jpg",
    description:
      "A quick plein air study under fading light in West Sussex, capturing the golden hour as it transforms the landscape.",
    tags: ["plein air", "landscape", "oil"],
  },
  {
    slug: "venetian-sunrise",
    title: "Venetian Sunrise",
    image: "/images/IMG_4741.jpg",
    description:
      "Soft morning light reflects on the Venetian lagoon, evoking peace and stillness.",
    tags: ["travel", "landscape", "oil"],
  },
  {
    slug: "san-giorgio-reflections",
    title: "San Giorgio Reflections",
    image: "/images/IMG_4745.jpg",
    description:
      "The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.",
    tags: ["travel", "architecture", "oil"],
  },
  {
    slug: "evening-cafe-paris",
    title: "Evening Café, Paris",
    image: "/images/IMG_6431.jpg",
    description:
      "A cozy Parisian café bathed in golden light — a quiet moment of city life.",
    tags: ["city", "nocturne", "oil"],
  },
  {
    slug: "crocuses-in-mums-cup",
    title: "Crocuses in Mum's Cup",
    image: "/images/IMG_6519.jpg",
    description:
      "Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.",
    tags: ["still life", "flowers", "oil"],
  },
]
