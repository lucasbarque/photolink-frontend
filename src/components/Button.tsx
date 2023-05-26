import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
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
        'text-base flex items-center justify-center gap-3 rounded-lg font-semibold',
        fullSize && 'w-full',
        // Sizes
        size === 'lg' && 'h-14 px-7',
        size === 'md' && 'h-12 px-5',
        size === 'sm' && 'h-10 px-4',
        size === 'tn' && 'h-8 px-3',
        // Appearances
        appearance === 'primary' &&
          'bg-esmerald-500 text-white transition duration-75 ease-in-out hover:bg-esmerald-700',
        appearance === 'secondary' &&
          'border border-esmerald-500 text-esmerald-500 transition duration-75 ease-in-out hover:bg-esmerald-500 hover:text-white ',
      )}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
    </button>
  );
}
