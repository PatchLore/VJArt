import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-cream/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center text-sm text-brown/80 sm:flex-row sm:text-left sm:text-base">
        <p className="font-serif text-brown">&copy; {new Date().getFullYear()} VJ Art. All rights reserved.</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/contact" className="transition-colors duration-300 hover:text-gold">
            Commission Inquiries
          </Link>
          <Link href="mailto:studio@vjart.co.uk" className="transition-colors duration-300 hover:text-gold">
            studio@vjart.co.uk
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-gold">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
