import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface NavBarItemProps {
  id: string;
  label: string;
  isSelected: boolean;
  setSelectedItemId: (value: string) => void;
}

export const NavBarItem = ({
  id,
  label,
  isSelected,
  setSelectedItemId
}: NavBarItemProps) => {
  return (
    <li key={id}>
      <button
        className={twMerge(
          'flex w-full items-center border-b border-gray-200 px-4 py-[0.9375rem] leading-5 hover:cursor-pointer md:w-[10.5625rem] md:justify-center md:border-none md:px-0',
          cn({
            'bg-primary font-semibold text-white': isSelected,
            'hover:bg-neutral-100 dark:hover:bg-neutral-600': !isSelected
          })
        )}
        onClick={() => setSelectedItemId(id)}
      >
        {label}
      </button>
    </li>
  );
};
