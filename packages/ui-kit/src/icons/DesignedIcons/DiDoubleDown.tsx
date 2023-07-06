import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiDoubleDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_4047_24183)">
        <path
          d="M7 7L12 12L17 7"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 13L12 18L17 13"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4047_24183">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
