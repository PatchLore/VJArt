export const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\'’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const normalizeSlug = (s: string) => decodeURIComponent(s).toLowerCase()
