import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-(--bg) pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-xl font-serif font-bold tracking-widest text-(--gold) mb-6 block">
              LOGO
            </Link>
            <p className="text-(--muted)/70 text-sm leading-relaxed">
              The world's premier destination for investment-grade colored gemstones. Authenticity guaranteed.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-(--muted)">
              <li><Link href="/collections?type=Ruby" className="hover:text-(--gold) transition-colors">Rubies</Link></li>
              <li><Link href="/collections?type=Emerald" className="hover:text-(--gold) transition-colors">Emeralds</Link></li>
              <li><Link href="/collections?type=Sapphire" className="hover:text-(--gold) transition-colors">Sapphires</Link></li>
              <li><Link href="/collections?type=Rare" className="hover:text-(--gold) transition-colors">Rare Finds</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-(--muted)">
              <li><Link href="/about" className="hover:text-(--gold) transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Gemstone Education</Link></li>
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Bespoke Design</Link></li>
              <li><Link href="/contact" className="hover:text-(--gold) transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-(--muted)">
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Shipping & Insurance</Link></li>
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Return & Refund</Link></li>
              <li><Link href="#" className="hover:text-(--gold) transition-colors">Terms and Condition</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">The Insider</h4>
            <p className="text-(--muted) text-xs mb-4">Join our list for early access to new acquisitions.</p>
            <form className="flex border-b border-(--muted) pb-2 items-center">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none text-sm text-white placeholder-(--muted) w-full py-1"
                suppressHydrationWarning
              />
              <button type="button" className="text-(--gold) text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-(--muted) uppercase tracking-wide">
            © 2026 LOGO. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-(--muted) hover:text-(--gold) transition-colors"><Facebook size={16} /></a>
            <a href="#" className="text-(--muted) hover:text-(--gold) transition-colors"><Instagram size={16} /></a>
            <a href="#" className="text-(--muted) hover:text-(--gold) transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="text-(--muted) hover:text-(--gold) transition-colors"><Twitter size={16} /></a>
          </div>

          <div className="flex gap-6 text-[10px] text-(--muted) uppercase tracking-wide">
            <Link href="#" className="hover:text-(--gold)">Privacy</Link>
            <Link href="#" className="hover:text-(--gold)">Terms</Link>
            <Link href="#" className="hover:text-(--gold)">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
