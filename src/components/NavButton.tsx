import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Icon } from './Icon';

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'back-single' | 'back-full' | 'back-arrow' | 'close';
  size?: 'md' | 'sm';
}

export const NavButton: React.FC<NavButtonProps> = ({
  kind = 'back-full',
  size = 'md',
  ...rest
}) => {
  return (
    <button
      type="button"
      className={clsx('group flex items-center transition-all duration-300', {
        'h-10 gap-[6px] pr-4 font-medium text-gray-500 hover:text-gray-600 ':
          kind === 'back-full',

        'border-gray-300 hover:bg-gray-100 focus:border-none focus:bg-gray-200':
          ['back-single', 'back-arrow', 'close'].includes(kind),

        'justify-center rounded-lg border ': [
          'back-single',
          'back-arrow',
          'close',
        ].includes(kind),
        'h-10 w-10':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          size === 'md',
        'h-8 w-8':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          size === 'sm',
      })}
      {...rest}
    >
      {kind === 'back-full' && (
        <>
          <Icon
            icon="arrow-r"
            className="rotate-180 text-gray-500 transition-all duration-300 group-hover:text-gray-600"
            size={20}
          />
          Voltar
        </>
      )}

      {kind === 'back-arrow' && (
        <Icon
          icon="arrow-r"
          size={size === 'md' ? 28 : 22.4}
          className="rotate-180 text-gray-500"
        />
      )}

      {kind === 'back-single' && (
        <Icon
          icon="chev-l"
          className="text-gray-500"
          size={size === 'md' ? 28 : 22.4}
        />
      )}

      {kind === 'close' && (
        <Icon
          icon="close-md"
          className="text-gray-500"
          size={size === 'md' ? 28 : 22.4}
        />
      )}
    </button>
  );
};
