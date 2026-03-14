import { Section } from '../layout/Section';
import { ServiceCard } from '../cards/ServiceCard';

const services = [
  {
    title: 'Expert Buyer <br> Representation',
    videoUrl: '/service/Expert Buyer Representation.mp4',
    imageHint: 'suburban house',
    href: '#',
  },
  {
    title: 'Seamless Seller <br> Representation',
    videoUrl: '/service/Seamless Seller Representation.mp4',
    imageHint: 'modern white house',
    href: '#',
  },
  {
    title: 'Tailored Media <br> Production',
    videoUrl: '/service/Tailored Media Production.mp4',
    imageHint: 'video production',
    href: '#',
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-medium text-foreground">Services: Expertise Meets Exposure</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Whether you're buying, selling, or putting your property in front of South Africa's growing real estate audience — LP Realty delivers at every stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
