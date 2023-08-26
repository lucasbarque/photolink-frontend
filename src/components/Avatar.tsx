import clsx from 'clsx';

interface AvatarProps {
  avatar?: {
    filename: string;
    id: string;
  };
  size?: 'sm' | 'md';
}

export function Avatar({ avatar, size = 'sm' }: AvatarProps) {
  const avatarUrl = avatar
    ? `https://drive.google.com/uc?export=view&id=${avatar.id}`
    : '/assets/placeholder.svg';

  const sizes = {
    sm: 44,
    md: 80,
  };

  return (
    <img
      src={avatarUrl}
      alt="avatar"
      width={sizes[size]}
      height={sizes[size]}
      className={clsx('rounded-full border border-gray-300 object-cover', {
        'h-11 w-11': size === 'sm',
        'h-20 w-20': size === 'md',
      })}
    />
  );
}
