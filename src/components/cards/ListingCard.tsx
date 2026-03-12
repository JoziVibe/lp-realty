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
    <Link href="#" className="block group relative overflow-hidden rounded-2xl h-[450px]">
      <Image
        src={listing.imageUrl}
        alt={listing.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        data-ai-hint={listing.imageHint}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#003f47]/80 via-[#003f47]/40 to-transparent" />
      
      <Badge
        className="absolute top-4 left-4 bg-white/50 backdrop-blur-sm border-white/20 text-[#003f47] hover:bg-white/70"
      >
        {listing.status}
      </Badge>

      <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
          <div>
              <h3 className="text-2xl font-bold">{formatCurrency(listing.price)}</h3>
              <p className="text-lg font-serif font-medium mt-1">{listing.title}</p>
              <p className="text-sm text-gray-300 mt-2">
                  {listing.suburb}, {listing.city}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm font-light">
                  <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      <span>{listing.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4" />
                      <span>{listing.bathrooms} Baths</span>
                  </div>
              </div>
          </div>
      </div>
    </Link>
  );
}
