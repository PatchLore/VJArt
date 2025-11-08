export interface Artwork {
  slug: string
  title: string
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    slug: "evening-cafe-paris",
    title: "Evening Café, Paris",
    image: "/images/evening-cafe.jpg",
    description:
      "A cozy Parisian café bathed in golden light — a quiet moment of city life.",
  },
  {
    slug: "venetian-sunrise",
    title: "Venetian Sunrise",
    image: "/images/venice.jpg",
    description:
      "Painting the Venetian lagoon at sunrise, where soft morning light breaks through the haze and scatters golden reflections across calm waters.",
  },
  {
    slug: "san-giorgio-reflections",
    title: "San Giorgio Reflections",
    image: "/images/san-giorgio.jpg",
    description:
      "The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.",
  },
  {
    slug: "crocuses-in-mums-cup",
    title: "Crocuses in Mum's Cup",
    image: "/images/crocuses.jpg",
    description:
      "Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.",
  },
]
