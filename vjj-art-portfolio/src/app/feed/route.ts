import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/posts"

export async function GET() {
  const posts = await getAllPosts()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vjjart.com"

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Veronica Johnstone - Artist Journal</title>
    <link>${baseUrl}/blog</link>
    <description>Stories, insights, and updates from artist Veronica Johnstone. Read about painting techniques, plein air adventures, exhibitions, and the inspiration behind the artwork.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${post.contentHtml || ""}]]></content:encoded>
      ${post.cover ? `<enclosure url="${baseUrl}${post.cover}" type="image/jpeg"/>` : ""}
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

