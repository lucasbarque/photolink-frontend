import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ButtonIcon } from './ButtonIcon';
import { ModalDeleteGallery } from './ModalDeleteGallery';
import { StatusBadge } from './StatusBadge';

interface Gallery {
  id: string;
  title: string;
  countPhotos: number;
  coverUrl?: string;
  status: 'DRAFT' | 'PUBLISHED';
}

export function GalleryCard({
  id,
  title,
  countPhotos,
  coverUrl,
  status,
}: Gallery) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const coverImg = coverUrl
    ? `https://drive.google.com/uc?export=view&id=${coverUrl}`
    : '/assets/placeholder-galleries.svg';

  return (
    <>
      <ModalDeleteGallery
        isOpen={isModalDeleteOpen}
        setIsOpen={setIsModalDeleteOpen}
      />

      <div className="relative">
        <div className="absolute right-2 top-2 flex gap-1">
          <NavLink to={`/galleries/${id}`}>
            <ButtonIcon icon="edit" appearance="secondary" />
          </NavLink>
          <ButtonIcon
            icon="trash"
            appearance="secondary"
            onClick={() => setIsModalDeleteOpen(true)}
          />
        </div>
        <NavLink to={`/galleries/${id}`}>
          <img
            height={240}
            src={coverImg}
            alt=""
            className="aspect-auto h-[300px] w-full rounded-md object-cover"
          />
          <div className="ml-3 mr-3 flex -translate-y-1/2 flex-col items-center overflow-hidden rounded-[4px] bg-white py-3 shadow-shadow">
            <div className="flex items-center gap-2">
              <div className="text-small-regular text-gray-500">
                {countPhotos} fotos
              </div>
              <StatusBadge
                type={status === 'DRAFT' ? 'warning' : 'success'}
                size="sm"
                title={
                  status === 'DRAFT' ? 'Aguardando publicação' : 'Publicado'
                }
              />
            </div>
            <span className="mt-1 line-clamp-1 overflow-hidden text-ellipsis px-5 text-body-2-semibold text-slate-700">
              {title}
            </span>
          </div>
        </NavLink>
      </div>
    </>
  );
}
