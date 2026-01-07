import type { Metadata } from "next"
import Header from "@/components/Header"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts"

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

type PostParams = { slug?: string | string[] }

export async function generateMetadata({
  params,
}: {
  params: Promise<PostParams>
}): Promise<Metadata> {
  const resolvedParams = await params
  const rawSlug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams?.slug[0]
    : resolvedParams?.slug
  const slug = rawSlug ? decodeURIComponent(rawSlug).toLowerCase() : undefined

  if (!slug) {
    return {
      title: "Post Not Found | VJ Art",
    }
  }

  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | VJ Art",
    }
  }

  return {
    title: `${post.title} | VJ Art Blog`,
    description: post.excerpt || "",
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<PostParams>
}) {
  const resolvedParams = await params
  const rawSlug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams?.slug[0]
    : resolvedParams?.slug
  const slug = rawSlug ? decodeURIComponent(rawSlug).toLowerCase() : undefined

  if (!slug) {
    return notFound()
  }

  const post = getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-gold hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          {post.featuredImage && (
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1200}
              height={800}
              priority
              className="mb-8 rounded-lg"
            />
          )}
          <h1 className="text-4xl font-serif mb-4">{post.title}</h1>
          {post.date && (
            <p className="text-sm text-brown/60">
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brown prose-p:text-brown/90 prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-brown">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
