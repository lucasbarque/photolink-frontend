import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'quintinary' | 'danger';
  size?: 'tn' | 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  fullSize?: boolean;
}

export function Button({
  size = 'lg',
  appearance = 'primary',
  children,
  fullSize = false,
  leftIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'text-base flex items-center justify-center gap-3 rounded-lg font-semibold transition duration-300 ease-in-out',
        fullSize && 'w-full',
        // Sizes
        size === 'lg' && 'h-14 px-7',
        size === 'md' && 'h-12 px-5',
        size === 'sm' && 'h-10 px-4',
        size === 'tn' && 'h-8 px-3 !text-body-3-regular',
        // Appearances
        appearance === 'primary' &&
          'bg-esmerald-500 text-white transition duration-75 ease-in-out hover:bg-esmerald-700',
        appearance === 'secondary' &&
          'border border-esmerald-500 text-esmerald-500 transition duration-75 ease-in-out hover:bg-esmerald-500 hover:text-white ',
        appearance === 'tertiary' &&
          'border border-gray-200 text-slate-700 transition duration-300 hover:bg-gray-100',
        appearance === 'quintinary' && 'bg-gray-800 text-white hover:bg-black',
        appearance === 'danger' &&
          'border border-red-500 text-red-500 transition duration-75 ease-in-out hover:bg-red-500/5 hover:text-red-800 ',
      )}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
    </button>
  );
}
