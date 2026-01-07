# VJ Art Portfolio Website

A static artist portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This modern, responsive website showcases landscape oil paintings with a clean, elegant design.

## 🎨 Features

- **Static Site**: Fully static website with no backend or database
- **Modern Design**: Clean, contemporary aesthetic with gold, cream, and brown color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Gallery**: Grid layout displaying all artworks with individual detail pages
- **Fast & Simple**: Static generation for optimal performance

## 📄 Pages

- **Homepage**: Hero section with featured artworks and link to full gallery
- **Gallery**: Complete artwork grid with links to individual pieces
- **Artwork Detail**: Individual pages for each artwork (`/gallery/[slug]`)
- **About**: Artist biography and background information
- **Contact**: Contact form with email and Instagram links

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation & Setup

1. **Navigate to the project directory**
   ```bash
   cd vjj-art-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## ✏️ Editing Artworks

All artwork content is managed in a single file: `lib/artworks.ts`

### Adding a New Artwork

1. **Add your image** to the `public/images/` folder (e.g., `my-painting.jpg`)

2. **Edit `lib/artworks.ts`** and add a new entry to the `artworks` array:

```typescript
{
  slug: "my-painting-title",
  title: "My Painting Title",
  image: "/images/my-painting.jpg",
  description: "A brief description of the artwork.",
}
```

**Field descriptions:**
- **slug**: URL-friendly version of the title (lowercase, hyphens instead of spaces)
  - Example: "venetian-sunrise" becomes `/gallery/venetian-sunrise`
- **title**: The artwork's display name
- **image**: Path to the image file (relative to `public/` folder)
- **description**: Text that appears on the artwork detail page

### Updating Featured Artworks

Edit `app/page.tsx` and update the `FEATURED_SLUGS` array:

```typescript
const FEATURED_SLUGS = ["evening-cafe-paris", "venetian-sunrise", "your-new-artwork-slug"]
```

### Image Requirements

- Place all images in the `public/images/` folder
- Use JPEG or PNG format
- Recommended: Optimize images before adding (compress to reasonable file sizes)
- Path format: `/images/filename.jpg`

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server (after build)
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Project Structure

```
vjj-art-portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── gallery/           # Gallery pages
│   │   ├── page.tsx       # Gallery listing
│   │   └── [slug]/        # Individual artwork pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   └── Header.tsx         # Navigation header
├── lib/                   # Utility files
│   ├── artworks.ts        # Artwork data (EDIT THIS to add/update artworks)
│   ├── getArtwork.ts      # Helper functions
│   └── slug.ts            # URL slug utilities
├── public/                # Static assets
│   └── images/            # Artwork images (PUT YOUR IMAGES HERE)
└── styles/                # Global styles
    └── globals.css        # Tailwind CSS and global styles
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#d4af37` - Used for accents, buttons, and hover states
- **Cream**: `#f5f1e8` - Background color
- **Brown**: `#3e3226` - Primary text color

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Tailwind Classes

The site uses custom Tailwind color classes:
- `bg-gold`, `text-gold`, `border-gold` - Gold color
- `bg-cream` - Cream background
- `text-brown` - Brown text color

## 🚀 Deployment

### Deploying to Vercel

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Root Directory**
   - In Vercel project settings → General → Root Directory
   - Set to: `vjj-art-portfolio`
   - This is **important** if your Next.js app is in a subdirectory

4. **Deploy**
   - Vercel will automatically detect Next.js and deploy
   - Future pushes to your main branch will auto-deploy

### Vercel Configuration

The project includes `vercel.json` with the correct settings:
- Framework: Next.js
- Build command: `npm run build`
- Install command: `npm install --legacy-peer-deps`

No environment variables or database setup required — it's fully static!

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO & Performance

- Next.js Image optimization for fast loading
- Static site generation for optimal performance
- Semantic HTML for accessibility
- Responsive images with lazy loading

## 📝 Content Management

This is a **static site** with no admin panel or CMS. To update content:

1. **Artworks**: Edit `lib/artworks.ts`
2. **Homepage text**: Edit `app/page.tsx`
3. **About page**: Edit `app/about/page.tsx`
4. **Contact info**: Edit `app/contact/page.tsx`
5. **Navigation**: Edit `components/Header.tsx`

All changes require editing code files and redeploying.

## 🆘 Troubleshooting

### Images not showing
- Check that image files are in `public/images/`
- Verify image paths in `lib/artworks.ts` match file names exactly
- Image paths should start with `/images/`

### Build errors
- Run `npm run type-check` to check for TypeScript errors
- Make sure all artwork slugs are unique
- Verify image files exist before building

### Local development issues
- Make sure you're in the `vjj-art-portfolio` directory
- Run `npm install` if dependencies are missing
- Check that port 3000 is available

## 📞 Contact

For questions about the website:
- Email: johnej@btinternet.com
- Instagram: [@vjj_art](https://www.instagram.com/vjj_art)

---

Built with Next.js 16 and Tailwind CSS. A simple, fast, and beautiful way to showcase artwork.
