"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-serif tracking-[0.3em] text-brown">
          VJ ART
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-brown sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative pb-2 transition-colors duration-300 ${
                  isActive ? "text-gold" : "hover:text-gold"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-1.5 -bottom-1 h-[2px] origin-center rounded-full bg-gold transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brown/20 bg-cream px-3 py-2 text-brown shadow-sm transition-colors duration-300 hover:border-gold hover:text-gold sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-brown/10 bg-cream/95 px-4 py-4 shadow-md sm:hidden">
          <nav className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 transition-colors duration-300 ${
                    isActive ? "bg-gold/10 text-gold" : "hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
