import { Section } from '../layout/Section';
import { ServiceCard } from '../cards/ServiceCard';

const services = [
  {
    title: 'Expert Buyer Representation',
    imageUrl: 'https://picsum.photos/seed/buyer-rep/600/800',
    imageHint: 'suburban house',
    href: '#',
  },
  {
    title: 'Seamless Seller Representation',
    imageUrl: 'https://picsum.photos/seed/seller-rep/600/800',
    imageHint: 'modern white house',
    href: '#',
  },
  {
    title: 'Tailored Rent Services',
    imageUrl: 'https://picsum.photos/seed/rent-services/600/800',
    imageHint: 'brick house suburbs',
    href: '#',
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-medium text-foreground">Comprehensive Real Estate Services</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          From buying and selling to renting, our dedicated team provides tailored services to meet your every real estate need with professionalism and expertise.
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
