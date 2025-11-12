import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section className="py-16 bg-[#111] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-light"
        >
          Join our exclusive club for updates
        </motion.h3>
        <p className="mt-3 text-sm text-white/70">
          Be the first to know about new arrivals, private events, and limited releases.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
          <input type="email" required placeholder="Your email address" className="w-full sm:flex-1 bg-transparent border border-white/20 px-4 py-3 placeholder:text-white/50 focus:outline-none focus:border-white/40" />
          <button className="px-6 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
