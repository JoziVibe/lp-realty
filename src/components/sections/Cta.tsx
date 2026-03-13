import Image from "next/image";
import { Button } from "../ui/button";
import { Section } from "../layout/Section";

export function Cta() {
    return (
        <Section removePadding>
            <div className="relative container bg-gray-900 rounded-2xl text-white py-20 px-8 text-center overflow-hidden">
                <Image
                    src="/background/CTA BG.jpg"
                    alt="Modern house"
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint="modern house exterior"
                />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-medium">Ready to Make Your Dream<br />Property a Reality?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        Explore our listings, connect with our agents, and find the perfect property that exceeds your expectations.
                    </p>
                    <Button size="lg" className="mt-8 font-semibold px-8 py-6 rounded-full text-base">
                        Join Now
                    </Button>
                </div>
            </div>
        </Section>
    )
}
