import React from 'react';

const Chip = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium uppercase tracking-wide';
  
  const variants = {
    default: 'bg-white bg-opacity-10 text-white',
    yellow: 'bg-yellow-400 text-black',
    transparent: 'bg-transparent text-white'
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={chipClasses} {...props}>
      {children}
    </span>
  );
};

export default Chip;