import { useState } from 'react';

import clsx from 'clsx';

import { Icon } from './Icon';

interface Image {
  id: string;
  title: string;
  url: string;
}

interface MasonryItemProps {
  image: Image;
  isSelected?: boolean;
}

export function MasonryItem({ image, isSelected = false }: MasonryItemProps) {
  const [imageSelected, setImageSelected] = useState(isSelected);

  return (
    <div
      key={image.id}
      style={{ borderColor: 'transparent' }}
      className={clsx(
        'group relative cursor-pointer overflow-hidden border-4 transition duration-300',
        imageSelected && 'rounded-sm !border-esmerald-500 duration-500',
      )}
    >
      {imageSelected && (
        <div
          className="absolute inset-0 bg-esmerald-500/50"
          onClick={() => setImageSelected(!imageSelected)}
        />
      )}

      {!imageSelected && (
        <div className="absolute -bottom-20 left-0 right-0 flex h-12 items-center justify-center bg-esmerald-500 transition-all duration-300 ease-in group-hover:bottom-0">
          <Icon
            icon="trash"
            size={24}
            className="cursor-pointer text-gray-100 hover:text-gray-200"
          />
        </div>
      )}

      <img
        src={`${image.url}?w=162&auto=format`}
        srcSet={`${image.url}?w=162&auto=format&dpr=2 2x`}
        alt={image.title}
        loading="lazy"
        className="block w-full"
        onClick={() => setImageSelected(!imageSelected)}
      />
    </div>
  );
}
