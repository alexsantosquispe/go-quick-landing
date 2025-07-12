import { DeliveryIcon } from '../../icons';
import { QAIcon } from '../../icons/QAIcon';
import { SearchBar } from '../atoms/SearchBar';

export const Hero = () => {
  return (
    <div className="mt-[9.25rem] flex h-[35.6rem] w-full bg-[url('img/groceries-bg.webp')] bg-cover">
      <div className="flex h-full w-full justify-center bg-black/5">
        <div className="flex w-[82.5rem] flex-col gap-y-5 self-center">
          <h1 className="max-w-[33rem] text-[3.4375rem] leading-16 font-bold text-neutral-900">
            We Delivered
            <br />
            to your Doorstep
          </h1>

          <SearchBar
            onSearch={() => {}}
            className="max-w-[33rem] border-none bg-white"
            placeholder="Search for products..."
          />

          <div className="flex items-center gap-8 text-neutral-600">
            <div className="flex items-center gap-[0.625rem]">
              <DeliveryIcon className="text-accent" />
              <span>Delivery from 2-4 hour</span>
            </div>
            <div className="flex items-center gap-[0.625rem]">
              <QAIcon className="text-accent" />
              <span>Quality assurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
