import { AppleIcon } from '../../icons/AppleIcon';
import { PlayStoreIcon } from '../../icons/PlayStoreIcon';
import { AppButton } from '../atoms/AppButton';

const description =
  'Lorem ipsum dolor sit amet consectetur. Sit in sed sed rutrum ultrices egestas. Neque leo praesent odio diam. Vel amet vitae pulvinar cursus enim sagittis enim. Cum arcu vitae non scelerisque cursus eget mi.';

export const MobileAppSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[82.5rem] flex-col items-center gap-9 py-20">
        <div className="flex items-center justify-between gap-x-[6.625rem]">
          <div className="flex w-full rounded-4xl bg-[#FEFAF1] px-[4.656rem] py-[3.594rem]">
            <img src="/img/phone.webp" className="h-[30.9375rem] w-[30.9375]" />
          </div>

          <div className="flex flex-col gap-6 px-8">
            <h2 className="text-4xl leading-12 font-semibold">
              Connecting our user with iOS & Android apps. Download from App
              Store & Play store
            </h2>
            <p className="pr-16 text-base leading-[1.875rem]">{description}</p>

            <div className="flex gap-x-[0.625rem]">
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
