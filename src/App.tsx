import { Input } from '@components/Input';

export function App() {
  return (
    <>
      <img src="/images/logo.svg" alt="Logo da PhotoLink" />
      <div className="flex flex-col">
        <Input label="E-mail" />
        <Input label="Senha" />
      </div>
    </>
  );
}
