import { Hero } from '@/components/sections/Hero';
import { Roadblocks } from '@/components/sections/Roadblocks';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { Faq } from '@/components/sections/Faq';
import { Testimonials } from '@/components/sections/Testimonials';
import { Cta } from '@/components/sections/Cta';
import { MeetTheTeam } from '@/components/sections/MeetTheTeam';
import { BondCalculator } from '@/components/sections/BondCalculator';

export default function Home() {
  return (
    <>
      <Hero />
      <Roadblocks />
      <FeaturedListings />
      <MeetTheTeam />
      <Faq />
      <BondCalculator />
      <Testimonials />
      <Cta />
    </>
  );
}
