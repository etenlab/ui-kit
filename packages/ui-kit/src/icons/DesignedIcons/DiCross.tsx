import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiCross(props: SvgIconProps) {

  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3058_19031)">
        <path
          d="M18 6L6 18"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3058_19031">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
