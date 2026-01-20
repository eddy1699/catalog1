
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aurelius Lounge Chair',
    category: Category.Furniture,
    price: 1899.00,
    description: 'A masterpiece of mid-century design, reimagined for the modern home. Premium Italian leather meets hand-polished walnut.',
    features: ['Ergonomic lumbar support', 'Full-grain leather', 'Sustainable walnut wood'],
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Italy', Material: 'Leather & Walnut', Weight: '24kg', Warranty: '5 Years' }
  },
  {
    id: '2',
    name: 'Nova Magnetic Lamp',
    category: Category.Lighting,
    price: 349.00,
    description: 'Defy gravity with the Nova Lamp. Two magnetic spheres float in balance to trigger the light circuit.',
    features: ['Warm LED glow', 'USB-C Rechargeable', 'Floating magnetic switch'],
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Netherlands', Lumens: '800lm', Color: '3000K Warm', Life: '50,000 hrs' }
  },
  {
    id: '3',
    name: 'Obelisk Ceramic Vase',
    category: Category.Decor,
    price: 125.00,
    description: 'Hand-thrown matte ceramic with a brutalist architectural silhouette.',
    features: ['Handcrafted in Japan', 'Waterproof interior', 'Textured finish'],
    imageUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Japan (Kyoto)', Height: '45cm', Material: 'Stoneware' }
  },
  {
    id: '4',
    name: 'Zenith OLED 8K Display',
    category: Category.Electronics,
    price: 4500.00,
    description: 'The ultimate visual experience. Ultra-thin bezel and true-to-life color accuracy.',
    features: ['120Hz Refresh Rate', 'HDR10+ Pro', 'Built-in Soundbar'],
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'South Korea', Resolution: '7680x4320', Size: '65 inch', Panel: 'OLED' }
  },
  {
    id: '7',
    name: 'Valletta Marble Dining Table',
    category: Category.Furniture,
    price: 5200.00,
    description: 'Carved from a single block of Carrara marble, this statement piece brings Roman grandeur to your dining room.',
    features: ['Solid Carrara Marble', 'Seals up to 8 guests', 'Hand-polished edges'],
    imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Italy', Material: 'Carrara Marble', Weight: '180kg', Length: '240cm' }
  },
  {
    id: '8',
    name: 'Kyoto Cast Iron Teapot',
    category: Category.Kitchen,
    price: 210.00,
    description: 'Traditional Tetsubin craftsmanship. Enamel-coated interior for perfect heat retention and pure flavor.',
    features: ['Includes stainless infuser', 'Induction compatible', 'Lifetime durability'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173bdd99902?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Japan', Capacity: '1.2L', Finish: 'Cast Iron', Style: 'Tetsubin' }
  },
  {
    id: '9',
    name: 'Solingen Executive Knife Set',
    category: Category.Kitchen,
    price: 1250.00,
    description: 'Precision forged in the City of Blades. High-carbon stainless steel with a Damascus finish.',
    features: ['Ice-hardened steel', 'Full tang construction', 'Walnut storage block'],
    imageUrl: 'https://images.unsplash.com/photo-1594494006614-2091b9d45084?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Germany', Rockwell: '58 HRC', Handle: 'African Blackwood' }
  },
  {
    id: '10',
    name: 'Nordic Sound Capsule',
    category: Category.Electronics,
    price: 1599.00,
    description: 'Immersive 360-degree audio wrapped in Kvadrat wool fabric. Scandinavian minimalism at its sonic peak.',
    features: ['AirPlay 2 & Spotify Connect', 'RoomSense calibration', 'Multi-room support'],
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Denmark', Power: '300W', Wireless: 'Bluetooth 5.2', App: 'iOS/Android' }
  },
  {
    id: '11',
    name: 'Alpaca Cloud Throw',
    category: Category.Wellness,
    price: 380.00,
    description: 'Ethically sourced from the Andean highlands. The softest, warmest, and most luxurious natural fiber in the world.',
    features: ['Hypoallergenic', 'Hand-loomed', 'Temperature regulating'],
    imageUrl: 'https://images.unsplash.com/photo-1580302521144-18779ac339c6?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Peru', Material: '100% Baby Alpaca', Size: '150x200cm' }
  },
  {
    id: '12',
    name: 'Himalayan Zen Diffuser',
    category: Category.Wellness,
    price: 145.00,
    description: 'Ultrasonic aromatherapy meets ancient salts. Creates a halo of negative ions to purify your air.',
    features: ['7 Color Mood Lighting', 'Auto-shutoff', 'Quiet operation'],
    imageUrl: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Nepal', Coverage: '400 sq.ft', Runtime: '10 Hours' }
  },
  {
    id: '13',
    name: 'Lumière Crystal Sconce',
    category: Category.Lighting,
    price: 780.00,
    description: 'Hand-cut lead crystal that refracts light into a spectrum of elegance. Gold-plated brass accents.',
    features: ['Dimmable LED', 'Hardwired installation', 'Architectural focus'],
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'France', Voltage: '110-240V', Finish: '24k Gold Plate' }
  },
  {
    id: '14',
    name: 'Zürich Watch Winder',
    category: Category.Electronics,
    price: 2400.00,
    description: 'Precision engineering for your finest horological investments. Silent Japanese motors in a Swiss case.',
    features: ['Bi-directional rotation', 'Fingerprint lock', 'LED internal lighting'],
    imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
    specs: { Origin: 'Switzerland', Capacity: '4 Watches', Motor: 'Ultra-Quiet' }
  }
];
