import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="relative h-[70vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90 pointer-events-none" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-black/60 mb-4">Maison de Couture</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-black">
              Effortless Elegance
              <span className="block font-normal">Crafted to Perfection</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-black/70 max-w-xl">
              Discover refined silhouettes and timeless pieces. Designed with precision, finished with poetry.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#featured" className="px-6 py-3 bg-black text-white text-sm tracking-widest uppercase">Shop Now</a>
              <a href="#collections" className="px-6 py-3 border border-black text-black text-sm tracking-widest uppercase">View Collections</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
