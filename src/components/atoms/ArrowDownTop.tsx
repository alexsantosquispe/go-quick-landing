import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../../types';

export const ArrowDownTop = ({ className }: SvgIconProps) => {
  return (
    <svg
      width="173"
      height="38"
      viewBox="0 0 173 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <g clipPath="url(#clip0_1_431)">
        <g clipPath="url(#clip1_1_431)">
          <path
            d="M1.25 9.46352C1.25 9.46352 78.9215 69.6548 165.345 9.46352"
            stroke="#C2CBDE"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />
          <path
            d="M152.906 3.75968C152.906 3.75968 168.992 -0.89092 170.525 4.37788C172.059 9.64658 170.908 15.0949 165.929 22.5591"
            stroke="#C2CBDE"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_431">
          <rect
            width="172"
            height="37"
            fill="white"
            transform="matrix(1 0 0 -1 0.25 37.45)"
          />
        </clipPath>
        <clipPath id="clip1_1_431">
          <rect
            width="172"
            height="37"
            fill="white"
            transform="matrix(1 0 0 -1 0.25 37.45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
