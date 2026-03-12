import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Section } from "../layout/Section"
  
const faqItems = [
    {
        question: "How is LP Realty different from a traditional agency?",
        answer: "LP Realty is the only real estate agency in South Africa with a built-in media platform. Through Let's Prop In — our YouTube channel with 500,000+ followers — we market your property to a qualified, engaged audience that traditional listings simply cannot reach."
    },
    {
        question: "What areas do you operate in?",
        answer: "We specialise in Johannesburg and Cape Town, with deep expertise in Sandton, Eye of Africa Estate, Sea Point, and surrounding suburbs. We also handle selected properties beyond these markets — contact us to discuss your area."
    },
    {
        question: "How do I get a valuation on my home?",
        answer: "Reach out via our contact form or WhatsApp and one of our agents will arrange a no-obligation market assessment. We provide an honest, data-backed valuation — not an inflated figure designed to win your mandate."
    },
    {
        question: "What does it cost to list with LP Realty?",
        answer: "Our commission structure is competitive and fully transparent. There are no hidden marketing fees — our media production and platform exposure are part of what we do, not an add-on you pay extra for."
    },
    {
        question: "How do I apply for a home loan through LP Realty?",
        answer: "Our home loan service connects you with South Africa's leading banks to find the most competitive bond rate for your situation. Use the bond calculator on this page to estimate your repayments, then contact us to start the formal pre-qualification process."
    },
    {
        question: "Can LP Realty help me find a rental property?",
        answer: "Yes. We manage a curated portfolio of rental properties across Johannesburg and Cape Town. Whether you're looking for a long-term lease or a premium short-stay, speak to our operations team and we'll find the right fit."
    },
    {
        question: "How long does it take to sell a property with LP Realty?",
        answer: "Timeline depends on the property, pricing, and market conditions — but our media-driven approach consistently shortens the selling cycle. Several of our recent listings have sold within two weeks of going live, reaching buyers who were already watching the channel."
    },
    {
        question: "I'm a first-time buyer. Where do I start?",
        answer: "Start with our bond calculator to understand what you can afford, then browse our listings filtered by your budget and preferred city. When you're ready, one of our agents will guide you through every stage — from viewing to transfer — at no cost to you as the buyer."
    }
]
  
export function Faq() {
    return (
      <Section>
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-medium text-foreground">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our experts provide comprehensive answers to your most pressing questions about real estate.
            </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" defaultValue="item-0" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </Section>
    )
}
