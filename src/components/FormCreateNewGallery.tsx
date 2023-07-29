import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useGallery } from '@hooks/network/useGallery';
import { useAuth } from '@hooks/useAuth';

import { LoadingStatesEnum } from '@model/loading/states';

import { Button } from './Button';
import { Input } from './Input';
import Modal from './Modal';

interface FormCreateNewGalleryProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const createGallerySchema = yup.object({
  title: yup.string().required('Preencha esse campo, por favor.'),
});

interface CreateGalleryFormProps {
  title: string;
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
  const { user } = useAuth();
  const { requestState, create } = useGallery();
  const navigate = useNavigate();

  const loading = requestState === LoadingStatesEnum.PENDING;

  const onSubmit: SubmitHandler<CreateGalleryFormProps> = async ({ title }) => {
    if (user && user.id) {
      const response = await create({ title, userId: user.id });

      if (response?.body.id) {
        navigate(`/galleries/${response.body.id}`);
      }
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Modal.Wrapper
        size="md"
        title="Cadastrar nova galeria"
        firstButton={
          <Button
            size="md"
            fullSize
            appearance="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </Button>
        }
        secondButton={
          <Button
            size="md"
            fullSize
            onClick={handleSubmit(onSubmit)}
            isLoading={loading}
            disabled={loading}
          >
            Criar galeria
          </Button>
        }
      >
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Título da galeria"
            name="title"
            placeholder="Digite o título para a galeria"
            control={control}
            error={errors.title?.message}
          />
        </form>
      </Modal.Wrapper>
    </Modal>
  );
}
