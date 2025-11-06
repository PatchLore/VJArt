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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tag Filter Bar */}
      {allTags.length > 0 && (
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-md text-sm font-body transition-colors ${
                selectedTag === null
                  ? "bg-gold text-white"
                  : "bg-white border border-gold text-brown hover:bg-gold/10"
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-md text-sm font-body transition-colors ${
                  selectedTag === tag
                    ? "bg-gold text-white"
                    : "bg-white border border-gold text-brown hover:bg-gold/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {post.featured && (
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-brown-soft bg-cream px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-display text-brown mb-2 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-brown-soft text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-brown-soft">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-gold text-sm font-body group-hover:text-gold-dark transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-brown-soft text-lg">No posts found for this tag.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList

