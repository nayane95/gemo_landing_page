import { gemstones } from '@/data/gemstones';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function generateStaticParams() {
  return gemstones.map((gem) => ({
    slug: gem.slug,
  }));
}

export default function GemstoneDetail({ params }: { params: { slug: string } }) {
  const gem = gemstones.find((g) => g.slug === params.slug);

  if (!gem) {
    notFound();
  }

  return (
    <div className="bg-[var(--bg)] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link href="/collections" className="text-[var(--muted)] hover:text-[var(--gold)] text-sm mb-8 inline-block transition-colors">
          ← Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image */}
          <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] border border-white/5">
             <Image 
               src={gem.image} 
               alt={gem.name} 
               fill 
               unoptimized
               className="object-contain p-12 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
               priority
             />
          </div>

          {/* Right: Details */}
          <div>
             <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                {gem.type} Collection
             </span>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
               {gem.name}
             </h1>
             <p className="text-3xl text-[var(--gold)] font-light mb-8">
               From {formatPrice(gem.priceFrom)}
             </p>

             <div className="space-y-8 mb-12">
               <p className="text-[var(--muted)] text-lg leading-relaxed font-light">
                 {gem.description}
               </p>

               {/* Specs Table */}
               <div className="border-t border-b border-[rgba(255,255,255,0.1)] py-6">
                 <h3 className="text-white font-serif mb-6 text-lg">Specifications</h3>
                 <div className="grid grid-cols-2 gap-y-4 text-sm">
                    <span className="text-[var(--muted)]">Origin</span>
                    <span className="text-white text-right">{gem.specs.origin}</span>
                    
                    <span className="text-[var(--muted)]">Carat Weight</span>
                    <span className="text-white text-right">{gem.specs.carat} ct</span>
                    
                    <span className="text-[var(--muted)]">Cut</span>
                    <span className="text-white text-right">{gem.specs.cut}</span>
                    
                    <span className="text-[var(--muted)]">Certification</span>
                    <div className="text-right flex justify-end gap-2">
                      {gem.specs.certification.map(cert => (
                        <span key={cert} className="bg-[var(--gold)]/10 text-[var(--gold)] px-2 py-0.5 text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                 </div>
               </div>

               <div className="flex items-center gap-3 text-[var(--gold)] text-sm">
                 <ShieldCheck size={18} />
                 <span>Verified Authentic & Conflict Free</span>
               </div>
             </div>

             <div className="flex gap-4">
               <Link href="/contact" className="flex-1 bg-[var(--gold)] text-black font-bold uppercase tracking-widest py-4 rounded text-center hover:bg-[#bd9b4c] transition-colors flex items-center justify-center gap-2">
                 Request Consultation <ArrowRight size={18} />
               </Link>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
