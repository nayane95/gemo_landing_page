'use client';

import { motion } from 'framer-motion';
import { Gem, Scale, Award, Scissors } from 'lucide-react';

const steps = [
  { 
    title: 'Precision Cutting', 
    subtitle: 'Make gemstone shine from nature to art service',
    icon: Scissors 
  },
  { 
    title: 'Ethical Sourcing', 
    subtitle: 'Hand-picked electronics for conflict-free mining',
    icon: Scale 
  },
  { 
    title: 'GIA Certifications', 
    subtitle: 'Fully authenticated with globally recognized labs',
    icon: Award 
  },
  { 
    title: 'The Final Cutting', 
    subtitle: 'Master polish to guarantee perfection and brilliance',
    icon: Gem 
  },
];

export default function Timeline() {
  return (
    <div className="py-12">
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-8 left-0 w-full h-px bg-[rgba(255,255,255,0.1)] hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-[var(--gold)] bg-[#040e1a] flex items-center justify-center text-[var(--gold)] mb-6 relative z-10 group-hover:bg-[var(--gold)] group-hover:text-black transition-all duration-500">
                <step.icon strokeWidth={1.5} size={28} />
              </div>
              
              <h4 className="text-lg font-serif text-white mb-2">{step.title}</h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed max-w-[200px]">
                {step.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
