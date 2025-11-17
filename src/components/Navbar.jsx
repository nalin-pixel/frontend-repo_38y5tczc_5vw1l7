import { Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">dev</span>
            <span className="text-gray-900">.me</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="px-3 py-1.5 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-500 shadow hover:opacity-90">
              Hire me
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-500" onClick={() => setOpen(false)}>
                Hire me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
