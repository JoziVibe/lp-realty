import type { Testimonial } from '@/lib/types';
import Image from 'next/image';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            width={80}
            height={80}
            className="rounded-full"
            data-ai-hint={testimonial.imageHint}
          />
           <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-serif text-2xl">
            “
          </div>
        </div>
      </div>
      <p className="text-lg text-muted-foreground mb-6">
        "{testimonial.quote}"
      </p>
      <h4 className="font-bold text-lg">{testimonial.name}</h4>
      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
    </div>
  );
}
