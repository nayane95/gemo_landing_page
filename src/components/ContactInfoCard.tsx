'use client';

import { ContactInfo } from '@/types';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const icons = {
  phone: Phone,
  email: Mail,
  whatsapp: MessageSquare,
};

export default function ContactInfoCard({ info }: { info: ContactInfo }) {
  const Icon = icons[info.type];

  return (
    <div className="bg-[var(--panel)] border border-[rgba(255,255,255,0.05)] p-8 rounded-lg flex items-start gap-6 hover:border-[var(--gold)]/30 transition-all duration-300">
      <div className="text-[var(--gold)] mt-1">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-white font-serif text-lg mb-2">{info.title}</h4>
        <p className="text-[var(--gold)] text-sm font-medium mb-1">{info.details}</p>        
        <p className="text-[var(--muted)] text-xs md:text-sm">{info.subDetails}</p>
      </div>
    </div>
  );
}
