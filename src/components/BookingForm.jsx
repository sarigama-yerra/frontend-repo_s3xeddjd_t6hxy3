import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // For now just simulate success UI. Backend can be wired later if needed.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div id="book" className="relative isolate mx-auto mt-10 w-full max-w-3xl rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur ring-1 ring-black/10">
        <h3 className="text-2xl font-bold text-green-700">Booking request sent!</h3>
        <p className="mt-2 text-gray-700">Our team will contact you shortly to confirm your trip.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600">Make another booking</button>
      </div>
    )
  }

  return (
    <div id="book" className="relative isolate mx-auto -mt-16 w-full max-w-3xl rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur ring-1 ring-black/10">
      <h3 className="text-2xl font-bold text-gray-900">Book Your Ride</h3>
      <p className="mt-1 text-gray-600">Quick, easy, and reliable cab booking to Tirupati & Tirumala.</p>
      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
        <input className="rounded-xl border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} required />
        <input className="rounded-xl border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Pickup Location" name="pickup" value={form.pickup} onChange={handleChange} required />
        <input className="rounded-xl border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Drop Location" name="drop" value={form.drop} onChange={handleChange} required />
        <input type="date" className="rounded-xl border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-amber-500" name="date" value={form.date} onChange={handleChange} required />
        <button type="submit" className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-colors">Request Booking</button>
      </form>
    </div>
  )
}
