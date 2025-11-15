import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Fleet from './components/Fleet'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  const bookRef = useRef(null)

  const scrollToBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Floating light orbs for subtle animated depth */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl animate-pulse" />
        <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero onBookClick={scrollToBook} />
        <div ref={bookRef}>
          <BookingForm />
        </div>
        <Fleet />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
