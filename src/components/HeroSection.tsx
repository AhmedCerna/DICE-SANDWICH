import React from 'react';
import { RESTAURANT_INFO } from '../data';
import DiceLogo from './DiceLogo';
import { Sparkles, MapPin, ArrowRight, Instagram, Phone, Heart } from 'lucide-react';

export default function HeroSection() {
  const scrollToBuilder = () => {
    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-lime pt-8 pb-16 md:py-20" id="hero">
      {/* Subtle overlay decorative effect */}
      <div className="absolute inset-0 bg-radial-to-b from-transparent to-black/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Dice Sandwich Poster Layout */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Header Dice Logo (Matching the poster's colors and text) */}
            <div className="mb-6 scale-95 sm:scale-100 flex justify-center lg:justify-start">
              <DiceLogo size="lg" showText={true} textColorClass="text-emerald-800" />
            </div>

            {/* Somali Slogan stacked vertically (Mimicking the exact visual of the brand poster) */}
            <div className="my-6">
              <div className="flex flex-col font-display font-black tracking-tight leading-none text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-brand-forest uppercase space-y-1 select-none">
                <span className="hover:text-brand-magenta transition-colors duration-200">KULMIN</span>
                <span className="hover:text-brand-magenta transition-colors duration-200">DHADHAN</span>
                <span className="hover:text-brand-magenta transition-colors duration-200">TAYO</span>
                <span className="text-brand-magenta">NADAAFAD</span>
                <span className="hover:text-brand-magenta transition-colors duration-200">IYO</span>
                <span className="text-brand-magenta">CAAFIMAAD</span>
              </div>
              <p className="text-[10px] sm:text-xs tracking-widest font-black text-brand-forest/65 uppercase mt-3">
                "Combining Taste, Quality, Cleanliness & Health"
              </p>
            </div>

            {/* Action Buttons optimized for high conversion */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0 z-20">
              <button
                onClick={scrollToBuilder}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black text-white bg-brand-forest hover:bg-brand-forest/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>🎲 Craft Your Choice</span>
                <ArrowRight className="h-4 w-4 text-brand-lime" />
              </button>
              
              <button
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-brand-forest bg-white hover:bg-gray-50 border border-brand-forest/10 hover:border-brand-forest/20 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>🍽️ See Digital Menu</span>
              </button>
            </div>

            {/* Poster Footer (Landmarks, Green Phones, Social Accounts) */}
            <div className="mt-10 pt-6 border-t border-brand-forest/10 w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              {/* Phone Contacts (Green text exactly matching bottom-left of the poster) */}
              <div className="flex flex-col items-center sm:items-start text-xs font-black tracking-wider text-emerald-800 uppercase font-mono">
                <div className="flex items-center gap-1 text-emerald-800 mb-1">
                  <Phone className="h-3.5 w-3.5 fill-emerald-800 text-emerald-800 shrink-0" />
                  <span className="text-[10px] font-sans font-bold text-brand-forest/70">CALL HOTLINES:</span>
                </div>
                <a href="tel:+252905349223" className="hover:text-brand-magenta transition-colors text-sm sm:text-base">905349223</a>
                <a href="tel:+252905945598" className="hover:text-brand-magenta transition-colors text-sm sm:text-base">905945598</a>
              </div>

              {/* Location Detail & Instagram */}
              <div className="flex flex-col items-center sm:items-end text-right text-xs font-bold text-brand-forest/80 uppercase tracking-wider space-y-1.5">
                <div className="flex items-center gap-1.5 justify-center sm:justify-end text-emerald-800">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span className="font-black">Garoowe, Nugaal, Somalia</span>
                </div>
                <a 
                  href={RESTAURANT_INFO.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 justify-center sm:justify-end hover:text-brand-magenta transition-colors text-[10px] font-black text-brand-forest/70"
                >
                  <Instagram className="h-3.5 w-3.5 text-brand-magenta shrink-0" />
                  <span>@dicesandwich</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Stunning Vertically Stacked Sandwich and Loaded Bowl Poster Graphic */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 max-w-sm sm:max-w-md lg:max-w-full">
              {/* Overlay highlight ribbon */}
              <div className="absolute top-6 right-6 z-20 bg-brand-magenta text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-md transform rotate-3">
                🔥 Hot Deal
              </div>

              <img 
                src="/src/assets/images/dice_stacked_gourmet_1782587021970.jpg" 
                alt="Dice Sandwich gourmet stacked baguette and loaded tray container with specialty sauces"
                className="w-full h-auto object-cover rounded-[1.8rem] aspect-[3/4]"
                referrerPolicy="no-referrer"
                id="hero-sandwich-img"
              />
              
              {/* Bottom transparent info bar */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-forest/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-lime text-brand-forest h-8 w-8 rounded-lg flex items-center justify-center font-black text-xs select-none shadow-sm">
                    🎲
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs tracking-tight">The Gourmet Craft</h3>
                    <p className="text-[9px] text-gray-300">"my heart beats with it"</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-brand-lime font-black text-sm">$3.50</span>
                  <span className="text-[8px] text-gray-300 uppercase tracking-widest font-bold">100% Wholesome</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
