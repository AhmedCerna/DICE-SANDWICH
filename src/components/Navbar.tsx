import React, { useState, useEffect } from 'react';
import DiceLogo from './DiceLogo';
import { RESTAURANT_INFO } from '../data';
import { Phone, Clock, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live status calculation (12:00 PM to 12:00 AM)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Adjust to Somalia local time if needed (Somalia is UTC+3)
      // For general purposes, we can calculate based on local time
      const hours = now.getHours();
      
      // Open from 12:00 PM (12) to 12:00 AM (24/0)
      if (hours >= 12 && hours < 24) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <DiceLogo size="sm" showText={false} />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-brand-forest uppercase">
                DICE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-magenta font-semibold -mt-1">
                Sandwich
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <button 
              onClick={() => scrollToSection('builder')} 
              className="hover:text-brand-magenta transition-colors duration-200 cursor-pointer"
            >
              Craft Your Own
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="hover:text-brand-magenta transition-colors duration-200 cursor-pointer"
            >
              Our Menu
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="hover:text-brand-magenta transition-colors duration-200 cursor-pointer"
            >
              Delivery & Location
            </button>
          </nav>

          {/* Live Status and CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 border border-gray-200">
              <span className={`h-2.5 w-2.5 rounded-full animate-pulse ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className="text-gray-700">
                {isOpen ? 'Open Now till Midnight' : 'Closed - Opens at 12 PM'}
              </span>
            </div>

            {/* Direct Phone Call CTA */}
            <a 
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-brand-forest hover:bg-brand-forest/90 transition-all duration-200 shadow-sm"
              id="cta-call-nav"
            >
              <Phone className="h-4 w-4" />
              <span>Call to Order</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-gray-50 border border-gray-100">
              <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span>{isOpen ? 'Open' : 'Closed'}</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-brand-forest hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => scrollToSection('builder')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-lime/10 text-brand-forest font-semibold transition-colors"
            >
              <span>🎲 Craft Your Sandwich</span>
              <ShoppingBag className="h-4 w-4 text-brand-magenta" />
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-lime/10 text-brand-forest font-semibold transition-colors"
            >
              <span>🍽️ See Digital Menu</span>
              <span className="text-xs bg-brand-magenta text-white px-2 py-0.5 rounded-md font-bold">New</span>
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-lime/10 text-brand-forest font-semibold transition-colors"
            >
              <span>📍 Delivery & Location</span>
              <Clock className="h-4 w-4 text-brand-orange" />
            </button>
          </div>

          {/* Active Contacts in Mobile Drawer */}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-brand-forest text-center"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {RESTAURANT_INFO.phones[0]}</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-emerald-600 text-center"
            >
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
