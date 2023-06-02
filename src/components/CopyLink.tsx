import { Button } from './Button';
import { Icon } from './Icon';

interface CopyLinkProps {
  label: string;
}

export function CopyLink({ label }: CopyLinkProps) {
  return (
    <div className="">
      <label className="select-none text-body-3-medium text-gray-500">
        {label}
      </label>
      <div className="mt-1 flex h-11 items-center gap-3 rounded-md border border-gray-200 pl-4 pr-[6px]">
        <Icon icon="create-link" className="text-gray-500" size={24} />
        <span
          title="https://www.photolink.com.br/sdfasdfasdf"
          className="hide-scrollbar overflow-x-auto text-slate-700"
        >
          https://www.photolink.com.br/sdfasdfasdf
        </span>
        <div className="select-none">
          <Button size="tn">Copiar</Button>
        </div>
      </div>
    </div>
  );
}
