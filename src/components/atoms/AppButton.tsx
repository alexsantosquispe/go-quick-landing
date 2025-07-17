import type { ReactNode } from 'react';

interface AppButtonProps {
  title: string;
  icon: ReactNode;
}

export const AppButton = ({ title, icon }: AppButtonProps) => {
  return (
    <button className="flex rounded-[0.625rem] bg-sky-950 py-3 text-white dark:bg-neutral-600 dark:text-neutral-100">
      <div className="flex items-center justify-center px-2 py-0 md:px-4">
        {icon}
      </div>
      <div className="flex flex-col justify-center gap-[0.3125rem] pr-4 text-start text-xs">
        <span className="hidden text-white/80 md:block dark:text-neutral-300">
          Download on the
        </span>
        <span className="leading-[1.125rem] font-medium md:text-[0.9375rem]">
          {title}
        </span>
      </div>
    </button>
  );
};
