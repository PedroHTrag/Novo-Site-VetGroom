import React from 'react';

interface MarqueeProps {
  items?: string[];
  theme?: 'terracota' | 'marrom' | 'bege';
  className?: string;
  speed?: number; // duration in seconds
}

export const Marquee: React.FC<MarqueeProps> = ({
  items = [
    'Fear-Free Certified',
    'Grooming de Alta Precisão',
    'Supervisão Veterinária Contínua',
    'Banho em Ofurô com Ozônio',
    'Produtos Naturais & Hipoalergênicos',
    'Sala Exclusiva para Gatos',
    'Manejo Acolhedor sem Sedação',
    'Tesoura Artística & Asian Fusion',
  ],
  theme = 'bege',
  className = '',
}) => {
  const themeClasses = {
    terracota: 'bg-[#9F5E48] text-[#FFFFFF] border-y border-[#864c39]',
    marrom: 'bg-[#442F2D] text-[#F3DABE] border-y border-[#322120]',
    bege: 'bg-[#F3DABE]/50 text-[#442F2D] border-y border-[#E8C4A2]',
  };

  return (
    <div
      className={`relative w-full overflow-hidden py-4 select-none ${themeClasses[theme]} ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 text-sm sm:text-base font-semibold tracking-wide uppercase">
            <span>{item}</span>
            <span className="text-[#9F5E48] opacity-60">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};
