import { twMerge } from 'tailwind-merge';

interface CategoryCardProps {
  pathImg: string;
  title: string;
  quantity: number;
  className?: string;
  isLarge?: boolean;
}

export const CategoryCard = ({
  pathImg,
  title,
  quantity,
  className,
  isLarge = false
}: CategoryCardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center gap-[1.375rem] overflow-hidden rounded-[0.9375rem] bg-gray-100 p-4 md:px-[2.625rem] md:py-8',
        className
      )}
    >
      {isLarge ? (
        <div className="relative">
          <div className="absolute bottom-0 flex h-[13.8125rem] w-full bg-orange-400 dark:bg-orange-950" />
          <img
            src={pathImg}
            className="h-auto w-[29rem] scale-100 transition-all duration-200 hover:scale-110 dark:brightness-75"
            alt={`Category ${title}`}
          />
        </div>
      ) : (
        <div className="h-32 w-32 md:h-[10.3125rem] md:w-[10.3125rem]">
          <img
            src={pathImg}
            className="h-32 w-32 transition-all duration-200 hover:scale-110 md:h-[10.3125rem] md:w-[10.3125rem] dark:brightness-75"
            alt={`Category ${title}`}
          />
        </div>
      )}

      <div className="flex flex-col items-center gap-[0.625rem]">
        <span className="text-sm font-bold md:text-[1.25rem] md:font-medium">
          {title}
        </span>
        <span className="text-sm text-neutral-600 dark:text-neutral-200">{`${quantity} items`}</span>
      </div>
    </div>
  );
};
