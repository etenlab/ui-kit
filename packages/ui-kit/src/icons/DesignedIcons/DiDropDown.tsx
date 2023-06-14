import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiDropDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3058_19065)">
        <path
          d="M6 9L12 15L18 9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3058_19065">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
