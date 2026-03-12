import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { AgentsSection } from '@/components/sections/AgentsSection';
import { BondCalculatorSection } from '@/components/sections/BondCalculatorSection';
import { SocialProof } from '@/components/sections/SocialProof';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ContactSection } from '@/components/sections/ContactSection';
import { PartnersStrip } from '@/components/sections/PartnersStrip';
import { Testimonials } from '@/components/sections/Testimonials';


export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FeaturedListings />
      <PartnersStrip />
      <BondCalculatorSection />
      <Testimonials />
      <AgentsSection />
      <SocialProof />
      <ContactSection />
    </>
  );
}
