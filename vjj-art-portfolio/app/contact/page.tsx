import Header from "@/components/Header"
import { Instagram, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="bg-cream text-brown min-h-screen">
      <Header />
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-serif mb-8">Get in Touch</h1>
        <p className="text-lg mb-12 text-brown/80">
          Interested in commissions, exhibitions, or just want to say hello?
          <br />
          I&apos;d love to hear from you.
        </p>

        <form
          action="mailto:johnej@btinternet.com"
          method="POST"
          encType="text/plain"
          className="space-y-6 text-left"
        >
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-brown"
            >
              <Mail size={18} />
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/vjj_art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brown transition-colors hover:text-gold"
          >
            <Instagram size={22} />
            <span className="text-lg font-semibold">@vjj_art</span>
          </a>
        </div>
      </section>
    </main>
  )
}
