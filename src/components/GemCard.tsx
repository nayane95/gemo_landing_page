'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gemstone } from '@/types';
import { cn, formatPrice } from '@/lib/utils';

interface GemCardProps {
  gem: Gemstone;
  className?: string;
}

export default function GemCard({ gem, className }: GemCardProps) {
  return (
    <Link href={`/collections/${gem.slug}`} className={cn('block h-full', className)}>
      <motion.div 
        whileHover={{ y: -5 }}
        className="relative flex h-full flex-col overflow-hidden bg-[#050a12]"
      >
        {/* Image Container - Aspect 3/4, dark bg */}
        <div className="relative aspect-3/4 overflow-hidden bg-[#020509]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src={gem.image}
                alt={gem.name}
                fill
                unoptimized
                className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Overlay Gradient & Content */}
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#01111d] via-[#01111d]/80 to-transparent p-6 pt-32">
            <div className="flex items-baseline justify-between gap-4 mb-3 border-none">
              <h3 className="text-xl font-medium text-white tracking-tight font-inter">
                {gem.name}
              </h3>
              <p className="text-[12px] font-semibold text-(--gold) whitespace-nowrap font-inter">
                From {formatPrice(gem.priceFrom)}
              </p>
            </div>
            {/* Description with fixed min-height for horizontal alignment across grid rows */}
            <div className="min-h-8">
              <p className="text-[12px] text-white/60 font-medium font-inter leading-relaxed line-clamp-2">
                {gem.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
