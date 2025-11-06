import type { Metadata } from "next"
import Link from "next/link"
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
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-display mb-6">
              Artist Journal
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stories from the studio, plein air adventures, and the inspiration behind the artwork.
            </p>
          </div>
        </section>

        {/* Blog List */}
        <BlogList posts={posts} allTags={allTags} />
      </main>
      <Footer />
    </div>
  )
}

