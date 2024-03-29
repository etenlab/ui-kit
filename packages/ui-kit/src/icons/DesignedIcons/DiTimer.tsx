import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiTimer(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_1643_15064)">
        <g clipPath="url(#clip1_1643_15064)">
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7V12L15 15"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1643_15064">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_1643_15064">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
