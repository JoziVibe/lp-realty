import type { Listing } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href="#" className="block group">
      <div className="bg-[#f4efe5] rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative h-64">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={listing.imageHint}
          />
          <Badge
            className="absolute top-4 left-4 bg-white/50 backdrop-blur-sm text-foreground"
          >
            {listing.status}
          </Badge>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-primary">{formatCurrency(listing.price)}</p>
          </div>
          <h3 className="text-2xl font-serif font-medium mb-2 text-foreground">{listing.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {listing.suburb}, {listing.city}
          </p>
          <div className="mt-auto border-t border-border pt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4" />
              <span>{listing.bedrooms} Bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4" />
              <span>{listing.bathrooms} Bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
