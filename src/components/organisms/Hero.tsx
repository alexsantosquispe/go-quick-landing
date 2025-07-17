import { DeliveryIcon } from '../../icons';
import { QAIcon } from '../../icons/QAIcon';
import { LabelWithIcon } from '../atoms/LabelWithIcon';
import { SearchBar } from '../atoms/SearchBar';

export const Hero = () => {
  return (
    <div className="mt-16 flex w-full md:mt-[var(--header-height)] md:h-[35.6rem] md:bg-[url('/img/main-bg.webp')] md:bg-cover">
      <div className="flex h-full w-full justify-center bg-black/5 dark:bg-black/55">
        <div className="flex flex-col items-center gap-y-5 self-center py-8 md:items-start md:p-0 xl:w-[82.5rem]">
          <h1 className="px-6 pb-8 text-center text-5xl leading-12 font-bold md:max-w-[33rem] md:p-0 md:text-left md:text-[3.4375rem] md:leading-16">
            We Delivered
            <br />
            to your Doorstep
          </h1>

          <SearchBar
            onSearch={() => {}}
            className="bg-white md:max-w-[33rem] md:border-none dark:bg-neutral-700"
            placeholder="Search for products..."
          />

          <div className="flex flex-col items-center gap-4 text-neutral-700 md:flex-row md:gap-8">
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
