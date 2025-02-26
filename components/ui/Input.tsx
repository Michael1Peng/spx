import React from 'react';

/**
 * Input props interface
 */
interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  autoFocus?: boolean;
  className?: string;
}

/**
 * Input component - A reusable input field with consistent styling
 * @param props - Input properties
 * @returns React component
 */
const Input: React.FC<InputProps> = ({ 
  value, 
  onChange, 
  maxLength = 256, 
  autoFocus = false,
  className = '' 
}) => {
  const baseClasses = "text-sm p-[5px] outline-none leading-[26px] h-[42px] border border-[#eaeaea] rounded-r-md focus:border-black";
  
  return (
    <input
      className={`${baseClasses} ${className}`}
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
      type="text"
    />
  );
};

export default Input; 
