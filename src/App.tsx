import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SandwichBuilder from './components/SandwichBuilder';
import MenuSection from './components/MenuSection';
import AboutAndLocation from './components/AboutAndLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdf8] selection:bg-brand-lime selection:text-brand-forest overflow-x-hidden antialiased">
      {/* Real-time Status Header */}
      <Navbar />

      <main>
        {/* Brand Hero Showcase */}
        <HeroSection />

        {/* Dynamic Multi-Step Recipe Creator */}
        <SandwichBuilder />

        {/* Digital Product Menu */}
        <MenuSection />

        {/* Location Coordinates & Custom Delivery Drafter */}
        <AboutAndLocation />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
