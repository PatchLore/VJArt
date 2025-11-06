import type { Metadata } from "next"
import { getAllPosts, getAllTags } from "@/lib/posts"
import BlogList from "@/components/blog/BlogList"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Blog | Veronica Johnstone - Artist Journal",
  description: "Stories, insights, and updates from artist Veronica Johnstone. Read about painting techniques, plein air adventures, exhibitions, and the inspiration behind the artwork.",
  openGraph: {
    title: "Blog | Veronica Johnstone - Artist Journal",
    description: "Stories, insights, and updates from artist Veronica Johnstone.",
    type: "website",
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const allTags = getAllTags()

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20 pb-12 bg-cream text-charcoal">
        {/* Header Section */}
        <section className="text-center py-12 px-4 border-b border-gold/20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display mb-4 text-charcoal">
              Artist Journal
            </h1>
            <p className="text-lg text-brown-soft max-w-2xl mx-auto">
              Stories from the studio, plein air adventures, and the inspiration behind the artwork.
            </p>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-8">
          <BlogList posts={posts} allTags={allTags} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

