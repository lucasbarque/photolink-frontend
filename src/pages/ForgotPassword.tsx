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
    <div className="flex h-full w-full flex-col items-center justify-center  sm:bg-gray-200/80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-center bg-white p-6 sm:m-auto sm:h-auto sm:max-w-[532px] sm:rounded-lg sm:border-2 sm:p-14"
      >
        <img
          src="/images/logo.svg"
          alt="Logo da PhotoLink"
          height="2.18rem"
          className="mx-auto"
        />
        <h1 className="mt-3 text-center text-[1.375rem] font-medium text-slate-700">
          Redefinição de senha
        </h1>
        <p className="mt-1 text-center text-xs text-gray-400">
          Digite seu e-mail cadastrado na plataforma que iremos te enviar um
          e-mail com instruções de redefinição de senha.
        </p>

        <div className="mt-3 w-full space-y-3">
          <Input
            label="E-mail"
            name="email"
            error={errors.email?.message}
            control={control}
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="mt-3">
          <Button type="submit">Enviar</Button>
        </div>

        <div className="mt-3 text-center text-xs">
          <span className="text-gray-400">Lembrou da sua senha?</span>
          <Link
            to="/"
            className="font-semibold text-esmerald-500 hover:cursor-pointer hover:text-esmerald-700"
          >
            {' '}
            Voltar para o login
          </Link>
        </div>
      </form>
    </div>
  );
}
