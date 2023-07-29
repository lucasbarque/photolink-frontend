import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { useForgotPassword } from '@hooks/useForgotPassword';
import { useToast } from '@hooks/useToast';

import { LoadingStatesEnum } from '@model/loading/states';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import Modal from '@components/Modal';

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email('E-mail com formato inválido.')
    .required('Preencha esse campo, por favor.'),
});

interface ForgotPasswordFormProps {
  email: string;
}

export function ForgotPassword() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordFormProps>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const { toast } = useToast();
  const { sendEmail, requestState } = useForgotPassword();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loading = requestState === LoadingStatesEnum.PENDING;

  const onSubmit: SubmitHandler<ForgotPasswordFormProps> = async ({
    email,
  }) => {
    const success = await sendEmail({ email });

    if (success) {
      setIsModalOpen(true);
    }
  };
  const email = watch('email');

  async function handleRetrieveSendEmail() {
    const success = await sendEmail({ email });
    if (success) {
      setIsModalOpen(false);
      toast({
        message: 'E-mail reenviado',
        type: 'success',
      });
    }
  }

  return (
    <>
      <Modal open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
        <Modal.Wrapper
          size="md"
          title="Instruções enviadas por e-mail"
          description={`Caso exista uma conta cadastrada em <strong>${email}</strong>, vamos te enviar um e-mail com as instruções para redefinir sua senha. <br /> <br /> Caso não encontre o e-mail, procure em sua caixa de spam ou solicite o reenvio.`}
          firstButton={
            <Button
              onClick={handleRetrieveSendEmail}
              fullSize
              size="md"
              appearance="secondary"
            >
              Reenviar e-mail
            </Button>
          }
          secondButton={
            <Button
              onClick={() => setIsModalOpen(false)}
              fullSize
              size="md"
              appearance="primary"
            >
              Entendi
            </Button>
          }
        />
      </Modal>

      <div className="flex h-full w-full flex-col items-center justify-center lg:bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center border-gray-200 bg-white px-10 py-8 sm:m-auto sm:h-auto sm:max-w-[532px] sm:rounded-lg sm:p-14 lg:w-[480px] lg:border"
        >
          <img
            src="/images/logo.svg"
            alt="Logo da PhotoLink"
            width="200"
            className="mx-auto"
          />
          <h1 className="mt-8 text-center text-subtitle-medium text-slate-700">
            Redefinição de senha
          </h1>
          <p className="mt-2 text-center font-nunito-sans text-body-3-regular text-gray-400">
            Digite seu e-mail que iremos te enviar
            <br />
            instruções de redefinição de senha.
          </p>

          <div className="mt-8 w-full space-y-3">
            <Input
              label="E-mail"
              name="email"
              error={errors.email?.message}
              control={control}
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="mt-8">
            <Button
              fullSize
              type="submit"
              disabled={loading}
              isLoading={loading}
            >
              Enviar
            </Button>
          </div>

          <div className="mt-6 text-center text-body-3-regular">
            <span className="text-gray-400">Lembrou da sua senha?</span>
            <Link
              to="/"
              className="text-body-3-semibold text-esmerald-500 hover:cursor-pointer hover:text-esmerald-600"
            >
              {' '}
              Voltar para o login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
