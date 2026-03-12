import { testimonials } from '@/lib/data';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Section } from '../layout/Section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Testimonials() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <div className='flex justify-center items-center mb-4'>
            <div className="flex -space-x-2 overflow-hidden">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/avatar1/40/40" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/avatar2/40/40" />
                    <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/avatar3/40/40" />
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>
            </div>
            <p className='ml-4 text-sm font-medium'>More than <span className='font-bold text-primary'>200+</span> Client Reviews</p>
        </div>
        <h2 className="text-4xl font-bold">What our clients say about us</h2>
      </div>
      <div className="mt-12">
      <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                 <div className="p-1">
                    <TestimonialCard testimonial={testimonial} />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="static -translate-x-0 -translate-y-0" />
            <CarouselNext className="static -translate-x-0 -translate-y-0" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
