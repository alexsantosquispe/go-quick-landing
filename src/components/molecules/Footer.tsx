import { AppleIcon } from '../../icons/AppleIcon';
import { PlayStoreIcon } from '../../icons/PlayStoreIcon';
import { AppButton } from '../atoms/AppButton';

const ColumnTitle = ({ title }: { title: string }) => {
  return (
    <span className="text-[1.0625rem] leading-6 font-medium">{title}</span>
  );
};

export const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-200">
      <div className="flex w-[82.5rem] justify-between p-[3.1875rem]">
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
            <a
              href=""
              className="text-primary hover:text-primary-hover text-base underline"
            >
              contact@example.com
            </a>
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
