import { MenuItem, BuilderStep, Review } from './types';

export const RESTAURANT_INFO = {
  name: 'Dice Sandwich',
  tagline: 'my heart beats with it',
  location: 'Al-Nasr Road, opposite the Same Hotel, Garowe, Nugaal, Somalia',
  phones: ['+252 905349223', '+252 905945598'],
  whatsapp: '+252 904128888',
  instagram: 'https://instagram.com/dicesandwich',
  hours: 'Open 7 days a week: 12:00 PM - 12:00 AM',
  services: [
    'Dine-in & Takeout available',
    'Free Delivery in local Garowe areas',
    'Customizable & Healthy concept',
    'Group and child friendly environment'
  ]
};

export const BUILDER_STEPS: BuilderStep[] = [
  {
    id: 'base',
    title: '1. Select Your Base',
    description: 'Every great creation starts with a fresh, artisan foundation.',
    maxSelection: 1,
    options: [
      { id: 'baguette', name: 'Fresh Crispy Baguette', priceModifier: 0.80, icon: '🥖' },
      { id: 'tortilla', name: 'Warm Tortilla Wrap', priceModifier: 0.60, icon: '🫓' },
      { id: 'salad', name: 'Healthy Salad Bowl Base', priceModifier: 1.00, icon: '🥗' }
    ]
  },
  {
    id: 'protein',
    title: '2. Choose Your Protein',
    description: 'High-quality, freshly grilled meats, premium tuna or veggies.',
    maxSelection: 1,
    options: [
      { id: 'tandoori_chicken', name: 'Spiced Tandoori Chicken', priceModifier: 2.20, icon: '🍗' },
      { id: 'shredded_mutton', name: 'Slow-Roasted Mutton', priceModifier: 2.50, icon: '🥩' },
      { id: 'spicy_tuna', name: 'Zesty Flaked Tuna', priceModifier: 1.80, icon: '🐟' },
      { id: 'grilled_veg', name: 'Seasoned Sautéed Veggies', priceModifier: 1.20, icon: '🥦' }
    ]
  },
  {
    id: 'toppings',
    title: '3. Load Up the Toppings',
    description: 'Choose up to 4 toppings for crunch and nutrition. No extra charge!',
    maxSelection: 4,
    options: [
      { id: 'lettuce', name: 'Crisp Romaine Lettuce', priceModifier: 0, icon: '🥬' },
      { id: 'tomatoes', name: 'Sliced Roma Tomatoes', priceModifier: 0, icon: '🍅' },
      { id: 'onions', name: 'Sweet Red Onions', priceModifier: 0, icon: '🧅' },
      { id: 'cucumber', name: 'Fresh Cucumbers', priceModifier: 0, icon: '🥒' },
      { id: 'jalapenos', name: 'Spicy Pickled Jalapeños', priceModifier: 0.20, icon: '🌶️' },
      { id: 'avocado', name: 'Rich Sliced Avocado', priceModifier: 0.60, icon: '🥑' },
      { id: 'boiled_egg', name: 'Boiled Egg Slices', priceModifier: 0.40, icon: '🥚' }
    ]
  },
  {
    id: 'sauces',
    title: '4. Drizzle the Sauces',
    description: 'Select up to 3 signature sauces to bring it all together.',
    maxSelection: 3,
    options: [
      { id: 'special_dice', name: 'House Special Dice Sauce', priceModifier: 0, icon: '🎲' },
      { id: 'garlic_mayo', name: 'Creamy Roasted Garlic Mayo', priceModifier: 0, icon: '🧄' },
      { id: 'sweet_chilli', name: 'Zesty Sweet Chilli', priceModifier: 0, icon: '🍯' },
      { id: 'shigni_hot', name: 'Local Shigni Hot Chilli', priceModifier: 0, icon: '🔥' },
      { id: 'cool_mint', name: 'Refreshing Mint Yogurt', priceModifier: 0, icon: '🌿' }
    ]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature Items
  {
    id: 'sig_tandoori',
    name: 'Tandoori Chicken Sandwich',
    description: 'Our absolute crown jewel. Charred, flame-grilled tandoori chicken, crisp romaine, red onions, cucumbers, and tomatoes, drizzled with five custom-paired sauces in a fresh crispy baguette.',
    price: 3.50,
    category: 'signature',
    image: 'tandoori_sandwich',
    badge: 'Best Seller',
    isCustomizable: true
  },
  {
    id: 'sig_ndambe',
    name: 'The Traditional Ndambe Sandwich',
    description: 'A rich and hearty West-meets-East African culinary creation. Slow-simmered, highly spiced savory bean stew, topped with roasted garlic spread, caramelized onions, and fresh tomato slices.',
    price: 2.50,
    category: 'signature',
    image: 'ndambe_sandwich',
    badge: 'Traditional Hero',
    isCustomizable: true
  },
  {
    id: 'sig_mutton',
    name: 'Premium Roasted Mutton Sandwich',
    description: 'Shredded, tender premium mutton slow-cooked with regional Somali herbs, finished with crisp red onions, fresh cucumbers, and our refreshing house mint-yogurt dressing.',
    price: 4.20,
    category: 'signature',
    image: 'mutton_sandwich',
    badge: 'Premium Cut',
    isCustomizable: true
  },
  {
    id: 'sig_wrap',
    name: 'Zesty Chicken Tortilla Wrap',
    description: 'Flame-seared sliced chicken breast, mixed sautéed bell peppers, sweet corn, melted cheese, and a dash of hot chilli wrapped inside a toasted warm giant tortilla.',
    price: 3.20,
    category: 'signature',
    image: 'chicken_wrap',
    isCustomizable: true
  },
  
  // Healthy Bowls
  {
    id: 'bowl_tandoori',
    name: 'Tandoori Chicken Nutrition Bowl',
    description: 'An energizing, protein-heavy salad bowl featuring diced tandoori chicken breast, sliced avocado, boiled egg halves, cucumber circles, and olives on a bed of fresh custom seasonal greens.',
    price: 4.50,
    category: 'bowls',
    image: 'tandoori_bowl',
    badge: 'High Protein',
    isCustomizable: true
  },
  {
    id: 'bowl_tuna',
    name: 'Garowe Harvest Garden Tuna Bowl',
    description: 'Premium flaked spicy tuna, hard-boiled egg slices, shredded carrots, sweet corn, black olives, and crisp tomatoes layered over refreshing romaine lettuce, with a cold-pressed olive oil vinaigrette.',
    price: 3.80,
    category: 'bowls',
    image: 'tuna_bowl',
    badge: 'Heart Healthy'
  },
  {
    id: 'bowl_veg',
    name: 'Superfood Sautéed Veggie Bowl',
    description: 'Sautéed broccoli, grilled bell peppers, seasoned zucchini, roasted sweet potato cubes, and toasted seeds served on a rich bed of nutrient-dense leafy greens and avocado.',
    price: 3.50,
    category: 'bowls',
    image: 'veg_bowl'
  },

  // Drinks & Coffee
  {
    id: 'drink_lemonade',
    name: 'Dice Signature Cucumber-Mint Lemonade',
    description: 'Ice-cold, refreshing freshly squeezed lemonade double-shaken with organic crushed garden mint leaves, cucumber juice, and a splash of sparkling soda.',
    price: 1.50,
    category: 'drinks',
    image: 'lemonade',
    badge: 'Must Try'
  },
  {
    id: 'drink_somali_brew',
    name: 'Ginger & Cardamom Somali Coffee',
    description: 'Slow-brewed, carefully roasted premium single-origin coffee beans infused with crushed fresh ginger roots and hot cardamom pods. A spicy and warm traditional treat.',
    price: 1.80,
    category: 'drinks',
    image: 'somali_coffee'
  },
  {
    id: 'drink_spanish_latte',
    name: 'Iced Sweet Spanish Latte',
    description: 'Vibrant, double-shot rich espresso blended with premium whole milk and sweet condensed milk, served over crushed ice for the ultimate velvety pick-me-up.',
    price: 2.80,
    category: 'drinks',
    image: 'spanish_latte'
  },
  {
    id: 'drink_strawberry_shake',
    name: 'Vibrant Fresh Strawberry Milkshake',
    description: 'Thick, premium milkshake whipped with fresh frozen strawberries, organic milk, and rich vanilla bean ice cream, topped with fresh strawberry drizzle.',
    price: 2.50,
    category: 'drinks',
    image: 'strawberry_shake'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev_1',
    name: 'Amran Hirsi',
    rating: 5,
    comment: 'The best customizable sandwich spot in Garowe! The Tandoori Chicken Sandwich is absolutely sensational and always fresh. Getting free delivery is such a great bonus!',
    date: 'June 25, 2026',
    avatar: '👩‍💼'
  },
  {
    id: 'rev_2',
    name: 'Mohamed Ahmed',
    rating: 5,
    comment: 'Dice Sandwich has brought high-quality casual dining to Garowe. The traditional Ndambe Sandwich tastes just like home but with an amazing modern twist. 10/10.',
    date: 'June 20, 2026',
    avatar: '👨‍💻'
  },
  {
    id: 'rev_3',
    name: 'Dr. Bashir Farah',
    rating: 5,
    comment: 'Very healthy, customized options which are hard to find in the city. I love being able to choose my own base, proteins, and toppings. Delivery is extremely fast.',
    date: 'June 18, 2026',
    avatar: '👨‍⚕️'
  }
];
