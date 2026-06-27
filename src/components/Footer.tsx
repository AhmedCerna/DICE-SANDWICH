import React from 'react';
import DiceLogo from './DiceLogo';
import { RESTAURANT_INFO } from '../data';
import { Heart, Instagram, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-white py-12 border-t border-white/10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <DiceLogo size="sm" showText={false} />
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wider text-brand-lime uppercase">
                DICE
              </span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-semibold -mt-1">
                Sandwich
              </span>
            </div>
          </div>

          {/* Social connections & handles */}
          <div className="flex items-center gap-6">
            <a 
              href={RESTAURANT_INFO.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-white/5 hover:bg-brand-magenta rounded-full text-white hover:scale-110 transition-all duration-200"
              aria-label="Instagram Page"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/\+/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-white/5 hover:bg-emerald-600 rounded-full text-white hover:scale-110 transition-all duration-200"
              aria-label="WhatsApp Order Link"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a 
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="p-3 bg-white/5 hover:bg-brand-orange rounded-full text-white hover:scale-110 transition-all duration-200"
              aria-label="Phone Hotline"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Legal notice and Somali culinary credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p className="text-center md:text-left">
            &copy; {currentYear} <span className="text-brand-lime font-bold">Dice Sandwich</span>. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Made with Somali Hospitality in Garowe, Nugaal, Somalia</span>
            <Heart className="h-3 w-3 text-brand-magenta fill-brand-magenta" />
          </p>
        </div>
      </div>
    </footer>
  );
}
