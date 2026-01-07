/**
 * Artwork Data
 *
 * This file contains all artwork information displayed on the portfolio website.
 * Each artwork appears in the gallery and can have its own detail page.
 *
 * HOW TO ADD A NEW ARTWORK:
 * 1. Add your image file to the `public/images/` folder
 * 2. Add a new object to the `artworks` array below
 * 3. Required fields:
 *    - slug: URL-friendly version of the title (lowercase, hyphens instead of spaces)
 *      Example: "My New Painting" → "my-new-painting"
 *    - title: The artwork's display name
 *    - image: Path to the image file (relative to `public/` folder)
 *      Example: "/images/my-painting.jpg"
 *    - description: Text that appears on the artwork detail page
 *
 * IMPORTANT:
 * - Slugs must be unique (they're used in URLs like `/gallery/my-slug`)
 * - Image paths should start with "/images/"
 * - Keep descriptions concise but descriptive
 */

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
    description: "A cozy Parisian café bathed in golden light — a quiet moment of city life.",
  },
  {
    slug: "venetian-sunrise",
    title: "Venetian Sunrise",
    image: "/images/venice.jpg",
    description: "Painting the Venetian lagoon at sunrise, where soft morning light breaks through the haze and scatters golden reflections across calm waters.",
  },
  {
    slug: "san-giorgio-reflections",
    title: "San Giorgio Reflections",
    image: "/images/san-giorgio.jpg",
    description: "The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.",
  },
  {
    slug: "crocuses-in-mums-cup",
    title: "Crocuses in Mum's Cup",
    image: "/images/crocuses.jpg",
    description: "Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.",
  },
  {
    slug: "harbour-reflections",
    title: "Harbour Reflections",
    image: "/images/WhatsApp Image 2025-11-09 at 11.53.56 (1).jpeg",
    description: "Red fishing boats reflect against still harbour water, with buildings and sky softened by loose, painterly marks.",
  },
  {
    slug: "fishing-boat-estuary",
    title: "Fishing Boat, Estuary",
    image: "/images/WhatsApp Image 2025-11-09 at 11.53.56 (2).jpeg",
    description: "A working fishing boat sits moored in calm estuary waters, its warm reds contrasting with the soft, pale surroundings.",
  },
  {
    slug: "by-the-rivers-edge",
    title: "By the River's Edge",
    image: "/images/WhatsApp Image 2025-11-09 at 11.53.56 (3).jpeg",
    description: "Figures pause beneath overhanging trees while boats move slowly across the water, suggesting a moment of everyday calm.",
  },
  {
    slug: "boats-at-low-tide",
    title: "Boats at Low Tide",
    image: "/images/WhatsApp Image 2025-11-09 at 11.53.56 (4).jpeg",
    description: "Small boats rest on a shallow harbour floor, with muted tones and reflections capturing the quiet of low tide.",
  },
  {
    slug: "riverside-cottages",
    title: "Riverside Cottages",
    image: "/images/WhatsApp Image 2025-11-10 at 13.34.36.jpeg",
    description: "White cottages sit quietly beside still water, with reflections and foliage creating a peaceful, enclosed scene.",
  },
  {
    slug: "harbour-morning",
    title: "Harbour Morning",
    image: "/images/WhatsApp Image 2025-11-09 at 11.53.56.jpeg",
    description: "Morning light settles over a working harbour, with boats, buildings, and reflections captured in calm, balanced tones.",
  },
  {
    slug: "church-by-the-pond",
    title: "Church by the Pond",
    image: "/images/WhatsApp Image 2025-11-09 at 16.04.58 (1).jpeg",
    description: "Reflections of church and trees shimmer on still water, balancing warm earth tones with cool sky light.",
  },
  {
    slug: "bluebell-wood",
    title: "Bluebell Wood",
    image: "/images/WhatsApp Image 2025-11-09 at 16.04.58 (2).jpeg",
    description: "Tall trees rise from a carpet of bluebells, painted with soft light and a sense of depth and calm.",
  },
  {
    slug: "fox-in-winter-wood",
    title: "Fox in Winter Wood",
    image: "/images/WhatsApp Image 2025-11-09 at 16.04.58 (3).jpeg",
    description: "A fox pauses in a snow-covered woodland, its warm coat contrasting against the cool light and bare trees.",
  },
  {
    slug: "draft-whatsapp-2025-11-09-16-04-58",
    title: "Untitled",
    image: "/images/WhatsApp Image 2025-11-09 at 16.04.58.jpeg",
    description: "Description to be added",
  },
  {
    slug: "vineyard-in-early-autumn",
    title: "Vineyard in Early Autumn",
    image: "/images/WhatsApp Image 2025-11-10 at 12.43.29 (1).jpeg",
    description: "Ordered vineyard rows stretch across the landscape, with warm seasonal colour and distant buildings grounding the scene.",
  },
  {
    slug: "through-the-vines",
    title: "Through the Vines",
    image: "/images/WhatsApp Image 2025-11-10 at 12.43.29.jpeg",
    description: "Autumn foliage frames a vineyard view, with layered colour and texture leading the eye into the distance.",
  },
  {
    slug: "winter-light-on-the-river",
    title: "Winter Light on the River",
    image: "/images/WhatsApp Image 2025-11-10 at 12.43.30 (1).jpeg",
    description: "A cold river moves beneath a pale winter sky, with subtle colour shifts capturing stillness, reflection, and quiet motion.",
  },
  {
    slug: "daffodils-with-painted-vase",
    title: "Daffodils with Painted Vase",
    image: "/images/WhatsApp Image 2025-11-10 at 12.43.30.jpeg",
    description: "Bright daffodils rise from a hand-painted vessel, combining still life with a playful, figurative presence.",
  },
  {
    slug: "old-churchyard-cottage",
    title: "Old Churchyard Cottage",
    image: "/images/WhatsApp Image 2025-11-10 at 13.34.37 (1).jpeg",
    description: "A quiet brick cottage framed by summer greens, with gravestones in the foreground suggesting layers of village history and lived time.",
  },
  {
    slug: "cottages-beneath-the-white-cliffs",
    title: "Cottages beneath the White Cliffs",
    image: "/images/WhatsApp Image 2025-11-10 at 13.34.37.jpeg",
    description: "Coastal cottages sit beneath chalk cliffs and a wide sky, capturing the softness and scale of the English coastline.",
  },
]
