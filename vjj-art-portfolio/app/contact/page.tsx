import Header from "@/components/Header"

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif">Contact</h1>
        <p className="text-brown/80">
          For commissions, exhibitions, or studio visits, please email studio@vjart.co.uk.
        </p>
      </section>
    </main>
  )
}
