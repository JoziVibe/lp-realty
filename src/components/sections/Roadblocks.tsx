"use client";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { Award, Eye, Film, Map } from "lucide-react";

const marqueeData = [
    "What's my home worth right now?",
    "How do I sell above asking price?",
    "Should I buy now or wait?",
    "How much deposit do I need?",
    "What does a bond application involve?",
    "Can social media sell my home faster?",
    "Which areas are growing in value?",
    "What fees do I pay when selling?",
    "Is renting smarter than buying now?",
    "How long does a typical sale take?",
    "What makes a listing attract buyers?",
    "How do I find a high-yield investment?",
    "What should I fix before listing?",
    "How do I negotiate the best price?",
];

const features = [
  {
    title: "Over a Billion Brokered",
    description: "Our agents have collectively closed over R1 Billion in residential transactions. You get that depth of experience working for you, every step of the way.",
    icon: Award,
  },
  {
    title: "500,000 Eyes on You",
    description: "No other South African agency puts your listing in front of a half-million engaged property followers. Let's Prop In turns views into verified, motivated buyers.",
    icon: Eye,
  },
  {
    title: "Media That Moves Markets",
    description: "Our in-house film studio produces cinematic content that makes properties impossible to scroll past. Every listing is a campaign, not just a classified ad.",
    icon: Film,
  },
  {
    title: "Two Cities, One Team",
    description: "With offices in Sea Point and Eye of Africa Estate, we operate across Cape Town and Johannesburg with the same standard of service in both markets.",
    icon: Map,
  },
];

export function Roadblocks() {
  const m1 = marqueeData.slice(0, Math.ceil(marqueeData.length / 3));
  const m2 = marqueeData.slice(
    Math.ceil(marqueeData.length / 3),
    Math.ceil((marqueeData.length / 3) * 2)
  );
  const m3 = marqueeData.slice(Math.ceil((marqueeData.length / 3) * 2));

  return (
    <section className="relative bg-secondary pt-20 sm:pt-40 text-secondary-foreground">
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-medium text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Removing the roadblocks to your dream home
          </h2>
          <p className="max-w-xl text-base md:text-lg text-muted-foreground">
            It's easy to get lost in a sea of listings, conflicting advice, and
            endless paperwork. We filter out the noise, focus on what truly
            matters, and give you the clarity that lets you find the perfect home.
          </p>
          <div className="relative mx-auto max-w-3xl overflow-hidden">
            <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-secondary" />
            <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-secondary" />

            <div className="-mx-6 flex w-screen flex-col md:-mx-10 lg:-mx-16">
              <Marquee className="[--duration:45s] [--gap:0.75rem]" repeat={4}>
                {m1.map((q) => (
                  <Badge
                    className="border-transparent bg-[#003f47] text-white"
                    key={q}
                    size="lg"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:0.75rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    className="border-transparent bg-[#003f47] text-white"
                    key={q}
                    size="lg"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee className="[--duration:42s] [--gap:0.75rem]" repeat={4}>
                {m3.map((q) => (
                  <Badge
                    className="border-transparent bg-[#003f47] text-white"
                    key={q}
                    size="lg"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 divide-dashed divide-border border-border border-t sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="flex flex-col gap-5 px-5 py-8 last:border-b-0 lg:border-b-0 lg:px-6 lg:py-10"
                key={feature.title}
              >
                <Icon className="size-12 text-[#003f47]" />

                <div className="flex flex-col gap-2 pt-10 lg:pt-20">
                  <h3 className="font-serif font-medium text-2xl tracking-tight sm:text-3xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
