import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Wool-Blend Overcoat', price: 1290, image: 'https://images.unsplash.com/photo-1654259089940-8463f2697faf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb29sLUJsZW5kJTIwT3ZlcmNvYXR8ZW58MHwwfHx8MTc2Mjk4MTkwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Silk Midi Dress', price: 980, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, name: 'Leather Chelsea Boots', price: 690, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Cashmere Turtleneck', price: 520, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop' },
]

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">Featured</p>
            <h2 className="text-2xl sm:text-3xl font-light">Curated for the Season</h2>
          </div>
          <a href="#" className="text-sm uppercase tracking-widest text-black/70 hover:text-black">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border border-black/10 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-black">{p.name}</h3>
                <p className="mt-1 text-sm text-black/70">${p.price.toLocaleString()}</p>
                <button className="mt-4 w-full py-2 text-sm uppercase tracking-widest bg-black text-white hover:bg-black/90 transition-colors">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
