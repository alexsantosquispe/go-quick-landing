import type { ReactNode } from 'react';

interface AppButtonProps {
  title: string;
  icon: ReactNode;
}

export const AppButton = ({ title, icon }: AppButtonProps) => {
  return (
    <button className="flex rounded-[0.625rem] bg-sky-950 py-3 text-white">
      <div className="flex items-center justify-center px-4 py-0">{icon}</div>
      <div className="flex flex-col gap-[0.3125rem] pr-4 text-start">
        <span className="text-xs text-white/80">Download on the</span>
        <span className="text-[0.9375rem] leading-[1.125rem] font-medium">
          {title}
        </span>
      </div>
    </button>
  );
};
