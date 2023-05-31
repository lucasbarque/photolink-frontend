import { StatusBadge } from './StatusBadge';

interface Gallery {
  id: string;
  title: string;
  countPhotos: number;
  coverUrl: string;
  state: 'waiting' | 'published';
}

export function GalleryCard({
  id,
  title,
  countPhotos,
  coverUrl,
  state,
}: Gallery) {
  return (
    <div>
      <img height={240} src={coverUrl} alt="" className="rounded-md" />
      <div className="ml-3 mr-3 flex -translate-y-1/2 flex-col items-center rounded-[4px] bg-white py-3 shadow-shadow">
        <div className="flex gap-2">
          <div className="text-small-regular text-gray-500">
            {countPhotos} fotos
          </div>
          <StatusBadge type="warning" title="Aguardando publicação" />
        </div>
        <span className="text-body-2-semibold text-slate-700">{title}</span>
      </div>
    </div>
  );
}
