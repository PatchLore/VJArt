# 📝 Blog System Guide

## Overview

A complete markdown-based blog system has been added to the VJ Art website. The blog allows Veronica to easily add new posts by creating markdown files in the `/content/posts/` directory.

## 🎯 Features

- ✅ Markdown-based content with frontmatter
- ✅ Dynamic routing for blog listing and individual posts
- ✅ Tag filtering system
- ✅ SEO-optimized with metadata
- ✅ RSS feed at `/feed.xml`
- ✅ Styled with Tailwind Typography matching the gold/cream/charcoal theme
- ✅ Responsive design
- ✅ Featured post support

## 📁 File Structure

```
vjj-art-portfolio/
├── content/
│   └── posts/                    # Blog posts directory
│       ├── evening-light-sussex.md
│       ├── venetian-sunrise.md
│       └── crocuses-in-mums-cup.md
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual post page
│   │   └── feed/
│   │       └── route.ts          # RSS feed endpoint
│   ├── components/
│   │   └── blog/
│   │       ├── BlogList.tsx      # Blog listing component
│   │       └── BlogPost.tsx      # Individual post component
│   └── lib/
│       └── posts.ts              # Utility functions for reading posts
```

## ✍️ Creating a New Blog Post

1. Create a new markdown file in `/content/posts/` with a descriptive filename (e.g., `my-new-post.md`)

2. Add frontmatter at the top of the file:

```yaml
---
title: "Your Post Title"
date: "2025-11-06"
excerpt: "A brief description of your post that appears in the blog listing..."
cover: "/images/your-image.jpg"
tags: ["tag1", "tag2", "tag3"]
featured: false  # Set to true to mark as featured
---
```

3. Write your content in Markdown below the frontmatter:

```markdown
Your blog post content goes here. You can use:

- **Bold text**
- *Italic text*
- Headers (# H1, ## H2, etc.)
- Lists
- Links
- Images
- And more!
```

### Frontmatter Fields

- **title** (required): The post title
- **date** (required): Publication date in YYYY-MM-DD format
- **excerpt** (required): Short description shown in blog listing
- **cover** (optional): Path to featured image (relative to `/public`)
- **tags** (optional): Array of tags for categorization
- **featured** (optional): Boolean to mark as featured post

## 🎨 Styling

The blog uses Tailwind Typography with custom styling that matches the VJ Art theme:

- **Colors**: Gold (#d4af37) for links and accents, cream background, charcoal text
- **Typography**: Playfair Display for headings, Lora for body text
- **Prose styling**: Custom CSS in `globals.css` for blog content

## 🔗 Routes

- `/blog` - Blog listing page with all posts
- `/blog/[slug]` - Individual post page (slug is the filename without .md)
- `/feed.xml` - RSS feed for blog posts

## 📡 RSS Feed

The RSS feed is automatically generated at `/feed.xml` and includes:
- All blog posts
- Post metadata (title, date, excerpt, tags)
- Full post content
- Cover images

## 🏷️ Tag Filtering

Users can filter posts by tags using the tag filter bar on the blog listing page. Tags are automatically extracted from all posts.

## 🎯 Featured Posts

Posts can be marked as featured by setting `featured: true` in the frontmatter. Featured posts display a "Featured" badge in the blog listing.

## 🚀 Deployment

The blog system works with static site generation:

1. All posts are read at build time
2. Static pages are generated for each post
3. The RSS feed is generated dynamically

### Vercel Deployment

No special configuration needed. The blog will work automatically when deployed to Vercel.

## 📝 Example Post

See `/content/posts/evening-light-sussex.md` for a complete example of a blog post.

## 🔧 Technical Details

### Dependencies Added

- `gray-matter` - Parse frontmatter from markdown files
- `remark` - Markdown processor
- `remark-html` - Convert markdown to HTML
- `@tailwindcss/typography` - Typography plugin for Tailwind

### Key Functions

- `getAllPosts()` - Get all blog posts sorted by date
- `getPostBySlug(slug)` - Get a single post by slug
- `getAllTags()` - Get all unique tags from all posts
- `getPostsByTag(tag)` - Get posts filtered by tag

## 🎨 Customization

### Changing Blog Colors

Edit the prose styling in `/src/app/globals.css`:

```css
.prose a {
  color: var(--color-gold); /* Change link color */
}
```

### Changing Layout

Edit the components in `/src/components/blog/`:
- `BlogList.tsx` - Blog listing layout
- `BlogPost.tsx` - Individual post layout

## 📚 Next Steps

1. Add more blog posts to `/content/posts/`
2. Customize the styling if needed
3. Add featured post section to homepage (optional)
4. Consider adding MDX support for embedded components (optional)

## 🐛 Troubleshooting

### Posts not showing up

- Check that the markdown file is in `/content/posts/`
- Verify the frontmatter is correctly formatted (YAML syntax)
- Ensure the file has a `.md` extension
- Check the date format is YYYY-MM-DD

### Images not loading

- Ensure image paths in `cover` field are relative to `/public`
- Example: `/images/my-image.jpg` refers to `/public/images/my-image.jpg`

### RSS feed not working

- Check that `/feed.xml` is accessible
- Verify `NEXT_PUBLIC_SITE_URL` environment variable is set (or defaults to https://vjjart.com)

## 📞 Support

For issues or questions about the blog system, refer to the code comments in:
- `/src/lib/posts.ts` - Post utility functions
- `/src/components/blog/` - Blog components
- `/src/app/blog/` - Blog pages

