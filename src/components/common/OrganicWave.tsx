import React from 'react';

interface OrganicWaveProps {
  fillColor?: string; // Cor que preenche a curva
  bgColor?: string;   // Cor do fundo da seção
  position?: 'top' | 'bottom';
  variant?: 'smooth-curve' | 'organic-deep' | 'subtle-s';
  className?: string;
}

export const OrganicWave: React.FC<OrganicWaveProps> = ({
  fillColor = '#FAF6F0',
  bgColor = 'transparent',
  position = 'bottom',
  variant = 'smooth-curve',
  className = '',
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-12 sm:h-16 md:h-20 lg:h-24 block ${isTop ? 'rotate-180' : ''}`}
      >
        {variant === 'smooth-curve' && (
          <path
            d="M0,0 C320,85 580,120 880,95 C1180,70 1340,30 1440,0 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'organic-deep' && (
          <path
            d="M0,20 C240,110 480,130 720,70 C960,10 1200,80 1440,30 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'subtle-s' && (
          <path
            d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,60 1440,40 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
};
