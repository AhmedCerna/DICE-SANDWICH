import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data';
import { MenuItem } from '../types';
import { ShoppingBag, Sparkles, MessageSquare, Plus, Check } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'signature' | 'bowls' | 'drinks'>('all');

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const getCustomImage = (imageKey: string) => {
    // Inject the real generated photorealistic assets
    if (imageKey === 'tandoori_sandwich') {
      return '/src/assets/images/tandoori_sandwich_hero_1782585855587.jpg';
    }
    if (imageKey === 'tandoori_bowl') {
      return '/src/assets/images/healthy_bowl_item_1782585870866.jpg';
    }
    
    // Colorful, modern culinary illustrations using Tailwind for remaining menu cards
    return null;
  };

  const handleQuickOrder = (item: MenuItem) => {
    const text = `Hi Dice Sandwich! 🎲 I'd like to place a quick order for:
🍔 Item: ${item.name} ($${item.price.toFixed(2)})
🥤 Quantity: 1

Can you please confirm this order and ask for my delivery details? Thank you!`;
    
    const formattedPhone = RESTAURANT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCustomizeClick = () => {
    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Wholesome Nutrition
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-forest tracking-tight">
              Explore Our Digital Menu
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Handcrafted customizable meals, slow-simmered regional stews, and ice-cold fresh beverages. Free delivery on local orders!
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 justify-center md:justify-start w-full md:w-auto">
            {['all', 'signature', 'bowls', 'drinks'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as any)}
                className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer
                  ${activeTab === category 
                    ? 'bg-brand-forest text-brand-lime shadow-md border-brand-forest' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {category === 'all' ? '🍽️ All' : category === 'signature' ? '🥖 Specials' : category === 'bowls' ? '🥗 Bowls' : '☕ Drinks'}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const customImg = getCustomImage(item.image);
            
            return (
              <div 
                key={item.id} 
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-brand-lime/10">
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-4 left-4 z-20 text-[10px] font-black uppercase tracking-wider text-white bg-brand-magenta py-1 px-3 rounded-full shadow-sm animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  
                  {/* Price Tag */}
                  <span className="absolute bottom-4 right-4 z-20 text-sm font-black text-brand-forest bg-brand-lime/95 border border-brand-forest/10 py-1.5 px-3.5 rounded-2xl shadow-md">
                    ${item.price.toFixed(2)}
                  </span>

                  {customImg ? (
                    // Display Photorealistic Generated Images
                    <img 
                      src={customImg} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    // Beautiful Vector-Colored Mock Cards for other products
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
                      <div className="absolute inset-0 bg-linear-to-tr from-brand-lime/5 to-brand-orange/5 opacity-50" />
                      
                      {/* Big Category Emoji illustration */}
                      <span className="text-6xl filter drop-shadow-md select-none transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {item.category === 'signature' ? '🥖' : item.category === 'bowls' ? '🥗' : '🥤'}
                      </span>
                      
                      <span className="text-[10px] uppercase font-black tracking-widest text-brand-forest/60 mt-3 block">
                        {item.category} Choice
                      </span>
                    </div>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-forest tracking-tight group-hover:text-brand-magenta transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions Drawer */}
                  <div className="mt-6 pt-4 border-t border-gray-50 space-y-3">
                    <button
                      onClick={() => handleQuickOrder(item)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold text-white bg-brand-forest hover:bg-brand-forest/90 shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <ShoppingBag className="h-4.5 w-4.5 text-brand-lime" />
                      <span>Quick Order via WhatsApp</span>
                    </button>

                    {item.isCustomizable && (
                      <button
                        onClick={handleCustomizeClick}
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-brand-forest hover:text-brand-magenta hover:bg-gray-50 border border-gray-100 transition-all cursor-pointer"
                      >
                        <span>🎲 Customize Recipe</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
