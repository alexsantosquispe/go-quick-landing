import { CategoryCard } from '../atoms/CategoryCard';

const CATEGORIES = [
  {
    id: 'meat-fish',
    title: 'Meat & Fish',
    pathImg: '/img/meat-fish.webp',
    quantity: 15,
    className: 'bg-fish dark:bg-rose-950'
  },
  {
    id: 'cooking',
    title: 'Cooking',
    pathImg: '/img/cooking.webp',
    quantity: 252,
    className: 'bg-cooking dark:bg-teal-950'
  },
  {
    id: 'beverages',
    title: 'Beverages',
    pathImg: '/img/beverages.webp',
    quantity: 35,
    className: 'bg-beverages dark:bg-yellow-950'
  },
  {
    id: 'home-cleaning',
    title: 'Home & Cleaning',
    pathImg: '/img/home-cleaning.webp',
    quantity: 80,
    className: 'bg-home dark:bg-blue-950'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    pathImg: '/img/pest-control.webp',
    quantity: 40,
    className: 'bg-control dark:bg-stone-800'
  },
  {
    id: 'office',
    title: 'Stationery & Office',
    pathImg: '/img/office.webp',
    quantity: 62,
    className: 'bg-office dark:bg-amber-950'
  }
];

const PopularCategories = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-9 py-20 xl:w-[82.5rem]">
        <h2 className="text-4xl font-semibold">Popular Categories</h2>

        <div className="flex flex-col gap-4 px-4 md:flex-row md:gap-5 md:px-0">
          <div className="flex">
            <CategoryCard
              title="Fruit & Vegetables"
              pathImg="/img/fruits-vegetables.webp"
              quantity={2}
              className="bg-fruits flex-col-reverse p-0 pt-4 md:p-0 md:pt-8 dark:bg-orange-900"
              isLarge
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {CATEGORIES.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
