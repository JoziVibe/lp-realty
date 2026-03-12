import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section, SectionLabel } from "../layout/Section";

export function ContactSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2>Let's Start a Conversation</h2>
            <p className="mt-4 text-base text-neutral-mid max-w-md">
                Whether you're looking to buy, sell, or simply have a question, our team is ready to assist you with all your real estate needs.
            </p>
            <div className="mt-8 space-y-4 font-sans text-neutral-charcoal">
                <p><strong>Email:</strong> <a href="mailto:hello@lprealty.co.za" className="text-brand-amber hover:underline">hello@lprealty.co.za</a></p>
                <p><strong>Phone:</strong> +27 11 123 4567</p>
                <p><strong>Johannesburg Office:</strong> 123 Main Street, Sandton, 2196</p>
                <p><strong>Cape Town Office:</strong> 456 Beach Road, Sea Point, 8005</p>
            </div>
        </div>
        <form className="space-y-4 bg-neutral-pale p-8 rounded-2xl">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button className="w-full bg-brand-teal text-white py-3 hover:bg-brand-teal-light rounded-sm">Send Message</Button>
        </form>
      </div>
    </Section>
  );
}
