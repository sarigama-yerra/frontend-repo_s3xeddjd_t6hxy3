import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/50 dark:bg-black/30 rounded-2xl border border-white/30 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-inner shadow-white/20" />
              <div className="font-extrabold tracking-tight text-gray-900 drop-shadow-sm text-xl">
                Chandu Travels
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              <a href="#book" className="hover:text-gray-900 transition-colors">Book</a>
              <a href="#fleet" className="hover:text-gray-900 transition-colors">Fleet</a>
              <a href="#why" className="hover:text-gray-900 transition-colors">Why Us</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/50 px-3 py-2 text-gray-800">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
