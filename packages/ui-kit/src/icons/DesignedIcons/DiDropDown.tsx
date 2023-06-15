import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiDropDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3058_19065)">
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
