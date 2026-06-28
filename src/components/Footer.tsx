import React from 'react';
import DiceLogo from './DiceLogo';
import { RESTAURANT_INFO } from '../data';
import { Heart, Instagram, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-white pt-12 border-t border-white/10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== GOOGLE MAP SECTION ===== */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-brand-lime" />
            <h3 className="font-black text-brand-lime uppercase tracking-widest text-sm">
              Find Us in Garowe
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Map Embed */}
            <div style={{
              width: '100%',
              height: '280px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.1)',
            }}>
              <iframe
                src="https://www.google.com/maps?q=Garowe,Nugaal,Somalia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dice Sandwich Location"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 rounded-2xl p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-1">Address</p>
                  <p className="text-sm font-bold text-white">Garowe, Nugaal, Somalia</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-1">Call Us</p>
                  <a href="tel:+252905349223" className="block text-sm font-bold text-white hover:text-brand-lime transition-colors">
                    +252 905 349 223
                  </a>
                  <a href="tel:+252905945598" className="block text-sm font-bold text-white hover:text-brand-lime transition-colors">
                    +252 905 945 598
                  </a>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-1">Hours</p>
                  <p className="text-sm font-bold text-white">Open Every Day</p>
                  <p className="text-xs text-white/60">Morning until Late Night</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ===== END MAP SECTION ===== */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-b border-white/10">
          
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

          {/* Social connections */}
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

        {/* Legal */}
        <div className="pt-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
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