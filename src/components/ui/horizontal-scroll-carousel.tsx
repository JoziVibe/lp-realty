"use client"

import * as React from "react"
import type { Listing } from "@/lib/types"
import { ListingCard } from "../cards/ListingCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface HorizontalScrollCarouselProps {
  listings: Listing[]
}

export const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ listings }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {listings.map((listing) => (
          <CarouselItem key={listing.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ListingCard listing={listing} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
