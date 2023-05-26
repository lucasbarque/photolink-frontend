import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { CopyLink } from '@components/CopyLink';
import { Icon } from '@components/Icon';
import { StatusBadge } from '@components/StatusBadge';
import { TopBar } from '@components/TopBar';

export function GalleriesEdit() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <TopBar />
      <div className="flex-1 bg-gray-100 px-[86px] py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-title-semibold">Edição de galeria</h1>
          <Button size="sm" leftIcon={<Icon icon="check" size={24} />}>
            Publicar galeria
          </Button>
        </div>
        <div className="mt-3 flex gap-8">
          <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-white px-8 py-7">
            <h2 className="text-body-1-medium">Ensaio Lucas e Hemily</h2>
            <div className="mt-4">
              <StatusBadge title="Aguardando publicação" type="warning" />
            </div>
            <hr className="mt-8" />
            <div className="mt-8">
              <CopyLink label="Link da galeria" />
            </div>
            <div className="mt-6">
              <span className="text-body-3-medium text-gray-500">Cliente</span>
              <div className="mt-2 flex items-center gap-2">
                <Avatar />
                <span className="text-body-2-medium text-gray-700">
                  Lucas Barque
                </span>
              </div>
            </div>
            <hr className="mt-8" />
            <div className="mt-8 text-center text-gray-500">
              <p className="text-body-3-regular">Identificação: #891160</p>
              <p className="text-body-3-medium">Criada em 19 Abril 2023</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-gray-300 bg-white px-8 py-7">
            <h2 className="text-body-1-medium">Fotos</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
