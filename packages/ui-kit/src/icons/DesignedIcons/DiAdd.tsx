import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiAdd(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3104_25096)">
        <path
          d="M12 5V19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3104_25096">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
