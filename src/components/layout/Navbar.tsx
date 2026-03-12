"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/agents', label: 'Agents' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-brand-teal h-16 flex items-center justify-between px-6 lg:px-10 transition-shadow duration-200",
        isScrolled && "shadow-[0_4px_20px_rgba(0,63,71,0.25)]"
      )}
    >
      <Link href="/" className="font-serif font-black text-[22px] text-white tracking-tight">
        LP Realty<span className="text-brand-amber">.</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans font-semibold text-[11px] uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors border-b-2 border-transparent hover:border-brand-amber pb-0.5"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button asChild className="bg-brand-amber text-white font-sans font-semibold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-brand-amber-light transition-colors">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-brand-teal-light">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-teal-dark p-0 border-l-0 w-full">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <Link href="/" className="font-serif font-black text-[22px] text-white tracking-tight">
                  LP Realty<span className="text-brand-amber">.</span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-brand-teal-light">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-5 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans font-semibold text-base text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6">
                 <Button asChild className="w-full bg-brand-amber text-white font-sans font-semibold uppercase tracking-widest py-3 rounded-md hover:bg-brand-amber-light transition-colors">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
