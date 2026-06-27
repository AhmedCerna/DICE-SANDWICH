import React, { useState } from 'react';
import { BUILDER_STEPS, RESTAURANT_INFO } from '../data';
import { BuilderOption, CustomBuild } from '../types';
import { Check, ArrowRight, ArrowLeft, ShoppingCart, Info, CheckSquare, Square, Trash2 } from 'lucide-react';

export default function SandwichBuilder() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  
  const [build, setBuild] = useState<CustomBuild>({
    base: null,
    protein: null,
    toppings: [],
    sauces: []
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const steps = BUILDER_STEPS;
  const currentStep = steps[currentStepIndex];

  // Price calculations
  const calculateTotal = () => {
    let total = 0;
    if (build.base) total += build.base.priceModifier;
    if (build.protein) total += build.protein.priceModifier;
    
    build.toppings.forEach(t => {
      total += t.priceModifier;
    });
    build.sauces.forEach(s => {
      total += s.priceModifier;
    });
    
    return Number(total.toFixed(2));
  };

  const handleOptionSelect = (option: BuilderOption) => {
    const stepId = currentStep.id;

    if (currentStep.maxSelection === 1) {
      // Single selection (Base / Protein)
      setBuild(prev => ({
        ...prev,
        [stepId]: option
      }));
      // Auto advance for better UX on simple choices
      if (currentStepIndex < 1) {
        setTimeout(() => {
          setCurrentStepIndex(prev => prev + 1);
        }, 300);
      }
    } else {
      // Multi selection (Toppings / Sauces)
      const list = stepId === 'toppings' ? build.toppings : build.sauces;
      const isSelected = list.some(item => item.id === option.id);

      if (isSelected) {
        // Remove item
        setBuild(prev => ({
          ...prev,
          [stepId]: list.filter(item => item.id !== option.id)
        }));
      } else {
        // Add item if within limit
        if (list.length < currentStep.maxSelection) {
          setBuild(prev => ({
            ...prev,
            [stepId]: [...list, option]
          }));
        }
      }
    }
  };

  const clearBuild = () => {
    setBuild({
      base: null,
      protein: null,
      toppings: [],
      sauces: []
    });
    setCurrentStepIndex(0);
  };

  const isStepValid = () => {
    if (currentStep.id === 'base') return build.base !== null;
    if (currentStep.id === 'protein') return build.protein !== null;
    return true; // toppings & sauces are optional or have max limits
  };

  const triggerWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!build.base || !build.protein) return;

    // Compile beautiful order summary
    const baseStr = `${build.base.icon} ${build.base.name}`;
    const proteinStr = `${build.protein.icon} ${build.protein.name}`;
    const toppingsStr = build.toppings.length > 0 
      ? build.toppings.map(t => `${t.icon} ${t.name}`).join(', ') 
      : 'No toppings selected';
    const saucesStr = build.sauces.length > 0 
      ? build.sauces.map(s => `${s.icon} ${s.name}`).join(', ') 
      : 'No sauces selected';

    const totalPrice = calculateTotal();

    const orderText = `Hi Dice Sandwich! 🎲🥪 I'd like to place an order for a custom creation!

👤 Name: ${customerName || 'Valued Customer'}
🥖 Base: ${baseStr}
🥩 Protein: ${proteinStr}
🥬 Toppings: ${toppingsStr}
🍯 Sauces: ${saucesStr}
📝 Notes: ${specialNotes || 'None'}

📍 Delivery Address: ${deliveryAddress || 'Pick-up from store'}
💵 Total Price: $${totalPrice.toFixed(2)}

Please confirm my order and estimated delivery time! Thanks!`;

    // Format WhatsApp Link
    const formattedPhone = RESTAURANT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(orderText)}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    setOrderSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100" id="builder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta bg-brand-magenta/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Interactive Craft Station
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-forest tracking-tight">
            Build Your Ultimate Creation
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Mix and match your favorite wholesome bases, fresh premium proteins, organic toppings, and handcrafted specialty sauces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Exploded Sandwich Stack Visual Representation (Gamification) */}
          <div className="lg:col-span-4 bg-brand-forest rounded-3xl p-6 text-white min-h-[420px] flex flex-col justify-between sticky top-24 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black tracking-wider text-brand-lime uppercase">
                Your Recipe Live Stack
              </span>
              <button 
                onClick={clearBuild}
                className="text-gray-300 hover:text-rose-400 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Exploded Interactive Stack View */}
            <div className="flex-1 flex flex-col items-center justify-center py-6 relative">
              
              {/* Top Baguette / Bowl Rim */}
              {build.base && (
                <div className="transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-top-10 text-center z-40 relative">
                  {build.base.id === 'salad' ? (
                    <div className="text-2xl">🥗 Bowl Rim</div>
                  ) : (
                    <div className="bg-amber-100 border-2 border-amber-300 text-amber-800 text-xs font-black py-2.5 px-12 rounded-t-full shadow-md w-44">
                      🥖 Top Bread Crown
                    </div>
                  )}
                </div>
              )}

              {/* Sauces Drizzle Layer */}
              {build.sauces.length > 0 && (
                <div className="my-1 text-center z-30 transform hover:scale-105 transition-all duration-300 animate-bounce">
                  <div className="flex gap-1 justify-center max-w-xs flex-wrap">
                    {build.sauces.map((sauce) => (
                      <span 
                        key={sauce.id} 
                        className={`text-[10px] font-bold px-2 py-1 rounded-full text-white shadow-xs
                          ${sauce.id === 'special_dice' ? 'bg-rose-500' : ''}
                          ${sauce.id === 'garlic_mayo' ? 'bg-amber-50 text-brand-forest' : ''}
                          ${sauce.id === 'sweet_chilli' ? 'bg-orange-500' : ''}
                          ${sauce.id === 'shigni_hot' ? 'bg-red-700 animate-pulse' : ''}
                          ${sauce.id === 'cool_mint' ? 'bg-emerald-500' : ''}
                        `}
                      >
                        💧 {sauce.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Toppings Layer */}
              {build.toppings.length > 0 && (
                <div className="my-1 text-center z-20 flex flex-col gap-1 items-center transform hover:scale-105 transition-all duration-300">
                  <div className="bg-emerald-500/10 border border-emerald-400/40 py-1.5 px-4 rounded-xl text-center w-40 flex flex-wrap gap-1 justify-center">
                    {build.toppings.map(t => (
                      <span key={t.id} className="text-base select-none" title={t.name}>
                        {t.icon}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] text-emerald-300 uppercase tracking-widest font-bold">Toppings Layer</span>
                </div>
              )}

              {/* Protein Core Layer */}
              {build.protein ? (
                <div className="my-2 text-center z-10 transform hover:scale-105 transition-all duration-300 animate-in zoom-in-75">
                  <div className="bg-amber-900/90 border-2 border-amber-700 text-brand-lime text-xs font-black py-3 px-10 rounded-lg shadow-lg w-40">
                    {build.protein.icon} {build.protein.name}
                  </div>
                </div>
              ) : (
                <div className="my-4 text-center border-2 border-dashed border-white/20 p-4 rounded-2xl w-40 animate-pulse">
                  <span className="text-xs text-gray-400 font-medium block">Select Protein</span>
                </div>
              )}

              {/* Bottom Baguette / Bowl Base */}
              {build.base ? (
                <div className="transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-10 text-center">
                  {build.base.id === 'salad' ? (
                    <div className="bg-emerald-800 text-white text-xs font-black py-3 px-10 rounded-b-full shadow-lg border-2 border-emerald-900 w-40">
                      🥗 Salad Bowl Base
                    </div>
                  ) : (
                    <div className="bg-amber-100 border-2 border-amber-300 text-amber-800 text-xs font-black py-2 px-12 rounded-b-full shadow-md w-44">
                      🥖 Bottom Crust
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-4 text-xs text-gray-400 font-medium animate-pulse border border-dashed border-white/20 rounded-2xl px-6 w-44 mt-2">
                  Choose your Base Base!
                </div>
              )}
            </div>

            {/* Total Price Meter */}
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block uppercase font-bold tracking-widest">Calculated Price</span>
                <span className="text-3xl font-black text-brand-lime font-display">${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block font-semibold">Free Delivery Included</span>
                <span className="text-xs font-bold text-brand-orange">Garowe Local 🛵</span>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step interactive choices */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100 min-h-[480px] flex flex-col justify-between">
            <div>
              {/* Step Tabs / Indicators */}
              <div className="flex gap-1.5 md:gap-2 mb-6 overflow-x-auto pb-2">
                {steps.map((step, idx) => {
                  const isCompleted = idx < currentStepIndex;
                  const isActive = idx === currentStepIndex;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStepIndex(idx)}
                      className={`flex-1 text-center py-2.5 px-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer
                        ${isActive 
                          ? 'bg-brand-forest text-brand-lime shadow-md' 
                          : isCompleted 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                            : 'bg-gray-50 text-gray-400 border border-gray-200'
                        }
                      `}
                    >
                      {step.id.charAt(0).toUpperCase() + step.id.slice(1)}
                    </button>
                  );
                })}
              </div>

              {/* Step Title */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-forest tracking-tight">
                  {currentStep.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  {currentStep.description}
                  {currentStep.maxSelection > 1 && (
                    <span className="text-brand-magenta font-semibold ml-1">
                      (Select up to {currentStep.maxSelection})
                    </span>
                  )}
                </p>
              </div>

              {/* Grid of Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentStep.options.map((option) => {
                  // Determine selection state
                  let isSelected = false;
                  if (currentStep.id === 'base') isSelected = build.base?.id === option.id;
                  else if (currentStep.id === 'protein') isSelected = build.protein?.id === option.id;
                  else if (currentStep.id === 'toppings') isSelected = build.toppings.some(t => t.id === option.id);
                  else if (currentStep.id === 'sauces') isSelected = build.sauces.some(s => s.id === option.id);

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option)}
                      className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer
                        ${isSelected 
                          ? 'border-brand-magenta bg-brand-magenta/5 shadow-sm ring-1 ring-brand-magenta' 
                          : 'border-gray-200 bg-white hover:border-brand-forest/30 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl select-none" role="img" aria-label={option.name}>
                          {option.icon}
                        </span>
                        <div>
                          <span className="font-bold text-gray-800 text-sm block">
                            {option.name}
                          </span>
                          {option.priceModifier > 0 && (
                            <span className="text-xs text-brand-magenta font-semibold">
                              +${option.priceModifier.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Icon checkboxes */}
                      <div>
                        {currentStep.maxSelection === 1 ? (
                          <div className={`h-5 w-5 rounded-full flex items-center justify-center border 
                            ${isSelected ? 'bg-brand-magenta border-brand-magenta text-white' : 'border-gray-300'}`}
                          >
                            {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                          </div>
                        ) : (
                          <div className={`h-5 w-5 rounded-md flex items-center justify-center border 
                            ${isSelected ? 'bg-brand-magenta border-brand-magenta text-white' : 'border-gray-300'}`}
                          >
                            {isSelected && <Check className="h-3 w-3" />}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation and Order Placement Drawer */}
            <div>
              {/* Back & Next Navigation buttons */}
              <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                <button
                  disabled={currentStepIndex === 0}
                  onClick={() => setCurrentStepIndex(prev => prev - 1)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition-colors cursor-pointer
                    ${currentStepIndex === 0 
                      ? 'text-gray-300 border-gray-200 cursor-not-allowed bg-gray-50' 
                      : 'text-gray-600 border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>

                {currentStepIndex < steps.length - 1 ? (
                  <button
                    disabled={!isStepValid()}
                    onClick={() => setCurrentStepIndex(prev => prev + 1)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all cursor-pointer
                      ${isStepValid() 
                        ? 'bg-brand-forest hover:bg-brand-forest/90 shadow-md' 
                        : 'bg-gray-300 cursor-not-allowed'
                      }
                    `}
                  >
                    <span>Next Step</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-emerald-600 animate-pulse bg-emerald-50 px-3 py-1.5 rounded-lg">
                    ✨ Ready to checkout!
                  </span>
                )}
              </div>

              {/* Instant Checkout Form (only shown if sandwich is complete with base and protein) */}
              {build.base && build.protein && (
                <form onSubmit={triggerWhatsAppOrder} className="mt-8 border-t border-dashed border-gray-200 pt-6 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
                  <h4 className="font-bold text-brand-forest text-sm uppercase tracking-wider mb-2">
                    Delivery Details & Instant WhatsApp Order
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="customer-name" className="block text-xs font-semibold text-gray-600 mb-1">
                        Your Full Name
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        placeholder="e.g. Abdi Farah"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta outline-none text-sm text-gray-700 font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="delivery-address" className="block text-xs font-semibold text-gray-600 mb-1">
                        Garowe Delivery Address (or Dine-in/Pickup)
                      </label>
                      <input
                        id="delivery-address"
                        type="text"
                        required
                        placeholder="e.g. Al-Nasr Road, opposite Same Hotel"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta outline-none text-sm text-gray-700 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="special-notes" className="block text-xs font-semibold text-gray-600 mb-1">
                      Special Cooking Notes (Optional)
                    </label>
                    <textarea
                      id="special-notes"
                      rows={2}
                      placeholder="e.g. Make it extra spicy with extra Shigni sauce, or no onions please"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta outline-none text-sm text-gray-700 font-medium resize-none"
                    />
                  </div>

                  {/* HIGH-CONVERTING WHATSAPP CHECKOUT BUTTON */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    id="whatsapp-checkout-btn"
                  >
                    <span>💬</span>
                    <span className="text-base">Order Custom Meal via WhatsApp</span>
                  </button>

                  {orderSubmitted && (
                    <p className="text-xs font-bold text-emerald-600 text-center animate-pulse">
                      ✅ Order compiled and sent to WhatsApp! Contact numbers: +252 905349223 or +252 905945598
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
