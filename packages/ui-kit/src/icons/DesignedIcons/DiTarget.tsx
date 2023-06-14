import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiTarget(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3188_24699)">
        <g clip-path="url(#clip1_3188_24699)">
          <path
            d="M20 12H10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 12L16 16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 12L16 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 4V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3188_24699">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3188_24699">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
