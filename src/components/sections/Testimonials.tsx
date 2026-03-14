import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { Section } from "../layout/Section"
import { Marquee } from "@/components/ui/marquee"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <Section className={cn(
      "bg-background text-foreground overflow-hidden",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="flex flex-col items-center gap-4 text-center sm:gap-16 w-full">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 max-w-container mx-auto">
          <h2 className="max-w-[720px] text-4xl font-medium leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex w-screen flex-col items-center justify-center mt-8">
          <Marquee pauseOnHover repeat={4} className="[--duration:40s] [--gap:1rem] w-full">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`testimonial-${i}`}
                {...testimonial}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[10%] sm:w-[20%] lg:w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[10%] sm:w-[20%] lg:w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </Section>
  )
}
