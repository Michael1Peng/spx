import React from 'react';

/**
 * Option interface for select options
 */
interface Option {
  value: string;
  label: string;
}

/**
 * Select props interface
 */
interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  className?: string;
}

/**
 * Select component - A reusable select dropdown with consistent styling
 * @param props - Select properties
 * @returns React component
 */
const Select: React.FC<SelectProps> = ({ 
  value, 
  onChange, 
  options,
  className = '' 
}) => {
  const baseClasses = "text-sm outline-none leading-[22px] border border-[#eaeaea] rounded-md h-[42px] relative top-0.5 p-2.5 appearance-none";
  
  return (
    <select 
      className={`${baseClasses} ${className}`}
      onChange={onChange} 
      value={value}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select; 
