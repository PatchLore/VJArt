"use client"

import { useState } from "react"

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-20 px-6 bg-[#8B9A6B] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display mb-4">
          Stay Updated
        </h2>
        <p className="text-xl font-body mb-8 opacity-95">
          Receive updates about new paintings, upcoming exhibitions, and plein air painting sessions. I'll also share stories behind the paintings and insights into my process.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors font-body"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#8B9A6B] hover:bg-[#FAF8F3] font-body font-medium tracking-wide transition-colors"
            >
              Subscribe
            </button>
          </div>
          {submitted && (
            <p className="mt-4 text-white/90 font-body">
              Thank you for subscribing! I'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection




