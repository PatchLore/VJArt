"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-[100] shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <Link href="/" className="text-2xl font-display tracking-wider text-brown hover:text-gold transition-colors">
          Veronica Johnstone
        </Link>
        
        <ul className="flex gap-9 list-none">
          <li>
            <Link href="/" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              About
            </Link>
          </li>
          <li>
            <Link href="#process" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Process
            </Link>
          </li>
          <li>
            <Link href="#exhibitions" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Exhibitions
            </Link>
          </li>
          <li>
            <Link href="#commission" className="text-brown text-sm tracking-wide transition-colors hover:text-gold font-body">
              Commission
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header