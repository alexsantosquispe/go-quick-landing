import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../../types';

export const ArrowTopDown = ({ className }: SvgIconProps) => {
  return (
    <svg
      width="173"
      height="37"
      viewBox="0 0 173 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <g clipPath="url(#clip0_1_258)">
        <g clipPath="url(#clip1_1_258)">
          <path
            d="M1.6001 27.9863C1.6001 27.9863 79.2716 -32.205 165.695 27.9863"
            stroke="#C2CBDE"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />
          <path
            d="M153.256 33.6901C153.256 33.6901 169.342 38.3407 170.875 33.0719C172.409 27.8032 171.258 22.3549 166.279 14.8907"
            stroke="#C2CBDE"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_258">
          <rect
            width="172"
            height="37"
            fill="white"
            transform="translate(0.600098 -0.00012207)"
          />
        </clipPath>
        <clipPath id="clip1_1_258">
          <rect
            width="172"
            height="37"
            fill="white"
            transform="translate(0.600098 -0.00012207)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
