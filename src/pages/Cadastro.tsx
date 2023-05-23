import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

const registerSchema = yup.object({
  name: yup
    .string()
    .required('Preencha esse campo, por favor.')
    .min(3, 'O nome deve possuir pelo menos 3 caracteres.'),
  email: yup
    .string()
    .email('E-mail com formato inválido.')
    .required('Preencha esse campo, por favor.'),
  phone: yup.string().required('Preencha esse campo, por favor.'),
  password: yup
    .string()
    .required('Preencha esse campo, por favor.')
    .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

interface RegisterFormProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export function Cadastro() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormProps> = async (data) => {
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
          Cadastre sua conta
        </h1>
        <p className="mt-1 text-center text-xs text-gray-400">
          Para você utilizar a plataforma, é necessário realizar um cadastro. É
          rápido!
        </p>

        <div className="mt-3 w-full space-y-3">
          <Input
            label="Nome completo"
            name="name"
            placeholder="Digite seu nome"
            control={control}
            error={errors.name?.message}
          />
          <Input
            label="E-mail"
            name="email"
            error={errors.email?.message}
            control={control}
            placeholder="Digite seu e-mail"
          />
          <Input
            label="Celular"
            name="phone"
            error={errors.phone?.message}
            control={control}
            placeholder="Digite seu celular"
          />
          <Input
            label="Senha"
            name="password"
            error={errors.password?.message}
            control={control}
            placeholder="Digite sua senha"
          />
          <Input
            label="Confirmar senha"
            name="confirmPassword"
            control={control}
            placeholder="Digite novamente sua senha"
          />
        </div>

        <div className="mt-3">
          <Button type="submit">Criar conta</Button>
        </div>

        <div className="mt-3 text-center text-xs">
          <span className="text-gray-400">Já possui uma conta?</span>
          <span className="font-semibold text-esmerald-500 hover:cursor-pointer hover:text-esmerald-700">
            {' '}
            Voltar para o login
          </span>
        </div>
      </form>
    </div>
  );
}
