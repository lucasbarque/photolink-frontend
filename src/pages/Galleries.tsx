import { useEffect, useState } from 'react';

import { useGallery } from '@hooks/network/useGallery';
import { useAuth } from '@hooks/useAuth';

import { IGallery } from '@model/gallery';

import { Button } from '@components/Button';
import { EmptyGallery } from '@components/EmptyGallery';
import { FormCreateNewGallery } from '@components/FormCreateNewGallery';
import { GalleryCard } from '@components/GalleryCard';
import { Icon } from '@components/Icon';
import { TopBar } from '@components/TopBar';

export function Galleries() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmptyGallery] = useState(false);
  const [galleries, setGalleries] = useState<IGallery[]>([]);

  const { list } = useGallery();
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      if (user && user.id) {
        const response = await list({ userId: user.id });

        if (response?.galleries) {
          setGalleries(response.galleries);
        }
      }
    })();
  }, []);

  return (
    <>
      <FormCreateNewGallery isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <TopBar />
      <div className="flex-1 bg-gray-100 px-8 py-6 md:px-[86px] md:py-12">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-title-semibold text-slate-700">
            Minhas galerias
          </h1>

          {!isEmptyGallery && (
            <Button
              size="md"
              disabled
              leftIcon={<Icon icon="add-image" size={24} />}
              onClick={() => setIsModalOpen(true)}
            >
              Criar nova galeria
            </Button>
          )}
        </div>
        <div className="mt-5">
          {galleries.length === 0 ? (
            <EmptyGallery />
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {galleries.map((gallery) => (
                <GalleryCard
                  key={gallery.id}
                  id={gallery.id}
                  title={gallery.title}
                  countPhotos={gallery.photos_count}
                  coverUrl={gallery?.photos_data?.cover?.id}
                  status={gallery.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
