import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function Cadastro() {
  return (
    <div className="flex h-screen bg-gray-200/80">
      <div className="m-auto w-[25rem] rounded-lg border-2 bg-white p-14 p-14">
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
          <Input label="Nome completo" />
          <Input label="E-mail" />
          <Input label="Celular" />
          <Input label="Senha" />
          <Input label="Confirmar senha" />
        </div>

        <div className="mt-3">
          <Button>Criar Conta</Button>
        </div>

        <div className="mt-3 text-center text-xs">
          <span>Já possui uma conta?</span>
          <span className="font-semibold text-esmerald-500 hover:cursor-pointer hover:text-esmerald-700">
            {' '}
            Voltar para o login
          </span>
        </div>
      </div>
    </div>
  );
}
