import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'dark' | 'outline' | 'open' | 'closed' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-semibold',
    md: 'text-xs px-3 py-1 font-medium',
  };

  const variantStyles = {
    gold: 'bg-[#C5A880]/15 text-[#9E825A] border border-[#C5A880]/30',
    dark: 'bg-[#1F1E1D] text-white',
    outline: 'border border-[#DFD7CA] text-[#4A4744] bg-white/70',
    subtle: 'bg-[#F2ECE4] text-[#4A4744]',
    open: 'bg-[#E7F6ED] text-[#2D6A4F] border border-[#BDE5CE]',
    closed: 'bg-[#FCE8E8] text-[#9B2226] border border-[#F4BEBE]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
