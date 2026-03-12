import { testimonials } from '@/lib/data';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Section, SectionLabel } from '../layout/Section';

export function Testimonials() {
  return (
    <Section className="bg-neutral-pale">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Client Stories</SectionLabel>
        <h2>What Our Clients Say</h2>
        <p className="mt-4 text-base text-neutral-mid">
          Our success is measured by the lasting relationships we build.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
