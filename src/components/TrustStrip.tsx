import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="border-y border-white/5 bg-[#002b46] py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center md:justify-between gap-x-6 gap-y-4 flex-wrap lg:flex-nowrap lg:gap-x-12">
          
          {/* Left: Certificate Text */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-5 h-5 rounded-full border border-(--gold) flex items-center justify-center bg-(--gold)/10">
              <Star size={10} className="text-(--gold) fill-(--gold)" />
            </div>
            <span className="text-[11px] md:text-[16px] font-thin font-mono tracking-widest text-white/90 whitespace-nowrap font-inter uppercase">
              CERTIFIED AUTHENTICITY
            </span>
          </div>

          {/* Vertical Divider - Visible on medium screens and up */}
          <div className="hidden md:block w-[2px] h-10 bg-white/30 mx-4" />

          {/* Right: Logos Group */}
          <div className="flex items-center gap-x-6 md:gap-x-28 gap-y-4 flex-wrap md:flex-nowrap justify-center">
            {/* GIA */}
            <div className="flex items-center gap-2 shrink-0">
              <Image src="/images/icons/GIA.svg" alt="GIA" width={65} height={25} className="opacity-80 brightness-150" />
              <div className="flex flex-col leading-tight border-none">
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">GEMOLOGICAL</span>
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">INSTITUTE</span>
              </div>
            </div>

            {/* GRS */}
            <div className="flex items-center gap-2 shrink-0">
              <Image src="/images/icons/GRS.svg" alt="GRS" width={72} height={25} className="opacity-80 brightness-150" />
              <div className="flex flex-col leading-tight border-none">
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">GEMRESEARCH</span>
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">SWISSLAB</span>
              </div>
            </div>

            {/* IGI */}
            <div className="flex items-center gap-2 shrink-0">
              <Image src="/images/icons/IGI.svg" alt="IGI" width={55} height={25} className="opacity-80 brightness-150" />
              <div className="flex flex-col leading-tight border-none">
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">INTERNATIONAL</span>
                <span className="text-[9px] font-bold text-white/30 tracking-wider font-inter uppercase">GEMOLOGICAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
