'use client';

import { motion } from 'framer-motion';
import { Gem, Mountain, Check } from 'lucide-react';

const steps = [
  { 
    title: 'Precision Cutting', 
    subtitle: 'Master lapidaries unlock the hidden fire with each stone.',
    icon: null
  },
  { 
    title: 'Ethical Sourcing', 
    subtitle: 'Hand - selected raw minerals from conflict free mines across the globe',
    icon: Mountain 
  },
  { 
    title: 'GIA Certifications', 
    subtitle: 'Rigorous grading to guarantee authenticity, clarity and value.',
    icon: Check 
  },
  { 
    title: 'The Final Cutting', 
    subtitle: 'Rigorous grading to guarantee authenticity, clarity and value.',
    icon: Gem 
  },
];

export default function Timeline() {
  return (
    <div className="py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Connecting Line: Start at 12.5% (center of 1st) and end at 87.5% (center of 4th) */}
        <div className="absolute top-12 left-[12.5%] w-[75%] h-px bg-(--gold)/20 hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Double Circle Container */}
              <div className="relative mb-10">
                {/* Outer Circle - Larger with bg to hide line */}
                <div className="w-24 h-24 rounded-full border border-(--gold)/30 flex items-center justify-center bg-[#020509] transition-transform duration-500 group-hover:scale-110">
                  {/* Inner Circle - Smaller to increase gap */}
                  <div className="w-14 h-14 rounded-full border border-(--gold)/80 flex items-center justify-center bg-transparent">
                    {step.icon && (
                      <step.icon className="text-(--gold)" size={24} strokeWidth={1} />
                    )}
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-white/75 mb-4 tracking-wide font-inter">
                {step.title}
              </h4>
              <p className="text-[12px] text-(--muted) leading-relaxed max-w-[260px] opacity-80 font-medium tracking-tight font-inter">
                {step.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
