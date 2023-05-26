import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('E-mail com formato inválido.')
    .required('Preencha esse campo, por favor.'),
  password: yup
    .string()
    .required('Preencha esse campo, por favor.')
    .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

interface LoginFormProps {
  email: string;
  password: string;
}

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Esquerdo */}
      <div className="w-[420px] px-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col justify-center"
        >
          <img
            src="/images/logo.svg"
            alt="Logo da PhotoLink"
            width="155"
            className="mx-auto"
          />
          <div className="mt-8 flex w-full flex-col gap-3">
            <Input name="email" control={control} label="E-mail" />
            <Input name="password" control={control} label="Senha" />
          </div>
          <Link
            to="/forgot-password"
            className="mt-3 w-full text-right text-sm font-normal text-esmerald-500 hover:text-esmerald-700"
          >
            Esqueceu sua senha?
          </Link>
          <div className="mt-8">
            <Button>Entrar</Button>
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            Ainda não possui uma conta?{' '}
            <Link
              to="/register"
              className=" font-semibold text-esmerald-500 hover:text-esmerald-700"
            >
              Criar uma conta
            </Link>
          </p>
          <div className="mt-8 flex items-center gap-2">
            <span className="h-[1px] w-full bg-gray-300" />
            <span className="whitespace-nowrap text-xs text-gray-400">
              Ou entre com
            </span>
            <span className="h-[1px] w-full bg-gray-300" />
          </div>

          <div className="mt-8 flex gap-2">
            <Button size="sm" appearance="secondary">
              <span className="flex items-center gap-2">
                <BsGoogle size={16} />
                Google
              </span>
            </Button>
          </div>
        </form>
      </div>
      {/* Direito */}
      <img className="flex-1" src="/images/dinossauro.jpg" alt="" />
    </div>
  );
}
