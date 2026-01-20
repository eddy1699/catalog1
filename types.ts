
export enum Category {
  Furniture = 'Furniture',
  Lighting = 'Lighting',
  Decor = 'Decor',
  Electronics = 'Electronics',
  Kitchen = 'Kitchen',
  Wellness = 'Wellness'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  specs: Record<string, string>;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
