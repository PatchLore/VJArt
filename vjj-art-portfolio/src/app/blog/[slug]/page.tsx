import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts"
import BlogPost from "@/components/blog/BlogPost"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Veronica Johnstone - Artist Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : [],
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-20 pb-12">
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  )
}

