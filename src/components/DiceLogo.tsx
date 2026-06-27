import React from 'react';

interface DiceLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColorClass?: string;
}

export default function DiceLogo({ className = '', size = 'md', showText = true, textColorClass = 'text-brand-forest' }: DiceLogoProps) {
  // Determine dimensions based on size prop
  const dimensions = {
    sm: { logoWidth: 40, logoHeight: 35, fontSize: 'text-lg', letterSpacing: 'tracking-wider' },
    md: { logoWidth: 64, logoHeight: 56, fontSize: 'text-2xl', letterSpacing: 'tracking-widest' },
    lg: { logoWidth: 100, logoHeight: 88, fontSize: 'text-4xl', letterSpacing: 'tracking-[0.25em]' },
    xl: { logoWidth: 160, logoHeight: 140, fontSize: 'text-6xl', letterSpacing: 'tracking-[0.3em]' }
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} id="dice-brand-logo">
      {/* Visual overlapping dice */}
      <svg 
        width={dimensions.logoWidth} 
        height={dimensions.logoHeight} 
        viewBox="0 0 160 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-300 hover:scale-105"
      >
        {/* Back Orange Die (Tilted) */}
        <g transform="translate(68, 12) rotate(12)">
          <rect 
            x="0" 
            y="0" 
            width="64" 
            height="64" 
            rx="12" 
            fill="#f97316" 
            className="shadow-sm"
          />
          {/* Four dots on corners */}
          <circle cx="18" cy="18" r="5" fill="white" />
          <circle cx="46" cy="18" r="5" fill="white" />
          <circle cx="18" cy="46" r="5" fill="white" />
          <circle cx="46" cy="46" r="5" fill="white" />
        </g>

        {/* Front Pink/Magenta Die (Slightly tilted the other way, overlapping) */}
        <g transform="translate(25, 42) rotate(-6)">
          <rect 
            x="0" 
            y="0" 
            width="64" 
            height="64" 
            rx="12" 
            fill="#e11d84" 
            className="filter drop-shadow-md"
          />
          {/* Two diagonal dots */}
          <circle cx="20" cy="20" r="5.5" fill="white" />
          <circle cx="44" cy="44" r="5.5" fill="white" />
        </g>
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="text-center mt-3">
          <span className={`font-display font-bold uppercase ${textColorClass} ${dimensions.fontSize} ${dimensions.letterSpacing} block`}>
            DICE
          </span>
          {size === 'xl' && (
            <span className="font-script text-brand-magenta text-2xl mt-1 block">
              my heart beats with it
            </span>
          )}
        </div>
      )}
    </div>
  );
}
