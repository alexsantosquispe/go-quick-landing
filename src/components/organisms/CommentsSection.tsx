import { QuoteIcon } from '../../icons/QuoteIcon';

const comment =
  'Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum ultrices egestas. Neque leo praesent odio diam. Vel amet vitae pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque cursus eget mi.';

export const CommentsSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[82.5rem] flex-col items-center gap-9 py-20">
        <div className="flex items-center justify-between gap-[7.75rem]">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold">What people say about us</h2>
            <div className="flex flex-col">
              <QuoteIcon />
              <p className="text-xl leading-9 font-light text-sky-900 italic">
                {comment}
              </p>
            </div>
          </div>
          <img
            src="/img/people-taking.webp"
            className="h-[35.5625rem] w-[43.3125rem]"
          />
        </div>
      </div>
    </div>
  );
};
