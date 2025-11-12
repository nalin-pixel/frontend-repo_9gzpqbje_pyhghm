import { useState } from 'react'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/men', label: 'Men' },
  { to: '/women', label: 'Women' },
  { to: '/new', label: 'New Arrivals' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="lg:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="text-xl tracking-[0.2em] font-semibold text-black">
              SAINT & CO.
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-black/70 hover:text-black'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-black/70 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link to="/cart" className="relative text-black/80 hover:text-black transition-colors">
              <ShoppingBag className="w-6 h-6" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full w-5 h-5 inline-flex items-center justify-center">2</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white/95">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2 text-sm uppercase tracking-widest ${isActive ? 'text-black' : 'text-black/80 hover:text-black'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
