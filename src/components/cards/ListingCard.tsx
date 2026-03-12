import type { Listing } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, Car, Ruler } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
    'For Sale': 'default',
    'New Listing': 'default',
    'Under Offer': 'secondary',
    'Sold': 'destructive',
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listing/${listing.id}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={listing.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <Badge
            variant={statusVariantMap[listing.status] || 'outline'}
            className="absolute top-3 left-3 bg-brand-amber-pale text-brand-amber-dark border-0"
          >
            {listing.status}
          </Badge>
          <div className="absolute bottom-3 left-3 font-serif text-xl font-bold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            {formatCurrency(listing.price)}
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-serif font-bold text-brand-teal text-base mb-1">{listing.title}</h3>
          <p className="font-sans text-xs text-neutral-mid flex items-center gap-1 mb-4">
            {listing.suburb}, {listing.city}
          </p>
          <div className="mt-auto border-t border-neutral-pale pt-4">
            <div className="flex justify-around gap-4 text-center">
              <div className="flex flex-col items-center">
                <BedDouble className="w-4 h-4 text-neutral-mid mb-1" />
                <span className="font-sans font-bold text-sm text-neutral-black">{listing.bedrooms}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-mid">Beds</span>
              </div>
              <div className="flex flex-col items-center">
                <Bath className="w-4 h-4 text-neutral-mid mb-1" />
                <span className="font-sans font-bold text-sm text-neutral-black">{listing.bathrooms}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-mid">Baths</span>
              </div>
              <div className="flex flex-col items-center">
                <Car className="w-4 h-4 text-neutral-mid mb-1" />
                <span className="font-sans font-bold text-sm text-neutral-black">{listing.parking}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-mid">Parking</span>
              </div>
              <div className="flex flex-col items-center">
                <Ruler className="w-4 h-4 text-neutral-mid mb-1" />
                <span className="font-sans font-bold text-sm text-neutral-black">{listing.sizeM2}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-mid">m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
