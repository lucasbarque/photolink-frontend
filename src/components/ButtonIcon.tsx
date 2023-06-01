import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Icon } from './Icon';

interface ButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
  size?: 'md';
  icon: string;
  fullSize?: boolean;
}

export function ButtonIcon({
  size = 'md',
  appearance = 'primary',
  icon,
  ...rest
}: ButtonIcon) {
  const iconSizes = {
    md: 18,
  };
  return (
    <button
      className={clsx(
        'text-base flex  items-center justify-center rounded-[4px] bg-white',
        // Sizes
        size === 'md' && 'h-8 w-8',
        // Appearances
        appearance === 'primary' &&
          'bg-esmerald-500 text-white transition duration-75 ease-in-out hover:bg-esmerald-700',
        appearance === 'secondary' &&
          'border border-gray-200 text-gray-500 transition duration-75 ease-in-out hover:bg-gray-200 hover:text-gray-700 ',
      )}
      {...rest}
    >
      <Icon icon={icon} size={iconSizes[size]} />
    </button>
  );
}
