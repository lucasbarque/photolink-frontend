import { Button } from './Button';
import { Icon } from './Icon';

interface EmptyGalleryProps {
  setIsModalOpen: () => void;
}

export function EmptyGallery({ setIsModalOpen }: EmptyGalleryProps) {
  return (
    <div className="flex flex-col items-center rounded-md border border-gray-200 p-5 lg:flex-row">
      <img src="/images/empty-gallery.svg" alt="" className="w-[487px]" />
      <div className="flex flex-1 flex-col items-center text-center">
        <div className="max-w-[347px]">
          <h2 className="text-body-1-medium text-slate-700">
            Crie sua primeira galeria
          </h2>
          <p className="mt-2 text-body-3-medium text-gray-500">
            Aqui você pode realizar a entrega de fotos para seus clientes de
            forma rápida e fácil
          </p>
          <div className="mt-3 flex flex-col items-center">
            <Button
              size="sm"
              leftIcon={<Icon icon="add-image" size={16} />}
              onClick={setIsModalOpen}
            >
              Criar nova galeria
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
