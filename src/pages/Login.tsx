import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  const { handleSubmit, control } = useForm<LoginFormProps>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Esquerdo */}
      <div className="mx-auto w-full shrink-0 px-6 sm:w-[420px] lg:w-[420px] lg:px-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col justify-center"
        >
          <img
            src="/images/logo.svg"
            alt="Logo da PhotoLink"
            width="200"
            className="mx-auto"
          />
          <div className="mt-8 flex w-full flex-col gap-3">
            <Input
              name="email"
              control={control}
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
            <Input
              name="password"
              control={control}
              label="Senha"
              placeholder="Digite sua senha"
              isPassword
            />
          </div>
          <Link
            to="/forgot-password"
            className="mt-3 w-full text-right text-body-2-medium text-esmerald-500 hover:text-esmerald-600"
          >
            Esqueceu sua senha?
          </Link>
          <div className="mt-8">
            <Button fullSize>Entrar</Button>
          </div>
          <p className="mt-8 text-center text-body-3-regular text-gray-500">
            Ainda não possui uma conta?
            <br />
            <Link
              to="/register"
              className="text-body-3-semibold text-esmerald-500 hover:text-esmerald-600"
            >
              Criar uma conta
            </Link>
          </p>
          {/* <div className="mt-8 flex items-center gap-2">
            <span className="h-[1px] w-full bg-gray-300" />
            <span className="whitespace-nowrap text-body-3-regular text-gray-400">
              Ou entre com
            </span>
            <span className="h-[1px] w-full bg-gray-300" />
          </div>

          <div className="mt-8 flex gap-2">
            <Button fullSize size="sm" appearance="secondary">
              <span className="flex items-center gap-2">
                <Icon icon="instagram" size={16} />
                Instagram
              </span>
            </Button>
            <Button size="sm" fullSize appearance="secondary">
              <span className="flex items-center gap-2">
                <Icon icon="google" size={16} />
                Google
              </span>
            </Button>
          </div> */}
        </form>
      </div>
      {/* Direito */}
      <img
        src="/images/dinossauro.jpg"
        alt=""
        className="hidden flex-1 object-cover object-center lg:block"
      />
    </div>
  );
}
