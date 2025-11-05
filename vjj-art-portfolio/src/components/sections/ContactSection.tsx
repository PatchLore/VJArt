"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 px-8 max-w-7xl mx-auto pt-20">
      <h2 className="mb-12 text-center font-display tracking-widest" style={{fontSize: '3rem', marginBottom: '3rem'}}>
        Get In Touch
      </h2>
      
      <form 
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto artisan-card p-8 rounded-2xl mt-12"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-display text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300 font-body focus:ring-2 focus:ring-yellow-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-display text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300 font-body focus:ring-2 focus:ring-yellow-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block mb-2 font-display text-gray-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300 font-body focus:ring-2 focus:ring-yellow-200"
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="message" className="block mb-2 font-display text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-vertical font-body focus:ring-2 focus:ring-yellow-200"
          />
        </div>
        
        <button
          type="submit"
          className="w-full p-4 artisan-button text-white border-none rounded-xl text-lg font-display cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 uppercase tracking-wide"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
