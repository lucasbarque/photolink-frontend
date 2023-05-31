import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

const passwordChangeSchema = yup.object({
  password: yup
    .string()
    .required('Preencha esse campo, por favor.')
    .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});

interface PasswordChangeFormProps {
  password: string;
  passwordConfirm: string;
}

export function PasswordChange() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PasswordChangeFormProps>({
    resolver: yupResolver(passwordChangeSchema),
  });
  const onSubmit: SubmitHandler<PasswordChangeFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-center bg-white px-10 py-8 sm:m-auto sm:h-auto sm:w-[420px] sm:rounded-lg sm:border sm:p-14"
      >
        <img
          src="/images/logo.svg"
          alt="Logo da PhotoLink"
          width="200"
          className="mx-auto"
        />
        <h1 className="mt-8 text-center text-subtitle-medium text-slate-700">
          Cadastre sua nova senha
        </h1>
        <p className="mt-2 text-center font-nunito-sans text-body-3-regular text-gray-400">
          Crie uma senha forte para proteger sua conta.
        </p>

        <div className="mt-8 w-full space-y-4">
          <Input
            label="Senha"
            name="password"
            error={errors.password?.message}
            control={control}
            type="password"
            placeholder="Digite sua senha"
          />
          <Input
            label="Confirmar senha"
            name="confirmPassword"
            control={control}
            type="password"
            error={errors.passwordConfirm?.message}
            placeholder="Digite novamente sua senha"
          />
        </div>

        <div className="mt-8">
          <Button type="submit" fullSize>
            Salvar senha
          </Button>
        </div>
      </form>
    </div>
  );
}
