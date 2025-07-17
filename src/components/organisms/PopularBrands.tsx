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

const brands = [
  { id: 'logo1', logo: <Logo1 /> },
  { id: 'logo2', logo: <Logo2 /> },
  { id: 'logo3', logo: <Logo3 /> },
  { id: 'logo4', logo: <Logo4 /> },
  { id: 'logo5', logo: <Logo5 /> },
  { id: 'logo6', logo: <Logo6 /> },
  { id: 'logo7', logo: <Logo7 /> },
  { id: 'logo8', logo: <Logo8 /> },
  { id: 'logo9', logo: <Logo9 /> },
  { id: 'logo10', logo: <Logo10 /> },
  { id: 'logo11', logo: <Logo11 /> },
  { id: 'logo12', logo: <Logo12 /> }
];

const PopularBrands = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-9 py-8 md:py-20 xl:w-[82.5rem]">
        <h2 className="text-4xl font-semibold">Popular Brands</h2>
        <div className="grid w-full grid-cols-2 items-center gap-x-5 gap-y-8 text-sky-900 md:flex md:flex-wrap md:justify-between md:gap-x-24 md:gap-y-12 md:p-0 dark:text-neutral-300">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center md:justify-start md:self-start"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopularBrands;
