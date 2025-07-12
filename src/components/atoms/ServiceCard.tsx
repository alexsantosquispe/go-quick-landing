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
    <article className="flex flex-col justify-center gap-6 px-[1.125rem]">
      <div className="h-[14.625rem] w-[16.875rem]">
        <img
          src={pathImg}
          className="h-[14.625rem] w-[16.875rem] transition-all duration-300 hover:scale-110"
          alt={`Service ${title}`}
        />
      </div>

      <div className="flex max-w-[19.0625rem] flex-col items-center justify-center gap-4 text-center">
        <span className="text-[1.1875rem] font-semibold">{title}</span>
        <p className="leading-[1.875rem]">{description}</p>
      </div>
    </article>
  );
};
