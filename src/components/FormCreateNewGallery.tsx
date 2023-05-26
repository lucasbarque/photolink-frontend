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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateGalleryFormProps>({
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
        actionButtonText="Cancelar"
        actionButtonFunction={() => setIsOpen(false)}
        closeButtonText="Salvar"
      >
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome da galeria"
            name="gallery-name"
            control={control}
          />
        </form>
      </Modal.Wrapper>
    </Modal>
  );
}
