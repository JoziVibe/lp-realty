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
  title: 'LP Realty - Where Luxury Homes Find Their People.',
  description: "We're South Africa's media-first real estate agency — backed by 500,000+ followers, an in-house film studio, and agents who've brokered over R1 billion in deals.",
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
