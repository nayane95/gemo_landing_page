'use client';

import Image from 'next/image';
import { TeamMember } from '@/types';

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-full aspect-3/4 overflow-hidden mb-6 rounded-2xl border border-white/5 group-hover:border-(--gold)/30 transition-all duration-500">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Moody Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/90 opacity-80" />
      </div>
      
      <h3 className="text-2xl font-bold font-inter text-white mb-1 group-hover:text-(--gold) transition-colors md:text-2xl lg:text-3xl">
        {member.name}
      </h3>
      <p className="text-[10px] font-bold uppercase italic tracking-[0.2em] text-(--gold) md:text-xs">
        {member.role}
      </p>
    </div>
  );
}
