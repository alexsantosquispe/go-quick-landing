import { CategoryCard } from '../atoms/CategoryCard';

const CATEGORIES = [
  {
    id: 'meat-fish',
    title: 'Meat & Fish',
    pathImg: '/img/meat-fish.webp',
    quantity: 15,
    className: 'bg-fish'
  },
  {
    id: 'cooking',
    title: 'Cooking',
    pathImg: '/img/cooking.webp',
    quantity: 252,
    className: 'bg-cooking'
  },
  {
    id: 'beverages',
    title: 'Beverages',
    pathImg: '/img/beverages.webp',
    quantity: 35,
    className: 'bg-beverages'
  },
  {
    id: 'home-cleaning',
    title: 'Home & Cleaning',
    pathImg: '/img/home-cleaning.webp',
    quantity: 80,
    className: 'bg-home'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    pathImg: '/img/pest-control.webp',
    quantity: 40,
    className: 'bg-control'
  },
  {
    id: 'office',
    title: 'Stationery & Office',
    pathImg: '/img/office.webp',
    quantity: 62,
    className: 'bg-office'
  }
];

export const PopularCategories = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[82.5rem] flex-col items-center gap-9 py-20">
        <h2 className="text-4xl font-semibold">Popular Categories</h2>

        <div className="flex gap-5">
          <div className="flex">
            <CategoryCard
              title="Fruit & Vegetables"
              pathImg="/img/fruits-vegetables.webp"
              quantity={2}
              className="bg-fruits flex-col-reverse p-0 pt-8"
              isLarge
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            {CATEGORIES.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
