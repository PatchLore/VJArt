"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-[#8B9A6B]/20 sticky top-0 z-[100] shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <div className="text-2xl font-display tracking-wider text-[#3D3D3D]">
          Veronica Johnstone
        </div>
        
        <ul className="flex gap-9 list-none">
          <li>
            <Link href="#gallery" className="text-[#3D3D3D] text-sm tracking-wide transition-colors hover:text-[#8B9A6B] font-body">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-[#3D3D3D] text-sm tracking-wide transition-colors hover:text-[#8B9A6B] font-body">
              About
            </Link>
          </li>
          <li>
            <Link href="#process" className="text-[#3D3D3D] text-sm tracking-wide transition-colors hover:text-[#8B9A6B] font-body">
              Process
            </Link>
          </li>
          <li>
            <Link href="#exhibitions" className="text-[#3D3D3D] text-sm tracking-wide transition-colors hover:text-[#8B9A6B] font-body">
              Exhibitions
            </Link>
          </li>
          <li>
            <Link href="#commission" className="text-[#3D3D3D] text-sm tracking-wide transition-colors hover:text-[#8B9A6B] font-body">
              Commission
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header