'use client';

import { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "../ui/button";
import { Section } from "../layout/Section";
import { ArrowUpRight } from "lucide-react";

export function Cta() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <Section ref={sectionRef} removePadding>
            <div className="relative container bg-gray-900 rounded-2xl text-white py-20 px-8 text-center overflow-hidden">
                <motion.div style={{ y: imageY }} className="absolute inset-0">
                    <Image
                        src="/background/CTA BG.jpg"
                        alt="Modern house"
                        fill
                        className="object-cover opacity-30"
                        data-ai-hint="modern house exterior"
                    />
                </motion.div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-medium">Your Next Move <span className="italic">Starts Here.</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Whether you're buying your first home, selling your most valuable asset, or building a property portfolio — LP Realty brings the market expertise and media reach to make it happen. Let's talk.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="font-semibold px-8 py-6 rounded-full text-base w-full sm:w-auto">
                            Buy A Home
                            <ArrowUpRight />
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold px-8 py-6 rounded-full text-base w-full sm:w-auto bg-transparent border-white/40 hover:bg-white/10 text-white hover:text-[#EC9040]">
                            List Your Home
                            <ArrowUpRight />
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
