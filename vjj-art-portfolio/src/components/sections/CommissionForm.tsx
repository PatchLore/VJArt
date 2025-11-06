"use client"

import { useState } from "react"

const CommissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'landscape',
    size: '',
    deadline: '',
    location: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your commission inquiry! I will get back to you within 48 hours to discuss your project. Looking forward to creating something special for you!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'landscape',
      size: '',
      deadline: '',
      location: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="commission" className="py-20 px-6 bg-cream watercolor-overlay">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-display text-center mb-6 text-brown">
          Commission a Piece
        </h2>
        <p className="text-xl font-body text-center mb-12 text-brown-soft max-w-2xl mx-auto">
          I welcome commission inquiries for landscapes, still life paintings, or portraits. Whether it's a favourite view, a meaningful place, or a special arrangement, I'd love to discuss creating something unique for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-sm shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-display text-brown">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-display text-brown">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block mb-2 font-display text-brown">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              />
            </div>

            <div>
              <label htmlFor="type" className="block mb-2 font-display text-brown">
                Type of Painting
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              >
                <option value="landscape">Landscape</option>
                <option value="still-life">Still Life</option>
                <option value="portrait">Portrait</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="size" className="block mb-2 font-display text-brown">
                Preferred Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="e.g., 20&quot; x 16&quot;"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              />
            </div>

            <div>
              <label htmlFor="deadline" className="block mb-2 font-display text-brown">
                Desired Completion Date
              </label>
              <input
                type="text"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                placeholder="e.g., Spring 2025"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="location" className="block mb-2 font-display text-brown">
              Location or Subject (if applicable)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., View from my garden, favourite holiday spot..."
              className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors font-body"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-display text-brown">
              Tell me about your vision *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold focus:outline-none transition-colors resize-vertical font-body"
              placeholder="Please describe what you'd like me to paint, any special details, colours, or feelings you want to capture..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gold hover:bg-gold-dark text-white font-body text-lg tracking-wide transition-colors duration-300"
          >
            Send Commission Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default CommissionForm

