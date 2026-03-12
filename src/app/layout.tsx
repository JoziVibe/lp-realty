import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'LP Realty - Where Tradition Meets Innovation',
  description: "South Africa's Only Media-First Real Estate Agency. Taking South Africa to the World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-neutral-white text-neutral-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
