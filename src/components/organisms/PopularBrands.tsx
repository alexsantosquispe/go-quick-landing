import { Logo1 } from '../../assets/Logo1';
import { Logo10 } from '../../assets/Logo10';
import { Logo11 } from '../../assets/Logo11';
import { Logo12 } from '../../assets/Logo12';
import { Logo2 } from '../../assets/Logo2';
import { Logo3 } from '../../assets/Logo3';
import { Logo4 } from '../../assets/Logo4';
import { Logo5 } from '../../assets/Logo5';
import { Logo6 } from '../../assets/Logo6';
import { Logo7 } from '../../assets/Logo7';
import { Logo8 } from '../../assets/Logo8';
import { Logo9 } from '../../assets/Logo9';

export const PopularBrands = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[82.5rem] flex-col items-center gap-9 py-20">
        <h2 className="text-4xl font-semibold">Popular Brands</h2>
        <div className="flex w-full flex-wrap items-center justify-between gap-x-24 gap-y-12 text-sky-900">
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
          <Logo6 />
          <Logo7 />
          <Logo8 />
          <Logo9 />
          <Logo10 />
          <Logo11 />
          <Logo12 />
        </div>
      </div>
    </div>
  );
};
