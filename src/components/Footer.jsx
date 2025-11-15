export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/20 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">© {new Date().getFullYear()} Chandu Travels. All rights reserved.</div>
          <div className="text-sm text-gray-700">Phone: +91-98765 43210 • Email: support@chandutravels.com</div>
        </div>
      </div>
    </footer>
  )
}
