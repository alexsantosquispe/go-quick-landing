import { SearchIcon, SearchMenuIcon } from '../../icons';

import { Button } from './Button';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  hasSearchMenu?: boolean;
  className?: string;
}

export const SearchBar = ({
  onSearch,
  placeholder = 'Search for product...',
  hasSearchMenu = false,
  className
}: SearchBarProps) => {
  return (
    <div
      className={twMerge(
        'flex w-fit overflow-hidden rounded-[0.625rem] border border-gray-200 dark:border-neutral-500',
        className
      )}
    >
      {hasSearchMenu && (
        <Button
          className="rounded-none p-1 px-3.5"
          onClick={() => {
            console.log('Search menu clicked');
          }}
          ariaLabel="Search menu"
          icon={<SearchMenuIcon className="size-[2.1875rem]" />}
          isSecondary={true}
        />
      )}

      <div
        className={twMerge(
          'flex min-w-80 flex-1 p-1 xl:w-[34.625rem]',
          cn({
            'border-l border-gray-200 dark:border-neutral-500': hasSearchMenu
          })
        )}
      >
        <input
          type="search"
          placeholder={placeholder}
          className="mr-1 w-full px-[1.0625rem] text-[0.8125rem] placeholder:text-neutral-600 dark:placeholder:text-neutral-300"
        />
        <Button
          onClick={() => onSearch('')}
          ariaLabel="Search"
          icon={<SearchIcon />}
        />
      </div>
    </div>
  );
};
