'use client';

import Image from 'next/image';
import { TeamMember } from '@/types';

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 border border-white/5 group-hover:border-[var(--gold)]/30 transition-colors">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
        {member.role}
      </p>
    </div>
  );
}
