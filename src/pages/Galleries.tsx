import { useState } from 'react';

import { Button } from '@components/Button';
import { FormCreateNewGallery } from '@components/FormCreateNewGallery';
import { Icon } from '@components/Icon';
import { Input } from '@components/Input';
import Modal from '@components/Modal';
import { TopBar } from '@components/TopBar';

export function Galleries() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <FormCreateNewGallery isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <div className="flex h-screen w-screen flex-col">
        <TopBar />
        <div className="flex-1 bg-gray-100 px-[86px] py-12">
          <div className="flex items-center justify-between">
            <h1 className="text-title-semibold">Minhas galerias</h1>
            <Button
              size="sm"
              leftIcon={<Icon icon="add-image" size={24} />}
              onClick={() => setIsModalOpen(true)}
            >
              Criar nova galeria
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
