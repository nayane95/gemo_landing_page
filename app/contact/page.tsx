import ContactForm from '@/components/ContactForm';
import ContactInfoCard from '@/components/ContactInfoCard';
import { contactInfo } from '@/data/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Private Concierge',
  description: 'Begin your legacy with our private concierge services.',
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Begin Your Legacy : <br />
              <span className="text-[var(--muted)]">Private concierge services</span>
            </h1>
            <p className="text-[var(--muted)] mb-12 max-w-md text-sm leading-relaxed">
              Our specialists are available for private viewing, investment consultation, and bespoke commissions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <ContactInfoCard key={info.id} info={info} />
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
