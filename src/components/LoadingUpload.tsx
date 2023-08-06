import FormatBytes from '../utils/formatBytes';
import { Button } from './Button';
import { LoadingBrand } from './LoadingBrand';

interface LoadingUploadProps {
  photosTotal: number;
  photosUploaded: number;
  photosSizeRemaining: number;
  onCancelUpload: () => void;
}

export function LoadingUpload({
  photosTotal,
  photosUploaded,
  photosSizeRemaining,
  onCancelUpload,
}: LoadingUploadProps) {
  return (
    <div className="fixed inset-0 z-[999] flex h-full w-full items-center justify-center bg-white">
      <div>
        <LoadingBrand />
        <div className="mt-5 flex flex-col items-center">
          <p className="text-body-2-medium text-slate-700">
            Carregando fotos {photosUploaded}/{photosTotal}
          </p>
          <p className="text-body-3-regular text-gray-600">
            Restante para subir {FormatBytes.format(photosSizeRemaining)}
          </p>
          <Button
            className="mt-5"
            appearance="danger"
            size="md"
            onClick={onCancelUpload}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
