'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[99vh] min-h-[620px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.75)_55%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-5 leading-tight tracking-widest">
            Unearth the <span className="italic text-white/70 font-semibold">Exceptional</span>
          </h1>
          <p className="max-w-5xl mx-auto text-sm md:text-2xl text-(--muted)/90 mb-9 font-light leading-relaxed">
            From the silent depths of the earth to the pinnacle of timeless luxury, we bring you gemstones that capture the soul of the earth.
          </p>

          <Link
            href="/collections"
            className="inline-block px-16 py-8 border border-(--gold) text-(--gold) hover:bg-(--gold) hover:text-black transition-all duration-300 text-xs md:text-xl lg:text-2xl tracking-[0.3em] uppercase font-semibold mt-30"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
