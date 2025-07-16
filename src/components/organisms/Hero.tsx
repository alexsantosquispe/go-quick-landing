import { DeliveryIcon } from '../../icons';
import { LabelWithIcon } from '../atoms/LabelWithIcon';
import { QAIcon } from '../../icons/QAIcon';
import { SearchBar } from '../atoms/SearchBar';

export const Hero = () => {
  return (
    <div className="mt-16 flex h-[35.6rem] w-full bg-[url('/img/main-bg.webp')] bg-cover md:mt-[var(--header-height)]">
      <div className="flex h-full w-full justify-center bg-black/5 dark:bg-black/55">
        <div className="flex w-[82.5rem] flex-col gap-y-5 self-center">
          <h1 className="max-w-[33rem] text-[3.4375rem] leading-16 font-bold">
            We Delivered
            <br />
            to your Doorstep
          </h1>

          <SearchBar
            onSearch={() => {}}
            className="max-w-[33rem] border-none bg-white dark:bg-neutral-700"
            placeholder="Search for products..."
          />

          <div className="flex items-center gap-8 text-neutral-700">
            <LabelWithIcon
              icon={<DeliveryIcon />}
              label="Delivery from 2-4 hour"
            />
            <LabelWithIcon icon={<QAIcon />} label="Quality assurance" />
          </div>
        </div>
      </div>
    </div>
  );
};
