import { Link } from 'react-router-dom';

import { Avatar } from './Avatar';
import DropdownMenu from './DropdownMenu';
import { Icon } from './Icon';

export function TopBar() {
  return (
    <div className="border-b-gray-2 flex h-[84px] w-full items-center justify-between border-b-[1px] px-8 md:px-[86px]">
      <Link to="/galleries">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <div className=" hidden items-center gap-5 sm:flex">
        <DropdownMenu>
          <DropdownMenu.Item>
            <DropdownMenu.Trigger>
              <div className="group flex cursor-pointer items-center">
                <Avatar />
                <span className="ml-3 text-body-2-semibold text-gray-700">
                  Lucas Barque
                </span>
                <Icon
                  icon="chev-down"
                  size={20}
                  className="ml-1 text-gray-500 transition duration-300 group-hover:rotate-180"
                />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              dropdownItems={[
                {
                  icon: 'account',
                  linkProps: { href: '#' },
                  title: 'Meus dados',
                },
                {
                  icon: 'campaign',
                  linkProps: { href: '#' },
                  title: 'Minhas galerias',
                },
                {
                  icon: 'settings',
                  linkProps: { href: '#' },
                  title: 'Configurações',
                },
              ]}
              lastDropdownItems={[
                { icon: 'logout', linkProps: { href: '/' }, title: 'Sair' },
              ]}
            />
          </DropdownMenu.Item>
        </DropdownMenu>
      </div>
    </div>
  );
}
