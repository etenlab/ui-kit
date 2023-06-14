import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiMap(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3080_35059)">
        <g clip-path="url(#clip1_3080_35059)">
          <path
            d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 4V17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 7V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3080_35059">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3080_35059">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
