import React from 'react';

/**
 * Button props interface
 */
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * Button component - A reusable button with consistent styling
 * @param props - Button properties
 * @returns React component
 */
const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  const baseClasses = "min-w-20 h-8 text-sm py-1.5 px-3 rounded-md transition-all duration-200 bg-black border border-black text-white relative -top-1.5 cursor-pointer hover:text-black hover:bg-transparent";
  
  return (
    <button 
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 
