import clsx from 'clsx';

export interface StatusBadgeProps {
  type: 'success' | 'danger' | 'warning' | 'neutral';
  fullWidth?: boolean;
  title: string;
  size?: 'sm' | 'md';
}

export function StatusBadge({
  type = 'neutral',
  fullWidth = false,
  size = 'md',
  title,
}: StatusBadgeProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full border border-gray-200 bg-gray-100 font-nunito-sans text-small-regular ',
        {
          'w-full': fullWidth,
          'px-2': size === 'sm',
          'px-4 py-[5.5px]': size === 'md',
        },
      )}
    >
      <span
        className={clsx(
          'inline-flex h-2 w-2 rounded-full',
          type === 'success' && 'bg-green-600',
          type === 'warning' && 'bg-yellow-500',
          type === 'danger' && 'bg-red-800',
          type === 'neutral' && 'bg-gray-500',
        )}
      />
      <span className="line-clamp-1 overflow-hidden text-ellipsis pl-2 font-work-sans text-small-regular text-gray-500">
        {title}
      </span>
    </div>
  );
}
