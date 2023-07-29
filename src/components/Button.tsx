import { ComponentProps } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

import { Loading } from './Loading';

const button = tv({
  base: 'text-base flex items-center justify-center gap-3 rounded-lg font-semibold transition duration-300 ease-in-out',
  variants: {
    size: {
      lg: 'h-14 px-7',
      md: 'h-12 px-5',
      sm: 'h-10 px-4',
      tn: 'h-8 px-3 !text-body-3-regular',
    },
    fullSize: {
      true: 'w-full',
    },
    appearance: {
      primary: 'bg-esmerald-500 text-white hover:bg-esmerald-700',
      secondary:
        'border border-esmerald-500 text-esmerald-500 hover:bg-esmerald-500 hover:text-white',
      tertiary:
        'border border-gray-200 text-slate-700 transition duration-300 hover:bg-gray-100',
      quintinary: 'bg-gray-800 text-white hover:bg-gray-700 focus:bg-black',
      danger:
        'border border-red-500 text-red-500 hover:bg-red-500/5 hover:text-red-800',
    },
  },
  defaultVariants: {
    size: 'lg',
    appearance: 'primary',
    fullSize: false,
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    leftIcon?: React.ReactNode;
    isLoading?: boolean;
  };

export function Button({
  children,
  className,
  size,
  fullSize,
  appearance,
  leftIcon,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ size, fullSize, appearance, className })}
      {...props}
    >
      {leftIcon && leftIcon}

      {isLoading && (
        <Loading
          className="w-7"
          spinColor={appearance === 'primary' ? 'black' : 'green'}
          elipseColor={appearance === 'primary' ? 'success' : 'gray'}
        />
      )}

      {children}
    </button>
  );
}
