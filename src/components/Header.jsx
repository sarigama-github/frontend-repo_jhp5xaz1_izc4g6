import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const nav = [
  { path: '/', label: 'Home' },
  { path: '/sellers', label: 'Sellers' },
  { path: '/merchants', label: 'Merchants' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/resources', label: 'Resources' },
  { path: '/company', label: 'Company' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-[#0B0F12]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-yellow-400 shadow-[0_8px_30px_rgba(14,167,90,0.55)]" />
          <span className="font-semibold text-white">OvaSell</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.path}
              to={n.path}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/resources/api" className="text-sm text-slate-300 hover:text-white">Docs</Link>
          <Link to="/sellers" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold shadow-[0_10px_40px_rgba(14,167,90,.4)]">
            Become a Seller <ArrowRight size={16} />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0F12]/80 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {nav.map((n) => (
              <NavLink key={n.path} to={n.path} onClick={() => setOpen(false)} className="block py-2 text-slate-200">
                {n.label}
              </NavLink>
            ))}
            <Link to="/resources/api" onClick={() => setOpen(false)} className="block py-2 text-slate-200">Docs</Link>
            <Link to="/sellers" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">
              Become a Seller <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
