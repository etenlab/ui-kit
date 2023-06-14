import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiCheck(props: SvgIconProps) {

  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3058_19062)">
        <path
          d="M5 12L10 17L20 7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3058_19062">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
