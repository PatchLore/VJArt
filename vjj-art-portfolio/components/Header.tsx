import Link from "next/link"

export default function Header() {
  const links = ["Home", "Gallery", "About", "Contact"]
  return (
    <header className="py-6 border-b border-brown/20 bg-cream">
      <nav className="flex justify-center gap-8 text-brown font-semibold">
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
            className="hover:text-gold transition-colors"
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  )
}
