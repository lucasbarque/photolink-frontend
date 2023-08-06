import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import { useForgotPassword } from '@hooks/useForgotPassword';

import { LoadingStatesEnum } from '@model/loading/states';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres.')
    .required('Preencha esse campo, por favor.'),
});

interface ResetPasswordFormProps {
  password: string;
}

export function ResetPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(resetPasswordSchema),
  });
  const { requestState, checkTokenExists, changePassword } =
    useForgotPassword();
  const { token } = useParams();
  const navigate = useNavigate();

  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [mounted, setMounted] = useState(false);

  const loading = requestState === LoadingStatesEnum.PENDING;

  const onSubmit: SubmitHandler<ResetPasswordFormProps> = async ({
    password,
  }) => {
    if (token) {
      await changePassword({
        token,
        password,
      });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    (async () => {
      if (!mounted) return;
      if (token) {
        const tokenExists = await checkTokenExists({ token });
        if (tokenExists?.statusCode === 403) {
          navigate('/');
        }
        if (tokenExists?.statusCode === 406) {
          setIsTokenExpired(true);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
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
        {!isTokenExpired ? (
          <>
            <h1 className="mt-8 text-center text-subtitle-medium text-slate-700">
              Cadastre sua nova senha
            </h1>
            <p className="mt-2 text-center font-nunito-sans text-body-3-regular text-gray-400">
              Crie uma senha bem forte para proteger sua conta.
            </p>

            <div className="mt-8 w-full space-y-3">
              <Input
                label="Nova senha"
                name="password"
                error={errors.password?.message}
                control={control}
                isPassword
                placeholder="Digite sua nova senha"
              />
            </div>

            <div className="mt-8">
              <Button
                fullSize
                type="submit"
                disabled={loading}
                isLoading={loading}
              >
                Salvar senha
              </Button>
            </div>
          </>
        ) : (
          <div data-testid="expired-message">
            <h1 className="mt-8 text-center text-subtitle-medium text-slate-700">
              Esse link expirou
            </h1>
            <p className="mt-2 text-center font-nunito-sans text-body-3-regular text-gray-400">
              Parece que você acessou o e-mail de redefinição de senha muito
              tarde e a validade dele expirou. Por favor, reenvie um novo e-mail
              para redefinir sua senha.
            </p>
            <Link to="/forgot-password" className="mt-8 flex w-full flex-col">
              <Button size="sm" data-testId="button-resend-email">
                Reenviar e-mail
              </Button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
