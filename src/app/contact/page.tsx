'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitMessage('Message sent successfully!')
    setName('')
    setEmail('')
    setMessage('')
    // Clear success message after 3 seconds
    setTimeout(() => setSubmitMessage(''), 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0A0F1C] to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTM3NEQiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMnptMjUgMGMwLTEuMTA1LS44OTUtMi0yLTJzLTIgLjg5NS0yIDIgLjg5NSAyIDIgMiAyLS44OTUgMi0yem0tNTAgMGMwLTEuMTA1LS44OTUtMi0yLTJzLTIgLjg5NS0yIDIgLjg5NSAyIDIgMiAyLS44OTUgMi0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-[#0A0F1C]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text animate-gradient-x">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;d love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we&apos;re here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#4169E1] to-[#9370DB] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#4169E1] to-[#9370DB] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#4169E1] to-[#9370DB] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-400">123 Agency Street, City, Country</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md focus:ring-2 focus:ring-[#4169E1] text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md focus:ring-2 focus:ring-[#4169E1] text-white placeholder-gray-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md focus:ring-2 focus:ring-[#4169E1] text-white placeholder-gray-400"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#4169E1] to-[#9370DB] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4169E1] transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitMessage && (
                  <p className="mt-2 text-sm text-green-400">{submitMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="hidden md:block">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"
              style={{
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
                width: `${Math.random() * 20 + 10}rem`,
                height: `${Math.random() * 20 + 10}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

