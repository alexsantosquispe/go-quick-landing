import { CartIcon, HeartIcon, LogoIcon, MenuIcon, UserIcon } from '../../icons';

import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconWithCounter } from '../atoms/IconWithCounter';
import { Link } from '../atoms/Link';
import { NavBarItem } from '../atoms/NavBarItem';
import { SearchBar } from '../atoms/SearchBar';

const MENU_ITEMS = [
  { id: 'all-categories', label: 'All Categories' },
  { id: 'offers', label: 'Offers' },
  { id: 'today-delays', label: "Today's Deals" },
  { id: 'order-tracking', label: 'Order Tracking' }
];

export const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState(MENU_ITEMS[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavBarMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 flex w-full flex-col items-center justify-center bg-white/80 backdrop-blur-lg dark:bg-black/65">
      <div className="flex w-full items-center border-b border-neutral-200 py-1 pl-4 md:border-none md:px-4 md:py-6 xl:w-[82.5rem] xl:px-0">
        <div className="flex w-full items-center justify-between gap-x-4">
          <LogoIcon className="h-auto w-[7.5rem] xl:h-[2.125rem] xl:w-[9.75rem]" />
          <SearchBar
            hasSearchMenu={true}
            onSearch={() => {}}
            className="hidden md:flex"
          />
          <div className="hidden gap-5 pr-3 md:flex dark:text-white">
            <IconWithCounter icon={<UserIcon />} />
            <IconWithCounter counter={1} icon={<HeartIcon />} />
            <IconWithCounter counter={2} icon={<CartIcon />} />
          </div>

          <button
            className="text-default flex p-4 hover:cursor-pointer md:hidden"
            onClick={toggleNavBarMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        className={twMerge(
          'hidden w-full border-t border-gray-200 md:flex md:items-center md:justify-center dark:border-neutral-500',
          cn({ flex: isMenuOpen, hidden: !isMenuOpen })
        )}
      >
        <nav className="flex w-full flex-col md:flex-row md:items-center md:justify-between xl:w-[82.5rem]">
          <ul className="flex flex-col text-[0.875rem] md:flex-row md:items-center">
            {MENU_ITEMS.map((item) => {
              const isSelected = selectedItemId === item.id;
              return (
                <NavBarItem
                  key={item.id}
                  isSelected={isSelected}
                  setSelectedItemId={setSelectedItemId}
                  {...item}
                />
              );
            })}
          </ul>
          <div className="mx-4 flex w-fit items-center gap-1 py-[0.9375rem] text-[0.875rem]">
            Need help?
            <Link href="" label="contact@example.com" />
          </div>
        </nav>
      </div>
    </header>
  );
};
