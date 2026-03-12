import { listings } from '@/lib/data';
import { ListingCard } from '@/components/cards/ListingCard';
import { Section, SectionLabel } from '../layout/Section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function FeaturedListings() {
  const featuredListings = listings.filter(l => l.isFeatured);

  return (
    <Section id="featured">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Our Portfolio</SectionLabel>
        <h2>Featured Listings</h2>
        <p className="mt-4 text-base text-neutral-mid">
          A curated selection of our finest properties. Each one tells a unique story.
        </p>
      </div>
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredListings.map((listing) => (
              <CarouselItem key={listing.id} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <ListingCard listing={listing} />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </Section>
  );
}
