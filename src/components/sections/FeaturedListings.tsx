import { listings } from '@/lib/data';
import { ListingCard } from '@/components/cards/ListingCard';
import { Section } from '../layout/Section';
import { Button } from '../ui/button';

export function FeaturedListings() {
  const featuredListings = listings.filter(l => l.isFeatured);

  return (
    <Section id="featured" className="bg-secondary">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold">Explore our premier houses</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Find the best properties and luxurious houses that are available for sale.
          </p>
        </div>
        <Button variant="outline" className="bg-background rounded-full px-6 flex-shrink-0">View All Properties</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </Section>
  );
}
