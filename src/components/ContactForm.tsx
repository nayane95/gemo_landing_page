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
    <div className="max-w-2xl mx-auto">
      {/* Form Container with thin blue border */}
      <div className="bg-[#02101b] border border-[#156c92]/40 p-8 md:p-10 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-white mb-8 tracking-tight font-inter">
          Private Consultation Request
        </h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* Full Name */}
          <div>
            <input
              {...register('fullName')}
              placeholder="Full Name"
              className={cn(
                "w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#156c92] transition-colors",
                errors.fullName && "border-red-500"
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Number */}
            <div>
              <input
                {...register('contactNumber')}
                placeholder="Contact Number"
                className={cn(
                  "w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#156c92] transition-colors",
                  errors.contactNumber && "border-red-500"
                )}
              />
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email')}
                placeholder="E mail Address"
                className={cn(
                  "w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#156c92] transition-colors",
                  errors.email && "border-red-500"
                )}
              />
            </div>
          </div>

          {/* Select Area of Interest */}
          <div className="relative group">
            <select
              {...register('areaOfInterest')}
              className="w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white/80 text-sm focus:outline-none focus:border-[#156c92] transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Area Of Interest</option>
              <option value="Investment Grade">Investment Grade Gems</option>
              <option value="Bespoke Jewelry">Bespoke Jewelry</option>
              <option value="Loose Stones">Loose Stones</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-focus-within:text-[#156c92]">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Select Budget Range */}
          <div className="relative group">
            <select
              {...register('budgetRange')}
              className="w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white/80 text-sm focus:outline-none focus:border-[#156c92] transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Budget Range</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-focus-within:text-[#156c92]">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Text Areas */}
          <div>
            <textarea
              {...register('inquiry')}
              placeholder="Your Inquire (Optional)"
              className="w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#156c92] transition-colors min-h-[100px] resize-none"
            />
          </div>

          <div>
            <textarea
              {...register('additionalReq')}
              placeholder="Additional Requirement (Optional)"
              className="w-full bg-[#05111f] border border-[#1e3a4e] rounded-md p-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#156c92] transition-colors min-h-[100px] resize-none"
            />
          </div>
        </form>
      </div>

      {/* Exterior Submit Button */}
      <div className='flex justify-center'>
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="group bg-[#ffc505] text-[#000000] font-bold uppercase tracking-widest py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-[#ffc505]/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed md:mt-20 px-20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={24} /> Processing
            </>
          ) : (
            <>
              REQUEST PRIVATE CONSULTATION <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </>
          )}
        </button>
      </div>

      {/* Privacy Footer */}
      <div className="mt-6 text-center items-center w-full">
        <p className="text-sm text-(--muted)/60 flex items-center justify-center gap-2 font-medium tracking-tight">
          <Lock size={14} className="opacity-80" /> All inquires are kept strictly confidential
        </p>
      </div>
    </div>
  );
}
