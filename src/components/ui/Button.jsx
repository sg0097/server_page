import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none border';
  
  const variants = {
    primary: 'bg-transparent border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10',
    outline: 'bg-transparent border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10',
    star: 'bg-transparent border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm h-10',
    medium: 'px-6 py-4 text-lg h-14',
    large: 'px-8 py-4 text-lg h-14'
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;