import { listings } from '@/lib/data';
import { Section } from '../layout/Section';
import { Button } from '../ui/button';
import { HorizontalScrollCarousel } from '../ui/horizontal-scroll-carousel';

export function FeaturedListings() {
  const featuredListings = listings.filter(l => l.isFeatured);

  return (
    <Section id="featured">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-medium text-foreground">Explore our premier houses</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Find the best properties and luxurious houses that are available for sale.
          </p>
        </div>
        <Button variant="outline" className="bg-background rounded-full px-6 flex-shrink-0">View All Properties</Button>
      </div>
      <HorizontalScrollCarousel listings={featuredListings} />
    </Section>
  );
}
