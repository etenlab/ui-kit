import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiArrowLeft(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3104_25070)">
        <path
          d="M19 12H5"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L5 12L12 5"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3104_25070">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
