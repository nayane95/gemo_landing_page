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
    <div className="bg-(--bg) min-h-screen pb-20">
      
      {/* Hero */}
      <section className="relative h-[99vh] flex items-center justify-center overflow-hidden">
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
          <span className="text-(--gold) text-xs md:text-sm lg:text-2xl font-bold uppercase tracking-[0.2em] mb-6 block">
            Established 1980
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-inter text-(--gold) mb-8 drop-shadow-2xl font-semibold tracking-wider leading-none opacity-90">
            From Earth <br />
            <span className="text-(--gold)">to Eternity</span>
          </h1>
          <p className="max-w-5xl mx-auto text-(--muted) text-lg md:text-xl lg:text-2xl font-light tracking-wide opacity-80 mb-0 md:mb-12 lg:mb-16">
            Crafting distinct legacies through ethical sourcing and masterful artistry for nearly a century
          </p>
          <button className="px-8 py-5 border border-(--gold) text-(--gold) hover:bg-(--gold) hover:text-black transition-all duration-300 uppercase text-xs md:text-sm lg:text-xl font-bold tracking-[0.2em] flex items-center gap-3 mx-auto rounded-2xl">
            Explore Our Heritage <span>→</span>
          </button>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 container mx-auto px-6 text-center relative z-10 -mt-12">
        <SectionHeading title="Our Philosophy" centered />
        
        <p className="max-w-4xl mx-auto text-xl md:text-3xl font-inter leading-normal text-[#64748b] mb-16 tracking-wide opacity-80">
          we believe that a gemstone is more than a mere object of beauty; it is a fragment of eternity, a silent witness to the earth's history. Our philosophy is rooted in the deep respect we have for nature's most guarded treasures and the responsibility we carry in bringing them to light.
        </p>
        
        <div className="flex justify-center items-center gap-4">
          <Image 
            src="/images/icons/tabler_premium-rights.svg" 
            alt="Value" 
            width={38} 
            height={38} 
            className="opacity-90"
          />
          <Image 
            src="/images/icons/tabler_world-share.svg" 
            alt="Ethical Sourcing" 
            width={38} 
            height={38} 
            className="opacity-90"
          />
          <Image 
            src="/images/icons/Group.svg" 
            alt="Master Artistry" 
            width={32} 
            height={32} 
            className="opacity-90"
          />
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-12 bg-[#020509]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-semibold text-white mb-2 opacity-80">Our Journey</h2>
            <p className="text-[var(--gold)] text-xs md:text-sm lg:text-xl font-bold uppercase tracking-widest">Mine • To • Market</p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Guardians of the Stone (Team) */}
      <section className="py-24 bg-[#062C43]"> {/* Deep Blue Background */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-inter font-semibold text-white mb-2">Guardians of the Stone</h2>
              <p className="text-[var(--muted)] max-w-md font-light text-lg">
                Meet the visionaries who ensure every meets our uncompromising standards
              </p>
            </div>
            <Link href="#" className="hidden md:flex text-(--gold) text-xs md:text-sm lg:text-xl font-semibold uppercase tracking-widest items-center gap-2 hover:text-white transition-colors mt-6 md:mt-0">
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
