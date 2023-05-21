import { BsGoogle } from 'react-icons/bs';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function Login() {
  return (
    <div className="flex h-screen w-screen">
      {/* Esquerdo */}
      <div className="w-[420px] px-14">
        <div className="flex h-full w-full flex-col justify-center">
          <img
            src="/images/logo.svg"
            alt="Logo da PhotoLink"
            width="155"
            className="mx-auto"
          />
          <div className="mt-8 flex w-full flex-col gap-3">
            <Input label="E-mail" />
            <Input label="Senha" />
          </div>
          <a
            href="#"
            className="mt-3 w-full text-right text-sm font-normal text-esmerald-500 hover:text-esmerald-700"
          >
            Esqueceu sua senha?
          </a>
          <div className="mt-8">
            <Button>Entrar</Button>
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            Ainda não possui uma conta?{' '}
            <a
              href="#"
              className=" font-semibold text-esmerald-500 hover:text-esmerald-700"
            >
              Criar uma conta
            </a>
          </p>
          <div className="mt-8 flex items-center gap-2">
            <span className="h-[1px] w-full bg-gray-300" />
            <span className="whitespace-nowrap text-xs text-gray-400">
              Ou entre com
            </span>
            <span className="h-[1px] w-full bg-gray-300" />
          </div>

          <div className="mt-2 flex gap-2">
            <Button size="sm" appearance="secondary">
              <span className="flex items-center gap-2">
                <BsGoogle size={16} />
                Google
              </span>
            </Button>
          </div>
        </div>
      </div>
      {/* Direito */}
      <img className="flex-1" src="/images/dinossauro.jpg" alt="" />
    </div>
  );
}
