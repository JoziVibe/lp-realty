import type { Agent, Listing, Testimonial } from './types';

export const agents: Agent[] = [
  { id: 'taylor', name: 'Taylor', role: 'Principal', imageUrl: 'https://picsum.photos/seed/agent1/200/200', imageHint: 'professional person', email: 'taylor@lprealty.co.za', initials: 'T' },
  { id: 'sibiya', name: 'Sibiya', role: 'Lead Agent', imageUrl: 'https://picsum.photos/seed/agent2/200/200', imageHint: 'professional woman', email: 'sibiya@lprealty.co.za', initials: 'S' },
  { id: 'bradley', name: 'Bradley', role: 'Sales Specialist', imageUrl: 'https://picsum.photos/seed/agent3/200/200', imageHint: 'person portrait', email: 'bradley@lprealty.co.za', initials: 'B' },
  { id: 'neo', name: 'Neo', role: 'Rental Expert', imageUrl: 'https://picsum.photos/seed/agent4/200/200', imageHint: 'man portrait', email: 'neo@lprealty.co.za', initials: 'N' },
];

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Modern Apartment with City Views',
    suburb: 'Sea Point',
    city: 'Cape Town',
    price: 4250000,
    bedrooms: 2,
    bathrooms: 2,
    sizeM2: 120,
    status: 'For Sale',
    type: 'Apartment',
    parking: 2,
    features: ['Ocean View', '24/7 Security', 'Rooftop Pool'],
    imageUrl: 'https://picsum.photos/seed/listing1/600/400',
    imageHint: 'modern apartment',
    agentId: 'sibiya',
    isFeatured: true,
    description: 'Discover unparalleled luxury in this stunning 2-bedroom apartment in the heart of Sea Point. Offering breathtaking city and ocean views, this modern residence is an opportunity for a discerning buyer. The open-plan living area flows seamlessly onto a private balcony, perfect for entertaining. With premium finishes and state-of-the-art security, this is an investment in a world-class lifestyle. Explore the pinnacle of Cape Town living. Enquire today to book your private viewing.'
  },
  {
    id: '2',
    title: 'Spacious Family Home in Sandton',
    suburb: 'Sandhurst',
    city: 'Johannesburg',
    price: 12500000,
    bedrooms: 5,
    bathrooms: 4,
    sizeM2: 600,
    plotM2: 2000,
    status: 'New Listing',
    type: 'House',
    parking: 3,
    features: ['Large Garden', 'Swimming Pool', 'Staff Quarters', 'Borehole'],
    imageUrl: 'https://picsum.photos/seed/listing2/600/400',
    imageHint: 'family house',
    agentId: 'taylor',
    isFeatured: true,
    description: 'An exceptional family home situated in the prestigious suburb of Sandhurst. This magnificent property boasts 5 spacious bedrooms, a beautifully landscaped garden, and a sparkling pool. Perfect for both grand-scale entertaining and intimate family life. A true sanctuary in the city, this residence represents a significant value opportunity for those seeking space, luxury, and security. Connect with us to discover this exclusive mandate.'
  },
  {
    id: '3',
    title: 'Luxury Penthouse with Panoramic Views',
    suburb: 'Clifton',
    city: 'Cape Town',
    price: 35000000,
    bedrooms: 3,
    bathrooms: 3,
    sizeM2: 350,
    status: 'For Sale',
    type: 'Penthouse',
    parking: 2,
    features: ['Panoramic Views', 'Private Elevator', 'Infinity Pool', 'Smart Home'],
    imageUrl: 'https://picsum.photos/seed/listing3/600/400',
    imageHint: 'luxury penthouse',
    agentId: 'bradley',
    isFeatured: true,
    description: 'Experience the height of luxury in this exclusive Clifton penthouse. With 360-degree views of the Atlantic Ocean and Twelve Apostles, this property is a masterpiece of design and craftsmanship. Featuring a private infinity pool and smart home automation, every detail has been curated for an effortless and sophisticated lifestyle. This is more than a home; it\'s a statement. Book your confidential viewing to explore this once-in-a-lifetime opportunity.'
  },
  {
    id: '4',
    title: 'Chic Townhouse in Parkhurst',
    suburb: 'Parkhurst',
    city: 'Johannesburg',
    price: 3800000,
    bedrooms: 3,
    bathrooms: 2,
    sizeM2: 180,
    status: 'Under Offer',
    type: 'Townhouse',
    parking: 2,
    features: ['Private Garden', 'Modern Kitchen', 'High-Speed Fibre'],
    imageUrl: 'https://picsum.photos/seed/listing4/600/400',
    imageHint: 'townhouse exterior',
    agentId: 'neo',
    isFeatured: true,
    description: 'A stylish and secure townhouse in the vibrant community of Parkhurst. This modern 3-bedroom home offers a perfect blend of comfort and convenience, with a private garden and contemporary finishes throughout. Ideal for young professionals or families, it presents a fantastic investment in one of Johannesburg\'s most sought-after neighborhoods. Discover the lifestyle you deserve. Contact us for more information.'
  }
];

export const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'The Nkosi Family',
      role: 'Home Sellers in Houghton',
      quote: "LP Realty's media-first approach was a game-changer. Our home sold in a week for a price we didn't think was possible. Their team is world-class.",
      imageUrl: "https://picsum.photos/seed/testimonial1/100/100",
      imageHint: "happy family"
    },
    {
      id: '2',
      name: 'Mr. J. van der Merwe',
      role: 'Investor, Cape Town',
      quote: "As an investor, I value speed and expertise. Taylor and his team understand the high-end market better than anyone. They consistently bring me opportunities I can't find elsewhere.",
      imageUrl: "https://picsum.photos/seed/testimonial2/100/100",
      imageHint: "business man"
    },
    {
      id: '3',
      name: 'Dr. T. Pillay',
      role: 'First-Time Buyer in Sandton',
      quote: "The process felt effortless. From finding the perfect apartment to navigating the bond application, Sibiya was a true partner. I felt supported every step of the way.",
      imageUrl: "https://picsum.photos/seed/testimonial3/100/100",
      imageHint: "smiling woman"
    },
    {
      id: '4',
      name: 'The Chengs',
      role: 'Relocating from Hong Kong',
      quote: "Buying a home from overseas is daunting, but LP Realty made it seamless. Their video content and virtual tours gave us complete confidence before we even landed in South Africa.",
      imageUrl: "https://picsum.photos/seed/testimonial4/100/100",
      imageHint: "asian couple"
    }
  ];

export const partners = [
  { name: 'Partner 1', logoUrl: 'https://picsum.photos/seed/logo1/150/40', imageHint: 'company logo' },
  { name: 'Partner 2', logoUrl: 'https://picsum.photos/seed/logo2/150/40', imageHint: 'company logo' },
  { name: 'Partner 3', logoUrl: 'https://picsum.photos/seed/logo3/150/40', imageHint: 'company logo' },
  { name: 'Partner 4', logoUrl: 'https://picsum.photos/seed/logo4/150/40', imageHint: 'company logo' },
  { name: 'Partner 5', logoUrl: 'https://picsum.photos/seed/logo5/150/40', imageHint: 'company logo' },
  { name: 'Partner 6', logoUrl: 'https://picsum.photos/seed/logo6/150/40', imageHint: 'company logo' },
];
