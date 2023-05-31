import { useState } from 'react';

import { Button } from '@components/Button';
import { EmptyGallery } from '@components/EmptyGallery';
import { FormCreateNewGallery } from '@components/FormCreateNewGallery';
import { GalleryCard } from '@components/GalleryCard';
import { Icon } from '@components/Icon';
import { TopBar } from '@components/TopBar';

interface Gallery {
  id: string;
  title: string;
  countPhotos: number;
  coverUrl: string;
  state: 'waiting' | 'published';
}

export function Galleries() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmptyGallery] = useState(false);
  const [galleries] = useState<Gallery[]>([
    {
      id: '1',
      title: 'Hemily e Lucas Barque',
      countPhotos: 145,
      state: 'waiting',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
    },
    {
      id: '2',
      title: 'Hemily e Lucas Barque',
      countPhotos: 145,
      state: 'waiting',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
    },
    {
      id: '3',
      title: 'Hemily e Lucas Barque',
      countPhotos: 145,
      state: 'waiting',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
    },
    {
      id: '4',
      title: 'Hemily e Lucas Barque',
      countPhotos: 145,
      state: 'waiting',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
    },
  ]);

  return (
    <>
      <FormCreateNewGallery isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-100">
        <TopBar />
        <div className="px-8 py-6 md:px-[86px] md:py-12">
          <div className="flex items-center justify-between">
            <h1 className="text-title-semibold text-slate-700">
              Minhas galerias
            </h1>

            {!isEmptyGallery && (
              <Button size="md" leftIcon={<Icon icon="add-image" size={24} />}>
                Criar nova galeria
              </Button>
            )}
          </div>
          <div className="mt-3">
            {isEmptyGallery && <EmptyGallery />}

            {galleries.length > 0 && (
              <div className="grid grid-cols-4 gap-[10px]">
                {galleries.map((gallery) => (
                  <GalleryCard key={gallery.id} {...gallery} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
