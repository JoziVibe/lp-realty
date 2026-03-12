import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Section } from "../layout/Section";

export function SecondaryHero() {
    return (
        <Section>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-bold">Your primary home might begin to feel left out.</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Image src="https://picsum.photos/seed/icon/48/48" alt="Icon" width={24} height={24} data-ai-hint="compass direction" />
                    </div>
                    <span>Explore the world of premier properties and luxurious houses with Residence</span>
                </div>
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden">
                    <Image 
                        src="https://picsum.photos/seed/secondary-hero-1/800/1000"
                        alt="Modern House"
                        fill
                        className="object-cover"
                        data-ai-hint="modern house stone"
                    />
                </div>
                <div className="grid grid-rows-2 gap-8">
                    <Card className="p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold">Big things can happen in small corners</h3>
                            <p className="mt-2 text-muted-foreground">Our thoughtfully designed spaces prove that luxury and comfort aren't limited by size.</p>
                        </div>
                        <Button variant="secondary" className="w-fit">View Details</Button>
                    </Card>
                     <div className="relative h-full rounded-2xl overflow-hidden">
                        <Image 
                            src="https://picsum.photos/seed/secondary-hero-2/800/400"
                            alt="Modern House 2"
                            fill
                            className="object-cover"
                            data-ai-hint="modern house architecture"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end">
                            <h3 className="text-white font-bold text-xl">Rooftop terraces</h3>
                            <Button variant="ghost" className="text-white justify-start p-0 h-auto mt-2 hover:bg-transparent hover:text-white/80">Explore Residences &rarr;</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
