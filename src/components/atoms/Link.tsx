import { twMerge } from 'tailwind-merge';

interface LinkProps {
  href: string;
  label: string;
  className?: string;
}

export const Link = ({ href, label, className }: LinkProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        'text-primary dark:text-primary-hover hover:underline',
        className
      )}
    >
      {label}
    </a>
  );
};
