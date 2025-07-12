import { ArrowDownTop } from '../atoms/ArrowDownTop';
import { ArrowTopDown } from '../atoms/ArrowTopDown';
import { ServiceCard } from '../atoms/ServiceCard';

const SERVICES = [
  {
    pathImg: '/img/qa-engineers.webp',
    title: 'Quality assurance',
    description:
      'Lorem ipsum dolor sit amet consectetur. Id eget condimentum elementum'
  },
  {
    pathImg: '/img/delivery.webp',
    title: 'Delivery from 2-4 hour',
    description:
      'Lorem ipsum dolor sit amet consectetur. Id eget condimentum elementum'
  },
  {
    pathImg: '/img/payment-product.webp',
    title: 'Pay after receiving products',
    description:
      'Lorem ipsum dolor sit amet consectetur. Id eget condimentum elementum'
  }
];

export const OurService = () => {
  return (
    <div className="flex w-full justify-center py-20">
      <ServiceCard {...SERVICES[0]} />
      <ArrowTopDown className="mt-20" />
      <ServiceCard {...SERVICES[1]} />
      <ArrowDownTop className="mt-30" />
      <ServiceCard {...SERVICES[2]} />
    </div>
  );
};
