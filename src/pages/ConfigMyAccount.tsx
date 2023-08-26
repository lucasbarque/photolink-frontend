import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { TopBar } from '@components/TopBar';

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

export function ConfigMyAccount() {
  const { signOut, user } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <div className="flex w-full flex-col">
      <TopBar />
      <div className="flex-1 bg-gray-100 px-[86px] py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-title-semibold text-slate-700">Configurações</h1>
        </div>

        <div className="mt-3 flex gap-8">
          {/* Menu Esquerdo */}
          <div className="h-fit w-full max-w-sm rounded-lg border border-gray-300 bg-white px-8 py-7">
            <Link
              to="/config-myaccount"
              className="text-body-2-semibold text-esmerald-600 hover:cursor-pointer hover:text-esmerald-500"
            >
              Minha Conta
            </Link>

            <hr className="mb-4 mt-4" />
            <Link
              to="/config-security"
              className="text-body-2-medium text-slate-700 hover:cursor-pointer hover:text-esmerald-500"
            >
              Acesso e Segurança
            </Link>
          </div>

          <div className="flex w-full flex-col gap-6">
            {/* Dados da Conta */}
            <div className="h-fit rounded-lg border border-gray-300 bg-white px-8 py-7 pb-8">
              <h2 className="mb-6 text-subtitle-semibold text-slate-700">
                Dados da Conta
              </h2>

              <div className="flex max-w-[490px] flex-col gap-4">
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
                  disabled
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
              </div>
            </div>
            {/* Dados Públicos */}
            <div className="h-fit flex-1 rounded-lg border border-gray-300 bg-white px-8 py-7 ">
              <h2 className="mb-6 text-subtitle-semibold text-slate-700">
                Dados Públicos
              </h2>

              <h3 className="mb-2 text-body-2-medium text-gray-500">
                Logotipo
              </h3>

              <div className="relative mb-6 w-[324px]">
                <div className="absolute inset-0 rounded-md bg-black/20" />
                <img
                  src="/assets/placeholder-galleries.svg"
                  alt=""
                  className="h-[188px] w-full rounded-md object-cover"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Button size="sm" appearance="quintinary">
                    Alterar logotipo
                  </Button>
                </div>
              </div>

              <h3 className="mb-2 text-body-2-medium text-gray-500">
                Foto do Perfil
              </h3>

              <div className="flex flex-row items-center gap-6">
                <Avatar size="md" avatar={user?.avatar_data} />

                <Button size="md" appearance="secondary">
                  Alterar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Botões Rodapé */}
        <div className="mt-6 flex justify-end gap-4">
          <Button size="sm" appearance="secondary">
            Cancelar
          </Button>

          <Button size="sm">Salvar Alterações</Button>
        </div>
      </div>
    </div>
  );
}
