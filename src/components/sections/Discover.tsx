import Image from "next/image";
import { Button } from "../ui/button";
import { Section } from "../layout/Section";

export function Discover() {
    return (
        <Section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image 
                        src="https://picsum.photos/seed/map/600/450"
                        alt="Map"
                        fill
                        className="object-cover"
                        data-ai-hint="city map"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-medium text-foreground">Discover Properties with the Best Value</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore the world of premier properties and luxurious houses with Residence. We provide the best value for your investment and help you find the perfect house.
                    </p>
                    <Button size="lg" className="mt-6 rounded-full px-8">Find your next home</Button>
                </div>
            </div>
        </Section>
    )
}
