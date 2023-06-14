import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiSource(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3188_24420)">
        <g clip-path="url(#clip1_3188_24420)">
          <path
            d="M14 12H4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 12L10 16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 12L10 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 4V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3188_24420">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3188_24420">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
