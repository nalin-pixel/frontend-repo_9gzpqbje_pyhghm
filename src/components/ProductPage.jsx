import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductPage() {
  const [size, setSize] = useState('M')

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-4 gap-3 order-2 lg:order-1">
            <div className="col-span-4 aspect-[4/5] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9kdWN0fGVufDB8MHx8fDE3NjI5ODE5MDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-square bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1600&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-square bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">Outerwear</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-light text-black">Wool-Blend Overcoat</h1>
            <p className="mt-2 text-lg text-black/70">$1,290</p>

            <p className="mt-6 text-sm text-black/70 leading-relaxed">
              Tailored overcoat crafted in an Italian wool blend with a soft hand-feel. Features a clean notch lapel, hidden placket, and a modern, slightly relaxed silhouette.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-black/60">Size</p>
              <div className="mt-3 grid grid-cols-5 gap-2 max-w-xs">
                {['XS','S','M','L','XL'].map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`py-3 border text-sm ${size===s ? 'bg-black text-white' : 'border-black/20 text-black hover:border-black/40'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button className="px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-black/90">Add to Cart</button>
              <button className="px-6 py-3 border border-black text-black text-sm uppercase tracking-widest">Wishlist</button>
            </div>

            <div className="mt-10">
              <h3 className="text-sm uppercase tracking-widest text-black">Details</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>- Italian wool blend</li>
                <li>- Hidden placket</li>
                <li>- Fully lined</li>
                <li>- Made in Portugal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
