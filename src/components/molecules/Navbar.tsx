import { CartIcon, HeartIcon, LogoIcon, UserIcon } from '../../icons';

import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconWithCounter } from '../atoms/IconWithCounter';
import { SearchBar } from '../atoms/SearchBar';

const MENU_ITEMS = [
  { id: 'all-categories', label: 'All Categories' },
  { id: 'offers', label: 'Offers' },
  { id: 'today-delays', label: "Today's Deals" },
  { id: 'order-tracking', label: 'Order Tracking' }
];

export const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState(MENU_ITEMS[0].id);

  return (
    <header className="fixed z-50 flex w-full flex-col items-center justify-center bg-white/80 backdrop-blur-lg">
      <div className="flex w-[82.5rem] items-center py-6">
        <div className="flex w-full items-center justify-between">
          <LogoIcon />
          <SearchBar hasSearchMenu={true} onSearch={() => {}} />
          <div className="flex gap-5 pr-3">
            <IconWithCounter icon={<UserIcon />} />
            <IconWithCounter counter={1} icon={<HeartIcon />} />
            <IconWithCounter counter={2} icon={<CartIcon />} />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-t border-gray-200">
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
                        'bg-primary text-white': isSelected,
                        'hover:bg-gray-100': !isSelected
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
            <a href="" className="text-primary hover:text-primary-hover">
              contact@example.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
