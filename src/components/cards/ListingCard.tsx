'use client';
import type { Listing } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Car, MapPin, ArrowUpRight } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link 
      href="#" 
      className="block group relative overflow-hidden rounded-2xl h-[450px]"
    >
      <Image
        src={listing.imageUrl}
        alt={listing.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        data-ai-hint={listing.imageHint}
      />
      
      <Badge
        className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/20 text-[#003f47] hover:bg-white/50"
      >
        {listing.status}
      </Badge>

      <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-5 h-5" />
      </div>

      <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
        {/* This is the gradient and blur effect */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_top,white_40%,transparent)]" />
          
        {/* This holds the content and sits above the effect layer */}
        <div className="relative">
            <h3 className="text-2xl font-bold">{formatCurrency(listing.price)}</h3>
            <p className="text-lg font-serif font-medium mt-1 text-primary">{listing.title}</p>
            
            <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{listing.suburb}, {listing.city}</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs">
                    <Bed className="w-4 h-4" />
                    <span>{listing.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs">
                    <Bath className="w-4 h-4" />
                    <span>{listing.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs">
                    <Car className="w-4 h-4" />
                    <span>{listing.parking}</span>
                </div>
            </div>
        </div>
      </div>
    </Link>
  );
}
