import clsx from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  icon: ReactNode;
  label?: string;
  ariaLabel: string;
  onClick: () => void;
  className?: string;
  isSecondary?: boolean;
}

export const Button = ({
  icon,
  label,
  ariaLabel,
  onClick,
  className,
  isSecondary
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={twMerge(
        'bg-primary hover:bg-primary-hover flex items-center justify-center rounded-[0.3125rem] p-[0.625rem] text-white transition-colors duration-200 hover:cursor-pointer',
        clsx({
          'text-default bg-transparent hover:bg-gray-100 dark:text-white dark:hover:bg-white/15':
            isSecondary
        }),
        className
      )}
    >
      <div>{icon}</div>
      <label className={clsx('hidden', { 'text-[0.8125rem]': !!label })}>
        {label}
      </label>
    </button>
  );
};
