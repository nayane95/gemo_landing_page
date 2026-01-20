import Link from 'next/link';
import Image from 'next/image';
import { team } from '@/data/constants';
import TeamCard from '@/components/TeamCard';
import Timeline from '@/components/Timeline';
import SectionHeading from '@/components/SectionHeading';
import { Gem, Globe, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Luxury Gemstones',
  description: 'Our heritage of crafting distinct legacies through ethical sourcing and masterful artistry.',
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pb-20">
      
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hand-holding-gem.jpg" 
            alt="Hands holding gemstone" 
            fill 
            className="object-cover"
            priority
          />
          {/* Stronger gradient overlay matching reference */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#030a13]/60 to-[#030a13]" />
        </div>
        
        <div className="relative z-10 text-center container px-6 mt-12">
          <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
            Established 1980
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-[var(--gold)] mb-8 drop-shadow-2xl font-black tracking-tight leading-none">
            From Earth <br />
            <span className="text-[var(--gold)]">to Eternity</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--muted)] mb-12 text-lg font-light tracking-wide opacity-80">
            Crafting distinct legacies through ethical sourcing and masterful artistry for nearly a century
          </p>
          <button className="px-10 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-[0.2em] flex items-center gap-3 mx-auto rounded-sm">
            Explore Our Heritage <span>→</span>
          </button>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 container mx-auto px-6 text-center relative z-10 -mt-12">
        <SectionHeading title="Our Philosophy" centered />
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-serif leading-relaxed text-[#64748b] mb-16 tracking-wide">
          we believe that a gemstone is more than a mere object of beauty; it is a fragment of eternity, a silent witness to the earth's history. Our philosophy is rooted in the deep respect we have for nature's most guarded treasures and the responsibility we carry in bringing them to light.
        </p>
        
        <div className="flex justify-center gap-12 text-[var(--gold)]">
          {/* Changed icons to match reference: Dollar(value), Globe, Diamond */}
          <div className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center">
             <span className="font-serif font-bold text-lg">$</span>
          </div>
          <Globe size={24} strokeWidth={1.5} />
          <Gem size={24} strokeWidth={1.5} />
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-[#020509]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-2">Our Journey</h2>
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest">Mine • To • Market</p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Guardians of the Stone (Team) */}
      <section className="py-24 bg-[#062C43]"> {/* Deep Blue Background */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Guardians of the Stone</h2>
              <p className="text-[var(--muted)] max-w-md">
                Meet the visionaries who ensure every meets our uncompromising standards
              </p>
            </div>
            <Link href="#" className="hidden md:flex text-[var(--gold)] text-xs font-bold uppercase tracking-widest items-center gap-2 hover:text-white transition-colors mt-6 md:mt-0">
              View All Team <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
