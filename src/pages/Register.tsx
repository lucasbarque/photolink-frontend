import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingStatesEnum } from '@model/loading/states';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useRegister } from '@hooks/network/useRegister';
import { useToast } from '@hooks/useToast';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import Mask from '../utils/mask';

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
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});

interface RegisterFormProps {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

export function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });
  const { requestState, register } = useRegister();
  const navigation = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormProps> = async (data) => {
    const response = await register(data);

    if (response?.statusCode === 201) {
      navigation('/galleries');
    }
  };

  const loading = requestState === LoadingStatesEnum.PENDING;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center  lg:bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col justify-center rounded-lg border-gray-200 bg-white px-10 py-8 sm:m-auto sm:w-[420px] lg:border"
      >
        <Link to="/">
          <img
            src="/images/logo.svg"
            alt="Logo da PhotoLink"
            width="200"
            className="mx-auto"
          />
        </Link>
        <h1 className="mt-8 text-center text-subtitle-medium text-slate-700">
          Cadastre sua conta
        </h1>
        <p className="mt-2 text-center font-nunito-sans text-body-3-regular text-gray-400">
          Para você utilizar a plataforma, é necessário realizar um cadastro. É
          rápido!
        </p>

        <div className="mt-8 w-full space-y-4">
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
            placeholder="(00) 00000-0000"
            error={errors.phone?.message}
            mask={Mask.phone}
            control={control}
            maxLength={15}
          />
          <Input
            label="Senha"
            name="password"
            error={errors.password?.message}
            control={control}
            isPassword
            placeholder="Digite sua senha"
          />
          <Input
            label="Confirmar senha"
            name="passwordConfirm"
            control={control}
            isPassword
            error={errors.passwordConfirm?.message}
            placeholder="Digite novamente sua senha"
          />
        </div>

        <div className="mt-8">
          <Button type="submit" disabled={loading} fullSize>
            Criar conta
          </Button>
        </div>

        <div className="mt-6 text-center text-body-3-regular">
          <span className="text-gray-400">Já possui uma conta?</span>
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
