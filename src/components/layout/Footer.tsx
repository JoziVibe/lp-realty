import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { Icon: Youtube, href: '#', name: 'YouTube' },
    { Icon: Instagram, href: '#', name: 'Instagram' },
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const footerLinks = {
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Our Agents', href: '/agents' },
      { label: 'Sell With Us', href: '/sell' },
      { label: 'Contact', href: '/contact' },
    ],
    'Services': [
      { label: 'Buy Property', href: '/buy' },
      { label: 'Sell Property', href: '/sell' },
      { label: 'Home Loans', href: '/home-loans' },
      { label: 'Featured', href: '/#featured' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'PAIA Manual', href: '/paia' },
    ]
  };

  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-serif font-black text-3xl tracking-tight">
              LP Realty<span className="text-brand-amber">.</span>
            </Link>
            <p className="mt-4 font-sans text-sm text-white/60 max-w-sm">
              South Africa's Only Media-First Real Estate Agency. Taking South Africa to the World.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href, name }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-amber transition-colors">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-mono text-sm font-medium uppercase tracking-[0.1em] text-white/80">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="font-sans text-sm text-white/60 hover:text-white hover:underline underline-offset-4 transition-all">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-mono text-xs text-white/40">
            &copy; {new Date().getFullYear()} LP Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
