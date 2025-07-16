import { CartIcon, HeartIcon, LogoIcon, MenuIcon, UserIcon } from '../../icons';

import { IconWithCounter } from '../atoms/IconWithCounter';
import { Link } from '../atoms/Link';
import { SearchBar } from '../atoms/SearchBar';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const MENU_ITEMS = [
  { id: 'all-categories', label: 'All Categories' },
  { id: 'offers', label: 'Offers' },
  { id: 'today-delays', label: "Today's Deals" },
  { id: 'order-tracking', label: 'Order Tracking' }
];

export const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState(MENU_ITEMS[0].id);

  return (
    <header className="fixed z-50 flex w-full flex-col items-center justify-center bg-white/80 backdrop-blur-lg dark:bg-black/65">
      <div className="flex w-full items-center border-b border-neutral-200 py-1 pl-4 md:border-none md:py-6 xl:w-[82.5rem] xl:px-0">
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

          <button className="text-default flex p-4 hover:cursor-pointer md:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className="hidden w-full items-center justify-center border-t border-gray-200 md:flex dark:border-neutral-500">
        <nav className="flex w-[82.5rem] items-center justify-between">
          <ul className="flex items-center text-[0.875rem]">
            {MENU_ITEMS.map((item) => {
              const isSelected = selectedItemId === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={twMerge(
                      'flex w-[10.5625rem] items-center justify-center py-[0.9375rem] leading-5 hover:cursor-pointer',
                      cn({
                        'bg-primary font-semibold text-white': isSelected,
                        'hover:bg-neutral-100 dark:hover:bg-neutral-600':
                          !isSelected
                      })
                    )}
                    onClick={() => setSelectedItemId(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex w-fit items-center gap-1 text-[0.875rem]">
            Need help?
            <Link href="" label="contact@example.com" />
          </div>
        </nav>
      </div>
    </header>
  );
};
