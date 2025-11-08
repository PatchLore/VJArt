import fs from "fs"
import path from "path"
import { artworks } from "./artworks"
import { normalizeSlug } from "./slug"

let hasValidated = false

function validateArtworkImages() {
  if (hasValidated) return
  hasValidated = true

  if (typeof window !== "undefined" || process.env.NODE_ENV === "production") {
    return
  }

  const publicDir = path.join(process.cwd(), "public")
  const missing: string[] = []

  for (const art of artworks) {
    if (!art.image || art.image.startsWith("http")) continue
    const relativePath = art.image.startsWith("/") ? art.image.slice(1) : art.image
    const filePath = path.join(publicDir, relativePath)
    if (!fs.existsSync(filePath)) {
      missing.push(art.image)
    }
  }

  if (missing.length > 0) {
    console.warn("[artworks] Missing image files:", missing)
  }
}

export function getAllArtworks() {
  validateArtworkImages()
  return artworks
}

export function getArtworkBySlug(slug: string) {
  const key = normalizeSlug(slug)
  return (
    artworks.find((art) => normalizeSlug(art.slug) === key) ||
    artworks.find((art) => normalizeSlug(art.title) === key) ||
    null
  )
}
