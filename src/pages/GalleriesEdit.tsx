import { Button } from '@components/Button';
import { CopyLink } from '@components/CopyLink';
import { FormUploadImages } from '@components/FormUploadImages';
import { Icon } from '@components/Icon';
import { StatusBadge } from '@components/StatusBadge';
import { TopBar } from '@components/TopBar';

export function GalleriesEdit() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <TopBar />
      <div className="flex-1 bg-gray-100 px-[86px] py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-title-semibold text-slate-700">
            Edição de galeria
          </h1>
          <Button size="sm" leftIcon={<Icon icon="check" size={24} />}>
            Publicar galeria
          </Button>
        </div>
        <div className="mt-3 flex gap-8">
          <div className="h-fit w-full max-w-sm rounded-lg border border-gray-300 bg-white px-8 py-7">
            <div className="relative">
              <div className="absolute inset-0 rounded-md bg-black/20" />
              <img
                src="/assets/placeholder-galleries.svg"
                alt=""
                className="h-[188px] w-full rounded-md object-cover"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button size="sm" appearance="quintinary">
                  Alterar capa
                </Button>
              </div>
            </div>
            <h2 className="mt-4 text-subtitle-medium">Ensaio Lucas e Hemily</h2>

            <div className="mt-4">
              <StatusBadge
                size="md"
                title="Aguardando publicação"
                type="warning"
              />
            </div>
            <div className="mt-8">
              <CopyLink label="Link da galeria" />
            </div>
            <hr className="mt-8" />
            <div className="mt-8 text-center text-gray-500">
              <p className="text-body-3-regular">Identificação: #891160</p>
              <p className="text-body-3-medium">Criada em 19 Abril 2023</p>
            </div>
          </div>
          <div className="h-fit flex-1 rounded-lg border border-gray-300 bg-white px-8 py-7 ">
            <h2 className="text-body-1-medium">254 Fotos</h2>
            <div className="mt-3 overflow-y-auto">
              <FormUploadImages />
              {/* <MasonryGallery
                images={[
                  {
                    id: '1',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
                    title: 'IMG_2100',
                  },
                  {
                    id: '2',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/3fdea618-efbb-46f0-be7c-b2f8ae2e5930/al-1319-1133x1700.jpg',
                    title: 'IMG_2101',
                  },
                  {
                    id: '3',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
                    title: 'IMG_2102',
                  },
                  {
                    id: '4',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/3fdea618-efbb-46f0-be7c-b2f8ae2e5930/al-1319-1133x1700.jpg',
                    title: 'IMG_2103',
                  },
                  {
                    id: '5',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
                    title: 'IMG_2107',
                  },
                  {
                    id: '6',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/169d6508-153b-4b32-89a4-e52420503315/raw_7812-1700x1133.jpg',
                    title: 'IMG_2108',
                  },
                  {
                    id: '7',
                    url: 'https://cdn-sites-images.46graus.com/files/photos/065b7aa1/3fdea618-efbb-46f0-be7c-b2f8ae2e5930/al-1319-1133x1700.jpg',
                    title: 'IMG_2112',
                  },
                ]}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
