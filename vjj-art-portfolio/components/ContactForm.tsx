"use client"

import { useState } from "react"
import { Instagram, Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // TODO: Replace YOUR_FORM_ID with your actual Formspree form ID
      // Get your form ID from https://formspree.io after creating a form
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await response.json()
        setErrorMessage(
          data.error || "Something went wrong. Please try again later."
        )
        setStatus("error")
      }
    } catch (error) {
      setErrorMessage("Unable to send message. Please check your connection and try again.")
      setStatus("error")
    }
  }

  return (
    <>
      {status === "success" && (
        <div className="mb-8 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={20} />
            <p className="font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-8 p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle size={20} />
            <p className="font-medium">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={status === "loading"}
            className="w-full px-4 py-2 rounded-md border border-brown/20 bg-white shadow-sm focus:border-gold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-brown disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                <Mail size={18} />
                Send Message
              </>
            )}
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
    </>
  )
}
