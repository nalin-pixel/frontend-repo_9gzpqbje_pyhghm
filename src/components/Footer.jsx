import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm uppercase tracking-widest text-black">SAINT & CO.</h4>
            <p className="mt-4 text-sm text-black/70">Modern luxury house crafting timeless essentials.</p>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-black/70">Support</h5>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-black/70">Company</h5>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-black/70">Follow</h5>
            <div className="mt-4 flex items-center gap-4 text-black/70">
              <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-black"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-black"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-black/60">© {new Date().getFullYear()} Saint & Co. All rights reserved.</div>
      </div>
    </footer>
  )
}
