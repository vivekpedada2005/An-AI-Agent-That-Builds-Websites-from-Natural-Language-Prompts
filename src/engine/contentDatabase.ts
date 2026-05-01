import { type SubNiche } from './types';

export interface ContentItem {
  id: string;
  name: string;
  desc: string;
  price?: string;
  category: string;
  emoji: string;
  tags?: string[];
  specs?: Record<string, string>;
  isFeatured?: boolean;
}

export const CONTENT_DB: Partial<Record<SubNiche, ContentItem[]>> = {
  beauty_store: [
    { id: '1', name: 'Radiance Serum', desc: 'Vitamin C + Hyaluronic Acid', price: '$48', category: 'Skincare', emoji: '✨', isFeatured: true, tags: ['Vegan', 'Cruelty Free'] },
    { id: '2', name: 'Velvet Matte Lipstick', desc: 'Long-lasting hydration in 12 shades', price: '$24', category: 'Makeup', emoji: '💄', isFeatured: true },
    { id: '3', name: 'Botanical Cleanser', desc: 'Gentle foaming face wash', price: '$32', category: 'Skincare', emoji: '🌿', isFeatured: false },
    { id: '4', name: 'Rosewater Mist', desc: 'Refreshing facial toner', price: '$18', category: 'Skincare', emoji: '🌹', isFeatured: false },
    { id: '5', name: 'Night Repair Cream', desc: 'Intensive overnight hydration', price: '$65', category: 'Skincare', emoji: '🌙', isFeatured: true },
    { id: '6', name: 'Luminous Foundation', desc: 'Medium coverage with a dewy finish', price: '$42', category: 'Makeup', emoji: '✨', isFeatured: false },
  ],
  sneaker_store: [
    { id: '1', name: 'Aero X-1', desc: 'Lightweight performance runner', price: '$160', category: 'Running', emoji: '👟', isFeatured: true, specs: { 'Weight': '8.2oz', 'Drop': '8mm' } },
    { id: '2', name: 'Retro High OG', desc: 'Classic court silhouette', price: '$180', category: 'Lifestyle', emoji: '🔥', isFeatured: true, tags: ['Limited Edition'] },
    { id: '3', name: 'Cloud Strider', desc: 'Max cushion daily trainer', price: '$140', category: 'Running', emoji: '☁️', isFeatured: false },
    { id: '4', name: 'Court Classic', desc: 'Minimalist leather sneaker', price: '$110', category: 'Lifestyle', emoji: '👟', isFeatured: false },
    { id: '5', name: 'Trail Blazer Pro', desc: 'Rugged off-road traction', price: '$150', category: 'Trail', emoji: '⛰️', isFeatured: false },
    { id: '6', name: 'Velocity Elite', desc: 'Carbon-plated race day shoe', price: '$250', category: 'Racing', emoji: '⚡', isFeatured: true },
  ],
  gadget_store: [
    { id: '1', name: 'Quantum Pro Laptop', desc: 'M3 Chip, 32GB RAM, 1TB SSD', price: '$1,999', category: 'Computers', emoji: '💻', isFeatured: true, specs: { 'Display': '14" Mini-LED', 'Battery': '18hrs' } },
    { id: '2', name: 'SonicBuds Active', desc: 'Noise-cancelling wireless earbuds', price: '$199', category: 'Audio', emoji: '🎧', isFeatured: true },
    { id: '3', name: 'VisionX Smartwatch', desc: 'Health tracking & GPS', price: '$299', category: 'Wearables', emoji: '⌚', isFeatured: false },
    { id: '4', name: 'AeroPad Tablet', desc: '11" screen, perfect for creators', price: '$599', category: 'Tablets', emoji: '📱', isFeatured: false },
    { id: '5', name: 'PowerCore 10k', desc: 'Magnetic wireless power bank', price: '$49', category: 'Accessories', emoji: '🔋', isFeatured: false },
    { id: '6', name: 'Lumina 4K Cam', desc: 'Professional streaming camera', price: '$149', category: 'Accessories', emoji: '📷', isFeatured: true },
  ],
  perfume_store: [
    { id: '1', name: 'Midnight Oud', desc: 'Rich amber and dark woods', price: '$185', category: 'Evening', emoji: '🌙', isFeatured: true, specs: { 'Top': 'Bergamot', 'Heart': 'Oud', 'Base': 'Amber' } },
    { id: '2', name: 'Citrus Breeze', desc: 'Fresh Sicilian lemon and basil', price: '$120', category: 'Daytime', emoji: '🍋', isFeatured: false },
    { id: '3', name: 'Rose absolute', desc: 'Pure Damascus rose extract', price: '$150', category: 'Floral', emoji: '🌹', isFeatured: true },
    { id: '4', name: 'Oceanic Blue', desc: 'Sea salt and driftwood', price: '$110', category: 'Fresh', emoji: '🌊', isFeatured: false },
  ],
  furniture_store: [
    { id: '1', name: 'Odin Lounge Chair', desc: 'Walnut frame with linen upholstery', price: '$850', category: 'Living Room', emoji: '🪑', isFeatured: true },
    { id: '2', name: 'Freya Sectional', desc: 'Modular velvet sofa', price: '$2,200', category: 'Living Room', emoji: '🛋️', isFeatured: true },
    { id: '3', name: 'Norden Dining Table', desc: 'Solid oak, seats 6', price: '$1,100', category: 'Dining', emoji: '🍽️', isFeatured: false },
    { id: '4', name: 'Lumi Table Lamp', desc: 'Brass and frosted glass', price: '$145', category: 'Lighting', emoji: '💡', isFeatured: false },
  ],
  gym_fitness: [
    { id: '1', name: 'HIIT Burn', desc: 'High-intensity interval training', category: 'Classes', emoji: '🔥', isFeatured: true },
    { id: '2', name: 'Powerlifting 101', desc: 'Master the big three lifts', category: 'Programs', emoji: '🏋️', isFeatured: true },
    { id: '3', name: 'Core Flow Yoga', desc: 'Vinyasa meets core strengthening', category: 'Classes', emoji: '🧘‍♀️', isFeatured: false },
    { id: '4', name: 'Pro Membership', desc: 'Unlimited classes & 24/7 access', price: '$89/mo', category: 'Memberships', emoji: '⭐', isFeatured: true },
  ],
  law_firm: [
    { id: '1', name: 'Corporate Law', desc: 'Mergers, acquisitions, and compliance', category: 'Practice Area', emoji: '🏢', isFeatured: true },
    { id: '2', name: 'Intellectual Property', desc: 'Patents, trademarks, and copyright', category: 'Practice Area', emoji: '💡', isFeatured: true },
    { id: '3', name: 'Employment Law', desc: 'Workplace disputes and contracts', category: 'Practice Area', emoji: '🤝', isFeatured: false },
    { id: '4', name: 'Free Consultation', desc: 'Initial 30-minute case evaluation', price: '$0', category: 'Services', emoji: '⚖️', isFeatured: false },
  ],
  ai_saas: [
    { id: '1', name: 'Predictive Analytics', desc: 'Forecast trends with 99% accuracy', category: 'Features', emoji: '📈', isFeatured: true },
    { id: '2', name: 'Natural Language Processing', desc: 'Extract sentiment from customer feedback', category: 'Features', emoji: '🧠', isFeatured: true },
    { id: '3', name: 'Automated Workflows', desc: 'Connect 500+ apps with AI triggers', category: 'Features', emoji: '⚡', isFeatured: false },
    { id: '4', name: 'Enterprise Plan', desc: 'Custom models and dedicated support', price: 'Custom', category: 'Pricing', emoji: '🏢', isFeatured: false },
  ],
};

export const getGenericContent = (): ContentItem[] => [
  { id: '1', name: 'Premium Service', desc: 'High quality professional service', price: '$99', category: 'Services', emoji: '⭐', isFeatured: true },
  { id: '2', name: 'Standard Package', desc: 'Everything you need to get started', price: '$49', category: 'Products', emoji: '📦', isFeatured: true },
  { id: '3', name: 'Consultation', desc: 'Expert advice tailored to you', price: '$149', category: 'Services', emoji: '💬', isFeatured: false },
  { id: '4', name: 'Basic Tier', desc: 'Essential features for beginners', price: '$19', category: 'Products', emoji: '🌱', isFeatured: false },
  { id: '5', name: 'Advanced Tools', desc: 'Pro-level features for power users', price: '$199', category: 'Tools', emoji: '⚡', isFeatured: true },
  { id: '6', name: 'Custom Solution', desc: 'Built specifically for your needs', price: 'Contact Us', category: 'Services', emoji: '🛠️', isFeatured: false },
];

export const getNicheContent = (subNiche: SubNiche): ContentItem[] => {
  return CONTENT_DB[subNiche] || getGenericContent();
};
