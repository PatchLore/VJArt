export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-10 text-center">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
        <h1 className="text-4xl font-serif sm:text-5xl">Let&apos;s Talk</h1>
        <p className="text-brown/80">
          Interested in commissions or exhibitions? Get in touch using the form below. I&apos;ll respond within two business days.
        </p>
      </header>

      <form className="space-y-6 rounded-2xl border border-brown/10 bg-cream p-8 shadow-md text-left">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-brown/70">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="rounded-xl border border-brown/20 bg-white px-4 py-3 text-base text-brown shadow-sm transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-brown/70">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-xl border border-brown/20 bg-white px-4 py-3 text-base text-brown shadow-sm transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              required
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-brown/70">
          Message
          <textarea
            name="message"
            placeholder="Share your ideas, timelines, or event details."
            rows={6}
            className="rounded-xl border border-brown/20 bg-white px-4 py-3 text-base text-brown shadow-sm transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            required
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-brown/20 bg-brown px-6 py-3 text-sm uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-brown"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
