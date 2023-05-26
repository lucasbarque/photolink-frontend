import React from 'react';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { clsx } from 'clsx';

import { MenuItem } from './MenuItem';

type DropdownMenuProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Root
>;

const DropdownMenu = ({ children, ...rest }: DropdownMenuProps) => {
  return (
    <NavigationMenuPrimitive.Root className="relative z-50" {...rest}>
      <NavigationMenuPrimitive.List className="flex flex-row rounded-lg">
        {children}
      </NavigationMenuPrimitive.List>

      <div
        className={clsx(
          'absolute flex justify-center ',
          'right-0 top-[65px] w-[240px]',
        )}
        style={{
          perspective: '2000px',
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={clsx(
            'shadow-elevation-2 relative mt-2 overflow-hidden rounded-md bg-white',
            'w-radix-navigation-menu-viewport',
            'h-radix-navigation-menu-viewport',
            'ease-[ease] origin-[top_center] transition-[width_height] duration-300',
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};
interface DropdownItem {
  title: string;
  icon?: string;
  linkProps?: NavigationMenuPrimitive.NavigationMenuLinkProps;
}

type DropdownContentProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Content
> & {
  dropdownItems: DropdownItem[];
  lastDropdownItems?: DropdownItem[];
};
const DropdownContent = ({
  dropdownItems,
  lastDropdownItems,
  ...props
}: DropdownContentProps) => (
  <NavigationMenuPrimitive.Content
    {...props}
    className={clsx(
      'border-gray-4 absolute right-0 top-0 w-[240px] rounded-lg border px-2 py-3',
    )}
  >
    <div>
      <div className="flex w-full flex-col space-y-2">
        {dropdownItems.map((dropdownItem) => (
          <DropdownMenu.Link key={dropdownItem.title}>
            <MenuItem
              variation="quaternary"
              title={dropdownItem.title}
              icon={dropdownItem?.icon}
            />
          </DropdownMenu.Link>
        ))}
      </div>
      {lastDropdownItems && (
        <>
          <hr className="text-gray-3 my-[6px]" />
          {lastDropdownItems.map((dropdownItem) => (
            <DropdownMenu.Link
              key={dropdownItem.title}
              {...dropdownItem.linkProps}
            >
              <MenuItem
                variation="quaternary"
                title={dropdownItem.title}
                icon={dropdownItem?.icon}
              />
            </DropdownMenu.Link>
          ))}
        </>
      )}
    </div>
  </NavigationMenuPrimitive.Content>
);

DropdownMenu.Item = NavigationMenuPrimitive.Item;
DropdownMenu.Trigger = NavigationMenuPrimitive.Trigger;
DropdownMenu.Content = DropdownContent;
DropdownMenu.Link = NavigationMenuPrimitive.Link;
export default DropdownMenu;
