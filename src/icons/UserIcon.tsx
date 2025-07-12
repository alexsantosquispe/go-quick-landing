import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../types';

export const UserIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('size-5', className)}
    >
      <g clipPath="url(#clip0_1_1503)">
        <path
          d="M10 9.57007C12.4162 9.57007 14.375 7.61132 14.375 5.19507C14.375 2.77882 12.4162 0.820068 10 0.820068C7.58375 0.820068 5.625 2.77882 5.625 5.19507C5.625 7.61132 7.58375 9.57007 10 9.57007Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.875 19.5701C1.875 17.4152 2.73102 15.3486 4.25476 13.8249C5.77849 12.3011 7.84512 11.4451 10 11.4451C12.1549 11.4451 14.2215 12.3011 15.7452 13.8249C17.269 15.3486 18.125 17.4152 18.125 19.5701"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1503">
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
