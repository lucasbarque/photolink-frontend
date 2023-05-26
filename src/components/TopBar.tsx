import { Avatar } from './Avatar';
import { Icon } from './Icon';

export function TopBar() {
  return (
    <div className="border-b-gray-2 flex h-[84px] w-full items-center justify-between border-b-[1px] px-[86px]">
      <img src="/images/logo.svg" alt="logo" />
      <div className="flex items-center gap-5">
        <Icon icon="bell" size={32} className="text-gray-500" />

        <div className="flex cursor-pointer items-center">
          <Avatar />
          <span className="text-black ml-3">Lucas Barque</span>
          <Icon icon="chev-down" size={20} className="ml-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
