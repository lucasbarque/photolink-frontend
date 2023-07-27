interface AvatarProps {
  avatar?: {
    filename: string;
    id: string;
  };
}

export function Avatar({ avatar }: AvatarProps) {
  const avatarUrl = avatar
    ? `https://drive.google.com/uc?export=view&id=${avatar.id}`
    : '/assets/placeholder.svg';
  return (
    <img
      src={avatarUrl}
      alt="avatar"
      width={44}
      height={44}
      className="h-11 w-11 rounded-full border border-gray-300 object-cover"
    />
  );
}
