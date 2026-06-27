import React, { useState } from 'react';
import { RESTAURANT_INFO, REVIEWS } from '../data';
import { MapPin, Phone, MessageCircle, Clock, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutAndLocation() {
  const [landmark, setLandmark] = useState('');
  const [houseDetails, setHouseDetails] = useState('');
  const [draftedMessage, setDraftedMessage] = useState('');

  const generateDeliveryDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!landmark) return;

    const draft = `Salaam Dice Sandwich! 🛵 Sandwich delivery order:
📍 Delivery Location in Garowe:
- Landmark: Across from ${landmark}
- Details: ${houseDetails || 'N/A'}
- Map Location: Please contact me when driver is close.

Looking forward to my warm custom sandwich! Thanks!`;

    setDraftedMessage(draft);

    // Open directly in WhatsApp
    const formattedPhone = RESTAURANT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(draft)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Delivery Helper */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta bg-brand-magenta/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Fast Delivery & Pickup
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-forest tracking-tight mb-4">
              Find Us & Order Instantly
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Located on Al-Nasr Road, right in the center of Garowe. Come on in to enjoy our casual, child-friendly group environment, or let us bring the freshly custom grilled meal directly to your doorstep.
            </p>

            {/* Structured Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-magenta shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-brand-forest">Our Address</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Al-Nasr Road, opposite Same Hotel, Garowe, Nugaal, Somalia
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-brand-forest">Operating Hours</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Open 7 Days a week<br />
                    12:00 PM - 12:00 AM
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-brand-forest">Phone Lines</h4>
                  <div className="text-xs text-gray-500 mt-1 space-y-0.5 font-mono">
                    <a href={`tel:${RESTAURANT_INFO.phones[0]}`} className="block hover:text-brand-magenta transition-colors">
                      {RESTAURANT_INFO.phones[0]}
                    </a>
                    <a href={`tel:${RESTAURANT_INFO.phones[1]}`} className="block hover:text-brand-magenta transition-colors">
                      {RESTAURANT_INFO.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-brand-forest">WhatsApp Line</h4>
                  <a 
                    href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/\+/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-emerald-600 font-bold block mt-1 hover:underline"
                  >
                    {RESTAURANT_INFO.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Dynamic Somali Delivery Message Draft Helper (Answering explicit user prompt feature) */}
            <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🛵</span>
                <h3 className="font-bold text-brand-forest text-sm uppercase tracking-wider">
                  Need Help Drafting a Delivery Message?
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Just fill in where you want your sandwich delivered in Garowe, and we will automatically draft and format a perfect WhatsApp message for our dispatch drivers.
              </p>

              <form onSubmit={generateDeliveryDraft} className="space-y-3">
                <div>
                  <label htmlFor="landmark-input" className="block text-[10px] uppercase font-black text-brand-forest/70 mb-1">
                    Near Landmark (e.g. Same Hotel, Ministry of Finance, Rugsan Square)
                  </label>
                  <input
                    id="landmark-input"
                    type="text"
                    required
                    placeholder="e.g. East of Rugsan Mall"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white outline-none text-xs text-gray-700 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="house-details" className="block text-[10px] uppercase font-black text-brand-forest/70 mb-1">
                    House/Office/Apartment Details (Optional)
                  </label>
                  <input
                    id="house-details"
                    type="text"
                    placeholder="e.g. 2nd floor, Office 14, blue gate"
                    value={houseDetails}
                    onChange={(e) => setHouseDetails(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white outline-none text-xs text-gray-700 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl font-black text-xs text-white bg-brand-forest hover:bg-brand-forest/90 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>💬 Generate & Open WhatsApp Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Social Proof (Customer Reviews) & Garowe Map graphic */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Real Customer Feedback */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="h-5 w-5 text-brand-magenta fill-brand-magenta" />
                <h3 className="font-display font-bold text-lg text-brand-forest">
                  What Locals Say
                </h3>
              </div>

              <div className="space-y-6">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl select-none" role="img" aria-label="avatar">
                          {review.avatar}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm text-gray-800 leading-tight">
                            {review.name}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-medium">
                            {review.date}
                          </span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed mt-2.5 font-medium italic">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun schematic map displaying landmark highlights */}
            <div className="bg-brand-forest text-white rounded-3xl p-6 overflow-hidden relative shadow-lg">
              {/* Background graphic effect */}
              <div className="absolute inset-0 bg-radial-to-br from-brand-lime/10 to-transparent opacity-25" />
              
              <div className="relative z-10">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand-lime mb-4">
                  📍 Garowe Landmark Schematic
                </h3>
                
                {/* Visual schematic map of Al-Nasr road */}
                <div className="border border-white/15 rounded-2xl p-4 bg-white/5 space-y-4">
                  {/* Same Hotel Block */}
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>🏢 Same Hotel</span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-md font-semibold">Across the street</span>
                  </div>

                  {/* Street Divider */}
                  <div className="relative py-2 flex items-center justify-center">
                    <div className="absolute inset-x-0 h-0.5 border-t border-dashed border-white/20" />
                    <span className="relative z-10 text-[9px] bg-brand-forest px-3 text-brand-lime font-mono uppercase tracking-widest font-black">
                      Al-Nasr Road
                    </span>
                  </div>

                  {/* Dice Sandwich block matching color schema */}
                  <div className="p-3 bg-brand-lime rounded-xl text-brand-forest flex justify-between items-center transform hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎲</span>
                      <div>
                        <h4 className="font-black text-xs uppercase tracking-wider">Dice Sandwich</h4>
                        <p className="text-[9px] text-brand-forest/80 font-bold">You are here!</p>
                      </div>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-brand-lime shrink-0" />
                    <span>Free Delivery within 2km radius 🛵</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-brand-lime shrink-0" />
                    <span>Casual group-friendly dining tables</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
