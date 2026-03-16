import { cn } from "@/lib/utils"
import { Section } from "../layout/Section"
import { TestimonialsMinimal, type MinimalTestimonial } from "@/components/ui/minimal-testimonial"

interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  title: React.ReactNode
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

  const mappedTestimonials: MinimalTestimonial[] = testimonials.map(t => ({
    quote: t.text,
    name: t.author.name,
    role: t.author.handle,
    image: t.author.avatar,
  }));

  return (
    <Section className={cn(
      "bg-secondary text-foreground overflow-hidden",
      "py-12 sm:py-24 md:py-32",
      className
    )}>
      <div className="flex flex-col items-center gap-4 text-center sm:gap-8 w-full">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 max-w-container mx-auto">
          <h2 className="max-w-[720px] text-4xl font-medium leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
        
        <TestimonialsMinimal testimonials={mappedTestimonials} />
      </div>
    </Section>
  )
}
