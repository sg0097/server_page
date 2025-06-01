import React from 'react';

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  className = '',
  showLabel = false,
  label = '',
  ...props 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`w-full ${className}`} {...props}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white">{label}</span>
          <span className="text-sm font-medium text-white">{value}/{max}</span>
        </div>
      )}
      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
        <div 
          className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;