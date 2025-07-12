import { SearchIcon, SearchMenuIcon } from '../../icons';

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
        'flex w-fit rounded-[0.625rem] border border-gray-200',
        className
      )}
    >
      {hasSearchMenu && (
        <button
          className="p-1 px-3.5 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100"
          onClick={() => {
            console.log('Search menu clicked');
          }}
        >
          <SearchMenuIcon className="size-[2.1875rem]" />
        </button>
      )}

      <div
        className={twMerge(
          'flex w-[34.625rem] p-1',
          cn({ 'border-l border-gray-200': hasSearchMenu })
        )}
      >
        <input
          type="search"
          placeholder={placeholder}
          className="mr-1 w-full px-[1.0625rem] text-[0.8125rem] placeholder:text-neutral-600"
        />
        <button
          onClick={() => onSearch('')}
          className="bg-primary hover:bg-primary-hover rounded-[0.3125rem] p-[0.625rem] text-white transition-colors duration-200 hover:cursor-pointer"
        >
          <div className="size-5">
            <SearchIcon />
          </div>
        </button>
      </div>
    </div>
  );
};
