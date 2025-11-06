"use client"

import Link from "next/link"
import Image from "next/image"
import { Post } from "@/lib/posts"

interface BlogPostProps {
  post: Post
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-gold hover:text-gold-dark mb-8 transition-colors font-body"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-brown-soft bg-cream px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-display text-brown mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-brown-soft text-sm">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Featured Image */}
      {post.cover && (
        <div className="relative w-full h-96 md:h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-charcoal prose-headings:font-display prose-p:text-brown prose-p:font-body prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal prose-blockquote:border-gold prose-blockquote:text-brown-soft"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gold/20">
        <Link
          href="/blog"
          className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-body"
        >
          ← Back to Blog
        </Link>
      </footer>
    </article>
  )
}

export default BlogPost

