import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark' | 'warm';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const badgeThemeClasses = {
    light: 'bg-[#F3DABE]/60 text-[#442F2D] border border-[#F3DABE]',
    dark: 'bg-[#FFFFFF]/10 text-[#F3DABE] border border-[#FFFFFF]/15',
    warm: 'bg-[#9F5E48]/15 text-[#9F5E48] border border-[#9F5E48]/25',
  };

  const titleThemeClasses = {
    light: 'text-[#442F2D]',
    dark: 'text-[#FFFFFF]',
    warm: 'text-[#442F2D]',
  };

  const subtitleThemeClasses = {
    light: 'text-[#442F2D]/80',
    dark: 'text-[#F3DABE]/80',
    warm: 'text-[#442F2D]/80',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${badgeThemeClasses[theme]}`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] ${titleThemeClasses[theme]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${subtitleThemeClasses[theme]}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
