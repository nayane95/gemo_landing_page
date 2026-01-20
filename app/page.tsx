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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}

          {/* See More Link Card */}
          <Link 
            href="/collections" 
            className="group flex flex-col items-center justify-center p-8 border border-white/5 bg-(--panel) hover:border-(--gold)/30 transition-all duration-300 min-h-[400px]"
          >
            <span className="text-xl font-serif text-(--muted) group-hover:text-white transition-colors mb-4">
              See more
            </span>
            <div className="w-12 h-12 rounded-full border border-(--gold) flex items-center justify-center text-(--gold) group-hover:bg-(--gold) group-hover:text-black transition-all duration-300">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--gold)/30 to-transparent" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h3 className="text-(--gold) text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Our Promise
          </h3>
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed text-(--muted) mb-12">
            “Every gemstone we offer is a master piece of nature selected for its extraordinary color, clarity, and provenance. We bridge the gap between the mine and the connoisseur.”
          </blockquote>
          
          <Link 
            href="/about" 
            className="inline-block border-b border-(--gold) pb-1 text-(--gold) text-sm uppercase tracking-widest hover:text-white hover:border-white transition-all"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
