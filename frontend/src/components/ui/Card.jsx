import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  backgroundImage = null,
  overlay = false,
  ...props 
}) => {
  const baseClasses = 'relative overflow-hidden';
  const overlayClasses = overlay ? 'bg-black bg-opacity-50' : '';
  
  return (
    <div 
      className={`${baseClasses} ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      {...props}
    >
      {/* Overlay dark layer */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses} z-10`} />
      )}

      {/* Gradient layer */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-white/30 z-0" />
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default Card;
