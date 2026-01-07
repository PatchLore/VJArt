import type { Metadata } from "next"
import Header from "@/components/Header"
import { Mail, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | VJ Art",
  description:
    "Get in touch with Veronica Johnstone about commissions, exhibitions, or inquiries about her original oil paintings.",
}

export default function ContactPage() {
  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-serif mb-8">Get in Touch</h1>
        <p className="text-lg mb-12 text-brown/80">
          Interested in commissions, exhibitions, or just want to say hello? I&apos;d love to hear from you.
        </p>

        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3 text-brown hover:text-gold transition-colors">
              <Mail size={24} className="text-gold" />
              <a
                href="mailto:johnej@btinternet.com"
                className="text-xl font-semibold hover:underline"
              >
                johnej@btinternet.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3 text-brown hover:text-gold transition-colors">
              <Instagram size={24} className="text-gold" />
              <a
                href="https://www.instagram.com/vjj_art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:underline"
              >
                @vjj_art
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
