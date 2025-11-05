# VJJ Art Portfolio Website

A professional, full-stack artist portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This modern, responsive website showcases contemporary artwork with a clean, elegant design.

## 🎨 Features

### Frontend
- **Modern Design**: Clean, contemporary aesthetic with custom color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Gallery**: Masonry grid layout with lightbox functionality
- **Form Validation**: React Hook Form with Zod validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data

### Backend
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js for admin panel
- **API Routes**: RESTful API for artwork and contact management
- **Form Handling**: Contact form with email notifications
- **Image Management**: Cloudinary integration for artwork images

### Pages
- **Homepage**: Hero section, featured artworks, stats, and call-to-action
- **Gallery**: Filterable artwork grid with lightbox modal
- **Bio**: Artist biography, timeline, achievements, and press
- **About**: Studio information, team, values, and artist statement
- **Contact**: Contact form, studio information, and social links

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vjj-art-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in the required environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/vjj_art_portfolio"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Email (for contact form)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   EMAIL_FROM="your-email@gmail.com"
   
   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

The application uses the following Prisma models:

```prisma
model Artwork {
  id          String   @id @default(cuid())
  title       String
  description String?
  medium      String
  year        Int
  dimensions  String?
  price       Float?
  category    String
  images      String[] // Array of image URLs
  featured    Boolean  @default(false)
  sold        Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
}

model User {
  id       String @id @default(cuid())
  email    String @unique
  password String
  role     String @default("admin")
}
```

## 🎨 Design System

### Colors
- **Primary Gold**: #d4af37
- **Charcoal**: #2d2d2d
- **Background**: #f5f5f5
- **Text**: #333333

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Custom Button component with variants
- Card components for content display
- Input components with validation
- Responsive navigation with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Set up environment variables in Vercel dashboard**

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Database Setup

For production, use a managed PostgreSQL database:
- **Vercel Postgres**: Integrated with Vercel
- **Supabase**: Free tier available
- **Railway**: Easy PostgreSQL setup

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Database Commands

```bash
npx prisma studio    # Open Prisma Studio
npx prisma generate  # Generate Prisma client
npx prisma db push  # Push schema to database
npx prisma migrate dev # Create and apply migration
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── gallery/           # Gallery page
│   ├── bio/               # Bio page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Prisma client
│   └── utils.ts          # Utility functions
└── styles/               # Global styles
```

## 🎯 Features Implementation

### Gallery
- Masonry grid layout for artwork display
- Filter by category (Abstract, Landscape, Digital, Nature)
- Lightbox modal for full-size viewing
- Lazy loading for performance
- Responsive design

### Contact Form
- Form validation with Zod
- Email notifications
- Database storage
- Success/error handling

### Authentication
- NextAuth.js integration
- Admin panel access
- Protected routes
- Session management

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection
- Input validation and sanitization
- SQL injection prevention via Prisma
- Rate limiting on API routes

## 📈 Performance

- Next.js Image optimization
- Lazy loading for gallery
- Code splitting
- Caching strategies
- CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: info@vjjart.com
- Website: https://vjjart.com

---

Built with ❤️ for contemporary art lovers.