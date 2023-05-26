import clsx from 'clsx';

export interface StatusBadgeProps {
  type: 'success' | 'danger' | 'warning' | 'neutral';
  fullWidth?: boolean;
  title: string;
}

export function StatusBadge({
  type = 'neutral',
  fullWidth = false,
  title,
}: StatusBadgeProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-4 py-[5.5px]',
        {
          'w-full': fullWidth,
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
      <span className="font-work-sans pl-2 text-body-3-regular text-gray-800">
        {title}
      </span>
    </div>
  );
}
