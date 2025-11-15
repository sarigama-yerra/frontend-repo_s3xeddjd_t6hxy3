export default function Fleet() {
  const cars = [
    { name: 'Sedan', note: '4 Seater • AC • Comfortable' },
    { name: 'SUV', note: '6-7 Seater • AC • Spacious' },
    { name: 'Tempo Traveller', note: '12-17 Seater • Family & Groups' },
  ]

  return (
    <section id="fleet" className="relative mx-auto mt-24 max-w-7xl px-6">
      <h3 className="text-3xl font-extrabold text-gray-900">Our Fleet</h3>
      <p className="mt-2 text-gray-600">Choose the perfect ride for your journey.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((c) => (
          <div key={c.name} className="rounded-2xl bg-white/80 p-6 backdrop-blur ring-1 ring-black/5 shadow-lg">
            <div className="h-40 w-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-100" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">{c.name}</h4>
            <p className="text-gray-600">{c.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
