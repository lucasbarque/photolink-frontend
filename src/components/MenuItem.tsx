import clsx from 'clsx';

import { Icon } from './Icon';

interface MenuItemProps {
  variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  title: string;
  icon?: string;
}

export function MenuItem({
  variation = 'primary',
  title,
  icon,
}: MenuItemProps) {
  return (
    <span
      className={clsx(
        'flex cursor-pointer items-center gap-3 rounded-lg px-4 py-[10px] hover:bg-gray-100',
        variation === 'quaternary' && 'active:bg-transparent-dark-2',
      )}
    >
      {icon && <Icon icon={icon} size={20} className="text-gray-800" />}
      <span className="text-body-2-medium text-gray-700">{title}</span>
    </span>
  );
}
