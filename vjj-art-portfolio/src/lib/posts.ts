import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  cover: string
  tags: string[]
  featured?: boolean
  content: string
  contentHtml?: string
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Process markdown content to HTML
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    tags: data.tags || [],
    featured: data.featured || false,
    content,
    contentHtml,
  }
}

export async function getAllPosts(featuredOnly: boolean = false): Promise<Post[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      return post
    })
  )

  // Filter out null posts and filter by featured if needed
  const validPosts = posts.filter((post): post is Post => post !== null)
  
  const filteredPosts = featuredOnly
    ? validPosts.filter((post) => post.featured)
    : validPosts

  // Sort posts by date in descending order (newest first)
  return filteredPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllTags(): string[] {
  const slugs = getAllPostSlugs()
  const allTags = new Set<string>()

  slugs.forEach((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach((tag: string) => allTags.add(tag))
      }
    }
  })

  return Array.from(allTags).sort()
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

