import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({ label, icon: Icon, error, className, ...props }) => {
  return (
    <div className={twMerge('w-full space-y-1.5', className)}>
      {label && (
        <label className="text-sm font-medium text-text-secondary ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary-light transition-colors">
            <Icon size={20} />
          </div>
        )}
        <input
          className={twMerge(
            'w-full bg-background-alt border-2 border-transparent rounded-xl py-3 px-4 transition-all duration-300 outline-none focus:border-primary-light focus:bg-white focus:ring-4 focus:ring-primary-light/5',
            Icon && 'pl-12',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/5'
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 ml-1 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
