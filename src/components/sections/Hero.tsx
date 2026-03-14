'use client';

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const MARQUEE_IMAGES = [
  "/marquee/1.jpg",
  "/marquee/2.jpg",
  "/marquee/3.jpg",
  "/marquee/4.jpg",
  "/marquee/5.jpg",
  "/marquee/6.jpg",
  "/marquee/7.jpg",
  "/marquee/8.jpg",
  "/marquee/9.jpg",
  "/marquee/10.jpg",
  "/marquee/11.jpg",
  "/marquee/12.jpg",
];

export function Hero() {
  return (
    <AnimatedMarqueeHero
      tagline="South Africa's Premier Real Estate Agency."
      title={<>Where Luxury Homes Meet <span className="italic text-primary">Their Audience.</span></>}
      description="We're South Africa's media-first real estate agency — backed by 500,000+ followers, an in-house film studio, and agents who've brokered over R1 billion in deals."
      images={MARQUEE_IMAGES}
    />
  );
}
