import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

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
    formState: { errors },
  } = useForm<ForgotPasswordFormProps>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<ForgotPasswordFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center border-gray-200 bg-white px-10 py-8 sm:m-auto sm:h-auto sm:max-w-[532px] sm:rounded-lg sm:p-14 lg:w-[420px] lg:border"
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
          <Button fullSize type="submit">
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
  );
}
