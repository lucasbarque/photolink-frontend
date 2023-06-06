import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from './Input';
import Modal from './Modal';

interface FormCreateNewGalleryProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const createGallerySchema = yup.object({
  name: yup.string().required('Preencha esse campo, por favor.'),
});

interface CreateGalleryFormProps {
  name: string;
}

export function FormCreateNewGallery({
  isOpen,
  setIsOpen,
}: FormCreateNewGalleryProps) {
  const { handleSubmit, control } = useForm<CreateGalleryFormProps>({
    resolver: yupResolver(createGallerySchema),
  });
  const onSubmit: SubmitHandler<CreateGalleryFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Modal.Wrapper
        size="md"
        title="Cadastrar nova galeria"
        actionButton={{
          fn: () => console.log('action button'),
          text: 'Salvar',
          appearance: 'primary',
        }}
        cancelButton={{
          fn: () => setIsOpen(false),
          text: 'Cancelar',
          appearance: 'secondary',
        }}
      >
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome da galeria"
            name="gallery-name"
            placeholder="Digite o nome da galeria"
            control={control}
          />
        </form>
      </Modal.Wrapper>
    </Modal>
  );
}
