import type { Testimonial } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col border border-neutral-light">
      <Quote className="w-8 h-8 text-brand-amber" />
      <p className="font-sans text-sm text-neutral-charcoal leading-relaxed mt-4 flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center mt-6">
        <Avatar className="w-12 h-12">
          <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint}/>
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-sans font-semibold text-sm text-brand-teal">{testimonial.name}</p>
          <p className="font-mono text-xs text-neutral-mid">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
