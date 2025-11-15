import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero({ onBookClick }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-200, 200], [10, -10]), { stiffness: 100, damping: 20 })
  const ry = useSpring(useTransform(mx, [-200, 200], [-10, 10]), { stiffness: 100, damping: 20 })

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      mx.set(e.clientX - innerWidth / 2)
      my.set(e.clientY - innerHeight / 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image of Tirumala Balaji/Temple */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/0" />
      </div>

      {/* Floating 3D layers */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-2/3 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-400/10 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"
        >
          Chandu Travels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto"
        >
          Premium cab bookings to Tirupati & Tirumala with a divine backdrop. Safe, punctual, and comfortable rides.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={onBookClick} className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-colors">
            Book a Cab
          </button>
          <a href="#fleet" className="rounded-xl bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur border border-white/40 hover:bg-white/30 transition-colors">
            View Fleet
          </a>
        </motion.div>

        {/* 3D animated cab card */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry }}
          className="mx-auto mt-16 w-full max-w-xl rounded-2xl bg-white/80 p-4 shadow-2xl backdrop-blur ring-1 ring-black/5"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
            <motion.div
              initial={{ x: -50, rotateZ: -8, opacity: 0 }}
              animate={{ x: 0, rotateZ: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="260" height="120" viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#f1)">
                  <rect x="20" y="60" width="220" height="28" rx="14" fill="#0ea5e9" />
                  <rect x="40" y="30" width="150" height="40" rx="12" fill="#38bdf8" />
                  <circle cx="70" cy="92" r="14" fill="#111827" />
                  <circle cx="180" cy="92" r="14" fill="#111827" />
                </g>
                <defs>
                  <filter id="f1" x="0" y="0" width="260" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.3)" />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </div>
          <div className="mt-3 text-sm text-gray-600">Dynamic 3D tilt effect for an immersive feel.</div>
        </motion.div>
      </div>
    </section>
  )
}
