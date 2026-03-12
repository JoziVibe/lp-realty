"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import type { Listing } from "@/lib/types"
import { ListingCard } from "../cards/ListingCard"

interface HorizontalScrollCarouselProps {
  listings: Listing[]
}

export const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ listings }) => {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  // Adjust the transform range for a better start/end experience
  const x = useTransform(scrollYProgress, [0.1, 0.95], ["5%", "-95%"]) 

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8"
        >
          {listings.map((listing) => (
            <div key={listing.id} className="w-[380px] flex-shrink-0">
                <ListingCard listing={listing} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
