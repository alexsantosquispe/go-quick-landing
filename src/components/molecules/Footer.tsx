import { AppleIcon } from '../../icons/AppleIcon';
import { PlayStoreIcon } from '../../icons/PlayStoreIcon';
import { AppButton } from '../atoms/AppButton';
import { Link } from '../atoms/Link';

const ColumnTitle = ({ title }: { title: string }) => {
  return (
    <span className="text-[1.0625rem] leading-6 font-medium">{title}</span>
  );
};

export const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-neutral-200 dark:bg-neutral-800">
      <div className="grid grid-cols-2 gap-4 px-4 py-8 md:flex md:flex-row md:justify-between md:gap-0 md:px-0 md:py-[3.1875rem] xl:w-[82.5rem]">
        <div className="flex flex-col gap-[1.25rem]">
          <ColumnTitle title="Download our app" />
          <div className="flex flex-col gap-y-[0.625rem]">
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

        <div className="flex flex-col gap-[1.25rem]">
          <ColumnTitle title="Need help" />
          <div className="flex flex-col gap-y-[0.625rem] text-xl font-medium">
            <span>+88012345678910</span>
            <span>+88095645671212</span>
            <Link
              href=""
              label="contact@example.com"
              className="text-base font-normal"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[1.25rem]">
          <ColumnTitle title="Customer" />
          <ul className="flex flex-col gap-y-2">
            <li>My account</li>
            <li>My orders</li>
            <li>Return orders</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[1.25rem]">
          <ColumnTitle title="Information" />
          <ul className="flex flex-col gap-y-2">
            <li>About us</li>
            <li>Contact us</li>
            <li>Shipping & return</li>
            <li>FAQ</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
