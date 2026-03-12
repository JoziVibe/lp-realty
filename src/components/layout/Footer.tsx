import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'SUPPORT': [
      { label: 'Contact', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Downloads', href: '#' },
      { label: 'Locate a dealer', href: '#' },
      { label: 'Product registration', href: '#' },
      { label: 'Spare parts', href: '#' },
    ],
    'RESIDENCE': [
      { label: 'About', href: '#' },
      { label: 'Jobs', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  };
  
  const socialLinks = [
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Instagram, href: '#', name: 'Instagram' },
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold">Discover Nature's Wonders with Expert Guidance</h3>
            <p className="mt-4 text-muted-foreground">
              Sign up for our newsletter to get the latest news, updates, and offers.
            </p>
            <div className="flex gap-2 mt-6">
              <Input placeholder="Enter your email" className="bg-background"/>
              <Button>Subscribe</Button>
            </div>
             <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href, name }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold uppercase tracking-wider text-sm">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Residence. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
