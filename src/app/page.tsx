import { Hero } from '@/components/sections/Hero';
import { Roadblocks } from '@/components/sections/Roadblocks';
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
      <Roadblocks />
      <Stats />
      <Discover />
      <FeaturedListings />
      <Faq />
      <Testimonials />
      <Cta />
    </>
  );
}
