interface ServiceCardProps {
  pathImg: string;
  title: string;
  description: string;
}

export const ServiceCard = ({
  pathImg,
  title,
  description
}: ServiceCardProps) => {
  return (
    <article className="flex flex-col items-center justify-center gap-3 px-[1.125rem] md:items-start md:gap-6">
      <div className="h-[14.625rem] w-[16.875rem]">
        <img
          src={pathImg}
          className="h-[14.625rem] w-[16.875rem] transition-all duration-300 hover:scale-110 dark:brightness-75"
          alt={`Service ${title}`}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 text-center md:max-w-[19.0625rem] md:gap-4">
        <span className="text-[1.1875rem] font-semibold">{title}</span>
        <p className="leading-[1.875rem]">{description}</p>
      </div>
    </article>
  );
};
