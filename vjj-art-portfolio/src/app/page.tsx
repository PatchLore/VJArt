"use client"

import Image from "next/image"
import { useEffect } from "react"
import { artworks } from "@/data/artworks"

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            const offset = 80
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Use featured artworks or fallback to all artworks
  const displayedArtworks = artworks.filter(art => art.featured).length > 0 
    ? artworks.filter(art => art.featured) 
    : artworks.slice(0, 4)

  if (!displayedArtworks || displayedArtworks.length === 0) {
    return (
      <main className="min-h-screen bg-cream text-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <section className="text-center">
            <p className="text-brown-soft text-lg">No artworks yet.</p>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <style jsx global>{`
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }

        body {
          font-family: 'Georgia', serif;
          background: #fafafa;
          color: #333;
          line-height: 1.6;
        }

        /* Gallery Item Styles */
        .gallery-item {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }

        .artwork-image-wrapper {
          transition: all 0.3s ease-in-out;
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .artwork-card:hover .artwork-image-wrapper {
          transform: scale(1.02);
        }

        .artwork-card:hover .artwork-image-wrapper img {
          filter: brightness(1.05);
        }

        /* Ensure gold border on hover works with Tailwind classes */
        .artwork-card:hover {
          border-color: #d4af37 !important;
        }

        /* Ensure images fill their containers properly */
        .artwork-image-wrapper img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        /* Navigation Link Hover Effects */
        nav a {
          position: relative;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #d4af37;
        }

        nav a:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Optional underline effect on hover */
        nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background-color: #d4af37;
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }

        /* Mobile Navigation Spacing - Force spacing on mobile */
        @media (max-width: 640px) {
          nav ul {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 1rem !important;
            padding: 0.5rem 0 !important;
            width: 100% !important;
          }
          
          nav ul li {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          nav ul li a {
            display: inline-block !important;
            padding: 0.5rem 0.75rem !important;
            margin: 0 !important;
            font-size: 1rem !important;
          }

          /* Gallery mobile fixes */
          #gallery-grid,
          #gallery .grid,
          section#gallery > div.grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .artwork-card {
            width: 100% !important;
            max-width: 100% !important;
          }

          .artwork-image-wrapper {
            width: 100% !important;
            aspect-ratio: 4/3 !important;
            min-height: 240px !important;
          }

          /* Add extra spacing between gallery and about section on mobile */
          #gallery {
            margin-bottom: 3rem !important;
            padding-bottom: 2rem !important;
          }

          #about {
            padding-top: 3rem !important;
          }
        }

        /* Tablet and up */
        @media (min-width: 641px) {
          nav ul {
            gap: 1.5rem !important;
          }
        }

        @media (min-width: 640px) {
          #gallery-grid,
          #gallery .grid,
          section#gallery > div.grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 2rem !important;
          }
        }

        @media (min-width: 1024px) {
          #gallery-grid,
          #gallery .grid,
          section#gallery > div.grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 2.5rem !important;
          }
        }

        /* Button Hover Effects */
        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #b59f3b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .cta-button:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 4px;
        }

        /* Text Link Hover Effects */
        a[href^="mailto:"],
        a[href^="http"] {
          transition: color 0.3s ease;
        }

        a[href^="mailto:"]:hover,
        a[href^="http"]:hover {
          color: #d4af37;
        }

        a[href^="mailto:"]:focus-visible,
        a[href^="http"]:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 2px;
          border-radius: 2px;
        }
      `}</style>

      <header className="bg-cream/98 sticky top-0 z-50 border-b-4 border-gold shadow-sm">
        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-4 md:py-6 gap-4 md:gap-0">
          <div className="text-3xl md:text-4xl font-serif italic tracking-wide" style={{
            color: '#6b5d4f'
          }}>VJ Art</div>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 list-none p-0">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '#about' }
            ].map((link) => (
              <li key={link.label} className="m-0 p-0">
                <a 
                  href={link.href} 
                  className="nav-link text-base hover:text-gold transition-colors duration-300 inline-block px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  style={{
                    color: '#6b5d4f',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="min-h-[70vh] flex items-center justify-center text-center bg-gradient-to-b from-cream to-cream/80 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic mb-4 md:mb-6" style={{
            color: '#6b5d4f'
          }}>VJ Art</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8" style={{
            color: '#8b7355'
          }}>Original Oil Paintings — Inspired by Light, Nature, and Memory</p>
          <a 
            href="#gallery" 
            className="cta-button inline-block px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold min-h-[44px] min-w-[120px] flex items-center justify-center mx-auto"
            style={{
              background: '#d4af37',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Explore the Collection
          </a>
        </div>
      </section>

      <section id="gallery" className="py-10 sm:py-12 md:py-16 lg:py-20 mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12 font-serif" style={{
          color: '#6b5d4f',
          fontStyle: 'italic'
        }}>Gallery</h2>
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {displayedArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="artwork-card group border-2 border-transparent hover:border-gold transition-all duration-300 rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg"
            >
              <div className="artwork-image-wrapper relative overflow-hidden rounded-t-md">
                <Image 
                  src={artwork.image} 
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={artwork.featured}
                />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-serif" style={{
                  color: '#6b5d4f',
                  fontStyle: 'italic'
                }}>{artwork.title}</h3>
                <p className="text-sm md:text-base mt-2" style={{
                  color: '#8b7355'
                }}>{artwork.description}</p>
                <p className="mt-3 font-semibold" style={{
                  color: '#6b5d4f'
                }}>£{artwork.price} — Unframed</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-20">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12 font-serif italic" style={{
          color: '#6b5d4f'
        }}>About Veronica Johnstone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          <div className="text-base md:text-lg leading-relaxed space-y-5" style={{
            color: '#5a4e3f'
          }}>
            <p>Art has always been my passion. From an early age, drawing and painting were my favourite subjects at school. Although I once considered art college, my parents encouraged me to pursue a more traditional career path. Nevertheless, I continued to study art through evening and part-time courses, exploring portraiture, still life, life drawing, and sculpture.</p>
            <p>In the mid-1990s, I completed a two-year part-time course at Croydon Art College, which introduced me to printing, photography, sculpture, and illustration. Later in life, I developed a deep love for plein air landscape painting — something I now try to practice every week.</p>
            <p>My artistic journey has led me to join several established art societies and groups. Since moving to West Sussex, I've become a member of the Caterham, North Weald, Dorking, Sussex Group of Artists, and East Grinstead art groups.</p>
            <p>I work primarily in oils but also enjoy experimenting with acrylics, watercolour, pastel, and charcoal. While I prefer painting directly from life, I'm equally happy to create work inspired by photographs.</p>
            <div className="mt-8 p-6 bg-cream/50 rounded-lg border border-brown/10">
              <p className="mb-3">
                <span className="font-semibold">📧 Email:</span>{' '}
                <a href="mailto:johnej@btinternet.com" className="hover:text-gold transition-colors" style={{ color: '#6b5d4f', textDecoration: 'none' }}>johnej@btinternet.com</a>
              </p>
              <p>
                <span className="font-semibold">📸 Instagram:</span>{' '}
                <a href="https://instagram.com/vjj_art" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: '#6b5d4f', textDecoration: 'none' }}>@vjj_art</a>
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg border-4 border-cream">
            <Image 
              src="/images/IMG_4741.jpg" 
              alt="Artist in studio painting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      </div>
      <footer className="text-center bg-charcoal text-cream py-10 mt-12 border-t-4 border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <p>&copy; 2025 VJ Art — All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
