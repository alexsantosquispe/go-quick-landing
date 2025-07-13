import { QuoteIcon } from '../../icons/QuoteIcon';

const comment =
  'Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum ultrices egestas. Neque leo praesent odio diam. Vel amet vitae pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque cursus eget mi.';

const CommentsSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[82.5rem] flex-col items-center gap-9 py-20">
        <div className="flex items-center justify-between gap-[8rem]">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold">What people say about us</h2>
            <div className="flex flex-col">
              <QuoteIcon className="dark:text-neutral-200" />
              <p className="text-xl leading-9 font-light text-sky-900 italic dark:text-neutral-200">
                {comment}
              </p>
            </div>
          </div>

          <div className="flex rounded-4xl bg-amber-100/70 p-8 dark:bg-neutral-800">
            <div className="h-[30rem] w-[30rem]">
              <img
                src="/img/people-taking.webp"
                className="h-[30rem] w-[30rem] dark:brightness-90"
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
