export interface Artwork {
  slug: string
  title: string
  image: string
  description: string
}

export const artworks: Artwork[] = [
  {
    slug: "evening-light-in-sussex",
    title: "Evening Light in Sussex",
    image: "/images/sussex.jpg",
    description:
      "A quick plein air study under fading light in West Sussex, capturing the golden hour as it transforms the landscape.",
  },
  {
    slug: "venetian-sunrise",
    title: "Venetian Sunrise",
    image: "/images/venice.jpg",
    description:
      "Painting the Venetian lagoon at sunrise, where soft morning light breaks through the haze and scatters golden reflections across calm waters.",
  },
  {
    slug: "crocuses-in-mums-cup",
    title: "Crocuses in Mum's Cup",
    image: "/images/crocuses.jpg",
    description:
      "A delicate still life featuring fresh crocuses blooming from a floral teacup marked 'Mum,' painted with care and affection.",
  },
]
