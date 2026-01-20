'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collections' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
          isScrolled ? 'bg-[rgba(3,10,19,0.8)] backdrop-blur-md border-[var(--border)] py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-[var(--gold)]">
            LOGO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[var(--gold)]',
                  pathname === link.href ? 'text-[var(--gold)] border-b border-[var(--gold)] pb-1' : 'text-[var(--text)]'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6 text-[var(--text)]">
            <button className="hover:text-[var(--gold)] transition-colors">
              <User size={20} />
            </button>
            <button className="hover:text-[var(--gold)] transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="hover:text-[var(--gold)] transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--text)] hover:text-[var(--gold)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-xl uppercase tracking-widest transition-colors duration-300',
                    pathname === link.href ? 'text-[var(--gold)]' : 'text-[var(--text)]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-8 mt-8 text-[var(--text)]">
                <button className="hover:text-[var(--gold)]"><User size={24} /></button>
                <button className="hover:text-[var(--gold)]"><ShoppingCart size={24} /></button>
                <button className="hover:text-[var(--gold)]"><Search size={24} /></button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
