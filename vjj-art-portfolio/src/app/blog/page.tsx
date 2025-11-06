import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Veronica Johnstone - Artist Journal",
  description: "Stories from the studio and plein air adventures are coming soon.",
  openGraph: {
    title: "Blog | Veronica Johnstone - Artist Journal",
    description: "Stories from the studio and plein air adventures are coming soon.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-cream text-charcoal text-center px-6 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-display mb-4 text-brown">Artist Journal</h1>
      <div className="w-24 h-[2px] bg-gold mb-6"></div>
      <p className="text-brown-soft max-w-lg mb-4 text-lg">
        Stories from the studio and plein air adventures are coming soon.
      </p>
      <span className="text-gold font-medium">Check back soon for new posts 🎨</span>
    </main>
  )
}

