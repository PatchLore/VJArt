"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Post } from "@/lib/posts"

interface BlogListProps {
  posts: Post[]
  allTags: string[]
}

const BlogList = ({ posts, allTags }: BlogListProps) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Categories Navigation */}
      {allTags.length > 0 && (
        <nav className="mb-12" aria-label="Blog categories">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
                selectedTag === null
                  ? "bg-gold text-white hover:bg-gold-dark shadow-sm"
                  : "bg-white border border-gold text-brown hover:bg-gold hover:text-white hover:border-gold-dark"
              }`}
              aria-pressed={selectedTag === null}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
                  selectedTag === tag
                    ? "bg-gold text-white hover:bg-gold-dark shadow-sm"
                    : "bg-white border border-gold text-brown hover:bg-gold hover:text-white hover:border-gold-dark"
                }`}
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gold/10 hover:border-gold/30"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:rounded-lg"
            >
              <div className="relative h-64 overflow-hidden bg-cream">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider shadow-md">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                {/* Post Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-gold/30 text-brown-soft bg-cream/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Post Title */}
                <h2 className="text-xl font-display text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h2>
                
                {/* Post Date and Tags */}
                <p className="text-sm text-brown-soft mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags.length > 0 && (
                    <span className="mx-2">·</span>
                  )}
                  <span>{post.tags.slice(0, 3).join(" · ")}</span>
                </p>
                
                {/* Post Excerpt */}
                <p className="text-brown-soft text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center">
                  <span className="text-gold text-sm font-body group-hover:text-gold-dark transition-colors duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-brown-soft text-lg">No posts found for this tag.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList

