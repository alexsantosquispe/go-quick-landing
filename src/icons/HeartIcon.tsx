import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../types';

export const HeartIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('size-5', className)}
    >
      <g clipPath="url(#clip0_1_1506)">
        <path
          d="M9.99997 18.3985L2.01 10.0651C1.30778 9.36348 0.844298 8.45853 0.685297 7.47864C0.526296 6.49876 0.679844 5.49369 1.12416 4.60598C1.45921 3.93608 1.94864 3.35537 2.55212 2.91172C3.1556 2.46806 3.85586 2.17414 4.59521 2.05418C5.33456 1.93423 6.09182 1.99167 6.80462 2.22177C7.51741 2.45187 8.16533 2.84804 8.695 3.37764L9.99997 4.68181L11.305 3.37764C11.8347 2.84804 12.4826 2.45187 13.1954 2.22177C13.9082 1.99167 14.6655 1.93423 15.4048 2.05418C16.1442 2.17414 16.8444 2.46806 17.4479 2.91172C18.0514 3.35537 18.5408 3.93608 18.8759 4.60598C19.3196 5.49335 19.4729 6.49782 19.314 7.47715C19.1552 8.45647 18.6923 9.361 17.9909 10.0626L9.99997 18.3985Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1506">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.195068)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
