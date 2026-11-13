export type PetSpecies = 'dog' | 'cat';
export type PetSize = 'pequeno' | 'medio' | 'grande' | 'gigante';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'banho-tosa' | 'grooming-spa' | 'veterinaria';
  shortDescription: string;
  fullDescription: string;
  durationMinutes: number;
  startingPrice: number;
  priceNote?: string;
  badge?: string;
  imageUrl: string;
  benefits: string[];
}

export interface AddonItem {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  description: string;
}

export interface BookingFormData {
  serviceId: string;
  addons: string[];
  petName: string;
  species: PetSpecies;
  breed: string;
  size: PetSize;
  petAge: string;
  healthNotes: string;
  selectedDate: string;
  selectedTime: string;
  tutorName: string;
  tutorPhone: string;
  tutorEmail: string;
  specialInstructions?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  crmv?: string;
  bio: string;
  photoUrl: string;
  isExample: boolean;
}

export interface Testimonial {
  id: string;
  tutorName: string;
  petName: string;
  petBreed: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  isExample: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
