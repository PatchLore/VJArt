import type { Metadata } from "next"
import Header from "@/components/Header"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog | VJ Art",
  description: "Thoughts on painting, landscapes, and working directly from life.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif mb-8 text-center">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-center text-brown/70">No posts yet.</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gold/20 pb-8 last:border-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h2 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  {post.date && (
                    <p className="text-sm text-brown/60 mb-4">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  {post.excerpt && (
                    <p className="text-brown/80 leading-relaxed">{post.excerpt}</p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
