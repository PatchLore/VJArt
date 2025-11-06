"use client"

import Image from "next/image"
import { useEffect } from "react"
import FeaturedArtworks from "@/components/sections/FeaturedArtworks"
import ResponsiveGallery from "@/components/gallery/ResponsiveGallery"
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

  return (
    <div className="font-serif bg-cream text-brown">

      <header className="bg-cream/98 py-7 border-b-[3px] border-gold shadow-sm sticky top-0 z-[1000]">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-8">
          <div className="text-[2.3rem] text-brown-soft italic tracking-wide">VJ Art</div>
          <ul className="flex gap-8 list-none">
            <li><a href="#home" className="text-brown-soft no-underline text-lg relative transition-colors hover:text-gold">Home</a></li>
            <li><a href="#gallery" className="text-brown-soft no-underline text-lg relative transition-colors hover:text-gold">Gallery</a></li>
            <li><a href="#about" className="text-brown-soft no-underline text-lg relative transition-colors hover:text-gold">About</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-b from-cream to-brown-200 py-16 px-8">
        <div>
          <h1 className="text-[4rem] text-brown-soft italic">VJ Art</h1>
          <p className="text-brown-500 text-xl mt-4">Original Oil Paintings — Inspired by Light, Nature, and Memory</p>
          <a href="#gallery" className="inline-block mt-8 px-10 py-4 bg-gold hover:bg-gold-dark text-white no-underline rounded transition-all">
            Explore the Collection
          </a>
        </div>
      </section>

      <FeaturedArtworks />

      <section id="gallery" className="py-20 px-8 max-w-[1200px] mx-auto">
        <h2 className="text-[2.5rem] text-center text-brown-soft italic mb-12">Gallery</h2>
        <div style={{ padding: '0 1rem' }}>
          <ResponsiveGallery 
            artworks={artworks} 
          />
        </div>
      </section>

      <section id="about" className="py-20 px-8 max-w-[1200px] mx-auto">
        <h2 className="text-[2.5rem] text-center text-brown-soft italic mb-12">About Veronica Johnstone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-brown-700 leading-relaxed">Art has always been my passion. From an early age, drawing and painting were my favourite subjects at school. Although I once considered art college, my parents encouraged me to pursue a more traditional career path. Nevertheless, I continued to study art through evening and part-time courses, exploring portraiture, still life, life drawing, and sculpture.</p>
            <p className="mb-6 text-brown-700 leading-relaxed">In the mid-1990s, I completed a two-year part-time course at Croydon Art College, which introduced me to printing, photography, sculpture, and illustration. Later in life, I developed a deep love for plein air landscape painting — something I now try to practice every week.</p>
            <p className="mb-6 text-brown-700 leading-relaxed">My artistic journey has led me to join several established art societies and groups. Since moving to West Sussex, I've become a member of the Caterham, North Weald, Dorking, Sussex Group of Artists, and East Grinstead art groups.</p>
            <p className="mb-6 text-brown-700 leading-relaxed">I work primarily in oils but also enjoy experimenting with acrylics, watercolour, pastel, and charcoal. While I prefer painting directly from life, I'm equally happy to create work inspired by photographs.</p>
            <p className="mt-8 text-brown-700 leading-relaxed">
              📧 Email: <a href="mailto:johnej@btinternet.com" className="text-brown-soft no-underline hover:text-gold transition-colors">johnej@btinternet.com</a><br />
              📸 Instagram: <a href="https://instagram.com/vjj_art" target="_blank" rel="noopener noreferrer" className="text-brown-soft no-underline hover:text-gold transition-colors">@vjj_art</a>
            </p>
          </div>
          <div className="w-full border-[10px] border-cream shadow-lg rounded overflow-hidden">
            <Image 
              src="/images/IMG_4741.jpg" 
              alt="Artist in studio painting"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <footer className="text-center bg-charcoal text-white py-10 mt-12 border-t-[3px] border-gold">
        <p>&copy; 2025 VJ Art — All rights reserved.</p>
      </footer>
    </div>
  )
}
