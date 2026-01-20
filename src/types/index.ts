export type GemType = 'Emerald' | 'Ruby' | 'Sapphire' | 'Diamond' | 'Rare Find';

export interface Gemstone {
  id: string;
  slug: string;
  name: string;
  type: GemType;
  priceFrom: number;
  image: string;
  description: string;
  specs: {
    origin: string;
    carat: number;
    cut: string;
    clarity?: string;
    certification: string[];
  };
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ContactInfo {
  id: string;
  title: string;
  details: string;
  subDetails: string;
  type: 'phone' | 'email' | 'whatsapp';
}
