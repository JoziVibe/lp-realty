import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
import { Section } from "../layout/Section"
  
const faqItems = [
    {
        question: "What types of properties do you sell?",
        answer: "We sell a wide range of properties including single-family homes, condos, townhouses, and multi-family units. We also have experience with luxury estates and new construction projects.",
        image: "https://picsum.photos/seed/faq1/300/200",
        imageHint: "modern living room"
    },
    {
        question: "How do I know if a property is a good investment?",
        answer: "We provide comprehensive market analysis, including comparable sales, neighborhood trends, and potential for appreciation. Our goal is to ensure you make an informed decision that aligns with your financial goals."
    },
    {
        question: "Do I need to hire a real estate agent?",
        answer: "While not mandatory, a real estate agent provides invaluable expertise, negotiation skills, and access to a wider network of listings. We guide you through the complex paperwork and legalities, saving you time and stress."
    },
    {
        question: "What's the process for buying a property?",
        answer: "The process generally involves getting pre-approved for a mortgage, finding a property, making an offer, home inspection, and closing. We will guide you through each step of this journey."
    },
    {
        question: "Can I tour a property before purchasing?",
        answer: "Absolutely! We encourage property tours. We can arrange for in-person viewings or provide high-quality virtual tours to help you get a feel for the property from anywhere in the world."
    }
]
  
export function Faq() {
    return (
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-4xl font-bold">Frequently asked questions</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our experts provide comprehensive answers to your most pressing questions about real estate.
                </p>
            </div>
            <Accordion type="single" defaultValue="item-0" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                            {index === 0 && item.image && (
                                <div className="mt-4 rounded-lg overflow-hidden aspect-video relative">
                                    <Image src={item.image} alt={item.question} fill className="object-cover" data-ai-hint={item.imageHint}/>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </Section>
    )
}
