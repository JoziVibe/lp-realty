import { Hero } from '@/components/sections/Hero';
import { SecondaryHero } from '@/components/sections/SecondaryHero';
import { Stats } from '@/components/sections/Stats';
import { Discover } from '@/components/sections/Discover';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { Faq } from '@/components/sections/Faq';
import { Testimonials } from '@/components/sections/Testimonials';
import { Cta } from '@/components/sections/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <SecondaryHero />
      <Stats />
      <Discover />
      <FeaturedListings />
      <Faq />
      <Testimonials />
      <Cta />
    </>
  );
}
