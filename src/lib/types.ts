export interface Listing {
  id: string;
  title: string;
  suburb: string;
  city: 'Johannesburg' | 'Cape Town';
  price: number;
  bedrooms: number;
  bathrooms: number;
  sizeM2: number;
  plotM2?: number;
  status: 'For Sale' | 'To Rent' | 'Sold' | 'New Listing' | 'Under Offer' | 'Off Market' | 'Coming Soon';
  type: 'House' | 'Apartment' | 'Estate' | 'Penthouse' | 'Townhouse' | 'Residential' | 'Commercial' | 'New Development';
  parking: number;
  features: string[];
  imageUrl: string;
  imageHint: string;
  agentId: string;
  isFeatured?: boolean;
  youtubeId?: string;
  description: string;
}

export interface Agent {
  id:string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  email: string;
  initials: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    imageUrl: string;
    imageHint: string;
}
