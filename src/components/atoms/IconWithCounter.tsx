import type { ReactNode } from 'react';

interface IconWithCounterProps {
  counter?: number;
  icon: ReactNode;
}

export const IconWithCounter = ({
  counter = 0,
  icon
}: IconWithCounterProps) => {
  return (
    <div className="relative">
      {!!counter && (
        <div className="bg-primary absolute -top-3 -right-3 flex size-5 items-center justify-center rounded-full text-xs text-white">
          {counter}
        </div>
      )}
      {icon}
    </div>
  );
};
