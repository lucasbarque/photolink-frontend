import { useMemo, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useGallery } from '@hooks/network/useGallery';

import SocketIO from '@services/SocketIO';

import { Icon } from './Icon';
import { LoadingUpload } from './LoadingUpload';

export function FormUploadImages() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const [photosTotal, setPhotosTotal] = useState(0);
  const [photosSize, setPhotosSize] = useState(0);
  const [photosUploaded, _] = useState(1);

  const { uploadPhotos } = useGallery();
  const { id } = useParams();

  const ioClient = useMemo(() => {
    return new SocketIO();
  }, []);

  async function startUpload() {
    const fileElements = inputRef.current?.files;

    if (!fileElements?.length) {
      return;
    }

    const files = Array.from(fileElements);

    const { size } = files.reduce(
      (prev, next) => ({ size: prev.size + next.size }),
      { size: 0 },
    );

    setIsUploading(true);
    setPhotosTotal(files.length);
    setPhotosSize(size);

    ioClient.connect();

    if (id) {
      await uploadPhotos({
        id,
        photos: files,
        socketId: ioClient.socket.id,
      });
    }

    console.log(ioClient.socket.id);
  }

  function handleCancelUpload() {
    setIsUploading(false);
    ioClient.socket.disconnect();
  }

  return (
    <>
      {isUploading ? (
        <LoadingUpload
          photosSizeRemaining={photosSize}
          photosTotal={photosTotal}
          photosUploaded={photosUploaded}
          onCancelUpload={handleCancelUpload}
        />
      ) : (
        <form>
          <div className="rounded-md border border-gray-300 px-3 py-2">
            <label
              data-active={isDragActive}
              htmlFor="file"
              className="relative flex flex-col items-center justify-center rounded-md border-[2px] border-dashed py-6 data-[active=true]:border-esmerald-500 data-[active=true]:bg-gray-100"
            >
              <input
                className="absolute inset-0 h-full w-full opacity-0"
                onChange={startUpload}
                onDragEnter={() => setIsDragActive(true)}
                onFocus={() => setIsDragActive(true)}
                onClick={() => setIsDragActive(true)}
                onDragLeave={() => setIsDragActive(false)}
                onBlur={() => setIsDragActive(false)}
                onDrop={() => setIsDragActive(false)}
                ref={inputRef}
                type="file"
                id="file"
                name="file"
                multiple
              />
              <div className="flex w-fit items-center justify-center rounded-full bg-gray-200 p-3">
                <Icon icon="add-image" size={48} className="text-gray-600" />
              </div>
              <div className="mt-4 text-body-1-medium text-slate-700">
                Adicione aqui suas fotos
              </div>
              <p className="mt-1 text-body-2-regular text-gray-500">
                JPG, JPEG, PNG
              </p>
              <div className="text-base mt-5 flex h-12 cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-200 px-5 font-semibold text-slate-700 transition duration-300 ease-in-out hover:bg-gray-100">
                Selecionar imagens
              </div>
            </label>
          </div>
        </form>
      )}
    </>
  );
}
