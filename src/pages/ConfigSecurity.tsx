import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';

import { Button } from '@components/Button';
import { TopBar } from '@components/TopBar';

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

export function ConfigSecurity() {
  useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <TopBar />
      <div className="flex-1 bg-gray-100 px-[86px] py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-title-semibold text-slate-700">Configurações</h1>
        </div>

        <div className="mt-3 flex gap-8">
          {/* Menu Esquerdo */}
          <div className="h-fit w-full max-w-sm rounded-lg border border-gray-300 bg-white px-8 py-7">
            <Link
              to="/"
              className="text-body-2-medium text-slate-700 hover:cursor-pointer hover:text-esmerald-500"
            >
              Minha Conta
            </Link>

            <hr className="mb-4 mt-4" />
            <Link
              to="/"
              className="text-body-2-semibold text-esmerald-600 hover:cursor-pointer hover:text-esmerald-500"
            >
              Acesso e Segurança
            </Link>
          </div>

          <div className="flex w-full flex-col gap-6">
            {/* Acesso e Segurança */}
            <div className="h-fit rounded-lg border border-gray-300 bg-white px-8 py-7">
              <h2 className="mb-6 text-subtitle-semibold text-slate-700">
                Acesso e Segurança
              </h2>

              <div className="flex gap-24">
                <div>
                  <h3 className="text-body-3-medium text-gray-500">Senha</h3>
                  <p className="text-slate-700">••••••••••</p>
                </div>

                <Button size="sm" appearance="secondary">
                  Alterar
                </Button>
              </div>
            </div>

            {/* Exclusão da Conta */}
            <div className="h-fit flex-1 rounded-lg border border-gray-300 bg-white px-8 py-7 ">
              <h2 className="mb-2 text-subtitle-semibold text-slate-700">
                Exclusão da Conta
              </h2>

              <h3 className="mb-3 max-w-md text-body-2-regular text-gray-500">
                Ao excluir sua conta, todos as galerias que você enviou serão
                excluídas da plataforma, seus dados serão apagados e sua conta
                será desativada permanentemente.
              </h3>

              <Button size="sm" appearance="danger">
                Desativar minha conta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
