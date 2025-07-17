import { QuoteIcon } from '../../icons/QuoteIcon';

const comment =
  'Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum ultrices egestas. Neque leo praesent odio diam. Vel amet vitae pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque cursus eget mi.';

const CommentsSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-9 py-8 md:py-20 xl:w-[82.5rem]">
        <div className="flex flex-col items-center gap-8 px-8 md:flex-row md:justify-between md:gap-[8rem] md:p-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-center text-4xl font-semibold md:text-start">
              What people say about us
            </h2>
            <div className="flex flex-col">
              <QuoteIcon className="size-6 md:size-10 dark:text-neutral-200" />
              <p className="text-sky-900 italic md:text-xl md:leading-9 md:font-light dark:text-neutral-200">
                {comment}
              </p>
            </div>
          </div>

          <div className="flex rounded-4xl bg-amber-100/70 p-8 dark:bg-neutral-800">
            <div className="h-[14rem] w-[14rem] md:h-[30rem] md:w-[30rem]">
              <img
                src="/img/people-taking.webp"
                className="h-[14rem] w-[14rem] md:h-[30rem] md:w-[30rem] dark:brightness-90"
                alt="People taking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
