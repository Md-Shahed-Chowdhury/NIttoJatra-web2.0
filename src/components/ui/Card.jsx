import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, glass = false, hover = true, ...props }) => {
  return (
    <div
      className={twMerge(
        'rounded-2xl p-6 transition-all duration-300',
        glass ? 'glass' : 'bg-white shadow-premium border border-transparent',
        hover && 'hover:shadow-premium-hover hover:border-primary-light/10 transform hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
