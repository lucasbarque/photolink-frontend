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
  status: 'waiting' | 'published';
}

export function Galleries() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmptyGallery] = useState(false);
  const [galleries] = useState<Gallery[]>([
    {
      id: '1',
      title: 'Hemily e Lucas Barque',
      countPhotos: 145,
      status: 'waiting',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
    },
    {
      id: '2',
      title: '02 anos Caio e 05 anos Cecília',
      countPhotos: 522,
      status: 'published',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/cdc30ceb-ae2f-4abd-86da-5f99e657d7ca/fag-1025-1700x1133.jpg',
    },
    {
      id: '3',
      title: '01 ano Marco Angelo Longen',
      countPhotos: 985,
      status: 'published',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/2639e150-fb80-4087-8661-e9ad2ab46032/ma-1046-768x511.jpg',
    },
    {
      id: '4',
      title: 'Família Domingues',
      countPhotos: 643,
      status: 'published',
      coverUrl:
        'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/83bd0ead-1e82-4c99-a747-aa13e86f9388/img_6589-768x511.jpg',
    },
  ]);

  return (
    <>
      <FormCreateNewGallery isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <TopBar />
      <div className="h-full flex-1 bg-gray-100 px-8 py-6 md:px-[86px] md:py-12">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-title-semibold text-slate-700">
            Minhas galerias
          </h1>

          {!isEmptyGallery && (
            <Button
              size="md"
              leftIcon={<Icon icon="add-image" size={24} />}
              onClick={() => setIsModalOpen(true)}
            >
              Criar nova galeria
            </Button>
          )}
        </div>
        <div className="mt-5">
          {isEmptyGallery && <EmptyGallery />}

          {galleries.length > 0 && (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {galleries.map((gallery) => (
                <GalleryCard key={gallery.id} {...gallery} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
