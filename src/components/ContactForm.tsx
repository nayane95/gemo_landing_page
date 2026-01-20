'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, Loader2, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Validation Schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  contactNumber: z.string().min(6, 'Valid contact number is required'),
  email: z.string().email('Invalid email address'),
  areaOfInterest: z.string().min(1, 'Please select an area of interest'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  inquiry: z.string().optional(),
  additionalReq: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form specific data:', data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Simple toast equivalent
    alert('Request sent successfully! We will contact you shortly.');
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-[var(--panel)] border border-[rgba(255,255,255,0.05)] p-8 md:p-12 rounded-lg">
      <h3 className="text-xl font-serif text-white mb-8">Private Consultation Request</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <input
            {...register('fullName')}
            placeholder="Full Name"
            className={cn(
              "w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors",
              errors.fullName && "border-red-500"
            )}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Number */}
          <div>
            <input
              {...register('contactNumber')}
              placeholder="Contact Number"
              className={cn(
                "w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors",
                errors.contactNumber && "border-red-500"
              )}
            />
            {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              {...register('email')}
              placeholder="Email Address"
              className={cn(
                "w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors",
                errors.email && "border-red-500"
              )}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Selects */}
        <div>
          <select
            {...register('areaOfInterest')}
            className="w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors"
          >
            <option value="">Select Area Of Interest</option>
            <option value="Investment Grade">Investment Grade Gems</option>
            <option value="Bespoke Jewelry">Bespoke Jewelry</option>
            <option value="Loose Stones">Loose Stones</option>
          </select>
          {errors.areaOfInterest && <p className="text-red-500 text-xs mt-1">{errors.areaOfInterest.message}</p>}
        </div>

        <div>
          <select
            {...register('budgetRange')}
            className="w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors"
          >
            <option value="">Select Budget Range</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
          {errors.budgetRange && <p className="text-red-500 text-xs mt-1">{errors.budgetRange.message}</p>}
        </div>

        {/* Text Areas */}
        <div>
          <textarea
            {...register('inquiry')}
            placeholder="Your Inquiry (Optional)"
            className="w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors min-h-[100px]"
          />
        </div>

        <div>
          <textarea
            {...register('additionalReq')}
            placeholder="Additional Requirement (Optional)"
            className="w-full bg-[#05111f] border border-[#1e293b] rounded p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--gold)] transition-colors min-h-[100px]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--gold)] text-black font-bold uppercase tracking-widest py-4 rounded flex items-center justify-center gap-2 hover:bg-[#bd9b4c] transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Processing
            </>
          ) : (
            <>
              Request Private Consultation <ArrowRight size={20} />
            </>
          )}
        </button>

        <div className="text-center">
          <p className="text-xs text-[var(--muted)] flex items-center justify-center gap-2">
            <Lock size={12} /> All inquiries are kept strictly confidential
          </p>
        </div>
      </form>
    </div>
  );
}
