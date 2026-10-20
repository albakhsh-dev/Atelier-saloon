import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'dark' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const variantStyles = {
    gold: "bg-[#C5A880] text-white hover:bg-[#B3946B] focus:ring-[#C5A880] shadow-sm hover:shadow-md",
    dark: "bg-[#1F1E1D] text-white hover:bg-[#33312E] focus:ring-[#1F1E1D]",
    outline: "border border-[#1F1E1D] text-[#1F1E1D] bg-transparent hover:bg-[#1F1E1D] hover:text-white focus:ring-[#1F1E1D]",
    ghost: "text-[#1F1E1D] hover:bg-[#F2ECE4] focus:ring-[#C5A880]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20BA5A] focus:ring-[#25D366] shadow-sm hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
