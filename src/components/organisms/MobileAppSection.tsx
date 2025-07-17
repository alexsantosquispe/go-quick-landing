import { AppleIcon } from '../../icons/AppleIcon';
import { PlayStoreIcon } from '../../icons/PlayStoreIcon';
import { AppButton } from '../atoms/AppButton';

const description =
  'Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum ultrices egestas. Neque leo praesent odio diam. Vel amet vitae pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque cursus eget mi.';

const MobileAppSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-9 md:py-20 xl:w-[82.5rem]">
        <div className="flex flex-col-reverse items-center gap-12 px-4 py-8 md:flex-row md:justify-between md:gap-x-[6.625rem] md:p-0">
          <div className="flex w-full justify-center rounded-4xl bg-amber-100/70 md:justify-start md:px-[4rem] dark:bg-neutral-800">
            <div className="h-[15rem] w-[15rem] md:h-[30.9375rem] md:w-[30.9375rem]">
              <img
                src="/img/phone.webp"
                className="h-[15rem] w-[15rem] transition-all duration-300 hover:scale-110 md:h-[30.9375rem] md:w-[30.9375rem] dark:brightness-90"
                alt="Mobile app image"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4 md:px-8">
            <h2 className="text-4xl leading-12 font-semibold">
              Connecting our user with iOS & Android apps. Download from App
              Store & Play store
            </h2>
            <p className="text-base leading-[1.875rem] md:pr-16">
              {description}
            </p>

            <div className="flex justify-center gap-x-[0.625rem] md:justify-start">
              <AppButton
                title="App Store"
                icon={
                  <AppleIcon className="h-[1.875rem] w-[1.875rem] text-white" />
                }
              />
              <AppButton
                title="Google Play"
                icon={
                  <PlayStoreIcon className="h-[1.875rem] w-[1.875rem] text-white" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
