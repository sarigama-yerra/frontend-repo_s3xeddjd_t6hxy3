export default function WhyUs() {
  const points = [
    { t: 'On-Time Guarantee', d: 'Punctual pickups and drop-offs for a stress-free experience.' },
    { t: 'Verified Drivers', d: 'Experienced, professional, and courteous chauffeurs.' },
    { t: 'Clean & Safe', d: 'Regularly sanitized vehicles with safety-first protocols.' },
    { t: 'Transparent Pricing', d: 'No hidden charges. Clear fares and flexible packages.' },
  ]

  return (
    <section id="why" className="relative mx-auto mt-24 max-w-7xl px-6 pb-24">
      <h3 className="text-3xl font-extrabold text-gray-900">Why Choose Chandu Travels?</h3>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p) => (
          <div key={p.t} className="rounded-2xl bg-white/80 p-6 backdrop-blur ring-1 ring-black/5 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900">{p.t}</h4>
            <p className="text-gray-600 mt-2">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
