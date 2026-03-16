"use client"

import { useState } from "react"
import Image from "next/image"

export interface MinimalTestimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsMinimalProps {
  testimonials: MinimalTestimonial[];
}

export function TestimonialsMinimal({ testimonials }: TestimonialsMinimalProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-8 md:py-16">
      {/* Quote */}
      <div className="relative min-h-[140px] md:min-h-[80px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-lg md:text-2xl font-serif leading-relaxed text-foreground
              transition-all duration-500 ease-out text-center md:text-left
              ${
                active === i
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
        {/* Active Author Info (Moved above avatars on mobile) */}
        <div className="relative flex-1 min-h-[44px] w-full order-1 md:order-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center items-center md:items-start
                transition-all duration-400 ease-out
                ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
              `}
            >
              <span className="text-sm font-semibold text-foreground text-center md:text-left">{t.name}</span>
              <span className="text-xs text-muted-foreground text-center md:text-left">{t.role}</span>
            </div>
          ))}
        </div>
        
        {/* Divider (Hidden on mobile) */}
        <div className="h-8 w-px bg-border hidden md:block order-2" />

        {/* Avatars */}
        <div className="flex -space-x-2 order-3 md:order-1 justify-center md:justify-start mt-4 md:mt-0">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative w-12 h-12 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 ring-background
                transition-all duration-300 ease-out
                ${active === i ? "z-10 scale-110 ring-primary" : "grayscale hover:grayscale-0 hover:scale-105"}
              `}
            >
              <Image src={t.image || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
