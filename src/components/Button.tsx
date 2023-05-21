import clsx from 'clsx';

interface ButtonProps {
  appearance?: 'primary' | 'secondary';
  size?: 'sm' | 'lg';
  children: React.ReactNode;
}

export function Button({
  size = 'lg',
  appearance = 'primary',
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex w-full items-center justify-center rounded-lg text-base font-bold',
        // Sizes
        size === 'lg' && 'py-[18px]',
        size === 'sm' && 'py-[10px]',
        // Appearances
        appearance === 'primary' &&
          'bg-esmerald-500 text-white transition duration-75 ease-in-out hover:bg-esmerald-700',
        appearance === 'secondary' &&
          'border border-esmerald-500 text-esmerald-500 transition duration-75 ease-in-out hover:bg-esmerald-500 hover:text-white ',
      )}
    >
      {children}
    </button>
  );
}
