'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gemstone } from '@/types';
import { cn, formatPrice } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface GemCardProps {
  gem: Gemstone;
  className?: string;
}

export default function GemCard({ gem, className }: GemCardProps) {
  return (
    <Link href={`/collections/${gem.slug}`} className={cn('group block', className)}>
      <motion.div
        whileHover={{ y: -10 }}
        className="relative aspect-4/5 overflow-hidden bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-900 to-black border border-white/5 group-hover:border-(--gold)/50 transition-colors duration-500"
      >
        {/* Glow Effect Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,var(--gold),transparent_70%)]" />

        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            <Image
              src={gem.image}
              alt={gem.name}
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Overlay - Always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent pt-12">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-serif text-white mb-1 group-hover:text-(--gold) transition-colors">
                {gem.name}
              </h3>
              <p className="text-xs text-(--muted) uppercase tracking-wider">
                {gem.specs.origin}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-(--muted) mb-1">Starting from</p>
              <p className="text-(--gold) font-medium">
                {formatPrice(gem.priceFrom)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
