import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-6 py-3 gap-2.5 shadow-sm',
    lg: 'text-base sm:text-lg px-8 py-4 gap-3 shadow-md tracking-wide',
  };

  const variantStyles = {
    // Terracota clássico com texto branco
    primary: 'bg-[#9F5E48] hover:bg-[#864c39] text-[#FFFFFF] shadow-[#9F5E48]/20 focus:ring-[#9F5E48]',
    // Bege suave com texto marrom escuro
    secondary: 'bg-[#F3DABE] hover:bg-[#e8cbb0] text-[#442F2D] focus:ring-[#F3DABE]',
    // Marrom nobre profundo
    dark: 'bg-[#442F2D] hover:bg-[#322120] text-[#FFFFFF] shadow-[#442F2D]/20 focus:ring-[#442F2D]',
    // Outline refinado
    outline: 'border border-[#9F5E48] text-[#9F5E48] hover:bg-[#9F5E48]/5 focus:ring-[#9F5E48]',
    // Ghost
    ghost: 'text-[#442F2D] hover:bg-[#442F2D]/5 focus:ring-[#442F2D]',
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
