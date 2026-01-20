import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import SectionHeading from '@/components/SectionHeading';
import GemCard from '@/components/GemCard';
import { gemstones } from '@/data/gemstones';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredGems = gemstones.filter(g => g.featured).slice(0, 5);

  return (
    <div className="bg-(--bg) min-h-screen">
      <Hero />
      <TrustStrip />

      {/* Featured Collections */}
      <section className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="Featured Collections" 
          subtitle="Curated Selection" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-12">
          {featuredGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}

          {/* See More Link Card */}
          <Link 
            href="/collections" 
            className="group flex flex-col items-center justify-center p-8 bg-transparent transition-all duration-300 h-[475px]"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-4xl font-inter text-(--muted) group-hover:text-white transition-colors font-thin">
                See more
              </span>
              <ArrowRight className="text-(--muted) group-hover:text-white group-hover:translate-x-1 transition-all" size={24} />
            </div>
          </Link>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-black">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--gold)/30 to-transparent" />
        
        <div className="container mx-auto px-6 text-center max-w-7xl relative z-10">
          <h3 className="text-(--gold) text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.2em] mb-8">
            Our Promise
          </h3>
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed text-(--muted)/80 font-light mb-12">
            “Every gemstone we offer is a master piece of nature selected for its extraordinary color, clarity, and provenance. We bridge the gap between the mine and the connoisseur.”
          </blockquote>
          
          <Link 
            href="/about" 
            className="inline-block border-b border-(--gold) pb-2 text-white/80 text-sm md:text-xl lg:text-2xl uppercase tracking-widest hover:text-(--gold) hover:border-white transition-all"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
