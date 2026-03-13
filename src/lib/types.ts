export interface Listing {
  id: string;
  title: string;
  suburb: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  status: 'For Sale' | 'For Rent' | 'Sold';
  imageUrl: string;
  imageHint: string;
  isFeatured?: boolean;
}

export interface Agent {
  id:string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  email: string;
  initials: string;
  bio: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    imageUrl: string;
    imageHint: string;
}
