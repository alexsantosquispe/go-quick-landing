import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelWithIconProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export const LabelWithIcon = ({
  icon,
  label,
  className
}: LabelWithIconProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center gap-[0.625rem] dark:text-white',
        className
      )}
    >
      <div className="text-accent dark:text-orange-500">{icon}</div>
      <span>{label}</span>
    </div>
  );
};
