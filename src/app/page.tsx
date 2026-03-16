import { Hero } from '@/components/sections/Hero';
import { Roadblocks } from '@/components/sections/Roadblocks';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { Faq } from '@/components/sections/Faq';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { Cta } from '@/components/sections/Cta';
import { MeetTheTeam } from '@/components/sections/MeetTheTeam';
import { BondCalculator } from '@/components/sections/BondCalculator';
import { Services } from '@/components/sections/Services';

const testimonials = [
  {
    author: {
      name: "Marcus Van Wyk",
      handle: "Seller • Sandton",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The exposure our home got through LP Realty's YouTube channel was unmatched. We had serious buyers walking through the door on day one, and sold above our asking price.",
  },
  {
    author: {
      name: "Sarah Silverman",
      handle: "Buyer • Cape Town",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with this team was a pleasure. They understood exactly what we were looking for in an investment property and guided us flawlessly through the entire process.",
  },
  {
    author: {
      name: "Jason Ndlovu",
      handle: "Seller • Eye of Africa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The media production quality was cinematic. It didn't just look like a property listing, it looked like a lifestyle campaign. It completely justified the premium valuation we were aiming for."
  },
  {
    author: {
      name: "Claire Bennett",
      handle: "Buyer • Sea Point",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Honest, direct, and incredibly responsive. From our initial viewing to final transfer, LP Realty handled everything with total professionalism. I wouldn't use anyone else."
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      <Roadblocks />
      <FeaturedListings />
      <Services />
      <MeetTheTeam />
      <Faq />
      <BondCalculator />
      <TestimonialsSection 
        title={<>Trusted by South Africa's <span className="italic text-primary">Premium Market</span></>}
        description="Join the hundreds of buyers and sellers who have experienced the LP Realty difference."
        testimonials={testimonials}
      />
      <Cta />
    </>
  );
}
