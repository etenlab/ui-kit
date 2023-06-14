import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiArrowRight(props: SvgIconProps) {

  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_1643_15053)">
        <path
          d="M5 12H19"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 18L19 12"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 6L19 12"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1643_15053">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
