import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ ok: true, message: 'Thanks! I will get back to you soon.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">Contact</h2>
        <p className="mt-2 text-gray-600 text-center">Got an opportunity or feedback? Send a message.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" required placeholder="Your email" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required placeholder="Your message" rows="5" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

          <div className="flex items-center gap-4">
            <button className="px-4 py-2.5 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-500 shadow hover:opacity-90">Send</button>
            {status && (
              <p className={status.ok ? 'text-green-600' : 'text-red-600'}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
