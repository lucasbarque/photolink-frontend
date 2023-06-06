// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
import Modal from './Modal';

interface FormCreateNewGalleryProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// const createGallerySchema = yup.object({
//   name: yup.string().required('Preencha esse campo, por favor.'),
// });

// interface CreateGalleryFormProps {
//   name: string;
// }

export function ModalDeleteGallery({
  isOpen,
  setIsOpen,
}: FormCreateNewGalleryProps) {
  // const {} = useForm<CreateGalleryFormProps>({
  //   resolver: yupResolver(createGallerySchema),
  // });
  // const onSubmit: SubmitHandler<CreateGalleryFormProps> = async (data) => {
  //   console.log(data);
  // };

  return (
    <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Modal.Wrapper
        size="md"
        title="Excluir galeria?"
        description={
          <div className="pt-2 font-nunito-sans text-body-2-regular text-gray-600">
            Essa ação não poderá ser desfeita, por isso, leia as seguintes
            informações antes de prosseguir:
            <br />
            <br />
            <ul className="ml-4 list-disc">
              <li>
                Depois de apagada, uma galeria não pode ser acessada através do
                link compartilhado com seus clientes;
              </li>
              <li>Todas as fotos da galeria serão excluídas.</li>
            </ul>
          </div>
        }
        cancelButton={{
          fn: () => setIsOpen(false),
          text: 'Cancelar',
          appearance: 'tertiary',
        }}
        actionButton={{
          fn: () => console.log('danger button'),
          text: 'Excluir',
          appearance: 'danger',
        }}
      ></Modal.Wrapper>
    </Modal>
  );
}
