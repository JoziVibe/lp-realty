import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/ui/header-2';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Instrument_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const instrument_serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Residence - Build Your Future, One Property at a Time.',
  description: 'Find your next property with Residence. We help you find the best value properties.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, instrument_serif.variable)}>
      <body className={cn("antialiased font-sans")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
