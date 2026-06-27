export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in USD (standard currency in Somalia for digital billing/pricing)
  category: 'custom' | 'signature' | 'bowls' | 'drinks';
  image: string;
  badge?: string;
  isCustomizable?: boolean;
}

export interface BuilderOption {
  id: string;
  name: string;
  priceModifier: number;
  calories?: number;
  icon?: string;
}

export interface BuilderStep {
  id: 'base' | 'protein' | 'toppings' | 'sauces';
  title: string;
  description: string;
  maxSelection: number;
  options: BuilderOption[];
}

export interface CustomBuild {
  base: BuilderOption | null;
  protein: BuilderOption | null;
  toppings: BuilderOption[];
  sauces: BuilderOption[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}
