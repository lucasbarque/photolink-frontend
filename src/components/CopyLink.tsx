import { Icon } from './Icon';

interface CopyLinkProps {
  label: string;
}

export function CopyLink({ label }: CopyLinkProps) {
  return (
    <div className="">
      <label className="text-body-3-medium text-gray-500">{label}</label>
      <div className="mt-1 flex h-11 items-center gap-3 rounded-md border border-gray-200 pl-4 pr-[6px]">
        <Icon icon="create-link" className="text-gray-500" size={24} />
        <span
          title="https://www.photolink.com.br/sdfasdfasdf"
          className="overflow-hidden text-gray-600"
        >
          https://www.photolink.com.br/sdfasdfasdf
        </span>
        <button className="flex items-center justify-center rounded-md bg-esmerald-500 px-3 py-[6.5px] text-body-3-medium text-white">
          Copiar
        </button>
      </div>
    </div>
  );
}
