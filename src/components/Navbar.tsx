'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
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
          isScrolled ? 'bg-(--bg)/80 backdrop-blur-md border-(--border) py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center">
          {/* Logo */}
          <div className="flex-none">
            <Link href="/" className="text-3xl font-bold tracking-widest text-white font-inter">
              LOGO
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-bold tracking-wide transition-colors duration-300 hover:text-(--gold)',
                  pathname === link.href ? 'text-(--gold)' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-8 text-white flex-none">
            <button className="hover:text-(--gold) transition-colors">
              <User size={24} />
            </button>
            <button className="hover:text-(--gold) transition-colors">
              <ShoppingBag size={24} />
            </button>
            <button className="hover:text-(--gold) transition-colors">
              <Search size={24} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden ml-auto text-white hover:text-(--gold)"
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
            className="fixed inset-0 z-40 bg-(--bg) pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-xl font-bold tracking-widest transition-colors duration-300',
                    pathname === link.href ? 'text-(--gold)' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-8 mt-8 text-white">
                <button className="hover:text-(--gold)"><User size={24} /></button>
                <button className="hover:text-(--gold)"><ShoppingBag size={24} /></button>
                <button className="hover:text-(--gold)"><Search size={24} /></button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
