import React from 'react';
import { RESTAURANT_INFO } from '../data';
import DiceLogo from './DiceLogo';
import { Sparkles, MessageSquare, MapPin, ArrowRight, Instagram, Phone } from 'lucide-react';

export default function HeroSection() {
  const scrollToBuilder = () => {
    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-lime pt-12 pb-16 md:py-24" id="hero">
      {/* Decorative floating dice shapes or background effects */}
      <div className="absolute top-10 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand, Tagline, Elegant Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Header Dice Logo representing the layout from the photo */}
            <div className="mb-6 scale-90 sm:scale-100 flex justify-center lg:justify-start">
              <DiceLogo size="lg" showText={true} />
            </div>

            {/* Typography mimicking the photo strictly */}
            <div className="space-y-3 max-w-xl">
              <h1 className="font-serif font-black uppercase text-brand-forest tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Tandoori <br />
                Chicken <br />
                <span className="text-brand-magenta">Sandwich</span>
              </h1>
              
              <p className="text-brand-forest/85 text-xs sm:text-sm tracking-wider font-semibold uppercase mt-2 max-w-md">
                "Fairly seasoned and flamed tandoori chicken accompanied by fresh vegetables topped with five different sauces"
              </p>
            </div>

            {/* Signature Tagline strictly matched */}
            <div className="mt-6">
              <p className="font-script text-3xl sm:text-4xl text-brand-magenta select-none transform -rotate-2">
                "{RESTAURANT_INFO.tagline}"
              </p>
            </div>

            {/* Action Buttons optimized for high conversion */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button
                onClick={scrollToBuilder}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-black text-white bg-brand-forest hover:bg-brand-forest/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>🎲 Craft Your Own</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-brand-forest bg-white hover:bg-gray-50 border border-brand-forest/10 hover:border-brand-forest/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>🍽️ Browse Menu</span>
              </button>
            </div>

            {/* Social handles and location matching the bottom of the photo */}
            <div className="mt-12 pt-6 border-t border-brand-forest/10 w-full flex flex-wrap justify-center lg:justify-between items-center gap-4 text-xs font-bold text-brand-forest/80 uppercase tracking-wider">
              {/* Instagram Handle */}
              <a 
                href={RESTAURANT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-brand-magenta transition-colors"
              >
                <Instagram className="h-4 w-4 text-brand-magenta" />
                <span>@dicesandwich</span>
              </a>

              {/* Location Tag */}
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-magenta" />
                <span>Garoowe, Nugaal, Somalia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stunning generated Sandwich Hero Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Elegant overlay frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-magenta to-brand-orange rounded-[2.5rem] blur-md opacity-20" />
            
            <div className="relative bg-white p-4 rounded-[2.2rem] shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 max-w-sm sm:max-w-md lg:max-w-full">
              <img 
                src="/src/assets/images/tandoori_sandwich_hero_1782585855587.jpg" 
                alt="Delicious Custom Tandoori Chicken Sandwich"
                className="w-full h-auto object-cover rounded-[1.6rem] aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3]"
                referrerPolicy="no-referrer"
                id="hero-sandwich-img"
              />
              
              {/* Floating review card or highlight badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-forest/95 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-lime text-brand-forest p-2 rounded-xl font-black text-sm">
                    🎲
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-tight">100% Customizable</h3>
                    <p className="text-[10px] text-gray-300">You craft, we grill!</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-brand-lime font-black text-sm">$3.50</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Special</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
